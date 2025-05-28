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
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 49,
      "end": 80,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 79,
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
        "start": 96,
        "end": 104,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 98,
          "end": 104
        }
      },
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 120,
      "end": 184,
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
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 151,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "start": 156,
            "end": 182,
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
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 182,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "start": 185,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 211,
                  "end": 220,
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
      "start": 225,
      "end": 244,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 243,
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
            "callee": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
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
      "start": 265,
      "end": 296,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 295,
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
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "start": 289,
              "end": 295,
              "decorators": [],
              "name": "NUMBER",
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
      "start": 297,
      "end": 329,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 301,
          "end": 328,
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
            "operator": "!",
            "argument": {
              "type": "Identifier",
              "start": 321,
              "end": 328,
              "decorators": [],
              "name": "NUMBER1",
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
      "start": 354,
      "end": 380,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 379,
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
            "operator": "!",
            "argument": {
              "type": "Literal",
              "start": 378,
              "end": 379,
              "value": 1,
              "raw": "1"
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
      "start": 381,
      "end": 419,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 385,
          "end": 418,
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
            "operator": "!",
            "argument": {
              "type": "ObjectExpression",
              "start": 405,
              "end": 418,
              "properties": [
                {
                  "type": "Property",
                  "start": 407,
                  "end": 411,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 407,
                    "end": 408,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 410,
                    "end": 411,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 413,
                  "end": 417,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 413,
                    "end": 414,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 416,
                    "end": 417,
                    "value": 2,
                    "raw": "2"
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
      "start": 420,
      "end": 486,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 485,
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
            "operator": "!",
            "argument": {
              "type": "ObjectExpression",
              "start": 444,
              "end": 485,
              "properties": [
                {
                  "type": "Property",
                  "start": 446,
                  "end": 450,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 446,
                    "end": 447,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 449,
                    "end": 450,
                    "value": 1,
                    "raw": "1"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 452,
                  "end": 483,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 452,
                    "end": 453,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 455,
                    "end": 483,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
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
      "start": 515,
      "end": 546,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 519,
          "end": 545,
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
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "start": 539,
              "end": 545,
              "object": {
                "type": "Identifier",
                "start": 539,
                "end": 543,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 544,
                "end": 545,
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
      "start": 547,
      "end": 575,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 551,
          "end": 574,
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
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "start": 571,
              "end": 574,
              "object": {
                "type": "Identifier",
                "start": 571,
                "end": 572,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 573,
                "end": 574,
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
      "start": 576,
      "end": 611,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 580,
          "end": 610,
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
            "operator": "!",
            "argument": {
              "type": "MemberExpression",
              "start": 600,
              "end": 610,
              "object": {
                "type": "Identifier",
                "start": 600,
                "end": 607,
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 608,
                "end": 609,
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
      "start": 612,
      "end": 642,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 641,
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
            "operator": "!",
            "argument": {
              "type": "CallExpression",
              "start": 636,
              "end": 641,
              "callee": {
                "type": "Identifier",
                "start": 636,
                "end": 639,
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
      "start": 643,
      "end": 676,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 647,
          "end": 675,
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
            "operator": "!",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 673,
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
      "start": 677,
      "end": 720,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 681,
          "end": 719,
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
            "operator": "!",
            "argument": {
              "type": "BinaryExpression",
              "start": 703,
              "end": 718,
              "left": {
                "type": "Identifier",
                "start": 703,
                "end": 709,
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
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
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 745,
      "end": 778,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 749,
          "end": 777,
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
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "start": 770,
              "end": 777,
              "operator": "!",
              "argument": {
                "type": "Identifier",
                "start": 771,
                "end": 777,
                "decorators": [],
                "name": "NUMBER",
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
      "start": 779,
      "end": 824,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 783,
          "end": 823,
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
            "operator": "!",
            "argument": {
              "type": "UnaryExpression",
              "start": 804,
              "end": 823,
              "operator": "!",
              "argument": {
                "type": "UnaryExpression",
                "start": 805,
                "end": 823,
                "operator": "!",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 807,
                  "end": 822,
                  "left": {
                    "type": "Identifier",
                    "start": 807,
                    "end": 813,
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
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
      "start": 855,
      "end": 858,
      "expression": {
        "type": "UnaryExpression",
        "start": 855,
        "end": 857,
        "operator": "!",
        "argument": {
          "type": "Literal",
          "start": 856,
          "end": 857,
          "value": 1,
          "raw": "1"
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 860,
          "end": 866,
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 869,
          "end": 876,
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
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
        "argument": {
          "type": "CallExpression",
          "start": 879,
          "end": 884,
          "callee": {
            "type": "Identifier",
            "start": 879,
            "end": 882,
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
      "start": 886,
      "end": 894,
      "expression": {
        "type": "UnaryExpression",
        "start": 886,
        "end": 893,
        "operator": "!",
        "argument": {
          "type": "MemberExpression",
          "start": 887,
          "end": 893,
          "object": {
            "type": "Identifier",
            "start": 887,
            "end": 891,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 892,
            "end": 893,
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
        "argument": {
          "type": "MemberExpression",
          "start": 896,
          "end": 899,
          "object": {
            "type": "Identifier",
            "start": 896,
            "end": 897,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 898,
            "end": 899,
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
            "argument": {
              "type": "MemberExpression",
              "start": 902,
              "end": 908,
              "object": {
                "type": "Identifier",
                "start": 902,
                "end": 906,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 907,
                "end": 908,
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
            "start": 910,
            "end": 913,
            "object": {
              "type": "Identifier",
              "start": 910,
              "end": 911,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 912,
              "end": 913,
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
