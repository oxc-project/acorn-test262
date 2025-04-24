__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 17,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 4,
            "end": 7,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 5,
                "end": 6,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 10,
            "end": 16,
            "elements": [
              {
                "type": "Literal",
                "start": 11,
                "end": 12,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 14,
                "end": 15,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
