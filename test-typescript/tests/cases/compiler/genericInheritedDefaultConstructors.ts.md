genericInheritedDefaultConstructors.ts
```json
{
  "type": "Program",
  "start": 20,
  "end": 210,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 20,
      "end": 94,
      "body": {
        "type": "TSInterfaceBody",
        "start": 45,
        "end": 94,
        "body": [
          {
            "type": "TSConstructSignatureDeclaration",
            "start": 51,
            "end": 74,
            "params": [
              {
                "type": "RestElement",
                "start": 55,
                "end": 69,
                "argument": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 62,
                  "decorators": [],
                  "name": "args",
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 62,
                  "end": 69,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 64,
                    "end": 69,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 64,
                      "end": 67
                    }
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 70,
              "end": 73,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 72,
                "end": 73,
                "typeName": {
                  "type": "Identifier",
                  "start": 72,
                  "end": 73,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 79,
            "end": 92,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 79,
              "end": 88,
              "decorators": [],
              "name": "prototype",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
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
        "start": 30,
        "end": 41,
        "decorators": [],
        "name": "Constructor",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 41,
        "end": 44,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 42,
            "end": 43,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 42,
              "end": 43,
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
      "type": "ClassDeclaration",
      "start": 96,
      "end": 116,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 107,
        "end": 116,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 109,
            "end": 114,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 109,
              "end": 110,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 113,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 112,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 112,
                  "end": 113,
                  "decorators": [],
                  "name": "U",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 103,
        "end": 106,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 104,
            "end": 105,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 104,
              "end": 105,
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
      "type": "ClassDeclaration",
      "start": 117,
      "end": 150,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 141,
        "end": 150,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 148,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 144,
              "end": 147,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 146,
                "end": 147,
                "typeName": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 147,
                  "decorators": [],
                  "name": "V",
                  "optional": false
                }
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 123,
        "end": 124,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 136,
        "end": 137,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 137,
        "end": 140,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 138,
            "end": 139,
            "typeName": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "decorators": [],
              "name": "V",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 124,
        "end": 127,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 125,
            "end": 126,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 125,
              "end": 126,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 151,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 155,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 155,
            "end": 180,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 180,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 157,
                "end": 180,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 168,
                  "end": 180,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 169,
                      "end": 179,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 170,
                        "end": 179,
                        "params": [
                          {
                            "type": "TSBooleanKeyword",
                            "start": 171,
                            "end": 178
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 169,
                        "end": 170,
                        "decorators": [],
                        "name": "B",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 157,
                  "end": 168,
                  "decorators": [],
                  "name": "Constructor",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 183,
            "end": 184,
            "decorators": [],
            "name": "B",
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
