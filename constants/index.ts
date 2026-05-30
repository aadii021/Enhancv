export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Flipkart",
        jobTitle: "Frontend Developer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 82,
            ATS: { score: 88, tips: [] },
            toneAndStyle: { score: 85, tips: [] },
            content: { score: 80, tips: [] },
            structure: { score: 84, tips: [] },
            skills: { score: 87, tips: [] },
        },
    },
    {
        id: "2",
        companyName: "Razorpay",
        jobTitle: "Full Stack Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 58,
            ATS: { score: 60, tips: [] },
            toneAndStyle: { score: 55, tips: [] },
            content: { score: 62, tips: [] },
            structure: { score: 58, tips: [] },
            skills: { score: 60, tips: [] },
        },
    },
    {
        id: "3",
        companyName: "Swiggy",
        jobTitle: "React Developer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 74,
            ATS: { score: 78, tips: [] },
            toneAndStyle: { score: 72, tips: [] },
            content: { score: 70, tips: [] },
            structure: { score: 76, tips: [] },
            skills: { score: 73, tips: [] },
        },
    },
    {
        id: "4",
        companyName: "Zepto",
        jobTitle: "Frontend Engineer",
        imagePath: "/images/resume_01.png",
        resumePath: "/resumes/resume-1.pdf",
        feedback: {
            overallScore: 90,
            ATS: { score: 92, tips: [] },
            toneAndStyle: { score: 88, tips: [] },
            content: { score: 91, tips: [] },
            structure: { score: 89, tips: [] },
            skills: { score: 93, tips: [] },
        },
    },
    {
        id: "5",
        companyName: "CRED",
        jobTitle: "UI Engineer",
        imagePath: "/images/resume_02.png",
        resumePath: "/resumes/resume-2.pdf",
        feedback: {
            overallScore: 63,
            ATS: { score: 65, tips: [] },
            toneAndStyle: { score: 60, tips: [] },
            content: { score: 64, tips: [] },
            structure: { score: 62, tips: [] },
            skills: { score: 67, tips: [] },
        },
    },
    {
        id: "6",
        companyName: "Meesho",
        jobTitle: "Software Engineer",
        imagePath: "/images/resume_03.png",
        resumePath: "/resumes/resume-3.pdf",
        feedback: {
            overallScore: 77,
            ATS: { score: 80, tips: [] },
            toneAndStyle: { score: 75, tips: [] },
            content: { score: 78, tips: [] },
            structure: { score: 76, tips: [] },
            skills: { score: 79, tips: [] },
        },
    },
];

export const AIResponseFormat = `
      interface Feedback {
      overallScore: number; //max 100
      ATS: {
        score: number; //rate based on ATS suitability
        tips: {
          type: "good" | "improve";
          tip: string; //give 3-4 tips
        }[];
      };
      toneAndStyle: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      content: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      structure: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
      skills: {
        score: number; //max 100
        tips: {
          type: "good" | "improve";
          tip: string; //make it a short "title" for the actual explanation
          explanation: string; //explain in detail here
        }[]; //give 3-4 tips
      };
    }`;

export const prepareInstructions = ({jobTitle, jobDescription}: { jobTitle: string; jobDescription: string; }) =>
    `You are a senior technical recruiter and ATS optimization expert with 10+ years of experience 
      evaluating resumes for top tech companies in India and globally.
      Analyze the provided resume thoroughly and give honest, detailed feedback.
      Do not sugarcoat — if the resume has serious issues, reflect that in low scores.
      Your goal is to help the candidate land interviews by identifying exactly what needs to improve.
      Consider Indian job market standards and top tech company expectations.
      The job title is: ${jobTitle}
      The job description is: ${jobDescription}
      Provide the feedback using the following format:
      ${AIResponseFormat}
      Return the analysis as a JSON object only, without any other text, comments or backticks.`;