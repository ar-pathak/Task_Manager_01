export const DUMMY_POSTS = Array.from({ length: 27 }).map((_, i) => {
    const id = i + 1;
    const tags = [["React", "JavaScript"], ["CSS", "Tailwind"], ["UX", "Design"], ["Node", "Backend"]][i % 4];
    return {
        id,
        title: `Example Post Title ${id}`,
        excerpt:
            "Short excerpt showing what this article is about. Keep this concise to entice readers to open the full post.",
        content:
            "Full post content. Replace this with your real article content from your backend. This area supports long text and will scroll inside the modal when necessary.",
        author: ["Arsan Pathak", "Guest Writer", "Team"][i % 3],
        date: new Date(Date.now() - i * 86400000).toISOString(), // recent days
        readTime: 3 + (i % 7),
        tags,
        cover: `https://picsum.photos/seed/posts${id}/800/500`,
        likes: Math.floor(Math.random() * 200),
    };
});
