__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "RequiresLeadingSlash",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 25
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "/",
              "cooked": "/"
            },
            "tail": false,
            "start": 28,
            "end": 32
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 38,
            "end": 40
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 32,
            "end": 38
          }
        ],
        "start": 28,
        "end": 40
      },
      "declare": false,
      "start": 0,
      "end": 41
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequiresLeadingSlash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 58,
                  "end": 78
                },
                "typeArguments": null,
                "start": 58,
                "end": 78
              },
              "start": 56,
              "end": 78
            },
            "start": 55,
            "end": 78
          },
          "init": {
            "type": "Literal",
            "value": "/bin",
            "raw": "\"/bin\"",
            "start": 81,
            "end": 87
          },
          "definite": false,
          "start": 55,
          "end": 87
        }
      ],
      "declare": false,
      "start": 49,
      "end": 88
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "RequiresLeadingSlash",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 109,
                  "end": 129
                },
                "typeArguments": null,
                "start": 109,
                "end": 129
              },
              "start": 107,
              "end": 129
            },
            "start": 106,
            "end": 129
          },
          "init": {
            "type": "Literal",
            "value": "no slash",
            "raw": "\"no slash\"",
            "start": 132,
            "end": 142
          },
          "definite": false,
          "start": 106,
          "end": 142
        }
      ],
      "declare": false,
      "start": 100,
      "end": 143
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Protocol",
        "optional": false,
        "typeAnnotation": null,
        "start": 150,
        "end": 158
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 160
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 169,
              "end": 175
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 159,
            "end": 175
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 178
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 187,
              "end": 193
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 177,
            "end": 193
          }
        ],
        "start": 158,
        "end": 194
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 197,
            "end": 200
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "://",
              "cooked": "://"
            },
            "tail": false,
            "start": 201,
            "end": 207
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 208,
            "end": 210
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 200,
              "end": 201
            },
            "typeArguments": null,
            "start": 200,
            "end": 201
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 207,
              "end": 208
            },
            "typeArguments": null,
            "start": 207,
            "end": 208
          }
        ],
        "start": 197,
        "end": 210
      },
      "declare": false,
      "start": 145,
      "end": 211
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "download",
        "optional": false,
        "typeAnnotation": null,
        "start": 221,
        "end": 229
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "hostSpec",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Protocol",
                "optional": false,
                "typeAnnotation": null,
                "start": 240,
                "end": 248
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "http",
                          "raw": "\"http\"",
                          "start": 249,
                          "end": 255
                        },
                        "start": 249,
                        "end": 255
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "https",
                          "raw": "\"https\"",
                          "start": 258,
                          "end": 265
                        },
                        "start": 258,
                        "end": 265
                      },
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "ftp",
                          "raw": "\"ftp\"",
                          "start": 268,
                          "end": 273
                        },
                        "start": 268,
                        "end": 273
                      }
                    ],
                    "start": 249,
                    "end": 273
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 275,
                    "end": 281
                  }
                ],
                "start": 248,
                "end": 282
              },
              "start": 240,
              "end": 282
            },
            "start": 238,
            "end": 282
          },
          "start": 230,
          "end": 282
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 284,
        "end": 287
      },
      "expression": false,
      "start": 212,
      "end": 287
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "download",
          "optional": false,
          "typeAnnotation": null,
          "start": 308,
          "end": 316
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "http://example.com/protocol",
            "raw": "\"http://example.com/protocol\"",
            "start": 317,
            "end": 346
          }
        ],
        "optional": false,
        "start": 308,
        "end": 347
      },
      "directive": null,
      "start": 308,
      "end": 348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "download",
          "optional": false,
          "typeAnnotation": null,
          "start": 379,
          "end": 387
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "example.com/noprotocol",
            "raw": "\"example.com/noprotocol\"",
            "start": 388,
            "end": 412
          }
        ],
        "optional": false,
        "start": 379,
        "end": 413
      },
      "directive": null,
      "start": 379,
      "end": 414
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "download",
          "optional": false,
          "typeAnnotation": null,
          "start": 451,
          "end": 459
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "gopher://example.com/protocol",
            "raw": "\"gopher://example.com/protocol\"",
            "start": 460,
            "end": 491
          }
        ],
        "optional": false,
        "start": 451,
        "end": 492
      },
      "directive": null,
      "start": 451,
      "end": 493
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "q",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSConditionalType",
                "checkType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "RequiresLeadingSlash",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 504,
                    "end": 524
                  },
                  "typeArguments": null,
                  "start": 504,
                  "end": 524
                },
                "extendsType": {
                  "type": "TSStringKeyword",
                  "start": 533,
                  "end": 539
                },
                "trueType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 542,
                    "end": 546
                  },
                  "start": 542,
                  "end": 546
                },
                "falseType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 549,
                    "end": 554
                  },
                  "start": 549,
                  "end": 554
                },
                "start": 504,
                "end": 554
              },
              "start": 502,
              "end": 554
            },
            "start": 501,
            "end": 554
          },
          "init": {
            "type": "Literal",
            "value": true,
            "raw": "true",
            "start": 557,
            "end": 561
          },
          "definite": false,
          "start": 501,
          "end": 561
        }
      ],
      "declare": false,
      "start": 495,
      "end": 562
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bools",
        "optional": false,
        "typeAnnotation": null,
        "start": 581,
        "end": 586
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 590,
                  "end": 593
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 600,
                  "end": 602
                }
              ],
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 593,
                  "end": 600
                }
              ],
              "start": 590,
              "end": 602
            },
            "start": 588,
            "end": 602
          },
          "start": 587,
          "end": 602
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 605,
          "end": 609
        },
        "start": 603,
        "end": 609
      },
      "body": null,
      "expression": false,
      "start": 564,
      "end": 610
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bools",
          "optional": false,
          "typeAnnotation": null,
          "start": 617,
          "end": 622
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "true",
            "raw": "\"true\"",
            "start": 623,
            "end": 629
          }
        ],
        "optional": false,
        "start": 617,
        "end": 630
      },
      "directive": null,
      "start": 617,
      "end": 631
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bools",
          "optional": false,
          "typeAnnotation": null,
          "start": 632,
          "end": 637
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 638,
            "end": 645
          }
        ],
        "optional": false,
        "start": 632,
        "end": 646
      },
      "directive": null,
      "start": 632,
      "end": 647
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bools",
          "optional": false,
          "typeAnnotation": null,
          "start": 659,
          "end": 664
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "other",
            "raw": "\"other\"",
            "start": 665,
            "end": 672
          }
        ],
        "optional": false,
        "start": 659,
        "end": 673
      },
      "directive": null,
      "start": 659,
      "end": 674
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Pat",
        "optional": false,
        "typeAnnotation": null,
        "start": 681,
        "end": 684
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 685,
              "end": 686
            },
            "constraint": {
              "type": "TSUnionType",
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
              ],
              "start": 695,
              "end": 720
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 685,
            "end": 720
          }
        ],
        "start": 684,
        "end": 721
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 724,
            "end": 727
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 728,
            "end": 730
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 727,
              "end": 728
            },
            "typeArguments": null,
            "start": 727,
            "end": 728
          }
        ],
        "start": 724,
        "end": 730
      },
      "declare": false,
      "start": 676,
      "end": 730
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "nullishes",
        "optional": false,
        "typeAnnotation": null,
        "start": 748,
        "end": 757
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Pat",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 764
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSUnionType",
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
                    ],
                    "start": 765,
                    "end": 781
                  }
                ],
                "start": 764,
                "end": 782
              },
              "start": 761,
              "end": 782
            },
            "start": 759,
            "end": 782
          },
          "start": 758,
          "end": 782
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 785,
          "end": 789
        },
        "start": 783,
        "end": 789
      },
      "body": null,
      "expression": false,
      "start": 731,
      "end": 790
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 797,
          "end": 806
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "null",
            "raw": "\"null\"",
            "start": 807,
            "end": 813
          }
        ],
        "optional": false,
        "start": 797,
        "end": 814
      },
      "directive": null,
      "start": 797,
      "end": 815
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 816,
          "end": 825
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "undefined",
            "raw": "\"undefined\"",
            "start": 826,
            "end": 837
          }
        ],
        "optional": false,
        "start": 816,
        "end": 838
      },
      "directive": null,
      "start": 816,
      "end": 839
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 851,
          "end": 860
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 861,
            "end": 864
          }
        ],
        "optional": false,
        "start": 851,
        "end": 865
      },
      "directive": null,
      "start": 851,
      "end": 866
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 867,
          "end": 876
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "false",
            "raw": "\"false\"",
            "start": 877,
            "end": 884
          }
        ],
        "optional": false,
        "start": 867,
        "end": 885
      },
      "directive": null,
      "start": 867,
      "end": 886
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 887,
          "end": 896
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "NaN",
            "raw": "\"NaN\"",
            "start": 897,
            "end": 902
          }
        ],
        "optional": false,
        "start": 887,
        "end": 903
      },
      "directive": null,
      "start": 887,
      "end": 904
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 905,
          "end": 914
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "",
            "raw": "\"\"",
            "start": 915,
            "end": 917
          }
        ],
        "optional": false,
        "start": 905,
        "end": 918
      },
      "directive": null,
      "start": 905,
      "end": 919
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "nullishes",
          "optional": false,
          "typeAnnotation": null,
          "start": 920,
          "end": 929
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "other",
            "raw": "\"other\"",
            "start": 930,
            "end": 937
          }
        ],
        "optional": false,
        "start": 920,
        "end": 938
      },
      "directive": null,
      "start": 920,
      "end": 939
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "numbers",
        "optional": false,
        "typeAnnotation": null,
        "start": 958,
        "end": 965
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 969,
                  "end": 972
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 978,
                  "end": 980
                }
              ],
              "types": [
                {
                  "type": "TSNumberKeyword",
                  "start": 972,
                  "end": 978
                }
              ],
              "start": 969,
              "end": 980
            },
            "start": 967,
            "end": 980
          },
          "start": 966,
          "end": 980
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 983,
          "end": 987
        },
        "start": 981,
        "end": 987
      },
      "body": null,
      "expression": false,
      "start": 941,
      "end": 988
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1018,
          "end": 1025
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 1026,
            "end": 1029
          }
        ],
        "optional": false,
        "start": 1018,
        "end": 1030
      },
      "directive": null,
      "start": 1018,
      "end": 1031
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1032,
          "end": 1039
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1",
            "raw": "\"-1\"",
            "start": 1040,
            "end": 1044
          }
        ],
        "optional": false,
        "start": 1032,
        "end": 1045
      },
      "directive": null,
      "start": 1032,
      "end": 1046
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1047,
          "end": 1054
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 1055,
            "end": 1058
          }
        ],
        "optional": false,
        "start": 1047,
        "end": 1059
      },
      "directive": null,
      "start": 1047,
      "end": 1060
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1061,
          "end": 1068
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0b1",
            "raw": "\"0b1\"",
            "start": 1069,
            "end": 1074
          }
        ],
        "optional": false,
        "start": 1061,
        "end": 1075
      },
      "directive": null,
      "start": 1061,
      "end": 1076
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1077,
          "end": 1084
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0x1",
            "raw": "\"0x1\"",
            "start": 1085,
            "end": 1090
          }
        ],
        "optional": false,
        "start": 1077,
        "end": 1091
      },
      "directive": null,
      "start": 1077,
      "end": 1092
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1093,
          "end": 1100
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0o1",
            "raw": "\"0o1\"",
            "start": 1101,
            "end": 1106
          }
        ],
        "optional": false,
        "start": 1093,
        "end": 1107
      },
      "directive": null,
      "start": 1093,
      "end": 1108
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1109,
          "end": 1116
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e21",
            "raw": "\"1e21\"",
            "start": 1117,
            "end": 1123
          }
        ],
        "optional": false,
        "start": 1109,
        "end": 1124
      },
      "directive": null,
      "start": 1109,
      "end": 1125
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1126,
          "end": 1133
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E21",
            "raw": "\"1E21\"",
            "start": 1134,
            "end": 1140
          }
        ],
        "optional": false,
        "start": 1126,
        "end": 1141
      },
      "directive": null,
      "start": 1126,
      "end": 1142
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1143,
          "end": 1150
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e-21",
            "raw": "\"1e-21\"",
            "start": 1151,
            "end": 1158
          }
        ],
        "optional": false,
        "start": 1143,
        "end": 1159
      },
      "directive": null,
      "start": 1143,
      "end": 1160
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1161,
          "end": 1168
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E-21",
            "raw": "\"1E-21\"",
            "start": 1169,
            "end": 1176
          }
        ],
        "optional": false,
        "start": 1161,
        "end": 1177
      },
      "directive": null,
      "start": 1161,
      "end": 1178
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1179,
          "end": 1186
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1",
            "raw": "\"1.1\"",
            "start": 1187,
            "end": 1192
          }
        ],
        "optional": false,
        "start": 1179,
        "end": 1193
      },
      "directive": null,
      "start": 1179,
      "end": 1194
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1195,
          "end": 1202
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1",
            "raw": "\"-1.1\"",
            "start": 1203,
            "end": 1209
          }
        ],
        "optional": false,
        "start": 1195,
        "end": 1210
      },
      "directive": null,
      "start": 1195,
      "end": 1211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1212,
          "end": 1219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1e-10",
            "raw": "\"-1.1e-10\"",
            "start": 1220,
            "end": 1230
          }
        ],
        "optional": false,
        "start": 1212,
        "end": 1231
      },
      "directive": null,
      "start": 1212,
      "end": 1232
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1233,
          "end": 1240
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1E-10",
            "raw": "\"-1.1E-10\"",
            "start": 1241,
            "end": 1251
          }
        ],
        "optional": false,
        "start": 1233,
        "end": 1252
      },
      "directive": null,
      "start": 1233,
      "end": 1253
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1254,
          "end": 1261
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1e-10",
            "raw": "\"1.1e-10\"",
            "start": 1262,
            "end": 1271
          }
        ],
        "optional": false,
        "start": 1254,
        "end": 1272
      },
      "directive": null,
      "start": 1254,
      "end": 1273
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1335,
          "end": 1342
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "?",
            "raw": "\"?\"",
            "start": 1343,
            "end": 1346
          }
        ],
        "optional": false,
        "start": 1335,
        "end": 1347
      },
      "directive": null,
      "start": 1335,
      "end": 1348
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1349,
          "end": 1356
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "NaN",
            "raw": "\"NaN\"",
            "start": 1357,
            "end": 1362
          }
        ],
        "optional": false,
        "start": 1349,
        "end": 1363
      },
      "directive": null,
      "start": 1349,
      "end": 1364
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1365,
          "end": 1372
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Infinity",
            "raw": "\"Infinity\"",
            "start": 1373,
            "end": 1383
          }
        ],
        "optional": false,
        "start": 1365,
        "end": 1384
      },
      "directive": null,
      "start": 1365,
      "end": 1385
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1386,
          "end": 1393
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "+Infinity",
            "raw": "\"+Infinity\"",
            "start": 1394,
            "end": 1405
          }
        ],
        "optional": false,
        "start": 1386,
        "end": 1406
      },
      "directive": null,
      "start": 1386,
      "end": 1407
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1408,
          "end": 1415
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-Infinity",
            "raw": "\"-Infinity\"",
            "start": 1416,
            "end": 1427
          }
        ],
        "optional": false,
        "start": 1408,
        "end": 1428
      },
      "directive": null,
      "start": 1408,
      "end": 1429
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1430,
          "end": 1437
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1_000",
            "raw": "\"1_000\"",
            "start": 1438,
            "end": 1445
          }
        ],
        "optional": false,
        "start": 1430,
        "end": 1446
      },
      "directive": null,
      "start": 1430,
      "end": 1447
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1518,
          "end": 1525
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a10",
            "raw": "\"a10\"",
            "start": 1526,
            "end": 1531
          }
        ],
        "optional": false,
        "start": 1518,
        "end": 1532
      },
      "directive": null,
      "start": 1518,
      "end": 1533
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1534,
          "end": 1541
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "10a",
            "raw": "\"10a\"",
            "start": 1542,
            "end": 1547
          }
        ],
        "optional": false,
        "start": 1534,
        "end": 1548
      },
      "directive": null,
      "start": 1534,
      "end": 1549
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1601,
          "end": 1608
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "- 1",
            "raw": "\"- 1\"",
            "start": 1609,
            "end": 1614
          }
        ],
        "optional": false,
        "start": 1601,
        "end": 1615
      },
      "directive": null,
      "start": 1601,
      "end": 1616
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "numbers",
          "optional": false,
          "typeAnnotation": null,
          "start": 1617,
          "end": 1624
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-/**/1",
            "raw": "\"-/**/1\"",
            "start": 1625,
            "end": 1633
          }
        ],
        "optional": false,
        "start": 1617,
        "end": 1634
      },
      "directive": null,
      "start": 1617,
      "end": 1635
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bigints",
        "optional": false,
        "typeAnnotation": null,
        "start": 1654,
        "end": 1661
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 1665,
                  "end": 1668
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 1674,
                  "end": 1676
                }
              ],
              "types": [
                {
                  "type": "TSBigIntKeyword",
                  "start": 1668,
                  "end": 1674
                }
              ],
              "start": 1665,
              "end": 1676
            },
            "start": 1663,
            "end": 1676
          },
          "start": 1662,
          "end": 1676
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 1679,
          "end": 1683
        },
        "start": 1677,
        "end": 1683
      },
      "body": null,
      "expression": false,
      "start": 1637,
      "end": 1684
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1714,
          "end": 1721
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1",
            "raw": "\"1\"",
            "start": 1722,
            "end": 1725
          }
        ],
        "optional": false,
        "start": 1714,
        "end": 1726
      },
      "directive": null,
      "start": 1714,
      "end": 1727
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1728,
          "end": 1735
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1",
            "raw": "\"-1\"",
            "start": 1736,
            "end": 1740
          }
        ],
        "optional": false,
        "start": 1728,
        "end": 1741
      },
      "directive": null,
      "start": 1728,
      "end": 1742
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1743,
          "end": 1750
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0",
            "raw": "\"0\"",
            "start": 1751,
            "end": 1754
          }
        ],
        "optional": false,
        "start": 1743,
        "end": 1755
      },
      "directive": null,
      "start": 1743,
      "end": 1756
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1757,
          "end": 1764
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0b1",
            "raw": "\"0b1\"",
            "start": 1765,
            "end": 1770
          }
        ],
        "optional": false,
        "start": 1757,
        "end": 1771
      },
      "directive": null,
      "start": 1757,
      "end": 1772
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1773,
          "end": 1780
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0x1",
            "raw": "\"0x1\"",
            "start": 1781,
            "end": 1786
          }
        ],
        "optional": false,
        "start": 1773,
        "end": 1787
      },
      "directive": null,
      "start": 1773,
      "end": 1788
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1789,
          "end": 1796
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0o1",
            "raw": "\"0o1\"",
            "start": 1797,
            "end": 1802
          }
        ],
        "optional": false,
        "start": 1789,
        "end": 1803
      },
      "directive": null,
      "start": 1789,
      "end": 1804
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1901,
          "end": 1908
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e21",
            "raw": "\"1e21\"",
            "start": 1909,
            "end": 1915
          }
        ],
        "optional": false,
        "start": 1901,
        "end": 1916
      },
      "directive": null,
      "start": 1901,
      "end": 1917
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1918,
          "end": 1925
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E21",
            "raw": "\"1E21\"",
            "start": 1926,
            "end": 1932
          }
        ],
        "optional": false,
        "start": 1918,
        "end": 1933
      },
      "directive": null,
      "start": 1918,
      "end": 1934
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1935,
          "end": 1942
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e-21",
            "raw": "\"1e-21\"",
            "start": 1943,
            "end": 1950
          }
        ],
        "optional": false,
        "start": 1935,
        "end": 1951
      },
      "directive": null,
      "start": 1935,
      "end": 1952
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 1953,
          "end": 1960
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E-21",
            "raw": "\"1E-21\"",
            "start": 1961,
            "end": 1968
          }
        ],
        "optional": false,
        "start": 1953,
        "end": 1969
      },
      "directive": null,
      "start": 1953,
      "end": 1970
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2026,
          "end": 2033
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.0",
            "raw": "\"1.0\"",
            "start": 2034,
            "end": 2039
          }
        ],
        "optional": false,
        "start": 2026,
        "end": 2040
      },
      "directive": null,
      "start": 2026,
      "end": 2041
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2042,
          "end": 2049
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1",
            "raw": "\"1.1\"",
            "start": 2050,
            "end": 2055
          }
        ],
        "optional": false,
        "start": 2042,
        "end": 2056
      },
      "directive": null,
      "start": 2042,
      "end": 2057
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2058,
          "end": 2065
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1",
            "raw": "\"-1.1\"",
            "start": 2066,
            "end": 2072
          }
        ],
        "optional": false,
        "start": 2058,
        "end": 2073
      },
      "directive": null,
      "start": 2058,
      "end": 2074
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2075,
          "end": 2082
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1e-10",
            "raw": "\"-1.1e-10\"",
            "start": 2083,
            "end": 2093
          }
        ],
        "optional": false,
        "start": 2075,
        "end": 2094
      },
      "directive": null,
      "start": 2075,
      "end": 2095
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2096,
          "end": 2103
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1E-10",
            "raw": "\"-1.1E-10\"",
            "start": 2104,
            "end": 2114
          }
        ],
        "optional": false,
        "start": 2096,
        "end": 2115
      },
      "directive": null,
      "start": 2096,
      "end": 2116
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2117,
          "end": 2124
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1e-10",
            "raw": "\"1.1e-10\"",
            "start": 2125,
            "end": 2134
          }
        ],
        "optional": false,
        "start": 2117,
        "end": 2135
      },
      "directive": null,
      "start": 2117,
      "end": 2136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2198,
          "end": 2205
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "?",
            "raw": "\"?\"",
            "start": 2206,
            "end": 2209
          }
        ],
        "optional": false,
        "start": 2198,
        "end": 2210
      },
      "directive": null,
      "start": 2198,
      "end": 2211
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2212,
          "end": 2219
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "NaN",
            "raw": "\"NaN\"",
            "start": 2220,
            "end": 2225
          }
        ],
        "optional": false,
        "start": 2212,
        "end": 2226
      },
      "directive": null,
      "start": 2212,
      "end": 2227
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2228,
          "end": 2235
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "Infinity",
            "raw": "\"Infinity\"",
            "start": 2236,
            "end": 2246
          }
        ],
        "optional": false,
        "start": 2228,
        "end": 2247
      },
      "directive": null,
      "start": 2228,
      "end": 2248
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2249,
          "end": 2256
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "+Infinity",
            "raw": "\"+Infinity\"",
            "start": 2257,
            "end": 2268
          }
        ],
        "optional": false,
        "start": 2249,
        "end": 2269
      },
      "directive": null,
      "start": 2249,
      "end": 2270
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2271,
          "end": 2278
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-Infinity",
            "raw": "\"-Infinity\"",
            "start": 2279,
            "end": 2290
          }
        ],
        "optional": false,
        "start": 2271,
        "end": 2291
      },
      "directive": null,
      "start": 2271,
      "end": 2292
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2293,
          "end": 2300
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1_000",
            "raw": "\"1_000\"",
            "start": 2301,
            "end": 2308
          }
        ],
        "optional": false,
        "start": 2293,
        "end": 2309
      },
      "directive": null,
      "start": 2293,
      "end": 2310
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2362,
          "end": 2369
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "- 1",
            "raw": "\"- 1\"",
            "start": 2370,
            "end": 2375
          }
        ],
        "optional": false,
        "start": 2362,
        "end": 2376
      },
      "directive": null,
      "start": 2362,
      "end": 2377
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2378,
          "end": 2385
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-/**/1",
            "raw": "\"-/**/1\"",
            "start": 2386,
            "end": 2394
          }
        ],
        "optional": false,
        "start": 2378,
        "end": 2395
      },
      "directive": null,
      "start": 2378,
      "end": 2396
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2467,
          "end": 2474
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "a10n",
            "raw": "\"a10n\"",
            "start": 2475,
            "end": 2481
          }
        ],
        "optional": false,
        "start": 2467,
        "end": 2482
      },
      "directive": null,
      "start": 2467,
      "end": 2483
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2484,
          "end": 2491
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "10an",
            "raw": "\"10an\"",
            "start": 2492,
            "end": 2498
          }
        ],
        "optional": false,
        "start": 2484,
        "end": 2499
      },
      "directive": null,
      "start": 2484,
      "end": 2500
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2646,
          "end": 2653
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1n",
            "raw": "\"1n\"",
            "start": 2654,
            "end": 2658
          }
        ],
        "optional": false,
        "start": 2646,
        "end": 2659
      },
      "directive": null,
      "start": 2646,
      "end": 2660
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2661,
          "end": 2668
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1n",
            "raw": "\"-1n\"",
            "start": 2669,
            "end": 2674
          }
        ],
        "optional": false,
        "start": 2661,
        "end": 2675
      },
      "directive": null,
      "start": 2661,
      "end": 2676
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2677,
          "end": 2684
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0n",
            "raw": "\"0n\"",
            "start": 2685,
            "end": 2689
          }
        ],
        "optional": false,
        "start": 2677,
        "end": 2690
      },
      "directive": null,
      "start": 2677,
      "end": 2691
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2692,
          "end": 2699
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0b1n",
            "raw": "\"0b1n\"",
            "start": 2700,
            "end": 2706
          }
        ],
        "optional": false,
        "start": 2692,
        "end": 2707
      },
      "directive": null,
      "start": 2692,
      "end": 2708
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2709,
          "end": 2716
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0x1n",
            "raw": "\"0x1n\"",
            "start": 2717,
            "end": 2723
          }
        ],
        "optional": false,
        "start": 2709,
        "end": 2724
      },
      "directive": null,
      "start": 2709,
      "end": 2725
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2726,
          "end": 2733
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "0o1n",
            "raw": "\"0o1n\"",
            "start": 2734,
            "end": 2740
          }
        ],
        "optional": false,
        "start": 2726,
        "end": 2741
      },
      "directive": null,
      "start": 2726,
      "end": 2742
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2743,
          "end": 2750
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e21n",
            "raw": "\"1e21n\"",
            "start": 2751,
            "end": 2758
          }
        ],
        "optional": false,
        "start": 2743,
        "end": 2759
      },
      "directive": null,
      "start": 2743,
      "end": 2760
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2761,
          "end": 2768
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E21n",
            "raw": "\"1E21n\"",
            "start": 2769,
            "end": 2776
          }
        ],
        "optional": false,
        "start": 2761,
        "end": 2777
      },
      "directive": null,
      "start": 2761,
      "end": 2778
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2779,
          "end": 2786
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1e-21n",
            "raw": "\"1e-21n\"",
            "start": 2787,
            "end": 2795
          }
        ],
        "optional": false,
        "start": 2779,
        "end": 2796
      },
      "directive": null,
      "start": 2779,
      "end": 2797
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2798,
          "end": 2805
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1E-21n",
            "raw": "\"1E-21n\"",
            "start": 2806,
            "end": 2814
          }
        ],
        "optional": false,
        "start": 2798,
        "end": 2815
      },
      "directive": null,
      "start": 2798,
      "end": 2816
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2817,
          "end": 2824
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1n",
            "raw": "\"1.1n\"",
            "start": 2825,
            "end": 2831
          }
        ],
        "optional": false,
        "start": 2817,
        "end": 2832
      },
      "directive": null,
      "start": 2817,
      "end": 2833
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2834,
          "end": 2841
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1n",
            "raw": "\"-1.1n\"",
            "start": 2842,
            "end": 2849
          }
        ],
        "optional": false,
        "start": 2834,
        "end": 2850
      },
      "directive": null,
      "start": 2834,
      "end": 2851
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2852,
          "end": 2859
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1e-10n",
            "raw": "\"-1.1e-10n\"",
            "start": 2860,
            "end": 2871
          }
        ],
        "optional": false,
        "start": 2852,
        "end": 2872
      },
      "directive": null,
      "start": 2852,
      "end": 2873
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2874,
          "end": 2881
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "-1.1E-10n",
            "raw": "\"-1.1E-10n\"",
            "start": 2882,
            "end": 2893
          }
        ],
        "optional": false,
        "start": 2874,
        "end": 2894
      },
      "directive": null,
      "start": 2874,
      "end": 2895
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "bigints",
          "optional": false,
          "typeAnnotation": null,
          "start": 2896,
          "end": 2903
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "1.1e-10n",
            "raw": "\"1.1e-10n\"",
            "start": 2904,
            "end": 2914
          }
        ],
        "optional": false,
        "start": 2896,
        "end": 2915
      },
      "directive": null,
      "start": 2896,
      "end": 2916
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AStr",
        "optional": false,
        "typeAnnotation": null,
        "start": 2923,
        "end": 2927
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "a",
              "cooked": "a"
            },
            "tail": false,
            "start": 2930,
            "end": 2934
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 2940,
            "end": 2942
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 2934,
            "end": 2940
          }
        ],
        "start": 2930,
        "end": 2942
      },
      "declare": false,
      "start": 2918,
      "end": 2943
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ANum",
        "optional": false,
        "typeAnnotation": null,
        "start": 2949,
        "end": 2953
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "a",
              "cooked": "a"
            },
            "tail": false,
            "start": 2956,
            "end": 2960
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 2966,
            "end": 2968
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 2960,
            "end": 2966
          }
        ],
        "start": 2956,
        "end": 2968
      },
      "declare": false,
      "start": 2944,
      "end": 2969
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AAny",
        "optional": false,
        "typeAnnotation": null,
        "start": 2975,
        "end": 2979
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "a",
              "cooked": "a"
            },
            "tail": false,
            "start": 2982,
            "end": 2986
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 2989,
            "end": 2991
          }
        ],
        "types": [
          {
            "type": "TSAnyKeyword",
            "start": 2986,
            "end": 2989
          }
        ],
        "start": 2982,
        "end": 2991
      },
      "declare": false,
      "start": 2970,
      "end": 2992
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "str",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AStr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3011,
                  "end": 3015
                },
                "typeArguments": null,
                "start": 3011,
                "end": 3015
              },
              "start": 3009,
              "end": 3015
            },
            "start": 3006,
            "end": 3015
          },
          "init": null,
          "definite": false,
          "start": 3006,
          "end": 3015
        }
      ],
      "declare": true,
      "start": 2994,
      "end": 3016
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ANum",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3034,
                  "end": 3038
                },
                "typeArguments": null,
                "start": 3034,
                "end": 3038
              },
              "start": 3032,
              "end": 3038
            },
            "start": 3029,
            "end": 3038
          },
          "init": null,
          "definite": false,
          "start": 3029,
          "end": 3038
        }
      ],
      "declare": true,
      "start": 3017,
      "end": 3039
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyish",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AAny",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3060,
                  "end": 3064
                },
                "typeArguments": null,
                "start": 3060,
                "end": 3064
              },
              "start": 3058,
              "end": 3064
            },
            "start": 3052,
            "end": 3064
          },
          "init": null,
          "definite": false,
          "start": 3052,
          "end": 3064
        }
      ],
      "declare": true,
      "start": 3040,
      "end": 3065
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 3077,
          "end": 3080
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3083,
          "end": 3086
        },
        "start": 3077,
        "end": 3086
      },
      "directive": null,
      "start": 3077,
      "end": 3087
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3088,
          "end": 3094
        },
        "right": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "bno",
                "cooked": "bno"
              },
              "tail": true,
              "start": 3097,
              "end": 3102
            }
          ],
          "expressions": [],
          "start": 3097,
          "end": 3102
        },
        "start": 3088,
        "end": 3102
      },
      "directive": null,
      "start": 3088,
      "end": 3102
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3110,
          "end": 3113
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 3116,
          "end": 3119
        },
        "start": 3110,
        "end": 3119
      },
      "directive": null,
      "start": 3110,
      "end": 3120
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3121,
          "end": 3127
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3130,
          "end": 3133
        },
        "start": 3121,
        "end": 3133
      },
      "directive": null,
      "start": 3121,
      "end": 3134
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": null,
          "start": 3135,
          "end": 3138
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3141,
          "end": 3147
        },
        "start": 3135,
        "end": 3147
      },
      "directive": null,
      "start": 3135,
      "end": 3148
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3149,
          "end": 3155
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 3158,
          "end": 3161
        },
        "start": 3149,
        "end": 3161
      },
      "directive": null,
      "start": 3149,
      "end": 3162
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "num",
          "optional": false,
          "typeAnnotation": null,
          "start": 3163,
          "end": 3166
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3169,
          "end": 3175
        },
        "start": 3163,
        "end": 3175
      },
      "directive": null,
      "start": 3163,
      "end": 3176
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "anyish",
          "optional": false,
          "typeAnnotation": null,
          "start": 3177,
          "end": 3183
        },
        "right": {
          "type": "TemplateLiteral",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "aok",
                "cooked": "aok"
              },
              "tail": true,
              "start": 3186,
              "end": 3191
            }
          ],
          "expressions": [],
          "start": 3186,
          "end": 3191
        },
        "start": 3177,
        "end": 3191
      },
      "directive": null,
      "start": 3177,
      "end": 3191
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AGen",
        "optional": false,
        "typeAnnotation": null,
        "start": 3258,
        "end": 3262
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 3263,
              "end": 3264
            },
            "constraint": {
              "type": "TSUnionType",
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
              ],
              "start": 3273,
              "end": 3288
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3263,
            "end": 3288
          }
        ],
        "start": 3262,
        "end": 3289
      },
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "field",
              "optional": false,
              "typeAnnotation": null,
              "start": 3293,
              "end": 3298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "a",
                      "cooked": "a"
                    },
                    "tail": false,
                    "start": 3300,
                    "end": 3304
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 3305,
                    "end": 3307
                  }
                ],
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3304,
                      "end": 3305
                    },
                    "typeArguments": null,
                    "start": 3304,
                    "end": 3305
                  }
                ],
                "start": 3300,
                "end": 3307
              },
              "start": 3298,
              "end": 3307
            },
            "accessibility": null,
            "static": false,
            "start": 3293,
            "end": 3307
          }
        ],
        "start": 3292,
        "end": 3308
      },
      "declare": false,
      "start": 3253,
      "end": 3309
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldWork1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AGen",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3329,
                  "end": 3333
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3334,
                      "end": 3340
                    }
                  ],
                  "start": 3333,
                  "end": 3341
                },
                "start": 3329,
                "end": 3341
              },
              "start": 3327,
              "end": 3341
            },
            "start": 3316,
            "end": 3341
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3344,
                "end": 3348
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3352,
                "end": 3355
              },
              "start": 3344,
              "end": 3355
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AGen",
                "optional": false,
                "typeAnnotation": null,
                "start": 3359,
                "end": 3363
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "yes",
                      "raw": "\"yes\"",
                      "start": 3364,
                      "end": 3369
                    },
                    "start": 3364,
                    "end": 3369
                  }
                ],
                "start": 3363,
                "end": 3370
              },
              "start": 3359,
              "end": 3370
            },
            "start": 3344,
            "end": 3370
          },
          "definite": false,
          "start": 3316,
          "end": 3370
        }
      ],
      "declare": false,
      "start": 3310,
      "end": 3371
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "shouldWork2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AGen",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3391,
                  "end": 3395
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 3396,
                      "end": 3402
                    }
                  ],
                  "start": 3395,
                  "end": 3403
                },
                "start": 3391,
                "end": 3403
              },
              "start": 3389,
              "end": 3403
            },
            "start": 3378,
            "end": 3403
          },
          "init": {
            "type": "TSAsExpression",
            "expression": {
              "type": "TSAsExpression",
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3406,
                "end": 3410
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3414,
                "end": 3417
              },
              "start": 3406,
              "end": 3417
            },
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AGen",
                "optional": false,
                "typeAnnotation": null,
                "start": 3421,
                "end": 3425
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 3426,
                    "end": 3432
                  }
                ],
                "start": 3425,
                "end": 3433
              },
              "start": 3421,
              "end": 3433
            },
            "start": 3406,
            "end": 3433
          },
          "definite": false,
          "start": 3378,
          "end": 3433
        }
      ],
      "declare": false,
      "start": 3372,
      "end": 3434
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 3480,
        "end": 3481
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 3484,
            "end": 3487
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 3493,
            "end": 3495
          }
        ],
        "types": [
          {
            "type": "TSNumberKeyword",
            "start": 3487,
            "end": 3493
          }
        ],
        "start": 3484,
        "end": 3495
      },
      "declare": false,
      "start": 3475,
      "end": 3496
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 3502,
        "end": 3503
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 3506,
            "end": 3509
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " ",
              "cooked": " "
            },
            "tail": false,
            "start": 3510,
            "end": 3514
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 3515,
            "end": 3517
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 3509,
              "end": 3510
            },
            "typeArguments": null,
            "start": 3509,
            "end": 3510
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 3514,
              "end": 3515
            },
            "typeArguments": null,
            "start": 3514,
            "end": 3515
          }
        ],
        "start": 3506,
        "end": 3517
      },
      "declare": false,
      "start": 3497,
      "end": 3518
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "exampleBad",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3537,
                  "end": 3538
                },
                "typeArguments": null,
                "start": 3537,
                "end": 3538
              },
              "start": 3535,
              "end": 3538
            },
            "start": 3525,
            "end": 3538
          },
          "init": {
            "type": "Literal",
            "value": "anything",
            "raw": "\"anything\"",
            "start": 3541,
            "end": 3551
          },
          "definite": false,
          "start": 3525,
          "end": 3551
        }
      ],
      "declare": false,
      "start": 3519,
      "end": 3552
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "exampleGood",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3581,
                  "end": 3582
                },
                "typeArguments": null,
                "start": 3581,
                "end": 3582
              },
              "start": 3579,
              "end": 3582
            },
            "start": 3568,
            "end": 3582
          },
          "init": {
            "type": "Literal",
            "value": "1 2",
            "raw": "\"1 2\"",
            "start": 3585,
            "end": 3590
          },
          "definite": false,
          "start": 3568,
          "end": 3590
        }
      ],
      "declare": false,
      "start": 3562,
      "end": 3591
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "0",
                  "raw": "'0'",
                  "start": 3629,
                  "end": 3632
                },
                "start": 3629,
                "end": 3632
              },
              "start": 3627,
              "end": 3632
            },
            "start": 3625,
            "end": 3632
          },
          "init": null,
          "definite": false,
          "start": 3625,
          "end": 3632
        }
      ],
      "declare": false,
      "start": 3621,
      "end": 3633
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "aa",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "0",
                      "raw": "'0'",
                      "start": 3642,
                      "end": 3645
                    },
                    "start": 3642,
                    "end": 3645
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 3648,
                        "end": 3651
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 3657,
                        "end": 3659
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 3651,
                        "end": 3657
                      }
                    ],
                    "start": 3648,
                    "end": 3659
                  }
                ],
                "start": 3642,
                "end": 3659
              },
              "start": 3640,
              "end": 3659
            },
            "start": 3638,
            "end": 3659
          },
          "init": null,
          "definite": false,
          "start": 3638,
          "end": 3659
        }
      ],
      "declare": false,
      "start": 3634,
      "end": 3660
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 3741,
                        "end": 3747
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 3753,
                        "end": 3755
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3747,
                        "end": 3753
                      }
                    ],
                    "start": 3741,
                    "end": 3755
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foo1",
                      "raw": "'foo1'",
                      "start": 3758,
                      "end": 3764
                    },
                    "start": 3758,
                    "end": 3764
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "1foo",
                      "raw": "'1foo'",
                      "start": 3767,
                      "end": 3773
                    },
                    "start": 3767,
                    "end": 3773
                  }
                ],
                "start": 3741,
                "end": 3773
              },
              "start": 3739,
              "end": 3773
            },
            "start": 3737,
            "end": 3773
          },
          "init": null,
          "definite": false,
          "start": 3737,
          "end": 3773
        }
      ],
      "declare": false,
      "start": 3733,
      "end": 3774
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "foo1",
                            "cooked": "foo1"
                          },
                          "tail": true,
                          "start": 3811,
                          "end": 3817
                        }
                      ],
                      "expressions": [],
                      "start": 3811,
                      "end": 3817
                    },
                    "start": 3811,
                    "end": 3817
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "1foo",
                      "raw": "'1foo'",
                      "start": 3820,
                      "end": 3826
                    },
                    "start": 3820,
                    "end": 3826
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foofoo",
                      "raw": "'foofoo'",
                      "start": 3829,
                      "end": 3837
                    },
                    "start": 3829,
                    "end": 3837
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 3840,
                        "end": 3846
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 3852,
                        "end": 3854
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3846,
                        "end": 3852
                      }
                    ],
                    "start": 3840,
                    "end": 3854
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foox",
                      "raw": "'foox'",
                      "start": 3857,
                      "end": 3863
                    },
                    "start": 3857,
                    "end": 3863
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "xfoo",
                      "raw": "'xfoo'",
                      "start": 3866,
                      "end": 3872
                    },
                    "start": 3866,
                    "end": 3872
                  }
                ],
                "start": 3811,
                "end": 3872
              },
              "start": 3809,
              "end": 3872
            },
            "start": 3807,
            "end": 3872
          },
          "init": null,
          "definite": false,
          "start": 3807,
          "end": 3872
        }
      ],
      "declare": false,
      "start": 3803,
      "end": 3873
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "foo1",
                            "cooked": "foo1"
                          },
                          "tail": true,
                          "start": 3919,
                          "end": 3925
                        }
                      ],
                      "expressions": [],
                      "start": 3919,
                      "end": 3925
                    },
                    "start": 3919,
                    "end": 3925
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "1foo",
                      "raw": "'1foo'",
                      "start": 3928,
                      "end": 3934
                    },
                    "start": 3928,
                    "end": 3934
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foofoo",
                      "raw": "'foofoo'",
                      "start": 3937,
                      "end": 3945
                    },
                    "start": 3937,
                    "end": 3945
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": false,
                        "start": 3948,
                        "end": 3954
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 3960,
                        "end": 3962
                      }
                    ],
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 3954,
                        "end": 3960
                      }
                    ],
                    "start": 3948,
                    "end": 3962
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "foox",
                      "raw": "'foox'",
                      "start": 3965,
                      "end": 3971
                    },
                    "start": 3965,
                    "end": 3971
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "xfoo",
                      "raw": "'xfoo'",
                      "start": 3974,
                      "end": 3980
                    },
                    "start": 3974,
                    "end": 3980
                  },
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 3983,
                        "end": 3986
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "foo",
                          "cooked": "foo"
                        },
                        "tail": true,
                        "start": 3992,
                        "end": 3997
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 3986,
                        "end": 3992
                      }
                    ],
                    "start": 3983,
                    "end": 3997
                  }
                ],
                "start": 3919,
                "end": 3997
              },
              "start": 3917,
              "end": 3997
            },
            "start": 3915,
            "end": 3997
          },
          "init": null,
          "definite": false,
          "start": 3915,
          "end": 3997
        }
      ],
      "declare": false,
      "start": 3911,
      "end": 3998
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTemplateLiteralType",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": false,
                    "start": 4052,
                    "end": 4055
                  },
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 4061,
                    "end": 4063
                  }
                ],
                "types": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 4055,
                    "end": 4061
                  }
                ],
                "start": 4052,
                "end": 4063
              },
              "start": 4050,
              "end": 4063
            },
            "start": 4048,
            "end": 4063
          },
          "init": null,
          "definite": false,
          "start": 4048,
          "end": 4063
        }
      ],
      "declare": false,
      "start": 4044,
      "end": 4064
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "bb",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTemplateLiteralType",
                    "quasis": [
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": false,
                        "start": 4073,
                        "end": 4076
                      },
                      {
                        "type": "TemplateElement",
                        "value": {
                          "raw": "",
                          "cooked": ""
                        },
                        "tail": true,
                        "start": 4082,
                        "end": 4084
                      }
                    ],
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 4076,
                        "end": 4082
                      }
                    ],
                    "start": 4073,
                    "end": 4084
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "0",
                      "raw": "'0'",
                      "start": 4087,
                      "end": 4090
                    },
                    "start": 4087,
                    "end": 4090
                  }
                ],
                "start": 4073,
                "end": 4090
              },
              "start": 4071,
              "end": 4090
            },
            "start": 4069,
            "end": 4090
          },
          "init": null,
          "definite": false,
          "start": 4069,
          "end": 4090
        }
      ],
      "declare": false,
      "start": 4065,
      "end": 4091
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "T2S",
        "optional": false,
        "typeAnnotation": null,
        "start": 4139,
        "end": 4142
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4143,
              "end": 4144
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4153,
              "end": 4159
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4143,
            "end": 4159
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 4161,
              "end": 4162
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 4171,
              "end": 4177
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 4161,
            "end": 4177
          }
        ],
        "start": 4142,
        "end": 4178
      },
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 4181,
            "end": 4184
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 4185,
            "end": 4188
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 4189,
            "end": 4191
          }
        ],
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 4184,
              "end": 4185
            },
            "typeArguments": null,
            "start": 4184,
            "end": 4185
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 4188,
              "end": 4189
            },
            "typeArguments": null,
            "start": 4188,
            "end": 4189
          }
        ],
        "start": 4181,
        "end": 4191
      },
      "declare": false,
      "start": 4134,
      "end": 4192
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S10",
        "optional": false,
        "typeAnnotation": null,
        "start": 4199,
        "end": 4202
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 4205,
            "end": 4208
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 4214,
            "end": 4216
          }
        ],
        "types": [
          {
            "type": "TSStringKeyword",
            "start": 4208,
            "end": 4214
          }
        ],
        "start": 4205,
        "end": 4216
      },
      "declare": false,
      "start": 4194,
      "end": 4217
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S11",
        "optional": false,
        "typeAnnotation": null,
        "start": 4234,
        "end": 4237
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTemplateLiteralType",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 4240,
            "end": 4243
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 4249,
            "end": 4252
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 4258,
            "end": 4261
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 4267,
            "end": 4269
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
        ],
        "start": 4240,
        "end": 4269
      },
      "declare": false,
      "start": 4229,
      "end": 4270
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "S12",
        "optional": false,
        "typeAnnotation": null,
        "start": 4287,
        "end": 4290
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "typeName": {
          "type": "Identifier",
          "decorators": [],
          "name": "T2S",
          "optional": false,
          "typeAnnotation": null,
          "start": 4293,
          "end": 4296
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
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
          ],
          "start": 4296,
          "end": 4312
        },
        "start": 4293,
        "end": 4312
      },
      "declare": false,
      "start": 4282,
      "end": 4313
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ff1",
        "optional": false,
        "typeAnnotation": null,
        "start": 4335,
        "end": 4338
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 4342,
                  "end": 4345
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "-",
                    "cooked": "-"
                  },
                  "tail": false,
                  "start": 4351,
                  "end": 4355
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": true,
                  "start": 4361,
                  "end": 4363
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
              ],
              "start": 4342,
              "end": 4363
            },
            "start": 4340,
            "end": 4363
          },
          "start": 4339,
          "end": 4363
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4375,
                  "end": 4377
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4380,
                    "end": 4381
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 4385,
                    "end": 4387
                  },
                  "start": 4380,
                  "end": 4387
                },
                "definite": false,
                "start": 4375,
                "end": 4387
              }
            ],
            "declare": false,
            "start": 4371,
            "end": 4388
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "s2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4408,
                  "end": 4410
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4413,
                    "end": 4414
                  },
                  "operator": "||",
                  "right": {
                    "type": "Literal",
                    "value": 42,
                    "raw": "42",
                    "start": 4418,
                    "end": 4420
                  },
                  "start": 4413,
                  "end": 4420
                },
                "definite": false,
                "start": 4408,
                "end": 4420
              }
            ],
            "declare": false,
            "start": 4404,
            "end": 4421
          }
        ],
        "start": 4365,
        "end": 4449
      },
      "expression": false,
      "start": 4326,
      "end": 4449
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Id",
          "optional": false,
          "typeAnnotation": null,
          "start": 4485,
          "end": 4487
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TA",
                "optional": false,
                "typeAnnotation": null,
                "start": 4488,
                "end": 4490
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 4488,
              "end": 4490
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "TId",
                "optional": false,
                "typeAnnotation": null,
                "start": 4492,
                "end": 4495
              },
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
              "out": false,
              "const": false,
              "start": 4492,
              "end": 4519
            }
          ],
          "start": 4487,
          "end": 4520
        },
        "typeAnnotation": {
          "type": "TSTemplateLiteralType",
          "quasis": [
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": false,
              "start": 4523,
              "end": 4526
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "-",
                "cooked": "-"
              },
              "tail": false,
              "start": 4529,
              "end": 4533
            },
            {
              "type": "TemplateElement",
              "value": {
                "raw": "",
                "cooked": ""
              },
              "tail": true,
              "start": 4536,
              "end": 4538
            }
          ],
          "types": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TId",
                "optional": false,
                "typeAnnotation": null,
                "start": 4526,
                "end": 4529
              },
              "typeArguments": null,
              "start": 4526,
              "end": 4529
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "TId",
                "optional": false,
                "typeAnnotation": null,
                "start": 4533,
                "end": 4536
              },
              "typeArguments": null,
              "start": 4533,
              "end": 4536
            }
          ],
          "start": 4523,
          "end": 4538
        },
        "declare": false,
        "start": 4480,
        "end": 4539
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 4473,
      "end": 4539
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "AA",
          "optional": false,
          "typeAnnotation": null,
          "start": 4554,
          "end": 4556
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [],
          "start": 4557,
          "end": 4559
        },
        "abstract": false,
        "declare": false,
        "start": 4548,
        "end": 4559
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4541,
      "end": 4559
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "BB",
          "optional": false,
          "typeAnnotation": null,
          "start": 4583,
          "end": 4585
        },
        "typeParameters": null,
        "superClass": null,
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "TSAbstractMethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "get",
                "optional": false,
                "typeAnnotation": null,
                "start": 4601,
                "end": 4604
              },
              "value": {
                "type": "TSEmptyBodyFunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4609,
                          "end": 4611
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AA",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4612,
                                "end": 4614
                              },
                              "typeArguments": null,
                              "start": 4612,
                              "end": 4614
                            }
                          ],
                          "start": 4611,
                          "end": 4615
                        },
                        "start": 4609,
                        "end": 4615
                      },
                      "start": 4607,
                      "end": 4615
                    },
                    "start": 4605,
                    "end": 4615
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4618,
                    "end": 4622
                  },
                  "start": 4616,
                  "end": 4622
                },
                "body": null,
                "expression": false,
                "start": 4604,
                "end": 4623
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4592,
              "end": 4623
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "update",
                "optional": false,
                "typeAnnotation": null,
                "start": 4628,
                "end": 4634
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
                "generator": false,
                "async": false,
                "declare": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "id",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Id",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4639,
                          "end": 4641
                        },
                        "typeArguments": {
                          "type": "TSTypeParameterInstantiation",
                          "params": [
                            {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "AA",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4642,
                                "end": 4644
                              },
                              "typeArguments": null,
                              "start": 4642,
                              "end": 4644
                            }
                          ],
                          "start": 4641,
                          "end": 4645
                        },
                        "start": 4639,
                        "end": 4645
                      },
                      "start": 4637,
                      "end": 4645
                    },
                    "start": 4635,
                    "end": 4645
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4648,
                    "end": 4652
                  },
                  "start": 4646,
                  "end": 4652
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "CallExpression",
                        "callee": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "ThisExpression",
                            "start": 4663,
                            "end": 4667
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "get",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4668,
                            "end": 4671
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4663,
                          "end": 4671
                        },
                        "typeArguments": null,
                        "arguments": [
                          {
                            "type": "TSNonNullExpression",
                            "expression": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "id",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4672,
                              "end": 4674
                            },
                            "start": 4672,
                            "end": 4675
                          }
                        ],
                        "optional": false,
                        "start": 4663,
                        "end": 4676
                      },
                      "directive": null,
                      "start": 4663,
                      "end": 4677
                    }
                  ],
                  "start": 4653,
                  "end": 4683
                },
                "expression": false,
                "start": 4634,
                "end": 4683
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 4628,
              "end": 4683
            }
          ],
          "start": 4586,
          "end": 4685
        },
        "abstract": true,
        "declare": false,
        "start": 4568,
        "end": 4685
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 4561,
      "end": 4685
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest",
        "optional": false,
        "typeAnnotation": null,
        "start": 4787,
        "end": 4801
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "downcast",
                    "raw": "\"downcast\"",
                    "start": 4815,
                    "end": 4825
                  },
                  "start": 4815,
                  "end": 4825
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "dataDowncast",
                    "raw": "\"dataDowncast\"",
                    "start": 4828,
                    "end": 4842
                  },
                  "start": 4828,
                  "end": 4842
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "editingDowncast",
                    "raw": "\"editingDowncast\"",
                    "start": 4845,
                    "end": 4862
                  },
                  "start": 4845,
                  "end": 4862
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 4865,
                          "end": 4868
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "Downcast",
                            "cooked": "Downcast"
                          },
                          "tail": true,
                          "start": 4874,
                          "end": 4884
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 4868,
                          "end": 4874
                        }
                      ],
                      "start": 4865,
                      "end": 4884
                    },
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 4887,
                      "end": 4889
                    }
                  ],
                  "start": 4865,
                  "end": 4889
                }
              ],
              "start": 4813,
              "end": 4889
            },
            "start": 4811,
            "end": 4889
          },
          "start": 4802,
          "end": 4889
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 4891,
        "end": 4893
      },
      "expression": false,
      "start": 4778,
      "end": 4893
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest",
          "optional": false,
          "typeAnnotation": null,
          "start": 4894,
          "end": 4908
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "testDowncast",
            "raw": "\"testDowncast\"",
            "start": 4909,
            "end": 4923
          }
        ],
        "optional": false,
        "start": 4894,
        "end": 4924
      },
      "directive": null,
      "start": 4894,
      "end": 4925
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest2",
        "optional": false,
        "typeAnnotation": null,
        "start": 4935,
        "end": 4950
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "downcast",
                    "raw": "\"downcast\"",
                    "start": 4964,
                    "end": 4974
                  },
                  "start": 4964,
                  "end": 4974
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "dataDowncast",
                    "raw": "\"dataDowncast\"",
                    "start": 4977,
                    "end": 4991
                  },
                  "start": 4977,
                  "end": 4991
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "editingDowncast",
                    "raw": "\"editingDowncast\"",
                    "start": 4994,
                    "end": 5011
                  },
                  "start": 4994,
                  "end": 5011
                },
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [],
                      "start": 5014,
                      "end": 5016
                    },
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 5019,
                          "end": 5022
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "Downcast",
                            "cooked": "Downcast"
                          },
                          "tail": true,
                          "start": 5028,
                          "end": 5038
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5022,
                          "end": 5028
                        }
                      ],
                      "start": 5019,
                      "end": 5038
                    }
                  ],
                  "start": 5014,
                  "end": 5038
                }
              ],
              "start": 4962,
              "end": 5038
            },
            "start": 4960,
            "end": 5038
          },
          "start": 4951,
          "end": 5038
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 5040,
        "end": 5042
      },
      "expression": false,
      "start": 4926,
      "end": 5042
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest2",
          "optional": false,
          "typeAnnotation": null,
          "start": 5043,
          "end": 5058
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "testDowncast",
            "raw": "\"testDowncast\"",
            "start": 5059,
            "end": 5073
          }
        ],
        "optional": false,
        "start": 5043,
        "end": 5074
      },
      "directive": null,
      "start": 5043,
      "end": 5075
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest3",
        "optional": false,
        "typeAnnotation": null,
        "start": 5085,
        "end": 5100
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "downcast",
                    "raw": "\"downcast\"",
                    "start": 5114,
                    "end": 5124
                  },
                  "start": 5114,
                  "end": 5124
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "dataDowncast",
                    "raw": "\"dataDowncast\"",
                    "start": 5127,
                    "end": 5141
                  },
                  "start": 5127,
                  "end": 5141
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "editingDowncast",
                    "raw": "\"editingDowncast\"",
                    "start": 5144,
                    "end": 5161
                  },
                  "start": 5144,
                  "end": 5161
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 5164,
                      "end": 5167
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "Downcast",
                        "cooked": "Downcast"
                      },
                      "tail": true,
                      "start": 5178,
                      "end": 5188
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5167,
                          "end": 5173
                        },
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 5176,
                          "end": 5178
                        }
                      ],
                      "start": 5167,
                      "end": 5178
                    }
                  ],
                  "start": 5164,
                  "end": 5188
                }
              ],
              "start": 5112,
              "end": 5188
            },
            "start": 5110,
            "end": 5188
          },
          "start": 5101,
          "end": 5188
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 5190,
        "end": 5192
      },
      "expression": false,
      "start": 5076,
      "end": 5192
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest3",
          "optional": false,
          "typeAnnotation": null,
          "start": 5193,
          "end": 5208
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "testDowncast",
            "raw": "\"testDowncast\"",
            "start": 5209,
            "end": 5223
          }
        ],
        "optional": false,
        "start": 5193,
        "end": 5224
      },
      "directive": null,
      "start": 5193,
      "end": 5225
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "conversionTest4",
        "optional": false,
        "typeAnnotation": null,
        "start": 5235,
        "end": 5250
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "groupName",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "downcast",
                    "raw": "\"downcast\"",
                    "start": 5264,
                    "end": 5274
                  },
                  "start": 5264,
                  "end": 5274
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "dataDowncast",
                    "raw": "\"dataDowncast\"",
                    "start": 5277,
                    "end": 5291
                  },
                  "start": 5277,
                  "end": 5291
                },
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "editingDowncast",
                    "raw": "\"editingDowncast\"",
                    "start": 5294,
                    "end": 5311
                  },
                  "start": 5294,
                  "end": 5311
                },
                {
                  "type": "TSTemplateLiteralType",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 5314,
                      "end": 5317
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "Downcast",
                        "cooked": "Downcast"
                      },
                      "tail": true,
                      "start": 5328,
                      "end": 5338
                    }
                  ],
                  "types": [
                    {
                      "type": "TSIntersectionType",
                      "types": [
                        {
                          "type": "TSTypeLiteral",
                          "members": [],
                          "start": 5317,
                          "end": 5319
                        },
                        {
                          "type": "TSStringKeyword",
                          "start": 5322,
                          "end": 5328
                        }
                      ],
                      "start": 5317,
                      "end": 5328
                    }
                  ],
                  "start": 5314,
                  "end": 5338
                }
              ],
              "start": 5262,
              "end": 5338
            },
            "start": 5260,
            "end": 5338
          },
          "start": 5251,
          "end": 5338
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 5340,
        "end": 5342
      },
      "expression": false,
      "start": 5226,
      "end": 5342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "conversionTest4",
          "optional": false,
          "typeAnnotation": null,
          "start": 5343,
          "end": 5358
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "testDowncast",
            "raw": "\"testDowncast\"",
            "start": 5359,
            "end": 5373
          }
        ],
        "optional": false,
        "start": 5343,
        "end": 5374
      },
      "directive": null,
      "start": 5343,
      "end": 5375
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 5386,
        "end": 5389
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "str",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTemplateLiteralType",
              "quasis": [
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "",
                    "cooked": ""
                  },
                  "tail": false,
                  "start": 5395,
                  "end": 5398
                },
                {
                  "type": "TemplateElement",
                  "value": {
                    "raw": "Test",
                    "cooked": "Test"
                  },
                  "tail": true,
                  "start": 5425,
                  "end": 5431
                }
              ],
              "types": [
                {
                  "type": "TSIntersectionType",
                  "types": [
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "a",
                            "cooked": "a"
                          },
                          "tail": false,
                          "start": 5398,
                          "end": 5402
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 5408,
                          "end": 5410
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5402,
                          "end": 5408
                        }
                      ],
                      "start": 5398,
                      "end": 5410
                    },
                    {
                      "type": "TSTemplateLiteralType",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 5413,
                          "end": 5416
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "a",
                            "cooked": "a"
                          },
                          "tail": true,
                          "start": 5422,
                          "end": 5425
                        }
                      ],
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 5416,
                          "end": 5422
                        }
                      ],
                      "start": 5413,
                      "end": 5425
                    }
                  ],
                  "start": 5398,
                  "end": 5425
                }
              ],
              "start": 5395,
              "end": 5431
            },
            "start": 5393,
            "end": 5431
          },
          "start": 5390,
          "end": 5431
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 5433,
        "end": 5435
      },
      "expression": false,
      "start": 5377,
      "end": 5435
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 5436,
          "end": 5439
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "abaTest",
            "raw": "\"abaTest\"",
            "start": 5440,
            "end": 5449
          }
        ],
        "optional": false,
        "start": 5436,
        "end": 5450
      },
      "directive": null,
      "start": 5436,
      "end": 5451
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 5458,
          "end": 5461
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "abcTest",
            "raw": "\"abcTest\"",
            "start": 5462,
            "end": 5471
          }
        ],
        "optional": false,
        "start": 5458,
        "end": 5472
      },
      "directive": null,
      "start": 5458,
      "end": 5473
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 5482
}
```
