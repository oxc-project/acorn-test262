assignmentCompatWithNumericIndexer2.ts
```json
{
  "type": "Program",
  "start": 62,
  "end": 852,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 62,
      "end": 93,
      "body": {
        "type": "TSInterfaceBody",
        "start": 77,
        "end": 93,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 91,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 82,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 84,
                "end": 90
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "Base",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 94,
      "end": 141,
      "body": {
        "type": "TSInterfaceBody",
        "start": 125,
        "end": 141,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 127,
            "end": 139,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 130,
              "end": 138,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 132,
                "end": 138
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 120,
          "end": 124,
          "expression": {
            "type": "Identifier",
            "start": 120,
            "end": 124,
            "decorators": [],
            "name": "Base",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 104,
        "end": 111,
        "decorators": [],
        "name": "Derived",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 142,
      "end": 193,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 193,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 179,
            "end": 191,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 179,
              "end": 182,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 169,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 169,
            "end": 176,
            "decorators": [],
            "name": "Derived",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "decorators": [],
        "name": "Derived2",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 195,
      "end": 233,
      "body": {
        "type": "TSInterfaceBody",
        "start": 207,
        "end": 233,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 213,
            "end": 231,
            "parameters": [
              {
                "type": "Identifier",
                "start": 214,
                "end": 223,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 215,
                  "end": 223,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 224,
              "end": 230,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 226,
                "end": 230,
                "typeName": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 230,
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
        "start": 205,
        "end": 206,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 243,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 242,
                "end": 243,
                "typeName": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 243,
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
      "start": 245,
      "end": 277,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 277,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 277,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 277,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 252,
                "end": 277,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 254,
                    "end": 275,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 255,
                        "end": 264,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 256,
                          "end": 264,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 258,
                            "end": 264
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 265,
                      "end": 274,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 267,
                        "end": 274,
                        "typeName": {
                          "type": "Identifier",
                          "start": 267,
                          "end": 274,
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
      "start": 278,
      "end": 284,
      "expression": {
        "type": "AssignmentExpression",
        "start": 278,
        "end": 283,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 278,
          "end": 279,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 282,
          "end": 283,
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
                            "type": "TSNumberKeyword",
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
      "start": 345,
      "end": 352,
      "expression": {
        "type": "AssignmentExpression",
        "start": 345,
        "end": 351,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 345,
          "end": 347,
          "decorators": [],
          "name": "b2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 350,
          "end": 351,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 363,
      "end": 852,
      "body": {
        "type": "TSModuleBlock",
        "start": 379,
        "end": 852,
        "body": [
          {
            "type": "TSInterfaceDeclaration",
            "start": 385,
            "end": 444,
            "body": {
              "type": "TSInterfaceBody",
              "start": 413,
              "end": 444,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 423,
                  "end": 438,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 424,
                      "end": 433,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 425,
                        "end": 433,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 427,
                          "end": 433
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 434,
                    "end": 437,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 436,
                      "end": 437,
                      "typeName": {
                        "type": "Identifier",
                        "start": 436,
                        "end": 437,
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
              "start": 395,
              "end": 396,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 396,
              "end": 412,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 397,
                  "end": 411,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 407,
                    "end": 411,
                    "typeName": {
                      "type": "Identifier",
                      "start": 407,
                      "end": 411,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 397,
                    "end": 398,
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
            "start": 450,
            "end": 521,
            "body": {
              "type": "TSInterfaceBody",
              "start": 478,
              "end": 521,
              "body": [
                {
                  "type": "TSIndexSignature",
                  "start": 488,
                  "end": 509,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 489,
                      "end": 498,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 490,
                        "end": 498,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 492,
                          "end": 498
                        }
                      }
                    }
                  ],
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 499,
                    "end": 508,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 501,
                      "end": 508,
                      "typeName": {
                        "type": "Identifier",
                        "start": 501,
                        "end": 508,
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
                "start": 470,
                "end": 477,
                "expression": {
                  "type": "Identifier",
                  "start": 470,
                  "end": 471,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 471,
                  "end": 477,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 472,
                      "end": 476,
                      "typeName": {
                        "type": "Identifier",
                        "start": 472,
                        "end": 476,
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
              "start": 460,
              "end": 461,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "FunctionDeclaration",
            "start": 527,
            "end": 850,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 558,
              "end": 850,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 568,
                  "end": 580,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 572,
                      "end": 579,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 572,
                        "end": 579,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 573,
                          "end": 579,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 575,
                            "end": 579,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 576,
                              "end": 579,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 577,
                                  "end": 578,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 577,
                                    "end": 578,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 575,
                              "end": 576,
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
                  "start": 589,
                  "end": 621,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 593,
                      "end": 621,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 593,
                        "end": 621,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 594,
                          "end": 621,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 596,
                            "end": 621,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 598,
                                "end": 619,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 599,
                                    "end": 608,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 600,
                                      "end": 608,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 602,
                                        "end": 608
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 609,
                                  "end": 618,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 611,
                                    "end": 618,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 611,
                                      "end": 618,
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
                  "start": 630,
                  "end": 636,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 630,
                    "end": 635,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 630,
                      "end": 631,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 634,
                      "end": 635,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 654,
                  "end": 660,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 654,
                    "end": 659,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 654,
                      "end": 655,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 658,
                      "end": 659,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 679,
                  "end": 713,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 683,
                      "end": 713,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 683,
                        "end": 713,
                        "decorators": [],
                        "name": "b2",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 685,
                          "end": 713,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 687,
                            "end": 713,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 689,
                                "end": 711,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 690,
                                    "end": 699,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 691,
                                      "end": 699,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 693,
                                        "end": 699
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 700,
                                  "end": 710,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 702,
                                    "end": 710,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 702,
                                      "end": 710,
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
                  "start": 722,
                  "end": 729,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 722,
                    "end": 728,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 722,
                      "end": 723,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 726,
                      "end": 728,
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 747,
                  "end": 754,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 747,
                    "end": 753,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 747,
                      "end": 749,
                      "decorators": [],
                      "name": "b2",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 752,
                      "end": 753,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "VariableDeclaration",
                  "start": 773,
                  "end": 800,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 777,
                      "end": 800,
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 777,
                        "end": 800,
                        "decorators": [],
                        "name": "b3",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 779,
                          "end": 800,
                          "typeAnnotation": {
                            "type": "TSTypeLiteral",
                            "start": 781,
                            "end": 800,
                            "members": [
                              {
                                "type": "TSIndexSignature",
                                "start": 783,
                                "end": 798,
                                "parameters": [
                                  {
                                    "type": "Identifier",
                                    "start": 784,
                                    "end": 793,
                                    "decorators": [],
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": {
                                      "type": "TSTypeAnnotation",
                                      "start": 785,
                                      "end": 793,
                                      "typeAnnotation": {
                                        "type": "TSNumberKeyword",
                                        "start": 787,
                                        "end": 793
                                      }
                                    }
                                  }
                                ],
                                "readonly": false,
                                "static": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 794,
                                  "end": 797,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 796,
                                    "end": 797,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 796,
                                      "end": 797,
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
                      },
                      "init": null
                    }
                  ],
                  "declare": false,
                  "kind": "var"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 809,
                  "end": 816,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 809,
                    "end": 815,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 809,
                      "end": 810,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 813,
                      "end": 815,
                      "decorators": [],
                      "name": "b3",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "ExpressionStatement",
                  "start": 831,
                  "end": 838,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 831,
                    "end": 837,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 831,
                      "end": 833,
                      "decorators": [],
                      "name": "b3",
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 836,
                      "end": 837,
                      "decorators": [],
                      "name": "a",
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
              "start": 536,
              "end": 539,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [],
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 539,
              "end": 555,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 540,
                  "end": 554,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 550,
                    "end": 554,
                    "typeName": {
                      "type": "Identifier",
                      "start": 550,
                      "end": 554,
                      "decorators": [],
                      "name": "Base",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 541,
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
        "start": 370,
        "end": 378,
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
