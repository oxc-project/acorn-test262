nullishCoalescingOperator7.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 298,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 35,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 35,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 35,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 17,
                "end": 35,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 17,
                    "end": 23
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 26,
                    "end": 35
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 73,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 72,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 72,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 72,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 54,
                "end": 72,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 54,
                    "end": 60
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 63,
                    "end": 72
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 110,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 109,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 109,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 89,
              "end": 109,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 91,
                "end": 109,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 91,
                    "end": 97
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 100,
                    "end": 109
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 135,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 134,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 122,
            "decorators": [],
            "name": "foo1",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 125,
            "end": 134,
            "alternate": {
              "type": "Literal",
              "start": 133,
              "end": 134,
              "raw": "2",
              "value": 2
            },
            "consequent": {
              "type": "Literal",
              "start": 129,
              "end": 130,
              "raw": "1",
              "value": 1
            },
            "test": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 168,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "foo2",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 149,
            "end": 167,
            "alternate": {
              "type": "Literal",
              "start": 166,
              "end": 167,
              "raw": "2",
              "value": 2
            },
            "consequent": {
              "type": "Literal",
              "start": 162,
              "end": 163,
              "raw": "1",
              "value": 1
            },
            "test": {
              "type": "LogicalExpression",
              "start": 149,
              "end": 159,
              "operator": "??",
              "left": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 154,
                "end": 159,
                "raw": "'foo'",
                "value": "foo"
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 223,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 222,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 179,
            "decorators": [],
            "name": "foo3",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 182,
            "end": 222,
            "alternate": {
              "type": "LogicalExpression",
              "start": 211,
              "end": 221,
              "operator": "??",
              "left": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 216,
                "end": 221,
                "raw": "'baz'",
                "value": "baz"
              }
            },
            "consequent": {
              "type": "LogicalExpression",
              "start": 196,
              "end": 206,
              "operator": "??",
              "left": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 201,
                "end": 206,
                "raw": "'bar'",
                "value": "bar"
              }
            },
            "test": {
              "type": "LogicalExpression",
              "start": 182,
              "end": 192,
              "operator": "??",
              "left": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 187,
                "end": 192,
                "raw": "'foo'",
                "value": "foo"
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 225,
      "end": 297,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 239,
        "end": 297,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 245,
            "end": 295,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 251,
                "end": 294,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 255,
                  "decorators": [],
                  "name": "foo4",
                  "optional": false
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 258,
                  "end": 294,
                  "alternate": {
                    "type": "LogicalExpression",
                    "start": 284,
                    "end": 294,
                    "operator": "??",
                    "left": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 285,
                      "decorators": [],
                      "name": "c",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 289,
                      "end": 294,
                      "raw": "'baz'",
                      "value": "baz"
                    }
                  },
                  "consequent": {
                    "type": "LogicalExpression",
                    "start": 271,
                    "end": 281,
                    "operator": "??",
                    "left": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "decorators": [],
                      "name": "b",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 276,
                      "end": 281,
                      "raw": "'bar'",
                      "value": "bar"
                    }
                  },
                  "test": {
                    "type": "LogicalExpression",
                    "start": 258,
                    "end": 268,
                    "operator": "??",
                    "left": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 263,
                      "end": 268,
                      "raw": "'foo'",
                      "value": "foo"
                    }
                  }
                }
              }
            ],
            "declare": false,
            "kind": "const"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 235,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": []
    }
  ],
  "sourceType": "script"
}
```
