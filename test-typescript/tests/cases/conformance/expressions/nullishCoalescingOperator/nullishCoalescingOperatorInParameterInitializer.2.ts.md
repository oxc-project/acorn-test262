__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 196,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 56,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 101,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 88,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 70,
                "end": 88,
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
                ]
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
      "type": "ExpressionStatement",
      "start": 103,
      "end": 138,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 137,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 104,
          "end": 134,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 105,
              "end": 119,
              "left": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "LogicalExpression",
                "start": 109,
                "end": 119,
                "left": {
                  "type": "CallExpression",
                  "start": 109,
                  "end": 112,
                  "callee": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "start": 116,
                  "end": 119,
                  "value": "d",
                  "raw": "\"d\""
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 124,
            "end": 134,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 126,
                "end": 132,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 130,
                    "end": 131,
                    "id": {
                      "type": "Identifier",
                      "start": 130,
                      "end": 131,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 140,
      "end": 153,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 146,
          "end": 152,
          "id": {
            "type": "Identifier",
            "start": 146,
            "end": 147,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 150,
            "end": 152,
            "value": "",
            "raw": "\"\""
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 196,
      "expression": {
        "type": "CallExpression",
        "start": 154,
        "end": 195,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 155,
          "end": 192,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 156,
              "end": 170,
              "left": {
                "type": "Identifier",
                "start": 156,
                "end": 157,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "LogicalExpression",
                "start": 160,
                "end": 170,
                "left": {
                  "type": "CallExpression",
                  "start": 160,
                  "end": 163,
                  "callee": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "arguments": [],
                  "optional": false,
                  "typeArguments": null
                },
                "operator": "??",
                "right": {
                  "type": "Literal",
                  "start": 167,
                  "end": 170,
                  "value": "d",
                  "raw": "\"d\""
                }
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            },
            {
              "type": "AssignmentPattern",
              "start": 172,
              "end": 177,
              "left": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "name": "d",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 176,
                "end": 177,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "body": {
            "type": "BlockStatement",
            "start": 182,
            "end": 192,
            "body": [
              {
                "type": "VariableDeclaration",
                "start": 184,
                "end": 190,
                "declarations": [
                  {
                    "type": "VariableDeclarator",
                    "start": 188,
                    "end": 189,
                    "id": {
                      "type": "Identifier",
                      "start": 188,
                      "end": 189,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "init": null,
                    "definite": false
                  }
                ],
                "kind": "var",
                "declare": false
              }
            ]
          },
          "typeParameters": null,
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
