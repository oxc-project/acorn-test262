__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 3538,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 21,
        "decorators": [],
        "name": "CheckBooleanOnly",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 40,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 39,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSBooleanKeyword",
              "start": 32,
              "end": 39
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSAnyKeyword",
        "start": 43,
        "end": 46
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 98,
      "end": 150,
      "id": {
        "type": "Identifier",
        "start": 103,
        "end": 109,
        "decorators": [],
        "name": "T_ERR1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 112,
        "end": 149,
        "typeName": {
          "type": "Identifier",
          "start": 112,
          "end": 128,
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 128,
          "end": 149,
          "params": [
            {
              "type": "TSUnionType",
              "start": 129,
              "end": 148,
              "types": [
                {
                  "type": "TSBooleanKeyword",
                  "start": 129,
                  "end": 136
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 139,
                  "end": 148
                }
              ]
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 152,
      "end": 181,
      "id": {
        "type": "Identifier",
        "start": 157,
        "end": 169,
        "decorators": [],
        "name": "NumericEnum1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 170,
        "end": 181,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 172,
            "end": 173,
            "id": {
              "type": "Identifier",
              "start": 172,
              "end": 173,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 175,
            "end": 176,
            "id": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 178,
            "end": 179,
            "id": {
              "type": "Identifier",
              "start": 178,
              "end": 179,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 182,
      "end": 224,
      "id": {
        "type": "Identifier",
        "start": 187,
        "end": 199,
        "decorators": [],
        "name": "NumericEnum2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 200,
        "end": 224,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 202,
            "end": 207,
            "id": {
              "type": "Identifier",
              "start": 202,
              "end": 203,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 206,
              "end": 207,
              "value": 0,
              "raw": "0"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 209,
            "end": 214,
            "id": {
              "type": "Identifier",
              "start": 209,
              "end": 210,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 213,
              "end": 214,
              "value": 1,
              "raw": "1"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 217,
            "end": 222,
            "id": {
              "type": "Identifier",
              "start": 217,
              "end": 218,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 221,
              "end": 222,
              "value": 2,
              "raw": "2"
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 225,
      "end": 269,
      "id": {
        "type": "Identifier",
        "start": 230,
        "end": 241,
        "decorators": [],
        "name": "StringEnum1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 242,
        "end": 269,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 244,
            "end": 255,
            "id": {
              "type": "Identifier",
              "start": 244,
              "end": 245,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 248,
              "end": 255,
              "value": "Alpha",
              "raw": "\"Alpha\""
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 257,
            "end": 267,
            "id": {
              "type": "Identifier",
              "start": 257,
              "end": 258,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 261,
              "end": 267,
              "value": "Beta",
              "raw": "\"Beta\""
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 271,
      "end": 318,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 285,
          "end": 317,
          "id": {
            "type": "Identifier",
            "start": 285,
            "end": 317,
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 291,
              "end": 317,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 293,
                "end": 317,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 295,
                    "end": 315,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 296,
                        "end": 305,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 297,
                          "end": 305,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 299,
                            "end": 305
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 306,
                      "end": 315,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 308,
                        "end": 315
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 353,
      "end": 387,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 386,
          "id": {
            "type": "Identifier",
            "start": 359,
            "end": 370,
            "decorators": [],
            "name": "e1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 361,
              "end": 370,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 363,
                "end": 370
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 373,
            "end": 386,
            "object": {
              "type": "Identifier",
              "start": 373,
              "end": 379,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 380,
              "end": 385,
              "value": "foo",
              "raw": "\"foo\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 419,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 394,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 394,
            "end": 405,
            "decorators": [],
            "name": "e2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 396,
              "end": 405,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 398,
                "end": 405
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 408,
            "end": 418,
            "object": {
              "type": "Identifier",
              "start": 408,
              "end": 414,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 415,
              "end": 418,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 450,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 426,
          "end": 449,
          "id": {
            "type": "Identifier",
            "start": 426,
            "end": 437,
            "decorators": [],
            "name": "e3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 437,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 430,
                "end": 437
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 440,
            "end": 449,
            "object": {
              "type": "Identifier",
              "start": 440,
              "end": 446,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 447,
              "end": 448,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 451,
      "end": 500,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 457,
          "end": 499,
          "id": {
            "type": "Identifier",
            "start": 457,
            "end": 468,
            "decorators": [],
            "name": "e4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 459,
              "end": 468,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 461,
                "end": 468
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 471,
            "end": 499,
            "object": {
              "type": "Identifier",
              "start": 471,
              "end": 477,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TSAsExpression",
              "start": 478,
              "end": 498,
              "expression": {
                "type": "Literal",
                "start": 478,
                "end": 479,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
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
              }
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 501,
      "end": 549,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 507,
          "end": 548,
          "id": {
            "type": "Identifier",
            "start": 507,
            "end": 518,
            "decorators": [],
            "name": "e5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 509,
              "end": 518,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 511,
                "end": 518
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 521,
            "end": 548,
            "object": {
              "type": "Identifier",
              "start": 521,
              "end": 527,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TSAsExpression",
              "start": 528,
              "end": 547,
              "expression": {
                "type": "Literal",
                "start": 528,
                "end": 529,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 533,
                "end": 547,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 533,
                    "end": 539
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 542,
                    "end": 543,
                    "literal": {
                      "type": "Literal",
                      "start": 542,
                      "end": 543,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 546,
                    "end": 547,
                    "literal": {
                      "type": "Literal",
                      "start": 546,
                      "end": 547,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 550,
      "end": 589,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 556,
          "end": 588,
          "id": {
            "type": "Identifier",
            "start": 556,
            "end": 567,
            "decorators": [],
            "name": "e6",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 558,
              "end": 567,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 560,
                "end": 567
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 570,
            "end": 588,
            "object": {
              "type": "Identifier",
              "start": 570,
              "end": 576,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TSAsExpression",
              "start": 577,
              "end": 587,
              "expression": {
                "type": "Literal",
                "start": 577,
                "end": 578,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 582,
                "end": 587,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 582,
                    "end": 583,
                    "literal": {
                      "type": "Literal",
                      "start": 582,
                      "end": 583,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 586,
                    "end": 587,
                    "literal": {
                      "type": "Literal",
                      "start": 586,
                      "end": 587,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 590,
      "end": 641,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 596,
          "end": 640,
          "id": {
            "type": "Identifier",
            "start": 596,
            "end": 607,
            "decorators": [],
            "name": "e7",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 598,
              "end": 607,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 600,
                "end": 607
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 610,
            "end": 640,
            "object": {
              "type": "Identifier",
              "start": 610,
              "end": 616,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TSAsExpression",
              "start": 617,
              "end": 639,
              "expression": {
                "type": "Literal",
                "start": 617,
                "end": 622,
                "value": "foo",
                "raw": "\"foo\""
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 626,
                "end": 639,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 626,
                    "end": 631,
                    "literal": {
                      "type": "Literal",
                      "start": 626,
                      "end": 631,
                      "value": "foo",
                      "raw": "\"foo\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 634,
                    "end": 639,
                    "literal": {
                      "type": "Literal",
                      "start": 634,
                      "end": 639,
                      "value": "baz",
                      "raw": "\"baz\""
                    }
                  }
                ]
              }
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 642,
      "end": 685,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 648,
          "end": 684,
          "id": {
            "type": "Identifier",
            "start": 648,
            "end": 659,
            "decorators": [],
            "name": "e8",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 650,
              "end": 659,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 652,
                "end": 659
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 662,
            "end": 684,
            "object": {
              "type": "Identifier",
              "start": 662,
              "end": 668,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 669,
              "end": 683,
              "object": {
                "type": "Identifier",
                "start": 669,
                "end": 681,
                "decorators": [],
                "name": "NumericEnum1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 682,
                "end": 683,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 686,
      "end": 729,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 692,
          "end": 728,
          "id": {
            "type": "Identifier",
            "start": 692,
            "end": 703,
            "decorators": [],
            "name": "e9",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 694,
              "end": 703,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 696,
                "end": 703
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 706,
            "end": 728,
            "object": {
              "type": "Identifier",
              "start": 706,
              "end": 712,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 713,
              "end": 727,
              "object": {
                "type": "Identifier",
                "start": 713,
                "end": 725,
                "decorators": [],
                "name": "NumericEnum2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 726,
                "end": 727,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 730,
      "end": 773,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 736,
          "end": 772,
          "id": {
            "type": "Identifier",
            "start": 736,
            "end": 748,
            "decorators": [],
            "name": "e10",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 739,
              "end": 748,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 741,
                "end": 748
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 751,
            "end": 772,
            "object": {
              "type": "Identifier",
              "start": 751,
              "end": 757,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 758,
              "end": 771,
              "object": {
                "type": "Identifier",
                "start": 758,
                "end": 769,
                "decorators": [],
                "name": "StringEnum1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 770,
                "end": 771,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 774,
      "end": 832,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 780,
          "end": 831,
          "id": {
            "type": "Identifier",
            "start": 780,
            "end": 792,
            "decorators": [],
            "name": "e11",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 783,
              "end": 792,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 785,
                "end": 792
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 795,
            "end": 831,
            "object": {
              "type": "Identifier",
              "start": 795,
              "end": 801,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TSAsExpression",
              "start": 802,
              "end": 830,
              "expression": {
                "type": "MemberExpression",
                "start": 802,
                "end": 815,
                "object": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 813,
                  "decorators": [],
                  "name": "StringEnum1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 814,
                  "end": 815,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 819,
                "end": 830,
                "typeName": {
                  "type": "Identifier",
                  "start": 819,
                  "end": 830,
                  "decorators": [],
                  "name": "StringEnum1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 833,
      "end": 893,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 839,
          "end": 892,
          "id": {
            "type": "Identifier",
            "start": 839,
            "end": 851,
            "decorators": [],
            "name": "e12",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 842,
              "end": 851,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 844,
                "end": 851
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 854,
            "end": 892,
            "object": {
              "type": "Identifier",
              "start": 854,
              "end": 860,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TSAsExpression",
              "start": 861,
              "end": 891,
              "expression": {
                "type": "MemberExpression",
                "start": 861,
                "end": 875,
                "object": {
                  "type": "Identifier",
                  "start": 861,
                  "end": 873,
                  "decorators": [],
                  "name": "NumericEnum1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 874,
                  "end": 875,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 879,
                "end": 891,
                "typeName": {
                  "type": "Identifier",
                  "start": 879,
                  "end": 891,
                  "decorators": [],
                  "name": "NumericEnum1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 894,
      "end": 954,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 900,
          "end": 953,
          "id": {
            "type": "Identifier",
            "start": 900,
            "end": 912,
            "decorators": [],
            "name": "e13",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 903,
              "end": 912,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 905,
                "end": 912
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 915,
            "end": 953,
            "object": {
              "type": "Identifier",
              "start": 915,
              "end": 921,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TSAsExpression",
              "start": 922,
              "end": 952,
              "expression": {
                "type": "MemberExpression",
                "start": 922,
                "end": 936,
                "object": {
                  "type": "Identifier",
                  "start": 922,
                  "end": 934,
                  "decorators": [],
                  "name": "NumericEnum2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 935,
                  "end": 936,
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 940,
                "end": 952,
                "typeName": {
                  "type": "Identifier",
                  "start": 940,
                  "end": 952,
                  "decorators": [],
                  "name": "NumericEnum2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 955,
      "end": 996,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 961,
          "end": 995,
          "id": {
            "type": "Identifier",
            "start": 961,
            "end": 973,
            "decorators": [],
            "name": "e14",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 964,
              "end": 973,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 966,
                "end": 973
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 976,
            "end": 995,
            "object": {
              "type": "Identifier",
              "start": 976,
              "end": 982,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TSAsExpression",
              "start": 983,
              "end": 994,
              "expression": {
                "type": "Literal",
                "start": 983,
                "end": 987,
                "value": null,
                "raw": "null"
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 991,
                "end": 994
              }
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1014,
      "end": 1061,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1020,
          "end": 1060,
          "id": {
            "type": "Identifier",
            "start": 1020,
            "end": 1044,
            "decorators": [],
            "name": "ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1023,
              "end": 1044,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1025,
                "end": 1044,
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1025,
                    "end": 1032
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1035,
                    "end": 1044
                  }
                ]
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1047,
            "end": 1060,
            "object": {
              "type": "Identifier",
              "start": 1047,
              "end": 1053,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1054,
              "end": 1059,
              "value": "foo",
              "raw": "\"foo\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1062,
      "end": 1106,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1068,
          "end": 1105,
          "id": {
            "type": "Identifier",
            "start": 1068,
            "end": 1092,
            "decorators": [],
            "name": "ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1071,
              "end": 1092,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1073,
                "end": 1092,
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 1073,
                    "end": 1080
                  },
                  {
                    "type": "TSUndefinedKeyword",
                    "start": 1083,
                    "end": 1092
                  }
                ]
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1095,
            "end": 1105,
            "object": {
              "type": "Identifier",
              "start": 1095,
              "end": 1101,
              "decorators": [],
              "name": "strMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 1102,
              "end": 1105,
              "decorators": [],
              "name": "bar",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1108,
      "end": 1163,
      "id": {
        "type": "Identifier",
        "start": 1113,
        "end": 1118,
        "decorators": [],
        "name": "T_OK1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1121,
        "end": 1162,
        "typeName": {
          "type": "Identifier",
          "start": 1121,
          "end": 1137,
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1137,
          "end": 1162,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 1138,
              "end": 1161,
              "objectType": {
                "type": "TSTypeQuery",
                "start": 1139,
                "end": 1152,
                "exprName": {
                  "type": "Identifier",
                  "start": 1146,
                  "end": 1152,
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSStringKeyword",
                "start": 1154,
                "end": 1160
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1164,
      "end": 1218,
      "id": {
        "type": "Identifier",
        "start": 1169,
        "end": 1174,
        "decorators": [],
        "name": "T_OK2",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1177,
        "end": 1217,
        "typeName": {
          "type": "Identifier",
          "start": 1177,
          "end": 1193,
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1193,
          "end": 1217,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 1194,
              "end": 1216,
              "objectType": {
                "type": "TSTypeQuery",
                "start": 1195,
                "end": 1208,
                "exprName": {
                  "type": "Identifier",
                  "start": 1202,
                  "end": 1208,
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSLiteralType",
                "start": 1210,
                "end": 1215,
                "literal": {
                  "type": "Literal",
                  "start": 1210,
                  "end": 1215,
                  "value": "foo",
                  "raw": "\"foo\""
                }
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1219,
      "end": 1281,
      "id": {
        "type": "Identifier",
        "start": 1224,
        "end": 1229,
        "decorators": [],
        "name": "T_OK3",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1232,
        "end": 1280,
        "typeName": {
          "type": "Identifier",
          "start": 1232,
          "end": 1248,
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1248,
          "end": 1280,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 1249,
              "end": 1279,
              "objectType": {
                "type": "TSTypeQuery",
                "start": 1250,
                "end": 1263,
                "exprName": {
                  "type": "Identifier",
                  "start": 1257,
                  "end": 1263,
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSUnionType",
                "start": 1265,
                "end": 1278,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 1265,
                    "end": 1270,
                    "literal": {
                      "type": "Literal",
                      "start": 1265,
                      "end": 1270,
                      "value": "bar",
                      "raw": "\"bar\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1273,
                    "end": 1278,
                    "literal": {
                      "type": "Literal",
                      "start": 1273,
                      "end": 1278,
                      "value": "baz",
                      "raw": "\"baz\""
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1282,
      "end": 1337,
      "id": {
        "type": "Identifier",
        "start": 1287,
        "end": 1292,
        "decorators": [],
        "name": "T_OK4",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1295,
        "end": 1336,
        "typeName": {
          "type": "Identifier",
          "start": 1295,
          "end": 1311,
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1311,
          "end": 1336,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 1312,
              "end": 1335,
              "objectType": {
                "type": "TSTypeQuery",
                "start": 1313,
                "end": 1326,
                "exprName": {
                  "type": "Identifier",
                  "start": 1320,
                  "end": 1326,
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSNumberKeyword",
                "start": 1328,
                "end": 1334
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1338,
      "end": 1390,
      "id": {
        "type": "Identifier",
        "start": 1343,
        "end": 1348,
        "decorators": [],
        "name": "T_OK5",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeReference",
        "start": 1351,
        "end": 1389,
        "typeName": {
          "type": "Identifier",
          "start": 1351,
          "end": 1367,
          "decorators": [],
          "name": "CheckBooleanOnly",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": {
          "type": "TSTypeParameterInstantiation",
          "start": 1367,
          "end": 1389,
          "params": [
            {
              "type": "TSIndexedAccessType",
              "start": 1368,
              "end": 1388,
              "objectType": {
                "type": "TSTypeQuery",
                "start": 1369,
                "end": 1382,
                "exprName": {
                  "type": "Identifier",
                  "start": 1376,
                  "end": 1382,
                  "decorators": [],
                  "name": "strMap",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "indexType": {
                "type": "TSAnyKeyword",
                "start": 1384,
                "end": 1387
              }
            }
          ]
        }
      },
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 1448,
      "end": 1474,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1448,
        "end": 1473,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1448,
          "end": 1461,
          "object": {
            "type": "Identifier",
            "start": 1448,
            "end": 1454,
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1455,
            "end": 1460,
            "value": "baz",
            "raw": "\"baz\""
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Identifier",
          "start": 1464,
          "end": 1473,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1475,
      "end": 1498,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1475,
        "end": 1497,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1475,
          "end": 1485,
          "object": {
            "type": "Identifier",
            "start": 1475,
            "end": 1481,
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 1482,
            "end": 1485,
            "decorators": [],
            "name": "qua",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "right": {
          "type": "Identifier",
          "start": 1488,
          "end": 1497,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1499,
      "end": 1521,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1499,
        "end": 1520,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1499,
          "end": 1508,
          "object": {
            "type": "Identifier",
            "start": 1499,
            "end": 1505,
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 1506,
            "end": 1507,
            "value": 0,
            "raw": "0"
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Identifier",
          "start": 1511,
          "end": 1520,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1522,
      "end": 1554,
      "expression": {
        "type": "AssignmentExpression",
        "start": 1522,
        "end": 1553,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 1522,
          "end": 1541,
          "object": {
            "type": "Identifier",
            "start": 1522,
            "end": 1528,
            "decorators": [],
            "name": "strMap",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "TSAsExpression",
            "start": 1529,
            "end": 1540,
            "expression": {
              "type": "Literal",
              "start": 1529,
              "end": 1533,
              "value": null,
              "raw": "null"
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 1537,
              "end": 1540
            }
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Identifier",
          "start": 1544,
          "end": 1553,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1590,
      "end": 1637,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1604,
          "end": 1636,
          "id": {
            "type": "Identifier",
            "start": 1604,
            "end": 1636,
            "decorators": [],
            "name": "numMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1610,
              "end": 1636,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 1612,
                "end": 1636,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 1614,
                    "end": 1634,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 1615,
                        "end": 1624,
                        "decorators": [],
                        "name": "s",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1616,
                          "end": 1624,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 1618,
                            "end": 1624
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 1625,
                      "end": 1634,
                      "typeAnnotation": {
                        "type": "TSBooleanKeyword",
                        "start": 1627,
                        "end": 1634
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 1667,
      "end": 1702,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1673,
          "end": 1701,
          "id": {
            "type": "Identifier",
            "start": 1673,
            "end": 1689,
            "decorators": [],
            "name": "num_ok1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1680,
              "end": 1689,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1682,
                "end": 1689
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1692,
            "end": 1701,
            "object": {
              "type": "Identifier",
              "start": 1692,
              "end": 1698,
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 1699,
              "end": 1700,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1703,
      "end": 1748,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1709,
          "end": 1747,
          "id": {
            "type": "Identifier",
            "start": 1709,
            "end": 1725,
            "decorators": [],
            "name": "num_ok2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1716,
              "end": 1725,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1718,
                "end": 1725
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1728,
            "end": 1747,
            "object": {
              "type": "Identifier",
              "start": 1728,
              "end": 1734,
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TSAsExpression",
              "start": 1735,
              "end": 1746,
              "expression": {
                "type": "Literal",
                "start": 1735,
                "end": 1736,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1740,
                "end": 1746
              }
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1749,
      "end": 1793,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1755,
          "end": 1792,
          "id": {
            "type": "Identifier",
            "start": 1755,
            "end": 1771,
            "decorators": [],
            "name": "num_ok3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1762,
              "end": 1771,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1764,
                "end": 1771
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1774,
            "end": 1792,
            "object": {
              "type": "Identifier",
              "start": 1774,
              "end": 1780,
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TSAsExpression",
              "start": 1781,
              "end": 1791,
              "expression": {
                "type": "Literal",
                "start": 1781,
                "end": 1782,
                "value": 0,
                "raw": "0"
              },
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 1786,
                "end": 1791,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 1786,
                    "end": 1787,
                    "literal": {
                      "type": "Literal",
                      "start": 1786,
                      "end": 1787,
                      "value": 0,
                      "raw": "0"
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 1790,
                    "end": 1791,
                    "literal": {
                      "type": "Literal",
                      "start": 1790,
                      "end": 1791,
                      "value": 1,
                      "raw": "1"
                    }
                  }
                ]
              }
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1794,
      "end": 1842,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1800,
          "end": 1841,
          "id": {
            "type": "Identifier",
            "start": 1800,
            "end": 1816,
            "decorators": [],
            "name": "num_ok4",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1807,
              "end": 1816,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1809,
                "end": 1816
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1819,
            "end": 1841,
            "object": {
              "type": "Identifier",
              "start": 1819,
              "end": 1825,
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 1826,
              "end": 1840,
              "object": {
                "type": "Identifier",
                "start": 1826,
                "end": 1838,
                "decorators": [],
                "name": "NumericEnum1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1839,
                "end": 1840,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1843,
      "end": 1891,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1849,
          "end": 1890,
          "id": {
            "type": "Identifier",
            "start": 1849,
            "end": 1865,
            "decorators": [],
            "name": "num_ok5",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1856,
              "end": 1865,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1858,
                "end": 1865
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 1868,
            "end": 1890,
            "object": {
              "type": "Identifier",
              "start": 1868,
              "end": 1874,
              "decorators": [],
              "name": "numMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "MemberExpression",
              "start": 1875,
              "end": 1889,
              "object": {
                "type": "Identifier",
                "start": 1875,
                "end": 1887,
                "decorators": [],
                "name": "NumericEnum2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 1888,
                "end": 1889,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 1905,
      "end": 2023,
      "id": {
        "type": "Identifier",
        "start": 1914,
        "end": 1922,
        "decorators": [],
        "name": "generic1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1922,
        "end": 1958,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1923,
            "end": 1957,
            "name": {
              "type": "Identifier",
              "start": 1923,
              "end": 1924,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 1933,
              "end": 1957,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 1935,
                  "end": 1955,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 1936,
                      "end": 1945,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 1937,
                        "end": 1945,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 1939,
                          "end": 1945
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 1946,
                    "end": 1955,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 1948,
                      "end": 1955
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1959,
          "end": 1965,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1962,
            "end": 1965,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1964,
              "end": 1965,
              "typeName": {
                "type": "Identifier",
                "start": 1964,
                "end": 1965,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1966,
        "end": 1975,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 1968,
          "end": 1975
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 1976,
        "end": 2023,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2002,
            "end": 2021,
            "argument": {
              "type": "MemberExpression",
              "start": 2009,
              "end": 2020,
              "object": {
                "type": "Identifier",
                "start": 2009,
                "end": 2012,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 2013,
                "end": 2019,
                "value": "blah",
                "raw": "\"blah\""
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2024,
      "end": 2140,
      "id": {
        "type": "Identifier",
        "start": 2033,
        "end": 2041,
        "decorators": [],
        "name": "generic2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2041,
        "end": 2077,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2042,
            "end": 2076,
            "name": {
              "type": "Identifier",
              "start": 2042,
              "end": 2043,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSTypeLiteral",
              "start": 2052,
              "end": 2076,
              "members": [
                {
                  "type": "TSIndexSignature",
                  "start": 2054,
                  "end": 2074,
                  "parameters": [
                    {
                      "type": "Identifier",
                      "start": 2055,
                      "end": 2064,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 2056,
                        "end": 2064,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 2058,
                          "end": 2064
                        }
                      }
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 2065,
                    "end": 2074,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 2067,
                      "end": 2074
                    }
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null
                }
              ]
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2078,
          "end": 2084,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2081,
            "end": 2084,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2083,
              "end": 2084,
              "typeName": {
                "type": "Identifier",
                "start": 2083,
                "end": 2084,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2085,
        "end": 2094,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 2087,
          "end": 2094
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2095,
        "end": 2140,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2118,
            "end": 2138,
            "argument": {
              "type": "TSNonNullExpression",
              "start": 2125,
              "end": 2137,
              "expression": {
                "type": "MemberExpression",
                "start": 2125,
                "end": 2136,
                "object": {
                  "type": "Identifier",
                  "start": 2125,
                  "end": 2128,
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 2129,
                  "end": 2135,
                  "value": "blah",
                  "raw": "\"blah\""
                },
                "optional": false,
                "computed": true
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 2141,
      "end": 2241,
      "id": {
        "type": "Identifier",
        "start": 2150,
        "end": 2158,
        "decorators": [],
        "name": "generic3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 2158,
        "end": 2176,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 2159,
            "end": 2175,
            "name": {
              "type": "Identifier",
              "start": 2159,
              "end": 2160,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": {
              "type": "TSStringKeyword",
              "start": 2169,
              "end": 2175
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 2177,
          "end": 2183,
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2180,
            "end": 2183,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2182,
              "end": 2183,
              "typeName": {
                "type": "Identifier",
                "start": 2182,
                "end": 2183,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 2184,
        "end": 2193,
        "typeAnnotation": {
          "type": "TSBooleanKeyword",
          "start": 2186,
          "end": 2193
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 2194,
        "end": 2241,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 2220,
            "end": 2239,
            "argument": {
              "type": "MemberExpression",
              "start": 2227,
              "end": 2238,
              "object": {
                "type": "Identifier",
                "start": 2227,
                "end": 2233,
                "decorators": [],
                "name": "strMap",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2234,
                "end": 2237,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2289,
      "end": 2366,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2303,
          "end": 2365,
          "id": {
            "type": "Identifier",
            "start": 2303,
            "end": 2365,
            "decorators": [],
            "name": "obj1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2307,
              "end": 2365,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2309,
                "end": 2365,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2311,
                    "end": 2321,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2311,
                      "end": 2312,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2312,
                      "end": 2320,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2314,
                        "end": 2320
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 2322,
                    "end": 2332,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2322,
                      "end": 2323,
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2323,
                      "end": 2331,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 2325,
                        "end": 2331
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 2333,
                    "end": 2363,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 2334,
                        "end": 2345,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2337,
                          "end": 2345,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2339,
                            "end": 2345
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2346,
                      "end": 2363,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 2348,
                        "end": 2363,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 2348,
                            "end": 2354
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 2357,
                            "end": 2363
                          }
                        ]
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 2367,
      "end": 2377,
      "expression": {
        "type": "MemberExpression",
        "start": 2367,
        "end": 2376,
        "object": {
          "type": "Identifier",
          "start": 2367,
          "end": 2371,
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Literal",
          "start": 2372,
          "end": 2375,
          "value": "x",
          "raw": "\"x\""
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2378,
      "end": 2392,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2384,
          "end": 2391,
          "id": {
            "type": "Identifier",
            "start": 2384,
            "end": 2385,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 2388,
            "end": 2391,
            "value": "y",
            "raw": "\"y\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2393,
      "end": 2401,
      "expression": {
        "type": "MemberExpression",
        "start": 2393,
        "end": 2400,
        "object": {
          "type": "Identifier",
          "start": 2393,
          "end": 2397,
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 2398,
          "end": 2399,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2402,
      "end": 2415,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2406,
          "end": 2414,
          "id": {
            "type": "Identifier",
            "start": 2406,
            "end": 2408,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 2411,
            "end": 2414,
            "value": "y",
            "raw": "\"y\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2416,
      "end": 2425,
      "expression": {
        "type": "MemberExpression",
        "start": 2416,
        "end": 2424,
        "object": {
          "type": "Identifier",
          "start": 2416,
          "end": 2420,
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 2421,
          "end": 2423,
          "decorators": [],
          "name": "yy",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2426,
      "end": 2438,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2430,
          "end": 2437,
          "id": {
            "type": "Identifier",
            "start": 2430,
            "end": 2431,
            "decorators": [],
            "name": "z",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 2434,
            "end": 2437,
            "value": "z",
            "raw": "\"z\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2439,
      "end": 2447,
      "expression": {
        "type": "MemberExpression",
        "start": 2439,
        "end": 2446,
        "object": {
          "type": "Identifier",
          "start": 2439,
          "end": 2443,
          "decorators": [],
          "name": "obj1",
          "optional": false,
          "typeAnnotation": null
        },
        "property": {
          "type": "Identifier",
          "start": 2444,
          "end": 2445,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": true
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2473,
      "end": 2551,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2487,
          "end": 2550,
          "id": {
            "type": "Identifier",
            "start": 2487,
            "end": 2550,
            "decorators": [],
            "name": "strMapUnion",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2498,
              "end": 2550,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2500,
                "end": 2550,
                "types": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 2500,
                    "end": 2524,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 2502,
                        "end": 2522,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 2503,
                            "end": 2512,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2504,
                              "end": 2512,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2506,
                                "end": 2512
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2513,
                          "end": 2522,
                          "typeAnnotation": {
                            "type": "TSBooleanKeyword",
                            "start": 2515,
                            "end": 2522
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 2527,
                    "end": 2550,
                    "members": [
                      {
                        "type": "TSIndexSignature",
                        "start": 2529,
                        "end": 2548,
                        "parameters": [
                          {
                            "type": "Identifier",
                            "start": 2530,
                            "end": 2539,
                            "decorators": [],
                            "name": "s",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "start": 2531,
                              "end": 2539,
                              "typeAnnotation": {
                                "type": "TSStringKeyword",
                                "start": 2533,
                                "end": 2539
                              }
                            }
                          }
                        ],
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2540,
                          "end": 2548,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2542,
                            "end": 2548
                          }
                        },
                        "readonly": false,
                        "static": false,
                        "accessibility": null
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2568,
      "end": 2616,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2574,
          "end": 2615,
          "id": {
            "type": "Identifier",
            "start": 2574,
            "end": 2594,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2576,
              "end": 2594,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 2578,
                "end": 2594,
                "types": [
                  {
                    "type": "TSBooleanKeyword",
                    "start": 2578,
                    "end": 2585
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 2588,
                    "end": 2594
                  }
                ]
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 2597,
            "end": 2615,
            "object": {
              "type": "Identifier",
              "start": 2597,
              "end": 2608,
              "decorators": [],
              "name": "strMapUnion",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 2609,
              "end": 2614,
              "value": "foo",
              "raw": "\"foo\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2645,
      "end": 2676,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2659,
          "end": 2675,
          "id": {
            "type": "Identifier",
            "start": 2659,
            "end": 2675,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2660,
              "end": 2675,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 2662,
                "end": 2675,
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 2669,
                  "end": 2675
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2677,
      "end": 2718,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2691,
          "end": 2717,
          "id": {
            "type": "Identifier",
            "start": 2691,
            "end": 2717,
            "decorators": [],
            "name": "symbolMap",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2700,
              "end": 2717,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 2702,
                "end": 2717,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 2704,
                    "end": 2715,
                    "computed": true,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 2705,
                      "end": 2706,
                      "decorators": [],
                      "name": "s",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 2707,
                      "end": 2715,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 2709,
                        "end": 2715
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2719,
      "end": 2752,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2725,
          "end": 2751,
          "id": {
            "type": "Identifier",
            "start": 2725,
            "end": 2736,
            "decorators": [],
            "name": "e15",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2728,
              "end": 2736,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2730,
                "end": 2736
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 2739,
            "end": 2751,
            "object": {
              "type": "Identifier",
              "start": 2739,
              "end": 2748,
              "decorators": [],
              "name": "symbolMap",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 2749,
              "end": 2750,
              "decorators": [],
              "name": "s",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 2766,
      "end": 2791,
      "expression": {
        "type": "AssignmentExpression",
        "start": 2766,
        "end": 2790,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 2766,
          "end": 2778,
          "object": {
            "type": "Identifier",
            "start": 2766,
            "end": 2775,
            "decorators": [],
            "name": "symbolMap",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 2776,
            "end": 2777,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": true
        },
        "right": {
          "type": "Identifier",
          "start": 2781,
          "end": 2790,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 2828,
      "end": 2885,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2842,
          "end": 2884,
          "id": {
            "type": "Identifier",
            "start": 2842,
            "end": 2884,
            "decorators": [],
            "name": "nonEmptyStringArray",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2861,
              "end": 2884,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 2863,
                "end": 2884,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 2864,
                    "end": 2870
                  },
                  {
                    "type": "TSRestType",
                    "start": 2872,
                    "end": 2883,
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "start": 2875,
                      "end": 2883,
                      "elementType": {
                        "type": "TSStringKeyword",
                        "start": 2875,
                        "end": 2881
                      }
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
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 2886,
      "end": 2937,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2892,
          "end": 2936,
          "id": {
            "type": "Identifier",
            "start": 2892,
            "end": 2911,
            "decorators": [],
            "name": "variadicOk1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2903,
              "end": 2911,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2905,
                "end": 2911
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 2914,
            "end": 2936,
            "object": {
              "type": "Identifier",
              "start": 2914,
              "end": 2933,
              "decorators": [],
              "name": "nonEmptyStringArray",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 2934,
              "end": 2935,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 2952,
      "end": 3006,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2958,
          "end": 3005,
          "id": {
            "type": "Identifier",
            "start": 2958,
            "end": 2980,
            "decorators": [],
            "name": "variadicError1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2972,
              "end": 2980,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2974,
                "end": 2980
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 2983,
            "end": 3005,
            "object": {
              "type": "Identifier",
              "start": 2983,
              "end": 3002,
              "decorators": [],
              "name": "nonEmptyStringArray",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 3003,
              "end": 3004,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3046,
      "end": 3096,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3060,
          "end": 3095,
          "id": {
            "type": "Identifier",
            "start": 3060,
            "end": 3095,
            "decorators": [],
            "name": "myRecord1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3069,
              "end": 3095,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3071,
                "end": 3095,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3073,
                    "end": 3083,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3073,
                      "end": 3074,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3074,
                      "end": 3082,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3076,
                        "end": 3082
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3084,
                    "end": 3093,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3084,
                      "end": 3085,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3085,
                      "end": 3093,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3087,
                        "end": 3093
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3097,
      "end": 3170,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3111,
          "end": 3169,
          "id": {
            "type": "Identifier",
            "start": 3111,
            "end": 3169,
            "decorators": [],
            "name": "myRecord2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3120,
              "end": 3169,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 3122,
                "end": 3169,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 3124,
                    "end": 3134,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3124,
                      "end": 3125,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3125,
                      "end": 3133,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3127,
                        "end": 3133
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 3135,
                    "end": 3145,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 3135,
                      "end": 3136,
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3136,
                      "end": 3144,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3138,
                        "end": 3144
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 3146,
                    "end": 3167,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 3147,
                        "end": 3158,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3150,
                          "end": 3158,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3152,
                            "end": 3158
                          }
                        }
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 3159,
                      "end": 3167,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 3161,
                        "end": 3167
                      }
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 3171,
      "end": 3256,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3177,
          "end": 3255,
          "id": {
            "type": "Identifier",
            "start": 3177,
            "end": 3180,
            "decorators": [],
            "name": "fn1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3183,
            "end": 3255,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3183,
              "end": 3219,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3184,
                  "end": 3218,
                  "name": {
                    "type": "Identifier",
                    "start": 3184,
                    "end": 3187,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 3196,
                    "end": 3218,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3202,
                      "end": 3218,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3209,
                        "end": 3218,
                        "decorators": [],
                        "name": "myRecord1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 3220,
                "end": 3228,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3223,
                  "end": 3228,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3225,
                    "end": 3228,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3225,
                      "end": 3228,
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3229,
              "end": 3237,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3231,
                "end": 3237
              }
            },
            "body": {
              "type": "MemberExpression",
              "start": 3241,
              "end": 3255,
              "object": {
                "type": "Identifier",
                "start": 3241,
                "end": 3250,
                "decorators": [],
                "name": "myRecord1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3251,
                "end": 3254,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3270,
      "end": 3355,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3276,
          "end": 3354,
          "id": {
            "type": "Identifier",
            "start": 3276,
            "end": 3279,
            "decorators": [],
            "name": "fn2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3282,
            "end": 3354,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3282,
              "end": 3318,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3283,
                  "end": 3317,
                  "name": {
                    "type": "Identifier",
                    "start": 3283,
                    "end": 3286,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 3295,
                    "end": 3317,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3301,
                      "end": 3317,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3308,
                        "end": 3317,
                        "decorators": [],
                        "name": "myRecord1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 3319,
                "end": 3327,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3322,
                  "end": 3327,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3324,
                    "end": 3327,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3324,
                      "end": 3327,
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 3328,
              "end": 3336,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 3330,
                "end": 3336
              }
            },
            "body": {
              "type": "MemberExpression",
              "start": 3340,
              "end": 3354,
              "object": {
                "type": "Identifier",
                "start": 3340,
                "end": 3349,
                "decorators": [],
                "name": "myRecord2",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 3350,
                "end": 3353,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": true
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 3369,
      "end": 3537,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3375,
          "end": 3536,
          "id": {
            "type": "Identifier",
            "start": 3375,
            "end": 3378,
            "decorators": [],
            "name": "fn3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 3381,
            "end": 3536,
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 3381,
              "end": 3417,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 3382,
                  "end": 3416,
                  "name": {
                    "type": "Identifier",
                    "start": 3382,
                    "end": 3385,
                    "decorators": [],
                    "name": "Key",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "start": 3394,
                    "end": 3416,
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "start": 3400,
                      "end": 3416,
                      "exprName": {
                        "type": "Identifier",
                        "start": 3407,
                        "end": 3416,
                        "decorators": [],
                        "name": "myRecord2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false
                }
              ]
            },
            "params": [
              {
                "type": "Identifier",
                "start": 3418,
                "end": 3426,
                "decorators": [],
                "name": "key",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 3421,
                  "end": 3426,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 3423,
                    "end": 3426,
                    "typeName": {
                      "type": "Identifier",
                      "start": 3423,
                      "end": 3426,
                      "decorators": [],
                      "name": "Key",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 3431,
              "end": 3536,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 3437,
                  "end": 3464,
                  "expression": {
                    "type": "AssignmentExpression",
                    "start": 3437,
                    "end": 3463,
                    "operator": "=",
                    "left": {
                      "type": "MemberExpression",
                      "start": 3437,
                      "end": 3451,
                      "object": {
                        "type": "Identifier",
                        "start": 3437,
                        "end": 3446,
                        "decorators": [],
                        "name": "myRecord2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 3447,
                        "end": 3450,
                        "decorators": [],
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": true
                    },
                    "right": {
                      "type": "Identifier",
                      "start": 3454,
                      "end": 3463,
                      "decorators": [],
                      "name": "undefined",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "directive": null
                },
                {
                  "type": "VariableDeclaration",
                  "start": 3485,
                  "end": 3518,
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "start": 3491,
                      "end": 3517,
                      "id": {
                        "type": "Identifier",
                        "start": 3491,
                        "end": 3500,
                        "decorators": [],
                        "name": "v",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 3492,
                          "end": 3500,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 3494,
                            "end": 3500
                          }
                        }
                      },
                      "init": {
                        "type": "MemberExpression",
                        "start": 3503,
                        "end": 3517,
                        "object": {
                          "type": "Identifier",
                          "start": 3503,
                          "end": 3512,
                          "decorators": [],
                          "name": "myRecord2",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "property": {
                          "type": "Identifier",
                          "start": 3513,
                          "end": 3516,
                          "decorators": [],
                          "name": "key",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "optional": false,
                        "computed": true
                      },
                      "definite": false
                    }
                  ],
                  "declare": false
                }
              ]
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
