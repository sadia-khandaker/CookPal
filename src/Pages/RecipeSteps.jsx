import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {
    Box,
    Typography,
    Button,
    Card,
    CardMedia,
    CircularProgress,
    Stepper,
    Step,
    StepLabel, Collapse, IconButton,
} from "@mui/material";
import BottomNav from './BottomNav';

import {motion} from "framer-motion";
import {
    PlayCircleFilled,
    PauseCircleFilled,
    RestartAlt,
    ArrowForward,
    ArrowBack,
    CheckCircle,
    PlayArrow,
    Pause,
    ExpandMore,
    ArrowBackIosNew, ArrowForwardIos,
} from '@mui/icons-material';
import {fontSize, styled} from '@mui/system';

import Marinade from '../../pics/steps/Marinade.png';
import CoatTofu from '../../pics/steps/CoatTofu.png';
import FryTofu1 from '../../pics/steps/FryTofu1.png';
import FryTofu2 from '../../pics/steps/FryTofu2.png';
import FryTofu3 from '../../pics/steps/FryTofu3.png';
import FryTempehBacon from '../../pics/steps/FryTempehBacon4.png';
import FryTortilla from '../../pics/steps/FryTortilla.png';
import AssembleTaco2 from '../../pics/steps/AssembleTaco2.png';
import Coleslaw from '../../pics/steps/Coleslaw.png';
import AssembleTaco4 from '../../pics/steps/AssembleTaco4.png';
import ChoppedTofu from '../../pics/steps/ChoppedTofu.png';
import Mix from '../../pics/steps/Mix.png';
import SoySauceTofuMarinate from '../../pics/steps/SoySauceTofuMarinate.png';

const RECIPE_STEPS = [
    {
        step: 1,
        title: "Prepare Vegan Fish Substitute",
        description: "Marinate tofu and let it sit.",
        time: 360,
        image: Marinade,
        substeps: [
            {
                stepNumber: 1.1,
                action: "Marinate tofu with soy sauce, ponzu, and sriracha.",
                time: 120,
                image: [Marinade, Mix]
            },
            {
                stepNumber: 1.2,
                action: "Let tofu sit for 20 minutes to soak up flavors.",
                time: 1200,
                image: SoySauceTofuMarinate
            },
        ],
    },
    {
        step: 2,
        title: "Prepare the Tofu for Cooking",
        description: "Coat tofu in cornstarch.",
        time: 300,
        image: CoatTofu,
        substeps: [
            {stepNumber: 2.1, action: "Coat tofu slices in cornstarch.", time: 60, image: CoatTofu},
            {stepNumber: 2.2, action: "Set tofu aside while heating the pan.", time: 120},
        ],
    },
    {
        step: 3,
        title: "Cook the Tofu",
        description: "Pan-fry tofu until crispy.",
        time: 720,
        image: FryTofu1,
        substeps: [
            {stepNumber: 3.1, action: "Heat skillet with oil.", time: 120},
            {stepNumber: 3.2, action: "Cook tofu for 3-5 minutes per side until crispy.", time: 600, image: FryTofu2},
        ],
    },
    {
        step: 4,
        title: "Cook the Tempeh Bacon",
        description: "Cook tempeh bacon in the same pan.",
        time: 420,
        image: FryTempehBacon,
        substeps: [
            {stepNumber: 4.1, action: "Add tempeh bacon to the pan.", time: 60},
            {stepNumber: 4.2, action: "Cook for 5-7 minutes until crispy.", time: 360},
        ],
    },
    {
        step: 5,
        title: "Prepare the Tortillas",
        description: "Toast tortillas until crispy.",
        time: 300,
        image: FryTortilla,
        substeps: [
            {stepNumber: 5.1, action: "Rub olive oil on the tortillas.", time: 60},
            {stepNumber: 5.2, action: "Cook tortillas for 1-2 minutes on each side.", time: 240},
        ],
    },
    {
        step: 6,
        title: "Assemble the Tacos",
        description: "Add ingredients and cook.",
        time: 420,
        image: AssembleTaco2,
        substeps: [
            {stepNumber: 6.1, action: "Spread mashed avocado on tortillas.", time: 60},
            {stepNumber: 6.2, action: "Add tofu and tempeh bacon.", time: 60},
            {stepNumber: 6.3, action: "Fold and cook for another 1-2 minutes.", time: 180},
        ],
    },
    {
        step: 7,
        title: "Add the Coleslaw",
        description: "Top tacos with coleslaw.",
        time: 120,
        image: Coleslaw,
        substeps: [
            {stepNumber: 7.1, action: "Add coleslaw to tacos.", time: 120},
        ],
    },
    {
        step: 8,
        title: "Optional Garnishes",
        description: "Garnish with cilantro, lime, and salsa.",
        time: 120,
        image: AssembleTaco4,
        substeps: [
            {stepNumber: 8.1, action: "Add salsa for extra flavor.", time: 60},
            {stepNumber: 8.2, action: "Serve immediately.", time: 60},
        ],
    },
];

