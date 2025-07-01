__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "NumClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 14
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": {
              "type": "TSNumberKeyword",
              "start": 25,
              "end": 31
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 31
          }
        ],
        "start": 14,
        "end": 32
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 52
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 55,
                  "end": 56
                },
                "typeArguments": null,
                "start": 55,
                "end": 56
              },
              "start": 53,
              "end": 56
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "private",
            "start": 39,
            "end": 57
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 72
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 77
                  },
                  "typeArguments": null,
                  "start": 76,
                  "end": 77
                },
                "start": 74,
                "end": 77
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 95,
                        "end": 99
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 100,
                        "end": 105
                      },
                      "optional": false,
                      "computed": false,
                      "start": 95,
                      "end": 105
                    },
                    "start": 88,
                    "end": 106
                  }
                ],
                "start": 78,
                "end": 112
              },
              "expression": false,
              "start": 72,
              "end": 112
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 62,
            "end": 112
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "numExclusive",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 136
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 139,
                "end": 142
              },
              "expression": false,
              "start": 136,
              "end": 142
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 117,
            "end": 142
          }
        ],
        "start": 33,
        "end": 144
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 144
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "StrClass",
        "optional": false,
        "typeAnnotation": null,
        "start": 152,
        "end": 160
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 161,
              "end": 162
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 171,
              "end": 177
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 161,
            "end": 177
          }
        ],
        "start": 160,
        "end": 178
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 193,
              "end": 198
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 201,
                  "end": 202
                },
                "typeArguments": null,
                "start": 201,
                "end": 202
              },
              "start": 199,
              "end": 202
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": "private",
            "start": 185,
            "end": 203
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 215,
              "end": 218
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 223
                  },
                  "typeArguments": null,
                  "start": 222,
                  "end": 223
                },
                "start": 220,
                "end": 223
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "ThisExpression",
                        "start": 241,
                        "end": 245
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 246,
                        "end": 251
                      },
                      "optional": false,
                      "computed": false,
                      "start": 241,
                      "end": 251
                    },
                    "start": 234,
                    "end": 252
                  }
                ],
                "start": 224,
                "end": 258
              },
              "expression": false,
              "start": 218,
              "end": 258
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 208,
            "end": 258
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strExclusive",
              "optional": false,
              "typeAnnotation": null,
              "start": 270,
              "end": 282
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 285,
                "end": 288
              },
              "expression": false,
              "start": 282,
              "end": 288
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 263,
            "end": 288
          }
        ],
        "start": 179,
        "end": 290
      },
      "abstract": false,
      "declare": false,
      "start": 146,
      "end": 290
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "isNumClass",
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 308
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Item",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 316
                  },
                  "constraint": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "NumClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 333
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSNumberKeyword",
                              "start": 334,
                              "end": 340
                            }
                          ],
                          "start": 333,
                          "end": 341
                        },
                        "start": 325,
                        "end": 341
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "StrClass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 344,
                          "end": 352
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSStringKeyword",
                              "start": 353,
                              "end": 359
                            }
                          ],
                          "start": 352,
                          "end": 360
                        },
                        "start": 344,
                        "end": 360
                      }
                    ],
                    "start": 325,
                    "end": 360
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 312,
                  "end": 360
                }
              ],
              "start": 311,
              "end": 361
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "item",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 378,
                      "end": 382
                    },
                    "typeArguments": null,
                    "start": 378,
                    "end": 382
                  },
                  "start": 376,
                  "end": 382
                },
                "start": 372,
                "end": 382
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypePredicate",
                "parameterName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "item",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 390,
                  "end": 394
                },
                "asserts": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Extract",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 405
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Item",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 406,
                            "end": 410
                          },
                          "typeArguments": null,
                          "start": 406,
                          "end": 410
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NumClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 412,
                            "end": 420
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSAnyKeyword",
                                "start": 421,
                                "end": 424
                              }
                            ],
                            "start": 420,
                            "end": 425
                          },
                          "start": 412,
                          "end": 425
                        }
                      ],
                      "start": 405,
                      "end": 426
                    },
                    "start": 398,
                    "end": 426
                  },
                  "start": 398,
                  "end": 426
                },
                "start": 390,
                "end": 426
              },
              "start": 388,
              "end": 426
            },
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 448,
                      "end": 452
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 464,
                      "end": 472
                    },
                    "start": 448,
                    "end": 472
                  },
                  "start": 440,
                  "end": 474
                }
              ],
              "start": 430,
              "end": 480
            },
            "id": null,
            "generator": false,
            "start": 311,
            "end": 480
          },
          "definite": false,
          "start": 298,
          "end": 480
        }
      ],
      "declare": false,
      "start": 292,
      "end": 480
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "SimpleStore",
        "optional": false,
        "typeAnnotation": null,
        "start": 597,
        "end": 608
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Entries",
              "optional": false,
              "typeAnnotation": null,
              "start": 609,
              "end": 616
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 635,
                          "end": 641
                        },
                        "start": 633,
                        "end": 641
                      },
                      "start": 628,
                      "end": 641
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "NumClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 644,
                            "end": 652
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSNumberKeyword",
                                "start": 653,
                                "end": 659
                              }
                            ],
                            "start": 652,
                            "end": 660
                          },
                          "start": 644,
                          "end": 660
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "StrClass",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 663,
                            "end": 671
                          },
                          "typeArguments": {
                            "type": "TSTypeParameterInstantiation",
                            "params": [
                              {
                                "type": "TSStringKeyword",
                                "start": 672,
                                "end": 678
                              }
                            ],
                            "start": 671,
                            "end": 679
                          },
                          "start": 663,
                          "end": 679
                        }
                      ],
                      "start": 644,
                      "end": 679
                    },
                    "start": 642,
                    "end": 679
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 627,
                  "end": 679
                }
              ],
              "start": 625,
              "end": 681
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 609,
            "end": 681
          }
        ],
        "start": 608,
        "end": 682
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "entries",
              "optional": false,
              "typeAnnotation": null,
              "start": 697,
              "end": 704
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 707,
                "end": 710
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Entries",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 714,
                  "end": 721
                },
                "typeArguments": null,
                "start": 714,
                "end": 721
              },
              "start": 707,
              "end": 721
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 689,
            "end": 722
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 735,
              "end": 738
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EntryId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 739,
                      "end": 746
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Entries",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 761,
                          "end": 768
                        },
                        "typeArguments": null,
                        "start": 761,
                        "end": 768
                      },
                      "start": 755,
                      "end": 768
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 739,
                    "end": 768
                  }
                ],
                "start": 738,
                "end": 769
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "entryId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "EntryId",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 779,
                        "end": 786
                      },
                      "typeArguments": null,
                      "start": 779,
                      "end": 786
                    },
                    "start": 777,
                    "end": 786
                  },
                  "start": 770,
                  "end": 786
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Entries",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 789,
                      "end": 796
                    },
                    "typeArguments": null,
                    "start": 789,
                    "end": 796
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "EntryId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 797,
                      "end": 804
                    },
                    "typeArguments": null,
                    "start": 797,
                    "end": 804
                  },
                  "start": 789,
                  "end": 805
                },
                "start": 787,
                "end": 805
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 820,
                          "end": 825
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "ThisExpression",
                              "start": 828,
                              "end": 832
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "entries",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 833,
                              "end": 840
                            },
                            "optional": false,
                            "computed": false,
                            "start": 828,
                            "end": 840
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entryId",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 841,
                            "end": 848
                          },
                          "optional": false,
                          "computed": true,
                          "start": 828,
                          "end": 849
                        },
                        "definite": false,
                        "start": 820,
                        "end": 849
                      }
                    ],
                    "declare": false,
                    "start": 816,
                    "end": 850
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 860,
                          "end": 865
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "numExclusive",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 866,
                          "end": 878
                        },
                        "optional": false,
                        "computed": false,
                        "start": 860,
                        "end": 878
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 860,
                      "end": 880
                    },
                    "directive": null,
                    "start": 860,
                    "end": 881
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isNumClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 916,
                        "end": 926
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "entry",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 927,
                          "end": 932
                        }
                      ],
                      "optional": false,
                      "start": 916,
                      "end": 933
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "entry",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 949,
                                "end": 954
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "numExclusive",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 955,
                                "end": 967
                              },
                              "optional": false,
                              "computed": false,
                              "start": 949,
                              "end": 967
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 949,
                            "end": 969
                          },
                          "directive": null,
                          "start": 949,
                          "end": 970
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "entry",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 999,
                            "end": 1004
                          },
                          "start": 992,
                          "end": 1005
                        }
                      ],
                      "start": 935,
                      "end": 1015
                    },
                    "alternate": null,
                    "start": 912,
                    "end": 1015
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "entry",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1032,
                      "end": 1037
                    },
                    "start": 1025,
                    "end": 1038
                  }
                ],
                "start": 806,
                "end": 1083
              },
              "expression": false,
              "start": 738,
              "end": 1083
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 728,
            "end": 1083
          }
        ],
        "start": 683,
        "end": 1085
      },
      "abstract": false,
      "declare": false,
      "start": 591,
      "end": 1085
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Slice",
        "optional": false,
        "typeAnnotation": null,
        "start": 1092,
        "end": 1097
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1114,
                    "end": 1120
                  },
                  "start": 1112,
                  "end": 1120
                },
                "start": 1107,
                "end": 1120
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "NumClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1123,
                      "end": 1131
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 1132,
                          "end": 1138
                        }
                      ],
                      "start": 1131,
                      "end": 1139
                    },
                    "start": 1123,
                    "end": 1139
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "StrClass",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1142,
                      "end": 1150
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 1151,
                          "end": 1157
                        }
                      ],
                      "start": 1150,
                      "end": 1158
                    },
                    "start": 1142,
                    "end": 1158
                  }
                ],
                "start": 1123,
                "end": 1158
              },
              "start": 1121,
              "end": 1158
            },
            "readonly": false,
            "static": false,
            "accessibility": null,
            "start": 1106,
            "end": 1158
          }
        ],
        "start": 1100,
        "end": 1160
      },
      "declare": false,
      "start": 1087,
      "end": 1160
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComplexStore",
        "optional": false,
        "typeAnnotation": null,
        "start": 1360,
        "end": 1372
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Slices",
              "optional": false,
              "typeAnnotation": null,
              "start": 1373,
              "end": 1379
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "index",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1398,
                          "end": 1404
                        },
                        "start": 1396,
                        "end": 1404
                      },
                      "start": 1391,
                      "end": 1404
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Slice",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1407,
                        "end": 1412
                      },
                      "typeArguments": null,
                      "start": 1407,
                      "end": 1412
                    },
                    "start": 1405,
                    "end": 1412
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 1390,
                  "end": 1412
                }
              ],
              "start": 1388,
              "end": 1414
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 1373,
            "end": 1414
          }
        ],
        "start": 1372,
        "end": 1415
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "slices",
              "optional": false,
              "typeAnnotation": null,
              "start": 1430,
              "end": 1436
            },
            "typeAnnotation": null,
            "value": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 1439,
                "end": 1442
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Slices",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1446,
                  "end": 1452
                },
                "typeArguments": null,
                "start": 1446,
                "end": 1452
              },
              "start": 1439,
              "end": 1452
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "private",
            "start": 1422,
            "end": 1453
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null,
              "start": 1466,
              "end": 1469
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SliceId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1470,
                      "end": 1477
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Slices",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1492,
                          "end": 1498
                        },
                        "typeArguments": null,
                        "start": 1492,
                        "end": 1498
                      },
                      "start": 1486,
                      "end": 1498
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1470,
                    "end": 1498
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SliceKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1500,
                      "end": 1508
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Slices",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1523,
                            "end": 1529
                          },
                          "typeArguments": null,
                          "start": 1523,
                          "end": 1529
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SliceId",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1530,
                            "end": 1537
                          },
                          "typeArguments": null,
                          "start": 1530,
                          "end": 1537
                        },
                        "start": 1523,
                        "end": 1538
                      },
                      "start": 1517,
                      "end": 1538
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 1500,
                    "end": 1538
                  }
                ],
                "start": 1469,
                "end": 1539
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sliceId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SliceId",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1558,
                        "end": 1565
                      },
                      "typeArguments": null,
                      "start": 1558,
                      "end": 1565
                    },
                    "start": 1556,
                    "end": 1565
                  },
                  "start": 1549,
                  "end": 1565
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sliceKey",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SliceKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1577,
                        "end": 1585
                      },
                      "typeArguments": null,
                      "start": 1577,
                      "end": 1585
                    },
                    "start": 1575,
                    "end": 1585
                  },
                  "start": 1567,
                  "end": 1585
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Slices",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1593,
                        "end": 1599
                      },
                      "typeArguments": null,
                      "start": 1593,
                      "end": 1599
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SliceId",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1600,
                        "end": 1607
                      },
                      "typeArguments": null,
                      "start": 1600,
                      "end": 1607
                    },
                    "start": 1593,
                    "end": 1608
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SliceKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1609,
                      "end": 1617
                    },
                    "typeArguments": null,
                    "start": 1609,
                    "end": 1617
                  },
                  "start": 1593,
                  "end": 1618
                },
                "start": 1591,
                "end": 1618
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1633,
                          "end": 1637
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 1640,
                                "end": 1644
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "slices",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1645,
                                "end": 1651
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1640,
                              "end": 1651
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sliceId",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1652,
                              "end": 1659
                            },
                            "optional": false,
                            "computed": true,
                            "start": 1640,
                            "end": 1660
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sliceKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1661,
                            "end": 1669
                          },
                          "optional": false,
                          "computed": true,
                          "start": 1640,
                          "end": 1670
                        },
                        "definite": false,
                        "start": 1633,
                        "end": 1670
                      }
                    ],
                    "declare": false,
                    "start": 1629,
                    "end": 1671
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isNumClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1685,
                        "end": 1695
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1696,
                          "end": 1700
                        }
                      ],
                      "optional": false,
                      "start": 1685,
                      "end": 1701
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "item",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1717,
                                "end": 1721
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "numExclusive",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1722,
                                "end": 1734
                              },
                              "optional": false,
                              "computed": false,
                              "start": 1717,
                              "end": 1734
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 1717,
                            "end": 1736
                          },
                          "directive": null,
                          "start": 1717,
                          "end": 1737
                        }
                      ],
                      "start": 1703,
                      "end": 1779
                    },
                    "alternate": null,
                    "start": 1681,
                    "end": 1779
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1789,
                          "end": 1793
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "get",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1794,
                          "end": 1797
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1789,
                        "end": 1797
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 1789,
                      "end": 1799
                    },
                    "directive": null,
                    "start": 1789,
                    "end": 1800
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1954,
                      "end": 1958
                    },
                    "start": 1947,
                    "end": 1959
                  }
                ],
                "start": 1619,
                "end": 1988
              },
              "expression": false,
              "start": 1469,
              "end": 1988
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1459,
            "end": 1988
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "get2",
              "optional": false,
              "typeAnnotation": null,
              "start": 2001,
              "end": 2005
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SliceId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2006,
                      "end": 2013
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Slices",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2028,
                          "end": 2034
                        },
                        "typeArguments": null,
                        "start": 2028,
                        "end": 2034
                      },
                      "start": 2022,
                      "end": 2034
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2006,
                    "end": 2034
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SliceKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2036,
                      "end": 2044
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Slices",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2059,
                            "end": 2065
                          },
                          "typeArguments": null,
                          "start": 2059,
                          "end": 2065
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "SliceId",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2066,
                            "end": 2073
                          },
                          "typeArguments": null,
                          "start": 2066,
                          "end": 2073
                        },
                        "start": 2059,
                        "end": 2074
                      },
                      "start": 2053,
                      "end": 2074
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 2036,
                    "end": 2074
                  }
                ],
                "start": 2005,
                "end": 2075
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sliceId",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SliceId",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2094,
                        "end": 2101
                      },
                      "typeArguments": null,
                      "start": 2094,
                      "end": 2101
                    },
                    "start": 2092,
                    "end": 2101
                  },
                  "start": 2085,
                  "end": 2101
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "sliceKey",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SliceKey",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2113,
                        "end": 2121
                      },
                      "typeArguments": null,
                      "start": 2113,
                      "end": 2121
                    },
                    "start": 2111,
                    "end": 2121
                  },
                  "start": 2103,
                  "end": 2121
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSIndexedAccessType",
                    "objectType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Slices",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2129,
                        "end": 2135
                      },
                      "typeArguments": null,
                      "start": 2129,
                      "end": 2135
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "SliceId",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2136,
                        "end": 2143
                      },
                      "typeArguments": null,
                      "start": 2136,
                      "end": 2143
                    },
                    "start": 2129,
                    "end": 2144
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "SliceKey",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2145,
                      "end": 2153
                    },
                    "typeArguments": null,
                    "start": 2145,
                    "end": 2153
                  },
                  "start": 2129,
                  "end": 2154
                },
                "start": 2127,
                "end": 2154
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2169,
                          "end": 2173
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 2176,
                                "end": 2180
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "slices",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2181,
                                "end": 2187
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2176,
                              "end": 2187
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "sliceId",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2188,
                              "end": 2195
                            },
                            "optional": false,
                            "computed": true,
                            "start": 2176,
                            "end": 2196
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "sliceKey",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2197,
                            "end": 2205
                          },
                          "optional": false,
                          "computed": true,
                          "start": 2176,
                          "end": 2206
                        },
                        "definite": false,
                        "start": 2169,
                        "end": 2206
                      }
                    ],
                    "declare": false,
                    "start": 2165,
                    "end": 2207
                  },
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isNumClass",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2221,
                        "end": 2231
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2232,
                          "end": 2236
                        }
                      ],
                      "optional": false,
                      "start": 2221,
                      "end": 2237
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "item",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2260,
                            "end": 2264
                          },
                          "start": 2253,
                          "end": 2265
                        }
                      ],
                      "start": 2239,
                      "end": 2275
                    },
                    "alternate": null,
                    "start": 2217,
                    "end": 2275
                  },
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2378,
                          "end": 2382
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "get",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2383,
                          "end": 2386
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2378,
                        "end": 2386
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2378,
                      "end": 2388
                    },
                    "directive": null,
                    "start": 2378,
                    "end": 2389
                  },
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2406,
                      "end": 2410
                    },
                    "start": 2399,
                    "end": 2411
                  }
                ],
                "start": 2155,
                "end": 2434
              },
              "expression": false,
              "start": 2005,
              "end": 2434
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 1994,
            "end": 2434
          }
        ],
        "start": 1416,
        "end": 2436
      },
      "abstract": false,
      "declare": false,
      "start": 1354,
      "end": 2436
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BuilderProgram",
        "optional": false,
        "typeAnnotation": null,
        "start": 2476,
        "end": 2490
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "getProgram",
              "optional": false,
              "typeAnnotation": null,
              "start": 2497,
              "end": 2507
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Program",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2511,
                  "end": 2518
                },
                "typeArguments": null,
                "start": 2511,
                "end": 2518
              },
              "start": 2509,
              "end": 2518
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 2497,
            "end": 2519
          }
        ],
        "start": 2491,
        "end": 2521
      },
      "declare": false,
      "start": 2466,
      "end": 2521
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Program",
        "optional": false,
        "typeAnnotation": null,
        "start": 2532,
        "end": 2539
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "state",
              "optional": false,
              "typeAnnotation": null,
              "start": 2546,
              "end": 2551
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2553,
                "end": 2556
              },
              "start": 2551,
              "end": 2556
            },
            "accessibility": null,
            "static": false,
            "start": 2546,
            "end": 2557
          }
        ],
        "start": 2540,
        "end": 2559
      },
      "declare": false,
      "start": 2522,
      "end": 2559
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "isBuilderProgram",
        "optional": false,
        "typeAnnotation": null,
        "start": 2577,
        "end": 2593
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 2594,
              "end": 2595
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "BuilderProgram",
                "optional": false,
                "typeAnnotation": null,
                "start": 2604,
                "end": 2618
              },
              "typeArguments": null,
              "start": 2604,
              "end": 2618
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2594,
            "end": 2618
          }
        ],
        "start": 2593,
        "end": 2619
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "program",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Program",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2629,
                    "end": 2636
                  },
                  "typeArguments": null,
                  "start": 2629,
                  "end": 2636
                },
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2639,
                    "end": 2640
                  },
                  "typeArguments": null,
                  "start": 2639,
                  "end": 2640
                }
              ],
              "start": 2629,
              "end": 2640
            },
            "start": 2627,
            "end": 2640
          },
          "start": 2620,
          "end": 2640
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "program",
            "optional": false,
            "typeAnnotation": null,
            "start": 2643,
            "end": 2650
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2654,
                "end": 2655
              },
              "typeArguments": null,
              "start": 2654,
              "end": 2655
            },
            "start": 2654,
            "end": 2655
          },
          "start": 2643,
          "end": 2655
        },
        "start": 2641,
        "end": 2655
      },
      "body": null,
      "expression": false,
      "start": 2560,
      "end": 2656
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "listFiles",
          "optional": false,
          "typeAnnotation": null,
          "start": 2673,
          "end": 2682
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 2683,
                "end": 2684
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BuilderProgram",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2693,
                  "end": 2707
                },
                "typeArguments": null,
                "start": 2693,
                "end": 2707
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 2683,
              "end": 2707
            }
          ],
          "start": 2682,
          "end": 2708
        },
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "program",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Program",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2718,
                      "end": 2725
                    },
                    "typeArguments": null,
                    "start": 2718,
                    "end": 2725
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2728,
                      "end": 2729
                    },
                    "typeArguments": null,
                    "start": 2728,
                    "end": 2729
                  }
                ],
                "start": 2718,
                "end": 2729
              },
              "start": 2716,
              "end": 2729
            },
            "start": 2709,
            "end": 2729
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Program",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2746,
                          "end": 2753
                        },
                        "typeArguments": null,
                        "start": 2746,
                        "end": 2753
                      },
                      "start": 2744,
                      "end": 2753
                    },
                    "start": 2743,
                    "end": 2753
                  },
                  "init": {
                    "type": "ConditionalExpression",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isBuilderProgram",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2756,
                        "end": 2772
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "program",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2773,
                          "end": 2780
                        }
                      ],
                      "optional": false,
                      "start": 2756,
                      "end": 2781
                    },
                    "consequent": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "program",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2784,
                          "end": 2791
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "getProgram",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2792,
                          "end": 2802
                        },
                        "optional": false,
                        "computed": false,
                        "start": 2784,
                        "end": 2802
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 2784,
                      "end": 2804
                    },
                    "alternate": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "program",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2807,
                      "end": 2814
                    },
                    "start": 2756,
                    "end": 2814
                  },
                  "definite": false,
                  "start": 2743,
                  "end": 2814
                }
              ],
              "declare": false,
              "start": 2737,
              "end": 2815
            }
          ],
          "start": 2731,
          "end": 2817
        },
        "expression": false,
        "start": 2664,
        "end": 2817
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 2657,
      "end": 2817
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 2817
}
```
