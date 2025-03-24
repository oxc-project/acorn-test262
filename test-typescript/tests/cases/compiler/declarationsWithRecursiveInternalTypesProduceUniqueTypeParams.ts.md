__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 295,
  "end": 1448,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 295,
      "end": 324,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 302,
        "end": 324,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 307,
          "end": 310,
          "decorators": [],
          "name": "Key",
          "optional": false,
          "typeAnnotation": null
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
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 322,
              "end": 323,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
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
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 325,
      "end": 371,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 332,
        "end": 371,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 337,
          "end": 342,
          "decorators": [],
          "name": "Value",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 366,
          "end": 370,
          "indexType": {
            "type": "TSTypeReference",
            "start": 368,
            "end": 369,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 366,
            "end": 367,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 366,
              "end": 367,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            }
          }
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
              "const": false,
              "constraint": {
                "type": "TSTypeReference",
                "start": 353,
                "end": 359,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 356,
                  "end": 359,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 357,
                      "end": 358,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 357,
                        "end": 358,
                        "decorators": [],
                        "name": "U",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 353,
                  "end": 356,
                  "decorators": [],
                  "name": "Key",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 343,
                "end": 344,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 361,
              "end": 362,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 361,
                "end": 362,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 372,
      "end": 941,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 379,
        "end": 941,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 385,
            "end": 940,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 385,
              "end": 400,
              "decorators": [],
              "name": "updateIfChanged",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 403,
              "end": 940,
              "async": false,
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
                        "definite": false,
                        "id": {
                          "type": "Identifier",
                          "start": 428,
                          "end": 434,
                          "decorators": [],
                          "name": "reduce",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "ArrowFunctionExpression",
                          "start": 437,
                          "end": 899,
                          "async": false,
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
                                    "definite": false,
                                    "id": {
                                      "type": "Identifier",
                                      "start": 487,
                                      "end": 490,
                                      "decorators": [],
                                      "name": "set",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "init": {
                                      "type": "ArrowFunctionExpression",
                                      "start": 493,
                                      "end": 543,
                                      "async": false,
                                      "body": {
                                        "type": "ConditionalExpression",
                                        "start": 506,
                                        "end": 543,
                                        "alternate": {
                                          "type": "CallExpression",
                                          "start": 531,
                                          "end": 543,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 538,
                                              "end": 542,
                                              "decorators": [],
                                              "name": "newU",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "callee": {
                                            "type": "Identifier",
                                            "start": 531,
                                            "end": 537,
                                            "decorators": [],
                                            "name": "update",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "optional": false,
                                          "typeArguments": null
                                        },
                                        "consequent": {
                                          "type": "Identifier",
                                          "start": 527,
                                          "end": 528,
                                          "decorators": [],
                                          "name": "t",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "test": {
                                          "type": "CallExpression",
                                          "start": 506,
                                          "end": 524,
                                          "arguments": [
                                            {
                                              "type": "Identifier",
                                              "start": 516,
                                              "end": 517,
                                              "decorators": [],
                                              "name": "u",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            {
                                              "type": "Identifier",
                                              "start": 519,
                                              "end": 523,
                                              "decorators": [],
                                              "name": "newU",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          ],
                                          "callee": {
                                            "type": "MemberExpression",
                                            "start": 506,
                                            "end": 515,
                                            "computed": false,
                                            "object": {
                                              "type": "Identifier",
                                              "start": 506,
                                              "end": 512,
                                              "decorators": [],
                                              "name": "Object",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "optional": false,
                                            "property": {
                                              "type": "Identifier",
                                              "start": 513,
                                              "end": 515,
                                              "decorators": [],
                                              "name": "is",
                                              "optional": false,
                                              "typeAnnotation": null
                                            }
                                          },
                                          "optional": false,
                                          "typeArguments": null
                                        }
                                      },
                                      "expression": true,
                                      "generator": false,
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 494,
                                          "end": 501,
                                          "decorators": [],
                                          "name": "newU",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 498,
                                            "end": 501,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 500,
                                              "end": 501,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 500,
                                                "end": 501,
                                                "decorators": [],
                                                "name": "U",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "returnType": null,
                                      "typeParameters": null
                                    }
                                  }
                                ],
                                "declare": false,
                                "kind": "const"
                              },
                              {
                                "type": "ReturnStatement",
                                "start": 553,
                                "end": 893,
                                "argument": {
                                  "type": "CallExpression",
                                  "start": 560,
                                  "end": 892,
                                  "arguments": [
                                    {
                                      "type": "ArrowFunctionExpression",
                                      "start": 587,
                                      "end": 822,
                                      "async": false,
                                      "body": {
                                        "type": "CallExpression",
                                        "start": 633,
                                        "end": 822,
                                        "arguments": [
                                          {
                                            "type": "TSAsExpression",
                                            "start": 653,
                                            "end": 685,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "start": 653,
                                              "end": 670,
                                              "computed": true,
                                              "object": {
                                                "type": "Identifier",
                                                "start": 653,
                                                "end": 654,
                                                "decorators": [],
                                                "name": "u",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "property": {
                                                "type": "TSAsExpression",
                                                "start": 655,
                                                "end": 669,
                                                "expression": {
                                                  "type": "Identifier",
                                                  "start": 655,
                                                  "end": 658,
                                                  "decorators": [],
                                                  "name": "key",
                                                  "optional": false,
                                                  "typeAnnotation": null
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
                                                    "typeArguments": null,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 668,
                                                      "end": 669,
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 674,
                                              "end": 685,
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "start": 679,
                                                "end": 685,
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "start": 680,
                                                    "end": 681,
                                                    "typeArguments": null,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 680,
                                                      "end": 681,
                                                      "decorators": [],
                                                      "name": "K",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "start": 683,
                                                    "end": 684,
                                                    "typeArguments": null,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 683,
                                                      "end": 684,
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  }
                                                ]
                                              },
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 674,
                                                "end": 679,
                                                "decorators": [],
                                                "name": "Value",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          },
                                          {
                                            "type": "ArrowFunctionExpression",
                                            "start": 687,
                                            "end": 821,
                                            "async": false,
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
                                                    "arguments": [
                                                      {
                                                        "type": "CallExpression",
                                                        "start": 743,
                                                        "end": 801,
                                                        "arguments": [
                                                          {
                                                            "type": "ConditionalExpression",
                                                            "start": 757,
                                                            "end": 783,
                                                            "alternate": {
                                                              "type": "ObjectExpression",
                                                              "start": 781,
                                                              "end": 783,
                                                              "properties": []
                                                            },
                                                            "consequent": {
                                                              "type": "ArrayExpression",
                                                              "start": 776,
                                                              "end": 778,
                                                              "elements": []
                                                            },
                                                            "test": {
                                                              "type": "CallExpression",
                                                              "start": 757,
                                                              "end": 773,
                                                              "arguments": [
                                                                {
                                                                  "type": "Identifier",
                                                                  "start": 771,
                                                                  "end": 772,
                                                                  "decorators": [],
                                                                  "name": "u",
                                                                  "optional": false,
                                                                  "typeAnnotation": null
                                                                }
                                                              ],
                                                              "callee": {
                                                                "type": "MemberExpression",
                                                                "start": 757,
                                                                "end": 770,
                                                                "computed": false,
                                                                "object": {
                                                                  "type": "Identifier",
                                                                  "start": 757,
                                                                  "end": 762,
                                                                  "decorators": [],
                                                                  "name": "Array",
                                                                  "optional": false,
                                                                  "typeAnnotation": null
                                                                },
                                                                "optional": false,
                                                                "property": {
                                                                  "type": "Identifier",
                                                                  "start": 763,
                                                                  "end": 770,
                                                                  "decorators": [],
                                                                  "name": "isArray",
                                                                  "optional": false,
                                                                  "typeAnnotation": null
                                                                }
                                                              },
                                                              "optional": false,
                                                              "typeArguments": null
                                                            }
                                                          },
                                                          {
                                                            "type": "Identifier",
                                                            "start": 785,
                                                            "end": 786,
                                                            "decorators": [],
                                                            "name": "u",
                                                            "optional": false,
                                                            "typeAnnotation": null
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
                                                                "computed": true,
                                                                "key": {
                                                                  "type": "Identifier",
                                                                  "start": 791,
                                                                  "end": 794,
                                                                  "decorators": [],
                                                                  "name": "key",
                                                                  "optional": false,
                                                                  "typeAnnotation": null
                                                                },
                                                                "kind": "init",
                                                                "method": false,
                                                                "optional": false,
                                                                "shorthand": false,
                                                                "value": {
                                                                  "type": "Identifier",
                                                                  "start": 797,
                                                                  "end": 798,
                                                                  "decorators": [],
                                                                  "name": "v",
                                                                  "optional": false,
                                                                  "typeAnnotation": null
                                                                }
                                                              }
                                                            ]
                                                          }
                                                        ],
                                                        "callee": {
                                                          "type": "MemberExpression",
                                                          "start": 743,
                                                          "end": 756,
                                                          "computed": false,
                                                          "object": {
                                                            "type": "Identifier",
                                                            "start": 743,
                                                            "end": 749,
                                                            "decorators": [],
                                                            "name": "Object",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          },
                                                          "optional": false,
                                                          "property": {
                                                            "type": "Identifier",
                                                            "start": 750,
                                                            "end": 756,
                                                            "decorators": [],
                                                            "name": "assign",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          }
                                                        },
                                                        "optional": false,
                                                        "typeArguments": null
                                                      }
                                                    ],
                                                    "callee": {
                                                      "type": "Identifier",
                                                      "start": 736,
                                                      "end": 742,
                                                      "decorators": [],
                                                      "name": "update",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    },
                                                    "optional": false,
                                                    "typeArguments": null
                                                  }
                                                }
                                              ]
                                            },
                                            "expression": false,
                                            "generator": false,
                                            "id": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 688,
                                                "end": 702,
                                                "decorators": [],
                                                "name": "v",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 689,
                                                  "end": 702,
                                                  "typeAnnotation": {
                                                    "type": "TSTypeReference",
                                                    "start": 691,
                                                    "end": 702,
                                                    "typeArguments": {
                                                      "type": "TSTypeParameterInstantiation",
                                                      "start": 696,
                                                      "end": 702,
                                                      "params": [
                                                        {
                                                          "type": "TSTypeReference",
                                                          "start": 697,
                                                          "end": 698,
                                                          "typeArguments": null,
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "start": 697,
                                                            "end": 698,
                                                            "decorators": [],
                                                            "name": "K",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          }
                                                        },
                                                        {
                                                          "type": "TSTypeReference",
                                                          "start": 700,
                                                          "end": 701,
                                                          "typeArguments": null,
                                                          "typeName": {
                                                            "type": "Identifier",
                                                            "start": 700,
                                                            "end": 701,
                                                            "decorators": [],
                                                            "name": "U",
                                                            "optional": false,
                                                            "typeAnnotation": null
                                                          }
                                                        }
                                                      ]
                                                    },
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 691,
                                                      "end": 696,
                                                      "decorators": [],
                                                      "name": "Value",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  }
                                                }
                                              }
                                            ],
                                            "returnType": null,
                                            "typeParameters": null
                                          }
                                        ],
                                        "callee": {
                                          "type": "Identifier",
                                          "start": 633,
                                          "end": 639,
                                          "decorators": [],
                                          "name": "reduce",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
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
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "start": 645,
                                                "end": 651,
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "start": 646,
                                                    "end": 647,
                                                    "typeArguments": null,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 646,
                                                      "end": 647,
                                                      "decorators": [],
                                                      "name": "K",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  },
                                                  {
                                                    "type": "TSTypeReference",
                                                    "start": 649,
                                                    "end": 650,
                                                    "typeArguments": null,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 649,
                                                      "end": 650,
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  }
                                                ]
                                              },
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 640,
                                                "end": 645,
                                                "decorators": [],
                                                "name": "Value",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          ]
                                        }
                                      },
                                      "expression": true,
                                      "generator": false,
                                      "id": null,
                                      "params": [
                                        {
                                          "type": "Identifier",
                                          "start": 606,
                                          "end": 612,
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": {
                                            "type": "TSTypeAnnotation",
                                            "start": 609,
                                            "end": 612,
                                            "typeAnnotation": {
                                              "type": "TSTypeReference",
                                              "start": 611,
                                              "end": 612,
                                              "typeArguments": null,
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 611,
                                                "end": 612,
                                                "decorators": [],
                                                "name": "K",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            }
                                          }
                                        }
                                      ],
                                      "returnType": null,
                                      "typeParameters": {
                                        "type": "TSTypeParameterDeclaration",
                                        "start": 587,
                                        "end": 605,
                                        "params": [
                                          {
                                            "type": "TSTypeParameter",
                                            "start": 588,
                                            "end": 604,
                                            "const": false,
                                            "constraint": {
                                              "type": "TSTypeReference",
                                              "start": 598,
                                              "end": 604,
                                              "typeArguments": {
                                                "type": "TSTypeParameterInstantiation",
                                                "start": 601,
                                                "end": 604,
                                                "params": [
                                                  {
                                                    "type": "TSTypeReference",
                                                    "start": 602,
                                                    "end": 603,
                                                    "typeArguments": null,
                                                    "typeName": {
                                                      "type": "Identifier",
                                                      "start": 602,
                                                      "end": 603,
                                                      "decorators": [],
                                                      "name": "U",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  }
                                                ]
                                              },
                                              "typeName": {
                                                "type": "Identifier",
                                                "start": 598,
                                                "end": 601,
                                                "decorators": [],
                                                "name": "Key",
                                                "optional": false,
                                                "typeAnnotation": null
                                              }
                                            },
                                            "default": null,
                                            "in": false,
                                            "name": {
                                              "type": "Identifier",
                                              "start": 588,
                                              "end": 589,
                                              "decorators": [],
                                              "name": "K",
                                              "optional": false,
                                              "typeAnnotation": null
                                            },
                                            "out": false
                                          }
                                        ]
                                      }
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
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 838,
                                            "end": 841,
                                            "decorators": [],
                                            "name": "map",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "kind": "init",
                                          "method": false,
                                          "optional": false,
                                          "shorthand": false,
                                          "value": {
                                            "type": "ArrowFunctionExpression",
                                            "start": 843,
                                            "end": 884,
                                            "async": false,
                                            "body": {
                                              "type": "CallExpression",
                                              "start": 869,
                                              "end": 884,
                                              "arguments": [
                                                {
                                                  "type": "CallExpression",
                                                  "start": 873,
                                                  "end": 883,
                                                  "arguments": [
                                                    {
                                                      "type": "Identifier",
                                                      "start": 881,
                                                      "end": 882,
                                                      "decorators": [],
                                                      "name": "u",
                                                      "optional": false,
                                                      "typeAnnotation": null
                                                    }
                                                  ],
                                                  "callee": {
                                                    "type": "Identifier",
                                                    "start": 873,
                                                    "end": 880,
                                                    "decorators": [],
                                                    "name": "updater",
                                                    "optional": false,
                                                    "typeAnnotation": null
                                                  },
                                                  "optional": false,
                                                  "typeArguments": null
                                                }
                                              ],
                                              "callee": {
                                                "type": "Identifier",
                                                "start": 869,
                                                "end": 872,
                                                "decorators": [],
                                                "name": "set",
                                                "optional": false,
                                                "typeAnnotation": null
                                              },
                                              "optional": false,
                                              "typeArguments": null
                                            },
                                            "expression": true,
                                            "generator": false,
                                            "id": null,
                                            "params": [
                                              {
                                                "type": "Identifier",
                                                "start": 844,
                                                "end": 864,
                                                "decorators": [],
                                                "name": "updater",
                                                "optional": false,
                                                "typeAnnotation": {
                                                  "type": "TSTypeAnnotation",
                                                  "start": 851,
                                                  "end": 864,
                                                  "typeAnnotation": {
                                                    "type": "TSFunctionType",
                                                    "start": 853,
                                                    "end": 864,
                                                    "params": [
                                                      {
                                                        "type": "Identifier",
                                                        "start": 854,
                                                        "end": 858,
                                                        "decorators": [],
                                                        "name": "u",
                                                        "optional": false,
                                                        "typeAnnotation": {
                                                          "type": "TSTypeAnnotation",
                                                          "start": 855,
                                                          "end": 858,
                                                          "typeAnnotation": {
                                                            "type": "TSTypeReference",
                                                            "start": 857,
                                                            "end": 858,
                                                            "typeArguments": null,
                                                            "typeName": {
                                                              "type": "Identifier",
                                                              "start": 857,
                                                              "end": 858,
                                                              "decorators": [],
                                                              "name": "U",
                                                              "optional": false,
                                                              "typeAnnotation": null
                                                            }
                                                          }
                                                        }
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
                                                        "typeArguments": null,
                                                        "typeName": {
                                                          "type": "Identifier",
                                                          "start": 863,
                                                          "end": 864,
                                                          "decorators": [],
                                                          "name": "U",
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
                                            "typeParameters": null
                                          }
                                        },
                                        {
                                          "type": "Property",
                                          "start": 886,
                                          "end": 889,
                                          "computed": false,
                                          "key": {
                                            "type": "Identifier",
                                            "start": 886,
                                            "end": 889,
                                            "decorators": [],
                                            "name": "set",
                                            "optional": false,
                                            "typeAnnotation": null
                                          },
                                          "kind": "init",
                                          "method": false,
                                          "optional": false,
                                          "shorthand": true,
                                          "value": {
                                            "type": "Identifier",
                                            "start": 886,
                                            "end": 889,
                                            "decorators": [],
                                            "name": "set",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      ]
                                    }
                                  ],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 560,
                                    "end": 573,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 560,
                                      "end": 566,
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 567,
                                      "end": 573,
                                      "decorators": [],
                                      "name": "assign",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "optional": false,
                                  "typeArguments": null
                                }
                              }
                            ]
                          },
                          "expression": false,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 441,
                              "end": 445,
                              "decorators": [],
                              "name": "u",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 442,
                                "end": 445,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 444,
                                  "end": 445,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 444,
                                    "end": 445,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            },
                            {
                              "type": "Identifier",
                              "start": 447,
                              "end": 466,
                              "decorators": [],
                              "name": "update",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 453,
                                "end": 466,
                                "typeAnnotation": {
                                  "type": "TSFunctionType",
                                  "start": 455,
                                  "end": 466,
                                  "params": [
                                    {
                                      "type": "Identifier",
                                      "start": 456,
                                      "end": 460,
                                      "decorators": [],
                                      "name": "u",
                                      "optional": false,
                                      "typeAnnotation": {
                                        "type": "TSTypeAnnotation",
                                        "start": 457,
                                        "end": 460,
                                        "typeAnnotation": {
                                          "type": "TSTypeReference",
                                          "start": 459,
                                          "end": 460,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 459,
                                            "end": 460,
                                            "decorators": [],
                                            "name": "U",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        }
                                      }
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
                                      "typeArguments": null,
                                      "typeName": {
                                        "type": "Identifier",
                                        "start": 465,
                                        "end": 466,
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
                            "start": 437,
                            "end": 440,
                            "params": [
                              {
                                "type": "TSTypeParameter",
                                "start": 438,
                                "end": 439,
                                "const": false,
                                "constraint": null,
                                "default": null,
                                "in": false,
                                "name": {
                                  "type": "Identifier",
                                  "start": 438,
                                  "end": 439,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "out": false
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 905,
                    "end": 938,
                    "argument": {
                      "type": "CallExpression",
                      "start": 912,
                      "end": 937,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 922,
                          "end": 923,
                          "decorators": [],
                          "name": "t",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "ArrowFunctionExpression",
                          "start": 925,
                          "end": 936,
                          "async": false,
                          "body": {
                            "type": "Identifier",
                            "start": 935,
                            "end": 936,
                            "decorators": [],
                            "name": "t",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "expression": true,
                          "generator": false,
                          "id": null,
                          "params": [
                            {
                              "type": "Identifier",
                              "start": 926,
                              "end": 930,
                              "decorators": [],
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "start": 927,
                                "end": 930,
                                "typeAnnotation": {
                                  "type": "TSTypeReference",
                                  "start": 929,
                                  "end": 930,
                                  "typeArguments": null,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 929,
                                    "end": 930,
                                    "decorators": [],
                                    "name": "T",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              }
                            }
                          ],
                          "returnType": null,
                          "typeParameters": null
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 912,
                        "end": 918,
                        "decorators": [],
                        "name": "reduce",
                        "optional": false,
                        "typeAnnotation": null
                      },
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 919,
                              "end": 920,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 407,
                  "end": 411,
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 408,
                    "end": 411,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 410,
                      "end": 411,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 410,
                        "end": 411,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 403,
                "end": 406,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 404,
                    "end": 405,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 404,
                      "end": 405,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1013,
      "end": 1222,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 1020,
        "end": 1222,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 1026,
            "end": 1222,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 1026,
              "end": 1036,
              "decorators": [],
              "name": "testRecFun",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 1039,
              "end": 1222,
              "async": false,
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
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1095,
                            "end": 1101,
                            "decorators": [],
                            "name": "result",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "Identifier",
                            "start": 1103,
                            "end": 1109,
                            "decorators": [],
                            "name": "parent",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 1119,
                          "end": 1213,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 1119,
                            "end": 1125,
                            "decorators": [],
                            "name": "deeper",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": false,
                          "value": {
                            "type": "ArrowFunctionExpression",
                            "start": 1127,
                            "end": 1213,
                            "async": false,
                            "body": {
                              "type": "CallExpression",
                              "start": 1171,
                              "end": 1213,
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
                                        "decorators": [],
                                        "name": "parent",
                                        "optional": false,
                                        "typeAnnotation": null
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
                                        "decorators": [],
                                        "name": "child",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "Identifier",
                                "start": 1171,
                                "end": 1181,
                                "decorators": [],
                                "name": "testRecFun",
                                "optional": false,
                                "typeAnnotation": null
                              },
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
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1182,
                                          "end": 1183,
                                          "decorators": [],
                                          "name": "T",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "TSTypeReference",
                                        "start": 1186,
                                        "end": 1187,
                                        "typeArguments": null,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 1186,
                                          "end": 1187,
                                          "decorators": [],
                                          "name": "U",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            "expression": true,
                            "generator": false,
                            "id": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "start": 1146,
                                "end": 1154,
                                "decorators": [],
                                "name": "child",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "start": 1151,
                                  "end": 1154,
                                  "typeAnnotation": {
                                    "type": "TSTypeReference",
                                    "start": 1153,
                                    "end": 1154,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1153,
                                      "end": 1154,
                                      "decorators": [],
                                      "name": "U",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                }
                              }
                            ],
                            "returnType": null,
                            "typeParameters": {
                              "type": "TSTypeParameterDeclaration",
                              "start": 1127,
                              "end": 1145,
                              "params": [
                                {
                                  "type": "TSTypeParameter",
                                  "start": 1128,
                                  "end": 1144,
                                  "const": false,
                                  "constraint": {
                                    "type": "TSTypeReference",
                                    "start": 1138,
                                    "end": 1144,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 1138,
                                      "end": 1144,
                                      "decorators": [],
                                      "name": "Object",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  },
                                  "default": null,
                                  "in": false,
                                  "name": {
                                    "type": "Identifier",
                                    "start": 1128,
                                    "end": 1129,
                                    "decorators": [],
                                    "name": "U",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "out": false
                                }
                              ]
                            }
                          }
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1058,
                  "end": 1067,
                  "decorators": [],
                  "name": "parent",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1064,
                    "end": 1067,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1066,
                      "end": 1067,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1066,
                        "end": 1067,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ],
              "returnType": null,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1039,
                "end": 1057,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1040,
                    "end": 1056,
                    "const": false,
                    "constraint": {
                      "type": "TSTypeReference",
                      "start": 1050,
                      "end": 1056,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1050,
                        "end": 1056,
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 1040,
                      "end": 1041,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1229,
            "end": 1231,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1234,
            "end": 1258,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1247,
                      "end": 1250,
                      "decorators": [],
                      "name": "one",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1252,
                      "end": 1255,
                      "raw": "'1'",
                      "value": "1"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 1234,
              "end": 1244,
              "decorators": [],
              "name": "testRecFun",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1259,
      "end": 1278,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1259,
        "end": 1277,
        "argument": {
          "type": "MemberExpression",
          "start": 1264,
          "end": 1277,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1264,
            "end": 1273,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1264,
              "end": 1266,
              "decorators": [],
              "name": "p1",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1267,
              "end": 1273,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1274,
            "end": 1277,
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "void",
        "prefix": true
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1283,
            "end": 1285,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1288,
            "end": 1311,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1300,
                      "end": 1303,
                      "decorators": [],
                      "name": "two",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1305,
                      "end": 1308,
                      "raw": "'2'",
                      "value": "2"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1288,
              "end": 1297,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1288,
                "end": 1290,
                "decorators": [],
                "name": "p1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1291,
                "end": 1297,
                "decorators": [],
                "name": "deeper",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1312,
      "end": 1331,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1312,
        "end": 1330,
        "argument": {
          "type": "MemberExpression",
          "start": 1317,
          "end": 1330,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1317,
            "end": 1326,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1317,
              "end": 1319,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1320,
              "end": 1326,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1327,
            "end": 1330,
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1332,
      "end": 1351,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1332,
        "end": 1350,
        "argument": {
          "type": "MemberExpression",
          "start": 1337,
          "end": 1350,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1337,
            "end": 1346,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1337,
              "end": 1339,
              "decorators": [],
              "name": "p2",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1340,
              "end": 1346,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1347,
            "end": 1350,
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "void",
        "prefix": true
      }
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1356,
            "end": 1358,
            "decorators": [],
            "name": "p3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 1361,
            "end": 1386,
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
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 1373,
                      "end": 1378,
                      "decorators": [],
                      "name": "three",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 1380,
                      "end": 1383,
                      "raw": "'3'",
                      "value": "3"
                    }
                  }
                ]
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 1361,
              "end": 1370,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1361,
                "end": 1363,
                "decorators": [],
                "name": "p2",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1364,
                "end": 1370,
                "decorators": [],
                "name": "deeper",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "optional": false,
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 1387,
      "end": 1406,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1387,
        "end": 1405,
        "argument": {
          "type": "MemberExpression",
          "start": 1392,
          "end": 1405,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1392,
            "end": 1401,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1392,
              "end": 1394,
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1395,
              "end": 1401,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1402,
            "end": 1405,
            "decorators": [],
            "name": "one",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1407,
      "end": 1426,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1407,
        "end": 1425,
        "argument": {
          "type": "MemberExpression",
          "start": 1412,
          "end": 1425,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1412,
            "end": 1421,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1412,
              "end": 1414,
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1415,
              "end": 1421,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1422,
            "end": 1425,
            "decorators": [],
            "name": "two",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "void",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1427,
      "end": 1448,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1427,
        "end": 1447,
        "argument": {
          "type": "MemberExpression",
          "start": 1432,
          "end": 1447,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 1432,
            "end": 1441,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1432,
              "end": 1434,
              "decorators": [],
              "name": "p3",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1435,
              "end": 1441,
              "decorators": [],
              "name": "result",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1442,
            "end": 1447,
            "decorators": [],
            "name": "three",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "void",
        "prefix": true
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
