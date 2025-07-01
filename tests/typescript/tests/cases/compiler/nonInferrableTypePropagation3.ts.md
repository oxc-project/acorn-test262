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
        "name": "Callback",
        "optional": false,
        "typeAnnotation": null,
        "start": 35,
        "end": 43
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Args",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 48
            },
            "constraint": {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSAnyKeyword",
                "start": 57,
                "end": 60
              },
              "start": 57,
              "end": 62
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 44,
            "end": 62
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Out",
              "optional": false,
              "typeAnnotation": null,
              "start": 64,
              "end": 67
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 64,
            "end": 67
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "R",
              "optional": false,
              "typeAnnotation": null,
              "start": 69,
              "end": 70
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 69,
            "end": 70
          }
        ],
        "start": 43,
        "end": 71
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "typeParameters": null,
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 82
            },
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 84,
                  "end": 88
                },
                "typeArguments": null,
                "start": 84,
                "end": 88
              },
              "start": 82,
              "end": 88
            },
            "value": null,
            "start": 75,
            "end": 88
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSFunctionType",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Out",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 100,
                      "end": 103
                    },
                    "typeArguments": null,
                    "start": 100,
                    "end": 103
                  },
                  "start": 98,
                  "end": 103
                },
                "start": 94,
                "end": 103
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 108,
                  "end": 109
                },
                "typeArguments": null,
                "start": 108,
                "end": 109
              },
              "start": 105,
              "end": 109
            },
            "start": 93,
            "end": 109
          },
          "start": 90,
          "end": 109
        },
        "start": 74,
        "end": 109
      },
      "declare": true,
      "start": 22,
      "end": 110
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "factory",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 135
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Out",
              "optional": false,
              "typeAnnotation": null,
              "start": 136,
              "end": 139
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 136,
            "end": 139
          }
        ],
        "start": 135,
        "end": 140
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSFunctionType",
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "params": [
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 145,
                  "end": 149
                },
                "constraint": {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 158,
                    "end": 161
                  },
                  "start": 158,
                  "end": 163
                },
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 145,
                "end": 163
              },
              {
                "type": "TSTypeParameter",
                "name": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "R",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 165,
                  "end": 166
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false,
                "start": 165,
                "end": 166
              }
            ],
            "start": 144,
            "end": 167
          },
          "params": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "callback",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Callback",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 178,
                    "end": 186
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Args",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 187,
                          "end": 191
                        },
                        "typeArguments": null,
                        "start": 187,
                        "end": 191
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Out",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 193,
                          "end": 196
                        },
                        "typeArguments": null,
                        "start": 193,
                        "end": 196
                      },
                      {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "R",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 198,
                          "end": 199
                        },
                        "typeArguments": null,
                        "start": 198,
                        "end": 199
                      }
                    ],
                    "start": 186,
                    "end": 200
                  },
                  "start": 178,
                  "end": 200
                },
                "start": 176,
                "end": 200
              },
              "start": 168,
              "end": 200
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 209,
                    "end": 213
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 215,
                        "end": 219
                      },
                      "typeArguments": null,
                      "start": 215,
                      "end": 219
                    },
                    "start": 213,
                    "end": 219
                  },
                  "value": null,
                  "start": 206,
                  "end": 219
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "R",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 225
                  },
                  "typeArguments": null,
                  "start": 224,
                  "end": 225
                },
                "start": 221,
                "end": 225
              },
              "start": 205,
              "end": 225
            },
            "start": 202,
            "end": 225
          },
          "start": 144,
          "end": 225
        },
        "start": 142,
        "end": 225
      },
      "body": null,
      "expression": false,
      "start": 111,
      "end": 226
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "make",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 238
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "factory",
              "optional": false,
              "typeAnnotation": null,
              "start": 241,
              "end": 248
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSArrayType",
                  "elementType": {
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
                          "name": "id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 250,
                          "end": 252
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 254,
                            "end": 260
                          },
                          "start": 252,
                          "end": 260
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 250,
                        "end": 261
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "age",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 262,
                          "end": 265
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 267,
                            "end": 273
                          },
                          "start": 265,
                          "end": 273
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 262,
                        "end": 273
                      }
                    ],
                    "start": 249,
                    "end": 274
                  },
                  "start": 249,
                  "end": 276
                }
              ],
              "start": 248,
              "end": 277
            },
            "arguments": [],
            "optional": false,
            "start": 241,
            "end": 279
          },
          "definite": false,
          "start": 234,
          "end": 279
        }
      ],
      "declare": false,
      "start": 228,
      "end": 280
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "usersOverAge",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 300
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "make",
              "optional": false,
              "typeAnnotation": null,
              "start": 303,
              "end": 307
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
                    "name": "age",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 314,
                        "end": 320
                      },
                      "start": 312,
                      "end": 320
                    },
                    "start": 309,
                    "end": 320
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "ArrowFunctionExpression",
                  "expression": false,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 325,
                      "end": 329
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "argument": {
                          "type": "CallExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 346,
                              "end": 350
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "filter",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 351,
                              "end": 357
                            },
                            "optional": false,
                            "computed": false,
                            "start": 346,
                            "end": 357
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
                                  "name": "user",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 358,
                                  "end": 362
                                }
                              ],
                              "returnType": null,
                              "body": {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "user",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 366,
                                    "end": 370
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "age",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 371,
                                    "end": 374
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 366,
                                  "end": 374
                                },
                                "operator": ">=",
                                "right": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "age",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 378,
                                  "end": 381
                                },
                                "start": 366,
                                "end": 381
                              },
                              "id": null,
                              "generator": false,
                              "start": 358,
                              "end": 381
                            }
                          ],
                          "optional": false,
                          "start": 346,
                          "end": 382
                        },
                        "start": 339,
                        "end": 383
                      }
                    ],
                    "start": 333,
                    "end": 385
                  },
                  "id": null,
                  "generator": false,
                  "start": 325,
                  "end": 385
                },
                "id": null,
                "generator": false,
                "start": 308,
                "end": 385
              }
            ],
            "optional": false,
            "start": 303,
            "end": 386
          },
          "definite": false,
          "start": 288,
          "end": 386
        }
      ],
      "declare": false,
      "start": 282,
      "end": 387
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 22,
  "end": 387
}
```
