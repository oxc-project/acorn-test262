__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Array",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 15
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
              "start": 16,
              "end": 17
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 16,
            "end": 17
          }
        ],
        "start": 15,
        "end": 18
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduce",
              "optional": false,
              "typeAnnotation": null,
              "start": 25,
              "end": 31
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callbackfn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previousValue",
                        "optional": false,
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
                        "start": 45,
                        "end": 61
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "currentValue",
                        "optional": false,
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
                              "start": 77,
                              "end": 78
                            },
                            "typeArguments": null,
                            "start": 77,
                            "end": 78
                          },
                          "start": 75,
                          "end": 78
                        },
                        "start": 63,
                        "end": 78
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "currentIndex",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 94,
                            "end": 100
                          },
                          "start": 92,
                          "end": 100
                        },
                        "start": 80,
                        "end": 100
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 109,
                                "end": 110
                              },
                              "typeArguments": null,
                              "start": 109,
                              "end": 110
                            },
                            "start": 109,
                            "end": 112
                          },
                          "start": 107,
                          "end": 112
                        },
                        "start": 102,
                        "end": 112
                      }
                    ],
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
                          "start": 117,
                          "end": 118
                        },
                        "typeArguments": null,
                        "start": 117,
                        "end": 118
                      },
                      "start": 114,
                      "end": 118
                    },
                    "start": 44,
                    "end": 118
                  },
                  "start": 42,
                  "end": 118
                },
                "start": 32,
                "end": 118
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "initialValue",
                "optional": true,
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
                      "start": 143,
                      "end": 144
                    },
                    "typeArguments": null,
                    "start": 143,
                    "end": 144
                  },
                  "start": 141,
                  "end": 144
                },
                "start": 128,
                "end": 144
              }
            ],
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
                  "start": 147,
                  "end": 148
                },
                "typeArguments": null,
                "start": 147,
                "end": 148
              },
              "start": 145,
              "end": 148
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 25,
            "end": 149
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "reduce",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 160
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "params": [
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 161,
                  "end": 162
                }
              ],
              "start": 160,
              "end": 163
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "callbackfn",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "previousValue",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "U",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 192,
                              "end": 193
                            },
                            "typeArguments": null,
                            "start": 192,
                            "end": 193
                          },
                          "start": 190,
                          "end": 193
                        },
                        "start": 177,
                        "end": 193
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "currentValue",
                        "optional": false,
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
                              "start": 209,
                              "end": 210
                            },
                            "typeArguments": null,
                            "start": 209,
                            "end": 210
                          },
                          "start": 207,
                          "end": 210
                        },
                        "start": 195,
                        "end": 210
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "currentIndex",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 226,
                            "end": 232
                          },
                          "start": 224,
                          "end": 232
                        },
                        "start": 212,
                        "end": 232
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "array",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSArrayType",
                            "elementType": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 241,
                                "end": 242
                              },
                              "typeArguments": null,
                              "start": 241,
                              "end": 242
                            },
                            "start": 241,
                            "end": 244
                          },
                          "start": 239,
                          "end": 244
                        },
                        "start": 234,
                        "end": 244
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 249,
                          "end": 250
                        },
                        "typeArguments": null,
                        "start": 249,
                        "end": 250
                      },
                      "start": 246,
                      "end": 250
                    },
                    "start": 176,
                    "end": 250
                  },
                  "start": 174,
                  "end": 250
                },
                "start": 164,
                "end": 250
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "initialValue",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 274,
                      "end": 275
                    },
                    "typeArguments": null,
                    "start": 274,
                    "end": 275
                  },
                  "start": 272,
                  "end": 275
                },
                "start": 260,
                "end": 275
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 278,
                  "end": 279
                },
                "typeArguments": null,
                "start": 278,
                "end": 279
              },
              "start": 276,
              "end": 279
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 154,
            "end": 280
          }
        ],
        "start": 19,
        "end": 282
      },
      "declare": false,
      "start": 0,
      "end": 282
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 290,
                  "end": 295
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 296,
                      "end": 302
                    }
                  ],
                  "start": 295,
                  "end": 303
                },
                "start": 290,
                "end": 303
              },
              "start": 288,
              "end": 303
            },
            "start": 287,
            "end": 303
          },
          "init": null,
          "definite": false,
          "start": 287,
          "end": 303
        }
      ],
      "declare": false,
      "start": 283,
      "end": 304
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "r5",
            "optional": false,
            "typeAnnotation": null,
            "start": 309,
            "end": 311
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 314,
                "end": 315
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "reduce",
                "optional": false,
                "typeAnnotation": null,
                "start": 316,
                "end": 322
              },
              "optional": false,
              "computed": false,
              "start": 314,
              "end": 322
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 324,
                    "end": 325
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 327,
                    "end": 328
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 333,
                    "end": 334
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 337,
                    "end": 338
                  },
                  "start": 333,
                  "end": 338
                },
                "id": null,
                "generator": false,
                "start": 323,
                "end": 338
              }
            ],
            "optional": false,
            "start": 314,
            "end": 339
          },
          "definite": false,
          "start": 309,
          "end": 339
        }
      ],
      "declare": false,
      "start": 305,
      "end": 340
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 340
}
```
