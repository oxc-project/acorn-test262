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
      "end": 130,
      "expression": {
        "type": "CallExpression",
        "start": 103,
        "end": 129,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 104,
          "end": 126,
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
            "end": 126,
            "body": []
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
