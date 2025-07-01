__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
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
              "start": 12,
              "end": 13
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 12,
            "end": 13
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 16
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 15,
            "end": 16
          }
        ],
        "start": 11,
        "end": 17
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "checkType": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null,
            "start": 20,
            "end": 21
          },
          "typeArguments": null,
          "start": 20,
          "end": 21
        },
        "extendsType": {
          "type": "TSVoidKeyword",
          "start": 30,
          "end": 34
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 39,
                "end": 43
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
                    "start": 46,
                    "end": 47
                  },
                  "typeArguments": null,
                  "start": 46,
                  "end": 47
                },
                "start": 44,
                "end": 47
              },
              "accessibility": null,
              "static": false,
              "start": 39,
              "end": 47
            }
          ],
          "start": 37,
          "end": 49
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "members": [
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 58
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
                    "start": 60,
                    "end": 61
                  },
                  "typeArguments": null,
                  "start": 60,
                  "end": 61
                },
                "start": 58,
                "end": 61
              },
              "accessibility": null,
              "static": false,
              "start": 54,
              "end": 62
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 63,
                "end": 70
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 72,
                    "end": 73
                  },
                  "typeArguments": null,
                  "start": 72,
                  "end": 73
                },
                "start": 70,
                "end": 73
              },
              "accessibility": null,
              "static": false,
              "start": 63,
              "end": 73
            }
          ],
          "start": 52,
          "end": 75
        },
        "start": 20,
        "end": 75
      },
      "declare": false,
      "start": 0,
      "end": 75
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ActionType",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 92
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 102
            },
            "initializer": null,
            "computed": false,
            "start": 99,
            "end": 102
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 108,
              "end": 111
            },
            "initializer": null,
            "computed": false,
            "start": 108,
            "end": 111
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 120
            },
            "initializer": null,
            "computed": false,
            "start": 117,
            "end": 120
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Batch",
              "optional": false,
              "typeAnnotation": null,
              "start": 126,
              "end": 131
            },
            "initializer": null,
            "computed": false,
            "start": 126,
            "end": 131
          }
        ],
        "start": 93,
        "end": 133
      },
      "const": false,
      "declare": false,
      "start": 77,
      "end": 133
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReducerAction",
        "optional": false,
        "typeAnnotation": null,
        "start": 140,
        "end": 153
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 160,
              "end": 166
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 167,
                      "end": 177
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 178,
                      "end": 181
                    },
                    "start": 167,
                    "end": 181
                  },
                  "typeArguments": null,
                  "start": 167,
                  "end": 181
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 183,
                  "end": 189
                }
              ],
              "start": 166,
              "end": 190
            },
            "start": 160,
            "end": 190
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 195,
              "end": 201
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 202,
                      "end": 212
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Baz",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 213,
                      "end": 216
                    },
                    "start": 202,
                    "end": 216
                  },
                  "typeArguments": null,
                  "start": 202,
                  "end": 216
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 218,
                  "end": 225
                }
              ],
              "start": 201,
              "end": 226
            },
            "start": 195,
            "end": 226
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 231,
              "end": 237
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 238,
                      "end": 248
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 249,
                      "end": 252
                    },
                    "start": 238,
                    "end": 252
                  },
                  "typeArguments": null,
                  "start": 238,
                  "end": 252
                },
                {
                  "type": "TSStringKeyword",
                  "start": 254,
                  "end": 260
                }
              ],
              "start": 237,
              "end": 261
            },
            "start": 231,
            "end": 261
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 272
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 273,
                      "end": 283
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Batch",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 284,
                      "end": 289
                    },
                    "start": 273,
                    "end": 289
                  },
                  "typeArguments": null,
                  "start": 273,
                  "end": 289
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ReducerAction",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 304
                    },
                    "typeArguments": null,
                    "start": 291,
                    "end": 304
                  },
                  "start": 291,
                  "end": 306
                }
              ],
              "start": 272,
              "end": 307
            },
            "start": 266,
            "end": 307
          }
        ],
        "start": 158,
        "end": 307
      },
      "declare": false,
      "start": 135,
      "end": 307
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null,
        "start": 318,
        "end": 329
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 333,
              "end": 338
            },
            "start": 331,
            "end": 338
          },
          "start": 330,
          "end": 338
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 341,
          "end": 346
        },
        "start": 339,
        "end": 346
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ThrowStatement",
            "argument": {
              "type": "NewExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 368
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": "Unreachable!",
                  "raw": "\"Unreachable!\"",
                  "start": 369,
                  "end": 383
                }
              ],
              "start": 359,
              "end": 384
            },
            "start": 353,
            "end": 385
          }
        ],
        "start": 347,
        "end": 387
      },
      "expression": false,
      "start": 309,
      "end": 387
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "reducer",
        "optional": false,
        "typeAnnotation": null,
        "start": 398,
        "end": 405
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReducerAction",
                "optional": false,
                "typeAnnotation": null,
                "start": 414,
                "end": 427
              },
              "typeArguments": null,
              "start": 414,
              "end": 427
            },
            "start": 412,
            "end": 427
          },
          "start": 406,
          "end": 427
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 430,
          "end": 434
        },
        "start": 428,
        "end": 434
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 448,
                "end": 454
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 459
              },
              "optional": false,
              "computed": false,
              "start": 448,
              "end": 459
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 476,
                    "end": 486
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 487,
                    "end": 490
                  },
                  "optional": false,
                  "computed": false,
                  "start": 476,
                  "end": 490
                },
                "consequent": [
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
                              "type": "TSNumberKeyword",
                              "start": 513,
                              "end": 519
                            },
                            "start": 511,
                            "end": 519
                          },
                          "start": 510,
                          "end": 519
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 522,
                            "end": 528
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 529,
                            "end": 536
                          },
                          "optional": false,
                          "computed": false,
                          "start": 522,
                          "end": 536
                        },
                        "definite": false,
                        "start": 510,
                        "end": 536
                      }
                    ],
                    "declare": false,
                    "start": 504,
                    "end": 537
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 550,
                    "end": 556
                  }
                ],
                "start": 471,
                "end": 556
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 570,
                    "end": 580
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Baz",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 584
                  },
                  "optional": false,
                  "computed": false,
                  "start": 570,
                  "end": 584
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 607,
                              "end": 614
                            },
                            "start": 605,
                            "end": 614
                          },
                          "start": 604,
                          "end": 614
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 617,
                            "end": 623
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 624,
                            "end": 631
                          },
                          "optional": false,
                          "computed": false,
                          "start": 617,
                          "end": 631
                        },
                        "definite": false,
                        "start": 604,
                        "end": 631
                      }
                    ],
                    "declare": false,
                    "start": 598,
                    "end": 632
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 645,
                    "end": 651
                  }
                ],
                "start": 565,
                "end": 651
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 665,
                    "end": 675
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 676,
                    "end": 679
                  },
                  "optional": false,
                  "computed": false,
                  "start": 665,
                  "end": 679
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 702,
                              "end": 708
                            },
                            "start": 700,
                            "end": 708
                          },
                          "start": 699,
                          "end": 708
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 711,
                            "end": 717
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 718,
                            "end": 725
                          },
                          "optional": false,
                          "computed": false,
                          "start": 711,
                          "end": 725
                        },
                        "definite": false,
                        "start": 699,
                        "end": 725
                      }
                    ],
                    "declare": false,
                    "start": 693,
                    "end": 726
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 739,
                    "end": 745
                  }
                ],
                "start": 660,
                "end": 745
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 759,
                    "end": 769
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Batch",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 770,
                    "end": 775
                  },
                  "optional": false,
                  "computed": false,
                  "start": 759,
                  "end": 775
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 789,
                            "end": 795
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 796,
                            "end": 803
                          },
                          "optional": false,
                          "computed": false,
                          "start": 789,
                          "end": 803
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 804,
                          "end": 807
                        },
                        "optional": false,
                        "computed": false,
                        "start": 789,
                        "end": 807
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "reducer",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 808,
                          "end": 815
                        }
                      ],
                      "optional": false,
                      "start": 789,
                      "end": 816
                    },
                    "directive": null,
                    "start": 789,
                    "end": 817
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 830,
                    "end": 836
                  }
                ],
                "start": 754,
                "end": 836
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 861,
                        "end": 872
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "action",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 873,
                          "end": 879
                        }
                      ],
                      "optional": false,
                      "start": 861,
                      "end": 880
                    },
                    "start": 854,
                    "end": 881
                  }
                ],
                "start": 845,
                "end": 881
              }
            ],
            "start": 441,
            "end": 887
          }
        ],
        "start": 435,
        "end": 889
      },
      "expression": false,
      "start": 389,
      "end": 889
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 889
}
```
