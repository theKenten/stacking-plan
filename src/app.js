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
			// Default to level 3
			activeLevel: 3,
			activeUnit: 301,
			activeFloorPlanID: 'the-bow-a',

			levelTop: 9,
			levelBottom: 3,

			floorplans: {},
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
					} else {
						floorplanData[dataName] = item.dataset[dataName]
					}
				}

				// Add Images to object
				floorplanData.imgWhite = item.querySelector('.fp-cms-img-white')
				floorplanData.imgBlack = item.querySelector('.fp-cms-img-black')

				// Add PDF to object
				floorplanData.pdf = item.querySelector('.fp-cms-pdf').getAttribute("href")
				
				// remove # values
				floorplanData.pdf = floorplanData.pdf === '#' ? null : floorplanData.pdf

				// Formats Into:
				// { the-key: {Object Data},
				//   the-legacy: {Object Data},
				//   etc...
				// }
				this.floorplans[floorplanID] = floorplanData
			})
		},

		closeInfoPane() {
			this.activeUnit = null
		},

		exteriorLevelClick(el) {
			console.log(el)
			console.log(el.dataset.exteriorLevel)

			let exteriorLevel = el.dataset.exteriorLevel
			this.changeActiveLevel(exteriorLevel)
		},

		unitClick(el) {
			this.changeActiveUnit(el)
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

			// Change the active unit to 01 unit of the floor
			let unitNumber = level + '01';
			let unit = document.querySelector(`[data-unit-number="${unitNumber}"]`);

			this.changeActiveUnit(unit)
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
		}
	}

}