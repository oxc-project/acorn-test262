__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ext",
        "raw": "\"ext\"",
        "start": 15,
        "end": 20
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 45
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 46,
                "end": 48
              },
              "declare": false,
              "start": 34,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 27,
            "end": 48
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fa",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 71
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 76
                  },
                  "typeArguments": null,
                  "start": 75,
                  "end": 76
                },
                "start": 73,
                "end": 76
              },
              "body": null,
              "expression": false,
              "start": 60,
              "end": 77
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 53,
            "end": 77
          }
        ],
        "start": 21,
        "end": 79
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ext/other",
        "raw": "\"ext/other\"",
        "start": 95,
        "end": 106
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
                "name": "B",
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
                "end": 134
              },
              "declare": false,
              "start": 120,
              "end": 134
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 113,
            "end": 134
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fb",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 157
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "typeArguments": null,
                  "start": 161,
                  "end": 162
                },
                "start": 159,
                "end": 162
              },
              "body": null,
              "expression": false,
              "start": 146,
              "end": 163
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 139,
            "end": 163
          }
        ],
        "start": 107,
        "end": 165
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 80,
      "end": 165
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 165
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ext",
        "raw": "\"ext\"",
        "start": 15,
        "end": 20
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
                "name": "A",
                "optional": false,
                "typeAnnotation": null,
                "start": 44,
                "end": 45
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 46,
                "end": 48
              },
              "declare": false,
              "start": 34,
              "end": 48
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 27,
            "end": 48
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fa",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 71
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 75,
                    "end": 76
                  },
                  "typeArguments": null,
                  "start": 75,
                  "end": 76
                },
                "start": 73,
                "end": 76
              },
              "body": null,
              "expression": false,
              "start": 60,
              "end": 77
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 53,
            "end": 77
          }
        ],
        "start": 21,
        "end": 79
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 79
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "ext/other",
        "raw": "\"ext/other\"",
        "start": 95,
        "end": 106
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
                "name": "B",
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
                "end": 134
              },
              "declare": false,
              "start": 120,
              "end": 134
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 113,
            "end": 134
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSDeclareFunction",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "fb",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 157
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "B",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 161,
                    "end": 162
                  },
                  "typeArguments": null,
                  "start": 161,
                  "end": 162
                },
                "start": 159,
                "end": 162
              },
              "body": null,
              "expression": false,
              "start": 146,
              "end": 163
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 139,
            "end": 163
          }
        ],
        "start": 107,
        "end": 165
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 80,
      "end": 165
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 166
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "fa",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 11
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fa",
            "optional": false,
            "typeAnnotation": null,
            "start": 9,
            "end": 11
          },
          "importKind": "value",
          "start": 9,
          "end": 11
        }
      ],
      "source": {
        "type": "Literal",
        "value": "ext",
        "raw": "\"ext\"",
        "start": 19,
        "end": 24
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 0,
      "end": 25
    },
    {
      "type": "ImportDeclaration",
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "imported": {
            "type": "Identifier",
            "decorators": [],
            "name": "fb",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 37
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "fb",
            "optional": false,
            "typeAnnotation": null,
            "start": 35,
            "end": 37
          },
          "importKind": "value",
          "start": 35,
          "end": 37
        }
      ],
      "source": {
        "type": "Literal",
        "value": "ext/other",
        "raw": "\"ext/other\"",
        "start": 45,
        "end": 56
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 26,
      "end": 57
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "va",
              "optional": false,
              "typeAnnotation": null,
              "start": 72,
              "end": 74
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fa",
                "optional": false,
                "typeAnnotation": null,
                "start": 77,
                "end": 79
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 77,
              "end": 81
            },
            "definite": false,
            "start": 72,
            "end": 81
          }
        ],
        "declare": false,
        "start": 66,
        "end": 82
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 59,
      "end": 82
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "vb",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 98
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "fb",
                "optional": false,
                "typeAnnotation": null,
                "start": 101,
                "end": 103
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 101,
              "end": 105
            },
            "definite": false,
            "start": 96,
            "end": 105
          }
        ],
        "declare": false,
        "start": 90,
        "end": 106
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 83,
      "end": 106
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 107
}
```
