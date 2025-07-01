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
        "name": "C",
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
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "foo",
              "start": 14,
              "end": 18
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 42,
              "raw": "42",
              "start": 21,
              "end": 23
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 24
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "bar",
              "start": 29,
              "end": 33
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
                      "type": "MemberExpression",
                      "object": {
                        "type": "NewExpression",
                        "callee": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "C",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 42,
                          "end": 43
                        },
                        "typeArguments": null,
                        "arguments": [],
                        "start": 38,
                        "end": 45
                      },
                      "property": {
                        "type": "PrivateIdentifier",
                        "name": "baz",
                        "start": 46,
                        "end": 50
                      },
                      "optional": false,
                      "computed": false,
                      "start": 38,
                      "end": 50
                    },
                    "directive": null,
                    "start": 38,
                    "end": 51
                  }
                ],
                "start": 36,
                "end": 53
              },
              "expression": false,
              "start": 33,
              "end": 53
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 29,
            "end": 53
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "PrivateIdentifier",
              "name": "baz",
              "start": 62,
              "end": 66
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 42,
                      "raw": "42",
                      "start": 78,
                      "end": 80
                    },
                    "start": 71,
                    "end": 81
                  }
                ],
                "start": 69,
                "end": 83
              },
              "expression": false,
              "start": 66,
              "end": 83
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 58,
            "end": 83
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
              "start": 89,
              "end": 90
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
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "ClassExpression",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "D",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 116,
                        "end": 117
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
                              "type": "PrivateIdentifier",
                              "name": "bar",
                              "start": 132,
                              "end": 136
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
                                "body": [],
                                "start": 139,
                                "end": 141
                              },
                              "expression": false,
                              "start": 136,
                              "end": 141
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 132,
                            "end": 141
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "constructor",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 154,
                              "end": 165
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
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 190,
                                          "end": 191
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 186,
                                        "end": 193
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "start": 194,
                                        "end": 198
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 186,
                                      "end": 198
                                    },
                                    "directive": null,
                                    "start": 186,
                                    "end": 199
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 220,
                                          "end": 221
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 216,
                                        "end": 223
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "bar",
                                        "start": 224,
                                        "end": 228
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 216,
                                      "end": 228
                                    },
                                    "directive": null,
                                    "start": 216,
                                    "end": 229
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "C",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 259,
                                          "end": 260
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 255,
                                        "end": 262
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "baz",
                                        "start": 263,
                                        "end": 267
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 255,
                                      "end": 267
                                    },
                                    "directive": null,
                                    "start": 255,
                                    "end": 268
                                  },
                                  {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                      "type": "MemberExpression",
                                      "object": {
                                        "type": "NewExpression",
                                        "callee": {
                                          "type": "Identifier",
                                          "decorators": [],
                                          "name": "D",
                                          "optional": false,
                                          "typeAnnotation": null,
                                          "start": 289,
                                          "end": 290
                                        },
                                        "typeArguments": null,
                                        "arguments": [],
                                        "start": 285,
                                        "end": 292
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "bar",
                                        "start": 293,
                                        "end": 297
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 285,
                                      "end": 297
                                    },
                                    "directive": null,
                                    "start": 285,
                                    "end": 298
                                  }
                                ],
                                "start": 168,
                                "end": 312
                              },
                              "expression": false,
                              "start": 165,
                              "end": 312
                            },
                            "kind": "constructor",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 154,
                            "end": 312
                          },
                          {
                            "type": "MethodDefinition",
                            "decorators": [],
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "n",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 326,
                              "end": 327
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
                                  "name": "x",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSAnyKeyword",
                                      "start": 331,
                                      "end": 334
                                    },
                                    "start": 329,
                                    "end": 334
                                  },
                                  "start": 328,
                                  "end": 334
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
                                        "start": 354,
                                        "end": 355
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "foo",
                                        "start": 356,
                                        "end": 360
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 354,
                                      "end": 360
                                    },
                                    "directive": null,
                                    "start": 354,
                                    "end": 361
                                  },
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
                                        "start": 378,
                                        "end": 379
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "bar",
                                        "start": 380,
                                        "end": 384
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 378,
                                      "end": 384
                                    },
                                    "directive": null,
                                    "start": 378,
                                    "end": 385
                                  },
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
                                        "start": 402,
                                        "end": 403
                                      },
                                      "property": {
                                        "type": "PrivateIdentifier",
                                        "name": "unknown",
                                        "start": 404,
                                        "end": 412
                                      },
                                      "optional": false,
                                      "computed": false,
                                      "start": 402,
                                      "end": 412
                                    },
                                    "directive": null,
                                    "start": 402,
                                    "end": 413
                                  }
                                ],
                                "start": 336,
                                "end": 436
                              },
                              "expression": false,
                              "start": 327,
                              "end": 436
                            },
                            "kind": "method",
                            "computed": false,
                            "static": false,
                            "override": false,
                            "optional": false,
                            "accessibility": null,
                            "start": 326,
                            "end": 436
                          }
                        ],
                        "start": 118,
                        "end": 446
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 110,
                      "end": 446
                    },
                    "start": 103,
                    "end": 446
                  }
                ],
                "start": 93,
                "end": 452
              },
              "expression": false,
              "start": 90,
              "end": 452
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 89,
            "end": 452
          }
        ],
        "start": 8,
        "end": 454
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 454
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 454
}
```
