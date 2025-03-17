__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 234,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 104,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 104,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 37,
            "end": 48,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 37,
              "end": 47,
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 43,
                "end": 47,
                "raw": "true",
                "value": true
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 54,
            "end": 102,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 71,
              "end": 102,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 81,
                  "end": 96,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 81,
                    "end": 95,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 92,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 88,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 92,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 58,
              "end": 69,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 58,
                "end": 59,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 64,
                "end": 69,
                "raw": "false",
                "value": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 23,
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 23,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 16,
              "end": 23
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 24,
        "end": 30,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 26,
          "end": 30
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 115,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 114,
        "arguments": [
          {
            "type": "Literal",
            "start": 108,
            "end": 113,
            "raw": "false",
            "value": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 105,
          "end": 107,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 117,
      "end": 233,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 131,
        "end": 233,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 137,
            "end": 169,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 141,
                "end": 168,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 157,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 157,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 144,
                      "end": 157,
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "start": 144,
                          "end": 145,
                          "literal": {
                            "type": "Literal",
                            "start": 144,
                            "end": 145,
                            "raw": "0",
                            "value": 0
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 148,
                          "end": 149,
                          "literal": {
                            "type": "Literal",
                            "start": 148,
                            "end": 149,
                            "raw": "1",
                            "value": 1
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 152,
                          "end": 153,
                          "literal": {
                            "type": "Literal",
                            "start": 152,
                            "end": 153,
                            "raw": "2",
                            "value": 2
                          }
                        },
                        {
                          "type": "TSLiteralType",
                          "start": 156,
                          "end": 157,
                          "literal": {
                            "type": "Literal",
                            "start": 156,
                            "end": 157,
                            "raw": "3",
                            "value": 3
                          }
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "TSAsExpression",
                  "start": 160,
                  "end": 168,
                  "expression": {
                    "type": "Literal",
                    "start": 160,
                    "end": 161,
                    "raw": "0",
                    "value": 0
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 165,
                    "end": 168
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 174,
            "end": 182,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 174,
              "end": 181,
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "start": 174,
                "end": 175,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 180,
                "end": 181,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 187,
            "end": 231,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 200,
              "end": 231,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 210,
                  "end": 225,
                  "directive": null,
                  "expression": {
                    "type": "CallExpression",
                    "start": 210,
                    "end": 224,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 222,
                        "end": 223,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "callee": {
                      "type": "MemberExpression",
                      "start": 210,
                      "end": 221,
                      "computed": false,
                      "object": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 217,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 221,
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "optional": false,
                    "typeArguments": null
                  }
                }
              ]
            },
            "test": {
              "type": "BinaryExpression",
              "start": 191,
              "end": 198,
              "operator": "===",
              "left": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 197,
                "end": 198,
                "raw": "0",
                "value": 0
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 128,
        "decorators": [],
        "name": "f2",
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
