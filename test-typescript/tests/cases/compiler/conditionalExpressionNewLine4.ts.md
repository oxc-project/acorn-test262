conditionalExpressionNewLine4.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 21,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 8,
            "end": 20,
            "alternate": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "c",
              "optional": false
            },
            "consequent": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "test": {
              "type": "Identifier",
              "start": 8,
              "end": 9,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
