__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 186,
  "end": 1020,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 186,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 212,
        "name": "NonGenericParameter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 213,
        "end": 425,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 219,
            "end": 299,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 223,
                "end": 299,
                "id": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 299,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 224,
                    "end": 299,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 226,
                      "end": 299,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 236,
                          "end": 261,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 240,
                              "end": 250,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 241,
                                "end": 250,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 243,
                                  "end": 250
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 251,
                            "end": 260,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 253,
                              "end": 260
                            }
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 270,
                          "end": 293,
                          "typeParameters": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 274,
                              "end": 283,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 275,
                                "end": 283,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 277,
                                  "end": 283
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 284,
                            "end": 292,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 286,
                              "end": 292
                            }
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 305,
            "end": 359,
            "id": {
              "type": "Identifier",
              "start": 314,
              "end": 318,
              "name": "foo4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 319,
                "end": 331,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 321,
                  "end": 331,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 323,
                    "end": 331,
                    "exprName": {
                      "type": "Identifier",
                      "start": 330,
                      "end": 331,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 333,
              "end": 359,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 343,
                  "end": 353,
                  "argument": {
                    "type": "Identifier",
                    "start": 350,
                    "end": 352,
                    "name": "cb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 365,
            "end": 395,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 369,
                "end": 395,
                "id": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 395,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 370,
                    "end": 395,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 372,
                      "end": 395,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 374,
                          "end": 393,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 378,
                            "end": 384,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 379,
                                "end": 380,
                                "name": {
                                  "type": "Identifier",
                                  "start": 379,
                                  "end": 380,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "out": false,
                                "const": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 382,
                                "end": 383,
                                "name": {
                                  "type": "Identifier",
                                  "start": 382,
                                  "end": 383,
                                  "name": "U",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                              "start": 385,
                              "end": 389,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 386,
                                "end": 389,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 388,
                                  "end": 389,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 388,
                                    "end": 389,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 390,
                            "end": 393,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 392,
                              "end": 393,
                              "typeName": {
                                "type": "Identifier",
                                "start": 392,
                                "end": 393,
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 400,
            "end": 417,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 404,
                "end": 416,
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 406,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 409,
                  "end": 416,
                  "callee": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 413,
                    "name": "foo4",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
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
      "start": 427,
      "end": 1020,
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 450,
        "name": "GenericParameter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 451,
        "end": 1020,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 457,
            "end": 546,
            "id": {
              "type": "Identifier",
              "start": 466,
              "end": 470,
              "name": "foo5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 474,
                "end": 518,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 476,
                  "end": 518,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 478,
                    "end": 518,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 480,
                        "end": 498,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 484,
                            "end": 488,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 485,
                              "end": 488,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 487,
                                "end": 488,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 487,
                                  "end": 488,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 489,
                          "end": 497,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 491,
                            "end": 497
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 499,
                        "end": 516,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 503,
                            "end": 512,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 504,
                              "end": 512,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 506,
                                "end": 512
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 513,
                          "end": 516,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 515,
                            "end": 516,
                            "typeName": {
                              "type": "Identifier",
                              "start": 515,
                              "end": 516,
                              "name": "T",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 520,
              "end": 546,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 530,
                  "end": 540,
                  "argument": {
                    "type": "Identifier",
                    "start": 537,
                    "end": 539,
                    "name": "cb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 470,
              "end": 473,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 471,
                  "end": 472,
                  "name": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 472,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 552,
            "end": 580,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 556,
                "end": 579,
                "id": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 579,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 557,
                    "end": 579,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 559,
                      "end": 579,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 561,
                          "end": 577,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 565,
                            "end": 568,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 566,
                                "end": 567,
                                "name": {
                                  "type": "Identifier",
                                  "start": 566,
                                  "end": 567,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                              "start": 569,
                              "end": 573,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 570,
                                "end": 573,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 572,
                                  "end": 573,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 572,
                                    "end": 573,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 574,
                            "end": 577,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 576,
                              "end": 577,
                              "typeName": {
                                "type": "Identifier",
                                "start": 576,
                                "end": 577,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 585,
            "end": 602,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 589,
                "end": 601,
                "id": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 591,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 594,
                  "end": 601,
                  "callee": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 598,
                    "name": "foo5",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 599,
                      "end": 600,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 614,
            "end": 710,
            "id": {
              "type": "Identifier",
              "start": 623,
              "end": 627,
              "name": "foo6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 631,
                "end": 682,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 633,
                  "end": 682,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 635,
                    "end": 682,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 637,
                        "end": 655,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 641,
                            "end": 645,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 642,
                              "end": 645,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 644,
                                "end": 645,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 644,
                                  "end": 645,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 646,
                          "end": 654,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 648,
                            "end": 654
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 656,
                        "end": 680,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 660,
                            "end": 664,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 661,
                              "end": 664,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 663,
                                "end": 664,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 663,
                                  "end": 664,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 666,
                            "end": 671,
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 668,
                              "end": 671,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 670,
                                "end": 671,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 670,
                                  "end": 671,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": true
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 672,
                          "end": 680,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 674,
                            "end": 680
                          }
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 684,
              "end": 710,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 694,
                  "end": 704,
                  "argument": {
                    "type": "Identifier",
                    "start": 701,
                    "end": 703,
                    "name": "cb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 627,
              "end": 630,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 628,
                  "end": 629,
                  "name": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 629,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 716,
            "end": 755,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 720,
                "end": 754,
                "id": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 754,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 721,
                    "end": 754,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 723,
                      "end": 754,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 725,
                          "end": 752,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 729,
                            "end": 732,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 730,
                                "end": 731,
                                "name": {
                                  "type": "Identifier",
                                  "start": 730,
                                  "end": 731,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                              "start": 733,
                              "end": 737,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 734,
                                "end": 737,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 736,
                                  "end": 737,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 736,
                                    "end": 737,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            },
                            {
                              "type": "Identifier",
                              "start": 739,
                              "end": 743,
                              "name": "y",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 740,
                                "end": 743,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 742,
                                  "end": 743,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 742,
                                    "end": 743,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 744,
                            "end": 752,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 746,
                              "end": 752
                            }
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 760,
            "end": 778,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 764,
                "end": 777,
                "id": {
                  "type": "Identifier",
                  "start": 764,
                  "end": 767,
                  "name": "r10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 770,
                  "end": 777,
                  "callee": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 774,
                    "name": "foo6",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 775,
                      "end": 776,
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "FunctionDeclaration",
            "start": 793,
            "end": 894,
            "id": {
              "type": "Identifier",
              "start": 802,
              "end": 806,
              "name": "foo7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 810,
                "end": 813,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 811,
                  "end": 813,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 812,
                    "end": 813,
                    "typeName": {
                      "type": "Identifier",
                      "start": 812,
                      "end": 813,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 815,
                "end": 866,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 817,
                  "end": 866,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 819,
                    "end": 866,
                    "members": [
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 821,
                        "end": 839,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 825,
                            "end": 829,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 826,
                              "end": 829,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 828,
                                "end": 829,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 828,
                                  "end": 829,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 830,
                          "end": 838,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 832,
                            "end": 838
                          }
                        }
                      },
                      {
                        "type": "TSConstructSignatureDeclaration",
                        "start": 840,
                        "end": 864,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 844,
                            "end": 848,
                            "name": "x",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 845,
                              "end": 848,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 847,
                                "end": 848,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 847,
                                  "end": 848,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 850,
                            "end": 855,
                            "name": "y",
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 852,
                              "end": 855,
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "start": 854,
                                "end": 855,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 854,
                                  "end": 855,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              }
                            },
                            "decorators": [],
                            "optional": true
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "start": 856,
                          "end": 864,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 858,
                            "end": 864
                          }
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 868,
              "end": 894,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 878,
                  "end": 888,
                  "argument": {
                    "type": "Identifier",
                    "start": 885,
                    "end": 887,
                    "name": "cb",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 806,
              "end": 809,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 807,
                  "end": 808,
                  "name": {
                    "type": "Identifier",
                    "start": 807,
                    "end": 808,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
          },
          {
            "type": "VariableDeclaration",
            "start": 900,
            "end": 921,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 904,
                "end": 920,
                "id": {
                  "type": "Identifier",
                  "start": 904,
                  "end": 907,
                  "name": "r13",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 910,
                  "end": 920,
                  "callee": {
                    "type": "Identifier",
                    "start": 910,
                    "end": 914,
                    "name": "foo7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 915,
                      "end": 916,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "start": 918,
                      "end": 919,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 932,
            "end": 986,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 936,
                "end": 986,
                "id": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 986,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 937,
                    "end": 986,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 939,
                      "end": 986,
                      "members": [
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 941,
                          "end": 962,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 944,
                            "end": 947,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 945,
                                "end": 946,
                                "name": {
                                  "type": "Identifier",
                                  "start": 945,
                                  "end": 946,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                              "start": 948,
                              "end": 952,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 949,
                                "end": 952,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 951,
                                  "end": 952,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 951,
                                    "end": 952,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 953,
                            "end": 961,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 955,
                              "end": 961
                            }
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 963,
                          "end": 984,
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 966,
                            "end": 969,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 967,
                                "end": 968,
                                "name": {
                                  "type": "Identifier",
                                  "start": 967,
                                  "end": 968,
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                              "start": 970,
                              "end": 979,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 971,
                                "end": 979,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 973,
                                  "end": 979
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "returnType": {
                            "type": "TSTypeAnnotation",
                            "start": 980,
                            "end": 983,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 982,
                              "end": 983,
                              "typeName": {
                                "type": "Identifier",
                                "start": 982,
                                "end": 983,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          }
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 991,
            "end": 1012,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 995,
                "end": 1011,
                "id": {
                  "type": "Identifier",
                  "start": 995,
                  "end": 998,
                  "name": "r14",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1001,
                  "end": 1011,
                  "callee": {
                    "type": "Identifier",
                    "start": 1001,
                    "end": 1005,
                    "name": "foo7",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1006,
                      "end": 1007,
                      "value": 1,
                      "raw": "1"
                    },
                    {
                      "type": "Identifier",
                      "start": 1009,
                      "end": 1010,
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeArguments": null
                },
                "definite": false
              }
            ],
            "kind": "var",
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
