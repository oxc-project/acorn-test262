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
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 25,
        "end": 29,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
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
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 33,
        "end": 124,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 39,
            "end": 51,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 39,
              "end": 47,
              "decorators": [],
              "name": "someProp",
              "optional": false,
              "typeAnnotation": null
            },
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
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 56,
            "end": 122,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 56,
              "end": 62,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 62,
              "end": 122,
              "id": null,
              "generator": false,
              "async": false,
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
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
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
                      "key": {
                        "type": "Identifier",
                        "start": 90,
                        "end": 91,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                            "decorators": [],
                            "name": "U",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": false,
                      "readonly": null
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 114,
                    "end": 118,
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "U",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 241,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 140,
        "end": 147,
        "decorators": [],
        "name": "Derived",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": {
        "type": "Identifier",
        "start": 159,
        "end": 163,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
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
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 167,
        "end": 241,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 173,
            "end": 239,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 173,
              "end": 179,
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 179,
              "end": 239,
              "id": null,
              "generator": false,
              "async": false,
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
                      "decorators": [],
                      "name": "V",
                      "optional": false,
                      "typeAnnotation": null
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
                      "key": {
                        "type": "Identifier",
                        "start": 207,
                        "end": 208,
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null
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
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                            "decorators": [],
                            "name": "V",
                            "optional": false,
                            "typeAnnotation": null
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
                            "decorators": [],
                            "name": "K",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      "optional": false,
                      "readonly": null
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
                  "typeName": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 235,
                    "decorators": [],
                    "name": "Base",
                    "optional": false,
                    "typeAnnotation": null
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
                          "decorators": [],
                          "name": "V",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                }
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
