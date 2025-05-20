__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 12,
  "end": 1115,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 12,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 16,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 16,
            "end": 45,
            "decorators": [],
            "name": "numStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 27,
              "end": 45,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 29,
                "end": 45,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 30,
                    "end": 36
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 38,
                    "end": 44
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 48,
            "end": 60,
            "elements": [
              {
                "type": "Literal",
                "start": 49,
                "end": 50,
                "raw": "5",
                "value": 5
              },
              {
                "type": "Literal",
                "start": 52,
                "end": 59,
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
      "start": 62,
      "end": 116,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 66,
          "end": 115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 66,
            "end": 96,
            "decorators": [],
            "name": "numStrTuple2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 78,
              "end": 96,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 80,
                "end": 96,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 81,
                    "end": 87
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 89,
                    "end": 95
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 99,
            "end": 115,
            "elements": [
              {
                "type": "Literal",
                "start": 100,
                "end": 101,
                "raw": "5",
                "value": 5
              },
              {
                "type": "Literal",
                "start": 103,
                "end": 108,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "Literal",
                "start": 110,
                "end": 114,
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
      "start": 117,
      "end": 183,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 121,
          "end": 182,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 121,
            "end": 163,
            "decorators": [],
            "name": "numStrBoolTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 136,
              "end": 163,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 138,
                "end": 163,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 139,
                    "end": 145
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 147,
                    "end": 153
                  },
                  {
                    "type": "TSBooleanKeyword",
                    "start": 155,
                    "end": 162
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 166,
            "end": 182,
            "elements": [
              {
                "type": "Literal",
                "start": 167,
                "end": 168,
                "raw": "5",
                "value": 5
              },
              {
                "type": "Literal",
                "start": 170,
                "end": 175,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "Literal",
                "start": 177,
                "end": 181,
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
      "start": 184,
      "end": 247,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 246,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 224,
            "decorators": [],
            "name": "objNumTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 199,
              "end": 224,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 201,
                "end": 224,
                "elementTypes": [
                  {
                    "type": "TSTypeLiteral",
                    "start": 202,
                    "end": 215,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 204,
                        "end": 213,
                        "accessibility": null,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 204,
                          "end": 205,
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
                          "start": 205,
                          "end": 213,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 207,
                            "end": 213
                          }
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 217,
                    "end": 223
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 227,
            "end": 246,
            "elements": [
              {
                "type": "ObjectExpression",
                "start": 228,
                "end": 242,
                "properties": [
                  {
                    "type": "Property",
                    "start": 230,
                    "end": 240,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 230,
                      "end": 231,
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
                      "start": 233,
                      "end": 240,
                      "raw": "\"world\"",
                      "value": "world"
                    }
                  }
                ]
              },
              {
                "type": "Literal",
                "start": 244,
                "end": 245,
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
      "start": 248,
      "end": 321,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 252,
          "end": 320,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 252,
            "end": 289,
            "decorators": [],
            "name": "strTupleTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 265,
              "end": 289,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 267,
                "end": 289,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 268,
                    "end": 274
                  },
                  {
                    "type": "TSTupleType",
                    "start": 276,
                    "end": 288,
                    "elementTypes": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 277,
                        "end": 283
                      },
                      {
                        "type": "TSTypeLiteral",
                        "start": 285,
                        "end": 287,
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
            "start": 292,
            "end": 320,
            "elements": [
              {
                "type": "Literal",
                "start": 293,
                "end": 298,
                "raw": "\"bar\"",
                "value": "bar"
              },
              {
                "type": "ArrayExpression",
                "start": 300,
                "end": 319,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 301,
                    "end": 302,
                    "raw": "5",
                    "value": 5
                  },
                  {
                    "type": "ObjectExpression",
                    "start": 304,
                    "end": 318,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 306,
                        "end": 310,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 306,
                          "end": 307,
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
                          "start": 309,
                          "end": 310,
                          "raw": "1",
                          "value": 1
                        }
                      },
                      {
                        "type": "Property",
                        "start": 312,
                        "end": 316,
                        "computed": false,
                        "key": {
                          "type": "Identifier",
                          "start": 312,
                          "end": 313,
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
                          "start": 315,
                          "end": 316,
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
      "start": 322,
      "end": 333,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 330,
        "end": 333,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 328,
        "end": 329,
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
      "start": 334,
      "end": 345,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 342,
        "end": 345,
        "body": []
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 340,
        "end": 341,
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
      "start": 346,
      "end": 402,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 350,
          "end": 401,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 350,
            "end": 382,
            "decorators": [],
            "name": "unionTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 360,
              "end": 382,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 362,
                "end": 382,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 363,
                    "end": 364,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 363,
                      "end": 364,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUnionType",
                    "start": 366,
                    "end": 381,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 366,
                        "end": 372
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 375,
                        "end": 381
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 385,
            "end": 401,
            "elements": [
              {
                "type": "NewExpression",
                "start": 386,
                "end": 393,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 390,
                  "end": 391,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 395,
                "end": 400,
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
      "start": 403,
      "end": 460,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 407,
          "end": 459,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 407,
            "end": 440,
            "decorators": [],
            "name": "unionTuple1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 418,
              "end": 440,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 420,
                "end": 440,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 421,
                    "end": 422,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 421,
                      "end": 422,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUnionType",
                    "start": 424,
                    "end": 439,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 424,
                        "end": 430
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 433,
                        "end": 439
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 443,
            "end": 459,
            "elements": [
              {
                "type": "NewExpression",
                "start": 444,
                "end": 451,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 449,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 453,
                "end": 458,
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
      "start": 461,
      "end": 530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 465,
          "end": 529,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 465,
            "end": 501,
            "decorators": [],
            "name": "unionTuple2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 476,
              "end": 501,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 478,
                "end": 501,
                "elementTypes": [
                  {
                    "type": "TSTypeReference",
                    "start": 479,
                    "end": 480,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 479,
                      "end": 480,
                      "decorators": [],
                      "name": "C",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  {
                    "type": "TSUnionType",
                    "start": 482,
                    "end": 497,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 482,
                        "end": 488
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 491,
                        "end": 497
                      }
                    ]
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 499,
                    "end": 500,
                    "typeArguments": null,
                    "typeName": {
                      "type": "Identifier",
                      "start": 499,
                      "end": 500,
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
            "start": 504,
            "end": 529,
            "elements": [
              {
                "type": "NewExpression",
                "start": 505,
                "end": 512,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 509,
                  "end": 510,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              {
                "type": "Literal",
                "start": 514,
                "end": 519,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "NewExpression",
                "start": 521,
                "end": 528,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 525,
                  "end": 526,
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
      "start": 531,
      "end": 587,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 535,
          "end": 586,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 535,
            "end": 572,
            "decorators": [],
            "name": "unionTuple3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 546,
              "end": 572,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 548,
                "end": 572,
                "elementTypes": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 549,
                    "end": 555
                  },
                  {
                    "type": "TSUnionType",
                    "start": 557,
                    "end": 571,
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 557,
                        "end": 563
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 565,
                        "end": 571
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 575,
            "end": 586,
            "elements": [
              {
                "type": "Literal",
                "start": 576,
                "end": 578,
                "raw": "10",
                "value": 10
              },
              {
                "type": "Literal",
                "start": 580,
                "end": 585,
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
      "start": 590,
      "end": 617,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 590,
        "end": 616,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 590,
          "end": 601,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 604,
          "end": 616,
          "decorators": [],
          "name": "numStrTuple2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 618,
      "end": 648,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 618,
        "end": 647,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 618,
          "end": 629,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 632,
          "end": 647,
          "decorators": [],
          "name": "numStrBoolTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 659,
      "end": 682,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 659,
        "end": 681,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 659,
          "end": 670,
          "decorators": [],
          "name": "objNumTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "ArrayExpression",
          "start": 673,
          "end": 681,
          "elements": [
            {
              "type": "ObjectExpression",
              "start": 675,
              "end": 677,
              "properties": []
            },
            {
              "type": "Literal",
              "start": 679,
              "end": 680,
              "raw": "5",
              "value": 5
            }
          ]
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 683,
      "end": 713,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 683,
        "end": 712,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 683,
          "end": 698,
          "decorators": [],
          "name": "numStrBoolTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 701,
          "end": 712,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 714,
      "end": 768,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 718,
          "end": 767,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 718,
            "end": 747,
            "decorators": [],
            "name": "strStrTuple",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 729,
              "end": 747,
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 731,
                "end": 747,
                "elementTypes": [
                  {
                    "type": "TSStringKeyword",
                    "start": 732,
                    "end": 738
                  },
                  {
                    "type": "TSStringKeyword",
                    "start": 740,
                    "end": 746
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 750,
            "end": 767,
            "elements": [
              {
                "type": "Literal",
                "start": 751,
                "end": 756,
                "raw": "\"foo\"",
                "value": "foo"
              },
              {
                "type": "Literal",
                "start": 758,
                "end": 763,
                "raw": "\"bar\"",
                "value": "bar"
              },
              {
                "type": "Literal",
                "start": 765,
                "end": 766,
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
      "start": 770,
      "end": 795,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 770,
        "end": 794,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 770,
          "end": 780,
          "decorators": [],
          "name": "unionTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 783,
          "end": 794,
          "decorators": [],
          "name": "unionTuple1",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 796,
      "end": 821,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 796,
        "end": 820,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 796,
          "end": 806,
          "decorators": [],
          "name": "unionTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 809,
          "end": 820,
          "decorators": [],
          "name": "unionTuple2",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 822,
      "end": 847,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 822,
        "end": 846,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 822,
          "end": 833,
          "decorators": [],
          "name": "unionTuple2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 836,
          "end": 846,
          "decorators": [],
          "name": "unionTuple",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 848,
      "end": 874,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 848,
        "end": 873,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 848,
          "end": 859,
          "decorators": [],
          "name": "numStrTuple",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 862,
          "end": 873,
          "decorators": [],
          "name": "unionTuple3",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 897,
      "end": 923,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 902,
        "end": 907,
        "decorators": [],
        "name": "test1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 910,
        "end": 923,
        "elementTypes": [
          {
            "type": "TSRestType",
            "start": 911,
            "end": 922,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 914,
              "end": 922,
              "elementType": {
                "type": "TSNumberKeyword",
                "start": 914,
                "end": 920
              }
            }
          }
        ]
      },
      "typeParameters": null
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 924,
      "end": 959,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 929,
        "end": 935,
        "decorators": [],
        "name": "fixed1",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "start": 938,
        "end": 959,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 938,
            "end": 943,
            "typeArguments": null,
            "typeName": {
              "type": "Identifier",
              "start": 938,
              "end": 943,
              "decorators": [],
              "name": "test1",
              "optional": false,
              "typeAnnotation": null
            }
          },
          {
            "type": "TSTypeLiteral",
            "start": 946,
            "end": 959,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 948,
                "end": 957,
                "accessibility": null,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 948,
                  "end": 954,
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
                  "start": 954,
                  "end": 957,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 956,
                    "end": 957,
                    "literal": {
                      "type": "Literal",
                      "start": 956,
                      "end": 957,
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
      "start": 960,
      "end": 985,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 964,
          "end": 985,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 964,
            "end": 976,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 968,
              "end": 976,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 970,
                "end": 976,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 970,
                  "end": 976,
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
            "start": 979,
            "end": 985,
            "elements": [
              {
                "type": "Literal",
                "start": 980,
                "end": 981,
                "raw": "0",
                "value": 0
              },
              {
                "type": "Literal",
                "start": 983,
                "end": 984,
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
      "start": 997,
      "end": 1017,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 1002,
        "end": 1012,
        "decorators": [],
        "name": "EmptyTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeAnnotation": {
        "type": "TSTupleType",
        "start": 1015,
        "end": 1017,
        "elementTypes": []
      },
      "typeParameters": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1018,
      "end": 1080,
      "body": {
        "type": "TSInterfaceBody",
        "start": 1060,
        "end": 1080,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1062,
            "end": 1078,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 1062,
              "end": 1071,
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
              "start": 1072,
              "end": 1077,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1074,
                "end": 1077
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 1049,
          "end": 1059,
          "expression": {
            "type": "Identifier",
            "start": 1049,
            "end": 1059,
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
        "start": 1028,
        "end": 1040,
        "decorators": [],
        "name": "MyEmptyTuple",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 1081,
      "end": 1115,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1087,
          "end": 1115,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1087,
            "end": 1110,
            "decorators": [],
            "name": "withExtra",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1096,
              "end": 1110,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1098,
                "end": 1110,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 1098,
                  "end": 1110,
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
            "start": 1113,
            "end": 1115,
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
