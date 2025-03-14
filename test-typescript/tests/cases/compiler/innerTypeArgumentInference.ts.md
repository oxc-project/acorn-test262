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
      "start": 34,
      "end": 108,
      "async": false,
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
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 100,
                  "end": 104,
                  "decorators": [],
                  "name": "func",
                  "optional": false
                }
              ],
              "callee": {
                "type": "Identifier",
                "start": 91,
                "end": 99,
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
        "start": 43,
        "end": 51,
        "decorators": [],
        "name": "Generate",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 55,
          "end": 73,
          "decorators": [],
          "name": "func",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 59,
            "end": 73,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 61,
              "end": 73,
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
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 61,
                "end": 70,
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
            "decorators": [],
            "name": "U",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 51,
        "end": 54,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 52,
            "end": 53,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
