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
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 33,
        "end": 124,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 51,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 47,
              "decorators": [],
              "name": "someProp",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
                  "decorators": [],
                  "name": "T",
                  "optional": false
                }
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 122,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 62,
              "end": 122,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 84,
                  "end": 111,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 85,
                    "end": 111,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 87,
                      "end": 111,
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
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
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
                        "type": "TSIndexedAccessType",
                        "start": 105,
                        "end": 109,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 107,
                          "end": 108,
                          "typeName": {
                            "type": "Identifier",
                            "start": 107,
                            "end": 108,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 105,
                          "end": 106,
                          "typeName": {
                            "type": "Identifier",
                            "start": 105,
                            "end": 106,
                            "decorators": [],
                            "name": "U",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 112,
                "end": 121,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 114,
                  "end": 121,
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
                          "decorators": [],
                          "name": "U",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 118,
                    "decorators": [],
                    "name": "Base",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 62,
                "end": 83,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 63,
                    "end": 82,
                    "const": false,
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
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 63,
                      "end": 64,
                      "decorators": [],
                      "name": "U",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 29,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 29,
        "end": 32,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 30,
            "end": 31,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 30,
              "end": 31,
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
      "start": 126,
      "end": 241,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 241,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 239,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 179,
              "decorators": [],
              "name": "method",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 179,
              "end": 239,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 201,
                  "end": 228,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 202,
                    "end": 228,
                    "typeAnnotation": {
                      "type": "TSMappedType",
                      "start": 204,
                      "end": 228,
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
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      },
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "decorators": [],
                        "name": "K",
                        "optional": false
                      },
                      "nameType": null,
                      "typeAnnotation": {
                        "type": "TSIndexedAccessType",
                        "start": 222,
                        "end": 226,
                        "indexType": {
                          "type": "TSTypeReference",
                          "start": 224,
                          "end": 225,
                          "typeName": {
                            "type": "Identifier",
                            "start": 224,
                            "end": 225,
                            "decorators": [],
                            "name": "K",
                            "optional": false
                          }
                        },
                        "objectType": {
                          "type": "TSTypeReference",
                          "start": 222,
                          "end": 223,
                          "typeName": {
                            "type": "Identifier",
                            "start": 222,
                            "end": 223,
                            "decorators": [],
                            "name": "V",
                            "optional": false
                          }
                        }
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 229,
                "end": 238,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 231,
                  "end": 238,
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
                          "decorators": [],
                          "name": "V",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 235,
                    "decorators": [],
                    "name": "Base",
                    "optional": false
                  }
                }
              },
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 179,
                "end": 200,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 180,
                    "end": 199,
                    "const": false,
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
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 180,
                      "end": 181,
                      "decorators": [],
                      "name": "V",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 147,
        "decorators": [],
        "name": "Derived",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 159,
        "end": 163,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
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
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 149,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
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
  "sourceType": "script",
  "hashbang": null
}
```
