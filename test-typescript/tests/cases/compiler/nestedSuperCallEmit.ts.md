nestedSuperCallEmit.ts
```json
{
  "type": "Program",
  "start": 56,
  "end": 506,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 254,
      "abstract": true,
      "body": {
        "type": "ClassBody",
        "start": 75,
        "end": 254,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 81,
            "end": 252,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 81,
              "end": 92,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 92,
              "end": 252,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 115,
                "end": 252,
                "body": [
                  {
                    "type": "IfStatement",
                    "start": 125,
                    "end": 246,
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
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 230,
                                "end": 234,
                                "raw": "'OK'",
                                "value": "OK"
                              }
                            ],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 218,
                              "end": 229,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 218,
                                "end": 225,
                                "decorators": [],
                                "name": "console",
                                "optional": false
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 226,
                                "end": 229,
                                "decorators": [],
                                "name": "log",
                                "optional": false
                              }
                            },
                            "optional": false
                          }
                        }
                      ]
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
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 172,
                                "end": 186,
                                "raw": "'Please retry'",
                                "value": "Please retry"
                              }
                            ],
                            "callee": {
                              "type": "Identifier",
                              "start": 166,
                              "end": 171,
                              "decorators": [],
                              "name": "Error",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "test": {
                      "type": "Identifier",
                      "start": 129,
                      "end": 140,
                      "decorators": [],
                      "name": "shouldThrow",
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
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
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 74,
        "decorators": [],
        "name": "Foo",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 256,
      "end": 493,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 278,
        "end": 493,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 284,
            "end": 491,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 284,
              "end": 295,
              "decorators": [],
              "name": "constructor",
              "optional": false
            },
            "kind": "constructor",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 295,
              "end": 491,
              "async": false,
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
                            "arguments": [
                              {
                                "type": "Literal",
                                "start": 332,
                                "end": 336,
                                "raw": "true",
                                "value": true
                              }
                            ],
                            "callee": {
                              "type": "Super",
                              "start": 326,
                              "end": 331
                            },
                            "optional": false
                          }
                        }
                      ]
                    },
                    "finalizer": null,
                    "handler": {
                      "type": "CatchClause",
                      "start": 349,
                      "end": 485,
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
                              "arguments": [
                                {
                                  "type": "BinaryExpression",
                                  "start": 394,
                                  "end": 426,
                                  "operator": "+",
                                  "left": {
                                    "type": "Literal",
                                    "start": 394,
                                    "end": 403,
                                    "raw": "'Error: '",
                                    "value": "Error: "
                                  },
                                  "right": {
                                    "type": "MemberExpression",
                                    "start": 406,
                                    "end": 426,
                                    "computed": false,
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
                                        "optional": false
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
                                          "optional": false
                                        }
                                      }
                                    },
                                    "optional": false,
                                    "property": {
                                      "type": "Identifier",
                                      "start": 419,
                                      "end": 426,
                                      "decorators": [],
                                      "name": "message",
                                      "optional": false
                                    }
                                  }
                                }
                              ],
                              "callee": {
                                "type": "MemberExpression",
                                "start": 382,
                                "end": 393,
                                "computed": false,
                                "object": {
                                  "type": "Identifier",
                                  "start": 382,
                                  "end": 389,
                                  "decorators": [],
                                  "name": "console",
                                  "optional": false
                                },
                                "optional": false,
                                "property": {
                                  "type": "Identifier",
                                  "start": 390,
                                  "end": 393,
                                  "decorators": [],
                                  "name": "log",
                                  "optional": false
                                }
                              },
                              "optional": false
                            }
                          },
                          {
                            "type": "ExpressionStatement",
                            "start": 462,
                            "end": 475,
                            "expression": {
                              "type": "CallExpression",
                              "start": 462,
                              "end": 474,
                              "arguments": [
                                {
                                  "type": "Literal",
                                  "start": 468,
                                  "end": 473,
                                  "raw": "false",
                                  "value": false
                                }
                              ],
                              "callee": {
                                "type": "Super",
                                "start": 462,
                                "end": 467
                              },
                              "optional": false
                            }
                          }
                        ]
                      },
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
                      }
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 262,
        "end": 265,
        "decorators": [],
        "name": "Bar",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 274,
        "end": 277,
        "decorators": [],
        "name": "Foo",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 505,
      "expression": {
        "type": "NewExpression",
        "start": 495,
        "end": 504,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 499,
          "end": 502,
          "decorators": [],
          "name": "Bar",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
