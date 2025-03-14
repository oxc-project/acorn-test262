declarationEmitSpreadStringlyKeyedEnum.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 139,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 86,
      "body": {
        "type": "TSEnumBody",
        "start": 15,
        "end": 86,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 17,
            "end": 23,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 17,
              "end": 23,
              "raw": "\"0-17\"",
              "value": "0-17"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 26,
            "end": 33,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 26,
              "end": 33,
              "raw": "\"18-22\"",
              "value": "18-22"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 36,
            "end": 43,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 36,
              "end": 43,
              "raw": "\"23-27\"",
              "value": "23-27"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 46,
            "end": 53,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 46,
              "end": 53,
              "raw": "\"28-34\"",
              "value": "28-34"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 56,
            "end": 63,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 56,
              "end": 63,
              "raw": "\"35-44\"",
              "value": "35-44"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 66,
            "end": 73,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 66,
              "end": 73,
              "raw": "\"45-59\"",
              "value": "45-59"
            }
          },
          {
            "type": "TSEnumMember",
            "start": 76,
            "end": 84,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 76,
              "end": 84,
              "raw": "\"60-150\"",
              "value": "60-150"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "AgeGroups",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 87,
      "end": 139,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 94,
        "end": 139,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 100,
            "end": 138,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 100,
              "end": 119,
              "decorators": [],
              "name": "SpotifyAgeGroupEnum",
              "optional": false
            },
            "init": {
              "type": "ObjectExpression",
              "start": 122,
              "end": 138,
              "properties": [
                {
                  "type": "SpreadElement",
                  "start": 124,
                  "end": 136,
                  "argument": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 136,
                    "decorators": [],
                    "name": "AgeGroups",
                    "optional": false
                  }
                }
              ]
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script"
}
```
