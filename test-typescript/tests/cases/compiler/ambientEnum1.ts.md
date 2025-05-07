__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 4,
  "end": 143,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 4,
      "end": 44,
      "body": {
        "type": "TSEnumBody",
        "start": 20,
        "end": 44,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 30,
            "end": 38,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 34,
              "end": 38,
              "raw": "4.23",
              "value": 4.23,
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 19,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 95,
      "end": 143,
      "body": {
        "type": "TSEnumBody",
        "start": 111,
        "end": 143,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 121,
            "end": 137,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 121,
              "end": 122,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 125,
              "end": 137,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 125,
                "end": 130,
                "raw": "'foo'",
                "value": "foo",
                "regex": null,
                "bigint": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 131,
                "end": 137,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "const": false,
      "declare": true,
      "id": {
        "type": "Identifier",
        "start": 108,
        "end": 110,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
