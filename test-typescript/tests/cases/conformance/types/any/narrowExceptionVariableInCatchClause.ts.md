__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 587,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 27,
        "name": "isFooError",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 28,
          "end": 34,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 29,
            "end": 34,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 31,
              "end": 34
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
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
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                    "name": "type",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "dontPanic",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 74,
      "end": 586,
      "id": {
        "type": "Identifier",
        "start": 83,
        "end": 91,
        "name": "tryCatch",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
                "name": "err",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "isFooError",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 228,
                          "end": 231,
                          "name": "err",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeArguments": null
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
                                "name": "err",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 252,
                                "end": 261,
                                "name": "dontPanic",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
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
                                "name": "err",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 287,
                                "end": 294,
                                "name": "doPanic",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
                            },
                            "arguments": [],
                            "optional": false,
                            "typeArguments": null
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
                          "name": "err",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "operator": "instanceof",
                        "right": {
                          "type": "Identifier",
                          "start": 401,
                          "end": 406,
                          "name": "Error",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
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
                                "name": "err",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 426,
                                "end": 433,
                                "name": "message",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                                "name": "err",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 451,
                                "end": 458,
                                "name": "massage",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "computed": false,
                              "optional": false
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
                              "name": "err",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
