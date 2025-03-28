<script setup lang="ts">
import InnerImageZoom from 'vue-inner-image-zoom'
import { Share } from '~/share';
import { useApiStore } from '@/stores/api';
const apiStore = useApiStore();

const { share } = defineProps({
	share: Share,
})

apiStore.isPageLoaded = true;
</script>

<template>
	<div class="grid place-items-center h-screen">
		<!--TODO: don't allow zoom if the image is already full size... -->

		<inner-image-zoom
			v-if="share && share.fileExtension != 'svg'"
			:src="share?.fileUrl"
			moveType="drag"
			:hasSpacer="true"
			:hideHint="true"
			:fadeDuration="0"
		/>

		<!-- this zoomer does not support svgs! -->
		<img v-else :src="share?.fileUrl" style="max-width: 75%; width: auto" />
	</div>

</template>