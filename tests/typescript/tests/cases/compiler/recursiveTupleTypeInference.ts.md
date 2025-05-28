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
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 29,
        "end": 62,
        "id": {
          "type": "Identifier",
          "start": 34,
          "end": 35,
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
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
                "value": "number",
                "raw": "\"number\""
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
                "value": "null",
                "raw": "\"null\""
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
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 59,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 64,
      "end": 182,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 71,
        "end": 182,
        "id": {
          "type": "Identifier",
          "start": 76,
          "end": 77,
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
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
            "typeName": {
              "type": "Identifier",
              "start": 96,
              "end": 97,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
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
                "typeName": {
                  "type": "Identifier",
                  "start": 105,
                  "end": 106,
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 106,
                  "end": 122,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 107,
                      "end": 121,
                      "typeName": {
                        "type": "Identifier",
                        "start": 107,
                        "end": 118,
                        "decorators": [],
                        "name": "NonNullable",
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
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        ]
                      }
                    }
                  ]
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
                  "value": "null",
                  "raw": "\"null\""
                }
              }
            ]
          },
          "falseType": {
            "type": "TSConditionalType",
            "start": 138,
            "end": 181,
            "checkType": {
              "type": "TSTypeReference",
              "start": 138,
              "end": 139,
              "typeName": {
                "type": "Identifier",
                "start": 138,
                "end": 139,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSNumberKeyword",
              "start": 148,
              "end": 154
            },
            "trueType": {
              "type": "TSLiteralType",
              "start": 161,
              "end": 169,
              "literal": {
                "type": "Literal",
                "start": 161,
                "end": 169,
                "value": "number",
                "raw": "\"number\""
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 176,
              "end": 181
            }
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 184,
      "end": 231,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 191,
        "end": 231,
        "id": {
          "type": "Identifier",
          "start": 196,
          "end": 197,
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null
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
              "name": {
                "type": "Identifier",
                "start": 198,
                "end": 199,
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
        "typeAnnotation": {
          "type": "TSMappedType",
          "start": 203,
          "end": 230,
          "key": {
            "type": "Identifier",
            "start": 206,
            "end": 207,
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 211,
            "end": 218,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 217,
              "end": 218,
              "typeName": {
                "type": "Identifier",
                "start": 217,
                "end": 218,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 221,
            "end": 228,
            "typeName": {
              "type": "Identifier",
              "start": 221,
              "end": 222,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 222,
              "end": 228,
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "start": 223,
                  "end": 227,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 223,
                    "end": 224,
                    "typeName": {
                      "type": "Identifier",
                      "start": 223,
                      "end": 224,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 225,
                    "end": 226,
                    "typeName": {
                      "type": "Identifier",
                      "start": 225,
                      "end": 226,
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "optional": false,
          "readonly": null
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 233,
      "end": 270,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 244,
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 245,
        "end": 270,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 251,
            "end": 268,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 251,
              "end": 252,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
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
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 272,
      "end": 334,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 278,
          "end": 333,
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
                "key": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 288,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "start": 292,
                  "end": 299,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 298,
                    "end": 299,
                    "typeName": {
                      "type": "Identifier",
                      "start": 298,
                      "end": 299,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 302,
                  "end": 303,
                  "typeName": {
                    "type": "Identifier",
                    "start": 302,
                    "end": 303,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                "optional": false,
                "readonly": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 310,
                  "end": 311,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "ArrayExpression",
                  "start": 313,
                  "end": 331,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 314,
                      "end": 322,
                      "value": "number",
                      "raw": "\"number\""
                    },
                    {
                      "type": "Literal",
                      "start": 324,
                      "end": 330,
                      "value": "null",
                      "raw": "\"null\""
                    }
                  ]
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 336,
      "end": 389,
      "id": {
        "type": "Identifier",
        "start": 345,
        "end": 348,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 348,
        "end": 351,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 349,
            "end": 350,
            "name": {
              "type": "Identifier",
              "start": 349,
              "end": 350,
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
              "typeName": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 356,
                "end": 359,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 357,
                    "end": 358,
                    "typeName": {
                      "type": "Identifier",
                      "start": 357,
                      "end": 358,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
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
          "typeName": {
            "type": "Identifier",
            "start": 362,
            "end": 363,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 391,
      "end": 399,
      "expression": {
        "type": "CallExpression",
        "start": 391,
        "end": 398,
        "callee": {
          "type": "Identifier",
          "start": 391,
          "end": 394,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
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
        "optional": false
      },
      "directive": null
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
