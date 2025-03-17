__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 319,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 26,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "name": "Computed",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 16,
        "end": 25,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 19,
          "end": 25,
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 22,
            "end": 25
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 27,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 43,
        "name": "Mapper",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 43,
        "end": 46,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 44,
            "end": 45,
            "name": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "name": "R",
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
        "start": 47,
        "end": 184,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 53,
            "end": 105,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 53,
              "end": 73,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 54,
                  "end": 72,
                  "name": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 57,
                    "name": "Key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 66,
                    "end": 72
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 84,
                "name": "map",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 77,
                  "end": 84,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 79,
                    "end": 84,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 79,
                      "end": 82,
                      "typeName": {
                        "type": "Identifier",
                        "start": 79,
                        "end": 82,
                        "name": "Key",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 85,
              "end": 104,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 87,
                "end": 104,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 90,
                  "end": 98,
                  "name": {
                    "type": "Identifier",
                    "start": 90,
                    "end": 91,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 95,
                    "end": 98,
                    "typeName": {
                      "type": "Identifier",
                      "start": 95,
                      "end": 98,
                      "name": "Key",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 101,
                  "end": 102,
                  "typeName": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 102,
                    "name": "R",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 95,
                  "end": 98,
                  "typeName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 98,
                    "name": "Key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 110,
            "end": 182,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 110,
              "end": 146,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 111,
                  "end": 145,
                  "name": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 114,
                    "name": "Map",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 123,
                    "end": 145,
                    "typeName": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 129,
                      "name": "Record",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 129,
                      "end": 145,
                      "params": [
                        {
                          "type": "TSStringKeyword",
                          "start": 130,
                          "end": 136
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 138,
                          "end": 144
                        }
                      ]
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 147,
                "end": 155,
                "name": "map",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 150,
                  "end": 155,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 152,
                    "end": 155,
                    "typeName": {
                      "type": "Identifier",
                      "start": 152,
                      "end": 155,
                      "name": "Map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 156,
              "end": 181,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 158,
                "end": 181,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 161,
                  "end": 175,
                  "name": {
                    "type": "Identifier",
                    "start": 161,
                    "end": 162,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 166,
                    "end": 175,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 172,
                      "end": 175,
                      "typeName": {
                        "type": "Identifier",
                        "start": 172,
                        "end": 175,
                        "name": "Map",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 178,
                  "end": 179,
                  "typeName": {
                    "type": "Identifier",
                    "start": 178,
                    "end": 179,
                    "name": "R",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "optional": null,
                "readonly": null,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 166,
                  "end": 175,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 172,
                    "end": 175,
                    "typeName": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 175,
                      "name": "Map",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 185,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 195,
        "end": 212,
        "name": "NamespacedMappers",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 213,
        "end": 248,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 219,
            "end": 246,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 227,
              "name": "mapState",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 245,
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 235,
                  "name": "Mapper",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 235,
                  "end": 245,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 236,
                      "end": 244,
                      "typeName": {
                        "type": "Identifier",
                        "start": 236,
                        "end": 244,
                        "name": "Computed",
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 249,
      "end": 318,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 256,
        "end": 318,
        "id": {
          "type": "Identifier",
          "start": 273,
          "end": 296,
          "name": "createNamespacedHelpers",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "expression": false,
        "generator": false,
        "async": false,
        "params": [],
        "body": null,
        "declare": true,
        "typeParameters": null,
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 298,
          "end": 317,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 300,
            "end": 317,
            "typeName": {
              "type": "Identifier",
              "start": 300,
              "end": 317,
              "name": "NamespacedMappers",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        }
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
