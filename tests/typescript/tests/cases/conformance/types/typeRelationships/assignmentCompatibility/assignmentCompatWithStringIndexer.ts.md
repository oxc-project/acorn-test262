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
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
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
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
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
        "decorators": [],
        "name": "Derived2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
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
              "decorators": [],
              "name": "baz",
              "optional": false,
              "typeAnnotation": null
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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 194,
        "end": 195,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 204,
                  "end": 212,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 206,
                    "end": 212
                  }
                }
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
                  "decorators": [],
                  "name": "Base",
                  "optional": false,
                  "typeAnnotation": null
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
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 224,
      "end": 233,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 228,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 228,
            "end": 232,
            "decorators": [],
            "name": "a",
            "optional": false,
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
                  "decorators": [],
                  "name": "A",
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
      "type": "VariableDeclaration",
      "start": 235,
      "end": 267,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 267,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 267,
            "decorators": [],
            "name": "b",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 246,
                          "end": 254,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 248,
                            "end": 254
                          }
                        }
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
                          "decorators": [],
                          "name": "Derived",
                          "optional": false,
                          "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 272,
          "end": 273,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 285,
          "end": 286,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 298,
      "end": 332,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 302,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 302,
            "end": 332,
            "decorators": [],
            "name": "b2",
            "optional": false,
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
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 310,
                          "end": 318,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 312,
                            "end": 318
                          }
                        }
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
                          "decorators": [],
                          "name": "Derived2",
                          "optional": false,
                          "typeAnnotation": null
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
            }
          },
          "init": null,
          "definite": false
        }
      ],
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
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 337,
          "end": 339,
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
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
          "decorators": [],
          "name": "b2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 352,
          "end": 353,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
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
        "decorators": [],
        "name": "Generics",
        "optional": false,
        "typeAnnotation": null
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
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 393,
              "end": 394,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 405,
                    "end": 409,
                    "typeName": {
                      "type": "Identifier",
                      "start": 405,
                      "end": 409,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
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
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 423,
                        "end": 431,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 425,
                          "end": 431
                        }
                      }
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
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
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
            "abstract": false,
            "declare": false
          },
          {
            "type": "ClassDeclaration",
            "start": 448,
            "end": 515,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 454,
              "end": 455,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 464,
              "end": 465,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "implements": [],
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 484,
                        "end": 492,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 486,
                          "end": 492
                        }
                      }
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
                        "decorators": [],
                        "name": "Derived",
                        "optional": false,
                        "typeAnnotation": null
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
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 521,
            "end": 555,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 525,
                "end": 554,
                "id": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 554,
                  "decorators": [],
                  "name": "b1",
                  "optional": false,
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
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 533,
                                "end": 541,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 535,
                                  "end": 541
                                }
                              }
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
                                "decorators": [],
                                "name": "Derived",
                                "optional": false,
                                "typeAnnotation": null
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
            "start": 560,
            "end": 576,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 564,
                "end": 575,
                "id": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 575,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
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
                        "decorators": [],
                        "name": "A",
                        "optional": false,
                        "typeAnnotation": null
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
                              "decorators": [],
                              "name": "Base",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
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
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 586,
                "end": 588,
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "b1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 605,
                "end": 607,
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          },
          {
            "type": "ClassDeclaration",
            "start": 623,
            "end": 692,
            "decorators": [],
            "id": {
              "type": "Identifier",
              "start": 629,
              "end": 631,
              "decorators": [],
              "name": "B2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeParameters": null,
            "superClass": {
              "type": "Identifier",
              "start": 640,
              "end": 641,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
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
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            },
            "implements": [],
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
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 660,
                        "end": 668,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 662,
                          "end": 668
                        }
                      }
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
                        "decorators": [],
                        "name": "Derived2",
                        "optional": false,
                        "typeAnnotation": null
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
            "abstract": false,
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 698,
            "end": 733,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 702,
                "end": 732,
                "id": {
                  "type": "Identifier",
                  "start": 702,
                  "end": 732,
                  "decorators": [],
                  "name": "b2",
                  "optional": false,
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
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 710,
                                "end": 718,
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 712,
                                  "end": 718
                                }
                              }
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
                                "decorators": [],
                                "name": "Derived2",
                                "optional": false,
                                "typeAnnotation": null
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
                  }
                },
                "init": null,
                "definite": false
              }
            ],
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
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 743,
                "end": 745,
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null
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
                "decorators": [],
                "name": "b2",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 762,
                "end": 764,
                "decorators": [],
                "name": "a1",
                "optional": false,
                "typeAnnotation": null
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
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "generator": false,
            "async": false,
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 803,
                    "end": 807,
                    "typeName": {
                      "type": "Identifier",
                      "start": 803,
                      "end": 807,
                      "decorators": [],
                      "name": "Base",
                      "optional": false,
                      "typeAnnotation": null
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
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 811,
              "end": 1032,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 821,
                  "end": 855,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 825,
                      "end": 854,
                      "id": {
                        "type": "Identifier",
                        "start": 825,
                        "end": 854,
                        "decorators": [],
                        "name": "b3",
                        "optional": false,
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
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 833,
                                      "end": 841,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 835,
                                        "end": 841
                                      }
                                    }
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
                                      "decorators": [],
                                      "name": "Derived",
                                      "optional": false,
                                      "typeAnnotation": null
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
                  "start": 864,
                  "end": 877,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 868,
                      "end": 876,
                      "id": {
                        "type": "Identifier",
                        "start": 868,
                        "end": 876,
                        "decorators": [],
                        "name": "a3",
                        "optional": false,
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
                              "decorators": [],
                              "name": "A",
                              "optional": false,
                              "typeAnnotation": null
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
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              ]
                            }
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
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 891,
                      "end": 893,
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 917,
                      "end": 919,
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 939,
                  "end": 974,
                  "kind": "var",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 943,
                      "end": 973,
                      "id": {
                        "type": "Identifier",
                        "start": 943,
                        "end": 973,
                        "decorators": [],
                        "name": "b4",
                        "optional": false,
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
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 951,
                                      "end": 959,
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 953,
                                        "end": 959
                                      }
                                    }
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
                                      "decorators": [],
                                      "name": "Derived2",
                                      "optional": false,
                                      "typeAnnotation": null
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
                        }
                      },
                      "init": null,
                      "definite": false
                    }
                  ],
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
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 988,
                      "end": 990,
                      "decorators": [],
                      "name": "b4",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "b4",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 1014,
                      "end": 1016,
                      "decorators": [],
                      "name": "a3",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "expression": false
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
