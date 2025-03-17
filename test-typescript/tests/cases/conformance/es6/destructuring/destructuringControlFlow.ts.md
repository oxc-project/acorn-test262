__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 929,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 174,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "name": "f1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 31,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 31,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 17,
              "end": 31,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 19,
                  "end": 29,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 20,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 21,
                    "end": 29,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 23,
                      "end": 29
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 174,
        "body": [
          {
            "type": "IfStatement",
            "start": 39,
            "end": 172,
            "test": {
              "type": "MemberExpression",
              "start": 43,
              "end": 48,
              "object": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 50,
              "end": 172,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 60,
                  "end": 69,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 60,
                    "end": 68,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 66,
                      "end": 68,
                      "properties": []
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 78,
                  "end": 96,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 82,
                      "end": 95,
                      "id": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 84,
                        "name": "a1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 87,
                        "end": 95,
                        "object": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 90,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 91,
                          "end": 94,
                          "value": "a",
                          "raw": "\"a\""
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 128,
                  "end": 143,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 132,
                      "end": 142,
                      "id": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 134,
                        "name": "a2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 137,
                        "end": 142,
                        "object": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 140,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 142,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "computed": false,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 507,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 187,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 188,
          "end": 218,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 191,
            "end": 218,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 193,
              "end": 218,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 193,
                  "end": 209,
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
                  ]
                },
                {
                  "type": "TSArrayType",
                  "start": 212,
                  "end": 218,
                  "elementType": {
                    "type": "TSNullKeyword",
                    "start": 212,
                    "end": 216
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 220,
        "end": 507,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 226,
            "end": 242,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 241,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 232,
                  "name": "a0",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 235,
                  "end": 241,
                  "object": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 238,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 239,
                    "end": 240,
                    "value": 0,
                    "raw": "0"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 265,
            "end": 281,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 269,
                "end": 280,
                "id": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 271,
                  "name": "a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 274,
                  "end": 280,
                  "object": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 277,
                    "name": "obj",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Literal",
                    "start": 278,
                    "end": 279,
                    "value": 1,
                    "raw": "1"
                  },
                  "computed": true,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 304,
            "end": 323,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 308,
                "end": 322,
                "id": {
                  "type": "ArrayPattern",
                  "start": 308,
                  "end": 316,
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 309,
                      "end": 311,
                      "name": "b0",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    {
                      "type": "Identifier",
                      "start": 313,
                      "end": 315,
                      "name": "b1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  ],
                  "decorators": [],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 322,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 345,
            "expression": {
              "type": "AssignmentExpression",
              "start": 329,
              "end": 343,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 329,
                "end": 337,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 330,
                    "end": 332,
                    "name": "a0",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  {
                    "type": "Identifier",
                    "start": 334,
                    "end": 336,
                    "name": "a1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 340,
                "end": 343,
                "name": "obj",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            },
            "directive": null
          },
          {
            "type": "IfStatement",
            "start": 350,
            "end": 505,
            "test": {
              "type": "LogicalExpression",
              "start": 354,
              "end": 370,
              "left": {
                "type": "MemberExpression",
                "start": 354,
                "end": 360,
                "object": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 357,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 358,
                  "end": 359,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 364,
                "end": 370,
                "object": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 367,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 368,
                  "end": 369,
                  "value": 1,
                  "raw": "1"
                },
                "computed": true,
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 372,
              "end": 505,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 382,
                  "end": 398,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 386,
                      "end": 397,
                      "id": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 388,
                        "name": "c0",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 391,
                        "end": 397,
                        "object": {
                          "type": "Identifier",
                          "start": 391,
                          "end": 394,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 395,
                          "end": 396,
                          "value": 0,
                          "raw": "0"
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 418,
                  "end": 434,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 422,
                      "end": 433,
                      "id": {
                        "type": "Identifier",
                        "start": 422,
                        "end": 424,
                        "name": "c1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 427,
                        "end": 433,
                        "object": {
                          "type": "Identifier",
                          "start": 427,
                          "end": 430,
                          "name": "obj",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "property": {
                          "type": "Literal",
                          "start": 431,
                          "end": 432,
                          "value": 1,
                          "raw": "1"
                        },
                        "computed": true,
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "VariableDeclaration",
                  "start": 454,
                  "end": 473,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 458,
                      "end": 472,
                      "id": {
                        "type": "ArrayPattern",
                        "start": 458,
                        "end": 466,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 459,
                            "end": 461,
                            "name": "d0",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 463,
                            "end": 465,
                            "name": "d1",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ],
                        "decorators": [],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 472,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 482,
                  "end": 499,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 483,
                    "end": 497,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 483,
                      "end": 491,
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 484,
                          "end": 486,
                          "name": "c0",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        {
                          "type": "Identifier",
                          "start": 488,
                          "end": 490,
                          "name": "c1",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 497,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 509,
      "end": 662,
      "id": {
        "type": "Identifier",
        "start": 518,
        "end": 520,
        "name": "f3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 521,
          "end": 552,
          "name": "obj",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 524,
            "end": 552,
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "start": 526,
              "end": 552,
              "members": [
                {
                  "type": "TSPropertySignature",
                  "start": 528,
                  "end": 539,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 528,
                    "end": 529,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 530,
                    "end": 538,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 532,
                      "end": 538
                    }
                  },
                  "accessibility": null,
                  "static": false
                },
                {
                  "type": "TSPropertySignature",
                  "start": 540,
                  "end": 550,
                  "computed": false,
                  "optional": true,
                  "readonly": false,
                  "key": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 541,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 542,
                    "end": 550,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 544,
                      "end": 550
                    }
                  },
                  "accessibility": null,
                  "static": false
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 554,
        "end": 662,
        "body": [
          {
            "type": "IfStatement",
            "start": 560,
            "end": 660,
            "test": {
              "type": "LogicalExpression",
              "start": 564,
              "end": 578,
              "left": {
                "type": "MemberExpression",
                "start": 564,
                "end": 569,
                "object": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 567,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 573,
                "end": 578,
                "object": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 576,
                  "name": "obj",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 578,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 580,
              "end": 660,
              "body": [
                {
                  "type": "VariableDeclaration",
                  "start": 590,
                  "end": 609,
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 594,
                      "end": 608,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 594,
                        "end": 602,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 596,
                            "end": 597,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 596,
                              "end": 597,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 596,
                              "end": 597,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "kind": "init",
                            "optional": false
                          },
                          {
                            "type": "Property",
                            "start": 599,
                            "end": 600,
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 599,
                              "end": 600,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 599,
                              "end": 600,
                              "name": "b",
                              "typeAnnotation": null,
                              "decorators": [],
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
                      "init": {
                        "type": "Identifier",
                        "start": 605,
                        "end": 608,
                        "name": "obj",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "definite": false
                    }
                  ],
                  "kind": "let",
                  "declare": false
                },
                {
                  "type": "ExpressionStatement",
                  "start": 637,
                  "end": 654,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 638,
                    "end": 652,
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "start": 638,
                      "end": 646,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 640,
                          "end": 641,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 640,
                            "end": 641,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 640,
                            "end": 641,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "kind": "init",
                          "optional": false
                        },
                        {
                          "type": "Property",
                          "start": 643,
                          "end": 644,
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 643,
                            "end": 644,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 643,
                            "end": 644,
                            "name": "b",
                            "typeAnnotation": null,
                            "decorators": [],
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
                      "type": "Identifier",
                      "start": 649,
                      "end": 652,
                      "name": "obj",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    }
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 664,
      "end": 801,
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 675,
        "name": "f4",
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
        "start": 678,
        "end": 801,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 684,
            "end": 699,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 688,
                "end": 698,
                "id": {
                  "type": "Identifier",
                  "start": 688,
                  "end": 698,
                  "name": "x",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 689,
                    "end": 698,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 691,
                      "end": 698
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 704,
            "end": 716,
            "expression": {
              "type": "AssignmentExpression",
              "start": 705,
              "end": 714,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 705,
                "end": 710,
                "properties": [
                  {
                    "type": "Property",
                    "start": 707,
                    "end": 708,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 708,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 708,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
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
                "type": "Literal",
                "start": 713,
                "end": 714,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 731,
            "end": 750,
            "expression": {
              "type": "AssignmentExpression",
              "start": 732,
              "end": 748,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 732,
                "end": 744,
                "properties": [
                  {
                    "type": "Property",
                    "start": 734,
                    "end": 742,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "Literal",
                      "start": 735,
                      "end": 738,
                      "value": "x",
                      "raw": "\"x\""
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 741,
                      "end": 742,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
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
                "type": "Literal",
                "start": 747,
                "end": 748,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 765,
            "end": 789,
            "expression": {
              "type": "AssignmentExpression",
              "start": 766,
              "end": 787,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 766,
                "end": 783,
                "properties": [
                  {
                    "type": "Property",
                    "start": 768,
                    "end": 781,
                    "method": false,
                    "shorthand": false,
                    "computed": true,
                    "key": {
                      "type": "BinaryExpression",
                      "start": 769,
                      "end": 777,
                      "left": {
                        "type": "Literal",
                        "start": 769,
                        "end": 772,
                        "value": "x",
                        "raw": "\"x\""
                      },
                      "operator": "+",
                      "right": {
                        "type": "Literal",
                        "start": 775,
                        "end": 777,
                        "value": "",
                        "raw": "\"\""
                      }
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 780,
                      "end": 781,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
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
                "type": "Literal",
                "start": 786,
                "end": 787,
                "value": 0,
                "raw": "0"
              }
            },
            "directive": null
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 825,
      "end": 859,
      "id": {
        "type": "Identifier",
        "start": 830,
        "end": 838,
        "name": "KeyValue",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 841,
        "end": 858,
        "elementTypes": [
          {
            "type": "TSStringKeyword",
            "start": 842,
            "end": 848
          },
          {
            "type": "TSOptionalType",
            "start": 850,
            "end": 857,
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 850,
              "end": 856
            }
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 860,
      "end": 897,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 864,
          "end": 896,
          "id": {
            "type": "ArrayPattern",
            "start": 864,
            "end": 886,
            "elements": [
              {
                "type": "Identifier",
                "start": 865,
                "end": 868,
                "name": "key",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 870,
                "end": 875,
                "name": "value",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 876,
              "end": 886,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 878,
                "end": 886,
                "typeName": {
                  "type": "Identifier",
                  "start": 878,
                  "end": 886,
                  "name": "KeyValue",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 889,
            "end": 896,
            "elements": [
              {
                "type": "Literal",
                "start": 890,
                "end": 895,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 898,
      "end": 918,
      "expression": {
        "type": "CallExpression",
        "start": 898,
        "end": 917,
        "callee": {
          "type": "MemberExpression",
          "start": 898,
          "end": 915,
          "object": {
            "type": "Identifier",
            "start": 898,
            "end": 903,
            "name": "value",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 904,
            "end": 915,
            "name": "toUpperCase",
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
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
