__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 1248,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 21,
      "end": 46,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 27,
        "end": 29,
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 30,
        "end": 46,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 32,
            "end": 44,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 32,
              "end": 36,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 44,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 38,
                "end": 44
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 47,
      "end": 74,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 53,
        "end": 55,
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 56,
        "end": 74,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 58,
            "end": 72,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 58,
              "end": 62,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 62,
              "end": 72,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 64,
                "end": 72,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 64,
                  "end": 70
                }
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 75,
      "end": 100,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 81,
        "end": 83,
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 84,
        "end": 100,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 86,
            "end": 98,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 86,
              "end": 90,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 90,
              "end": 98,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 92,
                "end": 98
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 102,
      "end": 345,
      "id": {
        "type": "Identifier",
        "start": 111,
        "end": 115,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 116,
          "end": 131,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 117,
            "end": 131,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 119,
              "end": 131,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 119,
                  "end": 121,
                  "typeName": {
                    "type": "Identifier",
                    "start": 119,
                    "end": 121,
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 124,
                  "end": 126,
                  "typeName": {
                    "type": "Identifier",
                    "start": 124,
                    "end": 126,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 129,
                  "end": 131,
                  "typeName": {
                    "type": "Identifier",
                    "start": 129,
                    "end": 131,
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 132,
        "end": 140,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 134,
          "end": 140
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 141,
        "end": 345,
        "body": [
          {
            "type": "IfStatement",
            "start": 147,
            "end": 323,
            "test": {
              "type": "BinaryExpression",
              "start": 151,
              "end": 166,
              "left": {
                "type": "Identifier",
                "start": 151,
                "end": 152,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 164,
                "end": 166,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 168,
              "end": 198,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 178,
                  "end": 192,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 185,
                    "end": 191,
                    "object": {
                      "type": "Identifier",
                      "start": 185,
                      "end": 186,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 187,
                      "end": 191,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 208,
              "end": 323,
              "test": {
                "type": "BinaryExpression",
                "start": 212,
                "end": 227,
                "left": {
                  "type": "Identifier",
                  "start": 212,
                  "end": 213,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "instanceof",
                "right": {
                  "type": "Identifier",
                  "start": 225,
                  "end": 227,
                  "decorators": [],
                  "name": "C2",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 229,
                "end": 262,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 239,
                    "end": 256,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 246,
                      "end": 255,
                      "object": {
                        "type": "MemberExpression",
                        "start": 246,
                        "end": 252,
                        "object": {
                          "type": "Identifier",
                          "start": 246,
                          "end": 247,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 248,
                          "end": 252,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 253,
                        "end": 254,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    }
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "start": 272,
                "end": 323,
                "test": {
                  "type": "BinaryExpression",
                  "start": 276,
                  "end": 291,
                  "left": {
                    "type": "Identifier",
                    "start": 276,
                    "end": 277,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "instanceof",
                  "right": {
                    "type": "Identifier",
                    "start": 289,
                    "end": 291,
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 293,
                  "end": 323,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 303,
                      "end": 317,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 310,
                        "end": 316,
                        "object": {
                          "type": "Identifier",
                          "start": 310,
                          "end": 311,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 312,
                          "end": 316,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  ]
                },
                "alternate": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 328,
            "end": 343,
            "argument": {
              "type": "Literal",
              "start": 335,
              "end": 342,
              "value": "error",
              "raw": "\"error\""
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 347,
      "end": 413,
      "id": {
        "type": "Identifier",
        "start": 356,
        "end": 360,
        "decorators": [],
        "name": "isC1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 361,
          "end": 376,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 362,
            "end": 376,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 364,
              "end": 376,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 364,
                  "end": 366,
                  "typeName": {
                    "type": "Identifier",
                    "start": 364,
                    "end": 366,
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 369,
                  "end": 371,
                  "typeName": {
                    "type": "Identifier",
                    "start": 369,
                    "end": 371,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 374,
                  "end": 376,
                  "typeName": {
                    "type": "Identifier",
                    "start": 374,
                    "end": 376,
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 377,
        "end": 386,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 379,
          "end": 386,
          "parameterName": {
            "type": "Identifier",
            "start": 379,
            "end": 380,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 384,
            "end": 386,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 384,
              "end": 386,
              "typeName": {
                "type": "Identifier",
                "start": 384,
                "end": 386,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 387,
        "end": 413,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 389,
            "end": 411,
            "argument": {
              "type": "BinaryExpression",
              "start": 396,
              "end": 411,
              "left": {
                "type": "Identifier",
                "start": 396,
                "end": 397,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 409,
                "end": 411,
                "decorators": [],
                "name": "C1",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 414,
      "end": 480,
      "id": {
        "type": "Identifier",
        "start": 423,
        "end": 427,
        "decorators": [],
        "name": "isC2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 428,
          "end": 443,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 429,
            "end": 443,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 431,
              "end": 443,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 431,
                  "end": 433,
                  "typeName": {
                    "type": "Identifier",
                    "start": 431,
                    "end": 433,
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 436,
                  "end": 438,
                  "typeName": {
                    "type": "Identifier",
                    "start": 436,
                    "end": 438,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 441,
                  "end": 443,
                  "typeName": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 443,
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 444,
        "end": 453,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 446,
          "end": 453,
          "parameterName": {
            "type": "Identifier",
            "start": 446,
            "end": 447,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 451,
            "end": 453,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 451,
              "end": 453,
              "typeName": {
                "type": "Identifier",
                "start": 451,
                "end": 453,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 454,
        "end": 480,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 456,
            "end": 478,
            "argument": {
              "type": "BinaryExpression",
              "start": 463,
              "end": 478,
              "left": {
                "type": "Identifier",
                "start": 463,
                "end": 464,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 476,
                "end": 478,
                "decorators": [],
                "name": "C2",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 481,
      "end": 547,
      "id": {
        "type": "Identifier",
        "start": 490,
        "end": 494,
        "decorators": [],
        "name": "isC3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 495,
          "end": 510,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 496,
            "end": 510,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 498,
              "end": 510,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 498,
                  "end": 500,
                  "typeName": {
                    "type": "Identifier",
                    "start": 498,
                    "end": 500,
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 503,
                  "end": 505,
                  "typeName": {
                    "type": "Identifier",
                    "start": 503,
                    "end": 505,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 508,
                  "end": 510,
                  "typeName": {
                    "type": "Identifier",
                    "start": 508,
                    "end": 510,
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 511,
        "end": 520,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 513,
          "end": 520,
          "parameterName": {
            "type": "Identifier",
            "start": 513,
            "end": 514,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 518,
            "end": 520,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 518,
              "end": 520,
              "typeName": {
                "type": "Identifier",
                "start": 518,
                "end": 520,
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 521,
        "end": 547,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 523,
            "end": 545,
            "argument": {
              "type": "BinaryExpression",
              "start": 530,
              "end": 545,
              "left": {
                "type": "Identifier",
                "start": 530,
                "end": 531,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 543,
                "end": 545,
                "decorators": [],
                "name": "C3",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 549,
      "end": 768,
      "id": {
        "type": "Identifier",
        "start": 558,
        "end": 562,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 563,
          "end": 578,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 564,
            "end": 578,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 566,
              "end": 578,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 566,
                  "end": 568,
                  "typeName": {
                    "type": "Identifier",
                    "start": 566,
                    "end": 568,
                    "decorators": [],
                    "name": "C1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 571,
                  "end": 573,
                  "typeName": {
                    "type": "Identifier",
                    "start": 571,
                    "end": 573,
                    "decorators": [],
                    "name": "C2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 576,
                  "end": 578,
                  "typeName": {
                    "type": "Identifier",
                    "start": 576,
                    "end": 578,
                    "decorators": [],
                    "name": "C3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 579,
        "end": 587,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 581,
          "end": 587
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 588,
        "end": 768,
        "body": [
          {
            "type": "IfStatement",
            "start": 594,
            "end": 746,
            "test": {
              "type": "CallExpression",
              "start": 598,
              "end": 605,
              "callee": {
                "type": "Identifier",
                "start": 598,
                "end": 602,
                "decorators": [],
                "name": "isC1",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 603,
                  "end": 604,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 607,
              "end": 637,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 617,
                  "end": 631,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 624,
                    "end": 630,
                    "object": {
                      "type": "Identifier",
                      "start": 624,
                      "end": 625,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 626,
                      "end": 630,
                      "decorators": [],
                      "name": "item",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              ]
            },
            "alternate": {
              "type": "IfStatement",
              "start": 647,
              "end": 746,
              "test": {
                "type": "CallExpression",
                "start": 651,
                "end": 658,
                "callee": {
                  "type": "Identifier",
                  "start": 651,
                  "end": 655,
                  "decorators": [],
                  "name": "isC2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 656,
                    "end": 657,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 660,
                "end": 693,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 670,
                    "end": 687,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 677,
                      "end": 686,
                      "object": {
                        "type": "MemberExpression",
                        "start": 677,
                        "end": 683,
                        "object": {
                          "type": "Identifier",
                          "start": 677,
                          "end": 678,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 679,
                          "end": 683,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "property": {
                        "type": "Literal",
                        "start": 684,
                        "end": 685,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    }
                  }
                ]
              },
              "alternate": {
                "type": "IfStatement",
                "start": 703,
                "end": 746,
                "test": {
                  "type": "CallExpression",
                  "start": 707,
                  "end": 714,
                  "callee": {
                    "type": "Identifier",
                    "start": 707,
                    "end": 711,
                    "decorators": [],
                    "name": "isC3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Identifier",
                      "start": 712,
                      "end": 713,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false
                },
                "consequent": {
                  "type": "BlockStatement",
                  "start": 716,
                  "end": 746,
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "start": 726,
                      "end": 740,
                      "argument": {
                        "type": "MemberExpression",
                        "start": 733,
                        "end": 739,
                        "object": {
                          "type": "Identifier",
                          "start": 733,
                          "end": 734,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 735,
                          "end": 739,
                          "decorators": [],
                          "name": "item",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      }
                    }
                  ]
                },
                "alternate": null
              }
            }
          },
          {
            "type": "ReturnStatement",
            "start": 751,
            "end": 766,
            "argument": {
              "type": "Literal",
              "start": 758,
              "end": 765,
              "value": "error",
              "raw": "\"error\""
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 785,
      "end": 806,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 791,
        "end": 792,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 793,
        "end": 806,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 795,
            "end": 804,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 795,
              "end": 796,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 796,
              "end": 804,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 798,
                "end": 804
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 807,
      "end": 829,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 813,
        "end": 815,
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 824,
        "end": 825,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 826,
        "end": 829,
        "body": []
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 830,
      "end": 852,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 836,
        "end": 838,
        "decorators": [],
        "name": "A2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 839,
        "end": 852,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 841,
            "end": 850,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 841,
              "end": 842,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 842,
              "end": 850,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 844,
                "end": 850
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 853,
      "end": 884,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 859,
        "end": 860,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 869,
        "end": 870,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 871,
        "end": 884,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 873,
            "end": 882,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 873,
              "end": 874,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 874,
              "end": 882,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 876,
                "end": 882
              }
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 886,
      "end": 1248,
      "id": {
        "type": "Identifier",
        "start": 895,
        "end": 898,
        "decorators": [],
        "name": "goo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 899,
          "end": 903,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 900,
            "end": 903,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 902,
              "end": 903,
              "typeName": {
                "type": "Identifier",
                "start": 902,
                "end": 903,
                "decorators": [],
                "name": "A",
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
        "start": 905,
        "end": 1248,
        "body": [
          {
            "type": "IfStatement",
            "start": 911,
            "end": 993,
            "test": {
              "type": "BinaryExpression",
              "start": 915,
              "end": 929,
              "left": {
                "type": "Identifier",
                "start": 915,
                "end": 916,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 928,
                "end": 929,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 931,
              "end": 955,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 941,
                  "end": 943,
                  "expression": {
                    "type": "Identifier",
                    "start": 941,
                    "end": 942,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 965,
              "end": 993,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 975,
                  "end": 977,
                  "expression": {
                    "type": "Identifier",
                    "start": 975,
                    "end": 976,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 998,
            "end": 1078,
            "test": {
              "type": "BinaryExpression",
              "start": 1002,
              "end": 1017,
              "left": {
                "type": "Identifier",
                "start": 1002,
                "end": 1003,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1015,
                "end": 1017,
                "decorators": [],
                "name": "A1",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1019,
              "end": 1044,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1029,
                  "end": 1031,
                  "expression": {
                    "type": "Identifier",
                    "start": 1029,
                    "end": 1030,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1054,
              "end": 1078,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1064,
                  "end": 1066,
                  "expression": {
                    "type": "Identifier",
                    "start": 1064,
                    "end": 1065,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 1083,
            "end": 1163,
            "test": {
              "type": "BinaryExpression",
              "start": 1087,
              "end": 1102,
              "left": {
                "type": "Identifier",
                "start": 1087,
                "end": 1088,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1100,
                "end": 1102,
                "decorators": [],
                "name": "A2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1104,
              "end": 1129,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1114,
                  "end": 1116,
                  "expression": {
                    "type": "Identifier",
                    "start": 1114,
                    "end": 1115,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1139,
              "end": 1163,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1149,
                  "end": 1151,
                  "expression": {
                    "type": "Identifier",
                    "start": 1149,
                    "end": 1150,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "IfStatement",
            "start": 1168,
            "end": 1246,
            "test": {
              "type": "BinaryExpression",
              "start": 1172,
              "end": 1186,
              "left": {
                "type": "Identifier",
                "start": 1172,
                "end": 1173,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "instanceof",
              "right": {
                "type": "Identifier",
                "start": 1185,
                "end": 1186,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 1188,
              "end": 1212,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1198,
                  "end": 1200,
                  "expression": {
                    "type": "Identifier",
                    "start": 1198,
                    "end": 1199,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 1222,
              "end": 1246,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1232,
                  "end": 1234,
                  "expression": {
                    "type": "Identifier",
                    "start": 1232,
                    "end": 1233,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
