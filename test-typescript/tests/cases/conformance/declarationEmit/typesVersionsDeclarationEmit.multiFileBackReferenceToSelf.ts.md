__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 21,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 21,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 29,
        "end": 46,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 40,
          "decorators": [],
          "name": "fa",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 45,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 44,
            "end": 45,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
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
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 21,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 21,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "decorators": [],
          "name": "B",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 29,
        "end": 46,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 40,
          "decorators": [],
          "name": "fb",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 45,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 44,
            "end": 45,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": null
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
  "end": 21,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "\"../\"",
        "value": "../"
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
  "end": 26,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "exported": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 24,
        "raw": "\"../other\"",
        "value": "../other"
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
  "end": 107,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "raw": "\"ext\"",
        "value": "ext"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "fa",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "decorators": [],
            "name": "fa",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 57,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 56,
        "raw": "\"ext/other\"",
        "value": "ext/other"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 35,
          "end": 37,
          "imported": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "decorators": [],
            "name": "fb",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "decorators": [],
            "name": "fb",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 82,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 66,
        "end": 82,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 72,
            "end": 81,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "decorators": [],
              "name": "va",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 77,
              "end": 81,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 77,
                "end": 79,
                "decorators": [],
                "name": "fa",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 106,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 90,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 96,
            "end": 105,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 98,
              "decorators": [],
              "name": "vb",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 101,
              "end": 105,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 101,
                "end": 103,
                "decorators": [],
                "name": "fb",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            }
          }
        ],
        "declare": false,
        "kind": "const"
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
