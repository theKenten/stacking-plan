<template>

  <div>

    <!-- STACKING PLAN UNITS -->
    <div class="sp-interior">

      <svg class="sp-interior__compass" enable-background="new 0 0 89.9 95.6" height="95.6" viewBox="0 0 89.9 95.6"
        width="89.9" xmlns="http://www.w3.org/2000/svg">
        <g fill="#ccaa68">
          <path d="m87.9 51.7c-.5 22.9-19.1 41.4-42 42v2c24.1-.5 43.4-19.9 44-44z" />
          <path d="m44 93.6c-22.9-.5-41.5-19.1-42-42h-2c.5 24.1 19.9 43.4 44 44z" />
          <path d="m45 16.8-24.2 60.3 24.2-7.4 24.2 7.4zm-20.8 57.2 20.8-51.8v45.4z" />
          <path
            d="m51.2.1v14h-2.2l-8.4-9.2h-.1l.2 6c0 1.3.1 2.1.3 3.1h-2.1v-14h2.1l8.4 9.3h.1l-.2-6c0-1.2-.1-2.4-.3-3.2z" />
          <path d="m52 6.2v2c20.1 3.3 35.5 20.5 36 41.4h2c-.5-21.9-16.8-40.1-38-43.4z" />
          <path d="m38 6.2c-21.2 3.3-37.5 21.5-38 43.5h2c.5-20.9 15.9-38.1 36-41.4z" />
        </g>
      </svg>

      <div class="sp-interior-legend">
        <div class="sp-interior-legend__item sp-interior-legend__item--text">
          <span>Please inquire about remaining inventory</span>
        </div>

        <!-- <div class="sp-interior-legend__item">
					<div class="sp-legend-marker sp-legend-marker--available"></div>
					<span>Available</span>
				</div> -->
        <!-- <div class="sp-interior-legend__item">
					<div class="sp-legend-marker sp-legend-marker--sold"></div>
					<span>Sold</span>
				</div>
				<div class="sp-interior-legend__item">
					<div class="sp-legend-marker sp-legend-marker--unreleased"></div>
					<span>Unreleased</span>
				</div> -->
      </div>

      <div class="sp-interior__controls">
        <span class="sp-interior__text">Floor {{ activeLevel }}</span>

        <div class="sp-interior__nav">
          <!-- Up Arrow -->
          <button @click="increaseLevel" :disabled="activeLevel == levelTop"
            :class="{ 'disabled' : activeLevel == levelTop }" class="sp-interior__nav-arrow sp-interior__nav-up">
            <svg enable-background="new 0 0 12.2 7" height="7" viewBox="0 0 12.2 7" width="12.2"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                d="m5.4.3c.4-.4 1-.4 1.4 0l5.1 5c.4.4.4 1 0 1.4s-1 .4-1.4 0l-4.4-4.3-4.4 4.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4z"
                fill="currentColor" fill-rule="evenodd" />
            </svg>
          </button>

          <!-- Down Arrow -->
          <button @click="decreaseLevel" :disabled="activeLevel == levelBottom"
            :class="{ 'disabled' : activeLevel == levelBottom }" class="sp-interior__nav-arrow sp-interior__nav-down">
            <svg enable-background="new 0 0 12.2 7" height="7" viewBox="0 0 12.2 7" width="12.2"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd"
                d="m.3.3c.4-.4 1-.4 1.4 0l4.4 4.3 4.4-4.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5.1 5c-.4.4-1 .4-1.4 0l-5.1-5c-.4-.4-.4-1 0-1.4z"
                fill="currentColor" fill-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      <svg class="sp-interior__svg" enable-background="new 0 0 8192 6768.9" viewBox="0 0 8192 6768.9" width="8192px"
        height="6768.9px">

        <!-- Base Level -->
        <g id="sp-level-base">
          <path id="sp-level-base__footprint" d="M7572.5,117.6H489.3L0,627.7V3441l667,0.4l-0.4,421.5l-402.3,133.1l242.3,724.1l-181.2,60.6
		l507.1,1515.6c107.5,146.8,310.2,385.6,741.7,284.1l4283.2-1441.1l1917.3-633.1l404.7-571V627.7L7572.5,117.6z" />
          <path id="sp-level-base__floors-3" class="sp-interior__base" d="M6710.7,2762.4l-1837.1,614.5l-35.5-106.2l-229.8,76.9l-209.4-634.3l-52.1-155.7l-3.5-1352
		l-176.4-0.1V117.6H489.3L0,627.7V3441l667,0.3l0,0.2h0l-0.4,421.5L264.3,3996l242.2,724.1l0,0l0,0l-181.2,60.6l507.1,1515.7
		c219.3,318,504.2,340.4,741.6,284l4283.2-1441.1l1917.3-633.1l68.2-96.3l336.5-474.9V2806.5H6728.2L6710.7,2762.4z" />
          <path id="sp-level-base__floor-4" class="sp-interior__base" d="M6728.2,2806.5l-17.5-44l-1837.2,614.5l-35.5-106.2l-229.8,76.9l-209.4-634.3l-52.1-155.7
		l-3.5-1352l-176.4-0.1V117.6H489.3L0,627.7V3441v0l667,0.4l-0.5,419.9l-402.2,134.6l0,0.1l0,0l242.3,724.1l-181.3,60.5l0.1,0.2l0,0
		l507.1,1515.6c107.5,146.7,310.1,385.4,741.3,284.2l0.5,0.2l6200.4-2074.5l404.7-571.2V2806.5H6728.2z M1312.4,3745.4
		L1312.4,3745.4L1206.9,3430l0-1113.6l2763.2-10.8l0.3,218.1l161.5,2.7l78.9,245.4L1312.4,3745.4z" />
          <path id="sp-level-base__floors-5-9" class="sp-interior__base-2" d="M8179.3,2806.5H6727.9l-17.2-44.1l-1487.5,497.7l-247.5-739.6L1313.4,3745.8l-30.3-90.6
		l-616.5,206.2l0,1.6l-402.3,133.1l242.3,724.1l-181.2,60.6l507.1,1515.6c107.5,146.8,310.2,385.6,741.7,284.1l4283.2-1441.1
		l1917.3-633.1l404.7-571V2806.5z" />
        </g>


        <!-- ************** Units ************** -->

        <!-- Level 3 -->
        <Transition name="fade">
          <g v-show="isActiveLevel(3)" id="sp-interior-level-3" class="sp-interior__level" data-interior-level="3">
            <g>
              <polygon :class="{ 'active' : isActiveUnit(307) }, getUnitState(307)" class="sp-interior__unit"
                data-unit-number="307" :data-unit-floorplan="getUnitFloorPlan(307) ?? 'the-riley-a'" points="1299.6,3749.9 1477.5,4281.7 1629.5,4230.9 
						1772.9,4659.3 3075.3,4223.5 2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(306) }, getUnitState(306)" class="sp-interior__unit"
                data-unit-number="306" :data-unit-floorplan="getUnitFloorPlan(306) ?? 'the-riley-d'" points="4259.3,2759.7 4580.5,3719.9 3075.3,4223.5 
						2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(305) }, getUnitState(305)" class="sp-interior__unit"
                data-unit-number="305" :data-unit-floorplan="getUnitFloorPlan(305) ?? 'the-corner-b'" points="5987.8,3469.9 6210.2,4136.3 6285.8,4111.1 
						6430.4,4543.8 6533.1,4509.4 6657.1,4880.1 7774.4,4506 8179.2,3935 8179.3,2806.5 6728,2814.1 6710.6,2762.1 6584.3,2804.2 
						6800.6,3450.8 6504.1,3550.1 6453.3,3398.5 6190.8,3486.3 6165.4,3410.5" />

              <polygon :class="{ 'active' : isActiveUnit(304) }, getUnitState(304)" class="sp-interior__unit"
                data-unit-number="304" :data-unit-floorplan="getUnitFloorPlan(304) ?? 'the-broadview-b'" points="5987.8,3469.9 4602.7,3933.4 5094.4,5403 
						6657,4879.7 6533.1,4509.4 6430.5,4543.8 6285.7,4110.9 6210.7,4135.9" />

              <rect :class="{ 'active' : isActiveUnit(303) }, getUnitState(303)" class="sp-interior__unit"
                data-unit-number="303" :data-unit-floorplan="getUnitFloorPlan(303) ?? 'the-broadview-a'" x="3347.9"
                y="4137.6" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1345.9404 1560.5652)" width="1540.5"
                height="1549.7" />

              <polygon :class="{ 'active' : isActiveUnit(302) }, getUnitState(302)" class="sp-interior__unit"
                data-unit-number="302" :data-unit-floorplan="getUnitFloorPlan(302) ?? 'the-broadview-c'" points="1936.9,5099.9 1856,4852.3 3141.8,4422.2 
						3633.5,5891.8 2178.9,6377.9 1769.4,5154.1" />

              <path :class="{ 'active' : isActiveUnit(301) }, getUnitState(301)" class="sp-interior__unit"
                data-unit-number="301" :data-unit-floorplan="getUnitFloorPlan(301) ?? 'the-bow-a'" d="M1680.6,4888.6l-220.3,77.6l-65.1-178.5l227.9-78.5l-97.7-287
		l-179.8,63.4l-255.7-766.3l-825.7,276.8l242.3,724.1l-181.2,60.6l507.1,1515.6c107.5,146.8,310.2,385.6,741.7,284.1l604.6-203.4
		L1680.6,4888.6z" />

            </g>
          </g>
        </Transition>

        <!-- Level 4 -->
        <Transition name="fade">
          <g v-show="isActiveLevel(4)" id="sp-interior-level-4" class="sp-interior__level" data-interior-level="4">
            <g>
              <polygon :class="{ 'active' : isActiveUnit(407) }, getUnitState(407)" class="sp-interior__unit"
                data-unit-number="407" :data-unit-floorplan="getUnitFloorPlan(407) ?? 'the-riley-b'" points="1299.6,3749.9 1477.5,4281.7 1629.5,4230.9 
								1772.9,4659.3 3075.3,4223.5 2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(406) }, getUnitState(406)" class="sp-interior__unit"
                data-unit-number="406" :data-unit-floorplan="getUnitFloorPlan(406) ?? 'the-riley-e'" points="4259.3,2759.7 4580.5,3719.9 3075.3,4223.5 
								2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(405) }, getUnitState(405)" class="sp-interior__unit"
                data-unit-number="405" :data-unit-floorplan="getUnitFloorPlan(405) ?? 'the-corner'" points="5987.8,3469.9 6210.2,4136.3 6285.8,4111.1 
								6430.4,4543.8 6533.1,4509.4 6657.1,4880.1 7774.4,4506 8179.2,3935 8179.3,2806.5 6728,2814.1 6710.6,2762.1 6584.3,2804.2 
								6800.6,3450.8 6504.1,3550.1 6453.3,3398.5 6190.8,3486.3 6165.4,3410.5" />

              <polygon :class="{ 'active' : isActiveUnit(404) }, getUnitState(404)" class="sp-interior__unit"
                data-unit-number="404" :data-unit-floorplan="getUnitFloorPlan(404) ?? 'the-broadview-b'" points="5987.8,3469.9 4602.7,3933.4 5094.4,5403 
								6657,4879.7 6533.1,4509.4 6430.5,4543.8 6285.7,4110.9 6210.7,4135.9" />


              <rect :class="{ 'active' : isActiveUnit(403) }, getUnitState(403)" class="sp-interior__unit"
                data-unit-number="403" :data-unit-floorplan="getUnitFloorPlan(403) ?? 'the-broadview-a'" x="3347.9"
                y="4137.6" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1345.9404 1560.5652)" width="1540.5"
                height="1549.7" />

              <polygon :class="{ 'active' : isActiveUnit(402) }, getUnitState(402)" class="sp-interior__unit"
                data-unit-number="402" :data-unit-floorplan="getUnitFloorPlan(402) ?? 'the-broadview-c'" points="1936.9,5099.9 1856,4852.3 3141.8,4422.2 
								3633.5,5891.8 2178.9,6377.9 1769.4,5154.1" />

              <path :class="{ 'active' : isActiveUnit(401) }, getUnitState(401)" class="sp-interior__unit"
                data-unit-number="401" :data-unit-floorplan="getUnitFloorPlan(401) ?? 'the-bow-a'" d="M1680.6,4888.6l-220.3,77.6l-65.1-178.5l227.9-78.5l-97.7-287
		l-179.8,63.4l-255.7-766.3l-825.7,276.8l242.3,724.1l-181.2,60.6l507.1,1515.6c107.5,146.8,310.2,385.6,741.7,284.1l604.6-203.4
		L1680.6,4888.6z" />

            </g>
          </g>
        </Transition>

        <!-- Level 5 -->
        <Transition name="fade">
          <g v-show="isActiveLevel(5)" id="sp-interior-level-5" class="sp-interior__level" data-interior-level="5">
            <g>
              <polygon :class="{ 'active' : isActiveUnit(507) }, getUnitState(507)" class="sp-interior__unit"
                data-unit-number="507" :data-unit-floorplan="getUnitFloorPlan(507) ?? 'the-riley-c'" points="1313.3,3745.5 1634.7,4706 3075.3,4223.5 
								2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(506) }, getUnitState(506)" class="sp-interior__unit"
                data-unit-number="506" :data-unit-floorplan="getUnitFloorPlan(506) ?? 'the-sable'" points="4975.6,2519.9 5296.9,3480.2 3075.3,4223.5 
								2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(505) }, getUnitState(505)" class="sp-interior__unit"
                data-unit-number="505" :data-unit-floorplan="getUnitFloorPlan(505) ?? 'the-corner'" points="5987.8,3469.9 6210.2,4136.3 6285.8,4111.1 
								6430.4,4543.8 6533.1,4509.4 6657.1,4880.1 7774.4,4506 8179.2,3935 8179.3,2806.5 6728,2814.1 6710.6,2762.1 6584.3,2804.2 
								6800.6,3450.8 6504.1,3550.1 6453.3,3398.5 6190.8,3486.3 6165.4,3410.5" />

              <polygon :class="{ 'active' : isActiveUnit(504) }, getUnitState(504)" class="sp-interior__unit"
                data-unit-number="504" :data-unit-floorplan="getUnitFloorPlan(504) ?? 'the-broadview-b'" points="5987.8,3469.9 4602.7,3933.4 5094.4,5403 
								6657,4879.7 6533.1,4509.4 6430.5,4543.8 6285.7,4110.9 6210.7,4135.9" />

              <rect :class="{ 'active' : isActiveUnit(503) }, getUnitState(503)" class="sp-interior__unit"
                data-unit-number="503" :data-unit-floorplan="getUnitFloorPlan(503) ?? 'the-broadview-a'" x="3347.9"
                y="4137.6" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1345.9404 1560.5652)" width="1540.5"
                height="1549.7" />

              <polygon :class="{ 'active' : isActiveUnit(502) }, getUnitState(502)" class="sp-interior__unit"
                data-unit-number="502" :data-unit-floorplan="getUnitFloorPlan(502) ?? 'the-broadview-c'" points="1936.9,5099.9 1856,4852.3 3141.8,4422.2 
								3633.5,5891.8 2178.9,6377.9 1769.4,5154.1" />

              <path :class="{ 'active' : isActiveUnit(501) }, getUnitState(501)" class="sp-interior__unit"
                data-unit-number="501" :data-unit-floorplan="getUnitFloorPlan(501) ?? 'the-bow-b'" d="M1703.7,4912.6l-230.3,76.8l-66.6-205.4l227.9-77.9
		l-351.8-1051.1l-616.4,205.5l0,2.5l-402.3,133.1l242.3,724.1l-181.2,60.6l507.1,1515.6c107.5,146.8,310.2,385.6,741.7,284.1
		l618.1-208L1703.7,4912.6z" />

            </g>
          </g>
        </Transition>

        <!-- Level 6 -->
        <Transition name="fade">
          <g v-show="isActiveLevel(6)" id="sp-interior-level-6" class="sp-interior__level" data-interior-level="6">
            <g>
              <polygon :class="{ 'active' : isActiveUnit(607) }, getUnitState(607)" class="sp-interior__unit"
                data-unit-number="607" :data-unit-floorplan="getUnitFloorPlan(607) ?? 'the-riley-c'" points="1313.3,3745.5 1634.7,4706 3075.3,4223.5 
								2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(606) }, getUnitState(606)" class="sp-interior__unit"
                data-unit-number="606" :data-unit-floorplan="getUnitFloorPlan(606) ?? 'the-sable'" points="4975.6,2519.9 5296.9,3480.2 3075.3,4223.5 
								2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(605) }, getUnitState(605)" class="sp-interior__unit"
                data-unit-number="605" :data-unit-floorplan="getUnitFloorPlan(605) ?? 'the-corner'" points="5987.8,3469.9 6210.2,4136.3 6285.8,4111.1 
								6430.4,4543.8 6533.1,4509.4 6657.1,4880.1 7774.4,4506 8179.2,3935 8179.3,2806.5 6728,2814.1 6710.6,2762.1 6584.3,2804.2 
								6800.6,3450.8 6504.1,3550.1 6453.3,3398.5 6190.8,3486.3 6165.4,3410.5" />

              <polygon :class="{ 'active' : isActiveUnit(604) }, getUnitState(604)" class="sp-interior__unit"
                data-unit-number="604" :data-unit-floorplan="getUnitFloorPlan(604) ?? 'the-broadview-b'" points="5987.8,3469.9 4602.7,3933.4 5094.4,5403 
								6657,4879.7 6533.1,4509.4 6430.5,4543.8 6285.7,4110.9 6210.7,4135.9" />

              <rect :class="{ 'active' : isActiveUnit(603) }, getUnitState(603)" class="sp-interior__unit"
                data-unit-number="603" :data-unit-floorplan="getUnitFloorPlan(603) ?? 'the-broadview-a'" x="3347.9"
                y="4137.6" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1345.9404 1560.5652)" width="1540.5"
                height="1549.7" />

              <polygon :class="{ 'active' : isActiveUnit(602) }, getUnitState(602)" class="sp-interior__unit"
                data-unit-number="602" :data-unit-floorplan="getUnitFloorPlan(602) ?? 'the-broadview-c'" points="1936.9,5099.9 1856,4852.3 3141.8,4422.2 
								3633.5,5891.8 2178.9,6377.9 1769.4,5154.1" />

              <path :class="{ 'active' : isActiveUnit(601) }, getUnitState(601)" class="sp-interior__unit"
                data-unit-number="601" :data-unit-floorplan="getUnitFloorPlan(601) ?? 'the-bow-b'" d="M1703.7,4912.6l-230.3,76.8l-66.6-205.4l227.9-77.9
		l-351.8-1051.1l-616.4,205.5l0,2.5l-402.3,133.1l242.3,724.1l-181.2,60.6l507.1,1515.6c107.5,146.8,310.2,385.6,741.7,284.1
		l618.1-208L1703.7,4912.6z" />

            </g>
          </g>
        </Transition>

        <!-- Level 7 -->
        <Transition name="fade">
          <g v-show="isActiveLevel(7)" id="sp-interior-level-7" class="sp-interior__level" data-interior-level="7">
            <g>
              <polygon :class="{ 'active' : isActiveUnit(707) }, getUnitState(707)" class="sp-interior__unit"
                data-unit-number="707" :data-unit-floorplan="getUnitFloorPlan(707) ?? 'the-riley-c'" points="1313.3,3745.5 1634.7,4706 3075.3,4223.5 
								2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(706) }, getUnitState(706)" class="sp-interior__unit"
                data-unit-number="706" :data-unit-floorplan="getUnitFloorPlan(706) ?? 'the-sable'" points="4975.6,2519.9 5296.9,3480.2 3075.3,4223.5 
								2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(705) }, getUnitState(705)" class="sp-interior__unit"
                data-unit-number="705" :data-unit-floorplan="getUnitFloorPlan(705) ?? 'the-corner'" points="5987.8,3469.9 6210.2,4136.3 6285.8,4111.1 
								6430.4,4543.8 6533.1,4509.4 6657.1,4880.1 7774.4,4506 8179.2,3935 8179.3,2806.5 6728,2814.1 6710.6,2762.1 6584.3,2804.2 
								6800.6,3450.8 6504.1,3550.1 6453.3,3398.5 6190.8,3486.3 6165.4,3410.5" />

              <polygon :class="{ 'active' : isActiveUnit(704) }, getUnitState(704)" class="sp-interior__unit"
                data-unit-number="704" :data-unit-floorplan="getUnitFloorPlan(704) ?? 'the-broadview-b'" points="5987.8,3469.9 4602.7,3933.4 5094.4,5403 
								6657,4879.7 6533.1,4509.4 6430.5,4543.8 6285.7,4110.9 6210.7,4135.9" />

              <rect :class="{ 'active' : isActiveUnit(703) }, getUnitState(703)" class="sp-interior__unit"
                data-unit-number="703" :data-unit-floorplan="getUnitFloorPlan(703) ?? 'the-broadview-a'" x="3347.9"
                y="4137.6" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1345.9404 1560.5652)" width="1540.5"
                height="1549.7" />

              <polygon :class="{ 'active' : isActiveUnit(702) }, getUnitState(702)" class="sp-interior__unit"
                data-unit-number="702" :data-unit-floorplan="getUnitFloorPlan(702) ?? 'the-broadview-c'" points="1936.9,5099.9 1856,4852.3 3141.8,4422.2 
								3633.5,5891.8 2178.9,6377.9 1769.4,5154.1" />

              <path :class="{ 'active' : isActiveUnit(701) }, getUnitState(701)" class="sp-interior__unit"
                data-unit-number="701" :data-unit-floorplan="getUnitFloorPlan(701) ?? 'the-bow-b'" d="M1703.7,4912.6l-230.3,76.8l-66.6-205.4l227.9-77.9
		l-351.8-1051.1l-616.4,205.5l0,2.5l-402.3,133.1l242.3,724.1l-181.2,60.6l507.1,1515.6c107.5,146.8,310.2,385.6,741.7,284.1
		l618.1-208L1703.7,4912.6z" />

            </g>
          </g>
        </Transition>


        <!-- Level 8 -->
        <Transition name="fade">
          <g v-show="isActiveLevel(8)" id="sp-interior__level-8" class="sp-interior__level" data-interior-level="8">
            <g>
              <polygon :class="{ 'active' : isActiveUnit(804) }, getUnitState(804)" class="sp-interior__unit"
                data-unit-number="804" :data-unit-floorplan="getUnitFloorPlan(804) ?? 'the-corner'" points="5987.8,3469.9 6210.2,4136.3 6285.8,4111.1 
								6430.4,4543.8 6533.1,4509.4 6657.1,4880.1 7774.4,4506 8179.2,3935 8179.3,2806.5 6728,2814.1 6710.6,2762.1 6584.3,2804.2 
								6800.6,3450.8 6504.1,3550.1 6453.3,3398.5 6190.8,3486.3 6165.4,3410.5" />

              <polygon :class="{ 'active' : isActiveUnit(803) }, getUnitState(803)" class="sp-interior__unit"
                data-unit-number="803" :data-unit-floorplan="getUnitFloorPlan(803) ?? 'the-broadview-b'" points="5987.8,3469.9 4602.7,3933.4 5094.4,5403 
								6657,4879.7 6533.1,4509.4 6430.5,4543.8 6285.7,4110.9 6210.7,4135.9" />

              <polygon :class="{ 'active' : isActiveUnit(802) }, getUnitState(802)" class="sp-interior__unit"
                data-unit-number="802" :data-unit-floorplan="getUnitFloorPlan(802) ?? 'the-broadview-c'" points="1936.9,5099.9 1856,4852.3 3141.8,4422.2 
								3633.5,5891.8 2178.9,6377.9 1769.4,5154.1" />

              <path :class="{ 'active' : isActiveUnit(801) }, getUnitState(801)" class="sp-interior__unit"
                data-unit-number="801" :data-unit-floorplan="getUnitFloorPlan(801) ?? 'the-bow-b'" d="M1703.7,4912.6l-230.3,76.8l-66.6-205.4l227.9-77.9
		l-351.8-1051.1l-616.4,205.5l0,2.5l-402.3,133.1l242.3,724.1l-181.2,60.6l507.1,1515.6c107.5,146.8,310.2,385.6,741.7,284.1
		l618.1-208L1703.7,4912.6z" />
            </g>
          </g>
        </Transition>

        <!-- Level 9 -->
        <Transition name="fade">
          <g v-show="isActiveLevel(9)" id="sp-interior__level-9" class="sp-interior__level" data-interior-level="9">
            <g>
              <polygon :class="{ 'active' : isActiveUnit(905) }, getUnitState(905)" class="sp-interior__unit"
                data-unit-number="905" :data-unit-floorplan="getUnitFloorPlan(905) ?? 'the-riley-p'" points="1313.3,3745.5 1634.7,4706 3075.3,4223.5 
								2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(904) }, getUnitState(904)" class="sp-interior__unit"
                data-unit-number="904" :data-unit-floorplan="getUnitFloorPlan(904) ?? 'the-sable-p'" points="4975.6,2519.9 5296.9,3480.2 3075.3,4223.5 
								2754.1,3263.5" />

              <polygon :class="{ 'active' : isActiveUnit(903) }, getUnitState(903)" class="sp-interior__unit"
                data-unit-number="903" :data-unit-floorplan="getUnitFloorPlan(903) ?? 'the-key'" points="5822,5159.6 7774.5,4506.3 8179.3,3935.3 8179.3,2806.5 
								6728.1,2814.4 6710.7,2762.4 6584.4,2804.7 6802.4,3456.3 6508.1,3554.7 6450.5,3382.7 6199.4,3466.7 6179.2,3406.4 5317.3,3694.8 
									" />
              <path :class="{ 'active' : isActiveUnit(901) }, getUnitState(901)" class="sp-interior__unit"
                data-unit-number="901" :data-unit-floorplan="getUnitFloorPlan(901) ?? 'the-legacy'" d="M3141.9,4422.6l-1440.8,482.1l-364.5,114.6l80.9,255.4
		l-157.9,50.5l-149.7-447.4l524.8-171.8L1283,3655l-616.5,206.4l0,1.6l-402.3,133.1l242.3,724.1l-181.2,60.6l507.1,1515.6
		c107.5,146.8,310.2,385.6,741.7,284.1L3632.2,5888L3141.9,4422.6z" />

              <polygon :class="{ 'active' : isActiveUnit(902) }, getUnitState(902)" class="sp-interior__unit"
                data-unit-number="902" :data-unit-floorplan="getUnitFloorPlan(902) ?? 'the-metro'" points="3141.9,4422.6 3633.4,5891.8 5822,5159.6 
								5317.3,3694.8" />

            </g>
          </g>
        </Transition>

      </svg>
    </div>

    <!-- End STACKING PLAN INTERIOR -->


    <!-- STACKING PLAN EXTERIOR -->
    <svg class="sp-exterior" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1440 679" width="1440px" height="679px">
      <g>
        <g id="background">
          <rect x="-1.3" y="1.6" stroke="#000000" stroke-miterlimit="10" width="1442.4" height="679.8" />
        </g>

        <!-- Building -->
        <image
          href="https://uploads-ssl.webflow.com/635aae0d25d447bfc72ef508/668c4792d2dcf6a5495b7b2d_stacking-plan-building-v2.webp"
          transform="matrix(0.3333 0 0 0.3333 5.832127e-02 -4.364001e-02)" />



        <!-- Floors -->
        <polygon :class="{ 'active' : isActiveLevel(3) }" data-exterior-level="3" class="sp-exterior__level"
          points="123.8,391.4 118.9,339.7 241.7,341.2 1068.7,337.3 1071.5,383.9 159.9,394.4" />
        <polygon :class="{ 'active' : isActiveLevel(4) }" data-exterior-level="4" class="sp-exterior__level" points="123.4,291.1 118.9,339.7 241.7,341.2 1068.7,337.3 1066.7,314.1 1071,313.9 
		1073.2,299.3 1060.9,296.7 163.8,289.7 	" />
        <polygon :class="{ 'active' : isActiveLevel(5) }" data-exterior-level="5" class="sp-exterior__level" points="123.4,291.1 126.8,241.6 166.9,238.2 1056.1,256.9 1070.6,262.9 1073.2,299.3 
		1073.2,299.3 1060.9,296.7 163.8,289.7 	" />
        <polygon :class="{ 'active' : isActiveLevel(6) }" data-exterior-level="6" class="sp-exterior__level" points="130,193.6 126.8,241.6 166.9,238.2 1056.1,256.9 1070.6,262.9 1068.1,228.6 
		1055.8,220.5 148.6,189.5 	" />
        <polygon :class="{ 'active' : isActiveLevel(7) }" data-exterior-level="7" class="sp-exterior__level" points="130,193.6 135.3,140.1 150.3,135.3 1052.3,177 1065.2,188.1 1068.1,228.6 1055.8,220.5 
		148.6,189.5 	" />
        <polygon :class="{ 'active' : isActiveLevel(8) }" data-exterior-level="8" class="sp-exterior__level" points="138.5,84 135.3,140.1 150.3,135.3 1052.3,177 1065.2,188.1 1060.4,146.5 1048.3,132 
		178.9,77.1 157.1,77.9 	" />
        <polygon :class="{ 'active' : isActiveLevel(9) }" data-exterior-level="9" class="sp-exterior__level" points="138.5,84 149,20.7 160,11.3 194.6,9.6 202.1,5.2 1026.8,71.9 1030.2,77 1041.8,80 
		1054.9,98.9 1060.4,146.5 1048.3,132 178.9,77.1 157.1,77.9 	" />
      </g>

      <!-- River -->
      <path
        d="m2423.3 983.2c-52.3-55.2-73.4-63.6-96.2-104-40.6-72.3-14.3-118.5-27.6-214.4-5.4-38.8-28.4-165.7-129.3-263.2-9.7-9.4-116.3-109.7-264-115.9-83.9-3.5-147.4 14.2-147.4 14.2-52.1 14.5-72.7 31.6-120.6 29.2-29.1-1.5-43-8.9-76.4-4.7-11.5 1.4-30.7 8.9-69.3 21.3-47.6 15.3-80.6 27.3-97 33.1-19.2 6.8-29.4 6.1-181.3 54.4-97.7 31.1-131.2 44.6-189.2 46.5-21.9.7-39.7-.5-74.1 3.2-53.5 5.7-65.2 14.4-109.6 19.7-61.4 7.4-54.5-7.5-112.7 0-66.3 8.6-74.2 27.7-123 27.6-8.3 0-26.3-.6-43.3 10.2-14.6 9.3-15.8 18.9-25.2 27.6-20.2 18.7-48.5-.4-103.2 2.4-55.9 2.8-75.8 6.3-114.3 3.9-22.3-1.4-43.7-5.4-86.7-13.4-111.2-20.8-137-36.3-154.5-50.4-15.7-12.8-11-13.3-28.4-27.6-46.8-38.3-97.7-47.8-122.2-52-39.6-6.9-135.5-15.4-143.8 10.6-12.8 39.8 185.2 139.4 327.1 189.9 167.7 59.6 246 47.2 272.9 41.7 21.5-4.4 43.6-11.5 85.1-16.6 73-8.9 82.1 3.4 171 0 100.1-3.8 139.1-21.3 175.8-9.5 7.1 2.3 25.1 9.2 41.8 1.6 9.8-4.5 12.4-11 25.2-17.3 13.5-6.6 25.7-5.6 29.9-7.1 50.9-17.5 55.1-48.6 96.2-75.7 25.4-16.8 28.4-7.9 157.6-35.5 8-1.7 23.5-5 43.3-2.4 23.9 3.2 24.9 11.2 41.8 13.4 23.4 3 32.4-10.9 95.4-37 25.3-10.5 30-10.8 34.7-10.2 26.6 3.1 30.6 31.6 59.1 43.3 22.2 9.2 28-4.8 69.3-4.7 39.6 0 48.6 12.8 101.7 21.3 40.7 6.5 41.2-.1 72.5 4.7 98.3 15.2 124.5 85 207.3 89.1 9.8.5 25.5.3 45.7 7.1 31.1 10.5 35.8 25 62.3 40.2 45 25.8 63.2 2.1 106.4 29.9 9.6 6.2 35.3 23.3 41.8 52 3.3 14.5-1.2 19.5-.8 33.1 1 34.3 30.6 53.8 69.4 93.8 28.5 29.4 46.3 53.6 65.4 79.6 47.6 64.7 41.2 82.3 68.6 114.3 60.5 70.7 178.6 86.7 193.5 61.9 11.3-19-34.2-67.9-120.7-159.2zm-188.7-139.9c-9.8 4.4-25.8-10.5-33.1-17.3-13.8-12.9-18-24.8-30.7-53.6-25.5-57.5-33.3-65.3-40.2-70.1-15.5-11-28.4 1.2-46.5-11.8-7.7-5.5-10.8-11-23.6-19.7-9-6.1-16.8-4.9-21.3-11.8-3.8-5.9-1.2-9.9-3.2-15.8-4.5-13.8-26.6-16.9-47.3-22.9-19.6-5.6-36.5-18.6-56-24.4-137.1-41-176.5-58.3-228.6-75.7-4.3-1.4-13.3.7-25.2-1.6-20.9-3.9-28.2-12.1-47.3-17.3-14.3-3.9-25.6-3.5-36.3-3.2-42.3 1.4-57.5 4.7-76.4 9.5-6.2 1.6-10.1-8.5-20.5-11-1.8-.4-5.9-1.3-18.9-.8-22.2.9-25.9 4.2-31.5.8-7.4-4.5-10.9-16.1-7.9-24.4 2.1-5.7 6.5-7.6 21.3-15 36.6-18.2 39.4-21.2 52-23.6 8.7-1.7 9.5-.8 21.3-3.2 20.2-4.1 34.2-10.7 38.6-12.6 22-9.8 137.7-53.1 238-46.5 10.2.7 27.5 2.3 53.6 2.4 37.2.1 50.7 7.1 59.1 6.3 57.4-5.2 151.7 33.1 201 74.1 66.1 55 81.8 108.5 90.6 140.3 4.4 15.7.8 8.4 11 93 13 106.6 22.3 149.5 8 155.9z"
        fill="#373030" />
      <g fill="#a78056">
        <path d="m745 572.4h-7.2v-2.4h17.5v2.4h-7.2v20.5h-3z" />
        <path
          d="m757.2 569.1 2.9-.3.9 8.9c1-1.5 2.8-2.6 5.1-2.8 3.3-.3 6.4 1.1 6.8 6l1 10.2-2.9.3-1-9.9c-.3-3.2-1.9-4.5-4.5-4.2-3.1.3-4.4 2.7-4.2 5.1l1 9.9-2.9.3z" />
        <path
          d="m777.3 582.3c-1.1-4.9 1.6-9.2 6.4-10.2 5-1.1 8.7 2.2 9.6 6.8l-13.2 3c1 3.7 4 5.5 7.4 4.8 2.6-.6 4.4-2.4 5.2-4.7l1.4.4c-.4 2.4-2.5 5.7-6.5 6.6-4.8 1-9.1-1.7-10.3-6.7zm12.8-4.6c-.9-2.7-3-4.5-6-3.8-2.7.6-4.5 2.9-4.3 6.1z" />
        <path
          d="m799.5 561.3 8.3-3.1c4.4-1.6 7.8-1 9.2 2.7.9 2.4-.1 4.5-2 6.1 3.2-.4 5.6.9 6.7 3.9 1.4 3.7-.8 6.9-5.5 8.7l-8.8 3.3zm11.9 6.4c2.5-.9 3.8-3.2 3-5.2-.9-2.3-2.9-3.1-6-2l-5.4 2 2.7 7.3zm3.9 9.7c3.2-1.2 4.3-3.4 3.5-5.7-.9-2.5-3.3-3.4-6.5-2.2l-5.8 2.1 2.9 7.9z" />
        <path
          d="m824 568.1c-1.7-4.7.5-9.4 5.3-11.1s9.5.4 11.2 5.1-.5 9.4-5.3 11.1c-4.8 1.8-9.5-.3-11.2-5.1zm10.5 3.1c3.2-1.2 4.6-4.6 3.3-8.1-1.3-3.6-4.5-5.3-7.7-4.1s-4.6 4.6-3.3 8.1c1.2 3.6 4.4 5.3 7.7 4.1z" />
        <path
          d="m849.8 549.2 5.1 12.1-1.7 1.5-14.8-9.1 2.3-1.9 11.3 7.2-5.2-12.3 1.5-1.2 11.2 7.5-5.1-12.5 1.9-1.6 6.3 16.2-1.7 1.4z" />
        <path
          d="m863.5 525.6 7.8-3.7c4.7-2.2 8.4-1.3 10.2 2.5 1.3 2.8.5 5.5-1.7 7.6l9.1 7-3 1.4-8.6-6.8-.2.1-5.2 2.5 4.2 8.8-2.7 1.3zm12.4 6.1c2.9-1.4 4-3.6 2.9-6-1.2-2.5-3.5-3-6.6-1.5l-4.9 2.3 3.6 7.6z" />
        <path
          d="m886 515.8c1-.3 2 .2 2.3 1.2s-.2 2-1.2 2.3-2-.2-2.3-1.2c-.2-1 .3-2 1.2-2.3zm.8 7 2.7-.9 5.1 15.7-2.7.9z" />
        <path d="m893.1 520.6 3-.7 8.2 11.6 1.7-14.1 2.4-.6-2.4 17.6-2.4.6z" />
        <path
          d="m912.1 524.4c-.8-5 2.2-9 7.1-9.8 5-.8 8.5 2.7 9.1 7.4l-13.4 2.1c.7 3.7 3.7 5.8 7.1 5.2 2.7-.4 4.5-2.2 5.5-4.3l1.4.5c-.5 2.3-2.8 5.5-6.9 6.2-4.8.7-9-2.2-9.9-7.3zm13.1-3.8c-.7-2.8-2.7-4.7-5.7-4.2-2.7.4-4.7 2.6-4.7 5.9z" />
        <path d="m931.6 513.3 2.7-.2.4 4.2c.8-3 3.3-5.3 6.5-4.7l-.2 2.4c-3.7-.2-6.1 2.5-5.8 6.2l.7 8.3-2.9.2z" />
      </g>
    </svg>


    <!-- ************** STACKING PLAN INFO PANE ************** -->

    <article :class="{
				'sp-info-pane--opened' : infoPaneState === 'opened',
				'sp-info-pane--closed' : infoPaneState === 'closed',
				'sp-info-pane--disabled' : infoPaneState === 'disabled',
			}" class="sp-info-pane">
      <div @click="toggleInfoPane" class="sp-info-pane__back"></div>
      <div class="sp-info-pane__inner">
        <header class="sp-info-pane__header">
          <button @click="toggleInfoPane" class="sp-info-pane__close">
            <span v-html="infoPaneState === 'opened' ? 'Close' : 'Open'"></span>

            <div id="sp-info-pane__toggle-icon" :class="{
								'open' : infoPaneState === 'opened',
							}">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </button>
          <div class="sp-info-pane__header-inner">
            <h2 class="sp-info-pane__heading">
              {{ floorPlanName }}
            </h2>
            <div class="sp-info-pane__unit">
              <div class="sp-info-pane__unit-number">{{ activeUnit }}</div>
              <div class="sp-info-pane__unit-type">{{ currentFloorPlan.type }}</div>
            </div>
          </div>
        </header>

        <main class="sp-info-pane__body">

          <!-- Penthouse Icon -->
          <div v-if="currentFloorPlan.id === 'the-key' || currentFloorPlan.id === 'the-legacy'"
            class="sp-info-pane__patio">
            <div class="sp-info-pane__patio-text">
              Private<br> Rooftop<br> Patio
            </div>
            <PatioIcon class="sp-info-pane__patio-icon" />
          </div>

          <div class="sp-info-pane_body-main">
            <div class="sp-info-pane__img-wrap">
              <a :href="currentFloorPlan.imgWhite.src" class="sp-info-pane__img-zoom" data-fancybox
                :data-caption="currentFloorPlan.name">
                <img :src="currentFloorPlan.imgWhite.src" class="sp-info-pane__img"
                  :alt="`${currentFloorPlan.name} - Floor Plan`" />
                <svg class="sp-info-pane__magnify-icon" fill="none" height="24" viewBox="0 0 24 24" width="24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path clip-rule="evenodd"
                    d="m10.5 3.75c-3.72792 0-6.75 3.02208-6.75 6.75 0 3.7279 3.02208 6.75 6.75 6.75 1.8642 0 3.5506-.7547 4.773-1.977 1.2223-1.2224 1.977-2.9088 1.977-4.773 0-3.72792-3.0221-6.75-6.75-6.75zm-8.25 6.75c0-4.55635 3.69365-8.25 8.25-8.25 4.5563 0 8.25 3.69365 8.25 8.25 0 2.0078-.718 3.8491-1.9101 5.2793l4.6904 4.6904c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0l-4.6904-4.6904c-1.4302 1.1921-3.2715 1.9101-5.2793 1.9101-4.55635 0-8.25-3.6937-8.25-8.25zm8.25-3.75c.4142 0 .75.33579.75.75v2.25h2.25c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-2.25v2.25c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.25h-2.25c-.41421 0-.75-.3358-.75-.75s.33579-.75.75-.75h2.25v-2.25c0-.41421.3358-.75.75-.75z"
                    fill="#ccaa68" fill-rule="evenodd" />
                </svg>
              </a>
            </div>
            <div class="sp-info-pane__details">
              <h3 class="sp-info-pane__subheading">Details</h3>
              <ul>
                <li v-if="currentFloorPlan.sqft">{{ currentFloorPlan.sqft }} sq ft</li>
                <li v-if="currentFloorPlan.bedrooms">{{ currentFloorPlan.bedrooms }} bedrooms</li>
                <li v-if="currentFloorPlan.bathrooms">{{ currentFloorPlan.bathrooms }} bathrooms</li>
                <li v-if="currentFloorPlan.otherFeature">{{ currentFloorPlan.otherFeature }}</li>
                <li v-if="currentFloorPlan.views">{{ currentFloorPlan.views }} view(s)</li>
                <li>Options available</li>
              </ul>
            </div>
          </div>

        </main>

        <div class="sp-info-pane__footer">
          <button class="sp-button" data-fancybox data-src="#spark-registration-form">
            Inquire for Availability
          </button>

          <div class="sp-info-pane__gallery-btns">
            <!-- Floorplan Gallery -->
            <a v-if="currentFloorPlan.gallery" class="sp-button sp-button--alt" :href="currentFloorPlan.gallery[0].src"
              :data-fancybox="currentFloorPlan.id">
              View Gallery
            </a>
            <div v-if="currentFloorPlan.gallery" style="display: none;">
              <!-- Slice 1 to remove the double first gallery image
                        which is pulled above in currentFloorPlan.gallery[0].src -->
              <a v-for="(item, i) in currentFloorPlan.gallery.slice(1)" :key="`gallery-${i}`" :href="item.src"
                :data-fancybox="currentFloorPlan.id"></a>
            </div>

            <!-- Rooftop Patio Gallery -->
            <a v-if="currentFloorPlan.id === 'the-key' || currentFloorPlan.id === 'the-legacy'"
              class="sp-button sp-button--alt" href="#" @click.prevent.self="openRooftopPatioGallery">
              Rooftop Patio
            </a>
          </div>

          <a v-if="currentFloorPlan.pdf" :href="currentFloorPlan.pdf" target="_blank" class="sp-info-pane__btn">
            <div class="sp-info-pane__btn-inner">
              Download Floor Plan

              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.5 4H3.25C2.00736 4 1 5.00736 1 6.25V16.75C1 17.9926 2.00736 19 3.25 19H13.75C14.9926 19 16 17.9926 16 16.75V8.5M5.5 14.5L19 1M19 1L13.75 1M19 1V6.25"
                  stroke="#CCAA68" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </article>


    <FormInquire :selectedResidence="currentFloorPlan.name" />

    <!-- Rooftop Patio Gallery Images -->
    <div style="display: none;">
      <a v-for="(item, i) in rooftopPatioGallery" :class="`gallery-rooftop-patio-${i}`" :key="`gallery-rooftop-patio`"
        :href="item.src" data-fancybox="rooftop-patio-gallery"></a>
    </div>
  </div>

</template>

<script src="./app.js"></script>