__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 33,
  "end": 963,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 33,
      "end": 52,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 37,
          "end": 51,
          "id": {
            "type": "Identifier",
            "start": 37,
            "end": 51,
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 43,
              "end": 51,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 45,
                "end": 51
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
      "start": 53,
      "end": 84,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 57,
          "end": 83,
          "id": {
            "type": "Identifier",
            "start": 57,
            "end": 74,
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 74,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 66,
                "end": 74,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 66,
                  "end": 72
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 77,
            "end": 83,
            "elements": [
              {
                "type": "Literal",
                "start": 78,
                "end": 79,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 81,
                "end": 82,
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
      "start": 86,
      "end": 122,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 98,
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
        "start": 100,
        "end": 108,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 102,
          "end": 108
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 109,
        "end": 122,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 111,
            "end": 120,
            "argument": {
              "type": "Literal",
              "start": 118,
              "end": 119,
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
      "start": 124,
      "end": 188,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 130,
        "end": 131,
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
        "start": 132,
        "end": 188,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 138,
            "end": 155,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 146,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 146,
              "end": 154,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 148,
                "end": 154
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
            "start": 160,
            "end": 186,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 167,
              "end": 170,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 170,
              "end": 186,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 173,
                "end": 186,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 175,
                    "end": 184,
                    "argument": {
                      "type": "Literal",
                      "start": 182,
                      "end": 183,
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
      "start": 189,
      "end": 227,
      "id": {
        "type": "Identifier",
        "start": 196,
        "end": 197,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 198,
        "end": 227,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 204,
            "end": 225,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 211,
              "end": 225,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 215,
                  "end": 224,
                  "id": {
                    "type": "Identifier",
                    "start": 215,
                    "end": 224,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 216,
                      "end": 224,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 218,
                        "end": 224
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
      "start": 229,
      "end": 248,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 233,
          "end": 247,
          "id": {
            "type": "Identifier",
            "start": 233,
            "end": 237,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 240,
            "end": 247,
            "callee": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
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
      "start": 269,
      "end": 300,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 273,
          "end": 299,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 285,
            "decorators": [],
            "name": "ResultIsAny1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 288,
            "end": 299,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 293,
              "end": 299,
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
      "start": 301,
      "end": 333,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 305,
          "end": 332,
          "id": {
            "type": "Identifier",
            "start": 305,
            "end": 317,
            "decorators": [],
            "name": "ResultIsAny2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 320,
            "end": 332,
            "operator": "void",
            "argument": {
              "type": "Identifier",
              "start": 325,
              "end": 332,
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
      "start": 358,
      "end": 384,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 362,
          "end": 383,
          "id": {
            "type": "Identifier",
            "start": 362,
            "end": 374,
            "decorators": [],
            "name": "ResultIsAny3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 377,
            "end": 383,
            "operator": "void",
            "argument": {
              "type": "Literal",
              "start": 382,
              "end": 383,
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
      "start": 385,
      "end": 423,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 389,
          "end": 422,
          "id": {
            "type": "Identifier",
            "start": 389,
            "end": 401,
            "decorators": [],
            "name": "ResultIsAny4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 404,
            "end": 422,
            "operator": "void",
            "argument": {
              "type": "ObjectExpression",
              "start": 409,
              "end": 422,
              "properties": [
                {
                  "type": "Property",
                  "start": 411,
                  "end": 415,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 411,
                    "end": 412,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 414,
                    "end": 415,
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
                  "start": 417,
                  "end": 421,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 417,
                    "end": 418,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 420,
                    "end": 421,
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
      "start": 424,
      "end": 490,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 428,
          "end": 489,
          "id": {
            "type": "Identifier",
            "start": 428,
            "end": 440,
            "decorators": [],
            "name": "ResultIsAny5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 443,
            "end": 489,
            "operator": "void",
            "argument": {
              "type": "ObjectExpression",
              "start": 448,
              "end": 489,
              "properties": [
                {
                  "type": "Property",
                  "start": 450,
                  "end": 454,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 450,
                    "end": 451,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 453,
                    "end": 454,
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
                  "start": 456,
                  "end": 487,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 456,
                    "end": 457,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 459,
                    "end": 487,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 460,
                        "end": 469,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 461,
                          "end": 469,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 463,
                            "end": 469
                          }
                        }
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "start": 474,
                      "end": 487,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 476,
                          "end": 485,
                          "argument": {
                            "type": "Identifier",
                            "start": 483,
                            "end": 484,
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
      "start": 519,
      "end": 550,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 523,
          "end": 549,
          "id": {
            "type": "Identifier",
            "start": 523,
            "end": 535,
            "decorators": [],
            "name": "ResultIsAny6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 538,
            "end": 549,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 543,
              "end": 549,
              "object": {
                "type": "Identifier",
                "start": 543,
                "end": 547,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 548,
                "end": 549,
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
      "start": 551,
      "end": 579,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 555,
          "end": 578,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 567,
            "decorators": [],
            "name": "ResultIsAny7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 570,
            "end": 578,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 575,
              "end": 578,
              "object": {
                "type": "Identifier",
                "start": 575,
                "end": 576,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 577,
                "end": 578,
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
      "start": 580,
      "end": 615,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 584,
          "end": 614,
          "id": {
            "type": "Identifier",
            "start": 584,
            "end": 596,
            "decorators": [],
            "name": "ResultIsAny8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 599,
            "end": 614,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 604,
              "end": 614,
              "object": {
                "type": "Identifier",
                "start": 604,
                "end": 611,
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 612,
                "end": 613,
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
      "start": 616,
      "end": 646,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 620,
          "end": 645,
          "id": {
            "type": "Identifier",
            "start": 620,
            "end": 632,
            "decorators": [],
            "name": "ResultIsAny9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 635,
            "end": 645,
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "start": 640,
              "end": 645,
              "callee": {
                "type": "Identifier",
                "start": 640,
                "end": 643,
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
      "start": 647,
      "end": 680,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 651,
          "end": 679,
          "id": {
            "type": "Identifier",
            "start": 651,
            "end": 664,
            "decorators": [],
            "name": "ResultIsAny10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 667,
            "end": 679,
            "operator": "void",
            "argument": {
              "type": "CallExpression",
              "start": 672,
              "end": 679,
              "callee": {
                "type": "MemberExpression",
                "start": 672,
                "end": 677,
                "object": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 674,
                  "end": 677,
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
      "start": 681,
      "end": 724,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 685,
          "end": 723,
          "id": {
            "type": "Identifier",
            "start": 685,
            "end": 698,
            "decorators": [],
            "name": "ResultIsAny11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 701,
            "end": 723,
            "operator": "void",
            "argument": {
              "type": "BinaryExpression",
              "start": 707,
              "end": 722,
              "left": {
                "type": "Identifier",
                "start": 707,
                "end": 713,
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 716,
                "end": 722,
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
      "start": 754,
      "end": 791,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 758,
          "end": 790,
          "id": {
            "type": "Identifier",
            "start": 758,
            "end": 771,
            "decorators": [],
            "name": "ResultIsAny12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 774,
            "end": 790,
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "start": 779,
              "end": 790,
              "operator": "void",
              "argument": {
                "type": "Identifier",
                "start": 784,
                "end": 790,
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
      "start": 792,
      "end": 845,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 796,
          "end": 844,
          "id": {
            "type": "Identifier",
            "start": 796,
            "end": 809,
            "decorators": [],
            "name": "ResultIsAny13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 812,
            "end": 844,
            "operator": "void",
            "argument": {
              "type": "UnaryExpression",
              "start": 817,
              "end": 844,
              "operator": "void",
              "argument": {
                "type": "UnaryExpression",
                "start": 822,
                "end": 844,
                "operator": "void",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 828,
                  "end": 843,
                  "left": {
                    "type": "Identifier",
                    "start": 828,
                    "end": 834,
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 837,
                    "end": 843,
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
      "start": 876,
      "end": 883,
      "expression": {
        "type": "UnaryExpression",
        "start": 876,
        "end": 882,
        "operator": "void",
        "argument": {
          "type": "Literal",
          "start": 881,
          "end": 882,
          "value": 1,
          "raw": "1"
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 884,
      "end": 896,
      "expression": {
        "type": "UnaryExpression",
        "start": 884,
        "end": 895,
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "start": 889,
          "end": 895,
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
      "start": 897,
      "end": 910,
      "expression": {
        "type": "UnaryExpression",
        "start": 897,
        "end": 909,
        "operator": "void",
        "argument": {
          "type": "Identifier",
          "start": 902,
          "end": 909,
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
      "start": 911,
      "end": 922,
      "expression": {
        "type": "UnaryExpression",
        "start": 911,
        "end": 921,
        "operator": "void",
        "argument": {
          "type": "CallExpression",
          "start": 916,
          "end": 921,
          "callee": {
            "type": "Identifier",
            "start": 916,
            "end": 919,
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
      "start": 923,
      "end": 935,
      "expression": {
        "type": "UnaryExpression",
        "start": 923,
        "end": 934,
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "start": 928,
          "end": 934,
          "object": {
            "type": "Identifier",
            "start": 928,
            "end": 932,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 933,
            "end": 934,
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
      "start": 936,
      "end": 945,
      "expression": {
        "type": "UnaryExpression",
        "start": 936,
        "end": 944,
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "start": 941,
          "end": 944,
          "object": {
            "type": "Identifier",
            "start": 941,
            "end": 942,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 943,
            "end": 944,
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
      "start": 946,
      "end": 963,
      "expression": {
        "type": "SequenceExpression",
        "start": 946,
        "end": 962,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 946,
            "end": 957,
            "operator": "void",
            "argument": {
              "type": "MemberExpression",
              "start": 951,
              "end": 957,
              "object": {
                "type": "Identifier",
                "start": 951,
                "end": 955,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 956,
                "end": 957,
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
            "start": 959,
            "end": 962,
            "object": {
              "type": "Identifier",
              "start": 959,
              "end": 960,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 961,
              "end": 962,
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
