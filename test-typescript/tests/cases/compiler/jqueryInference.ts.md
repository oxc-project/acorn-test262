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
      "id": {
        "type": "Identifier",
        "start": 20,
        "end": 29,
        "name": "MyPromise",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 31,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
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
            "start": 33,
            "end": 34,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "name": "U",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 36,
        "end": 120,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 42,
            "end": 73,
            "key": {
              "type": "Identifier",
              "start": 42,
              "end": 46,
              "name": "then",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 47,
                "end": 65,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 49,
                  "end": 65,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 51,
                    "end": 65,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 52,
                        "end": 56,
                        "name": "t",
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
                        "decorators": [],
                        "optional": false
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
                },
                "decorators": [],
                "optional": false
              }
            ],
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
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 78,
            "end": 118,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 87,
              "name": "thenUnion",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 88,
                "end": 110,
                "name": "cb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 90,
                  "end": 110,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 92,
                    "end": 110,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 101,
                        "name": "t",
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
                                  "name": "T",
                                  "typeAnnotation": null,
                                  "decorators": [],
                                  "optional": false
                                },
                                "typeArguments": null
                              },
                              {
                                "type": "TSTypeReference",
                                "start": 100,
                                "end": 101,
                                "typeName": {
                                  "type": "Identifier",
                                  "start": 100,
                                  "end": 101,
                                  "name": "U",
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
                },
                "decorators": [],
                "optional": false
              }
            ],
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
      "start": 122,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 146,
        "name": "DoNothingAlias",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 161,
          "end": 176,
          "expression": {
            "type": "Identifier",
            "start": 161,
            "end": 170,
            "name": "MyPromise",
            "typeAnnotation": null,
            "decorators": [],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 174,
                "end": 175,
                "typeName": {
                  "type": "Identifier",
                  "start": 174,
                  "end": 175,
                  "name": "U",
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
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 146,
        "end": 152,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 147,
            "end": 148,
            "name": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
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
            "start": 150,
            "end": 151,
            "name": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "U",
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 177,
        "end": 180,
        "body": []
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 182,
      "end": 264,
      "id": {
        "type": "Identifier",
        "start": 199,
        "end": 215,
        "name": "shouldBeIdentity",
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
          "start": 222,
          "end": 245,
          "name": "p",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 223,
            "end": 245,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 225,
              "end": 245,
              "typeName": {
                "type": "Identifier",
                "start": 225,
                "end": 239,
                "name": "DoNothingAlias",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
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
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 243,
                    "end": 244,
                    "typeName": {
                      "type": "Identifier",
                      "start": 243,
                      "end": 244,
                      "name": "U",
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
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 215,
        "end": 221,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 216,
            "end": 217,
            "name": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
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
            "start": 219,
            "end": 220,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "name": "U",
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 246,
        "end": 263,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 248,
          "end": 263,
          "typeName": {
            "type": "Identifier",
            "start": 248,
            "end": 257,
            "name": "MyPromise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 261,
                "end": 262,
                "typeName": {
                  "type": "Identifier",
                  "start": 261,
                  "end": 262,
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        }
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
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 307,
            "name": "p1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 307,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 284,
                "end": 307,
                "typeName": {
                  "type": "Identifier",
                  "start": 284,
                  "end": 293,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 315,
            "name": "p2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 318,
            "end": 338,
            "callee": {
              "type": "Identifier",
              "start": 318,
              "end": 334,
              "name": "shouldBeIdentity",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 335,
                "end": 337,
                "name": "p1",
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 344,
            "end": 371,
            "name": "p2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 346,
              "end": 371,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 348,
                "end": 371,
                "typeName": {
                  "type": "Identifier",
                  "start": 348,
                  "end": 357,
                  "name": "MyPromise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
