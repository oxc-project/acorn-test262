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
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null,
              "start": 15,
              "end": 26
            },
            "value": {
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
                    "type": "FunctionDeclaration",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 48,
                      "end": 51
                    },
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 54,
                      "end": 58
                    },
                    "expression": false,
                    "start": 39,
                    "end": 58
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
                        "start": 68,
                        "end": 71
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 68,
                      "end": 73
                    },
                    "directive": null,
                    "start": 68,
                    "end": 74
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
                          "start": 88,
                          "end": 89
                        },
                        "init": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 92,
                          "end": 93
                        },
                        "definite": false,
                        "start": 88,
                        "end": 93
                      }
                    ],
                    "declare": false,
                    "start": 84,
                    "end": 94
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
                          "name": "inner",
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
                          "start": 107,
                          "end": 117
                        },
                        "init": {
                          "type": "CallExpression",
                          "callee": {
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
                                        "name": "CScriptIO",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 150,
                                        "end": 159
                                      },
                                      "init": {
                                        "type": "CallExpression",
                                        "callee": {
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
                                                      "name": "fso",
                                                      "optional": false,
                                                      "typeAnnotation": null,
                                                      "start": 196,
                                                      "end": 199
                                                    },
                                                    "init": {
                                                      "type": "Literal",
                                                      "value": 0,
                                                      "raw": "0",
                                                      "start": 202,
                                                      "end": 203
                                                    },
                                                    "definite": false,
                                                    "start": 196,
                                                    "end": 203
                                                  }
                                                ],
                                                "declare": false,
                                                "start": 192,
                                                "end": 203
                                              },
                                              {
                                                "type": "ReturnStatement",
                                                "argument": {
                                                  "type": "ObjectExpression",
                                                  "properties": [
                                                    {
                                                      "type": "Property",
                                                      "kind": "init",
                                                      "key": {
                                                        "type": "Identifier",
                                                        "decorators": [],
                                                        "name": "readFile",
                                                        "optional": false,
                                                        "typeAnnotation": null,
                                                        "start": 250,
                                                        "end": 258
                                                      },
                                                      "value": {
                                                        "type": "FunctionExpression",
                                                        "id": null,
                                                        "generator": false,
                                                        "async": false,
                                                        "declare": false,
                                                        "typeParameters": null,
                                                        "params": [
                                                          {
                                                            "type": "Identifier",
                                                            "decorators": [],
                                                            "name": "path",
                                                            "optional": false,
                                                            "typeAnnotation": {
                                                              "type": "TSTypeAnnotation",
                                                              "typeAnnotation": {
                                                                "type": "TSStringKeyword",
                                                                "start": 275,
                                                                "end": 281
                                                              },
                                                              "start": 273,
                                                              "end": 281
                                                            },
                                                            "start": 269,
                                                            "end": 281
                                                          }
                                                        ],
                                                        "returnType": {
                                                          "type": "TSTypeAnnotation",
                                                          "typeAnnotation": {
                                                            "type": "TSStringKeyword",
                                                            "start": 284,
                                                            "end": 290
                                                          },
                                                          "start": 282,
                                                          "end": 290
                                                        },
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
                                                                    "name": "fso",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 324,
                                                                    "end": 327
                                                                  },
                                                                  "property": {
                                                                    "type": "Identifier",
                                                                    "decorators": [],
                                                                    "name": "toString",
                                                                    "optional": false,
                                                                    "typeAnnotation": null,
                                                                    "start": 328,
                                                                    "end": 336
                                                                  },
                                                                  "optional": false,
                                                                  "computed": false,
                                                                  "start": 324,
                                                                  "end": 336
                                                                },
                                                                "typeArguments": null,
                                                                "arguments": [],
                                                                "optional": false,
                                                                "start": 324,
                                                                "end": 338
                                                              },
                                                              "start": 317,
                                                              "end": 339
                                                            }
                                                          ],
                                                          "start": 291,
                                                          "end": 361
                                                        },
                                                        "expression": false,
                                                        "start": 260,
                                                        "end": 361
                                                      },
                                                      "method": false,
                                                      "shorthand": false,
                                                      "computed": false,
                                                      "optional": false,
                                                      "start": 250,
                                                      "end": 361
                                                    }
                                                  ],
                                                  "start": 228,
                                                  "end": 379
                                                },
                                                "start": 221,
                                                "end": 379
                                              }
                                            ],
                                            "start": 174,
                                            "end": 393
                                          },
                                          "expression": false,
                                          "start": 163,
                                          "end": 393
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "optional": false,
                                        "start": 162,
                                        "end": 396
                                      },
                                      "definite": false,
                                      "start": 150,
                                      "end": 396
                                    }
                                  ],
                                  "declare": false,
                                  "start": 146,
                                  "end": 397
                                },
                                {
                                  "type": "ReturnStatement",
                                  "argument": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "inner",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 417,
                                    "end": 422
                                  },
                                  "start": 410,
                                  "end": 423
                                }
                              ],
                              "start": 132,
                              "end": 433
                            },
                            "expression": false,
                            "start": 121,
                            "end": 433
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 120,
                          "end": 436
                        },
                        "definite": false,
                        "start": 107,
                        "end": 436
                      }
                    ],
                    "declare": false,
                    "start": 103,
                    "end": 437
                  }
                ],
                "start": 29,
                "end": 443
              },
              "expression": false,
              "start": 26,
              "end": 443
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 15,
            "end": 443
          }
        ],
        "start": 8,
        "end": 445
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 445
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
            "start": 451,
            "end": 452
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 459,
              "end": 460
            },
            "typeArguments": null,
            "arguments": [],
            "start": 455,
            "end": 462
          },
          "definite": false,
          "start": 451,
          "end": 462
        }
      ],
      "declare": false,
      "start": 447,
      "end": 463
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null,
            "start": 465,
            "end": 466
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 470
          },
          "optional": false,
          "computed": false,
          "start": 465,
          "end": 470
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 465,
        "end": 472
      },
      "directive": null,
      "start": 465,
      "end": 473
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 476
}
```
