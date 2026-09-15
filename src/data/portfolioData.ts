import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Fadhlan El Fauzi',
  tagline: 'Vocational Student & Software Developer',
  education: 'Rekayasa Perangkat Lunak (SMKN 6 JEMBER)',
  status: 'Available for Software Projects',
  bio: 'Siswa kelas 12 Rekayasa Perangkat Lunak di SMKN 6 Jember yang berfokus pada pengembangan aplikasi mobile dengan Flutter, web menggunakan Laravel, serta pembuatan bot Discord.',
  experienceStart: 'Student Developer',
  avatarUrl: '/dev-avatar.jpg',
  interests: [
    'Mobile Development',
    'Laravel Framework',
    'Discord Bots',
    'Lua Scripting',
    'Windows Ecosystem'
  ],
  contact: {
    email: 'elfauzifadhlan@gmail.com',
    phone: '085334900361',
    github: 'https://github.com/fadhlanel',
    linkedin: 'https://www.linkedin.com/in/fadhlan-el-fauzi-876649363/',
    location: 'Indonesia'
  }
};

export const techStackData: TechItem[] = [
  // client interface layer
  {
    name: 'Flutter',
    category: 'mobile',
    layer: 'client',
    iconKey: 'flutter',
    color: '#0284c7',
    roleTag: 'Mobile App',
    usageContext: 'Cross-platform mobile application development for Android and iOS',
    projectLinks: ['mobile-kasir-app']
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'typescript',
    color: '#3178C6',
    roleTag: 'Basic TS',
    usageContext: 'Basic type-safe programming and component structuring',
    projectLinks: []
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Scripting Core',
    usageContext: 'Core web scripting, DOM manipulation, and frontend interactivity',
    projectLinks: ['web-barang-hilang', 'web-kasir-tunaiku']
  },

  // backend engine layer
  {
    name: 'Laravel',
    category: 'backend',
    layer: 'backend',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'MVC Framework',
    usageContext: 'Robust web applications, MVC architecture, routing, and controllers',
    projectLinks: ['web-barang-hilang', 'web-kasir-tunaiku']
  },
  {
    name: 'Node.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'Runtime Environment',
    usageContext: 'Backend runtime, toolings, and asynchronous event handling',
    projectLinks: []
  },
  {
    name: 'Lua',
    category: 'backend',
    layer: 'backend',
    iconKey: 'lua',
    color: '#000080',
    roleTag: 'Scripting Language',
    usageContext: 'Lightweight scripting and automation tasks',
    projectLinks: []
  },

  // database and persistence layer
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Relational Database',
    usageContext: 'Relational database management, tables, and multi-store schema relations',
    projectLinks: ['web-barang-hilang', 'web-kasir-tunaiku']
  },

  // infrastructure and tools layer
  {
    name: 'Windows',
    category: 'tools',
    layer: 'devops',
    iconKey: 'windows',
    color: '#0078D4',
    roleTag: 'System OS',
    usageContext: 'Primary operating system and development workstation environment',
    projectLinks: []
  },
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Version control and source code management',
    projectLinks: ['mobile-kasir-app', 'web-barang-hilang', 'web-kasir-tunaiku']
  }
];

