inferringAnyFunctionType3.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 75,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 58,
        "end": 75,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 64,
            "end": 73,
            "argument": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "p",
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
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 49,
          "end": 53,
          "decorators": [],
          "name": "p",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 50,
            "end": 53,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 52,
              "end": 53,
              "typeName": {
                "type": "Identifier",
                "start": 52,
                "end": 53,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 54,
        "end": 57,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 56,
          "end": 57,
          "typeName": {
            "type": "Identifier",
            "start": 56,
            "end": 57,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 48,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 47,
            "const": false,
            "constraint": {
              "type": "TSArrayType",
              "start": 21,
              "end": 47,
              "elementType": {
                "type": "TSFunctionType",
                "start": 22,
                "end": 44,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 23,
                    "end": 33,
                    "decorators": [],
                    "name": "p1",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 25,
                      "end": 33,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 27,
                        "end": 33
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 35,
                  "end": 44,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 38,
                    "end": 44
                  }
                }
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
      "type": "VariableDeclaration",
      "start": 77,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 81,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 81,
            "end": 82,
            "decorators": [],
            "name": "v",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 85,
            "end": 96,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 87,
                "end": 95,
                "elements": [
                  {
                    "type": "ArrowFunctionExpression",
                    "start": 88,
                    "end": 94,
                    "async": false,
                    "body": {
                      "type": "Identifier",
                      "start": 93,
                      "end": 94,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "expression": true,
                    "generator": false,
                    "id": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 88,
                        "end": 89,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 85,
              "end": 86,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
