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
          "name": "Brand",
          "optional": false,
          "typeAnnotation": null,
          "start": 12,
          "end": 17
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 21,
                "end": 25
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 21,
              "end": 25
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "Branding",
                "optional": false,
                "typeAnnotation": null,
                "start": 29,
                "end": 37
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 29,
              "end": 37
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "ReservedName",
                "optional": false,
                "typeAnnotation": null,
                "start": 41,
                "end": 53
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              },
              "default": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "__type__",
                  "raw": "\"__type__\"",
                  "start": 71,
                  "end": 81
                },
                "start": 71,
                "end": 81
              },
              "in": false,
              "out": false,
              "const": false,
              "start": 41,
              "end": 81
            }
          ],
          "start": 17,
          "end": 83
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Base",
                "optional": false,
                "typeAnnotation": null,
                "start": 86,
                "end": 90
              },
              "typeArguments": null,
              "start": 86,
              "end": 90
            },
            {
              "type": "TSMappedType",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null,
                "start": 96,
                "end": 97
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ReservedName",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 113
                },
                "typeArguments": null,
                "start": 101,
                "end": 113
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Branding",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 116,
                  "end": 124
                },
                "typeArguments": null,
                "start": 116,
                "end": 124
              },
              "optional": false,
              "readonly": null,
              "start": 93,
              "end": 126
            },
            {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "__witness__",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 131,
                    "end": 142
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Base",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 144,
                        "end": 148
                      },
                      "typeArguments": null,
                      "start": 144,
                      "end": 148
                    },
                    "start": 142,
                    "end": 148
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 131,
                  "end": 148
                }
              ],
              "start": 129,
              "end": 150
            }
          ],
          "start": 86,
          "end": 150
        },
        "declare": false,
        "start": 7,
        "end": 151
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 0,
      "end": 151
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BoundedInteger",
          "optional": false,
          "typeAnnotation": null,
          "start": 165,
          "end": 179
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "LowerBound",
                "optional": false,
                "typeAnnotation": null,
                "start": 183,
                "end": 193
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 183,
              "end": 208
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "UpperBound",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 222
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 231,
                "end": 237
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 212,
              "end": 237
            }
          ],
          "start": 179,
          "end": 239
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "Brand",
            "optional": false,
            "typeAnnotation": null,
            "start": 242,
            "end": 247
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 248,
                "end": 254
              },
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "BoundedInteger",
                  "raw": "\"BoundedInteger\"",
                  "start": 256,
                  "end": 272
                },
                "start": 256,
                "end": 272
              }
            ],
            "start": 247,
            "end": 273
          },
          "start": 242,
          "end": 273
        },
        "declare": false,
        "start": 160,
        "end": 274
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 153,
      "end": 274
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "toBoundedInteger",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 305
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "expression": true,
              "async": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LowerBound",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 311,
                      "end": 321
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 330,
                      "end": 336
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 311,
                    "end": 336
                  },
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "UpperBound",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 338,
                      "end": 348
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 357,
                      "end": 363
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 338,
                    "end": 363
                  }
                ],
                "start": 310,
                "end": 364
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "bounds",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "lowerBound",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 379,
                            "end": 389
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "LowerBound",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 391,
                                "end": 401
                              },
                              "typeArguments": null,
                              "start": 391,
                              "end": 401
                            },
                            "start": 389,
                            "end": 401
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 379,
                          "end": 402
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "upperBound",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 407,
                            "end": 417
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "UpperBound",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 419,
                                "end": 429
                              },
                              "typeArguments": null,
                              "start": 419,
                              "end": 429
                            },
                            "start": 417,
                            "end": 429
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 407,
                          "end": 430
                        }
                      ],
                      "start": 373,
                      "end": 434
                    },
                    "start": 371,
                    "end": 434
                  },
                  "start": 365,
                  "end": 434
                }
              ],
              "returnType": null,
              "body": {
                "type": "ArrowFunctionExpression",
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 450,
                        "end": 456
                      },
                      "start": 448,
                      "end": 456
                    },
                    "start": 447,
                    "end": 456
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "BoundedInteger",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 476
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "LowerBound",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 477,
                            "end": 487
                          },
                          "typeArguments": null,
                          "start": 477,
                          "end": 487
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "UpperBound",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 489,
                            "end": 499
                          },
                          "typeArguments": null,
                          "start": 489,
                          "end": 499
                        }
                      ],
                      "start": 476,
                      "end": 500
                    },
                    "start": 462,
                    "end": 500
                  },
                  "start": 460,
                  "end": 500
                },
                "body": {
                  "type": "TSAsExpression",
                  "expression": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 549,
                    "end": 551
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 555,
                    "end": 558
                  },
                  "start": 549,
                  "end": 558
                },
                "id": null,
                "generator": false,
                "start": 441,
                "end": 559
              },
              "id": null,
              "generator": false,
              "start": 310,
              "end": 559
            },
            "definite": false,
            "start": 289,
            "end": 559
          }
        ],
        "declare": false,
        "start": 283,
        "end": 559
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 276,
      "end": 559
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 559
}
```
