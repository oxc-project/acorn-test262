noStrictGenericChecks.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 156,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 38,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 9,
        "end": 37,
        "params": [
          {
            "type": "Identifier",
            "start": 16,
            "end": 20,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 17,
              "end": 20,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 19,
                "end": 20,
                "typeName": {
                  "type": "Identifier",
                  "start": 19,
                  "end": 20,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 22,
            "end": 26,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 26,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 25,
                "end": 26,
                "typeName": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 26,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 28,
          "end": 37,
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 31,
            "end": 37,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 35,
                "end": 36,
                "typeName": {
                  "type": "Identifier",
                  "start": 35,
                  "end": 36,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            ]
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 9,
          "end": 15,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 10,
              "end": 11,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 10,
                "end": 11,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 13,
              "end": 14,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 13,
                "end": 14,
                "decorators": [],
                "name": "U",
                "optional": false
              },
              "out": false
            }
          ]
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 39,
      "end": 74,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 44,
        "end": 45,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 48,
        "end": 73,
        "params": [
          {
            "type": "Identifier",
            "start": 52,
            "end": 56,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 56,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 55,
                "end": 56,
                "typeName": {
                  "type": "Identifier",
                  "start": 55,
                  "end": 56,
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "Identifier",
            "start": 58,
            "end": 62,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 59,
              "end": 62,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 61,
                "end": 62,
                "typeName": {
                  "type": "Identifier",
                  "start": 61,
                  "end": 62,
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 64,
          "end": 73,
          "typeAnnotation": {
            "type": "TSTupleType",
            "start": 67,
            "end": 73,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 68,
                "end": 69,
                "typeName": {
                  "type": "Identifier",
                  "start": 68,
                  "end": 69,
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              },
              {
                "type": "TSTypeReference",
                "start": 71,
                "end": 72,
                "typeName": {
                  "type": "Identifier",
                  "start": 71,
                  "end": 72,
                  "decorators": [],
                  "name": "S",
                  "optional": false
                }
              }
            ]
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 48,
          "end": 51,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 49,
              "end": 50,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 49,
                "end": 50,
                "decorators": [],
                "name": "S",
                "optional": false
              },
              "out": false
            }
          ]
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 76,
      "end": 155,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 99,
        "end": 155,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 105,
            "end": 111,
            "expression": {
              "type": "AssignmentExpression",
              "start": 105,
              "end": 110,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 105,
                "end": 106,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 109,
                "end": 110,
                "decorators": [],
                "name": "b",
                "optional": false
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 140,
            "end": 146,
            "expression": {
              "type": "AssignmentExpression",
              "start": 140,
              "end": 145,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 140,
                "end": 141,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 144,
                "end": 145,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 85,
        "end": 86,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 87,
          "end": 91,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 88,
            "end": 91,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 91,
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 93,
          "end": 97,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 94,
            "end": 97,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 96,
              "end": 97,
              "typeName": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "B",
                "optional": false
              }
            }
          }
        }
      ]
    }
  ],
  "sourceType": "script"
}
```