const colors = {
    primary: '#A8D5BA',
    secondary: '#F6F6F6',
    accent: '#B9E3C6',
    background: '#FFFFFF',
    textPrimary: '#333333',
    textSecondary: '#555555',
    success: '#66CDAA',
    danger: '#E57373',
    warning: '#FFD54F',
};

const StyledCard = styled(motion(Card))(({ theme }) => ({
    maxWidth: '600px',
    margin: '24px auto',
    padding: '24px',
    borderRadius: '20px',

    backgroundColor: colors.background,
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down('sm')]: {
        padding: '16px',
        maxWidth: '90%',
        margin: '16px auto',
    },
    [theme.breakpoints.down('xs')]: {
        margin: '12px',
        padding: '12px',
        boxShadow: '0px 2px 15px rgba(0, 0, 0, 0.05)',
    },
}));

const HeaderTypography = styled(Typography)(({ theme }) => ({
    fontSize: '2.5rem',
    fontWeight: 700,
    textAlign: 'center',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(2),
    background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: 'fadeIn 1s ease-in-out',

    [theme.breakpoints.down('sm')]: {
        fontSize: '2.2rem',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '1.8rem',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(1),
    },
}));

const StepTitle = styled(Typography)(({ theme }) => ({
    fontSize: '1.75rem',
    fontWeight: 700,
    background: `linear-gradient(45deg, ${colors.primary}, ${colors.accent})`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    marginBottom: theme.spacing(2),
    animation: 'fadeIn 1s ease-in-out',
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '1.25rem',
        marginBottom: theme.spacing(1),
    },
}));

const StepDescription = styled(Typography)(({ theme }) => ({
    fontSize: '1rem',
    color: colors.textPrimary,
    lineHeight: 1.6,
    marginBottom: theme.spacing(3),
    animation: 'fadeIn 1s ease-in-out',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.95rem',
    },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
    width: '100%',
    height: '300px',
    borderRadius: '15px',
    objectFit: 'cover',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.05)',
    marginBottom: theme.spacing(3),
    animation: 'fadeIn 1s ease-in-out',
    [theme.breakpoints.down('sm')]: {
        height: '200px',
    },
}));

const SubstepsContainer = styled(Box)(({ theme }) => ({
    marginBottom: '24px',
    padding: '16px',
    backgroundColor: colors.secondary,
    borderRadius: '15px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
}));

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: '#f2f2f2',
    '& .MuiCircularProgress-circle': {
        stroke: colors.accent,
    },
}));

const NavigationButton = styled(Button)(({ theme }) => ({
    flex: 1,
    padding: '12px 24px',
    borderRadius: '25px',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    '&:hover': {
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    },
}));

const Timer = ({ timer, totalTime, isActive, isPaused, pauseTimer, resumeTimer }) => {
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const progressPercentage = ((totalTime - timer) / totalTime) * 100;
    const progressColor =
        timer > totalTime / 2
            ? colors.accent
            : timer > totalTime / 4
                ? colors.warning
                : colors.danger;

    return (
        <Box sx={{ textAlign: 'center', marginTop: 4 }}>
            <Typography variant="h6" sx={{ marginBottom: 2 }}>
            </Typography>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                <StyledCircularProgress
                    variant="determinate"
                    value={progressPercentage}
                    sx={{
                        color: isActive || isPaused ? progressColor : 'gray',
                    }}
                />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        sx={{ fontWeight: '600' }}
                    >
                        {formatTime(timer)}
                    </Typography>
                </Box>
            </Box>

            {}
            {(isActive || isPaused) && (
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 2 }}>
                    {isActive && (
                        <Button
                            variant="contained"
                            onClick={pauseTimer}
                            sx={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                backgroundColor: colors.danger,
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#FF7F7F',
                                },
                            }}
                            component={motion.button}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Pause sx={{ marginRight: 1 }} />
                            Pause Timer
                        </Button>
                    )}
                    {isPaused && (
                        <Button
                            variant="contained"
                            onClick={resumeTimer}
                            sx={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                backgroundColor: colors.success,
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#5cbf8a',
                                },
                            }}
                            component={motion.button}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <RestartAlt sx={{ marginRight: 1 }} />
                            Resume Timer
                        </Button>
                    )}
                </Box>
            )}
        </Box>
    );

};

