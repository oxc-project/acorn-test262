__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "A",
          "optional": false,
          "typeAnnotation": null,
          "start": 34,
          "end": 35
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 38,
                "end": 46
              },
              "start": 38,
              "end": 46
            },
            {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "null",
                "raw": "\"null\"",
                "start": 49,
                "end": 55
              },
              "start": 49,
              "end": 55
            },
            {
              "type": "TSArrayType",
              "elementType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 59
                },
                "typeArguments": null,
                "start": 58,
                "end": 59
              },
              "start": 58,
              "end": 61
            }
          ],
          "start": 38,
          "end": 61
        },
        "declare": false,
        "start": 29,
        "end": 62
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 22,
      "end": 62
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "F",
          "optional": false,
          "typeAnnotation": null,
          "start": 76,
          "end": 77
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 78,
                "end": 79
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 78,
              "end": 79
            }
          ],
          "start": 77,
          "end": 80
        },
        "typeAnnotation": {
          "type": "TSConditionalType",
          "checkType": {
            "type": "TSNullKeyword",
            "start": 83,
            "end": 87
          },
          "extendsType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 96,
              "end": 97
            },
            "typeArguments": null,
            "start": 96,
            "end": 97
          },
          "trueType": {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "F",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 105,
                  "end": 106
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "NonNullable",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 107,
                        "end": 118
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 119,
                              "end": 120
                            },
                            "typeArguments": null,
                            "start": 119,
                            "end": 120
                          }
                        ],
                        "start": 118,
                        "end": 121
                      },
                      "start": 107,
                      "end": 121
                    }
                  ],
                  "start": 106,
                  "end": 122
                },
                "start": 105,
                "end": 122
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "null",
                  "raw": "\"null\"",
                  "start": 124,
                  "end": 130
                },
                "start": 124,
                "end": 130
              }
            ],
            "start": 104,
            "end": 131
          },
          "falseType": {
            "type": "TSConditionalType",
            "checkType": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 139
              },
              "typeArguments": null,
              "start": 138,
              "end": 139
            },
            "extendsType": {
              "type": "TSNumberKeyword",
              "start": 148,
              "end": 154
            },
            "trueType": {
              "type": "TSLiteralType",
              "literal": {
                "type": "Literal",
                "value": "number",
                "raw": "\"number\"",
                "start": 161,
                "end": 169
              },
              "start": 161,
              "end": 169
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 176,
              "end": 181
            },
            "start": 138,
            "end": 181
          },
          "start": 83,
          "end": 181
        },
        "declare": false,
        "start": 71,
        "end": 182
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 64,
      "end": 182
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "G",
          "optional": false,
          "typeAnnotation": null,
          "start": 196,
          "end": 197
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 198,
                "end": 199
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 198,
              "end": 199
            }
          ],
          "start": 197,
          "end": 200
        },
        "typeAnnotation": {
          "type": "TSMappedType",
          "key": {
            "type": "Identifier",
            "decorators": [],
            "name": "k",
            "optional": false,
            "typeAnnotation": null,
            "start": 206,
            "end": 207
          },
          "constraint": {
            "type": "TSTypeOperator",
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 217,
                "end": 218
              },
              "typeArguments": null,
              "start": 217,
              "end": 218
            },
            "start": 211,
            "end": 218
          },
          "nameType": null,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null,
              "start": 221,
              "end": 222
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSIndexedAccessType",
                  "objectType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 223,
                      "end": 224
                    },
                    "typeArguments": null,
                    "start": 223,
                    "end": 224
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "k",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 225,
                      "end": 226
                    },
                    "typeArguments": null,
                    "start": 225,
                    "end": 226
                  },
                  "start": 223,
                  "end": 227
                }
              ],
              "start": 222,
              "end": 228
            },
            "start": 221,
            "end": 228
          },
          "optional": false,
          "readonly": null,
          "start": 203,
          "end": 230
        },
        "declare": false,
        "start": 191,
        "end": 231
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 184,
      "end": 231
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "K",
        "optional": false,
        "typeAnnotation": null,
        "start": 243,
        "end": 244
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 251,
              "end": 252
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
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
                ],
                "start": 254,
                "end": 267
              },
              "start": 252,
              "end": 267
            },
            "accessibility": null,
            "static": false,
            "start": 251,
            "end": 268
          }
        ],
        "start": 245,
        "end": 270
      },
      "declare": false,
      "start": 233,
      "end": 270
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "gK",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSMappedType",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 285,
                  "end": 288
                },
                "constraint": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 298,
                      "end": 299
                    },
                    "typeArguments": null,
                    "start": 298,
                    "end": 299
                  },
                  "start": 292,
                  "end": 299
                },
                "nameType": null,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 303
                  },
                  "typeArguments": null,
                  "start": 302,
                  "end": 303
                },
                "optional": false,
                "readonly": null,
                "start": 282,
                "end": 305
              },
              "start": 280,
              "end": 305
            },
            "start": 278,
            "end": 305
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 310,
                  "end": 311
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": "number",
                      "raw": "\"number\"",
                      "start": 314,
                      "end": 322
                    },
                    {
                      "type": "Literal",
                      "value": "null",
                      "raw": "\"null\"",
                      "start": 324,
                      "end": 330
                    }
                  ],
                  "start": 313,
                  "end": 331
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 310,
                "end": 331
              }
            ],
            "start": 308,
            "end": 333
          },
          "definite": false,
          "start": 278,
          "end": 333
        }
      ],
      "declare": false,
      "start": 272,
      "end": 334
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 345,
        "end": 348
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 349,
              "end": 350
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 349,
            "end": 350
          }
        ],
        "start": 348,
        "end": 351
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "G",
                "optional": false,
                "typeAnnotation": null,
                "start": 355,
                "end": 356
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 357,
                      "end": 358
                    },
                    "typeArguments": null,
                    "start": 357,
                    "end": 358
                  }
                ],
                "start": 356,
                "end": 359
              },
              "start": 355,
              "end": 359
            },
            "start": 353,
            "end": 359
          },
          "start": 352,
          "end": 359
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 362,
            "end": 363
          },
          "typeArguments": null,
          "start": 362,
          "end": 363
        },
        "start": 360,
        "end": 363
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "TSAsExpression",
              "expression": {
                "type": "ObjectExpression",
                "properties": [],
                "start": 377,
                "end": 379
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 383,
                "end": 386
              },
              "start": 377,
              "end": 386
            },
            "start": 370,
            "end": 387
          }
        ],
        "start": 364,
        "end": 389
      },
      "expression": false,
      "start": 336,
      "end": 389
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 391,
          "end": 394
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "gK",
            "optional": false,
            "typeAnnotation": null,
            "start": 395,
            "end": 397
          }
        ],
        "optional": false,
        "start": 391,
        "end": 398
      },
      "directive": null,
      "start": 391,
      "end": 399
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 22,
  "end": 399
}
```
