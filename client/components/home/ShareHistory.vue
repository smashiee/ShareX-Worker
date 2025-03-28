<script setup lang="ts">
import type {
	ColumnDef,
	ColumnFiltersState,
	VisibilityState,
} from '@tanstack/vue-table'

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import {
	FlexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useVueTable,
} from '@tanstack/vue-table'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import ShareDropdown from './ShareDropdown.vue'

import { h, onMounted, ref } from 'vue'
import { valueUpdater } from '@/lib/utils'
import type { Shareable } from '~/share'

import { useApiStore } from '@/stores/api';
const apiStore = useApiStore();

const data = ref<Shareable[]>([]);

onMounted(async () => {
	data.value = await apiStore.getShares();
})

const columns: ColumnDef<Shareable>[] = [
	{
		accessorKey: 'creationDate',
		header: 'Created',
		cell: ({ row }) => {
			const date = new Date(row.getValue('creationDate'));

			return date.toLocaleDateString() + ' - ' + date.toLocaleTimeString();
		}
	},

	{
		accessorKey: 'type',
		header: 'Type',
		cell: ({ row }) => row.original.url ? 'URL' : 'File',
	},
	{
		id: 'content',
		accessorKey: 'fileName',
		header: 'Content',
		cell: ({ row }) => row.original.url ?? row.original.fileName,
		filterFn: (row, columnId, filterValue) => {
			return (row.original.url ?? row.original.fileName)?.toLowerCase().includes(filterValue.toLowerCase()) ?? false;
		},
	},

	{
		id: 'actions',
		enableHiding: false,
		cell: ({ row }) => {
			const share = row.original;
			return h(ShareDropdown, {
				share
			})
		},
	},
]

const columnFilters = ref<ColumnFiltersState>([])
const columnVisibility = ref<VisibilityState>({})

const table = useVueTable({
	data,
	columns,
	getCoreRowModel: getCoreRowModel(),
	getPaginationRowModel: getPaginationRowModel(),
	getSortedRowModel: getSortedRowModel(),
	getFilteredRowModel: getFilteredRowModel(),
	onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
	onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
	state: {
		get columnFilters() { return columnFilters.value },
		get columnVisibility() { return columnVisibility.value },
	},
	initialState: {
		pagination: {
			pageSize: 20
		},
	}
})
</script>

<template>
	<div class="w-full h-full">
		<div class="flex items-center py-4">
			<Input
				class="max-w-sm"
				placeholder="Search shares..."
				:model-value="table.getColumn('content')?.getFilterValue() as string"
				@update:model-value=" table.getColumn('content')?.setFilterValue($event)"
			/>
		</div>
		<div class="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
						<TableHead v-for="header in headerGroup.headers" :key="header.id">
						<FlexRender v-if="!header.isPlaceholder" :render="header.column.columnDef.header" :props="header.getContext()" />
						</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<template v-if="table.getRowModel().rows?.length">
						<template v-for="row in table.getRowModel().rows" :key="row.id">
						<TableRow>
							<TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
								<FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
							</TableCell>
						</TableRow>
						</template>
					</template>

					<TableRow v-else>
						<TableCell
							:colspan="columns.length"
							class="h-24 text-center"
							>
							No results.
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>

		<div class="flex items-center justify-end space-x-2 py-4">
			<div class="flex-1 text-sm text-muted-foreground">
				{{ table.getFilteredRowModel().rows.length }} row(s) shown.
			</div>
			<div class="space-x-2">
				<Button
					variant="outline"
					size="sm"
					:disabled="!table.getCanPreviousPage()"
					@click="table.previousPage()"
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					:disabled="!table.getCanNextPage()"
					@click="table.nextPage()"
				>
					Next
				</Button>
			</div>
		</div>
	</div>
	</template>