const Substeps = ({ substeps }) => {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{ marginTop: 4 }}>
            <Button
                variant="outlined"
                onClick={handleExpandClick}
                endIcon={<ExpandMore sx={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />}
                sx={{
                    borderColor: colors.primary,
                    color: colors.primary,
                    textTransform: 'none',
                    borderRadius: '20px',
                    padding: '8px 16px',
                }}
                component={motion.button}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                {expanded ? 'Hide Substeps' : 'Show Substeps'}
            </Button>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <SubstepsContainer>
                    {substeps.map((substep, index) => (
                        <Box key={index} sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontWeight: '600',
                                    color: colors.primary,
                                    marginRight: 1,
                                }}
                            >
                                {`• Substep ${substep.stepNumber}:`}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: colors.textSecondary,
                                    flex: 1,
                                }}
                            >
                                {substep.action}
                            </Typography>
                        </Box>
                    ))}
                </SubstepsContainer>
            </Collapse>
        </Box>
    );

};

const NavigationButtons = ({ currentStep, totalSteps, handlePreviousStep, handleNextStep, handleFinishCooking }) => {
    return (
        <Box
            sx={{
                marginTop: 4,
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                gap: 2,
                width: '100%',
            }}
        >
            {currentStep > 1 && (
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIosNew />}
                    onClick={handlePreviousStep}
                    sx={{
                        flex: 1,
                        borderColor: colors.primary,
                        color: colors.primary,
                        '&:hover': {
                            backgroundColor: colors.primary,
                            color: '#fff',
                        },
                        borderRadius: '20px',
                        padding: '10px 20px',
                        textTransform: 'none',
                    }}
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Previous Step
                </Button>
            )}

            {currentStep < totalSteps ? (
                <Button
                    variant="outlined"
                    endIcon={<ArrowForwardIos />}
                    onClick={handleNextStep}
                    sx={{
                        flex: 1,
                        borderColor: colors.accent,
                        color: colors.accent,
                        '&:hover': {
                            backgroundColor: colors.accent,
                            color: '#fff',
                        },
                        borderRadius: '20px',
                        padding: '10px 20px',
                        textTransform: 'none',
                    }}
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Next Step
                </Button>
            ) : (
                <Button
                    variant="contained"
                    startIcon={<CheckCircle />}
                    onClick={handleFinishCooking}
                    sx={{
                        flex: 1,
                        backgroundColor: colors.success,
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#4CAF50',
                        },
                        borderRadius: '20px',
                        padding: '10px 20px',
                        textTransform: 'none',
                    }}
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Finish Cooking
                </Button>
            )}
        </Box>
    );
};

function RecipeSteps() {
    const navigate = useNavigate();
    const [currentStep, setCurrentStep] = useState(1);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [isTimerPaused, setIsTimerPaused] = useState(false);
    const [showSubsteps, setShowSubsteps] = useState(false);

    const totalTime = RECIPE_STEPS[currentStep - 1].time;

    const [timer, setTimer] = useState(totalTime);

    useEffect(() => {
        let interval = null;
        if (isTimerActive && !isTimerPaused && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (!isTimerActive || isTimerPaused) {
            clearInterval(interval);
        }

        if (timer === 0 && isTimerActive) {
            setIsTimerActive(false);
            setIsTimerPaused(false);
        }

        return () => clearInterval(interval);
    }, [isTimerActive, isTimerPaused, timer]);

    const startTimer = () => {
        setTimer(totalTime);
        setIsTimerActive(true);
        setIsTimerPaused(false);
    };

    const pauseTimer = () => {
        setIsTimerActive(false);
        setIsTimerPaused(true);
    };

    const resumeTimer = () => {
        setIsTimerActive(true);
        setIsTimerPaused(false);
    };

    const resetTimer = () => {
        setTimer(totalTime);
        setIsTimerActive(false);
        setIsTimerPaused(false);
    };

    const handleNextStep = () => {
        if (currentStep < RECIPE_STEPS.length) {
            setCurrentStep(currentStep + 1);
            resetTimer();
            setShowSubsteps(false);
        }
    };

    const handlePreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
            resetTimer();
            setShowSubsteps(false);
        }
    };

    const handleFinishCooking = () => {
        navigate('/rating');
    };

    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
                padding: { xs: 2, sm: 4 },
                fontFamily: 'SF Pro Display, sans-serif',
                height:  'calc(100vh - 64px)',
                backgroundColor: '#ffffff',
                overflowY: 'auto',
                alignItems: 'center',
                boxSizing: 'border-box',
                width: '100%',
                maxWidth: '430px',

            }}
        >
            
            {}
            <HeaderTypography variant="h4">
            <button
        style={{
            border: "none",
            borderRadius: "25px",
            backgroundColor: "#c8e6c9",
            marginRight:"2px",
           
            marginBottom:"18px",
            fontSize: "24px"
        }}
        onClick={() => navigate('/categories')}
    >
        {"<"}
    </button>
   
    Vegan "Fish" Tacos Recipe
