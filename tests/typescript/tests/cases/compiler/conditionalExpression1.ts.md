__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 55,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 33,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 14,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 14,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 7,
                "end": 14
              }
            }
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 18,
            "end": 31,
            "test": {
              "type": "Literal",
              "start": 18,
              "end": 22,
              "value": true,
              "raw": "true"
            },
            "consequent": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "value": 1,
              "raw": "1"
            },
            "alternate": {
              "type": "Literal",
              "start": 29,
              "end": 31,
              "value": "",
              "raw": "\"\""
            }
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