export const projectsData: Project[] = [
  {
    id: 'mobile-kasir-app',
    title: 'Aplikasi Kasir Mobile',
    subtitle: 'Aplikasi Pencatatan & Kasir Sederhana Berbasis Flutter',
    category: 'mobile',
    summary: 'Aplikasi mobile kasir dan pencatatan keuangan sederhana untuk membantu perhitungan pengeluaran dan pemasukan bulanan di rumah.',
    description: 'Dibuat berawal dari inisiatif untuk membantu ibu di rumah yang sering kesulitan menghitung rekapitulasi keuangan bulanan secara manual. Aplikasi ini menyediakan antarmuka ringkas untuk mencatat transaksi harian, mengkalkulasi saldo, serta mencetak struk transaksi.',
    architecture: [
      'Dibangun menggunakan framework Flutter & bahasa pemrograman Dart',
      'Manajemen state lokal untuk penyimpanan transaksi harian dan bulanan',
      'Modul kalkulasi rekapitulasi pendapatan dan pengeluaran berkala',
      'Generator layout struk visual untuk pencetakan bukti transaksi'
    ],
    stack: [
      'Flutter',
      'Dart'
    ],
    highlights: [
      'Solusi praktis pencatatan keuangan keluarga & usaha rumahan',
      'Perhitungan otomatis saldo bulanan instan',
      'Format output struk transaksi siap cetak'
    ],
    challenges: 'Tantangan utama terletak pada penyesuaian format laporan bulanan agar informatif serta penyusunan tata letak (layout) struk transaksi agar presisi dan rapi saat dicetak.',
    role: 'Mobile Developer',
    isPrivateRepo: true,
    privateRepoReason: 'Repository privat / closed-source project',
    isMobileApp: true,
    demoStatusLabel: 'Mobile App (Flutter)',
    imageUrl: '/projects/display-projek-mobile-kasir.jpg',
    imageFit: 'contain',
    featured: true,
    metrics: [
      { label: 'Platform', value: 'Mobile App' },
      { label: 'Framework', value: 'Flutter Dart' },
      { label: 'Focus', value: 'Kasir & Struk' }
    ]
  },
  {
    id: 'web-barang-hilang',
    title: 'Web Sistem Barang Hilang',
    subtitle: 'Platform Informasi & Sortir Barang Hilang Lingkungan Sekolah',
    category: 'fullstack',
    summary: 'Website sentralisasi informasi dan manajemen penemuan barang hilang di sekolah yang tertata dan informatif.',
    description: 'Dikembangkan untuk menyelesaikan kendala sistem sortir dan pengumuman barang hilang di lingkungan sekolah yang sebelumnya kurang tertata dan minim informasi. Website ini memfasilitasi pelaporan barang temuan, pencarian barang hilang, dan verifikasi klaim kepemilikan oleh siswa/guru.',
    architecture: [
      'Arsitektur web berbasis PHP/Laravel dan JavaScript',
      'Database relasional MySQL untuk katalog kategori barang dan status klaim',
      'Alur verifikasi dan sistem pelaporan status barang hilang/ditemukan'
    ],
    stack: [
      'Laravel',
      'PHP',
      'MySQL',
      'JavaScript'
    ],
    highlights: [
      'Digitalisasi dan transparansi pencarian barang hilang sekolah',
      'Kategori sortir barang dan update status penemuan terintegrasi',
      'Sistem informasi yang mudah diakses seluruh warga sekolah'
    ],
    challenges: 'Tantangan terbesar berada pada perancangan alur sistem (business flow) agar proses pelaporan, penyortiran, dan klaim barang tepat guna dan sesuai dengan operasional di lingkungan sekolah.',
    role: 'Web Full-Stack Developer',
    githubUrl: 'https://github.com/fadhlanel/web-aplikasi-barang-hilang',
    imageUrl: '/projects/display-web-barang-hilang.jpg',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Sistem', value: 'Lost & Found' },
      { label: 'Lingkup', value: 'Sekolah' },
      { label: 'Database', value: 'MySQL' }
    ]
  },
  {
    id: 'web-kasir-tunaiku',
    title: 'Web Kasir Tunaiku',
    subtitle: 'Platform POS Kasir Multi-Toko untuk Skala Usaha Besar',
    category: 'fullstack',
    summary: 'Sistem kasir web lengkap berskala besar dengan dukungan pendaftaran dan pengelolaan transaksi banyak toko (multi-store).',
    description: 'Versi sistem kasir komprehensif untuk skala usaha besar yang mendukung banyak toko terdaftar sekaligus dalam satu platform. Menyediakan manajemen stok barang, multi-outlet checkout, rekapitulasi data penjualan real-time, dan manajemen hak akses pengguna.',
    architecture: [
      'Backend framework Laravel dengan arsitektur MVC',
      'Skema relasi database multi-cabang/toko dengan MySQL',
      'Modul point of sale (POS) cepat dengan interaktivitas JavaScript',
      'Dashboard rekapitulasi transaksi dan analitik penjualan'
    ],
    stack: [
      'Laravel',
      'PHP',
      'MySQL',
      'JavaScript'
    ],
    highlights: [
      'Mendukung pendaftaran dan isolasi data banyak toko terdaftar',
      'Sistem kasir dan inventaris lengkap untuk skala usaha besar',
      'Rekapitulasi penjualan komprehensif multi-outlet'
    ],
    challenges: 'Tantangan paling kompleks adalah perancangan struktur dan relasi database multi-toko agar efisien dalam menampung relasi data transaksi yang besar dan beragam.',
    role: 'Full-Stack Developer',
    isPrivateRepo: true,
    privateRepoReason: 'Repository privat / closed-source project',
    imageUrl: '/projects/display-web-kasir-tunaiku.jpg',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Arsitektur', value: 'Multi-Store' },
      { label: 'Backend', value: 'Laravel' },
      { label: 'Skala', value: 'Usaha Besar' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-smkn6-jember',
    period: '2023 - Sekarang',
    role: 'Siswa Kelas 12 Rekayasa Perangkat Lunak',
    organization: 'SMKN 6 Jember',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh pendidikan menengah kejuruan di jurusan Rekayasa Perangkat Lunak, mendalami pemrogramanan web, mobile, serta pengoperasian sistem dan basis data di lingkungan Windows.',
    highlights: [
      'Jurusan Rekayasa Perangkat Lunak (RPL)',
      'Pengembangan Web & Mobile',
      'Pemrograman Berorientasi Objek & Database MySQL'
    ],
    tech: ['Laravel', 'Flutter', 'MySQL', 'Node.js', 'Lua', 'JavaScript']
  }
];
