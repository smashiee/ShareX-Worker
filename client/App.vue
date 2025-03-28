<script setup lang="ts">
import AppSidebar from '@/components/NavSidebar.vue'
import OptionsSidebar from '@/components/OptionsSidebar.vue'
import { SidebarProvider } from '@/components/ui/sidebar'
import LoadingSpinny from '@/components/LoadingSpinny.vue';
import { useApiStore } from '@/stores/api';
const apiStore = useApiStore();

</script>

<template>
	<SidebarProvider :defaultOpen="apiStore.isAuthed">
		<AppSidebar/>

		<main>
			<!--<SidebarTrigger v-show="sidebarNotOpen" />-->

			<LoadingSpinny v-show="!apiStore.isPageLoaded"/>
			<RouterView v-show="apiStore.isPageLoaded"/>
		</main>

		<!-- Put this here instead of the share component so we can use the same sidebar provider, is there a better way? probably -->
		<OptionsSidebar v-show="apiStore.isOptionsActive"/>
	</SidebarProvider>
</template>

<style>
main {
	width: 100%;
}
</style>