recursiveArrayNotCircular.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 11,
        "decorators": [],
        "name": "Action",
        "optional": false
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
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSVoidKeyword",
          "start": 30,
          "end": 34
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
              "key": {
                "type": "Identifier",
                "start": 54,
                "end": 58,
                "decorators": [],
                "name": "type",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "optional": false
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 63,
              "end": 73,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 63,
                "end": 70,
                "decorators": [],
                "name": "payload",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "optional": false
                  }
                }
              }
            }
          ]
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
              "key": {
                "type": "Identifier",
                "start": 39,
                "end": 43,
                "decorators": [],
                "name": "type",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                    "optional": false
                  }
                }
              }
            }
          ]
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 15,
            "end": 16,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "P",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 77,
      "end": 133,
      "body": {
        "type": "TSEnumBody",
        "start": 93,
        "end": 133,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 99,
            "end": 102,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 99,
              "end": 102,
              "decorators": [],
              "name": "Foo",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 108,
            "end": 111,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 108,
              "end": 111,
              "decorators": [],
              "name": "Bar",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 117,
            "end": 120,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 120,
              "decorators": [],
              "name": "Baz",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 126,
            "end": 131,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 126,
              "end": 131,
              "decorators": [],
              "name": "Batch",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 82,
        "end": 92,
        "decorators": [],
        "name": "ActionType",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 135,
      "end": 307,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 153,
        "decorators": [],
        "name": "ReducerAction",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 158,
        "end": 307,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 160,
            "end": 190,
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
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 178,
                      "end": 181,
                      "decorators": [],
                      "name": "Bar",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 183,
                  "end": 189
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 160,
              "end": 166,
              "decorators": [],
              "name": "Action",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 195,
            "end": 226,
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
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 216,
                      "decorators": [],
                      "name": "Baz",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 218,
                  "end": 225
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 195,
              "end": 201,
              "decorators": [],
              "name": "Action",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 231,
            "end": 261,
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
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 249,
                      "end": 252,
                      "decorators": [],
                      "name": "Foo",
                      "optional": false
                    }
                  }
                },
                {
                  "type": "TSStringKeyword",
                  "start": 254,
                  "end": 260
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 231,
              "end": 237,
              "decorators": [],
              "name": "Action",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 266,
            "end": 307,
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
                      "optional": false
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 289,
                      "decorators": [],
                      "name": "Batch",
                      "optional": false
                    }
                  }
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
                      "optional": false
                    }
                  }
                }
              ]
            },
            "typeName": {
              "type": "Identifier",
              "start": 266,
              "end": 272,
              "decorators": [],
              "name": "Action",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 309,
      "end": 387,
      "async": false,
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
              "arguments": [
                {
                  "type": "Literal",
                  "start": 369,
                  "end": 383,
                  "raw": "\"Unreachable!\"",
                  "value": "Unreachable!"
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 363,
                "end": 368,
                "decorators": [],
                "name": "Error",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 318,
        "end": 329,
        "decorators": [],
        "name": "assertNever",
        "optional": false
      },
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 389,
      "end": 889,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 435,
        "end": 889,
        "body": [
          {
            "type": "SwitchStatement",
            "start": 441,
            "end": 887,
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
                        "definite": false,
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
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 522,
                            "end": 528,
                            "decorators": [],
                            "name": "action",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 529,
                            "end": 536,
                            "decorators": [],
                            "name": "payload",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 476,
                    "end": 486,
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 487,
                    "end": 490,
                    "decorators": [],
                    "name": "Bar",
                    "optional": false
                  }
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
                        "definite": false,
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
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 617,
                            "end": 623,
                            "decorators": [],
                            "name": "action",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 624,
                            "end": 631,
                            "decorators": [],
                            "name": "payload",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 570,
                    "end": 580,
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 581,
                    "end": 584,
                    "decorators": [],
                    "name": "Baz",
                    "optional": false
                  }
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
                        "definite": false,
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
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 711,
                            "end": 717,
                            "decorators": [],
                            "name": "action",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 718,
                            "end": 725,
                            "decorators": [],
                            "name": "payload",
                            "optional": false
                          }
                        }
                      }
                    ],
                    "declare": false,
                    "kind": "const"
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 665,
                    "end": 675,
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 676,
                    "end": 679,
                    "decorators": [],
                    "name": "Foo",
                    "optional": false
                  }
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 808,
                          "end": 815,
                          "decorators": [],
                          "name": "reducer",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "MemberExpression",
                        "start": 789,
                        "end": 807,
                        "computed": false,
                        "object": {
                          "type": "MemberExpression",
                          "start": 789,
                          "end": 803,
                          "computed": false,
                          "object": {
                            "type": "Identifier",
                            "start": 789,
                            "end": 795,
                            "decorators": [],
                            "name": "action",
                            "optional": false
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 796,
                            "end": 803,
                            "decorators": [],
                            "name": "payload",
                            "optional": false
                          }
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 804,
                          "end": 807,
                          "decorators": [],
                          "name": "map",
                          "optional": false
                        }
                      },
                      "optional": false
                    }
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
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 759,
                    "end": 769,
                    "decorators": [],
                    "name": "ActionType",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 770,
                    "end": 775,
                    "decorators": [],
                    "name": "Batch",
                    "optional": false
                  }
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
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 873,
                          "end": 879,
                          "decorators": [],
                          "name": "action",
                          "optional": false
                        }
                      ],
                      "callee": {
                        "type": "Identifier",
                        "start": 861,
                        "end": 872,
                        "decorators": [],
                        "name": "assertNever",
                        "optional": false
                      },
                      "optional": false
                    }
                  }
                ],
                "test": null
              }
            ],
            "discriminant": {
              "type": "MemberExpression",
              "start": 448,
              "end": 459,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 448,
                "end": 454,
                "decorators": [],
                "name": "action",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 455,
                "end": 459,
                "decorators": [],
                "name": "type",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 398,
        "end": 405,
        "decorators": [],
        "name": "reducer",
        "optional": false
      },
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
                "optional": false
              }
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
      }
    }
  ],
  "sourceType": "script"
}
```
