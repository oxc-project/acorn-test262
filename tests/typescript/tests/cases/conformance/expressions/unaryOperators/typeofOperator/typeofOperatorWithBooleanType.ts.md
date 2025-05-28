__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 36,
  "end": 985,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 36,
      "end": 57,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 40,
          "end": 56,
          "id": {
            "type": "Identifier",
            "start": 40,
            "end": 56,
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 47,
              "end": 56,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 49,
                "end": 56
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
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 99,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
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
        "start": 73,
        "end": 82,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 75,
          "end": 82
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 83,
        "end": 99,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 85,
            "end": 97,
            "argument": {
              "type": "Literal",
              "start": 92,
              "end": 96,
              "value": true,
              "raw": "true"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 101,
      "end": 170,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 107,
        "end": 108,
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
        "start": 109,
        "end": 170,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 133,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 122,
              "end": 123,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 132,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 125,
                "end": 132
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
            "start": 138,
            "end": 168,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 145,
              "end": 148,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 148,
              "end": 168,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "start": 151,
                "end": 168,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 153,
                    "end": 166,
                    "argument": {
                      "type": "Literal",
                      "start": 160,
                      "end": 165,
                      "value": false,
                      "raw": "false"
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
      "start": 171,
      "end": 210,
      "id": {
        "type": "Identifier",
        "start": 178,
        "end": 179,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 180,
        "end": 210,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 186,
            "end": 208,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 193,
              "end": 208,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 197,
                  "end": 207,
                  "id": {
                    "type": "Identifier",
                    "start": 197,
                    "end": 207,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 198,
                      "end": 207,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 200,
                        "end": 207
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
      "start": 212,
      "end": 231,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 216,
          "end": 230,
          "id": {
            "type": "Identifier",
            "start": 216,
            "end": 220,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 223,
            "end": 230,
            "callee": {
              "type": "Identifier",
              "start": 227,
              "end": 228,
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
      "start": 253,
      "end": 290,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 272,
            "decorators": [],
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 275,
            "end": 289,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 282,
              "end": 289,
              "decorators": [],
              "name": "BOOLEAN",
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
      "start": 316,
      "end": 350,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 320,
          "end": 349,
          "id": {
            "type": "Identifier",
            "start": 320,
            "end": 335,
            "decorators": [],
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 338,
            "end": 349,
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "start": 345,
              "end": 349,
              "value": true,
              "raw": "true"
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
      "start": 351,
      "end": 402,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 370,
            "decorators": [],
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 373,
            "end": 401,
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "start": 380,
              "end": 401,
              "properties": [
                {
                  "type": "Property",
                  "start": 382,
                  "end": 389,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 382,
                    "end": 383,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 385,
                    "end": 389,
                    "value": true,
                    "raw": "true"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 391,
                  "end": 399,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 391,
                    "end": 392,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 394,
                    "end": 399,
                    "value": false,
                    "raw": "false"
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
      "start": 432,
      "end": 468,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 436,
          "end": 467,
          "id": {
            "type": "Identifier",
            "start": 436,
            "end": 451,
            "decorators": [],
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 454,
            "end": 467,
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "start": 461,
              "end": 467,
              "object": {
                "type": "Identifier",
                "start": 461,
                "end": 465,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 466,
                "end": 467,
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
      "start": 469,
      "end": 502,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 473,
          "end": 501,
          "id": {
            "type": "Identifier",
            "start": 473,
            "end": 488,
            "decorators": [],
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 491,
            "end": 501,
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "start": 498,
              "end": 501,
              "object": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 500,
                "end": 501,
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
      "start": 503,
      "end": 538,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 537,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 522,
            "decorators": [],
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 525,
            "end": 537,
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "start": 532,
              "end": 537,
              "callee": {
                "type": "Identifier",
                "start": 532,
                "end": 535,
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
      "start": 539,
      "end": 576,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 543,
          "end": 575,
          "id": {
            "type": "Identifier",
            "start": 543,
            "end": 558,
            "decorators": [],
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 561,
            "end": 575,
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "start": 568,
              "end": 575,
              "callee": {
                "type": "MemberExpression",
                "start": 568,
                "end": 573,
                "object": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 570,
                  "end": 573,
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
      "start": 607,
      "end": 651,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 611,
          "end": 650,
          "id": {
            "type": "Identifier",
            "start": 611,
            "end": 626,
            "decorators": [],
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 629,
            "end": 650,
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "start": 636,
              "end": 650,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 643,
                "end": 650,
                "decorators": [],
                "name": "BOOLEAN",
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
      "type": "ExpressionStatement",
      "start": 682,
      "end": 694,
      "expression": {
        "type": "UnaryExpression",
        "start": 682,
        "end": 693,
        "operator": "typeof",
        "argument": {
          "type": "Literal",
          "start": 689,
          "end": 693,
          "value": true,
          "raw": "true"
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 695,
      "end": 710,
      "expression": {
        "type": "UnaryExpression",
        "start": 695,
        "end": 709,
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "start": 702,
          "end": 709,
          "decorators": [],
          "name": "BOOLEAN",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 711,
      "end": 724,
      "expression": {
        "type": "UnaryExpression",
        "start": 711,
        "end": 723,
        "operator": "typeof",
        "argument": {
          "type": "CallExpression",
          "start": 718,
          "end": 723,
          "callee": {
            "type": "Identifier",
            "start": 718,
            "end": 721,
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
      "start": 725,
      "end": 744,
      "expression": {
        "type": "SequenceExpression",
        "start": 725,
        "end": 743,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 725,
            "end": 736,
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "start": 732,
              "end": 736,
              "value": true,
              "raw": "true"
            },
            "prefix": true
          },
          {
            "type": "Literal",
            "start": 738,
            "end": 743,
            "value": false,
            "raw": "false"
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 745,
      "end": 759,
      "expression": {
        "type": "UnaryExpression",
        "start": 745,
        "end": 758,
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "start": 752,
          "end": 758,
          "object": {
            "type": "Identifier",
            "start": 752,
            "end": 756,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 757,
            "end": 758,
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
      "start": 760,
      "end": 771,
      "expression": {
        "type": "UnaryExpression",
        "start": 760,
        "end": 770,
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "start": 767,
          "end": 770,
          "object": {
            "type": "Identifier",
            "start": 767,
            "end": 768,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 769,
            "end": 770,
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
      "type": "VariableDeclaration",
      "start": 801,
      "end": 816,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 805,
          "end": 815,
          "id": {
            "type": "Identifier",
            "start": 805,
            "end": 815,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 806,
              "end": 815,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 808,
                "end": 815
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
      "start": 817,
      "end": 834,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 821,
          "end": 833,
          "id": {
            "type": "Identifier",
            "start": 821,
            "end": 833,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 822,
              "end": 833,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 824,
                "end": 833,
                "elementType": {
                  "type": "TSBooleanKeyword",
                  "start": 824,
                  "end": 831
                }
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
      "start": 835,
      "end": 856,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 839,
          "end": 855,
          "id": {
            "type": "Identifier",
            "start": 839,
            "end": 855,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 840,
              "end": 855,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 842,
                "end": 855,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 845,
                  "end": 855,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 848,
                    "end": 855
                  }
                }
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
      "type": "LabeledStatement",
      "start": 857,
      "end": 875,
      "label": {
        "type": "Identifier",
        "start": 857,
        "end": 858,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 860,
        "end": 875,
        "expression": {
          "type": "UnaryExpression",
          "start": 860,
          "end": 874,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 867,
            "end": 874,
            "decorators": [],
            "name": "BOOLEAN",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "directive": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 876,
      "end": 890,
      "label": {
        "type": "Identifier",
        "start": 876,
        "end": 877,
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 879,
        "end": 890,
        "expression": {
          "type": "UnaryExpression",
          "start": 879,
          "end": 889,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 886,
            "end": 889,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "directive": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 891,
      "end": 920,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 895,
          "end": 919,
          "id": {
            "type": "Identifier",
            "start": 895,
            "end": 896,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 899,
            "end": 919,
            "properties": [
              {
                "type": "Property",
                "start": 901,
                "end": 908,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 901,
                  "end": 902,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 904,
                  "end": 908,
                  "value": true,
                  "raw": "true"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 910,
                "end": 918,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 910,
                  "end": 911,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 913,
                  "end": 918,
                  "value": false,
                  "raw": "false"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "LabeledStatement",
      "start": 921,
      "end": 935,
      "label": {
        "type": "Identifier",
        "start": 921,
        "end": 922,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 924,
        "end": 935,
        "expression": {
          "type": "UnaryExpression",
          "start": 924,
          "end": 934,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 931,
            "end": 934,
            "object": {
              "type": "Identifier",
              "start": 931,
              "end": 932,
              "decorators": [],
              "name": "y",
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
      }
    },
    {
      "type": "LabeledStatement",
      "start": 936,
      "end": 953,
      "label": {
        "type": "Identifier",
        "start": 936,
        "end": 937,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 939,
        "end": 953,
        "expression": {
          "type": "UnaryExpression",
          "start": 939,
          "end": 952,
          "operator": "typeof",
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
        "directive": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 954,
      "end": 970,
      "label": {
        "type": "Identifier",
        "start": 954,
        "end": 955,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 957,
        "end": 970,
        "expression": {
          "type": "UnaryExpression",
          "start": 957,
          "end": 969,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 964,
            "end": 969,
            "object": {
              "type": "Identifier",
              "start": 964,
              "end": 965,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 966,
              "end": 969,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "prefix": true
        },
        "directive": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 971,
      "end": 985,
      "label": {
        "type": "Identifier",
        "start": 971,
        "end": 972,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 974,
        "end": 985,
        "expression": {
          "type": "UnaryExpression",
          "start": 974,
          "end": 984,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 981,
            "end": 984,
            "object": {
              "type": "Identifier",
              "start": 981,
              "end": 982,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 983,
              "end": 984,
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
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
