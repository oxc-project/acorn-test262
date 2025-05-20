__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 402,
  "end": 610,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 402,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 475,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 475,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 408,
              "end": 475,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 410,
                "end": 475,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 416,
                    "end": 447,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 417,
                        "end": 426,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 418,
                          "end": 426,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 420,
                            "end": 426
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 428,
                        "end": 437,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 429,
                          "end": 437,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 431,
                            "end": 437
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 438,
                      "end": 446,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 440,
                        "end": 446
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 452,
                    "end": 473,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 459,
                        "end": 463,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 460,
                          "end": 463,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 462,
                            "end": 463,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 462,
                              "end": 463,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 465,
                        "end": 469,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 466,
                          "end": 469,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 468,
                            "end": 469,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 468,
                              "end": 469,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 470,
                      "end": 473,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 472,
                        "end": 473,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 472,
                          "end": 473,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 452,
                      "end": 458,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 453,
                          "end": 454,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 453,
                            "end": 454,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 456,
                          "end": 457,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 456,
                            "end": 457,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 505,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 478,
        "end": 505,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 478,
          "end": 480,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 483,
          "end": 505,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 493,
            "end": 505,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 495,
                "end": 503,
                "argument": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 503,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 484,
              "end": 485,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 487,
              "end": 488,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 507,
      "end": 581,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 511,
          "end": 580,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 511,
            "end": 580,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 513,
              "end": 580,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 515,
                "end": 580,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 521,
                    "end": 542,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 528,
                        "end": 532,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 529,
                          "end": 532,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 531,
                            "end": 532,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 531,
                              "end": 532,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 534,
                        "end": 538,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 535,
                          "end": 538,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 537,
                            "end": 538,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 537,
                              "end": 538,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 539,
                      "end": 542,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 541,
                        "end": 542,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 541,
                          "end": 542,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 521,
                      "end": 527,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 522,
                          "end": 523,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 522,
                            "end": 523,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 525,
                          "end": 526,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 525,
                            "end": 526,
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 547,
                    "end": 578,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 548,
                        "end": 557,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 549,
                          "end": 557,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 551,
                            "end": 557
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 559,
                        "end": 568,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 560,
                          "end": 568,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 562,
                            "end": 568
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 569,
                      "end": 577,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 571,
                        "end": 577
                      }
                    },
                    "typeParameters": null
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 583,
      "end": 610,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 583,
        "end": 610,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 583,
          "end": 585,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 588,
          "end": 610,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 598,
            "end": 610,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 600,
                "end": 608,
                "argument": {
                  "type": "Identifier",
                  "start": 607,
                  "end": 608,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ]
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "Identifier",
              "start": 589,
              "end": 590,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "returnType": null,
          "typeParameters": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
