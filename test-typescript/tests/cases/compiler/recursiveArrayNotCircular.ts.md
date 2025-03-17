__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 889,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 75,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "name": "Action",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 17,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "P",
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
        "type": "TSConditionalType",
        "start": 20,
        "end": 75,
        "checkType": {
          "type": "TSTypeReference",
          "start": 20,
          "end": 21,
          "typeName": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "name": "P",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSVoidKeyword",
          "start": 30,
          "end": 34
        },
        "trueType": {
          "type": "TSTypeLiteral",
          "start": 37,
          "end": 49,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 39,
              "end": 47,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 43,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 44,
                "end": 47,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 46,
                  "end": 47,
                  "typeName": {
                    "type": "Identifier",
                    "start": 46,
                    "end": 47,
                    "name": "T",
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
        },
        "falseType": {
          "type": "TSTypeLiteral",
          "start": 52,
          "end": 75,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 54,
              "end": 62,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 58,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 58,
                "end": 61,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 60,
                  "end": 61,
                  "typeName": {
                    "type": "Identifier",
                    "start": 60,
                    "end": 61,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 63,
              "end": 73,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 70,
                "name": "payload",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 70,
                "end": 73,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 72,
                  "end": 73,
                  "typeName": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "name": "P",
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
      },
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 77,
      "end": 133,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 92,
        "name": "ActionType",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 99,
          "end": 102,
          "id": {
            "type": "Identifier",
            "start": 99,
            "end": 102,
            "name": "Foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 108,
          "end": 111,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 111,
            "name": "Bar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 117,
          "end": 120,
          "id": {
            "type": "Identifier",
            "start": 117,
            "end": 120,
            "name": "Baz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 126,
          "end": 131,
          "id": {
            "type": "Identifier",
            "start": 126,
            "end": 131,
            "name": "Batch",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 93,
        "end": 133,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 99,
            "end": 102,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "name": "Foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 108,
            "end": 111,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "name": "Bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 117,
            "end": 120,
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 120,
              "name": "Baz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 126,
            "end": 131,
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "name": "Batch",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 135,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 153,
        "name": "ReducerAction",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 158,
        "end": 307,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 160,
            "end": 190,
            "typeName": {
              "type": "Identifier",
              "start": 160,
              "end": 166,
              "name": "Action",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 166,
              "end": 190,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 167,
                  "end": 181,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 167,
                    "end": 181,
                    "left": {
                      "type": "Identifier",
                      "start": 167,
                      "end": 177,
                      "name": "ActionType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 181,
                      "name": "Bar",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 183,
                  "end": 189
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 195,
            "end": 226,
            "typeName": {
              "type": "Identifier",
              "start": 195,
              "end": 201,
              "name": "Action",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 201,
              "end": 226,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 202,
                  "end": 216,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 202,
                    "end": 216,
                    "left": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 212,
                      "name": "ActionType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 216,
                      "name": "Baz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 218,
                  "end": 225
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 231,
            "end": 261,
            "typeName": {
              "type": "Identifier",
              "start": 231,
              "end": 237,
              "name": "Action",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 237,
              "end": 261,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 238,
                  "end": 252,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 238,
                    "end": 252,
                    "left": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 248,
                      "name": "ActionType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 252,
                      "name": "Foo",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSStringKeyword",
                  "start": 254,
                  "end": 260
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 266,
            "end": 307,
            "typeName": {
              "type": "Identifier",
              "start": 266,
              "end": 272,
              "name": "Action",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 272,
              "end": 307,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 273,
                  "end": 289,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 273,
                    "end": 289,
                    "left": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 283,
                      "name": "ActionType",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 289,
                      "name": "Batch",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSArrayType",
                  "start": 291,
                  "end": 306,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 291,
                    "end": 304,
                    "typeName": {
                      "type": "Identifier",
                      "start": 291,
                      "end": 304,
                      "name": "ReducerAction",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 309,
      "end": 387,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 329,
        "name": "assertNever",
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
          "start": 330,
          "end": 338,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 331,
            "end": 338,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 333,
              "end": 338
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 347,
        "end": 387,
        "body": [
          {
            "type": "ThrowStatement",
            "start": 353,
            "end": 385,
            "argument": {
              "type": "NewExpression",
              "start": 359,
              "end": 384,
              "callee": {
                "type": "Identifier",
                "start": 363,
                "end": 368,
                "name": "Error",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Literal",
                  "start": 369,
                  "end": 383,
                  "value": "Unreachable!",
                  "raw": "\"Unreachable!\""
                }
              ],
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 339,
        "end": 346,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 341,
          "end": 346
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 389,
      "end": 889,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 405,
        "name": "reducer",
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
          "start": 406,
          "end": 427,
          "name": "action",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 412,
            "end": 427,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 414,
              "end": 427,
              "typeName": {
                "type": "Identifier",
                "start": 414,
                "end": 427,
                "name": "ReducerAction",
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
        "start": 435,
        "end": 889,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 441,
            "end": 887,
            "discriminant": {
              "type": "MemberExpression",
              "start": 448,
              "end": 459,
              "object": {
                "type": "Identifier",
                "start": 448,
                "end": 454,
                "name": "action",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 455,
                "end": 459,
                "name": "type",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 471,
                "end": 556,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 504,
                    "end": 537,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 510,
                        "end": 536,
                        "id": {
                          "type": "Identifier",
                          "start": 510,
                          "end": 519,
                          "name": "x",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 511,
                            "end": 519,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 513,
                              "end": 519
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 522,
                          "end": 536,
                          "object": {
                            "type": "Identifier",
                            "start": 522,
                            "end": 528,
                            "name": "action",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 529,
                            "end": 536,
                            "name": "payload",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 550,
                    "end": 556,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 476,
                  "end": 490,
                  "object": {
                    "type": "Identifier",
                    "start": 476,
                    "end": 486,
                    "name": "ActionType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 490,
                    "name": "Bar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 565,
                "end": 651,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 598,
                    "end": 632,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 604,
                        "end": 631,
                        "id": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 614,
                          "name": "y",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 605,
                            "end": 614,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 607,
                              "end": 614
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 617,
                          "end": 631,
                          "object": {
                            "type": "Identifier",
                            "start": 617,
                            "end": 623,
                            "name": "action",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 624,
                            "end": 631,
                            "name": "payload",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 645,
                    "end": 651,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 570,
                  "end": 584,
                  "object": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 580,
                    "name": "ActionType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 584,
                    "name": "Baz",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 660,
                "end": 745,
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 693,
                    "end": 726,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 699,
                        "end": 725,
                        "id": {
                          "type": "Identifier",
                          "start": 699,
                          "end": 708,
                          "name": "z",
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 700,
                            "end": 708,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 702,
                              "end": 708
                            }
                          },
                          "decorators": [],
                          "optional": false
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 711,
                          "end": 725,
                          "object": {
                            "type": "Identifier",
                            "start": 711,
                            "end": 717,
                            "name": "action",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 725,
                            "name": "payload",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "definite": false
                      }
                    ],
                    "kind": "const",
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 739,
                    "end": 745,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 665,
                  "end": 679,
                  "object": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 675,
                    "name": "ActionType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 676,
                    "end": 679,
                    "name": "Foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 754,
                "end": 836,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "start": 789,
                    "end": 817,
                    "expression": {
                      "type": "CallExpression",
                      "start": 789,
                      "end": 816,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 789,
                        "end": 807,
                        "object": {
                          "type": "MemberExpression",
                          "start": 789,
                          "end": 803,
                          "object": {
                            "type": "Identifier",
                            "start": 789,
                            "end": 795,
                            "name": "action",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 796,
                            "end": 803,
                            "name": "payload",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 804,
                          "end": 807,
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
                          "type": "Identifier",
                          "start": 808,
                          "end": 815,
                          "name": "reducer",
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
                    "type": "BreakStatement",
                    "start": 830,
                    "end": 836,
                    "label": null
                  }
                ],
                "test": {
                  "type": "MemberExpression",
                  "start": 759,
                  "end": 775,
                  "object": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 769,
                    "name": "ActionType",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 775,
                    "name": "Batch",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              },
              {
                "type": "SwitchCase",
                "start": 845,
                "end": 881,
                "consequent": [
                  {
                    "type": "ReturnStatement",
                    "start": 854,
                    "end": 881,
                    "argument": {
                      "type": "CallExpression",
                      "start": 861,
                      "end": 880,
                      "callee": {
                        "type": "Identifier",
                        "start": 861,
                        "end": 872,
                        "name": "assertNever",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 873,
                          "end": 879,
                          "name": "action",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
                    }
                  }
                ],
                "test": null
              }
            ]
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 428,
        "end": 434,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 430,
          "end": 434
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
