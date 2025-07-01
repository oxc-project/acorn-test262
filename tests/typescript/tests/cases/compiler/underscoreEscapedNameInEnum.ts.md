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
        "start": 5,
        "end": 6
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "__foo",
              "raw": "\"__foo\"",
              "start": 13,
              "end": 20
            },
            "initializer": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 23,
              "end": 24
            },
            "computed": false,
            "start": 13,
            "end": 24
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 33
            },
            "initializer": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 36,
                  "end": 37
                },
                "property": {
                  "type": "Literal",
                  "value": "__foo",
                  "raw": "\"__foo\"",
                  "start": 38,
                  "end": 45
                },
                "optional": false,
                "computed": true,
                "start": 36,
                "end": 46
              },
              "operator": "+",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 49,
                "end": 50
              },
              "start": 36,
              "end": 50
            },
            "computed": false,
            "start": 30,
            "end": 50
          }
        ],
        "start": 7,
        "end": 52
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 52
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 52
}
```
