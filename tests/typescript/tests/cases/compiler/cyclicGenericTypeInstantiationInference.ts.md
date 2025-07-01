__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 12
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 13,
              "end": 14
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 13,
            "end": 14
          }
        ],
        "start": 12,
        "end": 15
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 28,
                  "end": 29
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 32,
                    "end": 35
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 43,
                          "end": 44
                        },
                        "typeArguments": null,
                        "start": 36,
                        "end": 44
                      }
                    ],
                    "start": 35,
                    "end": 45
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 32,
                  "end": 47
                },
                "definite": false,
                "start": 28,
                "end": 47
              }
            ],
            "declare": false,
            "start": 24,
            "end": 48
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "name": "y2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 70,
                            "end": 72
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 81,
                                "end": 82
                              },
                              "typeArguments": null,
                              "start": 74,
                              "end": 82
                            },
                            "start": 72,
                            "end": 82
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 70,
                          "end": 82
                        }
                      ],
                      "start": 60,
                      "end": 88
                    },
                    "start": 58,
                    "end": 88
                  },
                  "start": 57,
                  "end": 88
                },
                "init": null,
                "definite": false,
                "start": 57,
                "end": 88
              }
            ],
            "declare": false,
            "start": 53,
            "end": 89
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 101,
              "end": 102
            },
            "start": 94,
            "end": 103
          }
        ],
        "start": 18,
        "end": 105
      },
      "expression": false,
      "start": 0,
      "end": 105
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 117,
        "end": 120
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 121,
              "end": 122
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 121,
            "end": 122
          }
        ],
        "start": 120,
        "end": 123
      },
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 136,
                  "end": 137
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 143
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "params": [
                      {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 151,
                          "end": 152
                        },
                        "typeArguments": null,
                        "start": 144,
                        "end": 152
                      }
                    ],
                    "start": 143,
                    "end": 153
                  },
                  "arguments": [],
                  "optional": false,
                  "start": 140,
                  "end": 155
                },
                "definite": false,
                "start": 136,
                "end": 155
              }
            ],
            "declare": false,
            "start": 132,
            "end": 156
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
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
                            "name": "y2",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 178,
                            "end": 180
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeQuery",
                              "exprName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "z",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 189,
                                "end": 190
                              },
                              "typeArguments": null,
                              "start": 182,
                              "end": 190
                            },
                            "start": 180,
                            "end": 190
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 178,
                          "end": 191
                        }
                      ],
                      "start": 168,
                      "end": 197
                    },
                    "start": 166,
                    "end": 197
                  },
                  "start": 165,
                  "end": 197
                },
                "init": null,
                "definite": false,
                "start": 165,
                "end": 197
              }
            ],
            "declare": false,
            "start": 161,
            "end": 197
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 210
            },
            "start": 202,
            "end": 211
          }
        ],
        "start": 126,
        "end": 213
      },
      "expression": false,
      "start": 108,
      "end": 213
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
            "typeAnnotation": null,
            "start": 219,
            "end": 220
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 223,
              "end": 226
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 227,
                  "end": 233
                }
              ],
              "start": 226,
              "end": 234
            },
            "arguments": [],
            "optional": false,
            "start": 223,
            "end": 236
          },
          "definite": false,
          "start": 219,
          "end": 236
        }
      ],
      "declare": false,
      "start": 215,
      "end": 237
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
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 243
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 249
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSNumberKeyword",
                  "start": 250,
                  "end": 256
                }
              ],
              "start": 249,
              "end": 257
            },
            "arguments": [],
            "optional": false,
            "start": 246,
            "end": 259
          },
          "definite": false,
          "start": 242,
          "end": 259
        }
      ],
      "declare": false,
      "start": 238,
      "end": 260
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "test",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 275
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 276,
              "end": 277
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 276,
            "end": 277
          }
        ],
        "start": 275,
        "end": 278
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeQuery",
              "exprName": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 289,
                "end": 290
              },
              "typeArguments": null,
              "start": 282,
              "end": 290
            },
            "start": 280,
            "end": 290
          },
          "start": 279,
          "end": 290
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 293,
          "end": 297
        },
        "start": 291,
        "end": 297
      },
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 298,
        "end": 301
      },
      "expression": false,
      "start": 262,
      "end": 301
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null,
          "start": 302,
          "end": 306
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 307,
            "end": 308
          }
        ],
        "optional": false,
        "start": 302,
        "end": 309
      },
      "directive": null,
      "start": 302,
      "end": 310
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 310
}
```
