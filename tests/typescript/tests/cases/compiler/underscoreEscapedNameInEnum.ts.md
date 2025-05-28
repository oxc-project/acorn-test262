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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 52,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 24,
            "id": {
              "type": "Literal",
              "start": 13,
              "end": 20,
              "value": "__foo",
              "raw": "\"__foo\""
            },
            "initializer": {
              "type": "Literal",
              "start": 23,
              "end": 24,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 50,
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
              "left": {
                "type": "MemberExpression",
                "start": 36,
                "end": 46,
                "object": {
                  "type": "Identifier",
                  "start": 36,
                  "end": 37,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 38,
                  "end": 45,
                  "value": "__foo",
                  "raw": "\"__foo\""
                },
                "optional": false,
                "computed": true
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "start": 49,
                "end": 50,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
