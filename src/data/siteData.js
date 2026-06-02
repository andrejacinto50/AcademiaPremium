import {
  Dumbbell,
  Target,
  Zap,
  ShieldCheck,
  Clock,
  MapPin,
  MessageCircle,
  Activity,
  Trophy,
  Flame
} from 'lucide-react';

export const whatsappLink =
  'https://api.whatsapp.com/send/?phone=5548991087702&text=Ol%C3%A1%21+Vi+o+modelo+de+site+premium+para+academia+e+quero+entender+melhor.&type=phone_number&app_absent=0';

export const instragam = 
'https://www.instagram.com/aj__digital/';

export const localização = 
'https://www.google.com/maps/place/Academia+Correia+Gym/@-27.3073505,-48.550196,17z/data=!3m1!4b1!4m6!3m5!1s0x952759d1bc846a35:0x6b3fde099b7180d8!8m2!3d-27.3073505!4d-48.550196!16s%2Fg%2F11cp77_k8v?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D';

export const navItems = [
  { label: 'Início', path: '/' },
  { label: 'Estrutura', path: '/estrutura' },
  { label: 'Sobre', path: '/sobre' },
  { label: 'Planos', path: '/planos' },
  { label: 'Contato', path: '/contato' }
];

export const differentials = [
  {
    icon: Target,
    title: 'Treino preparado para cada pessoa',
    text:
      'Cada aluno possui objetivos e necessidades diferentes. A proposta é oferecer mais direção, acompanhamento e evolução no treino.'
  },

  {
    icon: Dumbbell,
    title: 'Estrutura preparada para evolução',
    text:
      'Ambiente pensado para quem quer treinar com mais foco, constância e confiança todos os dias.'
  },

  {
    icon: ShieldCheck,
    title: 'Acompanhamento mais próximo',
    text:
      'Orientação para ajudar o aluno a entender melhor o treino e manter uma rotina mais segura e organizada.'
  },

  {
    icon: Zap,
    title: 'Energia forte desde o primeiro contato',
    text:
      'Visual moderno, ambiente motivador e experiência criada para transmitir mais presença e profissionalismo.'
  }
];

export const process = [
  [
    '01',
    'Entendimento do objetivo',
    'O primeiro passo é entender o que a pessoa busca: condicionamento, estética, força, saúde ou evolução diária.'
  ],

  [
    '02',
    'Treino conforme necessidade',
    'A rotina é preparada conforme nível, objetivo e realidade de cada aluno.'
  ],

  [
    '03',
    'Acompanhamento durante o treino',
    'Mais direção e suporte para ajudar o aluno a treinar com confiança e constância.'
  ],

  [
    '04',
    'Evolução contínua',
    'A ideia é manter uma rotina que ajude a pessoa a evoluir de forma constante.'
  ]
];

export const plans = [
  {
    name: 'Plano Mensal',
    tag: 'flexível',

    text:
      'Ideal para quem quer começar agora e conhecer melhor a estrutura da academia.',

    benefits: [
      'Acesso à academia',
      'Treino orientado',
      'Suporte pelo WhatsApp'
    ],

    featured: false
  },

  {
    name: 'Plano Trimestral',
    tag: 'mais procurado',

    text:
      'Pensado para quem busca mais constância, acompanhamento e evolução no treino.',

    benefits: [
      'Melhor custo-benefício',
      'Treino preparado',
      'Acompanhamento mais próximo'
    ],

    featured: true
  },

  {
    name: 'Plano Especial',
    tag: 'personalizado',

    text:
      'Opção preparada para objetivos específicos e necessidades diferentes.',

    benefits: [
      'Plano conforme objetivo',
      'Atendimento direcionado',
      'Condição sob consulta'
    ],

    featured: false
  }
];

export const stats = [
  {
    value: '100%',
    label: 'foco em evolução'
  },

  {
    value: '+ presença',
    label: 'marca mais profissional'
  },

  {
    value: '24h',
    label: 'contato direto no WhatsApp'
  }
];

export const gallery = [
  'Treino de força',
  'Equipamentos modernos',
  'Ambiente motivador',
  'Rotina de treino',
  'Preparação física',
  'Evolução diária'
];

export const contactCards = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',

    text:
      'Contato direto para informações sobre planos, horários e funcionamento.'
  },

  {
    icon: Clock,
    title: 'Horários',

    text:
      'Horários preparados para facilitar a rotina de quem treina.'
  },

  {
    icon: MapPin,
    title: 'Localização',

    text:
      'Academia local com ambiente organizado e acesso fácil.'
  },

  {
    icon: Activity,
    title: 'Treino orientado',

    text:
      'Treino preparado conforme necessidade e objetivo da pessoa.'
  }
];

export const miniProofs = [
  {
    icon: Flame,
    text: 'Treine com mais direção'
  },

  {
    icon: Trophy,
    text: 'Ambiente preparado para evoluir'
  },

  {
    icon: Activity,
    text: 'Contato direto pelo WhatsApp'
  }
];