// Each approved service receives its own content, images, metadata and FAQs.
import {additionalServiceDetails} from './additional-service-details';
export const serviceDetails = {
 'termite-control': {
  slug:'termite-control', name:'Termite Control',
  metadata:{title:'Termite Control & Inspection for Homes and Businesses',description:'Noticed mud tubes, discarded wings or damaged wood? Explore termite signs, inspection, treatment options and prevention with PestiQ.'},
  hero:{eyebrow:'TERMITE CONTROL',cta:'Book a termite inspection',title:['Protect the wood.','Preserve the place.'],description:'Noticed something unusual in your woodwork? Start with a closer look, a clear explanation and a plan for your property.',image:'/images/termite-hero.webp',alt:'Sunlight across timber floors, walls and exposed beams in a wood-lined room',caption:'THE PLACES WE VALUE DESERVE A CLOSER LOOK.'},
  intro:{label:'SMALL SIGNS. IMPORTANT QUESTIONS.',title:'Termites work quietly.\nThe clues don’t always.',description:'A change in the woodwork can raise a lot of questions. These signs are worth checking, but none should be used on its own to diagnose an infestation.'},
  signs:[
   {icon:'Route',title:'Mud tubes along surfaces',text:'Narrow earthen tunnels on walls, foundations or timber can indicate subterranean termite activity.',location:'Look around foundations & woodwork'},
   {icon:'Layers',title:'Hollow or damaged timber',text:'Feeding can leave galleries beneath a wood surface. Damage can also have other causes.',location:'Look at skirting, frames & furniture'},
   {icon:'Feather',title:'Discarded wings',text:'Clusters of wings may follow a termite swarm. Flying ants can be mistaken for termites.',location:'Look near windows & entry points'},
   {icon:'Search',title:'Activity behind the surface',text:'Termites often stay hidden in wood or sheltered tunnels. An inspection helps interpret the evidence.',location:'Check accessible areas, without dismantling'}
  ],
  problem:{label:'UNDERSTAND WHAT’S HAPPENING',title:'It’s more than\na mark on the timber.',paragraphs:['Termites feed on cellulose, including wood. Depending on the species, activity may involve soil-connected routes or timber itself. What you see at the surface may be only part of the picture.','An assessment needs to distinguish termite activity from moisture damage and other wood-damaging pests. Species, access and the property’s construction all influence what happens next.'],image:'/images/termite-detail.webp',alt:'Close view of termite feeding galleries inside damaged timber',caption:'A closer look at termite-damaged timber.',credit:{name:'William Rafti, William Rafti Institute',url:'https://commons.wikimedia.org/wiki/File:Termite_damaged_wood.jpg'},note:'Spotted a sign? Photograph it and note its location to share at your inspection.'},
  process:{label:'FROM UNCERTAINTY TO A CLEAR PLAN',title:'Inspect carefully.\nTreat thoughtfully.\nKeep watching.',intro:'A property-specific plan starts with evidence. These are the stages to discuss, with methods and follow-up agreed after assessment.',steps:[
   {name:'Inspect',title:'Find the activity. Understand the context.',text:'Review accessible timber, signs of activity and relevant moisture conditions. Discuss what can be assessed, any access limitations and whether further investigation is needed.',tags:['Signs & identification','Access & construction','Findings explained'],icon:'ScanSearch'},
   {name:'Treat',title:'Choose a method that fits the findings.',text:'Options may involve suitable soil, wood or bait-based approaches. Selection depends on the species, construction and locally permitted products. Preparation and use instructions are explained before work.',tags:['Options & scope','Preparation guidance','Transparent proposal'],icon:'Target'},
   {name:'Monitor',title:'Make follow-up part of the conversation.',text:'Agree what will be checked, when to review activity and how to report new signs. Monitoring and property maintenance are ongoing parts of the plan.',tags:['Review points','New signs to report','Maintenance advice'],icon:'Activity'}
  ]},
  applicability:{label:'ONE PROBLEM. DIFFERENT SPACES.',title:'For the home you love.\nThe business you’re building.',items:[
   {type:'RESIDENTIAL',title:'Keep everyday life in focus.',text:'Discuss concerns around furniture, door frames, fitted cabinetry and accessible structural timber, with a plan that takes your property and household routine into account.',link:'/residential',linkText:'Residential care',image:'/images/residential.webp',alt:'Bright modern living room with wooden furnishings',examples:['Apartments','Independent homes','Shared buildings'],icon:'House'},
   {type:'COMMERCIAL',title:'Care that considers your operations.',text:'Review timber fixtures, storage and accessible building areas. Planning can take access, occupancy, maintenance responsibilities and operational schedules into account.',link:'/commercial',linkText:'Commercial care',image:'/images/commercial.webp',alt:'Restaurant interior with timber furniture and fixtures',examples:['Workplaces','Hospitality','Commercial premises'],icon:'Building2'}
  ]},
  prevention:{label:'BEYOND THE TREATMENT',title:'Small changes.\nA more considered defence.',intro:'Maintenance helps reduce conditions that can attract termites. It complements assessment and treatment; it doesn’t replace them.',items:[
   {title:'Keep moisture in check.',text:'Repair leaks and maintain drainage around the building. Keep ventilation openings clear.'},
   {title:'Give timber some space.',text:'Avoid direct wood-to-soil contact where practical. Store timber and wood debris away from the building.'},
   {title:'Make inspection easier.',text:'Keep accessible foundations and timber areas visible. Note changes and discuss an appropriate inspection schedule.'},
   {title:'Review gaps and changes.',text:'Discuss cracks, utility openings and renovation work with your maintenance team or pest professional.'}
  ]},
  faq:{label:'BEFORE YOU BOOK',title:'Good questions.\nClearer next steps.',intro:'Some answers depend on the property. An inspection is the starting point for an individual recommendation.',items:[
   {question:'Do mud tubes always mean active termites?',answer:'Mud tubes are a useful clue, but a visible tube alone does not establish whether activity is current. Inspection is needed to interpret it alongside other evidence.'},
   {question:'Can termites be mistaken for ants?',answer:'Yes. Winged ants and termites can look similar at first glance. Wing proportions and antennae are useful distinguishing features, but identification should be confirmed before choosing treatment.'},
   {question:'Which termite treatment will my property need?',answer:'That depends on the termite species, evidence found, construction, access and products permitted locally. Discuss the scope and alternatives after inspection rather than choosing a method from a photograph alone.'},
   {question:'Will I need to move furniture or leave the property?',answer:'Preparation and access requirements depend on the proposed method. Ask for written instructions before the visit, including any occupancy or re-entry requirements that apply.'},
   {question:'How much does termite control cost?',answer:'Pricing is not fixed in this demo. A proposal should explain the areas covered, method, access requirements and any follow-up visits, so you can assess the complete scope.'},
   {question:'Is one visit enough?',answer:'The number of visits and monitoring schedule depend on the findings and method. A provider should explain how progress will be assessed and what to do if you notice further activity.'}
  ]},
  related:{label:'LOOKING FOR SOMETHING ELSE?',title:'Care for the rest of your space.',slugs:['cockroach-control','rodent-management','commercial-pest-control']},
  contact:{label:'START WITH A CLOSER LOOK',title:'Noticed a sign?\nLet’s understand it.',text:'Tell us what you’ve seen and where. An inspection is the first step toward a plan for your property.',button:'Request a termite inspection',placeholder:'For example, a mud tube near a door frame'},
  references:[{name:'Cornell IPM · Termite identification',url:'https://cals.cornell.edu/integrated-pest-management/outreach-education/whats-bugging-you/termites'},{name:'US EPA · Termite prevention & treatment overview',url:'https://www.epa.gov/safepestcontrol/termites-how-identify-and-control-them'}]
 },
 ...additionalServiceDetails
};
