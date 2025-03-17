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
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 11,
      "end": 35,
      "id": {
        "type": "Identifier",
        "start": 18,
        "end": 20,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "Identifier",
        "start": 23,
        "end": 34,
        "decorators": [],
        "name": "NonExistent",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "TSModuleDeclaration",
      "start": 37,
      "end": 105,
      "body": {
        "type": "TSModuleBlock",
        "start": 51,
        "end": 105,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 57,
            "end": 78,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 64,
              "end": 78,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 70,
                  "end": 77,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 70,
                    "end": 73,
                    "decorators": [],
                    "name": "foo",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 76,
                    "end": 77,
                    "raw": "1",
                    "value": 1
                  }
                }
              ],
              "declare": false,
              "kind": "const"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 83,
            "end": 103,
            "attributes": [],
            "declaration": {
              "type": "TSTypeAliasDeclaration",
              "start": 90,
              "end": 103,
              "declare": false,
              "id": {
                "type": "Identifier",
                "start": 95,
                "end": 96,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 99,
                "end": 102
              },
              "typeParameters": null
            },
            "exportKind": "type",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 50,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "namespace"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 107,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 114,
        "end": 116,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 119,
        "end": 126,
        "left": {
          "type": "Identifier",
          "start": 119,
          "end": 122,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 123,
          "end": 126,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 128,
      "end": 146,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 137,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSQualifiedName",
        "start": 140,
        "end": 145,
        "left": {
          "type": "Identifier",
          "start": 140,
          "end": 143,
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 144,
          "end": 145,
          "decorators": [],
          "name": "T",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
