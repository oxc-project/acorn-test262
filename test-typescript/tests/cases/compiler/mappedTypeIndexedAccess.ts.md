__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 389,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 117,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 32,
        "decorators": [],
        "name": "Pairs",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 38,
        "end": 116,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 53,
          "end": 60,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 59,
            "end": 60,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "key": {
          "type": "Identifier",
          "start": 45,
          "end": 49,
          "decorators": [],
          "name": "TKey",
          "optional": false,
          "typeAnnotation": null
        },
        "nameType": null,
        "optional": false,
        "readonly": null,
        "typeAnnotation": {
          "type": "TSTypeLiteral",
          "start": 63,
          "end": 113,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 73,
              "end": 83,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 76,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 76,
                "end": 82,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 78,
                  "end": 82,
                  "typeArguments": null,
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 82,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            },
            {
              "type": "TSPropertySignature",
              "start": 92,
              "end": 107,
              "accessibility": null,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 92,
                "end": 97,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "readonly": false,
              "static": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 97,
                "end": 106,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 99,
                  "end": 106,
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 101,
                    "end": 105,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 105,
                      "decorators": [],
                      "name": "TKey",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 100,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              }
            }
          ]
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 32,
        "end": 35,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 33,
            "end": 34,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
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
      "start": 119,
      "end": 152,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 128,
        "decorators": [],
        "name": "Pair",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIndexedAccessType",
        "start": 134,
        "end": 151,
        "indexType": {
          "type": "TSTypeOperator",
          "start": 143,
          "end": 150,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 149,
            "end": 150,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            }
          }
        },
        "objectType": {
          "type": "TSTypeReference",
          "start": 134,
          "end": 142,
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 139,
            "end": 142,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 140,
                "end": 141,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
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
            "start": 134,
            "end": 139,
            "decorators": [],
            "name": "Pairs",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 128,
        "end": 131,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 129,
            "end": 130,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
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
      "start": 154,
      "end": 206,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 165,
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 168,
        "end": 205,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 174,
            "end": 186,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 177,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 191,
            "end": 203,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 202,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 196,
                "end": 202
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 231,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 289,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 254,
            "decorators": [],
            "name": "pair1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 240,
              "end": 254,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 242,
                "end": 254,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 246,
                  "end": 254,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 247,
                      "end": 253,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 253,
                        "decorators": [],
                        "name": "FooBar",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 246,
                  "decorators": [],
                  "name": "Pair",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 257,
            "end": 289,
            "properties": [
              {
                "type": "Property",
                "start": 263,
                "end": 273,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 266,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 268,
                  "end": 273,
                  "raw": "\"foo\"",
                  "value": "foo",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 279,
                "end": 287,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 284,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 286,
                  "end": 287,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 315,
      "end": 389,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 388,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 319,
            "end": 353,
            "decorators": [],
            "name": "pair2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 324,
              "end": 353,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 326,
                "end": 353,
                "indexType": {
                  "type": "TSTypeOperator",
                  "start": 340,
                  "end": 352,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 346,
                    "end": 352,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 352,
                      "decorators": [],
                      "name": "FooBar",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 326,
                  "end": 339,
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 331,
                    "end": 339,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 332,
                        "end": 338,
                        "typeArguments": null,
                        "typeName": {
                          "type": "Identifier",
                          "start": 332,
                          "end": 338,
                          "decorators": [],
                          "name": "FooBar",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 331,
                    "decorators": [],
                    "name": "Pairs",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 356,
            "end": 388,
            "properties": [
              {
                "type": "Property",
                "start": 362,
                "end": 372,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 365,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 367,
                  "end": 372,
                  "raw": "\"foo\"",
                  "value": "foo",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 378,
                "end": 386,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 383,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 385,
                  "end": 386,
                  "raw": "3",
                  "value": 3,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
