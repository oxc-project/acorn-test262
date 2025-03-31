__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 108,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 33,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "name": "Generator",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 33,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 25,
            "end": 31,
            "typeParameters": null,
            "params": [],
            "returnType": {
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 34,
      "end": 108,
      "id": {
        "type": "Identifier",
        "start": 43,
        "end": 51,
        "name": "Generate",
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
          "start": 55,
          "end": 73,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 59,
            "end": 73,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 61,
              "end": 73,
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 70,
                "name": "Generator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 70,
                "end": 73,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 71,
                    "end": 72,
                    "typeName": {
                      "type": "Identifier",
                      "start": 71,
                      "end": 72,
                      "name": "U",
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
      "body": {
        "type": "BlockStatement",
        "start": 78,
        "end": 108,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 84,
            "end": 106,
            "argument": {
              "type": "CallExpression",
              "start": 91,
              "end": 105,
              "callee": {
                "type": "Identifier",
                "start": 91,
                "end": 99,
                "name": "Generate",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "name": "func",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 51,
        "end": 54,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 52,
            "end": 53,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "name": "U",
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
        "start": 74,
        "end": 77,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 76,
          "end": 77,
          "typeName": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
