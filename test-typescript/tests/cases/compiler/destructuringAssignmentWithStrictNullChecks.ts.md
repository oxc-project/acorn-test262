__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 32,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 12,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 11,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 11,
            "name": "bar",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 7,
              "end": 11,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 9,
                "end": 11,
                "members": []
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 13,
      "end": 31,
      "expression": {
        "type": "AssignmentExpression",
        "start": 14,
        "end": 29,
        "operator": "=",
        "left": {
          "type": "ObjectPattern",
          "start": 14,
          "end": 24,
          "properties": [
            {
              "type": "RestElement",
              "start": 16,
              "end": 22,
              "argument": {
                "type": "Identifier",
                "start": 19,
                "end": 22,
                "name": "bar",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": null,
              "value": null
            }
          ],
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ObjectExpression",
          "start": 27,
          "end": 29,
          "properties": []
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
