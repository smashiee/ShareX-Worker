<script setup lang="ts">
import { Share } from '~/share';

defineProps({
	share: Share,
})
</script>

<template>
	<div class="w-full max-w-sm">
		<img :src="'/svg/' + share?.fileExtension + '.svg'" class="mx-auto w-32 h-32" alt="File Extension">
	</div>
</template>