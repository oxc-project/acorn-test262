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
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null,
            "start": 288,
            "end": 304
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 314,
              "end": 320
            },
            "prefix": true,
            "start": 307,
            "end": 320
          },
          "definite": false,
          "start": 288,
          "end": 320
        }
      ],
      "declare": false,
      "start": 284,
      "end": 321
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
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null,
            "start": 326,
            "end": 342
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null,
              "start": 352,
              "end": 359
            },
            "prefix": true,
            "start": 345,
            "end": 359
          },
          "definite": false,
          "start": 326,
          "end": 359
        }
      ],
      "declare": false,
      "start": 322,
      "end": 360
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
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null,
            "start": 389,
            "end": 405
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 415,
              "end": 417
            },
            "prefix": true,
            "start": 408,
            "end": 417
          },
          "definite": false,
          "start": 389,
          "end": 417
        }
      ],
      "declare": false,
      "start": 385,
      "end": 418
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
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 439
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
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
                    "start": 451,
                    "end": 452
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 454,
                    "end": 456
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 451,
                  "end": 456
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
                    "start": 458,
                    "end": 459
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 461,
                    "end": 463
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 458,
                  "end": 463
                }
              ],
              "start": 449,
              "end": 465
            },
            "prefix": true,
            "start": 442,
            "end": 465
          },
          "definite": false,
          "start": 423,
          "end": 465
        }
      ],
      "declare": false,
      "start": 419,
      "end": 466
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
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null,
            "start": 471,
            "end": 487
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
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
                    "start": 499,
                    "end": 500
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 502,
                    "end": 504
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 499,
                  "end": 504
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
                    "start": 506,
                    "end": 507
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
                            "start": 513,
                            "end": 519
                          },
                          "start": 511,
                          "end": 519
                        },
                        "start": 510,
                        "end": 519
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
                            "start": 533,
                            "end": 534
                          },
                          "start": 526,
                          "end": 535
                        }
                      ],
                      "start": 524,
                      "end": 537
                    },
                    "id": null,
                    "generator": false,
                    "start": 509,
                    "end": 537
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 506,
                  "end": 537
                }
              ],
              "start": 497,
              "end": 539
            },
            "prefix": true,
            "start": 490,
            "end": 539
          },
          "definite": false,
          "start": 471,
          "end": 539
        }
      ],
      "declare": false,
      "start": 467,
      "end": 540
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
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null,
            "start": 573,
            "end": 589
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 599,
                "end": 603
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 604,
                "end": 605
              },
              "optional": false,
              "computed": false,
              "start": 599,
              "end": 605
            },
            "prefix": true,
            "start": 592,
            "end": 605
          },
          "definite": false,
          "start": 573,
          "end": 605
        }
      ],
      "declare": false,
      "start": 569,
      "end": 606
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
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null,
            "start": 611,
            "end": 627
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 637,
                "end": 638
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 640
              },
              "optional": false,
              "computed": false,
              "start": 637,
              "end": 640
            },
            "prefix": true,
            "start": 630,
            "end": 640
          },
          "definite": false,
          "start": 611,
          "end": 640
        }
      ],
      "declare": false,
      "start": 607,
      "end": 641
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
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null,
            "start": 646,
            "end": 662
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null,
                "start": 672,
                "end": 679
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 680,
                "end": 681
              },
              "optional": false,
              "computed": true,
              "start": 672,
              "end": 682
            },
            "prefix": true,
            "start": 665,
            "end": 682
          },
          "definite": false,
          "start": 646,
          "end": 682
        }
      ],
      "declare": false,
      "start": 642,
      "end": 683
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
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null,
            "start": 688,
            "end": 704
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 714,
                "end": 717
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 714,
              "end": 719
            },
            "prefix": true,
            "start": 707,
            "end": 719
          },
          "definite": false,
          "start": 688,
          "end": 719
        }
      ],
      "declare": false,
      "start": 684,
      "end": 720
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
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null,
            "start": 725,
            "end": 742
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
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
                  "start": 752,
                  "end": 753
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 754,
                  "end": 757
                },
                "optional": false,
                "computed": false,
                "start": 752,
                "end": 757
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 752,
              "end": 759
            },
            "prefix": true,
            "start": 745,
            "end": 759
          },
          "definite": false,
          "start": 725,
          "end": 759
        }
      ],
      "declare": false,
      "start": 721,
      "end": 760
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
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null,
            "start": 765,
            "end": 782
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 799
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 802,
                "end": 808
              },
              "start": 793,
              "end": 808
            },
            "prefix": true,
            "start": 785,
            "end": 809
          },
          "definite": false,
          "start": 765,
          "end": 809
        }
      ],
      "declare": false,
      "start": 761,
      "end": 810
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
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null,
            "start": 815,
            "end": 832
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
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
                  "start": 842,
                  "end": 848
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 855
                },
                "optional": false,
                "computed": false,
                "start": 842,
                "end": 855
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 856,
                  "end": 857
                }
              ],
              "optional": false,
              "start": 842,
              "end": 858
            },
            "prefix": true,
            "start": 835,
            "end": 858
          },
          "definite": false,
          "start": 815,
          "end": 858
        }
      ],
      "declare": false,
      "start": 811,
      "end": 859
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
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null,
            "start": 894,
            "end": 911
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 928,
                "end": 934
              },
              "prefix": true,
              "start": 921,
              "end": 934
            },
            "prefix": true,
            "start": 914,
            "end": 934
          },
          "definite": false,
          "start": 894,
          "end": 934
        }
      ],
      "declare": false,
      "start": 890,
      "end": 935
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
            "name": "ResultIsBoolean14",
            "optional": false,
            "typeAnnotation": null,
            "start": 940,
            "end": 957
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "operator": "delete",
              "argument": {
                "type": "UnaryExpression",
                "operator": "delete",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 982,
                    "end": 988
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 991,
                    "end": 997
                  },
                  "start": 982,
                  "end": 997
                },
                "prefix": true,
                "start": 974,
                "end": 998
              },
              "prefix": true,
              "start": 967,
              "end": 998
            },
            "prefix": true,
            "start": 960,
            "end": 998
          },
          "definite": false,
          "start": 940,
          "end": 998
        }
      ],
      "declare": false,
      "start": 936,
      "end": 999
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 1037,
          "end": 1039
        },
        "prefix": true,
        "start": 1030,
        "end": 1039
      },
      "directive": null,
      "start": 1030,
      "end": 1040
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null,
          "start": 1048,
          "end": 1054
        },
        "prefix": true,
        "start": 1041,
        "end": 1054
      },
      "directive": null,
      "start": 1041,
      "end": 1055
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null,
          "start": 1063,
          "end": 1070
        },
        "prefix": true,
        "start": 1056,
        "end": 1070
      },
      "directive": null,
      "start": 1056,
      "end": 1071
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1079,
            "end": 1082
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 1079,
          "end": 1084
        },
        "prefix": true,
        "start": 1072,
        "end": 1084
      },
      "directive": null,
      "start": 1072,
      "end": 1085
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1093,
                "end": 1097
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1099
              },
              "optional": false,
              "computed": false,
              "start": 1093,
              "end": 1099
            },
            "prefix": true,
            "start": 1086,
            "end": 1099
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1100,
              "end": 1101
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1102,
              "end": 1103
            },
            "optional": false,
            "computed": false,
            "start": 1100,
            "end": 1103
          }
        ],
        "start": 1086,
        "end": 1103
      },
      "directive": null,
      "start": 1086,
      "end": 1104
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 1104
}
```
