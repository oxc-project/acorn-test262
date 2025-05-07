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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                "raw": "\"\"",
                "value": "",
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 78,
                "end": 83,
                "raw": "\"abc\"",
                "value": "abc",
                "regex": null,
                "bigint": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 87,
      "end": 127,
      "async": false,
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
              "raw": "\"abc\"",
              "value": "abc",
              "regex": null,
              "bigint": null
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 96,
        "end": 99,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 129,
      "end": 194,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 137,
        "end": 194,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 143,
            "end": 160,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 165,
            "end": 192,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 175,
              "end": 192,
              "async": false,
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
                      "raw": "\"\"",
                      "value": "",
                      "regex": null,
                      "bigint": null
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 195,
      "end": 233,
      "body": {
        "type": "TSModuleBlock",
        "start": 204,
        "end": 233,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 210,
            "end": 231,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 217,
              "end": 231,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 221,
                  "end": 230,
                  "definite": false,
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
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 202,
        "end": 203,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 250,
              "end": 251,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 299,
              "end": 305,
              "decorators": [],
              "name": "STRING",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 331,
              "end": 338,
              "decorators": [],
              "name": "STRING1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Literal",
              "start": 388,
              "end": 390,
              "raw": "\"\"",
              "value": "",
              "regex": null,
              "bigint": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "ObjectExpression",
              "start": 416,
              "end": 432,
              "properties": [
                {
                  "type": "Property",
                  "start": 418,
                  "end": 423,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 421,
                    "end": 423,
                    "raw": "\"\"",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 425,
                  "end": 430,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 425,
                    "end": 426,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 428,
                    "end": 430,
                    "raw": "\"\"",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  }
                }
              ]
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "ObjectExpression",
              "start": 458,
              "end": 500,
              "properties": [
                {
                  "type": "Property",
                  "start": 460,
                  "end": 465,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 460,
                    "end": 461,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 463,
                    "end": 465,
                    "raw": "\"\"",
                    "value": "",
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 467,
                  "end": 498,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 467,
                    "end": 468,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 470,
                    "end": 498,
                    "async": false,
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
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
                  }
                }
              ]
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 554,
              "end": 560,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 554,
                "end": 558,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 559,
                "end": 560,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 586,
              "end": 589,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 588,
                "end": 589,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 615,
              "end": 625,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 615,
                "end": 622,
                "decorators": [],
                "name": "STRING1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 623,
                "end": 624,
                "raw": "0",
                "value": 0,
                "regex": null,
                "bigint": null
              }
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 651,
              "end": 656,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 651,
                "end": 654,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 683,
              "end": 690,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 683,
                "end": 688,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 683,
                  "end": 684,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 685,
                  "end": 688,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "BinaryExpression",
              "start": 718,
              "end": 733,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 718,
                "end": 724,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
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
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 761,
              "end": 777,
              "arguments": [
                {
                  "type": "Literal",
                  "start": 775,
                  "end": 776,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 761,
                "end": 774,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 761,
                  "end": 767,
                  "decorators": [],
                  "name": "STRING",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 768,
                  "end": 774,
                  "decorators": [],
                  "name": "charAt",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "UnaryExpression",
              "start": 828,
              "end": 835,
              "argument": {
                "type": "Identifier",
                "start": 829,
                "end": 835,
                "decorators": [],
                "name": "STRING",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "!",
              "prefix": true
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "UnaryExpression",
              "start": 862,
              "end": 881,
              "argument": {
                "type": "UnaryExpression",
                "start": 863,
                "end": 881,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 865,
                  "end": 880,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 865,
                    "end": 871,
                    "decorators": [],
                    "name": "STRING",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                "operator": "!",
                "prefix": true
              },
              "operator": "!",
              "prefix": true
            },
            "operator": "!",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 913,
      "end": 917,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 913,
        "end": 916,
        "argument": {
          "type": "Literal",
          "start": 914,
          "end": 916,
          "raw": "\"\"",
          "value": "",
          "regex": null,
          "bigint": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 918,
      "end": 926,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 918,
        "end": 925,
        "argument": {
          "type": "Identifier",
          "start": 919,
          "end": 925,
          "decorators": [],
          "name": "STRING",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 927,
      "end": 936,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 927,
        "end": 935,
        "argument": {
          "type": "Identifier",
          "start": 928,
          "end": 935,
          "decorators": [],
          "name": "STRING1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 937,
      "end": 944,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 937,
        "end": 943,
        "argument": {
          "type": "CallExpression",
          "start": 938,
          "end": 943,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 938,
            "end": 941,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 945,
      "end": 957,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 945,
        "end": 956,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 945,
            "end": 952,
            "argument": {
              "type": "MemberExpression",
              "start": 946,
              "end": 952,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 946,
                "end": 950,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 951,
                "end": 952,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "!",
            "prefix": true
          },
          {
            "type": "MemberExpression",
            "start": 953,
            "end": 956,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 953,
              "end": 954,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 955,
              "end": 956,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
