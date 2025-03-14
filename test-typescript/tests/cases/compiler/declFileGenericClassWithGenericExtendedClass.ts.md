__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 197,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 32,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 32,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 30,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 24,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 24,
              "end": 29,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 26,
                "end": 29,
                "typeName": {
                  "type": "Identifier",
                  "start": 26,
                  "end": 29,
                  "decorators": [],
                  "name": "Baz",
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
        "end": 14,
        "decorators": [],
        "name": "IFoo",
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 33,
      "end": 50,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 47,
        "end": 50,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
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
      "start": 51,
      "end": 87,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 87,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 57,
        "end": 64,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 76,
        "end": 80,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 80,
        "end": 83,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 81,
            "end": 82,
            "typeName": {
              "type": "Identifier",
              "start": 81,
              "end": 82,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 64,
        "end": 67,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 65,
            "end": 66,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
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
      "start": 88,
      "end": 134,
      "body": {
        "type": "TSInterfaceBody",
        "start": 106,
        "end": 134,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 112,
            "end": 132,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 112,
              "end": 119,
              "decorators": [],
              "name": "derived",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 119,
              "end": 131,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 121,
                "end": 131,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 128,
                  "end": 131,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 129,
                      "end": 130,
                      "typeName": {
                        "type": "Identifier",
                        "start": 129,
                        "end": 130,
                        "decorators": [],
                        "name": "T",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 121,
                  "end": 128,
                  "decorators": [],
                  "name": "Derived",
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
        "start": 98,
        "end": 102,
        "decorators": [],
        "name": "IBar",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 102,
        "end": 105,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 103,
            "end": 104,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 103,
              "end": 104,
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
      "start": 135,
      "end": 196,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 166,
        "end": 196,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 172,
            "end": 194,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 179,
              "decorators": [],
              "name": "derived",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 193,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 193,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 188,
                  "end": 193,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 189,
                      "end": 192,
                      "typeName": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 192,
                        "decorators": [],
                        "name": "Baz",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 188,
                  "decorators": [],
                  "name": "Derived",
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
        "start": 141,
        "end": 144,
        "decorators": [],
        "name": "Baz",
        "optional": false
      },
      "implements": [
        {
          "type": "TSClassImplements",
          "start": 156,
          "end": 165,
          "expression": {
            "type": "Identifier",
            "start": 156,
            "end": 160,
            "decorators": [],
            "name": "IBar",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 160,
            "end": 165,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 161,
                "end": 164,
                "typeName": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 164,
                  "decorators": [],
                  "name": "Baz",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "superClass": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
