<template>
	<div v-if="validShare">
		<template v-if="apiStore.activeShare?.isUrl()" >
			<UrlShare :share="apiStore.activeShare"/>
		</template>

		<template v-else-if="apiStore.activeShare?.isFile()" >
			<FileShare :share="apiStore.activeShare"/>
		</template>

		<template v-else-if="apiStore.activeShare?.isImage()">
			<ImageShare :share="apiStore.activeShare"/>
		</template>

		<template v-else-if="apiStore.activeShare?.isText()" >
			<TextShare :share="apiStore.activeShare"/>
		</template>

		<template v-else-if="apiStore.activeShare?.isVideo() || apiStore.activeShare?.isAudio()" >
			<VideoShare :share="apiStore.activeShare"/>
		</template>
	</div>

	<template v-else>
		<NotFound/>
	</template>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';

import { useApiStore } from '@/stores/api';
const apiStore = useApiStore();

const route = useRoute();
const validShare = ref(true);

async function fetchData(urlSlug: any)
{
	await apiStore.getShare(urlSlug);

	if (!apiStore.activeShare)
		validShare.value = false;
}

watch(() => route.params.urlSlug, fetchData, { immediate: true });
</script>

<script lang="ts">
import { defineAsyncComponent } from 'vue'

export default {
	components: {
		UrlShare: defineAsyncComponent(() => import('@/components/shares/Url.vue')),
		FileShare: defineAsyncComponent(() => import('@/components/shares/File.vue')),
		ImageShare: defineAsyncComponent(() => import('@/components/shares/Image.vue')),
		TextShare: defineAsyncComponent(() => import('@/components/shares/Text.vue')),
		VideoShare: defineAsyncComponent(() => import('@/components/shares/Video.vue')),
		NotFound: defineAsyncComponent(() => import('./NotFound.vue'))
	}
}
</script>