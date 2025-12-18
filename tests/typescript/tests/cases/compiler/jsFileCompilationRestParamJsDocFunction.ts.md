__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "apply",
        "optional": false,
        "typeAnnotation": null,
        "start": 382,
        "end": 387
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": null,
          "start": 388,
          "end": 392
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "thisArg",
          "optional": false,
          "typeAnnotation": null,
          "start": 394,
          "end": 401
        },
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "args",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 410
          },
          "optional": false,
          "typeAnnotation": null,
          "value": null,
          "start": 403,
          "end": 410
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 422,
                  "end": 428
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 431,
                    "end": 435
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 436,
                    "end": 442
                  },
                  "optional": false,
                  "computed": false,
                  "start": 431,
                  "end": 442
                },
                "definite": false,
                "start": 422,
                "end": 442
              }
            ],
            "declare": false,
            "start": 418,
            "end": 443
          },
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "length",
              "optional": false,
              "typeAnnotation": null,
              "start": 456,
              "end": 462
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 479,
                  "end": 480
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 489,
                          "end": 493
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 494,
                          "end": 498
                        },
                        "optional": false,
                        "computed": false,
                        "start": 489,
                        "end": 498
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 499,
                          "end": 506
                        }
                      ],
                      "optional": false,
                      "start": 489,
                      "end": 507
                    },
                    "start": 482,
                    "end": 508
                  }
                ],
                "start": 474,
                "end": 508
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 522,
                  "end": 523
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 532,
                          "end": 536
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 537,
                          "end": 541
                        },
                        "optional": false,
                        "computed": false,
                        "start": 532,
                        "end": 541
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 542,
                          "end": 549
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 551,
                            "end": 555
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 556,
                            "end": 557
                          },
                          "optional": false,
                          "computed": true,
                          "start": 551,
                          "end": 558
                        }
                      ],
                      "optional": false,
                      "start": 532,
                      "end": 559
                    },
                    "start": 525,
                    "end": 560
                  }
                ],
                "start": 517,
                "end": 560
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 574,
                  "end": 575
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 584,
                          "end": 588
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 589,
                          "end": 593
                        },
                        "optional": false,
                        "computed": false,
                        "start": 584,
                        "end": 593
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 594,
                          "end": 601
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 603,
                            "end": 607
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 608,
                            "end": 609
                          },
                          "optional": false,
                          "computed": true,
                          "start": 603,
                          "end": 610
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 612,
                            "end": 616
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 617,
                            "end": 618
                          },
                          "optional": false,
                          "computed": true,
                          "start": 612,
                          "end": 619
                        }
                      ],
                      "optional": false,
                      "start": 584,
                      "end": 620
                    },
                    "start": 577,
                    "end": 621
                  }
                ],
                "start": 569,
                "end": 621
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 635,
                  "end": 636
                },
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 645,
                          "end": 649
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "call",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 650,
                          "end": 654
                        },
                        "optional": false,
                        "computed": false,
                        "start": 645,
                        "end": 654
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "thisArg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 655,
                          "end": 662
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 664,
                            "end": 668
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 669,
                            "end": 670
                          },
                          "optional": false,
                          "computed": true,
                          "start": 664,
                          "end": 671
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 673,
                            "end": 677
                          },
                          "property": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 678,
                            "end": 679
                          },
                          "optional": false,
                          "computed": true,
                          "start": 673,
                          "end": 680
                        },
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 682,
                            "end": 686
                          },
                          "property": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 687,
                            "end": 688
                          },
                          "optional": false,
                          "computed": true,
                          "start": 682,
                          "end": 689
                        }
                      ],
                      "optional": false,
                      "start": 645,
                      "end": 690
                    },
                    "start": 638,
                    "end": 691
                  }
                ],
                "start": 630,
                "end": 691
              }
            ],
            "start": 448,
            "end": 697
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "func",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 709,
                  "end": 713
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "apply",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 719
                },
                "optional": false,
                "computed": false,
                "start": 709,
                "end": 719
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "thisArg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 720,
                  "end": 727
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 729,
                  "end": 733
                }
              ],
              "optional": false,
              "start": 709,
              "end": 734
            },
            "start": 702,
            "end": 735
          }
        ],
        "start": 412,
        "end": 737
      },
      "expression": false,
      "start": 373,
      "end": 737
    },
    {
      "type": "ExportDefaultDeclaration",
      "declaration": {
        "type": "Identifier",
        "decorators": [],
        "name": "apply",
        "optional": false,
        "typeAnnotation": null,
        "start": 754,
        "end": 759
      },
      "exportKind": "value",
      "start": 739,
      "end": 760
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 373,
  "end": 760
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "function",
    "start": 373,
    "end": 381,
    "range": [
      373,
      381
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 382,
    "end": 387,
    "range": [
      382,
      387
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 387,
    "end": 388,
    "range": [
      387,
      388
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 388,
    "end": 392,
    "range": [
      388,
      392
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 392,
    "end": 393,
    "range": [
      392,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 394,
    "end": 401,
    "range": [
      394,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 403,
    "end": 406,
    "range": [
      403,
      406
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 406,
    "end": 410,
    "range": [
      406,
      410
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411,
    "range": [
      410,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 412,
    "end": 413,
    "range": [
      412,
      413
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 418,
    "end": 421,
    "range": [
      418,
      421
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 422,
    "end": 428,
    "range": [
      422,
      428
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 429,
    "end": 430,
    "range": [
      429,
      430
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 431,
    "end": 435,
    "range": [
      431,
      435
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 435,
    "end": 436,
    "range": [
      435,
      436
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 436,
    "end": 442,
    "range": [
      436,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 442,
    "end": 443,
    "range": [
      442,
      443
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 448,
    "end": 454,
    "range": [
      448,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 456,
    "end": 462,
    "range": [
      456,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465,
    "range": [
      464,
      465
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 474,
    "end": 478,
    "range": [
      474,
      478
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 479,
    "end": 480,
    "range": [
      479,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 482,
    "end": 488,
    "range": [
      482,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 489,
    "end": 493,
    "range": [
      489,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 493,
    "end": 494,
    "range": [
      493,
      494
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 494,
    "end": 498,
    "range": [
      494,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 499,
    "end": 506,
    "range": [
      499,
      506
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 506,
    "end": 507,
    "range": [
      506,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 517,
    "end": 521,
    "range": [
      517,
      521
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 525,
    "end": 531,
    "range": [
      525,
      531
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 532,
    "end": 536,
    "range": [
      532,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 537,
    "end": 541,
    "range": [
      537,
      541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 541,
    "end": 542,
    "range": [
      541,
      542
    ]
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 542,
    "end": 549,
    "range": [
      542,
      549
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 549,
    "end": 550,
    "range": [
      549,
      550
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 551,
    "end": 555,
    "range": [
      551,
      555
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 555,
    "end": 556,
    "range": [
      555,
      556
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 556,
    "end": 557,
    "range": [
      556,
      557
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 557,
    "end": 558,
    "range": [
      557,
      558
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 558,
    "end": 559,
    "range": [
      558,
      559
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560,
    "range": [
      559,
      560
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 569,
    "end": 573,
    "range": [
      569,
      573
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 574,
    "end": 575,
    "range": [
      574,
      575
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 575,
    "end": 576,
    "range": [
      575,
      576
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 577,
    "end": 583,
    "range": [
      577,
      583
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 584,
    "end": 588,
    "range": [
      584,
      588
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 588,
    "end": 589,
    "range": [
      588,
      589
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 589,
    "end": 593,
    "range": [
      589,
      593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 593,
    "end": 594,
    "range": [
      593,
      594
    ]
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 594,
    "end": 601,
    "range": [
      594,
      601
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 601,
    "end": 602,
    "range": [
      601,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 603,
    "end": 607,
    "range": [
      603,
      607
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 607,
    "end": 608,
    "range": [
      607,
      608
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 608,
    "end": 609,
    "range": [
      608,
      609
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 609,
    "end": 610,
    "range": [
      609,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 612,
    "end": 616,
    "range": [
      612,
      616
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 616,
    "end": 617,
    "range": [
      616,
      617
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 617,
    "end": 618,
    "range": [
      617,
      618
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 618,
    "end": 619,
    "range": [
      618,
      619
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 619,
    "end": 620,
    "range": [
      619,
      620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 620,
    "end": 621,
    "range": [
      620,
      621
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 630,
    "end": 634,
    "range": [
      630,
      634
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 635,
    "end": 636,
    "range": [
      635,
      636
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 636,
    "end": 637,
    "range": [
      636,
      637
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 638,
    "end": 644,
    "range": [
      638,
      644
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 645,
    "end": 649,
    "range": [
      645,
      649
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 649,
    "end": 650,
    "range": [
      649,
      650
    ]
  },
  {
    "type": "Identifier",
    "value": "call",
    "start": 650,
    "end": 654,
    "range": [
      650,
      654
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 655,
    "end": 662,
    "range": [
      655,
      662
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 662,
    "end": 663,
    "range": [
      662,
      663
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 664,
    "end": 668,
    "range": [
      664,
      668
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 668,
    "end": 669,
    "range": [
      668,
      669
    ]
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 670,
    "end": 671,
    "range": [
      670,
      671
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 671,
    "end": 672,
    "range": [
      671,
      672
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 673,
    "end": 677,
    "range": [
      673,
      677
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 677,
    "end": 678,
    "range": [
      677,
      678
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 678,
    "end": 679,
    "range": [
      678,
      679
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 679,
    "end": 680,
    "range": [
      679,
      680
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 680,
    "end": 681,
    "range": [
      680,
      681
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 682,
    "end": 686,
    "range": [
      682,
      686
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 687,
    "end": 688,
    "range": [
      687,
      688
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 688,
    "end": 689,
    "range": [
      688,
      689
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 689,
    "end": 690,
    "range": [
      689,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 690,
    "end": 691,
    "range": [
      690,
      691
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 696,
    "end": 697,
    "range": [
      696,
      697
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 702,
    "end": 708,
    "range": [
      702,
      708
    ]
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 709,
    "end": 713,
    "range": [
      709,
      713
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 713,
    "end": 714,
    "range": [
      713,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 714,
    "end": 719,
    "range": [
      714,
      719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 719,
    "end": 720,
    "range": [
      719,
      720
    ]
  },
  {
    "type": "Identifier",
    "value": "thisArg",
    "start": 720,
    "end": 727,
    "range": [
      720,
      727
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 727,
    "end": 728,
    "range": [
      727,
      728
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 729,
    "end": 733,
    "range": [
      729,
      733
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 733,
    "end": 734,
    "range": [
      733,
      734
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 734,
    "end": 735,
    "range": [
      734,
      735
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 736,
    "end": 737,
    "range": [
      736,
      737
    ]
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 739,
    "end": 745,
    "range": [
      739,
      745
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 746,
    "end": 753,
    "range": [
      746,
      753
    ]
  },
  {
    "type": "Identifier",
    "value": "apply",
    "start": 754,
    "end": 759,
    "range": [
      754,
      759
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 759,
    "end": 760,
    "range": [
      759,
      760
    ]
  }
]
```
