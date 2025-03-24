__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 888,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 58,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 12,
        "name": "Compute",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 12,
        "end": 15,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 13,
            "end": 14,
            "name": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "A",
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
        "type": "TSIntersectionType",
        "start": 18,
        "end": 57,
        "types": [
          {
            "type": "TSMappedType",
            "start": 18,
            "end": 52,
            "typeParameter": {
              "type": "TSTypeParameter",
              "start": 21,
              "end": 33,
              "name": {
                "type": "Identifier",
                "start": 21,
                "end": 22,
                "name": "K",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 26,
                "end": 33,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 32,
                  "end": 33,
                  "typeName": {
                    "type": "Identifier",
                    "start": 32,
                    "end": 33,
                    "name": "A",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 36,
              "end": 49,
              "typeName": {
                "type": "Identifier",
                "start": 36,
                "end": 43,
                "name": "Compute",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 43,
                "end": 49,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 44,
                    "end": 48,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 44,
                      "end": 45,
                      "typeName": {
                        "type": "Identifier",
                        "start": 44,
                        "end": 45,
                        "name": "A",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 46,
                      "end": 47,
                      "typeName": {
                        "type": "Identifier",
                        "start": 46,
                        "end": 47,
                        "name": "K",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            },
            "optional": null,
            "readonly": null,
            "constraint": {
              "type": "TSTypeOperator",
              "start": 26,
              "end": 33,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 32,
                "end": 33,
                "typeName": {
                  "type": "Identifier",
                  "start": 32,
                  "end": 33,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 22,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 55,
            "end": 57,
            "members": []
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 60,
      "end": 110,
      "id": {
        "type": "Identifier",
        "start": 65,
        "end": 75,
        "name": "EqualsTest",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 75,
        "end": 78,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 76,
            "end": 77,
            "name": {
              "type": "Identifier",
              "start": 76,
              "end": 77,
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
        "type": "TSFunctionType",
        "start": 81,
        "end": 109,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 81,
          "end": 84,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 82,
              "end": 83,
              "name": {
                "type": "Identifier",
                "start": 82,
                "end": 83,
                "name": "A",
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
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 87,
          "end": 109,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 90,
            "end": 109,
            "checkType": {
              "type": "TSTypeReference",
              "start": 90,
              "end": 91,
              "typeName": {
                "type": "Identifier",
                "start": 90,
                "end": 91,
                "name": "A",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSTypeReference",
              "start": 100,
              "end": 101,
              "typeName": {
                "type": "Identifier",
                "start": 100,
                "end": 101,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            "trueType": {
              "type": "TSLiteralType",
              "start": 104,
              "end": 105,
              "literal": {
                "type": "Literal",
                "start": 104,
                "end": 105,
                "value": 1,
                "raw": "1"
              }
            },
            "falseType": {
              "type": "TSLiteralType",
              "start": 108,
              "end": 109,
              "literal": {
                "type": "Literal",
                "start": 108,
                "end": 109,
                "value": 0,
                "raw": "0"
              }
            }
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 111,
      "end": 179,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 122,
        "name": "Equals",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 122,
        "end": 130,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 123,
            "end": 125,
            "name": {
              "type": "Identifier",
              "start": 123,
              "end": 125,
              "name": "A1",
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
            "start": 127,
            "end": 129,
            "name": {
              "type": "Identifier",
              "start": 127,
              "end": 129,
              "name": "A2",
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
        "start": 133,
        "end": 178,
        "checkType": {
          "type": "TSTypeReference",
          "start": 133,
          "end": 147,
          "typeName": {
            "type": "Identifier",
            "start": 133,
            "end": 143,
            "name": "EqualsTest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 143,
            "end": 147,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 144,
                "end": 146,
                "typeName": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 146,
                  "name": "A2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 156,
          "end": 170,
          "typeName": {
            "type": "Identifier",
            "start": 156,
            "end": 166,
            "name": "EqualsTest",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 166,
            "end": 170,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 167,
                "end": 169,
                "typeName": {
                  "type": "Identifier",
                  "start": 167,
                  "end": 169,
                  "name": "A1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "trueType": {
          "type": "TSLiteralType",
          "start": 173,
          "end": 174,
          "literal": {
            "type": "Literal",
            "start": 173,
            "end": 174,
            "value": 1,
            "raw": "1"
          }
        },
        "falseType": {
          "type": "TSLiteralType",
          "start": 177,
          "end": 178,
          "literal": {
            "type": "Literal",
            "start": 177,
            "end": 178,
            "value": 0,
            "raw": "0"
          }
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 181,
      "end": 236,
      "id": {
        "type": "Identifier",
        "start": 186,
        "end": 192,
        "name": "Filter",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 192,
        "end": 198,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 193,
            "end": 194,
            "name": {
              "type": "Identifier",
              "start": 193,
              "end": 194,
              "name": "K",
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
            "start": 196,
            "end": 197,
            "name": {
              "type": "Identifier",
              "start": 196,
              "end": 197,
              "name": "I",
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
        "start": 201,
        "end": 235,
        "checkType": {
          "type": "TSTypeReference",
          "start": 201,
          "end": 213,
          "typeName": {
            "type": "Identifier",
            "start": 201,
            "end": 207,
            "name": "Equals",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 207,
            "end": 213,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 208,
                "end": 209,
                "typeName": {
                  "type": "Identifier",
                  "start": 208,
                  "end": 209,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 211,
                "end": 212,
                "typeName": {
                  "type": "Identifier",
                  "start": 211,
                  "end": 212,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "extendsType": {
          "type": "TSLiteralType",
          "start": 222,
          "end": 223,
          "literal": {
            "type": "Literal",
            "start": 222,
            "end": 223,
            "value": 1,
            "raw": "1"
          }
        },
        "trueType": {
          "type": "TSNeverKeyword",
          "start": 226,
          "end": 231
        },
        "falseType": {
          "type": "TSTypeReference",
          "start": 234,
          "end": 235,
          "typeName": {
            "type": "Identifier",
            "start": 234,
            "end": 235,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 238,
      "end": 329,
      "id": {
        "type": "Identifier",
        "start": 243,
        "end": 252,
        "name": "OmitIndex",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 252,
        "end": 282,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 253,
            "end": 254,
            "name": {
              "type": "Identifier",
              "start": 253,
              "end": 254,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 256,
            "end": 281,
            "name": {
              "type": "Identifier",
              "start": 256,
              "end": 257,
              "name": "I",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 266,
              "end": 281,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 266,
                  "end": 272
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 275,
                  "end": 281
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSMappedType",
        "start": 285,
        "end": 328,
        "typeParameter": {
          "type": "TSTypeParameter",
          "start": 290,
          "end": 302,
          "name": {
            "type": "Identifier",
            "start": 290,
            "end": 291,
            "name": "K",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 295,
            "end": 302,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 301,
              "end": 302,
              "typeName": {
                "type": "Identifier",
                "start": 301,
                "end": 302,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "default": null,
          "in": false,
          "out": false,
          "const": false
        },
        "nameType": {
          "type": "TSTypeReference",
          "start": 306,
          "end": 318,
          "typeName": {
            "type": "Identifier",
            "start": 306,
            "end": 312,
            "name": "Filter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 312,
            "end": 318,
            "params": [
              {
                "type": "TSTypeReference",
                "start": 313,
                "end": 314,
                "typeName": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 314,
                  "name": "K",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              },
              {
                "type": "TSTypeReference",
                "start": 316,
                "end": 317,
                "typeName": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 317,
                  "name": "I",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            ]
          }
        },
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "start": 321,
          "end": 325,
          "objectType": {
            "type": "TSTypeReference",
            "start": 321,
            "end": 322,
            "typeName": {
              "type": "Identifier",
              "start": 321,
              "end": 322,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          },
          "indexType": {
            "type": "TSTypeReference",
            "start": 323,
            "end": 324,
            "typeName": {
              "type": "Identifier",
              "start": 323,
              "end": 324,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "optional": null,
        "readonly": null,
        "constraint": {
          "type": "TSTypeOperator",
          "start": 295,
          "end": 302,
          "operator": "keyof",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 301,
            "end": 302,
            "typeName": {
              "type": "Identifier",
              "start": 301,
              "end": 302,
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
          }
        },
        "key": {
          "type": "Identifier",
          "start": 290,
          "end": 291,
          "name": "K",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 331,
      "end": 378,
      "id": {
        "type": "Identifier",
        "start": 336,
        "end": 347,
        "name": "IndexObject",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 350,
        "end": 377,
        "members": [
          {
            "type": "TSIndexSignature",
            "start": 352,
            "end": 375,
            "parameters": [
              {
                "type": "Identifier",
                "start": 353,
                "end": 364,
                "name": "key",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 356,
                  "end": 364,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 358,
                    "end": 364
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 365,
              "end": 374,
              "typeAnnotation": {
                "type": "TSUnknownKeyword",
                "start": 367,
                "end": 374
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 379,
      "end": 425,
      "id": {
        "type": "Identifier",
        "start": 384,
        "end": 390,
        "name": "FooBar",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 393,
        "end": 424,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 395,
            "end": 408,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 395,
              "end": 398,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 398,
              "end": 407,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 400,
                "end": 407,
                "literal": {
                  "type": "Literal",
                  "start": 400,
                  "end": 407,
                  "value": "hello",
                  "raw": "\"hello\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 409,
            "end": 422,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 409,
              "end": 412,
              "name": "bar",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 412,
              "end": 421,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 414,
                "end": 421,
                "literal": {
                  "type": "Literal",
                  "start": 414,
                  "end": 421,
                  "value": "world",
                  "raw": "\"world\""
                }
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
      "type": "TSTypeAliasDeclaration",
      "start": 427,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 432,
        "end": 441,
        "name": "WithIndex",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 444,
        "end": 473,
        "typeName": {
          "type": "Identifier",
          "start": 444,
          "end": 451,
          "name": "Compute",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 451,
          "end": 473,
          "params": [
            {
              "type": "TSIntersectionType",
              "start": 452,
              "end": 472,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 452,
                  "end": 458,
                  "typeName": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 458,
                    "name": "FooBar",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 461,
                  "end": 472,
                  "typeName": {
                    "type": "Identifier",
                    "start": 461,
                    "end": 472,
                    "name": "IndexObject",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 536,
      "end": 585,
      "id": {
        "type": "Identifier",
        "start": 541,
        "end": 553,
        "name": "WithoutIndex",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 556,
        "end": 584,
        "typeName": {
          "type": "Identifier",
          "start": 556,
          "end": 565,
          "name": "OmitIndex",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 565,
          "end": 584,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 566,
              "end": 575,
              "typeName": {
                "type": "Identifier",
                "start": 566,
                "end": 575,
                "name": "WithIndex",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            },
            {
              "type": "TSStringKeyword",
              "start": 577,
              "end": 583
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 646,
      "end": 676,
      "id": {
        "type": "Identifier",
        "start": 651,
        "end": 660,
        "name": "FooBarKey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 663,
        "end": 675,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 669,
          "end": 675,
          "typeName": {
            "type": "Identifier",
            "start": 669,
            "end": 675,
            "name": "FooBar",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 715,
      "end": 751,
      "id": {
        "type": "Identifier",
        "start": 720,
        "end": 732,
        "name": "WithIndexKey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 735,
        "end": 750,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 741,
          "end": 750,
          "typeName": {
            "type": "Identifier",
            "start": 741,
            "end": 750,
            "name": "WithIndex",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 799,
      "end": 841,
      "id": {
        "type": "Identifier",
        "start": 804,
        "end": 819,
        "name": "WithoutIndexKey",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeOperator",
        "start": 822,
        "end": 840,
        "operator": "keyof",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 828,
          "end": 840,
          "typeName": {
            "type": "Identifier",
            "start": 828,
            "end": 840,
            "name": "WithoutIndex",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
