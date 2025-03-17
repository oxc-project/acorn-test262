__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 17,
        "name": "TopLevelEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 24,
          "end": 59,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 52,
            "name": "ThisWasAllowedButShouldNotBe",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "ThisExpression",
            "start": 55,
            "end": 59
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 18,
        "end": 86,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 24,
            "end": 59,
            "id": {
              "type": "Identifier",
              "start": 24,
              "end": 52,
              "name": "ThisWasAllowedButShouldNotBe",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "ThisExpression",
              "start": 55,
              "end": 59
            },
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 88,
      "end": 220,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 105,
        "name": "ModuleEnum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 106,
        "end": 220,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 112,
            "end": 218,
            "id": {
              "type": "Identifier",
              "start": 117,
              "end": 129,
              "name": "EnumInModule",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 140,
                "end": 165,
                "id": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 158,
                  "name": "WasADifferentError",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": {
                  "type": "ThisExpression",
                  "start": 161,
                  "end": 165
                },
                "computed": false
              }
            ],
            "const": false,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 130,
              "end": 218,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 140,
                  "end": 165,
                  "id": {
                    "type": "Identifier",
                    "start": 140,
                    "end": 158,
                    "name": "WasADifferentError",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": {
                    "type": "ThisExpression",
                    "start": 161,
                    "end": 165
                  },
                  "computed": false
                }
              ]
            }
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
