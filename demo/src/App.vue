<script setup>
import Nucleus from 'nucleus-vue';
import { configApp } from './App.config';
</script>

<template>
  <Nucleus :config="configApp">
    <VLibras />
  </Nucleus>
</template>
