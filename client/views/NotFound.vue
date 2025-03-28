<script setup lang="ts">
import { MorphingText } from '@/components/ui/morphing-text';
import { useApiStore } from '@/stores/api';
const apiStore = useApiStore();
apiStore.isPageLoaded = true;
</script>

<template>
	<div class="grid place-items-center h-screen">
		<MorphingText :morphTime="1" :texts="['404', 'Not Found', 'Lost?', 'CTRL+B For Nav']"/>
	</div>
</template>
