__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
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
      "start": 35,
      "end": 109,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 52,
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
          "start": 56,
          "end": 74,
          "name": "func",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 74,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 62,
              "end": 74,
              "typeName": {
                "type": "Identifier",
                "start": 62,
                "end": 71,
                "name": "Generator",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 71,
                "end": 74,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 72,
                    "end": 73,
                    "typeName": {
                      "type": "Identifier",
                      "start": 72,
                      "end": 73,
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
      "body": {
        "type": "BlockStatement",
        "start": 79,
        "end": 109,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 85,
            "end": 107,
            "argument": {
              "type": "CallExpression",
              "start": 92,
              "end": 106,
              "callee": {
                "type": "Identifier",
                "start": 92,
                "end": 100,
                "name": "Generate",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
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
        "start": 52,
        "end": 55,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 53,
            "end": 54,
            "name": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
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
        "start": 75,
        "end": 78,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 77,
          "end": 78,
          "typeName": {
            "type": "Identifier",
            "start": 77,
            "end": 78,
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
  "sourceType": "script",
  "hashbang": null
}
```
