<template>
	
	<div id="app">

		<!-- STACKING PLAN UNITS -->
		<div class="sp-interior">

			<svg class="sp-interior__compass" enable-background="new 0 0 89.9 95.6" height="95.6" viewBox="0 0 89.9 95.6" width="89.9" xmlns="http://www.w3.org/2000/svg"><g fill="#ccaa68"><path d="m87.9 51.7c-.5 22.9-19.1 41.4-42 42v2c24.1-.5 43.4-19.9 44-44z"/><path d="m44 93.6c-22.9-.5-41.5-19.1-42-42h-2c.5 24.1 19.9 43.4 44 44z"/><path d="m45 16.8-24.2 60.3 24.2-7.4 24.2 7.4zm-20.8 57.2 20.8-51.8v45.4z"/><path d="m51.2.1v14h-2.2l-8.4-9.2h-.1l.2 6c0 1.3.1 2.1.3 3.1h-2.1v-14h2.1l8.4 9.3h.1l-.2-6c0-1.2-.1-2.4-.3-3.2z"/><path d="m52 6.2v2c20.1 3.3 35.5 20.5 36 41.4h2c-.5-21.9-16.8-40.1-38-43.4z"/><path d="m38 6.2c-21.2 3.3-37.5 21.5-38 43.5h2c.5-20.9 15.9-38.1 36-41.4z"/></g></svg>

			<div class="sp-interior__controls">
				<span class="sp-interior__text">Floor {{ activeLevel }}</span>

				<div class="sp-interior__nav">
					<!-- Up Arrow -->
					<button 
						@click="increaseLevel"
						:disabled="activeLevel == levelTop"
						:class="{ 'disabled' : activeLevel == levelTop }"
						class="sp-interior__nav-arrow sp-interior__nav-up"
					>
						<svg enable-background="new 0 0 12.2 7" height="7" viewBox="0 0 12.2 7" width="12.2" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m5.4.3c.4-.4 1-.4 1.4 0l5.1 5c.4.4.4 1 0 1.4s-1 .4-1.4 0l-4.4-4.3-4.4 4.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4z" fill="currentColor" fill-rule="evenodd"/></svg>
					</button>
					
					<!-- Down Arrow -->
					<button 
						@click="decreaseLevel"
						:disabled="activeLevel == levelBottom"
						:class="{ 'disabled' : activeLevel == levelBottom }"
						class="sp-interior__nav-arrow sp-interior__nav-down"
					>
						<svg enable-background="new 0 0 12.2 7" height="7" viewBox="0 0 12.2 7" width="12.2" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m.3.3c.4-.4 1-.4 1.4 0l4.4 4.3 4.4-4.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-5.1 5c-.4.4-1 .4-1.4 0l-5.1-5c-.4-.4-.4-1 0-1.4z" fill="currentColor" fill-rule="evenodd"/></svg>
					</button>
				</div>
			</div>


			<svg class="sp-interior__svg" enable-background="new 0 0 8492.4 6768.9" height="6768.9" viewBox="0 0 8492.4 6768.9" width="8492.4" xmlns="http://www.w3.org/2000/svg">

				<!-- Base Level -->
				<g id="sp-level-base">
					<polygon 
						id="sp-level-base__footprint" 
						points="7845.2,0 506.9,0 0,528.5 0,3443.1 
						691,3443.5 690.6,3880.2 273.8,4018.1 524.7,4768.2 337,4831 627.9,5700.7 595.7,5711.5 820,6381.9 852.2,6371.1 900.2,6514.3 
						1431.4,6762.6 6068.1,5202.5 8054.5,4546.7 8473.8,3955.1 8473.8,528.5"
					/>
					<polyline 
						id="sp-level-base__floors-3" 
						class="sp-interior__base" points="4557.2,2689.2 4774.2,3346.3 5012.2,3266.6 5049,3376.7 6952.3,2740 6970.5,2785.7 
						8473.8,2785.7 8473.8,3955 8054.5,4546.7 1431.4,6762.6 900.2,6514.3 852.2,6371 820,6381.8 595.7,5711.3 627.9,5700.7 337,4830.9 
						524.7,4768.2 273.8,4017.9 690.5,3878.5 691,3443.3 0,3443.1 0,528.5 506.9,0 4317,0 4317,1127.1 4499.7,1127.2 4503.3,2527.9 
						4557.2,2689.2"
					/>
					<path 
						id="sp-level-base__floor-4" 
						class="sp-interior__base" d="M6970.5,2785.7l-18.1-45.6L5049,3376.7l-36.8-110l-238,79.6l-216.9-657.1l-54-161.3l-3.6-1400.7
						l-182.7-0.1V0h-3810L0,528.5v2914.6l691,0.3l-0.5,435.2l-416.7,139.4l251,750.3L337,4830.9l291,869.8l-32.3,10.6L820,6381.8
						l32.2-10.8l47.9,143.4l531.2,248.3l6623.1-2215.9l419.3-591.7l0-1169.3H6970.5z M1359.7,3758.4l-109.3-326.8l0-1153.7l2862.7-11.2
						l0.3,225.9l167.4,2.8l81.7,254.3L1359.7,3758.4z"
					/>
					<polygon 
						id="sp-level-base__floors-5-9" 
						class="sp-interior__base-2" points="273.8,4017.9 1329.3,3665 1360.7,3758.8 5154.9,2489.4 5411.3,3255.6 6952.3,2740 
						6970.1,2785.7 8473.8,2785.7 8473.8,3955.1 8054.5,4546.7 1431.4,6762.6 900.2,6514.3 852.2,6371.1 820,6381.9 595.7,5711.5 
						627.9,5700.7 337,4831 524.7,4768.2"
					/>
				</g>


				<!-- ************** Units ************** -->

				<!-- Level 3 -->
				<Transition name="fade">
					<g 
						v-show="isActiveLevel(3)"
						id="sp-interior-level-3"
						class="sp-interior__level"
						data-interior-level="3" 
					>
						<g>
							<polygon 
								:class="{ 'active' : isActiveUnit(304) }"
								data-unit-number="304" 
								data-unit-floorplan="the-riley-d" 
								class="sp-interior__unit" 
								points="4412.7,2734.1 4745.5,3728.9 3186.1,4250.7 
								2853.3,3256.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(305) }"
								data-unit-number="305" 
								data-unit-floorplan="the-riley-a" 
								class="sp-interior__unit" points="1346.4,3760 1530.8,4311 1688.2,4258.3 
								1836.7,4702.1 3186.1,4250.7 2853.3,3256.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(302) }"
								data-unit-number="302" 
								data-unit-floorplan="the-broadview-a" 
								class="sp-interior__unit" points="1748.1,4960.6 3254.9,4456.5 3764.3,5979 
								2257.3,6482.7"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(301) }"
								data-unit-number="301" 
								data-unit-floorplan="the-bow-a" 
								class="sp-interior__unit" points="1129.2,3728.3 272.8,4013.9 524.6,4764.9 
								336.9,4827.5 627.8,5697.3 595.6,5708.1 819.9,6378.6 852.1,6367.8 900.1,6511 1431.3,6759.3 1930.3,6592.5 1767.9,6110.4 
								2095.3,6000.2 1833.1,5214.8 1304.8,5391.5 1052.2,4636.5 1394.1,4522.2"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(303) }"
								data-unit-number="303" 
								data-unit-floorplan="the-metro" 
								class="sp-interior__unit" points="5513.3,3699.3 6023.2,5223.3 3764.3,5979 
								3254.9,4456.5"
							/>

							<g>
								<rect 
									:class="{ 'active' : isActiveUnit(306) }"
									data-unit-number="306" 
									data-unit-floorplan="the-plaza-a" x="0" y="1466.5" 
									class="sp-interior__unit" width="1028.2" height="1334"
								/>
								<polygon 
									:class="{ 'active' : isActiveUnit(307) }"
									data-unit-number="307" 
									data-unit-floorplan="the-hayden" 
									class="sp-interior__unit" points="1317.1,0 1317,915.1 1028,915.1 1028,1466.5 
								-0.1,1466.5 -0.1,525.4 506.9,0"
								/>
								<polygon              
									:class="{ 'active' : isActiveUnit(308) }"
									data-unit-number="308" 
									data-unit-floorplan="the-plaza-b" 
									class="sp-interior__unit" points="2813.9,0 2817.9,971.7 1321.1,971.7 1321.1,0.1"
								/>
								<polygon 
									:class="{ 'active' : isActiveUnit(309) }"
									data-unit-number="309" 
									data-unit-floorplan="the-plaza-c" 
									class="sp-interior__unit" points="4317,0 4317,971.7 2808.2,964.8 2813.9,0"
								/>
							</g>
						</g>
					</g>
				</Transition>

				<!-- Level 4 -->
				<Transition name="fade">
					<g 
						v-show="isActiveLevel(4)"
						id="sp-interior-level-4"
						class="sp-interior__level" 
						data-interior-level="4" 
					>
						<g>
							<polygon 
								:class="{ 'active' : isActiveUnit(304) }"
								data-unit-number="406" 
								data-unit-floorplan="the-riley-e" 
								class="sp-interior__unit" points="4412.7,2737.2 4745.5,3732 3186.1,4253.7 
								2853.3,3259.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(407) }"
								data-unit-number="407" 
								data-unit-floorplan="the-riley-b" 
								class="sp-interior__unit" points="1346.4,3763.1 1530.8,4314 1688.2,4261.3 
								1836.7,4705.2 3186.1,4253.7 2853.3,3259.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(402) }"
								data-unit-number="402" 
								data-unit-floorplan="the-broadview-a" 
								class="sp-interior__unit" points="1748.1,4963.7 3254.9,4459.5 3764.3,5982.1 
								2257.3,6485.7"
							/>
							
							<rect 
								:class="{ 'active' : isActiveUnit(403) }"
								data-unit-number="403" 
								data-unit-floorplan="the-broadview-a" x="3468.4" y="4164.8" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1355.7109 1610.3495)" 
								class="sp-interior__unit" width="1596" height="1605.5"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(404) }"
								data-unit-number="404" 
								data-unit-floorplan="the-broadview-b" 
								class="sp-interior__unit" points="6203.5,3473 4768.4,3953.1 5277.9,5475.7 
								6896.7,4933.5 6768.3,4549.9 6662.1,4585.5 6512,4137 6434.3,4163"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(401) }"
								data-unit-number="401" 
								data-unit-floorplan="the-bow-a" 
								class="sp-interior__unit" points="1129.2,3731.4 272.8,4016.9 524.6,4767.9 
								336.9,4830.6 627.8,5700.4 595.6,5711.1 819.9,6381.6 852.1,6370.8 900.1,6514 1431.3,6762.3 1930.3,6595.5 1767.9,6113.4 
								2095.3,6003.2 1833.1,5217.8 1304.8,5394.6 1052.2,4639.6 1394.1,4525.2"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(405) }"
								data-unit-number="405" 
								data-unit-floorplan="the-corner" 
								class="sp-interior__unit" points="6203.5,3473 6433.8,4163.4 6512.1,4137.2 6662,4585.5 
								6768.3,4549.9 6896.8,4934 8054.4,4546.4 8473.7,3954.8 8473.8,2785.7 6970.3,2793.6 6952.2,2739.7 6821.4,2783.3 7045.5,3453.2 
								6738.3,3556 6685.7,3399 6413.7,3490 6387.4,3411.5"
							/>
							<g>
								<rect :class="{ 'active' : isActiveUnit(408) }"
								data-unit-number="408" 
								data-unit-floorplan="the-plaza-a" x="0" y="1466.5" 
								class="sp-interior__unit" width="1028.2" height="1334"
								/>
								<polygon 
									:class="{ 'active' : isActiveUnit(409) }"
									data-unit-number="409" 
									data-unit-floorplan="the-hayden" 
									class="sp-interior__unit" points="1317.1,0 1317,915.1 1028,915.1 1028,1466.5 
									-0.1,1466.5 -0.1,525.4 506.9,0 "
								/>
								<polygon 
									:class="{ 'active' : isActiveUnit(410) }"
									data-unit-number="410" 
									data-unit-floorplan="the-plaza-b" 
									class="sp-interior__unit" points="2813.9,0 2817.9,971.7 1321.1,971.7 1321.1,0.1"
								/>
								<polygon 
									:class="{ 'active' : isActiveUnit(411) }"
									data-unit-number="411" 
									data-unit-floorplan="the-plaza-c" 
									class="sp-interior__unit" points="4317,0 4317,971.7 2808.2,964.8 2813.9,0 "
								/>
							</g>
						</g>
					</g>
				</Transition>

				<!-- Level 5 -->
				<Transition name="fade">
					<g 
						v-show="isActiveLevel(5)"
						id="sp-interior-level-5"
						class="sp-interior__level" 
						data-interior-level="5" 
					>
						<g>
							<polygon 
								:class="{ 'active' : isActiveUnit(506) }"
								data-unit-number="506" 
								data-unit-floorplan="the-sable" 
								class="sp-interior__unit" points="5154.8,2488.8 5487.7,3483.7 3186.1,4253.7 
								2853.3,3259.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(507) }"
								data-unit-number="507" 
								data-unit-floorplan="the-riley-c" 
								class="sp-interior__unit" points="1360.6,3758.5 1693.5,4753.6 3186.1,4253.7 
								2853.3,3259.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(501) }"
								data-unit-number="501" 
								data-unit-floorplan="the-bow-b" 
								class="sp-interior__unit" points="1329.2,3664.6 272.8,4016.9 524.6,4767.9 
								336.9,4830.6 627.8,5700.4 595.6,5711.1 819.9,6381.6 852.1,6370.8 900.1,6514 1431.3,6762.3 1930.3,6595.5 1767.9,6113.4 
								2109.9,5998.3 1847.3,5213.1 1304.8,5394.6 1052.2,4639.6 1595.1,4458"
							/>
							
							<rect 
								:class="{ 'active' : isActiveUnit(502) }"
								data-unit-number="502" 
								data-unit-floorplan="the-broadview-a" x="1976.2" y="4667.8" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1592.9453 1159.4119)" 
								class="sp-interior__unit" width="1574" height="1605.5"
							/>
							
							<rect 
								:class="{ 'active' : isActiveUnit(503) }"
								data-unit-number="503" 
								data-unit-floorplan="the-broadview-a" x="3468.4" y="4164.8" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1355.7111 1610.3495)" 
								class="sp-interior__unit" width="1596" height="1605.5"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(504) }"
								data-unit-number="504" 
								data-unit-floorplan="the-broadview-b" 
								class="sp-interior__unit" points="6203.5,3473 4768.4,3953.1 5277.9,5475.7 
								6896.7,4933.5 6768.3,4549.9 6662.1,4585.5 6512,4137 6434.3,4163"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(505) }"
								data-unit-number="505" 
								data-unit-floorplan="the-corner" 
								class="sp-interior__unit" points="6203.5,3473 6433.8,4163.4 6512.1,4137.2 
								6662,4585.5 6768.3,4549.9 6896.8,4934 8054.4,4546.4 8473.7,3954.8 8461.9,2785.9 6970.3,2793.6 6952.2,2739.7 6821.4,2783.3 
								7045.5,3453.2 6738.3,3556 6685.7,3399 6413.7,3490 6387.4,3411.5"
							/>
						</g>
					</g>
				</Transition>

				<!-- Level 6 -->
				<Transition name="fade">
					<g 
						v-show="isActiveLevel(6)"
						id="sp-interior-level-6"
						class="sp-interior__level" 
						data-interior-level="6" 
					>
						<g>
							<polygon 
								:class="{ 'active' : isActiveUnit(606) }"
								data-unit-number="606" 
								data-unit-floorplan="the-sable" 
								class="sp-interior__unit" points="5154.7,2488.8 5487.6,3483.7 3186,4253.8 
								2853.2,3259.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(607) }"
								data-unit-number="607" 
								data-unit-floorplan="the-riley-c" 
								class="sp-interior__unit" points="1360.5,3758.6 1693.5,4753.6 3186,4253.8 2853.2,3259.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(601) }"
								data-unit-number="601" 
								data-unit-floorplan="the-bow-c" 
								class="sp-interior__unit" points="1329.1,3664.7 272.8,4016.9 524.6,4768 336.8,4830.6 
								627.8,5700.4 595.5,5711.2 819.9,6381.6 852.1,6370.9 900,6514.1 1431.2,6762.3 2271.6,6481.5 1847.2,5213.1 1304.8,5394.6 1052.2,4639.6 1595.1,4458"
							/>
							
							<rect 
								:class="{ 'active' : isActiveUnit(602) }"
								data-unit-number="602" 
								data-unit-floorplan="the-broadview-a" x="1976.2" y="4667.8" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1592.9575 1159.4003)" 
								class="sp-interior__unit" width="1574" height="1605.5"
							/>
							
							<rect 
								:class="{ 'active' : isActiveUnit(603) }"
								data-unit-number="603" 
								data-unit-floorplan="the-broadview-a" x="3468.3" y="4164.9" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1355.7233 1610.3379)" 
								class="sp-interior__unit" width="1596" height="1605.5"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(604) }"
								data-unit-number="604" 
								data-unit-floorplan="the-broadview-b" 
								class="sp-interior__unit" points="6203.4,3473 4768.4,3953.2 5277.8,5475.7 
								6896.6,4933.6 6768.3,4550 6662,4585.5 6512,4137 6434.3,4163"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(605) }"
								data-unit-number="605" 
								data-unit-floorplan="the-corner" 
								class="sp-interior__unit" points="6203.4,3473 6433.8,4163.5 6512.1,4137.3 
								6662,4585.6 6768.3,4550 6896.8,4934 8054.4,4546.4 8473.7,3954.8 8473.8,2785.7 6970.3,2793.6 6952.2,2739.8 6821.3,2783.4 7045.5,3453.3 6738.2,3556.1 6685.7,3399 6413.7,3490.1 6387.4,3411.5"
							/>
						</g>
					</g>
				</Transition>

				<!-- Level 7 -->
				<Transition name="fade">
					<g 
						v-show="isActiveLevel(7)"
						id="sp-interior-level-7"
						class="sp-interior__level" 
						data-interior-level="7" 
					>
						<g>
							<polygon 
								:class="{ 'active' : isActiveUnit(706) }"
								data-unit-number="706" 
								data-unit-floorplan="the-sable" 
								class="sp-interior__unit" points="5154.7,2488.8 5487.6,3483.7 3186,4253.8 
								2853.2,3259.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(707) }"
								data-unit-number="707" 
								data-unit-floorplan="the-riley-c" 
								class="sp-interior__unit" points="1360.5,3758.6 1693.5,4753.6 3186,4253.8 2853.2,3259.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(701) }"
								data-unit-number="701" 
								data-unit-floorplan="the-bow-c" 
								class="sp-interior__unit" points="1329.1,3664.7 272.8,4016.9 524.6,4768 336.8,4830.6 
								627.8,5700.4 595.5,5711.2 819.9,6381.6 852.1,6370.9 900,6514.1 1431.2,6762.3 2271.6,6481.5 1847.2,5213.1 1304.8,5394.6 
								1052.2,4639.6 1595.1,4458"
							/>
							
							<rect 
								:class="{ 'active' : isActiveUnit(702) }"
								data-unit-number="702" 
								data-unit-floorplan="the-broadview-a" x="1976.2" y="4667.8" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1592.9575 1159.4003)" 
								class="sp-interior__unit" width="1574" height="1605.5"
							/>
							
							<rect 
								:class="{ 'active' : isActiveUnit(703) }"
								data-unit-number="703" 
								data-unit-floorplan="the-broadview-a" x="3468.3" y="4164.9" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1355.7233 1610.3379)" 
								class="sp-interior__unit" width="1596" height="1605.5"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(704) }"
								data-unit-number="704" 
								data-unit-floorplan="the-broadview-b" 
								class="sp-interior__unit" points="6203.4,3473 4768.4,3953.2 5277.8,5475.7 
								6896.6,4933.6 6768.3,4550 6662,4585.5 6512,4137 6434.3,4163"
							/>
							
							<polygon 
								:class="{ 'active' : isActiveUnit(705) }"
								data-unit-number="705" 
								data-unit-floorplan="the-corner" 
								class="sp-interior__unit" points="6203.4,3473 6433.8,4163.5 6512.1,4137.3 6662,4585.6 6768.3,4550 6896.8,4934 8054.4,4546.4 8473.7,3954.8 8473.8,2785.7
							6970.3,2793.6 6952.2,2739.8 6821.3,2783.4 7045.5,3453.3 6738.2,3556.1 6685.7,3399 6413.7,3490.1 6387.4,3411.5"
							/>
						</g>
					</g>
				</Transition>


				<!-- Level 8 -->
				<Transition name="fade">
					<g 
						v-show="isActiveLevel(8)"
						id="sp-interior__level-8"
						class="sp-interior__level" 
						data-interior-level="8" 
					>
						<g>
							<polygon 
								:class="{ 'active' : isActiveUnit(806) }"
								data-unit-number="806" 
								data-unit-floorplan="the-sable" 
								class="sp-interior__unit" points="5154.7,2488.8 5487.6,3483.7 3186,4253.8 
								2853.2,3259.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(807) }"
								data-unit-number="807" 
								data-unit-floorplan="the-riley-c" 
								class="sp-interior__unit" points="1360.5,3758.6 1693.5,4753.6 3186,4253.8 2853.2,3259.1"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(801) }"
								data-unit-number="801" 
								data-unit-floorplan="the-bow-c" 
								class="sp-interior__unit" points="1329.1,3664.7 272.8,4016.9 524.6,4768 336.8,4830.6 
								627.8,5700.4 595.5,5711.2 819.9,6381.6 852.1,6370.9 900,6514.1 1431.2,6762.3 2271.6,6481.5 1847.2,5213.1 1304.8,5394.6 
								1052.2,4639.6 1595.1,4458"
							/>
							
							<rect 
								:class="{ 'active' : isActiveUnit(802) }"
								data-unit-number="802" 
								data-unit-floorplan="the-broadview-a" x="1976.2" y="4667.8" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1592.9575 1159.4003)" 
								class="sp-interior__unit" width="1574" height="1605.5"
							/>
							
							<rect 
								:class="{ 'active' : isActiveUnit(803) }"
								data-unit-number="803" 
								data-unit-floorplan="the-broadview-a" x="3468.3" y="4164.9" transform="matrix(0.9483 -0.3173 0.3173 0.9483 -1355.7233 1610.3379)" 
								class="sp-interior__unit" width="1596" height="1605.5"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(804) }"
								data-unit-number="804" 
								data-unit-floorplan="the-broadview-b" 
								class="sp-interior__unit" points="6203.4,3473 4768.4,3953.2 5277.8,5475.7 
								6896.6,4933.6 6768.3,4550 6662,4585.5 6512,4137 6434.3,4163"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(805) }"
								data-unit-number="805" 
								data-unit-floorplan="the-corner" 
								class="sp-interior__unit" points="6203.4,3473 6433.8,4163.5 6512.1,4137.3 
								6662,4585.6 6768.3,4550 6896.8,4934 8054.4,4546.4 8473.7,3954.8 8473.8,2785.7 6970.3,2793.6 6952.2,2739.8 6821.3,2783.4 
								7045.5,3453.3 6738.2,3556.1 6685.7,3399 6413.7,3490.1 6387.4,3411.5"
							/>
						</g>
					</g>
				</Transition>

				<!-- Level 9 -->
				<Transition name="fade">
					<g 
						v-show="isActiveLevel(9)"
						id="sp-interior__level-9"
						class="sp-interior__level" 
						data-interior-level="9" 
					>
						<g>
							<polygon 
								:class="{ 'active' : isActiveUnit(902) }"
								data-unit-number="902" 
								data-unit-floorplan="the-key" 
								class="sp-interior__unit" points="4768.6,3953.6 5277.8,5475.7 8054.5,4546.7 
								8473.8,3955.1 8473.8,2785.7 6970.4,2793.9 6952.3,2740 6821.5,2783.8 7047.3,3458.8 6742.5,3560.8 6682.8,3382.6 6422.6,3469.6 
								6401.7,3407.2"
							/>
							<polygon 
								:class="{ 'active' : isActiveUnit(901) }"
								data-unit-number="901" 
								data-unit-floorplan="the-legacy" 
								class="sp-interior__unit" points="1595.3,4460 1329.2,3664.8 273.8,4018.1 
								524.7,4768.2 337,4831 627.9,5700.7 595.7,5711.5 820,6381.9 852.2,6371.1 900.2,6514.3 1431.4,6762.6 3764.3,5982.1 3255,4460 
								1762.4,4959.4 1847.4,5213.6 1304.9,5395.1 1052.8,4641.5"
							/>
						</g>
					</g>
				</Transition>
				
			</svg>
		</div>

		<!-- End STACKING PLAN INTERIOR -->


		<!-- STACKING PLAN EXTERIOR -->
		<svg class="sp-exterior" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4790 2380" width="4790" height="2380">
			<g>
				<!-- Building -->
				<image href="https://uploads-ssl.webflow.com/635aae0d25d447bfc72ef508/648ffe25c67475da7bb801c3_stacking-plan-building.webp" />

				<!-- Floors -->
				<polygon 
					:class="{ 'active' : isActiveLevel(3) }"
					data-exterior-level="3" 
					class="sp-exterior__level" points="444 1143 450 1152 442 1298 436 1304 619 1311 922 1307 1081 1310 3071 1291 3067.48 1143 1922.35 1143 444 1143"
				/>
				<polygon 
					:class="{ 'active' : isActiveLevel(4) }"
					data-exterior-level="4" 
					class="sp-exterior__level" points="453 981 458 990 451 1135 444 1140 444 1143 1922.35 1143 3067.48 1143 4034 1143 4026 1136 4020 1019 4025 1013 3930 1004 3065.71 995.92 1922 986 632 973 453 981"
				/>
				<polygon 
					:class="{ 'active' : isActiveLevel(5) }"
					data-exterior-level="5" 
					class="sp-exterior__level" points="461 820 466 828 461 973 453 981 632 973 1922 986 3065.71 995.92 3930 1004 4025 1013 4025 1008.47 4018 1006 4012 889 4017 882 3924 863 3061 849 1926 830 641 805 461 820"
				/>
				<polygon 
					:class="{ 'active' : isActiveLevel(6) }"
					data-exterior-level="6" 
					class="sp-exterior__level" points="467 659 474 669 467 814 461 820 641 805 1926 830 3061 849 3924 863 4017 882 4017 879.52 4012 875 4007 757 4010 757 4014 751 3918 722 3056 702 1926 672 646 636 467 659"
				/>
				<polygon 
					:class="{ 'active' : isActiveLevel(7) }"
					data-exterior-level="7" 
					class="sp-exterior__level" points="475 502 483 511 476 653 467 659 646 636 1926 672 3056 702 3918 722 4014 751 4014 747.17 4004 744 3998.2 626.5 4002.57 626.5 4006 621 3911 584 3053 557 1926 519 652 471 475 502"
				/>
				<polygon 
					:class="{ 'active' : isActiveLevel(8) }"
					data-exterior-level="8" 
					class="sp-exterior__level" points="484 330 490 341 484 494.13 475 499 475 502 652 471 1926 519 3053 557 3911 584 4006 621 4006 617.08 3998 614 3992 487 3995 487 3999 481 3903 435 3049 401 1928 352 663 291 484 330"
				/>
				<polygon 
					:class="{ 'active' : isActiveLevel(9) }"
					data-exterior-level="9" 
					class="sp-exterior__level" points="502 100 492 324 484 330 663 291 1928 352 3049 401 3903 435 3999 481 3999 477.33 3992 473 3983.23 290.5 3883 233 3669.5 222.5 3669.5 233.5 2691.5 178.5 2691.5 135.5 1879.5 86.5 1865.5 131.5 1209.5 93.5 1192.5 38.5 1151.28 38.5 1149.5 77.5 675.5 51.5 502 100"
				/>
			</g>

			<!-- River -->
			<path class="sp-exterior__river" d="M8461.41,3432.96c-182.56-192.64-256.29-221.93-335.73-363.25-141.95-252.5-49.89-413.88-96.32-748.52-18.81-135.61-99.04-578.41-451.31-919.14-34.03-32.91-406.18-383.13-921.89-404.53-293.1-12.17-514.61,49.53-514.61,49.53-182,50.7-253.72,110.35-421.04,101.82-101.79-5.19-150.08-31.08-266.94-16.51-40.1,5-107.09,30.92-242.17,74.3-166.01,53.32-281.55,95.36-338.49,115.58-67.19,23.86-102.76,21.38-632.94,189.88-341.12,108.42-458.05,155.79-660.46,162.36-76.58,2.49-138.53-1.74-258.68,11.01-186.84,19.82-227.52,50.26-382.52,68.8-214.55,25.67-190.26-26.23-393.52,0-231.51,29.88-259.2,96.71-429.3,96.32-28.82-.07-91.72-2.13-151.36,35.77-51.06,32.46-55.15,65.88-88.06,96.32-70.56,65.26-169.48-1.34-360.5,8.26-195.16,9.8-264.69,22.04-399.03,13.76-77.7-4.79-152.7-18.79-302.71-46.78-388.2-72.45-478.45-126.7-539.38-176.12-54.96-44.58-38.44-46.6-99.07-96.32-163.29-133.9-341.2-166.85-426.55-181.63-138.38-23.95-473.04-53.87-502.22,37.15-44.57,138.99,646.77,486.57,1142.05,663.21,584.76,208.55,858.2,165.25,952.16,145.85,74.93-15.47,152.23-40.08,297.21-57.79,254.98-31.14,286.74,11.74,597.17,0,349.69-13.22,485.66-74.31,613.68-33.02,24.63,7.94,87.81,32.26,145.85,5.5,34.24-15.78,43.2-38.48,88.06-60.54,47.08-23.15,89.57-19.62,104.57-24.77,177.7-60.99,192.53-169.62,335.73-264.18,88.64-58.53,99.33-27.73,550.38-123.84,27.97-5.96,82.1-17.62,151.36-8.26,83.39,11.28,86.83,39.27,145.85,46.78,81.58,10.38,113.31-38.23,332.98-129.34,88.27-36.61,104.72-37.71,121.08-35.77,92.79,10.97,106.8,110.37,206.39,151.36,77.67,31.96,97.94-16.65,242.17-16.51,138.11,.13,169.53,44.76,355,74.3,142.24,22.66,143.9-.39,253.18,16.51,343.12,53.06,434.75,296.94,723.75,310.97,34.36,1.67,88.97,.93,159.61,24.77,108.45,36.59,125.07,87.35,217.4,140.35,157.15,90.2,220.81,7.31,371.51,104.57,33.55,21.66,123.26,81.3,145.85,181.63,11.4,50.63-4.11,67.99-2.75,115.58,3.42,119.74,106.71,187.95,242.17,327.48,99.5,102.49,161.76,187.23,228.41,277.94,166.1,226.06,143.81,287.28,239.42,399.03,211.25,246.92,623.55,302.79,675.6,216.03,39.87-66.46-118.91-237.07-421.04-555.89Zm-659.08-488.47c-34.25,15.21-90-36.72-115.58-60.54-48.21-44.9-62.83-86.61-107.32-187.13-88.91-200.83-116.27-227.92-140.35-244.92-54.21-38.27-99.19,4.08-162.36-41.28-26.95-19.35-37.75-38.25-82.56-68.8-31.35-21.37-58.79-17.09-74.3-41.28-13.23-20.62-4.34-34.47-11.01-55.04-15.64-48.28-92.8-59.05-165.12-79.81-68.31-19.6-127.3-64.96-195.39-85.31-478.83-143.1-616.43-203.64-798.06-264.18-15.06-5.02-46.53,2.31-88.06-5.5-72.98-13.73-98.46-42.36-165.12-60.54-49.86-13.6-89.45-12.26-126.59-11.01-147.8,4.99-200.89,16.51-266.94,33.02-21.83,5.46-35.15-29.69-71.55-38.53-6.11-1.48-20.7-4.62-66.05-2.75-77.7,3.2-90.46,14.69-110.08,2.75-25.73-15.65-38.18-56.35-27.52-85.31,7.33-19.9,22.78-26.68,74.3-52.29,127.76-63.49,137.55-73.85,181.63-82.56,30.47-6.02,33.34-2.74,74.3-11.01,70.64-14.26,119.54-37.21,134.84-44.03,76.67-34.16,480.72-185.3,831.08-162.36,35.53,2.33,95.85,8.1,187.13,8.26,129.78,.22,176.84,24.68,206.39,22.02,200.53-18.08,529.78,115.68,701.74,258.68,230.74,191.89,285.63,378.85,316.47,489.84,15.21,54.75,2.65,29.34,38.53,324.73,45.27,372.66,77.67,522.61,27.52,544.88Z"/>
			
			<!-- River Letters -->
			<g>
				<path class="sp-exterior__river-letter" d="M2601.43,1998.48l-25.2,.06-.02-8.47,60.97-.14,.02,8.47-25.2,.06,.16,71.65-10.57,.02-.16-71.65Z"/>
				<path class="sp-exterior__river-letter" d="M2643.75,1987.22l9.97-.99,3.1,31.22c3.57-5.22,9.61-9.03,17.83-9.85,11.61-1.15,22.19,3.99,23.87,20.86l3.54,35.71-9.97,.99-3.44-34.62c-1.1-11.07-6.76-15.7-15.63-14.82-10.85,1.08-15.44,9.39-14.6,17.82l3.44,34.62-9.97,.99-8.13-81.95Z"/>
				<path class="sp-exterior__river-letter" d="M2714.23,2033.12c-3.83-17.08,5.7-31.96,22.46-35.71,17.29-3.87,30.34,7.53,33.39,23.65l-46.08,10.32c3.34,12.9,14.03,19.31,25.84,16.66,9.24-2.07,15.35-8.52,18.24-16.27l4.96,1.48c-1.3,8.3-8.66,19.76-22.84,22.94-16.76,3.75-32.04-5.57-35.96-23.08Zm44.67-16.1c-3.16-9.56-10.51-15.69-20.82-13.38-9.45,2.12-15.66,10.16-15.05,21.42l35.88-8.04Z"/>
				<path class="sp-exterior__river-letter" d="M2791.5,1959.99l29.01-10.73c15.39-5.69,27.33-3.53,32.1,9.38,3.05,8.26-.43,15.65-6.84,21.19,11.28-1.24,19.57,3.09,23.5,13.73,4.81,13.01-2.91,24.2-19.22,30.23l-30.77,11.37-27.79-75.17Zm41.75,22.12c8.78-3.24,13.12-11.19,10.52-18.21-2.98-8.05-10.1-10.82-20.84-6.85l-18.69,6.91,9.39,25.4,19.62-7.25Zm13.68,34.15c11.05-4.08,15.16-11.71,12.18-19.76-3.17-8.57-11.67-11.88-22.82-7.76l-20.13,7.44,10.23,27.67,20.55-7.59Z"/>
				<path class="sp-exterior__river-letter" d="M2877.16,1983.69c-6.04-16.54,1.65-32.71,18.4-38.82,16.64-6.08,33.04,1.29,39.08,17.83s-1.75,32.74-18.4,38.82c-16.75,6.12-33.04-1.29-39.08-17.83Zm36.52,10.8c11.27-4.11,15.98-15.91,11.45-28.32-4.53-12.41-15.74-18.39-27.01-14.28-11.27,4.11-15.98,15.91-11.45,28.32,4.53,12.41,15.74,18.39,27.01,14.27Z"/>
				<path class="sp-exterior__river-letter" d="M2967.38,1917.46l17.8,42.34-6.09,5.07-51.81-31.91,7.87-6.55,39.36,25.23-18.05-42.99,5.16-4.3,39.12,26.15-17.98-43.76,6.77-5.64,22.04,56.72-5.92,4.93-38.26-25.29Z"/>
				<path class="sp-exterior__river-letter" d="M3014.99,1835.26l27.23-12.95c16.4-7.8,29.33-4.45,35.57,8.67,4.59,9.64,1.64,19.33-6.03,26.52l31.62,24.45-10.34,4.92-29.87-23.58-.79,.38-18.09,8.61,14.66,30.81-9.54,4.54-34.42-72.36Zm43.2,21.38c10.04-4.77,14.08-12.67,10.06-21.12-4.11-8.65-12.1-10.58-23.13-5.33l-17,8.09,12.67,26.64,17.39-8.27Z"/>
				<path class="sp-exterior__river-letter" d="M3093.71,1800.98c3.35-1.09,6.82,.68,7.91,4.03s-.68,6.82-4.03,7.91c-3.35,1.09-6.82-.68-7.91-4.03s.68-6.82,4.03-7.91Zm2.61,24.39l9.53-3.1,17.84,54.85-9.53,3.1-17.84-54.85Z"/>
				<path class="sp-exterior__river-letter" d="M3118.44,1817.86l10.36-2.59,28.54,40.63,6.06-49.28,8.54-2.14-8.54,61.59-8.44,2.11-36.53-50.32Z"/>
				<path class="sp-exterior__river-letter" d="M3184.88,1831.01c-2.76-17.29,7.68-31.55,24.64-34.25,17.5-2.79,29.82,9.4,31.86,25.69l-46.64,7.44c2.53,13.09,12.8,20.14,24.76,18.24,9.35-1.49,15.85-7.55,19.22-15.11l4.86,1.79c-1.81,8.2-9.87,19.19-24.22,21.48-16.96,2.7-31.64-7.55-34.47-25.27Zm45.59-13.29c-2.56-9.74-9.51-16.32-19.95-14.65-9.57,1.53-16.26,9.17-16.36,20.45l36.31-5.79Z"/>
				<path class="sp-exterior__river-letter" d="M3252.89,1792.36l9.32-.79,1.25,14.7c2.96-10.64,11.58-18.44,22.81-16.3l-.62,8.34c-12.75-.57-21.45,8.89-20.36,21.73l2.46,28.96-9.98,.85-4.88-57.47Z"/>
			</g>
		</svg>


		<!-- STACKING PLAN INFO -->

		<article 
			:class="{
				'sp-info-pane--opened' : infoPaneState === 'opened',
				'sp-info-pane--closed' : infoPaneState === 'closed',
				'sp-info-pane--disabled' : infoPaneState === 'disabled',
			}"
			class="sp-info-pane"
		>
			<div @click="toggleInfoPane" class="sp-info-pane__back"></div>
			<div class="sp-info-pane__inner">
				<header class="sp-info-pane__header">
					<button 
						@click="toggleInfoPane"
						class="sp-info-pane__close"
					>
						<span v-html="infoPaneState === 'opened' ? 'Close' : 'Open'"></span>

						<svg fill="none" height="14" viewBox="0 0 14 14" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m13.5626 13.11-.4527.4526c-.2499.2499-.6552.2499-.9052 0l-5.20469-5.20484-5.20481 5.20474c-.24991.25-.65518.25-.905139 0l-.452593-.4526c-.249957-.2499-.249957-.6552 0-.9052l5.204792-5.20469-5.204792-5.20481c-.249957-.24991-.249957-.65518 0-.905139l.452583-.452583c.249959-.249958.655239-.249958.905149 0l5.20481 5.204782 5.20469-5.204792c.25-.249957.6553-.249957.9052 0l.4527.452583c.2499.249959.2499.655239 0 .905149l-5.20484 5.20481 5.20484 5.20469c.2499.25.2499.6553 0 .9053z" fill="#000"/></svg>
					</button>
					<h2 class="sp-info-pane__heading">
						{{ currentFloorPlan.name }}
					</h2>
					<span class="sp-info-pane__unit">Residence {{ activeUnit }}</span>
				</header>
				
				<main class="sp-info-pane__body">
					<div class="sp-info-pane__body-inner">
						<div class="sp-info-pane__img-wrap">
							<a :href="currentFloorPlan.imgWhite.src" class="sp-info-pane__img-zoom" data-fancybox :data-caption="currentFloorPlan.name">
								<img 
									:src="currentFloorPlan.imgWhite.src" 
									class="sp-info-pane__img" 
									:alt="`${currentFloorPlan.name} - Floor Plan`" 
								/>
								<svg class="sp-info-pane__magnify-icon" fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m10.5 3.75c-3.72792 0-6.75 3.02208-6.75 6.75 0 3.7279 3.02208 6.75 6.75 6.75 1.8642 0 3.5506-.7547 4.773-1.977 1.2223-1.2224 1.977-2.9088 1.977-4.773 0-3.72792-3.0221-6.75-6.75-6.75zm-8.25 6.75c0-4.55635 3.69365-8.25 8.25-8.25 4.5563 0 8.25 3.69365 8.25 8.25 0 2.0078-.718 3.8491-1.9101 5.2793l4.6904 4.6904c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0l-4.6904-4.6904c-1.4302 1.1921-3.2715 1.9101-5.2793 1.9101-4.55635 0-8.25-3.6937-8.25-8.25zm8.25-3.75c.4142 0 .75.33579.75.75v2.25h2.25c.4142 0 .75.3358.75.75s-.3358.75-.75.75h-2.25v2.25c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-2.25h-2.25c-.41421 0-.75-.3358-.75-.75s.33579-.75.75-.75h2.25v-2.25c0-.41421.3358-.75.75-.75z" fill="#ccaa68" fill-rule="evenodd"/></svg>
							</a>
						</div>
						
						<div class="sp-info-pane__details">
							<h3 class="sp-info-pane__subheading">Details</h3>
						
							<ul>
								<li v-if="currentFloorPlan.sqft">{{ currentFloorPlan.sqft }} sq ft</li>
								<li v-if="currentFloorPlan.bedrooms">{{ currentFloorPlan.bedrooms }} bedrooms</li>
								<li v-if="currentFloorPlan.bathrooms">{{ currentFloorPlan.bathrooms }} bathrooms</li>
								<li v-if="currentFloorPlan.views">{{ currentFloorPlan.views }} view(s)</li>
								<li>Options available</li>
							</ul>
						</div>
					</div>
				</main>
				
				<footer class="sp-info-pane__footer">
					<button 
						class="sp-button"
						data-fancybox 
						data-src="#spark-registration-form"
					>
						Inquire for Availability
					</button>
					<a 
						v-if="currentFloorPlan.gallery"
						class="sp-button sp-button--alt"
						:href="currentFloorPlan.gallery[0].src"
						:data-fancybox="currentFloorPlan.id"
					>
						View Gallery
					</a>
					<div 
						v-if="currentFloorPlan.gallery"
						style="display: none;"
					>
						<!-- Slice 1 to remove the double first gallery image
						which is pulled above in currentFloorPlan.gallery[0].src -->
						<a 
							v-for="(item, i) in currentFloorPlan.gallery.slice(1)" 
							:key="`gallery-${i}`"
							:href="item.src"
							:data-fancybox="currentFloorPlan.id" 
							:data-caption="currentFloorPlan.gallery.alt"
						></a>
					</div>
					<a 
						v-if="currentFloorPlan.pdf"
						:href="currentFloorPlan.pdf"
						target="_blank"
						class="sp-info-pane__btn"
					>
						<div class="sp-info-pane__btn-inner">
							Download Floor Plan
							
							<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.5 4H3.25C2.00736 4 1 5.00736 1 6.25V16.75C1 17.9926 2.00736 19 3.25 19H13.75C14.9926 19 16 17.9926 16 16.75V8.5M5.5 14.5L19 1M19 1L13.75 1M19 1V6.25" stroke="#CCAA68" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
					</a>
				</footer>
			</div>
		</article>
		

		<FormInquire :selectedResidence="currentFloorPlan.name"/>
	</div>

</template>

<script src="./app.js"></script>