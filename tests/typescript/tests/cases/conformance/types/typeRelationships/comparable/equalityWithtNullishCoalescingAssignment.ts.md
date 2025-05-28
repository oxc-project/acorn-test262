__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 233,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
      "body": {
        "type": "BlockStatement",
        "start": 31,
        "end": 104,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 37,
            "end": 48,
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
                "value": true,
                "raw": "true"
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 54,
            "end": 102,
            "test": {
              "type": "BinaryExpression",
              "start": 58,
              "end": 69,
              "left": {
                "type": "Identifier",
                "start": 58,
                "end": 59,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 64,
                "end": 69,
                "value": false,
                "raw": "false"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 71,
              "end": 102,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 81,
                  "end": 96,
                  "expression": {
                    "type": "CallExpression",
                    "start": 81,
                    "end": 95,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 81,
                      "end": 92,
                      "object": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 88,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 92,
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
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 105,
      "end": 115,
      "expression": {
        "type": "CallExpression",
        "start": 105,
        "end": 114,
        "callee": {
          "type": "Identifier",
          "start": 105,
          "end": 107,
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "start": 108,
            "end": 113,
            "value": false,
            "raw": "false"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 117,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 128,
        "decorators": [],
        "name": "f2",
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
        "start": 131,
        "end": 233,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 137,
            "end": 169,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 141,
                "end": 168,
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
                            "value": 0,
                            "raw": "0"
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
                            "value": 1,
                            "raw": "1"
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
                            "value": 2,
                            "raw": "2"
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
                            "value": 3,
                            "raw": "3"
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
                    "value": 0,
                    "raw": "0"
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 165,
                    "end": 168
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 174,
            "end": 182,
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
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 187,
            "end": 231,
            "test": {
              "type": "BinaryExpression",
              "start": 191,
              "end": 198,
              "left": {
                "type": "Identifier",
                "start": 191,
                "end": 192,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "start": 197,
                "end": 198,
                "value": 0,
                "raw": "0"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 200,
              "end": 231,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 210,
                  "end": 225,
                  "expression": {
                    "type": "CallExpression",
                    "start": 210,
                    "end": 224,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 210,
                      "end": 221,
                      "object": {
                        "type": "Identifier",
                        "start": 210,
                        "end": 217,
                        "decorators": [],
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 221,
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
                        "type": "Identifier",
                        "start": 222,
                        "end": 223,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
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
