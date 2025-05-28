__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 1767,
  "body": [
    {
      "type": "TSDeclareFunction",
      "start": 77,
      "end": 104,
      "id": {
        "type": "Identifier",
        "start": 94,
        "end": 95,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 97,
        "end": 103,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 99,
          "end": 103
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "BlockStatement",
      "start": 105,
      "end": 220,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 111,
          "end": 128,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 115,
              "end": 127,
              "id": {
                "type": "Identifier",
                "start": 115,
                "end": 123,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 116,
                  "end": 123,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 118,
                    "end": 123,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 118,
                        "end": 119,
                        "literal": {
                          "type": "Literal",
                          "start": 118,
                          "end": 119,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 122,
                        "end": 123,
                        "literal": {
                          "type": "Literal",
                          "start": 122,
                          "end": 123,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 126,
                "end": 127,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 133,
          "end": 150,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 137,
              "end": 149,
              "id": {
                "type": "Identifier",
                "start": 137,
                "end": 149,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 138,
                  "end": 149,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 140,
                    "end": 149,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 140,
                        "end": 141,
                        "literal": {
                          "type": "Literal",
                          "start": 140,
                          "end": 141,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 144,
                        "end": 145,
                        "literal": {
                          "type": "Literal",
                          "start": 144,
                          "end": 145,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 148,
                        "end": 149,
                        "literal": {
                          "type": "Literal",
                          "start": 148,
                          "end": 149,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 155,
          "end": 197,
          "expression": {
            "type": "AssignmentExpression",
            "start": 155,
            "end": 196,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 155,
              "end": 191,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 156,
                  "end": 190,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 156,
                    "end": 172,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 158,
                        "end": 170,
                        "kind": "init",
                        "key": {
                          "type": "AssignmentExpression",
                          "start": 160,
                          "end": 165,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 160,
                            "end": 161,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 164,
                            "end": 165,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 169,
                          "end": 170,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "start": 175,
                    "end": 190,
                    "expression": {
                      "type": "ArrayExpression",
                      "start": 175,
                      "end": 181,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 176,
                          "end": 177,
                          "value": 9,
                          "raw": "9"
                        },
                        {
                          "type": "Identifier",
                          "start": 179,
                          "end": 180,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 185,
                      "end": 190,
                      "typeName": {
                        "type": "Identifier",
                        "start": 185,
                        "end": 190,
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
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
              "start": 194,
              "end": 196,
              "elements": []
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 202,
          "end": 218,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 208,
              "end": 217,
              "id": {
                "type": "Identifier",
                "start": 208,
                "end": 213,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 210,
                  "end": 213,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 212,
                    "end": 213,
                    "literal": {
                      "type": "Literal",
                      "start": 212,
                      "end": 213,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 216,
                "end": 217,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 221,
      "end": 334,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 227,
          "end": 244,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 231,
              "end": 243,
              "id": {
                "type": "Identifier",
                "start": 231,
                "end": 239,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 232,
                  "end": 239,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 234,
                    "end": 239,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 234,
                        "end": 235,
                        "literal": {
                          "type": "Literal",
                          "start": 234,
                          "end": 235,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 238,
                        "end": 239,
                        "literal": {
                          "type": "Literal",
                          "start": 238,
                          "end": 239,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 242,
                "end": 243,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 249,
          "end": 266,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 253,
              "end": 265,
              "id": {
                "type": "Identifier",
                "start": 253,
                "end": 265,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 254,
                  "end": 265,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 256,
                    "end": 265,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 256,
                        "end": 257,
                        "literal": {
                          "type": "Literal",
                          "start": 256,
                          "end": 257,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 260,
                        "end": 261,
                        "literal": {
                          "type": "Literal",
                          "start": 260,
                          "end": 261,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 264,
                        "end": 265,
                        "literal": {
                          "type": "Literal",
                          "start": 264,
                          "end": 265,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 271,
          "end": 311,
          "expression": {
            "type": "AssignmentExpression",
            "start": 271,
            "end": 310,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 271,
              "end": 305,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 272,
                  "end": 304,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 272,
                    "end": 282,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 274,
                        "end": 280,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 275,
                          "end": 276,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 279,
                          "end": 280,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "start": 285,
                    "end": 304,
                    "expression": {
                      "type": "ArrayExpression",
                      "start": 285,
                      "end": 295,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 286,
                          "end": 287,
                          "value": 9,
                          "raw": "9"
                        },
                        {
                          "type": "AssignmentExpression",
                          "start": 289,
                          "end": 294,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 289,
                            "end": 290,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 293,
                            "end": 294,
                            "value": 0,
                            "raw": "0"
                          }
                        }
                      ]
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 299,
                      "end": 304,
                      "typeName": {
                        "type": "Identifier",
                        "start": 299,
                        "end": 304,
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
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
              "start": 308,
              "end": 310,
              "elements": []
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 316,
          "end": 332,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 322,
              "end": 331,
              "id": {
                "type": "Identifier",
                "start": 322,
                "end": 327,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 324,
                  "end": 327,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 326,
                    "end": 327,
                    "literal": {
                      "type": "Literal",
                      "start": 326,
                      "end": 327,
                      "value": 9,
                      "raw": "9"
                    }
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 330,
                "end": 331,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 335,
      "end": 473,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 341,
          "end": 358,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 345,
              "end": 357,
              "id": {
                "type": "Identifier",
                "start": 345,
                "end": 353,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 346,
                  "end": 353,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 348,
                    "end": 353,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 348,
                        "end": 349,
                        "literal": {
                          "type": "Literal",
                          "start": 348,
                          "end": 349,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 352,
                        "end": 353,
                        "literal": {
                          "type": "Literal",
                          "start": 352,
                          "end": 353,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 356,
                "end": 357,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 363,
          "end": 384,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 367,
              "end": 383,
              "id": {
                "type": "Identifier",
                "start": 367,
                "end": 383,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 368,
                  "end": 383,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 370,
                    "end": 383,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 370,
                        "end": 371,
                        "literal": {
                          "type": "Literal",
                          "start": 370,
                          "end": 371,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 374,
                        "end": 375,
                        "literal": {
                          "type": "Literal",
                          "start": 374,
                          "end": 375,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 378,
                        "end": 379,
                        "literal": {
                          "type": "Literal",
                          "start": 378,
                          "end": 379,
                          "value": 8,
                          "raw": "8"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 382,
                        "end": 383,
                        "literal": {
                          "type": "Literal",
                          "start": 382,
                          "end": 383,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 389,
          "end": 446,
          "expression": {
            "type": "AssignmentExpression",
            "start": 389,
            "end": 445,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 389,
              "end": 425,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 390,
                  "end": 424,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 390,
                    "end": 406,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 392,
                        "end": 404,
                        "kind": "init",
                        "key": {
                          "type": "AssignmentExpression",
                          "start": 394,
                          "end": 399,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 394,
                            "end": 395,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 398,
                            "end": 399,
                            "value": 1,
                            "raw": "1"
                          }
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 403,
                          "end": 404,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "start": 409,
                    "end": 424,
                    "expression": {
                      "type": "ArrayExpression",
                      "start": 409,
                      "end": 415,
                      "elements": [
                        {
                          "type": "Literal",
                          "start": 410,
                          "end": 411,
                          "value": 9,
                          "raw": "9"
                        },
                        {
                          "type": "Identifier",
                          "start": 413,
                          "end": 414,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ]
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 419,
                      "end": 424,
                      "typeName": {
                        "type": "Identifier",
                        "start": 419,
                        "end": 424,
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
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
              "start": 428,
              "end": 445,
              "elements": [
                {
                  "type": "TSAsExpression",
                  "start": 429,
                  "end": 444,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 429,
                    "end": 435,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 430,
                        "end": 431,
                        "value": 9,
                        "raw": "9"
                      },
                      {
                        "type": "Literal",
                        "start": 433,
                        "end": 434,
                        "value": 8,
                        "raw": "8"
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 439,
                    "end": 444,
                    "typeName": {
                      "type": "Identifier",
                      "start": 439,
                      "end": 444,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 451,
          "end": 471,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 457,
              "end": 470,
              "id": {
                "type": "Identifier",
                "start": 457,
                "end": 466,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 459,
                  "end": 466,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 461,
                    "end": 466,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 461,
                        "end": 462,
                        "literal": {
                          "type": "Literal",
                          "start": 461,
                          "end": 462,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 465,
                        "end": 466,
                        "literal": {
                          "type": "Literal",
                          "start": 465,
                          "end": 466,
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 469,
                "end": 470,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 474,
      "end": 610,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 480,
          "end": 497,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 484,
              "end": 496,
              "id": {
                "type": "Identifier",
                "start": 484,
                "end": 492,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 485,
                  "end": 492,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 487,
                    "end": 492,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 487,
                        "end": 488,
                        "literal": {
                          "type": "Literal",
                          "start": 487,
                          "end": 488,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 491,
                        "end": 492,
                        "literal": {
                          "type": "Literal",
                          "start": 491,
                          "end": 492,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 495,
                "end": 496,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 502,
          "end": 523,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 506,
              "end": 522,
              "id": {
                "type": "Identifier",
                "start": 506,
                "end": 522,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 507,
                  "end": 522,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 509,
                    "end": 522,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 509,
                        "end": 510,
                        "literal": {
                          "type": "Literal",
                          "start": 509,
                          "end": 510,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 513,
                        "end": 514,
                        "literal": {
                          "type": "Literal",
                          "start": 513,
                          "end": 514,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 517,
                        "end": 518,
                        "literal": {
                          "type": "Literal",
                          "start": 517,
                          "end": 518,
                          "value": 8,
                          "raw": "8"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 521,
                        "end": 522,
                        "literal": {
                          "type": "Literal",
                          "start": 521,
                          "end": 522,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 528,
          "end": 583,
          "expression": {
            "type": "AssignmentExpression",
            "start": 528,
            "end": 582,
            "operator": "=",
            "left": {
              "type": "ArrayPattern",
              "start": 528,
              "end": 562,
              "decorators": [],
              "elements": [
                {
                  "type": "AssignmentPattern",
                  "start": 529,
                  "end": 561,
                  "decorators": [],
                  "left": {
                    "type": "ObjectPattern",
                    "start": 529,
                    "end": 539,
                    "decorators": [],
                    "properties": [
                      {
                        "type": "Property",
                        "start": 531,
                        "end": 537,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 532,
                          "end": 533,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Identifier",
                          "start": 536,
                          "end": 537,
                          "decorators": [],
                          "name": "b",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": true,
                        "optional": false
                      }
                    ],
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "TSAsExpression",
                    "start": 542,
                    "end": 561,
                    "expression": {
                      "type": "ArrayExpression",
                      "start": 542,
                      "end": 552,
                      "elements": [
                        {
                          "type": "AssignmentExpression",
                          "start": 543,
                          "end": 548,
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "start": 543,
                            "end": 544,
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "right": {
                            "type": "Literal",
                            "start": 547,
                            "end": 548,
                            "value": 0,
                            "raw": "0"
                          }
                        },
                        {
                          "type": "Literal",
                          "start": 550,
                          "end": 551,
                          "value": 9,
                          "raw": "9"
                        }
                      ]
                    },
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 556,
                      "end": 561,
                      "typeName": {
                        "type": "Identifier",
                        "start": 556,
                        "end": 561,
                        "decorators": [],
                        "name": "const",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
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
              "start": 565,
              "end": 582,
              "elements": [
                {
                  "type": "TSAsExpression",
                  "start": 566,
                  "end": 581,
                  "expression": {
                    "type": "ArrayExpression",
                    "start": 566,
                    "end": 572,
                    "elements": [
                      {
                        "type": "Literal",
                        "start": 567,
                        "end": 568,
                        "value": 8,
                        "raw": "8"
                      },
                      {
                        "type": "Literal",
                        "start": 570,
                        "end": 571,
                        "value": 9,
                        "raw": "9"
                      }
                    ]
                  },
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 576,
                    "end": 581,
                    "typeName": {
                      "type": "Identifier",
                      "start": 576,
                      "end": 581,
                      "decorators": [],
                      "name": "const",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 588,
          "end": 608,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 594,
              "end": 607,
              "id": {
                "type": "Identifier",
                "start": 594,
                "end": 603,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 596,
                  "end": 603,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 598,
                    "end": 603,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 598,
                        "end": 599,
                        "literal": {
                          "type": "Literal",
                          "start": 598,
                          "end": 599,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 602,
                        "end": 603,
                        "literal": {
                          "type": "Literal",
                          "start": 602,
                          "end": 603,
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 606,
                "end": 607,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 663,
      "end": 783,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 669,
          "end": 686,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 673,
              "end": 685,
              "id": {
                "type": "Identifier",
                "start": 673,
                "end": 681,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 674,
                  "end": 681,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 676,
                    "end": 681,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 676,
                        "end": 677,
                        "literal": {
                          "type": "Literal",
                          "start": 676,
                          "end": 677,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 680,
                        "end": 681,
                        "literal": {
                          "type": "Literal",
                          "start": 680,
                          "end": 681,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 684,
                "end": 685,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 691,
          "end": 708,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 695,
              "end": 707,
              "id": {
                "type": "Identifier",
                "start": 695,
                "end": 707,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 696,
                  "end": 707,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 698,
                    "end": 707,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 698,
                        "end": 699,
                        "literal": {
                          "type": "Literal",
                          "start": 698,
                          "end": 699,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 702,
                        "end": 703,
                        "literal": {
                          "type": "Literal",
                          "start": 702,
                          "end": 703,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 706,
                        "end": 707,
                        "literal": {
                          "type": "Literal",
                          "start": 706,
                          "end": 707,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 713,
          "end": 760,
          "expression": {
            "type": "SequenceExpression",
            "start": 713,
            "end": 759,
            "expressions": [
              {
                "type": "AssignmentExpression",
                "start": 713,
                "end": 754,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 713,
                  "end": 749,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 714,
                      "end": 748,
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "start": 714,
                        "end": 730,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 716,
                            "end": 728,
                            "kind": "init",
                            "key": {
                              "type": "AssignmentExpression",
                              "start": 718,
                              "end": 723,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 718,
                                "end": 719,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 722,
                                "end": 723,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 727,
                              "end": 728,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "start": 733,
                        "end": 748,
                        "expression": {
                          "type": "ArrayExpression",
                          "start": 733,
                          "end": 739,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 734,
                              "end": 735,
                              "value": 9,
                              "raw": "9"
                            },
                            {
                              "type": "Identifier",
                              "start": 737,
                              "end": 738,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 743,
                          "end": 748,
                          "typeName": {
                            "type": "Identifier",
                            "start": 743,
                            "end": 748,
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                  "start": 752,
                  "end": 754,
                  "elements": []
                }
              },
              {
                "type": "CallExpression",
                "start": 756,
                "end": 759,
                "callee": {
                  "type": "Identifier",
                  "start": 756,
                  "end": 757,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            ]
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 765,
          "end": 781,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 771,
              "end": 780,
              "id": {
                "type": "Identifier",
                "start": 771,
                "end": 776,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 773,
                  "end": 776,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 775,
                    "end": 776,
                    "literal": {
                      "type": "Literal",
                      "start": 775,
                      "end": 776,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 779,
                "end": 780,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 784,
      "end": 902,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 790,
          "end": 807,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 794,
              "end": 806,
              "id": {
                "type": "Identifier",
                "start": 794,
                "end": 802,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 795,
                  "end": 802,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 797,
                    "end": 802,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 797,
                        "end": 798,
                        "literal": {
                          "type": "Literal",
                          "start": 797,
                          "end": 798,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 801,
                        "end": 802,
                        "literal": {
                          "type": "Literal",
                          "start": 801,
                          "end": 802,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 805,
                "end": 806,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 812,
          "end": 829,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 816,
              "end": 828,
              "id": {
                "type": "Identifier",
                "start": 816,
                "end": 828,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 817,
                  "end": 828,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 819,
                    "end": 828,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 819,
                        "end": 820,
                        "literal": {
                          "type": "Literal",
                          "start": 819,
                          "end": 820,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 823,
                        "end": 824,
                        "literal": {
                          "type": "Literal",
                          "start": 823,
                          "end": 824,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 827,
                        "end": 828,
                        "literal": {
                          "type": "Literal",
                          "start": 827,
                          "end": 828,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 834,
          "end": 879,
          "expression": {
            "type": "SequenceExpression",
            "start": 834,
            "end": 878,
            "expressions": [
              {
                "type": "AssignmentExpression",
                "start": 834,
                "end": 873,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 834,
                  "end": 868,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 835,
                      "end": 867,
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "start": 835,
                        "end": 845,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 837,
                            "end": 843,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 838,
                              "end": 839,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 842,
                              "end": 843,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "start": 848,
                        "end": 867,
                        "expression": {
                          "type": "ArrayExpression",
                          "start": 848,
                          "end": 858,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 849,
                              "end": 850,
                              "value": 9,
                              "raw": "9"
                            },
                            {
                              "type": "AssignmentExpression",
                              "start": 852,
                              "end": 857,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 852,
                                "end": 853,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 856,
                                "end": 857,
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 862,
                          "end": 867,
                          "typeName": {
                            "type": "Identifier",
                            "start": 862,
                            "end": 867,
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                  "start": 871,
                  "end": 873,
                  "elements": []
                }
              },
              {
                "type": "CallExpression",
                "start": 875,
                "end": 878,
                "callee": {
                  "type": "Identifier",
                  "start": 875,
                  "end": 876,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            ]
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 884,
          "end": 900,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 890,
              "end": 899,
              "id": {
                "type": "Identifier",
                "start": 890,
                "end": 895,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 892,
                  "end": 895,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 894,
                    "end": 895,
                    "literal": {
                      "type": "Literal",
                      "start": 894,
                      "end": 895,
                      "value": 9,
                      "raw": "9"
                    }
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 898,
                "end": 899,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 903,
      "end": 1046,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 909,
          "end": 926,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 913,
              "end": 925,
              "id": {
                "type": "Identifier",
                "start": 913,
                "end": 921,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 914,
                  "end": 921,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 916,
                    "end": 921,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 916,
                        "end": 917,
                        "literal": {
                          "type": "Literal",
                          "start": 916,
                          "end": 917,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 920,
                        "end": 921,
                        "literal": {
                          "type": "Literal",
                          "start": 920,
                          "end": 921,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 924,
                "end": 925,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 931,
          "end": 952,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 935,
              "end": 951,
              "id": {
                "type": "Identifier",
                "start": 935,
                "end": 951,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 936,
                  "end": 951,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 938,
                    "end": 951,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 938,
                        "end": 939,
                        "literal": {
                          "type": "Literal",
                          "start": 938,
                          "end": 939,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 942,
                        "end": 943,
                        "literal": {
                          "type": "Literal",
                          "start": 942,
                          "end": 943,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 946,
                        "end": 947,
                        "literal": {
                          "type": "Literal",
                          "start": 946,
                          "end": 947,
                          "value": 8,
                          "raw": "8"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 950,
                        "end": 951,
                        "literal": {
                          "type": "Literal",
                          "start": 950,
                          "end": 951,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 957,
          "end": 1019,
          "expression": {
            "type": "SequenceExpression",
            "start": 957,
            "end": 1018,
            "expressions": [
              {
                "type": "AssignmentExpression",
                "start": 957,
                "end": 1013,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 957,
                  "end": 993,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 958,
                      "end": 992,
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "start": 958,
                        "end": 974,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 960,
                            "end": 972,
                            "kind": "init",
                            "key": {
                              "type": "AssignmentExpression",
                              "start": 962,
                              "end": 967,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 962,
                                "end": 963,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 966,
                                "end": 967,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 971,
                              "end": 972,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "start": 977,
                        "end": 992,
                        "expression": {
                          "type": "ArrayExpression",
                          "start": 977,
                          "end": 983,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 978,
                              "end": 979,
                              "value": 9,
                              "raw": "9"
                            },
                            {
                              "type": "Identifier",
                              "start": 981,
                              "end": 982,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 987,
                          "end": 992,
                          "typeName": {
                            "type": "Identifier",
                            "start": 987,
                            "end": 992,
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                  "start": 996,
                  "end": 1013,
                  "elements": [
                    {
                      "type": "TSAsExpression",
                      "start": 997,
                      "end": 1012,
                      "expression": {
                        "type": "ArrayExpression",
                        "start": 997,
                        "end": 1003,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 998,
                            "end": 999,
                            "value": 9,
                            "raw": "9"
                          },
                          {
                            "type": "Literal",
                            "start": 1001,
                            "end": 1002,
                            "value": 8,
                            "raw": "8"
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1007,
                        "end": 1012,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1007,
                          "end": 1012,
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              },
              {
                "type": "CallExpression",
                "start": 1015,
                "end": 1018,
                "callee": {
                  "type": "Identifier",
                  "start": 1015,
                  "end": 1016,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            ]
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1024,
          "end": 1044,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1030,
              "end": 1043,
              "id": {
                "type": "Identifier",
                "start": 1030,
                "end": 1039,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1032,
                  "end": 1039,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1034,
                    "end": 1039,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1034,
                        "end": 1035,
                        "literal": {
                          "type": "Literal",
                          "start": 1034,
                          "end": 1035,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1038,
                        "end": 1039,
                        "literal": {
                          "type": "Literal",
                          "start": 1038,
                          "end": 1039,
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 1042,
                "end": 1043,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1047,
      "end": 1188,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1053,
          "end": 1070,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1057,
              "end": 1069,
              "id": {
                "type": "Identifier",
                "start": 1057,
                "end": 1065,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1058,
                  "end": 1065,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1060,
                    "end": 1065,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1060,
                        "end": 1061,
                        "literal": {
                          "type": "Literal",
                          "start": 1060,
                          "end": 1061,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1064,
                        "end": 1065,
                        "literal": {
                          "type": "Literal",
                          "start": 1064,
                          "end": 1065,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 1068,
                "end": 1069,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1075,
          "end": 1096,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1079,
              "end": 1095,
              "id": {
                "type": "Identifier",
                "start": 1079,
                "end": 1095,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1080,
                  "end": 1095,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1082,
                    "end": 1095,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1082,
                        "end": 1083,
                        "literal": {
                          "type": "Literal",
                          "start": 1082,
                          "end": 1083,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1086,
                        "end": 1087,
                        "literal": {
                          "type": "Literal",
                          "start": 1086,
                          "end": 1087,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1090,
                        "end": 1091,
                        "literal": {
                          "type": "Literal",
                          "start": 1090,
                          "end": 1091,
                          "value": 8,
                          "raw": "8"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1094,
                        "end": 1095,
                        "literal": {
                          "type": "Literal",
                          "start": 1094,
                          "end": 1095,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1101,
          "end": 1161,
          "expression": {
            "type": "SequenceExpression",
            "start": 1101,
            "end": 1160,
            "expressions": [
              {
                "type": "AssignmentExpression",
                "start": 1101,
                "end": 1155,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 1101,
                  "end": 1135,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1102,
                      "end": 1134,
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1102,
                        "end": 1112,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1104,
                            "end": 1110,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1105,
                              "end": 1106,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1109,
                              "end": 1110,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "start": 1115,
                        "end": 1134,
                        "expression": {
                          "type": "ArrayExpression",
                          "start": 1115,
                          "end": 1125,
                          "elements": [
                            {
                              "type": "AssignmentExpression",
                              "start": 1116,
                              "end": 1121,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 1116,
                                "end": 1117,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1120,
                                "end": 1121,
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 1123,
                              "end": 1124,
                              "value": 9,
                              "raw": "9"
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1129,
                          "end": 1134,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1129,
                            "end": 1134,
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                  "start": 1138,
                  "end": 1155,
                  "elements": [
                    {
                      "type": "TSAsExpression",
                      "start": 1139,
                      "end": 1154,
                      "expression": {
                        "type": "ArrayExpression",
                        "start": 1139,
                        "end": 1145,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 1140,
                            "end": 1141,
                            "value": 8,
                            "raw": "8"
                          },
                          {
                            "type": "Literal",
                            "start": 1143,
                            "end": 1144,
                            "value": 9,
                            "raw": "9"
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1149,
                        "end": 1154,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1149,
                          "end": 1154,
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              },
              {
                "type": "CallExpression",
                "start": 1157,
                "end": 1160,
                "callee": {
                  "type": "Identifier",
                  "start": 1157,
                  "end": 1158,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              }
            ]
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1166,
          "end": 1186,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1172,
              "end": 1185,
              "id": {
                "type": "Identifier",
                "start": 1172,
                "end": 1181,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1174,
                  "end": 1181,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1176,
                    "end": 1181,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1176,
                        "end": 1177,
                        "literal": {
                          "type": "Literal",
                          "start": 1176,
                          "end": 1177,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1180,
                        "end": 1181,
                        "literal": {
                          "type": "Literal",
                          "start": 1180,
                          "end": 1181,
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 1184,
                "end": 1185,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1242,
      "end": 1362,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1248,
          "end": 1265,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1252,
              "end": 1264,
              "id": {
                "type": "Identifier",
                "start": 1252,
                "end": 1260,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1253,
                  "end": 1260,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1255,
                    "end": 1260,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1255,
                        "end": 1256,
                        "literal": {
                          "type": "Literal",
                          "start": 1255,
                          "end": 1256,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1259,
                        "end": 1260,
                        "literal": {
                          "type": "Literal",
                          "start": 1259,
                          "end": 1260,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 1263,
                "end": 1264,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1270,
          "end": 1287,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1274,
              "end": 1286,
              "id": {
                "type": "Identifier",
                "start": 1274,
                "end": 1286,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1275,
                  "end": 1286,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1277,
                    "end": 1286,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1277,
                        "end": 1278,
                        "literal": {
                          "type": "Literal",
                          "start": 1277,
                          "end": 1278,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1281,
                        "end": 1282,
                        "literal": {
                          "type": "Literal",
                          "start": 1281,
                          "end": 1282,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1285,
                        "end": 1286,
                        "literal": {
                          "type": "Literal",
                          "start": 1285,
                          "end": 1286,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1292,
          "end": 1339,
          "expression": {
            "type": "SequenceExpression",
            "start": 1292,
            "end": 1338,
            "expressions": [
              {
                "type": "CallExpression",
                "start": 1292,
                "end": 1295,
                "callee": {
                  "type": "Identifier",
                  "start": 1292,
                  "end": 1293,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              {
                "type": "AssignmentExpression",
                "start": 1297,
                "end": 1338,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 1297,
                  "end": 1333,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1298,
                      "end": 1332,
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1298,
                        "end": 1314,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1300,
                            "end": 1312,
                            "kind": "init",
                            "key": {
                              "type": "AssignmentExpression",
                              "start": 1302,
                              "end": 1307,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 1302,
                                "end": 1303,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1306,
                                "end": 1307,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1311,
                              "end": 1312,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "start": 1317,
                        "end": 1332,
                        "expression": {
                          "type": "ArrayExpression",
                          "start": 1317,
                          "end": 1323,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 1318,
                              "end": 1319,
                              "value": 9,
                              "raw": "9"
                            },
                            {
                              "type": "Identifier",
                              "start": 1321,
                              "end": 1322,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1327,
                          "end": 1332,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1327,
                            "end": 1332,
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                  "start": 1336,
                  "end": 1338,
                  "elements": []
                }
              }
            ]
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1344,
          "end": 1360,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1350,
              "end": 1359,
              "id": {
                "type": "Identifier",
                "start": 1350,
                "end": 1355,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1352,
                  "end": 1355,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1354,
                    "end": 1355,
                    "literal": {
                      "type": "Literal",
                      "start": 1354,
                      "end": 1355,
                      "value": 0,
                      "raw": "0"
                    }
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 1358,
                "end": 1359,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1363,
      "end": 1481,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1369,
          "end": 1386,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1373,
              "end": 1385,
              "id": {
                "type": "Identifier",
                "start": 1373,
                "end": 1381,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1374,
                  "end": 1381,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1376,
                    "end": 1381,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1376,
                        "end": 1377,
                        "literal": {
                          "type": "Literal",
                          "start": 1376,
                          "end": 1377,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1380,
                        "end": 1381,
                        "literal": {
                          "type": "Literal",
                          "start": 1380,
                          "end": 1381,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 1384,
                "end": 1385,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1391,
          "end": 1408,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1395,
              "end": 1407,
              "id": {
                "type": "Identifier",
                "start": 1395,
                "end": 1407,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1396,
                  "end": 1407,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1398,
                    "end": 1407,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1398,
                        "end": 1399,
                        "literal": {
                          "type": "Literal",
                          "start": 1398,
                          "end": 1399,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1402,
                        "end": 1403,
                        "literal": {
                          "type": "Literal",
                          "start": 1402,
                          "end": 1403,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1406,
                        "end": 1407,
                        "literal": {
                          "type": "Literal",
                          "start": 1406,
                          "end": 1407,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1413,
          "end": 1458,
          "expression": {
            "type": "SequenceExpression",
            "start": 1413,
            "end": 1457,
            "expressions": [
              {
                "type": "CallExpression",
                "start": 1413,
                "end": 1416,
                "callee": {
                  "type": "Identifier",
                  "start": 1413,
                  "end": 1414,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              {
                "type": "AssignmentExpression",
                "start": 1418,
                "end": 1457,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 1418,
                  "end": 1452,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1419,
                      "end": 1451,
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1419,
                        "end": 1429,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1421,
                            "end": 1427,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1422,
                              "end": 1423,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1426,
                              "end": 1427,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "start": 1432,
                        "end": 1451,
                        "expression": {
                          "type": "ArrayExpression",
                          "start": 1432,
                          "end": 1442,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 1433,
                              "end": 1434,
                              "value": 9,
                              "raw": "9"
                            },
                            {
                              "type": "AssignmentExpression",
                              "start": 1436,
                              "end": 1441,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 1436,
                                "end": 1437,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1440,
                                "end": 1441,
                                "value": 0,
                                "raw": "0"
                              }
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1446,
                          "end": 1451,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1446,
                            "end": 1451,
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                  "start": 1455,
                  "end": 1457,
                  "elements": []
                }
              }
            ]
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1463,
          "end": 1479,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1469,
              "end": 1478,
              "id": {
                "type": "Identifier",
                "start": 1469,
                "end": 1474,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1471,
                  "end": 1474,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 1473,
                    "end": 1474,
                    "literal": {
                      "type": "Literal",
                      "start": 1473,
                      "end": 1474,
                      "value": 9,
                      "raw": "9"
                    }
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 1477,
                "end": 1478,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1482,
      "end": 1625,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1488,
          "end": 1505,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1492,
              "end": 1504,
              "id": {
                "type": "Identifier",
                "start": 1492,
                "end": 1500,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1493,
                  "end": 1500,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1495,
                    "end": 1500,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1495,
                        "end": 1496,
                        "literal": {
                          "type": "Literal",
                          "start": 1495,
                          "end": 1496,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1499,
                        "end": 1500,
                        "literal": {
                          "type": "Literal",
                          "start": 1499,
                          "end": 1500,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 1503,
                "end": 1504,
                "value": 0,
                "raw": "0"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1510,
          "end": 1531,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1514,
              "end": 1530,
              "id": {
                "type": "Identifier",
                "start": 1514,
                "end": 1530,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1515,
                  "end": 1530,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1517,
                    "end": 1530,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1517,
                        "end": 1518,
                        "literal": {
                          "type": "Literal",
                          "start": 1517,
                          "end": 1518,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1521,
                        "end": 1522,
                        "literal": {
                          "type": "Literal",
                          "start": 1521,
                          "end": 1522,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1525,
                        "end": 1526,
                        "literal": {
                          "type": "Literal",
                          "start": 1525,
                          "end": 1526,
                          "value": 8,
                          "raw": "8"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1529,
                        "end": 1530,
                        "literal": {
                          "type": "Literal",
                          "start": 1529,
                          "end": 1530,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1536,
          "end": 1598,
          "expression": {
            "type": "SequenceExpression",
            "start": 1536,
            "end": 1597,
            "expressions": [
              {
                "type": "CallExpression",
                "start": 1536,
                "end": 1539,
                "callee": {
                  "type": "Identifier",
                  "start": 1536,
                  "end": 1537,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              {
                "type": "AssignmentExpression",
                "start": 1541,
                "end": 1597,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 1541,
                  "end": 1577,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1542,
                      "end": 1576,
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1542,
                        "end": 1558,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1544,
                            "end": 1556,
                            "kind": "init",
                            "key": {
                              "type": "AssignmentExpression",
                              "start": 1546,
                              "end": 1551,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 1546,
                                "end": 1547,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1550,
                                "end": 1551,
                                "value": 1,
                                "raw": "1"
                              }
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1555,
                              "end": 1556,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "start": 1561,
                        "end": 1576,
                        "expression": {
                          "type": "ArrayExpression",
                          "start": 1561,
                          "end": 1567,
                          "elements": [
                            {
                              "type": "Literal",
                              "start": 1562,
                              "end": 1563,
                              "value": 9,
                              "raw": "9"
                            },
                            {
                              "type": "Identifier",
                              "start": 1565,
                              "end": 1566,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1571,
                          "end": 1576,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1571,
                            "end": 1576,
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                  "start": 1580,
                  "end": 1597,
                  "elements": [
                    {
                      "type": "TSAsExpression",
                      "start": 1581,
                      "end": 1596,
                      "expression": {
                        "type": "ArrayExpression",
                        "start": 1581,
                        "end": 1587,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 1582,
                            "end": 1583,
                            "value": 9,
                            "raw": "9"
                          },
                          {
                            "type": "Literal",
                            "start": 1585,
                            "end": 1586,
                            "value": 8,
                            "raw": "8"
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1591,
                        "end": 1596,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1591,
                          "end": 1596,
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              }
            ]
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1603,
          "end": 1623,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1609,
              "end": 1622,
              "id": {
                "type": "Identifier",
                "start": 1609,
                "end": 1618,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1611,
                  "end": 1618,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1613,
                    "end": 1618,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1613,
                        "end": 1614,
                        "literal": {
                          "type": "Literal",
                          "start": 1613,
                          "end": 1614,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1617,
                        "end": 1618,
                        "literal": {
                          "type": "Literal",
                          "start": 1617,
                          "end": 1618,
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 1621,
                "end": 1622,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1626,
      "end": 1767,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1632,
          "end": 1649,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1636,
              "end": 1648,
              "id": {
                "type": "Identifier",
                "start": 1636,
                "end": 1644,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1637,
                  "end": 1644,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1639,
                    "end": 1644,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1639,
                        "end": 1640,
                        "literal": {
                          "type": "Literal",
                          "start": 1639,
                          "end": 1640,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1643,
                        "end": 1644,
                        "literal": {
                          "type": "Literal",
                          "start": 1643,
                          "end": 1644,
                          "value": 1,
                          "raw": "1"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Literal",
                "start": 1647,
                "end": 1648,
                "value": 1,
                "raw": "1"
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1654,
          "end": 1675,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1658,
              "end": 1674,
              "id": {
                "type": "Identifier",
                "start": 1658,
                "end": 1674,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1659,
                  "end": 1674,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1661,
                    "end": 1674,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1661,
                        "end": 1662,
                        "literal": {
                          "type": "Literal",
                          "start": 1661,
                          "end": 1662,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1665,
                        "end": 1666,
                        "literal": {
                          "type": "Literal",
                          "start": 1665,
                          "end": 1666,
                          "value": 1,
                          "raw": "1"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1669,
                        "end": 1670,
                        "literal": {
                          "type": "Literal",
                          "start": 1669,
                          "end": 1670,
                          "value": 8,
                          "raw": "8"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1673,
                        "end": 1674,
                        "literal": {
                          "type": "Literal",
                          "start": 1673,
                          "end": 1674,
                          "value": 9,
                          "raw": "9"
                        }
                      }
                    ]
                  }
                }
              },
              "init": null,
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "ExpressionStatement",
          "start": 1680,
          "end": 1740,
          "expression": {
            "type": "SequenceExpression",
            "start": 1680,
            "end": 1739,
            "expressions": [
              {
                "type": "CallExpression",
                "start": 1680,
                "end": 1683,
                "callee": {
                  "type": "Identifier",
                  "start": 1680,
                  "end": 1681,
                  "decorators": [],
                  "name": "f",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              {
                "type": "AssignmentExpression",
                "start": 1685,
                "end": 1739,
                "operator": "=",
                "left": {
                  "type": "ArrayPattern",
                  "start": 1685,
                  "end": 1719,
                  "decorators": [],
                  "elements": [
                    {
                      "type": "AssignmentPattern",
                      "start": 1686,
                      "end": 1718,
                      "decorators": [],
                      "left": {
                        "type": "ObjectPattern",
                        "start": 1686,
                        "end": 1696,
                        "decorators": [],
                        "properties": [
                          {
                            "type": "Property",
                            "start": 1688,
                            "end": 1694,
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "start": 1689,
                              "end": 1690,
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "value": {
                              "type": "Identifier",
                              "start": 1693,
                              "end": 1694,
                              "decorators": [],
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": true,
                            "optional": false
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "right": {
                        "type": "TSAsExpression",
                        "start": 1699,
                        "end": 1718,
                        "expression": {
                          "type": "ArrayExpression",
                          "start": 1699,
                          "end": 1709,
                          "elements": [
                            {
                              "type": "AssignmentExpression",
                              "start": 1700,
                              "end": 1705,
                              "operator": "=",
                              "left": {
                                "type": "Identifier",
                                "start": 1700,
                                "end": 1701,
                                "decorators": [],
                                "name": "a",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "right": {
                                "type": "Literal",
                                "start": 1704,
                                "end": 1705,
                                "value": 0,
                                "raw": "0"
                              }
                            },
                            {
                              "type": "Literal",
                              "start": 1707,
                              "end": 1708,
                              "value": 9,
                              "raw": "9"
                            }
                          ]
                        },
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 1713,
                          "end": 1718,
                          "typeName": {
                            "type": "Identifier",
                            "start": 1713,
                            "end": 1718,
                            "decorators": [],
                            "name": "const",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "typeArguments": null
                        }
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
                  "start": 1722,
                  "end": 1739,
                  "elements": [
                    {
                      "type": "TSAsExpression",
                      "start": 1723,
                      "end": 1738,
                      "expression": {
                        "type": "ArrayExpression",
                        "start": 1723,
                        "end": 1729,
                        "elements": [
                          {
                            "type": "Literal",
                            "start": 1724,
                            "end": 1725,
                            "value": 8,
                            "raw": "8"
                          },
                          {
                            "type": "Literal",
                            "start": 1727,
                            "end": 1728,
                            "value": 9,
                            "raw": "9"
                          }
                        ]
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 1733,
                        "end": 1738,
                        "typeName": {
                          "type": "Identifier",
                          "start": 1733,
                          "end": 1738,
                          "decorators": [],
                          "name": "const",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeArguments": null
                      }
                    }
                  ]
                }
              }
            ]
          },
          "directive": null
        },
        {
          "type": "VariableDeclaration",
          "start": 1745,
          "end": 1765,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1751,
              "end": 1764,
              "id": {
                "type": "Identifier",
                "start": 1751,
                "end": 1760,
                "decorators": [],
                "name": "bb",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1753,
                  "end": 1760,
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "start": 1755,
                    "end": 1760,
                    "types": [
                      {
                        "type": "TSLiteralType",
                        "start": 1755,
                        "end": 1756,
                        "literal": {
                          "type": "Literal",
                          "start": 1755,
                          "end": 1756,
                          "value": 0,
                          "raw": "0"
                        }
                      },
                      {
                        "type": "TSLiteralType",
                        "start": 1759,
                        "end": 1760,
                        "literal": {
                          "type": "Literal",
                          "start": 1759,
                          "end": 1760,
                          "value": 8,
                          "raw": "8"
                        }
                      }
                    ]
                  }
                }
              },
              "init": {
                "type": "Identifier",
                "start": 1763,
                "end": 1764,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
