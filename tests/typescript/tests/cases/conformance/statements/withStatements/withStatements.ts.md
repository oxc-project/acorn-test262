__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 56,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 11,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 8,
            "end": 10,
            "value": 12,
            "raw": "12"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "WithStatement",
      "start": 12,
      "end": 56,
      "object": {
        "type": "Identifier",
        "start": 18,
        "end": 19,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "BlockStatement",
        "start": 21,
        "end": 56,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 27,
            "end": 42,
            "expression": {
              "type": "AssignmentExpression",
              "start": 27,
              "end": 42,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 27,
                "end": 31,
                "decorators": [],
                "name": "name",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 34,
                "end": 42,
                "value": "twelve",
                "raw": "'twelve'"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 47,
            "end": 54,
            "expression": {
              "type": "AssignmentExpression",
              "start": 47,
              "end": 54,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 47,
                "end": 49,
                "decorators": [],
                "name": "id",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 52,
                "end": 54,
                "value": 12,
                "raw": "12"
              }
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
