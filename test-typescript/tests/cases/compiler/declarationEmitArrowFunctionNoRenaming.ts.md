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
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 7,
        "end": 151,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 12,
          "end": 17,
          "decorators": [],
          "name": "Brand",
          "optional": false
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
                "decorators": [],
                "name": "Base",
                "optional": false
              }
            },
            {
              "type": "TSMappedType",
              "start": 93,
              "end": 126,
              "constraint": {
                "type": "TSTypeReference",
                "start": 101,
                "end": 113,
                "typeName": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 113,
                  "decorators": [],
                  "name": "ReservedName",
                  "optional": false
                }
              },
              "key": {
                "type": "Identifier",
                "start": 96,
                "end": 97,
                "decorators": [],
                "name": "K",
                "optional": false
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
                  "decorators": [],
                  "name": "Branding",
                  "optional": false
                }
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
                  "key": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 142,
                    "decorators": [],
                    "name": "__witness__",
                    "optional": false
                  },
                  "optional": false,
                  "readonly": false,
                  "static": false,
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
                        "decorators": [],
                        "name": "Base",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          ]
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 21,
                "end": 25,
                "decorators": [],
                "name": "Base",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 29,
              "end": 37,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 29,
                "end": 37,
                "decorators": [],
                "name": "Branding",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 41,
              "end": 81,
              "const": false,
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
                  "raw": "\"__type__\"",
                  "value": "__type__"
                }
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 41,
                "end": 53,
                "decorators": [],
                "name": "ReservedName",
                "optional": false
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
      "start": 153,
      "end": 274,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 160,
        "end": 274,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 165,
          "end": 179,
          "decorators": [],
          "name": "BoundedInteger",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 242,
          "end": 273,
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
                  "raw": "\"BoundedInteger\"",
                  "value": "BoundedInteger"
                }
              }
            ]
          },
          "typeName": {
            "type": "Identifier",
            "start": 242,
            "end": 247,
            "decorators": [],
            "name": "Brand",
            "optional": false
          }
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
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 202,
                "end": 208
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 183,
                "end": 193,
                "decorators": [],
                "name": "LowerBound",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 212,
              "end": 237,
              "const": false,
              "constraint": {
                "type": "TSNumberKeyword",
                "start": 231,
                "end": 237
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 212,
                "end": 222,
                "decorators": [],
                "name": "UpperBound",
                "optional": false
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
      "start": 276,
      "end": 559,
      "attributes": [],
      "declaration": {
        "type": "VariableDeclaration",
        "start": 283,
        "end": 559,
        "declarations": [
          {
            "type": "VariableDeclarator",
            "start": 289,
            "end": 559,
            "definite": false,
            "id": {
              "type": "Identifier",
              "start": 289,
              "end": 305,
              "decorators": [],
              "name": "toBoundedInteger",
              "optional": false
            },
            "init": {
              "type": "ArrowFunctionExpression",
              "start": 310,
              "end": 559,
              "async": false,
              "body": {
                "type": "ArrowFunctionExpression",
                "start": 441,
                "end": 559,
                "async": false,
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
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 447,
                    "end": 456,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 448,
                      "end": 456,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 450,
                        "end": 456
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 460,
                  "end": 500,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 462,
                    "end": 500,
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
                            "decorators": [],
                            "name": "LowerBound",
                            "optional": false
                          }
                        },
                        {
                          "type": "TSTypeReference",
                          "start": 489,
                          "end": 499,
                          "typeName": {
                            "type": "Identifier",
                            "start": 489,
                            "end": 499,
                            "decorators": [],
                            "name": "UpperBound",
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeName": {
                      "type": "Identifier",
                      "start": 462,
                      "end": 476,
                      "decorators": [],
                      "name": "BoundedInteger",
                      "optional": false
                    }
                  }
                }
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 365,
                  "end": 434,
                  "decorators": [],
                  "name": "bounds",
                  "optional": false,
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
                          "key": {
                            "type": "Identifier",
                            "start": 379,
                            "end": 389,
                            "decorators": [],
                            "name": "lowerBound",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
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
                                "decorators": [],
                                "name": "LowerBound",
                                "optional": false
                              }
                            }
                          }
                        },
                        {
                          "type": "TSPropertySignature",
                          "start": 407,
                          "end": 430,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 407,
                            "end": 417,
                            "decorators": [],
                            "name": "upperBound",
                            "optional": false
                          },
                          "optional": false,
                          "readonly": false,
                          "static": false,
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
                                "decorators": [],
                                "name": "UpperBound",
                                "optional": false
                              }
                            }
                          }
                        }
                      ]
                    }
                  }
                }
              ],
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 310,
                "end": 364,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 311,
                    "end": 336,
                    "const": false,
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 330,
                      "end": 336
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 311,
                      "end": 321,
                      "decorators": [],
                      "name": "LowerBound",
                      "optional": false
                    },
                    "out": false
                  },
                  {
                    "type": "TSTypeParameter",
                    "start": 338,
                    "end": 363,
                    "const": false,
                    "constraint": {
                      "type": "TSNumberKeyword",
                      "start": 357,
                      "end": 363
                    },
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 338,
                      "end": 348,
                      "decorators": [],
                      "name": "UpperBound",
                      "optional": false
                    },
                    "out": false
                  }
                ]
              }
            }
          }
        ],
        "declare": false,
        "kind": "const"
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
