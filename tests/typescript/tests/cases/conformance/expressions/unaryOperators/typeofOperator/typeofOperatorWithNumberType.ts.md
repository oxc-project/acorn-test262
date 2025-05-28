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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 39,
          "end": 53,
          "id": {
            "type": "Identifier",
            "start": 39,
            "end": 53,
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
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
      "start": 55,
      "end": 86,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 85,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 76,
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
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
            }
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
        "start": 102,
        "end": 110,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 104,
          "end": 110
        }
      },
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
      "expression": false
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 190,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 132,
        "end": 133,
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
        "start": 134,
        "end": 190,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 140,
            "end": 157,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "start": 162,
            "end": 188,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 169,
              "end": 172,
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 188,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
      "start": 191,
      "end": 229,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
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
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 217,
                  "end": 226,
                  "id": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 226,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 218,
                      "end": 226,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 220,
                        "end": 226
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
      "start": 231,
      "end": 250,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 235,
          "end": 249,
          "id": {
            "type": "Identifier",
            "start": 235,
            "end": 239,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 242,
            "end": 249,
            "callee": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
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
      "start": 271,
      "end": 307,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 306,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 290,
            "decorators": [],
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 293,
            "end": 306,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 300,
              "end": 306,
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
      "start": 308,
      "end": 345,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 312,
          "end": 344,
          "id": {
            "type": "Identifier",
            "start": 312,
            "end": 327,
            "decorators": [],
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 330,
            "end": 344,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 337,
              "end": 344,
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
      "start": 370,
      "end": 401,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 400,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 389,
            "decorators": [],
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 392,
            "end": 400,
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "start": 399,
              "end": 400,
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
      "start": 402,
      "end": 445,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 406,
          "end": 444,
          "id": {
            "type": "Identifier",
            "start": 406,
            "end": 421,
            "decorators": [],
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 424,
            "end": 444,
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "start": 431,
              "end": 444,
              "properties": [
                {
                  "type": "Property",
                  "start": 433,
                  "end": 437,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 433,
                    "end": 434,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 436,
                    "end": 437,
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
                  "start": 439,
                  "end": 443,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 439,
                    "end": 440,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 442,
                    "end": 443,
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
      "start": 446,
      "end": 517,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 450,
          "end": 516,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 465,
            "decorators": [],
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 468,
            "end": 516,
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "start": 475,
              "end": 516,
              "properties": [
                {
                  "type": "Property",
                  "start": 477,
                  "end": 481,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 477,
                    "end": 478,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 480,
                    "end": 481,
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
                  "start": 483,
                  "end": 514,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 483,
                    "end": 484,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 486,
                    "end": 514,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 487,
                        "end": 496,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 488,
                          "end": 496,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 490,
                            "end": 496
                          }
                        }
                      }
                    ],
                    "returnType": null,
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
      "start": 546,
      "end": 582,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 550,
          "end": 581,
          "id": {
            "type": "Identifier",
            "start": 550,
            "end": 565,
            "decorators": [],
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 568,
            "end": 581,
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "start": 575,
              "end": 581,
              "object": {
                "type": "Identifier",
                "start": 575,
                "end": 579,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 580,
                "end": 581,
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
      "start": 583,
      "end": 616,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 587,
          "end": 615,
          "id": {
            "type": "Identifier",
            "start": 587,
            "end": 602,
            "decorators": [],
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 605,
            "end": 615,
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "start": 612,
              "end": 615,
              "object": {
                "type": "Identifier",
                "start": 612,
                "end": 613,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 614,
                "end": 615,
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
      "start": 617,
      "end": 657,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 621,
          "end": 656,
          "id": {
            "type": "Identifier",
            "start": 621,
            "end": 636,
            "decorators": [],
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 639,
            "end": 656,
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "start": 646,
              "end": 656,
              "object": {
                "type": "Identifier",
                "start": 646,
                "end": 653,
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 654,
                "end": 655,
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
      "start": 658,
      "end": 693,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 662,
          "end": 692,
          "id": {
            "type": "Identifier",
            "start": 662,
            "end": 677,
            "decorators": [],
            "name": "ResultIsString9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 680,
            "end": 692,
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "start": 687,
              "end": 692,
              "callee": {
                "type": "Identifier",
                "start": 687,
                "end": 690,
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
      "start": 694,
      "end": 732,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 698,
          "end": 731,
          "id": {
            "type": "Identifier",
            "start": 698,
            "end": 714,
            "decorators": [],
            "name": "ResultIsString10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 717,
            "end": 731,
            "operator": "typeof",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 726,
                  "end": 729,
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
      "start": 733,
      "end": 781,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 737,
          "end": 780,
          "id": {
            "type": "Identifier",
            "start": 737,
            "end": 753,
            "decorators": [],
            "name": "ResultIsString11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 756,
            "end": 780,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 764,
              "end": 779,
              "left": {
                "type": "Identifier",
                "start": 764,
                "end": 770,
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 773,
                "end": 779,
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
      "start": 813,
      "end": 857,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 817,
          "end": 856,
          "id": {
            "type": "Identifier",
            "start": 817,
            "end": 833,
            "decorators": [],
            "name": "ResultIsString12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 836,
            "end": 856,
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "start": 843,
              "end": 856,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 850,
                "end": 856,
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
      "start": 858,
      "end": 920,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 862,
          "end": 919,
          "id": {
            "type": "Identifier",
            "start": 862,
            "end": 878,
            "decorators": [],
            "name": "ResultIsString13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 881,
            "end": 919,
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "start": 888,
              "end": 919,
              "operator": "typeof",
              "argument": {
                "type": "UnaryExpression",
                "start": 895,
                "end": 919,
                "operator": "typeof",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 903,
                  "end": 918,
                  "left": {
                    "type": "Identifier",
                    "start": 903,
                    "end": 909,
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 912,
                    "end": 918,
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
      "start": 951,
      "end": 960,
      "expression": {
        "type": "UnaryExpression",
        "start": 951,
        "end": 959,
        "operator": "typeof",
        "argument": {
          "type": "Literal",
          "start": 958,
          "end": 959,
          "value": 1,
          "raw": "1"
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 968,
          "end": 974,
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
      "start": 976,
      "end": 991,
      "expression": {
        "type": "UnaryExpression",
        "start": 976,
        "end": 990,
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "start": 983,
          "end": 990,
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
      "start": 992,
      "end": 1005,
      "expression": {
        "type": "UnaryExpression",
        "start": 992,
        "end": 1004,
        "operator": "typeof",
        "argument": {
          "type": "CallExpression",
          "start": 999,
          "end": 1004,
          "callee": {
            "type": "Identifier",
            "start": 999,
            "end": 1002,
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
      "start": 1006,
      "end": 1020,
      "expression": {
        "type": "UnaryExpression",
        "start": 1006,
        "end": 1019,
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "start": 1013,
          "end": 1019,
          "object": {
            "type": "Identifier",
            "start": 1013,
            "end": 1017,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1018,
            "end": 1019,
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
      "start": 1021,
      "end": 1032,
      "expression": {
        "type": "UnaryExpression",
        "start": 1021,
        "end": 1031,
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "start": 1028,
          "end": 1031,
          "object": {
            "type": "Identifier",
            "start": 1028,
            "end": 1029,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1030,
            "end": 1031,
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
            "argument": {
              "type": "MemberExpression",
              "start": 1040,
              "end": 1046,
              "object": {
                "type": "Identifier",
                "start": 1040,
                "end": 1044,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1045,
                "end": 1046,
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
            "start": 1048,
            "end": 1051,
            "object": {
              "type": "Identifier",
              "start": 1048,
              "end": 1049,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1050,
              "end": 1051,
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
    },
    {
      "type": "VariableDeclaration",
      "start": 1082,
      "end": 1096,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1086,
          "end": 1095,
          "id": {
            "type": "Identifier",
            "start": 1086,
            "end": 1095,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1087,
              "end": 1095,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1089,
                "end": 1095
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
      "start": 1097,
      "end": 1113,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1101,
          "end": 1112,
          "id": {
            "type": "Identifier",
            "start": 1101,
            "end": 1112,
            "decorators": [],
            "name": "x",
            "optional": false,
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
      "start": 1114,
      "end": 1131,
      "label": {
        "type": "Identifier",
        "start": 1114,
        "end": 1115,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1117,
        "end": 1131,
        "expression": {
          "type": "UnaryExpression",
          "start": 1117,
          "end": 1130,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 1124,
            "end": 1130,
            "decorators": [],
            "name": "NUMBER",
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
      "start": 1132,
      "end": 1150,
      "label": {
        "type": "Identifier",
        "start": 1132,
        "end": 1133,
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1135,
        "end": 1150,
        "expression": {
          "type": "UnaryExpression",
          "start": 1135,
          "end": 1149,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 1142,
            "end": 1149,
            "decorators": [],
            "name": "NUMBER1",
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
      "start": 1151,
      "end": 1165,
      "label": {
        "type": "Identifier",
        "start": 1151,
        "end": 1152,
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1154,
        "end": 1165,
        "expression": {
          "type": "UnaryExpression",
          "start": 1154,
          "end": 1164,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 1161,
            "end": 1164,
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
      "start": 1166,
      "end": 1189,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1170,
          "end": 1188,
          "id": {
            "type": "Identifier",
            "start": 1170,
            "end": 1171,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1176,
                  "end": 1177,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1179,
                  "end": 1180,
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
                "start": 1182,
                "end": 1186,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 1182,
                  "end": 1183,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 1185,
                  "end": 1186,
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
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "LabeledStatement",
      "start": 1190,
      "end": 1204,
      "label": {
        "type": "Identifier",
        "start": 1190,
        "end": 1191,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1193,
        "end": 1204,
        "expression": {
          "type": "UnaryExpression",
          "start": 1193,
          "end": 1203,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 1200,
            "end": 1203,
            "object": {
              "type": "Identifier",
              "start": 1200,
              "end": 1201,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1202,
              "end": 1203,
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
      "start": 1205,
      "end": 1222,
      "label": {
        "type": "Identifier",
        "start": 1205,
        "end": 1206,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1208,
        "end": 1222,
        "expression": {
          "type": "UnaryExpression",
          "start": 1208,
          "end": 1221,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 1215,
            "end": 1221,
            "object": {
              "type": "Identifier",
              "start": 1215,
              "end": 1219,
              "decorators": [],
              "name": "objA",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1220,
              "end": 1221,
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
      "start": 1223,
      "end": 1239,
      "label": {
        "type": "Identifier",
        "start": 1223,
        "end": 1224,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1226,
        "end": 1239,
        "expression": {
          "type": "UnaryExpression",
          "start": 1226,
          "end": 1238,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 1233,
            "end": 1238,
            "object": {
              "type": "Identifier",
              "start": 1233,
              "end": 1234,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1235,
              "end": 1238,
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
      "start": 1240,
      "end": 1254,
      "label": {
        "type": "Identifier",
        "start": 1240,
        "end": 1241,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 1243,
        "end": 1254,
        "expression": {
          "type": "UnaryExpression",
          "start": 1243,
          "end": 1253,
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "start": 1250,
            "end": 1253,
            "object": {
              "type": "Identifier",
              "start": 1250,
              "end": 1251,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1252,
              "end": 1253,
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
