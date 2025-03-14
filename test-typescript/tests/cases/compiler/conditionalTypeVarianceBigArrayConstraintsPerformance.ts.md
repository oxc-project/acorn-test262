conditionalTypeVarianceBigArrayConstraintsPerformance.ts
```json
{
  "type": "Program",
  "start": 45,
  "end": 224,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 45,
      "end": 152,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 50,
        "end": 55,
        "decorators": [],
        "name": "Stuff",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 65,
        "end": 151,
        "checkType": {
          "type": "TSTypeReference",
          "start": 65,
          "end": 66,
          "typeName": {
            "type": "Identifier",
            "start": 65,
            "end": 66,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeOperator",
          "start": 75,
          "end": 102,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 81,
            "end": 102,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 81,
              "end": 102,
              "left": {
                "type": "Identifier",
                "start": 81,
                "end": 84,
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 85,
                "end": 102,
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false
              }
            }
          }
        },
        "falseType": {
          "type": "TSAnyKeyword",
          "start": 148,
          "end": 151
        },
        "trueType": {
          "type": "TSIndexedAccessType",
          "start": 113,
          "end": 137,
          "indexType": {
            "type": "TSTypeReference",
            "start": 135,
            "end": 136,
            "typeName": {
              "type": "Identifier",
              "start": 135,
              "end": 136,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 113,
            "end": 134,
            "typeName": {
              "type": "TSQualifiedName",
              "start": 113,
              "end": 134,
              "left": {
                "type": "Identifier",
                "start": 113,
                "end": 116,
                "decorators": [],
                "name": "JSX",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 117,
                "end": 134,
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false
              }
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 55,
        "end": 58,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 57,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 56,
              "end": 57,
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
      "start": 154,
      "end": 224,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 199,
        "end": 224,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 205,
            "end": 213,
            "expression": {
              "type": "AssignmentExpression",
              "start": 205,
              "end": 212,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 205,
                "end": 207,
                "decorators": [],
                "name": "p1",
                "optional": false
              },
              "right": {
                "type": "Identifier",
                "start": 210,
                "end": 212,
                "decorators": [],
                "name": "p2",
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
        "start": 163,
        "end": 164,
        "decorators": [],
        "name": "F",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 171,
          "end": 183,
          "decorators": [],
          "name": "p1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 183,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 183,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 180,
                "end": 183,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 181,
                    "end": 182,
                    "typeName": {
                      "type": "Identifier",
                      "start": 181,
                      "end": 182,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 180,
                "decorators": [],
                "name": "Stuff",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 185,
          "end": 197,
          "decorators": [],
          "name": "p2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 187,
            "end": 197,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 189,
              "end": 197,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 194,
                "end": 197,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 195,
                    "end": 196,
                    "typeName": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 189,
                "end": 194,
                "decorators": [],
                "name": "Stuff",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 164,
        "end": 170,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 165,
            "end": 166,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 165,
              "end": 166,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 168,
            "end": 169,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 168,
              "end": 169,
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
  "sourceType": "script"
}
```
