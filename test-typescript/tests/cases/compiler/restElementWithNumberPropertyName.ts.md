__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
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
          "id": {
            "type": "ObjectPattern",
            "start": 6,
            "end": 20,
            "properties": [
              {
                "type": "Property",
                "start": 8,
                "end": 12,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 8,
                  "end": 9,
                  "value": 0,
                  "raw": "0"
                },
                "value": {
                  "type": "Identifier",
                  "start": 11,
                  "end": 12,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 14,
                "end": 18,
                "argument": {
                  "type": "Identifier",
                  "start": 17,
                  "end": 18,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": null,
                "value": null
              }
            ],
            "decorators": [],
            "optional": false,
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
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 27,
                "end": 28,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 30,
                "end": 31,
                "value": 2,
                "raw": "2"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
