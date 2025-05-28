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
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 29,
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 28,
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
              "callee": {
                "type": "Identifier",
                "start": 20,
                "end": 26,
                "decorators": [],
                "name": "Symbol",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "definite": false
          }
        ],
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 31,
      "end": 100,
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "start": 38,
        "end": 100,
        "id": {
          "type": "Identifier",
          "start": 48,
          "end": 56,
          "decorators": [],
          "name": "TestSymb",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "start": 57,
          "end": 100,
          "body": [
            {
              "type": "TSCallSignatureDeclaration",
              "start": 61,
              "end": 70,
              "typeParameters": null,
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
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 73,
              "end": 98,
              "computed": true,
              "optional": false,
              "readonly": true,
              "key": {
                "type": "Identifier",
                "start": 83,
                "end": 87,
                "decorators": [],
                "name": "symb",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 88,
                "end": 97,
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 90,
                  "end": 97
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
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
          "local": {
            "type": "Identifier",
            "start": 9,
            "end": 13,
            "decorators": [],
            "name": "symb",
            "optional": false,
            "typeAnnotation": null
          },
          "importKind": "value"
        }
      ],
      "source": {
        "type": "Literal",
        "start": 21,
        "end": 30,
        "value": "./types",
        "raw": "\"./types\""
      },
      "phase": null,
      "attributes": [],
      "importKind": "value"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 82,
      "end": 168,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 89,
        "end": 168,
        "id": {
          "type": "Identifier",
          "start": 98,
          "end": 102,
          "decorators": [],
          "name": "test",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 105,
          "end": 168,
          "body": [
            {
              "type": "FunctionDeclaration",
              "start": 109,
              "end": 128,
              "id": {
                "type": "Identifier",
                "start": 118,
                "end": 123,
                "decorators": [],
                "name": "inner",
                "optional": false,
                "typeAnnotation": null
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 126,
                "end": 128,
                "body": []
              },
              "expression": false
            },
            {
              "type": "ExpressionStatement",
              "start": 131,
              "end": 150,
              "expression": {
                "type": "AssignmentExpression",
                "start": 131,
                "end": 149,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 131,
                  "end": 142,
                  "object": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 136,
                    "decorators": [],
                    "name": "inner",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 137,
                    "end": 141,
                    "decorators": [],
                    "name": "symb",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "right": {
                  "type": "Literal",
                  "start": 145,
                  "end": 149,
                  "value": true,
                  "raw": "true"
                }
              },
              "directive": null
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
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
