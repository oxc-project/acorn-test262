parserGenericsInInterfaceDeclaration1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 97,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 97,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 97,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 20,
            "end": 28,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "v",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 27,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 24,
                  "end": 27,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 25,
                      "end": 26,
                      "typeName": {
                        "type": "Identifier",
                        "start": 25,
                        "end": 26,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSMethodSignature",
            "start": 32,
            "end": 43,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 34,
              "decorators": [],
              "name": "f1",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [],
            "readonly": false,
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 42,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 41,
                "end": 42,
                "typeName": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 42,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 34,
              "end": 37,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 35,
                  "end": 36,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
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
            "type": "TSMethodSignature",
            "start": 47,
            "end": 59,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 49,
              "decorators": [],
              "name": "f2",
              "optional": false
            },
            "kind": "method",
            "optional": true,
            "params": [],
            "readonly": false,
            "returnType": {
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
                  "name": "T",
                  "optional": false
                }
              }
            },
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 50,
              "end": 53,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 51,
                  "end": 52,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
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
            "type": "TSCallSignatureDeclaration",
            "start": 63,
            "end": 75,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 68,
              "end": 74,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 70,
                "end": 74
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 63,
              "end": 66,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 64,
                  "end": 65,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
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
            "type": "TSConstructSignatureDeclaration",
            "start": 79,
            "end": 95,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 88,
              "end": 94,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 90,
                "end": 94
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 83,
              "end": 86,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 84,
                  "end": 85,
                  "const": false,
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "decorators": [],
                    "name": "T",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "decorators": [],
        "name": "I",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
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
