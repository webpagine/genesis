function generateAllBlockquotes() {
    for (let e of document.querySelectorAll('blockquote')) {
        const checker = (tag, className, color, key, title) => {
            if (e.innerText.startsWith(tag)) {
                e.innerHTML = e.innerHTML.replace(tag, "")
                e.innerHTML = `<div style='display: flex; align-items: center; color: ${color}'><span class=\"material-symbols-outlined\" style='margin: 5px'>${key}</span><span style='font-weight: bold'>${title}</span></div><div style='margin-left: 10px'>${e.innerHTML}</div>`
                e.classList.add(className);
                return true
            }
            return false
        }

        if (checker("[!NOTE]", "note", "#1f6feb", "info", "Note")) continue
        if (checker("[!TIP]", "tip", "#3fb950", "lightbulb", "Tip")) continue
        if (checker("[!IMPORTANT]", "important", "#ab7df8", "notification_important", "Important")) continue
        if (checker("[!WARNING]", "warning", "#d29922", "warning", "Warning")) continue
        checker("[!CAUTION]", "caution", "#f85149", "error", "Caution")
    }
}
