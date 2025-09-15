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
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null,
                "start": 35,
                "end": 36
              },
              "body": {
                "type": "TSModuleBlock",
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "declaration": {
                      "type": "ClassDeclaration",
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 60,
                        "end": 61
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 62,
                        "end": 73
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 54,
                      "end": 73
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 47,
                    "end": 73
                  }
                ],
                "start": 37,
                "end": 79
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 25,
              "end": 79
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 79
          },
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 91,
              "end": 92
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null,
              "start": 95,
              "end": 96
            },
            "importKind": "value",
            "start": 84,
            "end": 97
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "exprName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 123,
                          "end": 124
                        },
                        "typeArguments": null,
                        "start": 116,
                        "end": 124
                      },
                      "start": 114,
                      "end": 124
                    },
                    "start": 113,
                    "end": 124
                  },
                  "init": null,
                  "definite": false,
                  "start": 113,
                  "end": 124
                }
              ],
              "declare": false,
              "start": 109,
              "end": 125
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 102,
            "end": 125
          }
        ],
        "start": 12,
        "end": 127
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 127
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 137,
        "end": 138
      },
      "start": 128,
      "end": 139
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 139
}
```
