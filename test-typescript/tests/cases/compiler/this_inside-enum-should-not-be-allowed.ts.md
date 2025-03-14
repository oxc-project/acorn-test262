this_inside-enum-should-not-be-allowed.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 220,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 86,
      "body": {
        "type": "TSEnumBody",
        "start": 18,
        "end": 86,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 24,
            "end": 59,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 52,
              "decorators": [],
              "name": "ThisWasAllowedButShouldNotBe",
              "optional": false
            },
            "initializer": {
              "type": "ThisExpression",
              "start": 55,
              "end": 59
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "decorators": [],
        "name": "TopLevelEnum",
        "optional": false
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 88,
      "end": 220,
      "body": {
        "type": "TSModuleBlock",
        "start": 106,
        "end": 220,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 112,
            "end": 218,
            "body": {
              "type": "TSEnumBody",
              "start": 130,
              "end": 218,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 140,
                  "end": 165,
                  "computed": false,
                  "id": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 158,
                    "decorators": [],
                    "name": "WasADifferentError",
                    "optional": false
                  },
                  "initializer": {
                    "type": "ThisExpression",
                    "start": 161,
                    "end": 165
                  }
                }
              ]
            },
            "const": false,
            "declare": false,
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 129,
              "decorators": [],
              "name": "EnumInModule",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 105,
        "decorators": [],
        "name": "ModuleEnum",
        "optional": false
      },
      "kind": "module"
    }
  ],
  "sourceType": "script"
}
```
