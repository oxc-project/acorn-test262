__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 957,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 47,
            "name": "STRING",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 85,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 70,
            "name": "STRING1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 60,
              "end": 70,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 62,
                "end": 70,
                "elementType": {
                  "type": "TSStringKeyword",
                  "start": 62,
                  "end": 68
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 73,
            "end": 84,
            "elements": [
              {
                "type": "Literal",
                "start": 74,
                "end": 76,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 78,
                "end": 83,
                "value": "abc",
                "raw": "\"abc\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 127,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 110,
        "end": 127,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 112,
            "end": 125,
            "argument": {
              "type": "Literal",
              "start": 119,
              "end": 124,
              "value": "abc",
              "raw": "\"abc\""
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 109,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 103,
          "end": 109
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 194,
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 194,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 160,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 151,
              "end": 159,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 153,
                "end": 159
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 192,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 175,
              "end": 192,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 178,
                "end": 192,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 180,
                    "end": 190,
                    "argument": {
                      "type": "Literal",
                      "start": 187,
                      "end": 189,
                      "value": "",
                      "raw": "\"\""
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
      "type": "TSModuleDeclaration",
      "start": 195,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 203,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 204,
        "end": 233,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 210,
            "end": 231,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 217,
              "end": 231,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 221,
                  "end": 230,
                  "id": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 230,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 224,
                        "end": 230
                      }
                    },
                    "decorators": [],
                    "optional": false
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "kind": "var",
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "attributes": [],
            "exportKind": "value"
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "VariableDeclaration",
      "start": 235,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 246,
            "end": 253,
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "name": "A",
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 306,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 295,
            "name": "ResultIsBoolean1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 298,
            "end": 305,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 299,
              "end": 305,
              "name": "STRING",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 339,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 327,
            "name": "ResultIsBoolean2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 330,
            "end": 338,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 331,
              "end": 338,
              "name": "STRING1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 364,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 384,
            "name": "ResultIsBoolean3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 387,
            "end": 390,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 388,
              "end": 390,
              "value": "",
              "raw": "\"\""
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 433,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 432,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 412,
            "name": "ResultIsBoolean4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 415,
            "end": 432,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 416,
              "end": 432,
              "properties": [
                {
                  "type": "Property",
                  "start": 418,
                  "end": 423,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 421,
                    "end": 423,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 425,
                  "end": 430,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 428,
                    "end": 430,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 434,
      "end": 501,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 500,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 454,
            "name": "ResultIsBoolean5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 457,
            "end": 500,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 458,
              "end": 500,
              "properties": [
                {
                  "type": "Property",
                  "start": 460,
                  "end": 465,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 461,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 463,
                    "end": 465,
                    "value": "",
                    "raw": "\"\""
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 467,
                  "end": 498,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 470,
                    "end": 498,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 471,
                        "end": 480,
                        "name": "s",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 472,
                          "end": 480,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 474,
                            "end": 480
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 485,
                      "end": 498,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 487,
                          "end": 496,
                          "argument": {
                            "type": "Identifier",
                            "start": 494,
                            "end": 495,
                            "name": "s",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        }
                      ]
                    },
                    "typeParameters": null,
                    "returnType": null
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 530,
      "end": 561,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 560,
          "id": {
            "type": "Identifier",
            "start": 534,
            "end": 550,
            "name": "ResultIsBoolean6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 553,
            "end": 560,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 554,
              "end": 560,
              "object": {
                "type": "Identifier",
                "start": 554,
                "end": 558,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 559,
                "end": 560,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 562,
      "end": 590,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 589,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 582,
            "name": "ResultIsBoolean7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 585,
            "end": 589,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 586,
              "end": 589,
              "object": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 588,
                "end": 589,
                "name": "n",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 591,
      "end": 626,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 595,
          "end": 625,
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 611,
            "name": "ResultIsBoolean8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 614,
            "end": 625,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 615,
              "end": 625,
              "object": {
                "type": "Identifier",
                "start": 615,
                "end": 622,
                "name": "STRING1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 623,
                "end": 624,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 647,
            "name": "ResultIsBoolean9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 650,
            "end": 656,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 651,
              "end": 656,
              "callee": {
                "type": "Identifier",
                "start": 651,
                "end": 654,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 658,
      "end": 691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 679,
            "name": "ResultIsBoolean10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 682,
            "end": 690,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 683,
              "end": 690,
              "callee": {
                "type": "MemberExpression",
                "start": 683,
                "end": 688,
                "object": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 684,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 688,
                  "name": "foo",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 735,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 734,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 713,
            "name": "ResultIsBoolean11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 716,
            "end": 734,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 718,
              "end": 733,
              "left": {
                "type": "Identifier",
                "start": 718,
                "end": 724,
                "name": "STRING",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 727,
                "end": 733,
                "name": "STRING",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 736,
      "end": 778,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 740,
          "end": 777,
          "id": {
            "type": "Identifier",
            "start": 740,
            "end": 757,
            "name": "ResultIsBoolean12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 760,
            "end": 777,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 761,
              "end": 777,
              "callee": {
                "type": "MemberExpression",
                "start": 761,
                "end": 774,
                "object": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 767,
                  "name": "STRING",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 774,
                  "name": "charAt",
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
                  "start": 775,
                  "end": 776,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 803,
      "end": 836,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 807,
          "end": 835,
          "id": {
            "type": "Identifier",
            "start": 807,
            "end": 824,
            "name": "ResultIsBoolean13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 827,
            "end": 835,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 828,
              "end": 835,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 829,
                "end": 835,
                "name": "STRING",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 837,
      "end": 882,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 841,
          "end": 881,
          "id": {
            "type": "Identifier",
            "start": 841,
            "end": 858,
            "name": "ResultIsBoolean14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 861,
            "end": 881,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 862,
              "end": 881,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 863,
                "end": 881,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 865,
                  "end": 880,
                  "left": {
                    "type": "Identifier",
                    "start": 865,
                    "end": 871,
                    "name": "STRING",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 874,
                    "end": 880,
                    "name": "STRING",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 913,
      "end": 917,
      "expression": {
        "type": "UnaryExpression",
        "start": 913,
        "end": 916,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 914,
          "end": 916,
          "value": "",
          "raw": "\"\""
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 918,
      "end": 926,
      "expression": {
        "type": "UnaryExpression",
        "start": 918,
        "end": 925,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 919,
          "end": 925,
          "name": "STRING",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 927,
      "end": 936,
      "expression": {
        "type": "UnaryExpression",
        "start": 927,
        "end": 935,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 928,
          "end": 935,
          "name": "STRING1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 937,
      "end": 944,
      "expression": {
        "type": "UnaryExpression",
        "start": 937,
        "end": 943,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 938,
          "end": 943,
          "callee": {
            "type": "Identifier",
            "start": 938,
            "end": 941,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 945,
      "end": 957,
      "expression": {
        "type": "SequenceExpression",
        "start": 945,
        "end": 956,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 945,
            "end": 952,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 946,
              "end": 952,
              "object": {
                "type": "Identifier",
                "start": 946,
                "end": 950,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 951,
                "end": 952,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            }
          },
          {
            "type": "MemberExpression",
            "start": 953,
            "end": 956,
            "object": {
              "type": "Identifier",
              "start": 953,
              "end": 954,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 955,
              "end": 956,
              "name": "n",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          }
        ]
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
