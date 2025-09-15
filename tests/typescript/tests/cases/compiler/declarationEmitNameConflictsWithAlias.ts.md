__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 17,
          "end": 18
        },
        "body": {
          "type": "TSModuleBlock",
          "body": [
            {
              "type": "ExportNamedDeclaration",
              "declaration": {
                "type": "TSInterfaceDeclaration",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 38,
                  "end": 39
                },
                "typeParameters": null,
                "extends": [],
                "body": {
                  "type": "TSInterfaceBody",
                  "body": [],
                  "start": 40,
                  "end": 43
                },
                "declare": false,
                "start": 28,
                "end": 43
              },
              "specifiers": [],
              "source": null,
              "exportKind": "type",
              "attributes": [],
              "start": 21,
              "end": 43
            }
          ],
          "start": 19,
          "end": 45
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 7,
        "end": 45
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 45
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null,
          "start": 60,
          "end": 61
        },
        "moduleReference": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 64,
          "end": 65
        },
        "importKind": "value",
        "start": 53,
        "end": 66
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 46,
      "end": 66
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSModuleDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "M",
          "optional": false,
          "typeAnnotation": null,
          "start": 84,
          "end": 85
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
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 110
                },
                "body": {
                  "type": "TSModuleBlock",
                  "body": [
                    {
                      "type": "ExportNamedDeclaration",
                      "declaration": {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "I",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 130,
                          "end": 131
                        },
                        "typeParameters": null,
                        "extends": [],
                        "body": {
                          "type": "TSInterfaceBody",
                          "body": [],
                          "start": 132,
                          "end": 135
                        },
                        "declare": false,
                        "start": 120,
                        "end": 135
                      },
                      "specifiers": [],
                      "source": null,
                      "exportKind": "type",
                      "attributes": [],
                      "start": 113,
                      "end": 135
                    }
                  ],
                  "start": 111,
                  "end": 137
                },
                "kind": "namespace",
                "declare": false,
                "global": false,
                "start": 99,
                "end": 137
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 92,
              "end": 137
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
                      "name": "w",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 156,
                              "end": 157
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "I",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 158,
                              "end": 159
                            },
                            "start": 156,
                            "end": 159
                          },
                          "typeArguments": null,
                          "start": 156,
                          "end": 159
                        },
                        "start": 154,
                        "end": 159
                      },
                      "start": 153,
                      "end": 159
                    },
                    "init": null,
                    "definite": false,
                    "start": 153,
                    "end": 159
                  }
                ],
                "declare": false,
                "start": 149,
                "end": 160
              },
              "specifiers": [],
              "source": null,
              "exportKind": "value",
              "attributes": [],
              "start": 142,
              "end": 160
            }
          ],
          "start": 86,
          "end": 215
        },
        "kind": "namespace",
        "declare": false,
        "global": false,
        "start": 74,
        "end": 215
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 67,
      "end": 215
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 215
}
```
