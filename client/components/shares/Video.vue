<script setup lang="ts">
import 'vidstack/bundle';
import { Share } from '~/share';
import { useApiStore } from '@/stores/api';
import { onMounted, } from 'vue';

defineProps({
	share: Share,
});

const apiStore = useApiStore();
onMounted(() => {
	apiStore.isPageLoaded = true;
});

</script>

<template>
	<div class="grid place-items-center h-screen">
		<media-player :title="share?.fileName" autoplay>

			<media-provider>
				<source :src="share?.fileUrl" :type="share?.contentType" />
			</media-provider>

			<media-video-layout v-if="share?.isVideo()" color-scheme="dark"></media-video-layout>

			<!-- TODO: Improve audio layout one of these days -->
			<media-audio-layout v-else-if="share?.isAudio()" color-scheme="dark"></media-audio-layout>

		</media-player>
	</div>
</template>

<!-- TODO: we need to clamp differently for dif aspect ratios, this works for now-->
<style>
	media-player {
		height: auto !important;
		width: auto !important;
		max-width: min(100%, 100vmin);
		max-height: min(100%, 100vmin);
	}
</style>