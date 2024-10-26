<script setup>
import Nucleus, { NucleusCode, NucleusBox } from 'nucleus-vue';
import { configApp } from './App.config';
</script>

<template>
  <Nucleus :config="configApp">
    <VLibras />
    <NucleusBox class="example" title="Usage Example">
      <h3>Widget Position</h3>
      <p>You can set the widget's position using the <code>position</code> prop. For example:</p>
      <NucleusCode language="tsx">{{ `<VLibras position="left" />` }}
      </NucleusCode>

      <h3>Available Position Types</h3>
      <p>The position options that can be used are:</p>
      <ul>
        <li>left</li>
        <li>right</li>
        <li>top</li>
        <li>bottom</li>
        <li>bottom-left</li>
        <li>top-left</li>
        <li>bottom-right</li>
        <li>top-right</li>
      </ul>

      <h3>Avatar</h3>
      <p>You can select the widget's avatar using the <code>avatar</code> prop. Example:</p>
      <NucleusCode language="tsx">{{ `<VLibras avatar="hosana" />` }}
      </NucleusCode>

      <h3>Available Avatar Options</h3>
      <ul>
        <li>icaro</li>
        <li>hosana</li>
        <li>guga</li>
        <li>random</li>
      </ul>

      <h3>Opacity</h3>
      <p>To adjust the widget's opacity, use the <code>opacity</code> prop:</p>
      <NucleusCode language="tsx">{{ `<VLibras opacity="0.8" />` }}
      </NucleusCode>
    </NucleusBox>

  </Nucleus>
</template>

<style>
.example {
  h2,
  h3 {
    color: var(--color-text);
    margin-bottom: 10px;
  }

  p {
    color: var(--color-text);
    line-height: 1.6;
    margin-bottom: 20px;
  }

  ul {
    padding-left: 20px;
    margin-bottom: 20px;
  }

  ul li {
    list-style-type: disc;
    margin-bottom: 5px;
    color: var(--primary);
    font-weight: bold;
  }

  code {
    margin-bottom: 1rem;
  }
}
</style>
