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
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSModuleDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 36,
                "end": 38
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
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 62,
                        "end": 64
                      },
                      "typeParameters": null,
                      "superClass": null,
                      "superTypeArguments": null,
                      "implements": [],
                      "body": {
                        "type": "ClassBody",
                        "body": [],
                        "start": 65,
                        "end": 76
                      },
                      "abstract": false,
                      "declare": false,
                      "start": 56,
                      "end": 76
                    },
                    "specifiers": [],
                    "source": null,
                    "exportKind": "value",
                    "attributes": [],
                    "start": 49,
                    "end": 76
                  }
                ],
                "start": 39,
                "end": 82
              },
              "kind": "namespace",
              "declare": false,
              "global": false,
              "start": 26,
              "end": 82
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 19,
            "end": 82
          }
        ],
        "start": 13,
        "end": 84
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 84
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "m1",
        "optional": false,
        "typeAnnotation": null,
        "start": 94,
        "end": 96
      },
      "start": 85,
      "end": 97
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 98
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 15
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "declFileExportImportChain_a",
            "raw": "\"declFileExportImportChain_a\"",
            "start": 26,
            "end": 55
          },
          "start": 18,
          "end": 56
        },
        "importKind": "value",
        "start": 7,
        "end": 57
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 57
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 58
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "declFileExportImportChain_b",
          "raw": "\"declFileExportImportChain_b\"",
          "start": 19,
          "end": 48
        },
        "start": 11,
        "end": 49
      },
      "importKind": "value",
      "start": 0,
      "end": 50
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "b",
        "optional": false,
        "typeAnnotation": null,
        "start": 60,
        "end": 61
      },
      "start": 51,
      "end": 62
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 63
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "b1",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 16
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "declFileExportImportChain_b1",
            "raw": "\"declFileExportImportChain_b1\"",
            "start": 27,
            "end": 57
          },
          "start": 19,
          "end": 58
        },
        "importKind": "value",
        "start": 7,
        "end": 59
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 59
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 60
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "declFileExportImportChain_c",
          "raw": "\"declFileExportImportChain_c\"",
          "start": 19,
          "end": 48
        },
        "start": 11,
        "end": 49
      },
      "importKind": "value",
      "start": 0,
      "end": 50
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
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "TSQualifiedName",
                    "left": {
                      "type": "TSQualifiedName",
                      "left": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "TSQualifiedName",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "c",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 65,
                            "end": 66
                          },
                          "right": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 67,
                            "end": 69
                          },
                          "start": 65,
                          "end": 69
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 70,
                          "end": 71
                        },
                        "start": 65,
                        "end": 71
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 72,
                        "end": 74
                      },
                      "start": 65,
                      "end": 74
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 75,
                      "end": 77
                    },
                    "start": 65,
                    "end": 77
                  },
                  "typeArguments": null,
                  "start": 65,
                  "end": 77
                },
                "start": 63,
                "end": 77
              },
              "start": 62,
              "end": 77
            },
            "init": null,
            "definite": false,
            "start": 62,
            "end": 77
          }
        ],
        "declare": false,
        "start": 58,
        "end": 78
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 51,
      "end": 78
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 78
}
```
