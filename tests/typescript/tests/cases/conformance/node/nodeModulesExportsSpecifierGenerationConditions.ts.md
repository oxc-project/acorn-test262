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
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 33
          },
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "Thing",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 33
          },
          "importKind": "value",
          "start": 28,
          "end": 33
        }
      ],
      "source": {
        "type": "Literal",
        "value": "inner/other.js",
        "raw": "\"inner/other.js\"",
        "start": 41,
        "end": 57
      },
      "phase": null,
      "attributes": [],
      "importKind": "value",
      "start": 19,
      "end": 58
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 87,
              "end": 88
            },
            "init": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "AwaitExpression",
                  "argument": {
                    "type": "ImportExpression",
                    "source": {
                      "type": "Literal",
                      "value": "inner",
                      "raw": "\"inner\"",
                      "start": 105,
                      "end": 112
                    },
                    "options": null,
                    "phase": null,
                    "start": 98,
                    "end": 113
                  },
                  "start": 92,
                  "end": 113
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 115,
                  "end": 116
                },
                "optional": false,
                "computed": false,
                "start": 91,
                "end": 116
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 91,
              "end": 118
            },
            "definite": false,
            "start": 87,
            "end": 118
          }
        ],
        "declare": false,
        "start": 81,
        "end": 119
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 74,
      "end": 119
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 119
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": null,
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "local": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "exported": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 28,
            "end": 29
          },
          "exportKind": "value",
          "start": 28,
          "end": 29
        }
      ],
      "source": {
        "type": "Literal",
        "value": "./other.js",
        "raw": "\"./other.js\"",
        "start": 37,
        "end": 49
      },
      "exportKind": "value",
      "attributes": [],
      "start": 19,
      "end": 50
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 50
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Thing",
          "optional": false,
          "typeAnnotation": null,
          "start": 36,
          "end": 41
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [],
          "start": 42,
          "end": 44
        },
        "declare": false,
        "start": 26,
        "end": 44
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 19,
      "end": 44
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
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "typeParameters": null,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Thing",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 67,
                        "end": 72
                      },
                      "typeArguments": null,
                      "start": 67,
                      "end": 72
                    },
                    "start": 64,
                    "end": 72
                  },
                  "start": 61,
                  "end": 72
                },
                "start": 59,
                "end": 72
              },
              "start": 58,
              "end": 72
            },
            "init": null,
            "definite": false,
            "start": 58,
            "end": 72
          }
        ],
        "declare": false,
        "start": 52,
        "end": 73
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 45,
      "end": 73
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 19,
  "end": 73
}
```
