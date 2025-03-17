__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 56,
  "end": 1075,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 56,
      "end": 171,
      "id": {
        "type": "Identifier",
        "start": 62,
        "end": 68,
        "name": "Person",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 69,
        "end": 171,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 75,
            "end": 100,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 76,
              "end": 79,
              "value": "B",
              "raw": "\"B\""
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 80,
              "end": 100,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 81,
                  "end": 90,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 82,
                    "end": 90,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 84,
                      "end": 90
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 91,
                "end": 99,
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 93,
                  "end": 99
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 105,
            "end": 169,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 106,
              "end": 109,
              "value": "A",
              "raw": "\"A\""
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 110,
              "end": 169,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [
                {
                  "type": "Identifier",
                  "start": 111,
                  "end": 127,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 112,
                    "end": 127,
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "start": 114,
                      "end": 127,
                      "types": [
                        {
                          "type": "TSStringKeyword",
                          "start": 114,
                          "end": 120
                        },
                        {
                          "type": "TSNumberKeyword",
                          "start": 121,
                          "end": 127
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                }
              ],
              "body": {
                "type": "BlockStatement",
                "start": 146,
                "end": 169,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 154,
                    "end": 163,
                    "argument": {
                      "type": "Literal",
                      "start": 161,
                      "end": 162,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 128,
                "end": 145,
                "typeAnnotation": {
                  "type": "TSUnionType",
                  "start": 130,
                  "end": 145,
                  "types": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 130,
                      "end": 136
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 139,
                      "end": 145
                    }
                  ]
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 172,
      "end": 193,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 176,
          "end": 192,
          "id": {
            "type": "Identifier",
            "start": 176,
            "end": 177,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 180,
            "end": 192,
            "callee": {
              "type": "Identifier",
              "start": 184,
              "end": 190,
              "name": "Person",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 200,
      "expression": {
        "type": "CallExpression",
        "start": 194,
        "end": 200,
        "callee": {
          "type": "MemberExpression",
          "start": 194,
          "end": 197,
          "object": {
            "type": "Identifier",
            "start": 194,
            "end": 195,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 196,
            "end": 197,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 198,
            "end": 199,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 201,
      "end": 207,
      "expression": {
        "type": "CallExpression",
        "start": 201,
        "end": 207,
        "callee": {
          "type": "MemberExpression",
          "start": 201,
          "end": 204,
          "object": {
            "type": "Identifier",
            "start": 201,
            "end": 202,
            "name": "p",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 203,
            "end": 204,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Literal",
            "start": 205,
            "end": 206,
            "value": 0,
            "raw": "0"
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ClassDeclaration",
      "start": 265,
      "end": 357,
      "id": {
        "type": "Identifier",
        "start": 271,
        "end": 272,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 273,
        "end": 357,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 279,
            "end": 294,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 280,
              "end": 285,
              "value": "foo",
              "raw": "\"foo\""
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 286,
              "end": 294,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 288,
                "end": 294,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 290,
                  "end": 294
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 299,
            "end": 315,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 300,
              "end": 305,
              "value": "bar",
              "raw": "\"bar\""
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 306,
              "end": 315,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 308,
                "end": 314,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 310,
                  "end": 314
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 320,
            "end": 355,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 321,
              "end": 326,
              "value": "foo",
              "raw": "\"foo\""
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 327,
              "end": 355,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 330,
                "end": 355,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 340,
                    "end": 349,
                    "argument": {
                      "type": "Literal",
                      "start": 347,
                      "end": 348,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 398,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 373,
          "end": 397,
          "id": {
            "type": "Identifier",
            "start": 373,
            "end": 397,
            "name": "uniqueSym",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 382,
              "end": 397,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 384,
                "end": 397,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 391,
                  "end": 397
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 399,
      "end": 439,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 413,
          "end": 438,
          "id": {
            "type": "Identifier",
            "start": 413,
            "end": 438,
            "name": "uniqueSym2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 423,
              "end": 438,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 425,
                "end": 438,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 432,
                  "end": 438
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 440,
      "end": 466,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 465,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 465,
            "name": "sym",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 457,
              "end": 465,
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 459,
                "end": 465
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 468,
      "end": 506,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 482,
          "end": 505,
          "id": {
            "type": "Identifier",
            "start": 482,
            "end": 505,
            "name": "strUnion",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 490,
              "end": 505,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 492,
                "end": 505,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 492,
                    "end": 497,
                    "literal": {
                      "type": "Literal",
                      "start": 492,
                      "end": 497,
                      "value": "foo",
                      "raw": "'foo'"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 500,
                    "end": 505,
                    "literal": {
                      "type": "Literal",
                      "start": 500,
                      "end": 505,
                      "value": "bar",
                      "raw": "'bar'"
                    }
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 508,
      "end": 647,
      "id": {
        "type": "Identifier",
        "start": 514,
        "end": 516,
        "name": "C1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 517,
        "end": 647,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 523,
            "end": 537,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 524,
              "end": 527,
              "name": "sym",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 528,
              "end": 537,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 530,
                "end": 536,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 532,
                  "end": 536
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 559,
            "end": 580,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 560,
              "end": 570,
              "name": "uniqueSym2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 571,
              "end": 580,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 573,
                "end": 579,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 575,
                  "end": 579
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 603,
            "end": 623,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 604,
              "end": 613,
              "name": "uniqueSym",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 614,
              "end": 623,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 616,
                "end": 622,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 618,
                  "end": 622
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 628,
            "end": 645,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 629,
              "end": 638,
              "name": "uniqueSym",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 639,
              "end": 645,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 642,
                "end": 645,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 649,
      "end": 777,
      "id": {
        "type": "Identifier",
        "start": 659,
        "end": 661,
        "name": "I1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 662,
        "end": 777,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 668,
            "end": 682,
            "key": {
              "type": "Identifier",
              "start": 669,
              "end": 672,
              "name": "sym",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 675,
              "end": 681,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 677,
                "end": 681
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 704,
            "end": 725,
            "key": {
              "type": "Identifier",
              "start": 705,
              "end": 715,
              "name": "uniqueSym2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 718,
              "end": 724,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 720,
                "end": 724
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 730,
            "end": 750,
            "key": {
              "type": "Identifier",
              "start": 731,
              "end": 740,
              "name": "uniqueSym",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 743,
              "end": 749,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 745,
                "end": 749
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 755,
            "end": 775,
            "key": {
              "type": "Identifier",
              "start": 756,
              "end": 765,
              "name": "uniqueSym",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 768,
              "end": 774,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 770,
                "end": 774
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 779,
      "end": 852,
      "id": {
        "type": "Identifier",
        "start": 785,
        "end": 787,
        "name": "C2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 788,
        "end": 852,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 794,
            "end": 813,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 795,
              "end": 803,
              "name": "strUnion",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 804,
              "end": 813,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 806,
                "end": 812,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 808,
                  "end": 812
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 834,
            "end": 850,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 835,
              "end": 843,
              "name": "strUnion",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 844,
              "end": 850,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 847,
                "end": 850,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 854,
      "end": 927,
      "id": {
        "type": "Identifier",
        "start": 860,
        "end": 862,
        "name": "I2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 863,
        "end": 927,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 869,
            "end": 888,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 870,
              "end": 878,
              "name": "strUnion",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 879,
              "end": 888,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 881,
                "end": 887,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 883,
                  "end": 887
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 909,
            "end": 925,
            "static": false,
            "computed": true,
            "key": {
              "type": "Identifier",
              "start": 910,
              "end": 918,
              "name": "strUnion",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 919,
              "end": 925,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 922,
                "end": 925,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 929,
      "end": 1006,
      "id": {
        "type": "Identifier",
        "start": 935,
        "end": 937,
        "name": "C3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 938,
        "end": 1006,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 944,
            "end": 956,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 945,
              "end": 946,
              "value": 1,
              "raw": "1"
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 947,
              "end": 956,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 949,
                "end": 955,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 951,
                  "end": 955
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 978,
            "end": 990,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 979,
              "end": 980,
              "value": 2,
              "raw": "2"
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 981,
              "end": 990,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 983,
                "end": 989,
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 985,
                  "end": 989
                }
              }
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 995,
            "end": 1004,
            "static": false,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 996,
              "end": 997,
              "value": 2,
              "raw": "2"
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 998,
              "end": 1004,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 1001,
                "end": 1004,
                "body": []
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1008,
      "end": 1075,
      "id": {
        "type": "Identifier",
        "start": 1018,
        "end": 1020,
        "name": "I3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1021,
        "end": 1075,
        "body": [
          {
            "type": "TSMethodSignature",
            "start": 1027,
            "end": 1039,
            "key": {
              "type": "Literal",
              "start": 1028,
              "end": 1029,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1032,
              "end": 1038,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1034,
                "end": 1038
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1044,
            "end": 1056,
            "key": {
              "type": "Literal",
              "start": 1045,
              "end": 1046,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1049,
              "end": 1055,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1051,
                "end": 1055
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          },
          {
            "type": "TSMethodSignature",
            "start": 1061,
            "end": 1073,
            "key": {
              "type": "Literal",
              "start": 1062,
              "end": 1063,
              "value": 2,
              "raw": "2"
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1066,
              "end": 1072,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1068,
                "end": 1072
              }
            },
            "accessibility": null,
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
