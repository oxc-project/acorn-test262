__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": true,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSBooleanKeyword",
              "start": 16,
              "end": 23
            },
            "start": 14,
            "end": 23
          },
          "start": 12,
          "end": 23
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 26,
          "end": 30
        },
        "start": 24,
        "end": 30
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 38
              },
              "right": {
                "type": "Literal",
                "value": true,
                "raw": "true",
                "start": 43,
                "end": 47
              },
              "start": 37,
              "end": 47
            },
            "directive": null,
            "start": 37,
            "end": 48
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 58,
                "end": 59
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": false,
                "raw": "false",
                "start": 64,
                "end": 69
              },
              "start": 58,
              "end": 69
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 81,
                        "end": 88
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 89,
                        "end": 92
                      },
                      "optional": false,
                      "computed": false,
                      "start": 81,
                      "end": 92
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 93,
                        "end": 94
                      }
                    ],
                    "optional": false,
                    "start": 81,
                    "end": 95
                  },
                  "directive": null,
                  "start": 81,
                  "end": 96
                }
              ],
              "start": 71,
              "end": 102
            },
            "alternate": null,
            "start": 54,
            "end": 102
          }
        ],
        "start": 31,
        "end": 104
      },
      "expression": false,
      "start": 0,
      "end": 104
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f1",
          "optional": false,
          "typeAnnotation": null,
          "start": 105,
          "end": 107
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": false,
            "raw": "false",
            "start": 108,
            "end": 113
          }
        ],
        "optional": false,
        "start": 105,
        "end": 114
      },
      "directive": null,
      "start": 105,
      "end": 115
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 126,
        "end": 128
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
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "start": 144,
                            "end": 145
                          },
                          "start": 144,
                          "end": 145
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 148,
                            "end": 149
                          },
                          "start": 148,
                          "end": 149
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 152,
                            "end": 153
                          },
                          "start": 152,
                          "end": 153
                        },
                        {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 156,
                            "end": 157
                          },
                          "start": 156,
                          "end": 157
                        }
                      ],
                      "start": 144,
                      "end": 157
                    },
                    "start": 142,
                    "end": 157
                  },
                  "start": 141,
                  "end": 157
                },
                "init": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 160,
                    "end": 161
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 165,
                    "end": 168
                  },
                  "start": 160,
                  "end": 168
                },
                "definite": false,
                "start": 141,
                "end": 168
              }
            ],
            "declare": false,
            "start": 137,
            "end": 169
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "??=",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 174,
                "end": 175
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 180,
                "end": 181
              },
              "start": 174,
              "end": 181
            },
            "directive": null,
            "start": 174,
            "end": 182
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 191,
                "end": 192
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 197,
                "end": 198
              },
              "start": 191,
              "end": 198
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
                        "name": "console",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 210,
                        "end": 217
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "log",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 218,
                        "end": 221
                      },
                      "optional": false,
                      "computed": false,
                      "start": 210,
                      "end": 221
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 222,
                        "end": 223
                      }
                    ],
                    "optional": false,
                    "start": 210,
                    "end": 224
                  },
                  "directive": null,
                  "start": 210,
                  "end": 225
                }
              ],
              "start": 200,
              "end": 231
            },
            "alternate": null,
            "start": 187,
            "end": 231
          }
        ],
        "start": 131,
        "end": 233
      },
      "expression": false,
      "start": 117,
      "end": 233
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 233
}
```
