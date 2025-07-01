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
            "body": [],
            "start": 124,
            "end": 126
          },
          "id": null,
          "generator": false,
          "start": 104,
          "end": 126
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 103,
        "end": 129
      },
      "directive": null,
      "start": 103,
      "end": 130
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 130
}
```
