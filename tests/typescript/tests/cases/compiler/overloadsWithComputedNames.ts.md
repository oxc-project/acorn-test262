__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 62,
        "end": 68
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "B",
              "raw": "\"B\"",
              "start": 76,
              "end": 79
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 84,
                      "end": 90
                    },
                    "start": 82,
                    "end": 90
                  },
                  "start": 81,
                  "end": 90
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSStringKeyword",
                  "start": 93,
                  "end": 99
                },
                "start": 91,
                "end": 99
              },
              "body": null,
              "expression": false,
              "start": 80,
              "end": 100
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 75,
            "end": 100
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "A",
              "raw": "\"A\"",
              "start": 106,
              "end": 109
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
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
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
                      ],
                      "start": 114,
                      "end": 127
                    },
                    "start": 112,
                    "end": 127
                  },
                  "start": 111,
                  "end": 127
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSUnionType",
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
                  ],
                  "start": 130,
                  "end": 145
                },
                "start": 128,
                "end": 145
              },
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 161,
                      "end": 162
                    },
                    "start": 154,
                    "end": 163
                  }
                ],
                "start": 146,
                "end": 169
              },
              "expression": false,
              "start": 110,
              "end": 169
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 105,
            "end": 169
          }
        ],
        "start": 69,
        "end": 171
      },
      "abstract": false,
      "declare": false,
      "start": 56,
      "end": 171
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 176,
            "end": 177
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Person",
              "optional": false,
              "typeAnnotation": null,
              "start": 184,
              "end": 190
            },
            "typeArguments": null,
            "arguments": [],
            "start": 180,
            "end": 192
          },
          "definite": false,
          "start": 176,
          "end": 192
        }
      ],
      "declare": false,
      "start": 172,
      "end": 193
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 194,
            "end": 195
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "A",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "optional": false,
          "computed": false,
          "start": 194,
          "end": 197
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 198,
            "end": 199
          }
        ],
        "optional": false,
        "start": 194,
        "end": 200
      },
      "directive": null,
      "start": 194,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 201,
            "end": 202
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "B",
            "optional": false,
            "typeAnnotation": null,
            "start": 203,
            "end": 204
          },
          "optional": false,
          "computed": false,
          "start": 201,
          "end": 204
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 205,
            "end": 206
          }
        ],
        "optional": false,
        "start": 201,
        "end": 207
      },
      "directive": null,
      "start": 201,
      "end": 207
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 271,
        "end": 272
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 280,
              "end": 285
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 290,
                  "end": 294
                },
                "start": 288,
                "end": 294
              },
              "body": null,
              "expression": false,
              "start": 286,
              "end": 294
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 279,
            "end": 294
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "bar",
              "raw": "\"bar\"",
              "start": 300,
              "end": 305
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 310,
                  "end": 314
                },
                "start": 308,
                "end": 314
              },
              "body": null,
              "expression": false,
              "start": 306,
              "end": 315
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 299,
            "end": 315
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": "foo",
              "raw": "\"foo\"",
              "start": 321,
              "end": 326
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 347,
                      "end": 348
                    },
                    "start": 340,
                    "end": 349
                  }
                ],
                "start": 330,
                "end": 355
              },
              "expression": false,
              "start": 327,
              "end": 355
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 320,
            "end": 355
          }
        ],
        "start": 273,
        "end": 357
      },
      "abstract": false,
      "declare": false,
      "start": 265,
      "end": 357
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
            "name": "uniqueSym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 391,
                  "end": 397
                },
                "start": 384,
                "end": 397
              },
              "start": 382,
              "end": 397
            },
            "start": 373,
            "end": 397
          },
          "init": null,
          "definite": false,
          "start": 373,
          "end": 397
        }
      ],
      "declare": true,
      "start": 359,
      "end": 398
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
            "name": "uniqueSym2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 432,
                  "end": 438
                },
                "start": 425,
                "end": 438
              },
              "start": 423,
              "end": 438
            },
            "start": 413,
            "end": 438
          },
          "init": null,
          "definite": false,
          "start": 413,
          "end": 438
        }
      ],
      "declare": true,
      "start": 399,
      "end": 439
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
            "name": "sym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSSymbolKeyword",
                "start": 459,
                "end": 465
              },
              "start": 457,
              "end": 465
            },
            "start": 454,
            "end": 465
          },
          "init": null,
          "definite": false,
          "start": 454,
          "end": 465
        }
      ],
      "declare": true,
      "start": 440,
      "end": 466
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
            "name": "strUnion",
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
                      "value": "foo",
                      "raw": "'foo'",
                      "start": 492,
                      "end": 497
                    },
                    "start": 492,
                    "end": 497
                  },
                  {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "bar",
                      "raw": "'bar'",
                      "start": 500,
                      "end": 505
                    },
                    "start": 500,
                    "end": 505
                  }
                ],
                "start": 492,
                "end": 505
              },
              "start": 490,
              "end": 505
            },
            "start": 482,
            "end": 505
          },
          "init": null,
          "definite": false,
          "start": 482,
          "end": 505
        }
      ],
      "declare": true,
      "start": 468,
      "end": 506
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C1",
        "optional": false,
        "typeAnnotation": null,
        "start": 514,
        "end": 516
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null,
              "start": 524,
              "end": 527
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 532,
                  "end": 536
                },
                "start": 530,
                "end": 536
              },
              "body": null,
              "expression": false,
              "start": 528,
              "end": 537
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 523,
            "end": 537
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym2",
              "optional": false,
              "typeAnnotation": null,
              "start": 560,
              "end": 570
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 575,
                  "end": 579
                },
                "start": 573,
                "end": 579
              },
              "body": null,
              "expression": false,
              "start": 571,
              "end": 580
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 559,
            "end": 580
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 613
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 618,
                  "end": 622
                },
                "start": 616,
                "end": 622
              },
              "body": null,
              "expression": false,
              "start": 614,
              "end": 623
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 603,
            "end": 623
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null,
              "start": 629,
              "end": 638
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 642,
                "end": 645
              },
              "expression": false,
              "start": 639,
              "end": 645
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 628,
            "end": 645
          }
        ],
        "start": 517,
        "end": 647
      },
      "abstract": false,
      "declare": false,
      "start": 508,
      "end": 647
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I1",
        "optional": false,
        "typeAnnotation": null,
        "start": 659,
        "end": 661
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "sym",
              "optional": false,
              "typeAnnotation": null,
              "start": 669,
              "end": 672
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 677,
                "end": 681
              },
              "start": 675,
              "end": 681
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 668,
            "end": 682
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym2",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 715
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 720,
                "end": 724
              },
              "start": 718,
              "end": 724
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 704,
            "end": 725
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null,
              "start": 731,
              "end": 740
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 745,
                "end": 749
              },
              "start": 743,
              "end": 749
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 730,
            "end": 750
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "uniqueSym",
              "optional": false,
              "typeAnnotation": null,
              "start": 756,
              "end": 765
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 770,
                "end": 774
              },
              "start": 768,
              "end": 774
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 755,
            "end": 775
          }
        ],
        "start": 662,
        "end": 777
      },
      "declare": false,
      "start": 649,
      "end": 777
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C2",
        "optional": false,
        "typeAnnotation": null,
        "start": 785,
        "end": 787
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 795,
              "end": 803
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 808,
                  "end": 812
                },
                "start": 806,
                "end": 812
              },
              "body": null,
              "expression": false,
              "start": 804,
              "end": 813
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 794,
            "end": 813
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 835,
              "end": 843
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 847,
                "end": 850
              },
              "expression": false,
              "start": 844,
              "end": 850
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 834,
            "end": 850
          }
        ],
        "start": 788,
        "end": 852
      },
      "abstract": false,
      "declare": false,
      "start": 779,
      "end": 852
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I2",
        "optional": false,
        "typeAnnotation": null,
        "start": 860,
        "end": 862
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 870,
              "end": 878
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 883,
                  "end": 887
                },
                "start": 881,
                "end": 887
              },
              "body": null,
              "expression": false,
              "start": 879,
              "end": 888
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 869,
            "end": 888
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "strUnion",
              "optional": false,
              "typeAnnotation": null,
              "start": 910,
              "end": 918
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 922,
                "end": 925
              },
              "expression": false,
              "start": 919,
              "end": 925
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 909,
            "end": 925
          }
        ],
        "start": 863,
        "end": 927
      },
      "abstract": false,
      "declare": false,
      "start": 854,
      "end": 927
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C3",
        "optional": false,
        "typeAnnotation": null,
        "start": 935,
        "end": 937
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 945,
              "end": 946
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 951,
                  "end": 955
                },
                "start": 949,
                "end": 955
              },
              "body": null,
              "expression": false,
              "start": 947,
              "end": 956
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 944,
            "end": 956
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 979,
              "end": 980
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 985,
                  "end": 989
                },
                "start": 983,
                "end": 989
              },
              "body": null,
              "expression": false,
              "start": 981,
              "end": 990
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 978,
            "end": 990
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 996,
              "end": 997
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 1001,
                "end": 1004
              },
              "expression": false,
              "start": 998,
              "end": 1004
            },
            "kind": "method",
            "computed": true,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 995,
            "end": 1004
          }
        ],
        "start": 938,
        "end": 1006
      },
      "abstract": false,
      "declare": false,
      "start": 929,
      "end": 1006
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "I3",
        "optional": false,
        "typeAnnotation": null,
        "start": 1018,
        "end": 1020
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 1028,
              "end": 1029
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1034,
                "end": 1038
              },
              "start": 1032,
              "end": 1038
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1027,
            "end": 1039
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1045,
              "end": 1046
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1051,
                "end": 1055
              },
              "start": 1049,
              "end": 1055
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1044,
            "end": 1056
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Literal",
              "value": 2,
              "raw": "2",
              "start": 1062,
              "end": 1063
            },
            "computed": true,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 1068,
                "end": 1072
              },
              "start": 1066,
              "end": 1072
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 1061,
            "end": 1073
          }
        ],
        "start": 1021,
        "end": 1075
      },
      "declare": false,
      "start": 1008,
      "end": 1075
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 56,
  "end": 1075
}
```
