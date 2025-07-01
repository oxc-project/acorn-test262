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
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 10
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 14,
              "end": 21
            },
            "start": 12,
            "end": 21
          },
          "start": 11,
          "end": 21
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 36,
                      "end": 39
                    },
                    "start": 34,
                    "end": 39
                  },
                  "start": 31,
                  "end": 39
                },
                "init": null,
                "definite": false,
                "start": 31,
                "end": 39
              }
            ],
            "declare": false,
            "start": 27,
            "end": 40
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 47,
              "end": 48
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 56,
                      "end": 59
                    },
                    "right": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Foo",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 68,
                        "end": 71
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [
                          {
                            "type": "PropertyDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 87,
                              "end": 88
                            },
                            "typeAnnotation": null,
                            "value": {
                              "type": "NewExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Foo",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 95,
                                "end": 98
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "start": 91,
                              "end": 100
                            },
                            "computed": false,
                            "static": true,
                            "declare": false,
                            "override": false,
                            "optional": false,
                            "definite": false,
                            "readonly": false,
                            "accessibility": null,
                            "start": 80,
                            "end": 101
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 116,
                              "end": 117
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
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Foo",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 134,
                                        "end": 137
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "start": 130,
                                      "end": 139
                                    },
                                    "directive": null,
                                    "start": 130,
                                    "end": 140
                                  }
                                ],
                                "start": 120,
                                "end": 148
                              },
                              "expression": false,
                              "start": 117,
                              "end": 148
                            },
                            "kind": "method",
                            "computed": false,
                            "static": true,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 109,
                            "end": 148
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 156,
                              "end": 157
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
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "NewExpression",
                                      "callee": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "Foo",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 174,
                                        "end": 177
                                      },
                                      "typeArguments": null,
                                      "arguments": [],
                                      "start": 170,
                                      "end": 179
                                    },
                                    "directive": null,
                                    "start": 170,
                                    "end": 180
                                  }
                                ],
                                "start": 160,
                                "end": 188
                              },
                              "expression": false,
                              "start": 157,
                              "end": 188
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 156,
                            "end": 188
                          }
                        ],
                        "start": 72,
                        "end": 194
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 62,
                      "end": 194
                    },
                    "start": 56,
                    "end": 194
                  },
                  "directive": null,
                  "start": 56,
                  "end": 195
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 205,
                      "end": 208
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 201,
                    "end": 210
                  },
                  "directive": null,
                  "start": 201,
                  "end": 211
                }
              ],
              "start": 50,
              "end": 215
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ClassDeclaration",
                  "decorators": [],
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 238
                  },
                  "typeParameters": null,
                  "superClass": null,
                  "superTypeArguments": null,
                  "implements": [],
                  "body": {
                    "type": "ClassBody",
                    "body": [
                      {
                        "type": "PropertyDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 254,
                          "end": 255
                        },
                        "typeAnnotation": null,
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Foo",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 262,
                            "end": 265
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 258,
                          "end": 267
                        },
                        "computed": false,
                        "static": true,
                        "declare": false,
                        "override": false,
                        "optional": false,
                        "definite": false,
                        "readonly": false,
                        "accessibility": null,
                        "start": 247,
                        "end": 268
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 283,
                          "end": 284
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 301,
                                    "end": 304
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 297,
                                  "end": 306
                                },
                                "directive": null,
                                "start": 297,
                                "end": 307
                              }
                            ],
                            "start": 287,
                            "end": 315
                          },
                          "expression": false,
                          "start": 284,
                          "end": 315
                        },
                        "kind": "method",
                        "computed": false,
                        "static": true,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 276,
                        "end": 315
                      },
                      {
                        "type": "MethodDefinition",
                        "decorators": [],
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "m",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 323,
                          "end": 324
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
                                "type": "ExpressionStatement",
                                "expression": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Foo",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 341,
                                    "end": 344
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 337,
                                  "end": 346
                                },
                                "directive": null,
                                "start": 337,
                                "end": 347
                              }
                            ],
                            "start": 327,
                            "end": 355
                          },
                          "expression": false,
                          "start": 324,
                          "end": 355
                        },
                        "kind": "method",
                        "computed": false,
                        "static": false,
                        "override": false,
                        "optional": false,
                        "accessibility": null,
                        "start": 323,
                        "end": 355
                      }
                    ],
                    "start": 239,
                    "end": 361
                  },
                  "abstract": false,
                  "declare": false,
                  "start": 229,
                  "end": 361
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 371,
                      "end": 374
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "start": 367,
                    "end": 376
                  },
                  "directive": null,
                  "start": 367,
                  "end": 377
                }
              ],
              "start": 223,
              "end": 381
            },
            "start": 43,
            "end": 381
          }
        ],
        "start": 23,
        "end": 383
      },
      "expression": false,
      "start": 0,
      "end": 383
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 383
}
```
