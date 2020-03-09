#lang racket
(define (palindrome? w)
  (let loop ((i 0)
             (j (- (string-length w) 1)))
    (or (>= i j)
        (and (char=? (string-ref w i) (string-ref w j))
             (loop (+ i 1) (- j 1))))))

