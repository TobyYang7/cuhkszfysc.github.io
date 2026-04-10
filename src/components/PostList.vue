<script setup lang="ts">
import METADATA from "../metadata";
import type { Page } from "../pages.data";

defineProps<{ posts: Page[] }>();

function formatPostMeta(post: Page) {
  const metadata = post.metadata as {
    type: keyof typeof METADATA.type;
    school?: keyof typeof METADATA.school;
    year?: string | number;
  };

  const parts = [
    METADATA.type[metadata.type],
    metadata.school ? METADATA.school[metadata.school] : undefined,
    metadata.year
      ? METADATA.year[String(metadata.year).padStart(2, "0")]
      : undefined,
  ].filter((part): part is string => Boolean(part));

  return `[${parts.join("，")}]`;
}
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.url">
      {{ post.metadata.date }} -
      {{ formatPostMeta(post) }}
      -
      <a :href="post.url">{{ post.title ?? "无标题" }}</a>
    </li>
  </ul>
</template>
