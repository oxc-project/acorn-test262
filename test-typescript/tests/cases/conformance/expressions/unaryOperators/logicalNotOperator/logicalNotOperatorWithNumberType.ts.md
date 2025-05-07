__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 914,
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
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
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
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 70,
            "decorators": [],
            "name": "NUMBER1",
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
                  "type": "TSNumberKeyword",
                  "start": 62,
                  "end": 68
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 73,
            "end": 79,
            "elements": [
              {
                "type": "Literal",
                "start": 74,
                "end": 75,
                "raw": "1",
                "value": 1,
                "regex": null,
                "bigint": null
              },
              {
                "type": "Literal",
                "start": 77,
                "end": 78,
                "raw": "2",
                "value": 2,
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
      "start": 82,
      "end": 118,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 105,
        "end": 118,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 107,
            "end": 116,
            "argument": {
              "type": "Literal",
              "start": 114,
              "end": 115,
              "raw": "1",
              "value": 1,
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
        "start": 91,
        "end": 94,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 96,
        "end": 104,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 98,
          "end": 104
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 120,
      "end": 184,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 151,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
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
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 182,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
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
              "start": 166,
              "end": 182,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 169,
                "end": 182,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 171,
                    "end": 180,
                    "argument": {
                      "type": "Literal",
                      "start": 178,
                      "end": 179,
                      "raw": "1",
                      "value": 1,
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
        "start": 126,
        "end": 127,
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
      "start": 185,
      "end": 223,
      "body": {
        "type": "TSModuleBlock",
        "start": 194,
        "end": 223,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 200,
            "end": 221,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 207,
              "end": 221,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 211,
                  "end": 220,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 220,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 212,
                      "end": 220,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 214,
                        "end": 220
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
        "start": 192,
        "end": 193,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
    },
    {
      "type": "VariableDeclaration",
      "start": 225,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 243,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 233,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 236,
            "end": 243,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
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
      "start": 265,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 295,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 285,
            "decorators": [],
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 288,
            "end": 295,
            "argument": {
              "type": "Identifier",
              "start": 289,
              "end": 295,
              "decorators": [],
              "name": "NUMBER",
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
      "start": 297,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 328,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 317,
            "decorators": [],
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 320,
            "end": 328,
            "argument": {
              "type": "Identifier",
              "start": 321,
              "end": 328,
              "decorators": [],
              "name": "NUMBER1",
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
      "start": 354,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 379,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 374,
            "decorators": [],
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 377,
            "end": 379,
            "argument": {
              "type": "Literal",
              "start": 378,
              "end": 379,
              "raw": "1",
              "value": 1,
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
      "start": 381,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 401,
            "decorators": [],
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 404,
            "end": 418,
            "argument": {
              "type": "ObjectExpression",
              "start": 405,
              "end": 418,
              "properties": [
                {
                  "type": "Property",
                  "start": 407,
                  "end": 411,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 408,
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
                    "start": 410,
                    "end": 411,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 413,
                  "end": 417,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
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
                    "start": 416,
                    "end": 417,
                    "raw": "2",
                    "value": 2,
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
      "start": 420,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 485,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 440,
            "decorators": [],
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 443,
            "end": 485,
            "argument": {
              "type": "ObjectExpression",
              "start": 444,
              "end": 485,
              "properties": [
                {
                  "type": "Property",
                  "start": 446,
                  "end": 450,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 447,
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
                    "start": 449,
                    "end": 450,
                    "raw": "1",
                    "value": 1,
                    "regex": null,
                    "bigint": null
                  }
                },
                {
                  "type": "Property",
                  "start": 452,
                  "end": 483,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 453,
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
                    "start": 455,
                    "end": 483,
                    "async": false,
                    "body": {
                      "type": "BlockStatement",
                      "start": 470,
                      "end": 483,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 472,
                          "end": 481,
                          "argument": {
                            "type": "Identifier",
                            "start": 479,
                            "end": 480,
                            "decorators": [],
                            "name": "n",
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
                        "start": 456,
                        "end": 465,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 457,
                          "end": 465,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 459,
                            "end": 465
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
      "start": 515,
      "end": 546,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 519,
          "end": 545,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 535,
            "decorators": [],
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 538,
            "end": 545,
            "argument": {
              "type": "MemberExpression",
              "start": 539,
              "end": 545,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 539,
                "end": 543,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 544,
                "end": 545,
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
      "start": 547,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 574,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 551,
            "end": 567,
            "decorators": [],
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 570,
            "end": 574,
            "argument": {
              "type": "MemberExpression",
              "start": 571,
              "end": 574,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 573,
                "end": 574,
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
      "start": 576,
      "end": 611,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 580,
          "end": 610,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 580,
            "end": 596,
            "decorators": [],
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 599,
            "end": 610,
            "argument": {
              "type": "MemberExpression",
              "start": 600,
              "end": 610,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 600,
                "end": 607,
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 608,
                "end": 609,
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
      "start": 612,
      "end": 642,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 641,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 632,
            "decorators": [],
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 635,
            "end": 641,
            "argument": {
              "type": "CallExpression",
              "start": 636,
              "end": 641,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 636,
                "end": 639,
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
      "start": 643,
      "end": 676,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 647,
          "end": 675,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 647,
            "end": 664,
            "decorators": [],
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 667,
            "end": 675,
            "argument": {
              "type": "CallExpression",
              "start": 668,
              "end": 675,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 668,
                "end": 673,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 669,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 673,
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
      "start": 677,
      "end": 720,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 681,
          "end": 719,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 681,
            "end": 698,
            "decorators": [],
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 701,
            "end": 719,
            "argument": {
              "type": "BinaryExpression",
              "start": 703,
              "end": 718,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 703,
                "end": 709,
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 712,
                "end": 718,
                "decorators": [],
                "name": "NUMBER",
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
      "start": 745,
      "end": 778,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 777,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 766,
            "decorators": [],
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 769,
            "end": 777,
            "argument": {
              "type": "UnaryExpression",
              "start": 770,
              "end": 777,
              "argument": {
                "type": "Identifier",
                "start": 771,
                "end": 777,
                "decorators": [],
                "name": "NUMBER",
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
      "start": 779,
      "end": 824,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 783,
          "end": 823,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 783,
            "end": 800,
            "decorators": [],
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 803,
            "end": 823,
            "argument": {
              "type": "UnaryExpression",
              "start": 804,
              "end": 823,
              "argument": {
                "type": "UnaryExpression",
                "start": 805,
                "end": 823,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 807,
                  "end": 822,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 807,
                    "end": 813,
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 822,
                    "decorators": [],
                    "name": "NUMBER",
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
      "start": 855,
      "end": 858,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 855,
        "end": 857,
        "argument": {
          "type": "Literal",
          "start": 856,
          "end": 857,
          "raw": "1",
          "value": 1,
          "regex": null,
          "bigint": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 859,
      "end": 867,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 859,
        "end": 866,
        "argument": {
          "type": "Identifier",
          "start": 860,
          "end": 866,
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 868,
      "end": 877,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 868,
        "end": 876,
        "argument": {
          "type": "Identifier",
          "start": 869,
          "end": 876,
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 878,
      "end": 885,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 878,
        "end": 884,
        "argument": {
          "type": "CallExpression",
          "start": 879,
          "end": 884,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 879,
            "end": 882,
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
      "start": 886,
      "end": 894,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 886,
        "end": 893,
        "argument": {
          "type": "MemberExpression",
          "start": 887,
          "end": 893,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 887,
            "end": 891,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 892,
            "end": 893,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 895,
      "end": 900,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 895,
        "end": 899,
        "argument": {
          "type": "MemberExpression",
          "start": 896,
          "end": 899,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 896,
            "end": 897,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 898,
            "end": 899,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "!",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 901,
      "end": 914,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 901,
        "end": 913,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 901,
            "end": 908,
            "argument": {
              "type": "MemberExpression",
              "start": 902,
              "end": 908,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 902,
                "end": 906,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 907,
                "end": 908,
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
            "start": 910,
            "end": 913,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 910,
              "end": 911,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 912,
              "end": 913,
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
