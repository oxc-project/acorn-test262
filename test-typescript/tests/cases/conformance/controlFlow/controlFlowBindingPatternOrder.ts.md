__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 619,
  "body": [
    {
      "type": "BlockStatement",
      "start": 77,
      "end": 176,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 83,
          "end": 100,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 87,
              "end": 99,
              "id": {
                "type": "Identifier",
                "start": 87,
                "end": 95,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 88,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 90,
                    "end": 95,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 90,
                        "end": 91,
                        "literal": {
                          "type": "Literal",
                          "start": 90,
                          "end": 91,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 94,
                        "end": 95,
                        "literal": {
                          "type": "Literal",
                          "start": 94,
                          "end": 95,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 98,
                "end": 99,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 105,
          "end": 153,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 111,
              "end": 152,
              "id": {
                "type": "ArrayPattern",
                "start": 111,
                "end": 147,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 112,
                    "end": 146,
                    "left": {
                      "type": "ObjectPattern",
                      "start": 112,
                      "end": 128,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 114,
                          "end": 126,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "AssignmentExpression",
                            "start": 116,
                            "end": 121,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 116,
                              "end": 117,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 120,
                              "end": 121,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 125,
                            "end": 126,
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
                      "type": "TSAsExpression",
                      "start": 131,
                      "end": 146,
                      "expression": {
                        "type": "ArrayExpression",
                        "start": 131,
                        "end": 137,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 132,
                            "end": 133,
                            "value": 9,
                            "raw": "9"
                          },
                          {
                            "type": "Identifier",
                            "start": 135,
                            "end": 136,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 141,
                        "end": 146,
                        "typeName": {
                          "type": "Identifier",
                          "start": 141,
                          "end": 146,
                          "name": "const",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
              "init": {
                "type": "ArrayExpression",
                "start": 150,
                "end": 152,
                "elements": []
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 158,
          "end": 174,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 164,
              "end": 173,
              "id": {
                "type": "Identifier",
                "start": 164,
                "end": 169,
                "name": "bb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 166,
                  "end": 169,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 168,
                    "end": 169,
                    "literal": {
                      "type": "Literal",
                      "start": 168,
                      "end": 169,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Identifier",
                "start": 172,
                "end": 173,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 177,
      "end": 274,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 183,
          "end": 200,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 187,
              "end": 199,
              "id": {
                "type": "Identifier",
                "start": 187,
                "end": 195,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 188,
                  "end": 195,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 190,
                    "end": 195,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 190,
                        "end": 191,
                        "literal": {
                          "type": "Literal",
                          "start": 190,
                          "end": 191,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 194,
                        "end": 195,
                        "literal": {
                          "type": "Literal",
                          "start": 194,
                          "end": 195,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 198,
                "end": 199,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 205,
          "end": 251,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 211,
              "end": 250,
              "id": {
                "type": "ArrayPattern",
                "start": 211,
                "end": 245,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 212,
                    "end": 244,
                    "left": {
                      "type": "ObjectPattern",
                      "start": 212,
                      "end": 222,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 214,
                          "end": 220,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "Identifier",
                            "start": 215,
                            "end": 216,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 219,
                            "end": 220,
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
                      "type": "TSAsExpression",
                      "start": 225,
                      "end": 244,
                      "expression": {
                        "type": "ArrayExpression",
                        "start": 225,
                        "end": 235,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 226,
                            "end": 227,
                            "value": 9,
                            "raw": "9"
                          },
                          {
                            "type": "AssignmentExpression",
                            "start": 229,
                            "end": 234,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 229,
                              "end": 230,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 233,
                              "end": 234,
                              "value": 0,
                              "raw": "0"
                            }
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 239,
                        "end": 244,
                        "typeName": {
                          "type": "Identifier",
                          "start": 239,
                          "end": 244,
                          "name": "const",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
              "init": {
                "type": "ArrayExpression",
                "start": 248,
                "end": 250,
                "elements": []
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 256,
          "end": 272,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 262,
              "end": 271,
              "id": {
                "type": "Identifier",
                "start": 262,
                "end": 267,
                "name": "bb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 264,
                  "end": 267,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 266,
                    "end": 267,
                    "literal": {
                      "type": "Literal",
                      "start": 266,
                      "end": 267,
                      "value": 9,
                      "raw": "9"
                    }
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Identifier",
                "start": 270,
                "end": 271,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 275,
      "end": 383,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 281,
          "end": 302,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 285,
              "end": 301,
              "id": {
                "type": "Identifier",
                "start": 285,
                "end": 297,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 286,
                  "end": 297,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 288,
                    "end": 297,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 288,
                        "end": 289,
                        "literal": {
                          "type": "Literal",
                          "start": 288,
                          "end": 289,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 292,
                        "end": 293,
                        "literal": {
                          "type": "Literal",
                          "start": 292,
                          "end": 293,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 296,
                        "end": 297,
                        "literal": {
                          "type": "Literal",
                          "start": 296,
                          "end": 297,
                          "value": 2,
                          "raw": "2"
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 300,
                "end": 301,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 307,
          "end": 356,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 313,
              "end": 355,
              "id": {
                "type": "ArrayPattern",
                "start": 313,
                "end": 350,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 314,
                    "end": 349,
                    "left": {
                      "type": "ObjectPattern",
                      "start": 314,
                      "end": 324,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 316,
                          "end": 322,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "Identifier",
                            "start": 317,
                            "end": 318,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 321,
                            "end": 322,
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
                      "type": "TSAsExpression",
                      "start": 327,
                      "end": 349,
                      "expression": {
                        "type": "ArrayExpression",
                        "start": 327,
                        "end": 340,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 328,
                            "end": 329,
                            "value": 9,
                            "raw": "9"
                          },
                          {
                            "type": "AssignmentExpression",
                            "start": 331,
                            "end": 336,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 331,
                              "end": 332,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 335,
                              "end": 336,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          {
                            "type": "Literal",
                            "start": 338,
                            "end": 339,
                            "value": 5,
                            "raw": "5"
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 344,
                        "end": 349,
                        "typeName": {
                          "type": "Identifier",
                          "start": 344,
                          "end": 349,
                          "name": "const",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
              "init": {
                "type": "ArrayExpression",
                "start": 353,
                "end": 355,
                "elements": []
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 361,
          "end": 381,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 367,
              "end": 380,
              "id": {
                "type": "Identifier",
                "start": 367,
                "end": 376,
                "name": "bb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 369,
                  "end": 376,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 371,
                    "end": 376,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 371,
                        "end": 372,
                        "literal": {
                          "type": "Literal",
                          "start": 371,
                          "end": 372,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 375,
                        "end": 376,
                        "literal": {
                          "type": "Literal",
                          "start": 375,
                          "end": 376,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Identifier",
                "start": 379,
                "end": 380,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 384,
      "end": 502,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 390,
          "end": 407,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 394,
              "end": 406,
              "id": {
                "type": "Identifier",
                "start": 394,
                "end": 402,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 395,
                  "end": 402,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 397,
                    "end": 402,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 397,
                        "end": 398,
                        "literal": {
                          "type": "Literal",
                          "start": 397,
                          "end": 398,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 401,
                        "end": 402,
                        "literal": {
                          "type": "Literal",
                          "start": 401,
                          "end": 402,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 405,
                "end": 406,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 412,
          "end": 475,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 418,
              "end": 474,
              "id": {
                "type": "ArrayPattern",
                "start": 418,
                "end": 454,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 419,
                    "end": 453,
                    "left": {
                      "type": "ObjectPattern",
                      "start": 419,
                      "end": 435,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 421,
                          "end": 433,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "AssignmentExpression",
                            "start": 423,
                            "end": 428,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 423,
                              "end": 424,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 427,
                              "end": 428,
                              "value": 1,
                              "raw": "1"
                            }
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 432,
                            "end": 433,
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
                      "type": "TSAsExpression",
                      "start": 438,
                      "end": 453,
                      "expression": {
                        "type": "ArrayExpression",
                        "start": 438,
                        "end": 444,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 439,
                            "end": 440,
                            "value": 9,
                            "raw": "9"
                          },
                          {
                            "type": "Identifier",
                            "start": 442,
                            "end": 443,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 448,
                        "end": 453,
                        "typeName": {
                          "type": "Identifier",
                          "start": 448,
                          "end": 453,
                          "name": "const",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
              "init": {
                "type": "ArrayExpression",
                "start": 457,
                "end": 474,
                "elements": [
                  {
                    "type": "TSAsExpression",
                    "start": 458,
                    "end": 473,
                    "expression": {
                      "type": "ArrayExpression",
                      "start": 458,
                      "end": 464,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 459,
                          "end": 460,
                          "value": 9,
                          "raw": "9"
                        },
                        {
                          "type": "Literal",
                          "start": 462,
                          "end": 463,
                          "value": 8,
                          "raw": "8"
                        }
                      ]
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 468,
                      "end": 473,
                      "typeName": {
                        "type": "Identifier",
                        "start": 468,
                        "end": 473,
                        "name": "const",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 480,
          "end": 500,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 486,
              "end": 499,
              "id": {
                "type": "Identifier",
                "start": 486,
                "end": 495,
                "name": "bb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 488,
                  "end": 495,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 490,
                    "end": 495,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 490,
                        "end": 491,
                        "literal": {
                          "type": "Literal",
                          "start": 490,
                          "end": 491,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 494,
                        "end": 495,
                        "literal": {
                          "type": "Literal",
                          "start": 494,
                          "end": 495,
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Identifier",
                "start": 498,
                "end": 499,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 503,
      "end": 619,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 509,
          "end": 526,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 513,
              "end": 525,
              "id": {
                "type": "Identifier",
                "start": 513,
                "end": 521,
                "name": "a",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 514,
                  "end": 521,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 516,
                    "end": 521,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 516,
                        "end": 517,
                        "literal": {
                          "type": "Literal",
                          "start": 516,
                          "end": 517,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 520,
                        "end": 521,
                        "literal": {
                          "type": "Literal",
                          "start": 520,
                          "end": 521,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Literal",
                "start": 524,
                "end": 525,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "kind": "let",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 531,
          "end": 592,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 537,
              "end": 591,
              "id": {
                "type": "ArrayPattern",
                "start": 537,
                "end": 571,
                "elements": [
                  {
                    "type": "AssignmentPattern",
                    "start": 538,
                    "end": 570,
                    "left": {
                      "type": "ObjectPattern",
                      "start": 538,
                      "end": 548,
                      "properties": [
                        {
                          "type": "Property",
                          "start": 540,
                          "end": 546,
                          "method": false,
                          "shorthand": false,
                          "computed": true,
                          "key": {
                            "type": "Identifier",
                            "start": 541,
                            "end": 542,
                            "name": "a",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 545,
                            "end": 546,
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
                      "type": "TSAsExpression",
                      "start": 551,
                      "end": 570,
                      "expression": {
                        "type": "ArrayExpression",
                        "start": 551,
                        "end": 561,
                        "elements": [
                          {
                            "type": "AssignmentExpression",
                            "start": 552,
                            "end": 557,
                            "operator": "=",
                            "left": {
                              "type": "Identifier",
                              "start": 552,
                              "end": 553,
                              "name": "a",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "right": {
                              "type": "Literal",
                              "start": 556,
                              "end": 557,
                              "value": 0,
                              "raw": "0"
                            }
                          },
                          {
                            "type": "Literal",
                            "start": 559,
                            "end": 560,
                            "value": 9,
                            "raw": "9"
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 565,
                        "end": 570,
                        "typeName": {
                          "type": "Identifier",
                          "start": 565,
                          "end": 570,
                          "name": "const",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeArguments": null
                      }
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
              "init": {
                "type": "ArrayExpression",
                "start": 574,
                "end": 591,
                "elements": [
                  {
                    "type": "TSAsExpression",
                    "start": 575,
                    "end": 590,
                    "expression": {
                      "type": "ArrayExpression",
                      "start": 575,
                      "end": 581,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 576,
                          "end": 577,
                          "value": 8,
                          "raw": "8"
                        },
                        {
                          "type": "Literal",
                          "start": 579,
                          "end": 580,
                          "value": 9,
                          "raw": "9"
                        }
                      ]
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 585,
                      "end": 590,
                      "typeName": {
                        "type": "Identifier",
                        "start": 585,
                        "end": 590,
                        "name": "const",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 597,
          "end": 617,
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 603,
              "end": 616,
              "id": {
                "type": "Identifier",
                "start": 603,
                "end": 612,
                "name": "bb",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 605,
                  "end": 612,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 607,
                    "end": 612,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 607,
                        "end": 608,
                        "literal": {
                          "type": "Literal",
                          "start": 607,
                          "end": 608,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 611,
                        "end": 612,
                        "literal": {
                          "type": "Literal",
                          "start": 611,
                          "end": 612,
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    ]
                  }
                },
                "decorators": [],
                "optional": false
              },
              "init": {
                "type": "Identifier",
                "start": 615,
                "end": 616,
                "name": "b",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "kind": "const",
          "declare": false
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
