__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4837,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 291,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 11,
        "end": 41,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 12,
            "end": 40,
            "name": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 22,
              "end": 40,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 22,
                  "end": 28
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 31,
                  "end": 40
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
      "params": [
        {
          "type": "Identifier",
          "start": 42,
          "end": 46,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 48,
          "end": 59,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 49,
            "end": 59,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 51,
              "end": 59,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 53,
                  "end": 57,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 53,
                    "end": 54,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 54,
                    "end": 57,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 56,
                      "end": 57,
                      "typeName": {
                        "type": "Identifier",
                        "start": 56,
                        "end": 57,
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
            }
          }
        },
        {
          "type": "Identifier",
          "start": 61,
          "end": 67,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 62,
            "end": 67,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 64,
              "end": 67,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 65,
                  "end": 66,
                  "typeName": {
                    "type": "Identifier",
                    "start": 65,
                    "end": 66,
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
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 68,
        "end": 76,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 70,
          "end": 76
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 77,
        "end": 291,
        "body": [
          {
            "type": "IfStatement",
            "start": 83,
            "end": 144,
            "test": {
              "type": "Identifier",
              "start": 87,
              "end": 88,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 90,
              "end": 144,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 100,
                  "end": 102,
                  "expression": {
                    "type": "Identifier",
                    "start": 100,
                    "end": 101,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 111,
                  "end": 120,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 111,
                    "end": 119,
                    "object": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 112,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 113,
                      "end": 119,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 129,
                  "end": 138,
                  "argument": {
                    "type": "Identifier",
                    "start": 136,
                    "end": 137,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "IfStatement",
            "start": 149,
            "end": 205,
            "test": {
              "type": "MemberExpression",
              "start": 153,
              "end": 156,
              "object": {
                "type": "Identifier",
                "start": 153,
                "end": 154,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 155,
                "end": 156,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 158,
              "end": 205,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 168,
                  "end": 179,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 168,
                    "end": 178,
                    "object": {
                      "type": "MemberExpression",
                      "start": 168,
                      "end": 171,
                      "object": {
                        "type": "Identifier",
                        "start": 168,
                        "end": 169,
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 170,
                        "end": 171,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 172,
                      "end": 178,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 188,
                  "end": 199,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 195,
                    "end": 198,
                    "object": {
                      "type": "Identifier",
                      "start": 195,
                      "end": 196,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "decorators": [],
                      "name": "a",
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
          },
          {
            "type": "IfStatement",
            "start": 210,
            "end": 269,
            "test": {
              "type": "MemberExpression",
              "start": 214,
              "end": 218,
              "object": {
                "type": "Identifier",
                "start": 214,
                "end": 215,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 216,
                "end": 217,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 220,
              "end": 269,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 230,
                  "end": 242,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 230,
                    "end": 241,
                    "object": {
                      "type": "MemberExpression",
                      "start": 230,
                      "end": 234,
                      "object": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 231,
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Literal",
                        "start": 232,
                        "end": 233,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "computed": true
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 235,
                      "end": 241,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 251,
                  "end": 263,
                  "argument": {
                    "type": "MemberExpression",
                    "start": 258,
                    "end": 262,
                    "object": {
                      "type": "Identifier",
                      "start": 258,
                      "end": 259,
                      "decorators": [],
                      "name": "z",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 260,
                      "end": 261,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "computed": true
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 274,
            "end": 289,
            "argument": {
              "type": "Literal",
              "start": 281,
              "end": 288,
              "value": "hello",
              "raw": "\"hello\""
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 293,
      "end": 447,
      "id": {
        "type": "Identifier",
        "start": 302,
        "end": 304,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 304,
        "end": 307,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 305,
            "end": 306,
            "name": {
              "type": "Identifier",
              "start": 305,
              "end": 306,
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
          "start": 308,
          "end": 348,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 309,
            "end": 348,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 311,
              "end": 348,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 311,
                  "end": 341,
                  "typeName": {
                    "type": "Identifier",
                    "start": 311,
                    "end": 318,
                    "decorators": [],
                    "name": "Extract",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 318,
                    "end": 341,
                    "params": [
                      {
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
                      },
                      {
                        "type": "TSUnionType",
                        "start": 322,
                        "end": 340,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 322,
                            "end": 328
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 331,
                            "end": 340
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  "type": "TSNullKeyword",
                  "start": 344,
                  "end": 348
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 349,
        "end": 357,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 351,
          "end": 357
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 358,
        "end": 447,
        "body": [
          {
            "type": "IfStatement",
            "start": 364,
            "end": 425,
            "test": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 371,
              "end": 425,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 381,
                  "end": 383,
                  "expression": {
                    "type": "Identifier",
                    "start": 381,
                    "end": 382,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 392,
                  "end": 401,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 392,
                    "end": 400,
                    "object": {
                      "type": "Identifier",
                      "start": 392,
                      "end": 393,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 394,
                      "end": 400,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                },
                {
                  "type": "ReturnStatement",
                  "start": 410,
                  "end": 419,
                  "argument": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 430,
            "end": 445,
            "argument": {
              "type": "Literal",
              "start": 437,
              "end": 444,
              "value": "hello",
              "raw": "\"hello\""
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 449,
      "end": 482,
      "id": {
        "type": "Identifier",
        "start": 459,
        "end": 462,
        "decorators": [],
        "name": "Box",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 462,
        "end": 465,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 463,
            "end": 464,
            "name": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
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
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 466,
        "end": 482,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 472,
            "end": 480,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 472,
              "end": 476,
              "decorators": [],
              "name": "item",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 479,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 478,
                "end": 479,
                "typeName": {
                  "type": "Identifier",
                  "start": 478,
                  "end": 479,
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
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 484,
      "end": 534,
      "id": {
        "type": "Identifier",
        "start": 501,
        "end": 506,
        "decorators": [],
        "name": "isBox",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 507,
          "end": 513,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 508,
            "end": 513,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 510,
              "end": 513
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 514,
        "end": 533,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 516,
          "end": 533,
          "parameterName": {
            "type": "Identifier",
            "start": 516,
            "end": 517,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 521,
            "end": 533,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 521,
              "end": 533,
              "typeName": {
                "type": "Identifier",
                "start": 521,
                "end": 524,
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 524,
                "end": 533,
                "params": [
                  {
                    "type": "TSUnknownKeyword",
                    "start": 525,
                    "end": 532
                  }
                ]
              }
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 535,
      "end": 592,
      "id": {
        "type": "Identifier",
        "start": 552,
        "end": 563,
        "decorators": [],
        "name": "isUndefined",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 564,
          "end": 574,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 565,
            "end": 574,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 567,
              "end": 574
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 575,
        "end": 591,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 577,
          "end": 591,
          "parameterName": {
            "type": "Identifier",
            "start": 577,
            "end": 578,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 582,
            "end": 591,
            "typeAnnotation": {
              "type": "TSUndefinedKeyword",
              "start": 582,
              "end": 591
            }
          }
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 593,
      "end": 633,
      "id": {
        "type": "Identifier",
        "start": 610,
        "end": 615,
        "decorators": [],
        "name": "unbox",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 615,
        "end": 618,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 616,
            "end": 617,
            "name": {
              "type": "Identifier",
              "start": 616,
              "end": 617,
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
          "start": 619,
          "end": 628,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 620,
            "end": 628,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 622,
              "end": 628,
              "typeName": {
                "type": "Identifier",
                "start": 622,
                "end": 625,
                "decorators": [],
                "name": "Box",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 625,
                "end": 628,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 626,
                    "end": 627,
                    "typeName": {
                      "type": "Identifier",
                      "start": 626,
                      "end": 627,
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
        "start": 629,
        "end": 632,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 631,
          "end": 632,
          "typeName": {
            "type": "Identifier",
            "start": 631,
            "end": 632,
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
      "type": "FunctionDeclaration",
      "start": 635,
      "end": 730,
      "id": {
        "type": "Identifier",
        "start": 644,
        "end": 646,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 646,
        "end": 676,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 647,
            "end": 675,
            "name": {
              "type": "Identifier",
              "start": 647,
              "end": 648,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 657,
              "end": 675,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 657,
                  "end": 663,
                  "typeName": {
                    "type": "Identifier",
                    "start": 657,
                    "end": 660,
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 660,
                    "end": 663,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 661,
                        "end": 662,
                        "typeName": {
                          "type": "Identifier",
                          "start": 661,
                          "end": 662,
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
                {
                  "type": "TSUndefinedKeyword",
                  "start": 666,
                  "end": 675
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
      "params": [
        {
          "type": "Identifier",
          "start": 677,
          "end": 681,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 678,
            "end": 681,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 680,
              "end": 681,
              "typeName": {
                "type": "Identifier",
                "start": 680,
                "end": 681,
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
        "start": 683,
        "end": 730,
        "body": [
          {
            "type": "IfStatement",
            "start": 689,
            "end": 728,
            "test": {
              "type": "CallExpression",
              "start": 693,
              "end": 701,
              "callee": {
                "type": "Identifier",
                "start": 693,
                "end": 698,
                "decorators": [],
                "name": "isBox",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 699,
                  "end": 700,
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
              "start": 703,
              "end": 728,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 713,
                  "end": 722,
                  "expression": {
                    "type": "CallExpression",
                    "start": 713,
                    "end": 721,
                    "callee": {
                      "type": "Identifier",
                      "start": 713,
                      "end": 718,
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 719,
                        "end": 720,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 732,
      "end": 834,
      "id": {
        "type": "Identifier",
        "start": 741,
        "end": 743,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 743,
        "end": 773,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 744,
            "end": 772,
            "name": {
              "type": "Identifier",
              "start": 744,
              "end": 745,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 754,
              "end": 772,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 754,
                  "end": 760,
                  "typeName": {
                    "type": "Identifier",
                    "start": 754,
                    "end": 757,
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 757,
                    "end": 760,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 758,
                        "end": 759,
                        "typeName": {
                          "type": "Identifier",
                          "start": 758,
                          "end": 759,
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
                {
                  "type": "TSUndefinedKeyword",
                  "start": 763,
                  "end": 772
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
      "params": [
        {
          "type": "Identifier",
          "start": 774,
          "end": 778,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 775,
            "end": 778,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 777,
              "end": 778,
              "typeName": {
                "type": "Identifier",
                "start": 777,
                "end": 778,
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
        "start": 780,
        "end": 834,
        "body": [
          {
            "type": "IfStatement",
            "start": 786,
            "end": 832,
            "test": {
              "type": "UnaryExpression",
              "start": 790,
              "end": 805,
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "start": 791,
                "end": 805,
                "callee": {
                  "type": "Identifier",
                  "start": 791,
                  "end": 802,
                  "decorators": [],
                  "name": "isUndefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 803,
                    "end": 804,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 807,
              "end": 832,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 817,
                  "end": 826,
                  "expression": {
                    "type": "CallExpression",
                    "start": 817,
                    "end": 825,
                    "callee": {
                      "type": "Identifier",
                      "start": 817,
                      "end": 822,
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 823,
                        "end": 824,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 836,
      "end": 942,
      "id": {
        "type": "Identifier",
        "start": 845,
        "end": 847,
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 847,
        "end": 877,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 848,
            "end": 876,
            "name": {
              "type": "Identifier",
              "start": 848,
              "end": 849,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 858,
              "end": 876,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 858,
                  "end": 864,
                  "typeName": {
                    "type": "Identifier",
                    "start": 858,
                    "end": 861,
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 861,
                    "end": 864,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 862,
                        "end": 863,
                        "typeName": {
                          "type": "Identifier",
                          "start": 862,
                          "end": 863,
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
                {
                  "type": "TSUndefinedKeyword",
                  "start": 867,
                  "end": 876
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
      "params": [
        {
          "type": "Identifier",
          "start": 878,
          "end": 882,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 879,
            "end": 882,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 881,
              "end": 882,
              "typeName": {
                "type": "Identifier",
                "start": 881,
                "end": 882,
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
        "start": 884,
        "end": 942,
        "body": [
          {
            "type": "IfStatement",
            "start": 890,
            "end": 940,
            "test": {
              "type": "UnaryExpression",
              "start": 894,
              "end": 903,
              "operator": "!",
              "argument": {
                "type": "CallExpression",
                "start": 895,
                "end": 903,
                "callee": {
                  "type": "Identifier",
                  "start": 895,
                  "end": 900,
                  "decorators": [],
                  "name": "isBox",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 901,
                    "end": 902,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "prefix": true
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 905,
              "end": 940,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 915,
                  "end": 924,
                  "expression": {
                    "type": "CallExpression",
                    "start": 915,
                    "end": 923,
                    "callee": {
                      "type": "Identifier",
                      "start": 915,
                      "end": 920,
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 921,
                        "end": 922,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 944,
      "end": 1055,
      "id": {
        "type": "Identifier",
        "start": 953,
        "end": 955,
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 955,
        "end": 985,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 956,
            "end": 984,
            "name": {
              "type": "Identifier",
              "start": 956,
              "end": 957,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 966,
              "end": 984,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 966,
                  "end": 972,
                  "typeName": {
                    "type": "Identifier",
                    "start": 966,
                    "end": 969,
                    "decorators": [],
                    "name": "Box",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 969,
                    "end": 972,
                    "params": [
                      {
                        "type": "TSTypeReference",
                        "start": 970,
                        "end": 971,
                        "typeName": {
                          "type": "Identifier",
                          "start": 970,
                          "end": 971,
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
                {
                  "type": "TSUndefinedKeyword",
                  "start": 975,
                  "end": 984
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
      "params": [
        {
          "type": "Identifier",
          "start": 986,
          "end": 990,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 987,
            "end": 990,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 989,
              "end": 990,
              "typeName": {
                "type": "Identifier",
                "start": 989,
                "end": 990,
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
        "start": 992,
        "end": 1055,
        "body": [
          {
            "type": "IfStatement",
            "start": 998,
            "end": 1053,
            "test": {
              "type": "CallExpression",
              "start": 1002,
              "end": 1016,
              "callee": {
                "type": "Identifier",
                "start": 1002,
                "end": 1013,
                "decorators": [],
                "name": "isUndefined",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 1014,
                  "end": 1015,
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
              "start": 1018,
              "end": 1053,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1028,
                  "end": 1037,
                  "expression": {
                    "type": "CallExpression",
                    "start": 1028,
                    "end": 1036,
                    "callee": {
                      "type": "Identifier",
                      "start": 1028,
                      "end": 1033,
                      "decorators": [],
                      "name": "unbox",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 1034,
                        "end": 1035,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1079,
      "end": 1118,
      "id": {
        "type": "Identifier",
        "start": 1096,
        "end": 1101,
        "decorators": [],
        "name": "takeA",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 1102,
          "end": 1110,
          "decorators": [],
          "name": "val",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1105,
            "end": 1110,
            "typeAnnotation": {
              "type": "TSLiteralType",
              "start": 1107,
              "end": 1110,
              "literal": {
                "type": "Literal",
                "start": 1107,
                "end": 1110,
                "value": "A",
                "raw": "'A'"
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1111,
        "end": 1117,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1113,
          "end": 1117
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 1119,
      "end": 1306,
      "declaration": {
        "type": "FunctionDeclaration",
        "start": 1126,
        "end": 1306,
        "id": {
          "type": "Identifier",
          "start": 1135,
          "end": 1151,
          "decorators": [],
          "name": "bounceAndTakeIfA",
          "optional": false,
          "typeAnnotation": null
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 1151,
          "end": 1173,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 1152,
              "end": 1172,
              "name": {
                "type": "Identifier",
                "start": 1152,
                "end": 1154,
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null
              },
              "constraint": {
                "type": "TSUnionType",
                "start": 1163,
                "end": 1172,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 1163,
                    "end": 1166,
                    "literal": {
                      "type": "Literal",
                      "start": 1163,
                      "end": 1166,
                      "value": "A",
                      "raw": "'A'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1169,
                    "end": 1172,
                    "literal": {
                      "type": "Literal",
                      "start": 1169,
                      "end": 1172,
                      "value": "B",
                      "raw": "'B'"
                    }
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
        "params": [
          {
            "type": "Identifier",
            "start": 1174,
            "end": 1183,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1179,
              "end": 1183,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1181,
                "end": 1183,
                "typeName": {
                  "type": "Identifier",
                  "start": 1181,
                  "end": 1183,
                  "decorators": [],
                  "name": "AB",
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
          "start": 1184,
          "end": 1188,
          "typeAnnotation": {
            "type": "TSTypeReference",
            "start": 1186,
            "end": 1188,
            "typeName": {
              "type": "Identifier",
              "start": 1186,
              "end": 1188,
              "decorators": [],
              "name": "AB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        },
        "body": {
          "type": "BlockStatement",
          "start": 1189,
          "end": 1306,
          "body": [
            {
              "type": "IfStatement",
              "start": 1195,
              "end": 1304,
              "test": {
                "type": "BinaryExpression",
                "start": 1199,
                "end": 1212,
                "left": {
                  "type": "Identifier",
                  "start": 1199,
                  "end": 1204,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 1209,
                  "end": 1212,
                  "value": "A",
                  "raw": "'A'"
                }
              },
              "consequent": {
                "type": "BlockStatement",
                "start": 1214,
                "end": 1265,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 1224,
                    "end": 1237,
                    "expression": {
                      "type": "CallExpression",
                      "start": 1224,
                      "end": 1236,
                      "callee": {
                        "type": "Identifier",
                        "start": 1224,
                        "end": 1229,
                        "decorators": [],
                        "name": "takeA",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 1230,
                          "end": 1235,
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  },
                  {
                    "type": "ReturnStatement",
                    "start": 1246,
                    "end": 1259,
                    "argument": {
                      "type": "Identifier",
                      "start": 1253,
                      "end": 1258,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              },
              "alternate": {
                "type": "BlockStatement",
                "start": 1275,
                "end": 1304,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 1285,
                    "end": 1298,
                    "argument": {
                      "type": "Identifier",
                      "start": 1292,
                      "end": 1297,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
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
      "start": 1330,
      "end": 1359,
      "id": {
        "type": "Identifier",
        "start": 1335,
        "end": 1341,
        "decorators": [],
        "name": "Common",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1344,
        "end": 1358,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1346,
            "end": 1356,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1346,
              "end": 1348,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1348,
              "end": 1356,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1350,
                "end": 1356
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
      "start": 1360,
      "end": 1395,
      "id": {
        "type": "Identifier",
        "start": 1365,
        "end": 1367,
        "decorators": [],
        "name": "AA",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1370,
        "end": 1394,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1372,
            "end": 1381,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1372,
              "end": 1375,
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1375,
              "end": 1380,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1377,
                "end": 1380,
                "literal": {
                  "type": "Literal",
                  "start": 1377,
                  "end": 1380,
                  "value": "A",
                  "raw": "'A'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1382,
            "end": 1392,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1382,
              "end": 1384,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1384,
              "end": 1392,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1386,
                "end": 1392
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
      "start": 1396,
      "end": 1444,
      "id": {
        "type": "Identifier",
        "start": 1401,
        "end": 1403,
        "decorators": [],
        "name": "BB",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1406,
        "end": 1443,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1408,
            "end": 1417,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1408,
              "end": 1411,
              "decorators": [],
              "name": "tag",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1411,
              "end": 1416,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1413,
                "end": 1416,
                "literal": {
                  "type": "Literal",
                  "start": 1413,
                  "end": 1416,
                  "value": "B",
                  "raw": "'B'"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1418,
            "end": 1429,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1418,
              "end": 1420,
              "decorators": [],
              "name": "id",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1420,
              "end": 1428,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1422,
                "end": 1428
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1430,
            "end": 1441,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1430,
              "end": 1433,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1433,
              "end": 1441,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1435,
                "end": 1441
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
      "start": 1446,
      "end": 1469,
      "id": {
        "type": "Identifier",
        "start": 1451,
        "end": 1458,
        "decorators": [],
        "name": "MyUnion",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1461,
        "end": 1468,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1461,
            "end": 1463,
            "typeName": {
              "type": "Identifier",
              "start": 1461,
              "end": 1463,
              "decorators": [],
              "name": "AA",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1466,
            "end": 1468,
            "typeName": {
              "type": "Identifier",
              "start": 1466,
              "end": 1468,
              "decorators": [],
              "name": "BB",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1471,
      "end": 1636,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1477,
          "end": 1635,
          "id": {
            "type": "Identifier",
            "start": 1477,
            "end": 1479,
            "decorators": [],
            "name": "fn",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1482,
            "end": 1635,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 1483,
                "end": 1497,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1488,
                  "end": 1497,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1490,
                    "end": 1497,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1490,
                      "end": 1497,
                      "decorators": [],
                      "name": "MyUnion",
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
              "start": 1502,
              "end": 1635,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1508,
                  "end": 1518,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1508,
                    "end": 1517,
                    "object": {
                      "type": "Identifier",
                      "start": 1508,
                      "end": 1513,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1514,
                      "end": 1517,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1533,
                  "end": 1579,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1537,
                    "end": 1551,
                    "left": {
                      "type": "Literal",
                      "start": 1537,
                      "end": 1542,
                      "value": "foo",
                      "raw": "'foo'"
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "start": 1546,
                      "end": 1551,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1553,
                    "end": 1579,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1563,
                        "end": 1573,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1563,
                          "end": 1572,
                          "object": {
                            "type": "Identifier",
                            "start": 1563,
                            "end": 1568,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1569,
                            "end": 1572,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 1584,
                  "end": 1633,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1588,
                    "end": 1605,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1588,
                      "end": 1597,
                      "object": {
                        "type": "Identifier",
                        "start": 1588,
                        "end": 1593,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1594,
                        "end": 1597,
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1602,
                      "end": 1605,
                      "value": "B",
                      "raw": "'B'"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1607,
                    "end": 1633,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1617,
                        "end": 1627,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1617,
                          "end": 1626,
                          "object": {
                            "type": "Identifier",
                            "start": 1617,
                            "end": 1622,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1623,
                            "end": 1626,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1638,
      "end": 1826,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1644,
          "end": 1825,
          "id": {
            "type": "Identifier",
            "start": 1644,
            "end": 1647,
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1650,
            "end": 1825,
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1650,
              "end": 1669,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1651,
                  "end": 1668,
                  "name": {
                    "type": "Identifier",
                    "start": 1651,
                    "end": 1652,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeReference",
                    "start": 1661,
                    "end": 1668,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1661,
                      "end": 1668,
                      "decorators": [],
                      "name": "MyUnion",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
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
                "start": 1670,
                "end": 1678,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1675,
                  "end": 1678,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1677,
                    "end": 1678,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1677,
                      "end": 1678,
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
              "start": 1679,
              "end": 1688,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1681,
                "end": 1688,
                "typeName": {
                  "type": "Identifier",
                  "start": 1681,
                  "end": 1688,
                  "decorators": [],
                  "name": "MyUnion",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1692,
              "end": 1825,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 1698,
                  "end": 1708,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 1698,
                    "end": 1707,
                    "object": {
                      "type": "Identifier",
                      "start": 1698,
                      "end": 1703,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1704,
                      "end": 1707,
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "directive": null
                },
                {
                  "type": "IfStatement",
                  "start": 1723,
                  "end": 1769,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1727,
                    "end": 1741,
                    "left": {
                      "type": "Literal",
                      "start": 1727,
                      "end": 1732,
                      "value": "foo",
                      "raw": "'foo'"
                    },
                    "operator": "in",
                    "right": {
                      "type": "Identifier",
                      "start": 1736,
                      "end": 1741,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1743,
                    "end": 1769,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1753,
                        "end": 1763,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1753,
                          "end": 1762,
                          "object": {
                            "type": "Identifier",
                            "start": 1753,
                            "end": 1758,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1759,
                            "end": 1762,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                },
                {
                  "type": "IfStatement",
                  "start": 1774,
                  "end": 1823,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 1778,
                    "end": 1795,
                    "left": {
                      "type": "MemberExpression",
                      "start": 1778,
                      "end": 1787,
                      "object": {
                        "type": "Identifier",
                        "start": 1778,
                        "end": 1783,
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 1784,
                        "end": 1787,
                        "decorators": [],
                        "name": "tag",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 1792,
                      "end": 1795,
                      "value": "B",
                      "raw": "'B'"
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 1797,
                    "end": 1823,
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "start": 1807,
                        "end": 1817,
                        "expression": {
                          "type": "MemberExpression",
                          "start": 1807,
                          "end": 1816,
                          "object": {
                            "type": "Identifier",
                            "start": 1807,
                            "end": 1812,
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 1813,
                            "end": 1816,
                            "decorators": [],
                            "name": "foo",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
                        },
                        "directive": null
                      }
                    ]
                  },
                  "alternate": null
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1850,
      "end": 1905,
      "id": {
        "type": "Identifier",
        "start": 1855,
        "end": 1857,
        "decorators": [],
        "name": "A1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1860,
        "end": 1905,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1866,
            "end": 1880,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1866,
              "end": 1874,
              "decorators": [],
              "name": "testable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1874,
              "end": 1880,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1876,
                "end": 1880,
                "literal": {
                  "type": "Literal",
                  "start": 1876,
                  "end": 1880,
                  "value": true,
                  "raw": "true"
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 1885,
            "end": 1903,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1885,
              "end": 1891,
              "decorators": [],
              "name": "doTest",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1891,
              "end": 1903,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 1893,
                "end": 1903,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 1896,
                  "end": 1903,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 1899,
                    "end": 1903
                  }
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
      "start": 1906,
      "end": 1940,
      "id": {
        "type": "Identifier",
        "start": 1911,
        "end": 1913,
        "decorators": [],
        "name": "B1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 1916,
        "end": 1939,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 1922,
            "end": 1937,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1922,
              "end": 1930,
              "decorators": [],
              "name": "testable",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1930,
              "end": 1937,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1932,
                "end": 1937,
                "literal": {
                  "type": "Literal",
                  "start": 1932,
                  "end": 1937,
                  "value": false,
                  "raw": "false"
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
      "start": 1942,
      "end": 1962,
      "id": {
        "type": "Identifier",
        "start": 1947,
        "end": 1952,
        "decorators": [],
        "name": "Union",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1955,
        "end": 1962,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 1955,
            "end": 1957,
            "typeName": {
              "type": "Identifier",
              "start": 1955,
              "end": 1957,
              "decorators": [],
              "name": "A1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 1960,
            "end": 1962,
            "typeName": {
              "type": "Identifier",
              "start": 1960,
              "end": 1962,
              "decorators": [],
              "name": "B1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1964,
      "end": 2070,
      "id": {
        "type": "Identifier",
        "start": 1973,
        "end": 1983,
        "decorators": [],
        "name": "notWorking",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1983,
        "end": 2000,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1984,
            "end": 1999,
            "name": {
              "type": "Identifier",
              "start": 1984,
              "end": 1985,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1994,
              "end": 1999,
              "typeName": {
                "type": "Identifier",
                "start": 1994,
                "end": 1999,
                "decorators": [],
                "name": "Union",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
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
          "start": 2001,
          "end": 2010,
          "decorators": [],
          "name": "object",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2007,
            "end": 2010,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2009,
              "end": 2010,
              "typeName": {
                "type": "Identifier",
                "start": 2009,
                "end": 2010,
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
        "start": 2012,
        "end": 2070,
        "body": [
          {
            "type": "IfStatement",
            "start": 2018,
            "end": 2047,
            "test": {
              "type": "UnaryExpression",
              "start": 2022,
              "end": 2038,
              "operator": "!",
              "argument": {
                "type": "MemberExpression",
                "start": 2023,
                "end": 2038,
                "object": {
                  "type": "Identifier",
                  "start": 2023,
                  "end": 2029,
                  "decorators": [],
                  "name": "object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2030,
                  "end": 2038,
                  "decorators": [],
                  "name": "testable",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "prefix": true
            },
            "consequent": {
              "type": "ReturnStatement",
              "start": 2040,
              "end": 2047,
              "argument": null
            },
            "alternate": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2052,
            "end": 2068,
            "expression": {
              "type": "CallExpression",
              "start": 2052,
              "end": 2067,
              "callee": {
                "type": "MemberExpression",
                "start": 2052,
                "end": 2065,
                "object": {
                  "type": "Identifier",
                  "start": 2052,
                  "end": 2058,
                  "decorators": [],
                  "name": "object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2059,
                  "end": 2065,
                  "decorators": [],
                  "name": "doTest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 2094,
      "end": 2131,
      "id": {
        "type": "Identifier",
        "start": 2104,
        "end": 2105,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 2106,
        "end": 2131,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 2112,
            "end": 2129,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 2112,
              "end": 2113,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2113,
              "end": 2128,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2115,
                "end": 2128,
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2115,
                    "end": 2121
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 2124,
                    "end": 2128
                  }
                ]
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
      "type": "EmptyStatement",
      "start": 2131,
      "end": 2132
    },
    {
      "type": "FunctionDeclaration",
      "start": 2134,
      "end": 2289,
      "id": {
        "type": "Identifier",
        "start": 2143,
        "end": 2146,
        "decorators": [],
        "name": "get",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2146,
        "end": 2165,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2147,
            "end": 2164,
            "name": {
              "type": "Identifier",
              "start": 2147,
              "end": 2148,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2157,
              "end": 2164,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2163,
                "end": 2164,
                "typeName": {
                  "type": "Identifier",
                  "start": 2163,
                  "end": 2164,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
          "start": 2166,
          "end": 2172,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2169,
            "end": 2172,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2171,
              "end": 2172,
              "typeName": {
                "type": "Identifier",
                "start": 2171,
                "end": 2172,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2174,
          "end": 2180,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2177,
            "end": 2180,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2179,
              "end": 2180,
              "typeName": {
                "type": "Identifier",
                "start": 2179,
                "end": 2180,
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2181,
        "end": 2189,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 2183,
          "end": 2189
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2190,
        "end": 2289,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2196,
            "end": 2219,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2202,
                "end": 2218,
                "id": {
                  "type": "Identifier",
                  "start": 2202,
                  "end": 2207,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2210,
                  "end": 2218,
                  "object": {
                    "type": "Identifier",
                    "start": 2210,
                    "end": 2213,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2214,
                    "end": 2217,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 2224,
            "end": 2273,
            "test": {
              "type": "BinaryExpression",
              "start": 2228,
              "end": 2242,
              "left": {
                "type": "Identifier",
                "start": 2228,
                "end": 2233,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 2238,
                "end": 2242,
                "value": null,
                "raw": "null"
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2244,
              "end": 2273,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 2254,
                  "end": 2267,
                  "argument": {
                    "type": "Identifier",
                    "start": 2261,
                    "end": 2266,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 2278,
            "end": 2287,
            "argument": {
              "type": "Literal",
              "start": 2285,
              "end": 2286,
              "value": 0,
              "raw": "0"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "EmptyStatement",
      "start": 2289,
      "end": 2290
    },
    {
      "type": "ClassDeclaration",
      "start": 2314,
      "end": 2418,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 2320,
        "end": 2332,
        "decorators": [],
        "name": "EventEmitter",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2332,
        "end": 2336,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2333,
            "end": 2335,
            "name": {
              "type": "Identifier",
              "start": 2333,
              "end": 2335,
              "decorators": [],
              "name": "ET",
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 2337,
        "end": 2418,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 2343,
            "end": 2416,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 2343,
              "end": 2346,
              "decorators": [],
              "name": "off",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 2346,
              "end": 2416,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "start": 2346,
                "end": 2366,
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "start": 2347,
                    "end": 2365,
                    "name": {
                      "type": "Identifier",
                      "start": 2347,
                      "end": 2348,
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "start": 2357,
                      "end": 2365,
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 2363,
                        "end": 2365,
                        "typeName": {
                          "type": "Identifier",
                          "start": 2363,
                          "end": 2365,
                          "decorators": [],
                          "name": "ET",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false
                  }
                ]
              },
              "params": [
                {
                  "type": "RestElement",
                  "start": 2367,
                  "end": 2407,
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "start": 2370,
                    "end": 2374,
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2374,
                    "end": 2407,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 2376,
                      "end": 2407,
                      "types": [
                        {
                          "type": "TSTupleType",
                          "start": 2376,
                          "end": 2387,
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "start": 2377,
                              "end": 2378,
                              "typeName": {
                                "type": "Identifier",
                                "start": 2377,
                                "end": 2378,
                                "decorators": [],
                                "name": "K",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSNumberKeyword",
                              "start": 2380,
                              "end": 2386
                            }
                          ]
                        },
                        {
                          "type": "TSTupleType",
                          "start": 2390,
                          "end": 2407,
                          "elementTypes": [
                            {
                              "type": "TSUnknownKeyword",
                              "start": 2391,
                              "end": 2398
                            },
                            {
                              "type": "TSStringKeyword",
                              "start": 2400,
                              "end": 2406
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "value": null
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 2408,
                "end": 2413,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 2409,
                  "end": 2413
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 2414,
                "end": 2416,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2419,
      "end": 2610,
      "id": {
        "type": "Identifier",
        "start": 2428,
        "end": 2432,
        "decorators": [],
        "name": "once",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2432,
        "end": 2464,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2433,
            "end": 2435,
            "name": {
              "type": "Identifier",
              "start": 2433,
              "end": 2435,
              "decorators": [],
              "name": "ET",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 2437,
            "end": 2463,
            "name": {
              "type": "Identifier",
              "start": 2437,
              "end": 2438,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2447,
              "end": 2463,
              "typeName": {
                "type": "Identifier",
                "start": 2447,
                "end": 2459,
                "decorators": [],
                "name": "EventEmitter",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2459,
                "end": 2463,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 2460,
                    "end": 2462,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2460,
                      "end": 2462,
                      "decorators": [],
                      "name": "ET",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
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
          "start": 2465,
          "end": 2482,
          "decorators": [],
          "name": "emittingObject",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2479,
            "end": 2482,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2481,
              "end": 2482,
              "typeName": {
                "type": "Identifier",
                "start": 2481,
                "end": 2482,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2484,
          "end": 2503,
          "decorators": [],
          "name": "eventName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2493,
            "end": 2503,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 2495,
              "end": 2503,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2501,
                "end": 2503,
                "typeName": {
                  "type": "Identifier",
                  "start": 2501,
                  "end": 2503,
                  "decorators": [],
                  "name": "ET",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2504,
        "end": 2510,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 2506,
          "end": 2510
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2511,
        "end": 2610,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 2517,
            "end": 2550,
            "expression": {
              "type": "CallExpression",
              "start": 2517,
              "end": 2549,
              "callee": {
                "type": "MemberExpression",
                "start": 2517,
                "end": 2535,
                "object": {
                  "type": "Identifier",
                  "start": 2517,
                  "end": 2531,
                  "decorators": [],
                  "name": "emittingObject",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2532,
                  "end": 2535,
                  "decorators": [],
                  "name": "off",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 2536,
                  "end": 2545,
                  "decorators": [],
                  "name": "eventName",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Literal",
                  "start": 2547,
                  "end": 2548,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 2555,
            "end": 2608,
            "expression": {
              "type": "CallExpression",
              "start": 2555,
              "end": 2607,
              "callee": {
                "type": "MemberExpression",
                "start": 2555,
                "end": 2573,
                "object": {
                  "type": "Identifier",
                  "start": 2555,
                  "end": 2569,
                  "decorators": [],
                  "name": "emittingObject",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 2570,
                  "end": 2573,
                  "decorators": [],
                  "name": "off",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TSAsExpression",
                  "start": 2574,
                  "end": 2603,
                  "expression": {
                    "type": "Identifier",
                    "start": 2574,
                    "end": 2583,
                    "decorators": [],
                    "name": "eventName",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 2587,
                    "end": 2603,
                    "exprName": {
                      "type": "Identifier",
                      "start": 2594,
                      "end": 2603,
                      "decorators": [],
                      "name": "eventName",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "Literal",
                  "start": 2605,
                  "end": 2606,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2896,
      "end": 3007,
      "id": {
        "type": "Identifier",
        "start": 2905,
        "end": 2908,
        "decorators": [],
        "name": "fx1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2908,
        "end": 2930,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2909,
            "end": 2910,
            "name": {
              "type": "Identifier",
              "start": 2909,
              "end": 2910,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 2912,
            "end": 2929,
            "name": {
              "type": "Identifier",
              "start": 2912,
              "end": 2913,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2922,
              "end": 2929,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2928,
                "end": 2929,
                "typeName": {
                  "type": "Identifier",
                  "start": 2928,
                  "end": 2929,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
          "start": 2931,
          "end": 2937,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2934,
            "end": 2937,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2936,
              "end": 2937,
              "typeName": {
                "type": "Identifier",
                "start": 2936,
                "end": 2937,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 2939,
          "end": 2945,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2942,
            "end": 2945,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2944,
              "end": 2945,
              "typeName": {
                "type": "Identifier",
                "start": 2944,
                "end": 2945,
                "decorators": [],
                "name": "K",
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
        "start": 2947,
        "end": 3007,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2953,
            "end": 2973,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2959,
                "end": 2972,
                "id": {
                  "type": "Identifier",
                  "start": 2959,
                  "end": 2961,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 2964,
                  "end": 2972,
                  "object": {
                    "type": "Identifier",
                    "start": 2964,
                    "end": 2967,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2968,
                    "end": 2971,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2978,
            "end": 3005,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2984,
                "end": 3004,
                "id": {
                  "type": "Identifier",
                  "start": 2984,
                  "end": 2986,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 2989,
                  "end": 3004,
                  "left": {
                    "type": "Identifier",
                    "start": 2989,
                    "end": 2992,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "start": 2996,
                    "end": 3004,
                    "object": {
                      "type": "Identifier",
                      "start": 2996,
                      "end": 2999,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3000,
                      "end": 3003,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": true
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3009,
      "end": 3152,
      "id": {
        "type": "Identifier",
        "start": 3018,
        "end": 3021,
        "decorators": [],
        "name": "fx2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3021,
        "end": 3075,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3022,
            "end": 3055,
            "name": {
              "type": "Identifier",
              "start": 3022,
              "end": 3023,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3032,
              "end": 3055,
              "typeName": {
                "type": "Identifier",
                "start": 3032,
                "end": 3038,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3038,
                "end": 3055,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 3039,
                    "end": 3046,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3045,
                      "end": 3046,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3045,
                        "end": 3046,
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 3048,
                    "end": 3054
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3057,
            "end": 3074,
            "name": {
              "type": "Identifier",
              "start": 3057,
              "end": 3058,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3067,
              "end": 3074,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3073,
                "end": 3074,
                "typeName": {
                  "type": "Identifier",
                  "start": 3073,
                  "end": 3074,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
          "start": 3076,
          "end": 3082,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3079,
            "end": 3082,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3081,
              "end": 3082,
              "typeName": {
                "type": "Identifier",
                "start": 3081,
                "end": 3082,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3084,
          "end": 3090,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3087,
            "end": 3090,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3089,
              "end": 3090,
              "typeName": {
                "type": "Identifier",
                "start": 3089,
                "end": 3090,
                "decorators": [],
                "name": "K",
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
        "start": 3092,
        "end": 3152,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3098,
            "end": 3118,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3104,
                "end": 3117,
                "id": {
                  "type": "Identifier",
                  "start": 3104,
                  "end": 3106,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 3109,
                  "end": 3117,
                  "object": {
                    "type": "Identifier",
                    "start": 3109,
                    "end": 3112,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3113,
                    "end": 3116,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3123,
            "end": 3150,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3129,
                "end": 3149,
                "id": {
                  "type": "Identifier",
                  "start": 3129,
                  "end": 3131,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 3134,
                  "end": 3149,
                  "left": {
                    "type": "Identifier",
                    "start": 3134,
                    "end": 3137,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "start": 3141,
                    "end": 3149,
                    "object": {
                      "type": "Identifier",
                      "start": 3141,
                      "end": 3144,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3145,
                      "end": 3148,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": true
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3154,
      "end": 3319,
      "id": {
        "type": "Identifier",
        "start": 3163,
        "end": 3166,
        "decorators": [],
        "name": "fx3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3166,
        "end": 3232,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3167,
            "end": 3212,
            "name": {
              "type": "Identifier",
              "start": 3167,
              "end": 3168,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 3177,
              "end": 3212,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3177,
                  "end": 3200,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3177,
                    "end": 3183,
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3183,
                    "end": 3200,
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "start": 3184,
                        "end": 3191,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3190,
                          "end": 3191,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3190,
                            "end": 3191,
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 3193,
                        "end": 3199
                      }
                    ]
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3203,
                  "end": 3212
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3214,
            "end": 3231,
            "name": {
              "type": "Identifier",
              "start": 3214,
              "end": 3215,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 3224,
              "end": 3231,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3230,
                "end": 3231,
                "typeName": {
                  "type": "Identifier",
                  "start": 3230,
                  "end": 3231,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
          "start": 3233,
          "end": 3239,
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3236,
            "end": 3239,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3238,
              "end": 3239,
              "typeName": {
                "type": "Identifier",
                "start": 3238,
                "end": 3239,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3241,
          "end": 3247,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3244,
            "end": 3247,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3246,
              "end": 3247,
              "typeName": {
                "type": "Identifier",
                "start": 3246,
                "end": 3247,
                "decorators": [],
                "name": "K",
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
        "start": 3249,
        "end": 3319,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 3255,
            "end": 3275,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3261,
                "end": 3274,
                "id": {
                  "type": "Identifier",
                  "start": 3261,
                  "end": 3263,
                  "decorators": [],
                  "name": "x1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 3266,
                  "end": 3274,
                  "object": {
                    "type": "Identifier",
                    "start": 3266,
                    "end": 3269,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 3270,
                    "end": 3273,
                    "decorators": [],
                    "name": "key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 3290,
            "end": 3317,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 3296,
                "end": 3316,
                "id": {
                  "type": "Identifier",
                  "start": 3296,
                  "end": 3298,
                  "decorators": [],
                  "name": "x2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 3301,
                  "end": 3316,
                  "left": {
                    "type": "Identifier",
                    "start": 3301,
                    "end": 3304,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "MemberExpression",
                    "start": 3308,
                    "end": 3316,
                    "object": {
                      "type": "Identifier",
                      "start": 3308,
                      "end": 3311,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 3312,
                      "end": 3315,
                      "decorators": [],
                      "name": "key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": true
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 3343,
      "end": 3876,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 3349,
        "end": 3362,
        "decorators": [],
        "name": "TableBaseEnum",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3362,
        "end": 3500,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3368,
            "end": 3418,
            "name": {
              "type": "Identifier",
              "start": 3368,
              "end": 3378,
              "decorators": [],
              "name": "PublicSpec",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 3387,
              "end": 3418,
              "typeName": {
                "type": "Identifier",
                "start": 3387,
                "end": 3393,
                "decorators": [],
                "name": "Record",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3393,
                "end": 3418,
                "params": [
                  {
                    "type": "TSTypeOperator",
                    "start": 3394,
                    "end": 3412,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 3400,
                      "end": 3412,
                      "typeName": {
                        "type": "Identifier",
                        "start": 3400,
                        "end": 3412,
                        "decorators": [],
                        "name": "InternalSpec",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSAnyKeyword",
                    "start": 3414,
                    "end": 3417
                  }
                ]
              }
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 3424,
            "end": 3499,
            "name": {
              "type": "Identifier",
              "start": 3424,
              "end": 3436,
              "decorators": [],
              "name": "InternalSpec",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 3445,
              "end": 3487,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 3445,
                  "end": 3474,
                  "typeName": {
                    "type": "Identifier",
                    "start": 3445,
                    "end": 3451,
                    "decorators": [],
                    "name": "Record",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": {
                    "type": "TSTypeParameterInstantiation",
                    "start": 3451,
                    "end": 3474,
                    "params": [
                      {
                        "type": "TSTypeOperator",
                        "start": 3452,
                        "end": 3468,
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 3458,
                          "end": 3468,
                          "typeName": {
                            "type": "Identifier",
                            "start": 3458,
                            "end": 3468,
                            "decorators": [],
                            "name": "PublicSpec",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
                      },
                      {
                        "type": "TSAnyKeyword",
                        "start": 3470,
                        "end": 3473
                      }
                    ]
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3478,
                  "end": 3487
                }
              ]
            },
            "default": {
              "type": "TSUndefinedKeyword",
              "start": 3490,
              "end": 3499
            },
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 3501,
        "end": 3876,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 3507,
            "end": 3874,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 3507,
              "end": 3508,
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 3508,
              "end": 3874,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 3511,
                "end": 3874,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 3521,
                    "end": 3555,
                    "kind": "let",
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 3525,
                        "end": 3554,
                        "id": {
                          "type": "Identifier",
                          "start": 3525,
                          "end": 3530,
                          "decorators": [],
                          "name": "iSpec",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "init": {
                          "type": "TSAsExpression",
                          "start": 3533,
                          "end": 3554,
                          "expression": {
                            "type": "TSNonNullExpression",
                            "start": 3533,
                            "end": 3538,
                            "expression": {
                              "type": "Literal",
                              "start": 3533,
                              "end": 3537,
                              "value": null,
                              "raw": "null"
                            }
                          },
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3542,
                            "end": 3554,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3542,
                              "end": 3554,
                              "decorators": [],
                              "name": "InternalSpec",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        },
                        "definite": false
                      }
                    ],
                    "declare": false
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3564,
                    "end": 3599,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3564,
                      "end": 3598,
                      "object": {
                        "type": "Identifier",
                        "start": 3564,
                        "end": 3569,
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "start": 3570,
                        "end": 3597,
                        "expression": {
                          "type": "TSNonNullExpression",
                          "start": 3570,
                          "end": 3575,
                          "expression": {
                            "type": "Literal",
                            "start": 3570,
                            "end": 3574,
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "start": 3579,
                          "end": 3597,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3585,
                            "end": 3597,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3585,
                              "end": 3597,
                              "decorators": [],
                              "name": "InternalSpec",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "optional": false,
                      "computed": true
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3645,
                    "end": 3678,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3645,
                      "end": 3677,
                      "object": {
                        "type": "Identifier",
                        "start": 3645,
                        "end": 3650,
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "start": 3651,
                        "end": 3676,
                        "expression": {
                          "type": "TSNonNullExpression",
                          "start": 3651,
                          "end": 3656,
                          "expression": {
                            "type": "Literal",
                            "start": 3651,
                            "end": 3655,
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "start": 3660,
                          "end": 3676,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3666,
                            "end": 3676,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3666,
                              "end": 3676,
                              "decorators": [],
                              "name": "PublicSpec",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "optional": false,
                      "computed": true
                    },
                    "directive": null
                  },
                  {
                    "type": "IfStatement",
                    "start": 3726,
                    "end": 3782,
                    "test": {
                      "type": "BinaryExpression",
                      "start": 3730,
                      "end": 3749,
                      "left": {
                        "type": "Identifier",
                        "start": 3730,
                        "end": 3735,
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "operator": "===",
                      "right": {
                        "type": "Identifier",
                        "start": 3740,
                        "end": 3749,
                        "decorators": [],
                        "name": "undefined",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "consequent": {
                      "type": "BlockStatement",
                      "start": 3751,
                      "end": 3782,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 3765,
                          "end": 3772,
                          "argument": null
                        }
                      ]
                    },
                    "alternate": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3791,
                    "end": 3826,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3791,
                      "end": 3825,
                      "object": {
                        "type": "Identifier",
                        "start": 3791,
                        "end": 3796,
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "start": 3797,
                        "end": 3824,
                        "expression": {
                          "type": "TSNonNullExpression",
                          "start": 3797,
                          "end": 3802,
                          "expression": {
                            "type": "Literal",
                            "start": 3797,
                            "end": 3801,
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "start": 3806,
                          "end": 3824,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3812,
                            "end": 3824,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3812,
                              "end": 3824,
                              "decorators": [],
                              "name": "InternalSpec",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "optional": false,
                      "computed": true
                    },
                    "directive": null
                  },
                  {
                    "type": "ExpressionStatement",
                    "start": 3835,
                    "end": 3868,
                    "expression": {
                      "type": "MemberExpression",
                      "start": 3835,
                      "end": 3867,
                      "object": {
                        "type": "Identifier",
                        "start": 3835,
                        "end": 3840,
                        "decorators": [],
                        "name": "iSpec",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "TSAsExpression",
                        "start": 3841,
                        "end": 3866,
                        "expression": {
                          "type": "TSNonNullExpression",
                          "start": 3841,
                          "end": 3846,
                          "expression": {
                            "type": "Literal",
                            "start": 3841,
                            "end": 3845,
                            "value": null,
                            "raw": "null"
                          }
                        },
                        "typeAnnotation": {
                          "type": "TSTypeOperator",
                          "start": 3850,
                          "end": 3866,
                          "operator": "keyof",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "start": 3856,
                            "end": 3866,
                            "typeName": {
                              "type": "Identifier",
                              "start": 3856,
                              "end": 3866,
                              "decorators": [],
                              "name": "PublicSpec",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": null
                          }
                        }
                      },
                      "optional": false,
                      "computed": true
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 3901,
      "end": 3986,
      "id": {
        "type": "Identifier",
        "start": 3910,
        "end": 3913,
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3913,
        "end": 3950,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3914,
            "end": 3949,
            "name": {
              "type": "Identifier",
              "start": 3914,
              "end": 3915,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSUnionType",
              "start": 3924,
              "end": 3949,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 3924,
                  "end": 3937,
                  "members": [
                    {
                      "type": "TSPropertySignature",
                      "start": 3926,
                      "end": 3935,
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "start": 3926,
                        "end": 3927,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 3927,
                        "end": 3935,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 3929,
                          "end": 3935
                        }
                      },
                      "accessibility": null,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 3940,
                  "end": 3949
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
      "params": [
        {
          "type": "Identifier",
          "start": 3951,
          "end": 3955,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3952,
            "end": 3955,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3954,
              "end": 3955,
              "typeName": {
                "type": "Identifier",
                "start": 3954,
                "end": 3955,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 3957,
          "end": 3970,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 3958,
            "end": 3970,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3960,
              "end": 3970,
              "typeName": {
                "type": "Identifier",
                "start": 3960,
                "end": 3967,
                "decorators": [],
                "name": "Partial",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3967,
                "end": 3970,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 3968,
                    "end": 3969,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3968,
                      "end": 3969,
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
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 3972,
        "end": 3986,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 3978,
            "end": 3984,
            "expression": {
              "type": "AssignmentExpression",
              "start": 3978,
              "end": 3983,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 3978,
                "end": 3979,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 3982,
                "end": 3983,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "directive": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3988,
      "end": 4070,
      "id": {
        "type": "Identifier",
        "start": 3993,
        "end": 4005,
        "decorators": [],
        "name": "SqlInsertSet",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4005,
        "end": 4008,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4006,
            "end": 4007,
            "name": {
              "type": "Identifier",
              "start": 4006,
              "end": 4007,
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
        "start": 4011,
        "end": 4069,
        "checkType": {
          "type": "TSTypeReference",
          "start": 4011,
          "end": 4012,
          "typeName": {
            "type": "Identifier",
            "start": 4011,
            "end": 4012,
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        },
        "extendsType": {
          "type": "TSUndefinedKeyword",
          "start": 4021,
          "end": 4030
        },
        "trueType": {
          "type": "TSObjectKeyword",
          "start": 4033,
          "end": 4039
        },
        "falseType": {
          "type": "TSMappedType",
          "start": 4042,
          "end": 4069,
          "key": {
            "type": "Identifier",
            "start": 4045,
            "end": 4046,
            "decorators": [],
            "name": "P",
            "optional": false,
            "typeAnnotation": null
          },
          "constraint": {
            "type": "TSTypeOperator",
            "start": 4050,
            "end": 4057,
            "operator": "keyof",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4056,
              "end": 4057,
              "typeName": {
                "type": "Identifier",
                "start": 4056,
                "end": 4057,
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
            "type": "TSUnknownKeyword",
            "start": 4060,
            "end": 4067
          },
          "optional": false,
          "readonly": null
        }
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 4072,
      "end": 4247,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 4078,
        "end": 4086,
        "decorators": [],
        "name": "SqlTable",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4086,
        "end": 4089,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4087,
            "end": 4088,
            "name": {
              "type": "Identifier",
              "start": 4087,
              "end": 4088,
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
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 4090,
        "end": 4247,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 4096,
            "end": 4163,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4106,
              "end": 4117,
              "decorators": [],
              "name": "validateRow",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 4117,
              "end": 4163,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4118,
                  "end": 4148,
                  "decorators": [],
                  "name": "_row",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4122,
                    "end": 4148,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4124,
                      "end": 4148,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4124,
                        "end": 4131,
                        "decorators": [],
                        "name": "Partial",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 4131,
                        "end": 4148,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 4132,
                            "end": 4147,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4132,
                              "end": 4144,
                              "decorators": [],
                              "name": "SqlInsertSet",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "typeArguments": {
                              "type": "TSTypeParameterInstantiation",
                              "start": 4144,
                              "end": 4147,
                              "params": [
                                {
                                  "type": "TSTypeReference",
                                  "start": 4145,
                                  "end": 4146,
                                  "typeName": {
                                    "type": "Identifier",
                                    "start": 4145,
                                    "end": 4146,
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
                        ]
                      }
                    }
                  }
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 4149,
                "end": 4155,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4151,
                  "end": 4155
                }
              },
              "body": {
                "type": "BlockStatement",
                "start": 4156,
                "end": 4163,
                "body": []
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected"
          },
          {
            "type": "MethodDefinition",
            "start": 4168,
            "end": 4245,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 4175,
              "end": 4184,
              "decorators": [],
              "name": "insertRow",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 4184,
              "end": 4245,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 4185,
                  "end": 4205,
                  "decorators": [],
                  "name": "row",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4188,
                    "end": 4205,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4190,
                      "end": 4205,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4190,
                        "end": 4202,
                        "decorators": [],
                        "name": "SqlInsertSet",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": {
                        "type": "TSTypeParameterInstantiation",
                        "start": 4202,
                        "end": 4205,
                        "params": [
                          {
                            "type": "TSTypeReference",
                            "start": 4203,
                            "end": 4204,
                            "typeName": {
                              "type": "Identifier",
                              "start": 4203,
                              "end": 4204,
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
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 4207,
                "end": 4245,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 4217,
                    "end": 4239,
                    "expression": {
                      "type": "CallExpression",
                      "start": 4217,
                      "end": 4238,
                      "callee": {
                        "type": "MemberExpression",
                        "start": 4217,
                        "end": 4233,
                        "object": {
                          "type": "ThisExpression",
                          "start": 4217,
                          "end": 4221
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 4222,
                          "end": 4233,
                          "decorators": [],
                          "name": "validateRow",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "Identifier",
                          "start": 4234,
                          "end": 4237,
                          "decorators": [],
                          "name": "row",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public"
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 4271,
      "end": 4329,
      "id": {
        "type": "Identifier",
        "start": 4281,
        "end": 4287,
        "decorators": [],
        "name": "Button",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 4288,
        "end": 4329,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4294,
            "end": 4309,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4294,
              "end": 4298,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4298,
              "end": 4308,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 4300,
                "end": 4308,
                "literal": {
                  "type": "Literal",
                  "start": 4300,
                  "end": 4308,
                  "value": "button",
                  "raw": "\"button\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 4314,
            "end": 4327,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4314,
              "end": 4318,
              "decorators": [],
              "name": "text",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4318,
              "end": 4326,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 4320,
                "end": 4326
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
      "type": "TSInterfaceDeclaration",
      "start": 4331,
      "end": 4399,
      "id": {
        "type": "Identifier",
        "start": 4341,
        "end": 4349,
        "decorators": [],
        "name": "Checkbox",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 4350,
        "end": 4399,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 4356,
            "end": 4373,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4356,
              "end": 4360,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4360,
              "end": 4372,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 4362,
                "end": 4372,
                "literal": {
                  "type": "Literal",
                  "start": 4362,
                  "end": 4372,
                  "value": "checkbox",
                  "raw": "\"checkbox\""
                }
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 4378,
            "end": 4397,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 4378,
              "end": 4387,
              "decorators": [],
              "name": "isChecked",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4387,
              "end": 4396,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 4389,
                "end": 4396
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
      "start": 4401,
      "end": 4434,
      "id": {
        "type": "Identifier",
        "start": 4406,
        "end": 4413,
        "decorators": [],
        "name": "Control",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 4416,
        "end": 4433,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 4416,
            "end": 4422,
            "typeName": {
              "type": "Identifier",
              "start": 4416,
              "end": 4422,
              "decorators": [],
              "name": "Button",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSTypeReference",
            "start": 4425,
            "end": 4433,
            "typeName": {
              "type": "Identifier",
              "start": 4425,
              "end": 4433,
              "decorators": [],
              "name": "Checkbox",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 4436,
      "end": 4614,
      "id": {
        "type": "Identifier",
        "start": 4445,
        "end": 4451,
        "decorators": [],
        "name": "update",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4451,
        "end": 4489,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4452,
            "end": 4469,
            "name": {
              "type": "Identifier",
              "start": 4452,
              "end": 4453,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 4462,
              "end": 4469,
              "typeName": {
                "type": "Identifier",
                "start": 4462,
                "end": 4469,
                "decorators": [],
                "name": "Control",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4471,
            "end": 4488,
            "name": {
              "type": "Identifier",
              "start": 4471,
              "end": 4472,
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 4481,
              "end": 4488,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4487,
                "end": 4488,
                "typeName": {
                  "type": "Identifier",
                  "start": 4487,
                  "end": 4488,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
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
          "start": 4490,
          "end": 4513,
          "decorators": [],
          "name": "control",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4498,
            "end": 4513,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4500,
              "end": 4513,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 4500,
                  "end": 4501,
                  "typeName": {
                    "type": "Identifier",
                    "start": 4500,
                    "end": 4501,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 4504,
                  "end": 4513
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4515,
          "end": 4521,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4518,
            "end": 4521,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4520,
              "end": 4521,
              "typeName": {
                "type": "Identifier",
                "start": 4520,
                "end": 4521,
                "decorators": [],
                "name": "K",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 4523,
          "end": 4534,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4528,
            "end": 4534,
            "typeAnnotation": {
              "type": "TSIndexedAccessType",
              "start": 4530,
              "end": 4534,
              "objectType": {
                "type": "TSTypeReference",
                "start": 4530,
                "end": 4531,
                "typeName": {
                  "type": "Identifier",
                  "start": 4530,
                  "end": 4531,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSTypeReference",
                "start": 4532,
                "end": 4533,
                "typeName": {
                  "type": "Identifier",
                  "start": 4532,
                  "end": 4533,
                  "decorators": [],
                  "name": "K",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 4535,
        "end": 4541,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4537,
          "end": 4541
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 4542,
        "end": 4614,
        "body": [
          {
            "type": "IfStatement",
            "start": 4548,
            "end": 4612,
            "test": {
              "type": "BinaryExpression",
              "start": 4552,
              "end": 4573,
              "left": {
                "type": "Identifier",
                "start": 4552,
                "end": 4559,
                "decorators": [],
                "name": "control",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!==",
              "right": {
                "type": "Identifier",
                "start": 4564,
                "end": 4573,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 4575,
              "end": 4612,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 4585,
                  "end": 4606,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 4585,
                    "end": 4605,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 4585,
                      "end": 4597,
                      "object": {
                        "type": "Identifier",
                        "start": 4585,
                        "end": 4592,
                        "decorators": [],
                        "name": "control",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 4593,
                        "end": 4596,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 4600,
                      "end": 4605,
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4638,
      "end": 4739,
      "id": {
        "type": "Identifier",
        "start": 4643,
        "end": 4649,
        "decorators": [],
        "name": "Column",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4649,
        "end": 4652,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4650,
            "end": 4651,
            "name": {
              "type": "Identifier",
              "start": 4650,
              "end": 4651,
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
        "type": "TSIntersectionType",
        "start": 4655,
        "end": 4739,
        "types": [
          {
            "type": "TSConditionalType",
            "start": 4656,
            "end": 4716,
            "checkType": {
              "type": "TSTypeOperator",
              "start": 4656,
              "end": 4663,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4662,
                "end": 4663,
                "typeName": {
                  "type": "Identifier",
                  "start": 4662,
                  "end": 4663,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "extendsType": {
              "type": "TSNeverKeyword",
              "start": 4672,
              "end": 4677
            },
            "trueType": {
              "type": "TSTypeLiteral",
              "start": 4680,
              "end": 4704,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4682,
                  "end": 4702,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4682,
                    "end": 4684,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4685,
                    "end": 4702,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 4687,
                      "end": 4702,
                      "types": [
                        {
                          "type": "TSNumberKeyword",
                          "start": 4687,
                          "end": 4693
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 4696,
                          "end": 4702
                        }
                      ]
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            },
            "falseType": {
              "type": "TSTypeLiteral",
              "start": 4707,
              "end": 4716,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 4709,
                  "end": 4714,
                  "computed": false,
                  "optional": false,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 4709,
                    "end": 4711,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 4711,
                    "end": 4714,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 4713,
                      "end": 4714,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4713,
                        "end": 4714,
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
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 4720,
            "end": 4739,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 4722,
                "end": 4737,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 4722,
                  "end": 4727,
                  "decorators": [],
                  "name": "title",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 4728,
                  "end": 4736,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 4730,
                    "end": 4736
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
      "type": "FunctionDeclaration",
      "start": 4741,
      "end": 4837,
      "id": {
        "type": "Identifier",
        "start": 4750,
        "end": 4767,
        "decorators": [],
        "name": "getColumnProperty",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4767,
        "end": 4770,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4768,
            "end": 4769,
            "name": {
              "type": "Identifier",
              "start": 4768,
              "end": 4769,
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
          "start": 4771,
          "end": 4788,
          "decorators": [],
          "name": "column",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4777,
            "end": 4788,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 4779,
              "end": 4788,
              "typeName": {
                "type": "Identifier",
                "start": 4779,
                "end": 4785,
                "decorators": [],
                "name": "Column",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 4785,
                "end": 4788,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 4786,
                    "end": 4787,
                    "typeName": {
                      "type": "Identifier",
                      "start": 4786,
                      "end": 4787,
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
        },
        {
          "type": "Identifier",
          "start": 4790,
          "end": 4810,
          "decorators": [],
          "name": "key",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4793,
            "end": 4810,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 4795,
              "end": 4810,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4801,
                "end": 4810,
                "typeName": {
                  "type": "Identifier",
                  "start": 4801,
                  "end": 4807,
                  "decorators": [],
                  "name": "Column",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 4807,
                  "end": 4810,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 4808,
                      "end": 4809,
                      "typeName": {
                        "type": "Identifier",
                        "start": 4808,
                        "end": 4809,
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
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 4812,
        "end": 4837,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 4816,
            "end": 4835,
            "argument": {
              "type": "MemberExpression",
              "start": 4823,
              "end": 4834,
              "object": {
                "type": "Identifier",
                "start": 4823,
                "end": 4829,
                "decorators": [],
                "name": "column",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 4830,
                "end": 4833,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "module",
  "hashbang": null
}
```
