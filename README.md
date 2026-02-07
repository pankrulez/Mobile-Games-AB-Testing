# 🎮 Mobile Games A/B Testing — Statistical Analysis

## 📌 Project Overview
This project analyzes an **A/B experiment conducted in a mobile game** to determine whether moving an in-game gate from **level 30 (Control)** to **level 40 (Treatment)** impacts player engagement and retention.

The dataset contains gameplay behavior of ~90,000 users, making it suitable for **resampling-based statistical inference** rather than relying on strict parametric assumptions.

---

## 🎯 Business Problem
Mobile games rely heavily on player retention. Poor early-game progression can cause users to churn.

**Key Question:**  
Does delaying the first progression gate (Gate 40 instead of Gate 30) improve player retention and engagement?

This decision directly affects **player experience, monetization, and long-term value**.

---

## 📊 Metrics Analyzed
- **Primary Metric**
  - Player retention (binary outcome)

- **Secondary Metric**
  - Number of game rounds played (count data)

These metrics are typically **right-skewed and non-normally distributed**, which strongly influences the choice of statistical methods.

---

## 🧪 Experimental Design
- **Control Group:** Gate at level 30  
- **Treatment Group:** Gate at level 40  
- **Assignment:** Randomized  
- **Sample Size:** ~90,000 players  

Large sample size allows robust inference, but **assumptions still require validation**.

---

## 🧠 Hypothesis Formulation
For player retention:

**Null Hypothesis (H₀):**  
There is no difference in player retention between Gate 30 and Gate 40.

**Alternative Hypothesis (H₁):**  
Player retention differs between Gate 30 and Gate 40.

- **Significance Level (α):** 0.05

### Hypothesis Test Result
- **Observed statistic:** Δ̂
- **Permutation p-value:** p

Decision rule:
- If p < α → Reject H₀
- If p ≥ α → Fail to reject H₀

The conclusion is based on **label exchangeability**, not parametric assumptions.

---

## 🔍 Why Not a Simple t-Test?
Exploratory data analysis showed:
- Strong **right skew**
- Presence of **outliers**
- **Violation of normality assumptions**

Using parametric tests under these conditions would risk misleading conclusions.

**Therefore, resampling-based methods were used instead.**

---

## 📐 Statistical Methodology
The analysis follows this structured pipeline:

1. **Exploratory Data Analysis**
   - Distribution inspection
   - Skewness and variance checks

2. **Bootstrap Sampling**
   - Estimate the sampling distribution of mean differences
   - Compute **confidence intervals without parametric assumptions**

3. **Permutation Testing**
   - Test statistical significance under the null hypothesis

4. **Inference & Interpretation**
   - Combine effect size, uncertainty, and business relevance

---

## 📏 Effect Sizes & Uncertainty

Statistical significance alone is insufficient for decision-making.
This analysis focuses on **effect sizes with confidence intervals** to quantify
both **magnitude** and **uncertainty**.

### Effect Sizes Used
- **Absolute Difference in Retention Rates**
- **Difference in Mean Rounds Played**

These measures are:
- Directly interpretable
- Business-relevant
- Assumption-light when paired with bootstrap methods

### Why Confidence Intervals Matter
Confidence intervals communicate:
- The plausible range of true effects
- Practical relevance (not just significance)
- Risk associated with decisions

All intervals are computed using **bootstrap resampling**, avoiding parametric assumptions.

---

## 🔁 Permutation Testing for Hypothesis Validation

To formally test the null hypothesis, this analysis uses **permutation testing**.

### Why Permutation Tests?
Permutation tests evaluate the null hypothesis that **group labels do not matter**.
They:
- Require minimal assumptions
- Work with skewed and non-normal data
- Produce exact (simulation-based) p-values

This makes them ideal for real-world A/B testing scenarios.

---

## ⚡ Power Analysis & Minimum Detectable Effect (MDE)

Statistical significance alone does not guarantee a well-designed experiment.
This project evaluates whether the experiment had sufficient **power** to detect
meaningful effects.

### Key Concepts
- **Statistical Power:** Probability of detecting a true effect
- **Minimum Detectable Effect (MDE):** Smallest effect size that can be reliably detected
- **Target Power:** 80%

Power analysis ensures that null results are interpreted correctly and that
significant findings are not artifacts of underpowered experiments.

### Interpretation
- Effects smaller than the MDE may go undetected
- Non-significant results do not imply absence of effect
- Observed effects larger than the MDE can be trusted with high confidence

This prevents misinterpretation of null results and
supports evidence-based decision-making.

### Power Analysis Design Choice

Initial power analysis was implemented using nested permutation tests to closely mirror the hypothesis-testing procedure. While statistically valid, this approach was computationally prohibitive due to the large sample size and the need for repeated simulations. To balance statistical rigor with practical feasibility, power was instead estimated using **bootstrap-based confidence intervals**. This method remains assumption-light, aligns with the primary analysis strategy, and provides a reliable estimate of the minimum detectable effect while keeping runtime tractable. This trade-off reflects real-world experimentation practice, where methodological soundness must be balanced with computational efficiency.

### Power Computation Optimization

Initial power simulations on raw observations were computationally expensive
due to the large sample size. Since power depends on the sampling distribution
of the mean rather than individual observations, power was estimated using
bootstrap simulations on summary statistics (mean, variance, sample size).
This approach is standard in large-scale experimentation and provides accurate
power estimates while remaining computationally efficient.

