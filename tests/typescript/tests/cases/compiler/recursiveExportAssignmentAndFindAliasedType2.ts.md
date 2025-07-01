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
                "value": "moduleC",
                "raw": "\"moduleC\"",
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
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 172
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
          "value": "recursiveExportAssignmentAndFindAliasedType2_moduleB",
          "raw": "\"recursiveExportAssignmentAndFindAliasedType2_moduleB\"",
          "start": 145,
          "end": 199
        },
        "start": 137,
        "end": 200
      },
      "importKind": "value",
      "start": 121,
      "end": 201
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
                    "start": 216,
                    "end": 222
                  },
                  "typeArguments": null,
                  "start": 216,
                  "end": 222
                },
                "start": 214,
                "end": 222
              },
              "start": 213,
              "end": 222
            },
            "init": null,
            "definite": false,
            "start": 213,
            "end": 222
          }
        ],
        "declare": false,
        "start": 209,
        "end": 223
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 202,
      "end": 223
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 84,
  "end": 260
}
```
