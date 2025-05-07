__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 468,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 34,
          "end": 47,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 47,
            "decorators": [],
            "name": "cond",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 47,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 40,
                "end": 47
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 258,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 258,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 72,
            "end": 109,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 76,
                "end": 108,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 104,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 77,
                    "end": 104,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 79,
                      "end": 104,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 79,
                          "end": 85
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 88,
                          "end": 94
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 97,
                          "end": 104
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 107,
                  "end": 108,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 114,
            "end": 256,
            "body": {
              "type": "BlockStatement",
              "start": 127,
              "end": 256,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 137,
                  "end": 250,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 216,
                    "end": 250,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 230,
                        "end": 240,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 230,
                          "end": 239,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 231,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 234,
                            "end": 239,
                            "raw": "\"abc\"",
                            "value": "abc",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 164,
                    "end": 202,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 178,
                        "end": 192,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 178,
                          "end": 191,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 178,
                            "end": 179,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 182,
                            "end": 191,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 182,
                              "end": 189,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 182,
                                "end": 183,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 184,
                                "end": 189,
                                "decorators": [],
                                "name": "slice",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 141,
                    "end": 162,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 141,
                      "end": 149,
                      "argument": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 154,
                      "end": 162,
                      "raw": "\"string\"",
                      "value": "string",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 63,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 260,
      "end": 468,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 276,
        "end": 468,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 282,
            "end": 319,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 286,
                "end": 318,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 314,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 287,
                    "end": 314,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 289,
                      "end": 314,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 289,
                          "end": 295
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 298,
                          "end": 304
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 307,
                          "end": 314
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 317,
                  "end": 318,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "WhileStatement",
            "start": 324,
            "end": 466,
            "body": {
              "type": "BlockStatement",
              "start": 337,
              "end": 466,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 347,
                  "end": 460,
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 422,
                    "end": 460,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 436,
                        "end": 450,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 436,
                          "end": 449,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 440,
                            "end": 449,
                            "arguments": [],
                            "callee": {
                              "type": "MemberExpression",
                              "start": 440,
                              "end": 447,
                              "computed": false,
                              "object": {
                                "type": "Identifier",
                                "start": 440,
                                "end": 441,
                                "decorators": [],
                                "name": "x",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "optional": false,
                              "property": {
                                "type": "Identifier",
                                "start": 442,
                                "end": 447,
                                "decorators": [],
                                "name": "slice",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            },
                            "optional": false,
                            "typeArguments": null
                          }
                        }
                      }
                    ]
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 374,
                    "end": 408,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 388,
                        "end": 398,
                        "directive": null,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 388,
                          "end": 397,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 389,
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 392,
                            "end": 397,
                            "raw": "\"abc\"",
                            "value": "abc",
                            "regex": null,
                            "bigint": null
                          }
                        }
                      }
                    ]
                  },
                  "test": {
                    "type": "BinaryExpression",
                    "start": 351,
                    "end": 372,
                    "operator": "===",
                    "left": {
                      "type": "UnaryExpression",
                      "start": 351,
                      "end": 359,
                      "argument": {
                        "type": "Identifier",
                        "start": 358,
                        "end": 359,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "typeof",
                      "prefix": true
                    },
                    "right": {
                      "type": "Literal",
                      "start": 364,
                      "end": 372,
                      "raw": "\"number\"",
                      "value": "number",
                      "regex": null,
                      "bigint": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "Identifier",
              "start": 331,
              "end": 335,
              "decorators": [],
              "name": "cond",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 273,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
