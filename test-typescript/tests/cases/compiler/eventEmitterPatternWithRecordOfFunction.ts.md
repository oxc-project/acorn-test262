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
      "body": {
        "type": "TSInterfaceBody",
        "start": 12,
        "end": 65,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 18,
            "end": 63,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 18,
              "end": 22,
              "decorators": [],
              "name": "emit",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 23,
                "end": 36,
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 28,
                  "end": 36,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 30,
                    "end": 36
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 38,
                "end": 52,
                "argument": {
                  "type": "Identifier",
                  "start": 41,
                  "end": 45,
                  "decorators": [],
                  "name": "args",
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
                }
              }
            ],
            "readonly": false,
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
            "static": false
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
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 67,
      "end": 131,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 72,
        "end": 76,
        "decorators": [],
        "name": "Args",
        "optional": false
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
            "decorators": [],
            "name": "F",
            "optional": false
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 92,
          "end": 118,
          "params": [
            {
              "type": "RestElement",
              "start": 93,
              "end": 109,
              "argument": {
                "type": "Identifier",
                "start": 96,
                "end": 100,
                "decorators": [],
                "name": "args",
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
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 108,
                      "end": 109,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
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
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 125,
          "end": 130
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 121,
          "end": 122,
          "typeName": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 77,
              "end": 78,
              "decorators": [],
              "name": "F",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 133,
      "end": 174,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 138,
        "end": 146,
        "decorators": [],
        "name": "EventMap",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 149,
        "end": 173,
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
                "decorators": [],
                "name": "Function",
                "optional": false
              }
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 149,
          "end": 155,
          "decorators": [],
          "name": "Record",
          "optional": false
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 176,
      "end": 302,
      "body": {
        "type": "TSInterfaceBody",
        "start": 218,
        "end": 302,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 224,
            "end": 300,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 224,
              "end": 228,
              "decorators": [],
              "name": "emit",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 252,
                "end": 264,
                "decorators": [],
                "name": "event",
                "optional": false,
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
                      "decorators": [],
                      "name": "Event",
                      "optional": false
                    }
                  }
                }
              },
              {
                "type": "RestElement",
                "start": 266,
                "end": 289,
                "argument": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 273,
                  "decorators": [],
                  "name": "args",
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
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 279,
                      "end": 289,
                      "params": [
                        {
                          "type": "TSIndexedAccessType",
                          "start": 280,
                          "end": 288,
                          "indexType": {
                            "type": "TSTypeReference",
                            "start": 282,
                            "end": 287,
                            "typeName": {
                              "type": "Identifier",
                              "start": 282,
                              "end": 287,
                              "decorators": [],
                              "name": "Event",
                              "optional": false
                            }
                          },
                          "objectType": {
                            "type": "TSTypeReference",
                            "start": 280,
                            "end": 281,
                            "typeName": {
                              "type": "Identifier",
                              "start": 280,
                              "end": 281,
                              "decorators": [],
                              "name": "M",
                              "optional": false
                            }
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 275,
                      "end": 279,
                      "decorators": [],
                      "name": "Args",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "readonly": false,
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
            "static": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 228,
              "end": 251,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 229,
                  "end": 250,
                  "const": false,
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
                        "decorators": [],
                        "name": "M",
                        "optional": false
                      }
                    }
                  },
                  "in": false,
                  "name": {
                    "type": "Identifier",
                    "start": 229,
                    "end": 234,
                    "decorators": [],
                    "name": "Event",
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
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 216,
          "end": 217,
          "expression": {
            "type": "Identifier",
            "start": 216,
            "end": 217,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 187,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 187,
        "end": 207,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 188,
            "end": 206,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 198,
              "end": 206,
              "typeName": {
                "type": "Identifier",
                "start": 198,
                "end": 206,
                "decorators": [],
                "name": "EventMap",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 188,
              "end": 189,
              "decorators": [],
              "name": "M",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
