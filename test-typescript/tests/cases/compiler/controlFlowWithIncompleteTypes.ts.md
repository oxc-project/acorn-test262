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
          "id": {
            "type": "Identifier",
            "start": 34,
            "end": 47,
            "name": "cond",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 38,
              "end": 47,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 40,
                "end": 47
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "FunctionDeclaration",
      "start": 50,
      "end": 258,
      "id": {
        "type": "Identifier",
        "start": 59,
        "end": 63,
        "name": "foo1",
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
                "id": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 104,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 107,
                  "end": 108,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 114,
            "end": 256,
            "test": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 127,
              "end": 256,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 137,
                  "end": 250,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 141,
                    "end": 162,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 141,
                      "end": 149,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 148,
                        "end": 149,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 154,
                      "end": 162,
                      "value": "string",
                      "raw": "\"string\""
                    }
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
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 178,
                          "end": 191,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 178,
                            "end": 179,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 182,
                            "end": 191,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 182,
                              "end": 189,
                              "object": {
                                "type": "Identifier",
                                "start": 182,
                                "end": 183,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 184,
                                "end": 189,
                                "name": "slice",
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
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 216,
                    "end": 250,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 230,
                        "end": 240,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 230,
                          "end": 239,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 230,
                            "end": 231,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 234,
                            "end": 239,
                            "value": "abc",
                            "raw": "\"abc\""
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 260,
      "end": 468,
      "id": {
        "type": "Identifier",
        "start": 269,
        "end": 273,
        "name": "foo2",
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
                "id": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 314,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 317,
                  "end": 318,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "WhileStatement",
            "start": 324,
            "end": 466,
            "test": {
              "type": "Identifier",
              "start": 331,
              "end": 335,
              "name": "cond",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "body": {
              "type": "BlockStatement",
              "start": 337,
              "end": 466,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 347,
                  "end": 460,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 351,
                    "end": 372,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 351,
                      "end": 359,
                      "operator": "typeof",
                      "prefix": true,
                      "argument": {
                        "type": "Identifier",
                        "start": 358,
                        "end": 359,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 364,
                      "end": 372,
                      "value": "number",
                      "raw": "\"number\""
                    }
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
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 388,
                          "end": 397,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 388,
                            "end": 389,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Literal",
                            "start": 392,
                            "end": 397,
                            "value": "abc",
                            "raw": "\"abc\""
                          }
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 422,
                    "end": 460,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 436,
                        "end": 450,
                        "expression": {
                          "type": "AssignmentExpression",
                          "start": 436,
                          "end": 449,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 436,
                            "end": 437,
                            "name": "x",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "CallExpression",
                            "start": 440,
                            "end": 449,
                            "callee": {
                              "type": "MemberExpression",
                              "start": 440,
                              "end": 447,
                              "object": {
                                "type": "Identifier",
                                "start": 440,
                                "end": 441,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "start": 442,
                                "end": 447,
                                "name": "slice",
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
                          }
                        },
                        "directive": null
                      }
                    ]
                  }
                }
              ]
            }
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
