__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2817,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 144,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "decorators": [],
        "name": "NumClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 14,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 31,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
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
        "start": 33,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 57,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 112,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 112,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 74,
                "end": 77,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 76,
                  "end": 77,
                  "typeName": {
                    "type": "Identifier",
                    "start": 76,
                    "end": 77,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 78,
                "end": 112,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 88,
                    "end": 106,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 95,
                      "end": 105,
                      "object": {
                        "type": "ThisExpression",
                        "start": 95,
                        "end": 99
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 100,
                        "end": 105,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 142,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 136,
              "decorators": [],
              "name": "numExclusive",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 142,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 139,
                "end": 142,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 290,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "decorators": [],
        "name": "StrClass",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 160,
        "end": 178,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 161,
            "end": 177,
            "name": {
              "type": "Identifier",
              "start": 161,
              "end": 162,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 171,
              "end": 177
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
        "start": 179,
        "end": 290,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 185,
            "end": 203,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 198,
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 202,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 202,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 202,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 208,
            "end": 258,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 218,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 218,
              "end": 258,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 220,
                "end": 223,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 222,
                  "end": 223,
                  "typeName": {
                    "type": "Identifier",
                    "start": 222,
                    "end": 223,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 224,
                "end": 258,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 234,
                    "end": 252,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 241,
                      "end": 251,
                      "object": {
                        "type": "ThisExpression",
                        "start": 241,
                        "end": 245
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 246,
                        "end": 251,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 263,
            "end": 288,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 282,
              "decorators": [],
              "name": "strExclusive",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 288,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 285,
                "end": 288,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 480,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 480,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 308,
            "decorators": [],
            "name": "isNumClass",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 311,
            "end": 480,
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 311,
              "end": 361,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 312,
                  "end": 360,
                  "name": {
                    "type": "Identifier",
                    "start": 312,
                    "end": 316,
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSUnionType",
                    "start": 325,
                    "end": 360,
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "start": 325,
                        "end": 341,
                        "typeName": {
                          "type": "Identifier",
                          "start": 325,
                          "end": 333,
                          "decorators": [],
                          "name": "NumClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 333,
                          "end": 341,
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 334,
                              "end": 340
                            }
                          ]
                        }
                      },
                      {
                        "type": "TSTypeReference",
                        "start": 344,
                        "end": 360,
                        "typeName": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 352,
                          "decorators": [],
                          "name": "StrClass",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 352,
                          "end": 360,
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 353,
                              "end": 359
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 372,
                "end": 382,
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 376,
                  "end": 382,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 378,
                    "end": 382,
                    "typeName": {
                      "type": "Identifier",
                      "start": 378,
                      "end": 382,
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 426,
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "start": 390,
                "end": 426,
                "parameterName": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 394,
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 398,
                  "end": 426,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 398,
                    "end": 426,
                    "typeName": {
                      "type": "Identifier",
                      "start": 398,
                      "end": 405,
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 405,
                      "end": 426,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 406,
                          "end": 410,
                          "typeName": {
                            "type": "Identifier",
                            "start": 406,
                            "end": 410,
                            "decorators": [],
                            "name": "Item",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 412,
                          "end": 425,
                          "typeName": {
                            "type": "Identifier",
                            "start": 412,
                            "end": 420,
                            "decorators": [],
                            "name": "NumClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 420,
                            "end": 425,
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 421,
                                "end": 424
                              }
                            ]
                          }
                        }
                      ]
                    }
                  }
                }
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 430,
              "end": 480,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 440,
                  "end": 474,
                  "argument": {
                    "type": "BinaryExpression",
                    "start": 448,
                    "end": 472,
                    "left": {
                      "type": "Identifier",
                      "start": 448,
                      "end": 452,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 472,
                      "decorators": [],
                      "name": "NumClass",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 591,
      "end": 1085,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 597,
        "end": 608,
        "decorators": [],
        "name": "SimpleStore",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 608,
        "end": 682,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 609,
            "end": 681,
            "name": {
              "type": "Identifier",
              "start": 609,
              "end": 616,
              "decorators": [],
              "name": "Entries",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 625,
              "end": 681,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 627,
                  "end": 679,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 628,
                      "end": 641,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 633,
                        "end": 641,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 635,
                          "end": 641
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 642,
                    "end": 679,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 644,
                      "end": 679,
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "start": 644,
                          "end": 660,
                          "typeName": {
                            "type": "Identifier",
                            "start": 644,
                            "end": 652,
                            "decorators": [],
                            "name": "NumClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 652,
                            "end": 660,
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 653,
                                "end": 659
                              }
                            ]
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 663,
                          "end": 679,
                          "typeName": {
                            "type": "Identifier",
                            "start": 663,
                            "end": 671,
                            "decorators": [],
                            "name": "StrClass",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "start": 671,
                            "end": 679,
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 672,
                                "end": 678
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
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
        "start": 683,
        "end": 1085,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 689,
            "end": 722,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 697,
              "end": 704,
              "decorators": [],
              "name": "entries",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSAsExpression",
              "start": 707,
              "end": 721,
              "expression": {
                "type": "ObjectExpression",
                "start": 707,
                "end": 710,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 714,
                "end": 721,
                "typeName": {
                  "type": "Identifier",
                  "start": 714,
                  "end": 721,
                  "decorators": [],
                  "name": "Entries",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 728,
            "end": 1083,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 735,
              "end": 738,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 738,
              "end": 1083,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 738,
                "end": 769,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 739,
                    "end": 768,
                    "name": {
                      "type": "Identifier",
                      "start": 739,
                      "end": 746,
                      "decorators": [],
                      "name": "EntryId",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 755,
                      "end": 768,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 761,
                        "end": 768,
                        "typeName": {
                          "type": "Identifier",
                          "start": 761,
                          "end": 768,
                          "decorators": [],
                          "name": "Entries",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "Identifier",
                  "start": 770,
                  "end": 786,
                  "decorators": [],
                  "name": "entryId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 777,
                    "end": 786,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 779,
                      "end": 786,
                      "typeName": {
                        "type": "Identifier",
                        "start": 779,
                        "end": 786,
                        "decorators": [],
                        "name": "EntryId",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 787,
                "end": 805,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 789,
                  "end": 805,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 789,
                    "end": 796,
                    "typeName": {
                      "type": "Identifier",
                      "start": 789,
                      "end": 796,
                      "decorators": [],
                      "name": "Entries",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 797,
                    "end": 804,
                    "typeName": {
                      "type": "Identifier",
                      "start": 797,
                      "end": 804,
                      "decorators": [],
                      "name": "EntryId",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 806,
                "end": 1083,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 816,
                    "end": 850,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 820,
                        "end": 849,
                        "id": {
                          "type": "Identifier",
                          "start": 820,
                          "end": 825,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 828,
                          "end": 849,
                          "object": {
                            "type": "MemberExpression",
                            "start": 828,
                            "end": 840,
                            "object": {
                              "type": "ThisExpression",
                              "start": 828,
                              "end": 832
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 833,
                              "end": 840,
                              "decorators": [],
                              "name": "entries",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 841,
                            "end": 848,
                            "decorators": [],
                            "name": "entryId",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 860,
                    "end": 881,
                    "expression": {
                      "type": "CallExpression",
                      "start": 860,
                      "end": 880,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 860,
                        "end": 878,
                        "object": {
                          "type": "Identifier",
                          "start": 860,
                          "end": 865,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 866,
                          "end": 878,
                          "decorators": [],
                          "name": "numExclusive",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 912,
                    "end": 1015,
                    "test": {
                      "type": "CallExpression",
                      "start": 916,
                      "end": 933,
                      "callee": {
                        "type": "Identifier",
                        "start": 916,
                        "end": 926,
                        "decorators": [],
                        "name": "isNumClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 927,
                          "end": 932,
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 935,
                      "end": 1015,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 949,
                          "end": 970,
                          "expression": {
                            "type": "CallExpression",
                            "start": 949,
                            "end": 969,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 949,
                              "end": 967,
                              "object": {
                                "type": "Identifier",
                                "start": 949,
                                "end": 954,
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 955,
                                "end": 967,
                                "decorators": [],
                                "name": "numExclusive",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ReturnStatement",
                          "start": 992,
                          "end": 1005,
                          "argument": {
                            "type": "Identifier",
                            "start": 999,
                            "end": 1004,
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1025,
                    "end": 1038,
                    "argument": {
                      "type": "Identifier",
                      "start": 1032,
                      "end": 1037,
                      "decorators": [],
                      "name": "entry",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1087,
      "end": 1160,
      "id": {
        "type": "Identifier",
        "start": 1092,
        "end": 1097,
        "decorators": [],
        "name": "Slice",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1100,
        "end": 1160,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 1106,
            "end": 1158,
            "parameters": [
              {
                "type": "Identifier",
                "start": 1107,
                "end": 1120,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1112,
                  "end": 1120,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1114,
                    "end": 1120
                  }
                }
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1121,
              "end": 1158,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1123,
                "end": 1158,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1123,
                    "end": 1139,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1123,
                      "end": 1131,
                      "decorators": [],
                      "name": "NumClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1131,
                      "end": 1139,
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1132,
                          "end": 1138
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1142,
                    "end": 1158,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1142,
                      "end": 1150,
                      "decorators": [],
                      "name": "StrClass",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 1150,
                      "end": 1158,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1151,
                          "end": 1157
                        }
                      ]
                    }
                  }
                ]
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 1354,
      "end": 2436,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 1360,
        "end": 1372,
        "decorators": [],
        "name": "ComplexStore",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1372,
        "end": 1415,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1373,
            "end": 1414,
            "name": {
              "type": "Identifier",
              "start": 1373,
              "end": 1379,
              "decorators": [],
              "name": "Slices",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 1388,
              "end": 1414,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 1390,
                  "end": 1412,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1391,
                      "end": 1404,
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1396,
                        "end": 1404,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1398,
                          "end": 1404
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1405,
                    "end": 1412,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1407,
                      "end": 1412,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1407,
                        "end": 1412,
                        "decorators": [],
                        "name": "Slice",
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
        "start": 1416,
        "end": 2436,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1422,
            "end": 1453,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1430,
              "end": 1436,
              "decorators": [],
              "name": "slices",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSAsExpression",
              "start": 1439,
              "end": 1452,
              "expression": {
                "type": "ObjectExpression",
                "start": 1439,
                "end": 1442,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1446,
                "end": 1452,
                "typeName": {
                  "type": "Identifier",
                  "start": 1446,
                  "end": 1452,
                  "decorators": [],
                  "name": "Slices",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1459,
            "end": 1988,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 1466,
              "end": 1469,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 1469,
              "end": 1988,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 1469,
                "end": 1539,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 1470,
                    "end": 1498,
                    "name": {
                      "type": "Identifier",
                      "start": 1470,
                      "end": 1477,
                      "decorators": [],
                      "name": "SliceId",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 1486,
                      "end": 1498,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1492,
                        "end": 1498,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1492,
                          "end": 1498,
                          "decorators": [],
                          "name": "Slices",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 1500,
                    "end": 1538,
                    "name": {
                      "type": "Identifier",
                      "start": 1500,
                      "end": 1508,
                      "decorators": [],
                      "name": "SliceKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 1517,
                      "end": 1538,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 1523,
                        "end": 1538,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 1523,
                          "end": 1529,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1523,
                            "end": 1529,
                            "decorators": [],
                            "name": "Slices",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 1530,
                          "end": 1537,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1530,
                            "end": 1537,
                            "decorators": [],
                            "name": "SliceId",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 1549,
                  "end": 1565,
                  "decorators": [],
                  "name": "sliceId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1556,
                    "end": 1565,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1558,
                      "end": 1565,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1558,
                        "end": 1565,
                        "decorators": [],
                        "name": "SliceId",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 1567,
                  "end": 1585,
                  "decorators": [],
                  "name": "sliceKey",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1575,
                    "end": 1585,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 1577,
                      "end": 1585,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1577,
                        "end": 1585,
                        "decorators": [],
                        "name": "SliceKey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 1591,
                "end": 1618,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 1593,
                  "end": 1618,
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "start": 1593,
                    "end": 1608,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 1593,
                      "end": 1599,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1593,
                        "end": 1599,
                        "decorators": [],
                        "name": "Slices",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 1600,
                      "end": 1607,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1600,
                        "end": 1607,
                        "decorators": [],
                        "name": "SliceId",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 1609,
                    "end": 1617,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1609,
                      "end": 1617,
                      "decorators": [],
                      "name": "SliceKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 1619,
                "end": 1988,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1629,
                    "end": 1671,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1633,
                        "end": 1670,
                        "id": {
                          "type": "Identifier",
                          "start": 1633,
                          "end": 1637,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 1640,
                          "end": 1670,
                          "object": {
                            "type": "MemberExpression",
                            "start": 1640,
                            "end": 1660,
                            "object": {
                              "type": "MemberExpression",
                              "start": 1640,
                              "end": 1651,
                              "object": {
                                "type": "ThisExpression",
                                "start": 1640,
                                "end": 1644
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1645,
                                "end": 1651,
                                "decorators": [],
                                "name": "slices",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1652,
                              "end": 1659,
                              "decorators": [],
                              "name": "sliceId",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": true
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1661,
                            "end": 1669,
                            "decorators": [],
                            "name": "sliceKey",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 1681,
                    "end": 1779,
                    "test": {
                      "type": "CallExpression",
                      "start": 1685,
                      "end": 1701,
                      "callee": {
                        "type": "Identifier",
                        "start": 1685,
                        "end": 1695,
                        "decorators": [],
                        "name": "isNumClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1696,
                          "end": 1700,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 1703,
                      "end": 1779,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 1717,
                          "end": 1737,
                          "expression": {
                            "type": "CallExpression",
                            "start": 1717,
                            "end": 1736,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 1717,
                              "end": 1734,
                              "object": {
                                "type": "Identifier",
                                "start": 1717,
                                "end": 1721,
                                "decorators": [],
                                "name": "item",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1722,
                                "end": 1734,
                                "decorators": [],
                                "name": "numExclusive",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 1789,
                    "end": 1800,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1789,
                      "end": 1799,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 1789,
                        "end": 1797,
                        "object": {
                          "type": "Identifier",
                          "start": 1789,
                          "end": 1793,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1794,
                          "end": 1797,
                          "decorators": [],
                          "name": "get",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1947,
                    "end": 1959,
                    "argument": {
                      "type": "Identifier",
                      "start": 1954,
                      "end": 1958,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 1994,
            "end": 2434,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2001,
              "end": 2005,
              "decorators": [],
              "name": "get2",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2005,
              "end": 2434,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2005,
                "end": 2075,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2006,
                    "end": 2034,
                    "name": {
                      "type": "Identifier",
                      "start": 2006,
                      "end": 2013,
                      "decorators": [],
                      "name": "SliceId",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 2022,
                      "end": 2034,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2028,
                        "end": 2034,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2028,
                          "end": 2034,
                          "decorators": [],
                          "name": "Slices",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 2036,
                    "end": 2074,
                    "name": {
                      "type": "Identifier",
                      "start": 2036,
                      "end": 2044,
                      "decorators": [],
                      "name": "SliceKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 2053,
                      "end": 2074,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 2059,
                        "end": 2074,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 2059,
                          "end": 2065,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2059,
                            "end": 2065,
                            "decorators": [],
                            "name": "Slices",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 2066,
                          "end": 2073,
                          "typeName": {
                            "type": "Identifier",
                            "start": 2066,
                            "end": 2073,
                            "decorators": [],
                            "name": "SliceId",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
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
              "params": [
                {
                  "type": "Identifier",
                  "start": 2085,
                  "end": 2101,
                  "decorators": [],
                  "name": "sliceId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2092,
                    "end": 2101,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2094,
                      "end": 2101,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2094,
                        "end": 2101,
                        "decorators": [],
                        "name": "SliceId",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                },
                {
                  "type": "Identifier",
                  "start": 2103,
                  "end": 2121,
                  "decorators": [],
                  "name": "sliceKey",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2111,
                    "end": 2121,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 2113,
                      "end": 2121,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2113,
                        "end": 2121,
                        "decorators": [],
                        "name": "SliceKey",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2127,
                "end": 2154,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 2129,
                  "end": 2154,
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "start": 2129,
                    "end": 2144,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2129,
                      "end": 2135,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2129,
                        "end": 2135,
                        "decorators": [],
                        "name": "Slices",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 2136,
                      "end": 2143,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2136,
                        "end": 2143,
                        "decorators": [],
                        "name": "SliceId",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 2145,
                    "end": 2153,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2145,
                      "end": 2153,
                      "decorators": [],
                      "name": "SliceKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 2155,
                "end": 2434,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2165,
                    "end": 2207,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2169,
                        "end": 2206,
                        "id": {
                          "type": "Identifier",
                          "start": 2169,
                          "end": 2173,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 2176,
                          "end": 2206,
                          "object": {
                            "type": "MemberExpression",
                            "start": 2176,
                            "end": 2196,
                            "object": {
                              "type": "MemberExpression",
                              "start": 2176,
                              "end": 2187,
                              "object": {
                                "type": "ThisExpression",
                                "start": 2176,
                                "end": 2180
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 2181,
                                "end": 2187,
                                "decorators": [],
                                "name": "slices",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2188,
                              "end": 2195,
                              "decorators": [],
                              "name": "sliceId",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": true
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2197,
                            "end": 2205,
                            "decorators": [],
                            "name": "sliceKey",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": true
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "IfStatement",
                    "start": 2217,
                    "end": 2275,
                    "test": {
                      "type": "CallExpression",
                      "start": 2221,
                      "end": 2237,
                      "callee": {
                        "type": "Identifier",
                        "start": 2221,
                        "end": 2231,
                        "decorators": [],
                        "name": "isNumClass",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2232,
                          "end": 2236,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 2239,
                      "end": 2275,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 2253,
                          "end": 2265,
                          "argument": {
                            "type": "Identifier",
                            "start": 2260,
                            "end": 2264,
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 2378,
                    "end": 2389,
                    "expression": {
                      "type": "CallExpression",
                      "start": 2378,
                      "end": 2388,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2378,
                        "end": 2386,
                        "object": {
                          "type": "Identifier",
                          "start": 2378,
                          "end": 2382,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2383,
                          "end": 2386,
                          "decorators": [],
                          "name": "get",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 2399,
                    "end": 2411,
                    "argument": {
                      "type": "Identifier",
                      "start": 2406,
                      "end": 2410,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2466,
      "end": 2521,
      "id": {
        "type": "Identifier",
        "start": 2476,
        "end": 2490,
        "decorators": [],
        "name": "BuilderProgram",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2491,
        "end": 2521,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 2497,
            "end": 2519,
            "key": {
              "type": "Identifier",
              "start": 2497,
              "end": 2507,
              "decorators": [],
              "name": "getProgram",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 2509,
              "end": 2518,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2511,
                "end": 2518,
                "typeName": {
                  "type": "Identifier",
                  "start": 2511,
                  "end": 2518,
                  "decorators": [],
                  "name": "Program",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2522,
      "end": 2559,
      "id": {
        "type": "Identifier",
        "start": 2532,
        "end": 2539,
        "decorators": [],
        "name": "Program",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2540,
        "end": 2559,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2546,
            "end": 2557,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2546,
              "end": 2551,
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2551,
              "end": 2556,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2553,
                "end": 2556
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
      "start": 2560,
      "end": 2656,
      "id": {
        "type": "Identifier",
        "start": 2577,
        "end": 2593,
        "decorators": [],
        "name": "isBuilderProgram",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2593,
        "end": 2619,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2594,
            "end": 2618,
            "name": {
              "type": "Identifier",
              "start": 2594,
              "end": 2595,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2604,
              "end": 2618,
              "typeName": {
                "type": "Identifier",
                "start": 2604,
                "end": 2618,
                "decorators": [],
                "name": "BuilderProgram",
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
      "params": [
        {
          "type": "Identifier",
          "start": 2620,
          "end": 2640,
          "decorators": [],
          "name": "program",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2627,
            "end": 2640,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 2629,
              "end": 2640,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 2629,
                  "end": 2636,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2629,
                    "end": 2636,
                    "decorators": [],
                    "name": "Program",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 2639,
                  "end": 2640,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2639,
                    "end": 2640,
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
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2641,
        "end": 2655,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 2643,
          "end": 2655,
          "parameterName": {
            "type": "Identifier",
            "start": 2643,
            "end": 2650,
            "decorators": [],
            "name": "program",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2654,
            "end": 2655,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2654,
              "end": 2655,
              "typeName": {
                "type": "Identifier",
                "start": 2654,
                "end": 2655,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 2657,
      "end": 2817,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 2664,
        "end": 2817,
        "id": {
          "type": "Identifier",
          "start": 2673,
          "end": 2682,
          "decorators": [],
          "name": "listFiles",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 2682,
          "end": 2708,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 2683,
              "end": 2707,
              "name": {
                "type": "Identifier",
                "start": 2683,
                "end": 2684,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2693,
                "end": 2707,
                "typeName": {
                  "type": "Identifier",
                  "start": 2693,
                  "end": 2707,
                  "decorators": [],
                  "name": "BuilderProgram",
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
        "params": [
          {
            "type": "Identifier",
            "start": 2709,
            "end": 2729,
            "decorators": [],
            "name": "program",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2716,
              "end": 2729,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2718,
                "end": 2729,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 2718,
                    "end": 2725,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2718,
                      "end": 2725,
                      "decorators": [],
                      "name": "Program",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 2728,
                    "end": 2729,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2728,
                      "end": 2729,
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
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 2731,
          "end": 2817,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 2737,
              "end": 2815,
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2743,
                  "end": 2814,
                  "id": {
                    "type": "Identifier",
                    "start": 2743,
                    "end": 2753,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2744,
                      "end": 2753,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2746,
                        "end": 2753,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2746,
                          "end": 2753,
                          "decorators": [],
                          "name": "Program",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "start": 2756,
                    "end": 2814,
                    "test": {
                      "type": "CallExpression",
                      "start": 2756,
                      "end": 2781,
                      "callee": {
                        "type": "Identifier",
                        "start": 2756,
                        "end": 2772,
                        "decorators": [],
                        "name": "isBuilderProgram",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2773,
                          "end": 2780,
                          "decorators": [],
                          "name": "program",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "consequent": {
                      "type": "CallExpression",
                      "start": 2784,
                      "end": 2804,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 2784,
                        "end": 2802,
                        "object": {
                          "type": "Identifier",
                          "start": 2784,
                          "end": 2791,
                          "decorators": [],
                          "name": "program",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2792,
                          "end": 2802,
                          "decorators": [],
                          "name": "getProgram",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false
                    },
                    "alternate": {
                      "type": "Identifier",
                      "start": 2807,
                      "end": 2814,
                      "decorators": [],
                      "name": "program",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "definite": false
                }
              ],
              "declare": false
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
