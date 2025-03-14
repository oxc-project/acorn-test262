enumWithComputedMember.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 49,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 48,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 48,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 14,
            "end": 27,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 18,
              "end": 27,
              "computed": false,
              "object": {
                "type": "Literal",
                "start": 18,
                "end": 20,
                "raw": "\"\"",
                "value": ""
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 21,
                "end": 27,
                "decorators": [],
                "name": "length",
                "optional": false
              }
            }
          },
          {
            "type": "TSEnumMember",
            "start": 34,
            "end": 39,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "Y",
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 38,
              "end": 39,
              "decorators": [],
              "name": "X",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 45,
            "end": 46,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 45,
              "end": 46,
              "decorators": [],
              "name": "Z",
              "optional": false
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
        "name": "A",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
