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
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 32,
        "decorators": [],
        "name": "Pairs",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 33,
              "end": 34,
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
        "start": 38,
        "end": 116,
        "key": {
          "type": "Identifier",
          "start": 45,
          "end": 49,
          "decorators": [],
          "name": "TKey",
          "optional": false,
          "typeAnnotation": null
        },
        "constraint": {
          "type": "TSTypeOperator",
          "start": 53,
          "end": 60,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 59,
            "end": 60,
            "typeName": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
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
          "type": "TSTypeLiteral",
          "start": 63,
          "end": 113,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 73,
              "end": 83,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 73,
                "end": 76,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 76,
                "end": 82,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 78,
                  "end": 82,
                  "typeName": {
                    "type": "Identifier",
                    "start": 78,
                    "end": 82,
                    "decorators": [],
                    "name": "TKey",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "accessibility": null,
              "static": false
            },
            {
              "type": "TSPropertySignature",
              "start": 92,
              "end": 107,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 92,
                "end": 97,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 97,
                "end": 106,
                "typeAnnotation": {
                  "type": "TSIndexedAccessType",
                  "start": 99,
                  "end": 106,
                  "objectType": {
                    "type": "TSTypeReference",
                    "start": 99,
                    "end": 100,
                    "typeName": {
                      "type": "Identifier",
                      "start": 99,
                      "end": 100,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "indexType": {
                    "type": "TSTypeReference",
                    "start": 101,
                    "end": 105,
                    "typeName": {
                      "type": "Identifier",
                      "start": 101,
                      "end": 105,
                      "decorators": [],
                      "name": "TKey",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "accessibility": null,
              "static": false
            }
          ]
        },
        "optional": false,
        "readonly": null
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 119,
      "end": 152,
      "id": {
        "type": "Identifier",
        "start": 124,
        "end": 128,
        "decorators": [],
        "name": "Pair",
        "optional": false,
        "typeAnnotation": null
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
            "name": {
              "type": "Identifier",
              "start": 129,
              "end": 130,
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
        "type": "TSIndexedAccessType",
        "start": 134,
        "end": 151,
        "objectType": {
          "type": "TSTypeReference",
          "start": 134,
          "end": 142,
          "typeName": {
            "type": "Identifier",
            "start": 134,
            "end": 139,
            "decorators": [],
            "name": "Pairs",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 139,
            "end": 142,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 140,
                "end": 141,
                "typeName": {
                  "type": "Identifier",
                  "start": 140,
                  "end": 141,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        },
        "indexType": {
          "type": "TSTypeOperator",
          "start": 143,
          "end": 150,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 149,
            "end": 150,
            "typeName": {
              "type": "Identifier",
              "start": 149,
              "end": 150,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 154,
      "end": 206,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 165,
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 168,
        "end": 205,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 174,
            "end": 186,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 174,
              "end": 177,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 177,
              "end": 185,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 179,
                "end": 185
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 191,
            "end": 203,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 191,
              "end": 194,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 194,
              "end": 202,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 196,
                "end": 202
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
      "start": 231,
      "end": 290,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 289,
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
                "typeName": {
                  "type": "Identifier",
                  "start": 242,
                  "end": 246,
                  "decorators": [],
                  "name": "Pair",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 246,
                  "end": 254,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 247,
                      "end": 253,
                      "typeName": {
                        "type": "Identifier",
                        "start": 247,
                        "end": 253,
                        "decorators": [],
                        "name": "FooBar",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 263,
                  "end": 266,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 268,
                  "end": 273,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 279,
                "end": 287,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 279,
                  "end": 284,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 286,
                  "end": 287,
                  "value": 3,
                  "raw": "3"
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
      "type": "VariableDeclaration",
      "start": 315,
      "end": 389,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 319,
          "end": 388,
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
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 326,
                  "end": 339,
                  "typeName": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 331,
                    "decorators": [],
                    "name": "Pairs",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 331,
                    "end": 339,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 332,
                        "end": 338,
                        "typeName": {
                          "type": "Identifier",
                          "start": 332,
                          "end": 338,
                          "decorators": [],
                          "name": "FooBar",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    ]
                  }
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "start": 340,
                  "end": 352,
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 346,
                    "end": 352,
                    "typeName": {
                      "type": "Identifier",
                      "start": 346,
                      "end": 352,
                      "decorators": [],
                      "name": "FooBar",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 362,
                  "end": 365,
                  "decorators": [],
                  "name": "key",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 367,
                  "end": 372,
                  "value": "foo",
                  "raw": "\"foo\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 378,
                "end": 386,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 378,
                  "end": 383,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 385,
                  "end": 386,
                  "value": 3,
                  "raw": "3"
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
