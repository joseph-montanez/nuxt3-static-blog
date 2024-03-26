export const getFormattedDate = (date: string|Date) =>
    date
        ? new Date(date).toLocaleDateString("en-us", {
            year: "numeric",
            month: "short",
            day: "numeric",
        })
        : "";