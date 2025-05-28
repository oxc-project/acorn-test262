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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 47,
            "decorators": [],
            "name": "STRING",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 41,
                "end": 47
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 85,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 84,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 70,
            "decorators": [],
            "name": "STRING1",
            "optional": false,
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
            }
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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 101,
        "end": 109,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 103,
          "end": 109
        }
      },
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 194,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 135,
        "end": 136,
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 194,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 160,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 192,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 172,
              "end": 175,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 175,
              "end": 192,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 195,
      "end": 233,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 203,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 221,
                  "end": 230,
                  "id": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 230,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 222,
                      "end": 230,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 224,
                        "end": 230
                      }
                    }
                  },
                  "init": null,
                  "definite": false
                }
              ],
              "declare": false
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": []
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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 253,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 246,
            "end": 253,
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": []
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 275,
      "end": 306,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 279,
          "end": 305,
          "id": {
            "type": "Identifier",
            "start": 279,
            "end": 295,
            "decorators": [],
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 298,
            "end": 305,
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "start": 299,
              "end": 305,
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 307,
      "end": 339,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 311,
          "end": 338,
          "id": {
            "type": "Identifier",
            "start": 311,
            "end": 327,
            "decorators": [],
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 330,
            "end": 338,
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "start": 331,
              "end": 338,
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 364,
      "end": 391,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 368,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 368,
            "end": 384,
            "decorators": [],
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 387,
            "end": 390,
            "operator": "!",
            "argument": {
              "type": "Literal",
              "start": 388,
              "end": 390,
              "value": "",
              "raw": "\"\""
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 433,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 396,
          "end": 432,
          "id": {
            "type": "Identifier",
            "start": 396,
            "end": 412,
            "decorators": [],
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 415,
            "end": 432,
            "operator": "!",
            "argument": {
              "type": "ObjectExpression",
              "start": 416,
              "end": 432,
              "properties": [
                {
                  "type": "Property",
                  "start": 418,
                  "end": 423,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 421,
                    "end": 423,
                    "value": "",
                    "raw": "\"\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 425,
                  "end": 430,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 428,
                    "end": 430,
                    "value": "",
                    "raw": "\"\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 434,
      "end": 501,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 438,
          "end": 500,
          "id": {
            "type": "Identifier",
            "start": 438,
            "end": 454,
            "decorators": [],
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 457,
            "end": 500,
            "operator": "!",
            "argument": {
              "type": "ObjectExpression",
              "start": 458,
              "end": 500,
              "properties": [
                {
                  "type": "Property",
                  "start": 460,
                  "end": 465,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 461,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 463,
                    "end": 465,
                    "value": "",
                    "raw": "\"\""
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 467,
                  "end": 498,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 470,
                    "end": 498,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 471,
                        "end": 480,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 472,
                          "end": 480,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 474,
                            "end": 480
                          }
                        }
                      }
                    ],
                    "returnType": null,
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
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ]
                    },
                    "id": null,
                    "generator": false
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 530,
      "end": 561,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 534,
          "end": 560,
          "id": {
            "type": "Identifier",
            "start": 534,
            "end": 550,
            "decorators": [],
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 553,
            "end": 560,
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "start": 554,
              "end": 560,
              "object": {
                "type": "Identifier",
                "start": 554,
                "end": 558,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 559,
                "end": 560,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 562,
      "end": 590,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 566,
          "end": 589,
          "id": {
            "type": "Identifier",
            "start": 566,
            "end": 582,
            "decorators": [],
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 585,
            "end": 589,
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "start": 586,
              "end": 589,
              "object": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 588,
                "end": 589,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 591,
      "end": 626,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 595,
          "end": 625,
          "id": {
            "type": "Identifier",
            "start": 595,
            "end": 611,
            "decorators": [],
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 614,
            "end": 625,
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "start": 615,
              "end": 625,
              "object": {
                "type": "Identifier",
                "start": 615,
                "end": 622,
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 623,
                "end": 624,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 627,
      "end": 657,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 631,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 631,
            "end": 647,
            "decorators": [],
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 650,
            "end": 656,
            "operator": "!",
            "argument": {
              "type": "CallExpression",
              "start": 651,
              "end": 656,
              "callee": {
                "type": "Identifier",
                "start": 651,
                "end": 654,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 658,
      "end": 691,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 679,
            "decorators": [],
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 682,
            "end": 690,
            "operator": "!",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 688,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 692,
      "end": 735,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 734,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 713,
            "decorators": [],
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 716,
            "end": 734,
            "operator": "!",
            "argument": {
              "type": "BinaryExpression",
              "start": 718,
              "end": 733,
              "left": {
                "type": "Identifier",
                "start": 718,
                "end": 724,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 727,
                "end": 733,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 736,
      "end": 778,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 740,
          "end": 777,
          "id": {
            "type": "Identifier",
            "start": 740,
            "end": 757,
            "decorators": [],
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 760,
            "end": 777,
            "operator": "!",
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
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 774,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 775,
                  "end": 776,
                  "value": 0,
                  "raw": "0"
                }
              ],
              "optional": false
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 803,
      "end": 836,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 807,
          "end": 835,
          "id": {
            "type": "Identifier",
            "start": 807,
            "end": 824,
            "decorators": [],
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 827,
            "end": 835,
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "start": 828,
              "end": 835,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 829,
                "end": 835,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 837,
      "end": 882,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 841,
          "end": 881,
          "id": {
            "type": "Identifier",
            "start": 841,
            "end": 858,
            "decorators": [],
            "name": "ResultIsBoolean14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 861,
            "end": 881,
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "start": 862,
              "end": 881,
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "start": 863,
                "end": 881,
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 865,
                  "end": 880,
                  "left": {
                    "type": "Identifier",
                    "start": 865,
                    "end": 871,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 874,
                    "end": 880,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "prefix": true
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
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
        "argument": {
          "type": "Literal",
          "start": 914,
          "end": 916,
          "value": "",
          "raw": "\"\""
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 919,
          "end": 925,
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 928,
          "end": 935,
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "CallExpression",
          "start": 938,
          "end": 943,
          "callee": {
            "type": "Identifier",
            "start": 938,
            "end": 941,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "prefix": true
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
            "argument": {
              "type": "MemberExpression",
              "start": 946,
              "end": 952,
              "object": {
                "type": "Identifier",
                "start": 946,
                "end": 950,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 951,
                "end": 952,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "prefix": true
          },
          {
            "type": "MemberExpression",
            "start": 953,
            "end": 956,
            "object": {
              "type": "Identifier",
              "start": 953,
              "end": 954,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 955,
              "end": 956,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
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
