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
      "body": {
        "type": "TSEnumBody",
        "start": 15,
        "end": 62,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 21,
            "end": 27,
            "computed": false,
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
              "raw": "10",
              "value": 10
            }
          },
          {
            "type": "TSEnumMember",
            "start": 33,
            "end": 38,
            "computed": false,
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
            }
          },
          {
            "type": "TSEnumMember",
            "start": 44,
            "end": 59,
            "computed": false,
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
              "operator": "<<",
              "left": {
                "type": "Literal",
                "start": 48,
                "end": 50,
                "raw": "10",
                "value": 10
              },
              "right": {
                "type": "BinaryExpression",
                "start": 54,
                "end": 59,
                "operator": "*",
                "left": {
                  "type": "Literal",
                  "start": 54,
                  "end": 55,
                  "raw": "2",
                  "value": 2
                },
                "right": {
                  "type": "Literal",
                  "start": 58,
                  "end": 59,
                  "raw": "8",
                  "value": 8
                }
              }
            }
          }
        ]
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 13,
        "end": 14,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
