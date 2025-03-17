__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 25,
  "end": 2756,
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
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 54,
            "name": "IterableWeakMap_cleanup",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 57,
            "end": 179,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "ObjectPattern",
                "start": 58,
                "end": 150,
                "properties": [
                  {
                    "type": "Property",
                    "start": 60,
                    "end": 63,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "name": "ref",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "name": "ref",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 65,
                    "end": 68,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 68,
                      "name": "set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 65,
                      "end": 68,
                      "name": "set",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
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
                        "computed": false,
                        "optional": false,
                        "readonly": true,
                        "key": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 90,
                          "name": "ref",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 90,
                          "end": 107,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 92,
                            "end": 107,
                            "typeName": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 99,
                              "name": "WeakRef",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
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
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      },
                      {
                        "type": "TSPropertySignature",
                        "start": 113,
                        "end": 148,
                        "computed": false,
                        "optional": false,
                        "readonly": true,
                        "key": {
                          "type": "Identifier",
                          "start": 122,
                          "end": 125,
                          "name": "set",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 125,
                          "end": 147,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 127,
                            "end": 147,
                            "typeName": {
                              "type": "Identifier",
                              "start": 127,
                              "end": 130,
                              "name": "Set",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 130,
                              "end": 147,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 131,
                                  "end": 146,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 131,
                                    "end": 138,
                                    "name": "WeakRef",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
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
                                  }
                                }
                              ]
                            }
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                }
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 155,
              "end": 179,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 161,
                  "end": 177,
                  "expression": {
                    "type": "CallExpression",
                    "start": 161,
                    "end": 176,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 161,
                      "end": 171,
                      "object": {
                        "type": "Identifier",
                        "start": 161,
                        "end": 164,
                        "name": "set",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 171,
                        "name": "delete",
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
                        "start": 172,
                        "end": 175,
                        "name": "ref",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
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
      "type": "ExportNamedDeclaration",
      "start": 277,
      "end": 2309,
      "declaration": {
        "type": "ClassDeclaration",
        "start": 284,
        "end": 2309,
        "id": {
          "type": "Identifier",
          "start": 290,
          "end": 305,
          "name": "IterableWeakMap",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "superClass": null,
        "body": {
          "type": "ClassBody",
          "start": 352,
          "end": 2309,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 358,
              "end": 415,
              "static": false,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 376,
                "end": 394,
                "object": {
                  "type": "Identifier",
                  "start": 376,
                  "end": 382,
                  "name": "Symbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 394,
                  "name": "toStringTag",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": true,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": true,
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
                    "value": "IterableWeakMap",
                    "raw": "\"IterableWeakMap\""
                  }
                }
              },
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 421,
              "end": 489,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 421,
                "end": 429,
                "name": "weakMap"
              },
              "value": {
                "type": "NewExpression",
                "start": 432,
                "end": 488,
                "callee": {
                  "type": "Identifier",
                  "start": 436,
                  "end": 443,
                  "name": "WeakMap",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 443,
                  "end": 486,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 444,
                      "end": 445,
                      "typeName": {
                        "type": "Identifier",
                        "start": 444,
                        "end": 445,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
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
                          "computed": false,
                          "optional": false,
                          "readonly": true,
                          "key": {
                            "type": "Identifier",
                            "start": 458,
                            "end": 461,
                            "name": "ref",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 461,
                            "end": 473,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 463,
                              "end": 473,
                              "typeName": {
                                "type": "Identifier",
                                "start": 463,
                                "end": 470,
                                "name": "WeakRef",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": {
                                "type": "TSTypeParameterInstantiation",
                                "start": 470,
                                "end": 473,
                                "params": [
                                  {
                                    "type": "TSTypeReference",
                                    "start": 471,
                                    "end": 472,
                                    "typeName": {
                                      "type": "Identifier",
                                      "start": 471,
                                      "end": 472,
                                      "name": "K",
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
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 475,
                          "end": 483,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 475,
                            "end": 480,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 480,
                            "end": 483,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 482,
                              "end": 483,
                              "typeName": {
                                "type": "Identifier",
                                "start": 482,
                                "end": 483,
                                "name": "V",
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
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 494,
              "end": 526,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 494,
                "end": 501,
                "name": "refSet"
              },
              "value": {
                "type": "NewExpression",
                "start": 504,
                "end": 525,
                "callee": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 511,
                  "name": "Set",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 511,
                  "end": 523,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 512,
                      "end": 522,
                      "typeName": {
                        "type": "Identifier",
                        "start": 512,
                        "end": 519,
                        "name": "WeakRef",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 519,
                        "end": 522,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 520,
                            "end": 521,
                            "typeName": {
                              "type": "Identifier",
                              "start": 520,
                              "end": 521,
                              "name": "K",
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
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 531,
              "end": 602,
              "static": false,
              "computed": false,
              "key": {
                "type": "PrivateIdentifier",
                "start": 531,
                "end": 549,
                "name": "finalizationGroup"
              },
              "value": {
                "type": "NewExpression",
                "start": 552,
                "end": 601,
                "callee": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 576,
                  "name": "FinalizationRegistry",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 577,
                    "end": 600,
                    "name": "IterableWeakMap_cleanup",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "typeArguments": null
              },
              "decorators": [],
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": null,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 608,
              "end": 835,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 608,
                "end": 619,
                "name": "constructor",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "constructor",
              "value": {
                "type": "FunctionExpression",
                "start": 619,
                "end": 835,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "AssignmentPattern",
                    "start": 620,
                    "end": 672,
                    "left": {
                      "type": "Identifier",
                      "start": 620,
                      "end": 665,
                      "name": "iterable",
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
                              "typeName": {
                                "type": "Identifier",
                                "start": 630,
                                "end": 638,
                                "name": "Iterable",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
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
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 645,
                                            "end": 646,
                                            "name": "K",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        },
                                        "label": {
                                          "type": "Identifier",
                                          "start": 640,
                                          "end": 643,
                                          "name": "key",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
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
                                          "typeName": {
                                            "type": "Identifier",
                                            "start": 655,
                                            "end": 656,
                                            "name": "V",
                                            "typeAnnotation": null,
                                            "decorators": [],
                                            "optional": false
                                          },
                                          "typeArguments": null
                                        },
                                        "label": {
                                          "type": "Identifier",
                                          "start": 648,
                                          "end": 653,
                                          "name": "value",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "optional": false
                                      }
                                    ]
                                  }
                                ]
                              }
                            },
                            {
                              "type": "TSNullKeyword",
                              "start": 661,
                              "end": 665
                            }
                          ]
                        }
                      },
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 668,
                      "end": 672,
                      "value": null,
                      "raw": "null"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "BlockStatement",
                  "start": 674,
                  "end": 835,
                  "body": [
                    {
                      "type": "IfStatement",
                      "start": 684,
                      "end": 829,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 688,
                        "end": 705,
                        "left": {
                          "type": "Identifier",
                          "start": 688,
                          "end": 696,
                          "name": "iterable",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Literal",
                          "start": 701,
                          "end": 705,
                          "value": null,
                          "raw": "null"
                        }
                      },
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
                            "left": {
                              "type": "VariableDeclaration",
                              "start": 726,
                              "end": 752,
                              "declarations": [
                                {
                                  "type": "VariableDeclarator",
                                  "start": 732,
                                  "end": 752,
                                  "id": {
                                    "type": "ObjectPattern",
                                    "start": 732,
                                    "end": 752,
                                    "properties": [
                                      {
                                        "type": "Property",
                                        "start": 734,
                                        "end": 740,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Literal",
                                          "start": 734,
                                          "end": 735,
                                          "value": 0,
                                          "raw": "0"
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 737,
                                          "end": 740,
                                          "name": "key",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      },
                                      {
                                        "type": "Property",
                                        "start": 742,
                                        "end": 750,
                                        "method": false,
                                        "shorthand": false,
                                        "computed": false,
                                        "key": {
                                          "type": "Literal",
                                          "start": 742,
                                          "end": 743,
                                          "value": 1,
                                          "raw": "1"
                                        },
                                        "value": {
                                          "type": "Identifier",
                                          "start": 745,
                                          "end": 750,
                                          "name": "value",
                                          "typeAnnotation": null,
                                          "decorators": [],
                                          "optional": false
                                        },
                                        "kind": "init",
                                        "optional": false
                                      }
                                    ],
                                    "decorators": [],
                                    "optional": false,
                                    "typeAnnotation": null
                                  },
                                  "init": null,
                                  "definite": false
                                }
                              ],
                              "kind": "const",
                              "declare": false
                            },
                            "right": {
                              "type": "Identifier",
                              "start": 756,
                              "end": 764,
                              "name": "iterable",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "body": {
                              "type": "BlockStatement",
                              "start": 766,
                              "end": 819,
                              "body": [
                                {
                                  "type": "ExpressionStatement",
                                  "start": 784,
                                  "end": 805,
                                  "expression": {
                                    "type": "CallExpression",
                                    "start": 784,
                                    "end": 804,
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 784,
                                      "end": 792,
                                      "object": {
                                        "type": "ThisExpression",
                                        "start": 784,
                                        "end": 788
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 789,
                                        "end": 792,
                                        "name": "set",
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
                                        "start": 793,
                                        "end": 796,
                                        "name": "key",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      {
                                        "type": "Identifier",
                                        "start": 798,
                                        "end": 803,
                                        "name": "value",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      }
                                    ],
                                    "optional": false,
                                    "typeArguments": null
                                  },
                                  "directive": null
                                }
                              ]
                            }
                          }
                        ]
                      },
                      "alternate": null
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 841,
              "end": 1297,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 841,
                "end": 844,
                "name": "set",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 844,
                "end": 1297,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 845,
                    "end": 851,
                    "name": "key",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 848,
                      "end": 851,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 850,
                        "end": 851,
                        "typeName": {
                          "type": "Identifier",
                          "start": 850,
                          "end": 851,
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
                  },
                  {
                    "type": "Identifier",
                    "start": 853,
                    "end": 861,
                    "name": "value",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 858,
                      "end": 861,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 860,
                        "end": 861,
                        "typeName": {
                          "type": "Identifier",
                          "start": 860,
                          "end": 861,
                          "name": "V",
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
                          "id": {
                            "type": "Identifier",
                            "start": 885,
                            "end": 890,
                            "name": "entry",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 893,
                            "end": 915,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 893,
                              "end": 910,
                              "object": {
                                "type": "MemberExpression",
                                "start": 893,
                                "end": 906,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 893,
                                  "end": 897
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 898,
                                  "end": 906,
                                  "name": "weakMap"
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 907,
                                "end": 910,
                                "name": "get",
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
                                "start": 911,
                                "end": 914,
                                "name": "key",
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
                      "type": "IfStatement",
                      "start": 925,
                      "end": 1270,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 929,
                        "end": 948,
                        "left": {
                          "type": "Identifier",
                          "start": 929,
                          "end": 934,
                          "name": "entry",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "!==",
                        "right": {
                          "type": "Identifier",
                          "start": 939,
                          "end": 948,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
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
                            "expression": {
                              "type": "AssignmentExpression",
                              "start": 964,
                              "end": 983,
                              "operator": "=",
                              "left": {
                                "type": "MemberExpression",
                                "start": 964,
                                "end": 975,
                                "object": {
                                  "type": "Identifier",
                                  "start": 964,
                                  "end": 969,
                                  "name": "entry",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 970,
                                  "end": 975,
                                  "name": "value",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              "right": {
                                "type": "Identifier",
                                "start": 978,
                                "end": 983,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      },
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 1020,
                                  "end": 1023,
                                  "name": "ref",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "NewExpression",
                                  "start": 1026,
                                  "end": 1042,
                                  "callee": {
                                    "type": "Identifier",
                                    "start": 1030,
                                    "end": 1037,
                                    "name": "WeakRef",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "type": "Identifier",
                                      "start": 1038,
                                      "end": 1041,
                                      "name": "key",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    }
                                  ],
                                  "typeArguments": null
                                },
                                "definite": false
                              }
                            ],
                            "kind": "const",
                            "declare": false
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1057,
                            "end": 1096,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1057,
                              "end": 1095,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1057,
                                "end": 1074,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1057,
                                  "end": 1070,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1057,
                                    "end": 1061
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 1062,
                                    "end": 1070,
                                    "name": "weakMap"
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1071,
                                  "end": 1074,
                                  "name": "set",
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
                                  "start": 1075,
                                  "end": 1078,
                                  "name": "key",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1082,
                                        "end": 1085,
                                        "name": "ref",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1082,
                                        "end": 1085,
                                        "name": "ref",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "optional": false
                                    },
                                    {
                                      "type": "Property",
                                      "start": 1087,
                                      "end": 1092,
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1087,
                                        "end": 1092,
                                        "name": "value",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1087,
                                        "end": 1092,
                                        "name": "value",
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
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1109,
                            "end": 1131,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1109,
                              "end": 1130,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1109,
                                "end": 1125,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1109,
                                  "end": 1121,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1109,
                                    "end": 1113
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 1114,
                                    "end": 1121,
                                    "name": "refSet"
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1122,
                                  "end": 1125,
                                  "name": "add",
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
                                  "start": 1126,
                                  "end": 1129,
                                  "name": "ref",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 1144,
                            "end": 1260,
                            "expression": {
                              "type": "CallExpression",
                              "start": 1144,
                              "end": 1259,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 1144,
                                "end": 1176,
                                "object": {
                                  "type": "MemberExpression",
                                  "start": 1144,
                                  "end": 1167,
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 1144,
                                    "end": 1148
                                  },
                                  "property": {
                                    "type": "PrivateIdentifier",
                                    "start": 1149,
                                    "end": 1167,
                                    "name": "finalizationGroup"
                                  },
                                  "computed": false,
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 1168,
                                  "end": 1176,
                                  "name": "register",
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
                                  "start": 1177,
                                  "end": 1180,
                                  "name": "key",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
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
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1200,
                                        "end": 1203,
                                        "name": "set",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "MemberExpression",
                                        "start": 1205,
                                        "end": 1217,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 1205,
                                          "end": 1209
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 1210,
                                          "end": 1217,
                                          "name": "refSet"
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "optional": false
                                    },
                                    {
                                      "type": "Property",
                                      "start": 1235,
                                      "end": 1238,
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 1235,
                                        "end": 1238,
                                        "name": "ref",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 1235,
                                        "end": 1238,
                                        "name": "ref",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "optional": false
                                    }
                                  ]
                                },
                                {
                                  "type": "Identifier",
                                  "start": 1255,
                                  "end": 1258,
                                  "name": "ref",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                }
                              ],
                              "optional": false,
                              "typeArguments": null
                            },
                            "directive": null
                          }
                        ]
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
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 862,
                  "end": 868,
                  "typeAnnotation": {
                    "type": "TSThisType",
                    "start": 864,
                    "end": 868
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1303,
              "end": 1370,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1303,
                "end": 1306,
                "name": "has",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1306,
                "end": 1370,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1307,
                    "end": 1313,
                    "name": "key",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1310,
                      "end": 1313,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1312,
                        "end": 1313,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1312,
                          "end": 1313,
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
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1341,
                          "end": 1358,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1341,
                            "end": 1354,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1341,
                              "end": 1345
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1346,
                              "end": 1354,
                              "name": "weakMap"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1355,
                            "end": 1358,
                            "name": "has",
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
                            "start": 1359,
                            "end": 1362,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1314,
                  "end": 1323,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1316,
                    "end": 1323
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1376,
              "end": 1456,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1376,
                "end": 1379,
                "name": "get",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1379,
                "end": 1456,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1380,
                    "end": 1386,
                    "name": "key",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1383,
                      "end": 1386,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1385,
                        "end": 1386,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1385,
                          "end": 1386,
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
                          "object": {
                            "type": "CallExpression",
                            "start": 1420,
                            "end": 1442,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1420,
                              "end": 1437,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1420,
                                "end": 1433,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1420,
                                  "end": 1424
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 1425,
                                  "end": 1433,
                                  "name": "weakMap"
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1434,
                                "end": 1437,
                                "name": "get",
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
                                "start": 1438,
                                "end": 1441,
                                "name": "key",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1444,
                            "end": 1449,
                            "name": "value",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": true
                        }
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
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
                        "typeName": {
                          "type": "Identifier",
                          "start": 1389,
                          "end": 1390,
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1393,
                        "end": 1402
                      }
                    ]
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1462,
              "end": 1781,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1462,
                "end": 1468,
                "name": "delete",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1468,
                "end": 1781,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 1469,
                    "end": 1475,
                    "name": "key",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1472,
                      "end": 1475,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1474,
                        "end": 1475,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1474,
                          "end": 1475,
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
                          "id": {
                            "type": "Identifier",
                            "start": 1502,
                            "end": 1507,
                            "name": "entry",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "init": {
                            "type": "CallExpression",
                            "start": 1510,
                            "end": 1532,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1510,
                              "end": 1527,
                              "object": {
                                "type": "MemberExpression",
                                "start": 1510,
                                "end": 1523,
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 1510,
                                  "end": 1514
                                },
                                "property": {
                                  "type": "PrivateIdentifier",
                                  "start": 1515,
                                  "end": 1523,
                                  "name": "weakMap"
                                },
                                "computed": false,
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1524,
                                "end": 1527,
                                "name": "get",
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
                                "start": 1528,
                                "end": 1531,
                                "name": "key",
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
                      "type": "IfStatement",
                      "start": 1542,
                      "end": 1604,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 1546,
                        "end": 1565,
                        "left": {
                          "type": "Identifier",
                          "start": 1546,
                          "end": 1551,
                          "name": "entry",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "===",
                        "right": {
                          "type": "Identifier",
                          "start": 1556,
                          "end": 1565,
                          "name": "undefined",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
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
                              "value": false,
                              "raw": "false"
                            }
                          }
                        ]
                      },
                      "alternate": null
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
                          "id": {
                            "type": "ObjectPattern",
                            "start": 1620,
                            "end": 1627,
                            "properties": [
                              {
                                "type": "Property",
                                "start": 1622,
                                "end": 1625,
                                "method": false,
                                "shorthand": true,
                                "computed": false,
                                "key": {
                                  "type": "Identifier",
                                  "start": 1622,
                                  "end": 1625,
                                  "name": "ref",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "value": {
                                  "type": "Identifier",
                                  "start": 1622,
                                  "end": 1625,
                                  "name": "ref",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "kind": "init",
                                "optional": false
                              }
                            ],
                            "decorators": [],
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "init": {
                            "type": "Identifier",
                            "start": 1630,
                            "end": 1635,
                            "name": "entry",
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
                      "type": "ExpressionStatement",
                      "start": 1645,
                      "end": 1671,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1645,
                        "end": 1670,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1645,
                          "end": 1665,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1645,
                            "end": 1658,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1645,
                              "end": 1649
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1650,
                              "end": 1658,
                              "name": "weakMap"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1659,
                            "end": 1665,
                            "name": "delete",
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
                            "start": 1666,
                            "end": 1669,
                            "name": "key",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1680,
                      "end": 1705,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1680,
                        "end": 1704,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1680,
                          "end": 1699,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1680,
                            "end": 1692,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1680,
                              "end": 1684
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1685,
                              "end": 1692,
                              "name": "refSet"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1693,
                            "end": 1699,
                            "name": "delete",
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
                            "start": 1700,
                            "end": 1703,
                            "name": "ref",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ExpressionStatement",
                      "start": 1714,
                      "end": 1754,
                      "expression": {
                        "type": "CallExpression",
                        "start": 1714,
                        "end": 1753,
                        "callee": {
                          "type": "MemberExpression",
                          "start": 1714,
                          "end": 1748,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1714,
                            "end": 1737,
                            "object": {
                              "type": "ThisExpression",
                              "start": 1714,
                              "end": 1718
                            },
                            "property": {
                              "type": "PrivateIdentifier",
                              "start": 1719,
                              "end": 1737,
                              "name": "finalizationGroup"
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1738,
                            "end": 1748,
                            "name": "unregister",
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
                            "start": 1749,
                            "end": 1752,
                            "name": "ref",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeArguments": null
                      },
                      "directive": null
                    },
                    {
                      "type": "ReturnStatement",
                      "start": 1763,
                      "end": 1775,
                      "argument": {
                        "type": "Literal",
                        "start": 1770,
                        "end": 1774,
                        "value": true,
                        "raw": "true"
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1476,
                  "end": 1485,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 1478,
                    "end": 1485
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 1787,
              "end": 1830,
              "static": false,
              "computed": true,
              "key": {
                "type": "MemberExpression",
                "start": 1796,
                "end": 1811,
                "object": {
                  "type": "Identifier",
                  "start": 1796,
                  "end": 1802,
                  "name": "Symbol",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1803,
                  "end": 1811,
                  "name": "iterator",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "value": null,
              "decorators": [],
              "declare": true,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 1812,
                "end": 1829,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1814,
                  "end": 1829,
                  "objectType": {
                    "type": "TSThisType",
                    "start": 1814,
                    "end": 1818
                  },
                  "indexType": {
                    "type": "TSLiteralType",
                    "start": 1819,
                    "end": 1828,
                    "literal": {
                      "type": "Literal",
                      "start": 1819,
                      "end": 1828,
                      "value": "entries",
                      "raw": "\"entries\""
                    }
                  }
                }
              },
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 1835,
              "end": 2111,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 1836,
                "end": 1843,
                "name": "entries",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 1843,
                "end": 2111,
                "id": null,
                "expression": false,
                "generator": true,
                "async": false,
                "params": [],
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
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 1898,
                        "end": 1907,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 1904,
                            "end": 1907,
                            "id": {
                              "type": "Identifier",
                              "start": 1904,
                              "end": 1907,
                              "name": "ref",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      "right": {
                        "type": "MemberExpression",
                        "start": 1911,
                        "end": 1923,
                        "object": {
                          "type": "ThisExpression",
                          "start": 1911,
                          "end": 1915
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "start": 1916,
                          "end": 1923,
                          "name": "refSet"
                        },
                        "computed": false,
                        "optional": false
                      },
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
                                "id": {
                                  "type": "Identifier",
                                  "start": 1945,
                                  "end": 1948,
                                  "name": "key",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "init": {
                                  "type": "CallExpression",
                                  "start": 1951,
                                  "end": 1962,
                                  "callee": {
                                    "type": "MemberExpression",
                                    "start": 1951,
                                    "end": 1960,
                                    "object": {
                                      "type": "Identifier",
                                      "start": 1951,
                                      "end": 1954,
                                      "name": "ref",
                                      "typeAnnotation": null,
                                      "decorators": [],
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 1955,
                                      "end": 1960,
                                      "name": "deref",
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
                                "definite": false
                              }
                            ],
                            "kind": "const",
                            "declare": false
                          },
                          {
                            "type": "IfStatement",
                            "start": 1976,
                            "end": 2008,
                            "test": {
                              "type": "BinaryExpression",
                              "start": 1980,
                              "end": 1997,
                              "left": {
                                "type": "Identifier",
                                "start": 1980,
                                "end": 1983,
                                "name": "key",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "operator": "===",
                              "right": {
                                "type": "Identifier",
                                "start": 1988,
                                "end": 1997,
                                "name": "undefined",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "consequent": {
                              "type": "ContinueStatement",
                              "start": 1999,
                              "end": 2008,
                              "label": null
                            },
                            "alternate": null
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
                                "id": {
                                  "type": "ObjectPattern",
                                  "start": 2027,
                                  "end": 2036,
                                  "properties": [
                                    {
                                      "type": "Property",
                                      "start": 2029,
                                      "end": 2034,
                                      "method": false,
                                      "shorthand": true,
                                      "computed": false,
                                      "key": {
                                        "type": "Identifier",
                                        "start": 2029,
                                        "end": 2034,
                                        "name": "value",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "value": {
                                        "type": "Identifier",
                                        "start": 2029,
                                        "end": 2034,
                                        "name": "value",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
                                      },
                                      "kind": "init",
                                      "optional": false
                                    }
                                  ],
                                  "decorators": [],
                                  "optional": false,
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
                                    "callee": {
                                      "type": "MemberExpression",
                                      "start": 2039,
                                      "end": 2056,
                                      "object": {
                                        "type": "MemberExpression",
                                        "start": 2039,
                                        "end": 2052,
                                        "object": {
                                          "type": "ThisExpression",
                                          "start": 2039,
                                          "end": 2043
                                        },
                                        "property": {
                                          "type": "PrivateIdentifier",
                                          "start": 2044,
                                          "end": 2052,
                                          "name": "weakMap"
                                        },
                                        "computed": false,
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "start": 2053,
                                        "end": 2056,
                                        "name": "get",
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
                                        "start": 2057,
                                        "end": 2060,
                                        "name": "key",
                                        "typeAnnotation": null,
                                        "decorators": [],
                                        "optional": false
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
                            "type": "ExpressionStatement",
                            "start": 2076,
                            "end": 2095,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 2076,
                              "end": 2094,
                              "delegate": false,
                              "argument": {
                                "type": "ArrayExpression",
                                "start": 2082,
                                "end": 2094,
                                "elements": [
                                  {
                                    "type": "Identifier",
                                    "start": 2083,
                                    "end": 2086,
                                    "name": "key",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  {
                                    "type": "Identifier",
                                    "start": 2088,
                                    "end": 2093,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  }
                                ]
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1845,
                  "end": 1882,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1847,
                    "end": 1882,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1847,
                      "end": 1856,
                      "name": "Generator",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1863,
                                  "end": 1864,
                                  "name": "K",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "label": {
                                "type": "Identifier",
                                "start": 1858,
                                "end": 1861,
                                "name": "key",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 1873,
                                  "end": 1874,
                                  "name": "V",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              "label": {
                                "type": "Identifier",
                                "start": 1866,
                                "end": 1871,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                    }
                  }
                }
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 2117,
              "end": 2206,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2118,
                "end": 2122,
                "name": "keys",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 2122,
                "end": 2206,
                "id": null,
                "expression": false,
                "generator": true,
                "async": false,
                "params": [],
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
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 2140,
                        "end": 2156,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2146,
                            "end": 2156,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 2146,
                              "end": 2156,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2148,
                                  "end": 2154,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Literal",
                                    "start": 2148,
                                    "end": 2149,
                                    "value": 0,
                                    "raw": "0"
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 2151,
                                    "end": 2154,
                                    "name": "key",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ],
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2160,
                        "end": 2164
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2166,
                        "end": 2200,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2180,
                            "end": 2190,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 2180,
                              "end": 2189,
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "start": 2186,
                                "end": 2189,
                                "name": "key",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            },
            {
              "type": "MethodDefinition",
              "start": 2212,
              "end": 2307,
              "static": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 2213,
                "end": 2219,
                "name": "values",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "kind": "method",
              "value": {
                "type": "FunctionExpression",
                "start": 2219,
                "end": 2307,
                "id": null,
                "expression": false,
                "generator": true,
                "async": false,
                "params": [],
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
                      "left": {
                        "type": "VariableDeclaration",
                        "start": 2237,
                        "end": 2255,
                        "declarations": [
                          {
                            "type": "VariableDeclarator",
                            "start": 2243,
                            "end": 2255,
                            "id": {
                              "type": "ObjectPattern",
                              "start": 2243,
                              "end": 2255,
                              "properties": [
                                {
                                  "type": "Property",
                                  "start": 2245,
                                  "end": 2253,
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "key": {
                                    "type": "Literal",
                                    "start": 2245,
                                    "end": 2246,
                                    "value": 1,
                                    "raw": "1"
                                  },
                                  "value": {
                                    "type": "Identifier",
                                    "start": 2248,
                                    "end": 2253,
                                    "name": "value",
                                    "typeAnnotation": null,
                                    "decorators": [],
                                    "optional": false
                                  },
                                  "kind": "init",
                                  "optional": false
                                }
                              ],
                              "decorators": [],
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "init": null,
                            "definite": false
                          }
                        ],
                        "kind": "const",
                        "declare": false
                      },
                      "right": {
                        "type": "ThisExpression",
                        "start": 2259,
                        "end": 2263
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 2265,
                        "end": 2301,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 2279,
                            "end": 2291,
                            "expression": {
                              "type": "YieldExpression",
                              "start": 2279,
                              "end": 2290,
                              "delegate": false,
                              "argument": {
                                "type": "Identifier",
                                "start": 2285,
                                "end": 2290,
                                "name": "value",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              }
                            },
                            "directive": null
                          }
                        ]
                      }
                    }
                  ]
                },
                "declare": false,
                "typeParameters": null,
                "returnType": null
              },
              "decorators": [],
              "override": false,
              "optional": false,
              "accessibility": null
            }
          ]
        },
        "decorators": [],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 305,
          "end": 326,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 306,
              "end": 322,
              "name": {
                "type": "Identifier",
                "start": 306,
                "end": 307,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSObjectKeyword",
                "start": 316,
                "end": 322
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 324,
              "end": 325,
              "name": {
                "type": "Identifier",
                "start": 324,
                "end": 325,
                "name": "V",
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
        "implements": [
          {
            "type": "TSClassImplements",
            "start": 338,
            "end": 351,
            "expression": {
              "type": "Identifier",
              "start": 338,
              "end": 345,
              "name": "WeakMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 346,
                    "end": 347,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 349,
                  "end": 350,
                  "typeName": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "name": "V",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ],
        "abstract": false,
        "declare": false,
        "superTypeArguments": null
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExpressionStatement",
      "start": 2311,
      "end": 2755,
      "expression": {
        "type": "CallExpression",
        "start": 2311,
        "end": 2754,
        "callee": {
          "type": "MemberExpression",
          "start": 2311,
          "end": 2334,
          "object": {
            "type": "Identifier",
            "start": 2311,
            "end": 2317,
            "name": "Object",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 2318,
            "end": 2334,
            "name": "defineProperties",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "MemberExpression",
            "start": 2335,
            "end": 2360,
            "object": {
              "type": "Identifier",
              "start": 2335,
              "end": 2350,
              "name": "IterableWeakMap",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 2351,
              "end": 2360,
              "name": "prototype",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 2369,
                  "end": 2384,
                  "object": {
                    "type": "Identifier",
                    "start": 2369,
                    "end": 2375,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2376,
                    "end": 2384,
                    "name": "iterator",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2387,
                  "end": 2601,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2397,
                      "end": 2415,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2397,
                        "end": 2409,
                        "name": "configurable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2411,
                        "end": 2415,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2425,
                      "end": 2442,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2425,
                        "end": 2435,
                        "name": "enumerable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2437,
                        "end": 2442,
                        "value": false,
                        "raw": "false"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2452,
                      "end": 2466,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2452,
                        "end": 2460,
                        "name": "writable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2462,
                        "end": 2466,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2476,
                      "end": 2594,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2476,
                        "end": 2481,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 2483,
                        "end": 2594,
                        "object": {
                          "type": "TSNonNullExpression",
                          "start": 2483,
                          "end": 2588,
                          "expression": {
                            "type": "CallExpression",
                            "start": 2483,
                            "end": 2587,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 2483,
                              "end": 2514,
                              "object": {
                                "type": "Identifier",
                                "start": 2483,
                                "end": 2489,
                                "name": "Object",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2490,
                                "end": 2514,
                                "name": "getOwnPropertyDescriptor",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [
                              {
                                "type": "MemberExpression",
                                "start": 2528,
                                "end": 2553,
                                "object": {
                                  "type": "Identifier",
                                  "start": 2528,
                                  "end": 2543,
                                  "name": "IterableWeakMap",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 2544,
                                  "end": 2553,
                                  "name": "prototype",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "computed": false,
                                "optional": false
                              },
                              {
                                "type": "Literal",
                                "start": 2567,
                                "end": 2576,
                                "value": "entries",
                                "raw": "\"entries\""
                              }
                            ],
                            "optional": false,
                            "typeArguments": null
                          }
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2589,
                          "end": 2594,
                          "name": "value",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 2607,
                "end": 2750,
                "method": false,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "MemberExpression",
                  "start": 2608,
                  "end": 2626,
                  "object": {
                    "type": "Identifier",
                    "start": 2608,
                    "end": 2614,
                    "name": "Symbol",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2615,
                    "end": 2626,
                    "name": "toStringTag",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "value": {
                  "type": "ObjectExpression",
                  "start": 2629,
                  "end": 2750,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2639,
                      "end": 2657,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2639,
                        "end": 2651,
                        "name": "configurable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2653,
                        "end": 2657,
                        "value": true,
                        "raw": "true"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2667,
                      "end": 2684,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2667,
                        "end": 2677,
                        "name": "enumerable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2679,
                        "end": 2684,
                        "value": false,
                        "raw": "false"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2694,
                      "end": 2709,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2694,
                        "end": 2702,
                        "name": "writable",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2704,
                        "end": 2709,
                        "value": false,
                        "raw": "false"
                      },
                      "kind": "init",
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2719,
                      "end": 2743,
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 2719,
                        "end": 2724,
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "value": {
                        "type": "Literal",
                        "start": 2726,
                        "end": 2743,
                        "value": "IterableWeakMap",
                        "raw": "\"IterableWeakMap\""
                      },
                      "kind": "init",
                      "optional": false
                    }
                  ]
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
