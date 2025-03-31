__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 799,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 29,
      "end": 48,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 33,
          "end": 47,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 47,
            "name": "NUMBER",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
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
      "start": 49,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 79,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 70,
            "name": "NUMBER1",
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
            },
            "decorators": [],
            "optional": false
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
      "kind": "var",
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
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 96,
        "end": 104,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 98,
          "end": 104
        }
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 120,
      "end": 184,
      "id": {
        "type": "Identifier",
        "start": 126,
        "end": 127,
        "name": "A",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 151,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
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
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              }
            },
            "accessibility": "public"
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 182,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "FunctionExpression",
              "start": 166,
              "end": 182,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
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
      "start": 185,
      "end": 223,
      "id": {
        "type": "Identifier",
        "start": 192,
        "end": 193,
        "name": "M",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 211,
                  "end": 220,
                  "id": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 220,
                    "name": "n",
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 212,
                      "end": 220,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 214,
                        "end": 220
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
      "start": 225,
      "end": 244,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 229,
          "end": 243,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 233,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 236,
            "end": 243,
            "callee": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
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
      "start": 265,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 294,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 284,
            "name": "ResultIsNumber1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 287,
            "end": 294,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 288,
              "end": 294,
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
      "start": 296,
      "end": 327,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 300,
          "end": 326,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 315,
            "name": "ResultIsNumber2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 318,
            "end": 326,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 319,
              "end": 326,
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
      "start": 352,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 356,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 356,
            "end": 371,
            "name": "ResultIsNumber3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 374,
            "end": 376,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "Literal",
              "start": 375,
              "end": 376,
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
      "start": 378,
      "end": 415,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 382,
          "end": 414,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 397,
            "name": "ResultIsNumber4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 400,
            "end": 414,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 401,
              "end": 414,
              "properties": [
                {
                  "type": "Property",
                  "start": 403,
                  "end": 407,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 404,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 406,
                    "end": 407,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 409,
                  "end": 413,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 410,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 412,
                    "end": 413,
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
      "start": 416,
      "end": 481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 480,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 435,
            "name": "ResultIsNumber5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 438,
            "end": 480,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "ObjectExpression",
              "start": 439,
              "end": 480,
              "properties": [
                {
                  "type": "Property",
                  "start": 441,
                  "end": 445,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 442,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 444,
                    "end": 445,
                    "value": 1,
                    "raw": "1"
                  },
                  "kind": "init",
                  "optional": false
                },
                {
                  "type": "Property",
                  "start": 447,
                  "end": 478,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 447,
                    "end": 448,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "ArrowFunctionExpression",
                    "start": 450,
                    "end": 478,
                    "id": null,
                    "expression": false,
                    "generator": false,
                    "async": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 451,
                        "end": 460,
                        "name": "n",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 452,
                          "end": 460,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 454,
                            "end": 460
                          }
                        },
                        "decorators": [],
                        "optional": false
                      }
                    ],
                    "body": {
                      "type": "BlockStatement",
                      "start": 465,
                      "end": 478,
                      "body": [
                        {
                          "type": "ReturnStatement",
                          "start": 467,
                          "end": 476,
                          "argument": {
                            "type": "Identifier",
                            "start": 474,
                            "end": 475,
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
      "start": 510,
      "end": 540,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 514,
          "end": 539,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 529,
            "name": "ResultIsNumber6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 532,
            "end": 539,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 533,
              "end": 539,
              "object": {
                "type": "Identifier",
                "start": 533,
                "end": 537,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 538,
                "end": 539,
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
      "start": 541,
      "end": 568,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 545,
          "end": 567,
          "id": {
            "type": "Identifier",
            "start": 545,
            "end": 560,
            "name": "ResultIsNumber7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 563,
            "end": 567,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 564,
              "end": 567,
              "object": {
                "type": "Identifier",
                "start": 564,
                "end": 565,
                "name": "M",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 566,
                "end": 567,
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
      "start": 569,
      "end": 603,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 573,
          "end": 602,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 588,
            "name": "ResultIsNumber8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 591,
            "end": 602,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 592,
              "end": 602,
              "object": {
                "type": "Identifier",
                "start": 592,
                "end": 599,
                "name": "NUMBER1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 600,
                "end": 601,
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
      "start": 604,
      "end": 633,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 608,
          "end": 632,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 623,
            "name": "ResultIsNumber9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 626,
            "end": 632,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 627,
              "end": 632,
              "callee": {
                "type": "Identifier",
                "start": 627,
                "end": 630,
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
      "start": 634,
      "end": 666,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 638,
          "end": 665,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 654,
            "name": "ResultIsNumber10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 657,
            "end": 665,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "CallExpression",
              "start": 658,
              "end": 665,
              "callee": {
                "type": "MemberExpression",
                "start": 658,
                "end": 663,
                "object": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 659,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 663,
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
      "start": 667,
      "end": 709,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 671,
          "end": 708,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 687,
            "name": "ResultIsNumber11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 690,
            "end": 708,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "BinaryExpression",
              "start": 692,
              "end": 707,
              "left": {
                "type": "Identifier",
                "start": 692,
                "end": 698,
                "name": "NUMBER",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "+",
              "right": {
                "type": "Identifier",
                "start": 701,
                "end": 707,
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
      "type": "ExpressionStatement",
      "start": 740,
      "end": 743,
      "expression": {
        "type": "UnaryExpression",
        "start": 740,
        "end": 742,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "Literal",
          "start": 741,
          "end": 742,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 744,
      "end": 752,
      "expression": {
        "type": "UnaryExpression",
        "start": 744,
        "end": 751,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 745,
          "end": 751,
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
      "start": 753,
      "end": 762,
      "expression": {
        "type": "UnaryExpression",
        "start": 753,
        "end": 761,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 754,
          "end": 761,
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
      "start": 763,
      "end": 770,
      "expression": {
        "type": "UnaryExpression",
        "start": 763,
        "end": 769,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 764,
          "end": 769,
          "callee": {
            "type": "Identifier",
            "start": 764,
            "end": 767,
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
      "start": 771,
      "end": 779,
      "expression": {
        "type": "UnaryExpression",
        "start": 771,
        "end": 778,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 772,
          "end": 778,
          "object": {
            "type": "Identifier",
            "start": 772,
            "end": 776,
            "name": "objA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 777,
            "end": 778,
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
      "start": 780,
      "end": 785,
      "expression": {
        "type": "UnaryExpression",
        "start": 780,
        "end": 784,
        "operator": "+",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 781,
          "end": 784,
          "object": {
            "type": "Identifier",
            "start": 781,
            "end": 782,
            "name": "M",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 783,
            "end": 784,
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
      "start": 786,
      "end": 799,
      "expression": {
        "type": "SequenceExpression",
        "start": 786,
        "end": 798,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 786,
            "end": 793,
            "operator": "+",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 787,
              "end": 793,
              "object": {
                "type": "Identifier",
                "start": 787,
                "end": 791,
                "name": "objA",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 792,
                "end": 793,
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
            "start": 795,
            "end": 798,
            "object": {
              "type": "Identifier",
              "start": 795,
              "end": 796,
              "name": "M",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 797,
              "end": 798,
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
