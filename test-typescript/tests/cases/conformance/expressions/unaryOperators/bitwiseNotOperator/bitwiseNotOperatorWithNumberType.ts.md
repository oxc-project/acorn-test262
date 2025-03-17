__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 29,
  "end": 898,
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 33,
            "end": 47,
            "decorators": [],
            "name": "NUMBER",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 47,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 41,
                "end": 47
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
      "start": 49,
      "end": 80,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 53,
          "end": 79,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 53,
            "end": 70,
            "decorators": [],
            "name": "NUMBER1",
            "optional": false,
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
            }
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
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 77,
                "end": 78,
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
      "start": 82,
      "end": 118,
      "async": false,
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
        "start": 91,
        "end": 94,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 96,
        "end": 104,
        "typeAnnotation": {
          "type": "TSNumberKeyword",
          "start": 98,
          "end": 104
        }
      },
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 120,
      "end": 184,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 128,
        "end": 184,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 134,
            "end": 151,
            "accessibility": "public",
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 141,
              "end": 142,
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
              "start": 142,
              "end": 150,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 144,
                "end": 150
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 156,
            "end": 182,
            "accessibility": null,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 163,
              "end": 166,
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
              "start": 166,
              "end": 182,
              "async": false,
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
        "start": 126,
        "end": 127,
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
      "start": 185,
      "end": 223,
      "body": {
        "type": "TSModuleBlock",
        "start": 194,
        "end": 223,
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "start": 200,
            "end": 221,
            "attributes": [],
            "declaration": {
              "type": "VariableDeclaration",
              "start": 207,
              "end": 221,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 211,
                  "end": 220,
                  "definite": false,
                  "id": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 220,
                    "decorators": [],
                    "name": "n",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 212,
                      "end": 220,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 214,
                        "end": 220
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
        "start": 192,
        "end": 193,
        "decorators": [],
        "name": "M",
        "optional": false,
        "typeAnnotation": null
      },
      "kind": "module"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 229,
            "end": 233,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "NewExpression",
            "start": 236,
            "end": 243,
            "arguments": [],
            "callee": {
              "type": "Identifier",
              "start": 240,
              "end": 241,
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
      "start": 265,
      "end": 295,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 294,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 284,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 287,
            "end": 294,
            "argument": {
              "type": "Identifier",
              "start": 288,
              "end": 294,
              "decorators": [],
              "name": "NUMBER",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 300,
            "end": 315,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 318,
            "end": 326,
            "argument": {
              "type": "Identifier",
              "start": 319,
              "end": 326,
              "decorators": [],
              "name": "NUMBER1",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 356,
            "end": 371,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 374,
            "end": 376,
            "argument": {
              "type": "Literal",
              "start": 375,
              "end": 376,
              "raw": "1",
              "value": 1
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 382,
            "end": 397,
            "decorators": [],
            "name": "ResultIsNumber4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 400,
            "end": 414,
            "argument": {
              "type": "ObjectExpression",
              "start": 401,
              "end": 414,
              "properties": [
                {
                  "type": "Property",
                  "start": 403,
                  "end": 407,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 403,
                    "end": 404,
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
                    "start": 406,
                    "end": 407,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 409,
                  "end": 413,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 410,
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
                    "start": 412,
                    "end": 413,
                    "raw": "2",
                    "value": 2
                  }
                }
              ]
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 435,
            "decorators": [],
            "name": "ResultIsNumber5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 438,
            "end": 480,
            "argument": {
              "type": "ObjectExpression",
              "start": 439,
              "end": 480,
              "properties": [
                {
                  "type": "Property",
                  "start": 441,
                  "end": 445,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 441,
                    "end": 442,
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
                    "start": 444,
                    "end": 445,
                    "raw": "1",
                    "value": 1
                  }
                },
                {
                  "type": "Property",
                  "start": 447,
                  "end": 478,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 447,
                    "end": 448,
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
                    "start": 450,
                    "end": 478,
                    "async": false,
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
                        "start": 451,
                        "end": 460,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 452,
                          "end": 460,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 454,
                            "end": 460
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
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 514,
            "end": 529,
            "decorators": [],
            "name": "ResultIsNumber6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 532,
            "end": 539,
            "argument": {
              "type": "MemberExpression",
              "start": 533,
              "end": 539,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 533,
                "end": 537,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 538,
                "end": 539,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 545,
            "end": 560,
            "decorators": [],
            "name": "ResultIsNumber7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 563,
            "end": 567,
            "argument": {
              "type": "MemberExpression",
              "start": 564,
              "end": 567,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 564,
                "end": 565,
                "decorators": [],
                "name": "M",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 566,
                "end": 567,
                "decorators": [],
                "name": "n",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 573,
            "end": 588,
            "decorators": [],
            "name": "ResultIsNumber8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 591,
            "end": 602,
            "argument": {
              "type": "MemberExpression",
              "start": 592,
              "end": 602,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 592,
                "end": 599,
                "decorators": [],
                "name": "NUMBER1",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 600,
                "end": 601,
                "raw": "0",
                "value": 0
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 608,
            "end": 623,
            "decorators": [],
            "name": "ResultIsNumber9",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 626,
            "end": 632,
            "argument": {
              "type": "CallExpression",
              "start": 627,
              "end": 632,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 627,
                "end": 630,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 638,
            "end": 654,
            "decorators": [],
            "name": "ResultIsNumber10",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 657,
            "end": 665,
            "argument": {
              "type": "CallExpression",
              "start": 658,
              "end": 665,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 658,
                "end": 663,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 658,
                  "end": 659,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 660,
                  "end": 663,
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "optional": false,
              "typeArguments": null
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
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
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 671,
            "end": 687,
            "decorators": [],
            "name": "ResultIsNumber11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 690,
            "end": 708,
            "argument": {
              "type": "BinaryExpression",
              "start": 692,
              "end": 707,
              "operator": "+",
              "left": {
                "type": "Identifier",
                "start": 692,
                "end": 698,
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 701,
                "end": 707,
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 735,
      "end": 767,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 739,
          "end": 766,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 739,
            "end": 755,
            "decorators": [],
            "name": "ResultIsNumber12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 758,
            "end": 766,
            "argument": {
              "type": "UnaryExpression",
              "start": 759,
              "end": 766,
              "argument": {
                "type": "Identifier",
                "start": 760,
                "end": 766,
                "decorators": [],
                "name": "NUMBER",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "~",
              "prefix": true
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 768,
      "end": 812,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 772,
          "end": 811,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 772,
            "end": 788,
            "decorators": [],
            "name": "ResultIsNumber13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 791,
            "end": 811,
            "argument": {
              "type": "UnaryExpression",
              "start": 792,
              "end": 811,
              "argument": {
                "type": "UnaryExpression",
                "start": 793,
                "end": 811,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 795,
                  "end": 810,
                  "operator": "+",
                  "left": {
                    "type": "Identifier",
                    "start": 795,
                    "end": 801,
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 804,
                    "end": 810,
                    "decorators": [],
                    "name": "NUMBER",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "~",
                "prefix": true
              },
              "operator": "~",
              "prefix": true
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 843,
      "end": 851,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 843,
        "end": 850,
        "argument": {
          "type": "Identifier",
          "start": 844,
          "end": 850,
          "decorators": [],
          "name": "NUMBER",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 852,
      "end": 861,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 852,
        "end": 860,
        "argument": {
          "type": "Identifier",
          "start": 853,
          "end": 860,
          "decorators": [],
          "name": "NUMBER1",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 862,
      "end": 869,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 862,
        "end": 868,
        "argument": {
          "type": "CallExpression",
          "start": 863,
          "end": 868,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 863,
            "end": 866,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "typeArguments": null
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 870,
      "end": 878,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 870,
        "end": 877,
        "argument": {
          "type": "MemberExpression",
          "start": 871,
          "end": 877,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 871,
            "end": 875,
            "decorators": [],
            "name": "objA",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 876,
            "end": 877,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 879,
      "end": 884,
      "directive": null,
      "expression": {
        "type": "UnaryExpression",
        "start": 879,
        "end": 883,
        "argument": {
          "type": "MemberExpression",
          "start": 880,
          "end": 883,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 880,
            "end": 881,
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 882,
            "end": 883,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 885,
      "end": 898,
      "directive": null,
      "expression": {
        "type": "SequenceExpression",
        "start": 885,
        "end": 897,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 885,
            "end": 892,
            "argument": {
              "type": "MemberExpression",
              "start": 886,
              "end": 892,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 886,
                "end": 890,
                "decorators": [],
                "name": "objA",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 891,
                "end": 892,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "~",
            "prefix": true
          },
          {
            "type": "MemberExpression",
            "start": 894,
            "end": 897,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 894,
              "end": 895,
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 896,
              "end": 897,
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
