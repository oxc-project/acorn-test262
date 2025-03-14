index.ts
```json
{
  "type": "Program",
  "start": 19,
  "end": 110,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 19,
      "end": 55,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 41,
        "end": 54,
        "raw": "\"inner/other\"",
        "value": "inner/other"
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
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 33,
            "decorators": [],
            "name": "Thing",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 56,
      "end": 110,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 63,
        "end": 110,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 69,
            "end": 109,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 69,
              "end": 70,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 73,
              "end": 109,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 73,
                "end": 107,
                "computed": false,
                "object": {
                  "type": "AwaitExpression",
                  "start": 74,
                  "end": 104,
                  "argument": {
                    "type": "ImportExpression",
                    "start": 80,
                    "end": 104,
                    "options": null,
                    "source": {
                      "type": "Literal",
                      "start": 87,
                      "end": 103,
                      "raw": "\"inner/index.js\"",
                      "value": "inner/index.js"
                    }
                  }
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 106,
                  "end": 107,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "optional": false
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
  "sourceType": "module"
}
```
node_modules/inner/index.d.ts
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
        "value": "./other.js"
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
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 28,
            "end": 29,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        }
      ]
    }
  ],
  "sourceType": "module"
}
```
node_modules/inner/other.d.ts
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
          "optional": false
        }
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
                      "typeName": {
                        "type": "Identifier",
                        "start": 67,
                        "end": 72,
                        "decorators": [],
                        "name": "Thing",
                        "optional": false
                      }
                    }
                  }
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
  "sourceType": "module"
}
```
