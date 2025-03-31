__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 302,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 11,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 63,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "name": "emit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 23,
                "end": 36,
                "name": "event",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 28,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 30,
                    "end": 36
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 38,
                "end": 52,
                "argument": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 45,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 45,
                  "end": 52,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 47,
                    "end": 52,
                    "elementType": {
                      "type": "TSAnyKeyword",
                      "start": 47,
                      "end": 50
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 62,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 55,
                "end": 62
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 131,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "name": "Args",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 76,
        "end": 79,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 77,
            "end": 78,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "name": "F",
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
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 82,
        "end": 130,
        "checkType": {
          "type": "TSTypeReference",
          "start": 82,
          "end": 83,
          "typeName": {
            "type": "Identifier",
            "start": 82,
            "end": 83,
            "name": "F",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 92,
          "end": 118,
          "typeParameters": null,
          "params": [
            {
              "type": "RestElement",
              "start": 93,
              "end": 109,
              "argument": {
                "type": "Identifier",
                "start": 96,
                "end": 100,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 100,
                "end": 109,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 102,
                  "end": 109,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 108,
                    "end": 109,
                    "name": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "name": "A",
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
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 111,
            "end": 118,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 114,
              "end": 118
            }
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 121,
          "end": 122,
          "typeName": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 125,
          "end": 130
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 133,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 146,
        "name": "EventMap",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 149,
        "end": 173,
        "typeName": {
          "type": "Identifier",
          "start": 149,
          "end": 155,
          "name": "Record",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 155,
          "end": 173,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 156,
              "end": 162
            },
            {
              "type": "TSTypeReference",
              "start": 164,
              "end": 172,
              "typeName": {
                "type": "Identifier",
                "start": 164,
                "end": 172,
                "name": "Function",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 176,
      "end": 302,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 187,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 216,
          "end": 217,
          "expression": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 187,
        "end": 207,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 188,
            "end": 206,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 198,
              "end": 206,
              "typeName": {
                "type": "Identifier",
                "start": 198,
                "end": 206,
                "name": "EventMap",
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
          }
        ]
      },
      "body": {
        "type": "TSInterfaceBody",
        "start": 218,
        "end": 302,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 224,
            "end": 300,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 228,
              "name": "emit",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 228,
              "end": 251,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 229,
                  "end": 250,
                  "name": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 234,
                    "name": "Event",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 243,
                    "end": 250,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 249,
                      "end": 250,
                      "typeName": {
                        "type": "Identifier",
                        "start": 249,
                        "end": 250,
                        "name": "M",
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
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 252,
                "end": 264,
                "name": "event",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 257,
                  "end": 264,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 259,
                    "end": 264,
                    "typeName": {
                      "type": "Identifier",
                      "start": 259,
                      "end": 264,
                      "name": "Event",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              },
              {
                "type": "RestElement",
                "start": 266,
                "end": 289,
                "argument": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 273,
                  "name": "args",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "decorators": [],
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 273,
                  "end": 289,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 275,
                    "end": 289,
                    "typeName": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 279,
                      "name": "Args",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 279,
                      "end": 289,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 280,
                          "end": 288,
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 280,
                            "end": 281,
                            "typeName": {
                              "type": "Identifier",
                              "start": 280,
                              "end": 281,
                              "name": "M",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 282,
                            "end": 287,
                            "typeName": {
                              "type": "Identifier",
                              "start": 282,
                              "end": 287,
                              "name": "Event",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "typeArguments": null
                          }
                        }
                      ]
                    }
                  }
                },
                "value": null
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 299,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 292,
                "end": 299
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
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
