__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 35,
  "end": 1064,
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
      "end": 308,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 307,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 291,
            "name": "ResultIsBoolean1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 294,
            "end": 307,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 301,
              "end": 307,
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
      "start": 309,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 329,
            "name": "ResultIsBoolean2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 332,
            "end": 346,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 339,
              "end": 346,
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
      "start": 372,
      "end": 404,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 403,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 392,
            "name": "ResultIsBoolean3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 395,
            "end": 403,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 402,
              "end": 403,
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
      "start": 405,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 448,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 425,
            "name": "ResultIsBoolean4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 428,
            "end": 448,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 435,
              "end": 448,
              "properties": [
                {
                  "type": "Property",
                  "start": 437,
                  "end": 441,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 438,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 440,
                    "end": 441,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 443,
                  "end": 447,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 444,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 446,
                    "end": 447,
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
      "start": 450,
      "end": 522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 521,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 470,
            "name": "ResultIsBoolean5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 473,
            "end": 521,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 480,
              "end": 521,
              "properties": [
                {
                  "type": "Property",
                  "start": 482,
                  "end": 486,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 483,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 488,
                  "end": 519,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 488,
                    "end": 489,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 491,
                    "end": 519,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 492,
                        "end": 501,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 493,
                          "end": 501,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 495,
                            "end": 501
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 506,
                      "end": 519,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 508,
                          "end": 517,
                          "argument": {
                            "type": "Identifier",
                            "start": 515,
                            "end": 516,
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
      "start": 551,
      "end": 588,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 555,
          "end": 587,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 571,
            "name": "ResultIsBoolean6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 574,
            "end": 587,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 581,
              "end": 587,
              "object": {
                "type": "Identifier",
                "start": 581,
                "end": 585,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
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
      "start": 589,
      "end": 623,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 593,
          "end": 622,
          "id": {
            "type": "Identifier",
            "start": 593,
            "end": 609,
            "name": "ResultIsBoolean7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 612,
            "end": 622,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 619,
              "end": 622,
              "object": {
                "type": "Identifier",
                "start": 619,
                "end": 620,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 621,
                "end": 622,
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
      "start": 624,
      "end": 665,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 628,
          "end": 664,
          "id": {
            "type": "Identifier",
            "start": 628,
            "end": 644,
            "name": "ResultIsBoolean8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 647,
            "end": 664,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 654,
              "end": 664,
              "object": {
                "type": "Identifier",
                "start": 654,
                "end": 661,
                "name": "NUMBER1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 662,
                "end": 663,
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
      "start": 666,
      "end": 702,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 670,
          "end": 701,
          "id": {
            "type": "Identifier",
            "start": 670,
            "end": 686,
            "name": "ResultIsBoolean9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 689,
            "end": 701,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 696,
              "end": 701,
              "callee": {
                "type": "Identifier",
                "start": 696,
                "end": 699,
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
      "start": 703,
      "end": 742,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 707,
          "end": 741,
          "id": {
            "type": "Identifier",
            "start": 707,
            "end": 724,
            "name": "ResultIsBoolean10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 727,
            "end": 741,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 734,
              "end": 741,
              "callee": {
                "type": "MemberExpression",
                "start": 734,
                "end": 739,
                "object": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 739,
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
      "start": 743,
      "end": 792,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 747,
          "end": 791,
          "id": {
            "type": "Identifier",
            "start": 747,
            "end": 764,
            "name": "ResultIsBoolean11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 767,
            "end": 791,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 775,
              "end": 790,
              "left": {
                "type": "Identifier",
                "start": 775,
                "end": 781,
                "name": "NUMBER",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 784,
                "end": 790,
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
      "start": 823,
      "end": 868,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 827,
          "end": 867,
          "id": {
            "type": "Identifier",
            "start": 827,
            "end": 844,
            "name": "ResultIsBoolean12",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 847,
            "end": 867,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 854,
              "end": 867,
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 861,
                "end": 867,
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
      "start": 869,
      "end": 932,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 873,
          "end": 931,
          "id": {
            "type": "Identifier",
            "start": 873,
            "end": 890,
            "name": "ResultIsBoolean13",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 893,
            "end": 931,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 900,
              "end": 931,
              "operator": "delete",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 907,
                "end": 931,
                "operator": "delete",
                "prefix": true,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 915,
                  "end": 930,
                  "left": {
                    "type": "Identifier",
                    "start": 915,
                    "end": 921,
                    "name": "NUMBER",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 924,
                    "end": 930,
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
      "start": 963,
      "end": 972,
      "expression": {
        "type": "UnaryExpression",
        "start": 963,
        "end": 971,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 970,
          "end": 971,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 973,
      "end": 987,
      "expression": {
        "type": "UnaryExpression",
        "start": 973,
        "end": 986,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 980,
          "end": 986,
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
      "start": 988,
      "end": 1003,
      "expression": {
        "type": "UnaryExpression",
        "start": 988,
        "end": 1002,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 995,
          "end": 1002,
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
      "start": 1004,
      "end": 1017,
      "expression": {
        "type": "UnaryExpression",
        "start": 1004,
        "end": 1016,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 1011,
          "end": 1016,
          "callee": {
            "type": "Identifier",
            "start": 1011,
            "end": 1014,
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
      "start": 1018,
      "end": 1032,
      "expression": {
        "type": "UnaryExpression",
        "start": 1018,
        "end": 1031,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1025,
          "end": 1031,
          "object": {
            "type": "Identifier",
            "start": 1025,
            "end": 1029,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1030,
            "end": 1031,
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
      "start": 1033,
      "end": 1044,
      "expression": {
        "type": "UnaryExpression",
        "start": 1033,
        "end": 1043,
        "operator": "delete",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 1040,
          "end": 1043,
          "object": {
            "type": "Identifier",
            "start": 1040,
            "end": 1041,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1042,
            "end": 1043,
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
      "start": 1045,
      "end": 1064,
      "expression": {
        "type": "SequenceExpression",
        "start": 1045,
        "end": 1063,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1045,
            "end": 1058,
            "operator": "delete",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 1052,
              "end": 1058,
              "object": {
                "type": "Identifier",
                "start": 1052,
                "end": 1056,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 1057,
                "end": 1058,
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
            "start": 1060,
            "end": 1063,
            "object": {
              "type": "Identifier",
              "start": 1060,
              "end": 1061,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 1062,
              "end": 1063,
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
