__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 100,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 6,
            "end": 11,
            "decorators": [],
            "name": "array",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 14,
            "end": 99,
            "elements": [
              {
                "type": "Literal",
                "start": 39,
                "end": 40,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 69,
                "end": 70,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
