__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 972,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 94,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 14,
        "end": 15,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 16,
        "end": 94,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 22,
            "end": 36,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 29,
              "end": 30,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
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
            "type": "MethodDefinition",
            "start": 41,
            "end": 60,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 48,
              "end": 49,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 49,
              "end": 60,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 65,
            "end": 75,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
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
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "MethodDefinition",
            "start": 80,
            "end": 92,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 80,
              "end": 81,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "start": 81,
              "end": 92,
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
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
              },
              "body": null,
              "expression": false
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null
          }
        ]
      },
      "abstract": false,
      "declare": true
    },
    {
      "type": "ClassDeclaration",
      "start": 96,
      "end": 972,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 102,
        "end": 103,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "start": 112,
        "end": 113,
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "start": 114,
        "end": 972,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 120,
            "end": 147,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 127,
              "end": 128,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
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
                "optional": false,
                "typeAnnotation": null
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
            "start": 152,
            "end": 171,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 159,
              "end": 161,
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
            "start": 176,
            "end": 197,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 183,
              "end": 185,
              "decorators": [],
              "name": "y2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "x",
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
            "start": 202,
            "end": 224,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 209,
              "end": 211,
              "decorators": [],
              "name": "y3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "computed": false
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
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
            "start": 229,
            "end": 255,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 236,
              "end": 238,
              "decorators": [],
              "name": "y4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                "optional": false,
                "computed": true
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
            "start": 260,
            "end": 288,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 267,
              "end": 269,
              "decorators": [],
              "name": "y5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "optional": true,
                  "computed": true
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
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
            "start": 293,
            "end": 313,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 300,
              "end": 302,
              "decorators": [],
              "name": "z1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                "decorators": [],
                "name": "a",
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
            "start": 318,
            "end": 341,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 325,
              "end": 327,
              "decorators": [],
              "name": "z2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
            "start": 346,
            "end": 368,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 353,
              "end": 355,
              "decorators": [],
              "name": "z3",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "f",
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
            "start": 373,
            "end": 398,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 380,
              "end": 382,
              "decorators": [],
              "name": "z4",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                "optional": false,
                "computed": true
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
            "start": 403,
            "end": 427,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 410,
              "end": 412,
              "decorators": [],
              "name": "z5",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 425,
                "end": 426,
                "value": 0,
                "raw": "0"
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
            "start": 432,
            "end": 457,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 439,
              "end": 441,
              "decorators": [],
              "name": "z6",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "right": {
                "type": "Literal",
                "start": 455,
                "end": 456,
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
            "start": 462,
            "end": 501,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 469,
              "end": 471,
              "decorators": [],
              "name": "z7",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "start": 474,
              "end": 500,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 475,
                "end": 497,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
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
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "optional": false,
                          "computed": false
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
                "id": null,
                "generator": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
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
            "start": 506,
            "end": 534,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 513,
              "end": 515,
              "decorators": [],
              "name": "z8",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                    "object": {
                      "type": "Super",
                      "start": 519,
                      "end": 524
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 525,
                      "end": 526,
                      "decorators": [],
                      "name": "a",
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
            "start": 539,
            "end": 571,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 546,
              "end": 548,
              "decorators": [],
              "name": "z9",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                      "object": {
                        "type": "Super",
                        "start": 552,
                        "end": 557
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 558,
                        "end": 559,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "right": {
                      "type": "Literal",
                      "start": 562,
                      "end": 563,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
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
            "start": 576,
            "end": 608,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 583,
              "end": 586,
              "decorators": [],
              "name": "z10",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                    "decorators": [],
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
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
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
            "start": 613,
            "end": 652,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 620,
              "end": 623,
              "decorators": [],
              "name": "z11",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                "properties": [
                  {
                    "type": "Property",
                    "start": 628,
                    "end": 638,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 628,
                      "end": 629,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
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
                        "decorators": [],
                        "name": "a",
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
                "start": 643,
                "end": 651,
                "properties": [
                  {
                    "type": "Property",
                    "start": 645,
                    "end": 649,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 645,
                      "end": 646,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 648,
                      "end": 649,
                      "value": 0,
                      "raw": "0"
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
            "start": 657,
            "end": 700,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 664,
              "end": 667,
              "decorators": [],
              "name": "z12",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                "properties": [
                  {
                    "type": "Property",
                    "start": 672,
                    "end": 686,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 672,
                      "end": 673,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 675,
                      "end": 686,
                      "decorators": [],
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
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 685,
                        "end": 686,
                        "value": 0,
                        "raw": "0"
                      },
                      "optional": false,
                      "typeAnnotation": null
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
                "start": 691,
                "end": 699,
                "properties": [
                  {
                    "type": "Property",
                    "start": 693,
                    "end": 697,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 693,
                      "end": 694,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 696,
                      "end": 697,
                      "value": 0,
                      "raw": "0"
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
            "start": 705,
            "end": 744,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 712,
              "end": 715,
              "decorators": [],
              "name": "z13",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                "properties": [
                  {
                    "type": "RestElement",
                    "start": 720,
                    "end": 730,
                    "decorators": [],
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
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null
                  }
                ],
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
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 737,
                      "end": 738,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Literal",
                      "start": 740,
                      "end": 741,
                      "value": 0,
                      "raw": "0"
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
            "start": 749,
            "end": 772,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 756,
              "end": 759,
              "decorators": [],
              "name": "z14",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "a",
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
            "start": 777,
            "end": 800,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 784,
              "end": 787,
              "decorators": [],
              "name": "z15",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "a",
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
            "start": 805,
            "end": 833,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 812,
              "end": 815,
              "decorators": [],
              "name": "z16",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
            "start": 838,
            "end": 861,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 845,
              "end": 848,
              "decorators": [],
              "name": "z17",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "a",
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
            "start": 866,
            "end": 889,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 873,
              "end": 876,
              "decorators": [],
              "name": "z18",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "start": 886,
                "end": 888,
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "start": 886,
                    "end": 888,
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true
                  }
                ],
                "expressions": []
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
            "start": 929,
            "end": 935,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 929,
              "end": 930,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "start": 933,
              "end": 934,
              "value": 1,
              "raw": "1"
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 940,
            "end": 951,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 940,
              "end": 941,
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 956,
            "end": 970,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 956,
              "end": 957,
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": null,
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
                  "decorators": [],
                  "name": "f",
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
            "computed": false,
            "static": false,
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
