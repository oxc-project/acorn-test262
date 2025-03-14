/helper.d.ts
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
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 13,
        "decorators": [],
        "name": "Computed",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSFunctionType",
        "start": 16,
        "end": 25,
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
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 27,
      "end": 184,
      "body": {
        "type": "TSInterfaceBody",
        "start": 47,
        "end": 184,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 53,
            "end": 105,
            "params": [
              {
                "type": "Identifier",
                "start": 74,
                "end": 84,
                "decorators": [],
                "name": "map",
                "optional": false,
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
                        "decorators": [],
                        "name": "Key",
                        "optional": false
                      }
                    }
                  }
                }
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
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 95,
                  "end": 98,
                  "typeName": {
                    "type": "Identifier",
                    "start": 95,
                    "end": 98,
                    "decorators": [],
                    "name": "Key",
                    "optional": false
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 90,
                  "end": 91,
                  "decorators": [],
                  "name": "K",
                  "optional": false
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
                    "decorators": [],
                    "name": "R",
                    "optional": false
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 53,
              "end": 73,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 54,
                  "end": 72,
                  "const": false,
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 66,
                    "end": 72
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 54,
                    "end": 57,
                    "decorators": [],
                    "name": "Key",
                    "optional": false
                  },
                  "out": false
                }
              ]
            }
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 110,
            "end": 182,
            "params": [
              {
                "type": "Identifier",
                "start": 147,
                "end": 155,
                "decorators": [],
                "name": "map",
                "optional": false,
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
                      "decorators": [],
                      "name": "Map",
                      "optional": false
                    }
                  }
                }
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
                      "decorators": [],
                      "name": "Map",
                      "optional": false
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 161,
                  "end": 162,
                  "decorators": [],
                  "name": "K",
                  "optional": false
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
                    "decorators": [],
                    "name": "R",
                    "optional": false
                  }
                }
              }
            },
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 110,
              "end": 146,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 111,
                  "end": 145,
                  "const": false,
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 123,
                    "end": 145,
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
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 123,
                      "end": 129,
                      "decorators": [],
                      "name": "Record",
                      "optional": false
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 111,
                    "end": 114,
                    "decorators": [],
                    "name": "Map",
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
        "start": 37,
        "end": 43,
        "decorators": [],
        "name": "Mapper",
        "optional": false
      },
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
              "name": "R",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 185,
      "end": 248,
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
            "key": {
              "type": "Identifier",
              "start": 219,
              "end": 227,
              "decorators": [],
              "name": "mapState",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 227,
              "end": 245,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 229,
                "end": 245,
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
                        "decorators": [],
                        "name": "Computed",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 229,
                  "end": 235,
                  "decorators": [],
                  "name": "Mapper",
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
        "start": 195,
        "end": 212,
        "decorators": [],
        "name": "NamespacedMappers",
        "optional": false
      }
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 249,
      "end": 318,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 256,
        "end": 318,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 273,
          "end": 296,
          "decorators": [],
          "name": "createNamespacedHelpers",
          "optional": false
        },
        "params": [],
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
              "decorators": [],
              "name": "NamespacedMappers",
              "optional": false
            }
          }
        }
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "module"
}
```
