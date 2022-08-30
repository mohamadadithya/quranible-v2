<script>
    export let title = 'Quranible | Al-Quran Digital Terlengkap dengan Latin dan Terjemahan Bahasa Indonesia',
    url = 'https://quranible.vercel.app',
    description = 'Quranible adalah situs Al-Quran lengkap dengan transliterasi dan terjemahan bahasa Indonesia.',
    image = '/favicon.png',
    keywords = '';
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="title" content={title}>
    <meta name="description" content={description}>
    <meta name="keywords" content="al-quran digital, website al-quran, aplikasi al-quran, al-quran, {keywords.toLowerCase()}">
    <meta name="robots" content="index, follow">
    <meta name="language" content="Bahasa Indonesia">
    <meta name="author" content="Mohamad Adithya">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta property="og:title" content={title}>
    <meta property="og:site_name" content="Quranible">
    <meta property="og:url" content={url}>
    <meta property="og:description" content={description}>
    <meta property="og:type" content="website">
    <meta property="og:image" content={image}>
    <meta property="og:locale" content="id_ID" />
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content={url}>
    <meta property="twitter:title" content={title}>
    <meta property="twitter:description" content={description}>
    <meta property="twitter:image" content={image}>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-W6TYYSP7NT"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-W6TYYSP7NT');
    // Hotjar Tracking Code for https://quranible-v2.vercel.app
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:3130647,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
</svelte:head>