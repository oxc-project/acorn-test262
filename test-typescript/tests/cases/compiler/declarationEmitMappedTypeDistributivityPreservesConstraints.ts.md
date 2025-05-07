__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 303,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 60,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "decorators": [],
        "name": "Fns",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 11,
        "end": 60,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 17,
          "end": 60,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 18,
              "end": 24
            },
            {
              "type": "TSFunctionType",
              "start": 26,
              "end": 59,
              "params": [
                {
                  "type": "RestElement",
                  "start": 27,
                  "end": 47,
                  "argument": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 36,
                    "decorators": [],
                    "name": "params",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 36,
                    "end": 47,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 38,
                      "end": 47,
                      "elementType": {
                        "type": "TSUnknownKeyword",
                        "start": 38,
                        "end": 45
                      }
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 49,
                "end": 59,
                "typeAnnotation": {
                  "type": "TSUnknownKeyword",
                  "start": 52,
                  "end": 59
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 11,
          "end": 17,
          "decorators": [],
          "name": "Record",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 62,
      "end": 114,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "decorators": [],
        "name": "Map",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 88,
        "end": 113,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 96,
          "end": 103,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 102,
            "end": 103,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 106,
          "end": 110,
          "indexType": {
            "type": "TSTypeReference",
            "start": 108,
            "end": 109,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "objectType": {
            "type": "TSTypeReference",
            "start": 106,
            "end": 107,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 85,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 84,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 81,
              "end": 84,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 84,
                "decorators": [],
                "name": "Fns",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 116,
      "end": 182,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 127,
        "decorators": [],
        "name": "AllArg",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 145,
        "end": 181,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 153,
          "end": 160,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 159,
            "end": 160,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "decorators": [],
          "name": "K",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 163,
          "end": 179,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 173,
            "end": 179,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 174,
                "end": 178,
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 176,
                  "end": 177,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 174,
                  "end": 175,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 163,
            "end": 173,
            "decorators": [],
            "name": "Parameters",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 127,
        "end": 142,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 128,
            "end": 141,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 141,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 141,
                "decorators": [],
                "name": "Fns",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 184,
      "end": 278,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 257,
        "end": 278,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 263,
            "end": 276,
            "argument": {
              "type": "TSNonNullExpression",
              "start": 270,
              "end": 275,
              "expression": {
                "type": "Literal",
                "start": 270,
                "end": 274,
                "raw": "null",
                "value": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 195,
        "decorators": [],
        "name": "fn",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 226,
          "end": 239,
          "decorators": [],
          "name": "sliceIndex",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 236,
            "end": 239,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 238,
              "end": 239,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 240,
        "end": 256,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 242,
          "end": 256,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 248,
            "end": 256,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 249,
                "end": 255,
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 251,
                  "end": 254,
                  "literal": {
                    "type": "Literal",
                    "start": 251,
                    "end": 254,
                    "raw": "'x'",
                    "value": "x"
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 249,
                  "end": 250,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 250,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 242,
            "end": 248,
            "decorators": [],
            "name": "AllArg",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 195,
        "end": 225,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 196,
            "end": 224,
            "const": false,
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 206,
              "end": 224,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 208,
                  "end": 222,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 209,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 209,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 211,
                      "end": 222,
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 214,
                        "end": 222,
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "start": 215,
                            "end": 221,
                            "indexType": {
                              "type": "TSLiteralType",
                              "start": 217,
                              "end": 220,
                              "literal": {
                                "type": "Literal",
                                "start": 217,
                                "end": 220,
                                "raw": "'x'",
                                "value": "x"
                              }
                            },
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 215,
                              "end": 216,
                              "typeArguments": null,
                              "typeName": {
                                "type": "Identifier",
                                "start": 215,
                                "end": 216,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              }
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 214,
                        "decorators": [],
                        "name": "Map",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  }
                }
              ]
            },
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 280,
      "end": 302,
      "declaration": {
        "type": "ObjectExpression",
        "start": 295,
        "end": 301,
        "properties": [
          {
            "type": "Property",
            "start": 297,
            "end": 299,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 299,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": true,
            "value": {
              "type": "Identifier",
              "start": 297,
              "end": 299,
              "decorators": [],
              "name": "fn",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 52,
  "body": [
    {
      "type": "ImportDeclaration",
      "start": 0,
      "end": 27,
      "attributes": [],
      "importKind": "value",
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 26,
        "raw": "\"./types\"",
        "value": "./types"
      },
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "decorators": [],
            "name": "test",
            "optional": false,
            "typeAnnotation": null
          }
        }
      ]
    },
    {
      "type": "ExportDefaultDeclaration",
      "start": 28,
      "end": 52,
      "declaration": {
        "type": "ObjectExpression",
        "start": 43,
        "end": 51,
        "properties": [
          {
            "type": "Property",
            "start": 45,
            "end": 49,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": true,
            "value": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "decorators": [],
              "name": "test",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "exportKind": "value"
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
