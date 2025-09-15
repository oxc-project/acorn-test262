__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 12
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "e",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 25
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 36,
                    "end": 38
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 36,
                  "end": 38
                },
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 49,
                    "end": 51
                  },
                  "initializer": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "m1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 54,
                    "end": 56
                  },
                  "computed": false,
                  "start": 49,
                  "end": 56
                }
              ],
              "start": 26,
              "end": 62
            },
            "const": false,
            "declare": false,
            "start": 19,
            "end": 62
          }
        ],
        "start": 13,
        "end": 64
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 64
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 64
}
```
