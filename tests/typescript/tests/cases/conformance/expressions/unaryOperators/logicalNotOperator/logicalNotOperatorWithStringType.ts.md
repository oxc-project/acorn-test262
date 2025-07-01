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
                "start": 41,
                "end": 47
              },
              "start": 39,
              "end": 47
            },
            "start": 33,
            "end": 47
          },
          "init": null,
          "definite": false,
          "start": 33,
          "end": 47
        }
      ],
      "declare": false,
      "start": 29,
      "end": 48
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
                  "start": 62,
                  "end": 68
                },
                "start": 62,
                "end": 70
              },
              "start": 60,
              "end": 70
            },
            "start": 53,
            "end": 70
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 74,
                "end": 76
              },
              {
                "type": "Literal",
                "value": "abc",
                "raw": "\"abc\"",
                "start": 78,
                "end": 83
              }
            ],
            "start": 73,
            "end": 84
          },
          "definite": false,
          "start": 53,
          "end": 84
        }
      ],
      "declare": false,
      "start": 49,
      "end": 85
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 96,
        "end": 99
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
          "start": 103,
          "end": 109
        },
        "start": 101,
        "end": 109
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
              "start": 119,
              "end": 124
            },
            "start": 112,
            "end": 125
          }
        ],
        "start": 110,
        "end": 127
      },
      "expression": false,
      "start": 87,
      "end": 127
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
        "start": 135,
        "end": 136
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
              "start": 150,
              "end": 151
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 153,
                "end": 159
              },
              "start": 151,
              "end": 159
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
            "start": 143,
            "end": 160
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
              "start": 172,
              "end": 175
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
                      "start": 187,
                      "end": 189
                    },
                    "start": 180,
                    "end": 190
                  }
                ],
                "start": 178,
                "end": 192
              },
              "expression": false,
              "start": 175,
              "end": 192
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 165,
            "end": 192
          }
        ],
        "start": 137,
        "end": 194
      },
      "abstract": false,
      "declare": false,
      "start": 129,
      "end": 194
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 202,
        "end": 203
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
                        "start": 224,
                        "end": 230
                      },
                      "start": 222,
                      "end": 230
                    },
                    "start": 221,
                    "end": 230
                  },
                  "init": null,
                  "definite": false,
                  "start": 221,
                  "end": 230
                }
              ],
              "declare": false,
              "start": 217,
              "end": 231
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 210,
            "end": 231
          }
        ],
        "start": 204,
        "end": 233
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 195,
      "end": 233
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
            "start": 239,
            "end": 243
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 250,
              "end": 251
            },
            "typeArguments": null,
            "arguments": [],
            "start": 246,
            "end": 253
          },
          "definite": false,
          "start": 239,
          "end": 253
        }
      ],
      "declare": false,
      "start": 235,
      "end": 254
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
            "start": 279,
            "end": 295
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null,
              "start": 299,
              "end": 305
            },
            "prefix": true,
            "start": 298,
            "end": 305
          },
          "definite": false,
          "start": 279,
          "end": 305
        }
      ],
      "declare": false,
      "start": 275,
      "end": 306
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
            "start": 311,
            "end": 327
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null,
              "start": 331,
              "end": 338
            },
            "prefix": true,
            "start": 330,
            "end": 338
          },
          "definite": false,
          "start": 311,
          "end": 338
        }
      ],
      "declare": false,
      "start": 307,
      "end": 339
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
            "start": 368,
            "end": 384
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 388,
              "end": 390
            },
            "prefix": true,
            "start": 387,
            "end": 390
          },
          "definite": false,
          "start": 368,
          "end": 390
        }
      ],
      "declare": false,
      "start": 364,
      "end": 391
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
            "start": 396,
            "end": 412
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                    "start": 418,
                    "end": 419
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 421,
                    "end": 423
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 418,
                  "end": 423
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
                    "start": 425,
                    "end": 426
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 428,
                    "end": 430
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 425,
                  "end": 430
                }
              ],
              "start": 416,
              "end": 432
            },
            "prefix": true,
            "start": 415,
            "end": 432
          },
          "definite": false,
          "start": 396,
          "end": 432
        }
      ],
      "declare": false,
      "start": 392,
      "end": 433
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
            "start": 438,
            "end": 454
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                    "start": 460,
                    "end": 461
                  },
                  "value": {
                    "type": "Literal",
                    "value": "",
                    "raw": "\"\"",
                    "start": 463,
                    "end": 465
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 460,
                  "end": 465
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
                    "start": 467,
                    "end": 468
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
                            "start": 474,
                            "end": 480
                          },
                          "start": 472,
                          "end": 480
                        },
                        "start": 471,
                        "end": 480
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
                            "start": 494,
                            "end": 495
                          },
                          "start": 487,
                          "end": 496
                        }
                      ],
                      "start": 485,
                      "end": 498
                    },
                    "id": null,
                    "generator": false,
                    "start": 470,
                    "end": 498
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 467,
                  "end": 498
                }
              ],
              "start": 458,
              "end": 500
            },
            "prefix": true,
            "start": 457,
            "end": 500
          },
          "definite": false,
          "start": 438,
          "end": 500
        }
      ],
      "declare": false,
      "start": 434,
      "end": 501
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
            "start": 534,
            "end": 550
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 554,
                "end": 558
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 559,
                "end": 560
              },
              "optional": false,
              "computed": false,
              "start": 554,
              "end": 560
            },
            "prefix": true,
            "start": 553,
            "end": 560
          },
          "definite": false,
          "start": 534,
          "end": 560
        }
      ],
      "declare": false,
      "start": 530,
      "end": 561
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
            "start": 566,
            "end": 582
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 586,
                "end": 587
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 588,
                "end": 589
              },
              "optional": false,
              "computed": false,
              "start": 586,
              "end": 589
            },
            "prefix": true,
            "start": 585,
            "end": 589
          },
          "definite": false,
          "start": 566,
          "end": 589
        }
      ],
      "declare": false,
      "start": 562,
      "end": 590
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
            "start": 595,
            "end": 611
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 622
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 623,
                "end": 624
              },
              "optional": false,
              "computed": true,
              "start": 615,
              "end": 625
            },
            "prefix": true,
            "start": 614,
            "end": 625
          },
          "definite": false,
          "start": 595,
          "end": 625
        }
      ],
      "declare": false,
      "start": 591,
      "end": 626
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
            "start": 631,
            "end": 647
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 651,
                "end": 654
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 651,
              "end": 656
            },
            "prefix": true,
            "start": 650,
            "end": 656
          },
          "definite": false,
          "start": 631,
          "end": 656
        }
      ],
      "declare": false,
      "start": 627,
      "end": 657
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
            "start": 662,
            "end": 679
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                  "start": 683,
                  "end": 684
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 688
                },
                "optional": false,
                "computed": false,
                "start": 683,
                "end": 688
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 683,
              "end": 690
            },
            "prefix": true,
            "start": 682,
            "end": 690
          },
          "definite": false,
          "start": 662,
          "end": 690
        }
      ],
      "declare": false,
      "start": 658,
      "end": 691
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
            "start": 696,
            "end": 713
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 724
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 727,
                "end": 733
              },
              "start": 718,
              "end": 733
            },
            "prefix": true,
            "start": 716,
            "end": 734
          },
          "definite": false,
          "start": 696,
          "end": 734
        }
      ],
      "declare": false,
      "start": 692,
      "end": 735
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
            "start": 740,
            "end": 757
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
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
                  "start": 761,
                  "end": 767
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 768,
                  "end": 774
                },
                "optional": false,
                "computed": false,
                "start": 761,
                "end": 774
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 775,
                  "end": 776
                }
              ],
              "optional": false,
              "start": 761,
              "end": 777
            },
            "prefix": true,
            "start": 760,
            "end": 777
          },
          "definite": false,
          "start": 740,
          "end": 777
        }
      ],
      "declare": false,
      "start": 736,
      "end": 778
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
            "start": 807,
            "end": 824
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null,
                "start": 829,
                "end": 835
              },
              "prefix": true,
              "start": 828,
              "end": 835
            },
            "prefix": true,
            "start": 827,
            "end": 835
          },
          "definite": false,
          "start": 807,
          "end": 835
        }
      ],
      "declare": false,
      "start": 803,
      "end": 836
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
            "start": 841,
            "end": 858
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 865,
                    "end": 871
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 874,
                    "end": 880
                  },
                  "start": 865,
                  "end": 880
                },
                "prefix": true,
                "start": 863,
                "end": 881
              },
              "prefix": true,
              "start": 862,
              "end": 881
            },
            "prefix": true,
            "start": 861,
            "end": 881
          },
          "definite": false,
          "start": 841,
          "end": 881
        }
      ],
      "declare": false,
      "start": 837,
      "end": 882
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Literal",
          "value": "",
          "raw": "\"\"",
          "start": 914,
          "end": 916
        },
        "prefix": true,
        "start": 913,
        "end": 916
      },
      "directive": null,
      "start": 913,
      "end": 917
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null,
          "start": 919,
          "end": 925
        },
        "prefix": true,
        "start": 918,
        "end": 925
      },
      "directive": null,
      "start": 918,
      "end": 926
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null,
          "start": 928,
          "end": 935
        },
        "prefix": true,
        "start": 927,
        "end": 935
      },
      "directive": null,
      "start": 927,
      "end": 936
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 938,
            "end": 941
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 938,
          "end": 943
        },
        "prefix": true,
        "start": 937,
        "end": 943
      },
      "directive": null,
      "start": 937,
      "end": 944
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 946,
                "end": 950
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 951,
                "end": 952
              },
              "optional": false,
              "computed": false,
              "start": 946,
              "end": 952
            },
            "prefix": true,
            "start": 945,
            "end": 952
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 953,
              "end": 954
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 955,
              "end": 956
            },
            "optional": false,
            "computed": false,
            "start": 953,
            "end": 956
          }
        ],
        "start": 945,
        "end": 956
      },
      "directive": null,
      "start": 945,
      "end": 957
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 29,
  "end": 957
}
```
