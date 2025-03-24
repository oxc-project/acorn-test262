__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 22,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 22,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 7,
        "end": 22,
        "id": {
          "type": "Identifier",
          "start": 16,
          "end": 17,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": {
          "type": "BlockStatement",
          "start": 20,
          "end": 22,
          "body": []
        },
        "declare": false,
        "typeParameters": null,
        "returnType": null
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
  "end": 109,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 38,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 7,
        "end": 38,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 13,
            "end": 37,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "CallExpression",
              "start": 17,
              "end": 37,
              "callee": {
                "type": "Identifier",
                "start": 17,
                "end": 20,
                "name": "add",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "ImportExpression",
                  "start": 21,
                  "end": 36,
                  "source": {
                    "type": "Literal",
                    "start": 28,
                    "end": 35,
                    "value": "./sub",
                    "raw": "\"./sub\""
                  },
                  "options": null
                }
              ],
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
      "type": "ExportAllDeclaration",
      "start": 39,
      "end": 66,
      "exported": {
        "type": "Identifier",
        "start": 51,
        "end": 52,
        "name": "Q",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "source": {
        "type": "Literal",
        "start": 58,
        "end": 65,
        "value": "./sub",
        "raw": "\"./sub\""
      },
      "attributes": [],
      "exportKind": "value"
    },
    {
      "type": "TSDeclareFunction",
      "start": 67,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 84,
        "end": 87,
        "name": "add",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 91,
          "end": 104,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 92,
            "end": 104,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 94,
              "end": 104,
              "typeName": {
                "type": "Identifier",
                "start": 94,
                "end": 101,
                "name": "Promise",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 101,
                "end": 104,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 102,
                    "end": 103,
                    "typeName": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "name": "T",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 87,
        "end": 90,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 88,
            "end": 89,
            "name": {
              "type": "Identifier",
              "start": 88,
              "end": 89,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 105,
        "end": 108,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 107,
          "end": 108,
          "typeName": {
            "type": "Identifier",
            "start": 107,
            "end": 108,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
