__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 69,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 72,
              "end": 75,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 83,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 77,
                "end": 83
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 87,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 104,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 113,
          "end": 117,
          "expression": {
            "type": "Identifier",
            "start": 113,
            "end": 117,
            "name": "Base",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 123,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 131,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 125,
                "end": 131
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 135,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 153,
        "name": "Derived2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 162,
          "end": 169,
          "expression": {
            "type": "Identifier",
            "start": 162,
            "end": 169,
            "name": "Derived",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
              "name": "baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 175,
              "end": 183,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 177,
                "end": 183
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 188,
      "end": 226,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 208,
                  "end": 216,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 210,
                    "end": 216
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "Base",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 232,
            "end": 236,
            "name": "a",
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
                  "name": "A",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 271,
            "name": "b",
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
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 250,
                          "end": 258,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 252,
                            "end": 258
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "name": "Derived",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 276,
          "end": 277,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 289,
          "end": 290,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 306,
            "end": 336,
            "name": "b2",
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
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 314,
                          "end": 322,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 316,
                            "end": 322
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                          "name": "Derived2",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
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
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 341,
          "end": 343,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 356,
          "end": 357,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 369,
      "end": 1050,
      "id": {
        "type": "Identifier",
        "start": 376,
        "end": 384,
        "name": "Generics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 385,
        "end": 1050,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 391,
            "end": 450,
            "id": {
              "type": "Identifier",
              "start": 401,
              "end": 402,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 402,
              "end": 418,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 403,
                  "end": 417,
                  "name": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 404,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 413,
                    "end": 417,
                    "typeName": {
                      "type": "Identifier",
                      "start": 413,
                      "end": 417,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 431,
                        "end": 439,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 433,
                          "end": 439
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 456,
            "end": 527,
            "id": {
              "type": "Identifier",
              "start": 466,
              "end": 467,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 476,
                "end": 483,
                "expression": {
                  "type": "Identifier",
                  "start": 476,
                  "end": 477,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": null,
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 496,
                        "end": 504,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 498,
                          "end": 504
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                        "name": "Derived",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 537,
                  "end": 566,
                  "name": "b1",
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
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 545,
                                "end": 553,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 547,
                                  "end": 553
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                                "name": "Derived",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
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
            "start": 572,
            "end": 588,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 576,
                "end": 587,
                "id": {
                  "type": "Identifier",
                  "start": 576,
                  "end": 587,
                  "name": "a1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 578,
                    "end": 587,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 580,
                      "end": 587,
                      "typeName": {
                        "type": "Identifier",
                        "start": 580,
                        "end": 581,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                              "name": "Base",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        ]
                      }
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
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 598,
                "end": 600,
                "name": "b1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "b1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 617,
                "end": 619,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "TSInterfaceDeclaration",
            "start": 635,
            "end": 708,
            "id": {
              "type": "Identifier",
              "start": 645,
              "end": 647,
              "name": "B2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "extends": [
              {
                "type": "TSInterfaceHeritage",
                "start": 656,
                "end": 663,
                "expression": {
                  "type": "Identifier",
                  "start": 656,
                  "end": 657,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
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
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            ],
            "typeParameters": null,
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
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 676,
                        "end": 684,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 678,
                          "end": 684
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
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
                        "name": "Derived2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "declare": false
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
                "id": {
                  "type": "Identifier",
                  "start": 718,
                  "end": 748,
                  "name": "b2",
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
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 726,
                                "end": 734,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 728,
                                  "end": 734
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
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
                                "name": "Derived2",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "readonly": false,
                          "static": false,
                          "accessibility": null
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
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 759,
                "end": 761,
                "name": "b2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "b2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 778,
                "end": 780,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "FunctionDeclaration",
            "start": 796,
            "end": 1048,
            "id": {
              "type": "Identifier",
              "start": 805,
              "end": 808,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
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
                      "id": {
                        "type": "Identifier",
                        "start": 841,
                        "end": 870,
                        "name": "b3",
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
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 849,
                                      "end": 857,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 851,
                                        "end": 857
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
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
                                      "name": "Derived",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null
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
                  "start": 880,
                  "end": 893,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 884,
                      "end": 892,
                      "id": {
                        "type": "Identifier",
                        "start": 884,
                        "end": 892,
                        "name": "a3",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 886,
                          "end": 892,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 888,
                            "end": 892,
                            "typeName": {
                              "type": "Identifier",
                              "start": 888,
                              "end": 889,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
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
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 907,
                      "end": 909,
                      "name": "b3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
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
                      "name": "b3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 933,
                      "end": 935,
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
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
                      "id": {
                        "type": "Identifier",
                        "start": 959,
                        "end": 989,
                        "name": "b4",
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
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 967,
                                      "end": 975,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 969,
                                        "end": 975
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
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
                                      "name": "Derived2",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "readonly": false,
                                "static": false,
                                "accessibility": null
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
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1004,
                      "end": 1006,
                      "name": "b4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
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
                      "name": "b4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1030,
                      "end": 1032,
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "declare": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 808,
              "end": 824,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 809,
                  "end": 823,
                  "name": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 810,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 819,
                    "end": 823,
                    "typeName": {
                      "type": "Identifier",
                      "start": 819,
                      "end": 823,
                      "name": "Base",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "returnType": null
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
