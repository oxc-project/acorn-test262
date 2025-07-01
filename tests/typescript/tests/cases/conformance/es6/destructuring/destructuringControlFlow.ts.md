__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 11
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 19,
                    "end": 20
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 23,
                      "end": 29
                    },
                    "start": 21,
                    "end": 29
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 19,
                  "end": 29
                }
              ],
              "start": 17,
              "end": 31
            },
            "start": 15,
            "end": 31
          },
          "start": 12,
          "end": 31
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 43,
                "end": 46
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null,
                "start": 47,
                "end": 48
              },
              "optional": false,
              "computed": false,
              "start": 43,
              "end": 48
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 60,
                      "end": 63
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 66,
                      "end": 68
                    },
                    "start": 60,
                    "end": 68
                  },
                  "directive": null,
                  "start": 60,
                  "end": 69
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 82,
                        "end": 84
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 87,
                          "end": 90
                        },
                        "property": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 91,
                          "end": 94
                        },
                        "optional": false,
                        "computed": true,
                        "start": 87,
                        "end": 95
                      },
                      "definite": false,
                      "start": 82,
                      "end": 95
                    }
                  ],
                  "declare": false,
                  "start": 78,
                  "end": 96
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 132,
                        "end": 134
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 137,
                          "end": 140
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 141,
                          "end": 142
                        },
                        "optional": false,
                        "computed": false,
                        "start": 137,
                        "end": 142
                      },
                      "definite": false,
                      "start": 132,
                      "end": 142
                    }
                  ],
                  "declare": false,
                  "start": 128,
                  "end": 143
                }
              ],
              "start": 50,
              "end": 172
            },
            "alternate": null,
            "start": 39,
            "end": 172
          }
        ],
        "start": 33,
        "end": 174
      },
      "expression": false,
      "start": 0,
      "end": 174
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 185,
        "end": 187
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 194,
                      "end": 200
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 202,
                      "end": 208
                    }
                  ],
                  "start": 193,
                  "end": 209
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNullKeyword",
                    "start": 212,
                    "end": 216
                  },
                  "start": 212,
                  "end": 218
                }
              ],
              "start": 193,
              "end": 218
            },
            "start": 191,
            "end": 218
          },
          "start": 188,
          "end": 218
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 230,
                  "end": 232
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 238
                  },
                  "property": {
                    "type": "Literal",
                    "value": 0,
                    "raw": "0",
                    "start": 239,
                    "end": 240
                  },
                  "optional": false,
                  "computed": true,
                  "start": 235,
                  "end": 241
                },
                "definite": false,
                "start": 230,
                "end": 241
              }
            ],
            "declare": false,
            "start": 226,
            "end": 242
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 269,
                  "end": 271
                },
                "init": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 274,
                    "end": 277
                  },
                  "property": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 278,
                    "end": 279
                  },
                  "optional": false,
                  "computed": true,
                  "start": 274,
                  "end": 280
                },
                "definite": false,
                "start": 269,
                "end": 280
              }
            ],
            "declare": false,
            "start": 265,
            "end": 281
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b0",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 309,
                      "end": 311
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 313,
                      "end": 315
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 308,
                  "end": 316
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 319,
                  "end": 322
                },
                "definite": false,
                "start": 308,
                "end": 322
              }
            ],
            "declare": false,
            "start": 304,
            "end": 323
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "AssignmentExpression",
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 330,
                    "end": 332
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 334,
                    "end": 336
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 329,
                "end": 337
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 340,
                "end": 343
              },
              "start": 329,
              "end": 343
            },
            "directive": null,
            "start": 328,
            "end": 345
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 354,
                  "end": 357
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 358,
                  "end": 359
                },
                "optional": false,
                "computed": true,
                "start": 354,
                "end": 360
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 364,
                  "end": 367
                },
                "property": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 368,
                  "end": 369
                },
                "optional": false,
                "computed": true,
                "start": 364,
                "end": 370
              },
              "start": 354,
              "end": 370
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c0",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 386,
                        "end": 388
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 391,
                          "end": 394
                        },
                        "property": {
                          "type": "Literal",
                          "value": 0,
                          "raw": "0",
                          "start": 395,
                          "end": 396
                        },
                        "optional": false,
                        "computed": true,
                        "start": 391,
                        "end": 397
                      },
                      "definite": false,
                      "start": 386,
                      "end": 397
                    }
                  ],
                  "declare": false,
                  "start": 382,
                  "end": 398
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 422,
                        "end": 424
                      },
                      "init": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 427,
                          "end": 430
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 431,
                          "end": 432
                        },
                        "optional": false,
                        "computed": true,
                        "start": 427,
                        "end": 433
                      },
                      "definite": false,
                      "start": 422,
                      "end": 433
                    }
                  ],
                  "declare": false,
                  "start": 418,
                  "end": 434
                },
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d0",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 459,
                            "end": 461
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 463,
                            "end": 465
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 458,
                        "end": 466
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 469,
                        "end": 472
                      },
                      "definite": false,
                      "start": 458,
                      "end": 472
                    }
                  ],
                  "declare": false,
                  "start": 454,
                  "end": 473
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c0",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 484,
                          "end": 486
                        },
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 488,
                          "end": 490
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 483,
                      "end": 491
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 494,
                      "end": 497
                    },
                    "start": 483,
                    "end": 497
                  },
                  "directive": null,
                  "start": 482,
                  "end": 499
                }
              ],
              "start": 372,
              "end": 505
            },
            "alternate": null,
            "start": 350,
            "end": 505
          }
        ],
        "start": 220,
        "end": 507
      },
      "expression": false,
      "start": 176,
      "end": 507
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null,
        "start": 518,
        "end": 520
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 528,
                    "end": 529
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 532,
                      "end": 538
                    },
                    "start": 530,
                    "end": 538
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 528,
                  "end": 539
                },
                {
                  "type": "TSPropertySignature",
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 540,
                    "end": 541
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 544,
                      "end": 550
                    },
                    "start": 542,
                    "end": 550
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 540,
                  "end": 550
                }
              ],
              "start": 526,
              "end": 552
            },
            "start": 524,
            "end": 552
          },
          "start": 521,
          "end": 552
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "LogicalExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 564,
                  "end": 567
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 568,
                  "end": 569
                },
                "optional": false,
                "computed": false,
                "start": 564,
                "end": 569
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 573,
                  "end": 576
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 577,
                  "end": 578
                },
                "optional": false,
                "computed": false,
                "start": 573,
                "end": 578
              },
              "start": 564,
              "end": 578
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ObjectPattern",
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 596,
                              "end": 597
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 596,
                              "end": 597
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 596,
                            "end": 597
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 599,
                              "end": 600
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 599,
                              "end": 600
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 599,
                            "end": 600
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 594,
                        "end": 602
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 605,
                        "end": 608
                      },
                      "definite": false,
                      "start": 594,
                      "end": 608
                    }
                  ],
                  "declare": false,
                  "start": 590,
                  "end": 609
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
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
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 640,
                            "end": 641
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 640,
                            "end": 641
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 640,
                          "end": 641
                        },
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 643,
                            "end": 644
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 643,
                            "end": 644
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 643,
                          "end": 644
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 638,
                      "end": 646
                    },
                    "right": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 649,
                      "end": 652
                    },
                    "start": 638,
                    "end": 652
                  },
                  "directive": null,
                  "start": 637,
                  "end": 654
                }
              ],
              "start": 580,
              "end": 660
            },
            "alternate": null,
            "start": 560,
            "end": 660
          }
        ],
        "start": 554,
        "end": 662
      },
      "expression": false,
      "start": 509,
      "end": 662
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null,
        "start": 673,
        "end": 675
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 691,
                      "end": 698
                    },
                    "start": 689,
                    "end": 698
                  },
                  "start": 688,
                  "end": 698
                },
                "init": null,
                "definite": false,
                "start": 688,
                "end": 698
              }
            ],
            "declare": false,
            "start": 684,
            "end": 699
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                      "start": 707,
                      "end": 708
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 707,
                      "end": 708
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 707,
                    "end": 708
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 710
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 713,
                "end": 714
              },
              "start": 705,
              "end": 714
            },
            "directive": null,
            "start": 704,
            "end": 716
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                      "type": "Literal",
                      "value": "x",
                      "raw": "\"x\"",
                      "start": 735,
                      "end": 738
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 741,
                      "end": 742
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 734,
                    "end": 742
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 744
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 747,
                "end": 748
              },
              "start": 732,
              "end": 748
            },
            "directive": null,
            "start": 731,
            "end": 750
          },
          {
            "type": "ExpressionStatement",
            "expression": {
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
                      "type": "BinaryExpression",
                      "left": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 769,
                        "end": 772
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "value": "",
                        "raw": "\"\"",
                        "start": 775,
                        "end": 777
                      },
                      "start": 769,
                      "end": 777
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 780,
                      "end": 781
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "optional": false,
                    "start": 768,
                    "end": 781
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 766,
                "end": 783
              },
              "right": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 786,
                "end": 787
              },
              "start": 766,
              "end": 787
            },
            "directive": null,
            "start": 765,
            "end": 789
          }
        ],
        "start": 678,
        "end": 801
      },
      "expression": false,
      "start": 664,
      "end": 801
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "KeyValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 830,
        "end": 838
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 842,
            "end": 848
          },
          {
            "type": "TSOptionalType",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 850,
              "end": 856
            },
            "start": 850,
            "end": 857
          }
        ],
        "start": 841,
        "end": 858
      },
      "declare": false,
      "start": 825,
      "end": 859
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null,
                "start": 865,
                "end": 868
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 870,
                "end": 875
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "KeyValue",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 878,
                  "end": 886
                },
                "typeArguments": null,
                "start": 878,
                "end": 886
              },
              "start": 876,
              "end": 886
            },
            "start": 864,
            "end": 886
          },
          "init": {
            "type": "ArrayExpression",
            "elements": [
              {
                "type": "Literal",
                "value": "foo",
                "raw": "\"foo\"",
                "start": 890,
                "end": 895
              }
            ],
            "start": 889,
            "end": 896
          },
          "definite": false,
          "start": 864,
          "end": 896
        }
      ],
      "declare": false,
      "start": 860,
      "end": 897
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null,
            "start": 898,
            "end": 903
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null,
            "start": 904,
            "end": 915
          },
          "optional": false,
          "computed": false,
          "start": 898,
          "end": 915
        },
        "typeArguments": null,
        "arguments": [],
        "optional": false,
        "start": 898,
        "end": 917
      },
      "directive": null,
      "start": 898,
      "end": 918
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 928
}
```
