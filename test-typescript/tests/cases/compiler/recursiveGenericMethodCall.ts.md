recursiveGenericMethodCall.ts
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
      "body": {
        "type": "TSInterfaceBody",
        "start": 23,
        "end": 33,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 25,
            "end": 31,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 19,
        "decorators": [],
        "name": "Generator",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 35,
      "end": 109,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "decorators": [],
                  "name": "func",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 92,
                "end": 100,
                "decorators": [],
                "name": "Generate",
                "optional": false
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 52,
        "decorators": [],
        "name": "Generate",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 56,
          "end": 74,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 60,
            "end": 74,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 62,
              "end": 74,
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
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 62,
                "end": 71,
                "decorators": [],
                "name": "Generator",
                "optional": false
              }
            }
          }
        }
      ],
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
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 52,
        "end": 55,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 53,
            "end": 54,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 53,
              "end": 54,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
