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
                "type": "RestElement",
                "start": 5,
                "end": 14,
                "decorators": [],
                "argument": {
                  "type": "ArrayPattern",
                  "start": 8,
                  "end": 14,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 9,
                      "end": 10,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 12,
                      "end": 13,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "typeAnnotation": null,
                "value": null
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
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 22,
                "end": 23,
                "value": 1,
                "raw": "1"
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
