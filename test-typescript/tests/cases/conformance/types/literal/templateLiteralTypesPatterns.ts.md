__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 5482,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 41,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 25,
        "decorators": [],
        "name": "RequiresLeadingSlash",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 28,
        "end": 40,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 28,
            "end": 32,
            "tail": false,
            "value": {
              "cooked": "/",
              "raw": "/"
            }
          },
          {
            "type": "TemplateElement",
            "start": 38,
            "end": 40,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 32,
            "end": 38
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 88,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 87,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 78,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 78,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 58,
                "end": 78,
                "typeName": {
                  "type": "Identifier",
                  "start": 58,
                  "end": 78,
                  "decorators": [],
                  "name": "RequiresLeadingSlash",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 81,
            "end": 87,
            "raw": "\"/bin\"",
            "value": "/bin"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 100,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 129,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 107,
              "end": 129,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 109,
                "end": 129,
                "typeName": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 129,
                  "decorators": [],
                  "name": "RequiresLeadingSlash",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 132,
            "end": 142,
            "raw": "\"no slash\"",
            "value": "no slash"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 145,
      "end": 211,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 150,
        "end": 158,
        "decorators": [],
        "name": "Protocol",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 197,
        "end": 210,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 197,
            "end": 200,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 201,
            "end": 207,
            "tail": false,
            "value": {
              "cooked": "://",
              "raw": "://"
            }
          },
          {
            "type": "TemplateElement",
            "start": 208,
            "end": 210,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 200,
            "end": 201,
            "typeName": {
              "type": "Identifier",
              "start": 200,
              "end": 201,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 207,
            "end": 208,
            "typeName": {
              "type": "Identifier",
              "start": 207,
              "end": 208,
              "decorators": [],
              "name": "U",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 158,
        "end": 194,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 159,
            "end": 175,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 169,
              "end": 175
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 159,
              "end": 160,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 177,
            "end": 193,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 187,
              "end": 193
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 177,
              "end": 178,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 212,
      "end": 287,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 284,
        "end": 287,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 221,
        "end": 229,
        "decorators": [],
        "name": "download",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 230,
          "end": 282,
          "decorators": [],
          "name": "hostSpec",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 238,
            "end": 282,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 240,
              "end": 282,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 248,
                "end": 282,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 249,
                    "end": 273,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 249,
                        "end": 255,
                        "literal": {
                          "type": "Literal",
                          "start": 249,
                          "end": 255,
                          "raw": "\"http\"",
                          "value": "http"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 258,
                        "end": 265,
                        "literal": {
                          "type": "Literal",
                          "start": 258,
                          "end": 265,
                          "raw": "\"https\"",
                          "value": "https"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 268,
                        "end": 273,
                        "literal": {
                          "type": "Literal",
                          "start": 268,
                          "end": 273,
                          "raw": "\"ftp\"",
                          "value": "ftp"
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 275,
                    "end": 281
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 240,
                "end": 248,
                "decorators": [],
                "name": "Protocol",
                "optional": false
              }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 308,
      "end": 348,
      "expression": {
        "type": "CallExpression",
        "start": 308,
        "end": 347,
        "arguments": [
          {
            "type": "Literal",
            "start": 317,
            "end": 346,
            "raw": "\"http://example.com/protocol\"",
            "value": "http://example.com/protocol"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 308,
          "end": 316,
          "decorators": [],
          "name": "download",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 379,
      "end": 414,
      "expression": {
        "type": "CallExpression",
        "start": 379,
        "end": 413,
        "arguments": [
          {
            "type": "Literal",
            "start": 388,
            "end": 412,
            "raw": "\"example.com/noprotocol\"",
            "value": "example.com/noprotocol"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 379,
          "end": 387,
          "decorators": [],
          "name": "download",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 451,
      "end": 493,
      "expression": {
        "type": "CallExpression",
        "start": 451,
        "end": 492,
        "arguments": [
          {
            "type": "Literal",
            "start": 460,
            "end": 491,
            "raw": "\"gopher://example.com/protocol\"",
            "value": "gopher://example.com/protocol"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 451,
          "end": 459,
          "decorators": [],
          "name": "download",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 495,
      "end": 562,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 501,
          "end": 561,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 501,
            "end": 554,
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 502,
              "end": 554,
              "typeAnnotation": {
                "type": "TSConditionalType",
                "start": 504,
                "end": 554,
                "checkType": {
                  "type": "TSTypeReference",
                  "start": 504,
                  "end": 524,
                  "typeName": {
                    "type": "Identifier",
                    "start": 504,
                    "end": 524,
                    "decorators": [],
                    "name": "RequiresLeadingSlash",
                    "optional": false
                  }
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 533,
                  "end": 539
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "start": 549,
                  "end": 554,
                  "literal": {
                    "type": "Literal",
                    "start": 549,
                    "end": 554,
                    "raw": "false",
                    "value": false
                  }
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "start": 542,
                  "end": 546,
                  "literal": {
                    "type": "Literal",
                    "start": 542,
                    "end": 546,
                    "raw": "true",
                    "value": true
                  }
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 557,
            "end": 561,
            "raw": "true",
            "value": true
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSDeclareFunction",
      "start": 564,
      "end": 610,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 581,
        "end": 586,
        "decorators": [],
        "name": "bools",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 587,
          "end": 602,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 588,
            "end": 602,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 590,
              "end": 602,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 590,
                  "end": 593,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 600,
                  "end": 602,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ],
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 593,
                  "end": 600
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 603,
        "end": 609,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 605,
          "end": 609
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 617,
      "end": 631,
      "expression": {
        "type": "CallExpression",
        "start": 617,
        "end": 630,
        "arguments": [
          {
            "type": "Literal",
            "start": 623,
            "end": 629,
            "raw": "\"true\"",
            "value": "true"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 617,
          "end": 622,
          "decorators": [],
          "name": "bools",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 632,
      "end": 647,
      "expression": {
        "type": "CallExpression",
        "start": 632,
        "end": 646,
        "arguments": [
          {
            "type": "Literal",
            "start": 638,
            "end": 645,
            "raw": "\"false\"",
            "value": "false"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 632,
          "end": 637,
          "decorators": [],
          "name": "bools",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 674,
      "expression": {
        "type": "CallExpression",
        "start": 659,
        "end": 673,
        "arguments": [
          {
            "type": "Literal",
            "start": 665,
            "end": 672,
            "raw": "\"other\"",
            "value": "other"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 659,
          "end": 664,
          "decorators": [],
          "name": "bools",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 676,
      "end": 730,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 681,
        "end": 684,
        "decorators": [],
        "name": "Pat",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 724,
        "end": 730,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 724,
            "end": 727,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 728,
            "end": 730,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 727,
            "end": 728,
            "typeName": {
              "type": "Identifier",
              "start": 727,
              "end": 728,
              "decorators": [],
              "name": "T",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 684,
        "end": 721,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 685,
            "end": 720,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 695,
              "end": 720,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 695,
                  "end": 701
                },
                {
                  "type": "TSNullKeyword",
                  "start": 704,
                  "end": 708
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 711,
                  "end": 720
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 685,
              "end": 686,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 731,
      "end": 790,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 748,
        "end": 757,
        "decorators": [],
        "name": "nullishes",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 758,
          "end": 782,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 759,
            "end": 782,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 761,
              "end": 782,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 764,
                "end": 782,
                "params": [
                  {
                    "type": "TSUnionType",
                    "start": 765,
                    "end": 781,
                    "types": [
                      {
                        "type": "TSNullKeyword",
                        "start": 765,
                        "end": 769
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 772,
                        "end": 781
                      }
                    ]
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 761,
                "end": 764,
                "decorators": [],
                "name": "Pat",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 783,
        "end": 789,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 785,
          "end": 789
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 797,
      "end": 815,
      "expression": {
        "type": "CallExpression",
        "start": 797,
        "end": 814,
        "arguments": [
          {
            "type": "Literal",
            "start": 807,
            "end": 813,
            "raw": "\"null\"",
            "value": "null"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 797,
          "end": 806,
          "decorators": [],
          "name": "nullishes",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 816,
      "end": 839,
      "expression": {
        "type": "CallExpression",
        "start": 816,
        "end": 838,
        "arguments": [
          {
            "type": "Literal",
            "start": 826,
            "end": 837,
            "raw": "\"undefined\"",
            "value": "undefined"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 816,
          "end": 825,
          "decorators": [],
          "name": "nullishes",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 851,
      "end": 866,
      "expression": {
        "type": "CallExpression",
        "start": 851,
        "end": 865,
        "arguments": [
          {
            "type": "Literal",
            "start": 861,
            "end": 864,
            "raw": "\"0\"",
            "value": "0"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 851,
          "end": 860,
          "decorators": [],
          "name": "nullishes",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 867,
      "end": 886,
      "expression": {
        "type": "CallExpression",
        "start": 867,
        "end": 885,
        "arguments": [
          {
            "type": "Literal",
            "start": 877,
            "end": 884,
            "raw": "\"false\"",
            "value": "false"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 867,
          "end": 876,
          "decorators": [],
          "name": "nullishes",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 887,
      "end": 904,
      "expression": {
        "type": "CallExpression",
        "start": 887,
        "end": 903,
        "arguments": [
          {
            "type": "Literal",
            "start": 897,
            "end": 902,
            "raw": "\"NaN\"",
            "value": "NaN"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 887,
          "end": 896,
          "decorators": [],
          "name": "nullishes",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 905,
      "end": 919,
      "expression": {
        "type": "CallExpression",
        "start": 905,
        "end": 918,
        "arguments": [
          {
            "type": "Literal",
            "start": 915,
            "end": 917,
            "raw": "\"\"",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 905,
          "end": 914,
          "decorators": [],
          "name": "nullishes",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 920,
      "end": 939,
      "expression": {
        "type": "CallExpression",
        "start": 920,
        "end": 938,
        "arguments": [
          {
            "type": "Literal",
            "start": 930,
            "end": 937,
            "raw": "\"other\"",
            "value": "other"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 920,
          "end": 929,
          "decorators": [],
          "name": "nullishes",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 941,
      "end": 988,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 958,
        "end": 965,
        "decorators": [],
        "name": "numbers",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 966,
          "end": 980,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 967,
            "end": 980,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 969,
              "end": 980,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 969,
                  "end": 972,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 978,
                  "end": 980,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 972,
                  "end": 978
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 981,
        "end": 987,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 983,
          "end": 987
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1018,
      "end": 1031,
      "expression": {
        "type": "CallExpression",
        "start": 1018,
        "end": 1030,
        "arguments": [
          {
            "type": "Literal",
            "start": 1026,
            "end": 1029,
            "raw": "\"1\"",
            "value": "1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1018,
          "end": 1025,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1032,
      "end": 1046,
      "expression": {
        "type": "CallExpression",
        "start": 1032,
        "end": 1045,
        "arguments": [
          {
            "type": "Literal",
            "start": 1040,
            "end": 1044,
            "raw": "\"-1\"",
            "value": "-1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1032,
          "end": 1039,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1047,
      "end": 1060,
      "expression": {
        "type": "CallExpression",
        "start": 1047,
        "end": 1059,
        "arguments": [
          {
            "type": "Literal",
            "start": 1055,
            "end": 1058,
            "raw": "\"0\"",
            "value": "0"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1047,
          "end": 1054,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1061,
      "end": 1076,
      "expression": {
        "type": "CallExpression",
        "start": 1061,
        "end": 1075,
        "arguments": [
          {
            "type": "Literal",
            "start": 1069,
            "end": 1074,
            "raw": "\"0b1\"",
            "value": "0b1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1061,
          "end": 1068,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1077,
      "end": 1092,
      "expression": {
        "type": "CallExpression",
        "start": 1077,
        "end": 1091,
        "arguments": [
          {
            "type": "Literal",
            "start": 1085,
            "end": 1090,
            "raw": "\"0x1\"",
            "value": "0x1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1077,
          "end": 1084,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1093,
      "end": 1108,
      "expression": {
        "type": "CallExpression",
        "start": 1093,
        "end": 1107,
        "arguments": [
          {
            "type": "Literal",
            "start": 1101,
            "end": 1106,
            "raw": "\"0o1\"",
            "value": "0o1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1093,
          "end": 1100,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1109,
      "end": 1125,
      "expression": {
        "type": "CallExpression",
        "start": 1109,
        "end": 1124,
        "arguments": [
          {
            "type": "Literal",
            "start": 1117,
            "end": 1123,
            "raw": "\"1e21\"",
            "value": "1e21"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1109,
          "end": 1116,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1126,
      "end": 1142,
      "expression": {
        "type": "CallExpression",
        "start": 1126,
        "end": 1141,
        "arguments": [
          {
            "type": "Literal",
            "start": 1134,
            "end": 1140,
            "raw": "\"1E21\"",
            "value": "1E21"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1126,
          "end": 1133,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1143,
      "end": 1160,
      "expression": {
        "type": "CallExpression",
        "start": 1143,
        "end": 1159,
        "arguments": [
          {
            "type": "Literal",
            "start": 1151,
            "end": 1158,
            "raw": "\"1e-21\"",
            "value": "1e-21"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1143,
          "end": 1150,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1161,
      "end": 1178,
      "expression": {
        "type": "CallExpression",
        "start": 1161,
        "end": 1177,
        "arguments": [
          {
            "type": "Literal",
            "start": 1169,
            "end": 1176,
            "raw": "\"1E-21\"",
            "value": "1E-21"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1161,
          "end": 1168,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1179,
      "end": 1194,
      "expression": {
        "type": "CallExpression",
        "start": 1179,
        "end": 1193,
        "arguments": [
          {
            "type": "Literal",
            "start": 1187,
            "end": 1192,
            "raw": "\"1.1\"",
            "value": "1.1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1179,
          "end": 1186,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1195,
      "end": 1211,
      "expression": {
        "type": "CallExpression",
        "start": 1195,
        "end": 1210,
        "arguments": [
          {
            "type": "Literal",
            "start": 1203,
            "end": 1209,
            "raw": "\"-1.1\"",
            "value": "-1.1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1195,
          "end": 1202,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1212,
      "end": 1232,
      "expression": {
        "type": "CallExpression",
        "start": 1212,
        "end": 1231,
        "arguments": [
          {
            "type": "Literal",
            "start": 1220,
            "end": 1230,
            "raw": "\"-1.1e-10\"",
            "value": "-1.1e-10"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1212,
          "end": 1219,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1233,
      "end": 1253,
      "expression": {
        "type": "CallExpression",
        "start": 1233,
        "end": 1252,
        "arguments": [
          {
            "type": "Literal",
            "start": 1241,
            "end": 1251,
            "raw": "\"-1.1E-10\"",
            "value": "-1.1E-10"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1233,
          "end": 1240,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1254,
      "end": 1273,
      "expression": {
        "type": "CallExpression",
        "start": 1254,
        "end": 1272,
        "arguments": [
          {
            "type": "Literal",
            "start": 1262,
            "end": 1271,
            "raw": "\"1.1e-10\"",
            "value": "1.1e-10"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1254,
          "end": 1261,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1335,
      "end": 1348,
      "expression": {
        "type": "CallExpression",
        "start": 1335,
        "end": 1347,
        "arguments": [
          {
            "type": "Literal",
            "start": 1343,
            "end": 1346,
            "raw": "\"?\"",
            "value": "?"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1335,
          "end": 1342,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1349,
      "end": 1364,
      "expression": {
        "type": "CallExpression",
        "start": 1349,
        "end": 1363,
        "arguments": [
          {
            "type": "Literal",
            "start": 1357,
            "end": 1362,
            "raw": "\"NaN\"",
            "value": "NaN"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1349,
          "end": 1356,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1365,
      "end": 1385,
      "expression": {
        "type": "CallExpression",
        "start": 1365,
        "end": 1384,
        "arguments": [
          {
            "type": "Literal",
            "start": 1373,
            "end": 1383,
            "raw": "\"Infinity\"",
            "value": "Infinity"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1365,
          "end": 1372,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1386,
      "end": 1407,
      "expression": {
        "type": "CallExpression",
        "start": 1386,
        "end": 1406,
        "arguments": [
          {
            "type": "Literal",
            "start": 1394,
            "end": 1405,
            "raw": "\"+Infinity\"",
            "value": "+Infinity"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1386,
          "end": 1393,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1408,
      "end": 1429,
      "expression": {
        "type": "CallExpression",
        "start": 1408,
        "end": 1428,
        "arguments": [
          {
            "type": "Literal",
            "start": 1416,
            "end": 1427,
            "raw": "\"-Infinity\"",
            "value": "-Infinity"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1408,
          "end": 1415,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1430,
      "end": 1447,
      "expression": {
        "type": "CallExpression",
        "start": 1430,
        "end": 1446,
        "arguments": [
          {
            "type": "Literal",
            "start": 1438,
            "end": 1445,
            "raw": "\"1_000\"",
            "value": "1_000"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1430,
          "end": 1437,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1518,
      "end": 1533,
      "expression": {
        "type": "CallExpression",
        "start": 1518,
        "end": 1532,
        "arguments": [
          {
            "type": "Literal",
            "start": 1526,
            "end": 1531,
            "raw": "\"a10\"",
            "value": "a10"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1518,
          "end": 1525,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1534,
      "end": 1549,
      "expression": {
        "type": "CallExpression",
        "start": 1534,
        "end": 1548,
        "arguments": [
          {
            "type": "Literal",
            "start": 1542,
            "end": 1547,
            "raw": "\"10a\"",
            "value": "10a"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1534,
          "end": 1541,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1601,
      "end": 1616,
      "expression": {
        "type": "CallExpression",
        "start": 1601,
        "end": 1615,
        "arguments": [
          {
            "type": "Literal",
            "start": 1609,
            "end": 1614,
            "raw": "\"- 1\"",
            "value": "- 1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1601,
          "end": 1608,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1617,
      "end": 1635,
      "expression": {
        "type": "CallExpression",
        "start": 1617,
        "end": 1634,
        "arguments": [
          {
            "type": "Literal",
            "start": 1625,
            "end": 1633,
            "raw": "\"-/**/1\"",
            "value": "-/**/1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1617,
          "end": 1624,
          "decorators": [],
          "name": "numbers",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 1637,
      "end": 1684,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 1654,
        "end": 1661,
        "decorators": [],
        "name": "bigints",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1662,
          "end": 1676,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1663,
            "end": 1676,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 1665,
              "end": 1676,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 1665,
                  "end": 1668,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 1674,
                  "end": 1676,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ],
              "types": [
                {
                  "type": "TSBigIntKeyword",
                  "start": 1668,
                  "end": 1674
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1677,
        "end": 1683,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1679,
          "end": 1683
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1714,
      "end": 1727,
      "expression": {
        "type": "CallExpression",
        "start": 1714,
        "end": 1726,
        "arguments": [
          {
            "type": "Literal",
            "start": 1722,
            "end": 1725,
            "raw": "\"1\"",
            "value": "1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1714,
          "end": 1721,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1728,
      "end": 1742,
      "expression": {
        "type": "CallExpression",
        "start": 1728,
        "end": 1741,
        "arguments": [
          {
            "type": "Literal",
            "start": 1736,
            "end": 1740,
            "raw": "\"-1\"",
            "value": "-1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1728,
          "end": 1735,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1743,
      "end": 1756,
      "expression": {
        "type": "CallExpression",
        "start": 1743,
        "end": 1755,
        "arguments": [
          {
            "type": "Literal",
            "start": 1751,
            "end": 1754,
            "raw": "\"0\"",
            "value": "0"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1743,
          "end": 1750,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1757,
      "end": 1772,
      "expression": {
        "type": "CallExpression",
        "start": 1757,
        "end": 1771,
        "arguments": [
          {
            "type": "Literal",
            "start": 1765,
            "end": 1770,
            "raw": "\"0b1\"",
            "value": "0b1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1757,
          "end": 1764,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1773,
      "end": 1788,
      "expression": {
        "type": "CallExpression",
        "start": 1773,
        "end": 1787,
        "arguments": [
          {
            "type": "Literal",
            "start": 1781,
            "end": 1786,
            "raw": "\"0x1\"",
            "value": "0x1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1773,
          "end": 1780,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1789,
      "end": 1804,
      "expression": {
        "type": "CallExpression",
        "start": 1789,
        "end": 1803,
        "arguments": [
          {
            "type": "Literal",
            "start": 1797,
            "end": 1802,
            "raw": "\"0o1\"",
            "value": "0o1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1789,
          "end": 1796,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1901,
      "end": 1917,
      "expression": {
        "type": "CallExpression",
        "start": 1901,
        "end": 1916,
        "arguments": [
          {
            "type": "Literal",
            "start": 1909,
            "end": 1915,
            "raw": "\"1e21\"",
            "value": "1e21"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1901,
          "end": 1908,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1918,
      "end": 1934,
      "expression": {
        "type": "CallExpression",
        "start": 1918,
        "end": 1933,
        "arguments": [
          {
            "type": "Literal",
            "start": 1926,
            "end": 1932,
            "raw": "\"1E21\"",
            "value": "1E21"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1918,
          "end": 1925,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1935,
      "end": 1952,
      "expression": {
        "type": "CallExpression",
        "start": 1935,
        "end": 1951,
        "arguments": [
          {
            "type": "Literal",
            "start": 1943,
            "end": 1950,
            "raw": "\"1e-21\"",
            "value": "1e-21"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1935,
          "end": 1942,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1953,
      "end": 1970,
      "expression": {
        "type": "CallExpression",
        "start": 1953,
        "end": 1969,
        "arguments": [
          {
            "type": "Literal",
            "start": 1961,
            "end": 1968,
            "raw": "\"1E-21\"",
            "value": "1E-21"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 1953,
          "end": 1960,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2026,
      "end": 2041,
      "expression": {
        "type": "CallExpression",
        "start": 2026,
        "end": 2040,
        "arguments": [
          {
            "type": "Literal",
            "start": 2034,
            "end": 2039,
            "raw": "\"1.0\"",
            "value": "1.0"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2026,
          "end": 2033,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2042,
      "end": 2057,
      "expression": {
        "type": "CallExpression",
        "start": 2042,
        "end": 2056,
        "arguments": [
          {
            "type": "Literal",
            "start": 2050,
            "end": 2055,
            "raw": "\"1.1\"",
            "value": "1.1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2042,
          "end": 2049,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2058,
      "end": 2074,
      "expression": {
        "type": "CallExpression",
        "start": 2058,
        "end": 2073,
        "arguments": [
          {
            "type": "Literal",
            "start": 2066,
            "end": 2072,
            "raw": "\"-1.1\"",
            "value": "-1.1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2058,
          "end": 2065,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2075,
      "end": 2095,
      "expression": {
        "type": "CallExpression",
        "start": 2075,
        "end": 2094,
        "arguments": [
          {
            "type": "Literal",
            "start": 2083,
            "end": 2093,
            "raw": "\"-1.1e-10\"",
            "value": "-1.1e-10"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2075,
          "end": 2082,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2096,
      "end": 2116,
      "expression": {
        "type": "CallExpression",
        "start": 2096,
        "end": 2115,
        "arguments": [
          {
            "type": "Literal",
            "start": 2104,
            "end": 2114,
            "raw": "\"-1.1E-10\"",
            "value": "-1.1E-10"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2096,
          "end": 2103,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2117,
      "end": 2136,
      "expression": {
        "type": "CallExpression",
        "start": 2117,
        "end": 2135,
        "arguments": [
          {
            "type": "Literal",
            "start": 2125,
            "end": 2134,
            "raw": "\"1.1e-10\"",
            "value": "1.1e-10"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2117,
          "end": 2124,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2198,
      "end": 2211,
      "expression": {
        "type": "CallExpression",
        "start": 2198,
        "end": 2210,
        "arguments": [
          {
            "type": "Literal",
            "start": 2206,
            "end": 2209,
            "raw": "\"?\"",
            "value": "?"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2198,
          "end": 2205,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2212,
      "end": 2227,
      "expression": {
        "type": "CallExpression",
        "start": 2212,
        "end": 2226,
        "arguments": [
          {
            "type": "Literal",
            "start": 2220,
            "end": 2225,
            "raw": "\"NaN\"",
            "value": "NaN"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2212,
          "end": 2219,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2228,
      "end": 2248,
      "expression": {
        "type": "CallExpression",
        "start": 2228,
        "end": 2247,
        "arguments": [
          {
            "type": "Literal",
            "start": 2236,
            "end": 2246,
            "raw": "\"Infinity\"",
            "value": "Infinity"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2228,
          "end": 2235,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2249,
      "end": 2270,
      "expression": {
        "type": "CallExpression",
        "start": 2249,
        "end": 2269,
        "arguments": [
          {
            "type": "Literal",
            "start": 2257,
            "end": 2268,
            "raw": "\"+Infinity\"",
            "value": "+Infinity"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2249,
          "end": 2256,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2271,
      "end": 2292,
      "expression": {
        "type": "CallExpression",
        "start": 2271,
        "end": 2291,
        "arguments": [
          {
            "type": "Literal",
            "start": 2279,
            "end": 2290,
            "raw": "\"-Infinity\"",
            "value": "-Infinity"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2271,
          "end": 2278,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2293,
      "end": 2310,
      "expression": {
        "type": "CallExpression",
        "start": 2293,
        "end": 2309,
        "arguments": [
          {
            "type": "Literal",
            "start": 2301,
            "end": 2308,
            "raw": "\"1_000\"",
            "value": "1_000"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2293,
          "end": 2300,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2362,
      "end": 2377,
      "expression": {
        "type": "CallExpression",
        "start": 2362,
        "end": 2376,
        "arguments": [
          {
            "type": "Literal",
            "start": 2370,
            "end": 2375,
            "raw": "\"- 1\"",
            "value": "- 1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2362,
          "end": 2369,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2378,
      "end": 2396,
      "expression": {
        "type": "CallExpression",
        "start": 2378,
        "end": 2395,
        "arguments": [
          {
            "type": "Literal",
            "start": 2386,
            "end": 2394,
            "raw": "\"-/**/1\"",
            "value": "-/**/1"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2378,
          "end": 2385,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2467,
      "end": 2483,
      "expression": {
        "type": "CallExpression",
        "start": 2467,
        "end": 2482,
        "arguments": [
          {
            "type": "Literal",
            "start": 2475,
            "end": 2481,
            "raw": "\"a10n\"",
            "value": "a10n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2467,
          "end": 2474,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2484,
      "end": 2500,
      "expression": {
        "type": "CallExpression",
        "start": 2484,
        "end": 2499,
        "arguments": [
          {
            "type": "Literal",
            "start": 2492,
            "end": 2498,
            "raw": "\"10an\"",
            "value": "10an"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2484,
          "end": 2491,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2646,
      "end": 2660,
      "expression": {
        "type": "CallExpression",
        "start": 2646,
        "end": 2659,
        "arguments": [
          {
            "type": "Literal",
            "start": 2654,
            "end": 2658,
            "raw": "\"1n\"",
            "value": "1n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2646,
          "end": 2653,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2661,
      "end": 2676,
      "expression": {
        "type": "CallExpression",
        "start": 2661,
        "end": 2675,
        "arguments": [
          {
            "type": "Literal",
            "start": 2669,
            "end": 2674,
            "raw": "\"-1n\"",
            "value": "-1n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2661,
          "end": 2668,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2677,
      "end": 2691,
      "expression": {
        "type": "CallExpression",
        "start": 2677,
        "end": 2690,
        "arguments": [
          {
            "type": "Literal",
            "start": 2685,
            "end": 2689,
            "raw": "\"0n\"",
            "value": "0n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2677,
          "end": 2684,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2692,
      "end": 2708,
      "expression": {
        "type": "CallExpression",
        "start": 2692,
        "end": 2707,
        "arguments": [
          {
            "type": "Literal",
            "start": 2700,
            "end": 2706,
            "raw": "\"0b1n\"",
            "value": "0b1n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2692,
          "end": 2699,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2709,
      "end": 2725,
      "expression": {
        "type": "CallExpression",
        "start": 2709,
        "end": 2724,
        "arguments": [
          {
            "type": "Literal",
            "start": 2717,
            "end": 2723,
            "raw": "\"0x1n\"",
            "value": "0x1n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2709,
          "end": 2716,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2726,
      "end": 2742,
      "expression": {
        "type": "CallExpression",
        "start": 2726,
        "end": 2741,
        "arguments": [
          {
            "type": "Literal",
            "start": 2734,
            "end": 2740,
            "raw": "\"0o1n\"",
            "value": "0o1n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2726,
          "end": 2733,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2743,
      "end": 2760,
      "expression": {
        "type": "CallExpression",
        "start": 2743,
        "end": 2759,
        "arguments": [
          {
            "type": "Literal",
            "start": 2751,
            "end": 2758,
            "raw": "\"1e21n\"",
            "value": "1e21n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2743,
          "end": 2750,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2761,
      "end": 2778,
      "expression": {
        "type": "CallExpression",
        "start": 2761,
        "end": 2777,
        "arguments": [
          {
            "type": "Literal",
            "start": 2769,
            "end": 2776,
            "raw": "\"1E21n\"",
            "value": "1E21n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2761,
          "end": 2768,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2779,
      "end": 2797,
      "expression": {
        "type": "CallExpression",
        "start": 2779,
        "end": 2796,
        "arguments": [
          {
            "type": "Literal",
            "start": 2787,
            "end": 2795,
            "raw": "\"1e-21n\"",
            "value": "1e-21n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2779,
          "end": 2786,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2798,
      "end": 2816,
      "expression": {
        "type": "CallExpression",
        "start": 2798,
        "end": 2815,
        "arguments": [
          {
            "type": "Literal",
            "start": 2806,
            "end": 2814,
            "raw": "\"1E-21n\"",
            "value": "1E-21n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2798,
          "end": 2805,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2817,
      "end": 2833,
      "expression": {
        "type": "CallExpression",
        "start": 2817,
        "end": 2832,
        "arguments": [
          {
            "type": "Literal",
            "start": 2825,
            "end": 2831,
            "raw": "\"1.1n\"",
            "value": "1.1n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2817,
          "end": 2824,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2834,
      "end": 2851,
      "expression": {
        "type": "CallExpression",
        "start": 2834,
        "end": 2850,
        "arguments": [
          {
            "type": "Literal",
            "start": 2842,
            "end": 2849,
            "raw": "\"-1.1n\"",
            "value": "-1.1n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2834,
          "end": 2841,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2852,
      "end": 2873,
      "expression": {
        "type": "CallExpression",
        "start": 2852,
        "end": 2872,
        "arguments": [
          {
            "type": "Literal",
            "start": 2860,
            "end": 2871,
            "raw": "\"-1.1e-10n\"",
            "value": "-1.1e-10n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2852,
          "end": 2859,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2874,
      "end": 2895,
      "expression": {
        "type": "CallExpression",
        "start": 2874,
        "end": 2894,
        "arguments": [
          {
            "type": "Literal",
            "start": 2882,
            "end": 2893,
            "raw": "\"-1.1E-10n\"",
            "value": "-1.1E-10n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2874,
          "end": 2881,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 2896,
      "end": 2916,
      "expression": {
        "type": "CallExpression",
        "start": 2896,
        "end": 2915,
        "arguments": [
          {
            "type": "Literal",
            "start": 2904,
            "end": 2914,
            "raw": "\"1.1e-10n\"",
            "value": "1.1e-10n"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 2896,
          "end": 2903,
          "decorators": [],
          "name": "bigints",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2918,
      "end": 2943,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2923,
        "end": 2927,
        "decorators": [],
        "name": "AStr",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 2930,
        "end": 2942,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 2930,
            "end": 2934,
            "tail": false,
            "value": {
              "cooked": "a",
              "raw": "a"
            }
          },
          {
            "type": "TemplateElement",
            "start": 2940,
            "end": 2942,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2934,
            "end": 2940
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2944,
      "end": 2969,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2949,
        "end": 2953,
        "decorators": [],
        "name": "ANum",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 2956,
        "end": 2968,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 2956,
            "end": 2960,
            "tail": false,
            "value": {
              "cooked": "a",
              "raw": "a"
            }
          },
          {
            "type": "TemplateElement",
            "start": 2966,
            "end": 2968,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 2960,
            "end": 2966
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 2970,
      "end": 2992,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 2975,
        "end": 2979,
        "decorators": [],
        "name": "AAny",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 2982,
        "end": 2991,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 2982,
            "end": 2986,
            "tail": false,
            "value": {
              "cooked": "a",
              "raw": "a"
            }
          },
          {
            "type": "TemplateElement",
            "start": 2989,
            "end": 2991,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSAnyKeyword",
            "start": 2986,
            "end": 2989
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 2994,
      "end": 3016,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3006,
          "end": 3015,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3006,
            "end": 3015,
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3009,
              "end": 3015,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3011,
                "end": 3015,
                "typeName": {
                  "type": "Identifier",
                  "start": 3011,
                  "end": 3015,
                  "decorators": [],
                  "name": "AStr",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3017,
      "end": 3039,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3029,
          "end": 3038,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3029,
            "end": 3038,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3032,
              "end": 3038,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3034,
                "end": 3038,
                "typeName": {
                  "type": "Identifier",
                  "start": 3034,
                  "end": 3038,
                  "decorators": [],
                  "name": "ANum",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3040,
      "end": 3065,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3052,
          "end": 3064,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3052,
            "end": 3064,
            "decorators": [],
            "name": "anyish",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3058,
              "end": 3064,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3060,
                "end": 3064,
                "typeName": {
                  "type": "Identifier",
                  "start": 3060,
                  "end": 3064,
                  "decorators": [],
                  "name": "AAny",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 3077,
      "end": 3087,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3077,
        "end": 3086,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3077,
          "end": 3080,
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3083,
          "end": 3086,
          "decorators": [],
          "name": "str",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3088,
      "end": 3102,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3088,
        "end": 3102,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3088,
          "end": 3094,
          "decorators": [],
          "name": "anyish",
          "optional": false
        },
        "right": {
          "type": "TemplateLiteral",
          "start": 3097,
          "end": 3102,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 3097,
              "end": 3102,
              "tail": true,
              "value": {
                "cooked": "bno",
                "raw": "bno"
              }
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3110,
      "end": 3120,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3110,
        "end": 3119,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3110,
          "end": 3113,
          "decorators": [],
          "name": "str",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3116,
          "end": 3119,
          "decorators": [],
          "name": "num",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3121,
      "end": 3134,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3121,
        "end": 3133,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3121,
          "end": 3127,
          "decorators": [],
          "name": "anyish",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3130,
          "end": 3133,
          "decorators": [],
          "name": "str",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3135,
      "end": 3148,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3135,
        "end": 3147,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3135,
          "end": 3138,
          "decorators": [],
          "name": "str",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3141,
          "end": 3147,
          "decorators": [],
          "name": "anyish",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3149,
      "end": 3162,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3149,
        "end": 3161,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3149,
          "end": 3155,
          "decorators": [],
          "name": "anyish",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3158,
          "end": 3161,
          "decorators": [],
          "name": "num",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3163,
      "end": 3176,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3163,
        "end": 3175,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3163,
          "end": 3166,
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 3169,
          "end": 3175,
          "decorators": [],
          "name": "anyish",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 3177,
      "end": 3191,
      "expression": {
        "type": "AssignmentExpression",
        "start": 3177,
        "end": 3191,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 3177,
          "end": 3183,
          "decorators": [],
          "name": "anyish",
          "optional": false
        },
        "right": {
          "type": "TemplateLiteral",
          "start": 3186,
          "end": 3191,
          "expressions": [],
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 3186,
              "end": 3191,
              "tail": true,
              "value": {
                "cooked": "aok",
                "raw": "aok"
              }
            }
          ]
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3253,
      "end": 3309,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3258,
        "end": 3262,
        "decorators": [],
        "name": "AGen",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "start": 3292,
        "end": 3308,
        "members": [
          {
            "type": "TSPropertySignature",
            "start": 3293,
            "end": 3307,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 3293,
              "end": 3298,
              "decorators": [],
              "name": "field",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3298,
              "end": 3307,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 3300,
                "end": 3307,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 3300,
                    "end": 3304,
                    "tail": false,
                    "value": {
                      "cooked": "a",
                      "raw": "a"
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 3305,
                    "end": 3307,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 3304,
                    "end": 3305,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3304,
                      "end": 3305,
                      "decorators": [],
                      "name": "T",
                      "optional": false
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 3262,
        "end": 3289,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 3263,
            "end": 3288,
            "const": false,
            "constraint": {
              "type": "TSUnionType",
              "start": 3273,
              "end": 3288,
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 3273,
                  "end": 3279
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 3282,
                  "end": 3288
                }
              ]
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 3263,
              "end": 3264,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3310,
      "end": 3371,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3316,
          "end": 3370,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3316,
            "end": 3341,
            "decorators": [],
            "name": "shouldWork1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3327,
              "end": 3341,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3329,
                "end": 3341,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3333,
                  "end": 3341,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3334,
                      "end": 3340
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3329,
                  "end": 3333,
                  "decorators": [],
                  "name": "AGen",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 3344,
            "end": 3370,
            "expression": {
              "type": "TSAsExpression",
              "start": 3344,
              "end": 3355,
              "expression": {
                "type": "Literal",
                "start": 3344,
                "end": 3348,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3352,
                "end": 3355
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3359,
              "end": 3370,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3363,
                "end": 3370,
                "params": [
                  {
                    "type": "TSLiteralType",
                    "start": 3364,
                    "end": 3369,
                    "literal": {
                      "type": "Literal",
                      "start": 3364,
                      "end": 3369,
                      "raw": "\"yes\"",
                      "value": "yes"
                    }
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3359,
                "end": 3363,
                "decorators": [],
                "name": "AGen",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3372,
      "end": 3434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3378,
          "end": 3433,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3378,
            "end": 3403,
            "decorators": [],
            "name": "shouldWork2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3389,
              "end": 3403,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3391,
                "end": 3403,
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 3395,
                  "end": 3403,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3396,
                      "end": 3402
                    }
                  ]
                },
                "typeName": {
                  "type": "Identifier",
                  "start": 3391,
                  "end": 3395,
                  "decorators": [],
                  "name": "AGen",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "TSAsExpression",
            "start": 3406,
            "end": 3433,
            "expression": {
              "type": "TSAsExpression",
              "start": 3406,
              "end": 3417,
              "expression": {
                "type": "Literal",
                "start": 3406,
                "end": 3410,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3414,
                "end": 3417
              }
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 3421,
              "end": 3433,
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 3425,
                "end": 3433,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 3426,
                    "end": 3432
                  }
                ]
              },
              "typeName": {
                "type": "Identifier",
                "start": 3421,
                "end": 3425,
                "decorators": [],
                "name": "AGen",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3475,
      "end": 3496,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3480,
        "end": 3481,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 3484,
        "end": 3495,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 3484,
            "end": 3487,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 3493,
            "end": 3495,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 3487,
            "end": 3493
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 3497,
      "end": 3518,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 3502,
        "end": 3503,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 3506,
        "end": 3517,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 3506,
            "end": 3509,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 3510,
            "end": 3514,
            "tail": false,
            "value": {
              "cooked": " ",
              "raw": " "
            }
          },
          {
            "type": "TemplateElement",
            "start": 3515,
            "end": 3517,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 3509,
            "end": 3510,
            "typeName": {
              "type": "Identifier",
              "start": 3509,
              "end": 3510,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 3514,
            "end": 3515,
            "typeName": {
              "type": "Identifier",
              "start": 3514,
              "end": 3515,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 3519,
      "end": 3552,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3525,
          "end": 3551,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3525,
            "end": 3538,
            "decorators": [],
            "name": "exampleBad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3535,
              "end": 3538,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3537,
                "end": 3538,
                "typeName": {
                  "type": "Identifier",
                  "start": 3537,
                  "end": 3538,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 3541,
            "end": 3551,
            "raw": "\"anything\"",
            "value": "anything"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3562,
      "end": 3591,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3568,
          "end": 3590,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3568,
            "end": 3582,
            "decorators": [],
            "name": "exampleGood",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3579,
              "end": 3582,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3581,
                "end": 3582,
                "typeName": {
                  "type": "Identifier",
                  "start": 3581,
                  "end": 3582,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 3585,
            "end": 3590,
            "raw": "\"1 2\"",
            "value": "1 2"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 3621,
      "end": 3633,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3625,
          "end": 3632,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3625,
            "end": 3632,
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3627,
              "end": 3632,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 3629,
                "end": 3632,
                "literal": {
                  "type": "Literal",
                  "start": 3629,
                  "end": 3632,
                  "raw": "'0'",
                  "value": "0"
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3634,
      "end": 3660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3638,
          "end": 3659,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3638,
            "end": 3659,
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3640,
              "end": 3659,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 3642,
                "end": 3659,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 3642,
                    "end": 3645,
                    "literal": {
                      "type": "Literal",
                      "start": 3642,
                      "end": 3645,
                      "raw": "'0'",
                      "value": "0"
                    }
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 3648,
                    "end": 3659,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 3648,
                        "end": 3651,
                        "tail": false,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 3657,
                        "end": 3659,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 3651,
                        "end": 3657
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3733,
      "end": 3774,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3737,
          "end": 3773,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3737,
            "end": 3773,
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3739,
              "end": 3773,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3741,
                "end": 3773,
                "types": [
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 3741,
                    "end": 3755,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 3741,
                        "end": 3747,
                        "tail": false,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 3753,
                        "end": 3755,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3747,
                        "end": 3753
                      }
                    ]
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3758,
                    "end": 3764,
                    "literal": {
                      "type": "Literal",
                      "start": 3758,
                      "end": 3764,
                      "raw": "'foo1'",
                      "value": "foo1"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3767,
                    "end": 3773,
                    "literal": {
                      "type": "Literal",
                      "start": 3767,
                      "end": 3773,
                      "raw": "'1foo'",
                      "value": "1foo"
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3803,
      "end": 3873,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3807,
          "end": 3872,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3807,
            "end": 3872,
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3809,
              "end": 3872,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3811,
                "end": 3872,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 3811,
                    "end": 3817,
                    "literal": {
                      "type": "TemplateLiteral",
                      "start": 3811,
                      "end": 3817,
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 3811,
                          "end": 3817,
                          "tail": true,
                          "value": {
                            "cooked": "foo1",
                            "raw": "foo1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3820,
                    "end": 3826,
                    "literal": {
                      "type": "Literal",
                      "start": 3820,
                      "end": 3826,
                      "raw": "'1foo'",
                      "value": "1foo"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3829,
                    "end": 3837,
                    "literal": {
                      "type": "Literal",
                      "start": 3829,
                      "end": 3837,
                      "raw": "'foofoo'",
                      "value": "foofoo"
                    }
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 3840,
                    "end": 3854,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 3840,
                        "end": 3846,
                        "tail": false,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 3852,
                        "end": 3854,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3846,
                        "end": 3852
                      }
                    ]
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3857,
                    "end": 3863,
                    "literal": {
                      "type": "Literal",
                      "start": 3857,
                      "end": 3863,
                      "raw": "'foox'",
                      "value": "foox"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3866,
                    "end": 3872,
                    "literal": {
                      "type": "Literal",
                      "start": 3866,
                      "end": 3872,
                      "raw": "'xfoo'",
                      "value": "xfoo"
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 3911,
      "end": 3998,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3915,
          "end": 3997,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3915,
            "end": 3997,
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3917,
              "end": 3997,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 3919,
                "end": 3997,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 3919,
                    "end": 3925,
                    "literal": {
                      "type": "TemplateLiteral",
                      "start": 3919,
                      "end": 3925,
                      "expressions": [],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 3919,
                          "end": 3925,
                          "tail": true,
                          "value": {
                            "cooked": "foo1",
                            "raw": "foo1"
                          }
                        }
                      ]
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3928,
                    "end": 3934,
                    "literal": {
                      "type": "Literal",
                      "start": 3928,
                      "end": 3934,
                      "raw": "'1foo'",
                      "value": "1foo"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3937,
                    "end": 3945,
                    "literal": {
                      "type": "Literal",
                      "start": 3937,
                      "end": 3945,
                      "raw": "'foofoo'",
                      "value": "foofoo"
                    }
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 3948,
                    "end": 3962,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 3948,
                        "end": 3954,
                        "tail": false,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 3960,
                        "end": 3962,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3954,
                        "end": 3960
                      }
                    ]
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3965,
                    "end": 3971,
                    "literal": {
                      "type": "Literal",
                      "start": 3965,
                      "end": 3971,
                      "raw": "'foox'",
                      "value": "foox"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 3974,
                    "end": 3980,
                    "literal": {
                      "type": "Literal",
                      "start": 3974,
                      "end": 3980,
                      "raw": "'xfoo'",
                      "value": "xfoo"
                    }
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 3983,
                    "end": 3997,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 3983,
                        "end": 3986,
                        "tail": false,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 3992,
                        "end": 3997,
                        "tail": true,
                        "value": {
                          "cooked": "foo",
                          "raw": "foo"
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 3986,
                        "end": 3992
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 4044,
      "end": 4064,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4048,
          "end": 4063,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4048,
            "end": 4063,
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4050,
              "end": 4063,
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "start": 4052,
                "end": 4063,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 4052,
                    "end": 4055,
                    "tail": false,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  },
                  {
                    "type": "TemplateElement",
                    "start": 4061,
                    "end": 4063,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ],
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 4055,
                    "end": 4061
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4065,
      "end": 4091,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4069,
          "end": 4090,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4069,
            "end": 4090,
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4071,
              "end": 4090,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 4073,
                "end": 4090,
                "types": [
                  {
                    "type": "TSTemplateLiteralType",
                    "start": 4073,
                    "end": 4084,
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "start": 4073,
                        "end": 4076,
                        "tail": false,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      },
                      {
                        "type": "TemplateElement",
                        "start": 4082,
                        "end": 4084,
                        "tail": true,
                        "value": {
                          "cooked": "",
                          "raw": ""
                        }
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 4076,
                        "end": 4082
                      }
                    ]
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 4087,
                    "end": 4090,
                    "literal": {
                      "type": "Literal",
                      "start": 4087,
                      "end": 4090,
                      "raw": "'0'",
                      "value": "0"
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4134,
      "end": 4192,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4139,
        "end": 4142,
        "decorators": [],
        "name": "T2S",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 4181,
        "end": 4191,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 4181,
            "end": 4184,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 4185,
            "end": 4188,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 4189,
            "end": 4191,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "start": 4184,
            "end": 4185,
            "typeName": {
              "type": "Identifier",
              "start": 4184,
              "end": 4185,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSTypeReference",
            "start": 4188,
            "end": 4189,
            "typeName": {
              "type": "Identifier",
              "start": 4188,
              "end": 4189,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          }
        ]
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 4142,
        "end": 4178,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 4143,
            "end": 4159,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4153,
              "end": 4159
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4143,
              "end": 4144,
              "decorators": [],
              "name": "A",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 4161,
            "end": 4177,
            "const": false,
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4171,
              "end": 4177
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 4161,
              "end": 4162,
              "decorators": [],
              "name": "B",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4194,
      "end": 4217,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4199,
        "end": 4202,
        "decorators": [],
        "name": "S10",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 4205,
        "end": 4216,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 4205,
            "end": 4208,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 4214,
            "end": 4216,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 4208,
            "end": 4214
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4229,
      "end": 4270,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4234,
        "end": 4237,
        "decorators": [],
        "name": "S11",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "start": 4240,
        "end": 4269,
        "quasis": [
          {
            "type": "TemplateElement",
            "start": 4240,
            "end": 4243,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 4249,
            "end": 4252,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 4258,
            "end": 4261,
            "tail": false,
            "value": {
              "cooked": "",
              "raw": ""
            }
          },
          {
            "type": "TemplateElement",
            "start": 4267,
            "end": 4269,
            "tail": true,
            "value": {
              "cooked": "",
              "raw": ""
            }
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 4243,
            "end": 4249
          },
          {
            "type": "TSStringKeyword",
            "start": 4252,
            "end": 4258
          },
          {
            "type": "TSStringKeyword",
            "start": 4261,
            "end": 4267
          }
        ]
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 4282,
      "end": 4313,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 4287,
        "end": 4290,
        "decorators": [],
        "name": "S12",
        "optional": false
      },
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 4293,
        "end": 4312,
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 4296,
          "end": 4312,
          "params": [
            {
              "type": "TSStringKeyword",
              "start": 4297,
              "end": 4303
            },
            {
              "type": "TSStringKeyword",
              "start": 4305,
              "end": 4311
            }
          ]
        },
        "typeName": {
          "type": "Identifier",
          "start": 4293,
          "end": 4296,
          "decorators": [],
          "name": "T2S",
          "optional": false
        }
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 4326,
      "end": 4449,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4365,
        "end": 4449,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 4371,
            "end": 4388,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4375,
                "end": 4387,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4375,
                  "end": 4377,
                  "decorators": [],
                  "name": "s1",
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 4380,
                  "end": 4387,
                  "operator": "&&",
                  "left": {
                    "type": "Identifier",
                    "start": 4380,
                    "end": 4381,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 4385,
                    "end": 4387,
                    "raw": "42",
                    "value": 42
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "VariableDeclaration",
            "start": 4404,
            "end": 4421,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 4408,
                "end": 4420,
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 4408,
                  "end": 4410,
                  "decorators": [],
                  "name": "s2",
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 4413,
                  "end": 4420,
                  "operator": "||",
                  "left": {
                    "type": "Identifier",
                    "start": 4413,
                    "end": 4414,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 4418,
                    "end": 4420,
                    "raw": "42",
                    "value": 42
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4335,
        "end": 4338,
        "decorators": [],
        "name": "ff1",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4339,
          "end": 4363,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4340,
            "end": 4363,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 4342,
              "end": 4363,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 4342,
                  "end": 4345,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 4351,
                  "end": 4355,
                  "tail": false,
                  "value": {
                    "cooked": "-",
                    "raw": "-"
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 4361,
                  "end": 4363,
                  "tail": true,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                }
              ],
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 4345,
                  "end": 4351
                },
                {
                  "type": "TSStringKeyword",
                  "start": 4355,
                  "end": 4361
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4473,
      "end": 4539,
      "attributes": [],
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "start": 4480,
        "end": 4539,
        "declare": false,
        "id": {
          "type": "Identifier",
          "start": 4485,
          "end": 4487,
          "decorators": [],
          "name": "Id",
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSTemplateLiteralType",
          "start": 4523,
          "end": 4538,
          "quasis": [
            {
              "type": "TemplateElement",
              "start": 4523,
              "end": 4526,
              "tail": false,
              "value": {
                "cooked": "",
                "raw": ""
              }
            },
            {
              "type": "TemplateElement",
              "start": 4529,
              "end": 4533,
              "tail": false,
              "value": {
                "cooked": "-",
                "raw": "-"
              }
            },
            {
              "type": "TemplateElement",
              "start": 4536,
              "end": 4538,
              "tail": true,
              "value": {
                "cooked": "",
                "raw": ""
              }
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "start": 4526,
              "end": 4529,
              "typeName": {
                "type": "Identifier",
                "start": 4526,
                "end": 4529,
                "decorators": [],
                "name": "TId",
                "optional": false
              }
            },
            {
              "type": "TSTypeReference",
              "start": 4533,
              "end": 4536,
              "typeName": {
                "type": "Identifier",
                "start": 4533,
                "end": 4536,
                "decorators": [],
                "name": "TId",
                "optional": false
              }
            }
          ]
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "start": 4487,
          "end": 4520,
          "params": [
            {
              "type": "TSTypeParameter",
              "start": 4488,
              "end": 4490,
              "const": false,
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4488,
                "end": 4490,
                "decorators": [],
                "name": "TA",
                "optional": false
              },
              "out": false
            },
            {
              "type": "TSTypeParameter",
              "start": 4492,
              "end": 4519,
              "const": false,
              "constraint": {
                "type": "TSStringKeyword",
                "start": 4504,
                "end": 4510
              },
              "default": {
                "type": "TSStringKeyword",
                "start": 4513,
                "end": 4519
              },
              "in": false,
              "name": {
                "type": "Identifier",
                "start": 4492,
                "end": 4495,
                "decorators": [],
                "name": "TId",
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
      "start": 4541,
      "end": 4559,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 4548,
        "end": 4559,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 4557,
          "end": 4559,
          "body": []
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 4554,
          "end": 4556,
          "decorators": [],
          "name": "AA",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "ExportNamedDeclaration",
      "start": 4561,
      "end": 4685,
      "attributes": [],
      "declaration": {
        "type": "ClassDeclaration",
        "start": 4568,
        "end": 4685,
        "abstract": true,
        "body": {
          "type": "ClassBody",
          "start": 4586,
          "end": 4685,
          "body": [
            {
              "type": "TSAbstractMethodDefinition",
              "start": 4592,
              "end": 4623,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4601,
                "end": 4604,
                "decorators": [],
                "name": "get",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "start": 4604,
                "end": 4623,
                "async": false,
                "body": null,
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4605,
                    "end": 4615,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4607,
                      "end": 4615,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4609,
                        "end": 4615,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4611,
                          "end": 4615,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4612,
                              "end": 4614,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4612,
                                "end": 4614,
                                "decorators": [],
                                "name": "AA",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 4609,
                          "end": 4611,
                          "decorators": [],
                          "name": "Id",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4616,
                  "end": 4622,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4618,
                    "end": 4622
                  }
                }
              }
            },
            {
              "type": "MethodDefinition",
              "start": 4628,
              "end": 4683,
              "computed": false,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 4628,
                "end": 4634,
                "decorators": [],
                "name": "update",
                "optional": false
              },
              "kind": "method",
              "optional": false,
              "override": false,
              "static": false,
              "value": {
                "type": "FunctionExpression",
                "start": 4634,
                "end": 4683,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 4653,
                  "end": 4683,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 4663,
                      "end": 4677,
                      "expression": {
                        "type": "CallExpression",
                        "start": 4663,
                        "end": 4676,
                        "arguments": [
                          {
                            "type": "TSNonNullExpression",
                            "start": 4672,
                            "end": 4675,
                            "expression": {
                              "type": "Identifier",
                              "start": 4672,
                              "end": 4674,
                              "decorators": [],
                              "name": "id",
                              "optional": false
                            }
                          }
                        ],
                        "callee": {
                          "type": "MemberExpression",
                          "start": 4663,
                          "end": 4671,
                          "computed": false,
                          "object": {
                            "type": "ThisExpression",
                            "start": 4663,
                            "end": 4667
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 4668,
                            "end": 4671,
                            "decorators": [],
                            "name": "get",
                            "optional": false
                          }
                        },
                        "optional": false
                      }
                    }
                  ]
                },
                "declare": false,
                "expression": false,
                "generator": false,
                "id": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 4635,
                    "end": 4645,
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 4637,
                      "end": 4645,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 4639,
                        "end": 4645,
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "start": 4641,
                          "end": 4645,
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "start": 4642,
                              "end": 4644,
                              "typeName": {
                                "type": "Identifier",
                                "start": 4642,
                                "end": 4644,
                                "decorators": [],
                                "name": "AA",
                                "optional": false
                              }
                            }
                          ]
                        },
                        "typeName": {
                          "type": "Identifier",
                          "start": 4639,
                          "end": 4641,
                          "decorators": [],
                          "name": "Id",
                          "optional": false
                        }
                      }
                    }
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 4646,
                  "end": 4652,
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4648,
                    "end": 4652
                  }
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [],
        "id": {
          "type": "Identifier",
          "start": 4583,
          "end": 4585,
          "decorators": [],
          "name": "BB",
          "optional": false
        },
        "implements": [],
        "superClass": null
      },
      "exportKind": "value",
      "source": null,
      "specifiers": []
    },
    {
      "type": "FunctionDeclaration",
      "start": 4778,
      "end": 4893,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 4891,
        "end": 4893,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4787,
        "end": 4801,
        "decorators": [],
        "name": "conversionTest",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4802,
          "end": 4889,
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4811,
            "end": 4889,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4813,
              "end": 4889,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 4815,
                  "end": 4825,
                  "literal": {
                    "type": "Literal",
                    "start": 4815,
                    "end": 4825,
                    "raw": "\"downcast\"",
                    "value": "downcast"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 4828,
                  "end": 4842,
                  "literal": {
                    "type": "Literal",
                    "start": 4828,
                    "end": 4842,
                    "raw": "\"dataDowncast\"",
                    "value": "dataDowncast"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 4845,
                  "end": 4862,
                  "literal": {
                    "type": "Literal",
                    "start": 4845,
                    "end": 4862,
                    "raw": "\"editingDowncast\"",
                    "value": "editingDowncast"
                  }
                },
                {
                  "type": "TSIntersectionType",
                  "start": 4865,
                  "end": 4889,
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "start": 4865,
                      "end": 4884,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 4865,
                          "end": 4868,
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 4874,
                          "end": 4884,
                          "tail": true,
                          "value": {
                            "cooked": "Downcast",
                            "raw": "Downcast"
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4868,
                          "end": 4874
                        }
                      ]
                    },
                    {
                      "type": "TSTypeLiteral",
                      "start": 4887,
                      "end": 4889,
                      "members": []
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 4894,
      "end": 4925,
      "expression": {
        "type": "CallExpression",
        "start": 4894,
        "end": 4924,
        "arguments": [
          {
            "type": "Literal",
            "start": 4909,
            "end": 4923,
            "raw": "\"testDowncast\"",
            "value": "testDowncast"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 4894,
          "end": 4908,
          "decorators": [],
          "name": "conversionTest",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 4926,
      "end": 5042,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5040,
        "end": 5042,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 4935,
        "end": 4950,
        "decorators": [],
        "name": "conversionTest2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 4951,
          "end": 5038,
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 4960,
            "end": 5038,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 4962,
              "end": 5038,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 4964,
                  "end": 4974,
                  "literal": {
                    "type": "Literal",
                    "start": 4964,
                    "end": 4974,
                    "raw": "\"downcast\"",
                    "value": "downcast"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 4977,
                  "end": 4991,
                  "literal": {
                    "type": "Literal",
                    "start": 4977,
                    "end": 4991,
                    "raw": "\"dataDowncast\"",
                    "value": "dataDowncast"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 4994,
                  "end": 5011,
                  "literal": {
                    "type": "Literal",
                    "start": 4994,
                    "end": 5011,
                    "raw": "\"editingDowncast\"",
                    "value": "editingDowncast"
                  }
                },
                {
                  "type": "TSIntersectionType",
                  "start": 5014,
                  "end": 5038,
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "start": 5014,
                      "end": 5016,
                      "members": []
                    },
                    {
                      "type": "TSTemplateLiteralType",
                      "start": 5019,
                      "end": 5038,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 5019,
                          "end": 5022,
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 5028,
                          "end": 5038,
                          "tail": true,
                          "value": {
                            "cooked": "Downcast",
                            "raw": "Downcast"
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5022,
                          "end": 5028
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 5043,
      "end": 5075,
      "expression": {
        "type": "CallExpression",
        "start": 5043,
        "end": 5074,
        "arguments": [
          {
            "type": "Literal",
            "start": 5059,
            "end": 5073,
            "raw": "\"testDowncast\"",
            "value": "testDowncast"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5043,
          "end": 5058,
          "decorators": [],
          "name": "conversionTest2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 5076,
      "end": 5192,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5190,
        "end": 5192,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5085,
        "end": 5100,
        "decorators": [],
        "name": "conversionTest3",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5101,
          "end": 5188,
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5110,
            "end": 5188,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 5112,
              "end": 5188,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 5114,
                  "end": 5124,
                  "literal": {
                    "type": "Literal",
                    "start": 5114,
                    "end": 5124,
                    "raw": "\"downcast\"",
                    "value": "downcast"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 5127,
                  "end": 5141,
                  "literal": {
                    "type": "Literal",
                    "start": 5127,
                    "end": 5141,
                    "raw": "\"dataDowncast\"",
                    "value": "dataDowncast"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 5144,
                  "end": 5161,
                  "literal": {
                    "type": "Literal",
                    "start": 5144,
                    "end": 5161,
                    "raw": "\"editingDowncast\"",
                    "value": "editingDowncast"
                  }
                },
                {
                  "type": "TSTemplateLiteralType",
                  "start": 5164,
                  "end": 5188,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 5164,
                      "end": 5167,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 5178,
                      "end": 5188,
                      "tail": true,
                      "value": {
                        "cooked": "Downcast",
                        "raw": "Downcast"
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "start": 5167,
                      "end": 5178,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5167,
                          "end": 5173
                        },
                        {
                          "type": "TSTypeLiteral",
                          "start": 5176,
                          "end": 5178,
                          "members": []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 5193,
      "end": 5225,
      "expression": {
        "type": "CallExpression",
        "start": 5193,
        "end": 5224,
        "arguments": [
          {
            "type": "Literal",
            "start": 5209,
            "end": 5223,
            "raw": "\"testDowncast\"",
            "value": "testDowncast"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5193,
          "end": 5208,
          "decorators": [],
          "name": "conversionTest3",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 5226,
      "end": 5342,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5340,
        "end": 5342,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5235,
        "end": 5250,
        "decorators": [],
        "name": "conversionTest4",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5251,
          "end": 5338,
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5260,
            "end": 5338,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 5262,
              "end": 5338,
              "types": [
                {
                  "type": "TSLiteralType",
                  "start": 5264,
                  "end": 5274,
                  "literal": {
                    "type": "Literal",
                    "start": 5264,
                    "end": 5274,
                    "raw": "\"downcast\"",
                    "value": "downcast"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 5277,
                  "end": 5291,
                  "literal": {
                    "type": "Literal",
                    "start": 5277,
                    "end": 5291,
                    "raw": "\"dataDowncast\"",
                    "value": "dataDowncast"
                  }
                },
                {
                  "type": "TSLiteralType",
                  "start": 5294,
                  "end": 5311,
                  "literal": {
                    "type": "Literal",
                    "start": 5294,
                    "end": 5311,
                    "raw": "\"editingDowncast\"",
                    "value": "editingDowncast"
                  }
                },
                {
                  "type": "TSTemplateLiteralType",
                  "start": 5314,
                  "end": 5338,
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "start": 5314,
                      "end": 5317,
                      "tail": false,
                      "value": {
                        "cooked": "",
                        "raw": ""
                      }
                    },
                    {
                      "type": "TemplateElement",
                      "start": 5328,
                      "end": 5338,
                      "tail": true,
                      "value": {
                        "cooked": "Downcast",
                        "raw": "Downcast"
                      }
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "start": 5317,
                      "end": 5328,
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "start": 5317,
                          "end": 5319,
                          "members": []
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 5322,
                          "end": 5328
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 5343,
      "end": 5375,
      "expression": {
        "type": "CallExpression",
        "start": 5343,
        "end": 5374,
        "arguments": [
          {
            "type": "Literal",
            "start": 5359,
            "end": 5373,
            "raw": "\"testDowncast\"",
            "value": "testDowncast"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5343,
          "end": 5358,
          "decorators": [],
          "name": "conversionTest4",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 5377,
      "end": 5435,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 5433,
        "end": 5435,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 5386,
        "end": 5389,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 5390,
          "end": 5431,
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 5393,
            "end": 5431,
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "start": 5395,
              "end": 5431,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 5395,
                  "end": 5398,
                  "tail": false,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  }
                },
                {
                  "type": "TemplateElement",
                  "start": 5425,
                  "end": 5431,
                  "tail": true,
                  "value": {
                    "cooked": "Test",
                    "raw": "Test"
                  }
                }
              ],
              "types": [
                {
                  "type": "TSIntersectionType",
                  "start": 5398,
                  "end": 5425,
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "start": 5398,
                      "end": 5410,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 5398,
                          "end": 5402,
                          "tail": false,
                          "value": {
                            "cooked": "a",
                            "raw": "a"
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 5408,
                          "end": 5410,
                          "tail": true,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5402,
                          "end": 5408
                        }
                      ]
                    },
                    {
                      "type": "TSTemplateLiteralType",
                      "start": 5413,
                      "end": 5425,
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "start": 5413,
                          "end": 5416,
                          "tail": false,
                          "value": {
                            "cooked": "",
                            "raw": ""
                          }
                        },
                        {
                          "type": "TemplateElement",
                          "start": 5422,
                          "end": 5425,
                          "tail": true,
                          "value": {
                            "cooked": "a",
                            "raw": "a"
                          }
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5416,
                          "end": 5422
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "start": 5436,
      "end": 5451,
      "expression": {
        "type": "CallExpression",
        "start": 5436,
        "end": 5450,
        "arguments": [
          {
            "type": "Literal",
            "start": 5440,
            "end": 5449,
            "raw": "\"abaTest\"",
            "value": "abaTest"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5436,
          "end": 5439,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 5458,
      "end": 5473,
      "expression": {
        "type": "CallExpression",
        "start": 5458,
        "end": 5472,
        "arguments": [
          {
            "type": "Literal",
            "start": 5462,
            "end": 5471,
            "raw": "\"abcTest\"",
            "value": "abcTest"
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 5458,
          "end": 5461,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
