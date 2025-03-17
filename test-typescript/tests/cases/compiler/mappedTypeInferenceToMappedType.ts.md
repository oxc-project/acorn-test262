__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 241,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 11,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 29,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 33,
        "end": 124,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 51,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 47,
              "name": "someProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 50,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 49,
                "end": 50,
                "typeName": {
                  "type": "Identifier",
                  "start": 49,
                  "end": 50,
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 122,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 62,
              "end": 122,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 84,
                  "end": 111,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 87,
                      "end": 111,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 90,
                        "end": 102,
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
                          "type": "TSTypeOperator",
                          "start": 95,
                          "end": 102,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 101,
                            "end": 102,
                            "typeName": {
                              "type": "Identifier",
                              "start": 101,
                              "end": 102,
                              "name": "U",
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
                        "type": "TSIndexedAccessType",
                        "start": 105,
                        "end": 109,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 105,
                          "end": 106,
                          "typeName": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 106,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 107,
                          "end": 108,
                          "typeName": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 108,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 95,
                        "end": 102,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 101,
                          "end": 102,
                          "typeName": {
                            "type": "Identifier",
                            "start": 101,
                            "end": 102,
                            "name": "U",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
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
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 62,
                "end": 83,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 63,
                    "end": 82,
                    "name": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSArrayType",
                      "start": 73,
                      "end": 82,
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 73,
                        "end": 80
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 112,
                "end": 121,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 121,
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 118,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 118,
                    "end": 121,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 119,
                        "end": 120,
                        "typeName": {
                          "type": "Identifier",
                          "start": 119,
                          "end": 120,
                          "name": "U",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 31,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 147,
        "name": "Derived",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 159,
        "end": 163,
        "name": "Base",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 241,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 239,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 179,
              "name": "method",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 179,
              "end": 239,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 201,
                  "end": 228,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 204,
                      "end": 228,
                      "typeParameter": {
                        "type": "TSTypeParameter",
                        "start": 207,
                        "end": 219,
                        "name": {
                          "type": "Identifier",
                          "start": 207,
                          "end": 208,
                          "name": "K",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "constraint": {
                          "type": "TSTypeOperator",
                          "start": 212,
                          "end": 219,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 218,
                            "end": 219,
                            "typeName": {
                              "type": "Identifier",
                              "start": 218,
                              "end": 219,
                              "name": "V",
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
                        "type": "TSIndexedAccessType",
                        "start": 222,
                        "end": 226,
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 222,
                          "end": 223,
                          "typeName": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 223,
                            "name": "V",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 224,
                          "end": 225,
                          "typeName": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 225,
                            "name": "K",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": null,
                      "readonly": null,
                      "constraint": {
                        "type": "TSTypeOperator",
                        "start": 212,
                        "end": 219,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 218,
                          "end": 219,
                          "typeName": {
                            "type": "Identifier",
                            "start": 218,
                            "end": 219,
                            "name": "V",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 179,
                "end": 200,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 180,
                    "end": 199,
                    "name": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "name": "V",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSArrayType",
                      "start": 190,
                      "end": 199,
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 190,
                        "end": 197
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 229,
                "end": 238,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 231,
                  "end": 238,
                  "typeName": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 235,
                    "name": "Base",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 235,
                    "end": 238,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 236,
                        "end": 237,
                        "typeName": {
                          "type": "Identifier",
                          "start": 236,
                          "end": 237,
                          "name": "V",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 149,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
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
      "implements": [],
      "abstract": false,
      "declare": true,
      "superTypeArguments": {
        "type": "TSTypeParameterInstantiation",
        "start": 163,
        "end": 166,
        "params": [
          {
            "type": "TSTypeReference",
            "start": 164,
            "end": 165,
            "typeName": {
              "type": "Identifier",
              "start": 164,
              "end": 165,
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
  ],
  "sourceType": "script",
  "hashbang": null
}
```
