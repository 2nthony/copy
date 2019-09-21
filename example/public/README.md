# @evillt/copy

A super tiny browser library that copy stuff into clipboard from your browser(<400B Gzipped).

## Install

<Snippet text="yarn add @evillt/copy" />

## Usage

```js
import copy from '@evillt/copy'

copy('text')

// Press `Ctrl + V` or `⌘ + V`
// will output: `text`
```

## Playground

Input something then press the `copy` button:

<input type="text" v-model="value" > <button @click="copy(value)">copy</button>

You can now try to paste here:

<textarea />

## API

copy(text, options)

### text

- Type: `string`
- Required: `true`

The text that you wanna copy to clipboard.

### options

- Type: `Options`
- Default: `DefaultOptions`

```ts
interface Options {
  format: string
}

const DefaultOptions = {
  format: 'text'
}
```

```js { mixin: true }
{
  data() {
    return {
      value: ''
    }
  }
}
```
