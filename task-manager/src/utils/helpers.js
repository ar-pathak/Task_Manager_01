export const formatDate = (iso) =>
    new Date(iso).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });
