__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 95,
  "end": 1270,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 95,
      "end": 123,
      "body": {
        "type": "TSInterfaceBody",
        "start": 107,
        "end": 123,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 111,
            "end": 121,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 111,
              "end": 112,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 112,
              "end": 120,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 114,
                "end": 120
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 105,
        "end": 106,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 125,
      "end": 153,
      "body": {
        "type": "TSInterfaceBody",
        "start": 137,
        "end": 153,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 141,
            "end": 151,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 144,
                "end": 150
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 155,
      "end": 178,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 161,
          "end": 177,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 161,
            "end": 172,
            "decorators": [],
            "name": "inputA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 167,
              "end": 172,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 169,
                "end": 172,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 169,
                  "end": 170,
                  "typeName": {
                    "type": "Identifier",
                    "start": 169,
                    "end": 170,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 175,
            "end": 177,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 179,
      "end": 202,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 185,
          "end": 201,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 185,
            "end": 196,
            "decorators": [],
            "name": "inputB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 191,
              "end": 196,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 193,
                "end": 196,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 193,
                  "end": 194,
                  "typeName": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 199,
            "end": 201,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 203,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 209,
          "end": 249,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 209,
            "end": 233,
            "decorators": [],
            "name": "inputALike",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 219,
              "end": 233,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 221,
                "end": 233,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 230,
                  "end": 233,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 231,
                      "end": 232,
                      "typeName": {
                        "type": "Identifier",
                        "start": 231,
                        "end": 232,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 221,
                  "end": 230,
                  "decorators": [],
                  "name": "ArrayLike",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 236,
            "end": 249,
            "properties": [
              {
                "type": "Property",
                "start": 238,
                "end": 247,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 238,
                  "end": 244,
                  "decorators": [],
                  "name": "length",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 246,
                  "end": 247,
                  "raw": "0",
                  "value": 0
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 251,
      "end": 300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 299,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 267,
            "decorators": [],
            "name": "inputARand",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 270,
            "end": 299,
            "arguments": [
              {
                "type": "Identifier",
                "start": 280,
                "end": 286,
                "decorators": [],
                "name": "inputA",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 288,
                "end": 298,
                "decorators": [],
                "name": "inputALike",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 270,
              "end": 279,
              "decorators": [],
              "name": "getEither",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 301,
      "end": 332,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 307,
          "end": 331,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 307,
            "end": 316,
            "decorators": [],
            "name": "inputASet",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 319,
            "end": 331,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 323,
              "end": 326,
              "decorators": [],
              "name": "Set",
              "optional": false
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "start": 326,
              "end": 329,
              "params": [
                {
                  "type": "TSTypeReference",
                  "start": 327,
                  "end": 328,
                  "typeName": {
                    "type": "Identifier",
                    "start": 327,
                    "end": 328,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 374,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 340,
          "end": 373,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 340,
            "end": 352,
            "decorators": [],
            "name": "result1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 347,
              "end": 352,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 349,
                "end": 352,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 349,
                  "end": 350,
                  "typeName": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 355,
            "end": 373,
            "arguments": [
              {
                "type": "Identifier",
                "start": 366,
                "end": 372,
                "decorators": [],
                "name": "inputA",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 355,
              "end": 365,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 355,
                "end": 360,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 361,
                "end": 365,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 375,
      "end": 424,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 381,
          "end": 423,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 381,
            "end": 393,
            "decorators": [],
            "name": "result2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 388,
              "end": 393,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 390,
                "end": 393,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 390,
                  "end": 391,
                  "typeName": {
                    "type": "Identifier",
                    "start": 390,
                    "end": 391,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 396,
            "end": 423,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 407,
                "end": 422,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 407,
                  "end": 420,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 413,
                    "decorators": [],
                    "name": "inputA",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 414,
                    "end": 420,
                    "decorators": [],
                    "name": "values",
                    "optional": false
                  }
                },
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 396,
              "end": 406,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 396,
                "end": 401,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 402,
                "end": 406,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 425,
      "end": 474,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 431,
          "end": 473,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 431,
            "end": 443,
            "decorators": [],
            "name": "result3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 438,
              "end": 443,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 440,
                "end": 443,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 440,
                  "end": 441,
                  "typeName": {
                    "type": "Identifier",
                    "start": 440,
                    "end": 441,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 446,
            "end": 473,
            "arguments": [
              {
                "type": "CallExpression",
                "start": 457,
                "end": 472,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 457,
                  "end": 470,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 463,
                    "decorators": [],
                    "name": "inputA",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 464,
                    "end": 470,
                    "decorators": [],
                    "name": "values",
                    "optional": false
                  }
                },
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 446,
              "end": 456,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 446,
                "end": 451,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 452,
                "end": 456,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 491,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 497,
          "end": 556,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 497,
            "end": 509,
            "decorators": [],
            "name": "result4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 504,
              "end": 509,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 506,
                "end": 509,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 506,
                  "end": 507,
                  "typeName": {
                    "type": "Identifier",
                    "start": 506,
                    "end": 507,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 512,
            "end": 556,
            "arguments": [
              {
                "type": "Identifier",
                "start": 523,
                "end": 529,
                "decorators": [],
                "name": "inputB",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 531,
                "end": 555,
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "start": 546,
                  "end": 554,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 548,
                      "end": 552,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 548,
                        "end": 549,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 552,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 532,
                    "end": 537,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 534,
                        "end": 535,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 534,
                          "end": 535,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 534,
                          "end": 535,
                          "decorators": [],
                          "name": "b",
                          "optional": false
                        }
                      }
                    ]
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 538,
                  "end": 541,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 540,
                    "end": 541,
                    "typeName": {
                      "type": "Identifier",
                      "start": 540,
                      "end": 541,
                      "decorators": [],
                      "name": "A",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 512,
              "end": 522,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 512,
                "end": 517,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 518,
                "end": 522,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 558,
      "end": 602,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 601,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 576,
            "decorators": [],
            "name": "result5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 571,
              "end": 576,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 573,
                "end": 576,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 573,
                  "end": 574,
                  "typeName": {
                    "type": "Identifier",
                    "start": 573,
                    "end": 574,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 579,
            "end": 601,
            "arguments": [
              {
                "type": "Identifier",
                "start": 590,
                "end": 600,
                "decorators": [],
                "name": "inputALike",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 579,
              "end": 589,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 579,
                "end": 584,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 585,
                "end": 589,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 603,
      "end": 647,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 609,
          "end": 646,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 609,
            "end": 621,
            "decorators": [],
            "name": "result6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 616,
              "end": 621,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 618,
                "end": 621,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 618,
                  "end": 619,
                  "typeName": {
                    "type": "Identifier",
                    "start": 618,
                    "end": 619,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 624,
            "end": 646,
            "arguments": [
              {
                "type": "Identifier",
                "start": 635,
                "end": 645,
                "decorators": [],
                "name": "inputALike",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 624,
              "end": 634,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 624,
                "end": 629,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 630,
                "end": 634,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 664,
      "end": 734,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 670,
          "end": 733,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 670,
            "end": 682,
            "decorators": [],
            "name": "result7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 677,
              "end": 682,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 679,
                "end": 682,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 679,
                  "end": 680,
                  "typeName": {
                    "type": "Identifier",
                    "start": 679,
                    "end": 680,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 685,
            "end": 733,
            "arguments": [
              {
                "type": "Identifier",
                "start": 696,
                "end": 706,
                "decorators": [],
                "name": "inputALike",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 708,
                "end": 732,
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "start": 723,
                  "end": 731,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 725,
                      "end": 729,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 725,
                        "end": 726,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 728,
                        "end": 729,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 709,
                    "end": 714,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 711,
                        "end": 712,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 711,
                          "end": 712,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 711,
                          "end": 712,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ]
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 715,
                  "end": 718,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 717,
                    "end": 718,
                    "typeName": {
                      "type": "Identifier",
                      "start": 717,
                      "end": 718,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 685,
              "end": 695,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 685,
                "end": 690,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 691,
                "end": 695,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 735,
      "end": 779,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 741,
          "end": 778,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 741,
            "end": 753,
            "decorators": [],
            "name": "result8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 748,
              "end": 753,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 750,
                "end": 753,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 750,
                  "end": 751,
                  "typeName": {
                    "type": "Identifier",
                    "start": 750,
                    "end": 751,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 756,
            "end": 778,
            "arguments": [
              {
                "type": "Identifier",
                "start": 767,
                "end": 777,
                "decorators": [],
                "name": "inputARand",
                "optional": false
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 756,
              "end": 766,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 756,
                "end": 761,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 762,
                "end": 766,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 780,
      "end": 850,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 786,
          "end": 849,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 786,
            "end": 798,
            "decorators": [],
            "name": "result9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 793,
              "end": 798,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 795,
                "end": 798,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 795,
                  "end": 796,
                  "typeName": {
                    "type": "Identifier",
                    "start": 795,
                    "end": 796,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 801,
            "end": 849,
            "arguments": [
              {
                "type": "Identifier",
                "start": 812,
                "end": 822,
                "decorators": [],
                "name": "inputARand",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 824,
                "end": 848,
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "start": 839,
                  "end": 847,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 841,
                      "end": 845,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 841,
                        "end": 842,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 844,
                        "end": 845,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 825,
                    "end": 830,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 827,
                        "end": 828,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 827,
                          "end": 828,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 827,
                          "end": 828,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ]
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 831,
                  "end": 834,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 833,
                    "end": 834,
                    "typeName": {
                      "type": "Identifier",
                      "start": 833,
                      "end": 834,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 801,
              "end": 811,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 801,
                "end": 806,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 807,
                "end": 811,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 851,
      "end": 898,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 857,
          "end": 897,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 857,
            "end": 870,
            "decorators": [],
            "name": "result10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 865,
              "end": 870,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 867,
                "end": 870,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 867,
                  "end": 868,
                  "typeName": {
                    "type": "Identifier",
                    "start": 867,
                    "end": 868,
                    "decorators": [],
                    "name": "A",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 873,
            "end": 897,
            "arguments": [
              {
                "type": "NewExpression",
                "start": 884,
                "end": 896,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 888,
                  "end": 891,
                  "decorators": [],
                  "name": "Set",
                  "optional": false
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 891,
                  "end": 894,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 892,
                      "end": 893,
                      "typeName": {
                        "type": "Identifier",
                        "start": 892,
                        "end": 893,
                        "decorators": [],
                        "name": "A",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 873,
              "end": 883,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 873,
                "end": 878,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 879,
                "end": 883,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 899,
      "end": 969,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 905,
          "end": 968,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 905,
            "end": 918,
            "decorators": [],
            "name": "result11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 913,
              "end": 918,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 915,
                "end": 918,
                "elementType": {
                  "type": "TSTypeReference",
                  "start": 915,
                  "end": 916,
                  "typeName": {
                    "type": "Identifier",
                    "start": 915,
                    "end": 916,
                    "decorators": [],
                    "name": "B",
                    "optional": false
                  }
                }
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 921,
            "end": 968,
            "arguments": [
              {
                "type": "Identifier",
                "start": 932,
                "end": 941,
                "decorators": [],
                "name": "inputASet",
                "optional": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 943,
                "end": 967,
                "async": false,
                "body": {
                  "type": "ObjectExpression",
                  "start": 958,
                  "end": 966,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 960,
                      "end": 964,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 960,
                        "end": 961,
                        "decorators": [],
                        "name": "b",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 963,
                        "end": 964,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  ]
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "ObjectPattern",
                    "start": 944,
                    "end": 949,
                    "decorators": [],
                    "optional": false,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 946,
                        "end": 947,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 946,
                          "end": 947,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": true,
                        "value": {
                          "type": "Identifier",
                          "start": 946,
                          "end": 947,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      }
                    ]
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 950,
                  "end": 953,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 952,
                    "end": 953,
                    "typeName": {
                      "type": "Identifier",
                      "start": 952,
                      "end": 953,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                }
              }
            ],
            "callee": {
              "type": "MemberExpression",
              "start": 921,
              "end": 931,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 921,
                "end": 926,
                "decorators": [],
                "name": "Array",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 927,
                "end": 931,
                "decorators": [],
                "name": "from",
                "optional": false
              }
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "FunctionDeclaration",
      "start": 1164,
      "end": 1269,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 1224,
        "end": 1269,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1228,
            "end": 1267,
            "argument": {
              "type": "ConditionalExpression",
              "start": 1235,
              "end": 1266,
              "alternate": {
                "type": "Identifier",
                "start": 1263,
                "end": 1266,
                "decorators": [],
                "name": "in2",
                "optional": false
              },
              "consequent": {
                "type": "Identifier",
                "start": 1257,
                "end": 1260,
                "decorators": [],
                "name": "in1",
                "optional": false
              },
              "test": {
                "type": "BinaryExpression",
                "start": 1235,
                "end": 1254,
                "operator": ">",
                "left": {
                  "type": "CallExpression",
                  "start": 1235,
                  "end": 1248,
                  "arguments": [],
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1235,
                    "end": 1246,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 1235,
                      "end": 1239,
                      "decorators": [],
                      "name": "Math",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 1240,
                      "end": 1246,
                      "decorators": [],
                      "name": "random",
                      "optional": false
                    }
                  },
                  "optional": false
                },
                "right": {
                  "type": "Literal",
                  "start": 1251,
                  "end": 1254,
                  "raw": "0.5",
                  "value": 0.5
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1173,
        "end": 1182,
        "decorators": [],
        "name": "getEither",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1187,
          "end": 1203,
          "decorators": [],
          "name": "in1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1190,
            "end": 1203,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1192,
              "end": 1203,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1200,
                "end": 1203,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1201,
                    "end": 1202,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1201,
                      "end": 1202,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1192,
                "end": 1200,
                "decorators": [],
                "name": "Iterable",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 1205,
          "end": 1222,
          "decorators": [],
          "name": "in2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1208,
            "end": 1222,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1210,
              "end": 1222,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1219,
                "end": 1222,
                "params": [
                  {
                    "type": "TSTypeReference",
                    "start": 1220,
                    "end": 1221,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1220,
                      "end": 1221,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 1210,
                "end": 1219,
                "decorators": [],
                "name": "ArrayLike",
                "optional": false
              }
            }
          }
        }
      ],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1182,
        "end": 1185,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1183,
            "end": 1184,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 1183,
              "end": 1184,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
