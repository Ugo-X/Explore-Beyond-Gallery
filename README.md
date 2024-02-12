








































































































NB!!!!!!! for the conditional statment while trying to return the html of the modal images the logic explanation is below.

<!-- Certainly! Let's break down the line of code:

```javascript
class="${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img"}"
```

This line of code is used to dynamically assign a CSS class to an HTML element based on a condition. Here's a detailed explanation:

1. **class=**: This is an HTML attribute used to specify one or more class names for an element. Classes are used in CSS to apply styling to elements.

2. **`${...}`**: This is a template literal syntax in JavaScript, indicated by backticks (`), which allows embedding expressions inside a string.

3. **selectedImage.dataset.id**: This accesses the `id` attribute of the `dataset` property of the `selectedImage` element. The `dataset` property provides access to custom data attributes (prefixed with `data-`) of an element.

4. **image.dataset.id**: Similar to the previous expression, this accesses the `id` attribute of the `dataset` property of the `image` object, which represents an image in the `list` array.

5. **? "modal-img selected" : "modal-img"**: This is a ternary operator, which is a concise way to write an if-else statement. It consists of three parts:
   - The condition (`selectedImage.dataset.id === image.dataset.id`): If this condition evaluates to `true`, the expression before the colon (`:`) is returned; otherwise, the expression after the colon is returned.
   - If the condition is true, `"modal-img selected"` is returned. This means the element will have both the classes `modal-img` and `selected`.
   - If the condition is false, `"modal-img"` is returned. This means the element will only have the class `modal-img`.

In summary, this line of code dynamically assigns the class `"modal-img selected"` to the HTML element if the `id` of the `selectedImage` matches the `id` of the `image` being processed in the `map` function. Otherwise, it assigns the class `"modal-img"`. This technique is commonly used in JavaScript frameworks like React or Vue.js for conditional rendering and styling. -->