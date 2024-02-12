








































































































NB!!!!!!! for the conditional statment while trying to return the html of the modal images the logic explanation is below.

Certainly! Let's break down the line of code:

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

In summary, this line of code dynamically assigns the class `"modal-img selected"` to the HTML element if the `id` of the `selectedImage` matches the `id` of the `image` being processed in the `map` function. Otherwise, it assigns the class `"modal-img"`. This technique is commonly used in JavaScript frameworks like React or Vue.js for conditional rendering and styling.



The reasons we remove event listeners are as follows !!!!!!!
THE REASONS WE REMOVE EVENT LISTENERS ARE AS FOLLOWS !!!!!!!

In the provided code, the event listeners added for the close button (`closeBtn`), previous button (`prevBtn`), and next button (`nextBtn`) are removed in the `closeModal` method.

Here's why we want to remove the event listeners:

1. **Preventing Memory Leaks**: When you add event listeners in JavaScript, they continue to exist until explicitly removed. If you have a situation where the Gallery instances are created and destroyed dynamically (for example, switching between different galleries), not removing event listeners can lead to memory leaks. Removing event listeners ensures that resources associated with the event listeners are released when they are no longer needed, preventing memory leaks.

2. **Avoiding Unexpected Behavior**: If event listeners are not removed, they may continue to respond to events even when the corresponding elements are no longer part of the DOM or when the instance of the Gallery is destroyed. This can lead to unexpected behavior in the application. By removing event listeners, you ensure that they are only active when the Gallery is visible and functional.

In summary, removing event listeners is important for managing resources efficiently and preventing unexpected behavior in the application. It ensures that event handlers are properly cleaned up when they are no longer needed, promoting better performance and stability.