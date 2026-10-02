export const business = {
 name: 'PestiQ', email: 'hello@pestiq.example', phone: '+91 90000 00000', phoneHref: '+919000000000', verified: false,
 cities: ['Mumbai','Delhi NCR','Bengaluru','Pune','Hyderabad','Chennai','Kolkata','Ahmedabad','Jaipur','Chandigarh','Kochi','Indore'],
 offer: {title:'A fresh start. A little less.', value:'15%', description:'Explore our introductory home-treatment offer.', code:'FRESHSTART', terms:'Sample offer only. Final eligibility, pricing and terms to be confirmed.'},
 testimonials: [
 {name:'Radhika M.',city:'Bengaluru',quote:'They took the time to explain where the problem was coming from. Having a clear plan made all the difference.',type:'Home treatment'},
 {name:'Arvind S.',city:'Pune',quote:'A straightforward visit, clear advice and a follow-up plan. Exactly what we were looking for.',type:'Residential inspection'},
 {name:'Fatima S.',city:'Hyderabad',quote:'The inspection notes helped us understand what to change in our kitchen, as well as what needed treatment.',type:'Commercial inspection'}],
};
export const services = [
 {slug:'termite-control',title:'Termite Control',icon:'Bug',text:'Protect the spaces you’ve built. Targeted solutions for timber, furniture and foundations.',detail:'An inspection looks for visible damage, moisture conditions and potential entry points. A treatment plan can then be tailored to the property, with follow-up monitoring.'},
 {slug:'cockroach-control',title:'Cockroach Control',icon:'ScanSearch',text:'Get to the source with focused treatment for kitchens, drains and hidden harbourage.',detail:'We focus on activity hotspots, food sources and hiding places. Treatment options and preparation instructions are explained before a visit.'},
 {slug:'rodent-management',title:'Rodent Management',icon:'ShieldCheck',text:'A considered approach to trapping, entry-point proofing and ongoing prevention.',detail:'An inspection identifies access routes and signs of activity. A plan combines appropriate control measures with practical advice on sealing gaps and removing attractants.'},
 {slug:'mosquito-fly-control',title:'Mosquito & Fly Control',icon:'Wind',text:'Reclaim your outdoor spaces by addressing breeding sites and seasonal activity.',detail:'We assess standing water, breeding areas and activity patterns before recommending suitable control measures for indoor and outdoor spaces.'},
 {slug:'bed-bug-treatment',title:'Bed Bug Treatment',icon:'BedDouble',text:'Detailed inspection and a treatment plan for bedrooms, upholstery and furniture.',detail:'Inspection covers mattress seams, furniture joints and other hiding places. Preparation and follow-up requirements depend on the treatment selected.'},
 {slug:'commercial-pest-control',title:'Commercial Pest Control',icon:'Building2',text:'Planned pest management that fits your premises, operations and reporting needs.',detail:'A site assessment helps shape a scheduled pest-management plan. Monitoring, reporting and visit frequency can be adapted to the business.'},
];
export const navigation = [['About','/about'],['Services','/services'],['Residential','/residential'],['Commercial','/commercial'],['Offers','/offers'],['Contact','/contact']];
export const routeInfo = {
 about:{title:'A more considered approach to pest control.',description:'Get to know PestiQ and our approach to inspection, treatment and prevention.',anchor:'about'},
 services:{title:'The right treatment starts with understanding.',description:'Explore pest-control options for your home and business.',anchor:'services'},
 residential:{title:'Make room for living. Keep pests out.',description:'Property-specific pest management for apartments, independent homes and shared spaces.',anchor:'property'},
 commercial:{title:'Protect your business. Keep things moving.',description:'Pest management planned around restaurants, workplaces, hospitality and warehouses.',anchor:'property'},
 offers:{title:'A fresh start for your space.',description:'Explore the current introductory treatment offer.',anchor:'offer'},
 contact:{title:'Let’s get to the source.',description:'Tell us what you’ve noticed and explore an inspection for your property.',anchor:'contact'}
};
