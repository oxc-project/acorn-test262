inferTypes2.ts
```json
{
  "type": "Program",
  "start": 23,
  "end": 573,
  "body": [
    {
      "type": "ExportNamedDeclaration",
      "start": 23,
      "end": 99,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 30,
        "end": 99,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 47,
          "end": 50,
          "decorators": [],
          "name": "foo",
          "optional": false
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
                  "optional": false
                }
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
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSFunctionType",
              "start": 73,
              "end": 86,
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
                    "const": false,
                    "in": false,
                    "name": {
                      "type": "Identifier",
                      "start": 85,
                      "end": 86,
                      "decorators": [],
                      "name": "P",
                      "optional": false
                    },
                    "out": false
                  }
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 93,
              "end": 98
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
                "optional": false
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 50,
          "end": 53,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 51,
              "end": 52,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 51,
                "end": 52,
                "decorators": [],
                "name": "T",
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
      "start": 100,
      "end": 155,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 107,
        "end": 155,
        "async": false,
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
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 148,
                    "end": 151,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 144,
                  "end": 147,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 116,
          "end": 119,
          "decorators": [],
          "name": "bar",
          "optional": false
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
                  "optional": false
                }
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 119,
          "end": 122,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 120,
              "end": 121,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 120,
                "end": 121,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 157,
      "end": 221,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 164,
        "end": 221,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 169,
          "end": 178,
          "decorators": [],
          "name": "BadNested",
          "optional": false
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
              "key": {
                "type": "Identifier",
                "start": 186,
                "end": 187,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              "optional": false,
              "readonly": false,
              "static": false,
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
                      "optional": false
                    }
                  },
                  "extendsType": {
                    "type": "TSNumberKeyword",
                    "start": 199,
                    "end": 205
                  },
                  "falseType": {
                    "type": "TSStringKeyword",
                    "start": 212,
                    "end": 218
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
                      "optional": false
                    }
                  }
                }
              }
            }
          ]
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
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 179,
                "end": 180,
                "decorators": [],
                "name": "T",
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
      "start": 223,
      "end": 345,
      "attributes": [],
      "declaration": {
        "type": "TSDeclareFunction",
        "start": 230,
        "end": 345,
        "async": false,
        "declare": true,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 247,
          "end": 251,
          "decorators": [],
          "name": "foo2",
          "optional": false
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
                  "optional": false
                }
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
                "optional": false
              }
            },
            "extendsType": {
              "type": "TSMappedType",
              "start": 274,
              "end": 332,
              "constraint": {
                "type": "TSTypeOperator",
                "start": 282,
                "end": 306,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 288,
                  "end": 306,
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
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 304,
                            "end": 305,
                            "decorators": [],
                            "name": "P",
                            "optional": false
                          },
                          "out": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 297,
                    "decorators": [],
                    "name": "BadNested",
                    "optional": false
                  }
                }
              },
              "key": {
                "type": "Identifier",
                "start": 277,
                "end": 278,
                "decorators": [],
                "name": "K",
                "optional": false
              },
              "nameType": null,
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "start": 309,
                "end": 330,
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
                    "optional": false
                  }
                },
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 309,
                  "end": 327,
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
                          "const": false,
                          "in": false,
                          "name": {
                            "type": "Identifier",
                            "start": 325,
                            "end": 326,
                            "decorators": [],
                            "name": "P",
                            "optional": false
                          },
                          "out": false
                        }
                      }
                    ]
                  },
                  "typeName": {
                    "type": "Identifier",
                    "start": 309,
                    "end": 318,
                    "decorators": [],
                    "name": "BadNested",
                    "optional": false
                  }
                }
              }
            },
            "falseType": {
              "type": "TSNeverKeyword",
              "start": 339,
              "end": 344
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
                "optional": false
              }
            }
          }
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 251,
          "end": 254,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 252,
              "end": 253,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 252,
                "end": 253,
                "decorators": [],
                "name": "T",
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
      "start": 346,
      "end": 403,
      "attributes": [],
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 353,
        "end": 403,
        "async": false,
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
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 396,
                    "end": 399,
                    "decorators": [],
                    "name": "obj",
                    "optional": false
                  }
                ],
                "callee": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 395,
                  "decorators": [],
                  "name": "foo2",
                  "optional": false
                },
                "optional": false
              }
            }
          ]
        },
        "declare": false,
        "expression": false,
        "generator": false,
        "id": {
          "type": "Identifier",
          "start": 362,
          "end": 366,
          "decorators": [],
          "name": "bar2",
          "optional": false
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
                  "optional": false
                }
              }
            }
          }
        ],
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 366,
          "end": 369,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 367,
              "end": 368,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 367,
                "end": 368,
                "decorators": [],
                "name": "T",
                "optional": false
              },
              "out": false
            }
          ]
        }
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 428,
      "end": 473,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 433,
        "end": 438,
        "decorators": [],
        "name": "Weird",
        "optional": false
      },
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 459,
              "end": 460,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 467,
          "end": 472
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
            "optional": false
          }
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 474,
      "end": 527,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 479,
        "end": 488,
        "decorators": [],
        "name": "AlsoWeird",
        "optional": false
      },
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
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 513,
              "end": 514,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        },
        "falseType": {
          "type": "TSNeverKeyword",
          "start": 521,
          "end": 526
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
            "optional": false
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 529,
      "end": 551,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 535,
          "end": 550,
          "definite": false,
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
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 546,
            "end": 550,
            "raw": "null",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 552,
      "end": 572,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 558,
          "end": 571,
          "definite": false,
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
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
