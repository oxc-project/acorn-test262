__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 25,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 25,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 24,
          "id": {
            "type": "ArrayPattern",
            "start": 4,
            "end": 15,
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
                "right": {
                  "type": "Literal",
                  "start": 9,
                  "end": 11,
                  "value": 20,
                  "raw": "20"
                },
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 13,
                "end": 14,
                "decorators": [],
                "name": "j",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 18,
            "end": 24,
            "elements": [
              {
                "type": "Literal",
                "start": 19,
                "end": 20,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 22,
                "end": 23,
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
