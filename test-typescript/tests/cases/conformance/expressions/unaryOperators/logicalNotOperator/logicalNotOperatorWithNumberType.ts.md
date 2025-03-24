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
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 47,
            "name": "NUMBER",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
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
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 70,
            "name": "NUMBER1",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 77,
                "end": 78,
                "value": 2,
                "raw": "2"
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
      "start": 82,
      "end": 118,
      "id": {
        "type": "Identifier",
        "start": 91,
        "end": 94,
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
              "value": 1,
              "raw": "1"
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 96,
        "end": 104,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 98,
          "end": 104
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 120,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 151,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
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
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 182,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 182,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
                      "value": 1,
                      "raw": "1"
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
      "start": 185,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 194,
        "end": 223,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 200,
            "end": 221,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 207,
              "end": 221,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 211,
                  "end": 220,
                  "id": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 220,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 212,
                      "end": 220,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 214,
                        "end": 220
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
      "start": 225,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 233,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 236,
            "end": 243,
            "callee": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
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
      "start": 265,
      "end": 296,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 295,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 285,
            "name": "ResultIsBoolean1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 288,
            "end": 295,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 289,
              "end": 295,
              "name": "NUMBER",
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
      "start": 297,
      "end": 329,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 328,
          "id": {
            "type": "Identifier",
            "start": 301,
            "end": 317,
            "name": "ResultIsBoolean2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 320,
            "end": 328,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 321,
              "end": 328,
              "name": "NUMBER1",
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
      "start": 354,
      "end": 380,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 379,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 374,
            "name": "ResultIsBoolean3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 377,
            "end": 379,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 378,
              "end": 379,
              "value": 1,
              "raw": "1"
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
      "start": 381,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 385,
            "end": 401,
            "name": "ResultIsBoolean4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 404,
            "end": 418,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 405,
              "end": 418,
              "properties": [
                {
                  "type": "Property",
                  "start": 407,
                  "end": 411,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 408,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 410,
                    "end": 411,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 413,
                  "end": 417,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 416,
                    "end": 417,
                    "value": 2,
                    "raw": "2"
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
      "start": 420,
      "end": 486,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 485,
          "id": {
            "type": "Identifier",
            "start": 424,
            "end": 440,
            "name": "ResultIsBoolean5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 443,
            "end": 485,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 444,
              "end": 485,
              "properties": [
                {
                  "type": "Property",
                  "start": 446,
                  "end": 450,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 447,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 449,
                    "end": 450,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 452,
                  "end": 483,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 453,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 455,
                    "end": 483,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 456,
                        "end": 465,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 457,
                          "end": 465,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 459,
                            "end": 465
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
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
                            "name": "n",
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
      "start": 515,
      "end": 546,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 519,
          "end": 545,
          "id": {
            "type": "Identifier",
            "start": 519,
            "end": 535,
            "name": "ResultIsBoolean6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 538,
            "end": 545,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 539,
              "end": 545,
              "object": {
                "type": "Identifier",
                "start": 539,
                "end": 543,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 544,
                "end": 545,
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
      "start": 547,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 551,
            "end": 567,
            "name": "ResultIsBoolean7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 570,
            "end": 574,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 571,
              "end": 574,
              "object": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 573,
                "end": 574,
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
      "start": 576,
      "end": 611,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 580,
          "end": 610,
          "id": {
            "type": "Identifier",
            "start": 580,
            "end": 596,
            "name": "ResultIsBoolean8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 599,
            "end": 610,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 600,
              "end": 610,
              "object": {
                "type": "Identifier",
                "start": 600,
                "end": 607,
                "name": "NUMBER1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 608,
                "end": 609,
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
      "start": 612,
      "end": 642,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 641,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 632,
            "name": "ResultIsBoolean9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 635,
            "end": 641,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 636,
              "end": 641,
              "callee": {
                "type": "Identifier",
                "start": 636,
                "end": 639,
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
      "start": 643,
      "end": 676,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 647,
          "end": 675,
          "id": {
            "type": "Identifier",
            "start": 647,
            "end": 664,
            "name": "ResultIsBoolean10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 667,
            "end": 675,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 668,
              "end": 675,
              "callee": {
                "type": "MemberExpression",
                "start": 668,
                "end": 673,
                "object": {
                  "type": "Identifier",
                  "start": 668,
                  "end": 669,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 673,
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
      "start": 677,
      "end": 720,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 681,
          "end": 719,
          "id": {
            "type": "Identifier",
            "start": 681,
            "end": 698,
            "name": "ResultIsBoolean11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 701,
            "end": 719,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 703,
              "end": 718,
              "left": {
                "type": "Identifier",
                "start": 703,
                "end": 709,
                "name": "NUMBER",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 712,
                "end": 718,
                "name": "NUMBER",
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
      "start": 745,
      "end": 778,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 777,
          "id": {
            "type": "Identifier",
            "start": 749,
            "end": 766,
            "name": "ResultIsBoolean12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 769,
            "end": 777,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 770,
              "end": 777,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 771,
                "end": 777,
                "name": "NUMBER",
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
      "start": 779,
      "end": 824,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 783,
          "end": 823,
          "id": {
            "type": "Identifier",
            "start": 783,
            "end": 800,
            "name": "ResultIsBoolean13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 803,
            "end": 823,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 804,
              "end": 823,
              "operator": "!",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 805,
                "end": 823,
                "operator": "!",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 807,
                  "end": 822,
                  "left": {
                    "type": "Identifier",
                    "start": 807,
                    "end": 813,
                    "name": "NUMBER",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 816,
                    "end": 822,
                    "name": "NUMBER",
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
      "start": 855,
      "end": 858,
      "expression": {
        "type": "UnaryExpression",
        "start": 855,
        "end": 857,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 856,
          "end": 857,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 859,
      "end": 867,
      "expression": {
        "type": "UnaryExpression",
        "start": 859,
        "end": 866,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 860,
          "end": 866,
          "name": "NUMBER",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 868,
      "end": 877,
      "expression": {
        "type": "UnaryExpression",
        "start": 868,
        "end": 876,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 869,
          "end": 876,
          "name": "NUMBER1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 878,
      "end": 885,
      "expression": {
        "type": "UnaryExpression",
        "start": 878,
        "end": 884,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 879,
          "end": 884,
          "callee": {
            "type": "Identifier",
            "start": 879,
            "end": 882,
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
      "start": 886,
      "end": 894,
      "expression": {
        "type": "UnaryExpression",
        "start": 886,
        "end": 893,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 887,
          "end": 893,
          "object": {
            "type": "Identifier",
            "start": 887,
            "end": 891,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 892,
            "end": 893,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 895,
      "end": 900,
      "expression": {
        "type": "UnaryExpression",
        "start": 895,
        "end": 899,
        "operator": "!",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 896,
          "end": 899,
          "object": {
            "type": "Identifier",
            "start": 896,
            "end": 897,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 898,
            "end": 899,
            "name": "n",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 901,
      "end": 914,
      "expression": {
        "type": "SequenceExpression",
        "start": 901,
        "end": 913,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 901,
            "end": 908,
            "operator": "!",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 902,
              "end": 908,
              "object": {
                "type": "Identifier",
                "start": 902,
                "end": 906,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 907,
                "end": 908,
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
            "start": 910,
            "end": 913,
            "object": {
              "type": "Identifier",
              "start": 910,
              "end": 911,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 912,
              "end": 913,
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
