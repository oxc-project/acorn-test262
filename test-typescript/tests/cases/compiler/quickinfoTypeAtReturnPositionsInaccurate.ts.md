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
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 14,
        "name": "NumClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 33,
        "end": 144,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 57,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 52,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 62,
            "end": 112,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 69,
              "end": 72,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 72,
              "end": 112,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 117,
            "end": 142,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 124,
              "end": 136,
              "name": "numExclusive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 136,
              "end": 142,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 139,
                "end": 142,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 146,
      "end": 290,
      "id": {
        "type": "Identifier",
        "start": 152,
        "end": 160,
        "name": "StrClass",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 179,
        "end": 290,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 185,
            "end": 203,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 193,
              "end": 198,
              "name": "value",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 208,
            "end": 258,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 215,
              "end": 218,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 218,
              "end": 258,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                        "name": "value",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 263,
            "end": 288,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 270,
              "end": 282,
              "name": "strExclusive",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 282,
              "end": 288,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 285,
                "end": 288,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 480,
          "id": {
            "type": "Identifier",
            "start": 298,
            "end": 308,
            "name": "isNumClass",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 311,
            "end": 480,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 372,
                "end": 382,
                "name": "item",
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
                      "name": "Item",
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
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "operator": "instanceof",
                    "right": {
                      "type": "Identifier",
                      "start": 464,
                      "end": 472,
                      "name": "NumClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                }
              ]
            },
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
                    "name": "Item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                          "name": "NumClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                          "name": "StrClass",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                  "name": "item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "Extract",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "Item",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "NumClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            }
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 591,
      "end": 1085,
      "id": {
        "type": "Identifier",
        "start": 597,
        "end": 608,
        "name": "SimpleStore",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 683,
        "end": 1085,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 689,
            "end": 722,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 697,
              "end": 704,
              "name": "entries",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "Entries",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 728,
            "end": 1083,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 735,
              "end": 738,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 738,
              "end": 1083,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 770,
                  "end": 786,
                  "name": "entryId",
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
                        "name": "EntryId",
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
                "start": 806,
                "end": 1083,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 816,
                    "end": 850,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 820,
                        "end": 849,
                        "id": {
                          "type": "Identifier",
                          "start": 820,
                          "end": 825,
                          "name": "entry",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                              "name": "entries",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": false,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 841,
                            "end": 848,
                            "name": "entryId",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
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
                          "name": "entry",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 866,
                          "end": 878,
                          "name": "numExclusive",
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
                        "name": "isNumClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 927,
                          "end": 932,
                          "name": "entry",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                                "name": "entry",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 955,
                                "end": 967,
                                "name": "numExclusive",
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
                            "name": "entry",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                      "name": "entry",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
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
                      "name": "EntryId",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "Entries",
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
                  }
                ]
              },
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
                      "name": "Entries",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "EntryId",
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
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
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
              "name": "Entries",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "index",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 633,
                        "end": 641,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 635,
                          "end": 641
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                            "name": "NumClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "StrClass",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1087,
      "end": 1160,
      "id": {
        "type": "Identifier",
        "start": 1092,
        "end": 1097,
        "name": "Slice",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1112,
                  "end": 1120,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1114,
                    "end": 1120
                  }
                },
                "decorators": [],
                "optional": false
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
                      "name": "NumClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "StrClass",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
      "id": {
        "type": "Identifier",
        "start": 1360,
        "end": 1372,
        "name": "ComplexStore",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 1416,
        "end": 2436,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 1422,
            "end": 1453,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1430,
              "end": 1436,
              "name": "slices",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
                  "name": "Slices",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": "private"
          },
          {
            "type": "MethodDefinition",
            "start": 1459,
            "end": 1988,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1466,
              "end": 1469,
              "name": "get",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 1469,
              "end": 1988,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 1549,
                  "end": 1565,
                  "name": "sliceId",
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
                        "name": "SliceId",
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
                  "start": 1567,
                  "end": 1585,
                  "name": "sliceKey",
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
                        "name": "SliceKey",
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
                "start": 1619,
                "end": 1988,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 1629,
                    "end": 1671,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 1633,
                        "end": 1670,
                        "id": {
                          "type": "Identifier",
                          "start": 1633,
                          "end": 1637,
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "slices",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 1652,
                              "end": 1659,
                              "name": "sliceId",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": true,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1661,
                            "end": 1669,
                            "name": "sliceKey",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
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
                        "name": "isNumClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1696,
                          "end": 1700,
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                                "name": "item",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 1722,
                                "end": 1734,
                                "name": "numExclusive",
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
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 1794,
                          "end": 1797,
                          "name": "get",
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
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
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
                      "name": "SliceId",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "Slices",
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
                  {
                    "type": "TSTypeParameter",
                    "start": 1500,
                    "end": 1538,
                    "name": {
                      "type": "Identifier",
                      "start": 1500,
                      "end": 1508,
                      "name": "SliceKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "Slices",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "SliceId",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                        "name": "Slices",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "SliceId",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                      "name": "SliceKey",
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
            "override": false,
            "optional": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 1994,
            "end": 2434,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 2001,
              "end": 2005,
              "name": "get2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 2005,
              "end": 2434,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 2085,
                  "end": 2101,
                  "name": "sliceId",
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
                        "name": "SliceId",
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
                  "start": 2103,
                  "end": 2121,
                  "name": "sliceKey",
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
                        "name": "SliceKey",
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
                "start": 2155,
                "end": 2434,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 2165,
                    "end": 2207,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 2169,
                        "end": 2206,
                        "id": {
                          "type": "Identifier",
                          "start": 2169,
                          "end": 2173,
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "slices",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 2188,
                              "end": 2195,
                              "name": "sliceId",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": true,
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 2197,
                            "end": 2205,
                            "name": "sliceKey",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": true,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "let",
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
                        "name": "isNumClass",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2232,
                          "end": 2236,
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                            "name": "item",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                          "name": "item",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2383,
                          "end": 2386,
                          "name": "get",
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
                      "name": "item",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
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
                      "name": "SliceId",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                          "name": "Slices",
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
                  {
                    "type": "TSTypeParameter",
                    "start": 2036,
                    "end": 2074,
                    "name": {
                      "type": "Identifier",
                      "start": 2036,
                      "end": 2044,
                      "name": "SliceKey",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                            "name": "Slices",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                            "name": "SliceId",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
                        "name": "Slices",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "SliceId",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                      "name": "SliceKey",
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
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "decorators": [],
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
              "name": "Slices",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                      "name": "index",
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1396,
                        "end": 1404,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1398,
                          "end": 1404
                        }
                      },
                      "decorators": [],
                      "optional": false
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
                        "name": "Slice",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2466,
      "end": 2521,
      "id": {
        "type": "Identifier",
        "start": 2476,
        "end": 2490,
        "name": "BuilderProgram",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "getProgram",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
                  "name": "Program",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
        "name": "Program",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "state",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "name": "isBuilderProgram",
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
          "start": 2620,
          "end": 2640,
          "name": "program",
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
                    "name": "Program",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2604,
              "end": 2618,
              "typeName": {
                "type": "Identifier",
                "start": 2604,
                "end": 2618,
                "name": "BuilderProgram",
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
            "name": "program",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
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
          "name": "listFiles",
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
            "start": 2709,
            "end": 2729,
            "name": "program",
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
                      "name": "Program",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
          "start": 2731,
          "end": 2817,
          "body": [
            {
              "type": "VariableDeclaration",
              "start": 2737,
              "end": 2815,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 2743,
                  "end": 2814,
                  "id": {
                    "type": "Identifier",
                    "start": 2743,
                    "end": 2753,
                    "name": "x",
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
                          "name": "Program",
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
                        "name": "isBuilderProgram",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 2773,
                          "end": 2780,
                          "name": "program",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                          "name": "program",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 2792,
                          "end": 2802,
                          "name": "getProgram",
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
                    "alternate": {
                      "type": "Identifier",
                      "start": 2807,
                      "end": 2814,
                      "name": "program",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            }
          ]
        },
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeReference",
                "start": 2693,
                "end": 2707,
                "typeName": {
                  "type": "Identifier",
                  "start": 2693,
                  "end": 2707,
                  "name": "BuilderProgram",
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
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
