__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AsyncEnumeratorDone",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 82
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 83,
        "end": 86
      },
      "abstract": false,
      "declare": false,
      "start": 57,
      "end": 86
    },
    {
      "type": "EmptyStatement",
      "start": 86,
      "end": 87
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "IAsyncEnumerator",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 115
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
              "start": 116,
              "end": 117
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 116,
            "end": 117
          }
        ],
        "start": 115,
        "end": 118
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
              "name": "next1",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 130
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 134,
                  "end": 141
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 142,
                            "end": 143
                          },
                          "typeArguments": null,
                          "start": 142,
                          "end": 143
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AsyncEnumeratorDone",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 146,
                            "end": 165
                          },
                          "typeArguments": null,
                          "start": 146,
                          "end": 165
                        }
                      ],
                      "start": 142,
                      "end": 165
                    }
                  ],
                  "start": 141,
                  "end": 166
                },
                "start": 134,
                "end": 166
              },
              "start": 132,
              "end": 166
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 125,
            "end": 167
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next2",
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 177
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 181,
                      "end": 188
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 189,
                            "end": 190
                          },
                          "typeArguments": null,
                          "start": 189,
                          "end": 190
                        }
                      ],
                      "start": 188,
                      "end": 191
                    },
                    "start": 181,
                    "end": 191
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 194,
                      "end": 201
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "AsyncEnumeratorDone",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 202,
                            "end": 221
                          },
                          "typeArguments": null,
                          "start": 202,
                          "end": 221
                        }
                      ],
                      "start": 201,
                      "end": 222
                    },
                    "start": 194,
                    "end": 222
                  }
                ],
                "start": 181,
                "end": 222
              },
              "start": 179,
              "end": 222
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 172,
            "end": 223
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next3",
              "optional": false,
              "typeAnnotation": null,
              "start": 228,
              "end": 233
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 237,
                  "end": 244
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 245,
                            "end": 246
                          },
                          "typeArguments": null,
                          "start": 245,
                          "end": 246
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 249,
                          "end": 251
                        }
                      ],
                      "start": 245,
                      "end": 251
                    }
                  ],
                  "start": 244,
                  "end": 252
                },
                "start": 237,
                "end": 252
              },
              "start": 235,
              "end": 252
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 228,
            "end": 253
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "next4",
              "optional": false,
              "typeAnnotation": null,
              "start": 258,
              "end": 263
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 267,
                  "end": 274
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 275,
                            "end": 276
                          },
                          "typeArguments": null,
                          "start": 275,
                          "end": 276
                        },
                        {
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
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 281,
                                "end": 282
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 284,
                                  "end": 290
                                },
                                "start": 282,
                                "end": 290
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 281,
                              "end": 290
                            }
                          ],
                          "start": 279,
                          "end": 292
                        }
                      ],
                      "start": 275,
                      "end": 292
                    }
                  ],
                  "start": 274,
                  "end": 293
                },
                "start": 267,
                "end": 293
              },
              "start": 265,
              "end": 293
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 258,
            "end": 294
          }
        ],
        "start": 119,
        "end": 296
      },
      "declare": false,
      "start": 89,
      "end": 296
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "main",
        "optional": false,
        "typeAnnotation": null,
        "start": 313,
        "end": 317
      },
      "generator": false,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
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
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "IAsyncEnumerator",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 335,
                        "end": 351
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 352,
                            "end": 358
                          }
                        ],
                        "start": 351,
                        "end": 359
                      },
                      "start": 335,
                      "end": 359
                    },
                    "start": 333,
                    "end": 359
                  },
                  "start": 332,
                  "end": 359
                },
                "init": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 362,
                  "end": 366
                },
                "definite": false,
                "start": 332,
                "end": 366
              }
            ],
            "declare": false,
            "start": 326,
            "end": 367
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 377
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 386,
                        "end": 387
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 388,
                        "end": 393
                      },
                      "optional": false,
                      "computed": false,
                      "start": 386,
                      "end": 393
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 386,
                    "end": 395
                  },
                  "start": 380,
                  "end": 395
                },
                "definite": false,
                "start": 376,
                "end": 395
              }
            ],
            "declare": false,
            "start": 372,
            "end": 396
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 405,
                  "end": 406
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 416
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 417,
                        "end": 422
                      },
                      "optional": false,
                      "computed": false,
                      "start": 415,
                      "end": 422
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 415,
                    "end": 424
                  },
                  "start": 409,
                  "end": 424
                },
                "definite": false,
                "start": 405,
                "end": 424
              }
            ],
            "declare": false,
            "start": 401,
            "end": 425
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 434,
                  "end": 435
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 444,
                        "end": 445
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next3",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 446,
                        "end": 451
                      },
                      "optional": false,
                      "computed": false,
                      "start": 444,
                      "end": 451
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 444,
                    "end": 453
                  },
                  "start": 438,
                  "end": 453
                },
                "definite": false,
                "start": 434,
                "end": 453
              }
            ],
            "declare": false,
            "start": 430,
            "end": 454
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 463,
                  "end": 464
                },
                "init": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 473,
                        "end": 474
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "next4",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 475,
                        "end": 480
                      },
                      "optional": false,
                      "computed": false,
                      "start": 473,
                      "end": 480
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 473,
                    "end": 482
                  },
                  "start": 467,
                  "end": 482
                },
                "definite": false,
                "start": 463,
                "end": 482
              }
            ],
            "declare": false,
            "start": 459,
            "end": 483
          }
        ],
        "start": 320,
        "end": 485
      },
      "expression": false,
      "start": 298,
      "end": 485
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 57,
  "end": 485
}
```
