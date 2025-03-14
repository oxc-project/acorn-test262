typeArgumentInferenceTransitiveConstraints.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 199,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 97,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 72,
        "end": 97,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 78,
            "end": 95,
            "argument": {
              "type": "ArrayExpression",
              "start": 85,
              "end": 94,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 86,
                  "end": 87,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 89,
                  "end": 90,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 92,
                  "end": 93,
                  "decorators": [],
                  "name": "c",
                  "optional": false
                }
              ]
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
        "end": 11,
        "decorators": [],
        "name": "fn",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 54,
          "end": 58,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 55,
            "end": 58,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 57,
              "end": 58,
              "typeName": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 60,
          "end": 64,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 61,
            "end": 64,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 63,
              "end": 64,
              "typeName": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 66,
          "end": 70,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 67,
            "end": 70,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 69,
              "end": 70,
              "typeName": {
                "type": "Identifier",
                "start": 69,
                "end": 70,
                "decorators": [],
                "name": "C",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 53,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 26,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 22,
              "end": 26,
              "typeName": {
                "type": "Identifier",
                "start": 22,
                "end": 26,
                "decorators": [],
                "name": "Date",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 28,
            "end": 39,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 38,
              "end": 39,
              "typeName": {
                "type": "Identifier",
                "start": 38,
                "end": 39,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 28,
              "end": 29,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 41,
            "end": 52,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 51,
              "end": 52,
              "typeName": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "C",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 99,
      "end": 146,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 103,
          "end": 145,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 103,
            "end": 104,
            "decorators": [],
            "name": "d",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 107,
            "end": 145,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 110,
                "end": 120,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 118,
                  "decorators": [],
                  "name": "Date",
                  "optional": false
                }
              },
              {
                "type": "NewExpression",
                "start": 122,
                "end": 132,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 126,
                  "end": 130,
                  "decorators": [],
                  "name": "Date",
                  "optional": false
                }
              },
              {
                "type": "NewExpression",
                "start": 134,
                "end": 144,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 138,
                  "end": 142,
                  "decorators": [],
                  "name": "Date",
                  "optional": false
                }
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 107,
              "end": 109,
              "decorators": [],
              "name": "fn",
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
      "type": "VariableDeclaration",
      "start": 147,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 151,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 151,
            "end": 160,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 152,
              "end": 160,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 154,
                "end": 160,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 154,
                  "end": 158,
                  "typeName": {
                    "type": "Identifier",
                    "start": 154,
                    "end": 158,
                    "decorators": [],
                    "name": "Date",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
