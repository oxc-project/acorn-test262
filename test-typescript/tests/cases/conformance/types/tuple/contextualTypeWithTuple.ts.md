__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 13,
  "end": 1117,
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
          "id": {
            "type": "Identifier",
            "start": 17,
            "end": 46,
            "name": "numStrTuple",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 53,
                "end": 60,
                "value": "hello",
                "raw": "\"hello\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 67,
            "end": 97,
            "name": "numStrTuple2",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 104,
                "end": 109,
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "Literal",
                "start": 111,
                "end": 115,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 122,
            "end": 164,
            "name": "numStrBoolTuple",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 5,
                "raw": "5"
              },
              {
                "type": "Literal",
                "start": 171,
                "end": 176,
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "Literal",
                "start": 178,
                "end": 182,
                "value": true,
                "raw": "true"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 225,
            "name": "objNumTuple",
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
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 205,
                          "end": 206,
                          "name": "a",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 206,
                          "end": 214,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 208,
                            "end": 214
                          }
                        },
                        "accessibility": null,
                        "static": false
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
            },
            "decorators": [],
            "optional": false
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
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 231,
                      "end": 232,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 234,
                      "end": 241,
                      "value": "world",
                      "raw": "\"world\""
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 245,
                "end": 246,
                "value": 5,
                "raw": "5"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 253,
            "end": 290,
            "name": "strTupleTuple",
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
            },
            "decorators": [],
            "optional": false
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
                "value": "bar",
                "raw": "\"bar\""
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
                    "value": 5,
                    "raw": "5"
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
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 307,
                          "end": 308,
                          "name": "x",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 310,
                          "end": 311,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      },
                      {
                        "type": "Property",
                        "start": 313,
                        "end": 317,
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 313,
                          "end": 314,
                          "name": "y",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        },
                        "value": {
                          "type": "Literal",
                          "start": 316,
                          "end": 317,
                          "value": 1,
                          "raw": "1"
                        },
                        "kind": "init",
                        "optional": false
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ClassDeclaration",
      "start": 323,
      "end": 334,
      "id": {
        "type": "Identifier",
        "start": 329,
        "end": 330,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 331,
        "end": 334,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
    },
    {
      "type": "ClassDeclaration",
      "start": 335,
      "end": 346,
      "id": {
        "type": "Identifier",
        "start": 341,
        "end": 342,
        "name": "D",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 343,
        "end": 346,
        "body": []
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 351,
            "end": 383,
            "name": "unionTuple",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 364,
                      "end": 365,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 391,
                  "end": 392,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 396,
                "end": 401,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 408,
            "end": 441,
            "name": "unionTuple1",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 422,
                      "end": 423,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 449,
                  "end": 450,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 454,
                "end": 459,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 502,
            "name": "unionTuple2",
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 480,
                      "end": 481,
                      "name": "C",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
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
                    "typeName": {
                      "type": "Identifier",
                      "start": 500,
                      "end": 501,
                      "name": "D",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
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
                "callee": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 511,
                  "name": "C",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 515,
                "end": 520,
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "NewExpression",
                "start": 522,
                "end": 529,
                "callee": {
                  "type": "Identifier",
                  "start": 526,
                  "end": 527,
                  "name": "D",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 536,
            "end": 573,
            "name": "unionTuple3",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 10,
                "raw": "10"
              },
              {
                "type": "Literal",
                "start": 581,
                "end": 586,
                "value": "foo",
                "raw": "\"foo\""
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 591,
      "end": 618,
      "expression": {
        "type": "AssignmentExpression",
        "start": 591,
        "end": 617,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 591,
          "end": 602,
          "name": "numStrTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 605,
          "end": 617,
          "name": "numStrTuple2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 619,
      "end": 649,
      "expression": {
        "type": "AssignmentExpression",
        "start": 619,
        "end": 648,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 619,
          "end": 630,
          "name": "numStrTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 633,
          "end": 648,
          "name": "numStrBoolTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 660,
      "end": 683,
      "expression": {
        "type": "AssignmentExpression",
        "start": 660,
        "end": 682,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 660,
          "end": 671,
          "name": "objNumTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "value": 5,
              "raw": "5"
            }
          ]
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 684,
      "end": 714,
      "expression": {
        "type": "AssignmentExpression",
        "start": 684,
        "end": 713,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 684,
          "end": 699,
          "name": "numStrBoolTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 702,
          "end": 713,
          "name": "numStrTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 719,
            "end": 748,
            "name": "strStrTuple",
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
            },
            "decorators": [],
            "optional": false
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
                "value": "foo",
                "raw": "\"foo\""
              },
              {
                "type": "Literal",
                "start": 759,
                "end": 764,
                "value": "bar",
                "raw": "\"bar\""
              },
              {
                "type": "Literal",
                "start": 766,
                "end": 767,
                "value": 5,
                "raw": "5"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 771,
      "end": 796,
      "expression": {
        "type": "AssignmentExpression",
        "start": 771,
        "end": 795,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 771,
          "end": 781,
          "name": "unionTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 784,
          "end": 795,
          "name": "unionTuple1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 797,
      "end": 822,
      "expression": {
        "type": "AssignmentExpression",
        "start": 797,
        "end": 821,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 797,
          "end": 807,
          "name": "unionTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 810,
          "end": 821,
          "name": "unionTuple2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 823,
      "end": 848,
      "expression": {
        "type": "AssignmentExpression",
        "start": 823,
        "end": 847,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 823,
          "end": 834,
          "name": "unionTuple2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 837,
          "end": 847,
          "name": "unionTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 849,
      "end": 875,
      "expression": {
        "type": "AssignmentExpression",
        "start": 849,
        "end": 874,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 849,
          "end": 860,
          "name": "numStrTuple",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 863,
          "end": 874,
          "name": "unionTuple3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 898,
      "end": 924,
      "id": {
        "type": "Identifier",
        "start": 903,
        "end": 908,
        "name": "test1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
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
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 925,
      "end": 960,
      "id": {
        "type": "Identifier",
        "start": 930,
        "end": 936,
        "name": "fixed1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 939,
        "end": 960,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 939,
            "end": 944,
            "typeName": {
              "type": "Identifier",
              "start": 939,
              "end": 944,
              "name": "test1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeArguments": null
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
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 949,
                  "end": 955,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
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
                      "value": 2,
                      "raw": "2"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 965,
            "end": 977,
            "name": "var1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 969,
              "end": 977,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 971,
                "end": 977,
                "typeName": {
                  "type": "Identifier",
                  "start": 971,
                  "end": 977,
                  "name": "fixed1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
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
                "value": 0,
                "raw": "0"
              },
              {
                "type": "Literal",
                "start": 984,
                "end": 985,
                "value": 0,
                "raw": "0"
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
      "type": "TSTypeAliasDeclaration",
      "start": 998,
      "end": 1018,
      "id": {
        "type": "Identifier",
        "start": 1003,
        "end": 1013,
        "name": "EmptyTuple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 1016,
        "end": 1018,
        "elementTypes": []
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1019,
      "end": 1081,
      "id": {
        "type": "Identifier",
        "start": 1029,
        "end": 1041,
        "name": "MyEmptyTuple",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1050,
          "end": 1060,
          "expression": {
            "type": "Identifier",
            "start": 1050,
            "end": 1060,
            "name": "EmptyTuple",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      ],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1061,
        "end": 1081,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1063,
            "end": 1079,
            "computed": false,
            "optional": true,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1063,
              "end": 1072,
              "name": "extraInfo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1073,
              "end": 1078,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1075,
                "end": 1078
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 1088,
            "end": 1111,
            "name": "withExtra",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1097,
              "end": 1111,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1099,
                "end": 1111,
                "typeName": {
                  "type": "Identifier",
                  "start": 1099,
                  "end": 1111,
                  "name": "MyEmptyTuple",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 1114,
            "end": 1116,
            "elements": []
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
