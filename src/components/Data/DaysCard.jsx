import Blog2 from "./BlogContent/Blog2";
import image2 from "/blog_card/2.jpg";

const DaysCard = {
  id: 2,
  tag: "freshers",
  img: image2,
  title: "Tailoring Your Application Materials",
  link: "tailoring-your-application-materials",
  blogSingleTitle:
    "Tailoring Your Application Materials: The Art of Keyword Optimization and Targeted Content for Landing Your Dream Job.",
  blogText: `In today's competitive job market, standing out from the crowd is crucial. One way to achieve this is by tailoring your application materials,....`,
  blogAuthor: "Neha",
  blogDate: "January 16, 2023",
  content: <Blog2 />,
  tableofcontent: [
    { id: "PowerofKeywords", heading: "The Power of Keywords" },
    { id: "RelavantKeywords", heading: "Relavant Keywords" },
    {
      id: "IncorporatingKeywords",
      heading: "Incorporating Keywords",
    },
    { id: "BeyondKeywords", heading: "How to Craft Your Personal Brand" },
    {
      id: "JobChahiye",
      heading: "Job Chahiye and Personal Branding",
    },
    { id: "AdditionalTips", heading: "Additional Tips" },
    { id: "examples", heading: "Examples" },
    {
      id: "Faqs",
      heading: "FAQs",
    },
    {
      id: "Conclusion",
      heading: "Conclusion",
    },
  ],
};

export default DaysCard;
