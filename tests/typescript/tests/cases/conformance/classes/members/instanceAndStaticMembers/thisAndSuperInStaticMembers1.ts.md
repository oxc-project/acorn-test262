__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 15
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 32,
                "end": 35
              },
              "start": 30,
              "end": 35
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 22,
            "end": 36
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 48,
              "end": 49
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 53,
                  "end": 59
                },
                "start": 51,
                "end": 59
              },
              "body": null,
              "expression": false,
              "start": 49,
              "end": 60
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 41,
            "end": 60
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 68,
                "end": 74
              },
              "start": 66,
              "end": 74
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 65,
            "end": 75
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null,
              "start": 80,
              "end": 81
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 85,
                  "end": 91
                },
                "start": 83,
                "end": 91
              },
              "body": null,
              "expression": false,
              "start": 81,
              "end": 92
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 80,
            "end": 92
          }
        ],
        "start": 16,
        "end": 94
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 94
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 102,
        "end": 103
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 112,
        "end": 113
      },
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 127,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 130,
                "end": 133
              },
              "start": 128,
              "end": 133
            },
            "value": {
              "type": "TSNonNullExpression",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 136,
                "end": 145
              },
              "start": 136,
              "end": 146
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 120,
            "end": 147
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y1",
              "optional": false,
              "typeAnnotation": null,
              "start": 159,
              "end": 161
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 164,
                "end": 168
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 169,
                "end": 170
              },
              "optional": false,
              "computed": false,
              "start": 164,
              "end": 170
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 152,
            "end": 171
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y2",
              "optional": false,
              "typeAnnotation": null,
              "start": 183,
              "end": 185
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 188,
                  "end": 192
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 193,
                  "end": 194
                },
                "optional": false,
                "computed": false,
                "start": 188,
                "end": 194
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 188,
              "end": 196
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 176,
            "end": 197
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y3",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 211
            },
            "typeAnnotation": null,
            "value": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 214,
                    "end": 218
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 220,
                    "end": 221
                  },
                  "optional": true,
                  "computed": false,
                  "start": 214,
                  "end": 221
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 214,
                "end": 223
              },
              "start": 214,
              "end": 223
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 202,
            "end": 224
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y4",
              "optional": false,
              "typeAnnotation": null,
              "start": 236,
              "end": 238
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "ThisExpression",
                  "start": 241,
                  "end": 245
                },
                "property": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 247,
                  "end": 250
                },
                "optional": false,
                "computed": true,
                "start": 241,
                "end": 252
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 241,
              "end": 254
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 229,
            "end": 255
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y5",
              "optional": false,
              "typeAnnotation": null,
              "start": 267,
              "end": 269
            },
            "typeAnnotation": null,
            "value": {
              "type": "ChainExpression",
              "expression": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "ThisExpression",
                    "start": 272,
                    "end": 276
                  },
                  "property": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 280,
                    "end": 283
                  },
                  "optional": true,
                  "computed": true,
                  "start": 272,
                  "end": 285
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 272,
                "end": 287
              },
              "start": 272,
              "end": 287
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 260,
            "end": 288
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z1",
              "optional": false,
              "typeAnnotation": null,
              "start": 300,
              "end": 302
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Super",
                "start": 305,
                "end": 310
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 311,
                "end": 312
              },
              "optional": false,
              "computed": false,
              "start": 305,
              "end": 312
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 293,
            "end": 313
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z2",
              "optional": false,
              "typeAnnotation": null,
              "start": 325,
              "end": 327
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "Super",
                "start": 330,
                "end": 335
              },
              "property": {
                "type": "Literal",
                "value": "a",
                "raw": "\"a\"",
                "start": 336,
                "end": 339
              },
              "optional": false,
              "computed": true,
              "start": 330,
              "end": 340
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 318,
            "end": 341
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z3",
              "optional": false,
              "typeAnnotation": null,
              "start": 353,
              "end": 355
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 358,
                  "end": 363
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 365
                },
                "optional": false,
                "computed": false,
                "start": 358,
                "end": 365
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 358,
              "end": 367
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 346,
            "end": 368
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z4",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 382
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 385,
                  "end": 390
                },
                "property": {
                  "type": "Literal",
                  "value": "f",
                  "raw": "\"f\"",
                  "start": 391,
                  "end": 394
                },
                "optional": false,
                "computed": true,
                "start": 385,
                "end": 395
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 385,
              "end": 397
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 373,
            "end": 398
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z5",
              "optional": false,
              "typeAnnotation": null,
              "start": 410,
              "end": 412
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 415,
                  "end": 420
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 421,
                  "end": 422
                },
                "optional": false,
                "computed": false,
                "start": 415,
                "end": 422
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 425,
                "end": 426
              },
              "start": 415,
              "end": 426
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 403,
            "end": 427
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z6",
              "optional": false,
              "typeAnnotation": null,
              "start": 439,
              "end": 441
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "+=",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 444,
                  "end": 449
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 450,
                  "end": 451
                },
                "optional": false,
                "computed": false,
                "start": 444,
                "end": 451
              },
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 455,
                "end": 456
              },
              "start": 444,
              "end": 456
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 432,
            "end": 457
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z7",
              "optional": false,
              "typeAnnotation": null,
              "start": 469,
              "end": 471
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "ArrowFunctionExpression",
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ExpressionStatement",
                      "expression": {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Super",
                            "start": 483,
                            "end": 488
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 489,
                            "end": 490
                          },
                          "optional": false,
                          "computed": false,
                          "start": 483,
                          "end": 490
                        },
                        "right": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 493,
                          "end": 494
                        },
                        "start": 483,
                        "end": 494
                      },
                      "directive": null,
                      "start": 483,
                      "end": 495
                    }
                  ],
                  "start": 481,
                  "end": 497
                },
                "id": null,
                "generator": false,
                "start": 475,
                "end": 497
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 474,
              "end": 500
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 462,
            "end": 501
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z8",
              "optional": false,
              "typeAnnotation": null,
              "start": 513,
              "end": 515
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Super",
                      "start": 519,
                      "end": 524
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 525,
                      "end": 526
                    },
                    "optional": false,
                    "computed": false,
                    "start": 519,
                    "end": 526
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 518,
                "end": 527
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 531,
                    "end": 532
                  }
                ],
                "start": 530,
                "end": 533
              },
              "start": 518,
              "end": 533
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 506,
            "end": 534
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z9",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 548
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "decorators": [],
                    "left": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 552,
                        "end": 557
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 558,
                        "end": 559
                      },
                      "optional": false,
                      "computed": false,
                      "start": 552,
                      "end": 559
                    },
                    "right": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 562,
                      "end": 563
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 552,
                    "end": 563
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 551,
                "end": 564
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 568,
                    "end": 569
                  }
                ],
                "start": 567,
                "end": 570
              },
              "start": 551,
              "end": 570
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 539,
            "end": 571
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z10",
              "optional": false,
              "typeAnnotation": null,
              "start": 583,
              "end": 586
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 593,
                        "end": 598
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 599,
                        "end": 600
                      },
                      "optional": false,
                      "computed": false,
                      "start": 593,
                      "end": 600
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 590,
                    "end": 600
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 589,
                "end": 601
              },
              "right": {
                "type": "ArrayExpression",
                "elements": [
                  {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 605,
                    "end": 606
                  }
                ],
                "start": 604,
                "end": 607
              },
              "start": 589,
              "end": 607
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 576,
            "end": 608
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z11",
              "optional": false,
              "typeAnnotation": null,
              "start": 620,
              "end": 623
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 628,
                      "end": 629
                    },
                    "value": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 631,
                        "end": 636
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 637,
                        "end": 638
                      },
                      "optional": false,
                      "computed": false,
                      "start": 631,
                      "end": 638
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 628,
                    "end": 638
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 626,
                "end": 640
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 645,
                      "end": 646
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 648,
                      "end": 649
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 645,
                    "end": 649
                  }
                ],
                "start": 643,
                "end": 651
              },
              "start": 626,
              "end": 651
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 613,
            "end": 652
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z12",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 667
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 672,
                      "end": 673
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "decorators": [],
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Super",
                          "start": 675,
                          "end": 680
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 681,
                          "end": 682
                        },
                        "optional": false,
                        "computed": false,
                        "start": 675,
                        "end": 682
                      },
                      "right": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 685,
                        "end": 686
                      },
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 675,
                      "end": 686
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 672,
                    "end": 686
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 688
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 693,
                      "end": 694
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 696,
                      "end": 697
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 693,
                    "end": 697
                  }
                ],
                "start": 691,
                "end": 699
              },
              "start": 670,
              "end": 699
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 657,
            "end": 700
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z13",
              "optional": false,
              "typeAnnotation": null,
              "start": 712,
              "end": 715
            },
            "typeAnnotation": null,
            "value": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 723,
                        "end": 728
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 729,
                        "end": 730
                      },
                      "optional": false,
                      "computed": false,
                      "start": 723,
                      "end": 730
                    },
                    "optional": false,
                    "typeAnnotation": null,
                    "value": null,
                    "start": 720,
                    "end": 730
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 718,
                "end": 732
              },
              "right": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 737,
                      "end": 738
                    },
                    "value": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 740,
                      "end": 741
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 737,
                    "end": 741
                  }
                ],
                "start": 735,
                "end": 743
              },
              "start": 718,
              "end": 743
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 705,
            "end": 744
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z14",
              "optional": false,
              "typeAnnotation": null,
              "start": 756,
              "end": 759
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 764,
                  "end": 769
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 770,
                  "end": 771
                },
                "optional": false,
                "computed": false,
                "start": 764,
                "end": 771
              },
              "start": 762,
              "end": 771
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 749,
            "end": 772
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z15",
              "optional": false,
              "typeAnnotation": null,
              "start": 784,
              "end": 787
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "--",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 792,
                  "end": 797
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 798,
                  "end": 799
                },
                "optional": false,
                "computed": false,
                "start": 792,
                "end": 799
              },
              "start": 790,
              "end": 799
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 777,
            "end": 800
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z16",
              "optional": false,
              "typeAnnotation": null,
              "start": 812,
              "end": 815
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 820,
                  "end": 825
                },
                "property": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "\"a\"",
                  "start": 827,
                  "end": 830
                },
                "optional": false,
                "computed": true,
                "start": 820,
                "end": 832
              },
              "start": 818,
              "end": 832
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 805,
            "end": 833
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z17",
              "optional": false,
              "typeAnnotation": null,
              "start": 845,
              "end": 848
            },
            "typeAnnotation": null,
            "value": {
              "type": "UpdateExpression",
              "operator": "++",
              "prefix": false,
              "argument": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 851,
                  "end": 856
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 857,
                  "end": 858
                },
                "optional": false,
                "computed": false,
                "start": 851,
                "end": 858
              },
              "start": 851,
              "end": 860
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 838,
            "end": 861
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z18",
              "optional": false,
              "typeAnnotation": null,
              "start": 873,
              "end": 876
            },
            "typeAnnotation": null,
            "value": {
              "type": "TaggedTemplateExpression",
              "tag": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 879,
                  "end": 884
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 885,
                  "end": 886
                },
                "optional": false,
                "computed": false,
                "start": 879,
                "end": 886
              },
              "typeArguments": null,
              "quasi": {
                "type": "TemplateLiteral",
                "quasis": [
                  {
                    "type": "TemplateElement",
                    "value": {
                      "raw": "",
                      "cooked": ""
                    },
                    "tail": true,
                    "start": 886,
                    "end": 888
                  }
                ],
                "expressions": [],
                "start": 886,
                "end": 888
              },
              "start": 879,
              "end": 888
            },
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 866,
            "end": 889
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 929,
              "end": 930
            },
            "typeAnnotation": null,
            "value": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 933,
              "end": 934
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 929,
            "end": 935
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 940,
              "end": 941
            },
            "typeAnnotation": null,
            "value": {
              "type": "MemberExpression",
              "object": {
                "type": "ThisExpression",
                "start": 944,
                "end": 948
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 949,
                "end": 950
              },
              "optional": false,
              "computed": false,
              "start": 944,
              "end": 950
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 940,
            "end": 951
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "z",
              "optional": false,
              "typeAnnotation": null,
              "start": 956,
              "end": 957
            },
            "typeAnnotation": null,
            "value": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Super",
                  "start": 960,
                  "end": 965
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 966,
                  "end": 967
                },
                "optional": false,
                "computed": false,
                "start": 960,
                "end": 967
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 960,
              "end": 969
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 956,
            "end": 970
          }
        ],
        "start": 114,
        "end": 972
      },
      "abstract": false,
      "declare": false,
      "start": 96,
      "end": 972
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 972
}
```
