a.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 82,
  "body": [
    {
      "type": "ExportDefaultDeclaration",
      "start": 0,
      "end": 45,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 15,
        "end": 45,
        "body": {
          "type": "TSInterfaceBody",
          "start": 27,
          "end": 45,
          "body": [
            {
              "type": "TSPropertySignature",
              "start": 29,
              "end": 43,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 29,
                "end": 34,
                "decorators": [],
                "name": "value",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 34,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 36,
                  "end": 42
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 25,
          "end": 26,
          "decorators": [],
          "name": "A",
          "optional": false
        }
      },
      "exportKind": "value"
    },
    {
      "type": "VariableDeclaration",
      "start": 47,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 55,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 57,
      "end": 81,
      "expression": {
        "type": "CallExpression",
        "start": 57,
        "end": 80,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 57,
          "end": 78,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 57,
            "end": 64,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 59,
              "end": 64,
              "decorators": [],
              "name": "value",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 65,
            "end": 78,
            "decorators": [],
            "name": "toExponential",
            "optional": false
          }
        },
        "optional": false
      }
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
  "end": 56,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 20,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 14,
        "end": 19,
        "raw": "'./a'",
        "value": "./a"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 8,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 8,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 22,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 26,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 26,
            "end": 30,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 30,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 29,
                "end": 30,
                "typeName": {
                  "type": "Identifier",
                  "start": 29,
                  "end": 30,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 32,
      "end": 56,
      "expression": {
        "type": "CallExpression",
        "start": 32,
        "end": 55,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 32,
          "end": 53,
          "computed": false,
          "object": {
            "type": "MemberExpression",
            "start": 32,
            "end": 39,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 32,
              "end": 33,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 34,
              "end": 39,
              "decorators": [],
              "name": "value",
              "optional": false
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 40,
            "end": 53,
            "decorators": [],
            "name": "toExponential",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "module"
}
```
