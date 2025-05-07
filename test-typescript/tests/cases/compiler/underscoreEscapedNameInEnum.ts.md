__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 52,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 52,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 24,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 13,
              "end": 20,
              "raw": "\"__foo\"",
              "value": "__foo",
              "regex": null,
              "bigint": null
            },
            "initializer": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "raw": "1",
              "value": 1,
              "regex": null,
              "bigint": null
            }
          },
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 50,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 33,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 36,
              "end": 50,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 36,
                "end": 46,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 38,
                  "end": 45,
                  "raw": "\"__foo\"",
                  "value": "__foo",
                  "regex": null,
                  "bigint": null
                }
              },
              "right": {
                "type": "Literal",
                "start": 49,
                "end": 50,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              }
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
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
