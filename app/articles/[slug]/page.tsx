import Link from 'next/link'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

interface ArticleDetailsProps {
  params: Promise<{
    slug: string
  }>
}

const articles: Record<string, any> = {
  'orbital-predictions': {
    title: 'Advances in Real-Time Orbital Predictions',
    excerpt: 'Exploring breakthrough algorithms that enable unprecedented accuracy in calculating satellite trajectories and orbital decay',
    content: `
Orbital prediction remains one of the most critical challenges in space operations. Whether for collision avoidance, mission planning, or end-of-life disposal, accurate orbital forecasting saves lives and resources.

## The Challenge

Traditional orbital prediction methods rely on simplified models that work well for well-behaved orbits but struggle with:

- Atmospheric drag variations at high altitudes
- Solar activity effects on satellite trajectories
- Gravitational perturbations from multiple bodies
- Relativistic effects in extreme environments
- Uncertainty propagation in long-term predictions

## Our Breakthrough Approach

Our team has developed a hybrid methodology combining classical orbital mechanics with machine learning to achieve accuracy previously thought impossible.

### Key Innovation: Adaptive Drag Modeling

Rather than using static atmospheric models, we employ real-time satellite tracking data and machine learning algorithms to predict atmospheric density variations with unprecedented accuracy. This alone improves long-term predictions by 40%.

### Multi-Body Perturbation Analysis

We've implemented sophisticated algorithms that account for gravitational effects from the Sun, Moon, and major planets simultaneously, reducing prediction errors for high-altitude orbits significantly.

## Results and Impact

Our system now predicts satellite positions to within 1 kilometer for 7-day forecasts, compared to traditional 5-kilometer uncertainty. For critical space debris tracking, this represents a major improvement in collision risk assessment.

These improvements have direct applications for:
- Space traffic management
- Conjunction assessment messages (CAMs)
- Launch window optimization
- Deorbit sequence planning

## Looking Forward

We're continuing to refine our algorithms and working with space agencies worldwide to integrate these advances into operational systems.
    `,
    date: 'March 15, 2024',
    readTime: '8 min read',
    category: 'Research',
    author: 'Prof. James Morrison',
  },
  'gpu-computing': {
    title: 'GPU Computing: Accelerating Astrophysical Simulations',
    excerpt: 'How distributed GPU clusters are revolutionizing our capability to model complex celestial phenomena at scale',
    content: `
The field of computational astrophysics has been transformed by GPU computing. What once took weeks of computation now completes in hours, fundamentally changing how we approach large-scale simulations.

## The GPU Revolution

Graphics Processing Units (GPUs) were originally designed for rendering graphics, but their massive parallel processing capabilities have proven ideal for scientific computing. A modern GPU contains thousands of processing cores compared to a CPU's dozens.

## Our GPU Infrastructure

We've assembled a cluster of over 500 high-end GPUs specifically optimized for astrophysical simulations. This includes:

- NVIDIA H100 Tensor GPUs for AI workloads
- A100 GPUs for general scientific computing
- Specialized interconnects for efficient communication
- Petabyte-scale storage for simulation data

## Performance Gains

The speedups are remarkable:

- N-body simulations: 100-1000x faster than CPU-only approaches
- Fluid dynamics: 500x acceleration for 3D simulations
- Machine learning inference: 50-100x speedup on trained models
- Data processing: 20x faster for large astronomical surveys

## Technical Challenges Overcome

Moving to GPU computing wasn't straightforward. We had to:

1. **Refactor Algorithms**: Adapt classical astrophysical algorithms for massively parallel execution
2. **Memory Management**: Work within GPU memory constraints (10-80 GB per device)
3. **Data Movement**: Optimize data transfer between CPUs and GPUs
4. **Numerical Stability**: Ensure physics accuracy in parallel floating-point operations

## Real-World Impact

These capabilities have enabled entirely new research directions:

- Full 3D simulations of galaxy mergers
- Real-time exoplanet atmosphere modeling
- Large-scale dark matter structure formation
- High-resolution climate modeling for terrestrial planets

## Accessibility

We believe these tools should benefit the entire research community. Our GPU Hub provides cloud-based access allowing researchers worldwide to submit jobs and receive results without requiring expensive local hardware.

The democratization of computational astrophysics through GPU acceleration represents one of the most important advances in modern space science.
    `,
    date: 'March 8, 2024',
    readTime: '12 min read',
    category: 'Technology',
    author: 'Marcus Rodriguez',
  },
  'ml-space-science': {
    title: 'The Role of Machine Learning in Space Science',
    excerpt: 'Deep learning models are transforming how we analyze astronomical data and detect previously hidden patterns',
    content: `
Machine learning has emerged as a transformative force in space science. By analyzing vast datasets and identifying subtle patterns, ML algorithms are enabling discoveries that would be impossible through traditional analysis methods.

## The Big Data Challenge

Modern telescopes and satellites generate petabytes of data annually. The Gaia mission alone produces gigabytes of positional data for nearly 2 billion stars. Traditional manual analysis is simply not feasible at this scale.

## Machine Learning Solutions

Deep learning networks excel at:

- **Image Classification**: Automatically categorizing objects in astronomical images
- **Time Series Analysis**: Identifying variable stars and transient events
- **Anomaly Detection**: Spotting unusual objects and phenomena
- **Redshift Estimation**: Determining distances to galaxies
- **Spectral Analysis**: Classifying stellar types and composition

## Case Studies

### Exoplanet Discovery Acceleration

Traditional methods might find a few exoplanet candidates per month. ML algorithms scanning TESS data identify hundreds. Our neural networks trained on Kepler data achieve 99.7% accuracy in transit detection.

### Supernova Classification

Rapidly classifying supernovae helps coordinate follow-up observations. Our ML system achieves 98% accuracy within minutes of detection, enabling rapid alert distribution.

### Unusual Object Discovery

ML has helped identify rare object classes including:
- Ultra-luminous X-ray sources with unusual properties
- Intermediate-mass black hole candidates
- Novel neutron star types

## Challenges and Solutions

### Data Quality

Astronomical data is inherently noisy. We've implemented:
- Robust preprocessing pipelines
- Data augmentation techniques
- Uncertainty quantification in predictions

### Training Data

Limited labeled training data is overcome through:
- Transfer learning from similar tasks
- Semi-supervised learning approaches
- Simulation-based training datasets

## Looking Forward

The next generation of surveys (LSST, Vera Rubin, SKA) will produce even more data. Machine learning will be essential for extracting scientific knowledge from these unprecedented datasets.

We're also exploring explainable AI approaches to ensure we understand why models make specific classifications—essential for maintaining scientific rigor alongside computational efficiency.
    `,
    date: 'February 28, 2024',
    readTime: '10 min read',
    category: 'Innovation',
    author: 'Dr. Aisha Patel',
  },
  'exoplanet-habitability': {
    title: 'Exoplanet Habitability Assessment Framework',
    excerpt: 'A comprehensive methodology for evaluating potentially habitable worlds using integrated simulation data',
    content: `
The discovery of potentially habitable exoplanets has captivated public imagination, but assessing true habitability requires sophisticated analysis. We've developed a comprehensive framework that integrates multiple simulation and observational data sources.

## Habitability Factors

Determining whether a planet could support life requires evaluating:

### Stellar Properties
- Spectral type and luminosity stability
- Stellar activity and flare frequency
- Long-term evolution and main-sequence lifetime

### Planetary Characteristics
- Mass and radius (interior composition inference)
- Orbital parameters and stability
- Atmospheric composition and density
- Surface temperature estimates

### Environmental Factors
- Liquid water availability
- Chemical nutrient cycling
- Radiation environment
- Geological activity

## Our Assessment Framework

Our system integrates multiple components:

1. **Observational Data Analysis**: Processing direct observations from exoplanet surveys
2. **Atmospheric Modeling**: Simulating climate and atmospheric dynamics
3. **Interior Structure**: Inferring planetary composition and geological activity
4. **Habitability Scoring**: Quantifying the probability of habitability

## Advanced Features

### Climate Simulation
We run full 3D atmospheric simulations for candidate planets to determine whether liquid water could exist on the surface. This accounts for greenhouse effects, atmospheric circulation, and radiative balance.

### Biosignature Potential
Analysis of potential chemical disequilibria that biological activity could create, informing future observation strategies.

### Long-Term Stability
Consideration of orbital stability and stellar evolution over multi-billion year timescales.

## Current Results

Our analysis has identified 47 candidates in the "superhabitable zone"—planets potentially more favorable than Earth for life. While speculative, these provide targets for future detailed study.

## Future Directions

With next-generation telescopes like the James Webb Space Telescope providing better atmospheric data, our framework continues to improve. The combination of high-resolution spectroscopy and sophisticated modeling represents our best hope for answering the profound question: Are we alone?
    `,
    date: 'February 20, 2024',
    readTime: '15 min read',
    category: 'Research',
    author: 'Dr. Elena Kowalski',
  },
  'open-source-tools': {
    title: 'Collaborative Open-Source Astronomy Tools',
    excerpt: 'Building a community-driven ecosystem for accessible celestial simulation and analysis',
    content: `
Science progresses fastest when knowledge and tools are freely shared. We're committed to developing open-source tools that democratize access to advanced computational astronomy.

## Our Open-Source Initiatives

### CelestialCore
A comprehensive Python library for orbital mechanics, containing:
- N-body integration algorithms
- Ephemeris calculations
- Trajectory optimization
- Orbital element conversions

### AtmosFlow
An atmospheric simulation framework featuring:
- Finite-volume fluid dynamics solver
- Radiative transfer modules
- Chemistry integration
- Visualization tools

### AstroML
Machine learning tools specifically designed for astronomy:
- Pre-trained models for common tasks
- Custom layers for astronomical data
- Uncertainty quantification
- Interpretability tools

## Community Impact

Our open-source projects have been adopted by:
- University research groups worldwide
- Planetariums and science museums
- Amateur astronomy organizations
- K-12 STEM education programs

## Contributing

We believe science benefits from diverse perspectives. We actively encourage contributions from:
- Experienced developers
- Astronomy researchers
- Students learning computational methods
- Documentation and translation volunteers

## Accessibility Through Technology

By providing powerful tools freely, we're ensuring that computational astronomy isn't limited to well-funded institutions. A student with a laptop can now run simulations that required supercomputers a decade ago.

The future of space science will be determined by how many people can participate in the discovery process. Open-source tools are essential infrastructure for that inclusive future.
    `,
    date: 'February 10, 2024',
    readTime: '9 min read',
    category: 'Community',
    author: 'Marcus Rodriguez',
  },
  'climate-dynamics': {
    title: 'Climate Dynamics: Simulating Planetary Atmospheres',
    excerpt: 'Computational approaches to modeling weather systems on distant worlds and their atmospheric evolution',
    content: `
Understanding planetary atmospheres is central to astrobiology and exoplanet science. Weather systems, circulation patterns, and chemical processes on distant worlds remain largely mysterious—until now.

## Atmospheric Simulation Challenges

Simulating exoplanet atmospheres is fundamentally different from Earth climate modeling:

- Unknown surface properties and composition
- Potentially exotic atmospheric chemistry
- Extreme temperature and pressure ranges
- Novel circulation patterns under different forcing

## Our Simulation Approach

We've developed general circulation models (GCMs) that don't assume Earth-like conditions:

### Core Physics
- Navier-Stokes equations for fluid flow
- Thermodynamic energy balance
- Radiative transfer through various gases
- Planetary rotation and tidal effects

### Chemical Processes
- Photochemistry driven by stellar radiation
- Condensation and phase transitions
- Chemical reactions in harsh environments
- Interaction with surface and interior

## Notable Simulations

### Venus Analog Study
Simulations of a super-Earth experiencing runaway greenhouse effects, explaining potential loss of habitability.

### Tidally-Locked Planet Analysis
How day-side to night-side heat transport and circulation patterns vary with rotation state and atmospheric composition.

### High-Mass Exoplanet Atmospheres
Studies of hydrogen-rich atmospheres on larger planets, revealing circulation patterns unlike anything on Earth.

## Practical Applications

These simulations inform:
- Observation strategies for JWST and future telescopes
- Biosignature detection protocols
- Migration modeling for planet formation
- Atmospheric evolution over geological timescales

## Computing Requirements

Full-resolution simulations require significant computational power. A single 3D simulation produces terabytes of output and requires days of GPU computing.

The scaling of computational resources with simulation resolution and temporal extent remains an active area of development, pushing the boundaries of both atmospheric science and computational methods.
    `,
    date: 'January 30, 2024',
    readTime: '11 min read',
    category: 'Research',
    author: 'Dr. Elena Kowalski',
  },
}

