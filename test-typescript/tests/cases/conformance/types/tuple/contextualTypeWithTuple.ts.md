__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 1116,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 13,
      "end": 62,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 17,
          "end": 61,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 46,
            "decorators": [],
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 28,
              "end": 46,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 30,
                "end": 46,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 31,
                    "end": 37
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 39,
                    "end": 45
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 49,
            "end": 61,
            "elements": [
              {
                "type": "Literal",
                "start": 50,
                "end": 51,
                "raw": "5",
                "value": 5
              },
              {
                "type": "Literal",
                "start": 53,
                "end": 60,
                "raw": "\"hello\"",
                "value": "hello"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 63,
      "end": 117,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 67,
          "end": 116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 97,
            "decorators": [],
            "name": "numStrTuple2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 97,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 81,
                "end": 97,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 82,
                    "end": 88
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 90,
                    "end": 96
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 100,
            "end": 116,
            "elements": [
              {
                "type": "Literal",
                "start": 101,
                "end": 102,
                "raw": "5",
                "value": 5
              },
              {
                "type": "Literal",
                "start": 104,
                "end": 109,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "Literal",
                "start": 111,
                "end": 115,
                "raw": "true",
                "value": true
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 118,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 122,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 164,
            "decorators": [],
            "name": "numStrBoolTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 137,
              "end": 164,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 139,
                "end": 164,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 140,
                    "end": 146
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 148,
                    "end": 154
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 156,
                    "end": 163
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 167,
            "end": 183,
            "elements": [
              {
                "type": "Literal",
                "start": 168,
                "end": 169,
                "raw": "5",
                "value": 5
              },
              {
                "type": "Literal",
                "start": 171,
                "end": 176,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "Literal",
                "start": 178,
                "end": 182,
                "raw": "true",
                "value": true
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 185,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 247,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 225,
            "decorators": [],
            "name": "objNumTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 200,
              "end": 225,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 202,
                "end": 225,
                "elementTypes": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 203,
                    "end": 216,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 205,
                        "end": 214,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "readonly": false,
                        "static": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 206,
                          "end": 214,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 208,
                            "end": 214
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 218,
                    "end": 224
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 228,
            "end": 247,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 229,
                "end": 243,
                "properties": [
                  {
                    "type": "Property",
                    "start": 231,
                    "end": 241,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "method": false,
                    "optional": false,
                    "shorthand": false,
                    "value": {
                      "type": "Literal",
                      "start": 234,
                      "end": 241,
                      "raw": "\"world\"",
                      "value": "world"
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 245,
                "end": 246,
                "raw": "5",
                "value": 5
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 322,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 253,
          "end": 321,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 290,
            "decorators": [],
            "name": "strTupleTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 266,
              "end": 290,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 268,
                "end": 290,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 269,
                    "end": 275
                  },
                  {
                    "type": "TSTupleType",
                    "start": 277,
                    "end": 289,
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 278,
                        "end": 284
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 286,
                        "end": 288,
                        "members": []
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 293,
            "end": 321,
            "elements": [
              {
                "type": "Literal",
                "start": 294,
                "end": 299,
                "raw": "\"bar\"",
                "value": "bar"
              },
              {
                "type": "ArrayExpression",
                "start": 301,
                "end": 320,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 302,
                    "end": 303,
                    "raw": "5",
                    "value": 5
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 305,
                    "end": 319,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 307,
                        "end": 311,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 307,
                          "end": 308,
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 310,
                          "end": 311,
                          "raw": "1",
                          "value": 1
                        }
                      },
                      {
                        "type": "Property",
                        "start": 313,
                        "end": 317,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 314,
                          "decorators": [],
                          "name": "y",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "kind": "init",
                        "method": false,
                        "optional": false,
                        "shorthand": false,
                        "value": {
                          "type": "Literal",
                          "start": 316,
                          "end": 317,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ClassDeclaration",
      "start": 323,
      "end": 334,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 331,
        "end": 334,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 330,
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 346,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 343,
        "end": 346,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 342,
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null
      },
      "implements": [],
      "superClass": null,
      "superTypeArguments": null,
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 347,
      "end": 403,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 351,
          "end": 402,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 383,
            "decorators": [],
            "name": "unionTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 383,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 363,
                "end": 383,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 364,
                    "end": 365,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 365,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUnionType",
                    "start": 367,
                    "end": 382,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 367,
                        "end": 373
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 376,
                        "end": 382
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 386,
            "end": 402,
            "elements": [
              {
                "type": "NewExpression",
                "start": 387,
                "end": 394,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 396,
                "end": 401,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 404,
      "end": 461,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 408,
          "end": 460,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 441,
            "decorators": [],
            "name": "unionTuple1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 419,
              "end": 441,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 421,
                "end": 441,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 422,
                    "end": 423,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 422,
                      "end": 423,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUnionType",
                    "start": 425,
                    "end": 440,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 425,
                        "end": 431
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 434,
                        "end": 440
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 444,
            "end": 460,
            "elements": [
              {
                "type": "NewExpression",
                "start": 445,
                "end": 452,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 450,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 454,
                "end": 459,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 462,
      "end": 531,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 530,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 502,
            "decorators": [],
            "name": "unionTuple2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 477,
              "end": 502,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 479,
                "end": 502,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 480,
                    "end": 481,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 481,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUnionType",
                    "start": 483,
                    "end": 498,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 483,
                        "end": 489
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 492,
                        "end": 498
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 500,
                    "end": 501,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 500,
                      "end": 501,
                      "decorators": [],
                      "name": "D",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 505,
            "end": 530,
            "elements": [
              {
                "type": "NewExpression",
                "start": 506,
                "end": 513,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 511,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 515,
                "end": 520,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "NewExpression",
                "start": 522,
                "end": 529,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 527,
                  "decorators": [],
                  "name": "D",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 532,
      "end": 588,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 536,
          "end": 587,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 536,
            "end": 573,
            "decorators": [],
            "name": "unionTuple3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 547,
              "end": 573,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 549,
                "end": 573,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 550,
                    "end": 556
                  },
                  {
                    "type": "TSUnionType",
                    "start": 558,
                    "end": 572,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 558,
                        "end": 564
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 566,
                        "end": 572
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 576,
            "end": 587,
            "elements": [
              {
                "type": "Literal",
                "start": 577,
                "end": 579,
                "raw": "10",
                "value": 10
              },
              {
                "type": "Literal",
                "start": 581,
                "end": 586,
                "raw": "\"foo\"",
                "value": "foo"
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 618,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 591,
        "end": 617,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 591,
          "end": 602,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 605,
          "end": 617,
          "decorators": [],
          "name": "numStrTuple2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 619,
      "end": 649,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 619,
        "end": 648,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 619,
          "end": 630,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 633,
          "end": 648,
          "decorators": [],
          "name": "numStrBoolTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 660,
      "end": 683,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 660,
        "end": 682,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 660,
          "end": 671,
          "decorators": [],
          "name": "objNumTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 674,
          "end": 682,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 676,
              "end": 678,
              "properties": []
            },
            {
              "type": "Literal",
              "start": 680,
              "end": 681,
              "raw": "5",
              "value": 5
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 684,
      "end": 714,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 684,
        "end": 713,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 684,
          "end": 699,
          "decorators": [],
          "name": "numStrBoolTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 702,
          "end": 713,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 715,
      "end": 769,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 719,
          "end": 768,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 719,
            "end": 748,
            "decorators": [],
            "name": "strStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 730,
              "end": 748,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 732,
                "end": 748,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 733,
                    "end": 739
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 741,
                    "end": 747
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 751,
            "end": 768,
            "elements": [
              {
                "type": "Literal",
                "start": 752,
                "end": 757,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "Literal",
                "start": 759,
                "end": 764,
                "raw": "\"bar\"",
                "value": "bar"
              },
              {
                "type": "Literal",
                "start": 766,
                "end": 767,
                "raw": "5",
                "value": 5
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 771,
      "end": 796,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 771,
        "end": 795,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 771,
          "end": 781,
          "decorators": [],
          "name": "unionTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 784,
          "end": 795,
          "decorators": [],
          "name": "unionTuple1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 797,
      "end": 822,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 797,
        "end": 821,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 797,
          "end": 807,
          "decorators": [],
          "name": "unionTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 810,
          "end": 821,
          "decorators": [],
          "name": "unionTuple2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 823,
      "end": 848,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 823,
        "end": 847,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 823,
          "end": 834,
          "decorators": [],
          "name": "unionTuple2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 837,
          "end": 847,
          "decorators": [],
          "name": "unionTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 849,
      "end": 875,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 849,
        "end": 874,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 849,
          "end": 860,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 863,
          "end": 874,
          "decorators": [],
          "name": "unionTuple3",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 898,
      "end": 924,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 903,
        "end": 908,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 911,
        "end": 924,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 912,
            "end": 923,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 915,
              "end": 923,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 915,
                "end": 921
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 925,
      "end": 960,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 930,
        "end": 936,
        "decorators": [],
        "name": "fixed1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 939,
        "end": 960,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 939,
            "end": 944,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 939,
              "end": 944,
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 947,
            "end": 960,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 949,
                "end": 958,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 955,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "readonly": false,
                "static": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 955,
                  "end": 958,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 957,
                    "end": 958,
                    "literal": {
                      "type": "Literal",
                      "start": 957,
                      "end": 958,
                      "raw": "2",
                      "value": 2
                    }
                  }
                }
              }
            ]
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 961,
      "end": 986,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 965,
          "end": 986,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 965,
            "end": 977,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 969,
              "end": 977,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 971,
                "end": 977,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 971,
                  "end": 977,
                  "decorators": [],
                  "name": "fixed1",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 980,
            "end": 986,
            "elements": [
              {
                "type": "Literal",
                "start": 981,
                "end": 982,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 984,
                "end": 985,
                "raw": "0",
                "value": 0
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 998,
      "end": 1018,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1003,
        "end": 1013,
        "decorators": [],
        "name": "EmptyTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 1016,
        "end": 1018,
        "elementTypes": []
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1019,
      "end": 1081,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1061,
        "end": 1081,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1063,
            "end": 1079,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1063,
              "end": 1072,
              "decorators": [],
              "name": "extraInfo",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": true,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1073,
              "end": 1078,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1075,
                "end": 1078
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1050,
          "end": 1060,
          "expression": {
            "type": "Identifier",
            "start": 1050,
            "end": 1060,
            "decorators": [],
            "name": "EmptyTuple",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 1029,
        "end": 1041,
        "decorators": [],
        "name": "MyEmptyTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1082,
      "end": 1116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1088,
          "end": 1116,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1088,
            "end": 1111,
            "decorators": [],
            "name": "withExtra",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1097,
              "end": 1111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1099,
                "end": 1111,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1099,
                  "end": 1111,
                  "decorators": [],
                  "name": "MyEmptyTuple",
                  "optional": false,
                  "typeAnnotation": null
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1114,
            "end": 1116,
            "elements": []
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
