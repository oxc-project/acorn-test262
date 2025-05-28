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
        "decorators": [],
        "name": "Action",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "P",
              "optional": false,
              "typeAnnotation": null
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
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
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
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
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
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null
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
                    "decorators": [],
                    "name": "P",
                    "optional": false,
                    "typeAnnotation": null
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
        "decorators": [],
        "name": "ActionType",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Baz",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "Batch",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 135,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 153,
        "decorators": [],
        "name": "ReducerAction",
        "optional": false,
        "typeAnnotation": null
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
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 181,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 216,
                      "decorators": [],
                      "name": "Baz",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 252,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null
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
              "decorators": [],
              "name": "Action",
              "optional": false,
              "typeAnnotation": null
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
                      "decorators": [],
                      "name": "ActionType",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 289,
                      "decorators": [],
                      "name": "Batch",
                      "optional": false,
                      "typeAnnotation": null
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
                      "decorators": [],
                      "name": "ReducerAction",
                      "optional": false,
                      "typeAnnotation": null
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
        "decorators": [],
        "name": "assertNever",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 330,
          "end": 338,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 331,
            "end": 338,
            "typeAnnotation": {
              "type": "TSNeverKeyword",
              "start": 333,
              "end": 338
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 339,
        "end": 346,
        "typeAnnotation": {
          "type": "TSNeverKeyword",
          "start": 341,
          "end": 346
        }
      },
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
                "decorators": [],
                "name": "Error",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 369,
                  "end": 383,
                  "value": "Unreachable!",
                  "raw": "\"Unreachable!\""
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 389,
      "end": 889,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 405,
        "decorators": [],
        "name": "reducer",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 406,
          "end": 427,
          "decorators": [],
          "name": "action",
          "optional": false,
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
                "decorators": [],
                "name": "ReducerAction",
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
        "start": 428,
        "end": 434,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 430,
          "end": 434
        }
      },
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
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 455,
                "end": 459,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "cases": [
              {
                "type": "SwitchCase",
                "start": 471,
                "end": 556,
                "test": {
                  "type": "MemberExpression",
                  "start": 476,
                  "end": 490,
                  "object": {
                    "type": "Identifier",
                    "start": 476,
                    "end": 486,
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 490,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 504,
                    "end": 537,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 510,
                        "end": 536,
                        "id": {
                          "type": "Identifier",
                          "start": 510,
                          "end": 519,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 511,
                            "end": 519,
                            "typeAnnotation": {
                              "type": "TSNumberKeyword",
                              "start": 513,
                              "end": 519
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 522,
                          "end": 536,
                          "object": {
                            "type": "Identifier",
                            "start": 522,
                            "end": 528,
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 529,
                            "end": 536,
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 550,
                    "end": 556,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 565,
                "end": 651,
                "test": {
                  "type": "MemberExpression",
                  "start": 570,
                  "end": 584,
                  "object": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 580,
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 584,
                    "decorators": [],
                    "name": "Baz",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 598,
                    "end": 632,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 604,
                        "end": 631,
                        "id": {
                          "type": "Identifier",
                          "start": 604,
                          "end": 614,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 605,
                            "end": 614,
                            "typeAnnotation": {
                              "type": "TSBooleanKeyword",
                              "start": 607,
                              "end": 614
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 617,
                          "end": 631,
                          "object": {
                            "type": "Identifier",
                            "start": 617,
                            "end": 623,
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 624,
                            "end": 631,
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 645,
                    "end": 651,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 660,
                "end": 745,
                "test": {
                  "type": "MemberExpression",
                  "start": 665,
                  "end": 679,
                  "object": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 675,
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 676,
                    "end": 679,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "consequent": [
                  {
                    "type": "VariableDeclaration",
                    "start": 693,
                    "end": 726,
                    "kind": "const",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 699,
                        "end": 725,
                        "id": {
                          "type": "Identifier",
                          "start": 699,
                          "end": 708,
                          "decorators": [],
                          "name": "z",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 700,
                            "end": 708,
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 702,
                              "end": 708
                            }
                          }
                        },
                        "init": {
                          "type": "MemberExpression",
                          "start": 711,
                          "end": 725,
                          "object": {
                            "type": "Identifier",
                            "start": 711,
                            "end": 717,
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 725,
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "BreakStatement",
                    "start": 739,
                    "end": 745,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 754,
                "end": 836,
                "test": {
                  "type": "MemberExpression",
                  "start": 759,
                  "end": 775,
                  "object": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 769,
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 775,
                    "decorators": [],
                    "name": "Batch",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
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
                            "decorators": [],
                            "name": "action",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 796,
                            "end": 803,
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 804,
                          "end": 807,
                          "decorators": [],
                          "name": "map",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 808,
                          "end": 815,
                          "decorators": [],
                          "name": "reducer",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "BreakStatement",
                    "start": 830,
                    "end": 836,
                    "label": null
                  }
                ]
              },
              {
                "type": "SwitchCase",
                "start": 845,
                "end": 881,
                "test": null,
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
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 873,
                          "end": 879,
                          "decorators": [],
                          "name": "action",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    }
                  }
                ]
              }
            ]
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
