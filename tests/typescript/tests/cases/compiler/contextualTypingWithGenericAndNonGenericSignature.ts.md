__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 420,
                            "end": 426
                          },
                          "start": 418,
                          "end": 426
                        },
                        "start": 417,
                        "end": 426
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 431,
                            "end": 437
                          },
                          "start": 429,
                          "end": 437
                        },
                        "start": 428,
                        "end": 437
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 440,
                        "end": 446
                      },
                      "start": 438,
                      "end": 446
                    },
                    "start": 416,
                    "end": 447
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 453,
                            "end": 454
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 453,
                          "end": 454
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 456,
                            "end": 457
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 456,
                          "end": 457
                        }
                      ],
                      "start": 452,
                      "end": 458
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 462,
                              "end": 463
                            },
                            "typeArguments": null,
                            "start": 462,
                            "end": 463
                          },
                          "start": 460,
                          "end": 463
                        },
                        "start": 459,
                        "end": 463
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 468,
                              "end": 469
                            },
                            "typeArguments": null,
                            "start": 468,
                            "end": 469
                          },
                          "start": 466,
                          "end": 469
                        },
                        "start": 465,
                        "end": 469
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 472,
                          "end": 473
                        },
                        "typeArguments": null,
                        "start": 472,
                        "end": 473
                      },
                      "start": 470,
                      "end": 473
                    },
                    "start": 452,
                    "end": 473
                  }
                ],
                "start": 410,
                "end": 475
              },
              "start": 408,
              "end": 475
            },
            "start": 406,
            "end": 475
          },
          "init": null,
          "definite": false,
          "start": 406,
          "end": 475
        }
      ],
      "declare": false,
      "start": 402,
      "end": 476
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null,
          "start": 478,
          "end": 480
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 484,
              "end": 485
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 487,
              "end": 488
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 503
                },
                "start": 495,
                "end": 503
              }
            ],
            "start": 493,
            "end": 505
          },
          "id": null,
          "generator": false,
          "start": 483,
          "end": 505
        },
        "start": 478,
        "end": 505
      },
      "directive": null,
      "start": 478,
      "end": 505
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 522,
                            "end": 523
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 522,
                          "end": 523
                        },
                        {
                          "type": "TSTypeParameter",
                          "name": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 525,
                            "end": 526
                          },
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "out": false,
                          "const": false,
                          "start": 525,
                          "end": 526
                        }
                      ],
                      "start": 521,
                      "end": 527
                    },
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 531,
                              "end": 532
                            },
                            "typeArguments": null,
                            "start": 531,
                            "end": 532
                          },
                          "start": 529,
                          "end": 532
                        },
                        "start": 528,
                        "end": 532
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 537,
                              "end": 538
                            },
                            "typeArguments": null,
                            "start": 537,
                            "end": 538
                          },
                          "start": 535,
                          "end": 538
                        },
                        "start": 534,
                        "end": 538
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 541,
                          "end": 542
                        },
                        "typeArguments": null,
                        "start": 541,
                        "end": 542
                      },
                      "start": 539,
                      "end": 542
                    },
                    "start": 521,
                    "end": 542
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 551,
                            "end": 557
                          },
                          "start": 549,
                          "end": 557
                        },
                        "start": 548,
                        "end": 557
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 562,
                            "end": 568
                          },
                          "start": 560,
                          "end": 568
                        },
                        "start": 559,
                        "end": 568
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 571,
                        "end": 577
                      },
                      "start": 569,
                      "end": 577
                    },
                    "start": 547,
                    "end": 578
                  }
                ],
                "start": 515,
                "end": 580
              },
              "start": 513,
              "end": 580
            },
            "start": 511,
            "end": 580
          },
          "init": null,
          "definite": false,
          "start": 511,
          "end": 580
        }
      ],
      "declare": false,
      "start": 507,
      "end": 581
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null,
          "start": 583,
          "end": 585
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 589,
              "end": 590
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 592,
              "end": 593
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ReturnStatement",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 607,
                  "end": 608
                },
                "start": 600,
                "end": 608
              }
            ],
            "start": 598,
            "end": 610
          },
          "id": null,
          "generator": false,
          "start": 588,
          "end": 610
        },
        "start": 583,
        "end": 610
      },
      "directive": null,
      "start": 583,
      "end": 610
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 402,
  "end": 610
}
```