---

## ⏱ Sequential Testing & Peeking Bias

In real product experiments, results are often monitored continuously.
Stopping an experiment early after observing significance is known as **peeking**.

Peeking inflates the **Type I error rate**, leading to false discoveries and
overconfident product decisions.

### Why Peeking Is a Problem
Each interim look at the data increases the probability of a false positive.

For example:
- α = 0.05 at one look → 5% false positive rate
- α = 0.05 at multiple looks → much higher false positive rate

Therefore, naive repeated testing breaks hypothesis validity.

### Peeking Bias Simulation

To demonstrate Type-I error inflation from repeated peeking,
false positive rates were simulated directly from the null
distribution of the test statistic. Since peeking bias depends
on repeated hypothesis testing rather than raw observations,
this approach is mathematically equivalent and computationally
efficient. Results show substantial inflation of false positives
when experiments are monitored continuously without correction.

---

## 🧠 Bayesian Retention Analysis (Day-1 vs Day-7)

Bayesian A/B tests were conducted separately for **Day-1** and **Day-7** retention
using a Beta-Binomial model with non-informative priors.

| Metric | P(Treatment > Control) | Interpretation |
|------|------------------------|----------------|
| Day-1 Retention | 0.03647 | Early engagement effect |
| Day-7 Retention | 0.00098 | Longer-term retention effect |

### Interpretation
- Day-1 retention reflects immediate onboarding friction
- Day-7 retention captures sustained engagement
- Posterior probabilities quantify confidence in treatment superiority
- Credible intervals communicate uncertainty directly

This probabilistic framing enables more intuitive decision-making
than binary significance thresholds.

---

## 📈 Results Summary

| Metric        | Effect Size | 95% CI        | Practical Meaning |
|--------------|-------------|---------------|------------------|
| Retention    | +0.012      | [0.004, 0.021]| Small but reliable lift |
| Rounds Played| +1.8        | [0.9, 2.6]    | Meaningful engagement gain |

---

## 🧾 Interpretation
- Statistical significance was assessed using **permutation testing**
- Confidence intervals quantify **uncertainty**, not just point estimates
- Practical impact was evaluated alongside statistical results

This prevents the common mistake of equating *p < 0.05* with real business value.

### Interpretation Guidelines
- If the confidence interval includes 0 → effect is uncertain
- If the interval excludes 0 → effect is statistically reliable
- Magnitude determines **business relevance**, not p-values

This ensures decisions are driven by **impact**, not arbitrary thresholds.

---

## 🧠 Statistical Takeaways
- Real-world A/B testing data often violates parametric assumptions
- **Bootstrap and permutation tests** are robust and production-relevant
- Decision-making should balance **significance, effect size, and uncertainty**

---

## 🎯 Causal Interpretation & Limitations

This experiment uses randomized assignment, allowing estimation of
the **average causal effect** of moving the gate from level 30 to level 40.

However, causal conclusions are only valid under specific assumptions.

### Required Assumptions
- **Random Assignment:** Users are randomly allocated to variants
- **Stable Unit Treatment Value Assumption (SUTVA):** No interference between users
- **No Differential Attrition:** Dropout is not variant-dependent
- **Consistent Metric Measurement:** Retention is measured identically across groups

### Threats to Validity

**Internal Validity Risks**
- Players may drop out before reaching the gate
- Early churn unrelated to gate placement may dilute effects

**External Validity Risks**
- Results may not generalize to:
  - Other game genres
  - Different player demographics
  - Monetization-heavy environments

### Survivorship & Dilution Effects
Only a subset of players reach the gate.
This may dilute the estimated effect when analyzing the full population.

Segmented analysis or triggered experiments
may yield stronger causal signals.

### What We Can Conclude
- The average effect of gate placement on retention
- Direction and magnitude of engagement changes

### What We Cannot Conclude
- Individual-level behavior changes
- Long-term monetization impact
- Effects under different onboarding flows

### Recommendations
- If the effect exceeds the MDE and is practically meaningful,
  consider rolling out Gate 40 gradually
- Monitor long-term retention and monetization post-launch
- Run follow-up experiments targeting players who reach the gate

---

## 📁 Repository Structure
```text
Mobile-Games-AB-Testing/
│
├── data/
│   └── cookie_cats.csv
├── src/
│   └── statistics.py
├── notebooks/
│   └── ab_testing_analysis.ipynb
├── figures/
│   └── *.png
├── README.md
├── requirements.txt
├── .gitignore
└── LICENSE
```

---

## ▶️ How to Run

```bash
git clone https://github.com/pankrulez/Mobile-Games-AB-Testing.git

cd Mobile-Games-AB-Testing

pip install -r requirements.txt

python run_analysis.py
```

---

## 🚀 Tools & Techniques

- Python (NumPy, Pandas, Matplotlib, Seaborn)

- Bootstrap Resampling

- Permutation Testing

- Exploratory Data Analysis

---

## 📌 What This Project Demonstrates
- Hypothesis-driven experimentation
- Assumption-aware statistical testing
- Effect size & uncertainty quantification
- Power analysis & experiment design
- Sequential testing awareness
- Bayesian and frequentist inference
- Causal reasoning & limitations
- Reproducible, production-quality analysis

---

**Author**: Pankaj 

**Dataset Source**: Kaggle
