import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import FormInquire from './components/FormInquire.vue'
// import TheWelcome from './components/TheWelcome.vue'

export default {

	components: {
		FormInquire
	},

	/**
	 * Data attached to the component
	 * @return {Object}
	 */
	data() {
		return {
			// Default to level 9
			activeLevel: 9,
			activeUnit: null,
			activeFloorPlanID: 'the-bow-a',

			levelTop: 9,
			levelBottom: 3,

			floorplans: {},

			isInfoPaneClosed: false
		}
	},

	/**
	 * When the component is created
	 * @return  {Null}
	 */
	created() {
		this.getFloorPlans();
	},

	/**
	 * Triggers when mounted
	 * el has been replaced by the newly created vm.$el.
	 * @return {Null}
	 */
	mounted() {
		/**
		 * Add click event to all units
		 */
		const interiorUnits = document.querySelectorAll('.sp-interior__unit');

		interiorUnits.forEach(el => el.addEventListener('click', event => {
			this.unitClick(el)
		}));
		
		/**
		 * Add click event to all exterior levels
		 */
		const exteriorLevels = document.querySelectorAll('.sp-exterior__level');

		exteriorLevels.forEach(el => el.addEventListener('click', event => {
			this.exteriorLevelClick(el)
		}));


		Fancybox.bind("[data-fancybox]", {
		  // Your custom options
		});

	},

	/**
	 * Methods attached to the component
	 * @type {Object}
	 */
	methods: {
		isActiveLevel(level) {
			return level === this.activeLevel
		},

		isActiveUnit(unit) {
			return unit === this.activeUnit
		},

		getFloorPlans() {
			const cmsFloorplans = document.querySelectorAll('.fp-item')
			let floorplans = [];

			// Loop through the residences
			cmsFloorplans.forEach((item) => {
				let floorplanData = {},
						floorplanID;

				for(let dataName in item.dataset) {
					// console.log(dataName, item.dataset[dataName])
					if (dataName === 'id') {
						floorplanID = item.dataset[dataName];
					}
					
					floorplanData[dataName] = item.dataset[dataName]
					
				}

				// Add Images to object
				floorplanData.imgWhite = item.querySelector('.fp-cms-img-white')
				floorplanData.imgBlack = item.querySelector('.fp-cms-img-black')

				// Add PDF to object
				floorplanData.pdf = item.querySelector('.fp-cms-pdf').getAttribute("href")
				
				// remove # values
				floorplanData.pdf = floorplanData.pdf === '#' ? null : floorplanData.pdf

				// Get Gallery Images
				floorplanData.gallery = Array.from(item.querySelectorAll('.fp-cms-gallery-img'))
				// console.log(item.querySelectorAll('.fp-cms-gallery-img'))

				// Formats Into:
				// { the-key: {Object Data},
				//   the-legacy: {Object Data},
				//   etc...
				// }
				this.floorplans[floorplanID] = floorplanData
			})
		},

		toggleInfoPane() {
			this.isInfoPaneClosed ? this.openInfoPane() : this.closeInfoPane;
		},

		openInfoPane() {
			this.isInfoPaneClosed = false;
		},

		closeInfoPane() {
			this.isInfoPaneClosed = true;
			document.querySelector('body').classList.remove('sp-no-scroll')
		},

		// Go completely offscreen because there is not active unit
		// Occurs when switching floors
		disableInfoPane() {
			this.activeUnit = null
			document.querySelector('body').classList.remove('sp-no-scroll')
		},

		exteriorLevelClick(el) {
			// console.log(el)
			// console.log(el.dataset.exteriorLevel)

			let exteriorLevel = el.dataset.exteriorLevel
			this.changeActiveLevel(exteriorLevel)
		},

		unitClick(el) {
			this.changeActiveUnit(el)
			document.querySelector('body').classList.add('sp-no-scroll')
		},

		increaseLevel() {
			this.changeActiveLevel(this.activeLevel + 1)
		},

		decreaseLevel() {
			this.changeActiveLevel(this.activeLevel - 1)
		},

		changeActiveLevel(level) {
			// Do not change to a non-existant level
			if (level > this.levelTop || level < this.levelBottom)
					return

			this.activeLevel = parseInt(level)

			this.disableInfoPane()

			// // Change the active unit to 01 unit of the floor
			// let unitNumber = level + '01';
			// let unit = document.querySelector(`[data-unit-number="${unitNumber}"]`);

			// this.changeActiveUnit(unit)
		},

		changeActiveUnit(unit) {
			this.activeUnit = parseInt(unit.dataset.unitNumber)

			// Change the active floorplan
			this.changeActiveFloorPan(unit)
		},

		changeActiveFloorPan(unit) {
			this.activeFloorPlanID = unit.dataset.unitFloorplan
		},
	},

	/**
	 * Holds computed props
	 * Reactive properties that can be static, derived from other variables, 
	 * or static functions
	 * @type {Object}
	 */
	computed: {
		currentFloorPlan() {
			return this.floorplans[this.activeFloorPlanID]
		},

		infoPaneState() {
			let state = 'disabled'; // Disabled by default

			if ( this.activeUnit && this.isInfoPaneClosed )
				state = 'closed';

			if ( this.activeUnit && ! this.isInfoPaneClosed )
				state = 'opened';

			return state;
		}
	}

}