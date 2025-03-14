enumWithoutInitializerAfterComputedMember.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 34,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 34,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 34,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 25,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "initializer": {
              "type": "Identifier",
              "start": 24,
              "end": 25,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 31,
            "end": 32,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "c",
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
        "name": "E",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
