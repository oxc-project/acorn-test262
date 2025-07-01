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
        "name": "E1",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 19
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 30,
              "end": 31
            },
            "initializer": {
              "type": "Literal",
              "value": 4.23,
              "raw": "4.23",
              "start": 34,
              "end": 38
            },
            "computed": false,
            "start": 30,
            "end": 38
          }
        ],
        "start": 20,
        "end": 44
      },
      "const": false,
      "declare": true,
      "start": 4,
      "end": 44
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null,
        "start": 108,
        "end": 110
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 122
            },
            "initializer": {
              "type": "MemberExpression",
              "object": {
                "type": "Literal",
                "value": "foo",
                "raw": "'foo'",
                "start": 125,
                "end": 130
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 137
              },
              "optional": false,
              "computed": false,
              "start": 125,
              "end": 137
            },
            "computed": false,
            "start": 121,
            "end": 137
          }
        ],
        "start": 111,
        "end": 143
      },
      "const": false,
      "declare": true,
      "start": 95,
      "end": 143
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 4,
  "end": 143
}
```
