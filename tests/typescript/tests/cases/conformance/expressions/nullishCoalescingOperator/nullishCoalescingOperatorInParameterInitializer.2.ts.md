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
            "typeAnnotation": null,
            "start": 62,
            "end": 63
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 70,
                    "end": 76
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 79,
                    "end": 88
                  }
                ],
                "start": 70,
                "end": 88
              },
              "start": 68,
              "end": 88
            },
            "body": {
              "type": "Identifier",
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 101
            },
            "id": null,
            "generator": false,
            "start": 66,
            "end": 101
          },
          "definite": false,
          "start": 62,
          "end": 101
        }
      ],
      "declare": false,
      "start": 56,
      "end": 102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 106
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 109,
                    "end": 110
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 109,
                  "end": 112
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": "d",
                  "raw": "\"d\"",
                  "start": 116,
                  "end": 119
                },
                "start": 109,
                "end": 119
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 119
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 130,
                      "end": 131
                    },
                    "init": null,
                    "definite": false,
                    "start": 130,
                    "end": 131
                  }
                ],
                "declare": false,
                "start": 126,
                "end": 132
              }
            ],
            "start": 124,
            "end": 134
          },
          "id": null,
          "generator": false,
          "start": 104,
          "end": 134
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 103,
        "end": 137
      },
      "directive": null,
      "start": 103,
      "end": 138
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
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 146,
            "end": 147
          },
          "init": {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 150,
            "end": 152
          },
          "definite": false,
          "start": 146,
          "end": 152
        }
      ],
      "declare": false,
      "start": 140,
      "end": 153
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "ArrowFunctionExpression",
          "expression": false,
          "async": false,
          "typeParameters": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null,
                "start": 156,
                "end": 157
              },
              "right": {
                "type": "LogicalExpression",
                "left": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 160,
                    "end": 161
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 160,
                  "end": 163
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "value": "d",
                  "raw": "\"d\"",
                  "start": 167,
                  "end": 170
                },
                "start": 160,
                "end": 170
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 170
            },
            {
              "type": "AssignmentPattern",
              "decorators": [],
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 172,
                "end": 173
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 176,
                "end": 177
              },
              "optional": false,
              "typeAnnotation": null,
              "start": 172,
              "end": 177
            }
          ],
          "returnType": null,
          "body": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "VariableDeclaration",
                "kind": "var",
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 188,
                      "end": 189
                    },
                    "init": null,
                    "definite": false,
                    "start": 188,
                    "end": 189
                  }
                ],
                "declare": false,
                "start": 184,
                "end": 190
              }
            ],
            "start": 182,
            "end": 192
          },
          "id": null,
          "generator": false,
          "start": 155,
          "end": 192
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 154,
        "end": 195
      },
      "directive": null,
      "start": 154,
      "end": 196
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 196
}
```
