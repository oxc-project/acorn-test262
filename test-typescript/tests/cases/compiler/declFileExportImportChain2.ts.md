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
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "implements": [],
                      "superClass": null,
                      "superTypeArguments": null,
                      "typeParameters": null
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
                "optional": false,
                "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
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
        "optional": false,
        "typeAnnotation": null
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
  "end": 64,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 50,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 49,
          "raw": "\"declFileExportImportChain2_a\"",
          "value": "declFileExportImportChain2_a",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "TSExportAssignment",
      "start": 52,
      "end": 63,
      "expression": {
        "type": "Identifier",
        "start": 61,
        "end": 62,
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null
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
  "end": 59,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 58,
      "attributes": [],
      "declaration": {
        "type": "TSImportEqualsDeclaration",
        "start": 7,
        "end": 58,
        "id": {
          "type": "Identifier",
          "start": 14,
          "end": 15,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        },
        "importKind": "value",
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "start": 18,
          "end": 57,
          "expression": {
            "type": "Literal",
            "start": 26,
            "end": 56,
            "raw": "\"declFileExportImportChain2_b\"",
            "value": "declFileExportImportChain2_b",
            "regex": null,
            "bigint": null
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
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
  "end": 76,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 0,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 7,
        "end": 8,
        "decorators": [],
        "name": "c",
        "optional": false,
        "typeAnnotation": null
      },
      "importKind": "value",
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 11,
        "end": 50,
        "expression": {
          "type": "Literal",
          "start": 19,
          "end": 49,
          "raw": "\"declFileExportImportChain2_c\"",
          "value": "declFileExportImportChain2_c",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 52,
      "end": 76,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 59,
        "end": 76,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 63,
            "end": 75,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 63,
              "end": 75,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 64,
                "end": 75,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 66,
                  "end": 75,
                  "typeArguments": null,
                  "typeName": {
                    "type": "TSQualifiedName",
                    "start": 66,
                    "end": 75,
                    "left": {
                      "type": "TSQualifiedName",
                      "start": 66,
                      "end": 72,
                      "left": {
                        "type": "TSQualifiedName",
                        "start": 66,
                        "end": 69,
                        "left": {
                          "type": "Identifier",
                          "start": 66,
                          "end": 67,
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "right": {
                          "type": "Identifier",
                          "start": 68,
                          "end": 69,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 70,
                        "end": 72,
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 73,
                      "end": 75,
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null
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
  "sourceType": "module",
  "hashbang": null
}
```
