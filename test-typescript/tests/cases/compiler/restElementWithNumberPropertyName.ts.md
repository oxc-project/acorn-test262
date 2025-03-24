__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 6,
          "end": 32,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 20,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 12,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 8,
                  "end": 9,
                  "raw": "0",
                  "value": 0
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 12,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "RestElement",
                "start": 14,
                "end": 18,
                "argument": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 18,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 23,
            "end": 32,
            "elements": [
              {
                "type": "Literal",
                "start": 24,
                "end": 25,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 27,
                "end": 28,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 30,
                "end": 31,
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
