substituteReturnTypeSatisfiesConstraint.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 143,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 23,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "M",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 9,
        "end": 22,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 11,
            "end": 20,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "p",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 12,
              "end": 20,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 14,
                "end": 20
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 24,
      "end": 48,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 29,
        "end": 30,
        "decorators": [],
        "name": "O",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 33,
        "end": 47,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 45,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 35,
              "end": 36,
              "decorators": [],
              "name": "m",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 45,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 38,
                "end": 45,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 41,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 44,
                    "end": 45,
                    "typeName": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "decorators": [],
                      "name": "M",
                      "optional": false
                    }
                  }
                }
              }
            }
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 49,
      "end": 73,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 55,
        "decorators": [],
        "name": "X",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 71,
        "end": 72,
        "typeName": {
          "type": "Identifier",
          "start": 71,
          "end": 72,
          "decorators": [],
          "name": "T",
          "optional": false
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 55,
        "end": 68,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 56,
            "end": 67,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 66,
              "end": 67,
              "typeName": {
                "type": "Identifier",
                "start": 66,
                "end": 67,
                "decorators": [],
                "name": "M",
                "optional": false
              }
            },
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
      "type": "TSTypeAliasDeclaration",
      "start": 74,
      "end": 132,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 79,
        "end": 82,
        "decorators": [],
        "name": "FFG",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 88,
        "end": 131,
        "checkType": {
          "type": "TSTypeReference",
          "start": 88,
          "end": 89,
          "typeName": {
            "type": "Identifier",
            "start": 88,
            "end": 89,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 98,
          "end": 99,
          "typeName": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "O",
            "optional": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 126,
          "end": 131
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 102,
          "end": 123,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 103,
            "end": 123,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 104,
                "end": 122,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 114,
                  "end": 122,
                  "params": [
                    {
                      "type": "TSIndexedAccessType",
                      "start": 115,
                      "end": 121,
                      "indexType": {
                        "type": "TSLiteralType",
                        "start": 117,
                        "end": 120,
                        "literal": {
                          "type": "Literal",
                          "start": 117,
                          "end": 120,
                          "raw": "'m'",
                          "value": "m"
                        }
                      },
                      "objectType": {
                        "type": "TSTypeReference",
                        "start": 115,
                        "end": 116,
                        "typeName": {
                          "type": "Identifier",
                          "start": 115,
                          "end": 116,
                          "decorators": [],
                          "name": "T",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 104,
                  "end": 114,
                  "decorators": [],
                  "name": "ReturnType",
                  "optional": false
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 102,
            "end": 103,
            "decorators": [],
            "name": "X",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 82,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 83,
            "end": 84,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 83,
              "end": 84,
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
