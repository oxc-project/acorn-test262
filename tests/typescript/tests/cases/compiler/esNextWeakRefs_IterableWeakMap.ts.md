__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 2755,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 25,
      "end": 180,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 179,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 54,
            "decorators": [],
            "name": "IterableWeakMap_cleanup",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 57,
            "end": 179,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 155,
              "end": 179,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 161,
                  "end": 177,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 161,
                    "end": 176,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 172,
                        "end": 175,
                        "decorators": [],
                        "name": "ref",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 161,
                      "end": 171,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 164,
                        "decorators": [],
                        "name": "set",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 171,
                        "decorators": [],
                        "name": "delete",
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
                "type": "ObjectPattern",
                "start": 58,
                "end": 150,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 60,
                    "end": 63,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "decorators": [],
                      "name": "ref",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "Property",
                    "start": 65,
                    "end": 68,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 68,
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
                      "start": 65,
                      "end": 68,
                      "decorators": [],
                      "name": "set",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 70,
                  "end": 150,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 72,
                    "end": 150,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 78,
                        "end": 108,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 90,
                          "decorators": [],
                          "name": "ref",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": true,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 90,
                          "end": 107,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 92,
                            "end": 107,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 99,
                              "end": 107,
                              "params": [
                                {
                                  "type": "TSObjectKeyword",
                                  "start": 100,
                                  "end": 106
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 99,
                              "decorators": [],
                              "name": "WeakRef",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 113,
                        "end": 148,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 125,
                          "decorators": [],
                          "name": "set",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": true,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 125,
                          "end": 147,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 127,
                            "end": 147,
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 130,
                              "end": 147,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 131,
                                  "end": 146,
                                  "typeArguments": {
                                    "type": "TSTypeParameterInstantiation",
                                    "start": 138,
                                    "end": 146,
                                    "params": [
                                      {
                                        "type": "TSObjectKeyword",
                                        "start": 139,
                                        "end": 145
                                      }
                                    ]
                                  },
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 131,
                                    "end": 138,
                                    "decorators": [],
                                    "name": "WeakRef",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ]
                            },
                            "typeName": {
                              "type": "Identifier",
                              "start": 127,
                              "end": 130,
                              "decorators": [],
                              "name": "Set",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        }
                      }
                    ]
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
      "type": "ExportNamedDeclaration",
      "start": 277,
      "end": 2309,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 284,
        "end": 2309,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 352,
          "end": 2309,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 358,
              "end": 415,
              "accessibility": null,
              "computed": true,
              "declare": true,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "MemberExpression",
                "start": 376,
                "end": 394,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 382,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 394,
                  "decorators": [],
                  "name": "toStringTag",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "override": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 395,
                "end": 414,
                "typeAnnotation": {
                  "type": "TSLiteralType",
                  "start": 397,
                  "end": 414,
                  "literal": {
                    "type": "Literal",
                    "start": 397,
                    "end": 414,
                    "raw": "\"IterableWeakMap\"",
                    "value": "IterableWeakMap"
                  }
                }
              },
              "value": null
            },
            {
              "type": "PropertyDefinition",
              "start": 421,
              "end": 489,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 421,
                "end": 429,
                "name": "weakMap"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "start": 432,
                "end": 488,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 443,
                  "decorators": [],
                  "name": "WeakMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 443,
                  "end": 486,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 444,
                      "end": 445,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 445,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 447,
                      "end": 485,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 449,
                          "end": 474,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 461,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": true,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 461,
                            "end": 473,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 463,
                              "end": 473,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 470,
                                "end": 473,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 471,
                                    "end": 472,
                                    "typeArguments": null,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 471,
                                      "end": 472,
                                      "decorators": [],
                                      "name": "K",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 463,
                                "end": 470,
                                "decorators": [],
                                "name": "WeakRef",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 475,
                          "end": 483,
                          "accessibility": null,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 475,
                            "end": 480,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 480,
                            "end": 483,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 482,
                              "end": 483,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 482,
                                "end": 483,
                                "decorators": [],
                                "name": "V",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        }
                      ]
                    }
                  ]
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 494,
              "end": 526,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 494,
                "end": 501,
                "name": "refSet"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "start": 504,
                "end": 525,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 511,
                  "decorators": [],
                  "name": "Set",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 511,
                  "end": 523,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 512,
                      "end": 522,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 519,
                        "end": 522,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 520,
                            "end": 521,
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 520,
                              "end": 521,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 512,
                        "end": 519,
                        "decorators": [],
                        "name": "WeakRef",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 531,
              "end": 602,
              "accessibility": null,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 531,
                "end": 549,
                "name": "finalizationGroup"
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": null,
              "value": {
                "type": "NewExpression",
                "start": 552,
                "end": 601,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 577,
                    "end": 600,
                    "decorators": [],
                    "name": "IterableWeakMap_cleanup",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 576,
                  "decorators": [],
                  "name": "FinalizationRegistry",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 608,
              "end": 835,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 608,
                "end": 619,
                "decorators": [],
                "name": "constructor",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "constructor",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 619,
                "end": 835,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 674,
                  "end": 835,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 684,
                      "end": 829,
                      "alternate": null,
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 707,
                        "end": 829,
                        "body": [
                          {
                            "type": "ForOfStatement",
                            "start": 721,
                            "end": 819,
                            "await": false,
                            "body": {
                              "type": "BlockStatement",
                              "start": 766,
                              "end": 819,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 784,
                                  "end": 805,
                                  "directive": null,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 784,
                                    "end": 804,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 793,
                                        "end": 796,
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 798,
                                        "end": 803,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 784,
                                      "end": 792,
                                      "computed": false,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 784,
                                        "end": 788
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 789,
                                        "end": 792,
                                        "decorators": [],
                                        "name": "set",
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
                            "left": {
                              "type": "VariableDeclaration",
                              "start": 726,
                              "end": 752,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 732,
                                  "end": 752,
                                  "definite": false,
                                  "id": {
                                    "type": "ObjectPattern",
                                    "start": 732,
                                    "end": 752,
                                    "decorators": [],
                                    "optional": false,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 734,
                                        "end": 740,
                                        "computed": false,
                                        "key": {
                                          "type": "Literal",
                                          "start": 734,
                                          "end": 735,
                                          "raw": "0",
                                          "value": 0
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "start": 737,
                                          "end": 740,
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      },
                                      {
                                        "type": "Property",
                                        "start": 742,
                                        "end": 750,
                                        "computed": false,
                                        "key": {
                                          "type": "Literal",
                                          "start": 742,
                                          "end": 743,
                                          "raw": "1",
                                          "value": 1
                                        },
                                        "kind": "init",
                                        "method": false,
                                        "optional": false,
                                        "shorthand": false,
                                        "value": {
                                          "type": "Identifier",
                                          "start": 745,
                                          "end": 750,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null
                                        }
                                      }
                                    ],
                                    "typeAnnotation": null
                                  },
                                  "init": null
                                }
                              ],
                              "declare": false,
                              "kind": "const"
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 756,
                              "end": 764,
                              "decorators": [],
                              "name": "iterable",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 688,
                        "end": 705,
                        "operator": "!==",
                        "left": {
                          "type": "Identifier",
                          "start": 688,
                          "end": 696,
                          "decorators": [],
                          "name": "iterable",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Literal",
                          "start": 701,
                          "end": 705,
                          "raw": "null",
                          "value": null
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 620,
                    "end": 672,
                    "decorators": [],
                    "left": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 665,
                      "decorators": [],
                      "name": "iterable",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 628,
                        "end": 665,
                        "typeAnnotation": {
                          "type": "TSUnionType",
                          "start": 630,
                          "end": 665,
                          "types": [
                            {
                              "type": "TSTypeReference",
                              "start": 630,
                              "end": 658,
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 638,
                                "end": 658,
                                "params": [
                                  {
                                    "type": "TSTupleType",
                                    "start": 639,
                                    "end": 657,
                                    "elementTypes": [
                                      {
                                        "type": "TSNamedTupleMember",
                                        "start": 640,
                                        "end": 646,
                                        "elementType": {
                                          "type": "TSTypeReference",
                                          "start": 645,
                                          "end": 646,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 645,
                                            "end": 646,
                                            "decorators": [],
                                            "name": "K",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "label": {
                                          "type": "Identifier",
                                          "start": 640,
                                          "end": 643,
                                          "decorators": [],
                                          "name": "key",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false
                                      },
                                      {
                                        "type": "TSNamedTupleMember",
                                        "start": 648,
                                        "end": 656,
                                        "elementType": {
                                          "type": "TSTypeReference",
                                          "start": 655,
                                          "end": 656,
                                          "typeArguments": null,
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 655,
                                            "end": 656,
                                            "decorators": [],
                                            "name": "V",
                                            "optional": false,
                                            "typeAnnotation": null
                                          }
                                        },
                                        "label": {
                                          "type": "Identifier",
                                          "start": 648,
                                          "end": 653,
                                          "decorators": [],
                                          "name": "value",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              },
                              "typeName": {
                                "type": "Identifier",
                                "start": 630,
                                "end": 638,
                                "decorators": [],
                                "name": "Iterable",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 661,
                              "end": 665
                            }
                          ]
                        }
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 668,
                      "end": 672,
                      "raw": "null",
                      "value": null
                    },
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 841,
              "end": 1297,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 841,
                "end": 844,
                "decorators": [],
                "name": "set",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 844,
                "end": 1297,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 869,
                  "end": 1297,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 879,
                      "end": 916,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 885,
                          "end": 915,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 885,
                            "end": 890,
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 893,
                            "end": 915,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 911,
                                "end": 914,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 893,
                              "end": 910,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 893,
                                "end": 906,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 893,
                                  "end": 897
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 898,
                                  "end": 906,
                                  "name": "weakMap"
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 907,
                                "end": 910,
                                "decorators": [],
                                "name": "get",
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
                      "kind": "const"
                    },
                    {
                      "type": "IfStatement",
                      "start": 925,
                      "end": 1270,
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 1000,
                        "end": 1270,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1014,
                            "end": 1043,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1020,
                                "end": 1042,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1020,
                                  "end": 1023,
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 1026,
                                  "end": 1042,
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1038,
                                      "end": 1041,
                                      "decorators": [],
                                      "name": "key",
                                      "optional": false,
                                      "typeAnnotation": null
                                    }
                                  ],
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1030,
                                    "end": 1037,
                                    "decorators": [],
                                    "name": "WeakRef",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "typeArguments": null
                                }
                              }
                            ],
                            "declare": false,
                            "kind": "const"
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1057,
                            "end": 1096,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1057,
                              "end": 1095,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1075,
                                  "end": 1078,
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "ObjectExpression",
                                  "start": 1080,
                                  "end": 1094,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 1082,
                                      "end": 1085,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1082,
                                        "end": 1085,
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": true,
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1082,
                                        "end": 1085,
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    },
                                    {
                                      "type": "Property",
                                      "start": 1087,
                                      "end": 1092,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1087,
                                        "end": 1092,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": true,
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1087,
                                        "end": 1092,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1057,
                                "end": 1074,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1057,
                                  "end": 1070,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1057,
                                    "end": 1061
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 1062,
                                    "end": 1070,
                                    "name": "weakMap"
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1071,
                                  "end": 1074,
                                  "decorators": [],
                                  "name": "set",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1109,
                            "end": 1131,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1109,
                              "end": 1130,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1126,
                                  "end": 1129,
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1109,
                                "end": 1125,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1109,
                                  "end": 1121,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1109,
                                    "end": 1113
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 1114,
                                    "end": 1121,
                                    "name": "refSet"
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1122,
                                  "end": 1125,
                                  "decorators": [],
                                  "name": "add",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "optional": false,
                              "typeArguments": null
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1144,
                            "end": 1260,
                            "directive": null,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1144,
                              "end": 1259,
                              "arguments": [
                                {
                                  "type": "Identifier",
                                  "start": 1177,
                                  "end": 1180,
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                {
                                  "type": "ObjectExpression",
                                  "start": 1182,
                                  "end": 1253,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 1200,
                                      "end": 1217,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1200,
                                        "end": 1203,
                                        "decorators": [],
                                        "name": "set",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": false,
                                      "value": {
                                        "type": "MemberExpression",
                                        "start": 1205,
                                        "end": 1217,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1205,
                                          "end": 1209
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 1210,
                                          "end": 1217,
                                          "name": "refSet"
                                        }
                                      }
                                    },
                                    {
                                      "type": "Property",
                                      "start": 1235,
                                      "end": 1238,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1235,
                                        "end": 1238,
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": true,
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1235,
                                        "end": 1238,
                                        "decorators": [],
                                        "name": "ref",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ]
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1255,
                                  "end": 1258,
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1144,
                                "end": 1176,
                                "computed": false,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1144,
                                  "end": 1167,
                                  "computed": false,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1144,
                                    "end": 1148
                                  },
                                  "optional": false,
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 1149,
                                    "end": 1167,
                                    "name": "finalizationGroup"
                                  }
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 1168,
                                  "end": 1176,
                                  "decorators": [],
                                  "name": "register",
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
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 950,
                        "end": 994,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 964,
                            "end": 984,
                            "directive": null,
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 964,
                              "end": 983,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 964,
                                "end": 975,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 964,
                                  "end": 969,
                                  "decorators": [],
                                  "name": "entry",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 970,
                                  "end": 975,
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 978,
                                "end": 983,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 929,
                        "end": 948,
                        "operator": "!==",
                        "left": {
                          "type": "Identifier",
                          "start": 929,
                          "end": 934,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 939,
                          "end": 948,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1279,
                      "end": 1291,
                      "argument": {
                        "type": "ThisExpression",
                        "start": 1286,
                        "end": 1290
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 845,
                    "end": 851,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 848,
                      "end": 851,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 850,
                        "end": 851,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 850,
                          "end": 851,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  },
                  {
                    "type": "Identifier",
                    "start": 853,
                    "end": 861,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 858,
                      "end": 861,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 860,
                        "end": 861,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 860,
                          "end": 861,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 862,
                  "end": 868,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 864,
                    "end": 868
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1303,
              "end": 1370,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1303,
                "end": 1306,
                "decorators": [],
                "name": "has",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1306,
                "end": 1370,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1324,
                  "end": 1370,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1334,
                      "end": 1364,
                      "argument": {
                        "type": "CallExpression",
                        "start": 1341,
                        "end": 1363,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1359,
                            "end": 1362,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1341,
                          "end": 1358,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1341,
                            "end": 1354,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1341,
                              "end": 1345
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1346,
                              "end": 1354,
                              "name": "weakMap"
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1355,
                            "end": 1358,
                            "decorators": [],
                            "name": "has",
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
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1307,
                    "end": 1313,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1310,
                      "end": 1313,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1312,
                        "end": 1313,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1312,
                          "end": 1313,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1314,
                  "end": 1323,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1316,
                    "end": 1323
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1376,
              "end": 1456,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1376,
                "end": 1379,
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1379,
                "end": 1456,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1403,
                  "end": 1456,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 1413,
                      "end": 1450,
                      "argument": {
                        "type": "ChainExpression",
                        "start": 1420,
                        "end": 1449,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1420,
                          "end": 1449,
                          "computed": false,
                          "object": {
                            "type": "CallExpression",
                            "start": 1420,
                            "end": 1442,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1438,
                                "end": 1441,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1420,
                              "end": 1437,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1420,
                                "end": 1433,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1420,
                                  "end": 1424
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 1425,
                                  "end": 1433,
                                  "name": "weakMap"
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1434,
                                "end": 1437,
                                "decorators": [],
                                "name": "get",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          },
                          "optional": true,
                          "property": {
                            "type": "Identifier",
                            "start": 1444,
                            "end": 1449,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1380,
                    "end": 1386,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1383,
                      "end": 1386,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1385,
                        "end": 1386,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1385,
                          "end": 1386,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1387,
                  "end": 1402,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1389,
                    "end": 1402,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 1389,
                        "end": 1390,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1389,
                          "end": 1390,
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1393,
                        "end": 1402
                      }
                    ]
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 1462,
              "end": 1781,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1462,
                "end": 1468,
                "decorators": [],
                "name": "delete",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1468,
                "end": 1781,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1486,
                  "end": 1781,
                  "body": [
                    {
                      "type": "VariableDeclaration",
                      "start": 1496,
                      "end": 1533,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1502,
                          "end": 1532,
                          "definite": false,
                          "id": {
                            "type": "Identifier",
                            "start": 1502,
                            "end": 1507,
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 1510,
                            "end": 1532,
                            "arguments": [
                              {
                                "type": "Identifier",
                                "start": 1528,
                                "end": 1531,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1510,
                              "end": 1527,
                              "computed": false,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1510,
                                "end": 1523,
                                "computed": false,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1510,
                                  "end": 1514
                                },
                                "optional": false,
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 1515,
                                  "end": 1523,
                                  "name": "weakMap"
                                }
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 1524,
                                "end": 1527,
                                "decorators": [],
                                "name": "get",
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
                      "kind": "const"
                    },
                    {
                      "type": "IfStatement",
                      "start": 1542,
                      "end": 1604,
                      "alternate": null,
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 1567,
                        "end": 1604,
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "start": 1581,
                            "end": 1594,
                            "argument": {
                              "type": "Literal",
                              "start": 1588,
                              "end": 1593,
                              "raw": "false",
                              "value": false
                            }
                          }
                        ]
                      },
                      "test": {
                        "type": "BinaryExpression",
                        "start": 1546,
                        "end": 1565,
                        "operator": "===",
                        "left": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1551,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 1556,
                          "end": 1565,
                          "decorators": [],
                          "name": "undefined",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    },
                    {
                      "type": "VariableDeclaration",
                      "start": 1614,
                      "end": 1636,
                      "declarations": [
                        {
                          "type": "VariableDeclarator",
                          "start": 1620,
                          "end": 1635,
                          "definite": false,
                          "id": {
                            "type": "ObjectPattern",
                            "start": 1620,
                            "end": 1627,
                            "decorators": [],
                            "optional": false,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 1622,
                                "end": 1625,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1622,
                                  "end": 1625,
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "kind": "init",
                                "method": false,
                                "optional": false,
                                "shorthand": true,
                                "value": {
                                  "type": "Identifier",
                                  "start": 1622,
                                  "end": 1625,
                                  "decorators": [],
                                  "name": "ref",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              }
                            ],
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 1630,
                            "end": 1635,
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "declare": false,
                      "kind": "const"
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1645,
                      "end": 1671,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1645,
                        "end": 1670,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1666,
                            "end": 1669,
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1645,
                          "end": 1665,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1645,
                            "end": 1658,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1645,
                              "end": 1649
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1650,
                              "end": 1658,
                              "name": "weakMap"
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1659,
                            "end": 1665,
                            "decorators": [],
                            "name": "delete",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1680,
                      "end": 1705,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1680,
                        "end": 1704,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1700,
                            "end": 1703,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1680,
                          "end": 1699,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1680,
                            "end": 1692,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1680,
                              "end": 1684
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1685,
                              "end": 1692,
                              "name": "refSet"
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1693,
                            "end": 1699,
                            "decorators": [],
                            "name": "delete",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1714,
                      "end": 1754,
                      "directive": null,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1714,
                        "end": 1753,
                        "arguments": [
                          {
                            "type": "Identifier",
                            "start": 1749,
                            "end": 1752,
                            "decorators": [],
                            "name": "ref",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1714,
                          "end": 1748,
                          "computed": false,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1714,
                            "end": 1737,
                            "computed": false,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1714,
                              "end": 1718
                            },
                            "optional": false,
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1719,
                              "end": 1737,
                              "name": "finalizationGroup"
                            }
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 1738,
                            "end": 1748,
                            "decorators": [],
                            "name": "unregister",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        "optional": false,
                        "typeArguments": null
                      }
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1763,
                      "end": 1775,
                      "argument": {
                        "type": "Literal",
                        "start": 1770,
                        "end": 1774,
                        "raw": "true",
                        "value": true
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1469,
                    "end": 1475,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1472,
                      "end": 1475,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1474,
                        "end": 1475,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1474,
                          "end": 1475,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1476,
                  "end": 1485,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1478,
                    "end": 1485
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 1787,
              "end": 1830,
              "accessibility": null,
              "computed": true,
              "declare": true,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "MemberExpression",
                "start": 1796,
                "end": 1811,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 1796,
                  "end": 1802,
                  "decorators": [],
                  "name": "Symbol",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 1803,
                  "end": 1811,
                  "decorators": [],
                  "name": "iterator",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1812,
                "end": 1829,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1814,
                  "end": 1829,
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 1819,
                    "end": 1828,
                    "literal": {
                      "type": "Literal",
                      "start": 1819,
                      "end": 1828,
                      "raw": "\"entries\"",
                      "value": "entries"
                    }
                  },
                  "objectType": {
                    "type": "TSThisType",
                    "start": 1814,
                    "end": 1818
                  }
                }
              },
              "value": null
            },
            {
              "type": "MethodDefinition",
              "start": 1835,
              "end": 2111,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 1836,
                "end": 1843,
                "decorators": [],
                "name": "entries",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 1843,
                "end": 2111,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 1883,
                  "end": 2111,
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "start": 1893,
                      "end": 2105,
                      "await": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 1925,
                        "end": 2105,
                        "body": [
                          {
                            "type": "VariableDeclaration",
                            "start": 1939,
                            "end": 1963,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 1945,
                                "end": 1962,
                                "definite": false,
                                "id": {
                                  "type": "Identifier",
                                  "start": 1945,
                                  "end": 1948,
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 1951,
                                  "end": 1962,
                                  "arguments": [],
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1951,
                                    "end": 1960,
                                    "computed": false,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1951,
                                      "end": 1954,
                                      "decorators": [],
                                      "name": "ref",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1955,
                                      "end": 1960,
                                      "decorators": [],
                                      "name": "deref",
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
                            "kind": "const"
                          },
                          {
                            "type": "IfStatement",
                            "start": 1976,
                            "end": 2008,
                            "alternate": null,
                            "consequent": {
                              "type": "ContinueStatement",
                              "start": 1999,
                              "end": 2008,
                              "label": null
                            },
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1980,
                              "end": 1997,
                              "operator": "===",
                              "left": {
                                "type": "Identifier",
                                "start": 1980,
                                "end": 1983,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 1988,
                                "end": 1997,
                                "decorators": [],
                                "name": "undefined",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          },
                          {
                            "type": "VariableDeclaration",
                            "start": 2021,
                            "end": 2063,
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "start": 2027,
                                "end": 2062,
                                "definite": false,
                                "id": {
                                  "type": "ObjectPattern",
                                  "start": 2027,
                                  "end": 2036,
                                  "decorators": [],
                                  "optional": false,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 2029,
                                      "end": 2034,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 2029,
                                        "end": 2034,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "kind": "init",
                                      "method": false,
                                      "optional": false,
                                      "shorthand": true,
                                      "value": {
                                        "type": "Identifier",
                                        "start": 2029,
                                        "end": 2034,
                                        "decorators": [],
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    }
                                  ],
                                  "typeAnnotation": null
                                },
                                "init": {
                                  "type": "TSNonNullExpression",
                                  "start": 2039,
                                  "end": 2062,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 2039,
                                    "end": 2061,
                                    "arguments": [
                                      {
                                        "type": "Identifier",
                                        "start": 2057,
                                        "end": 2060,
                                        "decorators": [],
                                        "name": "key",
                                        "optional": false,
                                        "typeAnnotation": null
                                      }
                                    ],
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 2039,
                                      "end": 2056,
                                      "computed": false,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 2039,
                                        "end": 2052,
                                        "computed": false,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 2039,
                                          "end": 2043
                                        },
                                        "optional": false,
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 2044,
                                          "end": 2052,
                                          "name": "weakMap"
                                        }
                                      },
                                      "optional": false,
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2053,
                                        "end": 2056,
                                        "decorators": [],
                                        "name": "get",
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
                            "type": "ExpressionStatement",
                            "start": 2076,
                            "end": 2095,
                            "directive": null,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 2076,
                              "end": 2094,
                              "argument": {
                                "type": "ArrayExpression",
                                "start": 2082,
                                "end": 2094,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2083,
                                    "end": 2086,
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2088,
                                    "end": 2093,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                ]
                              },
                              "delegate": false
                            }
                          }
                        ]
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 1898,
                        "end": 1907,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1904,
                            "end": 1907,
                            "definite": false,
                            "id": {
                              "type": "Identifier",
                              "start": 1904,
                              "end": 1907,
                              "decorators": [],
                              "name": "ref",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 1911,
                        "end": 1923,
                        "computed": false,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1911,
                          "end": 1915
                        },
                        "optional": false,
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1916,
                          "end": 1923,
                          "name": "refSet"
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": true,
                "id": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1845,
                  "end": 1882,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1847,
                    "end": 1882,
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1856,
                      "end": 1882,
                      "params": [
                        {
                          "type": "TSTupleType",
                          "start": 1857,
                          "end": 1875,
                          "elementTypes": [
                            {
                              "type": "TSNamedTupleMember",
                              "start": 1858,
                              "end": 1864,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1863,
                                "end": 1864,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1863,
                                  "end": 1864,
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "label": {
                                "type": "Identifier",
                                "start": 1858,
                                "end": 1861,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false
                            },
                            {
                              "type": "TSNamedTupleMember",
                              "start": 1866,
                              "end": 1874,
                              "elementType": {
                                "type": "TSTypeReference",
                                "start": 1873,
                                "end": 1874,
                                "typeArguments": null,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1873,
                                  "end": 1874,
                                  "decorators": [],
                                  "name": "V",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              "label": {
                                "type": "Identifier",
                                "start": 1866,
                                "end": 1871,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false
                            }
                          ]
                        },
                        {
                          "type": "TSVoidKeyword",
                          "start": 1877,
                          "end": 1881
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 1847,
                      "end": 1856,
                      "decorators": [],
                      "name": "Generator",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2117,
              "end": 2206,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2118,
                "end": 2122,
                "decorators": [],
                "name": "keys",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 2122,
                "end": 2206,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2125,
                  "end": 2206,
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "start": 2135,
                      "end": 2200,
                      "await": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2166,
                        "end": 2200,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2180,
                            "end": 2190,
                            "directive": null,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 2180,
                              "end": 2189,
                              "argument": {
                                "type": "Identifier",
                                "start": 2186,
                                "end": 2189,
                                "decorators": [],
                                "name": "key",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "delegate": false
                            }
                          }
                        ]
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 2140,
                        "end": 2156,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2146,
                            "end": 2156,
                            "definite": false,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 2146,
                              "end": 2156,
                              "decorators": [],
                              "optional": false,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2148,
                                  "end": 2154,
                                  "computed": false,
                                  "key": {
                                    "type": "Literal",
                                    "start": 2148,
                                    "end": 2149,
                                    "raw": "0",
                                    "value": 0
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Identifier",
                                    "start": 2151,
                                    "end": 2154,
                                    "decorators": [],
                                    "name": "key",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ],
                              "typeAnnotation": null
                            },
                            "init": null
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2160,
                        "end": 2164
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": true,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            },
            {
              "type": "MethodDefinition",
              "start": 2212,
              "end": 2307,
              "accessibility": null,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 2213,
                "end": 2219,
                "decorators": [],
                "name": "values",
                "optional": false,
                "typeAnnotation": null
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 2219,
                "end": 2307,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 2222,
                  "end": 2307,
                  "body": [
                    {
                      "type": "ForOfStatement",
                      "start": 2232,
                      "end": 2301,
                      "await": false,
                      "body": {
                        "type": "BlockStatement",
                        "start": 2265,
                        "end": 2301,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2279,
                            "end": 2291,
                            "directive": null,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 2279,
                              "end": 2290,
                              "argument": {
                                "type": "Identifier",
                                "start": 2285,
                                "end": 2290,
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "delegate": false
                            }
                          }
                        ]
                      },
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 2237,
                        "end": 2255,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2243,
                            "end": 2255,
                            "definite": false,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 2243,
                              "end": 2255,
                              "decorators": [],
                              "optional": false,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2245,
                                  "end": 2253,
                                  "computed": false,
                                  "key": {
                                    "type": "Literal",
                                    "start": 2245,
                                    "end": 2246,
                                    "raw": "1",
                                    "value": 1
                                  },
                                  "kind": "init",
                                  "method": false,
                                  "optional": false,
                                  "shorthand": false,
                                  "value": {
                                    "type": "Identifier",
                                    "start": 2248,
                                    "end": 2253,
                                    "decorators": [],
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null
                                  }
                                }
                              ],
                              "typeAnnotation": null
                            },
                            "init": null
                          }
                        ],
                        "declare": false,
                        "kind": "const"
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2259,
                        "end": 2263
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": true,
                "id": null,
                "params": [],
                "returnType": null,
                "typeParameters": null
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 290,
          "end": 305,
          "decorators": [],
          "name": "IterableWeakMap",
          "optional": false,
          "typeAnnotation": null
        },
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 338,
            "end": 351,
            "expression": {
              "type": "Identifier",
              "start": 338,
              "end": 345,
              "decorators": [],
              "name": "WeakMap",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 345,
              "end": 351,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 346,
                  "end": 347,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 346,
                    "end": 347,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                {
                  "type": "TSTypeReference",
                  "start": 349,
                  "end": 350,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "decorators": [],
                    "name": "V",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            }
          }
        ],
        "superClass": null,
        "superTypeArguments": null,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 305,
          "end": 326,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 306,
              "end": 322,
              "const": false,
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 316,
                "end": 322
              },
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 324,
              "end": 325,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 324,
                "end": 325,
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 2311,
      "end": 2755,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 2311,
        "end": 2754,
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 2335,
            "end": 2360,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 2335,
              "end": 2350,
              "decorators": [],
              "name": "IterableWeakMap",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2351,
              "end": 2360,
              "decorators": [],
              "name": "prototype",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "ObjectExpression",
            "start": 2362,
            "end": 2753,
            "properties": [
              {
                "type": "Property",
                "start": 2368,
                "end": 2601,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 2369,
                  "end": 2384,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2369,
                    "end": 2375,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2376,
                    "end": 2384,
                    "decorators": [],
                    "name": "iterator",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 2387,
                  "end": 2601,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2397,
                      "end": 2415,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2397,
                        "end": 2409,
                        "decorators": [],
                        "name": "configurable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2411,
                        "end": 2415,
                        "raw": "true",
                        "value": true
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2425,
                      "end": 2442,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2425,
                        "end": 2435,
                        "decorators": [],
                        "name": "enumerable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2437,
                        "end": 2442,
                        "raw": "false",
                        "value": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2452,
                      "end": 2466,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2452,
                        "end": 2460,
                        "decorators": [],
                        "name": "writable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2462,
                        "end": 2466,
                        "raw": "true",
                        "value": true
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2476,
                      "end": 2594,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2476,
                        "end": 2481,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "start": 2483,
                        "end": 2594,
                        "computed": false,
                        "object": {
                          "type": "TSNonNullExpression",
                          "start": 2483,
                          "end": 2588,
                          "expression": {
                            "type": "CallExpression",
                            "start": 2483,
                            "end": 2587,
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 2528,
                                "end": 2553,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2528,
                                  "end": 2543,
                                  "decorators": [],
                                  "name": "IterableWeakMap",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 2544,
                                  "end": 2553,
                                  "decorators": [],
                                  "name": "prototype",
                                  "optional": false,
                                  "typeAnnotation": null
                                }
                              },
                              {
                                "type": "Literal",
                                "start": 2567,
                                "end": 2576,
                                "raw": "\"entries\"",
                                "value": "entries"
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 2483,
                              "end": 2514,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 2483,
                                "end": 2489,
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 2490,
                                "end": 2514,
                                "decorators": [],
                                "name": "getOwnPropertyDescriptor",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 2589,
                          "end": 2594,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 2607,
                "end": 2750,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 2608,
                  "end": 2626,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 2608,
                    "end": 2614,
                    "decorators": [],
                    "name": "Symbol",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 2615,
                    "end": 2626,
                    "decorators": [],
                    "name": "toStringTag",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 2629,
                  "end": 2750,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2639,
                      "end": 2657,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2639,
                        "end": 2651,
                        "decorators": [],
                        "name": "configurable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2653,
                        "end": 2657,
                        "raw": "true",
                        "value": true
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2667,
                      "end": 2684,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2667,
                        "end": 2677,
                        "decorators": [],
                        "name": "enumerable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2679,
                        "end": 2684,
                        "raw": "false",
                        "value": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2694,
                      "end": 2709,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2694,
                        "end": 2702,
                        "decorators": [],
                        "name": "writable",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2704,
                        "end": 2709,
                        "raw": "false",
                        "value": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 2719,
                      "end": 2743,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2719,
                        "end": 2724,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 2726,
                        "end": 2743,
                        "raw": "\"IterableWeakMap\"",
                        "value": "IterableWeakMap"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 2311,
          "end": 2334,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 2311,
            "end": 2317,
            "decorators": [],
            "name": "Object",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 2318,
            "end": 2334,
            "decorators": [],
            "name": "defineProperties",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
