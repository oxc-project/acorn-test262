__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 4,
            "end": 12,
            "decorators": [],
            "elements": [
              {
                "type": "AssignmentPattern",
                "start": 5,
                "end": 11,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 5,
                  "end": 6,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 9,
                  "end": 11,
                  "raw": "20",
                  "value": 20
                },
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 15,
            "end": 21,
            "elements": [
              {
                "type": "Literal",
                "start": 16,
                "end": 17,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 19,
                "end": 20,
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
