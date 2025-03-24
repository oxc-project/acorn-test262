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
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 21,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 21,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 46,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 29,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 40,
          "name": "fa",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 45,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 44,
            "end": 45,
            "typeName": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
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
  "end": 47,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 21,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 21,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 18,
          "name": "B",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 19,
          "end": 21,
          "body": []
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 46,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 29,
        "end": 46,
        "id": {
          "type": "Identifier",
          "start": 38,
          "end": 40,
          "name": "fb",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": false,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 42,
          "end": 45,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 44,
            "end": 45,
            "typeName": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
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
  "end": 21,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 20,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "value": "../",
        "raw": "\"../\""
      },
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
  "end": 26,
  "body": [
    {
      "type": "ExportAllDeclaration",
      "start": 0,
      "end": 25,
      "exported": null,
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 24,
        "value": "../other",
        "raw": "\"../other\""
      },
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
  "end": 107,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 25,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 11,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "name": "fa",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 11,
            "name": "fa",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 19,
        "end": 24,
        "value": "ext",
        "raw": "\"ext\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ImportDeclaration",
      "start": 26,
      "end": 57,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 35,
          "end": 37,
          "imported": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "name": "fb",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "name": "fb",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 45,
        "end": 56,
        "value": "ext/other",
        "raw": "\"ext/other\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 59,
      "end": 82,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 66,
        "end": 82,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 72,
            "end": 81,
            "id": {
              "type": "Identifier",
              "start": 72,
              "end": 74,
              "name": "va",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 77,
              "end": 81,
              "callee": {
                "type": "Identifier",
                "start": 77,
                "end": 79,
                "name": "fa",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 83,
      "end": 106,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 90,
        "end": 106,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 96,
            "end": 105,
            "id": {
              "type": "Identifier",
              "start": 96,
              "end": 98,
              "name": "vb",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 101,
              "end": 105,
              "callee": {
                "type": "Identifier",
                "start": 101,
                "end": 103,
                "name": "fb",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "definite": false
          }
        ],
        "kind": "const",
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
