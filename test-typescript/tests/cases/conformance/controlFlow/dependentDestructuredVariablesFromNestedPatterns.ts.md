__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 963,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 139,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "test1",
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
          "start": 15,
          "end": 62,
          "name": "arg",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 18,
            "end": 62,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 20,
              "end": 62,
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "start": 21,
                  "end": 61,
                  "types": [
                    {
                      "type": "TSTupleType",
                      "start": 21,
                      "end": 39,
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 22,
                          "end": 31
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 33,
                          "end": 38,
                          "typeName": {
                            "type": "Identifier",
                            "start": 33,
                            "end": 38,
                            "name": "Error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSTupleType",
                      "start": 42,
                      "end": 61,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 43,
                          "end": 49
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 51,
                          "end": 60
                        }
                      ]
                    }
                  ]
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
        "start": 64,
        "end": 139,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 68,
            "end": 96,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 74,
                "end": 95,
                "id": {
                  "type": "ArrayPattern",
                  "start": 74,
                  "end": 89,
                  "elements": [
                    {
                      "type": "ArrayPattern",
                      "start": 75,
                      "end": 88,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 76,
                          "end": 78,
                          "name": "p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 80,
                          "end": 87,
                          "name": "p1Error",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 95,
                  "name": "arg",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 100,
            "end": 130,
            "test": {
              "type": "Identifier",
              "start": 104,
              "end": 111,
              "name": "p1Error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 113,
              "end": 130,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 119,
                  "end": 126,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 134,
            "end": 137,
            "expression": {
              "type": "Identifier",
              "start": 134,
              "end": 136,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 141,
      "end": 260,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 155,
        "name": "test2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 156,
          "end": 215,
          "elements": [
            {
              "type": "ArrayPattern",
              "start": 157,
              "end": 170,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 160,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 169,
                  "name": "p1Error",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 171,
            "end": 215,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 173,
              "end": 215,
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "start": 174,
                  "end": 214,
                  "types": [
                    {
                      "type": "TSTupleType",
                      "start": 174,
                      "end": 192,
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 175,
                          "end": 184
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 186,
                          "end": 191,
                          "typeName": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 191,
                            "name": "Error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSTupleType",
                      "start": 195,
                      "end": 214,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 196,
                          "end": 202
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 204,
                          "end": 213
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 260,
        "body": [
          {
            "type": "IfStatement",
            "start": 221,
            "end": 251,
            "test": {
              "type": "Identifier",
              "start": 225,
              "end": 232,
              "name": "p1Error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 234,
              "end": 251,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 240,
                  "end": 247,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 255,
            "end": 258,
            "expression": {
              "type": "Identifier",
              "start": 255,
              "end": 257,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 262,
      "end": 621,
      "id": {
        "type": "Identifier",
        "start": 277,
        "end": 289,
        "name": "myAllSettled",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 320,
          "end": 331,
          "name": "fn",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 331,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 324,
              "end": 331,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 327,
                "end": 331,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 330,
                  "end": 331,
                  "typeName": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 333,
        "end": 621,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 337,
            "end": 385,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 343,
                "end": 384,
                "id": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 351,
                  "name": "promises",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 354,
                  "end": 384,
                  "argument": {
                    "type": "CallExpression",
                    "start": 360,
                    "end": 384,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 360,
                      "end": 378,
                      "object": {
                        "type": "Identifier",
                        "start": 360,
                        "end": 367,
                        "name": "Promise",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 368,
                        "end": 378,
                        "name": "allSettled",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "start": 379,
                        "end": 383,
                        "callee": {
                          "type": "Identifier",
                          "start": 379,
                          "end": 381,
                          "name": "fn",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "arguments": [],
                        "optional": false,
                        "typeArguments": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 389,
            "end": 619,
            "argument": {
              "type": "TSAsExpression",
              "start": 396,
              "end": 618,
              "expression": {
                "type": "CallExpression",
                "start": 396,
                "end": 547,
                "callee": {
                  "type": "MemberExpression",
                  "start": 396,
                  "end": 408,
                  "object": {
                    "type": "Identifier",
                    "start": 396,
                    "end": 404,
                    "name": "promises",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 408,
                    "name": "map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 409,
                    "end": 542,
                    "id": null,
                    "expression": true,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 410,
                        "end": 416,
                        "name": "result",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "ConditionalExpression",
                      "start": 425,
                      "end": 542,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 425,
                        "end": 454,
                        "left": {
                          "type": "MemberExpression",
                          "start": 425,
                          "end": 438,
                          "object": {
                            "type": "Identifier",
                            "start": 425,
                            "end": 431,
                            "name": "result",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 432,
                            "end": 438,
                            "name": "status",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "operator": "===",
                        "right": {
                          "type": "Literal",
                          "start": 443,
                          "end": 454,
                          "value": "fulfilled",
                          "raw": "\"fulfilled\""
                        }
                      },
                      "consequent": {
                        "type": "ArrayExpression",
                        "start": 463,
                        "end": 488,
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 464,
                            "end": 476,
                            "object": {
                              "type": "Identifier",
                              "start": 464,
                              "end": 470,
                              "name": "result",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 471,
                              "end": 476,
                              "name": "value",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 478,
                            "end": 487,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      },
                      "alternate": {
                        "type": "ArrayExpression",
                        "start": 497,
                        "end": 542,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 498,
                            "end": 507,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "NewExpression",
                            "start": 509,
                            "end": 541,
                            "callee": {
                              "type": "Identifier",
                              "start": 513,
                              "end": 518,
                              "name": "Error",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 519,
                                "end": 540,
                                "callee": {
                                  "type": "Identifier",
                                  "start": 519,
                                  "end": 525,
                                  "name": "String",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 526,
                                    "end": 539,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 526,
                                      "end": 532,
                                      "name": "result",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 533,
                                      "end": 539,
                                      "name": "reason",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "computed": false,
                                    "optional": false
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            ],
                            "typeArguments": null
                          }
                        ]
                      }
                    },
                    "typeParameters": null,
                    "returnType": null
                  }
                ],
                "optional": false,
                "typeArguments": null
              },
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 551,
                "end": 618,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 554,
                  "end": 566,
                  "name": {
                    "type": "Identifier",
                    "start": 554,
                    "end": 555,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 559,
                    "end": 566,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 565,
                      "end": 566,
                      "typeName": {
                        "type": "Identifier",
                        "start": 565,
                        "end": 566,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 569,
                  "end": 616,
                  "types": [
                    {
                      "type": "TSTupleType",
                      "start": 569,
                      "end": 595,
                      "elementTypes": [
                        {
                          "type": "TSTypeReference",
                          "start": 570,
                          "end": 583,
                          "typeName": {
                            "type": "Identifier",
                            "start": 570,
                            "end": 577,
                            "name": "Awaited",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 577,
                            "end": 583,
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "start": 578,
                                "end": 582,
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 578,
                                  "end": 579,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 578,
                                    "end": 579,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                },
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "start": 580,
                                  "end": 581,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 580,
                                    "end": 581,
                                    "name": "K",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 585,
                          "end": 594
                        }
                      ]
                    },
                    {
                      "type": "TSTupleType",
                      "start": 598,
                      "end": 616,
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 599,
                          "end": 608
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 610,
                          "end": 615,
                          "typeName": {
                            "type": "Identifier",
                            "start": 610,
                            "end": 615,
                            "name": "Error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    }
                  ]
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 559,
                  "end": 566,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 565,
                    "end": 566,
                    "typeName": {
                      "type": "Identifier",
                      "start": 565,
                      "end": 566,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 555,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 289,
        "end": 319,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 290,
            "end": 318,
            "name": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 300,
              "end": 318,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 309,
                "end": 318,
                "elementType": {
                  "type": "TSUnknownKeyword",
                  "start": 309,
                  "end": 316
                }
              }
            },
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
      "type": "FunctionDeclaration",
      "start": 623,
      "end": 794,
      "id": {
        "type": "Identifier",
        "start": 638,
        "end": 643,
        "name": "test3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 646,
        "end": 794,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 650,
            "end": 761,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 656,
                "end": 760,
                "id": {
                  "type": "ArrayPattern",
                  "start": 656,
                  "end": 674,
                  "elements": [
                    {
                      "type": "ArrayPattern",
                      "start": 657,
                      "end": 670,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 658,
                          "end": 660,
                          "name": "p1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 662,
                          "end": 669,
                          "name": "p1Error",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "name": "_",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 677,
                  "end": 760,
                  "argument": {
                    "type": "CallExpression",
                    "start": 683,
                    "end": 760,
                    "callee": {
                      "type": "Identifier",
                      "start": 683,
                      "end": 695,
                      "name": "myAllSettled",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 701,
                        "end": 755,
                        "id": null,
                        "expression": true,
                        "generator": false,
                        "async": false,
                        "params": [],
                        "body": {
                          "type": "TSAsExpression",
                          "start": 707,
                          "end": 755,
                          "expression": {
                            "type": "ArrayExpression",
                            "start": 707,
                            "end": 746,
                            "elements": [
                              {
                                "type": "CallExpression",
                                "start": 708,
                                "end": 726,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 708,
                                  "end": 723,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 708,
                                    "end": 715,
                                    "name": "Promise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 716,
                                    "end": 723,
                                    "name": "resolve",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 724,
                                    "end": 725,
                                    "value": 0,
                                    "raw": "0"
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              },
                              {
                                "type": "CallExpression",
                                "start": 728,
                                "end": 745,
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 728,
                                  "end": 742,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 728,
                                    "end": 735,
                                    "name": "Promise",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "start": 736,
                                    "end": 742,
                                    "name": "reject",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 743,
                                    "end": 744,
                                    "value": 1,
                                    "raw": "1"
                                  }
                                ],
                                "optional": false,
                                "typeArguments": null
                              }
                            ]
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 750,
                            "end": 755,
                            "typeName": {
                              "type": "Identifier",
                              "start": 750,
                              "end": 755,
                              "name": "const",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        },
                        "typeParameters": null,
                        "returnType": null
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  }
                },
                "definite": false
              }
            ],
            "kind": "const",
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 765,
            "end": 785,
            "test": {
              "type": "Identifier",
              "start": 769,
              "end": 776,
              "name": "p1Error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 778,
              "end": 785,
              "argument": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 789,
            "end": 792,
            "expression": {
              "type": "Identifier",
              "start": 789,
              "end": 791,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 796,
      "end": 962,
      "id": {
        "type": "Identifier",
        "start": 805,
        "end": 810,
        "name": "test4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "ArrayPattern",
          "start": 811,
          "end": 870,
          "elements": [
            {
              "type": "ArrayPattern",
              "start": 812,
              "end": 825,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 813,
                  "end": 815,
                  "name": "p1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 817,
                  "end": 824,
                  "name": "p1Error",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 826,
            "end": 870,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 828,
              "end": 870,
              "elementTypes": [
                {
                  "type": "TSUnionType",
                  "start": 829,
                  "end": 869,
                  "types": [
                    {
                      "type": "TSTupleType",
                      "start": 829,
                      "end": 847,
                      "elementTypes": [
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 830,
                          "end": 839
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 841,
                          "end": 846,
                          "typeName": {
                            "type": "Identifier",
                            "start": 841,
                            "end": 846,
                            "name": "Error",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      ]
                    },
                    {
                      "type": "TSTupleType",
                      "start": 850,
                      "end": 869,
                      "elementTypes": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 851,
                          "end": 857
                        },
                        {
                          "type": "TSUndefinedKeyword",
                          "start": 859,
                          "end": 868
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 872,
        "end": 962,
        "body": [
          {
            "type": "IfStatement",
            "start": 876,
            "end": 920,
            "test": {
              "type": "CallExpression",
              "start": 880,
              "end": 893,
              "callee": {
                "type": "MemberExpression",
                "start": 880,
                "end": 891,
                "object": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 884,
                  "name": "Math",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 885,
                  "end": 891,
                  "name": "random",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 895,
              "end": 920,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 901,
                  "end": 916,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 901,
                    "end": 915,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 901,
                      "end": 903,
                      "name": "p1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 906,
                      "end": 915,
                      "name": "undefined",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 923,
            "end": 953,
            "test": {
              "type": "Identifier",
              "start": 927,
              "end": 934,
              "name": "p1Error",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 936,
              "end": 953,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 942,
                  "end": 949,
                  "argument": null
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 957,
            "end": 960,
            "expression": {
              "type": "Identifier",
              "start": 957,
              "end": 959,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
