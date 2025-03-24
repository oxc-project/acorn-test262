__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 14,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 13,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "v",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 21,
              "end": 27,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 23,
                "end": 27,
                "typeName": {
                  "type": "Identifier",
                  "start": 23,
                  "end": 24,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                        "name": "T",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 32,
            "end": 43,
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 34,
              "name": "f1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 34,
              "end": 37,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 35,
                  "end": 36,
                  "name": {
                    "type": "Identifier",
                    "start": 35,
                    "end": 36,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 47,
            "end": 59,
            "key": {
              "type": "Identifier",
              "start": 47,
              "end": 49,
              "name": "f2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": true,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 50,
              "end": 53,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 51,
                  "end": 52,
                  "name": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [],
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 63,
            "end": 75,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 63,
              "end": 66,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 64,
                  "end": 65,
                  "name": {
                    "type": "Identifier",
                    "start": 64,
                    "end": 65,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
            }
          },
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 79,
            "end": 95,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 83,
              "end": 86,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 84,
                  "end": 85,
                  "name": {
                    "type": "Identifier",
                    "start": 84,
                    "end": 85,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
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
            }
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
