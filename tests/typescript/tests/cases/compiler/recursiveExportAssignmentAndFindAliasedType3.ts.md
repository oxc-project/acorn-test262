__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 258,
  "body": [
    {
      "type": "TSModuleDeclaration",
      "start": 0,
      "end": 85,
      "id": {
        "type": "Literal",
        "start": 15,
        "end": 24,
        "value": "moduleC",
        "raw": "\"moduleC\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 25,
        "end": 85,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 31,
            "end": 64,
            "id": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 45,
              "end": 63,
              "expression": {
                "type": "Literal",
                "start": 53,
                "end": 62,
                "value": "moduleD",
                "raw": "\"moduleD\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSExportAssignment",
            "start": 69,
            "end": 83,
            "expression": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 86,
      "end": 171,
      "id": {
        "type": "Literal",
        "start": 101,
        "end": 110,
        "value": "moduleD",
        "raw": "\"moduleD\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 111,
        "end": 171,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 117,
            "end": 150,
            "id": {
              "type": "Identifier",
              "start": 124,
              "end": 128,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 131,
              "end": 149,
              "expression": {
                "type": "Literal",
                "start": 139,
                "end": 148,
                "value": "moduleE",
                "raw": "\"moduleE\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSExportAssignment",
            "start": 155,
            "end": 169,
            "expression": {
              "type": "Identifier",
              "start": 164,
              "end": 168,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 172,
      "end": 257,
      "id": {
        "type": "Literal",
        "start": 187,
        "end": 196,
        "value": "moduleE",
        "raw": "\"moduleE\""
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 197,
        "end": 257,
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "start": 203,
            "end": 236,
            "id": {
              "type": "Identifier",
              "start": 210,
              "end": 214,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "start": 217,
              "end": 235,
              "expression": {
                "type": "Literal",
                "start": 225,
                "end": 234,
                "value": "moduleC",
                "raw": "\"moduleC\""
              }
            },
            "importKind": "value"
          },
          {
            "type": "TSExportAssignment",
            "start": 241,
            "end": 255,
            "expression": {
              "type": "Identifier",
              "start": 250,
              "end": 254,
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "kind": "module",
      "declare": true,
      "global": false
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
  "end": 34,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 16,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 12,
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 13,
        "end": 16,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSExportAssignment",
      "start": 17,
      "end": 33,
      "expression": {
        "type": "Identifier",
        "start": 26,
        "end": 32,
        "decorators": [],
        "name": "ClassB",
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
  "start": 84,
  "end": 260,
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "start": 84,
      "end": 120,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 98,
        "decorators": [],
        "name": "moduleC",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 101,
        "end": 119,
        "expression": {
          "type": "Literal",
          "start": 109,
          "end": 118,
          "value": "moduleC",
          "raw": "\"moduleC\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "TSImportEqualsDeclaration",
      "start": 121,
      "end": 201,
      "id": {
        "type": "Identifier",
        "start": 128,
        "end": 134,
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "start": 137,
        "end": 200,
        "expression": {
          "type": "Literal",
          "start": 145,
          "end": 199,
          "value": "recursiveExportAssignmentAndFindAliasedType3_moduleB",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType3_moduleB\""
        }
      },
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 202,
      "end": 223,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 209,
        "end": 223,
        "kind": "var",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 213,
            "end": 222,
            "id": {
              "type": "Identifier",
              "start": 213,
              "end": 222,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 214,
                "end": 222,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 216,
                  "end": 222,
                  "typeName": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 222,
                    "decorators": [],
                    "name": "ClassB",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            },
            "init": null,
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
