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
  "end": 49,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 22,
        "body": {
          "type": "TSInterfaceBody",
          "start": 20,
          "end": 22,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 19,
          "decorators": [],
          "name": "A2",
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
      "start": 23,
      "end": 48,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 30,
        "end": 48,
        "async": false,
        "body": null,
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 41,
          "decorators": [],
          "name": "fa",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 43,
          "end": 47,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 45,
            "end": 47,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 45,
              "end": 47,
              "decorators": [],
              "name": "A2",
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
        "value": "../other",
        "regex": null,
        "bigint": null
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
  "end": 116,
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
        "value": "ext",
        "regex": null,
        "bigint": null
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
      "end": 64,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 52,
        "end": 63,
        "raw": "\"ext/other\"",
        "value": "ext/other",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 35,
          "end": 44,
          "imported": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "decorators": [],
            "name": "fa",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "decorators": [],
            "name": "fa2",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 89,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 73,
        "end": 89,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 79,
            "end": 88,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 81,
              "decorators": [],
              "name": "va",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 84,
              "end": 88,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 84,
                "end": 86,
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
      "start": 90,
      "end": 115,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 97,
        "end": 115,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 103,
            "end": 114,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "decorators": [],
              "name": "va2",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 109,
              "end": 114,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 109,
                "end": 112,
                "decorators": [],
                "name": "fa2",
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
