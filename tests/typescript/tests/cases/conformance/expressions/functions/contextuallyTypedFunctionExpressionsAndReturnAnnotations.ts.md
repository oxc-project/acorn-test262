__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
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
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 28,
                      "end": 34
                    },
                    "start": 26,
                    "end": 34
                  },
                  "start": 25,
                  "end": 34
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
                      "name": "y2",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 44,
                          "end": 50
                        },
                        "start": 42,
                        "end": 50
                      },
                      "start": 40,
                      "end": 50
                    }
                  ],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSVoidKeyword",
                      "start": 55,
                      "end": 59
                    },
                    "start": 52,
                    "end": 59
                  },
                  "start": 39,
                  "end": 59
                },
                "start": 36,
                "end": 59
              },
              "start": 24,
              "end": 59
            },
            "start": 22,
            "end": 59
          },
          "start": 21,
          "end": 59
        }
      ],
      "returnType": null,
      "body": null,
      "expression": false,
      "start": 0,
      "end": 61
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 135,
          "end": 138
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
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 141
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
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 149,
                        "end": 155
                      },
                      "start": 147,
                      "end": 155
                    },
                    "start": 145,
                    "end": 155
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 160,
                    "end": 164
                  },
                  "start": 157,
                  "end": 164
                },
                "start": 144,
                "end": 164
              },
              "start": 142,
              "end": 164
            },
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
                        "start": 178,
                        "end": 179
                      },
                      "init": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 182,
                            "end": 183
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "charAt",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 184,
                            "end": 190
                          },
                          "optional": false,
                          "computed": false,
                          "start": 182,
                          "end": 190
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 191,
                            "end": 192
                          }
                        ],
                        "optional": false,
                        "start": 182,
                        "end": 193
                      },
                      "definite": false,
                      "start": 178,
                      "end": 193
                    }
                  ],
                  "declare": false,
                  "start": 174,
                  "end": 194
                },
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "Literal",
                    "value": null,
                    "raw": "null",
                    "start": 226,
                    "end": 230
                  },
                  "start": 219,
                  "end": 231
                }
              ],
              "start": 168,
              "end": 233
            },
            "id": null,
            "generator": false,
            "start": 139,
            "end": 233
          }
        ],
        "optional": false,
        "start": 135,
        "end": 234
      },
      "directive": null,
      "start": 135,
      "end": 235
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 237,
          "end": 240
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
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 245,
                    "end": 251
                  },
                  "start": 243,
                  "end": 251
                },
                "start": 242,
                "end": 251
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ReturnStatement",
                  "argument": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 269,
                        "end": 271
                      }
                    ],
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
                                "start": 289,
                                "end": 290
                              },
                              "init": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "y2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 293,
                                    "end": 295
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "toFixed",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 296,
                                    "end": 303
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 293,
                                  "end": 303
                                },
                                "typeArguments": null,
                                "arguments": [],
                                "optional": false,
                                "start": 293,
                                "end": 305
                              },
                              "definite": false,
                              "start": 289,
                              "end": 305
                            }
                          ],
                          "declare": false,
                          "start": 285,
                          "end": 306
                        },
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 342,
                            "end": 343
                          },
                          "start": 335,
                          "end": 344
                        }
                      ],
                      "start": 275,
                      "end": 350
                    },
                    "id": null,
                    "generator": false,
                    "start": 269,
                    "end": 350
                  },
                  "start": 262,
                  "end": 351
                }
              ],
              "start": 256,
              "end": 353
            },
            "id": null,
            "generator": false,
            "start": 241,
            "end": 353
          }
        ],
        "optional": false,
        "start": 237,
        "end": 354
      },
      "directive": null,
      "start": 237,
      "end": 355
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 355
}
```
