__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 36,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
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
              "start": 30,
              "end": 35,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 41,
            "end": 60,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 49,
              "end": 60,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
            },
            "decorators": [],
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 75,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
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
              "start": 66,
              "end": 74,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              }
            },
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 92,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "name": "f",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "kind": "method",
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 81,
              "end": 92,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": null,
              "declare": false,
              "typeParameters": null,
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
      "declare": true,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 972,
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "name": "B",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 972,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 147,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "TSNonNullExpression",
              "start": 136,
              "end": 146,
              "expression": {
                "type": "Identifier",
                "start": 136,
                "end": 145,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 152,
            "end": 171,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 161,
              "name": "y1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 164,
              "end": 170,
              "object": {
                "type": "ThisExpression",
                "start": 164,
                "end": 168
              },
              "property": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 176,
            "end": 197,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "name": "y2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 188,
              "end": 196,
              "callee": {
                "type": "MemberExpression",
                "start": 188,
                "end": 194,
                "object": {
                  "type": "ThisExpression",
                  "start": 188,
                  "end": 192
                },
                "property": {
                  "type": "Identifier",
                  "start": 193,
                  "end": 194,
                  "name": "x",
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
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 202,
            "end": 224,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 211,
              "name": "y3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ChainExpression",
              "start": 214,
              "end": 223,
              "expression": {
                "type": "CallExpression",
                "start": 214,
                "end": 223,
                "callee": {
                  "type": "MemberExpression",
                  "start": 214,
                  "end": 221,
                  "object": {
                    "type": "ThisExpression",
                    "start": 214,
                    "end": 218
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 220,
                    "end": 221,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 229,
            "end": 255,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 238,
              "name": "y4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 241,
              "end": 254,
              "callee": {
                "type": "MemberExpression",
                "start": 241,
                "end": 252,
                "object": {
                  "type": "ThisExpression",
                  "start": 241,
                  "end": 245
                },
                "property": {
                  "type": "Literal",
                  "start": 247,
                  "end": 250,
                  "value": "x",
                  "raw": "\"x\""
                },
                "computed": true,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 260,
            "end": 288,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 269,
              "name": "y5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "ChainExpression",
              "start": 272,
              "end": 287,
              "expression": {
                "type": "CallExpression",
                "start": 272,
                "end": 287,
                "callee": {
                  "type": "MemberExpression",
                  "start": 272,
                  "end": 285,
                  "object": {
                    "type": "ThisExpression",
                    "start": 272,
                    "end": 276
                  },
                  "property": {
                    "type": "Literal",
                    "start": 280,
                    "end": 283,
                    "value": "x",
                    "raw": "\"x\""
                  },
                  "computed": true,
                  "optional": true
                },
                "arguments": [],
                "optional": false,
                "typeArguments": null
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 293,
            "end": 313,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 300,
              "end": 302,
              "name": "z1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 305,
              "end": 312,
              "object": {
                "type": "Super",
                "start": 305,
                "end": 310
              },
              "property": {
                "type": "Identifier",
                "start": 311,
                "end": 312,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 318,
            "end": 341,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 327,
              "name": "z2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 330,
              "end": 340,
              "object": {
                "type": "Super",
                "start": 330,
                "end": 335
              },
              "property": {
                "type": "Literal",
                "start": 336,
                "end": 339,
                "value": "a",
                "raw": "\"a\""
              },
              "computed": true,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 346,
            "end": 368,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 353,
              "end": 355,
              "name": "z3",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 358,
              "end": 367,
              "callee": {
                "type": "MemberExpression",
                "start": 358,
                "end": 365,
                "object": {
                  "type": "Super",
                  "start": 358,
                  "end": 363
                },
                "property": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 365,
                  "name": "f",
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
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 373,
            "end": 398,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 380,
              "end": 382,
              "name": "z4",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 385,
              "end": 397,
              "callee": {
                "type": "MemberExpression",
                "start": 385,
                "end": 395,
                "object": {
                  "type": "Super",
                  "start": 385,
                  "end": 390
                },
                "property": {
                  "type": "Literal",
                  "start": 391,
                  "end": 394,
                  "value": "f",
                  "raw": "\"f\""
                },
                "computed": true,
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 403,
            "end": 427,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 410,
              "end": 412,
              "name": "z5",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 415,
              "end": 426,
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "start": 415,
                "end": 422,
                "object": {
                  "type": "Super",
                  "start": 415,
                  "end": 420
                },
                "property": {
                  "type": "Identifier",
                  "start": 421,
                  "end": 422,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 425,
                "end": 426,
                "value": 0,
                "raw": "0"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 432,
            "end": 457,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 439,
              "end": 441,
              "name": "z6",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 444,
              "end": 456,
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "start": 444,
                "end": 451,
                "object": {
                  "type": "Super",
                  "start": 444,
                  "end": 449
                },
                "property": {
                  "type": "Identifier",
                  "start": 450,
                  "end": 451,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 455,
                "end": 456,
                "value": 1,
                "raw": "1"
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 462,
            "end": 501,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 469,
              "end": 471,
              "name": "z7",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 474,
              "end": 500,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 475,
                "end": 497,
                "id": null,
                "expression": false,
                "generator": false,
                "async": false,
                "params": [],
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
                          "object": {
                            "type": "Super",
                            "start": 483,
                            "end": 488
                          },
                          "property": {
                            "type": "Identifier",
                            "start": 489,
                            "end": 490,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "computed": false,
                          "optional": false
                        },
                        "right": {
                          "type": "Literal",
                          "start": 493,
                          "end": 494,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      "directive": null
                    }
                  ]
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 506,
            "end": 534,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 513,
              "end": 515,
              "name": "z8",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 518,
              "end": 533,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 518,
                "end": 527,
                "elements": [
                  {
                    "type": "MemberExpression",
                    "start": 519,
                    "end": 526,
                    "object": {
                      "type": "Super",
                      "start": 519,
                      "end": 524
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 526,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
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
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 539,
            "end": 571,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 548,
              "name": "z9",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 551,
              "end": 570,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 551,
                "end": 564,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 552,
                    "end": 563,
                    "left": {
                      "type": "MemberExpression",
                      "start": 552,
                      "end": 559,
                      "object": {
                        "type": "Super",
                        "start": 552,
                        "end": 557
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 559,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 562,
                      "end": 563,
                      "value": 0,
                      "raw": "0"
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
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
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 576,
            "end": 608,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 583,
              "end": 586,
              "name": "z10",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 589,
              "end": 607,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 589,
                "end": 601,
                "elements": [
                  {
                    "type": "RestElement",
                    "start": 590,
                    "end": 600,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 593,
                      "end": 600,
                      "object": {
                        "type": "Super",
                        "start": 593,
                        "end": 598
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 599,
                        "end": 600,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
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
                    "value": 0,
                    "raw": "0"
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 613,
            "end": 652,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 620,
              "end": 623,
              "name": "z11",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 626,
              "end": 651,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 626,
                "end": 640,
                "properties": [
                  {
                    "type": "Property",
                    "start": 628,
                    "end": 638,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 629,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "MemberExpression",
                      "start": 631,
                      "end": 638,
                      "object": {
                        "type": "Super",
                        "start": 631,
                        "end": 636
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 637,
                        "end": 638,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 645,
                      "end": 646,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 648,
                      "end": 649,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 657,
            "end": 700,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 664,
              "end": 667,
              "name": "z12",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 670,
              "end": 699,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 670,
                "end": 688,
                "properties": [
                  {
                    "type": "Property",
                    "start": 672,
                    "end": 686,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 675,
                      "end": 686,
                      "left": {
                        "type": "MemberExpression",
                        "start": 675,
                        "end": 682,
                        "object": {
                          "type": "Super",
                          "start": 675,
                          "end": 680
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 681,
                          "end": 682,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 685,
                        "end": 686,
                        "value": 0,
                        "raw": "0"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 694,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 696,
                      "end": 697,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 705,
            "end": 744,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 712,
              "end": 715,
              "name": "z13",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "AssignmentExpression",
              "start": 718,
              "end": 743,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 718,
                "end": 732,
                "properties": [
                  {
                    "type": "RestElement",
                    "start": 720,
                    "end": 730,
                    "argument": {
                      "type": "MemberExpression",
                      "start": 723,
                      "end": 730,
                      "object": {
                        "type": "Super",
                        "start": 723,
                        "end": 728
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 729,
                        "end": 730,
                        "name": "a",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
                    "decorators": [],
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 737,
                      "end": 738,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 740,
                      "end": 741,
                      "value": 0,
                      "raw": "0"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 749,
            "end": 772,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 756,
              "end": 759,
              "name": "z14",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 762,
              "end": 771,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 764,
                "end": 771,
                "object": {
                  "type": "Super",
                  "start": 764,
                  "end": 769
                },
                "property": {
                  "type": "Identifier",
                  "start": 770,
                  "end": 771,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 777,
            "end": 800,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 784,
              "end": 787,
              "name": "z15",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 790,
              "end": 799,
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 792,
                "end": 799,
                "object": {
                  "type": "Super",
                  "start": 792,
                  "end": 797
                },
                "property": {
                  "type": "Identifier",
                  "start": 798,
                  "end": 799,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 805,
            "end": 833,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 812,
              "end": 815,
              "name": "z16",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 818,
              "end": 832,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "start": 820,
                "end": 832,
                "object": {
                  "type": "Super",
                  "start": 820,
                  "end": 825
                },
                "property": {
                  "type": "Literal",
                  "start": 827,
                  "end": 830,
                  "value": "a",
                  "raw": "\"a\""
                },
                "computed": true,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 838,
            "end": 861,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 845,
              "end": 848,
              "name": "z17",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "UpdateExpression",
              "start": 851,
              "end": 860,
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "start": 851,
                "end": 858,
                "object": {
                  "type": "Super",
                  "start": 851,
                  "end": 856
                },
                "property": {
                  "type": "Identifier",
                  "start": 857,
                  "end": 858,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 866,
            "end": 889,
            "static": true,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 873,
              "end": 876,
              "name": "z18",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "TaggedTemplateExpression",
              "start": 879,
              "end": 888,
              "tag": {
                "type": "MemberExpression",
                "start": 879,
                "end": 886,
                "object": {
                  "type": "Super",
                  "start": 879,
                  "end": 884
                },
                "property": {
                  "type": "Identifier",
                  "start": 885,
                  "end": 886,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
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
                    "value": {
                      "cooked": "",
                      "raw": ""
                    },
                    "tail": true
                  }
                ]
              },
              "typeArguments": null
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 929,
            "end": 935,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 929,
              "end": 930,
              "name": "x",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "Literal",
              "start": 933,
              "end": 934,
              "value": 1,
              "raw": "1"
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 940,
            "end": 951,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 940,
              "end": 941,
              "name": "y",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "MemberExpression",
              "start": 944,
              "end": 950,
              "object": {
                "type": "ThisExpression",
                "start": 944,
                "end": 948
              },
              "property": {
                "type": "Identifier",
                "start": 949,
                "end": 950,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 956,
            "end": 970,
            "static": false,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 956,
              "end": 957,
              "name": "z",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "value": {
              "type": "CallExpression",
              "start": 960,
              "end": 969,
              "callee": {
                "type": "MemberExpression",
                "start": 960,
                "end": 967,
                "object": {
                  "type": "Super",
                  "start": 960,
                  "end": 965
                },
                "property": {
                  "type": "Identifier",
                  "start": 966,
                  "end": 967,
                  "name": "f",
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
            },
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "typeAnnotation": null,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
