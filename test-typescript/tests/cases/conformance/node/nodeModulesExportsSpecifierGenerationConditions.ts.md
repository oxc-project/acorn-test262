__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 119,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 58,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 57,
        "raw": "\"inner/other.js\"",
        "value": "inner/other.js",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 28,
          "end": 33,
          "imported": {
            "type": "Identifier",
            "start": 28,
            "end": 33,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 33,
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 74,
      "end": 119,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 81,
        "end": 119,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 87,
            "end": 118,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 91,
              "end": 118,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 91,
                "end": 116,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 92,
                  "end": 113,
                  "argument": {
                    "type": "ImportExpression",
                    "start": 98,
                    "end": 113,
                    "options": null,
                    "source": {
                      "type": "Literal",
                      "start": 105,
                      "end": 112,
                      "raw": "\"inner\"",
                      "value": "inner",
                      "regex": null,
                      "bigint": null
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
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
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 19,
  "end": 50,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 50,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 37,
        "end": 49,
        "raw": "\"./other.js\"",
        "value": "./other.js",
        "regex": null,
        "bigint": null
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 28,
          "end": 29,
          "exported": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
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
  "start": 19,
  "end": 73,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 44,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 26,
        "end": 44,
        "body": {
          "type": "TSInterfaceBody",
          "start": 42,
          "end": 44,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 41,
          "decorators": [],
          "name": "Thing",
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
      "start": 45,
      "end": 73,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 52,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 58,
            "end": 72,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 58,
              "end": 72,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 61,
                  "end": 72,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 67,
                      "end": 72,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 72,
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  },
                  "typeParameters": null
                }
              }
            },
            "init": null
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
