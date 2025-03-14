recursiveTypes1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 194,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 59,
      "body": {
        "type": "TSInterfaceBody",
        "start": 38,
        "end": 59,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 43,
            "end": 48,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "X",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 44,
              "end": 47,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 46,
                "end": 47,
                "typeName": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 47,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 52,
            "end": 57,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 52,
              "end": 53,
              "decorators": [],
              "name": "Y",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
        "end": 16,
        "decorators": [],
        "name": "Entity",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 37,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 36,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 27,
              "end": 36,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 33,
                "end": 36,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 34,
                    "end": 35,
                    "typeName": {
                      "type": "Identifier",
                      "start": 34,
                      "end": 35,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 27,
                "end": 33,
                "decorators": [],
                "name": "Entity",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
      "type": "TSInterfaceDeclaration",
      "start": 61,
      "end": 132,
      "body": {
        "type": "TSInterfaceBody",
        "start": 117,
        "end": 132,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 120,
            "end": 130,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 120,
              "end": 121,
              "decorators": [],
              "name": "n",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 121,
              "end": 129,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 123,
                "end": 129
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 107,
          "end": 116,
          "expression": {
            "type": "Identifier",
            "start": 107,
            "end": 113,
            "decorators": [],
            "name": "Entity",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 113,
            "end": 116,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 114,
                "end": 115,
                "typeName": {
                  "type": "Identifier",
                  "start": 114,
                  "end": 115,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 71,
        "end": 77,
        "decorators": [],
        "name": "Person",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 98,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 97,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 88,
              "end": 97,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 94,
                "end": 97,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 96,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 96,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 88,
                "end": 94,
                "decorators": [],
                "name": "Person",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 134,
      "end": 193,
      "body": {
        "type": "TSInterfaceBody",
        "start": 178,
        "end": 193,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 181,
            "end": 191,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "s",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 182,
              "end": 190,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 184,
                "end": 190
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 161,
          "end": 177,
          "expression": {
            "type": "Identifier",
            "start": 161,
            "end": 167,
            "decorators": [],
            "name": "Person",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 167,
            "end": 177,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 168,
                "end": 176,
                "typeName": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 176,
                  "decorators": [],
                  "name": "Customer",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 144,
        "end": 152,
        "decorators": [],
        "name": "Customer",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
