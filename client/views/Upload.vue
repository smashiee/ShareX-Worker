<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ref } from 'vue';

import { useApiStore } from '@/stores/api';
const apiStore = useApiStore();
apiStore.isPageLoaded = true;

const fileInput = ref<HTMLInputElement | null>(null)
const file = ref<File | null>();
const onFileChanged = async (e: any) => {
	const target = e.target as HTMLInputElement;
	const files = target.files;

	if (!files || !files[0])
		return;


	file.value = files[0];
}

const onSubmit = async () => {
	if (file.value != null)
	{
		apiStore.isPageLoaded = false;
		const resp = await apiStore.uploadFile(file.value);

		await navigator.clipboard.writeText(resp.url);
		window.location = resp.url;
	}
}
</script>

<template>
	<div class="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
		<div class="w-full max-w-sm">
			<Card class="w-full max-w-sm">
				<CardHeader class="text-center">
					<CardTitle class="text-2xl">Upload File</CardTitle>
					<CardDescription>Choose a file to share.</CardDescription>
				</CardHeader>
				<CardContent class="grid gap-4">
					<Label for="file">File:</Label>
					<Input ref="fileInput" id="file" type="file" @change="onFileChanged" />
				</CardContent>
				<CardFooter>
					<Button @click="onSubmit" class="w-full">Upload</Button>
				</CardFooter>
			</Card>
		</div>
	</div>

</template>