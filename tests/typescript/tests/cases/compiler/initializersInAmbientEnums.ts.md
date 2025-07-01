__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 13,
        "end": 14
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 21,
              "end": 22
            },
            "initializer": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 25,
              "end": 27
            },
            "computed": false,
            "start": 21,
            "end": 27
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 33,
              "end": 34
            },
            "initializer": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 38
            },
            "computed": false,
            "start": 33,
            "end": 38
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 44,
              "end": 45
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 48,
                "end": 50
              },
              "operator": "<<",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 54,
                  "end": 55
                },
                "operator": "*",
                "right": {
                  "type": "Literal",
                  "value": 8,
                  "raw": "8",
                  "start": 58,
                  "end": 59
                },
                "start": 54,
                "end": 59
              },
              "start": 48,
              "end": 59
            },
            "computed": false,
            "start": 44,
            "end": 59
          }
        ],
        "start": 15,
        "end": 62
      },
      "const": false,
      "declare": true,
      "start": 0,
      "end": 62
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 62
}
```
