#lang racket
(define series
  (lambda (ls)
    (map
      (lambda (n)
        (+ (car n) (car (cdr n)))))))
