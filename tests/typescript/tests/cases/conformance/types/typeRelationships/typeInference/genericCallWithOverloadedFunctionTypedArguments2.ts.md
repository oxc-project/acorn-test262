__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 186,
  "end": 961,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 186,
      "end": 421,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 212,
        "decorators": [],
        "name": "NonGenericParameter",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 213,
        "end": 421,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 219,
            "end": 293,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 223,
                "end": 293,
                "id": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 293,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 293,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 226,
                      "end": 293,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 236,
                          "end": 258,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 237,
                              "end": 247,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 238,
                                "end": 247,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 240,
                                  "end": 247
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 248,
                            "end": 257,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 250,
                              "end": 257
                            }
                          }
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 267,
                          "end": 287,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 268,
                              "end": 277,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 269,
                                "end": 277,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 271,
                                  "end": 277
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 278,
                            "end": 286,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 280,
                              "end": 286
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 299,
            "end": 353,
            "id": {
              "type": "Identifier",
              "start": 308,
              "end": 312,
              "decorators": [],
              "name": "foo4",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 313,
                "end": 325,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 315,
                  "end": 325,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 317,
                    "end": 325,
                    "exprName": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 325,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 327,
              "end": 353,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 337,
                  "end": 347,
                  "argument": {
                    "type": "Identifier",
                    "start": 344,
                    "end": 346,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 359,
            "end": 413,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 363,
                "end": 412,
                "id": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 365,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 368,
                  "end": 412,
                  "callee": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 372,
                    "decorators": [],
                    "name": "foo4",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 373,
                      "end": 411,
                      "expression": false,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 373,
                        "end": 379,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 374,
                            "end": 375,
                            "name": {
                              "type": "Identifier",
                              "start": 374,
                              "end": 375,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          },
                          {
                            "type": "TSTypeParameter",
                            "start": 377,
                            "end": 378,
                            "name": {
                              "type": "Identifier",
                              "start": 377,
                              "end": 378,
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 380,
                          "end": 384,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 381,
                            "end": 384,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 383,
                              "end": 384,
                              "typeName": {
                                "type": "Identifier",
                                "start": 383,
                                "end": 384,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "start": 389,
                        "end": 411,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 391,
                            "end": 400,
                            "kind": "var",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 395,
                                "end": 399,
                                "id": {
                                  "type": "Identifier",
                                  "start": 395,
                                  "end": 399,
                                  "decorators": [],
                                  "name": "r",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "start": 396,
                                    "end": 399,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 398,
                                      "end": 399,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 398,
                                        "end": 399,
                                        "decorators": [],
                                        "name": "U",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeArguments": null
                                    }
                                  }
                                },
                                "init": null,
                                "definite": false
                              }
                            ],
                            "declare": false
                          },
                          {
                            "type": "ReturnStatement",
                            "start": 401,
                            "end": 409,
                            "argument": {
                              "type": "Identifier",
                              "start": 408,
                              "end": 409,
                              "decorators": [],
                              "name": "r",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 423,
      "end": 961,
      "id": {
        "type": "Identifier",
        "start": 430,
        "end": 446,
        "decorators": [],
        "name": "GenericParameter",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 447,
        "end": 961,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 453,
            "end": 536,
            "id": {
              "type": "Identifier",
              "start": 462,
              "end": 466,
              "decorators": [],
              "name": "foo5",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 466,
              "end": 469,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 467,
                  "end": 468,
                  "name": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 470,
                "end": 508,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 472,
                  "end": 508,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 474,
                    "end": 508,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 476,
                        "end": 491,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 477,
                            "end": 481,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 478,
                              "end": 481,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 480,
                                "end": 481,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 480,
                                  "end": 481,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 482,
                          "end": 490,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 484,
                            "end": 490
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 492,
                        "end": 506,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 493,
                            "end": 502,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 494,
                              "end": 502,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 496,
                                "end": 502
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 503,
                          "end": 506,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 505,
                            "end": 506,
                            "typeName": {
                              "type": "Identifier",
                              "start": 505,
                              "end": 506,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 510,
              "end": 536,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 520,
                  "end": 530,
                  "argument": {
                    "type": "Identifier",
                    "start": 527,
                    "end": 529,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 542,
            "end": 572,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 546,
                "end": 571,
                "id": {
                  "type": "Identifier",
                  "start": 546,
                  "end": 548,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 551,
                  "end": 571,
                  "callee": {
                    "type": "Identifier",
                    "start": 551,
                    "end": 555,
                    "decorators": [],
                    "name": "foo5",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 556,
                      "end": 570,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 556,
                        "end": 559,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 557,
                            "end": 558,
                            "name": {
                              "type": "Identifier",
                              "start": 557,
                              "end": 558,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 560,
                          "end": 564,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 561,
                            "end": 564,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 563,
                              "end": 564,
                              "typeName": {
                                "type": "Identifier",
                                "start": 563,
                                "end": 564,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 569,
                        "end": 570,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 584,
            "end": 674,
            "id": {
              "type": "Identifier",
              "start": 593,
              "end": 597,
              "decorators": [],
              "name": "foo6",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 597,
              "end": 600,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 598,
                  "end": 599,
                  "name": {
                    "type": "Identifier",
                    "start": 598,
                    "end": 599,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 601,
                "end": 646,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 603,
                  "end": 646,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 605,
                    "end": 646,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 607,
                        "end": 622,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 608,
                            "end": 612,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 609,
                              "end": 612,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 611,
                                "end": 612,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 611,
                                  "end": 612,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 613,
                          "end": 621,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 615,
                            "end": 621
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 623,
                        "end": 644,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 624,
                            "end": 628,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 625,
                              "end": 628,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 627,
                                "end": 628,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 627,
                                  "end": 628,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 630,
                            "end": 635,
                            "decorators": [],
                            "name": "y",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 632,
                              "end": 635,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 634,
                                "end": 635,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 634,
                                  "end": 635,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 636,
                          "end": 644,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 638,
                            "end": 644
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 648,
              "end": 674,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 658,
                  "end": 668,
                  "argument": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 667,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 680,
            "end": 718,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 684,
                "end": 717,
                "id": {
                  "type": "Identifier",
                  "start": 684,
                  "end": 687,
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 690,
                  "end": 717,
                  "callee": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 694,
                    "decorators": [],
                    "name": "foo6",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 695,
                      "end": 716,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 695,
                        "end": 698,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 696,
                            "end": 697,
                            "name": {
                              "type": "Identifier",
                              "start": 696,
                              "end": 697,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 699,
                          "end": 703,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 700,
                            "end": 703,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 702,
                              "end": 703,
                              "typeName": {
                                "type": "Identifier",
                                "start": 702,
                                "end": 703,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        },
                        {
                          "type": "Identifier",
                          "start": 705,
                          "end": 709,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 706,
                            "end": 709,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 708,
                              "end": 709,
                              "typeName": {
                                "type": "Identifier",
                                "start": 708,
                                "end": 709,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "start": 714,
                        "end": 716,
                        "value": "",
                        "raw": "''"
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 733,
            "end": 828,
            "id": {
              "type": "Identifier",
              "start": 742,
              "end": 746,
              "decorators": [],
              "name": "foo7",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 746,
              "end": 749,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 747,
                  "end": 748,
                  "name": {
                    "type": "Identifier",
                    "start": 747,
                    "end": 748,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 750,
                "end": 753,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 751,
                  "end": 753,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 752,
                    "end": 753,
                    "typeName": {
                      "type": "Identifier",
                      "start": 752,
                      "end": 753,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 755,
                "end": 800,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 757,
                  "end": 800,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 759,
                    "end": 800,
                    "members": [
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 761,
                        "end": 776,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 762,
                            "end": 766,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 763,
                              "end": 766,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 765,
                                "end": 766,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 765,
                                  "end": 766,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 767,
                          "end": 775,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 769,
                            "end": 775
                          }
                        }
                      },
                      {
                        "type": "TSCallSignatureDeclaration",
                        "start": 777,
                        "end": 798,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 778,
                            "end": 782,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 779,
                              "end": 782,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 781,
                                "end": 782,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 781,
                                  "end": 782,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 784,
                            "end": 789,
                            "decorators": [],
                            "name": "y",
                            "optional": true,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 786,
                              "end": 789,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 788,
                                "end": 789,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 788,
                                  "end": 789,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "typeArguments": null
                              }
                            }
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 790,
                          "end": 798,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 792,
                            "end": 798
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 802,
              "end": 828,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 812,
                  "end": 822,
                  "argument": {
                    "type": "Identifier",
                    "start": 819,
                    "end": 821,
                    "decorators": [],
                    "name": "cb",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "expression": false
          },
          {
            "type": "VariableDeclaration",
            "start": 834,
            "end": 868,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 838,
                "end": 867,
                "id": {
                  "type": "Identifier",
                  "start": 838,
                  "end": 841,
                  "decorators": [],
                  "name": "r13",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 844,
                  "end": 867,
                  "callee": {
                    "type": "Identifier",
                    "start": 844,
                    "end": 848,
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 849,
                      "end": 850,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "ArrowFunctionExpression",
                      "start": 852,
                      "end": 866,
                      "expression": true,
                      "async": false,
                      "typeParameters": {
                        "type": "TSTypeParameterDeclaration",
                        "start": 852,
                        "end": 855,
                        "params": [
                          {
                            "type": "TSTypeParameter",
                            "start": 853,
                            "end": 854,
                            "name": {
                              "type": "Identifier",
                              "start": 853,
                              "end": 854,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "constraint": null,
                            "default": null,
                            "in": false,
                            "out": false,
                            "const": false
                          }
                        ]
                      },
                      "params": [
                        {
                          "type": "Identifier",
                          "start": 856,
                          "end": 860,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 857,
                            "end": 860,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 859,
                              "end": 860,
                              "typeName": {
                                "type": "Identifier",
                                "start": 859,
                                "end": 860,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Identifier",
                        "start": 865,
                        "end": 866,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "id": null,
                      "generator": false
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 879,
            "end": 927,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 883,
                "end": 927,
                "id": {
                  "type": "Identifier",
                  "start": 883,
                  "end": 927,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 884,
                    "end": 927,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 886,
                      "end": 927,
                      "members": [
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 888,
                          "end": 906,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 888,
                            "end": 891,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 889,
                                "end": 890,
                                "name": {
                                  "type": "Identifier",
                                  "start": 889,
                                  "end": 890,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              }
                            ]
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 892,
                              "end": 896,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 893,
                                "end": 896,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 895,
                                  "end": 896,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 895,
                                    "end": 896,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 897,
                            "end": 905,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 899,
                              "end": 905
                            }
                          }
                        },
                        {
                          "type": "TSCallSignatureDeclaration",
                          "start": 907,
                          "end": 925,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 907,
                            "end": 910,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 908,
                                "end": 909,
                                "name": {
                                  "type": "Identifier",
                                  "start": 908,
                                  "end": 909,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              }
                            ]
                          },
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 911,
                              "end": 920,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 912,
                                "end": 920,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 914,
                                  "end": 920
                                }
                              }
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 921,
                            "end": 924,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 923,
                              "end": 924,
                              "typeName": {
                                "type": "Identifier",
                                "start": 923,
                                "end": 924,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 932,
            "end": 953,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 936,
                "end": 952,
                "id": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 939,
                  "decorators": [],
                  "name": "r14",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 942,
                  "end": 952,
                  "callee": {
                    "type": "Identifier",
                    "start": 942,
                    "end": 946,
                    "decorators": [],
                    "name": "foo7",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 947,
                      "end": 948,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "start": 950,
                      "end": 951,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
