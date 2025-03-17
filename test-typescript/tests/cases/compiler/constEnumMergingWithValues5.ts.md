__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 51,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 37,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 10,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 11,
        "end": 37,
        "body": [
          {
            "type": "TSEnumDeclaration",
            "start": 17,
            "end": 35,
            "id": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "name": "E",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "members": [
              {
                "type": "TSEnumMember",
                "start": 32,
                "end": 33,
                "id": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
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
              "start": 30,
              "end": 35,
              "members": [
                {
                  "type": "TSEnumMember",
                  "start": 32,
                  "end": 33,
                  "id": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
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
      "start": 39,
      "end": 51,
      "expression": {
        "type": "Identifier",
        "start": 48,
        "end": 51,
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
