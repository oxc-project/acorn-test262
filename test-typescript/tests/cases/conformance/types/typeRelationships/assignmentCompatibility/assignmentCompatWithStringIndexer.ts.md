__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 55,
  "end": 1034,
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
      "type": "ClassDeclaration",
      "start": 188,
      "end": 222,
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 195,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 196,
        "end": 222,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 202,
            "end": 220,
            "parameters": [
              {
                "type": "Identifier",
                "start": 203,
                "end": 212,
                "name": "x",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 204,
                  "end": 212,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 206,
                    "end": 212
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 213,
              "end": 219,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 215,
                "end": 219,
                "typeName": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 219,
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
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 232,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 229,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 231,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 231,
                  "end": 232,
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
      "start": 235,
      "end": 267,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 267,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 267,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 267,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 242,
                "end": 267,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 244,
                    "end": 265,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 245,
                        "end": 254,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 246,
                          "end": 254,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 248,
                            "end": 254
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 255,
                      "end": 264,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 257,
                        "end": 264,
                        "typeName": {
                          "type": "Identifier",
                          "start": 257,
                          "end": 264,
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
      "start": 268,
      "end": 274,
      "expression": {
        "type": "AssignmentExpression",
        "start": 268,
        "end": 273,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 268,
          "end": 269,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 272,
          "end": 273,
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
      "start": 281,
      "end": 287,
      "expression": {
        "type": "AssignmentExpression",
        "start": 281,
        "end": 286,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 281,
          "end": 282,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
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
      "start": 298,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 332,
            "name": "b2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 304,
              "end": 332,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 306,
                "end": 332,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 308,
                    "end": 330,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 309,
                        "end": 318,
                        "name": "x",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 310,
                          "end": 318,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 312,
                            "end": 318
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 319,
                      "end": 329,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 321,
                        "end": 329,
                        "typeName": {
                          "type": "Identifier",
                          "start": 321,
                          "end": 329,
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
      "start": 333,
      "end": 340,
      "expression": {
        "type": "AssignmentExpression",
        "start": 333,
        "end": 339,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 333,
          "end": 334,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 337,
          "end": 339,
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
      "start": 347,
      "end": 354,
      "expression": {
        "type": "AssignmentExpression",
        "start": 347,
        "end": 353,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 347,
          "end": 349,
          "name": "b2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 352,
          "end": 353,
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
      "start": 365,
      "end": 1034,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 380,
        "name": "Generics",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 381,
        "end": 1034,
        "body": [
          {
            "type": "ClassDeclaration",
            "start": 387,
            "end": 442,
            "id": {
              "type": "Identifier",
              "start": 393,
              "end": 394,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 411,
              "end": 442,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 421,
                  "end": 436,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 422,
                      "end": 431,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 423,
                        "end": 431,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 425,
                          "end": 431
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 432,
                    "end": 435,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 434,
                      "end": 435,
                      "typeName": {
                        "type": "Identifier",
                        "start": 434,
                        "end": 435,
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
            "decorators": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 394,
              "end": 410,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 395,
                  "end": 409,
                  "name": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 396,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 405,
                    "end": 409,
                    "typeName": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 409,
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
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          {
            "type": "ClassDeclaration",
            "start": 448,
            "end": 515,
            "id": {
              "type": "Identifier",
              "start": 454,
              "end": 455,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 472,
              "end": 515,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 482,
                  "end": 503,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 483,
                      "end": 492,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 484,
                        "end": 492,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 486,
                          "end": 492
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 493,
                    "end": 502,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 495,
                      "end": 502,
                      "typeName": {
                        "type": "Identifier",
                        "start": 495,
                        "end": 502,
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
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 465,
              "end": 471,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 466,
                  "end": 470,
                  "typeName": {
                    "type": "Identifier",
                    "start": 466,
                    "end": 470,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 521,
            "end": 555,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 525,
                "end": 554,
                "id": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 554,
                  "name": "b1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 527,
                    "end": 554,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 529,
                      "end": 554,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 531,
                          "end": 552,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 532,
                              "end": 541,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 533,
                                "end": 541,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 535,
                                  "end": 541
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 542,
                            "end": 551,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 544,
                              "end": 551,
                              "typeName": {
                                "type": "Identifier",
                                "start": 544,
                                "end": 551,
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
            "start": 560,
            "end": 576,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 564,
                "end": 575,
                "id": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 575,
                  "name": "a1",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 566,
                    "end": 575,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 568,
                      "end": 575,
                      "typeName": {
                        "type": "Identifier",
                        "start": 568,
                        "end": 569,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 569,
                        "end": 575,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 570,
                            "end": 574,
                            "typeName": {
                              "type": "Identifier",
                              "start": 570,
                              "end": 574,
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
            "start": 581,
            "end": 589,
            "expression": {
              "type": "AssignmentExpression",
              "start": 581,
              "end": 588,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 581,
                "end": 583,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 586,
                "end": 588,
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
            "start": 600,
            "end": 608,
            "expression": {
              "type": "AssignmentExpression",
              "start": 600,
              "end": 607,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 600,
                "end": 602,
                "name": "b1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 605,
                "end": 607,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "ClassDeclaration",
            "start": 623,
            "end": 692,
            "id": {
              "type": "Identifier",
              "start": 629,
              "end": 631,
              "name": "B2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "superClass": {
              "type": "Identifier",
              "start": 640,
              "end": 641,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "ClassBody",
              "start": 648,
              "end": 692,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 658,
                  "end": 680,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 659,
                      "end": 668,
                      "name": "x",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 660,
                        "end": 668,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 662,
                          "end": 668
                        }
                      },
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 669,
                    "end": 679,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 671,
                      "end": 679,
                      "typeName": {
                        "type": "Identifier",
                        "start": 671,
                        "end": 679,
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
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 641,
              "end": 647,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 642,
                  "end": 646,
                  "typeName": {
                    "type": "Identifier",
                    "start": 642,
                    "end": 646,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "VariableDeclaration",
            "start": 698,
            "end": 733,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 702,
                "end": 732,
                "id": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 732,
                  "name": "b2",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 704,
                    "end": 732,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 706,
                      "end": 732,
                      "members": [
                        {
                          "type": "TSIndexSignature",
                          "start": 708,
                          "end": 730,
                          "parameters": [
                            {
                              "type": "Identifier",
                              "start": 709,
                              "end": 718,
                              "name": "x",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 710,
                                "end": 718,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 712,
                                  "end": 718
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 719,
                            "end": 729,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 721,
                              "end": 729,
                              "typeName": {
                                "type": "Identifier",
                                "start": 721,
                                "end": 729,
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
            "start": 738,
            "end": 746,
            "expression": {
              "type": "AssignmentExpression",
              "start": 738,
              "end": 745,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 738,
                "end": 740,
                "name": "a1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 743,
                "end": 745,
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
            "start": 757,
            "end": 765,
            "expression": {
              "type": "AssignmentExpression",
              "start": 757,
              "end": 764,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 757,
                "end": 759,
                "name": "b2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 762,
                "end": 764,
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
            "start": 780,
            "end": 1032,
            "id": {
              "type": "Identifier",
              "start": 789,
              "end": 792,
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
              "start": 811,
              "end": 1032,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 821,
                  "end": 855,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 825,
                      "end": 854,
                      "id": {
                        "type": "Identifier",
                        "start": 825,
                        "end": 854,
                        "name": "b3",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 827,
                          "end": 854,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 829,
                            "end": 854,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 831,
                                "end": 852,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 832,
                                    "end": 841,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 833,
                                      "end": 841,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 835,
                                        "end": 841
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 842,
                                  "end": 851,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 844,
                                    "end": 851,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 844,
                                      "end": 851,
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
                  "start": 864,
                  "end": 877,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 868,
                      "end": 876,
                      "id": {
                        "type": "Identifier",
                        "start": 868,
                        "end": 876,
                        "name": "a3",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 870,
                          "end": 876,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 872,
                            "end": 876,
                            "typeName": {
                              "type": "Identifier",
                              "start": 872,
                              "end": 873,
                              "name": "A",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 873,
                              "end": 876,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 874,
                                  "end": 875,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 874,
                                    "end": 875,
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
                  "start": 886,
                  "end": 894,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 886,
                    "end": 893,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 886,
                      "end": 888,
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 891,
                      "end": 893,
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
                  "start": 912,
                  "end": 920,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 912,
                    "end": 919,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 912,
                      "end": 914,
                      "name": "b3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 917,
                      "end": 919,
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
                  "start": 939,
                  "end": 974,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 943,
                      "end": 973,
                      "id": {
                        "type": "Identifier",
                        "start": 943,
                        "end": 973,
                        "name": "b4",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 945,
                          "end": 973,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 947,
                            "end": 973,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 949,
                                "end": 971,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 950,
                                    "end": 959,
                                    "name": "x",
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 951,
                                      "end": 959,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 953,
                                        "end": 959
                                      }
                                    },
                                    "decorators": [],
                                    "optional": false
                                  }
                                ],
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 960,
                                  "end": 970,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 962,
                                    "end": 970,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 962,
                                      "end": 970,
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
                  "start": 983,
                  "end": 991,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 983,
                    "end": 990,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 983,
                      "end": 985,
                      "name": "a3",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 988,
                      "end": 990,
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
                  "start": 1009,
                  "end": 1017,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 1009,
                    "end": 1016,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 1009,
                      "end": 1011,
                      "name": "b4",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1014,
                      "end": 1016,
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
              "start": 792,
              "end": 808,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 793,
                  "end": 807,
                  "name": {
                    "type": "Identifier",
                    "start": 793,
                    "end": 794,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 803,
                    "end": 807,
                    "typeName": {
                      "type": "Identifier",
                      "start": 803,
                      "end": 807,
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
