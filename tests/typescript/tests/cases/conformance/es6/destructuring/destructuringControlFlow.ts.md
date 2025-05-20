__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 928,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 174,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 33,
        "end": 174,
        "body": [
          {
            "type": "IfStatement",
            "start": 39,
            "end": 172,
            "alternate": null,
            "consequent": {
              "type": "BlockStatement",
              "start": 50,
              "end": 172,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 60,
                  "end": 69,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 60,
                    "end": 68,
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 63,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "ObjectExpression",
                      "start": 66,
                      "end": 68,
                      "properties": []
                    }
                  }
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 82,
                        "end": 84,
                        "decorators": [],
                        "name": "a1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 87,
                        "end": 95,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 87,
                          "end": 90,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 91,
                          "end": 94,
                          "raw": "\"a\"",
                          "value": "a"
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 132,
                        "end": 134,
                        "decorators": [],
                        "name": "a2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 137,
                        "end": 142,
                        "computed": false,
                        "object": {
                          "type": "Identifier",
                          "start": 137,
                          "end": 140,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 142,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                }
              ]
            },
            "test": {
              "type": "MemberExpression",
              "start": 43,
              "end": 48,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 43,
                "end": 46,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 47,
                "end": 48,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 11,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 12,
          "end": 31,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 19,
                    "end": 20,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 21,
                    "end": 29,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 23,
                      "end": 29
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 176,
      "end": 507,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 232,
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 235,
                  "end": 241,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 238,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 239,
                    "end": 240,
                    "raw": "0",
                    "value": 0
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 269,
                  "end": 271,
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 274,
                  "end": 280,
                  "computed": true,
                  "object": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 277,
                    "decorators": [],
                    "name": "obj",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "property": {
                    "type": "Literal",
                    "start": 278,
                    "end": 279,
                    "raw": "1",
                    "value": 1
                  }
                }
              }
            ],
            "declare": false,
            "kind": "let"
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
                "definite": false,
                "id": {
                  "type": "ArrayPattern",
                  "start": 308,
                  "end": 316,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "start": 309,
                      "end": 311,
                      "decorators": [],
                      "name": "b0",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    {
                      "type": "Identifier",
                      "start": 313,
                      "end": 315,
                      "decorators": [],
                      "name": "b1",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 322,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            ],
            "declare": false,
            "kind": "let"
          },
          {
            "type": "ExpressionStatement",
            "start": 328,
            "end": 345,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 329,
              "end": 343,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 329,
                "end": 337,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 330,
                    "end": 332,
                    "decorators": [],
                    "name": "a0",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 334,
                    "end": 336,
                    "decorators": [],
                    "name": "a1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "Identifier",
                "start": 340,
                "end": 343,
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          {
            "type": "IfStatement",
            "start": 350,
            "end": 505,
            "alternate": null,
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 386,
                        "end": 388,
                        "decorators": [],
                        "name": "c0",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 391,
                        "end": 397,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 391,
                          "end": 394,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 395,
                          "end": 396,
                          "raw": "0",
                          "value": 0
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
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
                      "definite": false,
                      "id": {
                        "type": "Identifier",
                        "start": 422,
                        "end": 424,
                        "decorators": [],
                        "name": "c1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 427,
                        "end": 433,
                        "computed": true,
                        "object": {
                          "type": "Identifier",
                          "start": 427,
                          "end": 430,
                          "decorators": [],
                          "name": "obj",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "property": {
                          "type": "Literal",
                          "start": 431,
                          "end": 432,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
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
                      "definite": false,
                      "id": {
                        "type": "ArrayPattern",
                        "start": 458,
                        "end": 466,
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 459,
                            "end": 461,
                            "decorators": [],
                            "name": "d0",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 463,
                            "end": 465,
                            "decorators": [],
                            "name": "d1",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 469,
                        "end": 472,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 482,
                  "end": 499,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 483,
                    "end": 497,
                    "operator": "=",
                    "left": {
                      "type": "ArrayPattern",
                      "start": 483,
                      "end": 491,
                      "decorators": [],
                      "elements": [
                        {
                          "type": "Identifier",
                          "start": 484,
                          "end": 486,
                          "decorators": [],
                          "name": "c0",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        {
                          "type": "Identifier",
                          "start": 488,
                          "end": 490,
                          "decorators": [],
                          "name": "c1",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 494,
                      "end": 497,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 354,
              "end": 370,
              "operator": "&&",
              "left": {
                "type": "MemberExpression",
                "start": 354,
                "end": 360,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 354,
                  "end": 357,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 358,
                  "end": 359,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 364,
                "end": 370,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 364,
                  "end": 367,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 368,
                  "end": 369,
                  "raw": "1",
                  "value": 1
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 185,
        "end": 187,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 188,
          "end": 218,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 509,
      "end": 662,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 554,
        "end": 662,
        "body": [
          {
            "type": "IfStatement",
            "start": 560,
            "end": 660,
            "alternate": null,
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
                      "definite": false,
                      "id": {
                        "type": "ObjectPattern",
                        "start": 594,
                        "end": 602,
                        "decorators": [],
                        "optional": false,
                        "properties": [
                          {
                            "type": "Property",
                            "start": 596,
                            "end": 597,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 596,
                              "end": 597,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 596,
                              "end": 597,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          },
                          {
                            "type": "Property",
                            "start": 599,
                            "end": 600,
                            "computed": false,
                            "key": {
                              "type": "Identifier",
                              "start": 599,
                              "end": 600,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "kind": "init",
                            "method": false,
                            "optional": false,
                            "shorthand": true,
                            "value": {
                              "type": "Identifier",
                              "start": 599,
                              "end": 600,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          }
                        ],
                        "typeAnnotation": null
                      },
                      "init": {
                        "type": "Identifier",
                        "start": 605,
                        "end": 608,
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    }
                  ],
                  "declare": false,
                  "kind": "let"
                },
                {
                  "type": "ExpressionStatement",
                  "start": 637,
                  "end": 654,
                  "directive": null,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 638,
                    "end": 652,
                    "operator": "=",
                    "left": {
                      "type": "ObjectPattern",
                      "start": 638,
                      "end": 646,
                      "decorators": [],
                      "optional": false,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 640,
                          "end": 641,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 640,
                            "end": 641,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 640,
                            "end": 641,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        },
                        {
                          "type": "Property",
                          "start": 643,
                          "end": 644,
                          "computed": false,
                          "key": {
                            "type": "Identifier",
                            "start": 643,
                            "end": 644,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "kind": "init",
                          "method": false,
                          "optional": false,
                          "shorthand": true,
                          "value": {
                            "type": "Identifier",
                            "start": 643,
                            "end": 644,
                            "decorators": [],
                            "name": "b",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        }
                      ],
                      "typeAnnotation": null
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 649,
                      "end": 652,
                      "decorators": [],
                      "name": "obj",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                }
              ]
            },
            "test": {
              "type": "LogicalExpression",
              "start": 564,
              "end": 578,
              "operator": "&&",
              "left": {
                "type": "MemberExpression",
                "start": 564,
                "end": 569,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 564,
                  "end": 567,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 568,
                  "end": 569,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 573,
                "end": 578,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 573,
                  "end": 576,
                  "decorators": [],
                  "name": "obj",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 578,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 518,
        "end": 520,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [
        {
          "type": "Identifier",
          "start": 521,
          "end": 552,
          "decorators": [],
          "name": "obj",
          "optional": false,
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
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 528,
                    "end": 529,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 530,
                    "end": 538,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 532,
                      "end": 538
                    }
                  }
                },
                {
                  "type": "TSPropertySignature",
                  "start": 540,
                  "end": 550,
                  "accessibility": null,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 540,
                    "end": 541,
                    "decorators": [],
                    "name": "b",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": true,
                  "readonly": false,
                  "static": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 542,
                    "end": 550,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 544,
                      "end": 550
                    }
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 664,
      "end": 801,
      "async": false,
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
                "definite": false,
                "id": {
                  "type": "Identifier",
                  "start": 688,
                  "end": 698,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 689,
                    "end": 698,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 691,
                      "end": 698
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
            "start": 704,
            "end": 716,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 705,
              "end": 714,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 705,
                "end": 710,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 707,
                    "end": 708,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 708,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": true,
                    "value": {
                      "type": "Identifier",
                      "start": 707,
                      "end": 708,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 713,
                "end": 714,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 731,
            "end": 750,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 732,
              "end": 748,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 732,
                "end": 744,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 734,
                    "end": 742,
                    "computed": true,
                    "key": {
                      "type": "Literal",
                      "start": 735,
                      "end": 738,
                      "raw": "\"x\"",
                      "value": "x"
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 741,
                      "end": 742,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 747,
                "end": 748,
                "raw": "0",
                "value": 0
              }
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 765,
            "end": 789,
            "directive": null,
            "expression": {
              "type": "AssignmentExpression",
              "start": 766,
              "end": 787,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 766,
                "end": 783,
                "decorators": [],
                "optional": false,
                "properties": [
                  {
                    "type": "Property",
                    "start": 768,
                    "end": 781,
                    "computed": true,
                    "key": {
                      "type": "BinaryExpression",
                      "start": 769,
                      "end": 777,
                      "operator": "+",
                      "left": {
                        "type": "Literal",
                        "start": 769,
                        "end": 772,
                        "raw": "\"x\"",
                        "value": "x"
                      },
                      "right": {
                        "type": "Literal",
                        "start": 775,
                        "end": 777,
                        "raw": "\"\"",
                        "value": ""
                      }
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Identifier",
                      "start": 780,
                      "end": 781,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "typeAnnotation": null
              },
              "right": {
                "type": "Literal",
                "start": 786,
                "end": 787,
                "raw": "0",
                "value": 0
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 673,
        "end": 675,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "params": [],
      "returnType": null,
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 825,
      "end": 859,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 830,
        "end": 838,
        "decorators": [],
        "name": "KeyValue",
        "optional": false,
        "typeAnnotation": null
      },
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
      "typeParameters": null
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
          "definite": false,
          "id": {
            "type": "ArrayPattern",
            "start": 864,
            "end": 886,
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "start": 865,
                "end": 868,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "Identifier",
                "start": 870,
                "end": 875,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 876,
              "end": 886,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 878,
                "end": 886,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 878,
                  "end": 886,
                  "decorators": [],
                  "name": "KeyValue",
                  "optional": false,
                  "typeAnnotation": null
                }
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
                "raw": "\"foo\"",
                "value": "foo"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 898,
      "end": 918,
      "directive": null,
      "expression": {
        "type": "CallExpression",
        "start": 898,
        "end": 917,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 898,
          "end": 915,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 898,
            "end": 903,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 904,
            "end": 915,
            "decorators": [],
            "name": "toUpperCase",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "optional": false,
        "typeArguments": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
