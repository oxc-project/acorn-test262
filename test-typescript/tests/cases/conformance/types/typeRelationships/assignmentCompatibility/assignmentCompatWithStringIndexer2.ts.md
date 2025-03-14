assignmentCompatWithStringIndexer2.ts
```json
{
  "type": "Program",
  "start": 55,
  "end": 1050,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 55,
      "end": 86,
      "body": {
        "type": "TSInterfaceBody",
        "start": 70,
        "end": 86,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 72,
            "end": 84,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 75,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 87,
      "end": 134,
      "body": {
        "type": "TSInterfaceBody",
        "start": 118,
        "end": 134,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 132,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 131,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 125,
                "end": 131
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 113,
          "end": 117,
          "expression": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 104,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 135,
      "end": 186,
      "body": {
        "type": "TSInterfaceBody",
        "start": 170,
        "end": 186,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 172,
            "end": 184,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 183,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 177,
                "end": 183
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 162,
          "end": 169,
          "expression": {
            "type": "Identifier",
            "start": 162,
            "end": 169,
            "decorators": [],
            "name": "Derived",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 153,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 188,
      "end": 226,
      "body": {
        "type": "TSInterfaceBody",
        "start": 200,
        "end": 226,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 206,
            "end": 224,
            "parameters": [
              {
                "type": "Identifier",
                "start": 207,
                "end": 216,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 208,
                  "end": 216,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 210,
                    "end": 216
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 219,
                "end": 223,
                "typeName": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 223,
                  "decorators": [],
                  "name": "Base",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 228,
      "end": 237,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 232,
          "end": 236,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 236,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 236,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 235,
                "end": 236,
                "typeName": {
                  "type": "Identifier",
                  "start": 235,
                  "end": 236,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
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
      "start": 239,
      "end": 271,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 271,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 271,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 244,
              "end": 271,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 246,
                "end": 271,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 248,
                    "end": 269,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 249,
                        "end": 258,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 250,
                          "end": 258,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 252,
                            "end": 258
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 259,
                      "end": 268,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 261,
                        "end": 268,
                        "typeName": {
                          "type": "Identifier",
                          "start": 261,
                          "end": 268,
                          "decorators": [],
                          "name": "Derived",
                          "optional": false
                        }
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
      "type": "ExpressionStatement",
      "start": 272,
      "end": 278,
      "expression": {
        "type": "AssignmentExpression",
        "start": 272,
        "end": 277,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 272,
          "end": 273,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 285,
      "end": 291,
      "expression": {
        "type": "AssignmentExpression",
        "start": 285,
        "end": 290,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "decorators": [],
          "name": "b",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 289,
          "end": 290,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 302,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 306,
          "end": 336,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 336,
            "decorators": [],
            "name": "b2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 336,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 310,
                "end": 336,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 312,
                    "end": 334,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 313,
                        "end": 322,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 314,
                          "end": 322,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 316,
                            "end": 322
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 323,
                      "end": 333,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 325,
                        "end": 333,
                        "typeName": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 333,
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false
                        }
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
      "type": "ExpressionStatement",
      "start": 337,
      "end": 344,
      "expression": {
        "type": "AssignmentExpression",
        "start": 337,
        "end": 343,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 337,
          "end": 338,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 341,
          "end": 343,
          "decorators": [],
          "name": "b2",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 351,
      "end": 358,
      "expression": {
        "type": "AssignmentExpression",
        "start": 351,
        "end": 357,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 351,
          "end": 353,
          "decorators": [],
          "name": "b2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 356,
          "end": 357,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 369,
      "end": 1050,
      "body": {
        "type": "TSModuleBlock",
        "start": 385,
        "end": 1050,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 391,
            "end": 450,
            "body": {
              "type": "TSInterfaceBody",
              "start": 419,
              "end": 450,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 429,
                  "end": 444,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 430,
                      "end": 439,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 431,
                        "end": 439,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 433,
                          "end": 439
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 440,
                    "end": 443,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 442,
                      "end": 443,
                      "typeName": {
                        "type": "Identifier",
                        "start": 442,
                        "end": 443,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [],
            "id": {
              "type": "Identifier",
              "start": 401,
              "end": 402,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 402,
              "end": 418,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 403,
                  "end": 417,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 413,
                    "end": 417,
                    "typeName": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 417,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 404,
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
            "type": "TSInterfaceDeclaration",
            "start": 456,
            "end": 527,
            "body": {
              "type": "TSInterfaceBody",
              "start": 484,
              "end": 527,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 494,
                  "end": 515,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 495,
                      "end": 504,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 496,
                        "end": 504,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 498,
                          "end": 504
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 505,
                    "end": 514,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 507,
                      "end": 514,
                      "typeName": {
                        "type": "Identifier",
                        "start": 507,
                        "end": 514,
                        "decorators": [],
                        "name": "Derived",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 476,
                "end": 483,
                "expression": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 477,
                  "end": 483,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 478,
                      "end": 482,
                      "typeName": {
                        "type": "Identifier",
                        "start": 478,
                        "end": 482,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 466,
              "end": 467,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 533,
            "end": 567,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 537,
                "end": 566,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 566,
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 539,
                    "end": 566,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 541,
                      "end": 566,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 543,
                          "end": 564,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 544,
                              "end": 553,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 545,
                                "end": 553,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 547,
                                  "end": 553
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 554,
                            "end": 563,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 556,
                              "end": 563,
                              "typeName": {
                                "type": "Identifier",
                                "start": 556,
                                "end": 563,
                                "decorators": [],
                                "name": "Derived",
                                "optional": false
                              }
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
            "type": "VariableDeclaration",
            "start": 572,
            "end": 588,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 576,
                "end": 587,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 576,
                  "end": 587,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 578,
                    "end": 587,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 580,
                      "end": 587,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 581,
                        "end": 587,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 582,
                            "end": 586,
                            "typeName": {
                              "type": "Identifier",
                              "start": 582,
                              "end": 586,
                              "decorators": [],
                              "name": "Base",
                              "optional": false
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
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
            "start": 593,
            "end": 601,
            "expression": {
              "type": "AssignmentExpression",
              "start": 593,
              "end": 600,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 593,
                "end": 595,
                "decorators": [],
                "name": "a1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 598,
                "end": 600,
                "decorators": [],
                "name": "b1",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 612,
            "end": 620,
            "expression": {
              "type": "AssignmentExpression",
              "start": 612,
              "end": 619,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 612,
                "end": 614,
                "decorators": [],
                "name": "b1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 617,
                "end": 619,
                "decorators": [],
                "name": "a1",
                "optional": false
              }
            }
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 635,
            "end": 708,
            "body": {
              "type": "TSInterfaceBody",
              "start": 664,
              "end": 708,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 674,
                  "end": 696,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 675,
                      "end": 684,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 676,
                        "end": 684,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 678,
                          "end": 684
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 685,
                    "end": 695,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 687,
                      "end": 695,
                      "typeName": {
                        "type": "Identifier",
                        "start": 687,
                        "end": 695,
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            },
            "declare": false,
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 656,
                "end": 663,
                "expression": {
                  "type": "Identifier",
                  "start": 656,
                  "end": 657,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 657,
                  "end": 663,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 658,
                      "end": 662,
                      "typeName": {
                        "type": "Identifier",
                        "start": 658,
                        "end": 662,
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "id": {
              "type": "Identifier",
              "start": 645,
              "end": 647,
              "decorators": [],
              "name": "B2",
              "optional": false
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 714,
            "end": 749,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 718,
                "end": 748,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 718,
                  "end": 748,
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 720,
                    "end": 748,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 722,
                      "end": 748,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 724,
                          "end": 746,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 725,
                              "end": 734,
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 726,
                                "end": 734,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 728,
                                  "end": 734
                                }
                              }
                            }
                          ],
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 735,
                            "end": 745,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 737,
                              "end": 745,
                              "typeName": {
                                "type": "Identifier",
                                "start": 737,
                                "end": 745,
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false
                              }
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
            "type": "ExpressionStatement",
            "start": 754,
            "end": 762,
            "expression": {
              "type": "AssignmentExpression",
              "start": 754,
              "end": 761,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 754,
                "end": 756,
                "decorators": [],
                "name": "a1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 759,
                "end": 761,
                "decorators": [],
                "name": "b2",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 773,
            "end": 781,
            "expression": {
              "type": "AssignmentExpression",
              "start": 773,
              "end": 780,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 773,
                "end": 775,
                "decorators": [],
                "name": "b2",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 778,
                "end": 780,
                "decorators": [],
                "name": "a1",
                "optional": false
              }
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 796,
            "end": 1048,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 827,
              "end": 1048,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 837,
                  "end": 871,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 841,
                      "end": 870,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 841,
                        "end": 870,
                        "decorators": [],
                        "name": "b3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 843,
                          "end": 870,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 845,
                            "end": 870,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 847,
                                "end": 868,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 848,
                                    "end": 857,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 849,
                                      "end": 857,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 851,
                                        "end": 857
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 858,
                                  "end": 867,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 860,
                                    "end": 867,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 860,
                                      "end": 867,
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false
                                    }
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
                  "type": "VariableDeclaration",
                  "start": 880,
                  "end": 893,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 884,
                      "end": 892,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 892,
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 886,
                          "end": 892,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 888,
                            "end": 892,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 889,
                              "end": 892,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 890,
                                  "end": 891,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 890,
                                    "end": 891,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 888,
                              "end": 889,
                              "decorators": [],
                              "name": "A",
                              "optional": false
                            }
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
                  "start": 902,
                  "end": 910,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 902,
                    "end": 909,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 902,
                      "end": 904,
                      "decorators": [],
                      "name": "a3",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 907,
                      "end": 909,
                      "decorators": [],
                      "name": "b3",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 928,
                  "end": 936,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 928,
                    "end": 935,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 928,
                      "end": 930,
                      "decorators": [],
                      "name": "b3",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 933,
                      "end": 935,
                      "decorators": [],
                      "name": "a3",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 955,
                  "end": 990,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 959,
                      "end": 989,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 959,
                        "end": 989,
                        "decorators": [],
                        "name": "b4",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 961,
                          "end": 989,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 963,
                            "end": 989,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 965,
                                "end": 987,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 966,
                                    "end": 975,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 967,
                                      "end": 975,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 969,
                                        "end": 975
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 976,
                                  "end": 986,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 978,
                                    "end": 986,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 978,
                                      "end": 986,
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false
                                    }
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
                  "type": "ExpressionStatement",
                  "start": 999,
                  "end": 1007,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 999,
                    "end": 1006,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 999,
                      "end": 1001,
                      "decorators": [],
                      "name": "a3",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1004,
                      "end": 1006,
                      "decorators": [],
                      "name": "b4",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 1025,
                  "end": 1033,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1025,
                    "end": 1032,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1025,
                      "end": 1027,
                      "decorators": [],
                      "name": "b4",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1030,
                      "end": 1032,
                      "decorators": [],
                      "name": "a3",
                      "optional": false
                    }
                  }
                }
              ]
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 805,
              "end": 808,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 808,
              "end": 824,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 809,
                  "end": 823,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 819,
                    "end": 823,
                    "typeName": {
                      "type": "Identifier",
                      "start": 819,
                      "end": 823,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 810,
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
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 384,
        "decorators": [],
        "name": "Generics",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
