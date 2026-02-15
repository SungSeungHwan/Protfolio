export const projects = [
    {
        id: 'financial-dashboard',
        title: 'Enterprise Financial Dashboard',
        role: 'Lead Designer',
        year: '2024',
        image: '/assets/finance-thumb.png',
        oneLiner: 'Redesigning a legacy data analysis tool for clarity and speed.',
        background: 'The client, a major fintech firm, had a 10-year-old analytics platform that was cluttering critical data with redundant UI elements.',
        problem: 'Users were spending 40% of their time navigating menus instead of analyzing trends. The information hierarchy was flat, making urgent alerts indistinguishable from static reports.',
        insight: 'During user interviews, we discovered that analysts essentially only used 3 specific views for 90% of their daily workflows. The remaining features were distractions.',
        solution: 'I proposed a radical simplification: a customizable "Action Hub" that surfaced the 3 key views immediately. We relegated the legacy features to a secondary archive.',
        outcome: 'Time-to-insight dropped by 60%. The clean, high-contrast interface reduced cognitive load, which was the #1 complaint in previous satisfaction surveys.',
    },
    {
        id: 'mobile-banking',
        title: 'Acme Bank Mobile App',
        role: 'Product Designer',
        year: '2023',
        oneLiner: 'Simplifying complex transaction flows for 2M+ users.',
        background: 'Acme Bank wanted to capture a younger demographic but their app still used a traditional file-cabinet metaphor.',
        problem: 'Transferring money required 7 steps and 3 authentication checks, leading to a 15% drop-off rate.',
        insight: 'Security was paramount, but "friction" was being used as a lazy proxy for security. Contextual trust (e.g. recognized devices) could replace manual checks.',
        solution: 'We implemented adaptive security flows. Trusted actions on trusted devices became 1-tap. We also rewrote all microcopy to be human and reassuring rather than technical.',
        outcome: 'Transaction completion rates hit 98%. Support tickets related to "confusion" dropped by half.',
    }
]
