# 🎮 Mobile Games A/B Testing — Statistical Analysis

![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![Jupyter](https://img.shields.io/badge/Jupyter-Notebook-orange)
![Status](https://img.shields.io/badge/Status-Complete-green)

---

## 📊 Key Visualizations
*(Note: These plots are generated in the notebook)*

### 1. The Outlier "Trap"
<img src="reports/figures/boxplot_before_cleaning.png" alt="Boxplot of Outlier" width="600"/>
*Identifying the single user who broke the dataset.*

### 2. Bootstrap Distribution (Retention)
<img src="reports/figures/bootstrap_difference_distribution.png" alt="Bootstrap KDE" width="600"/>
*The entire distribution shifts to the right of 0, indicating Gate 30 is consistently better.*

---

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

## 📁 Repository Structure
```text
├── data/            # Raw dataset
├── notebooks/       # Jupyter notebooks for analysis
├── figures/         # Generated visualizations
├── README.md        # Project documentation
```

---

## 🚀 Tools & Techniques

- Python (NumPy, Pandas, Matplotlib, Seaborn)

- Bootstrap Resampling

- Permutation Testing

- Exploratory Data Analysis

---

## 📌 Key Learning

This project demonstrates how sound statistical reasoning, rather than blind application of parametric tests, leads to more reliable and actionable conclusions in A/B testing.

---

**Author**: Pankaj 

**Dataset Source**: Kaggle
