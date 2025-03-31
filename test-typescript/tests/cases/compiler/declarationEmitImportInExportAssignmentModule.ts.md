__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 133,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 121,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "m",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 9,
        "end": 121,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 15,
            "end": 73,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 22,
              "end": 73,
              "id": {
                "type": "Identifier",
                "start": 29,
                "end": 30,
                "name": "c",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 31,
                "end": 73,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 41,
                    "end": 67,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 48,
                      "end": 67,
                      "id": {
                        "type": "Identifier",
                        "start": 54,
                        "end": 55,
                        "name": "c",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 56,
                        "end": 67,
                        "body": []
                      },
                      "decorators": [],
                      "typeParameters": null,
                      "implements": [],
                      "abstract": false,
                      "declare": false,
                      "superTypeArguments": null
                    },
                    "specifiers": [],
                    "source": null,
                    "attributes": [],
                    "exportKind": "value"
                  }
                ]
              },
              "kind": "module",
              "declare": false,
              "global": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          },
          {
            "type": "TSImportEqualsDeclaration",
            "start": 78,
            "end": 91,
            "id": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "moduleReference": {
              "type": "Identifier",
              "start": 89,
              "end": 90,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "importKind": "value"
          },
          {
            "type": "ExportNamedDeclaration",
            "start": 96,
            "end": 119,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 103,
              "end": 119,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 107,
                  "end": 118,
                  "id": {
                    "type": "Identifier",
                    "start": 107,
                    "end": 118,
                    "name": "a",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 108,
                      "end": 118,
                      "typeAnnotation": {
                        "type": "TSTypeQuery",
                        "start": 110,
                        "end": 118,
                        "exprName": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 118,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 122,
      "end": 133,
      "expression": {
        "type": "Identifier",
        "start": 131,
        "end": 132,
        "name": "m",
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
