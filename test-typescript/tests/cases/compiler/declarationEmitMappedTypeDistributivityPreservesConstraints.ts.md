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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 8,
        "name": "Fns",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 11,
        "end": 60,
        "typeName": {
          "type": "Identifier",
          "start": 11,
          "end": 17,
          "name": "Record",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
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
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "start": 27,
                  "end": 47,
                  "argument": {
                    "type": "Identifier",
                    "start": 30,
                    "end": 36,
                    "name": "params",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 62,
      "end": 114,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "name": "Map",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 81,
              "end": 84,
              "typeName": {
                "type": "Identifier",
                "start": 81,
                "end": 84,
                "name": "Fns",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 88,
        "end": 113,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 91,
          "end": 103,
          "name": {
            "type": "Identifier",
            "start": 91,
            "end": 92,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 96,
            "end": 103,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 102,
              "end": 103,
              "typeName": {
                "type": "Identifier",
                "start": 102,
                "end": 103,
                "name": "T",
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
          "start": 106,
          "end": 110,
          "objectType": {
            "type": "TSTypeReference",
            "start": 106,
            "end": 107,
            "typeName": {
              "type": "Identifier",
              "start": 106,
              "end": 107,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 108,
            "end": 109,
            "typeName": {
              "type": "Identifier",
              "start": 108,
              "end": 109,
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
          "start": 96,
          "end": 103,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 102,
            "end": 103,
            "typeName": {
              "type": "Identifier",
              "start": 102,
              "end": 103,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 116,
      "end": 182,
      "id": {
        "type": "Identifier",
        "start": 121,
        "end": 127,
        "name": "AllArg",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 128,
              "end": 129,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 141,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 141,
                "name": "Fns",
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
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 145,
        "end": 181,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 148,
          "end": 160,
          "name": {
            "type": "Identifier",
            "start": 148,
            "end": 149,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 153,
            "end": 160,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 159,
              "end": 160,
              "typeName": {
                "type": "Identifier",
                "start": 159,
                "end": 160,
                "name": "T",
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
          "start": 163,
          "end": 179,
          "typeName": {
            "type": "Identifier",
            "start": 163,
            "end": 173,
            "name": "Parameters",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 173,
            "end": 179,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 174,
                "end": 178,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 174,
                  "end": 175,
                  "typeName": {
                    "type": "Identifier",
                    "start": 174,
                    "end": 175,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 176,
                  "end": 177,
                  "typeName": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "name": "K",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              }
            ]
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 153,
          "end": 160,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 159,
            "end": 160,
            "typeName": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 148,
          "end": 149,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 184,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 195,
        "name": "fn",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 226,
          "end": 239,
          "name": "sliceIndex",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 236,
            "end": 239,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 238,
              "end": 239,
              "typeName": {
                "type": "Identifier",
                "start": 238,
                "end": 239,
                "name": "T",
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
                "value": null,
                "raw": "null"
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 195,
        "end": 225,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 196,
            "end": 224,
            "name": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 206,
              "end": 224,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 208,
                  "end": 222,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 208,
                    "end": 209,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 209,
                    "end": 222,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 211,
                      "end": 222,
                      "typeName": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 214,
                        "name": "Map",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 214,
                        "end": 222,
                        "params": [
                          {
                            "type": "TSIndexedAccessType",
                            "start": 215,
                            "end": 221,
                            "objectType": {
                              "type": "TSTypeReference",
                              "start": 215,
                              "end": 216,
                              "typeName": {
                                "type": "Identifier",
                                "start": 215,
                                "end": 216,
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            },
                            "indexType": {
                              "type": "TSLiteralType",
                              "start": 217,
                              "end": 220,
                              "literal": {
                                "type": "Literal",
                                "start": 217,
                                "end": 220,
                                "value": "x",
                                "raw": "'x'"
                              }
                            }
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
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 240,
        "end": 256,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 242,
          "end": 256,
          "typeName": {
            "type": "Identifier",
            "start": 242,
            "end": 248,
            "name": "AllArg",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 248,
            "end": 256,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 249,
                "end": 255,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 249,
                  "end": 250,
                  "typeName": {
                    "type": "Identifier",
                    "start": 249,
                    "end": 250,
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 251,
                  "end": 254,
                  "literal": {
                    "type": "Literal",
                    "start": 251,
                    "end": 254,
                    "value": "x",
                    "raw": "'x'"
                  }
                }
              }
            ]
          }
        }
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
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 297,
              "end": 299,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 297,
              "end": 299,
              "name": "fn",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
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
      "specifiers": [
        {
          "type": "ImportDefaultSpecifier",
          "start": 7,
          "end": 11,
          "local": {
            "type": "Identifier",
            "start": 7,
            "end": 11,
            "name": "test",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        }
      ],
      "source": {
        "type": "Literal",
        "start": 17,
        "end": 26,
        "value": "./types",
        "raw": "\"./types\""
      },
      "attributes": [],
      "importKind": "value"
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
            "method": false,
            "shorthand": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Identifier",
              "start": 45,
              "end": 49,
              "name": "test",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "init",
            "optional": false
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
