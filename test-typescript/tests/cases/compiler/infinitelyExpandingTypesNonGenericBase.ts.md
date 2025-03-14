__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 290,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 52,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 23,
        "end": 52,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 29,
            "end": 50,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 37,
              "decorators": [],
              "name": "property",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 39,
                "end": 49,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 46,
                  "end": 49,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 47,
                      "end": 48,
                      "typeName": {
                        "type": "Identifier",
                        "start": 47,
                        "end": 48,
                        "decorators": [],
                        "name": "V",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 39,
                  "end": 46,
                  "decorators": [],
                  "name": "Options",
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
        "start": 6,
        "end": 19,
        "decorators": [],
        "name": "Functionality",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
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
      "type": "ClassDeclaration",
      "start": 54,
      "end": 68,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 65,
        "end": 68,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 60,
        "end": 64,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 70,
      "end": 139,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 94,
        "end": 139,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 100,
            "end": 137,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 100,
              "end": 107,
              "decorators": [],
              "name": "options",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 136,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 136,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 116,
                  "end": 136,
                  "params": [
                    {
                      "type": "TSArrayType",
                      "start": 117,
                      "end": 135,
                      "elementType": {
                        "type": "TSTypeReference",
                        "start": 117,
                        "end": 133,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 130,
                          "end": 133,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 131,
                              "end": 132,
                              "typeName": {
                                "type": "Identifier",
                                "start": 131,
                                "end": 132,
                                "decorators": [],
                                "name": "T",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 117,
                          "end": 130,
                          "decorators": [],
                          "name": "Functionality",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 116,
                  "decorators": [],
                  "name": "Options",
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
        "start": 76,
        "end": 77,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 89,
        "end": 93,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 77,
        "end": 80,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 78,
            "end": 79,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 78,
              "end": 79,
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
      "start": 141,
      "end": 194,
      "body": {
        "type": "TSInterfaceBody",
        "start": 166,
        "end": 194,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 172,
            "end": 192,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 179,
              "decorators": [],
              "name": "Options",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 179,
              "end": 191,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 181,
                "end": 191,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 188,
                  "end": 191,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 189,
                      "end": 190,
                      "typeName": {
                        "type": "Identifier",
                        "start": 189,
                        "end": 190,
                        "decorators": [],
                        "name": "T",
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
                  "name": "Options",
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
        "start": 151,
        "end": 162,
        "decorators": [],
        "name": "OptionsBase",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 162,
        "end": 165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 163,
            "end": 164,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 163,
              "end": 164,
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
      "start": 196,
      "end": 243,
      "body": {
        "type": "TSInterfaceBody",
        "start": 240,
        "end": 243,
        "body": []
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 225,
          "end": 239,
          "expression": {
            "type": "Identifier",
            "start": 225,
            "end": 236,
            "decorators": [],
            "name": "OptionsBase",
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 236,
            "end": 239,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 237,
                "end": 238,
                "typeName": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 238,
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            ]
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 206,
        "end": 213,
        "decorators": [],
        "name": "Options",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 213,
        "end": 216,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 214,
            "end": 215,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 214,
              "end": 215,
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
      "start": 246,
      "end": 282,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 279,
        "end": 282,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 256,
        "decorators": [],
        "name": "o",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 257,
          "end": 277,
          "decorators": [],
          "name": "type",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 261,
            "end": 277,
            "typeAnnotation": {
              "type": "TSConstructorType",
              "start": 263,
              "end": 277,
              "abstract": false,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 270,
                "end": 277,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 273,
                  "end": 277,
                  "typeName": {
                    "type": "Identifier",
                    "start": 273,
                    "end": 277,
                    "decorators": [],
                    "name": "Base",
                    "optional": false
                  }
                }
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 284,
      "end": 289,
      "expression": {
        "type": "CallExpression",
        "start": 284,
        "end": 288,
        "arguments": [
          {
            "type": "Identifier",
            "start": 286,
            "end": 287,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 284,
          "end": 285,
          "decorators": [],
          "name": "o",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
