__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 22,
  "end": 474,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 22,
      "end": 61,
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 30,
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 30,
        "end": 33,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 31,
            "end": 32,
            "name": {
              "type": "Identifier",
              "start": 31,
              "end": 32,
              "decorators": [],
              "name": "A",
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
        "type": "TSTypeLiteral",
        "start": 36,
        "end": 60,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 38,
            "end": 50,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 38,
              "end": 42,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 42,
              "end": 49,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 44,
                "end": 49,
                "literal": {
                  "type": "Literal",
                  "start": 44,
                  "end": 49,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 51,
            "end": 58,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 53,
              "end": 58,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 55,
                "end": 58,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 55,
                  "end": 56,
                  "typeName": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 62,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 67,
        "end": 70,
        "decorators": [],
        "name": "Bar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 70,
        "end": 73,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 71,
            "end": 72,
            "name": {
              "type": "Identifier",
              "start": 71,
              "end": 72,
              "decorators": [],
              "name": "A",
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
        "type": "TSTypeLiteral",
        "start": 76,
        "end": 98,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 78,
            "end": 90,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 78,
              "end": 82,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 89,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 84,
                "end": 89,
                "literal": {
                  "type": "Literal",
                  "start": 84,
                  "end": 89,
                  "value": "bar",
                  "raw": "\"bar\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSCallSignatureDeclaration",
            "start": 91,
            "end": 96,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 93,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 95,
                "end": 96,
                "typeName": {
                  "type": "Identifier",
                  "start": 95,
                  "end": 96,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 101,
      "end": 134,
      "id": {
        "type": "Identifier",
        "start": 106,
        "end": 112,
        "decorators": [],
        "name": "FooBar",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 115,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "A",
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
        "type": "TSUnionType",
        "start": 118,
        "end": 133,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 118,
            "end": 124,
            "typeName": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "decorators": [],
              "name": "Foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 121,
              "end": 124,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 122,
                  "end": 123,
                  "typeName": {
                    "type": "Identifier",
                    "start": 122,
                    "end": 123,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          },
          {
            "type": "TSTypeReference",
            "start": 127,
            "end": 133,
            "typeName": {
              "type": "Identifier",
              "start": 127,
              "end": 130,
              "decorators": [],
              "name": "Bar",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 130,
              "end": 133,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 131,
                  "end": 132,
                  "typeName": {
                    "type": "Identifier",
                    "start": 131,
                    "end": 132,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 136,
      "end": 191,
      "id": {
        "type": "Identifier",
        "start": 141,
        "end": 147,
        "decorators": [],
        "name": "InferA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 147,
        "end": 150,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 148,
            "end": 149,
            "name": {
              "type": "Identifier",
              "start": 148,
              "end": 149,
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
        "start": 153,
        "end": 190,
        "checkType": {
          "type": "TSTypeReference",
          "start": 153,
          "end": 154,
          "typeName": {
            "type": "Identifier",
            "start": 153,
            "end": 154,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSTypeReference",
          "start": 163,
          "end": 178,
          "typeName": {
            "type": "Identifier",
            "start": 163,
            "end": 169,
            "decorators": [],
            "name": "FooBar",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 169,
            "end": 178,
            "params": [
              {
                "type": "TSInferType",
                "start": 170,
                "end": 177,
                "typeParameter": {
                  "type": "TSTypeParameter",
                  "start": 176,
                  "end": 177,
                  "name": {
                    "type": "Identifier",
                    "start": 176,
                    "end": 177,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              }
            ]
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 181,
          "end": 182,
          "typeName": {
            "type": "Identifier",
            "start": 181,
            "end": 182,
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 185,
          "end": 190
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 193,
      "end": 225,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 202,
        "decorators": [],
        "name": "FooA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 205,
        "end": 224,
        "typeName": {
          "type": "Identifier",
          "start": 205,
          "end": 211,
          "decorators": [],
          "name": "InferA",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 211,
          "end": 224,
          "params": [
            {
              "type": "TSTypeReference",
              "start": 212,
              "end": 223,
              "typeName": {
                "type": "Identifier",
                "start": 212,
                "end": 215,
                "decorators": [],
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 215,
                "end": 223,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 216,
                    "end": 222
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 260,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 265,
        "end": 269,
        "decorators": [],
        "name": "Item",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 269,
        "end": 272,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 270,
            "end": 271,
            "name": {
              "type": "Identifier",
              "start": 270,
              "end": 271,
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
        "type": "TSUnionType",
        "start": 275,
        "end": 324,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 275,
            "end": 297,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 277,
                "end": 287,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 277,
                  "end": 281,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 281,
                  "end": 286,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 283,
                    "end": 286,
                    "literal": {
                      "type": "Literal",
                      "start": 283,
                      "end": 286,
                      "value": "a",
                      "raw": "'a'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 288,
                "end": 295,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 288,
                  "end": 292,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 292,
                  "end": 295,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 294,
                    "end": 295,
                    "typeName": {
                      "type": "Identifier",
                      "start": 294,
                      "end": 295,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 300,
            "end": 324,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 302,
                "end": 312,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 306,
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 306,
                  "end": 311,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 308,
                    "end": 311,
                    "literal": {
                      "type": "Literal",
                      "start": 308,
                      "end": 311,
                      "value": "b",
                      "raw": "'b'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 313,
                "end": 322,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 317,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 317,
                  "end": 322,
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 319,
                    "end": 322,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 319,
                      "end": 320,
                      "typeName": {
                        "type": "Identifier",
                        "start": 319,
                        "end": 320,
                        "decorators": [],
                        "name": "T",
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
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 327,
      "end": 369,
      "id": {
        "type": "Identifier",
        "start": 344,
        "end": 347,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 347,
        "end": 350,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 348,
            "end": 349,
            "name": {
              "type": "Identifier",
              "start": 348,
              "end": 349,
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
          "start": 351,
          "end": 364,
          "decorators": [],
          "name": "item",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 355,
            "end": 364,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 357,
              "end": 364,
              "typeName": {
                "type": "Identifier",
                "start": 357,
                "end": 361,
                "decorators": [],
                "name": "Item",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 361,
                "end": 364,
                "params": [
                  {
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
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 365,
        "end": 368,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 367,
          "end": 368,
          "typeName": {
            "type": "Identifier",
            "start": 367,
            "end": 368,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 371,
      "end": 409,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 375,
          "end": 408,
          "id": {
            "type": "Identifier",
            "start": 375,
            "end": 377,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 380,
            "end": 408,
            "callee": {
              "type": "Identifier",
              "start": 380,
              "end": 383,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 384,
                "end": 407,
                "properties": [
                  {
                    "type": "Property",
                    "start": 386,
                    "end": 395,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 386,
                      "end": 390,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 392,
                      "end": 395,
                      "value": "a",
                      "raw": "'a'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 397,
                    "end": 405,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 397,
                      "end": 401,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 403,
                      "end": 405,
                      "value": 42,
                      "raw": "42"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 421,
      "end": 463,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 425,
          "end": 462,
          "id": {
            "type": "Identifier",
            "start": 425,
            "end": 427,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 430,
            "end": 462,
            "callee": {
              "type": "Identifier",
              "start": 430,
              "end": 433,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ObjectExpression",
                "start": 434,
                "end": 461,
                "properties": [
                  {
                    "type": "Property",
                    "start": 436,
                    "end": 445,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 436,
                      "end": 440,
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 442,
                      "end": 445,
                      "value": "b",
                      "raw": "'b'"
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 447,
                    "end": 459,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 447,
                      "end": 451,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 453,
                      "end": 459,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 454,
                          "end": 455,
                          "value": 1,
                          "raw": "1"
                        },
                        {
                          "type": "Literal",
                          "start": 457,
                          "end": 458,
                          "value": 2,
                          "raw": "2"
                        }
                      ]
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ]
              }
            ],
            "optional": false
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
