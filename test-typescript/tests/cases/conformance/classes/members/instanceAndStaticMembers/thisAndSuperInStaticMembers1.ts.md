thisAndSuperInStaticMembers1.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 973,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 36,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 35,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 60,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": true,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 49,
              "end": 60,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 51,
                "end": 59,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 53,
                  "end": 59
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 75,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              }
            },
            "value": null
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 92,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 81,
              "end": 92,
              "async": false,
              "body": null,
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "start": 83,
                "end": 91,
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 85,
                  "end": 91
                }
              }
            }
          }
        ]
      },
      "declare": true,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 972,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 972,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 147,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
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
              "start": 128,
              "end": 133,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 130,
                "end": 133
              }
            },
            "value": {
              "type": "TSNonNullExpression",
              "start": 136,
              "end": 146,
              "expression": {
                "type": "Identifier",
                "start": 136,
                "end": 145,
                "decorators": [],
                "name": "undefined",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 171,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 161,
              "decorators": [],
              "name": "y1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 164,
              "end": 170,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 164,
                "end": 168
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 197,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "decorators": [],
              "name": "y2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "CallExpression",
              "start": 188,
              "end": 196,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 188,
                "end": 194,
                "computed": false,
                "object": {
                  "type": "ThisExpression",
                  "start": 188,
                  "end": 192
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 202,
            "end": 224,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 211,
              "decorators": [],
              "name": "y3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ChainExpression",
              "start": 214,
              "end": 223,
              "expression": {
                "type": "CallExpression",
                "start": 214,
                "end": 223,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 214,
                  "end": 221,
                  "computed": false,
                  "object": {
                    "type": "ThisExpression",
                    "start": 214,
                    "end": 218
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 221,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                },
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 255,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 238,
              "decorators": [],
              "name": "y4",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "CallExpression",
              "start": 241,
              "end": 254,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 241,
                "end": 252,
                "computed": true,
                "object": {
                  "type": "ThisExpression",
                  "start": 241,
                  "end": 245
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 247,
                  "end": 250,
                  "raw": "\"x\"",
                  "value": "x"
                }
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 260,
            "end": 288,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 269,
              "decorators": [],
              "name": "y5",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "ChainExpression",
              "start": 272,
              "end": 287,
              "expression": {
                "type": "CallExpression",
                "start": 272,
                "end": 287,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 272,
                  "end": 285,
                  "computed": true,
                  "object": {
                    "type": "ThisExpression",
                    "start": 272,
                    "end": 276
                  },
                  "optional": true,
                  "property": {
                    "type": "Literal",
                    "start": 280,
                    "end": 283,
                    "raw": "\"x\"",
                    "value": "x"
                  }
                },
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 293,
            "end": 313,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 300,
              "end": 302,
              "decorators": [],
              "name": "z1",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 305,
              "end": 312,
              "computed": false,
              "object": {
                "type": "Super",
                "start": 305,
                "end": 310
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "decorators": [],
                "name": "a",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 318,
            "end": 341,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 327,
              "decorators": [],
              "name": "z2",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "MemberExpression",
              "start": 330,
              "end": 340,
              "computed": true,
              "object": {
                "type": "Super",
                "start": 330,
                "end": 335
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 336,
                "end": 339,
                "raw": "\"a\"",
                "value": "a"
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 346,
            "end": 368,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 353,
              "end": 355,
              "decorators": [],
              "name": "z3",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "CallExpression",
              "start": 358,
              "end": 367,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 358,
                "end": 365,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 358,
                  "end": 363
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                }
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 373,
            "end": 398,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 380,
              "end": 382,
              "decorators": [],
              "name": "z4",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "CallExpression",
              "start": 385,
              "end": 397,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 385,
                "end": 395,
                "computed": true,
                "object": {
                  "type": "Super",
                  "start": 385,
                  "end": 390
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 391,
                  "end": 394,
                  "raw": "\"f\"",
                  "value": "f"
                }
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 403,
            "end": 427,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 410,
              "end": 412,
              "decorators": [],
              "name": "z5",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "AssignmentExpression",
              "start": 415,
              "end": 426,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 415,
                "end": 422,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 415,
                  "end": 420
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 422,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 425,
                "end": 426,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 432,
            "end": 457,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 439,
              "end": 441,
              "decorators": [],
              "name": "z6",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "AssignmentExpression",
              "start": 444,
              "end": 456,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 444,
                "end": 451,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 444,
                  "end": 449
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 451,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 455,
                "end": 456,
                "raw": "1",
                "value": 1
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 462,
            "end": 501,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 469,
              "end": 471,
              "decorators": [],
              "name": "z7",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "CallExpression",
              "start": 474,
              "end": 500,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 475,
                "end": 497,
                "async": false,
                "body": {
                  "type": "BlockStatement",
                  "start": 481,
                  "end": 497,
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "start": 483,
                      "end": 495,
                      "expression": {
                        "type": "AssignmentExpression",
                        "start": 483,
                        "end": 494,
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "start": 483,
                          "end": 490,
                          "computed": false,
                          "object": {
                            "type": "Super",
                            "start": 483,
                            "end": 488
                          },
                          "optional": false,
                          "property": {
                            "type": "Identifier",
                            "start": 489,
                            "end": 490,
                            "decorators": [],
                            "name": "a",
                            "optional": false
                          }
                        },
                        "right": {
                          "type": "Literal",
                          "start": 493,
                          "end": 494,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    }
                  ]
                },
                "expression": false,
                "generator": false,
                "id": null,
                "params": []
              },
              "optional": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 506,
            "end": 534,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 513,
              "end": 515,
              "decorators": [],
              "name": "z8",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "AssignmentExpression",
              "start": 518,
              "end": 533,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 518,
                "end": 527,
                "decorators": [],
                "elements": [
                  {
                    "type": "MemberExpression",
                    "start": 519,
                    "end": 526,
                    "computed": false,
                    "object": {
                      "type": "Super",
                      "start": 519,
                      "end": 524
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 526,
                      "decorators": [],
                      "name": "a",
                      "optional": false
                    }
                  }
                ],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 530,
                "end": 533,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 531,
                    "end": 532,
                    "raw": "0",
                    "value": 0
                  }
                ]
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 539,
            "end": 571,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 548,
              "decorators": [],
              "name": "z9",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "AssignmentExpression",
              "start": 551,
              "end": 570,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 551,
                "end": 564,
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 552,
                    "end": 563,
                    "decorators": [],
                    "left": {
                      "type": "MemberExpression",
                      "start": 552,
                      "end": 559,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 552,
                        "end": 557
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 559,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "optional": false,
                    "right": {
                      "type": "Literal",
                      "start": 562,
                      "end": 563,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 567,
                "end": 570,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 568,
                    "end": 569,
                    "raw": "0",
                    "value": 0
                  }
                ]
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 576,
            "end": 608,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 583,
              "end": 586,
              "decorators": [],
              "name": "z10",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "AssignmentExpression",
              "start": 589,
              "end": 607,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 589,
                "end": 601,
                "decorators": [],
                "elements": [
                  {
                    "type": "RestElement",
                    "start": 590,
                    "end": 600,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 593,
                      "end": 600,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 593,
                        "end": 598
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 600,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ],
                "optional": false
              },
              "right": {
                "type": "ArrayExpression",
                "start": 604,
                "end": 607,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 605,
                    "end": 606,
                    "raw": "0",
                    "value": 0
                  }
                ]
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 613,
            "end": 652,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 620,
              "end": 623,
              "decorators": [],
              "name": "z11",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "AssignmentExpression",
              "start": 626,
              "end": 651,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 626,
                "end": 640,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 628,
                    "end": 638,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 629,
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
                      "start": 631,
                      "end": 638,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 631,
                        "end": 636
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 637,
                        "end": 638,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    }
                  }
                ]
              },
              "right": {
                "type": "ObjectExpression",
                "start": 643,
                "end": 651,
                "properties": [
                  {
                    "type": "Property",
                    "start": 645,
                    "end": 649,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 645,
                      "end": 646,
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
                      "start": 648,
                      "end": 649,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 657,
            "end": 700,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 664,
              "end": 667,
              "decorators": [],
              "name": "z12",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "AssignmentExpression",
              "start": 670,
              "end": 699,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 670,
                "end": 688,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 672,
                    "end": 686,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "decorators": [],
                      "name": "x",
                      "optional": false
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 675,
                      "end": 686,
                      "decorators": [],
                      "left": {
                        "type": "MemberExpression",
                        "start": 675,
                        "end": 682,
                        "computed": false,
                        "object": {
                          "type": "Super",
                          "start": 675,
                          "end": 680
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 681,
                          "end": 682,
                          "decorators": [],
                          "name": "a",
                          "optional": false
                        }
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 685,
                        "end": 686,
                        "raw": "0",
                        "value": 0
                      }
                    }
                  }
                ]
              },
              "right": {
                "type": "ObjectExpression",
                "start": 691,
                "end": 699,
                "properties": [
                  {
                    "type": "Property",
                    "start": 693,
                    "end": 697,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 694,
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
                      "start": 696,
                      "end": 697,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 705,
            "end": 744,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 712,
              "end": 715,
              "decorators": [],
              "name": "z13",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "AssignmentExpression",
              "start": 718,
              "end": 743,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 718,
                "end": 732,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "RestElement",
                    "start": 720,
                    "end": 730,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 723,
                      "end": 730,
                      "computed": false,
                      "object": {
                        "type": "Super",
                        "start": 723,
                        "end": 728
                      },
                      "optional": false,
                      "property": {
                        "type": "Identifier",
                        "start": 729,
                        "end": 730,
                        "decorators": [],
                        "name": "a",
                        "optional": false
                      }
                    },
                    "decorators": [],
                    "optional": false
                  }
                ]
              },
              "right": {
                "type": "ObjectExpression",
                "start": 735,
                "end": 743,
                "properties": [
                  {
                    "type": "Property",
                    "start": 737,
                    "end": 741,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 737,
                      "end": 738,
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
                      "start": 740,
                      "end": 741,
                      "raw": "0",
                      "value": 0
                    }
                  }
                ]
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 749,
            "end": 772,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 756,
              "end": 759,
              "decorators": [],
              "name": "z14",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "UpdateExpression",
              "start": 762,
              "end": 771,
              "argument": {
                "type": "MemberExpression",
                "start": 764,
                "end": 771,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 764,
                  "end": 769
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 770,
                  "end": 771,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "operator": "++",
              "prefix": true
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 777,
            "end": 800,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 784,
              "end": 787,
              "decorators": [],
              "name": "z15",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "UpdateExpression",
              "start": 790,
              "end": 799,
              "argument": {
                "type": "MemberExpression",
                "start": 792,
                "end": 799,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 792,
                  "end": 797
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 799,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "operator": "--",
              "prefix": true
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 805,
            "end": 833,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 812,
              "end": 815,
              "decorators": [],
              "name": "z16",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "UpdateExpression",
              "start": 818,
              "end": 832,
              "argument": {
                "type": "MemberExpression",
                "start": 820,
                "end": 832,
                "computed": true,
                "object": {
                  "type": "Super",
                  "start": 820,
                  "end": 825
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 827,
                  "end": 830,
                  "raw": "\"a\"",
                  "value": "a"
                }
              },
              "operator": "++",
              "prefix": true
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 838,
            "end": 861,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 845,
              "end": 848,
              "decorators": [],
              "name": "z17",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "UpdateExpression",
              "start": 851,
              "end": 860,
              "argument": {
                "type": "MemberExpression",
                "start": 851,
                "end": 858,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 851,
                  "end": 856
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 858,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              },
              "operator": "++",
              "prefix": false
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 866,
            "end": 889,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 873,
              "end": 876,
              "decorators": [],
              "name": "z18",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 879,
              "end": 888,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 886,
                "end": 888,
                "expressions": [],
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 886,
                    "end": 888,
                    "tail": true,
                    "value": {
                      "cooked": "",
                      "raw": ""
                    }
                  }
                ]
              },
              "tag": {
                "type": "MemberExpression",
                "start": 879,
                "end": 886,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 879,
                  "end": 884
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 885,
                  "end": 886,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                }
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 929,
            "end": 935,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 929,
              "end": 930,
              "decorators": [],
              "name": "x",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "Literal",
              "start": 933,
              "end": 934,
              "raw": "1",
              "value": 1
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 940,
            "end": 951,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 940,
              "end": 941,
              "decorators": [],
              "name": "y",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "MemberExpression",
              "start": 944,
              "end": 950,
              "computed": false,
              "object": {
                "type": "ThisExpression",
                "start": 944,
                "end": 948
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 949,
                "end": 950,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            }
          },
          {
            "type": "PropertyDefinition",
            "start": 956,
            "end": 970,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 956,
              "end": 957,
              "decorators": [],
              "name": "z",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "value": {
              "type": "CallExpression",
              "start": 960,
              "end": 969,
              "arguments": [],
              "callee": {
                "type": "MemberExpression",
                "start": 960,
                "end": 967,
                "computed": false,
                "object": {
                  "type": "Super",
                  "start": 960,
                  "end": 965
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 966,
                  "end": 967,
                  "decorators": [],
                  "name": "f",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
