__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 27,
  "end": 966,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 27,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 31,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 31,
            "end": 39,
            "name": "ANY",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 34,
              "end": 39,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 36,
                "end": 39
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
      "start": 41,
      "end": 55,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 45,
          "end": 54,
          "id": {
            "type": "Identifier",
            "start": 45,
            "end": 54,
            "name": "ANY1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 49,
              "end": 54,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 51,
                "end": 54
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
      "start": 56,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 60,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 60,
            "end": 71,
            "name": "ANY2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 71,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 66,
                "end": 71,
                "elementType": {
                  "type": "TSAnyKeyword",
                  "start": 66,
                  "end": 69
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 74,
            "end": 82,
            "elements": [
              {
                "type": "Literal",
                "start": 75,
                "end": 77,
                "value": "",
                "raw": "\"\""
              },
              {
                "type": "Literal",
                "start": 79,
                "end": 81,
                "value": "",
                "raw": "\"\""
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
      "type": "VariableDeclaration",
      "start": 84,
      "end": 101,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 88,
          "end": 101,
          "id": {
            "type": "Identifier",
            "start": 88,
            "end": 101,
            "name": "obj",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 91,
              "end": 101,
              "typeAnnotation": {
                "type": "TSFunctionType",
                "start": 93,
                "end": 101,
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 96,
                  "end": 101,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 99,
                    "end": 101,
                    "members": []
                  }
                }
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
      "start": 102,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 106,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 106,
            "end": 110,
            "name": "obj1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 113,
            "end": 135,
            "properties": [
              {
                "type": "Property",
                "start": 115,
                "end": 120,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 115,
                  "end": 116,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 118,
                  "end": 120,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 122,
                "end": 134,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 125,
                  "end": 134,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 131,
                    "end": 134,
                    "body": []
                  },
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
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
      "start": 138,
      "end": 186,
      "id": {
        "type": "Identifier",
        "start": 147,
        "end": 150,
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
        "start": 158,
        "end": 186,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 164,
            "end": 170,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 168,
                "end": 169,
                "id": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 169,
                  "name": "a",
                  "typeAnnotation": null,
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
            "type": "ReturnStatement",
            "start": 175,
            "end": 184,
            "argument": {
              "type": "Identifier",
              "start": 182,
              "end": 183,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 152,
        "end": 157,
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 154,
          "end": 157
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 187,
      "end": 280,
      "id": {
        "type": "Identifier",
        "start": 193,
        "end": 194,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 195,
        "end": 280,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 201,
            "end": 215,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 208,
              "end": 209,
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
              "start": 209,
              "end": 214,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 211,
                "end": 214
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 220,
            "end": 278,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 230,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 278,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 238,
                "end": 278,
                "body": [
                  {
                    "type": "VariableDeclaration",
                    "start": 248,
                    "end": 254,
                    "declarations": [
                      {
                        "type": "VariableDeclarator",
                        "start": 252,
                        "end": 253,
                        "id": {
                          "type": "Identifier",
                          "start": 252,
                          "end": 253,
                          "name": "a",
                          "typeAnnotation": null,
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
                    "type": "ReturnStatement",
                    "start": 263,
                    "end": 272,
                    "argument": {
                      "type": "Identifier",
                      "start": 270,
                      "end": 271,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 232,
                "end": 237,
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 234,
                  "end": 237
                }
              }
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
      "start": 281,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 288,
        "end": 289,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 290,
        "end": 316,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 296,
            "end": 314,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 303,
              "end": 314,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 307,
                  "end": 313,
                  "id": {
                    "type": "Identifier",
                    "start": 307,
                    "end": 313,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 308,
                      "end": 313,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 310,
                        "end": 313
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
      "start": 317,
      "end": 336,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 321,
          "end": 335,
          "id": {
            "type": "Identifier",
            "start": 321,
            "end": 325,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 328,
            "end": 335,
            "callee": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
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
      "start": 354,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 358,
          "end": 381,
          "id": {
            "type": "Identifier",
            "start": 358,
            "end": 373,
            "name": "ResultIsNumber1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 376,
            "end": 381,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 377,
              "end": 381,
              "name": "ANY1",
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
      "start": 383,
      "end": 411,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 387,
          "end": 410,
          "id": {
            "type": "Identifier",
            "start": 387,
            "end": 402,
            "name": "ResultIsNumber2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 405,
            "end": 410,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 406,
              "end": 410,
              "name": "ANY2",
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
      "start": 412,
      "end": 437,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 416,
          "end": 436,
          "id": {
            "type": "Identifier",
            "start": 416,
            "end": 431,
            "name": "ResultIsNumber3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 434,
            "end": 436,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 435,
              "end": 436,
              "name": "A",
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
      "start": 438,
      "end": 463,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 442,
          "end": 462,
          "id": {
            "type": "Identifier",
            "start": 442,
            "end": 457,
            "name": "ResultIsNumber4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 460,
            "end": 462,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 461,
              "end": 462,
              "name": "M",
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
      "start": 464,
      "end": 491,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 468,
          "end": 490,
          "id": {
            "type": "Identifier",
            "start": 468,
            "end": 483,
            "name": "ResultIsNumber5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 486,
            "end": 490,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 487,
              "end": 490,
              "name": "obj",
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
      "start": 492,
      "end": 520,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 496,
          "end": 519,
          "id": {
            "type": "Identifier",
            "start": 496,
            "end": 511,
            "name": "ResultIsNumber6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 514,
            "end": 519,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 515,
              "end": 519,
              "name": "obj1",
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
      "start": 542,
      "end": 575,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 546,
          "end": 574,
          "id": {
            "type": "Identifier",
            "start": 546,
            "end": 561,
            "name": "ResultIsNumber7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 564,
            "end": 574,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 565,
              "end": 574,
              "name": "undefined",
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
      "start": 576,
      "end": 603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 580,
          "end": 602,
          "id": {
            "type": "Identifier",
            "start": 580,
            "end": 594,
            "name": "ResultIsNumber",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 597,
            "end": 602,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 598,
              "end": 602,
              "value": null,
              "raw": "null"
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
      "start": 629,
      "end": 660,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 633,
          "end": 659,
          "id": {
            "type": "Identifier",
            "start": 633,
            "end": 648,
            "name": "ResultIsNumber8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 651,
            "end": 659,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 652,
              "end": 659,
              "object": {
                "type": "Identifier",
                "start": 652,
                "end": 656,
                "name": "ANY2",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 657,
                "end": 658,
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
      "start": 661,
      "end": 691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 665,
          "end": 690,
          "id": {
            "type": "Identifier",
            "start": 665,
            "end": 680,
            "name": "ResultIsNumber9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 683,
            "end": 690,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 684,
              "end": 690,
              "object": {
                "type": "Identifier",
                "start": 684,
                "end": 688,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 689,
                "end": 690,
                "name": "x",
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
      "start": 692,
      "end": 723,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 696,
          "end": 722,
          "id": {
            "type": "Identifier",
            "start": 696,
            "end": 712,
            "name": "ResultIsNumber10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 715,
            "end": 722,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 716,
              "end": 722,
              "object": {
                "type": "Identifier",
                "start": 716,
                "end": 720,
                "name": "obj1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 721,
                "end": 722,
                "name": "y",
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
      "start": 724,
      "end": 755,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 728,
          "end": 754,
          "id": {
            "type": "Identifier",
            "start": 728,
            "end": 744,
            "name": "ResultIsNumber11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 747,
            "end": 754,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 748,
              "end": 754,
              "object": {
                "type": "Identifier",
                "start": 748,
                "end": 752,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 753,
                "end": 754,
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
      "start": 756,
      "end": 784,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 760,
          "end": 783,
          "id": {
            "type": "Identifier",
            "start": 760,
            "end": 776,
            "name": "ResultIsNumber12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 779,
            "end": 783,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 780,
              "end": 783,
              "object": {
                "type": "Identifier",
                "start": 780,
                "end": 781,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 782,
                "end": 783,
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
      "start": 785,
      "end": 815,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 789,
          "end": 814,
          "id": {
            "type": "Identifier",
            "start": 789,
            "end": 805,
            "name": "ResultIsNumber13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 808,
            "end": 814,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 809,
              "end": 814,
              "callee": {
                "type": "Identifier",
                "start": 809,
                "end": 812,
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
      "start": 816,
      "end": 848,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 820,
          "end": 847,
          "id": {
            "type": "Identifier",
            "start": 820,
            "end": 836,
            "name": "ResultIsNumber14",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 839,
            "end": 847,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 840,
              "end": 847,
              "callee": {
                "type": "MemberExpression",
                "start": 840,
                "end": 845,
                "object": {
                  "type": "Identifier",
                  "start": 840,
                  "end": 841,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 842,
                  "end": 845,
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
      "start": 849,
      "end": 886,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 853,
          "end": 885,
          "id": {
            "type": "Identifier",
            "start": 853,
            "end": 869,
            "name": "ResultIsNumber15",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 872,
            "end": 885,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 874,
              "end": 884,
              "left": {
                "type": "Identifier",
                "start": 874,
                "end": 877,
                "name": "ANY",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "-",
              "right": {
                "type": "Identifier",
                "start": 880,
                "end": 884,
                "name": "ANY1",
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
      "type": "ExpressionStatement",
      "start": 917,
      "end": 922,
      "expression": {
        "type": "UnaryExpression",
        "start": 917,
        "end": 921,
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 918,
          "end": 921,
          "name": "ANY",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 923,
      "end": 929,
      "expression": {
        "type": "UnaryExpression",
        "start": 923,
        "end": 928,
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 924,
          "end": 928,
          "name": "ANY1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 930,
      "end": 939,
      "expression": {
        "type": "UnaryExpression",
        "start": 930,
        "end": 938,
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 931,
          "end": 938,
          "object": {
            "type": "Identifier",
            "start": 931,
            "end": 935,
            "name": "ANY2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 936,
            "end": 937,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 940,
      "end": 951,
      "expression": {
        "type": "SequenceExpression",
        "start": 940,
        "end": 950,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 940,
            "end": 944,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 941,
              "end": 944,
              "name": "ANY",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 946,
            "end": 950,
            "name": "ANY1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ]
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 952,
      "end": 960,
      "expression": {
        "type": "UnaryExpression",
        "start": 952,
        "end": 959,
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 953,
          "end": 959,
          "object": {
            "type": "Identifier",
            "start": 953,
            "end": 957,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 958,
            "end": 959,
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
      "start": 961,
      "end": 966,
      "expression": {
        "type": "UnaryExpression",
        "start": 961,
        "end": 965,
        "operator": "-",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 962,
          "end": 965,
          "object": {
            "type": "Identifier",
            "start": 962,
            "end": 963,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 964,
            "end": 965,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
