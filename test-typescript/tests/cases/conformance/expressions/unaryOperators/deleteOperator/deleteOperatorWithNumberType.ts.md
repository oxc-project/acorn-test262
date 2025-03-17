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
          "definite": false,
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
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 83,
                "end": 84,
                "raw": "2",
                "value": 2
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 88,
      "end": 124,
      "async": false,
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
              "raw": "1",
              "value": 1
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 97,
        "end": 100,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 126,
      "end": 190,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 134,
        "end": 190,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 140,
            "end": 157,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 147,
              "end": 148,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
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
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 162,
            "end": 188,
            "accessibility": null,
            "computed": false,
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
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "FunctionExpression",
              "start": 172,
              "end": 188,
              "async": false,
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
                      "raw": "1",
                      "value": 1
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": null,
              "typeParameters": null
            }
          }
        ]
      },
      "declare": false,
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
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "TSModuleDeclaration",
      "start": 191,
      "end": 229,
      "body": {
        "type": "TSModuleBlock",
        "start": 200,
        "end": 229,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 206,
            "end": 227,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 213,
              "end": 227,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 217,
                  "end": 226,
                  "definite": false,
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
                  "init": null
                }
              ],
              "declare": false,
              "kind": "var"
            },
            "exportKind": "value",
            "source": null,
            "specifiers": []
          }
        ]
      },
      "declare": false,
      "global": false,
      "id": {
        "type": "Identifier",
        "start": 198,
        "end": 199,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
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
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 246,
              "end": 247,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 301,
              "end": 307,
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Identifier",
              "start": 339,
              "end": 346,
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "Literal",
              "start": 402,
              "end": 403,
              "raw": "1",
              "value": 1
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "ObjectExpression",
              "start": 435,
              "end": 448,
              "properties": [
                {
                  "type": "Property",
                  "start": 437,
                  "end": 441,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 437,
                    "end": 438,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 440,
                    "end": 441,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 443,
                  "end": 447,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 443,
                    "end": 444,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 446,
                    "end": 447,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "ObjectExpression",
              "start": 480,
              "end": 521,
              "properties": [
                {
                  "type": "Property",
                  "start": 482,
                  "end": 486,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 482,
                    "end": 483,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 485,
                    "end": 486,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 488,
                  "end": 519,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 488,
                    "end": 489,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 491,
                    "end": 519,
                    "async": false,
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
                    "expression": false,
                    "generator": false,
                    "id": null,
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
                    "typeParameters": null
                  }
                }
              ]
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 581,
              "end": 587,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 581,
                "end": 585,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 586,
                "end": 587,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 619,
              "end": 622,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 619,
                "end": 620,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 621,
                "end": 622,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "MemberExpression",
              "start": 654,
              "end": 664,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 654,
                "end": 661,
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 662,
                "end": 663,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 696,
              "end": 701,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 696,
                "end": 699,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "CallExpression",
              "start": 734,
              "end": 741,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 734,
                "end": 739,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 734,
                  "end": 735,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 736,
                  "end": 739,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "BinaryExpression",
              "start": 775,
              "end": 790,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 775,
                "end": 781,
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null
              },
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
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "UnaryExpression",
              "start": 854,
              "end": 867,
              "argument": {
                "type": "Identifier",
                "start": 861,
                "end": 867,
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "delete",
              "prefix": true
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
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
            "argument": {
              "type": "UnaryExpression",
              "start": 900,
              "end": 931,
              "argument": {
                "type": "UnaryExpression",
                "start": 907,
                "end": 931,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 915,
                  "end": 930,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 915,
                    "end": 921,
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null
                  },
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
                "operator": "delete",
                "prefix": true
              },
              "operator": "delete",
              "prefix": true
            },
            "operator": "delete",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 963,
      "end": 972,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 963,
        "end": 971,
        "argument": {
          "type": "Literal",
          "start": 970,
          "end": 971,
          "raw": "1",
          "value": 1
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 973,
      "end": 987,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 973,
        "end": 986,
        "argument": {
          "type": "Identifier",
          "start": 980,
          "end": 986,
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 988,
      "end": 1003,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 988,
        "end": 1002,
        "argument": {
          "type": "Identifier",
          "start": 995,
          "end": 1002,
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1004,
      "end": 1017,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1004,
        "end": 1016,
        "argument": {
          "type": "CallExpression",
          "start": 1011,
          "end": 1016,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 1011,
            "end": 1014,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1018,
      "end": 1032,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1018,
        "end": 1031,
        "argument": {
          "type": "MemberExpression",
          "start": 1025,
          "end": 1031,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1025,
            "end": 1029,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1030,
            "end": 1031,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1033,
      "end": 1044,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 1033,
        "end": 1043,
        "argument": {
          "type": "MemberExpression",
          "start": 1040,
          "end": 1043,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 1040,
            "end": 1041,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 1042,
            "end": 1043,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "delete",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 1045,
      "end": 1064,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 1045,
        "end": 1063,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 1045,
            "end": 1058,
            "argument": {
              "type": "MemberExpression",
              "start": 1052,
              "end": 1058,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1052,
                "end": 1056,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1057,
                "end": 1058,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "delete",
            "prefix": true
          },
          {
            "type": "MemberExpression",
            "start": 1060,
            "end": 1063,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 1060,
              "end": 1061,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 1062,
              "end": 1063,
              "decorators": [],
              "name": "n",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
