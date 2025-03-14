constraintPropagationThroughReturnTypes.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 110,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 38,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 38,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 27,
            "end": 36,
            "argument": {
              "type": "Identifier",
              "start": 34,
              "end": 35,
              "decorators": [],
              "name": "x",
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
        "name": "g",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 18,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 17,
              "end": 18,
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
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
        "start": 19,
        "end": 22,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 21,
          "end": 22,
          "typeName": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
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
      "type": "FunctionDeclaration",
      "start": 41,
      "end": 109,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 85,
        "end": 109,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 89,
            "end": 102,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 93,
                "end": 101,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 93,
                  "end": 94,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "init": {
                  "type": "CallExpression",
                  "start": 97,
                  "end": 101,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    }
                  ],
                  "callee": {
                    "type": "Identifier",
                    "start": 97,
                    "end": 98,
                    "decorators": [],
                    "name": "g",
                    "optional": false
                  },
                  "optional": false
                }
              }
            ],
            "declare": false,
            "kind": "var"
          },
          {
            "type": "ExpressionStatement",
            "start": 105,
            "end": 107,
            "expression": {
              "type": "Identifier",
              "start": 105,
              "end": 106,
              "decorators": [],
              "name": "y",
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
        "start": 50,
        "end": 51,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 79,
          "end": 83,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 80,
            "end": 83,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 82,
              "end": 83,
              "typeName": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "decorators": [],
                "name": "S",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 51,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 52,
            "end": 77,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 62,
              "end": 77,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 64,
                  "end": 75,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 67,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 67,
                    "end": 75,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 69,
                      "end": 75
                    }
                  }
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "S",
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
