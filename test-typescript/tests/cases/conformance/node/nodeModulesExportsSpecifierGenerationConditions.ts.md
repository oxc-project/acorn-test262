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
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 28,
          "end": 33,
          "imported": {
            "type": "Identifier",
            "start": 28,
            "end": 33,
            "name": "Thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 33,
            "name": "Thing",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 57,
        "value": "inner/other.js",
        "raw": "\"inner/other.js\""
      },
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 74,
      "end": 119,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 81,
        "end": 119,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 87,
            "end": 118,
            "id": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 91,
              "end": 118,
              "callee": {
                "type": "MemberExpression",
                "start": 91,
                "end": 116,
                "object": {
                  "type": "AwaitExpression",
                  "start": 92,
                  "end": 113,
                  "argument": {
                    "type": "ImportExpression",
                    "start": 98,
                    "end": 113,
                    "source": {
                      "type": "Literal",
                      "start": 105,
                      "end": 112,
                      "value": "inner",
                      "raw": "\"inner\""
                    },
                    "options": null
                  }
                },
                "property": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
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
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 28,
          "end": 29,
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exported": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "exportKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 37,
        "end": 49,
        "value": "./other.js",
        "raw": "\"./other.js\""
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
  "start": 19,
  "end": 73,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 19,
      "end": 44,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 26,
        "end": 44,
        "id": {
          "type": "Identifier",
          "start": 36,
          "end": 41,
          "name": "Thing",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "extends": [],
        "typeParameters": null,
        "body": {
          "type": "TSInterfaceBody",
          "start": 42,
          "end": 44,
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
      "start": 45,
      "end": 73,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 52,
        "end": 73,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 58,
            "end": 72,
            "id": {
              "type": "Identifier",
              "start": 58,
              "end": 72,
              "name": "x",
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 59,
                "end": 72,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 61,
                  "end": 72,
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 64,
                    "end": 72,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 67,
                      "end": 72,
                      "typeName": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 72,
                        "name": "Thing",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            "init": null,
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
