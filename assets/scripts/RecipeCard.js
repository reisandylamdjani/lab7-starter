// RecipeCard.js

class RecipeCard extends HTMLElement {
	// Called once when document.createElement('recipe-card') is called, or
	// the element is written into the DOM directly as <recipe-card>
	constructor() {
		super(); // Inherit everything from HTMLElement

		// EXPOSE - START (All expose numbers start with A)
		// A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
		// A2. TODO - Create an <article> element - This will hold our markup once our data is set
		// A3. TODO - Create a style element - This will hold all of the styles for the Web Component
		// A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made (copy everything in the <style> tag>)
		// A5. TODO - Append the <style> and <article> elements to the Shadow DOM

		let shadowElement = this.attachShadow({mode:'open'});
		let articleRoot = document.createElement('article');
		let styleRoot = document.createElement('style');

		let starEl = document.createElement('*');
		let aEl = document.createElement('a');
		let divEl = document.createElement('div');
		let pEl = document.createElement('p');
		let spanEl = document.createElement('span');
		let timeEl = document.createElement('time');

		styleRoot.append(starEl);
		styleRoot.append(aEl);
		styleRoot.append(divEl);
		styleRoot.append(pEl);
		styleRoot.append(spanEl);
		styleRoot.append(timeEl);

		shadowElement.append(articleRoot);
		shadowElement.append(styleRoot);
	}

	/**
	 * Called when the .data property is set on this element.
	 *
	 * For example:
	 * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
	 * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
	 *
	 * @param {Object} data - The data to pass into the <recipe-card> must be of the
	 *                        following format:
	 *                        {
	 *                          "imgSrc": "string",
	 *                          "imgAlt": "string",
	 *                          "titleLnk": "string",
	 *                          "titleTxt": "string",
	 *                          "organization": "string",
	 *                          "rating": number,
	 *                          "numRatings": number,
	 *                          "lengthTime": "string",
	 *                          "ingredients": "string"
	 *                        }
	 */
	set data(data) {
		// If nothing was passed in, return
		if (!data) return;

		// A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
		// A7. TODO - Set the contents of the <article> with the <article> template given in
		//           cardTemplate.html and the data passed in (You should only have one <article>,
		//           do not nest an <article> inside another <article>). You should use Template
		//           literals (template strings) and element.innerHTML for this.
		//           Remember to replace all the placeholders in the template with the data passed in.
		//           i.e. imgSrc, titleLnk, etc
		
	}
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define('recipe-card', RecipeCard);
