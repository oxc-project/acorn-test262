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
        "name": "isFooError",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 27
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
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            },
            "start": 29,
            "end": 34
          },
          "start": 28,
          "end": 34
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "parameterName": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 37,
            "end": 38
          },
          "asserts": false,
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
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 44,
                    "end": 48
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": "foo",
                        "raw": "'foo'",
                        "start": 50,
                        "end": 55
                      },
                      "start": 50,
                      "end": 55
                    },
                    "start": 48,
                    "end": 55
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 44,
                  "end": 56
                },
                {
                  "type": "TSMethodSignature",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dontPanic",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 57,
                    "end": 66
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false,
                  "start": 57,
                  "end": 69
                }
              ],
              "start": 42,
              "end": 71
            },
            "start": 42,
            "end": 71
          },
          "start": 37,
          "end": 71
        },
        "start": 35,
        "end": 71
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 72
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tryCatch",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 91
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
            "type": "TryStatement",
            "block": {
              "type": "BlockStatement",
              "body": [],
              "start": 104,
              "end": 134
            },
            "handler": {
              "type": "CatchClause",
              "param": {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null,
                "start": 146,
                "end": 149
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "IfStatement",
                    "test": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isFooError",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 217,
                        "end": 227
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 228,
                          "end": 231
                        }
                      ],
                      "optional": false,
                      "start": 217,
                      "end": 232
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 248,
                                "end": 251
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "dontPanic",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 252,
                                "end": 261
                              },
                              "optional": false,
                              "computed": false,
                              "start": 248,
                              "end": 261
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 248,
                            "end": 263
                          },
                          "directive": null,
                          "start": 248,
                          "end": 264
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
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 283,
                                "end": 286
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "doPanic",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 287,
                                "end": 294
                              },
                              "optional": false,
                              "computed": false,
                              "start": 283,
                              "end": 294
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 283,
                            "end": 296
                          },
                          "directive": null,
                          "start": 283,
                          "end": 297
                        }
                      ],
                      "start": 234,
                      "end": 367
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "test": {
                        "type": "BinaryExpression",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 386,
                          "end": 389
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Error",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 401,
                          "end": 406
                        },
                        "start": 386,
                        "end": 406
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 422,
                                "end": 425
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "message",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 426,
                                "end": 433
                              },
                              "optional": false,
                              "computed": false,
                              "start": 422,
                              "end": 433
                            },
                            "directive": null,
                            "start": 422,
                            "end": 434
                          },
                          {
                            "type": "ExpressionStatement",
                            "expression": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 447,
                                "end": 450
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "massage",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 451,
                                "end": 458
                              },
                              "optional": false,
                              "computed": false,
                              "start": 447,
                              "end": 458
                            },
                            "directive": null,
                            "start": 447,
                            "end": 459
                          }
                        ],
                        "start": 408,
                        "end": 529
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ThrowStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "err",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 564,
                              "end": 567
                            },
                            "start": 558,
                            "end": 568
                          }
                        ],
                        "start": 544,
                        "end": 578
                      },
                      "start": 382,
                      "end": 578
                    },
                    "start": 213,
                    "end": 578
                  }
                ],
                "start": 151,
                "end": 584
              },
              "start": 139,
              "end": 584
            },
            "finalizer": null,
            "start": 100,
            "end": 584
          }
        ],
        "start": 94,
        "end": 586
      },
      "expression": false,
      "start": 74,
      "end": 586
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 586
}
```
