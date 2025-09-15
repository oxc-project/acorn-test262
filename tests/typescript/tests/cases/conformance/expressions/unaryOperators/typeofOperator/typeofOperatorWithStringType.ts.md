__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "start": 39,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 53
        }
      ],
      "declare": false,
      "start": 35,
      "end": 54
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
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 68,
                  "end": 74
                },
                "start": 68,
                "end": 76
              },
              "start": 66,
              "end": 76
            },
            "start": 59,
            "end": 76
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 80,
                "end": 82
              },
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 84,
                "end": 89
              }
            ],
            "start": 79,
            "end": 90
          },
          "definite": false,
          "start": 59,
          "end": 90
        }
      ],
      "declare": false,
      "start": 55,
      "end": 91
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 105
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 109,
          "end": 115
        },
        "start": 107,
        "end": 115
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": "abc",
              "raw": "\"abc\"",
              "start": 125,
              "end": 130
            },
            "start": 118,
            "end": 131
          }
        ],
        "start": 116,
        "end": 133
      },
      "expression": false,
      "start": 93,
      "end": 133
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 141,
        "end": 142
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 157
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 159,
                "end": 165
              },
              "start": 157,
              "end": 165
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 149,
            "end": 166
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 178,
              "end": 181
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
                      "value": "",
                      "raw": "\"\"",
                      "start": 193,
                      "end": 195
                    },
                    "start": 186,
                    "end": 196
                  }
                ],
                "start": 184,
                "end": 198
              },
              "expression": false,
              "start": 181,
              "end": 198
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 171,
            "end": 198
          }
        ],
        "start": 143,
        "end": 200
      },
      "abstract": false,
      "declare": false,
      "start": 135,
      "end": 200
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 211,
        "end": 212
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 233,
                        "end": 239
                      },
                      "start": 231,
                      "end": 239
                    },
                    "start": 230,
                    "end": 239
                  },
                  "init": null,
                  "definite": false,
                  "start": 230,
                  "end": 239
                }
              ],
              "declare": false,
              "start": 226,
              "end": 240
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 219,
            "end": 240
          }
        ],
        "start": 213,
        "end": 242
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 201,
      "end": 242
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
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 248,
            "end": 252
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 259,
              "end": 260
            },
            "typeArguments": null,
            "arguments": [],
            "start": 255,
            "end": 262
          },
          "definite": false,
          "start": 248,
          "end": 262
        }
      ],
      "declare": false,
      "start": 244,
      "end": 263
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
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 303
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 313,
              "end": 319
            },
            "prefix": true,
            "start": 306,
            "end": 319
          },
          "definite": false,
          "start": 288,
          "end": 319
        }
      ],
      "declare": false,
      "start": 284,
      "end": 320
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
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null,
            "start": 325,
            "end": 340
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null,
              "start": 350,
              "end": 357
            },
            "prefix": true,
            "start": 343,
            "end": 357
          },
          "definite": false,
          "start": 325,
          "end": 357
        }
      ],
      "declare": false,
      "start": 321,
      "end": 358
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
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 402
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 412,
              "end": 414
            },
            "prefix": true,
            "start": 405,
            "end": 414
          },
          "definite": false,
          "start": 387,
          "end": 414
        }
      ],
      "declare": false,
      "start": 383,
      "end": 415
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
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null,
            "start": 420,
            "end": 435
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 447,
                    "end": 448
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 450,
                    "end": 452
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 447,
                  "end": 452
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 454,
                    "end": 455
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 457,
                    "end": 459
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 454,
                  "end": 459
                }
              ],
              "start": 445,
              "end": 461
            },
            "prefix": true,
            "start": 438,
            "end": 461
          },
          "definite": false,
          "start": 420,
          "end": 461
        }
      ],
      "declare": false,
      "start": 416,
      "end": 462
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
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null,
            "start": 467,
            "end": 482
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 494,
                    "end": 495
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 497,
                    "end": 499
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 494,
                  "end": 499
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 501,
                    "end": 502
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 508,
                            "end": 514
                          },
                          "start": 506,
                          "end": 514
                        },
                        "start": 505,
                        "end": 514
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 528,
                            "end": 529
                          },
                          "start": 521,
                          "end": 530
                        }
                      ],
                      "start": 519,
                      "end": 532
                    },
                    "id": null,
                    "generator": false,
                    "start": 504,
                    "end": 532
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 501,
                  "end": 532
                }
              ],
              "start": 492,
              "end": 534
            },
            "prefix": true,
            "start": 485,
            "end": 534
          },
          "definite": false,
          "start": 467,
          "end": 534
        }
      ],
      "declare": false,
      "start": 463,
      "end": 535
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
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null,
            "start": 568,
            "end": 583
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 593,
                "end": 597
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 598,
                "end": 599
              },
              "optional": false,
              "computed": false,
              "start": 593,
              "end": 599
            },
            "prefix": true,
            "start": 586,
            "end": 599
          },
          "definite": false,
          "start": 568,
          "end": 599
        }
      ],
      "declare": false,
      "start": 564,
      "end": 600
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
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null,
            "start": 605,
            "end": 620
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 631
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 632,
                "end": 633
              },
              "optional": false,
              "computed": false,
              "start": 630,
              "end": 633
            },
            "prefix": true,
            "start": 623,
            "end": 633
          },
          "definite": false,
          "start": 605,
          "end": 633
        }
      ],
      "declare": false,
      "start": 601,
      "end": 634
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
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null,
            "start": 639,
            "end": 654
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null,
                "start": 664,
                "end": 671
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 672,
                "end": 673
              },
              "optional": false,
              "computed": true,
              "start": 664,
              "end": 674
            },
            "prefix": true,
            "start": 657,
            "end": 674
          },
          "definite": false,
          "start": 639,
          "end": 674
        }
      ],
      "declare": false,
      "start": 635,
      "end": 675
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
            "name": "ResultIsString9",
            "optional": false,
            "typeAnnotation": null,
            "start": 680,
            "end": 695
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 708
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 705,
              "end": 710
            },
            "prefix": true,
            "start": 698,
            "end": 710
          },
          "definite": false,
          "start": 680,
          "end": 710
        }
      ],
      "declare": false,
      "start": 676,
      "end": 711
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
            "name": "ResultIsString10",
            "optional": false,
            "typeAnnotation": null,
            "start": 716,
            "end": 732
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 742,
                  "end": 743
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 744,
                  "end": 747
                },
                "optional": false,
                "computed": false,
                "start": 742,
                "end": 747
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 742,
              "end": 749
            },
            "prefix": true,
            "start": 735,
            "end": 749
          },
          "definite": false,
          "start": 716,
          "end": 749
        }
      ],
      "declare": false,
      "start": 712,
      "end": 750
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
            "name": "ResultIsString11",
            "optional": false,
            "typeAnnotation": null,
            "start": 755,
            "end": 771
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 782,
                "end": 788
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 791,
                "end": 797
              },
              "start": 782,
              "end": 797
            },
            "prefix": true,
            "start": 774,
            "end": 798
          },
          "definite": false,
          "start": 755,
          "end": 798
        }
      ],
      "declare": false,
      "start": 751,
      "end": 799
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
            "name": "ResultIsString12",
            "optional": false,
            "typeAnnotation": null,
            "start": 804,
            "end": 820
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 830,
                  "end": 836
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 843
                },
                "optional": false,
                "computed": false,
                "start": 830,
                "end": 843
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 844,
                  "end": 845
                }
              ],
              "optional": false,
              "start": 830,
              "end": 846
            },
            "prefix": true,
            "start": 823,
            "end": 846
          },
          "definite": false,
          "start": 804,
          "end": 846
        }
      ],
      "declare": false,
      "start": 800,
      "end": 847
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
            "name": "ResultIsString13",
            "optional": false,
            "typeAnnotation": null,
            "start": 883,
            "end": 899
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 916,
                "end": 922
              },
              "prefix": true,
              "start": 909,
              "end": 922
            },
            "prefix": true,
            "start": 902,
            "end": 922
          },
          "definite": false,
          "start": 883,
          "end": 922
        }
      ],
      "declare": false,
      "start": 879,
      "end": 923
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
            "name": "ResultIsString14",
            "optional": false,
            "typeAnnotation": null,
            "start": 928,
            "end": 944
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 969,
                    "end": 975
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 978,
                    "end": 984
                  },
                  "start": 969,
                  "end": 984
                },
                "prefix": true,
                "start": 961,
                "end": 985
              },
              "prefix": true,
              "start": 954,
              "end": 985
            },
            "prefix": true,
            "start": 947,
            "end": 985
          },
          "definite": false,
          "start": 928,
          "end": 985
        }
      ],
      "declare": false,
      "start": 924,
      "end": 986
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 1024,
          "end": 1026
        },
        "prefix": true,
        "start": 1017,
        "end": 1026
      },
      "directive": null,
      "start": 1017,
      "end": 1027
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null,
          "start": 1035,
          "end": 1041
        },
        "prefix": true,
        "start": 1028,
        "end": 1041
      },
      "directive": null,
      "start": 1028,
      "end": 1042
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1050,
          "end": 1057
        },
        "prefix": true,
        "start": 1043,
        "end": 1057
      },
      "directive": null,
      "start": 1043,
      "end": 1058
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1066,
            "end": 1069
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1066,
          "end": 1071
        },
        "prefix": true,
        "start": 1059,
        "end": 1071
      },
      "directive": null,
      "start": 1059,
      "end": 1072
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1080,
                "end": 1084
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1085,
                "end": 1086
              },
              "optional": false,
              "computed": false,
              "start": 1080,
              "end": 1086
            },
            "prefix": true,
            "start": 1073,
            "end": 1086
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1088,
              "end": 1089
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1090,
              "end": 1091
            },
            "optional": false,
            "computed": false,
            "start": 1088,
            "end": 1091
          }
        ],
        "start": 1073,
        "end": 1091
      },
      "directive": null,
      "start": 1073,
      "end": 1092
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
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1129,
                "end": 1135
              },
              "start": 1127,
              "end": 1135
            },
            "start": 1126,
            "end": 1135
          },
          "init": null,
          "definite": false,
          "start": 1126,
          "end": 1135
        }
      ],
      "declare": false,
      "start": 1122,
      "end": 1136
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 1144,
                  "end": 1150
                },
                "start": 1144,
                "end": 1152
              },
              "start": 1142,
              "end": 1152
            },
            "start": 1141,
            "end": 1152
          },
          "init": null,
          "definite": false,
          "start": 1141,
          "end": 1152
        }
      ],
      "declare": false,
      "start": 1137,
      "end": 1153
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
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 1167,
                    "end": 1173
                  },
                  "start": 1164,
                  "end": 1173
                },
                "start": 1161,
                "end": 1173
              },
              "start": 1159,
              "end": 1173
            },
            "start": 1158,
            "end": 1173
          },
          "init": null,
          "definite": false,
          "start": 1158,
          "end": 1173
        }
      ],
      "declare": false,
      "start": 1154,
      "end": 1174
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1175,
        "end": 1176
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": null,
            "start": 1185,
            "end": 1191
          },
          "prefix": true,
          "start": 1178,
          "end": 1191
        },
        "directive": null,
        "start": 1178,
        "end": 1192
      },
      "start": 1175,
      "end": 1192
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 1193,
        "end": 1194
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "STRING1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1203,
            "end": 1210
          },
          "prefix": true,
          "start": 1196,
          "end": 1210
        },
        "directive": null,
        "start": 1196,
        "end": 1211
      },
      "start": 1193,
      "end": 1211
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 1212,
        "end": 1213
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1222,
            "end": 1225
          },
          "prefix": true,
          "start": 1215,
          "end": 1225
        },
        "directive": null,
        "start": 1215,
        "end": 1226
      },
      "start": 1212,
      "end": 1226
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
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1231,
            "end": 1232
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1237,
                  "end": 1238
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 1240,
                  "end": 1242
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1237,
                "end": 1242
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1244,
                  "end": 1245
                },
                "value": {
                  "type": "Literal",
                  "value": "",
                  "raw": "\"\"",
                  "start": 1247,
                  "end": 1249
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1244,
                "end": 1249
              }
            ],
            "start": 1235,
            "end": 1251
          },
          "definite": false,
          "start": 1231,
          "end": 1251
        }
      ],
      "declare": false,
      "start": 1227,
      "end": 1252
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1253,
        "end": 1254
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1263,
              "end": 1264
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1265,
              "end": 1266
            },
            "optional": false,
            "computed": false,
            "start": 1263,
            "end": 1266
          },
          "prefix": true,
          "start": 1256,
          "end": 1266
        },
        "directive": null,
        "start": 1256,
        "end": 1267
      },
      "start": 1253,
      "end": 1267
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1268,
        "end": 1269
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "objA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1278,
              "end": 1282
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1283,
              "end": 1284
            },
            "optional": false,
            "computed": false,
            "start": 1278,
            "end": 1284
          },
          "prefix": true,
          "start": 1271,
          "end": 1284
        },
        "directive": null,
        "start": 1271,
        "end": 1285
      },
      "start": 1268,
      "end": 1285
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1286,
        "end": 1287
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1296,
              "end": 1297
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1298,
              "end": 1301
            },
            "optional": false,
            "computed": false,
            "start": 1296,
            "end": 1301
          },
          "prefix": true,
          "start": 1289,
          "end": 1301
        },
        "directive": null,
        "start": 1289,
        "end": 1302
      },
      "start": 1286,
      "end": 1302
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1303,
        "end": 1304
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1313,
              "end": 1314
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1315,
              "end": 1316
            },
            "optional": false,
            "computed": false,
            "start": 1313,
            "end": 1316
          },
          "prefix": true,
          "start": 1306,
          "end": 1316
        },
        "directive": null,
        "start": 1306,
        "end": 1317
      },
      "start": 1303,
      "end": 1317
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 1317
}
```
