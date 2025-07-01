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
        "name": "TopLevelEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 17
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "ThisWasAllowedButShouldNotBe",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 52
            },
            "initializer": {
              "type": "ThisExpression",
              "start": 55,
              "end": 59
            },
            "computed": false,
            "start": 24,
            "end": 59
          }
        ],
        "start": 18,
        "end": 86
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 86
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ModuleEnum",
        "optional": false,
        "typeAnnotation": null,
        "start": 95,
        "end": 105
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "EnumInModule",
              "optional": false,
              "typeAnnotation": null,
              "start": 117,
              "end": 129
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "WasADifferentError",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 140,
                    "end": 158
                  },
                  "initializer": {
                    "type": "ThisExpression",
                    "start": 161,
                    "end": 165
                  },
                  "computed": false,
                  "start": 140,
                  "end": 165
                }
              ],
              "start": 130,
              "end": 218
            },
            "const": false,
            "declare": false,
            "start": 112,
            "end": 218
          }
        ],
        "start": 106,
        "end": 220
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 88,
      "end": 220
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 220
}
```
