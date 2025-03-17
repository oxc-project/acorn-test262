__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2622,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 113,
      "id": {
        "type": "Identifier",
        "start": 15,
        "end": 21,
        "name": "fAsync",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 24,
        "end": 113,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 94,
            "end": 111,
            "argument": {
              "type": "ArrayExpression",
              "start": 101,
              "end": 110,
              "elements": [
                {
                  "type": "Literal",
                  "start": 102,
                  "end": 103,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 105,
                  "end": 109,
                  "value": true,
                  "raw": "true"
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 115,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 144,
        "name": "fAsyncExplicit",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 175,
        "end": 246,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 227,
            "end": 244,
            "argument": {
              "type": "ArrayExpression",
              "start": 234,
              "end": 243,
              "elements": [
                {
                  "type": "Literal",
                  "start": 235,
                  "end": 236,
                  "value": 1,
                  "raw": "1"
                },
                {
                  "type": "Literal",
                  "start": 238,
                  "end": 242,
                  "value": true,
                  "raw": "true"
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 146,
        "end": 174,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 148,
          "end": 174,
          "typeName": {
            "type": "Identifier",
            "start": 148,
            "end": 155,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 155,
            "end": 174,
            "params": [
              {
                "type": "TSTupleType",
                "start": 156,
                "end": 173,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 157,
                    "end": 163
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 165,
                    "end": 172
                  }
                ]
              }
            ]
          }
        }
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 304,
      "end": 363,
      "id": {
        "type": "Identifier",
        "start": 314,
        "end": 317,
        "name": "Obj",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 318,
        "end": 363,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 324,
            "end": 343,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 324,
              "end": 334,
              "name": "stringProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 334,
              "end": 342,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 336,
                "end": 342
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 348,
            "end": 361,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 348,
              "end": 355,
              "name": "anyProp",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 355,
              "end": 360,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 357,
                "end": 360
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
      "type": "FunctionDeclaration",
      "start": 365,
      "end": 474,
      "id": {
        "type": "Identifier",
        "start": 380,
        "end": 405,
        "name": "fIndexedTypeForStringProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 406,
          "end": 414,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 409,
            "end": 414,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 411,
              "end": 414,
              "typeName": {
                "type": "Identifier",
                "start": 411,
                "end": 414,
                "name": "Obj",
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
      "body": {
        "type": "BlockStatement",
        "start": 444,
        "end": 474,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 450,
            "end": 472,
            "argument": {
              "type": "MemberExpression",
              "start": 457,
              "end": 471,
              "object": {
                "type": "Identifier",
                "start": 457,
                "end": 460,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 461,
                "end": 471,
                "name": "stringProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 415,
        "end": 443,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 417,
          "end": 443,
          "typeName": {
            "type": "Identifier",
            "start": 417,
            "end": 424,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 424,
            "end": 443,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 425,
                "end": 442,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 425,
                  "end": 428,
                  "typeName": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 428,
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 429,
                  "end": 441,
                  "literal": {
                    "type": "Literal",
                    "start": 429,
                    "end": 441,
                    "value": "stringProp",
                    "raw": "\"stringProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 476,
      "end": 611,
      "id": {
        "type": "Identifier",
        "start": 491,
        "end": 525,
        "name": "fIndexedTypeForPromiseOfStringProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 526,
          "end": 534,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 529,
            "end": 534,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 531,
              "end": 534,
              "typeName": {
                "type": "Identifier",
                "start": 531,
                "end": 534,
                "name": "Obj",
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
      "body": {
        "type": "BlockStatement",
        "start": 564,
        "end": 611,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 570,
            "end": 609,
            "argument": {
              "type": "CallExpression",
              "start": 577,
              "end": 608,
              "callee": {
                "type": "MemberExpression",
                "start": 577,
                "end": 592,
                "object": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 584,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 585,
                  "end": 592,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 593,
                  "end": 607,
                  "object": {
                    "type": "Identifier",
                    "start": 593,
                    "end": 596,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 597,
                    "end": 607,
                    "name": "stringProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 535,
        "end": 563,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 537,
          "end": 563,
          "typeName": {
            "type": "Identifier",
            "start": 537,
            "end": 544,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 544,
            "end": 563,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 545,
                "end": 562,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 545,
                  "end": 548,
                  "typeName": {
                    "type": "Identifier",
                    "start": 545,
                    "end": 548,
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 549,
                  "end": 561,
                  "literal": {
                    "type": "Literal",
                    "start": 549,
                    "end": 561,
                    "value": "stringProp",
                    "raw": "\"stringProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 613,
      "end": 775,
      "id": {
        "type": "Identifier",
        "start": 628,
        "end": 670,
        "name": "fIndexedTypeForExplicitPromiseOfStringProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 671,
          "end": 679,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 674,
            "end": 679,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 676,
              "end": 679,
              "typeName": {
                "type": "Identifier",
                "start": 676,
                "end": 679,
                "name": "Obj",
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
      "body": {
        "type": "BlockStatement",
        "start": 709,
        "end": 775,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 715,
            "end": 773,
            "argument": {
              "type": "CallExpression",
              "start": 722,
              "end": 772,
              "callee": {
                "type": "MemberExpression",
                "start": 722,
                "end": 737,
                "object": {
                  "type": "Identifier",
                  "start": 722,
                  "end": 729,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 730,
                  "end": 737,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 757,
                  "end": 771,
                  "object": {
                    "type": "Identifier",
                    "start": 757,
                    "end": 760,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 761,
                    "end": 771,
                    "name": "stringProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 737,
                "end": 756,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 738,
                    "end": 755,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 738,
                      "end": 741,
                      "typeName": {
                        "type": "Identifier",
                        "start": 738,
                        "end": 741,
                        "name": "Obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 742,
                      "end": 754,
                      "literal": {
                        "type": "Literal",
                        "start": 742,
                        "end": 754,
                        "value": "stringProp",
                        "raw": "\"stringProp\""
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 680,
        "end": 708,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 682,
          "end": 708,
          "typeName": {
            "type": "Identifier",
            "start": 682,
            "end": 689,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 689,
            "end": 708,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 690,
                "end": 707,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 690,
                  "end": 693,
                  "typeName": {
                    "type": "Identifier",
                    "start": 690,
                    "end": 693,
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 694,
                  "end": 706,
                  "literal": {
                    "type": "Literal",
                    "start": 694,
                    "end": 706,
                    "value": "stringProp",
                    "raw": "\"stringProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 777,
      "end": 877,
      "id": {
        "type": "Identifier",
        "start": 792,
        "end": 814,
        "name": "fIndexedTypeForAnyProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 815,
          "end": 823,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 818,
            "end": 823,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 820,
              "end": 823,
              "typeName": {
                "type": "Identifier",
                "start": 820,
                "end": 823,
                "name": "Obj",
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
      "body": {
        "type": "BlockStatement",
        "start": 850,
        "end": 877,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 856,
            "end": 875,
            "argument": {
              "type": "MemberExpression",
              "start": 863,
              "end": 874,
              "object": {
                "type": "Identifier",
                "start": 863,
                "end": 866,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 867,
                "end": 874,
                "name": "anyProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 824,
        "end": 849,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 826,
          "end": 849,
          "typeName": {
            "type": "Identifier",
            "start": 826,
            "end": 833,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 833,
            "end": 849,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 834,
                "end": 848,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 834,
                  "end": 837,
                  "typeName": {
                    "type": "Identifier",
                    "start": 834,
                    "end": 837,
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 838,
                  "end": 847,
                  "literal": {
                    "type": "Literal",
                    "start": 838,
                    "end": 847,
                    "value": "anyProp",
                    "raw": "\"anyProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 879,
      "end": 1005,
      "id": {
        "type": "Identifier",
        "start": 894,
        "end": 925,
        "name": "fIndexedTypeForPromiseOfAnyProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 926,
          "end": 934,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 929,
            "end": 934,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 931,
              "end": 934,
              "typeName": {
                "type": "Identifier",
                "start": 931,
                "end": 934,
                "name": "Obj",
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
      "body": {
        "type": "BlockStatement",
        "start": 961,
        "end": 1005,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 967,
            "end": 1003,
            "argument": {
              "type": "CallExpression",
              "start": 974,
              "end": 1002,
              "callee": {
                "type": "MemberExpression",
                "start": 974,
                "end": 989,
                "object": {
                  "type": "Identifier",
                  "start": 974,
                  "end": 981,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 982,
                  "end": 989,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 990,
                  "end": 1001,
                  "object": {
                    "type": "Identifier",
                    "start": 990,
                    "end": 993,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 994,
                    "end": 1001,
                    "name": "anyProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 935,
        "end": 960,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 937,
          "end": 960,
          "typeName": {
            "type": "Identifier",
            "start": 937,
            "end": 944,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 944,
            "end": 960,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 945,
                "end": 959,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 945,
                  "end": 948,
                  "typeName": {
                    "type": "Identifier",
                    "start": 945,
                    "end": 948,
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 949,
                  "end": 958,
                  "literal": {
                    "type": "Literal",
                    "start": 949,
                    "end": 958,
                    "value": "anyProp",
                    "raw": "\"anyProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1007,
      "end": 1157,
      "id": {
        "type": "Identifier",
        "start": 1022,
        "end": 1061,
        "name": "fIndexedTypeForExplicitPromiseOfAnyProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 1062,
          "end": 1070,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1065,
            "end": 1070,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1067,
              "end": 1070,
              "typeName": {
                "type": "Identifier",
                "start": 1067,
                "end": 1070,
                "name": "Obj",
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
      "body": {
        "type": "BlockStatement",
        "start": 1097,
        "end": 1157,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1103,
            "end": 1155,
            "argument": {
              "type": "CallExpression",
              "start": 1110,
              "end": 1154,
              "callee": {
                "type": "MemberExpression",
                "start": 1110,
                "end": 1125,
                "object": {
                  "type": "Identifier",
                  "start": 1110,
                  "end": 1117,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1118,
                  "end": 1125,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 1142,
                  "end": 1153,
                  "object": {
                    "type": "Identifier",
                    "start": 1142,
                    "end": 1145,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1146,
                    "end": 1153,
                    "name": "anyProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1125,
                "end": 1141,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 1126,
                    "end": 1140,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 1126,
                      "end": 1129,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1126,
                        "end": 1129,
                        "name": "Obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 1130,
                      "end": 1139,
                      "literal": {
                        "type": "Literal",
                        "start": 1130,
                        "end": 1139,
                        "value": "anyProp",
                        "raw": "\"anyProp\""
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1071,
        "end": 1096,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1073,
          "end": 1096,
          "typeName": {
            "type": "Identifier",
            "start": 1073,
            "end": 1080,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1080,
            "end": 1096,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1081,
                "end": 1095,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1081,
                  "end": 1084,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1081,
                    "end": 1084,
                    "name": "Obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1085,
                  "end": 1094,
                  "literal": {
                    "type": "Literal",
                    "start": 1085,
                    "end": 1094,
                    "value": "anyProp",
                    "raw": "\"anyProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1159,
      "end": 1295,
      "id": {
        "type": "Identifier",
        "start": 1174,
        "end": 1206,
        "name": "fGenericIndexedTypeForStringProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 1225,
          "end": 1234,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1228,
            "end": 1234,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1230,
              "end": 1234,
              "typeName": {
                "type": "Identifier",
                "start": 1230,
                "end": 1234,
                "name": "TObj",
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
      "body": {
        "type": "BlockStatement",
        "start": 1265,
        "end": 1295,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1271,
            "end": 1293,
            "argument": {
              "type": "MemberExpression",
              "start": 1278,
              "end": 1292,
              "object": {
                "type": "Identifier",
                "start": 1278,
                "end": 1281,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1282,
                "end": 1292,
                "name": "stringProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1206,
        "end": 1224,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1207,
            "end": 1223,
            "name": {
              "type": "Identifier",
              "start": 1207,
              "end": 1211,
              "name": "TObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1220,
              "end": 1223,
              "typeName": {
                "type": "Identifier",
                "start": 1220,
                "end": 1223,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1235,
        "end": 1264,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1237,
          "end": 1264,
          "typeName": {
            "type": "Identifier",
            "start": 1237,
            "end": 1244,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1244,
            "end": 1264,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1245,
                "end": 1263,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1245,
                  "end": 1249,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1245,
                    "end": 1249,
                    "name": "TObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1250,
                  "end": 1262,
                  "literal": {
                    "type": "Literal",
                    "start": 1250,
                    "end": 1262,
                    "value": "stringProp",
                    "raw": "\"stringProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1297,
      "end": 1459,
      "id": {
        "type": "Identifier",
        "start": 1312,
        "end": 1353,
        "name": "fGenericIndexedTypeForPromiseOfStringProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 1372,
          "end": 1381,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1375,
            "end": 1381,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1377,
              "end": 1381,
              "typeName": {
                "type": "Identifier",
                "start": 1377,
                "end": 1381,
                "name": "TObj",
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
      "body": {
        "type": "BlockStatement",
        "start": 1412,
        "end": 1459,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1418,
            "end": 1457,
            "argument": {
              "type": "CallExpression",
              "start": 1425,
              "end": 1456,
              "callee": {
                "type": "MemberExpression",
                "start": 1425,
                "end": 1440,
                "object": {
                  "type": "Identifier",
                  "start": 1425,
                  "end": 1432,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1433,
                  "end": 1440,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 1441,
                  "end": 1455,
                  "object": {
                    "type": "Identifier",
                    "start": 1441,
                    "end": 1444,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1445,
                    "end": 1455,
                    "name": "stringProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1353,
        "end": 1371,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1354,
            "end": 1370,
            "name": {
              "type": "Identifier",
              "start": 1354,
              "end": 1358,
              "name": "TObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1367,
              "end": 1370,
              "typeName": {
                "type": "Identifier",
                "start": 1367,
                "end": 1370,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1382,
        "end": 1411,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1384,
          "end": 1411,
          "typeName": {
            "type": "Identifier",
            "start": 1384,
            "end": 1391,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1391,
            "end": 1411,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1392,
                "end": 1410,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1392,
                  "end": 1396,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1392,
                    "end": 1396,
                    "name": "TObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1397,
                  "end": 1409,
                  "literal": {
                    "type": "Literal",
                    "start": 1397,
                    "end": 1409,
                    "value": "stringProp",
                    "raw": "\"stringProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1461,
      "end": 1651,
      "id": {
        "type": "Identifier",
        "start": 1476,
        "end": 1525,
        "name": "fGenericIndexedTypeForExplicitPromiseOfStringProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 1544,
          "end": 1553,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1547,
            "end": 1553,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1549,
              "end": 1553,
              "typeName": {
                "type": "Identifier",
                "start": 1549,
                "end": 1553,
                "name": "TObj",
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
      "body": {
        "type": "BlockStatement",
        "start": 1584,
        "end": 1651,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1590,
            "end": 1649,
            "argument": {
              "type": "CallExpression",
              "start": 1597,
              "end": 1648,
              "callee": {
                "type": "MemberExpression",
                "start": 1597,
                "end": 1612,
                "object": {
                  "type": "Identifier",
                  "start": 1597,
                  "end": 1604,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1605,
                  "end": 1612,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 1633,
                  "end": 1647,
                  "object": {
                    "type": "Identifier",
                    "start": 1633,
                    "end": 1636,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1637,
                    "end": 1647,
                    "name": "stringProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 1612,
                "end": 1632,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 1613,
                    "end": 1631,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 1613,
                      "end": 1617,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1613,
                        "end": 1617,
                        "name": "TObj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 1618,
                      "end": 1630,
                      "literal": {
                        "type": "Literal",
                        "start": 1618,
                        "end": 1630,
                        "value": "stringProp",
                        "raw": "\"stringProp\""
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1525,
        "end": 1543,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1526,
            "end": 1542,
            "name": {
              "type": "Identifier",
              "start": 1526,
              "end": 1530,
              "name": "TObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1539,
              "end": 1542,
              "typeName": {
                "type": "Identifier",
                "start": 1539,
                "end": 1542,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1554,
        "end": 1583,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1556,
          "end": 1583,
          "typeName": {
            "type": "Identifier",
            "start": 1556,
            "end": 1563,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1563,
            "end": 1583,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1564,
                "end": 1582,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1564,
                  "end": 1568,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1564,
                    "end": 1568,
                    "name": "TObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1569,
                  "end": 1581,
                  "literal": {
                    "type": "Literal",
                    "start": 1569,
                    "end": 1581,
                    "value": "stringProp",
                    "raw": "\"stringProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1653,
      "end": 1780,
      "id": {
        "type": "Identifier",
        "start": 1668,
        "end": 1697,
        "name": "fGenericIndexedTypeForAnyProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 1716,
          "end": 1725,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1719,
            "end": 1725,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1721,
              "end": 1725,
              "typeName": {
                "type": "Identifier",
                "start": 1721,
                "end": 1725,
                "name": "TObj",
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
      "body": {
        "type": "BlockStatement",
        "start": 1753,
        "end": 1780,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1759,
            "end": 1778,
            "argument": {
              "type": "MemberExpression",
              "start": 1766,
              "end": 1777,
              "object": {
                "type": "Identifier",
                "start": 1766,
                "end": 1769,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1770,
                "end": 1777,
                "name": "anyProp",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1697,
        "end": 1715,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1698,
            "end": 1714,
            "name": {
              "type": "Identifier",
              "start": 1698,
              "end": 1702,
              "name": "TObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1711,
              "end": 1714,
              "typeName": {
                "type": "Identifier",
                "start": 1711,
                "end": 1714,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1726,
        "end": 1752,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1728,
          "end": 1752,
          "typeName": {
            "type": "Identifier",
            "start": 1728,
            "end": 1735,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1735,
            "end": 1752,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1736,
                "end": 1751,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1736,
                  "end": 1740,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1736,
                    "end": 1740,
                    "name": "TObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1741,
                  "end": 1750,
                  "literal": {
                    "type": "Literal",
                    "start": 1741,
                    "end": 1750,
                    "value": "anyProp",
                    "raw": "\"anyProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1782,
      "end": 1935,
      "id": {
        "type": "Identifier",
        "start": 1797,
        "end": 1835,
        "name": "fGenericIndexedTypeForPromiseOfAnyProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 1854,
          "end": 1863,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1857,
            "end": 1863,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1859,
              "end": 1863,
              "typeName": {
                "type": "Identifier",
                "start": 1859,
                "end": 1863,
                "name": "TObj",
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
      "body": {
        "type": "BlockStatement",
        "start": 1891,
        "end": 1935,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 1897,
            "end": 1933,
            "argument": {
              "type": "CallExpression",
              "start": 1904,
              "end": 1932,
              "callee": {
                "type": "MemberExpression",
                "start": 1904,
                "end": 1919,
                "object": {
                  "type": "Identifier",
                  "start": 1904,
                  "end": 1911,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 1912,
                  "end": 1919,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 1920,
                  "end": 1931,
                  "object": {
                    "type": "Identifier",
                    "start": 1920,
                    "end": 1923,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 1924,
                    "end": 1931,
                    "name": "anyProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1835,
        "end": 1853,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1836,
            "end": 1852,
            "name": {
              "type": "Identifier",
              "start": 1836,
              "end": 1840,
              "name": "TObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 1849,
              "end": 1852,
              "typeName": {
                "type": "Identifier",
                "start": 1849,
                "end": 1852,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1864,
        "end": 1890,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 1866,
          "end": 1890,
          "typeName": {
            "type": "Identifier",
            "start": 1866,
            "end": 1873,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 1873,
            "end": 1890,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 1874,
                "end": 1889,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 1874,
                  "end": 1878,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1874,
                    "end": 1878,
                    "name": "TObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 1879,
                  "end": 1888,
                  "literal": {
                    "type": "Literal",
                    "start": 1879,
                    "end": 1888,
                    "value": "anyProp",
                    "raw": "\"anyProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 1937,
      "end": 2115,
      "id": {
        "type": "Identifier",
        "start": 1952,
        "end": 1998,
        "name": "fGenericIndexedTypeForExplicitPromiseOfAnyProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 2017,
          "end": 2026,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2020,
            "end": 2026,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2022,
              "end": 2026,
              "typeName": {
                "type": "Identifier",
                "start": 2022,
                "end": 2026,
                "name": "TObj",
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
      "body": {
        "type": "BlockStatement",
        "start": 2054,
        "end": 2115,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2060,
            "end": 2113,
            "argument": {
              "type": "CallExpression",
              "start": 2067,
              "end": 2112,
              "callee": {
                "type": "MemberExpression",
                "start": 2067,
                "end": 2082,
                "object": {
                  "type": "Identifier",
                  "start": 2067,
                  "end": 2074,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2075,
                  "end": 2082,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 2100,
                  "end": 2111,
                  "object": {
                    "type": "Identifier",
                    "start": 2100,
                    "end": 2103,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2104,
                    "end": 2111,
                    "name": "anyProp",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2082,
                "end": 2099,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 2083,
                    "end": 2098,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2083,
                      "end": 2087,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2083,
                        "end": 2087,
                        "name": "TObj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSLiteralType",
                      "start": 2088,
                      "end": 2097,
                      "literal": {
                        "type": "Literal",
                        "start": 2088,
                        "end": 2097,
                        "value": "anyProp",
                        "raw": "\"anyProp\""
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1998,
        "end": 2016,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1999,
            "end": 2015,
            "name": {
              "type": "Identifier",
              "start": 1999,
              "end": 2003,
              "name": "TObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2012,
              "end": 2015,
              "typeName": {
                "type": "Identifier",
                "start": 2012,
                "end": 2015,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2027,
        "end": 2053,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2029,
          "end": 2053,
          "typeName": {
            "type": "Identifier",
            "start": 2029,
            "end": 2036,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2036,
            "end": 2053,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 2037,
                "end": 2052,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2037,
                  "end": 2041,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2037,
                    "end": 2041,
                    "name": "TObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "start": 2042,
                  "end": 2051,
                  "literal": {
                    "type": "Literal",
                    "start": 2042,
                    "end": 2051,
                    "value": "anyProp",
                    "raw": "\"anyProp\""
                  }
                }
              }
            ]
          }
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2117,
      "end": 2261,
      "id": {
        "type": "Identifier",
        "start": 2132,
        "end": 2159,
        "name": "fGenericIndexedTypeForKProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 2200,
          "end": 2209,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2203,
            "end": 2209,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2205,
              "end": 2209,
              "typeName": {
                "type": "Identifier",
                "start": 2205,
                "end": 2209,
                "name": "TObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2211,
          "end": 2217,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2214,
            "end": 2217,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2216,
              "end": 2217,
              "typeName": {
                "type": "Identifier",
                "start": 2216,
                "end": 2217,
                "name": "K",
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
      "body": {
        "type": "BlockStatement",
        "start": 2237,
        "end": 2261,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2243,
            "end": 2259,
            "argument": {
              "type": "MemberExpression",
              "start": 2250,
              "end": 2258,
              "object": {
                "type": "Identifier",
                "start": 2250,
                "end": 2253,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 2254,
                "end": 2257,
                "name": "key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": true,
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2159,
        "end": 2199,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2160,
            "end": 2176,
            "name": {
              "type": "Identifier",
              "start": 2160,
              "end": 2164,
              "name": "TObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2173,
              "end": 2176,
              "typeName": {
                "type": "Identifier",
                "start": 2173,
                "end": 2176,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "start": 2178,
            "end": 2198,
            "name": {
              "type": "Identifier",
              "start": 2178,
              "end": 2179,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2188,
              "end": 2198,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2194,
                "end": 2198,
                "typeName": {
                  "type": "Identifier",
                  "start": 2194,
                  "end": 2198,
                  "name": "TObj",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2218,
        "end": 2236,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2220,
          "end": 2236,
          "typeName": {
            "type": "Identifier",
            "start": 2220,
            "end": 2227,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2227,
            "end": 2236,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 2228,
                "end": 2235,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2228,
                  "end": 2232,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2228,
                    "end": 2232,
                    "name": "TObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2233,
                  "end": 2234,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2233,
                    "end": 2234,
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
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2263,
      "end": 2433,
      "id": {
        "type": "Identifier",
        "start": 2278,
        "end": 2314,
        "name": "fGenericIndexedTypeForPromiseOfKProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 2355,
          "end": 2364,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2358,
            "end": 2364,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2360,
              "end": 2364,
              "typeName": {
                "type": "Identifier",
                "start": 2360,
                "end": 2364,
                "name": "TObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2366,
          "end": 2372,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2369,
            "end": 2372,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2371,
              "end": 2372,
              "typeName": {
                "type": "Identifier",
                "start": 2371,
                "end": 2372,
                "name": "K",
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
      "body": {
        "type": "BlockStatement",
        "start": 2392,
        "end": 2433,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2398,
            "end": 2431,
            "argument": {
              "type": "CallExpression",
              "start": 2405,
              "end": 2430,
              "callee": {
                "type": "MemberExpression",
                "start": 2405,
                "end": 2420,
                "object": {
                  "type": "Identifier",
                  "start": 2405,
                  "end": 2412,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2413,
                  "end": 2420,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 2421,
                  "end": 2429,
                  "object": {
                    "type": "Identifier",
                    "start": 2421,
                    "end": 2424,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2425,
                    "end": 2428,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2314,
        "end": 2354,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2315,
            "end": 2331,
            "name": {
              "type": "Identifier",
              "start": 2315,
              "end": 2319,
              "name": "TObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2328,
              "end": 2331,
              "typeName": {
                "type": "Identifier",
                "start": 2328,
                "end": 2331,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "start": 2333,
            "end": 2353,
            "name": {
              "type": "Identifier",
              "start": 2333,
              "end": 2334,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2343,
              "end": 2353,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2349,
                "end": 2353,
                "typeName": {
                  "type": "Identifier",
                  "start": 2349,
                  "end": 2353,
                  "name": "TObj",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2373,
        "end": 2391,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2375,
          "end": 2391,
          "typeName": {
            "type": "Identifier",
            "start": 2375,
            "end": 2382,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2382,
            "end": 2391,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 2383,
                "end": 2390,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2383,
                  "end": 2387,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2383,
                    "end": 2387,
                    "name": "TObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2388,
                  "end": 2389,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2388,
                    "end": 2389,
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
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 2435,
      "end": 2622,
      "id": {
        "type": "Identifier",
        "start": 2450,
        "end": 2494,
        "name": "fGenericIndexedTypeForExplicitPromiseOfKProp",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": true,
      "params": [
        {
          "type": "Identifier",
          "start": 2535,
          "end": 2544,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2538,
            "end": 2544,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2540,
              "end": 2544,
              "typeName": {
                "type": "Identifier",
                "start": 2540,
                "end": 2544,
                "name": "TObj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 2546,
          "end": 2552,
          "name": "key",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2549,
            "end": 2552,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2551,
              "end": 2552,
              "typeName": {
                "type": "Identifier",
                "start": 2551,
                "end": 2552,
                "name": "K",
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
      "body": {
        "type": "BlockStatement",
        "start": 2572,
        "end": 2622,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2578,
            "end": 2620,
            "argument": {
              "type": "CallExpression",
              "start": 2585,
              "end": 2619,
              "callee": {
                "type": "MemberExpression",
                "start": 2585,
                "end": 2600,
                "object": {
                  "type": "Identifier",
                  "start": 2585,
                  "end": 2592,
                  "name": "Promise",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 2593,
                  "end": 2600,
                  "name": "resolve",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "MemberExpression",
                  "start": 2610,
                  "end": 2618,
                  "object": {
                    "type": "Identifier",
                    "start": 2610,
                    "end": 2613,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 2614,
                    "end": 2617,
                    "name": "key",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": true,
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2600,
                "end": 2609,
                "params": [
                  {
                    "type": "TSIndexedAccessType",
                    "start": 2601,
                    "end": 2608,
                    "objectType": {
                      "type": "TSTypeReference",
                      "start": 2601,
                      "end": 2605,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2601,
                        "end": 2605,
                        "name": "TObj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    },
                    "indexType": {
                      "type": "TSTypeReference",
                      "start": 2606,
                      "end": 2607,
                      "typeName": {
                        "type": "Identifier",
                        "start": 2606,
                        "end": 2607,
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
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2494,
        "end": 2534,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2495,
            "end": 2511,
            "name": {
              "type": "Identifier",
              "start": 2495,
              "end": 2499,
              "name": "TObj",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeReference",
              "start": 2508,
              "end": 2511,
              "typeName": {
                "type": "Identifier",
                "start": 2508,
                "end": 2511,
                "name": "Obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
            "start": 2513,
            "end": 2533,
            "name": {
              "type": "Identifier",
              "start": 2513,
              "end": 2514,
              "name": "K",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": {
              "type": "TSTypeOperator",
              "start": 2523,
              "end": 2533,
              "operator": "keyof",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2529,
                "end": 2533,
                "typeName": {
                  "type": "Identifier",
                  "start": 2529,
                  "end": 2533,
                  "name": "TObj",
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
          }
        ]
      },
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2553,
        "end": 2571,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 2555,
          "end": 2571,
          "typeName": {
            "type": "Identifier",
            "start": 2555,
            "end": 2562,
            "name": "Promise",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 2562,
            "end": 2571,
            "params": [
              {
                "type": "TSIndexedAccessType",
                "start": 2563,
                "end": 2570,
                "objectType": {
                  "type": "TSTypeReference",
                  "start": 2563,
                  "end": 2567,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2563,
                    "end": 2567,
                    "name": "TObj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                },
                "indexType": {
                  "type": "TSTypeReference",
                  "start": 2568,
                  "end": 2569,
                  "typeName": {
                    "type": "Identifier",
                    "start": 2568,
                    "end": 2569,
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
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
