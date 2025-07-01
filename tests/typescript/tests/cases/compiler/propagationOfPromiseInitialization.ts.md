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
        "name": "IPromise",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 18
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
              "start": 19,
              "end": 20
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 19,
            "end": 20
          }
        ],
        "start": 18,
        "end": 21
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
              "name": "then",
              "optional": false,
              "typeAnnotation": null,
              "start": 28,
              "end": 32
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
                    "name": "TResult",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 33,
                    "end": 40
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 33,
                  "end": 40
                }
              ],
              "start": 32,
              "end": 41
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "successCallback",
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
                        "name": "promiseValue",
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
                              "start": 74,
                              "end": 75
                            },
                            "typeArguments": null,
                            "start": 74,
                            "end": 75
                          },
                          "start": 72,
                          "end": 75
                        },
                        "start": 60,
                        "end": 75
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 80,
                          "end": 87
                        },
                        "typeArguments": null,
                        "start": 80,
                        "end": 87
                      },
                      "start": 77,
                      "end": 87
                    },
                    "start": 59,
                    "end": 87
                  },
                  "start": 57,
                  "end": 87
                },
                "start": 42,
                "end": 87
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "errorCallback",
                "optional": true,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 114,
                            "end": 117
                          },
                          "start": 112,
                          "end": 117
                        },
                        "start": 106,
                        "end": 117
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TResult",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 122,
                          "end": 129
                        },
                        "typeArguments": null,
                        "start": 122,
                        "end": 129
                      },
                      "start": 119,
                      "end": 129
                    },
                    "start": 105,
                    "end": 129
                  },
                  "start": 103,
                  "end": 129
                },
                "start": 89,
                "end": 129
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 132,
                  "end": 140
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TResult",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 141,
                        "end": 148
                      },
                      "typeArguments": null,
                      "start": 141,
                      "end": 148
                    }
                  ],
                  "start": 140,
                  "end": 149
                },
                "start": 132,
                "end": 149
              },
              "start": 130,
              "end": 149
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 28,
            "end": 150
          }
        ],
        "start": 22,
        "end": 152
      },
      "declare": false,
      "start": 0,
      "end": 152
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
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "IPromise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 163,
                  "end": 171
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 172,
                      "end": 178
                    }
                  ],
                  "start": 171,
                  "end": 179
                },
                "start": 163,
                "end": 179
              },
              "start": 161,
              "end": 179
            },
            "start": 158,
            "end": 179
          },
          "init": null,
          "definite": false,
          "start": 158,
          "end": 179
        }
      ],
      "declare": false,
      "start": 154,
      "end": 180
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 181,
                "end": 184
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "then",
                "optional": false,
                "typeAnnotation": null,
                "start": 185,
                "end": 189
              },
              "optional": false,
              "computed": false,
              "start": 181,
              "end": 189
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 191,
                    "end": 192
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Literal",
                        "value": "asdf",
                        "raw": "\"asdf\"",
                        "start": 246,
                        "end": 252
                      },
                      "start": 239,
                      "end": 253
                    }
                  ],
                  "start": 197,
                  "end": 255
                },
                "id": null,
                "generator": false,
                "start": 190,
                "end": 255
              }
            ],
            "optional": false,
            "start": 181,
            "end": 256
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "then",
            "optional": false,
            "typeAnnotation": null,
            "start": 257,
            "end": 261
          },
          "optional": false,
          "computed": false,
          "start": 181,
          "end": 261
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 263,
                "end": 264
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 310
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 317
                    },
                    "optional": false,
                    "computed": false,
                    "start": 309,
                    "end": 317
                  },
                  "directive": null,
                  "start": 309,
                  "end": 318
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": 123,
                    "raw": "123",
                    "start": 330,
                    "end": 333
                  },
                  "start": 323,
                  "end": 334
                }
              ],
              "start": 269,
              "end": 336
            },
            "id": null,
            "generator": false,
            "start": 262,
            "end": 336
          }
        ],
        "optional": false,
        "start": 181,
        "end": 337
      },
      "directive": null,
      "start": 181,
      "end": 338
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 338
}
```
