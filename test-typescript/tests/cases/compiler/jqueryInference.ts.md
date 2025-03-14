__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 10,
  "end": 373,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 10,
      "end": 120,
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 120,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 42,
            "end": 73,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "decorators": [],
              "name": "then",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 65,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 49,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 51,
                    "end": 65,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 52,
                        "end": 56,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
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
                              "optional": false
                            }
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 58,
                      "end": 65,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 61,
                        "end": 65
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 72,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 68,
                "end": 72
              }
            },
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 78,
            "end": 118,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 87,
              "decorators": [],
              "name": "thenUnion",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 110,
                "decorators": [],
                "name": "cb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 110,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 92,
                    "end": 110,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 101,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 94,
                          "end": 101,
                          "typeAnnotation": {
                            "type": "TSUnionType",
                            "start": 96,
                            "end": 101,
                            "types": [
                              {
                                "type": "TSTypeReference",
                                "start": 96,
                                "end": 97,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 96,
                                  "end": 97,
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false
                                }
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 100,
                                "end": 101,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 100,
                                  "end": 101,
                                  "decorators": [],
                                  "name": "U",
                                  "optional": false
                                }
                              }
                            ]
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 103,
                      "end": 110,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 106,
                        "end": 110
                      }
                    }
                  }
                }
              }
            ],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 111,
              "end": 117,
              "typeAnnotation": {
                "type": "TSThisType",
                "start": 113,
                "end": 117
              }
            },
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 29,
        "decorators": [],
        "name": "MyPromise",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 31,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 122,
      "end": 180,
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 180,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 161,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 161,
            "end": 170,
            "decorators": [],
            "name": "MyPromise",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 170,
            "end": 176,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 171,
                "end": 172,
                "typeName": {
                  "type": "Identifier",
                  "start": 171,
                  "end": 172,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 174,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 146,
        "decorators": [],
        "name": "DoNothingAlias",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 146,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 148,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 150,
            "end": 151,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 182,
      "end": 264,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 215,
        "decorators": [],
        "name": "shouldBeIdentity",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 222,
          "end": 245,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 223,
            "end": 245,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 225,
              "end": 245,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 239,
                "end": 245,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 240,
                    "end": 241,
                    "typeName": {
                      "type": "Identifier",
                      "start": 240,
                      "end": 241,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 243,
                    "end": 244,
                    "typeName": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 244,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 225,
                "end": 239,
                "decorators": [],
                "name": "DoNothingAlias",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 246,
        "end": 263,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 248,
          "end": 263,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 257,
            "end": 263,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 258,
                "end": 259,
                "typeName": {
                  "type": "Identifier",
                  "start": 258,
                  "end": 259,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 261,
                "end": 262,
                "typeName": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 248,
            "end": 257,
            "decorators": [],
            "name": "MyPromise",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 215,
        "end": 221,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 216,
            "end": 217,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 220,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 266,
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 307,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 307,
            "decorators": [],
            "name": "p1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 307,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 293,
                  "end": 307,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 294,
                      "end": 301
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 303,
                      "end": 306
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 293,
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 309,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 338,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 315,
            "decorators": [],
            "name": "p2",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 318,
            "end": 338,
            "arguments": [
              {
                "type": "Identifier",
                "start": 335,
                "end": 337,
                "decorators": [],
                "name": "p1",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 318,
              "end": 334,
              "decorators": [],
              "name": "shouldBeIdentity",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 340,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 344,
          "end": 371,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 371,
            "decorators": [],
            "name": "p2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 371,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 348,
                "end": 371,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 357,
                  "end": 371,
                  "params": [
                    {
                      "type": "TSBooleanKeyword",
                      "start": 358,
                      "end": 365
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 367,
                      "end": 370
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 357,
                  "decorators": [],
                  "name": "MyPromise",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
