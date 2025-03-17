__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 27,
        "name": "Magic",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "X",
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
            "name": "X",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
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
                    "name": {
                      "type": "Identifier",
                      "start": 51,
                      "end": 52,
                      "name": "Y",
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
                      "name": {
                        "type": "Identifier",
                        "start": 63,
                        "end": 64,
                        "name": "_",
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
                  "name": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 78,
                    "name": "__",
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
              }
            }
          ]
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 82,
          "end": 83,
          "typeName": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "Y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 86,
          "end": 91
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 94,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 99,
        "end": 100,
        "name": "R",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 103,
        "end": 120,
        "typeName": {
          "type": "Identifier",
          "start": 103,
          "end": 108,
          "name": "Magic",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 139,
      "end": 213,
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 153,
        "name": "Recursive",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 154,
              "end": 156,
              "name": "Id",
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 166,
              "end": 168,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "Id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 177,
            "end": 211,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 177,
              "end": 185,
              "name": "children",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 196,
                      "end": 205,
                      "name": "Recursive",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                            "name": "Id",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  }
                }
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
      "type": "TSDeclareFunction",
      "start": 215,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 232,
        "end": 238,
        "name": "getIds",
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
          "start": 243,
          "end": 274,
          "name": "items",
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 259,
                    "end": 268,
                    "name": "Recursive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                          "name": "Id",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 238,
        "end": 242,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 239,
            "end": 241,
            "name": {
              "type": "Identifier",
              "start": 239,
              "end": 241,
              "name": "Id",
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
              "name": "Id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 290,
            "end": 295,
            "name": "items",
            "typeAnnotation": null,
            "decorators": [],
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 305,
                          "end": 307,
                          "name": "id",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 309,
                          "end": 312,
                          "value": "a",
                          "raw": "'a'"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 318,
                        "end": 375,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 318,
                          "end": 326,
                          "name": "children",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
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
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 339,
                                    "end": 341,
                                    "name": "id",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "start": 343,
                                    "end": 346,
                                    "value": "b",
                                    "raw": "'b'"
                                  },
                                  "kind": "init",
                                  "optional": false
                                },
                                {
                                  "type": "Property",
                                  "start": 356,
                                  "end": 368,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Identifier",
                                    "start": 356,
                                    "end": 364,
                                    "name": "children",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "value": {
                                    "type": "ArrayExpression",
                                    "start": 366,
                                    "end": 368,
                                    "elements": []
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ]
                            }
                          ]
                        },
                        "kind": "init",
                        "optional": false
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
                  "name": "const",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 416,
                    "name": "Recursive",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
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
                  }
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 434,
            "end": 437,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 440,
            "end": 453,
            "callee": {
              "type": "Identifier",
              "start": 440,
              "end": 446,
              "name": "getIds",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 447,
                "end": 452,
                "name": "items",
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 498,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 501,
            "end": 598,
            "callee": {
              "type": "Identifier",
              "start": 501,
              "end": 507,
              "name": "getIds",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 517,
                            "name": "id",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Literal",
                            "start": 519,
                            "end": 522,
                            "value": "a",
                            "raw": "'a'"
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 528,
                          "end": 585,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 528,
                            "end": 536,
                            "name": "children",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
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
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 549,
                                      "end": 551,
                                      "name": "id",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "Literal",
                                      "start": 553,
                                      "end": 556,
                                      "value": "b",
                                      "raw": "'b'"
                                    },
                                    "kind": "init",
                                    "optional": false
                                  },
                                  {
                                    "type": "Property",
                                    "start": 566,
                                    "end": 578,
                                    "method": false,
                                    "shorthand": false,
                                    "computed": false,
                                    "key": {
                                      "type": "Identifier",
                                      "start": 566,
                                      "end": 574,
                                      "name": "children",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "value": {
                                      "type": "ArrayExpression",
                                      "start": 576,
                                      "end": 578,
                                      "elements": []
                                    },
                                    "kind": "init",
                                    "optional": false
                                  }
                                ]
                              }
                            ]
                          },
                          "kind": "init",
                          "optional": false
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
                    "name": "const",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 633,
      "end": 669,
      "id": {
        "type": "Identifier",
        "start": 638,
        "end": 640,
        "name": "T1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 641,
              "end": 642,
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
            "typeName": {
              "type": "Identifier",
              "start": 655,
              "end": 657,
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 660,
                        "end": 661,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 670,
      "end": 702,
      "id": {
        "type": "Identifier",
        "start": 675,
        "end": 677,
        "name": "T2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 678,
              "end": 679,
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
              "value": 42,
              "raw": "42"
            }
          },
          {
            "type": "TSTypeReference",
            "start": 688,
            "end": 700,
            "typeName": {
              "type": "Identifier",
              "start": 688,
              "end": 690,
              "name": "T2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 693,
                        "end": 694,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
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
                            "name": "T",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 704,
      "end": 774,
      "id": {
        "type": "Identifier",
        "start": 713,
        "end": 715,
        "name": "qq",
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
          "start": 719,
          "end": 727,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 720,
            "end": 727,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 722,
              "end": 727,
              "typeName": {
                "type": "Identifier",
                "start": 722,
                "end": 724,
                "name": "T1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "U",
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
        {
          "type": "Identifier",
          "start": 729,
          "end": 737,
          "name": "y",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 730,
            "end": 737,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 732,
              "end": 737,
              "typeName": {
                "type": "Identifier",
                "start": 732,
                "end": 734,
                "name": "T2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "U",
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
        }
      ],
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 749,
                "end": 750,
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
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
                "name": "y",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 760,
                "end": 761,
                "name": "x",
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
        "start": 715,
        "end": 718,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 716,
            "end": 717,
            "name": {
              "type": "Identifier",
              "start": 716,
              "end": 717,
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
