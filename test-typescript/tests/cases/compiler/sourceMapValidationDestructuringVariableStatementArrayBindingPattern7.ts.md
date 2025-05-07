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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 24,
          "definite": false,
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
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 9,
                  "end": 11,
                  "raw": "20",
                  "value": 20,
                  "regex": null,
                  "bigint": null
                },
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
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 22,
                "end": 23,
                "raw": "2",
                "value": 2,
                "regex": null,
                "bigint": null
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
