<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# smskdeg2rad

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert each element in a single-precision floating-point strided array from degrees to radians according to a strided mask array.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import smskdeg2rad from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-strided-special-smskdeg2rad@deno/mod.js';
```

#### smskdeg2rad( N, x, sx, m, sm, y, sy )

Converts each element in a single-precision floating-point strided array `x` from degrees to radians according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y`.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
var y = new Float32Array( x.length );

smskdeg2rad( x.length, x, 1, m, 1, y, 1 );
// y => <Float32Array>[ 0.0, ~0.524, 0.0, ~1.047, 0.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **sx**: index increment for `x`.
-   **m**: mask [`Uint8Array`][@stdlib/array/uint8].
-   **sm**: index increment for `m`.
-   **y**: output [`Float32Array`][@stdlib/array/float32].
-   **sy**: index increment for `y`.

The `N` and stride parameters determine which strided array elements are accessed at runtime. For example, to index every other value in `x` and to index the first `N` elements of `y` in reverse order,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0, 120.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1, 1 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smskdeg2rad( 3, x, 2, m, 2, y, -1 );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][@stdlib/array/float32] views.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0, 120.0 ] );
var m0 = new Uint8Array( [ 0, 0, 1, 0, 1, 1 ] );
var y0 = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var m1 = new Uint8Array( m0.buffer, m0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float32Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

smskdeg2rad( 3, x1, -2, m1, -2, y1, 1 );
// y0 => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, ~1.047, ~0.524 ]
```

#### smskdeg2rad.ndarray( N, x, sx, ox, m, sm, om, y, sy, oy )

Converts each element in a single-precision floating-point strided array `x` from degrees to radians according to a strided mask array and assigns the results to elements in a single-precision floating-point strided array `y` using alternative indexing semantics.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smskdeg2rad.ndarray( x.length, x, 1, 0, m, 1, 0, y, 1, 0 );
// y => <Float32Array>[ 0.0, ~0.524, 0.0, ~1.047, 0.0 ]
```

The function accepts the following additional arguments:

-   **ox**: starting index for `x`.
-   **om**: starting index for `m`.
-   **oy**: starting index for `y`.

While [`typed array`][@stdlib/array/float32] views mandate a view offset based on the underlying `buffer`, the offset parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

var x = new Float32Array( [ 0.0, 30.0, 45.0, 60.0, 90.0, 120.0 ] );
var m = new Uint8Array( [ 0, 0, 1, 0, 1, 1 ] );
var y = new Float32Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

smskdeg2rad.ndarray( 3, x, 2, 1, m, 2, 1, y, -1, y.length-1 );
// y => <Float32Array>[ 0.0, 0.0, 0.0, 0.0, ~1.047, ~0.524 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform@deno/mod.js';
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';
import smskdeg2rad from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-strided-special-smskdeg2rad@deno/mod.js';

var x = new Float32Array( 10 );
var m = new Uint8Array( 10 );
var y = new Float32Array( 10 );

var i;
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = uniform( -180.0, 180.0 );
    if ( uniform( 0.0, 1.0 ) < 0.5 ) {
        m[ i ] = 1;
    }
}
console.log( x );
console.log( m );
console.log( y );

smskdeg2rad.ndarray( x.length, x, 1, 0, m, 1, 0, y, -1, y.length-1 );
console.log( y );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-strided/special/dmskdeg2rad`][@stdlib/math/strided/special/dmskdeg2rad]</span><span class="delimiter">: </span><span class="description">convert each element in a double-precision floating-point strided array from degrees to radians according to a strided mask array.</span>
-   <span class="package-name">[`@stdlib/math-strided/special/sdeg2rad`][@stdlib/math/strided/special/sdeg2rad]</span><span class="delimiter">: </span><span class="description">convert each element in a single-precision floating-point strided array from degrees to radians.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-strided-special-smskdeg2rad.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-strided-special-smskdeg2rad

[test-image]: https://github.com/stdlib-js/math-strided-special-smskdeg2rad/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-strided-special-smskdeg2rad/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-strided-special-smskdeg2rad/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-strided-special-smskdeg2rad?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-strided-special-smskdeg2rad.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-strided-special-smskdeg2rad/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-strided-special-smskdeg2rad/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-strided-special-smskdeg2rad/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-strided-special-smskdeg2rad/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-strided-special-smskdeg2rad/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-strided-special-smskdeg2rad/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-strided-special-smskdeg2rad/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-strided-special-smskdeg2rad/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-strided-special-smskdeg2rad/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32/tree/deno

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8/tree/deno

<!-- <related-links> -->

[@stdlib/math/strided/special/dmskdeg2rad]: https://github.com/stdlib-js/math-strided-special-dmskdeg2rad/tree/deno

[@stdlib/math/strided/special/sdeg2rad]: https://github.com/stdlib-js/math-strided-special-sdeg2rad/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
