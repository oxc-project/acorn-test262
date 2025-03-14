constEnumBadPropertyNames.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 33,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 18,
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 18,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 16,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      },
      "const": true,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 19,
      "end": 33,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 23,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 23,
            "end": 24,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 27,
            "end": 33,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 27,
              "end": 28,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 29,
              "end": 32,
              "raw": "\"B\"",
              "value": "B"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
