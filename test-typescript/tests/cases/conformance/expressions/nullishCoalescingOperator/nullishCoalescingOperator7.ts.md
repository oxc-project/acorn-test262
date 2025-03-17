__ESTREE_TEST__:PASS:
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
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 35,
            "name": "a",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 72,
            "name": "b",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 109,
            "name": "c",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
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
          "id": {
            "type": "Identifier",
            "start": 118,
            "end": 122,
            "name": "foo1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 125,
            "end": 134,
            "test": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "name": "foo2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 175,
            "end": 179,
            "name": "foo3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "kind": "const",
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
        "name": "f",
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
                "id": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 255,
                  "name": "foo4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
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
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "b",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "c",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
            "kind": "const",
            "declare": false
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
