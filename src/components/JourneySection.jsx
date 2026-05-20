import React from "react";
import content from "../content.json";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";

import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import Title from "./Title";
import Section from "./Section";

function JourneySection() {

	const {journey} = content;
  	return (
    	<Section>
			<Title bgTitle="Journey" mainTitle="Education & Experience"></Title>
			<Timeline>
				{journey.map((item, index) => (
		
				item.type === "education" ? (
					<TimelineItem key={index}>
						<TimelineSeparator>
							<TimelineDot sx={{background: "#081120", border: "3px solid #a855f7", boxShadow: "0 0 20px rgba(168,85,247,0.7)",}}>
								<SchoolIcon />
							</TimelineDot>

							{index !== journey.length - 1 && (
								<TimelineConnector sx={{background: "linear-gradient(to bottom, #a855f7, #22d3ee)", width: "3px",}}/>
							)}
						</TimelineSeparator>
		
						<TimelineContent sx={{ py: "20px"}}>
							<div className="glass_card border border-purple-500/20 rounded-3xl p-6 shadow-[0_0_30px_rgba(168,85,247,0.2)]">
								<div className="flex justify-between">
									<p className="text-purple-400 text-sm mb-2">{item.subtitle}</p>
									<p className="text-purple-400 text-sm mb-2">{item.date}</p>
								</div>
								
								<h2 className="text-lg font-bold text-black">{item.title}</h2>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti sit quod itaque cumque obcaecati sunt ullam laboriosam, in amet placeat corporis molestias aliquam consectetur possimus soluta, inventore omnis doloribus incidunt.</p>
							</div>
						</TimelineContent>
			

					</TimelineItem>
				) : (
					<TimelineItem key={index}>
						<TimelineOppositeContent sx={{ py: "40px"}}>
							<div className="glass_card border border-cyan-400/20 rounded-3xl p-6 shadow-[0_0_30px_rgba(34,211,238,0.2)]">

								<div className="flex justify-between">
									<p className="text-cyan-400 text-sm mb-2">{item.subtitle}</p>
									<p className="text-cyan-400 text-sm mb-2">{item.date}</p>
								</div>
								
								<h2 className="text-lg font-bold text-black">{item.title}</h2>
								<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti sit quod itaque cumque obcaecati sunt ullam laboriosam, in amet placeat corporis molestias aliquam consectetur possimus soluta, inventore omnis doloribus incidunt.</p>
							</div>
						</TimelineOppositeContent>

						<TimelineSeparator>

							<TimelineDot sx={{background: "#081120", border: "3px solid #22d3ee",boxShadow: "0 0 20px rgba(34,211,238,0.7)",}}>
								<LaptopMacIcon />
							</TimelineDot>

							{index !== journey.length - 1 && (
								<TimelineConnector sx={{background: "linear-gradient(to bottom, #22d3ee, #a855f7)", width: "3px"}}/>
							)}

						</TimelineSeparator>

						<TimelineContent />

					</TimelineItem>
				)

				))}
			</Timeline>
      	</Section>
  );
}

export default JourneySection