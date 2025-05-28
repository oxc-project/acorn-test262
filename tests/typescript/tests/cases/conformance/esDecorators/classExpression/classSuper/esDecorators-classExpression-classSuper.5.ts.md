__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 1007,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 21,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 20,
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
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 23,
      "end": 67,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 37,
        "end": 41,
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 42,
        "end": 67,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 48,
            "end": 65,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 55,
              "end": 56,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 69,
      "end": 83,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 82,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 76,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 79,
            "end": 82,
            "value": "x",
            "raw": "\"x\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 85,
      "end": 379,
      "expression": {
        "type": "ClassExpression",
        "start": 86,
        "end": 377,
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 97,
          "end": 99,
          "decorators": [],
          "name": "C1",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 108,
          "end": 112,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 113,
          "end": 377,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 119,
              "end": 138,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 126,
                "end": 127,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "start": 130,
                "end": 137,
                "object": {
                  "type": "Super",
                  "start": 130,
                  "end": 135
                },
                "property": {
                  "type": "Identifier",
                  "start": 136,
                  "end": 137,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 143,
              "end": 166,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 150,
                "end": 151,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "start": 154,
                "end": 165,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 154,
                  "end": 161,
                  "object": {
                    "type": "Super",
                    "start": 154,
                    "end": 159
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 161,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "right": {
                  "type": "Literal",
                  "start": 164,
                  "end": 165,
                  "value": 1,
                  "raw": "1"
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 171,
              "end": 195,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 178,
                "end": 179,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "start": 182,
                "end": 194,
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "start": 182,
                  "end": 189,
                  "object": {
                    "type": "Super",
                    "start": 182,
                    "end": 187
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 189,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "right": {
                  "type": "Literal",
                  "start": 193,
                  "end": 194,
                  "value": 1,
                  "raw": "1"
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 200,
              "end": 221,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 207,
                "end": 208,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 211,
                "end": 220,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "start": 211,
                  "end": 218,
                  "object": {
                    "type": "Super",
                    "start": 211,
                    "end": 216
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 217,
                    "end": 218,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 226,
              "end": 247,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 233,
                "end": 234,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 237,
                "end": 246,
                "operator": "--",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "start": 237,
                  "end": 244,
                  "object": {
                    "type": "Super",
                    "start": 237,
                    "end": 242
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 252,
              "end": 273,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 259,
                "end": 260,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 263,
                "end": 272,
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 265,
                  "end": 272,
                  "object": {
                    "type": "Super",
                    "start": 265,
                    "end": 270
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 271,
                    "end": 272,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 278,
              "end": 299,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 285,
                "end": 286,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 289,
                "end": 298,
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 291,
                  "end": 298,
                  "object": {
                    "type": "Super",
                    "start": 291,
                    "end": 296
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 297,
                    "end": 298,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 304,
              "end": 343,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                  "properties": [
                    {
                      "type": "Property",
                      "start": 318,
                      "end": 328,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 321,
                        "end": 328,
                        "object": {
                          "type": "Super",
                          "start": 321,
                          "end": 326
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 327,
                          "end": 328,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 335,
                        "end": 336,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 338,
                        "end": 339,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 348,
              "end": 375,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 355,
                "end": 356,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                      "object": {
                        "type": "Super",
                        "start": 360,
                        "end": 365
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 366,
                        "end": 367,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
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
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 381,
      "end": 702,
      "expression": {
        "type": "ClassExpression",
        "start": 382,
        "end": 700,
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 393,
          "end": 395,
          "decorators": [],
          "name": "C2",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 404,
          "end": 408,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 409,
          "end": 700,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 415,
              "end": 437,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 422,
                "end": 423,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "start": 426,
                "end": 436,
                "object": {
                  "type": "Super",
                  "start": 426,
                  "end": 431
                },
                "property": {
                  "type": "Literal",
                  "start": 432,
                  "end": 435,
                  "value": "x",
                  "raw": "\"x\""
                },
                "optional": false,
                "computed": true
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 442,
              "end": 468,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 449,
                "end": 450,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "start": 453,
                "end": 467,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 453,
                  "end": 463,
                  "object": {
                    "type": "Super",
                    "start": 453,
                    "end": 458
                  },
                  "property": {
                    "type": "Literal",
                    "start": 459,
                    "end": 462,
                    "value": "x",
                    "raw": "\"x\""
                  },
                  "optional": false,
                  "computed": true
                },
                "right": {
                  "type": "Literal",
                  "start": 466,
                  "end": 467,
                  "value": 1,
                  "raw": "1"
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 473,
              "end": 500,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 480,
                "end": 481,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "start": 484,
                "end": 499,
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "start": 484,
                  "end": 494,
                  "object": {
                    "type": "Super",
                    "start": 484,
                    "end": 489
                  },
                  "property": {
                    "type": "Literal",
                    "start": 490,
                    "end": 493,
                    "value": "x",
                    "raw": "\"x\""
                  },
                  "optional": false,
                  "computed": true
                },
                "right": {
                  "type": "Literal",
                  "start": 498,
                  "end": 499,
                  "value": 1,
                  "raw": "1"
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 505,
              "end": 529,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 512,
                "end": 513,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 516,
                "end": 528,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "start": 516,
                  "end": 526,
                  "object": {
                    "type": "Super",
                    "start": 516,
                    "end": 521
                  },
                  "property": {
                    "type": "Literal",
                    "start": 522,
                    "end": 525,
                    "value": "x",
                    "raw": "\"x\""
                  },
                  "optional": false,
                  "computed": true
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 534,
              "end": 558,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 541,
                "end": 542,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 545,
                "end": 557,
                "operator": "--",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "start": 545,
                  "end": 555,
                  "object": {
                    "type": "Super",
                    "start": 545,
                    "end": 550
                  },
                  "property": {
                    "type": "Literal",
                    "start": 551,
                    "end": 554,
                    "value": "x",
                    "raw": "\"x\""
                  },
                  "optional": false,
                  "computed": true
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 563,
              "end": 587,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 570,
                "end": 571,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 574,
                "end": 586,
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 576,
                  "end": 586,
                  "object": {
                    "type": "Super",
                    "start": 576,
                    "end": 581
                  },
                  "property": {
                    "type": "Literal",
                    "start": 582,
                    "end": 585,
                    "value": "x",
                    "raw": "\"x\""
                  },
                  "optional": false,
                  "computed": true
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 592,
              "end": 616,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 599,
                "end": 600,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 603,
                "end": 615,
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 605,
                  "end": 615,
                  "object": {
                    "type": "Super",
                    "start": 605,
                    "end": 610
                  },
                  "property": {
                    "type": "Literal",
                    "start": 611,
                    "end": 614,
                    "value": "x",
                    "raw": "\"x\""
                  },
                  "optional": false,
                  "computed": true
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 621,
              "end": 663,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 628,
                "end": 629,
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                  "properties": [
                    {
                      "type": "Property",
                      "start": 635,
                      "end": 648,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 635,
                        "end": 636,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 638,
                        "end": 648,
                        "object": {
                          "type": "Super",
                          "start": 638,
                          "end": 643
                        },
                        "property": {
                          "type": "Literal",
                          "start": 644,
                          "end": 647,
                          "value": "x",
                          "raw": "\"x\""
                        },
                        "optional": false,
                        "computed": true
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 655,
                        "end": 656,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 658,
                        "end": 659,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 668,
              "end": 698,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 675,
                "end": 676,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                      "object": {
                        "type": "Super",
                        "start": 680,
                        "end": 685
                      },
                      "property": {
                        "type": "Literal",
                        "start": 686,
                        "end": 689,
                        "value": "x",
                        "raw": "\"x\""
                      },
                      "optional": false,
                      "computed": true
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
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
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 704,
      "end": 1007,
      "expression": {
        "type": "ClassExpression",
        "start": 705,
        "end": 1005,
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ],
        "id": {
          "type": "Identifier",
          "start": 716,
          "end": 718,
          "decorators": [],
          "name": "C3",
          "optional": false,
          "typeAnnotation": null
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "start": 727,
          "end": 731,
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "start": 732,
          "end": 1005,
          "body": [
            {
              "type": "PropertyDefinition",
              "start": 738,
              "end": 758,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 745,
                "end": 746,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "start": 749,
                "end": 757,
                "object": {
                  "type": "Super",
                  "start": 749,
                  "end": 754
                },
                "property": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 756,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": true
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 763,
              "end": 787,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 770,
                "end": 771,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "start": 774,
                "end": 786,
                "operator": "=",
                "left": {
                  "type": "MemberExpression",
                  "start": 774,
                  "end": 782,
                  "object": {
                    "type": "Super",
                    "start": 774,
                    "end": 779
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 780,
                    "end": 781,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "right": {
                  "type": "Literal",
                  "start": 785,
                  "end": 786,
                  "value": 1,
                  "raw": "1"
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 792,
              "end": 817,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 799,
                "end": 800,
                "decorators": [],
                "name": "c",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "AssignmentExpression",
                "start": 803,
                "end": 816,
                "operator": "+=",
                "left": {
                  "type": "MemberExpression",
                  "start": 803,
                  "end": 811,
                  "object": {
                    "type": "Super",
                    "start": 803,
                    "end": 808
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 809,
                    "end": 810,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                },
                "right": {
                  "type": "Literal",
                  "start": 815,
                  "end": 816,
                  "value": 1,
                  "raw": "1"
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 822,
              "end": 844,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 829,
                "end": 830,
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 833,
                "end": 843,
                "operator": "++",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "start": 833,
                  "end": 841,
                  "object": {
                    "type": "Super",
                    "start": 833,
                    "end": 838
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 839,
                    "end": 840,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 849,
              "end": 871,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 856,
                "end": 857,
                "decorators": [],
                "name": "e",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 860,
                "end": 870,
                "operator": "--",
                "prefix": false,
                "argument": {
                  "type": "MemberExpression",
                  "start": 860,
                  "end": 868,
                  "object": {
                    "type": "Super",
                    "start": 860,
                    "end": 865
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 866,
                    "end": 867,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 876,
              "end": 898,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 883,
                "end": 884,
                "decorators": [],
                "name": "f",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 887,
                "end": 897,
                "operator": "++",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 889,
                  "end": 897,
                  "object": {
                    "type": "Super",
                    "start": 889,
                    "end": 894
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 895,
                    "end": 896,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 903,
              "end": 925,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 910,
                "end": 911,
                "decorators": [],
                "name": "g",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
              "value": {
                "type": "UpdateExpression",
                "start": 914,
                "end": 924,
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "MemberExpression",
                  "start": 916,
                  "end": 924,
                  "object": {
                    "type": "Super",
                    "start": 916,
                    "end": 921
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 922,
                    "end": 923,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": true
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 930,
              "end": 970,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 937,
                "end": 938,
                "decorators": [],
                "name": "h",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                  "properties": [
                    {
                      "type": "Property",
                      "start": 944,
                      "end": 955,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 944,
                        "end": 945,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "MemberExpression",
                        "start": 947,
                        "end": 955,
                        "object": {
                          "type": "Super",
                          "start": 947,
                          "end": 952
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 953,
                          "end": 954,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
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
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 962,
                        "end": 963,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 965,
                        "end": 966,
                        "value": 1,
                        "raw": "1"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            },
            {
              "type": "PropertyDefinition",
              "start": 975,
              "end": 1003,
              "decorators": [],
              "key": {
                "type": "Identifier",
                "start": 982,
                "end": 983,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": null,
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
                      "object": {
                        "type": "Super",
                        "start": 987,
                        "end": 992
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 993,
                        "end": 994,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
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
                      "value": 1,
                      "raw": "1"
                    }
                  ]
                }
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null
            }
          ]
        },
        "abstract": false,
        "declare": false
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
