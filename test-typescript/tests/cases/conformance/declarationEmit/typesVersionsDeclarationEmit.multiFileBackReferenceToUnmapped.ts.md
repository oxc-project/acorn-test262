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
  "end": 49,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 22,
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 19,
          "name": "A2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 20,
          "end": 22,
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
      "start": 23,
      "end": 48,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 30,
        "end": 48,
        "id": {
          "type": "Identifier",
          "start": 39,
          "end": 41,
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
          "start": 43,
          "end": 47,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 45,
            "end": 47,
            "typeName": {
              "type": "Identifier",
              "start": 45,
              "end": 47,
              "name": "A2",
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
  "end": 116,
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
      "end": 64,
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 35,
          "end": 44,
          "imported": {
            "type": "Identifier",
            "start": 35,
            "end": 37,
            "name": "fa",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 41,
            "end": 44,
            "name": "fa2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 52,
        "end": 63,
        "value": "ext/other",
        "raw": "\"ext/other\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 66,
      "end": 89,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 73,
        "end": 89,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 79,
            "end": 88,
            "id": {
              "type": "Identifier",
              "start": 79,
              "end": 81,
              "name": "va",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 84,
              "end": 88,
              "callee": {
                "type": "Identifier",
                "start": 84,
                "end": 86,
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
      "start": 90,
      "end": 115,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 97,
        "end": 115,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 103,
            "end": 114,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 106,
              "name": "va2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 109,
              "end": 114,
              "callee": {
                "type": "Identifier",
                "start": 109,
                "end": 112,
                "name": "fa2",
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
