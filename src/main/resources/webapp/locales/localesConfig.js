define({
    locales: [{
	label: 'English (GB)',
	//iconUrl is used only if iconData is not set
	//iconUrl: '/locales/en/englishFlag.png',
	iconData: 'data:image/png;base64,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',
	code: 'en-gb'
    }, {
	label: 'Français (FR)',
	iconData: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIDSURBVHja7Jc7jtRAEIa/dns0BDs7CAmRkxFwATJWm3IEzsBNuAQ3INp7oE1IyAHtDPb40e5HEeBh22LW9ojWTLKVuGX34+u/qsvVSkQ4p2Wc2R4BFKCBZf88pXnA5MDl9fXHO62nxbi5+TBr5m/v3s/QXvHy86dnObDOsoyrq1fJtnbx9s1kn/b2K8A6B5bOBYyxbLc10vslNgHUEafVfv/ZD+wHKYXq2wLkTy+RzgAsc4AQAk3T0bY2iQLSmn/fRe3QGoJzAOQA1gaaxtI0iQCadvz7YgFdBOCcZ7czVFWXJryreryDzhA3AAiUZUNVmXuf/wdAmAJQCjHdUIGiaJMpIBMAIjIEsNZTluZADOy1OE4Tv6tHx4sPhK4bBmFRtBhjowQpUftIF9T1Q1v/I7930NnYBY6yDFjrkrggVNV4CHQdaD1UYLersdanOQV323GAxQK9Xg2D0DnB+0TFSZAD6Scm9ARrYwUcIkIIaQAkhIkOgvRq5wDeeURIBsAMgGDjU+AcoElWH4YwPEiHALyPY0DQOp0CIvLw4oBSCmejVOy9Q+s8nQIz5tkrkO1/x0opTmZKEfo4yfaSnXL9GCC/B1CsVk/SlNqrixmpQv4CeBDK8tfkoM1mMwtgWxTTYdKnJAW8AF4Dz09clv8Avqj+TrDqn6c0A5Tq8XJ6boDfAwCDYzbVgAnDuwAAAABJRU5ErkJggg==',
	code: 'fr-fr'
    }]
});