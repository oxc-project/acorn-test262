__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
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
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
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
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 24,
                        "end": 27
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 30,
                          "end": 39
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 40,
                          "end": 41
                        },
                        "optional": false,
                        "computed": true,
                        "start": 30,
                        "end": 42
                      },
                      "definite": false,
                      "start": 24,
                      "end": 42
                    }
                  ],
                  "declare": false,
                  "start": 20,
                  "end": 43
                }
              ],
              "start": 14,
              "end": 55
            },
            "id": null,
            "generator": false,
            "start": 8,
            "end": 55
          },
          "definite": false,
          "start": 4,
          "end": 55
        }
      ],
      "declare": false,
      "start": 0,
      "end": 55
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
            "start": 61,
            "end": 62
          },
          "init": {
            "type": "FunctionExpression",
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 87,
                        "end": 88
                      },
                      "init": {
                        "type": "ArrowFunctionExpression",
                        "expression": false,
                        "async": false,
                        "typeParameters": null,
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
                                    "name": "arg",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 111,
                                    "end": 114
                                  },
                                  "init": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "arguments",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 117,
                                      "end": 126
                                    },
                                    "property": {
                                      "type": "Literal",
                                      "value": 0,
                                      "raw": "0",
                                      "start": 127,
                                      "end": 128
                                    },
                                    "optional": false,
                                    "computed": true,
                                    "start": 117,
                                    "end": 129
                                  },
                                  "definite": false,
                                  "start": 111,
                                  "end": 129
                                }
                              ],
                              "declare": false,
                              "start": 107,
                              "end": 130
                            }
                          ],
                          "start": 97,
                          "end": 146
                        },
                        "id": null,
                        "generator": false,
                        "start": 91,
                        "end": 146
                      },
                      "definite": false,
                      "start": 87,
                      "end": 146
                    }
                  ],
                  "declare": false,
                  "start": 83,
                  "end": 146
                }
              ],
              "start": 77,
              "end": 148
            },
            "expression": false,
            "start": 65,
            "end": 148
          },
          "definite": false,
          "start": 61,
          "end": 148
        }
      ],
      "declare": false,
      "start": 57,
      "end": 148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 162
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "ArrowFunctionExpression",
              "expression": false,
              "async": false,
              "typeParameters": null,
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 185
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 188,
                            "end": 197
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 198,
                            "end": 199
                          },
                          "optional": false,
                          "computed": true,
                          "start": 188,
                          "end": 200
                        },
                        "definite": false,
                        "start": 182,
                        "end": 200
                      }
                    ],
                    "declare": false,
                    "start": 178,
                    "end": 201
                  }
                ],
                "start": 174,
                "end": 204
              },
              "id": null,
              "generator": false,
              "start": 168,
              "end": 204
            },
            "directive": null,
            "start": 168,
            "end": 204
          }
        ],
        "start": 165,
        "end": 206
      },
      "expression": false,
      "start": 150,
      "end": 206
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 217,
        "end": 220
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "inputFunc",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 238,
                  "end": 242
                },
                "start": 235,
                "end": 242
              },
              "start": 232,
              "end": 242
            },
            "start": 230,
            "end": 242
          },
          "start": 221,
          "end": 242
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 244,
        "end": 247
      },
      "expression": false,
      "start": 208,
      "end": 247
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
          "start": 248,
          "end": 251
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
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
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 268,
                        "end": 271
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "arguments",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 283
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 284,
                          "end": 285
                        },
                        "optional": false,
                        "computed": true,
                        "start": 274,
                        "end": 286
                      },
                      "definite": false,
                      "start": 268,
                      "end": 286
                    }
                  ],
                  "declare": false,
                  "start": 264,
                  "end": 287
                }
              ],
              "start": 258,
              "end": 299
            },
            "id": null,
            "generator": false,
            "start": 252,
            "end": 299
          }
        ],
        "optional": false,
        "start": 248,
        "end": 300
      },
      "directive": null,
      "start": 248,
      "end": 301
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bar",
        "optional": false,
        "typeAnnotation": null,
        "start": 312,
        "end": 315
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 331
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "arguments",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 334,
                    "end": 343
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 344,
                    "end": 345
                  },
                  "optional": false,
                  "computed": true,
                  "start": 334,
                  "end": 346
                },
                "definite": false,
                "start": 328,
                "end": 346
              }
            ],
            "declare": false,
            "start": 324,
            "end": 347
          }
        ],
        "start": 318,
        "end": 362
      },
      "expression": false,
      "start": 303,
      "end": 362
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "ArrowFunctionExpression",
        "expression": false,
        "async": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 383,
                "end": 386
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 397,
                          "end": 400
                        },
                        "init": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "arguments",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 403,
                            "end": 412
                          },
                          "property": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 413,
                            "end": 414
                          },
                          "optional": false,
                          "computed": true,
                          "start": 403,
                          "end": 415
                        },
                        "definite": false,
                        "start": 397,
                        "end": 415
                      }
                    ],
                    "declare": false,
                    "start": 393,
                    "end": 416
                  }
                ],
                "start": 389,
                "end": 432
              },
              "expression": false,
              "start": 374,
              "end": 432
            }
          ],
          "start": 371,
          "end": 434
        },
        "id": null,
        "generator": false,
        "start": 365,
        "end": 434
      },
      "directive": null,
      "start": 365,
      "end": 434
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 434
}
```
