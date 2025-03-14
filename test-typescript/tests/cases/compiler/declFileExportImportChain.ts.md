declFileExportImportChain_a.ts
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
      "body": {
        "type": "TSModuleBlock",
        "start": 10,
        "end": 78,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 16,
            "end": 76,
            "attributes": [],
            "declaration": {
              "type": "TSModuleDeclaration",
              "start": 23,
              "end": 76,
              "body": {
                "type": "TSModuleBlock",
                "start": 33,
                "end": 76,
                "body": [
                  {
                    "type": "ExportNamedDeclaration",
                    "start": 43,
                    "end": 70,
                    "attributes": [],
                    "declaration": {
                      "type": "ClassDeclaration",
                      "start": 50,
                      "end": 70,
                      "abstract": false,
                      "body": {
                        "type": "ClassBody",
                        "start": 59,
                        "end": 70,
                        "body": []
                      },
                      "declare": false,
                      "decorators": [],
                      "id": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 58,
                        "decorators": [],
                        "name": "c1",
                        "optional": false
                      },
                      "implements": [],
                      "superClass": null
                    },
                    "exportKind": "value",
                    "source": null,
                    "specifiers": []
                  }
                ]
              },
              "declare": false,
              "global": false,
              "id": {
                "type": "Identifier",
                "start": 30,
                "end": 32,
                "decorators": [],
                "name": "m2",
                "optional": false
              },
              "kind": "module"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 9,
        "decorators": [],
        "name": "m1",
        "optional": false
      },
      "kind": "module"
    },
    {
      "type": "TSExportAssignment",
      "start": 79,
      "end": 91,
      "expression": {
        "type": "Identifier",
        "start": 88,
        "end": 90,
        "decorators": [],
        "name": "m1",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
declFileExportImportChain_b.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 57,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 18,
          "end": 56,
          "expression": {
            "type": "Literal",
            "start": 26,
            "end": 55,
            "raw": "\"declFileExportImportChain_a\"",
            "value": "declFileExportImportChain_a"
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
declFileExportImportChain_b1.ts
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
        "decorators": [],
        "name": "b",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 49,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 48,
          "raw": "\"declFileExportImportChain_b\"",
          "value": "declFileExportImportChain_b"
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 51,
      "end": 62,
      "expression": {
        "type": "Identifier",
        "start": 60,
        "end": 61,
        "decorators": [],
        "name": "b",
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
declFileExportImportChain_c.ts
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
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 59,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 16,
          "decorators": [],
          "name": "b1",
          "optional": false
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 19,
          "end": 58,
          "expression": {
            "type": "Literal",
            "start": 27,
            "end": 57,
            "raw": "\"declFileExportImportChain_b1\"",
            "value": "declFileExportImportChain_b1"
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
declFileExportImportChain_d.ts
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
        "decorators": [],
        "name": "c",
        "optional": false
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 49,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 48,
          "raw": "\"declFileExportImportChain_c\"",
          "value": "declFileExportImportChain_c"
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 51,
      "end": 78,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 58,
        "end": 78,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 62,
            "end": 77,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 77,
              "decorators": [],
              "name": "x",
              "optional": false,
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
                            "decorators": [],
                            "name": "c",
                            "optional": false
                          },
                          "right": {
                            "type": "Identifier",
                            "start": 67,
                            "end": 69,
                            "decorators": [],
                            "name": "b1",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 70,
                          "end": 71,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 72,
                        "end": 74,
                        "decorators": [],
                        "name": "m2",
                        "optional": false
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 75,
                      "end": 77,
                      "decorators": [],
                      "name": "c1",
                      "optional": false
                    }
                  }
                }
              }
            },
            "init": null
          }
        ],
        "declare": false,
        "kind": "var"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
