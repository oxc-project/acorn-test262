__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 522,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 522,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
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
          "start": 11,
          "end": 39,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 12,
            "end": 39,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 14,
              "end": 39,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 14,
                  "end": 20
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 23,
                  "end": 29
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 32,
                  "end": 39
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 41,
        "end": 522,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 47,
            "end": 88,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 51,
                "end": 87,
                "id": {
                  "type": "Identifier",
                  "start": 51,
                  "end": 79,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 52,
                    "end": 79,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 54,
                      "end": 79,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 54,
                          "end": 60
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 63,
                          "end": 69
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 72,
                          "end": 79
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 82,
                  "end": 87,
                  "value": false,
                  "raw": "false"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 93,
            "end": 134,
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 97,
                "end": 133,
                "id": {
                  "type": "Identifier",
                  "start": 97,
                  "end": 125,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 98,
                    "end": 125,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 100,
                      "end": 125,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 100,
                          "end": 106
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 109,
                          "end": 115
                        },
                        {
                          "type": "TSBooleanKeyword",
                          "start": 118,
                          "end": 125
                        }
                      ]
                    }
                  }
                },
                "init": {
                  "type": "Literal",
                  "start": 128,
                  "end": 133,
                  "value": false,
                  "raw": "false"
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 139,
            "end": 440,
            "test": {
              "type": "SequenceExpression",
              "start": 143,
              "end": 172,
              "expressions": [
                {
                  "type": "AssignmentExpression",
                  "start": 143,
                  "end": 149,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 143,
                    "end": 144,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Literal",
                    "start": 147,
                    "end": 149,
                    "value": "",
                    "raw": "\"\""
                  }
                },
                {
                  "type": "BinaryExpression",
                  "start": 151,
                  "end": 172,
                  "left": {
                    "type": "UnaryExpression",
                    "start": 151,
                    "end": 159,
                    "operator": "typeof",
                    "argument": {
                      "type": "Identifier",
                      "start": 158,
                      "end": 159,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "prefix": true
                  },
                  "operator": "===",
                  "right": {
                    "type": "Literal",
                    "start": 164,
                    "end": 172,
                    "value": "string",
                    "raw": "\"string\""
                  }
                }
              ]
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 174,
              "end": 245,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 184,
                  "end": 186,
                  "expression": {
                    "type": "Identifier",
                    "start": 184,
                    "end": 185,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 205,
                  "end": 207,
                  "expression": {
                    "type": "Identifier",
                    "start": 205,
                    "end": 206,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 226,
                  "end": 228,
                  "expression": {
                    "type": "Identifier",
                    "start": 226,
                    "end": 227,
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 255,
              "end": 440,
              "test": {
                "type": "SequenceExpression",
                "start": 259,
                "end": 287,
                "expressions": [
                  {
                    "type": "AssignmentExpression",
                    "start": 259,
                    "end": 264,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 260,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Literal",
                      "start": 263,
                      "end": 264,
                      "value": 1,
                      "raw": "1"
                    }
                  },
                  {
                    "type": "BinaryExpression",
                    "start": 266,
                    "end": 287,
                    "left": {
                      "type": "UnaryExpression",
                      "start": 266,
                      "end": 274,
                      "operator": "typeof",
                      "argument": {
                        "type": "Identifier",
                        "start": 273,
                        "end": 274,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "prefix": true
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 279,
                      "end": 287,
                      "value": "number",
                      "raw": "\"number\""
                    }
                  }
                ]
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 289,
                "end": 359,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 299,
                    "end": 301,
                    "expression": {
                      "type": "Identifier",
                      "start": 299,
                      "end": 300,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 320,
                    "end": 322,
                    "expression": {
                      "type": "Identifier",
                      "start": 320,
                      "end": 321,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 341,
                    "end": 343,
                    "expression": {
                      "type": "Identifier",
                      "start": 341,
                      "end": 342,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 369,
                "end": 440,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 379,
                    "end": 381,
                    "expression": {
                      "type": "Identifier",
                      "start": 379,
                      "end": 380,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 401,
                    "end": 403,
                    "expression": {
                      "type": "Identifier",
                      "start": 401,
                      "end": 402,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 422,
                    "end": 424,
                    "expression": {
                      "type": "Identifier",
                      "start": 422,
                      "end": 423,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "directive": null
                  }
                ]
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 445,
            "end": 447,
            "expression": {
              "type": "Identifier",
              "start": 445,
              "end": 446,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 481,
            "end": 483,
            "expression": {
              "type": "Identifier",
              "start": 481,
              "end": 482,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 498,
            "end": 500,
            "expression": {
              "type": "Identifier",
              "start": 498,
              "end": 499,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
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
