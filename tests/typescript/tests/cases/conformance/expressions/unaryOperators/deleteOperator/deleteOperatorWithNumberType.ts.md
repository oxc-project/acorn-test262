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
      "end": 308,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 275,
          "end": 307,
          "id": {
            "type": "Identifier",
            "start": 275,
            "end": 291,
            "decorators": [],
            "name": "ResultIsBoolean1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 294,
            "end": 307,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 301,
              "end": 307,
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
      "start": 309,
      "end": 347,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 313,
          "end": 346,
          "id": {
            "type": "Identifier",
            "start": 313,
            "end": 329,
            "decorators": [],
            "name": "ResultIsBoolean2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 332,
            "end": 346,
            "operator": "delete",
            "argument": {
              "type": "Identifier",
              "start": 339,
              "end": 346,
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
      "start": 372,
      "end": 404,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 376,
          "end": 403,
          "id": {
            "type": "Identifier",
            "start": 376,
            "end": 392,
            "decorators": [],
            "name": "ResultIsBoolean3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 395,
            "end": 403,
            "operator": "delete",
            "argument": {
              "type": "Literal",
              "start": 402,
              "end": 403,
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
      "start": 405,
      "end": 449,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 409,
          "end": 448,
          "id": {
            "type": "Identifier",
            "start": 409,
            "end": 425,
            "decorators": [],
            "name": "ResultIsBoolean4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 428,
            "end": 448,
            "operator": "delete",
            "argument": {
              "type": "ObjectExpression",
              "start": 435,
              "end": 448,
              "properties": [
                {
                  "type": "Property",
                  "start": 437,
                  "end": 441,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 438,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 440,
                    "end": 441,
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
                  "start": 443,
                  "end": 447,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 444,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 446,
                    "end": 447,
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
      "start": 450,
      "end": 522,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 521,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 470,
            "decorators": [],
            "name": "ResultIsBoolean5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 473,
            "end": 521,
            "operator": "delete",
            "argument": {
              "type": "ObjectExpression",
              "start": 480,
              "end": 521,
              "properties": [
                {
                  "type": "Property",
                  "start": 482,
                  "end": 486,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 483,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
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
                  "start": 488,
                  "end": 519,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 488,
                    "end": 489,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 491,
                    "end": 519,
                    "expression": false,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 492,
                        "end": 501,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 493,
                          "end": 501,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 495,
                            "end": 501
                          }
                        }
                      }
                    ],
                    "returnType": null,
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
      "start": 551,
      "end": 588,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 555,
          "end": 587,
          "id": {
            "type": "Identifier",
            "start": 555,
            "end": 571,
            "decorators": [],
            "name": "ResultIsBoolean6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 574,
            "end": 587,
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 581,
              "end": 587,
              "object": {
                "type": "Identifier",
                "start": 581,
                "end": 585,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
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
      "start": 589,
      "end": 623,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 593,
          "end": 622,
          "id": {
            "type": "Identifier",
            "start": 593,
            "end": 609,
            "decorators": [],
            "name": "ResultIsBoolean7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 612,
            "end": 622,
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 619,
              "end": 622,
              "object": {
                "type": "Identifier",
                "start": 619,
                "end": 620,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 621,
                "end": 622,
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
      "start": 624,
      "end": 665,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 628,
          "end": 664,
          "id": {
            "type": "Identifier",
            "start": 628,
            "end": 644,
            "decorators": [],
            "name": "ResultIsBoolean8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 647,
            "end": 664,
            "operator": "delete",
            "argument": {
              "type": "MemberExpression",
              "start": 654,
              "end": 664,
              "object": {
                "type": "Identifier",
                "start": 654,
                "end": 661,
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 662,
                "end": 663,
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
      "start": 666,
      "end": 702,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 670,
          "end": 701,
          "id": {
            "type": "Identifier",
            "start": 670,
            "end": 686,
            "decorators": [],
            "name": "ResultIsBoolean9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 689,
            "end": 701,
            "operator": "delete",
            "argument": {
              "type": "CallExpression",
              "start": 696,
              "end": 701,
              "callee": {
                "type": "Identifier",
                "start": 696,
                "end": 699,
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
      "start": 703,
      "end": 742,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 707,
          "end": 741,
          "id": {
            "type": "Identifier",
            "start": 707,
            "end": 724,
            "decorators": [],
            "name": "ResultIsBoolean10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 727,
            "end": 741,
            "operator": "delete",
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
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 739,
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
      "start": 743,
      "end": 792,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 747,
          "end": 791,
          "id": {
            "type": "Identifier",
            "start": 747,
            "end": 764,
            "decorators": [],
            "name": "ResultIsBoolean11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 767,
            "end": 791,
            "operator": "delete",
            "argument": {
              "type": "BinaryExpression",
              "start": 775,
              "end": 790,
              "left": {
                "type": "Identifier",
                "start": 775,
                "end": 781,
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 784,
                "end": 790,
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
      "start": 823,
      "end": 868,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 827,
          "end": 867,
          "id": {
            "type": "Identifier",
            "start": 827,
            "end": 844,
            "decorators": [],
            "name": "ResultIsBoolean12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 847,
            "end": 867,
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "start": 854,
              "end": 867,
              "operator": "delete",
              "argument": {
                "type": "Identifier",
                "start": 861,
                "end": 867,
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
      "start": 869,
      "end": 932,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 873,
          "end": 931,
          "id": {
            "type": "Identifier",
            "start": 873,
            "end": 890,
            "decorators": [],
            "name": "ResultIsBoolean13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 893,
            "end": 931,
            "operator": "delete",
            "argument": {
              "type": "UnaryExpression",
              "start": 900,
              "end": 931,
              "operator": "delete",
              "argument": {
                "type": "UnaryExpression",
                "start": 907,
                "end": 931,
                "operator": "delete",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 915,
                  "end": 930,
                  "left": {
                    "type": "Identifier",
                    "start": 915,
                    "end": 921,
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "+",
                  "right": {
                    "type": "Identifier",
                    "start": 924,
                    "end": 930,
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
      "start": 963,
      "end": 972,
      "expression": {
        "type": "UnaryExpression",
        "start": 963,
        "end": 971,
        "operator": "delete",
        "argument": {
          "type": "Literal",
          "start": 970,
          "end": 971,
          "value": 1,
          "raw": "1"
        },
        "prefix": true
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
        "argument": {
          "type": "Identifier",
          "start": 980,
          "end": 986,
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
      "start": 988,
      "end": 1003,
      "expression": {
        "type": "UnaryExpression",
        "start": 988,
        "end": 1002,
        "operator": "delete",
        "argument": {
          "type": "Identifier",
          "start": 995,
          "end": 1002,
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
      "start": 1004,
      "end": 1017,
      "expression": {
        "type": "UnaryExpression",
        "start": 1004,
        "end": 1016,
        "operator": "delete",
        "argument": {
          "type": "CallExpression",
          "start": 1011,
          "end": 1016,
          "callee": {
            "type": "Identifier",
            "start": 1011,
            "end": 1014,
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
      "start": 1018,
      "end": 1032,
      "expression": {
        "type": "UnaryExpression",
        "start": 1018,
        "end": 1031,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 1025,
          "end": 1031,
          "object": {
            "type": "Identifier",
            "start": 1025,
            "end": 1029,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1030,
            "end": 1031,
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
      "start": 1033,
      "end": 1044,
      "expression": {
        "type": "UnaryExpression",
        "start": 1033,
        "end": 1043,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 1040,
          "end": 1043,
          "object": {
            "type": "Identifier",
            "start": 1040,
            "end": 1041,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1042,
            "end": 1043,
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
            "argument": {
              "type": "MemberExpression",
              "start": 1052,
              "end": 1058,
              "object": {
                "type": "Identifier",
                "start": 1052,
                "end": 1056,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1057,
                "end": 1058,
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
            "start": 1060,
            "end": 1063,
            "object": {
              "type": "Identifier",
              "start": 1060,
              "end": 1061,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1062,
              "end": 1063,
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
