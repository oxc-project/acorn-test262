__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 399,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 22,
      "end": 62,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 29,
        "end": 62,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 38,
          "end": 61,
          "types": [
            {
              "type": "TSLiteralType",
              "start": 38,
              "end": 46,
              "literal": {
                "type": "Literal",
                "start": 38,
                "end": 46,
                "raw": "\"number\"",
                "value": "number"
              }
            },
            {
              "type": "TSLiteralType",
              "start": 49,
              "end": 55,
              "literal": {
                "type": "Literal",
                "start": 49,
                "end": 55,
                "raw": "\"null\"",
                "value": "null"
              }
            },
            {
              "type": "TSArrayType",
              "start": 58,
              "end": 61,
              "elementType": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 59,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          ]
        },
        "typeParameters": null
      },
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 64,
      "end": 182,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 71,
        "end": 182,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "start": 83,
          "end": 181,
          "checkType": {
            "type": "TSNullKeyword",
            "start": 83,
            "end": 87
          },
          "extendsType": {
            "type": "TSTypeReference",
            "start": 96,
            "end": 97,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 138,
            "end": 181,
            "checkType": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 139,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "extendsType": {
              "type": "TSNumberKeyword",
              "start": 148,
              "end": 154
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 176,
              "end": 181
            },
            "trueType": {
              "type": "TSLiteralType",
              "start": 161,
              "end": 169,
              "literal": {
                "type": "Literal",
                "start": 161,
                "end": 169,
                "raw": "\"number\"",
                "value": "number"
              }
            }
          },
          "trueType": {
            "type": "TSTupleType",
            "start": 104,
            "end": 131,
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "start": 105,
                "end": 122,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 106,
                  "end": 122,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 107,
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
                            "typeArguments": null,
                            "typeName": {
                              "type": "Identifier",
                              "start": 119,
                              "end": 120,
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ]
                      },
                      "typeName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 118,
                        "decorators": [],
                        "name": "NonNullable",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              {
                "type": "TSLiteralType",
                "start": 124,
                "end": 130,
                "literal": {
                  "type": "Literal",
                  "start": 124,
                  "end": 130,
                  "raw": "\"null\"",
                  "value": "null"
                }
              }
            ]
          }
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
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 184,
      "end": 231,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 191,
        "end": 231,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 203,
          "end": 230,
          "constraint": {
            "type": "TSTypeOperator",
            "start": 211,
            "end": 218,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 217,
              "end": 218,
              "typeArguments": null,
              "typeName": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "key": {
            "type": "Identifier",
            "start": 206,
            "end": 207,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "nameType": null,
          "optional": null,
          "readonly": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 221,
            "end": 228,
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 222,
              "end": 228,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 223,
                  "end": 227,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 225,
                    "end": 226,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 224,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
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
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 197,
          "end": 200,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 198,
              "end": 199,
              "const": false,
              "constraint": null,
              "default": null,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 198,
                "end": 199,
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
      "exportKind": "type",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 233,
      "end": 270,
      "body": {
        "type": "TSInterfaceBody",
        "start": 245,
        "end": 270,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 251,
            "end": 268,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 252,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 267,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 254,
                "end": 267,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 254,
                    "end": 260
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 263,
                    "end": 267
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 244,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 333,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 278,
            "end": 305,
            "decorators": [],
            "name": "gK",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 280,
              "end": 305,
              "typeAnnotation": {
                "type": "TSMappedType",
                "start": 282,
                "end": 305,
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 292,
                  "end": 299,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 298,
                    "end": 299,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 299,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "key": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 288,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "nameType": null,
                "optional": null,
                "readonly": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 302,
                  "end": 303,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 308,
            "end": 333,
            "properties": [
              {
                "type": "Property",
                "start": 310,
                "end": 331,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrayExpression",
                  "start": 313,
                  "end": 331,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 314,
                      "end": 322,
                      "raw": "\"number\"",
                      "value": "number"
                    },
                    {
                      "type": "Literal",
                      "start": 324,
                      "end": 330,
                      "raw": "\"null\"",
                      "value": "null"
                    }
                  ]
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 336,
      "end": 389,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 364,
        "end": 389,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 370,
            "end": 387,
            "argument": {
              "type": "TSAsExpression",
              "start": 377,
              "end": 386,
              "expression": {
                "type": "ObjectExpression",
                "start": 377,
                "end": 379,
                "properties": []
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 383,
                "end": 386
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
        "start": 345,
        "end": 348,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 352,
          "end": 359,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 353,
            "end": 359,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 355,
              "end": 359,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 356,
                "end": 359,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 357,
                    "end": 358,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 360,
        "end": 363,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 362,
          "end": 363,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 362,
            "end": 363,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 348,
        "end": 351,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 349,
            "end": 350,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
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
      "type": "ExpressionStatement",
      "start": 391,
      "end": 399,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 391,
        "end": 398,
        "arguments": [
          {
            "type": "Identifier",
            "start": 395,
            "end": 397,
            "decorators": [],
            "name": "gK",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 391,
          "end": 394,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
