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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 32,
          "definite": false,
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
            "alternate": {
              "type": "Literal",
              "start": 29,
              "end": 31,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            },
            "consequent": {
              "type": "Literal",
              "start": 25,
              "end": 26,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            },
            "test": {
              "type": "Literal",
              "start": 18,
              "end": 22,
              "raw": "true",
              "value": true,
              "regex": null,
              "bigint": null
            }
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
