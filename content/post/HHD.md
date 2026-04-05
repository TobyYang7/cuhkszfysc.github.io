---
type: grad
author: ldt
year: 22
degree: phd
university: uchi
department: sds
date: 2026-04-05
---
Let $A \in R^{m * n}$, wlog assume $m \geq n, Rank(A) = r$
$$
A'A = U DU' 

$$

$U = [u_1,\cdots, u_n] \in R^{n * n}$ is orthogonal. $D = diag(d_r, d_{r-1},\cdots, d_1, 0,\cdots, 0)$ 

$(Au_i)'(Au_j) = u_i'A'Au_j = u_i' (d_ju_j)= d_j 1(i=j)$ , it also shows, for $d_j =0, Au_j = 0$ since $(Au_j)'(Au_j) = d_j *1 = 0$.

define $v_i = \frac{1}{\sqrt{d_i}} Au_i, i=1,\cdots, r; V = [v_r, \cdots, v_1,0,\cdots,0]\in R^{m*n}$

$\implies AU = Vdiag(\sqrt{d_r},\cdots, \sqrt{d_1}, 0,\cdots,0)\implies$
$$
A = Vdiag(\sqrt{d_r},\cdots, \sqrt{d_1}, 0,\cdots,0)U'
$$

also,

$$
\begin{align}
A &= \underbracket{[V, \mathbf{0}] }_{m*m}

\underbracket{\left[\begin{matrix}diag(\sqrt{d_r},\cdots, \sqrt{d_1}, 0,\cdots,0)\\\mathbf{0}
\end{matrix}\right]}_{m*n} \underbracket{U'}_{n*n} \\
& = \hat V \left[\begin{matrix}diag(\sqrt{d_r},\cdots, \sqrt{d_1}, 0,\cdots,0)\\\mathbf{0}
\end{matrix}\right] U'
\end{align}
$$
also, 

$$
\begin{align}
A'A &= Udiag({d_r},\cdots, {d_1}, 0,\cdots,0)U'\\
AA' &= Vdiag({d_r},\cdots, {d_1}, \underbracket{0,\cdots,0}_{n-r})V' \\
&= \hat V  diag({d_r},\cdots, {d_1}, \underbracket{0,\cdots,0}_{m-r})\hat V' 
\end{align}
$$ s.t. $\hat V = [v_r, \cdots, v_1,\hat v_1,\cdots,\hat v_{m-r}]$, is an orthogonal basis in $R^m$ by extending $v_1,\cdots, v_r$

also, it shows $A'A$ and $AA'$ have the same set of non-zero spectral diagonal elements
