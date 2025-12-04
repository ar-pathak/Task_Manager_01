const ContactCard = ({ icon, title, children }) => (
    <div className="flex gap-4 items-start bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm">
        <div className="flex-none w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 grid place-items-center text-indigo-600 dark:text-indigo-300">
            {icon}
        </div>
        <div className="min-w-0">
            <h4 className="font-semibold text-slate-900 dark:text-white">{title}</h4>
            <div className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                {children}
            </div>
        </div>
    </div>
);
export default ContactCard;