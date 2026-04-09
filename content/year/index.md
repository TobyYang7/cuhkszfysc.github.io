---
type: page
---

# 按年级索引

<script setup lang="ts">
import { posts } from "../../src/collections";
import { YEARS } from "./[year].paths";

const yearEntries = YEARS.map((year) => ({
  year,
  label: `20${year} 级`,
  count: posts.filter((post) => post.metadata.year === year).length,
}));
</script>

<ul>
  <li v-for="entry in yearEntries" :key="entry.year">
    <a :href="`/year/${entry.year}`">{{ entry.label }}</a>（{{ entry.count }} 篇）
  </li>
</ul>
