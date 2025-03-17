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
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 74,
                  "end": 89,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "ArrayPattern",
                      "start": 75,
                      "end": 88,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 76,
                          "end": 78,
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 80,
                          "end": 87,
                          "decorators": [],
                          "name": "p1Error",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 92,
                  "end": 95,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 100,
            "end": 130,
            "alternate": null,
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
            "test": {
              "type": "Identifier",
              "start": 104,
              "end": 111,
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 134,
            "end": 137,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 134,
              "end": 136,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 15,
          "end": 62,
          "decorators": [],
          "name": "arg",
          "optional": false,
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 33,
                            "end": 38,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 141,
      "end": 260,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 260,
        "body": [
          {
            "type": "IfStatement",
            "start": 221,
            "end": 251,
            "alternate": null,
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
            "test": {
              "type": "Identifier",
              "start": 225,
              "end": 232,
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 255,
            "end": 258,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 255,
              "end": 257,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 155,
        "decorators": [],
        "name": "test2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 156,
          "end": 215,
          "decorators": [],
          "elements": [
            {
              "type": "ArrayPattern",
              "start": 157,
              "end": 170,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 160,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 162,
                  "end": 169,
                  "decorators": [],
                  "name": "p1Error",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 186,
                            "end": 191,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 262,
      "end": 621,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 343,
                  "end": 351,
                  "decorators": [],
                  "name": "promises",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "AwaitExpression",
                  "start": 354,
                  "end": 384,
                  "argument": {
                    "type": "CallExpression",
                    "start": 360,
                    "end": 384,
                    "arguments": [
                      {
                        "type": "CallExpression",
                        "start": 379,
                        "end": 383,
                        "arguments": [],
                        "callee": {
                          "type": "Identifier",
                          "start": 379,
                          "end": 381,
                          "decorators": [],
                          "name": "fn",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 360,
                      "end": 378,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 360,
                        "end": 367,
                        "decorators": [],
                        "name": "Promise",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 368,
                        "end": 378,
                        "decorators": [],
                        "name": "allSettled",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
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
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 409,
                    "end": 542,
                    "async": false,
                    "body": {
                      "type": "ConditionalExpression",
                      "start": 425,
                      "end": 542,
                      "alternate": {
                        "type": "ArrayExpression",
                        "start": 497,
                        "end": 542,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 498,
                            "end": 507,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "NewExpression",
                            "start": 509,
                            "end": 541,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "start": 519,
                                "end": 540,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "start": 526,
                                    "end": 539,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 526,
                                      "end": 532,
                                      "decorators": [],
                                      "name": "result",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 533,
                                      "end": 539,
                                      "decorators": [],
                                      "name": "reason",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ],
                                "callee": {
                                  "type": "Identifier",
                                  "start": 519,
                                  "end": 525,
                                  "decorators": [],
                                  "name": "String",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 513,
                              "end": 518,
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
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
                            "computed": false,
                            "object": {
                              "type": "Identifier",
                              "start": 464,
                              "end": 470,
                              "decorators": [],
                              "name": "result",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "property": {
                              "type": "Identifier",
                              "start": 471,
                              "end": 476,
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "Identifier",
                            "start": 478,
                            "end": 487,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 425,
                        "end": 454,
                        "operator": "===",
                        "left": {
                          "type": "MemberExpression",
                          "start": 425,
                          "end": 438,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 425,
                            "end": 431,
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 432,
                            "end": 438,
                            "decorators": [],
                            "name": "status",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 443,
                          "end": 454,
                          "raw": "\"fulfilled\"",
                          "value": "fulfilled"
                        }
                      }
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 410,
                        "end": 416,
                        "decorators": [],
                        "name": "result",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "returnType": null,
                    "typeParameters": null
                  }
                ],
                "callee": {
                  "type": "MemberExpression",
                  "start": 396,
                  "end": 408,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 396,
                    "end": 404,
                    "decorators": [],
                    "name": "promises",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 408,
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "optional": false,
                "typeArguments": null
              },
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 551,
                "end": 618,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 559,
                  "end": 566,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 565,
                    "end": 566,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 565,
                      "end": 566,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 554,
                  "end": 555,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": null,
                "readonly": null,
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
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 577,
                            "end": 583,
                            "params": [
                              {
                                "type": "TSIndexedAccessType",
                                "start": 578,
                                "end": 582,
                                "indexType": {
                                  "type": "TSTypeReference",
                                  "start": 580,
                                  "end": 581,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 580,
                                    "end": 581,
                                    "decorators": [],
                                    "name": "K",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "objectType": {
                                  "type": "TSTypeReference",
                                  "start": 578,
                                  "end": 579,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 578,
                                    "end": 579,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            ]
                          },
                          "typeName": {
                            "type": "Identifier",
                            "start": 570,
                            "end": 577,
                            "decorators": [],
                            "name": "Awaited",
                            "optional": false,
                            "typeAnnotation": null
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 610,
                            "end": 615,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    }
                  ]
                }
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
        "start": 277,
        "end": 289,
        "decorators": [],
        "name": "myAllSettled",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 320,
          "end": 331,
          "decorators": [],
          "name": "fn",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 322,
            "end": 331,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 324,
              "end": 331,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 327,
                "end": 331,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 330,
                  "end": 331,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 330,
                    "end": 331,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 289,
        "end": 319,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 290,
            "end": 318,
            "const": false,
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
            "name": {
              "type": "Identifier",
              "start": 290,
              "end": 291,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 623,
      "end": 794,
      "async": true,
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
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 656,
                  "end": 674,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "ArrayPattern",
                      "start": 657,
                      "end": 670,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 658,
                          "end": 660,
                          "decorators": [],
                          "name": "p1",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 662,
                          "end": 669,
                          "decorators": [],
                          "name": "p1Error",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "decorators": [],
                      "name": "_",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
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
                    "arguments": [
                      {
                        "type": "ArrowFunctionExpression",
                        "start": 701,
                        "end": 755,
                        "async": false,
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
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 724,
                                    "end": 725,
                                    "raw": "0",
                                    "value": 0
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 708,
                                  "end": 723,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 708,
                                    "end": 715,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 716,
                                    "end": 723,
                                    "decorators": [],
                                    "name": "resolve",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              },
                              {
                                "type": "CallExpression",
                                "start": 728,
                                "end": 745,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "start": 743,
                                    "end": 744,
                                    "raw": "1",
                                    "value": 1
                                  }
                                ],
                                "callee": {
                                  "type": "MemberExpression",
                                  "start": 728,
                                  "end": 742,
                                  "computed": false,
                                  "object": {
                                    "type": "Identifier",
                                    "start": 728,
                                    "end": 735,
                                    "decorators": [],
                                    "name": "Promise",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "Identifier",
                                    "start": 736,
                                    "end": 742,
                                    "decorators": [],
                                    "name": "reject",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                },
                                "optional": false,
                                "typeArguments": null
                              }
                            ]
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 750,
                            "end": 755,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 750,
                              "end": 755,
                              "decorators": [],
                              "name": "const",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": [],
                        "returnType": null,
                        "typeParameters": null
                      }
                    ],
                    "callee": {
                      "type": "Identifier",
                      "start": 683,
                      "end": 695,
                      "decorators": [],
                      "name": "myAllSettled",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          },
          {
            "type": "IfStatement",
            "start": 765,
            "end": 785,
            "alternate": null,
            "consequent": {
              "type": "ReturnStatement",
              "start": 778,
              "end": 785,
              "argument": null
            },
            "test": {
              "type": "Identifier",
              "start": 769,
              "end": 776,
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 789,
            "end": 792,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 789,
              "end": 791,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 638,
        "end": 643,
        "decorators": [],
        "name": "test3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 796,
      "end": 962,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 872,
        "end": 962,
        "body": [
          {
            "type": "IfStatement",
            "start": 876,
            "end": 920,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 895,
              "end": 920,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 901,
                  "end": 916,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 901,
                    "end": 915,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 901,
                      "end": 903,
                      "decorators": [],
                      "name": "p1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 906,
                      "end": 915,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "CallExpression",
              "start": 880,
              "end": 893,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 880,
                "end": 891,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 880,
                  "end": 884,
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 885,
                  "end": 891,
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            }
          },
          {
            "type": "IfStatement",
            "start": 923,
            "end": 953,
            "alternate": null,
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
            "test": {
              "type": "Identifier",
              "start": 927,
              "end": 934,
              "decorators": [],
              "name": "p1Error",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 957,
            "end": 960,
            "directive": null,
            "expression": {
              "type": "Identifier",
              "start": 957,
              "end": 959,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
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
        "end": 810,
        "decorators": [],
        "name": "test4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "ArrayPattern",
          "start": 811,
          "end": 870,
          "decorators": [],
          "elements": [
            {
              "type": "ArrayPattern",
              "start": 812,
              "end": 825,
              "decorators": [],
              "elements": [
                {
                  "type": "Identifier",
                  "start": 813,
                  "end": 815,
                  "decorators": [],
                  "name": "p1",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 817,
                  "end": 824,
                  "decorators": [],
                  "name": "p1Error",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false,
              "typeAnnotation": null
            }
          ],
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
                          "typeArguments": null,
                          "typeName": {
                            "type": "Identifier",
                            "start": 841,
                            "end": 846,
                            "decorators": [],
                            "name": "Error",
                            "optional": false,
                            "typeAnnotation": null
                          }
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
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
