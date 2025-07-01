__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 10
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 29,
        "end": 32
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "await",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 48,
                      "end": 51
                    },
                    "start": 46,
                    "end": 51
                  },
                  "start": 41,
                  "end": 51
                },
                "init": null,
                "definite": false,
                "start": 41,
                "end": 51
              }
            ],
            "declare": false,
            "start": 35,
            "end": 52
          }
        ],
        "start": 33,
        "end": 54
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 11,
      "end": 54
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "await",
        "optional": false,
        "typeAnnotation": null,
        "start": 120,
        "end": 125
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 128,
          "end": 131
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "await",
          "optional": false,
          "typeAnnotation": null,
          "start": 132,
          "end": 137
        },
        "start": 128,
        "end": 137
      },
      "importKind": "value",
      "start": 113,
      "end": 138
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 138
}
```
