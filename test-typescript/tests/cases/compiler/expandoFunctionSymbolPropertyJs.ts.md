__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 101,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 29,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 28,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 17,
              "decorators": [],
              "name": "symb",
              "optional": false,
              "typeAnnotation": null
            },
            "init": {
              "type": "CallExpression",
              "start": 20,
              "end": 28,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 20,
                "end": 26,
                "decorators": [],
                "name": "Symbol",
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
      "start": 31,
      "end": 100,
      "attributes": [],
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 38,
        "end": 100,
        "body": {
          "type": "TSInterfaceBody",
          "start": 57,
          "end": 100,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 61,
              "end": 70,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 63,
                "end": 69,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 65,
                  "end": 69
                }
              },
              "typeParameters": null
            },
            {
              "type": "TSPropertySignature",
              "start": 73,
              "end": 98,
              "accessibility": null,
              "computed": true,
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "decorators": [],
                "name": "symb",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": true,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 88,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 90,
                  "end": 97
                }
              }
            }
          ]
        },
        "declare": false,
        "extends": [],
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 56,
          "decorators": [],
          "name": "TestSymb",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null
      },
      "exportKind": "type",
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
  "end": 168,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 31,
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "raw": "\"./types\"",
        "value": "./types"
      },
      "specifiers": [
        {
          "type": "ImportSpecifier",
          "start": 9,
          "end": 13,
          "imported": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "symb",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value",
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "symb",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ],
      "phase": null,
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 168,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 89,
        "end": 168,
        "async": false,
        "body": {
          "type": "BlockStatement",
          "start": 105,
          "end": 168,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 109,
              "end": 128,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 128,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 123,
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null
              },
              "params": [],
              "returnType": null,
              "typeParameters": null
            },
            {
              "type": "ExpressionStatement",
              "start": 131,
              "end": 150,
              "directive": null,
              "expression": {
                "type": "AssignmentExpression",
                "start": 131,
                "end": 149,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 131,
                  "end": 142,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 136,
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 141,
                    "decorators": [],
                    "name": "symb",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 145,
                  "end": 149,
                  "raw": "true",
                  "value": true
                }
              }
            },
            {
              "type": "ReturnStatement",
              "start": 153,
              "end": 166,
              "argument": {
                "type": "Identifier",
                "start": 160,
                "end": 165,
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 98,
          "end": 102,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "params": [],
        "returnType": null,
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
