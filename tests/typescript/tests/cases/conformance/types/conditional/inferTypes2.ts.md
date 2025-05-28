__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 23,
  "end": 572,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 99,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 30,
        "end": 99,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
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
          "start": 50,
          "end": 53,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 51,
              "end": 52,
              "name": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
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
            "start": 54,
            "end": 60,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 60,
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
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 61,
          "end": 98,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 63,
            "end": 98,
            "checkType": {
              "type": "TSTypeReference",
              "start": 63,
              "end": 64,
              "typeName": {
                "type": "Identifier",
                "start": 63,
                "end": 64,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSFunctionType",
              "start": 73,
              "end": 86,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 76,
                "end": 86,
                "typeAnnotation": {
                  "type": "TSInferType",
                  "start": 79,
                  "end": 86,
                  "typeParameter": {
                    "type": "TSTypeParameter",
                    "start": 85,
                    "end": 86,
                    "name": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "P",
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
              }
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 89,
              "end": 90,
              "typeName": {
                "type": "Identifier",
                "start": 89,
                "end": 90,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 93,
              "end": 98
            }
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 100,
      "end": 155,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 107,
        "end": 155,
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "decorators": [],
          "name": "bar",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 119,
          "end": 122,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 120,
              "end": 121,
              "name": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
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
            "start": 123,
            "end": 129,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 128,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 128,
                  "end": 129,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 131,
          "end": 155,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 137,
              "end": 153,
              "argument": {
                "type": "CallExpression",
                "start": 144,
                "end": 152,
                "callee": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 147,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 148,
                    "end": 151,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 157,
      "end": 221,
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 164,
        "end": 221,
        "id": {
          "type": "Identifier",
          "start": 169,
          "end": 178,
          "decorators": [],
          "name": "BadNested",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 178,
          "end": 181,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 179,
              "end": 180,
              "name": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
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
          "type": "TSTypeLiteral",
          "start": 184,
          "end": 220,
          "members": [
            {
              "type": "TSPropertySignature",
              "start": 186,
              "end": 218,
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "start": 187,
                "end": 218,
                "typeAnnotation": {
                  "type": "TSConditionalType",
                  "start": 189,
                  "end": 218,
                  "checkType": {
                    "type": "TSTypeReference",
                    "start": 189,
                    "end": 190,
                    "typeName": {
                      "type": "Identifier",
                      "start": 189,
                      "end": 190,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "extendsType": {
                    "type": "TSNumberKeyword",
                    "start": 199,
                    "end": 205
                  },
                  "trueType": {
                    "type": "TSTypeReference",
                    "start": 208,
                    "end": 209,
                    "typeName": {
                      "type": "Identifier",
                      "start": 208,
                      "end": 209,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "falseType": {
                    "type": "TSStringKeyword",
                    "start": 212,
                    "end": 218
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
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 223,
      "end": 345,
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 230,
        "end": 345,
        "id": {
          "type": "Identifier",
          "start": 247,
          "end": 251,
          "decorators": [],
          "name": "foo2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": true,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 251,
          "end": 254,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 252,
              "end": 253,
              "name": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
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
            "start": 255,
            "end": 261,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 258,
              "end": 261,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 260,
                "end": 261,
                "typeName": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 261,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "start": 262,
          "end": 344,
          "typeAnnotation": {
            "type": "TSConditionalType",
            "start": 264,
            "end": 344,
            "checkType": {
              "type": "TSTypeReference",
              "start": 264,
              "end": 265,
              "typeName": {
                "type": "Identifier",
                "start": 264,
                "end": 265,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "extendsType": {
              "type": "TSMappedType",
              "start": 274,
              "end": 332,
              "key": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSTypeOperator",
                "start": 282,
                "end": 306,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 288,
                  "end": 306,
                  "typeName": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 297,
                    "decorators": [],
                    "name": "BadNested",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 297,
                    "end": 306,
                    "params": [
                      {
                        "type": "TSInferType",
                        "start": 298,
                        "end": 305,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 304,
                          "end": 305,
                          "name": {
                            "type": "Identifier",
                            "start": 304,
                            "end": 305,
                            "decorators": [],
                            "name": "P",
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
                }
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 309,
                "end": 330,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 309,
                  "end": 327,
                  "typeName": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 318,
                    "decorators": [],
                    "name": "BadNested",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 318,
                    "end": 327,
                    "params": [
                      {
                        "type": "TSInferType",
                        "start": 319,
                        "end": 326,
                        "typeParameter": {
                          "type": "TSTypeParameter",
                          "start": 325,
                          "end": 326,
                          "name": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 326,
                            "decorators": [],
                            "name": "P",
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
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 328,
                  "end": 329,
                  "typeName": {
                    "type": "Identifier",
                    "start": 328,
                    "end": 329,
                    "decorators": [],
                    "name": "K",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              },
              "optional": false,
              "readonly": null
            },
            "trueType": {
              "type": "TSTypeReference",
              "start": 335,
              "end": 336,
              "typeName": {
                "type": "Identifier",
                "start": 335,
                "end": 336,
                "decorators": [],
                "name": "P",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 339,
              "end": 344
            }
          }
        },
        "body": null,
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 346,
      "end": 403,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 353,
        "end": 403,
        "id": {
          "type": "Identifier",
          "start": 362,
          "end": 366,
          "decorators": [],
          "name": "bar2",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 366,
          "end": 369,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 367,
              "end": 368,
              "name": {
                "type": "Identifier",
                "start": 367,
                "end": 368,
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
            "start": 370,
            "end": 376,
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 373,
              "end": 376,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 375,
                "end": 376,
                "typeName": {
                  "type": "Identifier",
                  "start": 375,
                  "end": 376,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "start": 378,
          "end": 403,
          "body": [
            {
              "type": "ReturnStatement",
              "start": 384,
              "end": 401,
              "argument": {
                "type": "CallExpression",
                "start": 391,
                "end": 400,
                "callee": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 395,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 396,
                    "end": 399,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              }
            }
          ]
        },
        "expression": false
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 428,
      "end": 473,
      "id": {
        "type": "Identifier",
        "start": 433,
        "end": 438,
        "decorators": [],
        "name": "Weird",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 441,
        "end": 472,
        "checkType": {
          "type": "TSAnyKeyword",
          "start": 441,
          "end": 444
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 453,
          "end": 460,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 459,
            "end": 460,
            "name": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 463,
          "end": 464,
          "typeName": {
            "type": "Identifier",
            "start": 463,
            "end": 464,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 467,
          "end": 472
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 474,
      "end": 527,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 488,
        "decorators": [],
        "name": "AlsoWeird",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSConditionalType",
        "start": 491,
        "end": 526,
        "checkType": {
          "type": "TSUnknownKeyword",
          "start": 491,
          "end": 498
        },
        "extendsType": {
          "type": "TSInferType",
          "start": 507,
          "end": 514,
          "typeParameter": {
            "type": "TSTypeParameter",
            "start": 513,
            "end": 514,
            "name": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        },
        "trueType": {
          "type": "TSTypeReference",
          "start": 517,
          "end": 518,
          "typeName": {
            "type": "Identifier",
            "start": 517,
            "end": 518,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 521,
          "end": 526
        }
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 551,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 535,
          "end": 550,
          "id": {
            "type": "Identifier",
            "start": 535,
            "end": 543,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 536,
              "end": 543,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 538,
                "end": 543,
                "typeName": {
                  "type": "Identifier",
                  "start": 538,
                  "end": 543,
                  "decorators": [],
                  "name": "Weird",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 546,
            "end": 550,
            "value": null,
            "raw": "null"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 552,
      "end": 572,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 571,
          "id": {
            "type": "Identifier",
            "start": 558,
            "end": 567,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 559,
              "end": 567,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 561,
                "end": 567
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 570,
            "end": 571,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
