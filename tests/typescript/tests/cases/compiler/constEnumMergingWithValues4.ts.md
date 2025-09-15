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
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 52,
        "end": 55
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 67
                },
                "init": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 70,
                  "end": 71
                },
                "definite": false,
                "start": 66,
                "end": 71
              }
            ],
            "declare": false,
            "start": 62,
            "end": 72
          }
        ],
        "start": 56,
        "end": 74
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 42,
      "end": 74
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 86,
        "end": 89
      },
      "start": 77,
      "end": 89
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 89
}
```
