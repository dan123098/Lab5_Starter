## expand.md

### 1. Why is it important to put thought into your IDs & Classes when it comes to technology intersections?

IDs and classes serve as the main hooks for JavaScript and CSS to interact with HTML elements. If IDs and class names are not thoughtfully named or are reused improperly, it can lead to bugs, hard-to-maintain code, or styles and scripts affecting the wrong elements. Clear, descriptive, and consistent naming helps ensure that behavior and styles apply exactly where intended, especially when multiple technologies are working together.

---

### 2. What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?

Data attributes are custom attributes prefixed with `data-` (e.g., `data-id="123"`) that store additional info on HTML elements. They're useful for attaching metadata without interfering with CSS or JavaScript functionality. In JavaScript, you can access them with `element.dataset.id`. While they're helpful for managing custom behavior or configuration, overusing them or misusing them can clutter the HTML and make semantic or structured data (like microdata for SEO) harder to maintain.

---

### 3. What is a DOM fragment? Why are they powerful?

A DOM fragment is a lightweight container for a group of DOM nodes. You can build and modify content in memory without affecting the actual DOM, and then append everything at once. This reduces the number of reflows and repaints in the browser, which improves performance, especially when inserting many elements.

---

### 4. What is the point of a “Virtual DOM”? What do you gain? What do you lose?

A virtual DOM is a JS-based abstraction of the real DOM used in frameworks like React. It lets you describe UI changes declaratively and computes the minimal updates needed for the real DOM, making updates faster and more efficient. You gain performance and cleaner code, but you lose some low-level control and might deal with bugs from how the virtual DOM syncs with the real DOM.

---

### 5. In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?

`class` is a reserved keyword in JavaScript used for defining classes in object-oriented programming. To avoid conflicts, JavaScript uses `className` to reference an element’s HTML class attribute. This naming avoids syntax errors and keeps it compatible with JS’s built-in language features.

---

### 6. What is the difference between using addEventListener() and something like onClick()? What are the advantages / disadvantages of both?

`addEventListener()` allows multiple event handlers to be attached to the same event, offering better modularity and separation of concerns. `onClick` only allows one handler per event, so if it's overwritten, previous logic is lost. `addEventListener` is preferred in larger applications, while `onClick` is simpler for small scripts or inline HTML but less flexible overall.
