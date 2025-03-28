<template>
	<div class="flex items-center justify-center h-screen">
		<div class="loader"></div>
	</div>
</template>

<style>
	@keyframes spin {
		0% { transform: rotate(0deg); }
		100% { transform: rotate(360deg); }
	}
	.loader {
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-left-color: #3490dc;
		border-radius: 50%;
		width: 15vmin;
		height: 15vmin;
		animation: spin 1s linear infinite;
	}
</style>