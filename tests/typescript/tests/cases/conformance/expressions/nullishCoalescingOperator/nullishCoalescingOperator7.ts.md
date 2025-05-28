__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 297,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 36,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 35,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 37,
      "end": 73,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 72,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 74,
      "end": 110,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 109,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 112,
      "end": 135,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 118,
          "end": 134,
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 122,
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 125,
            "end": 134,
            "test": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "Literal",
              "start": 129,
              "end": 130,
              "value": 1,
              "raw": "1"
            },
            "alternate": {
              "type": "Literal",
              "start": 133,
              "end": 134,
              "value": 2,
              "raw": "2"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 136,
      "end": 168,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 167,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 149,
            "end": 167,
            "test": {
              "type": "LogicalExpression",
              "start": 149,
              "end": 159,
              "left": {
                "type": "Identifier",
                "start": 149,
                "end": 150,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "start": 154,
                "end": 159,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 162,
              "end": 163,
              "value": 1,
              "raw": "1"
            },
            "alternate": {
              "type": "Literal",
              "start": 166,
              "end": 167,
              "value": 2,
              "raw": "2"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 169,
      "end": 223,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 175,
          "end": 222,
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 179,
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 182,
            "end": 222,
            "test": {
              "type": "LogicalExpression",
              "start": 182,
              "end": 192,
              "left": {
                "type": "Identifier",
                "start": 182,
                "end": 183,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "start": 187,
                "end": 192,
                "value": "foo",
                "raw": "'foo'"
              }
            },
            "consequent": {
              "type": "LogicalExpression",
              "start": 196,
              "end": 206,
              "left": {
                "type": "Identifier",
                "start": 196,
                "end": 197,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "start": 201,
                "end": 206,
                "value": "bar",
                "raw": "'bar'"
              }
            },
            "alternate": {
              "type": "LogicalExpression",
              "start": 211,
              "end": 221,
              "left": {
                "type": "Identifier",
                "start": 211,
                "end": 212,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "start": 216,
                "end": 221,
                "value": "baz",
                "raw": "'baz'"
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 225,
      "end": 297,
      "id": {
        "type": "Identifier",
        "start": 234,
        "end": 235,
        "decorators": [],
        "name": "f",
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
        "start": 239,
        "end": 297,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 245,
            "end": 295,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 251,
                "end": 294,
                "id": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 255,
                  "decorators": [],
                  "name": "foo4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ConditionalExpression",
                  "start": 258,
                  "end": 294,
                  "test": {
                    "type": "LogicalExpression",
                    "start": 258,
                    "end": 268,
                    "left": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "start": 263,
                      "end": 268,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  },
                  "consequent": {
                    "type": "LogicalExpression",
                    "start": 271,
                    "end": 281,
                    "left": {
                      "type": "Identifier",
                      "start": 271,
                      "end": 272,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "start": 276,
                      "end": 281,
                      "value": "bar",
                      "raw": "'bar'"
                    }
                  },
                  "alternate": {
                    "type": "LogicalExpression",
                    "start": 284,
                    "end": 294,
                    "left": {
                      "type": "Identifier",
                      "start": 284,
                      "end": 285,
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "start": 289,
                      "end": 294,
                      "value": "baz",
                      "raw": "'baz'"
                    }
                  }
                },
                "definite": false
              }
            ],
            "declare": false
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
