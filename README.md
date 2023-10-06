<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Lucas Polynomial

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate a [Lucas polynomial][fibonacci-polynomials].

<section class="intro">

A [Lucas polynomial][fibonacci-polynomials] is expressed according to the following recurrence relation

<!-- <equation class="equation" label="eq:lucas_polynomial" align="center" raw="L_n(x) = \begin{cases}2 & \textrm{if}\ n = 0\\x & \textrm{if}\ n = 1\\x \cdot L_{n-1}(x) + L_{n-2}(x) & \textrm{if}\ n \geq 2\end{cases}" alt="Lucas polynomial."> -->

```math
L_n(x) = \begin{cases}2 & \textrm{if}\ n = 0\\x & \textrm{if}\ n = 1\\x \cdot L_{n-1}(x) + L_{n-2}(x) & \textrm{if}\ n \geq 2\end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="L_n(x) = \begin{cases}2 &amp; \textrm{if}\ n = 0\\x &amp; \textrm{if}\ n = 1\\x \cdot L_{n-1}(x) + L_{n-2}(x) &amp; \textrm{if}\ n \geq 2\end{cases}" data-equation="eq:lucas_polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/lucaspoly/docs/img/equation_lucas_polynomial.svg" alt="Lucas polynomial.">
    <br>
</div> -->

<!-- </equation> -->

Alternatively, if `L(n,k)` is the coefficient of `x^k` in `L_n(x)`, then

<!-- <equation class="equation" label="eq:lucas_polynomial_sum" align="center" raw="L_n(x) = \sum_{k = 0}^n L(n,k) x^k" alt="Lucas polynomial expressed as a sum."> -->

```math
L_n(x) = \sum_{k = 0}^n L(n,k) x^k
```

<!-- <div class="equation" align="center" data-raw-text="L_n(x) = \sum_{k = 0}^n L(n,k) x^k" data-equation="eq:lucas_polynomial_sum">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/lucaspoly/docs/img/equation_lucas_polynomial_sum.svg" alt="Lucas polynomial expressed as a sum.">
    <br>
</div> -->

<!-- </equation> -->

We can extend [Lucas polynomials][fibonacci-polynomials] to negative `n` using the identity

<!-- <equation class="equation" label="eq:negalucas_polynomial" align="center" raw="L_{-n}(x) = (-1)^{n} L_n(x)" alt="NegaLucas polynomial."> -->

```math
L_{-n}(x) = (-1)^{n} L_n(x)
```

<!-- <div class="equation" align="center" data-raw-text="L_{-n}(x) = (-1)^{n} L_n(x)" data-equation="eq:negalucas_polynomial">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/math/base/tools/lucaspoly/docs/img/equation_negalucas_polynomial.svg" alt="NegaLucas polynomial.">
    <br>
</div> -->

<!-- </equation> -->

</section>

<!-- /.intro -->



<section class="usage">

## Usage

To use in Observable,

```javascript
lucaspoly = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-lucaspoly@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var lucaspoly = require( 'path/to/vendor/umd/math-base-tools-lucaspoly/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-lucaspoly@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.lucaspoly;
})();
</script>
```

#### lucaspoly( n, x )

Evaluates a [Lucas polynomial][fibonacci-polynomials] at a value `x`.

```javascript
var v = lucaspoly( 5, 2.0 ); // => 2^5 + 5*2^3 + 5*2
// returns 82.0
```

#### lucaspoly.factory( n )

Uses code generation to generate a `function` for evaluating a [Lucas polynomial][fibonacci-polynomials].

```javascript
var polyval = lucaspoly.factory( 5 );

var v = polyval( 1.0 ); // => 1^5 + 5*1^3 + 5
// returns 11.0

v = polyval( 2.0 ); // => 2^5 + 5*2^3 + 5*2
// returns 82.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For hot code paths, a compiled function will be more performant than `lucaspoly()`.
-   While code generation can boost performance, its use may be problematic in browser contexts enforcing a strict [content security policy][mdn-csp] (CSP). If running in or targeting an environment with a CSP, avoid using code generation.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/math-base-tools-lucaspoly@umd/browser.js"></script>
<script type="text/javascript">
(function () {

var i;

// Compute the negaLucas and Lucas numbers...
for ( i = -76; i < 77; i++ ) {
    console.log( 'L_%d = %d', i, lucaspoly( i, 1.0 ) );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/tools/evalpoly`][@stdlib/math/base/tools/evalpoly]</span><span class="delimiter">: </span><span class="description">evaluate a polynomial.</span>
-   <span class="package-name">[`@stdlib/math-base/tools/fibpoly`][@stdlib/math/base/tools/fibpoly]</span><span class="delimiter">: </span><span class="description">evaluate a Fibonacci polynomial.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-tools-lucaspoly.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-tools-lucaspoly

[test-image]: https://github.com/stdlib-js/math-base-tools-lucaspoly/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-tools-lucaspoly/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-tools-lucaspoly/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-tools-lucaspoly?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-tools-lucaspoly.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-tools-lucaspoly/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-tools-lucaspoly/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-tools-lucaspoly/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-tools-lucaspoly/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-tools-lucaspoly/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-tools-lucaspoly/main/LICENSE

[fibonacci-polynomials]: https://en.wikipedia.org/wiki/Fibonacci_polynomials

[mdn-csp]: https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP

<!-- <related-links> -->

[@stdlib/math/base/tools/evalpoly]: https://github.com/stdlib-js/math-base-tools-evalpoly/tree/umd

[@stdlib/math/base/tools/fibpoly]: https://github.com/stdlib-js/math-base-tools-fibpoly/tree/umd

<!-- </related-links> -->

</section>

<!-- /.links -->
