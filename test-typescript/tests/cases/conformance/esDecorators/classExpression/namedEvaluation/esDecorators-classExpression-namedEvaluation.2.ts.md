__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 762,
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
      "kind": "let"
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 42,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 33,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 33,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 33,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              }
            }
          },
          "init": null
        },
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 41,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 41,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 36,
              "end": 41,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 38,
                "end": 41
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 177,
      "expression": {
        "type": "ObjectExpression",
        "start": 154,
        "end": 175,
        "properties": [
          {
            "type": "Property",
            "start": 156,
            "end": 173,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 159,
              "end": 173,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 170,
                "end": 173,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 159,
                  "end": 163,
                  "expression": {
                    "type": "Identifier",
                    "start": 160,
                    "end": 163,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 178,
      "end": 210,
      "expression": {
        "type": "ObjectExpression",
        "start": 179,
        "end": 208,
        "properties": [
          {
            "type": "Property",
            "start": 181,
            "end": 206,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 181,
              "end": 182,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 184,
              "end": 206,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 190,
                "end": 206,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 192,
                    "end": 204,
                    "computed": false,
                    "declare": false,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 192,
                        "end": 196,
                        "expression": {
                          "type": "Identifier",
                          "start": 193,
                          "end": 196,
                          "decorators": [],
                          "name": "dec",
                          "optional": false
                        }
                      }
                    ],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 197,
                      "end": 198,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 198,
                      "end": 203,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 200,
                        "end": 203
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 212,
      "end": 238,
      "expression": {
        "type": "ObjectExpression",
        "start": 213,
        "end": 236,
        "properties": [
          {
            "type": "Property",
            "start": 215,
            "end": 234,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 215,
              "end": 218,
              "raw": "\"x\"",
              "value": "x"
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 220,
              "end": 234,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 231,
                "end": 234,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 220,
                  "end": 224,
                  "expression": {
                    "type": "Identifier",
                    "start": 221,
                    "end": 224,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 273,
      "expression": {
        "type": "ObjectExpression",
        "start": 240,
        "end": 271,
        "properties": [
          {
            "type": "Property",
            "start": 242,
            "end": 269,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 242,
              "end": 245,
              "raw": "\"x\"",
              "value": "x"
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 247,
              "end": 269,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 253,
                "end": 269,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 255,
                    "end": 267,
                    "computed": false,
                    "declare": false,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 255,
                        "end": 259,
                        "expression": {
                          "type": "Identifier",
                          "start": 256,
                          "end": 259,
                          "decorators": [],
                          "name": "dec",
                          "optional": false
                        }
                      }
                    ],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 261,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 261,
                      "end": 266,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 263,
                        "end": 266
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 275,
      "end": 299,
      "expression": {
        "type": "ObjectExpression",
        "start": 276,
        "end": 297,
        "properties": [
          {
            "type": "Property",
            "start": 278,
            "end": 295,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 278,
              "end": 279,
              "raw": "0",
              "value": 0
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 281,
              "end": 295,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 292,
                "end": 295,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 281,
                  "end": 285,
                  "expression": {
                    "type": "Identifier",
                    "start": 282,
                    "end": 285,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 300,
      "end": 332,
      "expression": {
        "type": "ObjectExpression",
        "start": 301,
        "end": 330,
        "properties": [
          {
            "type": "Property",
            "start": 303,
            "end": 328,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 303,
              "end": 304,
              "raw": "0",
              "value": 0
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 306,
              "end": 328,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 312,
                "end": 328,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 314,
                    "end": 326,
                    "computed": false,
                    "declare": false,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 314,
                        "end": 318,
                        "expression": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 318,
                          "decorators": [],
                          "name": "dec",
                          "optional": false
                        }
                      }
                    ],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 319,
                      "end": 320,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 320,
                      "end": 325,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 322,
                        "end": 325
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 362,
      "expression": {
        "type": "ObjectExpression",
        "start": 335,
        "end": 360,
        "properties": [
          {
            "type": "Property",
            "start": 337,
            "end": 358,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 338,
              "end": 341,
              "raw": "\"x\"",
              "value": "x"
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 344,
              "end": 358,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 355,
                "end": 358,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 344,
                  "end": 348,
                  "expression": {
                    "type": "Identifier",
                    "start": 345,
                    "end": 348,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 363,
      "end": 399,
      "expression": {
        "type": "ObjectExpression",
        "start": 364,
        "end": 397,
        "properties": [
          {
            "type": "Property",
            "start": 366,
            "end": 395,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 367,
              "end": 370,
              "raw": "\"x\"",
              "value": "x"
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 373,
              "end": 395,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 379,
                "end": 395,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 381,
                    "end": 393,
                    "computed": false,
                    "declare": false,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 381,
                        "end": 385,
                        "expression": {
                          "type": "Identifier",
                          "start": 382,
                          "end": 385,
                          "decorators": [],
                          "name": "dec",
                          "optional": false
                        }
                      }
                    ],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 386,
                      "end": 387,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 387,
                      "end": 392,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 389,
                        "end": 392
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 401,
      "end": 427,
      "expression": {
        "type": "ObjectExpression",
        "start": 402,
        "end": 425,
        "properties": [
          {
            "type": "Property",
            "start": 404,
            "end": 423,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 405,
              "end": 406,
              "raw": "0",
              "value": 0
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 409,
              "end": 423,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 420,
                "end": 423,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 409,
                  "end": 413,
                  "expression": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 413,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 428,
      "end": 462,
      "expression": {
        "type": "ObjectExpression",
        "start": 429,
        "end": 460,
        "properties": [
          {
            "type": "Property",
            "start": 431,
            "end": 458,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 432,
              "end": 433,
              "raw": "0",
              "value": 0
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 436,
              "end": 458,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 442,
                "end": 458,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 444,
                    "end": 456,
                    "computed": false,
                    "declare": false,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 444,
                        "end": 448,
                        "expression": {
                          "type": "Identifier",
                          "start": 445,
                          "end": 448,
                          "decorators": [],
                          "name": "dec",
                          "optional": false
                        }
                      }
                    ],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 450,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 450,
                      "end": 455,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 452,
                        "end": 455
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 464,
      "end": 492,
      "expression": {
        "type": "ObjectExpression",
        "start": 465,
        "end": 490,
        "properties": [
          {
            "type": "Property",
            "start": 467,
            "end": 488,
            "computed": true,
            "key": {
              "type": "CallExpression",
              "start": 468,
              "end": 471,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 468,
                "end": 469,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 474,
              "end": 488,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 485,
                "end": 488,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 474,
                  "end": 478,
                  "expression": {
                    "type": "Identifier",
                    "start": 475,
                    "end": 478,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 493,
      "end": 529,
      "expression": {
        "type": "ObjectExpression",
        "start": 494,
        "end": 527,
        "properties": [
          {
            "type": "Property",
            "start": 496,
            "end": 525,
            "computed": true,
            "key": {
              "type": "CallExpression",
              "start": 497,
              "end": 500,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 497,
                "end": 498,
                "decorators": [],
                "name": "f",
                "optional": false
              },
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 503,
              "end": 525,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 509,
                "end": 525,
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "start": 511,
                    "end": 523,
                    "computed": false,
                    "declare": false,
                    "decorators": [
                      {
                        "type": "Decorator",
                        "start": 511,
                        "end": 515,
                        "expression": {
                          "type": "Identifier",
                          "start": 512,
                          "end": 515,
                          "decorators": [],
                          "name": "dec",
                          "optional": false
                        }
                      }
                    ],
                    "definite": false,
                    "key": {
                      "type": "Identifier",
                      "start": 516,
                      "end": 517,
                      "decorators": [],
                      "name": "y",
                      "optional": false
                    },
                    "optional": false,
                    "override": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 517,
                      "end": 522,
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 519,
                        "end": 522
                      }
                    },
                    "value": null
                  }
                ]
              },
              "declare": false,
              "decorators": [],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 583,
      "end": 615,
      "expression": {
        "type": "ObjectExpression",
        "start": 584,
        "end": 613,
        "properties": [
          {
            "type": "Property",
            "start": 586,
            "end": 611,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 586,
              "end": 595,
              "decorators": [],
              "name": "__proto__",
              "optional": false
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 597,
              "end": 611,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 608,
                "end": 611,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 597,
                  "end": 601,
                  "expression": {
                    "type": "Identifier",
                    "start": 598,
                    "end": 601,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 616,
      "end": 650,
      "expression": {
        "type": "ObjectExpression",
        "start": 617,
        "end": 648,
        "properties": [
          {
            "type": "Property",
            "start": 619,
            "end": 646,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 619,
              "end": 630,
              "raw": "\"__proto__\"",
              "value": "__proto__"
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 632,
              "end": 646,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 643,
                "end": 646,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 632,
                  "end": 636,
                  "expression": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 636,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "id": null,
              "implements": [],
              "superClass": null
            }
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 726,
      "end": 762,
      "expression": {
        "type": "ObjectExpression",
        "start": 727,
        "end": 760,
        "properties": [
          {
            "type": "Property",
            "start": 729,
            "end": 758,
            "computed": true,
            "key": {
              "type": "Literal",
              "start": 730,
              "end": 741,
              "raw": "\"__proto__\"",
              "value": "__proto__"
            },
            "kind": "init",
            "method": false,
            "optional": false,
            "shorthand": false,
            "value": {
              "type": "ClassExpression",
              "start": 744,
              "end": 758,
              "abstract": false,
              "body": {
                "type": "ClassBody",
                "start": 755,
                "end": 758,
                "body": []
              },
              "declare": false,
              "decorators": [
                {
                  "type": "Decorator",
                  "start": 744,
                  "end": 748,
                  "expression": {
                    "type": "Identifier",
                    "start": 745,
                    "end": 748,
                    "decorators": [],
                    "name": "dec",
                    "optional": false
                  }
                }
              ],
              "id": null,
              "implements": [],
              "superClass": null
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
