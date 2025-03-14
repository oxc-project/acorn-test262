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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 223,
                  "end": 299,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 240,
                              "end": 250,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 241,
                                "end": 250,
                                "typeAnnotation": {
                                  "type": "TSBooleanKeyword",
                                  "start": 243,
                                  "end": 250
                                }
                              }
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
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 274,
                              "end": 283,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 275,
                                "end": 283,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 277,
                                  "end": 283
                                }
                              }
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
                  }
                },
                "init": null
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 305,
            "end": 359,
            "async": false,
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
                    "decorators": [],
                    "name": "cb",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 314,
              "end": 318,
              "decorators": [],
              "name": "foo4",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 319,
                "end": 331,
                "decorators": [],
                "name": "cb",
                "optional": false,
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
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                }
              }
            ]
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 369,
                  "end": 395,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
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
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 385,
                              "end": 389,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
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
                                "decorators": [],
                                "name": "U",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 378,
                            "end": 384,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 379,
                                "end": 380,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 379,
                                  "end": 380,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                },
                                "out": false
                              },
                              {
                                "type": "TSTypeParameter",
                                "start": 382,
                                "end": 383,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 382,
                                  "end": 383,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
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
            "type": "VariableDeclaration",
            "start": 400,
            "end": 417,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 404,
                "end": 416,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 404,
                  "end": 406,
                  "decorators": [],
                  "name": "r3",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 409,
                  "end": 416,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 414,
                      "end": 415,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 413,
                    "decorators": [],
                    "name": "foo4",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 212,
        "decorators": [],
        "name": "NonGenericParameter",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 427,
      "end": 1020,
      "body": {
        "type": "TSModuleBlock",
        "start": 451,
        "end": 1020,
        "body": [
          {
            "type": "FunctionDeclaration",
            "start": 457,
            "end": 546,
            "async": false,
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
                    "decorators": [],
                    "name": "cb",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 466,
              "end": 470,
              "decorators": [],
              "name": "foo5",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 474,
                "end": 518,
                "decorators": [],
                "name": "cb",
                "optional": false,
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 484,
                            "end": 488,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 503,
                            "end": 512,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 504,
                              "end": 512,
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 506,
                                "end": 512
                              }
                            }
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
                              "decorators": [],
                              "name": "T",
                              "optional": false
                            }
                          }
                        }
                      }
                    ]
                  }
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 470,
              "end": 473,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 471,
                  "end": 472,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 471,
                    "end": 472,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 579,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
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
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 569,
                              "end": 573,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
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
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 565,
                            "end": 568,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 566,
                                "end": 567,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 566,
                                  "end": 567,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
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
            "type": "VariableDeclaration",
            "start": 585,
            "end": 602,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 589,
                "end": 601,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 591,
                  "decorators": [],
                  "name": "r6",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 594,
                  "end": 601,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 599,
                      "end": 600,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 594,
                    "end": 598,
                    "decorators": [],
                    "name": "foo5",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 614,
            "end": 710,
            "async": false,
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
                    "decorators": [],
                    "name": "cb",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 623,
              "end": 627,
              "decorators": [],
              "name": "foo6",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 631,
                "end": 682,
                "decorators": [],
                "name": "cb",
                "optional": false,
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 641,
                            "end": 645,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 660,
                            "end": 664,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 666,
                            "end": 671,
                            "decorators": [],
                            "name": "y",
                            "optional": true,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
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
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 627,
              "end": 630,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 628,
                  "end": 629,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 628,
                    "end": 629,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 754,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
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
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 733,
                              "end": 737,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 739,
                              "end": 743,
                              "decorators": [],
                              "name": "y",
                              "optional": false,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
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
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 729,
                            "end": 732,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 730,
                                "end": 731,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 730,
                                  "end": 731,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
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
            "type": "VariableDeclaration",
            "start": 760,
            "end": 778,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 764,
                "end": 777,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 764,
                  "end": 767,
                  "decorators": [],
                  "name": "r10",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 770,
                  "end": 777,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 775,
                      "end": 776,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 774,
                    "decorators": [],
                    "name": "foo6",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "FunctionDeclaration",
            "start": 793,
            "end": 894,
            "async": false,
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
                    "decorators": [],
                    "name": "cb",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 802,
              "end": 806,
              "decorators": [],
              "name": "foo7",
              "optional": false
            },
            "params": [
              {
                "type": "Identifier",
                "start": 810,
                "end": 813,
                "decorators": [],
                "name": "x",
                "optional": false,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 815,
                "end": 866,
                "decorators": [],
                "name": "cb",
                "optional": false,
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 825,
                            "end": 829,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
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
                        "params": [
                          {
                            "type": "Identifier",
                            "start": 844,
                            "end": 848,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 850,
                            "end": 855,
                            "decorators": [],
                            "name": "y",
                            "optional": true,
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
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              }
                            }
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
                }
              }
            ],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 806,
              "end": 809,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 807,
                  "end": 808,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 807,
                    "end": 808,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 904,
                  "end": 907,
                  "decorators": [],
                  "name": "r13",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 910,
                  "end": 920,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 915,
                      "end": 916,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Identifier",
                      "start": 918,
                      "end": 919,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 910,
                    "end": 914,
                    "decorators": [],
                    "name": "foo7",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 936,
                  "end": 986,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
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
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 948,
                              "end": 952,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              }
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
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 944,
                            "end": 947,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 945,
                                "end": 946,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 945,
                                  "end": 946,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                },
                                "out": false
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSConstructSignatureDeclaration",
                          "start": 963,
                          "end": 984,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 970,
                              "end": 979,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 971,
                                "end": 979,
                                "typeAnnotation": {
                                  "type": "TSNumberKeyword",
                                  "start": 973,
                                  "end": 979
                                }
                              }
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
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 966,
                            "end": 969,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 967,
                                "end": 968,
                                "const": false,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 967,
                                  "end": 968,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
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
            "type": "VariableDeclaration",
            "start": 991,
            "end": 1012,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 995,
                "end": 1011,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 995,
                  "end": 998,
                  "decorators": [],
                  "name": "r14",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 1001,
                  "end": 1011,
                  "arguments": [
                    {
                      "type": "Literal",
                      "start": 1006,
                      "end": 1007,
                      "raw": "1",
                      "value": 1
                    },
                    {
                      "type": "Identifier",
                      "start": 1009,
                      "end": 1010,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 1001,
                    "end": 1005,
                    "decorators": [],
                    "name": "foo7",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 434,
        "end": 450,
        "decorators": [],
        "name": "GenericParameter",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
