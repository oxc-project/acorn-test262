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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
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
          "start": 12,
          "end": 23,
          "name": "a",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 14,
            "end": 23,
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 16,
              "end": 23
            }
          },
          "decorators": [],
          "optional": true
        }
      ],
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 89,
                        "end": 92,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 93,
                        "end": 94,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 24,
        "end": 30,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 26,
          "end": 30
        }
      }
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
          "name": "f1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 108,
            "end": 113,
            "value": false,
            "raw": "false"
          }
        ],
        "optional": false,
        "typeArguments": null
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
        "name": "f2",
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
                "id": {
                  "type": "Identifier",
                  "start": 141,
                  "end": 157,
                  "name": "x",
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
                  },
                  "decorators": [],
                  "optional": false
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
            "kind": "let",
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "console",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 218,
                        "end": 221,
                        "name": "log",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 222,
                        "end": 223,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
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
