__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 505,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 254,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 74,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 254,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 252,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 92,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 252,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 93,
                  "end": 113,
                  "decorators": [],
                  "name": "shouldThrow",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 104,
                    "end": 113,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 106,
                      "end": 113
                    }
                  }
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 252,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 125,
                    "end": 246,
                    "test": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 140,
                      "decorators": [],
                      "name": "shouldThrow",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 142,
                      "end": 198,
                      "body": [
                        {
                          "type": "ThrowStatement",
                          "start": 156,
                          "end": 188,
                          "argument": {
                            "type": "NewExpression",
                            "start": 162,
                            "end": 187,
                            "callee": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 171,
                              "decorators": [],
                              "name": "Error",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 172,
                                "end": 186,
                                "value": "Please retry",
                                "raw": "'Please retry'"
                              }
                            ]
                          }
                        }
                      ]
                    },
                    "alternate": {
                      "type": "BlockStatement",
                      "start": 204,
                      "end": 246,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 218,
                          "end": 236,
                          "expression": {
                            "type": "CallExpression",
                            "start": 218,
                            "end": 235,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 218,
                              "end": 229,
                              "object": {
                                "type": "Identifier",
                                "start": 218,
                                "end": 225,
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 226,
                                "end": 229,
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "computed": false
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 230,
                                "end": 234,
                                "value": "OK",
                                "raw": "'OK'"
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    }
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": true,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 256,
      "end": 493,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 265,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 274,
        "end": 277,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 278,
        "end": 493,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 284,
            "end": 491,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 295,
              "decorators": [],
              "name": "constructor",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 295,
              "end": 491,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 298,
                "end": 491,
                "body": [
                  {
                    "type": "TryStatement",
                    "start": 308,
                    "end": 485,
                    "block": {
                      "type": "BlockStatement",
                      "start": 312,
                      "end": 348,
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "start": 326,
                          "end": 338,
                          "expression": {
                            "type": "CallExpression",
                            "start": 326,
                            "end": 337,
                            "callee": {
                              "type": "Super",
                              "start": 326,
                              "end": 331
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 332,
                                "end": 336,
                                "value": true,
                                "raw": "true"
                              }
                            ],
                            "optional": false
                          },
                          "directive": null
                        }
                      ]
                    },
                    "handler": {
                      "type": "CatchClause",
                      "start": 349,
                      "end": 485,
                      "param": {
                        "type": "Identifier",
                        "start": 356,
                        "end": 366,
                        "decorators": [],
                        "name": "e",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 357,
                          "end": 366,
                          "typeAnnotation": {
                            "type": "TSUnknownKeyword",
                            "start": 359,
                            "end": 366
                          }
                        }
                      },
                      "body": {
                        "type": "BlockStatement",
                        "start": 368,
                        "end": 485,
                        "body": [
                          {
                            "type": "ExpressionStatement",
                            "start": 382,
                            "end": 428,
                            "expression": {
                              "type": "CallExpression",
                              "start": 382,
                              "end": 427,
                              "callee": {
                                "type": "MemberExpression",
                                "start": 382,
                                "end": 393,
                                "object": {
                                  "type": "Identifier",
                                  "start": 382,
                                  "end": 389,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "property": {
                                  "type": "Identifier",
                                  "start": 390,
                                  "end": 393,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false,
                                  "typeAnnotation": null
                                },
                                "optional": false,
                                "computed": false
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "start": 394,
                                  "end": 426,
                                  "left": {
                                    "type": "Literal",
                                    "start": 394,
                                    "end": 403,
                                    "value": "Error: ",
                                    "raw": "'Error: '"
                                  },
                                  "operator": "+",
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 406,
                                    "end": 426,
                                    "object": {
                                      "type": "TSAsExpression",
                                      "start": 407,
                                      "end": 417,
                                      "expression": {
                                        "type": "Identifier",
                                        "start": 407,
                                        "end": 408,
                                        "decorators": [],
                                        "name": "e",
                                        "optional": false,
                                        "typeAnnotation": null
                                      },
                                      "typeAnnotation": {
                                        "type": "TSTypeReference",
                                        "start": 412,
                                        "end": 417,
                                        "typeName": {
                                          "type": "Identifier",
                                          "start": 412,
                                          "end": 417,
                                          "decorators": [],
                                          "name": "Error",
                                          "optional": false,
                                          "typeAnnotation": null
                                        },
                                        "typeArguments": null
                                      }
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "start": 419,
                                      "end": 426,
                                      "decorators": [],
                                      "name": "message",
                                      "optional": false,
                                      "typeAnnotation": null
                                    },
                                    "optional": false,
                                    "computed": false
                                  }
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 462,
                            "end": 475,
                            "expression": {
                              "type": "CallExpression",
                              "start": 462,
                              "end": 474,
                              "callee": {
                                "type": "Super",
                                "start": 462,
                                "end": 467
                              },
                              "typeArguments": null,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 468,
                                  "end": 473,
                                  "value": false,
                                  "raw": "false"
                                }
                              ],
                              "optional": false
                            },
                            "directive": null
                          }
                        ]
                      }
                    },
                    "finalizer": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "constructor",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 505,
      "expression": {
        "type": "NewExpression",
        "start": 495,
        "end": 504,
        "callee": {
          "type": "Identifier",
          "start": 499,
          "end": 502,
          "decorators": [],
          "name": "Bar",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": []
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
