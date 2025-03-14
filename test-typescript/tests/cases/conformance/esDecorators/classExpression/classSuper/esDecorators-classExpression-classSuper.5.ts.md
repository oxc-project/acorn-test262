__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1008,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 20,
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 20,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 67,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 67,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 65,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 64,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 58,
                "end": 64
              }
            },
            "value": null
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "Base",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 83,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 82,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 79,
            "end": 82,
            "raw": "\"x\"",
            "value": "x"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 379,
      "expression": {
        "type": "ClassExpression",
        "start": 86,
        "end": 377,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 113,
          "end": 377,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 119,
              "end": 138,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "MemberExpression",
                "start": 130,
                "end": 137,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 130,
                  "end": 135
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 143,
              "end": 166,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 154,
                "end": 165,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 154,
                  "end": 161,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 154,
                    "end": 159
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 164,
                  "end": 165,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 171,
              "end": 195,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 182,
                "end": 194,
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "start": 182,
                  "end": 189,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 182,
                    "end": 187
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 189,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 193,
                  "end": 194,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 200,
              "end": 221,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 211,
                "end": 220,
                "argument": {
                  "type": "MemberExpression",
                  "start": 211,
                  "end": 218,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 211,
                    "end": 216
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 218,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "operator": "++",
                "prefix": false
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 226,
              "end": 247,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 237,
                "end": 246,
                "argument": {
                  "type": "MemberExpression",
                  "start": 237,
                  "end": 244,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 237,
                    "end": 242
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "operator": "--",
                "prefix": false
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 252,
              "end": 273,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 263,
                "end": 272,
                "argument": {
                  "type": "MemberExpression",
                  "start": 265,
                  "end": 272,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 265,
                    "end": 270
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "operator": "++",
                "prefix": true
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 278,
              "end": 299,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 289,
                "end": 298,
                "argument": {
                  "type": "MemberExpression",
                  "start": 291,
                  "end": 298,
                  "computed": false,
                  "object": {
                    "type": "Super",
                    "start": 291,
                    "end": 296
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 298,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "operator": "--",
                "prefix": true
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 304,
              "end": 343,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "decorators": [],
                "name": "h",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 316,
                "end": 341,
                "operator": "=",
                "left": {
                  "type": "ObjectPattern",
                  "start": 316,
                  "end": 330,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 318,
                      "end": 328,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "start": 321,
                        "end": 328,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 321,
                          "end": 326
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 328,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 333,
                  "end": 341,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 335,
                      "end": 339,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 335,
                        "end": 336,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 338,
                        "end": 339,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 348,
              "end": 375,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 359,
                "end": 374,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 359,
                  "end": 368,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "start": 360,
                      "end": 367,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 360,
                        "end": 365
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 367,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ],
                  "optional": false
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 371,
                  "end": 374,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 372,
                      "end": 373,
                      "raw": "1",
                      "value": 1
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 86,
            "end": 90,
            "expression": {
              "type": "Identifier",
              "start": 87,
              "end": 90,
              "decorators": [],
              "name": "dec",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 99,
          "decorators": [],
          "name": "C1",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 108,
          "end": 112,
          "decorators": [],
          "name": "Base",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 381,
      "end": 702,
      "expression": {
        "type": "ClassExpression",
        "start": 382,
        "end": 700,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 409,
          "end": 700,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 415,
              "end": 437,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "MemberExpression",
                "start": 426,
                "end": 436,
                "computed": true,
                "object": {
                  "type": "Super",
                  "start": 426,
                  "end": 431
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 432,
                  "end": 435,
                  "raw": "\"x\"",
                  "value": "x"
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 442,
              "end": 468,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 449,
                "end": 450,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 453,
                "end": 467,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 453,
                  "end": 463,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 453,
                    "end": 458
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 459,
                    "end": 462,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 466,
                  "end": 467,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 473,
              "end": 500,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 484,
                "end": 499,
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "start": 484,
                  "end": 494,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 484,
                    "end": 489
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 490,
                    "end": 493,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 498,
                  "end": 499,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 505,
              "end": 529,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 512,
                "end": 513,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 516,
                "end": 528,
                "argument": {
                  "type": "MemberExpression",
                  "start": 516,
                  "end": 526,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 516,
                    "end": 521
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 522,
                    "end": 525,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "operator": "++",
                "prefix": false
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 534,
              "end": 558,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 541,
                "end": 542,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 545,
                "end": 557,
                "argument": {
                  "type": "MemberExpression",
                  "start": 545,
                  "end": 555,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 545,
                    "end": 550
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 551,
                    "end": 554,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "operator": "--",
                "prefix": false
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 563,
              "end": 587,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 570,
                "end": 571,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 574,
                "end": 586,
                "argument": {
                  "type": "MemberExpression",
                  "start": 576,
                  "end": 586,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 576,
                    "end": 581
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 582,
                    "end": 585,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "operator": "++",
                "prefix": true
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 592,
              "end": 616,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 599,
                "end": 600,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 603,
                "end": 615,
                "argument": {
                  "type": "MemberExpression",
                  "start": 605,
                  "end": 615,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 605,
                    "end": 610
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 611,
                    "end": 614,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "operator": "--",
                "prefix": true
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 621,
              "end": 663,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 628,
                "end": 629,
                "decorators": [],
                "name": "h",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 633,
                "end": 661,
                "operator": "=",
                "left": {
                  "type": "ObjectPattern",
                  "start": 633,
                  "end": 650,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 635,
                      "end": 648,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 635,
                        "end": 636,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "start": 638,
                        "end": 648,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 638,
                          "end": 643
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 644,
                          "end": 647,
                          "raw": "\"x\"",
                          "value": "x"
                        }
                      }
                    }
                  ]
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 653,
                  "end": 661,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 655,
                      "end": 659,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 655,
                        "end": 656,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 658,
                        "end": 659,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 668,
              "end": 698,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 675,
                "end": 676,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 679,
                "end": 697,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 679,
                  "end": 691,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "start": 680,
                      "end": 690,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 680,
                        "end": 685
                      },
                      "optional": false,
                      "property": {
                        "type": "Literal",
                        "start": 686,
                        "end": 689,
                        "raw": "\"x\"",
                        "value": "x"
                      }
                    }
                  ],
                  "optional": false
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 694,
                  "end": 697,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 695,
                      "end": 696,
                      "raw": "1",
                      "value": 1
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 382,
            "end": 386,
            "expression": {
              "type": "Identifier",
              "start": 383,
              "end": 386,
              "decorators": [],
              "name": "dec",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 393,
          "end": 395,
          "decorators": [],
          "name": "C2",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 404,
          "end": 408,
          "decorators": [],
          "name": "Base",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 704,
      "end": 1007,
      "expression": {
        "type": "ClassExpression",
        "start": 705,
        "end": 1005,
        "abstract": false,
        "body": {
          "type": "ClassBody",
          "start": 732,
          "end": 1005,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 738,
              "end": 758,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 745,
                "end": 746,
                "decorators": [],
                "name": "a",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "MemberExpression",
                "start": 749,
                "end": 757,
                "computed": true,
                "object": {
                  "type": "Super",
                  "start": 749,
                  "end": 754
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 756,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 763,
              "end": 787,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 770,
                "end": 771,
                "decorators": [],
                "name": "b",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 774,
                "end": 786,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 774,
                  "end": 782,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 774,
                    "end": 779
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 781,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 785,
                  "end": 786,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 792,
              "end": 817,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 799,
                "end": 800,
                "decorators": [],
                "name": "c",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 803,
                "end": 816,
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "start": 803,
                  "end": 811,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 803,
                    "end": 808
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 810,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "right": {
                  "type": "Literal",
                  "start": 815,
                  "end": 816,
                  "raw": "1",
                  "value": 1
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 822,
              "end": 844,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 829,
                "end": 830,
                "decorators": [],
                "name": "d",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 833,
                "end": 843,
                "argument": {
                  "type": "MemberExpression",
                  "start": 833,
                  "end": 841,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 833,
                    "end": 838
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 839,
                    "end": 840,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "operator": "++",
                "prefix": false
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 849,
              "end": 871,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 856,
                "end": 857,
                "decorators": [],
                "name": "e",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 860,
                "end": 870,
                "argument": {
                  "type": "MemberExpression",
                  "start": 860,
                  "end": 868,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 860,
                    "end": 865
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 866,
                    "end": 867,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "operator": "--",
                "prefix": false
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 876,
              "end": 898,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 883,
                "end": 884,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 887,
                "end": 897,
                "argument": {
                  "type": "MemberExpression",
                  "start": 889,
                  "end": 897,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 889,
                    "end": 894
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 896,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "operator": "++",
                "prefix": true
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 903,
              "end": 925,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 910,
                "end": 911,
                "decorators": [],
                "name": "g",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "UpdateExpression",
                "start": 914,
                "end": 924,
                "argument": {
                  "type": "MemberExpression",
                  "start": 916,
                  "end": 924,
                  "computed": true,
                  "object": {
                    "type": "Super",
                    "start": 916,
                    "end": 921
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 922,
                    "end": 923,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "operator": "--",
                "prefix": true
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 930,
              "end": 970,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 937,
                "end": 938,
                "decorators": [],
                "name": "h",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 942,
                "end": 968,
                "operator": "=",
                "left": {
                  "type": "ObjectPattern",
                  "start": 942,
                  "end": 957,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 944,
                      "end": 955,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 945,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "MemberExpression",
                        "start": 947,
                        "end": 955,
                        "computed": true,
                        "object": {
                          "type": "Super",
                          "start": 947,
                          "end": 952
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 953,
                          "end": 954,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        }
                      }
                    }
                  ]
                },
                "right": {
                  "type": "ObjectExpression",
                  "start": 960,
                  "end": 968,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 962,
                      "end": 966,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 962,
                        "end": 963,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 965,
                        "end": 966,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              }
            },
            {
              "type": "PropertyDefinition",
              "start": 975,
              "end": 1003,
              "computed": false,
              "declare": false,
              "decorators": [],
              "definite": false,
              "key": {
                "type": "Identifier",
                "start": 982,
                "end": 983,
                "decorators": [],
                "name": "i",
                "optional": false
              },
              "optional": false,
              "override": false,
              "readonly": false,
              "static": true,
              "value": {
                "type": "AssignmentExpression",
                "start": 986,
                "end": 1002,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 986,
                  "end": 996,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "MemberExpression",
                      "start": 987,
                      "end": 995,
                      "computed": true,
                      "object": {
                        "type": "Super",
                        "start": 987,
                        "end": 992
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 993,
                        "end": 994,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      }
                    }
                  ],
                  "optional": false
                },
                "right": {
                  "type": "ArrayExpression",
                  "start": 999,
                  "end": 1002,
                  "elements": [
                    {
                      "type": "Literal",
                      "start": 1000,
                      "end": 1001,
                      "raw": "1",
                      "value": 1
                    }
                  ]
                }
              }
            }
          ]
        },
        "declare": false,
        "decorators": [
          {
            "type": "Decorator",
            "start": 705,
            "end": 709,
            "expression": {
              "type": "Identifier",
              "start": 706,
              "end": 709,
              "decorators": [],
              "name": "dec",
              "optional": false
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 716,
          "end": 718,
          "decorators": [],
          "name": "C3",
          "optional": false
        },
        "implements": [],
        "superClass": {
          "type": "Identifier",
          "start": 727,
          "end": 731,
          "decorators": [],
          "name": "Base",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
