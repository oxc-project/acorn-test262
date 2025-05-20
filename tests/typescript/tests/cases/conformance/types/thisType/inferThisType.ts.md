__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 413,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 22,
          "end": 42,
          "decorators": [],
          "name": "g",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 42,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 25,
              "end": 42,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 33,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 33,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 32,
                      "end": 33,
                      "typeArguments": null,
                      "typeName": {
                        "type": "Identifier",
                        "start": 32,
                        "end": 33,
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
                "start": 35,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 38,
                  "end": 42
                }
              },
              "typeParameters": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 43,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 45,
          "end": 46,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
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
      "type": "TSDeclareFunction",
      "start": 47,
      "end": 86,
      "async": false,
      "body": null,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "decorators": [],
        "name": "h",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 66,
          "end": 78,
          "decorators": [],
          "name": "this",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 70,
            "end": 78,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 72,
              "end": 78
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 85,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 81,
          "end": 85
        }
      },
      "typeParameters": null
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 91,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 91,
        "arguments": [
          {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 88,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "typeArguments": null
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 211,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 137,
        "decorators": [],
        "name": "Check",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 143,
        "end": 210,
        "checkType": {
          "type": "TSTypeReference",
          "start": 143,
          "end": 144,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 153,
          "end": 191,
          "params": [
            {
              "type": "Identifier",
              "start": 154,
              "end": 167,
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 158,
                "end": 167,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 160,
                  "end": 167,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 166,
                    "end": 167,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            },
            {
              "type": "RestElement",
              "start": 169,
              "end": 183,
              "argument": {
                "type": "Identifier",
                "start": 172,
                "end": 176,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 176,
                "end": 183,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 178,
                  "end": 183,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 178,
                    "end": 181
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 185,
            "end": 191,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 188,
              "end": 191
            }
          },
          "typeParameters": null
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 203,
          "end": 210
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 194,
          "end": 200
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 137,
        "end": 140,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 138,
            "end": 139,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
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
      "start": 212,
      "end": 252,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 219,
        "decorators": [],
        "name": "r1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 222,
        "end": 251,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 227,
          "end": 251,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 228,
              "end": 250,
              "params": [
                {
                  "type": "Identifier",
                  "start": 229,
                  "end": 241,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 235,
                      "end": 241
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 243,
                "end": 250,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 246,
                  "end": 250
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 222,
          "end": 227,
          "decorators": [],
          "name": "Check",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 274,
      "end": 353,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 283,
        "decorators": [],
        "name": "This",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 290,
        "end": 352,
        "checkType": {
          "type": "TSTypeReference",
          "start": 290,
          "end": 291,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 300,
          "end": 338,
          "params": [
            {
              "type": "Identifier",
              "start": 301,
              "end": 314,
              "decorators": [],
              "name": "this",
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 305,
                "end": 314,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 307,
                  "end": 314,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 313,
                    "end": 314,
                    "const": false,
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 314,
                      "decorators": [],
                      "name": "U",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "out": false
                  }
                }
              }
            },
            {
              "type": "RestElement",
              "start": 316,
              "end": 330,
              "argument": {
                "type": "Identifier",
                "start": 319,
                "end": 323,
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null
              },
              "decorators": [],
              "optional": false,
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 323,
                "end": 330,
                "typeAnnotation": {
                  "type": "TSArrayType",
                  "start": 325,
                  "end": 330,
                  "elementType": {
                    "type": "TSAnyKeyword",
                    "start": 325,
                    "end": 328
                  }
                }
              },
              "value": null
            }
          ],
          "returnType": {
            "type": "TSTypeAnnotation",
            "start": 332,
            "end": 338,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 335,
              "end": 338
            }
          },
          "typeParameters": null
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 345,
          "end": 352
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 341,
          "end": 342,
          "typeArguments": null,
          "typeName": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 283,
        "end": 286,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 284,
            "end": 285,
            "const": false,
            "constraint": null,
            "default": null,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
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
      "start": 354,
      "end": 393,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 361,
        "decorators": [],
        "name": "r2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 364,
        "end": 392,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 368,
          "end": 392,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 369,
              "end": 391,
              "params": [
                {
                  "type": "Identifier",
                  "start": 370,
                  "end": 382,
                  "decorators": [],
                  "name": "this",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 374,
                    "end": 382,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 376,
                      "end": 382
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 384,
                "end": 391,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 387,
                  "end": 391
                }
              },
              "typeParameters": null
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 364,
          "end": 368,
          "decorators": [],
          "name": "This",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "typeParameters": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
