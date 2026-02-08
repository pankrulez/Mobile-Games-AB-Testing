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

## 🧠 Statistical Framework & Methodological Summary

This project applies a **multi-method statistical framework** to evaluate the causal
impact of moving an in-game gate from level 30 to level 40. Each method addresses a
different aspect of uncertainty and decision-making in real-world experimentation.

---

### Frequentist Inference (Resampling-Based)

Frequentist analysis is conducted using **bootstrap confidence intervals** and
**permutation testing** rather than parametric tests. This choice avoids reliance on
normality assumptions, which are frequently violated in behavioral game data.

- Bootstrap confidence intervals quantify **effect size uncertainty**
- Permutation tests provide **exact, assumption-light p-values**
- Results are interpreted using both statistical and practical significance

This ensures inference remains robust under skewed and heavy-tailed distributions.

---

### Bayesian Inference (Probabilistic Decision-Making)

To complement frequentist results, Bayesian A/B testing is performed using a
**Beta-Binomial model** for binary retention outcomes.

Bayesian analysis answers questions of the form:
> *“What is the probability that Gate 40 improves retention?”*

Posterior distributions and credible intervals are reported separately for:
- **Day-1 retention** (early engagement)
- **Day-7 retention** (sustained engagement)

This probabilistic framing is often more intuitive for product decision-making than
binary hypothesis tests.

---

### Power Analysis & Minimum Detectable Effect

Power analysis is used to evaluate whether the experiment was capable of detecting
meaningful effects. Due to the large sample size, power was estimated using
**bootstrap simulations on summary statistics** (mean, variance, sample size) rather
than raw observations.

This approach:
- Accurately approximates the sampling distribution of the mean
- Remains statistically valid under large-sample conditions
- Keeps computation tractable for practical experimentation workflows

Minimum Detectable Effect (MDE) estimates help distinguish between
*true null effects* and *insufficient experimental sensitivity*.

---

### Sequential Testing & Peeking Bias

Real-world experiments are often monitored continuously. To demonstrate the risks of
this practice, **peeking bias** was simulated by repeatedly evaluating test statistics
under the null hypothesis.

Results show that repeated interim testing without correction can dramatically inflate
Type-I error rates, leading to false discoveries.

This highlights the importance of:
- Predefined stopping rules
- Fixed-horizon tests
- Interpreting results in the context of experimental governance

---

### Causal Interpretation & Limitations

Randomized assignment allows estimation of the **average causal effect** of gate
placement under standard assumptions (randomization, SUTVA, consistent measurement).
However, results are subject to limitations such as:

- Survivorship and dilution effects (not all users reach the gate)
- External validity constraints (results may not generalize across games or cohorts)

Conclusions are therefore framed conservatively, with clear boundaries on what the
experiment can and cannot establish.

---

### Summary

By combining **frequentist inference**, **Bayesian reasoning**, **power analysis**, and
**experiment design diagnostics**, this project demonstrates how statistically sound
and practically scalable A/B testing should be conducted in production environments.

The emphasis throughout is on:
- Effect sizes over p-values
- Uncertainty over point estimates
- Decision quality over mechanical testing

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

## Live Demo (Dashboard Branch)

This repository includes a production-style dashboard built with Next.js
to visualize precomputed experimental results.

👉 Demo: https://your-vercel-url.vercel.app  
👉 Source: `dashboard-vercel` branch
---

**Author**: Pankaj 

**Dataset Source**: Kaggle
