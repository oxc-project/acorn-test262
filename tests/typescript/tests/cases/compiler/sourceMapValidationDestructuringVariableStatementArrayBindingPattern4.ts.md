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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 14,
                "end": 15,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
