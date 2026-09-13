# 🚀 Rahman Dev Stack

> A simple and modern platform for discovering useful technologies and
> building your own development stack.

## 🌐 About the Project

**Rahman Dev Stack** is a technology discovery website where developers can
explore different technologies, learn a little about each one, and add
their preferred tools to a personal stack.

The goal of the project is to keep technology selection simple and
organized. Users can browse the available technologies, choose one
technology from each category, and manage their selected stack from the
sidebar.

## 🛠️ Technologies Used

- ⚛️ **React.js**
- 📘 **TypeScript**
- 🎨 **Tailwind CSS**
- ⚡ **Vite**
- 🔗 **React Icons | React Toaster for alert**
- 📦 **JSON** for technology data

## ✨ Features

### 1. Explore Technologies

Browse technology cards with useful information such as the technology
name, description, category, difficulty level, badge, and rating.

### 2. Build Your Own Stack

Add technologies to the **Your Stack** section and see your selected
technologies in one place.

### 3. Smart Stack Management

A technology cannot be added twice, and only one technology can be
selected from each category. Added technologies can also be removed
whenever needed.

---

# ⚛️ React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or
TypeScript. React uses JSX because it makes UI code easier to read and
lets us describe the structure of a component in a clear way.

For example:

```tsx
<h1>Explore Technologies</h1>
```

This looks like HTML, but it is written inside a React component.

---

## 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.
They are mainly used to send information to a component.

**State** is data managed inside a component. When state changes, React
updates the UI.

In this project, technology information is passed to `TechnologyCard`
through props, while the selected technologies are stored in state.

---

## 3. What does the `useState` hook do, and where did you use it in this project?

The `useState` hook lets a React component store and update data.

I used `useState` in the `Technologies` component to keep track of the
technologies selected by the user.

```tsx
const [selectedTechnology, setSelectedTechnology] = useState<ITechnology[]>([]);
```

When a user adds or removes a technology, this state is updated and the
UI changes automatically.

---

## 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

The `useEffect` hook lets us run code after a component renders. It is
commonly used for tasks such as fetching data, working with APIs, or
responding to changes.

For this project, `useEffect` can be used to load the technology data
from a JSON file when the component starts. After loading the data, it
can be stored in state and displayed on the page.

---

## 5. Why does every item in a `.map()` list need a unique `key` prop?

React needs a unique `key` to identify each item in a list.

It helps React understand which item was added, removed, or changed, so
it can update the UI correctly and efficiently.

In this project, I used the technology `id` as the key:

```tsx
{
  technologies.map((technology) => (
    <TechnologyCard key={technology.id} technology={technology} />
  ));
}
```

---

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a
condition.

I used it in the **Your Stack** section. When the user has not selected
any technology, an empty message is shown. When technologies are
selected, the selected items are displayed instead.

```tsx
{
  selectedTechnology.length === 0 ? (
    <p>Your stack is empty</p>
  ) : (
    <div>{/* Selected technologies */}</div>
  );
}
```

This makes the interface respond to the user's actions.

---

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent sends data to a child through **props**.

In this project, the `Technologies` component passes the technology and
an `onAddToStack` function to `TechnologyCard`.

```tsx
<TechnologyCard technology={technology} onAddToStack={handleAddToStack} />
```

The child can then call the function when the user clicks the **Add to
Stack** button.

```tsx
onClick={() => onAddToStack(technology)}
```

So, data goes **from parent to child through props**, while the child
can communicate back by **calling a function received through props**.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Technologies/
│   │   ├── Technologies.tsx
│   │   ├── TechnologyCard.tsx
│   │   └── StackSidebar.tsx
│   ├── ...
├── types/
│   └── type.ts
├── pages/
│   └── ...
└── main.tsx
```

## 🎯 Project Goal

This project was built to practice React fundamentals in a real project,
especially:

- Component-based development
- Props
- State management
- Event handling
- Conditional rendering
- Rendering lists with `.map()`
- TypeScript with React
- Responsive design with Tailwind CSS

---

## 👨‍💻 Dev Stack

Built with ❤️ using **React, TypeScript, and Tailwind CSS**.
