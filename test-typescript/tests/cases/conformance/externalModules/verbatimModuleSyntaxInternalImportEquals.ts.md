__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 147,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 10,
      "declaration": null,
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 11,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 20,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "Identifier",
        "start": 23,
        "end": 34,
        "name": "NonExistent",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "importKind": "value"
    },
    {
      "type": "TSModuleDeclaration",
      "start": 37,
      "end": 105,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 50,
        "name": "Foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 51,
        "end": 105,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 78,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 64,
              "end": 78,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 70,
                  "end": 77,
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 73,
                    "name": "foo",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "init": {
                    "type": "Literal",
                    "start": 76,
                    "end": 77,
                    "value": 1,
                    "raw": "1"
                  },
                  "definite": false
                }
              ],
              "kind": "const",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 103,
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 90,
              "end": 103,
              "id": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 99,
                "end": 102
              },
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "type"
          }
        ]
      },
      "kind": "namespace",
      "declare": false,
      "global": false
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 107,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 116,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 119,
        "end": 126,
        "left": {
          "type": "Identifier",
          "start": 119,
          "end": 122,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 123,
          "end": 126,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 128,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 137,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 140,
        "end": 145,
        "left": {
          "type": "Identifier",
          "start": 140,
          "end": 143,
          "name": "Foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 144,
          "end": 145,
          "name": "T",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "importKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
