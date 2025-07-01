__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 17,
                "end": 35
              },
              "start": 15,
              "end": 35
            },
            "start": 14,
            "end": 35
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 35
        }
      ],
      "declare": true,
      "start": 0,
      "end": 36
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 54,
                "end": 72
              },
              "start": 52,
              "end": 72
            },
            "start": 51,
            "end": 72
          },
          "init": null,
          "definite": false,
          "start": 51,
          "end": 72
        }
      ],
      "declare": true,
      "start": 37,
      "end": 73
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 91,
                "end": 109
              },
              "start": 89,
              "end": 109
            },
            "start": 88,
            "end": 109
          },
          "init": null,
          "definite": false,
          "start": 88,
          "end": 109
        }
      ],
      "declare": true,
      "start": 74,
      "end": 110
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo1",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 122
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 126
            },
            "consequent": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 129,
              "end": 130
            },
            "alternate": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 133,
              "end": 134
            },
            "start": 125,
            "end": 134
          },
          "definite": false,
          "start": 118,
          "end": 134
        }
      ],
      "declare": false,
      "start": 112,
      "end": 135
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo2",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 146
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 149,
                "end": 150
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 154,
                "end": 159
              },
              "start": 149,
              "end": 159
            },
            "consequent": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 162,
              "end": 163
            },
            "alternate": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 166,
              "end": 167
            },
            "start": 149,
            "end": 167
          },
          "definite": false,
          "start": 142,
          "end": 167
        }
      ],
      "declare": false,
      "start": 136,
      "end": 168
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo3",
            "optional": false,
            "typeAnnotation": null,
            "start": 175,
            "end": 179
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 182,
                "end": 183
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 187,
                "end": 192
              },
              "start": 182,
              "end": 192
            },
            "consequent": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 196,
                "end": 197
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": "bar",
                "raw": "'bar'",
                "start": 201,
                "end": 206
              },
              "start": 196,
              "end": 206
            },
            "alternate": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 211,
                "end": 212
              },
              "operator": "??",
              "right": {
                "type": "Literal",
                "value": "baz",
                "raw": "'baz'",
                "start": 216,
                "end": 221
              },
              "start": 211,
              "end": 221
            },
            "start": 182,
            "end": 222
          },
          "definite": false,
          "start": 175,
          "end": 222
        }
      ],
      "declare": false,
      "start": 169,
      "end": 223
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 234,
        "end": 235
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
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 251,
                  "end": 255
                },
                "init": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 258,
                      "end": 259
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 263,
                      "end": 268
                    },
                    "start": 258,
                    "end": 268
                  },
                  "consequent": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 272
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 276,
                      "end": 281
                    },
                    "start": 271,
                    "end": 281
                  },
                  "alternate": {
                    "type": "LogicalExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 284,
                      "end": 285
                    },
                    "operator": "??",
                    "right": {
                      "type": "Literal",
                      "value": "baz",
                      "raw": "'baz'",
                      "start": 289,
                      "end": 294
                    },
                    "start": 284,
                    "end": 294
                  },
                  "start": 258,
                  "end": 294
                },
                "definite": false,
                "start": 251,
                "end": 294
              }
            ],
            "declare": false,
            "start": 245,
            "end": 295
          }
        ],
        "start": 239,
        "end": 297
      },
      "expression": false,
      "start": 225,
      "end": 297
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 297
}
```
