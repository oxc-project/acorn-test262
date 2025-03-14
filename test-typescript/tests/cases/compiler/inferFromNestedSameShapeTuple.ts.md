inferFromNestedSameShapeTuple.ts
```json
{
  "type": "Program",
  "start": 17,
  "end": 775,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 17,
      "end": 92,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 27,
        "decorators": [],
        "name": "Magic",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 33,
        "end": 91,
        "checkType": {
          "type": "TSTypeReference",
          "start": 33,
          "end": 34,
          "typeName": {
            "type": "Identifier",
            "start": 33,
            "end": 34,
            "decorators": [],
            "name": "X",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTupleType",
          "start": 43,
          "end": 79,
          "elementTypes": [
            {
              "type": "TSTupleType",
              "start": 44,
              "end": 65,
              "elementTypes": [
                {
                  "type": "TSInferType",
                  "start": 45,
                  "end": 52,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 51,
                    "end": 52,
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "decorators": [],
                      "name": "Y",
                      "optional": false
                    },
                    "out": false
                  }
                },
                {
                  "type": "TSRestType",
                  "start": 54,
                  "end": 64,
                  "typeAnnotation": {
                    "type": "TSInferType",
                    "start": 57,
                    "end": 64,
                    "typeParameter": {
                      "type": "TSTypeParameter",
                      "start": 63,
                      "end": 64,
                      "const": false,
                      "in": false,
                      "name": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "decorators": [],
                        "name": "_",
                        "optional": false
                      },
                      "out": false
                    }
                  }
                }
              ]
            },
            {
              "type": "TSRestType",
              "start": 67,
              "end": 78,
              "typeAnnotation": {
                "type": "TSInferType",
                "start": 70,
                "end": 78,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 76,
                  "end": 78,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 78,
                    "decorators": [],
                    "name": "__",
                    "optional": false
                  },
                  "out": false
                }
              }
            }
          ]
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 86,
          "end": 91
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 82,
          "end": 83,
          "typeName": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "decorators": [],
            "name": "Y",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 27,
        "end": 30,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 29,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 94,
      "end": 120,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "decorators": [],
        "name": "R",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 103,
        "end": 120,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 108,
          "end": 120,
          "params": [
            {
              "type": "TSTupleType",
              "start": 109,
              "end": 119,
              "elementTypes": [
                {
                  "type": "TSTupleType",
                  "start": 110,
                  "end": 118,
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 111,
                      "end": 117
                    }
                  ]
                }
              ]
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 103,
          "end": 108,
          "decorators": [],
          "name": "Magic",
          "optional": false
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 139,
      "end": 213,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 153,
        "decorators": [],
        "name": "Recursive",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 160,
        "end": 213,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 166,
            "end": 172,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 168,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 168,
              "end": 172,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 170,
                "end": 172,
                "typeName": {
                  "type": "Identifier",
                  "start": 170,
                  "end": 172,
                  "decorators": [],
                  "name": "Id",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 177,
            "end": 211,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 185,
              "decorators": [],
              "name": "children",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 211,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 187,
                "end": 211,
                "operator": "readonly",
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 196,
                  "end": 211,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 196,
                    "end": 209,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 205,
                      "end": 209,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 206,
                          "end": 208,
                          "typeName": {
                            "type": "Identifier",
                            "start": 206,
                            "end": 208,
                            "decorators": [],
                            "name": "Id",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 205,
                      "decorators": [],
                      "name": "Recursive",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 153,
        "end": 157,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 154,
            "end": 156,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 156,
              "decorators": [],
              "name": "Id",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 215,
      "end": 282,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 238,
        "decorators": [],
        "name": "getIds",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 243,
          "end": 274,
          "decorators": [],
          "name": "items",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 248,
            "end": 274,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 250,
              "end": 274,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 259,
                "end": 274,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 259,
                  "end": 272,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 268,
                    "end": 272,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 269,
                        "end": 271,
                        "typeName": {
                          "type": "Identifier",
                          "start": 269,
                          "end": 271,
                          "decorators": [],
                          "name": "Id",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 268,
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 275,
        "end": 281,
        "typeAnnotation": {
          "type": "TSArrayType",
          "start": 277,
          "end": 281,
          "elementType": {
            "type": "TSTypeReference",
            "start": 277,
            "end": 279,
            "typeName": {
              "type": "Identifier",
              "start": 277,
              "end": 279,
              "decorators": [],
              "name": "Id",
              "optional": false
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 238,
        "end": 242,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 239,
            "end": 241,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 239,
              "end": 241,
              "decorators": [],
              "name": "Id",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 284,
      "end": 426,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 290,
          "end": 426,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 295,
            "decorators": [],
            "name": "items",
            "optional": false
          },
          "init": {
            "type": "TSSatisfiesExpression",
            "start": 298,
            "end": 426,
            "expression": {
              "type": "TSAsExpression",
              "start": 298,
              "end": 387,
              "expression": {
                "type": "ArrayExpression",
                "start": 298,
                "end": 378,
                "elements": [
                  {
                    "type": "ObjectExpression",
                    "start": 299,
                    "end": 377,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 305,
                        "end": 312,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 307,
                          "decorators": [],
                          "name": "id",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 309,
                          "end": 312,
                          "raw": "'a'",
                          "value": "a"
                        }
                      },
                      {
                        "type": "Property",
                        "start": 318,
                        "end": 375,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 318,
                          "end": 326,
                          "decorators": [],
                          "name": "children",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "ArrayExpression",
                          "start": 328,
                          "end": 375,
                          "elements": [
                            {
                              "type": "ObjectExpression",
                              "start": 329,
                              "end": 374,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 339,
                                  "end": 346,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 339,
                                    "end": 341,
                                    "decorators": [],
                                    "name": "id",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Literal",
                                    "start": 343,
                                    "end": 346,
                                    "raw": "'b'",
                                    "value": "b"
                                  }
                                },
                                {
                                  "type": "Property",
                                  "start": 356,
                                  "end": 368,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 356,
                                    "end": 364,
                                    "decorators": [],
                                    "name": "children",
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "ArrayExpression",
                                    "start": 366,
                                    "end": 368,
                                    "elements": []
                                  }
                                }
                              ]
                            }
                          ]
                        }
                      }
                    ]
                  }
                ]
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 382,
                "end": 387,
                "typeName": {
                  "type": "Identifier",
                  "start": 382,
                  "end": 387,
                  "decorators": [],
                  "name": "const",
                  "optional": false
                }
              }
            },
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 398,
              "end": 426,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 407,
                "end": 426,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 407,
                  "end": 424,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 416,
                    "end": 424,
                    "params": [
                      {
                        "type": "TSStringKeyword",
                        "start": 417,
                        "end": 423
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 416,
                    "decorators": [],
                    "name": "Recursive",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 428,
      "end": 453,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 434,
          "end": 453,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 437,
            "decorators": [],
            "name": "foo",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 440,
            "end": 453,
            "arguments": [
              {
                "type": "Identifier",
                "start": 447,
                "end": 452,
                "decorators": [],
                "name": "items",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 440,
              "end": 446,
              "decorators": [],
              "name": "getIds",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 488,
      "end": 598,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 598,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 498,
            "decorators": [],
            "name": "foo2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 501,
            "end": 598,
            "arguments": [
              {
                "type": "TSAsExpression",
                "start": 508,
                "end": 597,
                "expression": {
                  "type": "ArrayExpression",
                  "start": 508,
                  "end": 588,
                  "elements": [
                    {
                      "type": "ObjectExpression",
                      "start": 509,
                      "end": 587,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 515,
                          "end": 522,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 517,
                            "decorators": [],
                            "name": "id",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Literal",
                            "start": 519,
                            "end": 522,
                            "raw": "'a'",
                            "value": "a"
                          }
                        },
                        {
                          "type": "Property",
                          "start": 528,
                          "end": 585,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 528,
                            "end": 536,
                            "decorators": [],
                            "name": "children",
                            "optional": false
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrayExpression",
                            "start": 538,
                            "end": 585,
                            "elements": [
                              {
                                "type": "ObjectExpression",
                                "start": 539,
                                "end": 584,
                                "properties": [
                                  {
                                    "type": "Property",
                                    "start": 549,
                                    "end": 556,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 549,
                                      "end": 551,
                                      "decorators": [],
                                      "name": "id",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "Literal",
                                      "start": 553,
                                      "end": 556,
                                      "raw": "'b'",
                                      "value": "b"
                                    }
                                  },
                                  {
                                    "type": "Property",
                                    "start": 566,
                                    "end": 578,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 566,
                                      "end": 574,
                                      "decorators": [],
                                      "name": "children",
                                      "optional": false
                                    },
                                    "kind": "init",
                                    "method": false,
                                    "optional": false,
                                    "shorthand": false,
                                    "value": {
                                      "type": "ArrayExpression",
                                      "start": 576,
                                      "end": 578,
                                      "elements": []
                                    }
                                  }
                                ]
                              }
                            ]
                          }
                        }
                      ]
                    }
                  ]
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 592,
                  "end": 597,
                  "typeName": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 597,
                    "decorators": [],
                    "name": "const",
                    "optional": false
                  }
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 501,
              "end": 507,
              "decorators": [],
              "name": "getIds",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 633,
      "end": 669,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 638,
        "end": 640,
        "decorators": [],
        "name": "T1",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 646,
        "end": 668,
        "elementTypes": [
          {
            "type": "TSNumberKeyword",
            "start": 647,
            "end": 653
          },
          {
            "type": "TSTypeReference",
            "start": 655,
            "end": 667,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 657,
              "end": 667,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 658,
                  "end": 666,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 660,
                      "end": 664,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 660,
                        "end": 661,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
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
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 655,
              "end": 657,
              "decorators": [],
              "name": "T1",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 640,
        "end": 643,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 641,
            "end": 642,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 641,
              "end": 642,
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
      "type": "TSTypeAliasDeclaration",
      "start": 670,
      "end": 702,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 677,
        "decorators": [],
        "name": "T2",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 683,
        "end": 701,
        "elementTypes": [
          {
            "type": "TSLiteralType",
            "start": 684,
            "end": 686,
            "literal": {
              "type": "Literal",
              "start": 684,
              "end": 686,
              "raw": "42",
              "value": 42
            }
          },
          {
            "type": "TSTypeReference",
            "start": 688,
            "end": 700,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 690,
              "end": 700,
              "params": [
                {
                  "type": "TSTypeLiteral",
                  "start": 691,
                  "end": 699,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 693,
                      "end": 697,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 693,
                        "end": 694,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "readonly": false,
                      "static": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 694,
                        "end": 697,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 696,
                          "end": 697,
                          "typeName": {
                            "type": "Identifier",
                            "start": 696,
                            "end": 697,
                            "decorators": [],
                            "name": "T",
                            "optional": false
                          }
                        }
                      }
                    }
                  ]
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 688,
              "end": 690,
              "decorators": [],
              "name": "T2",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 677,
        "end": 680,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 678,
            "end": 679,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 678,
              "end": 679,
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
      "type": "FunctionDeclaration",
      "start": 704,
      "end": 774,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 739,
        "end": 774,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 745,
            "end": 751,
            "expression": {
              "type": "AssignmentExpression",
              "start": 745,
              "end": 750,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 745,
                "end": 746,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 749,
                "end": 750,
                "decorators": [],
                "name": "y",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 756,
            "end": 762,
            "expression": {
              "type": "AssignmentExpression",
              "start": 756,
              "end": 761,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 756,
                "end": 757,
                "decorators": [],
                "name": "y",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 760,
                "end": 761,
                "decorators": [],
                "name": "x",
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
        "start": 713,
        "end": 715,
        "decorators": [],
        "name": "qq",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 719,
          "end": 727,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 720,
            "end": 727,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 722,
              "end": 727,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 724,
                "end": 727,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 725,
                    "end": 726,
                    "typeName": {
                      "type": "Identifier",
                      "start": 725,
                      "end": 726,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 722,
                "end": 724,
                "decorators": [],
                "name": "T1",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 729,
          "end": 737,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 730,
            "end": 737,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 732,
              "end": 737,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 734,
                "end": 737,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 735,
                    "end": 736,
                    "typeName": {
                      "type": "Identifier",
                      "start": 735,
                      "end": 736,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 732,
                "end": 734,
                "decorators": [],
                "name": "T2",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 715,
        "end": 718,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 716,
            "end": 717,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 716,
              "end": 717,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
