__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 62,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 62,
      "id": {
        "type": "Identifier",
        "start": 13,
        "end": 14,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 15,
        "end": 62,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 27,
            "id": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 25,
              "end": 27,
              "value": 10,
              "raw": "10"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 33,
            "end": 38,
            "id": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 37,
              "end": 38,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 44,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 48,
              "end": 59,
              "left": {
                "type": "Literal",
                "start": 48,
                "end": 50,
                "value": 10,
                "raw": "10"
              },
              "operator": "<<",
              "right": {
                "type": "BinaryExpression",
                "start": 54,
                "end": 59,
                "left": {
                  "type": "Literal",
                  "start": 54,
                  "end": 55,
                  "value": 2,
                  "raw": "2"
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "start": 58,
                  "end": 59,
                  "value": 8,
                  "raw": "8"
                }
              }
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
