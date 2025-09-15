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
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 7,
        "end": 8
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "declFileExportImportChain2_a",
          "raw": "\"declFileExportImportChain2_a\"",
          "start": 19,
          "end": 49
        },
        "start": 11,
        "end": 50
      },
      "importKind": "value",
      "start": 0,
      "end": 51
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "a",
        "optional": false,
        "typeAnnotation": null,
        "start": 61,
        "end": 62
      },
      "start": 52,
      "end": 63
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 64
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
          "name": "b",
          "optional": false,
          "typeAnnotation": null,
          "start": 14,
          "end": 15
        },
        "moduleReference": {
          "type": "TSExternalModuleReference",
          "expression": {
            "type": "Literal",
            "value": "declFileExportImportChain2_b",
            "raw": "\"declFileExportImportChain2_b\"",
            "start": 26,
            "end": 56
          },
          "start": 18,
          "end": 57
        },
        "importKind": "value",
        "start": 7,
        "end": 58
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 0,
      "end": 58
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 59
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
          "value": "declFileExportImportChain2_c",
          "raw": "\"declFileExportImportChain2_c\"",
          "start": 19,
          "end": 49
        },
        "start": 11,
        "end": 50
      },
      "importKind": "value",
      "start": 0,
      "end": 51
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
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 66,
                          "end": 67
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 68,
                          "end": 69
                        },
                        "start": 66,
                        "end": 69
                      },
                      "right": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 70,
                        "end": 72
                      },
                      "start": 66,
                      "end": 72
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "c1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 73,
                      "end": 75
                    },
                    "start": 66,
                    "end": 75
                  },
                  "typeArguments": null,
                  "start": 66,
                  "end": 75
                },
                "start": 64,
                "end": 75
              },
              "start": 63,
              "end": 75
            },
            "init": null,
            "definite": false,
            "start": 63,
            "end": 75
          }
        ],
        "declare": false,
        "start": 59,
        "end": 76
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 52,
      "end": 76
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 76
}
```
