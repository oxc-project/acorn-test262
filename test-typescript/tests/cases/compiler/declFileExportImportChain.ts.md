__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 78,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 76,
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 76,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 32,
                "name": "m2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "body": {
                "type": "TSModuleBlock",
                "start": 33,
                "end": 76,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 43,
                    "end": 70,
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 50,
                      "end": 70,
                      "id": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 58,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "superClass": null,
                      "body": {
                        "type": "ClassBody",
                        "start": 59,
                        "end": 70,
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
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSExportAssignment",
      "start": 79,
      "end": 91,
      "expression": {
        "type": "Identifier",
        "start": 88,
        "end": 90,
        "name": "m1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 58,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 57,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 57,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 18,
          "end": 56,
          "expression": {
            "type": "Literal",
            "start": 26,
            "end": 55,
            "value": "declFileExportImportChain_a",
            "raw": "\"declFileExportImportChain_a\""
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 63,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 49,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 48,
          "value": "declFileExportImportChain_b",
          "raw": "\"declFileExportImportChain_b\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSExportAssignment",
      "start": 51,
      "end": 62,
      "expression": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "name": "b",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 59,
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 16,
          "name": "b1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 19,
          "end": 58,
          "expression": {
            "type": "Literal",
            "start": 27,
            "end": 57,
            "value": "declFileExportImportChain_b1",
            "raw": "\"declFileExportImportChain_b1\""
          }
        },
        "importKind": "value"
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 78,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 50,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "name": "c",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 49,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 48,
          "value": "declFileExportImportChain_c",
          "raw": "\"declFileExportImportChain_c\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 78,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 58,
        "end": 78,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 62,
            "end": 77,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 77,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 77,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 77,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 65,
                    "end": 77,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 65,
                      "end": 74,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 65,
                        "end": 71,
                        "left": {
                          "type": "TSQualifiedName",
                          "start": 65,
                          "end": 69,
                          "left": {
                            "type": "Identifier",
                            "start": 65,
                            "end": 66,
                            "name": "c",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 69,
                            "name": "b1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 74,
                        "name": "m2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 77,
                      "name": "c1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
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
  ],
  "sourceType": "module",
  "hashbang": null
}
```
