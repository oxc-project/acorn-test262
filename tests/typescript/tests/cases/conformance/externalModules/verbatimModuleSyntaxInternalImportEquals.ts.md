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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 20
      },
      "moduleReference": {
        "type": "Identifier",
        "decorators": [],
        "name": "NonExistent",
        "optional": false,
        "typeAnnotation": null,
        "start": 23,
        "end": 34
      },
      "importKind": "value",
      "start": 11,
      "end": 35
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 47,
        "end": 50
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "const",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 70,
                    "end": 73
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 76,
                    "end": 77
                  },
                  "definite": false,
                  "start": 70,
                  "end": 77
                }
              ],
              "declare": false,
              "start": 64,
              "end": 78
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 57,
            "end": 78
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 95,
                "end": 96
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 99,
                "end": 102
              },
              "declare": false,
              "start": 90,
              "end": 103
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 83,
            "end": 103
          }
        ],
        "start": 51,
        "end": 105
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 37,
      "end": 105
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 114,
        "end": 116
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 119,
          "end": 122
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 123,
          "end": 126
        },
        "start": 119,
        "end": 126
      },
      "importKind": "value",
      "start": 107,
      "end": 127
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 135,
        "end": 137
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 140,
          "end": 143
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null,
          "start": 144,
          "end": 145
        },
        "start": 140,
        "end": 145
      },
      "importKind": "value",
      "start": 128,
      "end": 146
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 146
}
```
