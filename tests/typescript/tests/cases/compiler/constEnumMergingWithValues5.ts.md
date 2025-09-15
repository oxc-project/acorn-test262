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
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSEnumDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null,
              "start": 31,
              "end": 32
            },
            "body": {
              "type": "TSEnumBody",
              "members": [
                {
                  "type": "TSEnumMember",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "X",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 35,
                    "end": 36
                  },
                  "initializer": null,
                  "computed": false,
                  "start": 35,
                  "end": 36
                }
              ],
              "start": 33,
              "end": 38
            },
            "const": true,
            "declare": false,
            "start": 20,
            "end": 38
          }
        ],
        "start": 14,
        "end": 40
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 40
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 51,
        "end": 54
      },
      "start": 42,
      "end": 54
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 54
}
```
