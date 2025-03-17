__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 403,
  "end": 612,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 403,
      "end": 477,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 476,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 476,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 409,
              "end": 476,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 411,
                "end": 476,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 417,
                    "end": 448,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 418,
                        "end": 427,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 419,
                          "end": 427,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 421,
                            "end": 427
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 429,
                        "end": 438,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 430,
                          "end": 438,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 432,
                            "end": 438
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 439,
                      "end": 447,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 441,
                        "end": 447
                      }
                    },
                    "typeParameters": null
                  },
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 453,
                    "end": 474,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 460,
                        "end": 464,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 461,
                          "end": 464,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 463,
                            "end": 464,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 463,
                              "end": 464,
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
                        "start": 466,
                        "end": 470,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 467,
                          "end": 470,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 469,
                            "end": 470,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 469,
                              "end": 470,
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
                      "start": 471,
                      "end": 474,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 473,
                        "end": 474,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 473,
                          "end": 474,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 453,
                      "end": 459,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 454,
                          "end": 455,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 454,
                            "end": 455,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 457,
                          "end": 458,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 457,
                            "end": 458,
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
      "start": 479,
      "end": 506,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 479,
        "end": 506,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 479,
          "end": 481,
          "decorators": [],
          "name": "f2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 484,
          "end": 506,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 494,
            "end": 506,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 496,
                "end": 504,
                "argument": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 504,
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
              "start": 485,
              "end": 486,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 488,
              "end": 489,
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
      "start": 508,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 512,
          "end": 581,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 512,
            "end": 581,
            "decorators": [],
            "name": "f3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 514,
              "end": 581,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 516,
                "end": 581,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 522,
                    "end": 543,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 529,
                        "end": 533,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 530,
                          "end": 533,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 532,
                            "end": 533,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 532,
                              "end": 533,
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
                        "start": 535,
                        "end": 539,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 536,
                          "end": 539,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 538,
                            "end": 539,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 538,
                              "end": 539,
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
                      "start": 540,
                      "end": 543,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 542,
                        "end": 543,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 542,
                          "end": 543,
                          "decorators": [],
                          "name": "T",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    "typeParameters": {
                      "type": "TSTypeParameterDeclaration",
                      "start": 522,
                      "end": 528,
                      "params": [
                        {
                          "type": "TSTypeParameter",
                          "start": 523,
                          "end": 524,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 523,
                            "end": 524,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "out": false
                        },
                        {
                          "type": "TSTypeParameter",
                          "start": 526,
                          "end": 527,
                          "const": false,
                          "constraint": null,
                          "default": null,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 526,
                            "end": 527,
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
                    "start": 548,
                    "end": 579,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 549,
                        "end": 558,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 550,
                          "end": 558,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 552,
                            "end": 558
                          }
                        }
                      },
                      {
                        "type": "Identifier",
                        "start": 560,
                        "end": 569,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 561,
                          "end": 569,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 563,
                            "end": 569
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 570,
                      "end": 578,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 572,
                        "end": 578
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
      "start": 584,
      "end": 611,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 584,
        "end": 611,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 584,
          "end": 586,
          "decorators": [],
          "name": "f3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrowFunctionExpression",
          "start": 589,
          "end": 611,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 599,
            "end": 611,
            "body": [
              {
                "type": "ReturnStatement",
                "start": 601,
                "end": 609,
                "argument": {
                  "type": "Identifier",
                  "start": 608,
                  "end": 609,
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
              "start": 590,
              "end": 591,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "Identifier",
              "start": 593,
              "end": 594,
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
