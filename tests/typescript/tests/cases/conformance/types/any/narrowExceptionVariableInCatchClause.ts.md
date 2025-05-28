__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 586,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "decorators": [],
        "name": "isFooError",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 34,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 34,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 35,
        "end": 71,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 37,
          "end": 71,
          "parameterName": {
            "type": "Identifier",
            "start": 37,
            "end": 38,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 42,
            "end": 71,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 42,
              "end": 71,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 44,
                  "end": 56,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 44,
                    "end": 48,
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 48,
                    "end": 55,
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "start": 50,
                      "end": 55,
                      "literal": {
                        "type": "Literal",
                        "start": 50,
                        "end": 55,
                        "value": "foo",
                        "raw": "'foo'"
                      }
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSMethodSignature",
                  "start": 57,
                  "end": 69,
                  "key": {
                    "type": "Identifier",
                    "start": 57,
                    "end": 66,
                    "decorators": [],
                    "name": "dontPanic",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "optional": false,
                  "kind": "method",
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "accessibility": null,
                  "readonly": false,
                  "static": false
                }
              ]
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 586,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 91,
        "decorators": [],
        "name": "tryCatch",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 94,
        "end": 586,
        "body": [
          {
            "type": "TryStatement",
            "start": 100,
            "end": 584,
            "block": {
              "type": "BlockStatement",
              "start": 104,
              "end": 134,
              "body": []
            },
            "handler": {
              "type": "CatchClause",
              "start": 139,
              "end": 584,
              "param": {
                "type": "Identifier",
                "start": 146,
                "end": 149,
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null
              },
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 584,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 213,
                    "end": 578,
                    "test": {
                      "type": "CallExpression",
                      "start": 217,
                      "end": 232,
                      "callee": {
                        "type": "Identifier",
                        "start": 217,
                        "end": 227,
                        "decorators": [],
                        "name": "isFooError",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 228,
                          "end": 231,
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 234,
                      "end": 367,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 248,
                          "end": 264,
                          "expression": {
                            "type": "CallExpression",
                            "start": 248,
                            "end": 263,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 248,
                              "end": 261,
                              "object": {
                                "type": "Identifier",
                                "start": 248,
                                "end": 251,
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 252,
                                "end": 261,
                                "decorators": [],
                                "name": "dontPanic",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "directive": null
                        },
                        {
                          "type": "ExpressionStatement",
                          "start": 283,
                          "end": 297,
                          "expression": {
                            "type": "CallExpression",
                            "start": 283,
                            "end": 296,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 283,
                              "end": 294,
                              "object": {
                                "type": "Identifier",
                                "start": 283,
                                "end": 286,
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 287,
                                "end": 294,
                                "decorators": [],
                                "name": "doPanic",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "alternate": {
                      "type": "IfStatement",
                      "start": 382,
                      "end": 578,
                      "test": {
                        "type": "BinaryExpression",
                        "start": 386,
                        "end": 406,
                        "left": {
                          "type": "Identifier",
                          "start": 386,
                          "end": 389,
                          "decorators": [],
                          "name": "err",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "start": 401,
                          "end": 406,
                          "decorators": [],
                          "name": "Error",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "consequent": {
                        "type": "BlockStatement",
                        "start": 408,
                        "end": 529,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 422,
                            "end": 434,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 422,
                              "end": 433,
                              "object": {
                                "type": "Identifier",
                                "start": 422,
                                "end": 425,
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 426,
                                "end": 433,
                                "decorators": [],
                                "name": "message",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 447,
                            "end": 459,
                            "expression": {
                              "type": "MemberExpression",
                              "start": 447,
                              "end": 458,
                              "object": {
                                "type": "Identifier",
                                "start": 447,
                                "end": 450,
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 451,
                                "end": 458,
                                "decorators": [],
                                "name": "massage",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "directive": null
                          }
                        ]
                      },
                      "alternate": {
                        "type": "BlockStatement",
                        "start": 544,
                        "end": 578,
                        "body": [
                          {
                            "type": "ThrowStatement",
                            "start": 558,
                            "end": 568,
                            "argument": {
                              "type": "Identifier",
                              "start": 564,
                              "end": 567,
                              "decorators": [],
                              "name": "err",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      }
                    }
                  }
                ]
              }
            },
            "finalizer": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
