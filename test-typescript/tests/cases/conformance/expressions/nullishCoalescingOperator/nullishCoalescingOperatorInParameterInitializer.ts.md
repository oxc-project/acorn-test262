__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 130,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 66,
            "end": 101,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 92,
              "end": 101,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [],
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
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 103,
      "end": 130,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 129,
        "arguments": [],
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 104,
          "end": 126,
          "async": false,
          "body": {
            "type": "BlockStatement",
            "start": 124,
            "end": 126,
            "body": []
          },
          "expression": false,
          "generator": false,
          "id": null,
          "params": [
            {
              "type": "AssignmentPattern",
              "start": 105,
              "end": 119,
              "decorators": [],
              "left": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "right": {
                "type": "LogicalExpression",
                "start": 109,
                "end": 119,
                "operator": "??",
                "left": {
                  "type": "CallExpression",
                  "start": 109,
                  "end": 112,
                  "arguments": [],
                  "callee": {
                    "type": "Identifier",
                    "start": 109,
                    "end": 110,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 116,
                  "end": 119,
                  "raw": "\"d\"",
                  "value": "d"
                }
              }
            }
          ]
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
