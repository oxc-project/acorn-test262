__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 66,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 14,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 11,
          "end": 12,
          "id": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 9,
        "end": 14,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 11,
            "end": 12,
            "id": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 15,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 22,
        "end": 25,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 26,
        "end": 52,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 32,
            "end": 50,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 47,
                "end": 48,
                "id": {
                  "type": "Identifier",
                  "start": 47,
                  "end": 48,
                  "name": "X",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "initializer": null,
                "computed": false
              }
            ],
            "const": true,
            "declare": false,
            "body": {
              "type": "TSEnumBody",
              "start": 45,
              "end": 50,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 47,
                  "end": 48,
                  "id": {
                    "type": "Identifier",
                    "start": 47,
                    "end": 48,
                    "name": "X",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "initializer": null,
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
    },
    {
      "type": "TSExportAssignment",
      "start": 54,
      "end": 66,
      "expression": {
        "type": "Identifier",
        "start": 63,
        "end": 66,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
