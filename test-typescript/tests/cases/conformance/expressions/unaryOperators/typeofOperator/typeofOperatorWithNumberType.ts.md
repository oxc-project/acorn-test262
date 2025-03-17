__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 1254,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 35,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 53,
            "name": "NUMBER",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
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
      "start": 55,
      "end": 86,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 76,
            "name": "NUMBER1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 76,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 68,
                "end": 76,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 68,
                  "end": 74
                }
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 79,
            "end": 85,
            "elements": [
              {
                "type": "Literal",
                "start": 80,
                "end": 81,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 83,
                "end": 84,
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
      "start": 88,
      "end": 124,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
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
        "start": 111,
        "end": 124,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 113,
            "end": 122,
            "argument": {
              "type": "Literal",
              "start": 120,
              "end": 121,
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
        "start": 102,
        "end": 110,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 104,
          "end": 110
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 190,
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 190,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 140,
            "end": 157,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
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
              "start": 148,
              "end": 156,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 150,
                "end": 156
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 188,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 172,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 188,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 175,
                "end": 188,
                "body": [
                  {
                    "type": "ReturnStatement",
                    "start": 177,
                    "end": 186,
                    "argument": {
                      "type": "Literal",
                      "start": 184,
                      "end": 185,
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
      "start": 191,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 200,
        "end": 229,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 206,
            "end": 227,
            "declaration": {
              "type": "VariableDeclaration",
              "start": 213,
              "end": 227,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 217,
                  "end": 226,
                  "id": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 226,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 218,
                      "end": 226,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 220,
                        "end": 226
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
      "start": 231,
      "end": 250,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 239,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 242,
            "end": 249,
            "callee": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
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
      "start": 271,
      "end": 307,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 306,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 290,
            "name": "ResultIsString1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 293,
            "end": 306,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 300,
              "end": 306,
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
      "start": 308,
      "end": 345,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 344,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 327,
            "name": "ResultIsString2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 330,
            "end": 344,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 337,
              "end": 344,
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
      "start": 370,
      "end": 401,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 389,
            "name": "ResultIsString3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 392,
            "end": 400,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 399,
              "end": 400,
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
      "start": 402,
      "end": 445,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 444,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 421,
            "name": "ResultIsString4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 424,
            "end": 444,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 431,
              "end": 444,
              "properties": [
                {
                  "type": "Property",
                  "start": 433,
                  "end": 437,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 436,
                    "end": 437,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 439,
                  "end": 443,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 440,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 442,
                    "end": 443,
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
      "start": 446,
      "end": 517,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 450,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 465,
            "name": "ResultIsString5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 468,
            "end": 516,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 475,
              "end": 516,
              "properties": [
                {
                  "type": "Property",
                  "start": 477,
                  "end": 481,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 478,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 480,
                    "end": 481,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 483,
                  "end": 514,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 486,
                    "end": 514,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 487,
                        "end": 496,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 488,
                          "end": 496,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 490,
                            "end": 496
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 501,
                      "end": 514,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 503,
                          "end": 512,
                          "argument": {
                            "type": "Identifier",
                            "start": 510,
                            "end": 511,
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
      "start": 546,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 550,
          "end": 581,
          "id": {
            "type": "Identifier",
            "start": 550,
            "end": 565,
            "name": "ResultIsString6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 568,
            "end": 581,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 575,
              "end": 581,
              "object": {
                "type": "Identifier",
                "start": 575,
                "end": 579,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 580,
                "end": 581,
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
      "start": 583,
      "end": 616,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 602,
            "name": "ResultIsString7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 605,
            "end": 615,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 612,
              "end": 615,
              "object": {
                "type": "Identifier",
                "start": 612,
                "end": 613,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 614,
                "end": 615,
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
      "start": 617,
      "end": 657,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 636,
            "name": "ResultIsString8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 639,
            "end": 656,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 646,
              "end": 656,
              "object": {
                "type": "Identifier",
                "start": 646,
                "end": 653,
                "name": "NUMBER1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 654,
                "end": 655,
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
      "start": 658,
      "end": 693,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 692,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 677,
            "name": "ResultIsString9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 680,
            "end": 692,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 687,
              "end": 692,
              "callee": {
                "type": "Identifier",
                "start": 687,
                "end": 690,
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
      "start": 694,
      "end": 732,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 698,
          "end": 731,
          "id": {
            "type": "Identifier",
            "start": 698,
            "end": 714,
            "name": "ResultIsString10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 717,
            "end": 731,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 724,
              "end": 731,
              "callee": {
                "type": "MemberExpression",
                "start": 724,
                "end": 729,
                "object": {
                  "type": "Identifier",
                  "start": 724,
                  "end": 725,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 729,
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
      "start": 733,
      "end": 781,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 737,
          "end": 780,
          "id": {
            "type": "Identifier",
            "start": 737,
            "end": 753,
            "name": "ResultIsString11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 756,
            "end": 780,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 764,
              "end": 779,
              "left": {
                "type": "Identifier",
                "start": 764,
                "end": 770,
                "name": "NUMBER",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 773,
                "end": 779,
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
      "start": 813,
      "end": 857,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 817,
          "end": 856,
          "id": {
            "type": "Identifier",
            "start": 817,
            "end": 833,
            "name": "ResultIsString12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 836,
            "end": 856,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 843,
              "end": 856,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 850,
                "end": 856,
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
      "start": 858,
      "end": 920,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 862,
          "end": 919,
          "id": {
            "type": "Identifier",
            "start": 862,
            "end": 878,
            "name": "ResultIsString13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 881,
            "end": 919,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 888,
              "end": 919,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 895,
                "end": 919,
                "operator": "typeof",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 903,
                  "end": 918,
                  "left": {
                    "type": "Identifier",
                    "start": 903,
                    "end": 909,
                    "name": "NUMBER",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 912,
                    "end": 918,
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
      "start": 951,
      "end": 960,
      "expression": {
        "type": "UnaryExpression",
        "start": 951,
        "end": 959,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 958,
          "end": 959,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 961,
      "end": 975,
      "expression": {
        "type": "UnaryExpression",
        "start": 961,
        "end": 974,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 968,
          "end": 974,
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
      "start": 976,
      "end": 991,
      "expression": {
        "type": "UnaryExpression",
        "start": 976,
        "end": 990,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 983,
          "end": 990,
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
      "start": 992,
      "end": 1005,
      "expression": {
        "type": "UnaryExpression",
        "start": 992,
        "end": 1004,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 999,
          "end": 1004,
          "callee": {
            "type": "Identifier",
            "start": 999,
            "end": 1002,
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
      "start": 1006,
      "end": 1020,
      "expression": {
        "type": "UnaryExpression",
        "start": 1006,
        "end": 1019,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1013,
          "end": 1019,
          "object": {
            "type": "Identifier",
            "start": 1013,
            "end": 1017,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1018,
            "end": 1019,
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
      "start": 1021,
      "end": 1032,
      "expression": {
        "type": "UnaryExpression",
        "start": 1021,
        "end": 1031,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1028,
          "end": 1031,
          "object": {
            "type": "Identifier",
            "start": 1028,
            "end": 1029,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1030,
            "end": 1031,
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
      "start": 1033,
      "end": 1052,
      "expression": {
        "type": "SequenceExpression",
        "start": 1033,
        "end": 1051,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1033,
            "end": 1046,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 1040,
              "end": 1046,
              "object": {
                "type": "Identifier",
                "start": 1040,
                "end": 1044,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1045,
                "end": 1046,
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
            "start": 1048,
            "end": 1051,
            "object": {
              "type": "Identifier",
              "start": 1048,
              "end": 1049,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1050,
              "end": 1051,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 1082,
      "end": 1096,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1086,
          "end": 1095,
          "id": {
            "type": "Identifier",
            "start": 1086,
            "end": 1095,
            "name": "z",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1087,
              "end": 1095,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1089,
                "end": 1095
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
      "start": 1097,
      "end": 1113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1101,
          "end": 1112,
          "id": {
            "type": "Identifier",
            "start": 1101,
            "end": 1112,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1102,
              "end": 1112,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 1104,
                "end": 1112,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1104,
                  "end": 1110
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
      "type": "LabeledStatement",
      "start": 1114,
      "end": 1131,
      "body": {
        "type": "ExpressionStatement",
        "start": 1117,
        "end": 1131,
        "expression": {
          "type": "UnaryExpression",
          "start": 1117,
          "end": 1130,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1124,
            "end": 1130,
            "name": "NUMBER",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "label": {
        "type": "Identifier",
        "start": 1114,
        "end": 1115,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1132,
      "end": 1150,
      "body": {
        "type": "ExpressionStatement",
        "start": 1135,
        "end": 1150,
        "expression": {
          "type": "UnaryExpression",
          "start": 1135,
          "end": 1149,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1142,
            "end": 1149,
            "name": "NUMBER1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "label": {
        "type": "Identifier",
        "start": 1132,
        "end": 1133,
        "name": "x",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1151,
      "end": 1165,
      "body": {
        "type": "ExpressionStatement",
        "start": 1154,
        "end": 1165,
        "expression": {
          "type": "UnaryExpression",
          "start": 1154,
          "end": 1164,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 1161,
            "end": 1164,
            "name": "foo",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "label": {
        "type": "Identifier",
        "start": 1151,
        "end": 1152,
        "name": "r",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 1166,
      "end": 1189,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1170,
          "end": 1188,
          "id": {
            "type": "Identifier",
            "start": 1170,
            "end": 1171,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 1174,
            "end": 1188,
            "properties": [
              {
                "type": "Property",
                "start": 1176,
                "end": 1180,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1176,
                  "end": 1177,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1179,
                  "end": 1180,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 1182,
                "end": 1186,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 1182,
                  "end": 1183,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 1185,
                  "end": 1186,
                  "value": 2,
                  "raw": "2"
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
      "type": "LabeledStatement",
      "start": 1190,
      "end": 1204,
      "body": {
        "type": "ExpressionStatement",
        "start": 1193,
        "end": 1204,
        "expression": {
          "type": "UnaryExpression",
          "start": 1193,
          "end": 1203,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 1200,
            "end": 1203,
            "object": {
              "type": "Identifier",
              "start": 1200,
              "end": 1201,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1202,
              "end": 1203,
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
      "label": {
        "type": "Identifier",
        "start": 1190,
        "end": 1191,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1205,
      "end": 1222,
      "body": {
        "type": "ExpressionStatement",
        "start": 1208,
        "end": 1222,
        "expression": {
          "type": "UnaryExpression",
          "start": 1208,
          "end": 1221,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 1215,
            "end": 1221,
            "object": {
              "type": "Identifier",
              "start": 1215,
              "end": 1219,
              "name": "objA",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1220,
              "end": 1221,
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
      "label": {
        "type": "Identifier",
        "start": 1205,
        "end": 1206,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1223,
      "end": 1239,
      "body": {
        "type": "ExpressionStatement",
        "start": 1226,
        "end": 1239,
        "expression": {
          "type": "UnaryExpression",
          "start": 1226,
          "end": 1238,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 1233,
            "end": 1238,
            "object": {
              "type": "Identifier",
              "start": 1233,
              "end": 1234,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1235,
              "end": 1238,
              "name": "foo",
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
      "label": {
        "type": "Identifier",
        "start": 1223,
        "end": 1224,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 1240,
      "end": 1254,
      "body": {
        "type": "ExpressionStatement",
        "start": 1243,
        "end": 1254,
        "expression": {
          "type": "UnaryExpression",
          "start": 1243,
          "end": 1253,
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "MemberExpression",
            "start": 1250,
            "end": 1253,
            "object": {
              "type": "Identifier",
              "start": 1250,
              "end": 1251,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1252,
              "end": 1253,
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
      "label": {
        "type": "Identifier",
        "start": 1240,
        "end": 1241,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