</HeaderTypography>


            {}
            <Stepper
                activeStep={currentStep - 1}
                alternativeLabel
                sx={{
                    width: '100%',
                    marginTop: '24px',
                    padding: '0 16px',
                    overflowX: 'auto',
                    flexWrap: 'nowrap',
                    '& .MuiStepLabel-label': {
                        fontSize: { xs: '0.75rem', sm: '0.85rem', md: '1rem' },
                        fontWeight: '600',
                        color: colors.textSecondary,
                    },
                    '& .Mui-active .MuiStepLabel-label': {
                        color: colors.primary,
                    },
                    '& .Mui-completed .MuiStepLabel-label': {
                        color: colors.success,
                    },
                }}

            >
                {RECIPE_STEPS.map((stepItem) => (
                    <Step key={stepItem.step}>
                        <StepLabel StepIconComponent={() => <CheckCircle sx={{ color: colors.primary }} />}>
                            {`Step ${stepItem.step}`}
                        </StepLabel>
                    </Step>
                ))}
            </Stepper>

            {}
            <StyledCard>
                {}
                <StepTitle variant="h5">{RECIPE_STEPS[currentStep - 1].title}</StepTitle>

                {}
                <StepDescription variant="body1">{RECIPE_STEPS[currentStep - 1].description}</StepDescription>

                {}
                <StyledCardMedia
                    component="img"
                    image={RECIPE_STEPS[currentStep - 1].image}
                    alt={`Step ${currentStep} Image`}
                />

                {}
                <Substeps substeps={RECIPE_STEPS[currentStep - 1].substeps} />

                {}
                <Box sx={{ textAlign: 'center', marginTop: 4 }}>
                    <Typography
                        variant="h6"
                        sx={{
                            marginBottom: 2,
                            fontFamily: 'SF Pro Display, sans-serif',  // Ensure proper font family
                            fontWeight: 600,  // Set the font weight
                            fontSize: '1.25rem',  // Adjust font size if needed
                            textAlign: 'center',  // Center text alignment (optional)
                        }}
                    >
                        Time Remaining:
                    </Typography>
                    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
                        <StyledCircularProgress
                            variant="determinate"
                            value={((RECIPE_STEPS[currentStep - 1].time - timer) / RECIPE_STEPS[currentStep - 1].time) * 100}
                            sx={{
                                color: isTimerActive || isTimerPaused ? colors.accent : 'gray',
                            }}
                        />
                        <Box
                            sx={{
                                top: 0,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography
                                variant="caption"
                                component="div"
                                color="text.secondary"
                                sx={{ fontWeight: '600' }}
                            >
                                {`${Math.floor(timer / 60)}:${(timer % 60).toString().padStart(2, '0')}`}
                            </Typography>
                        </Box>
                    </Box>

                    {}
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', marginTop: 2 }}>
                        {!isTimerActive && !isTimerPaused && (
                            <Button
                                variant="contained"
                                onClick={startTimer}
                                sx={{
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    backgroundColor: colors.primary,
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: colors.accent,
                                    },
                                }}
                                component={motion.button}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <PlayArrow sx={{ marginRight: 1 }} />
                                Start Timer
                            </Button>
                        )}
                        {isTimerActive && (
                            <Button
                                variant="contained"
                                onClick={pauseTimer}
                                sx={{
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    backgroundColor: colors.danger,
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#FF7F7F',
                                    },
                                }}
                                component={motion.button}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Pause sx={{ marginRight: 1 }} />
                                Pause Timer
                            </Button>
                        )}
                        {isTimerPaused && (
                            <Button
                                variant="contained"
                                onClick={resumeTimer}
                                sx={{
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    backgroundColor: colors.success,
                                    color: '#fff',
                                    '&:hover': {
                                        backgroundColor: '#5cbf8a',
                                    },
                                }}
                                component={motion.button}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <RestartAlt sx={{ marginRight: 1 }} />
                                Resume Timer
                            </Button>
                        )}
                        {(isTimerActive || isTimerPaused) && (
                            <Button
                                variant="outlined"
                                onClick={resetTimer}
                                sx={{
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '0.9rem',
                                    fontWeight: '600',
                                    borderColor: colors.warning,
                                    color: colors.warning,
                                    '&:hover': {
                                        backgroundColor: colors.warning,
                                        color: '#fff',
                                    },
                                }}
                                component={motion.button}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <RestartAlt sx={{ marginRight: 1 }} />
                                Reset Timer
                            </Button>
                        )}
                    </Box>
                </Box>

                {}
                <NavigationButtons
                    currentStep={currentStep}
                    totalSteps={RECIPE_STEPS.length}
                    handlePreviousStep={handlePreviousStep}
                    handleNextStep={handleNextStep}
                    handleFinishCooking={handleFinishCooking}
                />
            </StyledCard>
            
            <BottomNav/>
        </Box>
    );
}

export default RecipeSteps;