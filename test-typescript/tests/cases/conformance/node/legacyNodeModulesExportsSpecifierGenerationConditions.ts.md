index.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 57,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 57,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 57,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 56,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 17,
              "end": 56,
              "async": true,
              "body": {
                "type": "CallExpression",
                "start": 29,
                "end": 56,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 29,
                  "end": 54,
                  "computed": false,
                  "object": {
                    "type": "AwaitExpression",
                    "start": 30,
                    "end": 51,
                    "argument": {
                      "type": "ImportExpression",
                      "start": 36,
                      "end": 51,
                      "options": null,
                      "source": {
                        "type": "Literal",
                        "start": 43,
                        "end": 50,
                        "raw": "\"inner\"",
                        "value": "inner"
                      }
                    }
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
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
  "start": 0,
  "end": 31,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 31,
      "attributes": [],
      "declaration": null,
      "exportKind": "value",
      "source": {
        "type": "Literal",
        "start": 18,
        "end": 30,
        "raw": "\"./other.js\"",
        "value": "./other.js"
      },
      "specifiers": [
        {
          "type": "ExportSpecifier",
          "start": 9,
          "end": 10,
          "exported": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "exportKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
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
  "start": 0,
  "end": 65,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 36,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 22,
        "end": 36,
        "raw": "\"./private.js\"",
        "value": "./private.js"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 14,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Thing",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 14,
            "decorators": [],
            "name": "Thing",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 37,
      "end": 65,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 44,
        "end": 65,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 50,
            "end": 64,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 50,
              "end": 64,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 51,
                "end": 64,
                "typeAnnotation": {
                  "type": "TSFunctionType",
                  "start": 53,
                  "end": 64,
                  "params": [],
                  "returnType": {
                    "type": "TSTypeAnnotation",
                    "start": 56,
                    "end": 64,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 59,
                      "end": 64,
                      "typeName": {
                        "type": "Identifier",
                        "start": 59,
                        "end": 64,
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
node_modules/inner/private.d.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 92,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 25,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 7,
        "end": 25,
        "body": {
          "type": "TSInterfaceBody",
          "start": 23,
          "end": 25,
          "body": []
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 17,
          "end": 22,
          "decorators": [],
          "name": "Thing",
          "optional": false
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
