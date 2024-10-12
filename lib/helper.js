// Helper function to validate email
export const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export function getInitialName(name) {
    if (!name || name.length === 0) return;
    let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");
    let initials = [...name.matchAll(rgx)] || [];

    initials = ((initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")).toUpperCase();
    return initials;
}

export function getLastSeen(updatedAt) {
    if (!updatedAt) return;
    const date = new Date(updatedAt);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
        return "Today";
    } else if (date.toDateString() === yesterday.toDateString()) {
        return "Yesterday";
    } else {
        // Calculate difference in days
        const diffTime = Math.abs(today - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 7) {
            return `${diffDays} days ago`;
        } else {
            // Use toLocaleDateString to format the date
            return date.toLocaleDateString("vi-VN", { month: "long", day: "numeric", year: "numeric" });
        }
    }
}

export const parseFileMeta = (file) => {
    const { type, name, size } = file;
    const nameSplit = name.split(".");
    console.log(type, name, size, nameSplit);
    return {
        name: nameSplit?.[0].toLowerCase().split(" ").join("_"),
        fileExtension: nameSplit?.[nameSplit.length - 1].toLowerCase(),
        mimeType: type,
        // size: formatBytes(size, 0)
        size: size,
    };
};
