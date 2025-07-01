__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 47,
                "end": 53
              },
              "start": 45,
              "end": 53
            },
            "start": 39,
            "end": 53
          },
          "init": null,
          "definite": false,
          "start": 39,
          "end": 53
        }
      ],
      "declare": false,
      "start": 35,
      "end": 54
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 68,
                  "end": 74
                },
                "start": 68,
                "end": 76
              },
              "start": 66,
              "end": 76
            },
            "start": 59,
            "end": 76
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 80,
                "end": 81
              },
              {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 83,
                "end": 84
              }
            ],
            "start": 79,
            "end": 85
          },
          "definite": false,
          "start": 59,
          "end": 85
        }
      ],
      "declare": false,
      "start": 55,
      "end": 86
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 97,
        "end": 100
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 104,
          "end": 110
        },
        "start": 102,
        "end": 110
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 120,
              "end": 121
            },
            "start": 113,
            "end": 122
          }
        ],
        "start": 111,
        "end": 124
      },
      "expression": false,
      "start": 88,
      "end": 124
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 132,
        "end": 133
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 147,
              "end": 148
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 150,
                "end": 156
              },
              "start": 148,
              "end": 156
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": "public",
            "start": 140,
            "end": 157
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 172
            },
            "value": {
              "type": "FunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 184,
                      "end": 185
                    },
                    "start": 177,
                    "end": 186
                  }
                ],
                "start": 175,
                "end": 188
              },
              "expression": false,
              "start": 172,
              "end": 188
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 162,
            "end": 188
          }
        ],
        "start": 134,
        "end": 190
      },
      "abstract": false,
      "declare": false,
      "start": 126,
      "end": 190
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 198,
        "end": 199
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 220,
                        "end": 226
                      },
                      "start": 218,
                      "end": 226
                    },
                    "start": 217,
                    "end": 226
                  },
                  "init": null,
                  "definite": false,
                  "start": 217,
                  "end": 226
                }
              ],
              "declare": false,
              "start": 213,
              "end": 227
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 206,
            "end": 227
          }
        ],
        "start": 200,
        "end": 229
      },
      "kind": "module",
      "declare": false,
      "global": false,
      "start": 191,
      "end": 229
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 235,
            "end": 239
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 246,
              "end": 247
            },
            "typeArguments": null,
            "arguments": [],
            "start": 242,
            "end": 249
          },
          "definite": false,
          "start": 235,
          "end": 249
        }
      ],
      "declare": false,
      "start": 231,
      "end": 250
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null,
            "start": 275,
            "end": 290
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 306
            },
            "prefix": true,
            "start": 293,
            "end": 306
          },
          "definite": false,
          "start": 275,
          "end": 306
        }
      ],
      "declare": false,
      "start": 271,
      "end": 307
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null,
            "start": 312,
            "end": 327
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "typeAnnotation": null,
              "start": 337,
              "end": 344
            },
            "prefix": true,
            "start": 330,
            "end": 344
          },
          "definite": false,
          "start": 312,
          "end": 344
        }
      ],
      "declare": false,
      "start": 308,
      "end": 345
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 374,
            "end": 389
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 399,
              "end": 400
            },
            "prefix": true,
            "start": 392,
            "end": 400
          },
          "definite": false,
          "start": 374,
          "end": 400
        }
      ],
      "declare": false,
      "start": 370,
      "end": 401
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null,
            "start": 406,
            "end": 421
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 433,
                    "end": 434
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 436,
                    "end": 437
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 433,
                  "end": 437
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 439,
                    "end": 440
                  },
                  "value": {
                    "type": "Literal",
                    "value": 2,
                    "raw": "2",
                    "start": 442,
                    "end": 443
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 439,
                  "end": 443
                }
              ],
              "start": 431,
              "end": 444
            },
            "prefix": true,
            "start": 424,
            "end": 444
          },
          "definite": false,
          "start": 406,
          "end": 444
        }
      ],
      "declare": false,
      "start": 402,
      "end": 445
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 465
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 477,
                    "end": 478
                  },
                  "value": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 480,
                    "end": 481
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 477,
                  "end": 481
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 483,
                    "end": 484
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 490,
                            "end": 496
                          },
                          "start": 488,
                          "end": 496
                        },
                        "start": 487,
                        "end": 496
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "n",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 510,
                            "end": 511
                          },
                          "start": 503,
                          "end": 512
                        }
                      ],
                      "start": 501,
                      "end": 514
                    },
                    "id": null,
                    "generator": false,
                    "start": 486,
                    "end": 514
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 483,
                  "end": 514
                }
              ],
              "start": 475,
              "end": 516
            },
            "prefix": true,
            "start": 468,
            "end": 516
          },
          "definite": false,
          "start": 450,
          "end": 516
        }
      ],
      "declare": false,
      "start": 446,
      "end": 517
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null,
            "start": 550,
            "end": 565
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 575,
                "end": 579
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 580,
                "end": 581
              },
              "optional": false,
              "computed": false,
              "start": 575,
              "end": 581
            },
            "prefix": true,
            "start": 568,
            "end": 581
          },
          "definite": false,
          "start": 550,
          "end": 581
        }
      ],
      "declare": false,
      "start": 546,
      "end": 582
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString7",
            "optional": false,
            "typeAnnotation": null,
            "start": 587,
            "end": 602
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 613
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null,
                "start": 614,
                "end": 615
              },
              "optional": false,
              "computed": false,
              "start": 612,
              "end": 615
            },
            "prefix": true,
            "start": 605,
            "end": 615
          },
          "definite": false,
          "start": 587,
          "end": 615
        }
      ],
      "declare": false,
      "start": 583,
      "end": 616
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString8",
            "optional": false,
            "typeAnnotation": null,
            "start": 621,
            "end": 636
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null,
                "start": 646,
                "end": 653
              },
              "property": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 654,
                "end": 655
              },
              "optional": false,
              "computed": true,
              "start": 646,
              "end": 656
            },
            "prefix": true,
            "start": 639,
            "end": 656
          },
          "definite": false,
          "start": 621,
          "end": 656
        }
      ],
      "declare": false,
      "start": 617,
      "end": 657
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString9",
            "optional": false,
            "typeAnnotation": null,
            "start": 662,
            "end": 677
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "Identifier",
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 687,
                "end": 690
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 687,
              "end": 692
            },
            "prefix": true,
            "start": 680,
            "end": 692
          },
          "definite": false,
          "start": 662,
          "end": 692
        }
      ],
      "declare": false,
      "start": 658,
      "end": 693
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString10",
            "optional": false,
            "typeAnnotation": null,
            "start": 698,
            "end": 714
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 724,
                  "end": 725
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 726,
                  "end": 729
                },
                "optional": false,
                "computed": false,
                "start": 724,
                "end": 729
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 724,
              "end": 731
            },
            "prefix": true,
            "start": 717,
            "end": 731
          },
          "definite": false,
          "start": 698,
          "end": 731
        }
      ],
      "declare": false,
      "start": 694,
      "end": 732
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString11",
            "optional": false,
            "typeAnnotation": null,
            "start": 737,
            "end": 753
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 770
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 773,
                "end": 779
              },
              "start": 764,
              "end": 779
            },
            "prefix": true,
            "start": 756,
            "end": 780
          },
          "definite": false,
          "start": 737,
          "end": 780
        }
      ],
      "declare": false,
      "start": 733,
      "end": 781
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString12",
            "optional": false,
            "typeAnnotation": null,
            "start": 817,
            "end": 833
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null,
                "start": 850,
                "end": 856
              },
              "prefix": true,
              "start": 843,
              "end": 856
            },
            "prefix": true,
            "start": 836,
            "end": 856
          },
          "definite": false,
          "start": 817,
          "end": 856
        }
      ],
      "declare": false,
      "start": 813,
      "end": 857
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "ResultIsString13",
            "optional": false,
            "typeAnnotation": null,
            "start": 862,
            "end": 878
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 903,
                    "end": 909
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 912,
                    "end": 918
                  },
                  "start": 903,
                  "end": 918
                },
                "prefix": true,
                "start": 895,
                "end": 919
              },
              "prefix": true,
              "start": 888,
              "end": 919
            },
            "prefix": true,
            "start": 881,
            "end": 919
          },
          "definite": false,
          "start": 862,
          "end": 919
        }
      ],
      "declare": false,
      "start": 858,
      "end": 920
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Literal",
          "value": 1,
          "raw": "1",
          "start": 958,
          "end": 959
        },
        "prefix": true,
        "start": 951,
        "end": 959
      },
      "directive": null,
      "start": 951,
      "end": 960
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null,
          "start": 968,
          "end": 974
        },
        "prefix": true,
        "start": 961,
        "end": 974
      },
      "directive": null,
      "start": 961,
      "end": 975
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null,
          "start": 983,
          "end": 990
        },
        "prefix": true,
        "start": 976,
        "end": 990
      },
      "directive": null,
      "start": 976,
      "end": 991
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 999,
            "end": 1002
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 999,
          "end": 1004
        },
        "prefix": true,
        "start": 992,
        "end": 1004
      },
      "directive": null,
      "start": 992,
      "end": 1005
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null,
            "start": 1013,
            "end": 1017
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null,
            "start": 1018,
            "end": 1019
          },
          "optional": false,
          "computed": false,
          "start": 1013,
          "end": 1019
        },
        "prefix": true,
        "start": 1006,
        "end": 1019
      },
      "directive": null,
      "start": 1006,
      "end": 1020
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 1028,
            "end": 1029
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null,
            "start": 1030,
            "end": 1031
          },
          "optional": false,
          "computed": false,
          "start": 1028,
          "end": 1031
        },
        "prefix": true,
        "start": 1021,
        "end": 1031
      },
      "directive": null,
      "start": 1021,
      "end": 1032
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null,
                "start": 1040,
                "end": 1044
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 1045,
                "end": 1046
              },
              "optional": false,
              "computed": false,
              "start": 1040,
              "end": 1046
            },
            "prefix": true,
            "start": 1033,
            "end": 1046
          },
          {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1048,
              "end": 1049
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1050,
              "end": 1051
            },
            "optional": false,
            "computed": false,
            "start": 1048,
            "end": 1051
          }
        ],
        "start": 1033,
        "end": 1051
      },
      "directive": null,
      "start": 1033,
      "end": 1052
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1089,
                "end": 1095
              },
              "start": 1087,
              "end": 1095
            },
            "start": 1086,
            "end": 1095
          },
          "init": null,
          "definite": false,
          "start": 1086,
          "end": 1095
        }
      ],
      "declare": false,
      "start": 1082,
      "end": 1096
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 1104,
                  "end": 1110
                },
                "start": 1104,
                "end": 1112
              },
              "start": 1102,
              "end": 1112
            },
            "start": 1101,
            "end": 1112
          },
          "init": null,
          "definite": false,
          "start": 1101,
          "end": 1112
        }
      ],
      "declare": false,
      "start": 1097,
      "end": 1113
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1114,
        "end": 1115
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": null,
            "start": 1124,
            "end": 1130
          },
          "prefix": true,
          "start": 1117,
          "end": 1130
        },
        "directive": null,
        "start": 1117,
        "end": 1131
      },
      "start": 1114,
      "end": 1131
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 1132,
        "end": 1133
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
            "typeAnnotation": null,
            "start": 1142,
            "end": 1149
          },
          "prefix": true,
          "start": 1135,
          "end": 1149
        },
        "directive": null,
        "start": 1135,
        "end": 1150
      },
      "start": 1132,
      "end": 1150
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "r",
        "optional": false,
        "typeAnnotation": null,
        "start": 1151,
        "end": 1152
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null,
            "start": 1161,
            "end": 1164
          },
          "prefix": true,
          "start": 1154,
          "end": 1164
        },
        "directive": null,
        "start": 1154,
        "end": 1165
      },
      "start": 1151,
      "end": 1165
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 1170,
            "end": 1171
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1176,
                  "end": 1177
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 1179,
                  "end": 1180
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1176,
                "end": 1180
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1182,
                  "end": 1183
                },
                "value": {
                  "type": "Literal",
                  "value": 2,
                  "raw": "2",
                  "start": 1185,
                  "end": 1186
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 1182,
                "end": 1186
              }
            ],
            "start": 1174,
            "end": 1188
          },
          "definite": false,
          "start": 1170,
          "end": 1188
        }
      ],
      "declare": false,
      "start": 1166,
      "end": 1189
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1190,
        "end": 1191
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 1200,
              "end": 1201
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1202,
              "end": 1203
            },
            "optional": false,
            "computed": false,
            "start": 1200,
            "end": 1203
          },
          "prefix": true,
          "start": 1193,
          "end": 1203
        },
        "directive": null,
        "start": 1193,
        "end": 1204
      },
      "start": 1190,
      "end": 1204
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1205,
        "end": 1206
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "objA",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1219
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 1220,
              "end": 1221
            },
            "optional": false,
            "computed": false,
            "start": 1215,
            "end": 1221
          },
          "prefix": true,
          "start": 1208,
          "end": 1221
        },
        "directive": null,
        "start": 1208,
        "end": 1222
      },
      "start": 1205,
      "end": 1222
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1223,
        "end": 1224
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 1233,
              "end": 1234
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 1235,
              "end": 1238
            },
            "optional": false,
            "computed": false,
            "start": 1233,
            "end": 1238
          },
          "prefix": true,
          "start": 1226,
          "end": 1238
        },
        "directive": null,
        "start": 1226,
        "end": 1239
      },
      "start": 1223,
      "end": 1239
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 1240,
        "end": 1241
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 1250,
              "end": 1251
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null,
              "start": 1252,
              "end": 1253
            },
            "optional": false,
            "computed": false,
            "start": 1250,
            "end": 1253
          },
          "prefix": true,
          "start": 1243,
          "end": 1253
        },
        "directive": null,
        "start": 1243,
        "end": 1254
      },
      "start": 1240,
      "end": 1254
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 35,
  "end": 1254
}
```
