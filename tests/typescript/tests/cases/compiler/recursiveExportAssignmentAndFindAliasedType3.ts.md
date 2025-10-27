__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "moduleC",
        "raw": "\"moduleC\"",
        "start": 15,
        "end": 24
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 38,
              "end": 42
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "moduleD",
                "raw": "\"moduleD\"",
                "start": 53,
                "end": 62
              },
              "start": 45,
              "end": 63
            },
            "importKind": "value",
            "start": 31,
            "end": 64
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 78,
              "end": 82
            },
            "start": 69,
            "end": 83
          }
        ],
        "start": 25,
        "end": 85
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 85
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "moduleD",
        "raw": "\"moduleD\"",
        "start": 101,
        "end": 110
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 124,
              "end": 128
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "moduleE",
                "raw": "\"moduleE\"",
                "start": 139,
                "end": 148
              },
              "start": 131,
              "end": 149
            },
            "importKind": "value",
            "start": 117,
            "end": 150
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 164,
              "end": 168
            },
            "start": 155,
            "end": 169
          }
        ],
        "start": 111,
        "end": 171
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 86,
      "end": 171
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "moduleE",
        "raw": "\"moduleE\"",
        "start": 187,
        "end": 196
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 210,
              "end": 214
            },
            "moduleReference": {
              "type": "TSExternalModuleReference",
              "expression": {
                "type": "Literal",
                "value": "moduleC",
                "raw": "\"moduleC\"",
                "start": 225,
                "end": 234
              },
              "start": 217,
              "end": 235
            },
            "importKind": "value",
            "start": 203,
            "end": 236
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "self",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 254
            },
            "start": 241,
            "end": 255
          }
        ],
        "start": 197,
        "end": 257
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 172,
      "end": 257
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 258
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 12
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [],
        "start": 13,
        "end": 16
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 16
    },
    {
      "type": "TSExportAssignment",
      "expression": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null,
        "start": 26,
        "end": 32
      },
      "start": 17,
      "end": 33
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 34
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
        "name": "moduleC",
        "optional": false,
        "typeAnnotation": null,
        "start": 91,
        "end": 98
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "moduleC",
          "raw": "\"moduleC\"",
          "start": 109,
          "end": 118
        },
        "start": 101,
        "end": 119
      },
      "importKind": "value",
      "start": 84,
      "end": 120
    },
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClassB",
        "optional": false,
        "typeAnnotation": null,
        "start": 128,
        "end": 134
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "./recursiveExportAssignmentAndFindAliasedType3_moduleB",
          "raw": "\"./recursiveExportAssignmentAndFindAliasedType3_moduleB\"",
          "start": 145,
          "end": 201
        },
        "start": 137,
        "end": 202
      },
      "importKind": "value",
      "start": 121,
      "end": 203
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
              "name": "b",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ClassB",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 218,
                    "end": 224
                  },
                  "typeArguments": null,
                  "start": 218,
                  "end": 224
                },
                "start": 216,
                "end": 224
              },
              "start": 215,
              "end": 224
            },
            "init": null,
            "definite": false,
            "start": 215,
            "end": 224
          }
        ],
        "declare": false,
        "start": 211,
        "end": 225
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 204,
      "end": 225
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 84,
  "end": 262
}
```
