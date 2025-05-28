__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 442,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 112,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Query",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 15,
        "end": 18,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 16,
            "end": 17,
            "name": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 112,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 36,
            "end": 99,
            "key": {
              "type": "Identifier",
              "start": 36,
              "end": 43,
              "decorators": [],
              "name": "groupBy",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 43,
              "end": 46,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 44,
                  "end": 45,
                  "name": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 45,
                    "decorators": [],
                    "name": "K",
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
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 74,
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 58,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 60,
                    "end": 74,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 61,
                        "end": 68,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 65,
                          "end": 68,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 67,
                            "end": 68,
                            "typeName": {
                              "type": "Identifier",
                              "start": 67,
                              "end": 68,
                              "decorators": [],
                              "name": "T",
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
                      "start": 70,
                      "end": 74,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 73,
                        "end": 74,
                        "typeName": {
                          "type": "Identifier",
                          "start": 73,
                          "end": 74,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 75,
              "end": 98,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 77,
                "end": 98,
                "typeName": {
                  "type": "Identifier",
                  "start": 77,
                  "end": 82,
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 82,
                  "end": 98,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 83,
                      "end": 97,
                      "typeName": {
                        "type": "Identifier",
                        "start": 83,
                        "end": 91,
                        "decorators": [],
                        "name": "Grouping",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 91,
                        "end": 97,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 92,
                            "end": 93,
                            "typeName": {
                              "type": "Identifier",
                              "start": 92,
                              "end": 93,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 95,
                            "end": 96,
                            "typeName": {
                              "type": "Identifier",
                              "start": 95,
                              "end": 96,
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
                  ]
                }
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
      "start": 114,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 139,
        "decorators": [],
        "name": "QueryEnumerator",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 139,
        "end": 142,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 141,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
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
          }
        ]
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 143,
        "end": 246,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 160,
            "end": 233,
            "key": {
              "type": "Identifier",
              "start": 160,
              "end": 167,
              "decorators": [],
              "name": "groupBy",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 167,
              "end": 170,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 168,
                  "end": 169,
                  "name": {
                    "type": "Identifier",
                    "start": 168,
                    "end": 169,
                    "decorators": [],
                    "name": "K",
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
            "params": [
              {
                "type": "Identifier",
                "start": 171,
                "end": 198,
                "decorators": [],
                "name": "keySelector",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 182,
                  "end": 198,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 184,
                    "end": 198,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 185,
                        "end": 192,
                        "decorators": [],
                        "name": "item",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 189,
                          "end": 192,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 191,
                            "end": 192,
                            "typeName": {
                              "type": "Identifier",
                              "start": 191,
                              "end": 192,
                              "decorators": [],
                              "name": "T",
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
                      "start": 194,
                      "end": 198,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 197,
                        "end": 198,
                        "typeName": {
                          "type": "Identifier",
                          "start": 197,
                          "end": 198,
                          "decorators": [],
                          "name": "K",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 201,
                "end": 232,
                "typeName": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 216,
                  "decorators": [],
                  "name": "QueryEnumerator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 216,
                  "end": 232,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 217,
                      "end": 231,
                      "typeName": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 225,
                        "decorators": [],
                        "name": "Grouping",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 225,
                        "end": 231,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 226,
                            "end": 227,
                            "typeName": {
                              "type": "Identifier",
                              "start": 226,
                              "end": 227,
                              "decorators": [],
                              "name": "K",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          },
                          {
                            "type": "TSTypeReference",
                            "start": 229,
                            "end": 230,
                            "typeName": {
                              "type": "Identifier",
                              "start": 229,
                              "end": 230,
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
                  ]
                }
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
      "start": 248,
      "end": 307,
      "id": {
        "type": "Identifier",
        "start": 258,
        "end": 266,
        "decorators": [],
        "name": "Grouping",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 266,
        "end": 272,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 267,
            "end": 268,
            "name": {
              "type": "Identifier",
              "start": 267,
              "end": 268,
              "decorators": [],
              "name": "K",
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
            "start": 270,
            "end": 271,
            "name": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
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
          }
        ]
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 281,
          "end": 289,
          "expression": {
            "type": "Identifier",
            "start": 281,
            "end": 286,
            "decorators": [],
            "name": "Query",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 286,
            "end": 289,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 287,
                "end": 288,
                "typeName": {
                  "type": "Identifier",
                  "start": 287,
                  "end": 288,
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
      ],
      "body": {
        "type": "TSInterfaceBody",
        "start": 290,
        "end": 307,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 296,
            "end": 305,
            "key": {
              "type": "Identifier",
              "start": 296,
              "end": 299,
              "decorators": [],
              "name": "key",
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
              "start": 301,
              "end": 304,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 303,
                "end": 304,
                "typeName": {
                  "type": "Identifier",
                  "start": 303,
                  "end": 304,
                  "decorators": [],
                  "name": "K",
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
      "type": "VariableDeclaration",
      "start": 309,
      "end": 331,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 330,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 330,
            "decorators": [],
            "name": "q1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 315,
              "end": 330,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 317,
                "end": 330,
                "typeName": {
                  "type": "Identifier",
                  "start": 317,
                  "end": 322,
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 322,
                  "end": 330,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 323,
                      "end": 329
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 332,
      "end": 364,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 336,
          "end": 363,
          "id": {
            "type": "Identifier",
            "start": 336,
            "end": 363,
            "decorators": [],
            "name": "q2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 338,
              "end": 363,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 340,
                "end": 363,
                "typeName": {
                  "type": "Identifier",
                  "start": 340,
                  "end": 355,
                  "decorators": [],
                  "name": "QueryEnumerator",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 355,
                  "end": 363,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 356,
                      "end": 362
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 365,
      "end": 387,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 369,
          "end": 386,
          "id": {
            "type": "Identifier",
            "start": 369,
            "end": 386,
            "decorators": [],
            "name": "q3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 371,
              "end": 386,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 373,
                "end": 386,
                "typeName": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 378,
                  "decorators": [],
                  "name": "Query",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 378,
                  "end": 386,
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 379,
                      "end": 385
                    }
                  ]
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 389,
      "end": 397,
      "expression": {
        "type": "AssignmentExpression",
        "start": 389,
        "end": 396,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 389,
          "end": 391,
          "decorators": [],
          "name": "q1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 394,
          "end": 396,
          "decorators": [],
          "name": "q2",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 414,
      "end": 422,
      "expression": {
        "type": "AssignmentExpression",
        "start": 414,
        "end": 421,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 414,
          "end": 416,
          "decorators": [],
          "name": "q1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 419,
          "end": 421,
          "decorators": [],
          "name": "q3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
