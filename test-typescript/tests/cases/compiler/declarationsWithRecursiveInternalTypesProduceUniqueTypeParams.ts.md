__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 295,
  "end": 1449,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 295,
      "end": 324,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 302,
        "end": 324,
        "id": {
          "type": "Identifier",
          "start": 307,
          "end": 310,
          "name": "Key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 310,
          "end": 313,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 311,
              "end": 312,
              "name": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
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
        "typeAnnotation": {
          "type": "TSTypeOperator",
          "start": 316,
          "end": 323,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 322,
            "end": 323,
            "typeName": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 325,
      "end": 371,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 332,
        "end": 371,
        "id": {
          "type": "Identifier",
          "start": 337,
          "end": 342,
          "name": "Value",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 342,
          "end": 363,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 343,
              "end": 359,
              "name": {
                "type": "Identifier",
                "start": 343,
                "end": 344,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 353,
                "end": 359,
                "typeName": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 356,
                  "name": "Key",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 356,
                  "end": 359,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 357,
                      "end": 358,
                      "typeName": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 358,
                        "name": "U",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 361,
              "end": 362,
              "name": {
                "type": "Identifier",
                "start": 361,
                "end": 362,
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
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 366,
          "end": 370,
          "objectType": {
            "type": "TSTypeReference",
            "start": 366,
            "end": 367,
            "typeName": {
              "type": "Identifier",
              "start": 366,
              "end": 367,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 368,
            "end": 369,
            "typeName": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 372,
      "end": 941,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 379,
        "end": 941,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 385,
            "end": 940,
            "id": {
              "type": "Identifier",
              "start": 385,
              "end": 400,
              "name": "updateIfChanged",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 403,
              "end": 940,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 407,
                  "end": 411,
                  "name": "t",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 408,
                    "end": 411,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 410,
                      "end": 411,
                      "typeName": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 411,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 416,
                "end": 940,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 422,
                    "end": 900,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 428,
                        "end": 899,
                        "id": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 434,
                          "name": "reduce",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 437,
                          "end": 899,
                          "id": null,
                          "expression": false,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 441,
                              "end": 445,
                              "name": "u",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 442,
                                "end": 445,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 444,
                                  "end": 445,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 444,
                                    "end": 445,
                                    "name": "U",
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
                            {
                              "type": "Identifier",
                              "start": 447,
                              "end": 466,
                              "name": "update",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 453,
                                "end": 466,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "start": 455,
                                  "end": 466,
                                  "typeParameters": null,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 456,
                                      "end": 460,
                                      "name": "u",
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 457,
                                        "end": 460,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 459,
                                          "end": 460,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 459,
                                            "end": 460,
                                            "name": "U",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        }
                                      },
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "returnType": {
                                    "type": "TSTypeAnnotation",
                                    "start": 462,
                                    "end": 466,
                                    "typeAnnotation": {
                                      "type": "TSTypeReference",
                                      "start": 465,
                                      "end": 466,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 465,
                                        "end": 466,
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
                            "start": 471,
                            "end": 899,
                            "body": [
                              {
                                "type": "VariableDeclaration",
                                "start": 481,
                                "end": 544,
                                "declarations": [
                                  {
                                    "type": "VariableDeclarator",
                                    "start": 487,
                                    "end": 543,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 487,
                                      "end": 490,
                                      "name": "set",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 493,
                                      "end": 543,
                                      "id": null,
                                      "expression": true,
                                      "generator": false,
                                      "async": false,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 494,
                                          "end": 501,
                                          "name": "newU",
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 498,
                                            "end": 501,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 500,
                                              "end": 501,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 500,
                                                "end": 501,
                                                "name": "U",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": null
                                            }
                                          },
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "body": {
                                        "type": "ConditionalExpression",
                                        "start": 506,
                                        "end": 543,
                                        "test": {
                                          "type": "CallExpression",
                                          "start": 506,
                                          "end": 524,
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 506,
                                            "end": 515,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 506,
                                              "end": 512,
                                              "name": "Object",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "start": 513,
                                              "end": 515,
                                              "name": "is",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "computed": false,
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 516,
                                              "end": 517,
                                              "name": "u",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            {
                                              "type": "Identifier",
                                              "start": 519,
                                              "end": 523,
                                              "name": "newU",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        },
                                        "consequent": {
                                          "type": "Identifier",
                                          "start": 527,
                                          "end": 528,
                                          "name": "t",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "alternate": {
                                          "type": "CallExpression",
                                          "start": 531,
                                          "end": 543,
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 531,
                                            "end": 537,
                                            "name": "update",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 538,
                                              "end": 542,
                                              "name": "newU",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            }
                                          ],
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      },
                                      "typeParameters": null,
                                      "returnType": null
                                    },
                                    "definite": false
                                  }
                                ],
                                "kind": "const",
                                "declare": false
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 553,
                                "end": 893,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 560,
                                  "end": 892,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 560,
                                    "end": 573,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 560,
                                      "end": 566,
                                      "name": "Object",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 567,
                                      "end": 573,
                                      "name": "assign",
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
                                      "start": 587,
                                      "end": 822,
                                      "id": null,
                                      "expression": true,
                                      "generator": false,
                                      "async": false,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 606,
                                          "end": 612,
                                          "name": "key",
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 609,
                                            "end": 612,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 611,
                                              "end": 612,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 611,
                                                "end": 612,
                                                "name": "K",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": null
                                            }
                                          },
                                          "decorators": [],
                                          "optional": false
                                        }
                                      ],
                                      "body": {
                                        "type": "CallExpression",
                                        "start": 633,
                                        "end": 822,
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 633,
                                          "end": 639,
                                          "name": "reduce",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "type": "TSAsExpression",
                                            "start": 653,
                                            "end": 685,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 653,
                                              "end": 670,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 653,
                                                "end": 654,
                                                "name": "u",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "TSAsExpression",
                                                "start": 655,
                                                "end": 669,
                                                "expression": {
                                                  "type": "Identifier",
                                                  "start": 655,
                                                  "end": 658,
                                                  "name": "key",
                                                  "typeAnnotation": null,
                                                  "decorators": [],
                                                  "optional": false
                                                },
                                                "typeAnnotation": {
                                                  "type": "TSTypeOperator",
                                                  "start": 662,
                                                  "end": 669,
                                                  "operator": "keyof",
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 668,
                                                    "end": 669,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 668,
                                                      "end": 669,
                                                      "name": "U",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  }
                                                }
                                              },
                                              "computed": true,
                                              "optional": false
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 674,
                                              "end": 685,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 674,
                                                "end": 679,
                                                "name": "Value",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "start": 679,
                                                "end": 685,
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "start": 680,
                                                    "end": 681,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 680,
                                                      "end": 681,
                                                      "name": "K",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "start": 683,
                                                    "end": 684,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 683,
                                                      "end": 684,
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
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "start": 687,
                                            "end": 821,
                                            "id": null,
                                            "expression": false,
                                            "generator": false,
                                            "async": false,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 688,
                                                "end": 702,
                                                "name": "v",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 689,
                                                  "end": 702,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 691,
                                                    "end": 702,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 691,
                                                      "end": 696,
                                                      "name": "Value",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": {
                                                      "type": "TSTypeParameterInstantiation",
                                                      "start": 696,
                                                      "end": 702,
                                                      "params": [
                                                        {
                                                          "type": "TSTypeReference",
                                                          "start": 697,
                                                          "end": 698,
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "start": 697,
                                                            "end": 698,
                                                            "name": "K",
                                                            "typeAnnotation": null,
                                                            "decorators": [],
                                                            "optional": false
                                                          },
                                                          "typeArguments": null
                                                        },
                                                        {
                                                          "type": "TSTypeReference",
                                                          "start": 700,
                                                          "end": 701,
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "start": 700,
                                                            "end": 701,
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
                                              "start": 707,
                                              "end": 821,
                                              "body": [
                                                {
                                                  "type": "ReturnStatement",
                                                  "start": 729,
                                                  "end": 803,
                                                  "argument": {
                                                    "type": "CallExpression",
                                                    "start": 736,
                                                    "end": 802,
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "start": 736,
                                                      "end": 742,
                                                      "name": "update",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "arguments": [
                                                      {
                                                        "type": "CallExpression",
                                                        "start": 743,
                                                        "end": 801,
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "start": 743,
                                                          "end": 756,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "start": 743,
                                                            "end": 749,
                                                            "name": "Object",
                                                            "typeAnnotation": null,
                                                            "decorators": [],
                                                            "optional": false
                                                          },
                                                          "property": {
                                                            "type": "Identifier",
                                                            "start": 750,
                                                            "end": 756,
                                                            "name": "assign",
                                                            "typeAnnotation": null,
                                                            "decorators": [],
                                                            "optional": false
                                                          },
                                                          "computed": false,
                                                          "optional": false
                                                        },
                                                        "arguments": [
                                                          {
                                                            "type": "ConditionalExpression",
                                                            "start": 757,
                                                            "end": 783,
                                                            "test": {
                                                              "type": "CallExpression",
                                                              "start": 757,
                                                              "end": 773,
                                                              "callee": {
                                                                "type": "MemberExpression",
                                                                "start": 757,
                                                                "end": 770,
                                                                "object": {
                                                                  "type": "Identifier",
                                                                  "start": 757,
                                                                  "end": 762,
                                                                  "name": "Array",
                                                                  "typeAnnotation": null,
                                                                  "decorators": [],
                                                                  "optional": false
                                                                },
                                                                "property": {
                                                                  "type": "Identifier",
                                                                  "start": 763,
                                                                  "end": 770,
                                                                  "name": "isArray",
                                                                  "typeAnnotation": null,
                                                                  "decorators": [],
                                                                  "optional": false
                                                                },
                                                                "computed": false,
                                                                "optional": false
                                                              },
                                                              "arguments": [
                                                                {
                                                                  "type": "Identifier",
                                                                  "start": 771,
                                                                  "end": 772,
                                                                  "name": "u",
                                                                  "typeAnnotation": null,
                                                                  "decorators": [],
                                                                  "optional": false
                                                                }
                                                              ],
                                                              "optional": false,
                                                              "typeArguments": null
                                                            },
                                                            "consequent": {
                                                              "type": "ArrayExpression",
                                                              "start": 776,
                                                              "end": 778,
                                                              "elements": []
                                                            },
                                                            "alternate": {
                                                              "type": "ObjectExpression",
                                                              "start": 781,
                                                              "end": 783,
                                                              "properties": []
                                                            }
                                                          },
                                                          {
                                                            "type": "Identifier",
                                                            "start": 785,
                                                            "end": 786,
                                                            "name": "u",
                                                            "typeAnnotation": null,
                                                            "decorators": [],
                                                            "optional": false
                                                          },
                                                          {
                                                            "type": "ObjectExpression",
                                                            "start": 788,
                                                            "end": 800,
                                                            "properties": [
                                                              {
                                                                "type": "Property",
                                                                "start": 790,
                                                                "end": 798,
                                                                "method": false,
                                                                "shorthand": false,
                                                                "computed": true,
                                                                "key": {
                                                                  "type": "Identifier",
                                                                  "start": 791,
                                                                  "end": 794,
                                                                  "name": "key",
                                                                  "typeAnnotation": null,
                                                                  "decorators": [],
                                                                  "optional": false
                                                                },
                                                                "value": {
                                                                  "type": "Identifier",
                                                                  "start": 797,
                                                                  "end": 798,
                                                                  "name": "v",
                                                                  "typeAnnotation": null,
                                                                  "decorators": [],
                                                                  "optional": false
                                                                },
                                                                "kind": "init",
                                                                "optional": false
                                                              }
                                                            ]
                                                          }
                                                        ],
                                                        "optional": false,
                                                        "typeArguments": null
                                                      }
                                                    ],
                                                    "optional": false,
                                                    "typeArguments": null
                                                  }
                                                }
                                              ]
                                            },
                                            "typeParameters": null,
                                            "returnType": null
                                          }
                                        ],
                                        "optional": false,
                                        "typeArguments": {
                                          "type": "TSTypeParameterInstantiation",
                                          "start": 639,
                                          "end": 652,
                                          "params": [
                                            {
                                              "type": "TSTypeReference",
                                              "start": 640,
                                              "end": 651,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 640,
                                                "end": 645,
                                                "name": "Value",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "start": 645,
                                                "end": 651,
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "start": 646,
                                                    "end": 647,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 646,
                                                      "end": 647,
                                                      "name": "K",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "start": 649,
                                                    "end": 650,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 649,
                                                      "end": 650,
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
                                          ]
                                        }
                                      },
                                      "typeParameters": {
                                        "type": "TSTypeParameterDeclaration",
                                        "start": 587,
                                        "end": 605,
                                        "params": [
                                          {
                                            "type": "TSTypeParameter",
                                            "start": 588,
                                            "end": 604,
                                            "name": {
                                              "type": "Identifier",
                                              "start": 588,
                                              "end": 589,
                                              "name": "K",
                                              "typeAnnotation": null,
                                              "decorators": [],
                                              "optional": false
                                            },
                                            "constraint": {
                                              "type": "TSTypeReference",
                                              "start": 598,
                                              "end": 604,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 598,
                                                "end": 601,
                                                "name": "Key",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "start": 601,
                                                "end": 604,
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "start": 602,
                                                    "end": 603,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 602,
                                                      "end": 603,
                                                      "name": "U",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    },
                                                    "typeArguments": null
                                                  }
                                                ]
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
                                      "type": "ObjectExpression",
                                      "start": 836,
                                      "end": 891,
                                      "properties": [
                                        {
                                          "type": "Property",
                                          "start": 838,
                                          "end": 884,
                                          "method": false,
                                          "shorthand": false,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 838,
                                            "end": 841,
                                            "name": "map",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "ArrowFunctionExpression",
                                            "start": 843,
                                            "end": 884,
                                            "id": null,
                                            "expression": true,
                                            "generator": false,
                                            "async": false,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 844,
                                                "end": 864,
                                                "name": "updater",
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 851,
                                                  "end": 864,
                                                  "typeAnnotation": {
                                                    "type": "TSFunctionType",
                                                    "start": 853,
                                                    "end": 864,
                                                    "typeParameters": null,
                                                    "params": [
                                                      {
                                                        "type": "Identifier",
                                                        "start": 854,
                                                        "end": 858,
                                                        "name": "u",
                                                        "typeAnnotation": {
                                                          "type": "TSTypeAnnotation",
                                                          "start": 855,
                                                          "end": 858,
                                                          "typeAnnotation": {
                                                            "type": "TSTypeReference",
                                                            "start": 857,
                                                            "end": 858,
                                                            "typeName": {
                                                              "type": "Identifier",
                                                              "start": 857,
                                                              "end": 858,
                                                              "name": "U",
                                                              "typeAnnotation": null,
                                                              "decorators": [],
                                                              "optional": false
                                                            },
                                                            "typeArguments": null
                                                          }
                                                        },
                                                        "decorators": [],
                                                        "optional": false
                                                      }
                                                    ],
                                                    "returnType": {
                                                      "type": "TSTypeAnnotation",
                                                      "start": 860,
                                                      "end": 864,
                                                      "typeAnnotation": {
                                                        "type": "TSTypeReference",
                                                        "start": 863,
                                                        "end": 864,
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "start": 863,
                                                          "end": 864,
                                                          "name": "U",
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
                                              "type": "CallExpression",
                                              "start": 869,
                                              "end": 884,
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 869,
                                                "end": 872,
                                                "name": "set",
                                                "typeAnnotation": null,
                                                "decorators": [],
                                                "optional": false
                                              },
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "start": 873,
                                                  "end": 883,
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "start": 873,
                                                    "end": 880,
                                                    "name": "updater",
                                                    "typeAnnotation": null,
                                                    "decorators": [],
                                                    "optional": false
                                                  },
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "start": 881,
                                                      "end": 882,
                                                      "name": "u",
                                                      "typeAnnotation": null,
                                                      "decorators": [],
                                                      "optional": false
                                                    }
                                                  ],
                                                  "optional": false,
                                                  "typeArguments": null
                                                }
                                              ],
                                              "optional": false,
                                              "typeArguments": null
                                            },
                                            "typeParameters": null,
                                            "returnType": null
                                          },
                                          "kind": "init",
                                          "optional": false
                                        },
                                        {
                                          "type": "Property",
                                          "start": 886,
                                          "end": 889,
                                          "method": false,
                                          "shorthand": true,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 886,
                                            "end": 889,
                                            "name": "set",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "value": {
                                            "type": "Identifier",
                                            "start": 886,
                                            "end": 889,
                                            "name": "set",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "kind": "init",
                                          "optional": false
                                        }
                                      ]
                                    }
                                  ],
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "typeParameters": {
                            "type": "TSTypeParameterDeclaration",
                            "start": 437,
                            "end": 440,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 438,
                                "end": 439,
                                "name": {
                                  "type": "Identifier",
                                  "start": 438,
                                  "end": 439,
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
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 905,
                    "end": 938,
                    "argument": {
                      "type": "CallExpression",
                      "start": 912,
                      "end": 937,
                      "callee": {
                        "type": "Identifier",
                        "start": 912,
                        "end": 918,
                        "name": "reduce",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 922,
                          "end": 923,
                          "name": "t",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 925,
                          "end": 936,
                          "id": null,
                          "expression": true,
                          "generator": false,
                          "async": false,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 926,
                              "end": 930,
                              "name": "t",
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 927,
                                "end": 930,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 929,
                                  "end": 930,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 929,
                                    "end": 930,
                                    "name": "T",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "typeArguments": null
                                }
                              },
                              "decorators": [],
                              "optional": false
                            }
                          ],
                          "body": {
                            "type": "Identifier",
                            "start": 935,
                            "end": 936,
                            "name": "t",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeParameters": null,
                          "returnType": null
                        }
                      ],
                      "optional": false,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 918,
                        "end": 921,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 919,
                            "end": 920,
                            "typeName": {
                              "type": "Identifier",
                              "start": 919,
                              "end": 920,
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
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 403,
                "end": 406,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 404,
                    "end": 405,
                    "name": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
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
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1013,
      "end": 1222,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1020,
        "end": 1222,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1026,
            "end": 1222,
            "id": {
              "type": "Identifier",
              "start": 1026,
              "end": 1036,
              "name": "testRecFun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 1039,
              "end": 1222,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1058,
                  "end": 1067,
                  "name": "parent",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1064,
                    "end": 1067,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1066,
                      "end": 1067,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1066,
                        "end": 1067,
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 1072,
                "end": 1222,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1078,
                    "end": 1220,
                    "argument": {
                      "type": "ObjectExpression",
                      "start": 1085,
                      "end": 1219,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 1095,
                          "end": 1109,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1095,
                            "end": 1101,
                            "name": "result",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 1103,
                            "end": 1109,
                            "name": "parent",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 1119,
                          "end": 1213,
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1119,
                            "end": 1125,
                            "name": "deeper",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 1127,
                            "end": 1213,
                            "id": null,
                            "expression": true,
                            "generator": false,
                            "async": false,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1146,
                                "end": 1154,
                                "name": "child",
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1151,
                                  "end": 1154,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1153,
                                    "end": 1154,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1153,
                                      "end": 1154,
                                      "name": "U",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "typeArguments": null
                                  }
                                },
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "body": {
                              "type": "CallExpression",
                              "start": 1171,
                              "end": 1213,
                              "callee": {
                                "type": "Identifier",
                                "start": 1171,
                                "end": 1181,
                                "name": "testRecFun",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "arguments": [
                                {
                                  "type": "ObjectExpression",
                                  "start": 1189,
                                  "end": 1212,
                                  "properties": [
                                    {
                                      "type": "SpreadElement",
                                      "start": 1191,
                                      "end": 1200,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 1194,
                                        "end": 1200,
                                        "name": "parent",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    },
                                    {
                                      "type": "SpreadElement",
                                      "start": 1202,
                                      "end": 1210,
                                      "argument": {
                                        "type": "Identifier",
                                        "start": 1205,
                                        "end": 1210,
                                        "name": "child",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    }
                                  ]
                                }
                              ],
                              "optional": false,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 1181,
                                "end": 1188,
                                "params": [
                                  {
                                    "type": "TSIntersectionType",
                                    "start": 1182,
                                    "end": 1187,
                                    "types": [
                                      {
                                        "type": "TSTypeReference",
                                        "start": 1182,
                                        "end": 1183,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1182,
                                          "end": 1183,
                                          "name": "T",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 1186,
                                        "end": 1187,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1186,
                                          "end": 1187,
                                          "name": "U",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "typeArguments": null
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1127,
                              "end": 1145,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1128,
                                  "end": 1144,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1128,
                                    "end": 1129,
                                    "name": "U",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1138,
                                    "end": 1144,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1138,
                                      "end": 1144,
                                      "name": "Object",
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
                          },
                          "kind": "init",
                          "optional": false
                        }
                      ]
                    }
                  }
                ]
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1039,
                "end": 1057,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1040,
                    "end": 1056,
                    "name": {
                      "type": "Identifier",
                      "start": 1040,
                      "end": 1041,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1050,
                      "end": 1056,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1050,
                        "end": 1056,
                        "name": "Object",
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
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 1225,
      "end": 1258,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1229,
          "end": 1258,
          "id": {
            "type": "Identifier",
            "start": 1229,
            "end": 1231,
            "name": "p1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1234,
            "end": 1258,
            "callee": {
              "type": "Identifier",
              "start": 1234,
              "end": 1244,
              "name": "testRecFun",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1245,
                "end": 1257,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1247,
                    "end": 1255,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1247,
                      "end": 1250,
                      "name": "one",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1252,
                      "end": 1255,
                      "value": "1",
                      "raw": "'1'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1259,
      "end": 1278,
      "expression": {
        "type": "UnaryExpression",
        "start": 1259,
        "end": 1277,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1264,
          "end": 1277,
          "object": {
            "type": "MemberExpression",
            "start": 1264,
            "end": 1273,
            "object": {
              "type": "Identifier",
              "start": 1264,
              "end": 1266,
              "name": "p1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1267,
              "end": 1273,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1274,
            "end": 1277,
            "name": "one",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1279,
      "end": 1311,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1283,
          "end": 1311,
          "id": {
            "type": "Identifier",
            "start": 1283,
            "end": 1285,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1288,
            "end": 1311,
            "callee": {
              "type": "MemberExpression",
              "start": 1288,
              "end": 1297,
              "object": {
                "type": "Identifier",
                "start": 1288,
                "end": 1290,
                "name": "p1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1291,
                "end": 1297,
                "name": "deeper",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1298,
                "end": 1310,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1300,
                    "end": 1308,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1300,
                      "end": 1303,
                      "name": "two",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1305,
                      "end": 1308,
                      "value": "2",
                      "raw": "'2'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1312,
      "end": 1331,
      "expression": {
        "type": "UnaryExpression",
        "start": 1312,
        "end": 1330,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1317,
          "end": 1330,
          "object": {
            "type": "MemberExpression",
            "start": 1317,
            "end": 1326,
            "object": {
              "type": "Identifier",
              "start": 1317,
              "end": 1319,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1320,
              "end": 1326,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1327,
            "end": 1330,
            "name": "one",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1332,
      "end": 1351,
      "expression": {
        "type": "UnaryExpression",
        "start": 1332,
        "end": 1350,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1337,
          "end": 1350,
          "object": {
            "type": "MemberExpression",
            "start": 1337,
            "end": 1346,
            "object": {
              "type": "Identifier",
              "start": 1337,
              "end": 1339,
              "name": "p2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1340,
              "end": 1346,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1347,
            "end": 1350,
            "name": "two",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1352,
      "end": 1386,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1356,
          "end": 1386,
          "id": {
            "type": "Identifier",
            "start": 1356,
            "end": 1358,
            "name": "p3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 1361,
            "end": 1386,
            "callee": {
              "type": "MemberExpression",
              "start": 1361,
              "end": 1370,
              "object": {
                "type": "Identifier",
                "start": 1361,
                "end": 1363,
                "name": "p2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1364,
                "end": 1370,
                "name": "deeper",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 1371,
                "end": 1385,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1373,
                    "end": 1383,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1373,
                      "end": 1378,
                      "name": "three",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 1380,
                      "end": 1383,
                      "value": "3",
                      "raw": "'3'"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1387,
      "end": 1406,
      "expression": {
        "type": "UnaryExpression",
        "start": 1387,
        "end": 1405,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1392,
          "end": 1405,
          "object": {
            "type": "MemberExpression",
            "start": 1392,
            "end": 1401,
            "object": {
              "type": "Identifier",
              "start": 1392,
              "end": 1394,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1395,
              "end": 1401,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1402,
            "end": 1405,
            "name": "one",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1407,
      "end": 1426,
      "expression": {
        "type": "UnaryExpression",
        "start": 1407,
        "end": 1425,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1412,
          "end": 1425,
          "object": {
            "type": "MemberExpression",
            "start": 1412,
            "end": 1421,
            "object": {
              "type": "Identifier",
              "start": 1412,
              "end": 1414,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1415,
              "end": 1421,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1422,
            "end": 1425,
            "name": "two",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1427,
      "end": 1448,
      "expression": {
        "type": "UnaryExpression",
        "start": 1427,
        "end": 1447,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1432,
          "end": 1447,
          "object": {
            "type": "MemberExpression",
            "start": 1432,
            "end": 1441,
            "object": {
              "type": "Identifier",
              "start": 1432,
              "end": 1434,
              "name": "p3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1435,
              "end": 1441,
              "name": "result",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1442,
            "end": 1447,
            "name": "three",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
