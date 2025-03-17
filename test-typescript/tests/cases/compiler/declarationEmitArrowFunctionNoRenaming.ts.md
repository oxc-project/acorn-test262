__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 560,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 0,
      "end": 151,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 151,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "name": "Brand",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 17,
          "end": 83,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 21,
              "end": 25,
              "name": {
                "type": "Identifier",
                "start": 21,
                "end": 25,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 29,
              "end": 37,
              "name": {
                "type": "Identifier",
                "start": 29,
                "end": 37,
                "name": "Branding",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 41,
              "end": 81,
              "name": {
                "type": "Identifier",
                "start": 41,
                "end": 53,
                "name": "ReservedName",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSStringKeyword",
                "start": 62,
                "end": 68
              },
              "default": {
                "type": "TSLiteralType",
                "start": 71,
                "end": 81,
                "literal": {
                  "type": "Literal",
                  "start": 71,
                  "end": 81,
                  "value": "__type__",
                  "raw": "\"__type__\""
                }
              },
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 86,
          "end": 150,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 86,
              "end": 90,
              "typeName": {
                "type": "Identifier",
                "start": 86,
                "end": 90,
                "name": "Base",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSMappedType",
              "start": 93,
              "end": 126,
              "typeParameter": {
                "type": "TSTypeParameter",
                "start": 96,
                "end": 113,
                "name": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 97,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": {
                  "type": "TSTypeReference",
                  "start": 101,
                  "end": 113,
                  "typeName": {
                    "type": "Identifier",
                    "start": 101,
                    "end": 113,
                    "name": "ReservedName",
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
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 116,
                "end": 124,
                "typeName": {
                  "type": "Identifier",
                  "start": 116,
                  "end": 124,
                  "name": "Branding",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "optional": null,
              "readonly": null,
              "constraint": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 113,
                  "name": "ReservedName",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              "key": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            {
              "type": "TSTypeLiteral",
              "start": 129,
              "end": 150,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 131,
                  "end": 148,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 142,
                    "name": "__witness__",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 142,
                    "end": 148,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 144,
                      "end": 148,
                      "typeName": {
                        "type": "Identifier",
                        "start": 144,
                        "end": 148,
                        "name": "Base",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          ]
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 153,
      "end": 274,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 160,
        "end": 274,
        "id": {
          "type": "Identifier",
          "start": 165,
          "end": 179,
          "name": "BoundedInteger",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 179,
          "end": 239,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 183,
              "end": 208,
              "name": {
                "type": "Identifier",
                "start": 183,
                "end": 193,
                "name": "LowerBound",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            {
              "type": "TSTypeParameter",
              "start": 212,
              "end": 237,
              "name": {
                "type": "Identifier",
                "start": 212,
                "end": 222,
                "name": "UpperBound",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 231,
                "end": 237
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 242,
          "end": 273,
          "typeName": {
            "type": "Identifier",
            "start": 242,
            "end": 247,
            "name": "Brand",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 247,
            "end": 273,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 248,
                "end": 254
              },
              {
                "type": "TSLiteralType",
                "start": 256,
                "end": 272,
                "literal": {
                  "type": "Literal",
                  "start": 256,
                  "end": 272,
                  "value": "BoundedInteger",
                  "raw": "\"BoundedInteger\""
                }
              }
            ]
          }
        },
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "type"
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 276,
      "end": 559,
      "declaration": {
        "type": "VariableDeclaration",
        "start": 283,
        "end": 559,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 289,
            "end": 559,
            "id": {
              "type": "Identifier",
              "start": 289,
              "end": 305,
              "name": "toBoundedInteger",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 310,
              "end": 559,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 365,
                  "end": 434,
                  "name": "bounds",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 371,
                    "end": 434,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 373,
                      "end": 434,
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "start": 379,
                          "end": 402,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 379,
                            "end": 389,
                            "name": "lowerBound",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 389,
                            "end": 401,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 391,
                              "end": 401,
                              "typeName": {
                                "type": "Identifier",
                                "start": 391,
                                "end": 401,
                                "name": "LowerBound",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 407,
                          "end": 430,
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "start": 407,
                            "end": 417,
                            "name": "upperBound",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "start": 417,
                            "end": 429,
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "start": 419,
                              "end": 429,
                              "typeName": {
                                "type": "Identifier",
                                "start": 419,
                                "end": 429,
                                "name": "UpperBound",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          },
                          "accessibility": null,
                          "static": false
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 441,
                "end": 559,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 447,
                    "end": 456,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 448,
                      "end": 456,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 450,
                        "end": 456
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "body": {
                  "type": "TSAsExpression",
                  "start": 549,
                  "end": 558,
                  "expression": {
                    "type": "ObjectExpression",
                    "start": 549,
                    "end": 551,
                    "properties": []
                  },
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 555,
                    "end": 558
                  }
                },
                "typeParameters": null,
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 460,
                  "end": 500,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 462,
                    "end": 500,
                    "typeName": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 476,
                      "name": "BoundedInteger",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "start": 476,
                      "end": 500,
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "start": 477,
                          "end": 487,
                          "typeName": {
                            "type": "Identifier",
                            "start": 477,
                            "end": 487,
                            "name": "LowerBound",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "typeArguments": null
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 489,
                          "end": 499,
                          "typeName": {
                            "type": "Identifier",
                            "start": 489,
                            "end": 499,
                            "name": "UpperBound",
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
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 310,
                "end": 364,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 311,
                    "end": 336,
                    "name": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 321,
                      "name": "LowerBound",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 330,
                      "end": 336
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 338,
                    "end": 363,
                    "name": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 348,
                      "name": "UpperBound",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 357,
                      "end": 363
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "returnType": null
            },
            "definite": false
          }
        ],
        "kind": "const",
        "declare": false
      },
      "specifiers": [],
      "source": null,
      "attributes": [],
      "exportKind": "value"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