export default async function ArticlePage(props: ArticleDetailsProps) {
  const params = await props.params
  const article = articles[params.slug]

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-text-2 mb-8">The article you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/" className="text-accent hover:text-accent-light transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero */}
      <section className="border-b border-border py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#articles"
            className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-mono text-xs uppercase tracking-wider mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="inline-block text-xs uppercase tracking-widest font-mono font-semibold text-accent">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-display leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-border text-sm text-text-2">
              <div className="flex items-center gap-2 font-mono">
                <Calendar className="w-4 h-4 text-accent" />
                {article.date}
              </div>
              <div className="flex items-center gap-2 font-mono">
                <Clock className="w-4 h-4 text-accent" />
                {article.readTime}
              </div>
              <div className="font-mono text-accent">By {article.author}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-text-2 leading-relaxed">
            {article.content.trim().split('\n\n').map((paragraph: string, i: number) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={i} className="text-2xl font-bold text-foreground font-display mt-8 mb-4">
                    {paragraph.replace('## ', '').trim()}
                  </h2>
                )
              }
              if (paragraph.startsWith('-')) {
                const items = paragraph.split('\n').filter(l => l.trim().startsWith('-'))
                return (
                  <ul key={i} className="space-y-3 ml-4">
                    {items.map((item, j) => (
                      <li key={j} className="flex gap-3">
                        <span className="text-accent flex-shrink-0">•</span>
                        <span>{item.replace('- ', '').trim()}</span>
                      </li>
                    ))}
                  </ul>
                )
              }
              return (
                <p key={i} className="text-base leading-relaxed">
                  {paragraph.trim()}
                </p>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
