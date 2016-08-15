# Hammer Starter by @adrianengine

## Introduction

This is a Boilerplate template for static websites meant to be build with [Hammer for Mac](http://hammerformac.com).

## About

The template structure is based on [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss#49) ("Inverted Triangle CSS").

It follows [Reasonable System for CSS Stylesheet Structure](http://rscss.io).

Includes a copy of [Normalize](http://necolas.github.io/normalize.css/).

Uses Hammer's built-in support for Autoprefixer.

## Structure

You’ll see it’s all, for the most part, directly nested inside the CSS folder. Instead of folders, we use namespaces to organize. Config files set up our grid and variables. Library files contain our base styles where we define global elements: borders, ornaments, our tools classes, our type styles etc.

Instead of creating 25 module SCSS partials, we section off the majority of them into a file called `_component.sections.scss`.

### Naming Convention

- Think in **components**, named with 2 words (`.screenshot-image`)
- Components have **elements**, named with 1 word (`.blog-post > .title`)
- Name **variants** with a dash prefix (`.shop-banner.-with-icon`)
- Components can nest
- Remember you can extend to make things simple

### BEM and RSCSS

```html

	<!-- BEM -->
	<form class="site-search site-search--full">
	  <input  class="site-search__field" type="text">
	  <button class="site-search__button"></button>
	</form>

	<!-- rscss -->
	<form class="site-search -full">
	  <input  class="field" type="text">
	  <button class="button"></button>
	</form>

```

## Further reading

Ideas borrowed from many places, including:

- [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) by Nicolas Gallagher
- [Atomic OOBEMITSCSS](https://www.sitepoint.com/atomic-oobemitscss/) by Una Kravets
- [Classy CSS: a Programmatic Approach to Sass Stylesheets](https://una.im/classy-css/#=%81) by Una Kravets
- [Clean out your Sass junk drawer](http://gist.io/4436524) by Dale Sand
- [Content Display Patterns](http://danielmall.com/articles/content-display-patterns/) by Daniel Mall
- [CSS Architecture](http://philipwalton.com/articles/css-architecture/) by Philip Walton
- [Enduring CSS](http://ecss.io/) by  Ben Frain
- [Happy Cog Starter Files 2016](http://cognition.happycog.com/article/happy-cog-starter-files-2016-edition) by Allison Wagner
- [How to Scale and Maintain Legacy CSS with Sass and SMACSS](http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/) by Ben Smithett.
- [IE-friendly mobile-first CSS with Sass 3.2](http://jakearchibald.github.com/sass-ie/) by Jake Archibald
- [MindBEMding - getting your head 'round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/) by Harry Roberts
- [Naming UI components in OOCSS](http://csswizardry.com/2014/03/naming-ui-components-in-oocss/) by Harry Roberts
- [SMACSS](http://smacss.com/) by Jonathan Snook

## License

**Hammer Starter** © 2016+, Adrian Quevedo. Released under the [MIT](http://mit-license.org/) License.
Authored and maintained by Adrian Quevedo.

> [adrianengine.com](http://adrianengine.com/)  ·  GitHub [@adrianengine](https://github.com/adrianengine)  ·  Twitter [@adrianengine](https://twitter.com/adrianengine)