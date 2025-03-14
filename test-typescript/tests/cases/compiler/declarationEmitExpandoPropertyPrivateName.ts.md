a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 59,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 14,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 14,
        "body": []
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 15,
      "end": 59,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 22,
        "end": 59,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 38,
          "end": 59,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 40,
              "end": 57,
              "argument": {
                "type": "TSAsExpression",
                "start": 47,
                "end": 56,
                "expression": {
                  "type": "Literal",
                  "start": 47,
                  "end": 51,
                  "raw": "null",
                  "value": null
                },
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 55,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "I",
                    "optional": false
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 31,
          "end": 32,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 34,
          "end": 37,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 36,
            "end": 37,
            "typeName": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "I",
              "optional": false
            }
          }
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
b.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 60,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 22,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 16,
        "end": 21,
        "raw": "\"./a\"",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 8,
          "end": 9,
          "imported": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 8,
            "end": 9,
            "decorators": [],
            "name": "f",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 24,
      "end": 46,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 31,
        "end": 46,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 44,
          "end": 46,
          "body": []
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 40,
          "end": 41,
          "decorators": [],
          "name": "q",
          "optional": false
        },
        "params": []
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExpressionStatement",
      "start": 47,
      "end": 59,
      "expression": {
        "type": "AssignmentExpression",
        "start": 47,
        "end": 58,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 47,
          "end": 52,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 48,
            "decorators": [],
            "name": "q",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 49,
            "end": 52,
            "decorators": [],
            "name": "val",
            "optional": false
          }
        },
        "right": {
          "type": "CallExpression",
          "start": 55,
          "end": 58,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 55,
            "end": 56,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "optional": false
        }
      }
    }
  ],
  "sourceType": "module"
}
```
