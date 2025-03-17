__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 414,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 0,
      "end": 46,
      "id": {
        "type": "Identifier",
        "start": 17,
        "end": 18,
        "name": "f",
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
          "start": 22,
          "end": 42,
          "name": "g",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 23,
            "end": 42,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 25,
              "end": 42,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 26,
                  "end": 33,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 30,
                    "end": 33,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 32,
                      "end": 33,
                      "typeName": {
                        "type": "Identifier",
                        "start": 32,
                        "end": 33,
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
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 35,
                "end": 42,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 38,
                  "end": 42
                }
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 18,
        "end": 21,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 19,
            "end": 20,
            "name": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 43,
        "end": 46,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 45,
          "end": 46,
          "typeName": {
            "type": "Identifier",
            "start": 45,
            "end": 46,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 47,
      "end": 86,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 65,
        "name": "h",
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
          "start": 66,
          "end": 78,
          "name": "this",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 70,
            "end": 78,
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 72,
              "end": 78
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 79,
        "end": 85,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 81,
          "end": 85
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 91,
      "expression": {
        "type": "CallExpression",
        "start": 87,
        "end": 91,
        "callee": {
          "type": "Identifier",
          "start": 87,
          "end": 88,
          "name": "f",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 89,
            "end": 90,
            "name": "h",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 127,
      "end": 211,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 137,
        "name": "Check",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 138,
              "end": 139,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "start": 143,
        "end": 210,
        "checkType": {
          "type": "TSTypeReference",
          "start": 143,
          "end": 144,
          "typeName": {
            "type": "Identifier",
            "start": 143,
            "end": 144,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 153,
          "end": 191,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 154,
              "end": 167,
              "name": "this",
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
                    "name": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 169,
              "end": 183,
              "argument": {
                "type": "Identifier",
                "start": 172,
                "end": 176,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          }
        },
        "trueType": {
          "type": "TSStringKeyword",
          "start": 194,
          "end": 200
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 203,
          "end": 210
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 212,
      "end": 252,
      "id": {
        "type": "Identifier",
        "start": 217,
        "end": 219,
        "name": "r1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 222,
        "end": 251,
        "typeName": {
          "type": "Identifier",
          "start": 222,
          "end": 227,
          "name": "Check",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 227,
          "end": 251,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 228,
              "end": 250,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 229,
                  "end": 241,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 233,
                    "end": 241,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 235,
                      "end": 241
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 274,
      "end": 353,
      "id": {
        "type": "Identifier",
        "start": 279,
        "end": 283,
        "name": "This",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
            "name": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
        "start": 290,
        "end": 352,
        "checkType": {
          "type": "TSTypeReference",
          "start": 290,
          "end": 291,
          "typeName": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "name": "T",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSFunctionType",
          "start": 300,
          "end": 338,
          "typeParameters": null,
          "params": [
            {
              "type": "Identifier",
              "start": 301,
              "end": 314,
              "name": "this",
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
                    "name": {
                      "type": "Identifier",
                      "start": 313,
                      "end": 314,
                      "name": "U",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "constraint": null,
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                }
              },
              "decorators": [],
              "optional": false
            },
            {
              "type": "RestElement",
              "start": 316,
              "end": 330,
              "argument": {
                "type": "Identifier",
                "start": 319,
                "end": 323,
                "name": "args",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 341,
          "end": 342,
          "typeName": {
            "type": "Identifier",
            "start": 341,
            "end": 342,
            "name": "U",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSUnknownKeyword",
          "start": 345,
          "end": 352
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 354,
      "end": 393,
      "id": {
        "type": "Identifier",
        "start": 359,
        "end": 361,
        "name": "r2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 364,
        "end": 392,
        "typeName": {
          "type": "Identifier",
          "start": 364,
          "end": 368,
          "name": "This",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 368,
          "end": 392,
          "params": [
            {
              "type": "TSFunctionType",
              "start": 369,
              "end": 391,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 370,
                  "end": 382,
                  "name": "this",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 374,
                    "end": 382,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 376,
                      "end": 382
                    }
                  },
                  "decorators": [],
                  "optional": false
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
              }
            }
          ]
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
