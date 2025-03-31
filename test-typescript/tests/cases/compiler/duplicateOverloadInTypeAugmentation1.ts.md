__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 340,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 282,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "name": "Array",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 19,
        "end": 282,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 25,
            "end": 149,
            "key": {
              "type": "Identifier",
              "start": 25,
              "end": 31,
              "name": "reduce",
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
                "start": 32,
                "end": 118,
                "name": "callbackfn",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 42,
                  "end": 118,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 44,
                    "end": 118,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 45,
                        "end": 61,
                        "name": "previousValue",
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
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 63,
                        "end": 78,
                        "name": "currentValue",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 75,
                          "end": 78,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 77,
                            "end": 78,
                            "typeName": {
                              "type": "Identifier",
                              "start": 77,
                              "end": 78,
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
                      },
                      {
                        "type": "Identifier",
                        "start": 80,
                        "end": 100,
                        "name": "currentIndex",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 92,
                          "end": 100,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 94,
                            "end": 100
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 102,
                        "end": 112,
                        "name": "array",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 107,
                          "end": 112,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 109,
                            "end": 112,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 109,
                              "end": 110,
                              "typeName": {
                                "type": "Identifier",
                                "start": 109,
                                "end": 110,
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
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 114,
                      "end": 118,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 117,
                        "end": 118,
                        "typeName": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 118,
                          "name": "T",
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
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 128,
                "end": 144,
                "name": "initialValue",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 141,
                  "end": 144,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 143,
                    "end": 144,
                    "typeName": {
                      "type": "Identifier",
                      "start": 143,
                      "end": 144,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": true
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 145,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 147,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 148,
                  "name": "T",
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
          },
          {
            "type": "TSMethodSignature",
            "start": 154,
            "end": 280,
            "key": {
              "type": "Identifier",
              "start": 154,
              "end": 160,
              "name": "reduce",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 160,
              "end": 163,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 161,
                  "end": 162,
                  "name": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
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
            "params": [
              {
                "type": "Identifier",
                "start": 164,
                "end": 250,
                "name": "callbackfn",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 174,
                  "end": 250,
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "start": 176,
                    "end": 250,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 177,
                        "end": 193,
                        "name": "previousValue",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 190,
                          "end": 193,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 192,
                            "end": 193,
                            "typeName": {
                              "type": "Identifier",
                              "start": 192,
                              "end": 193,
                              "name": "U",
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
                        "start": 195,
                        "end": 210,
                        "name": "currentValue",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 207,
                          "end": 210,
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 209,
                            "end": 210,
                            "typeName": {
                              "type": "Identifier",
                              "start": 209,
                              "end": 210,
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
                      },
                      {
                        "type": "Identifier",
                        "start": 212,
                        "end": 232,
                        "name": "currentIndex",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 224,
                          "end": 232,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 226,
                            "end": 232
                          }
                        },
                        "decorators": [],
                        "optional": false
                      },
                      {
                        "type": "Identifier",
                        "start": 234,
                        "end": 244,
                        "name": "array",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 239,
                          "end": 244,
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "start": 241,
                            "end": 244,
                            "elementType": {
                              "type": "TSTypeReference",
                              "start": 241,
                              "end": 242,
                              "typeName": {
                                "type": "Identifier",
                                "start": 241,
                                "end": 242,
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
                        "optional": false
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 246,
                      "end": 250,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 249,
                        "end": 250,
                        "typeName": {
                          "type": "Identifier",
                          "start": 249,
                          "end": 250,
                          "name": "U",
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
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 260,
                "end": 275,
                "name": "initialValue",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 272,
                  "end": 275,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 274,
                    "end": 275,
                    "typeName": {
                      "type": "Identifier",
                      "start": 274,
                      "end": 275,
                      "name": "U",
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
              "start": 276,
              "end": 279,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 278,
                "end": 279,
                "typeName": {
                  "type": "Identifier",
                  "start": 278,
                  "end": 279,
                  "name": "U",
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
      "type": "VariableDeclaration",
      "start": 283,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 287,
          "end": 303,
          "id": {
            "type": "Identifier",
            "start": 287,
            "end": 303,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 288,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 290,
                "end": 303,
                "typeName": {
                  "type": "Identifier",
                  "start": 290,
                  "end": 295,
                  "name": "Array",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 295,
                  "end": 303,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 296,
                      "end": 302
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
    },
    {
      "type": "VariableDeclaration",
      "start": 305,
      "end": 340,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 339,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 311,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 314,
            "end": 339,
            "callee": {
              "type": "MemberExpression",
              "start": 314,
              "end": 322,
              "object": {
                "type": "Identifier",
                "start": 314,
                "end": 315,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 316,
                "end": 322,
                "name": "reduce",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 323,
                "end": 338,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 324,
                    "end": 325,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 327,
                    "end": 328,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "BinaryExpression",
                  "start": 333,
                  "end": 338,
                  "left": {
                    "type": "Identifier",
                    "start": 333,
                    "end": 334,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 337,
                    "end": 338,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                },
                "typeParameters": null,
                "returnType": null
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
