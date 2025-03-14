__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 4881,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 26,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 26,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 24,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 14,
              "end": 15,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 23,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 17,
                "end": 23
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "decorators": [],
        "name": "A",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "ClassDeclaration",
      "start": 27,
      "end": 63,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 45,
        "end": 63,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 51,
            "end": 61,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 60,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 54,
                "end": 60
              }
            },
            "value": null
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 34,
        "decorators": [],
        "name": "B",
        "optional": false
      },
      "implements": [],
      "superClass": {
        "type": "Identifier",
        "start": 43,
        "end": 44,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 64,
      "end": 109,
      "body": {
        "type": "TSEnumBody",
        "start": 77,
        "end": 109,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 83,
            "end": 88,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 83,
              "end": 88,
              "decorators": [],
              "name": "North",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 90,
            "end": 95,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 90,
              "end": 95,
              "decorators": [],
              "name": "South",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 97,
            "end": 101,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 97,
              "end": 101,
              "decorators": [],
              "name": "East",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 103,
            "end": 107,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 103,
              "end": 107,
              "decorators": [],
              "name": "West",
              "optional": false
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 69,
        "end": 76,
        "decorators": [],
        "name": "Compass",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 111,
      "end": 184,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 115,
          "end": 183,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 115,
            "end": 148,
            "decorators": [],
            "name": "numIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 123,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 125,
                "end": 148,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 127,
                    "end": 146,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 128,
                        "end": 137,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 129,
                          "end": 137,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 131,
                            "end": 137
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 138,
                      "end": 146,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 140,
                        "end": 146
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 151,
            "end": 183,
            "properties": [
              {
                "type": "Property",
                "start": 153,
                "end": 163,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 153,
                  "end": 154,
                  "raw": "3",
                  "value": 3
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 156,
                  "end": 163,
                  "raw": "'three'",
                  "value": "three"
                }
              },
              {
                "type": "Property",
                "start": 165,
                "end": 181,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 165,
                  "end": 172,
                  "raw": "'three'",
                  "value": "three"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 174,
                  "end": 181,
                  "raw": "'three'",
                  "value": "three"
                }
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
      "end": 268,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 267,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 223,
            "decorators": [],
            "name": "strIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 223,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 199,
                "end": 223,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 201,
                    "end": 221,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 202,
                        "end": 211,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 203,
                          "end": 211,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 205,
                            "end": 211
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 212,
                      "end": 221,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 214,
                        "end": 221,
                        "typeName": {
                          "type": "Identifier",
                          "start": 214,
                          "end": 221,
                          "decorators": [],
                          "name": "Compass",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 226,
            "end": 267,
            "properties": [
              {
                "type": "Property",
                "start": 228,
                "end": 246,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 228,
                  "end": 231,
                  "raw": "'N'",
                  "value": "N"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 233,
                  "end": 246,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 233,
                    "end": 240,
                    "decorators": [],
                    "name": "Compass",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 241,
                    "end": 246,
                    "decorators": [],
                    "name": "North",
                    "optional": false
                  }
                }
              },
              {
                "type": "Property",
                "start": 248,
                "end": 265,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 248,
                  "end": 251,
                  "raw": "'E'",
                  "value": "E"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "MemberExpression",
                  "start": 253,
                  "end": 265,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 253,
                    "end": 260,
                    "decorators": [],
                    "name": "Compass",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 261,
                    "end": 265,
                    "decorators": [],
                    "name": "East",
                    "optional": false
                  }
                }
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
      "start": 269,
      "end": 344,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 273,
          "end": 343,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 273,
            "end": 343,
            "decorators": [],
            "name": "bothIndex",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 282,
              "end": 343,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 288,
                "end": 343,
                "members": [
                  {
                    "type": "TSIndexSignature",
                    "start": 298,
                    "end": 313,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 299,
                        "end": 308,
                        "decorators": [],
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 300,
                          "end": 308,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 302,
                            "end": 308
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 309,
                      "end": 312,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 311,
                        "end": 312,
                        "typeName": {
                          "type": "Identifier",
                          "start": 311,
                          "end": 312,
                          "decorators": [],
                          "name": "A",
                          "optional": false
                        }
                      }
                    }
                  },
                  {
                    "type": "TSIndexSignature",
                    "start": 322,
                    "end": 337,
                    "parameters": [
                      {
                        "type": "Identifier",
                        "start": 323,
                        "end": 332,
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 324,
                          "end": 332,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 326,
                            "end": 332
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 333,
                      "end": 336,
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "start": 335,
                        "end": 336,
                        "typeName": {
                          "type": "Identifier",
                          "start": 335,
                          "end": 336,
                          "decorators": [],
                          "name": "B",
                          "optional": false
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "FunctionDeclaration",
      "start": 346,
      "end": 368,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 365,
        "end": 368,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 355,
        "end": 362,
        "decorators": [],
        "name": "noIndex",
        "optional": false
      },
      "params": []
    },
    {
      "type": "VariableDeclaration",
      "start": 370,
      "end": 500,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 374,
          "end": 499,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 374,
            "end": 377,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 380,
            "end": 499,
            "properties": [
              {
                "type": "Property",
                "start": 386,
                "end": 395,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 386,
                  "end": 388,
                  "raw": "10",
                  "value": 10
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 390,
                  "end": 395,
                  "raw": "'ten'",
                  "value": "ten"
                }
              },
              {
                "type": "Property",
                "start": 401,
                "end": 411,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 401,
                  "end": 402,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 404,
                  "end": 411,
                  "raw": "'hello'",
                  "value": "hello"
                }
              },
              {
                "type": "Property",
                "start": 417,
                "end": 422,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 417,
                  "end": 418,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 420,
                  "end": 422,
                  "raw": "32",
                  "value": 32
                }
              },
              {
                "type": "Property",
                "start": 428,
                "end": 468,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 428,
                  "end": 429,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 431,
                  "end": 468,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 433,
                      "end": 443,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 433,
                        "end": 434,
                        "decorators": [],
                        "name": "n",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 436,
                        "end": 443,
                        "raw": "'world'",
                        "value": "world"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 445,
                      "end": 450,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 445,
                        "end": 446,
                        "decorators": [],
                        "name": "m",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 448,
                        "end": 450,
                        "raw": "15",
                        "value": 15
                      }
                    },
                    {
                      "type": "Property",
                      "start": 452,
                      "end": 466,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 452,
                        "end": 453,
                        "decorators": [],
                        "name": "o",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "ArrowFunctionExpression",
                        "start": 455,
                        "end": 466,
                        "async": false,
                        "body": {
                          "type": "Literal",
                          "start": 461,
                          "end": 466,
                          "raw": "false",
                          "value": false
                        },
                        "expression": true,
                        "generator": false,
                        "id": null,
                        "params": []
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 474,
                "end": 497,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 474,
                  "end": 492,
                  "raw": "'literal property'",
                  "value": "literal property"
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 494,
                  "end": 497,
                  "raw": "100",
                  "value": 100
                }
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
      "start": 501,
      "end": 522,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 505,
          "end": 521,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 505,
            "end": 516,
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 511,
              "end": 516,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 513,
                "end": 516
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 519,
            "end": 521,
            "properties": []
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 523,
      "end": 559,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 527,
          "end": 558,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 527,
            "end": 558,
            "decorators": [],
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 541,
              "end": 558,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 543,
                "end": 558,
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 543,
                    "end": 549
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 552,
                    "end": 558
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 560,
      "end": 593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 592,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 592,
            "decorators": [],
            "name": "someObject",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 574,
              "end": 592,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 576,
                "end": 592,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 578,
                    "end": 590,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 578,
                      "end": 582,
                      "decorators": [],
                      "name": "name",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 582,
                      "end": 590,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 584,
                        "end": 590
                      }
                    }
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 626,
      "end": 636,
      "expression": {
        "type": "AssignmentExpression",
        "start": 626,
        "end": 635,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 626,
          "end": 631,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 626,
            "end": 629,
            "decorators": [],
            "name": "obj",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 630,
            "end": 631,
            "decorators": [],
            "name": "y",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 634,
          "end": 635,
          "raw": "4",
          "value": 4
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 680,
      "end": 719,
      "expression": {
        "type": "AssignmentExpression",
        "start": 680,
        "end": 718,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 680,
          "end": 688,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 680,
            "end": 686,
            "decorators": [],
            "name": "anyVar",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 687,
            "end": 688,
            "decorators": [],
            "name": "x",
            "optional": false
          }
        },
        "right": {
          "type": "AssignmentExpression",
          "start": 691,
          "end": 718,
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "start": 691,
            "end": 699,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 691,
              "end": 697,
              "decorators": [],
              "name": "anyVar",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 698,
              "end": 699,
              "decorators": [],
              "name": "y",
              "optional": false
            }
          },
          "right": {
            "type": "AssignmentExpression",
            "start": 702,
            "end": 718,
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "start": 702,
              "end": 707,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 702,
                "end": 705,
                "decorators": [],
                "name": "obj",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 706,
                "end": 707,
                "decorators": [],
                "name": "x",
                "optional": false
              }
            },
            "right": {
              "type": "MemberExpression",
              "start": 710,
              "end": 718,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 710,
                "end": 716,
                "decorators": [],
                "name": "anyVar",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 717,
                "end": 718,
                "decorators": [],
                "name": "z",
                "optional": false
              }
            }
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 771,
      "end": 786,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 775,
          "end": 785,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 775,
            "end": 777,
            "decorators": [],
            "name": "aa",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 780,
            "end": 785,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 780,
              "end": 783,
              "decorators": [],
              "name": "obj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 784,
              "end": 785,
              "decorators": [],
              "name": "x",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 863,
      "end": 891,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 867,
          "end": 890,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 867,
            "end": 869,
            "decorators": [],
            "name": "bb",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 872,
            "end": 890,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 872,
              "end": 875,
              "decorators": [],
              "name": "obj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 876,
              "end": 890,
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 975,
      "end": 992,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 979,
          "end": 991,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 979,
            "end": 981,
            "decorators": [],
            "name": "cc",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 984,
            "end": 991,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 984,
              "end": 987,
              "decorators": [],
              "name": "obj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 988,
              "end": 991,
              "decorators": [],
              "name": "qqq",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1109,
      "end": 1142,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1113,
          "end": 1141,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1113,
            "end": 1115,
            "decorators": [],
            "name": "dd",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1118,
            "end": 1141,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1118,
              "end": 1121,
              "decorators": [],
              "name": "obj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1122,
              "end": 1140,
              "raw": "'literal property'",
              "value": "literal property"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1143,
      "end": 1158,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1147,
          "end": 1157,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1147,
            "end": 1157,
            "decorators": [],
            "name": "dd",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1149,
              "end": 1157,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1151,
                "end": 1157
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1269,
      "end": 1300,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1273,
          "end": 1299,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1273,
            "end": 1275,
            "decorators": [],
            "name": "ee",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1278,
            "end": 1299,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1278,
              "end": 1281,
              "decorators": [],
              "name": "obj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1282,
              "end": 1298,
              "raw": "'wa wa wa wa wa'",
              "value": "wa wa wa wa wa"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1301,
      "end": 1313,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1305,
          "end": 1312,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1305,
            "end": 1312,
            "decorators": [],
            "name": "ee",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1307,
              "end": 1312,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1309,
                "end": 1312
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1429,
      "end": 1448,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1433,
          "end": 1447,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1433,
            "end": 1435,
            "decorators": [],
            "name": "ff",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1438,
            "end": 1447,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1438,
              "end": 1441,
              "decorators": [],
              "name": "obj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1442,
              "end": 1446,
              "raw": "'10'",
              "value": "10"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1449,
      "end": 1464,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1453,
          "end": 1463,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1453,
            "end": 1463,
            "decorators": [],
            "name": "ff",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1455,
              "end": 1463,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1457,
                "end": 1463
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1583,
      "end": 1601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1587,
          "end": 1600,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1587,
            "end": 1589,
            "decorators": [],
            "name": "gg",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1592,
            "end": 1600,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1592,
              "end": 1595,
              "decorators": [],
              "name": "obj",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1596,
              "end": 1599,
              "raw": "'1'",
              "value": "1"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1602,
      "end": 1614,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1606,
          "end": 1613,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1606,
            "end": 1613,
            "decorators": [],
            "name": "gg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1608,
              "end": 1613,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1610,
                "end": 1613
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1709,
      "end": 1732,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1713,
          "end": 1731,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1713,
            "end": 1715,
            "decorators": [],
            "name": "hh",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1718,
            "end": 1731,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1718,
              "end": 1726,
              "decorators": [],
              "name": "numIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 1727,
              "end": 1730,
              "raw": "3.0",
              "value": 3
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1733,
      "end": 1748,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1737,
          "end": 1747,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1737,
            "end": 1747,
            "decorators": [],
            "name": "hh",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1739,
              "end": 1747,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1741,
                "end": 1747
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1840,
      "end": 1873,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1844,
          "end": 1872,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1844,
            "end": 1846,
            "decorators": [],
            "name": "ii",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1849,
            "end": 1872,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1849,
              "end": 1857,
              "decorators": [],
              "name": "numIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 1858,
              "end": 1871,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 1858,
                "end": 1865,
                "decorators": [],
                "name": "Compass",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 1866,
                "end": 1871,
                "decorators": [],
                "name": "South",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1874,
      "end": 1889,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1878,
          "end": 1888,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1878,
            "end": 1888,
            "decorators": [],
            "name": "ii",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1880,
              "end": 1888,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1882,
                "end": 1888
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 1990,
      "end": 2016,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1994,
          "end": 2015,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 1994,
            "end": 1996,
            "decorators": [],
            "name": "jj",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 1999,
            "end": 2015,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 1999,
              "end": 2007,
              "decorators": [],
              "name": "numIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2008,
              "end": 2014,
              "decorators": [],
              "name": "anyVar",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2017,
      "end": 2032,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2021,
          "end": 2031,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2021,
            "end": 2031,
            "decorators": [],
            "name": "jj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2023,
              "end": 2031,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2025,
                "end": 2031
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2126,
      "end": 2152,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2130,
          "end": 2151,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2130,
            "end": 2132,
            "decorators": [],
            "name": "kk",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2135,
            "end": 2151,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 2135,
              "end": 2143,
              "decorators": [],
              "name": "numIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 2144,
              "end": 2150,
              "raw": "'what'",
              "value": "what"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2153,
      "end": 2165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2157,
          "end": 2164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2157,
            "end": 2164,
            "decorators": [],
            "name": "kk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2159,
              "end": 2164,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2161,
                "end": 2164
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2296,
      "end": 2326,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2300,
          "end": 2325,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2300,
            "end": 2302,
            "decorators": [],
            "name": "ll",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2305,
            "end": 2325,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 2305,
              "end": 2313,
              "decorators": [],
              "name": "numIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 2314,
              "end": 2324,
              "decorators": [],
              "name": "someObject",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2459,
      "end": 2482,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2463,
          "end": 2481,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2463,
            "end": 2465,
            "decorators": [],
            "name": "mm",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2468,
            "end": 2481,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 2468,
              "end": 2476,
              "decorators": [],
              "name": "strIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 2477,
              "end": 2480,
              "raw": "'N'",
              "value": "N"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2483,
      "end": 2499,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2487,
          "end": 2498,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2487,
            "end": 2498,
            "decorators": [],
            "name": "mm",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2489,
              "end": 2498,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2491,
                "end": 2498,
                "typeName": {
                  "type": "Identifier",
                  "start": 2491,
                  "end": 2498,
                  "decorators": [],
                  "name": "Compass",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2500,
      "end": 2526,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2504,
          "end": 2525,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2504,
            "end": 2507,
            "decorators": [],
            "name": "mm2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2510,
            "end": 2525,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 2510,
              "end": 2518,
              "decorators": [],
              "name": "strIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 2519,
              "end": 2524,
              "raw": "'zzz'",
              "value": "zzz"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2527,
      "end": 2544,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2531,
          "end": 2543,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2531,
            "end": 2543,
            "decorators": [],
            "name": "mm2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2534,
              "end": 2543,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2536,
                "end": 2543,
                "typeName": {
                  "type": "Identifier",
                  "start": 2536,
                  "end": 2543,
                  "decorators": [],
                  "name": "Compass",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2669,
      "end": 2691,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2673,
          "end": 2690,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2673,
            "end": 2675,
            "decorators": [],
            "name": "nn",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2678,
            "end": 2690,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 2678,
              "end": 2686,
              "decorators": [],
              "name": "strIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 2687,
              "end": 2689,
              "raw": "10",
              "value": 10
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2692,
      "end": 2708,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2696,
          "end": 2707,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2696,
            "end": 2707,
            "decorators": [],
            "name": "nn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2698,
              "end": 2707,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2700,
                "end": 2707,
                "typeName": {
                  "type": "Identifier",
                  "start": 2700,
                  "end": 2707,
                  "decorators": [],
                  "name": "Compass",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2830,
      "end": 2862,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2834,
          "end": 2861,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2834,
            "end": 2836,
            "decorators": [],
            "name": "oo",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 2839,
            "end": 2861,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 2839,
              "end": 2847,
              "decorators": [],
              "name": "strIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 2848,
              "end": 2860,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 2848,
                "end": 2855,
                "decorators": [],
                "name": "Compass",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 2856,
                "end": 2860,
                "decorators": [],
                "name": "East",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 2863,
      "end": 2879,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 2867,
          "end": 2878,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 2867,
            "end": 2878,
            "decorators": [],
            "name": "oo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 2869,
              "end": 2878,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 2871,
                "end": 2878,
                "typeName": {
                  "type": "Identifier",
                  "start": 2871,
                  "end": 2878,
                  "decorators": [],
                  "name": "Compass",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3010,
      "end": 3039,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3014,
          "end": 3038,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3014,
            "end": 3016,
            "decorators": [],
            "name": "pp",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3019,
            "end": 3038,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 3019,
              "end": 3027,
              "decorators": [],
              "name": "strIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "TSTypeAssertion",
              "start": 3028,
              "end": 3037,
              "expression": {
                "type": "Literal",
                "start": 3033,
                "end": 3037,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3029,
                "end": 3032
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3040,
      "end": 3056,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3044,
          "end": 3055,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3044,
            "end": 3055,
            "decorators": [],
            "name": "pp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3046,
              "end": 3055,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 3048,
                "end": 3055,
                "typeName": {
                  "type": "Identifier",
                  "start": 3048,
                  "end": 3055,
                  "decorators": [],
                  "name": "Compass",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3147,
      "end": 3169,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3151,
          "end": 3168,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3151,
            "end": 3153,
            "decorators": [],
            "name": "qq",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3156,
            "end": 3168,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 3156,
              "end": 3163,
              "decorators": [],
              "name": "noIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 3164,
              "end": 3167,
              "raw": "123",
              "value": 123
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3170,
      "end": 3182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3174,
          "end": 3181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3174,
            "end": 3181,
            "decorators": [],
            "name": "qq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3176,
              "end": 3181,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3178,
                "end": 3181
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3272,
      "end": 3297,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3276,
          "end": 3296,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3276,
            "end": 3278,
            "decorators": [],
            "name": "rr",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3281,
            "end": 3296,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 3281,
              "end": 3288,
              "decorators": [],
              "name": "noIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 3289,
              "end": 3295,
              "raw": "'zzzz'",
              "value": "zzzz"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3298,
      "end": 3310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3302,
          "end": 3309,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3302,
            "end": 3309,
            "decorators": [],
            "name": "rr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3304,
              "end": 3309,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3306,
                "end": 3309
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3398,
      "end": 3430,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3402,
          "end": 3429,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3402,
            "end": 3404,
            "decorators": [],
            "name": "ss",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3407,
            "end": 3429,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 3407,
              "end": 3414,
              "decorators": [],
              "name": "noIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 3415,
              "end": 3428,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 3415,
                "end": 3422,
                "decorators": [],
                "name": "Compass",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 3423,
                "end": 3428,
                "decorators": [],
                "name": "South",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3431,
      "end": 3443,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3435,
          "end": 3442,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3435,
            "end": 3442,
            "decorators": [],
            "name": "ss",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3437,
              "end": 3442,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3439,
                "end": 3442
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3540,
      "end": 3568,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3544,
          "end": 3567,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3544,
            "end": 3546,
            "decorators": [],
            "name": "tt",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3549,
            "end": 3567,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 3549,
              "end": 3556,
              "decorators": [],
              "name": "noIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "TSTypeAssertion",
              "start": 3557,
              "end": 3566,
              "expression": {
                "type": "Literal",
                "start": 3562,
                "end": 3566,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3558,
                "end": 3561
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3569,
      "end": 3581,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3573,
          "end": 3580,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3573,
            "end": 3580,
            "decorators": [],
            "name": "tt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3575,
              "end": 3580,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3577,
                "end": 3580
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3680,
      "end": 3709,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3684,
          "end": 3708,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3684,
            "end": 3686,
            "decorators": [],
            "name": "uu",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3689,
            "end": 3708,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 3689,
              "end": 3696,
              "decorators": [],
              "name": "noIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 3697,
              "end": 3707,
              "decorators": [],
              "name": "someObject",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3840,
      "end": 3861,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3844,
          "end": 3860,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3844,
            "end": 3846,
            "decorators": [],
            "name": "vv",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 3849,
            "end": 3860,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 3849,
              "end": 3856,
              "decorators": [],
              "name": "noIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 3857,
              "end": 3859,
              "raw": "32",
              "value": 32
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3862,
      "end": 3874,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3866,
          "end": 3873,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3866,
            "end": 3873,
            "decorators": [],
            "name": "vv",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 3868,
              "end": 3873,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3870,
                "end": 3873
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 3993,
      "end": 4026,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 3997,
          "end": 4025,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 3997,
            "end": 3999,
            "decorators": [],
            "name": "ww",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4002,
            "end": 4025,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 4002,
              "end": 4011,
              "decorators": [],
              "name": "bothIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "MemberExpression",
              "start": 4012,
              "end": 4024,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 4012,
                "end": 4019,
                "decorators": [],
                "name": "Compass",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 4020,
                "end": 4024,
                "decorators": [],
                "name": "East",
                "optional": false
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4027,
      "end": 4037,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4031,
          "end": 4036,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4031,
            "end": 4036,
            "decorators": [],
            "name": "ww",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4033,
              "end": 4036,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4035,
                "end": 4036,
                "typeName": {
                  "type": "Identifier",
                  "start": 4035,
                  "end": 4036,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4165,
      "end": 4195,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4169,
          "end": 4194,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4169,
            "end": 4171,
            "decorators": [],
            "name": "xx",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4174,
            "end": 4194,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 4174,
              "end": 4183,
              "decorators": [],
              "name": "bothIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "TSTypeAssertion",
              "start": 4184,
              "end": 4193,
              "expression": {
                "type": "Literal",
                "start": 4189,
                "end": 4193,
                "raw": "null",
                "value": null
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4185,
                "end": 4188
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4196,
      "end": 4206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4200,
          "end": 4205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4200,
            "end": 4205,
            "decorators": [],
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4202,
              "end": 4205,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4204,
                "end": 4205,
                "typeName": {
                  "type": "Identifier",
                  "start": 4204,
                  "end": 4205,
                  "decorators": [],
                  "name": "B",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4327,
      "end": 4353,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4331,
          "end": 4352,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4331,
            "end": 4333,
            "decorators": [],
            "name": "yy",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4336,
            "end": 4352,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 4336,
              "end": 4345,
              "decorators": [],
              "name": "bothIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 4346,
              "end": 4351,
              "raw": "'foo'",
              "value": "foo"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4354,
      "end": 4364,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4358,
          "end": 4363,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4358,
            "end": 4363,
            "decorators": [],
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4360,
              "end": 4363,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4362,
                "end": 4363,
                "typeName": {
                  "type": "Identifier",
                  "start": 4362,
                  "end": 4363,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4493,
      "end": 4519,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4497,
          "end": 4518,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4497,
            "end": 4499,
            "decorators": [],
            "name": "zz",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4502,
            "end": 4518,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 4502,
              "end": 4511,
              "decorators": [],
              "name": "bothIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 4512,
              "end": 4517,
              "raw": "'1.0'",
              "value": "1.0"
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4520,
      "end": 4530,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4524,
          "end": 4529,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4524,
            "end": 4529,
            "decorators": [],
            "name": "zz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4526,
              "end": 4529,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4528,
                "end": 4529,
                "typeName": {
                  "type": "Identifier",
                  "start": 4528,
                  "end": 4529,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4688,
      "end": 4721,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4692,
          "end": 4720,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4692,
            "end": 4696,
            "decorators": [],
            "name": "zzzz",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4699,
            "end": 4720,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 4699,
              "end": 4708,
              "decorators": [],
              "name": "bothIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 4709,
              "end": 4719,
              "decorators": [],
              "name": "someObject",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4732,
      "end": 4766,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4736,
          "end": 4765,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4736,
            "end": 4738,
            "decorators": [],
            "name": "x1",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4741,
            "end": 4765,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 4741,
              "end": 4749,
              "decorators": [],
              "name": "numIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 4750,
              "end": 4764,
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4767,
      "end": 4779,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4771,
          "end": 4778,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4771,
            "end": 4778,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4773,
              "end": 4778,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4775,
                "end": 4778
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4781,
      "end": 4815,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4785,
          "end": 4814,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4785,
            "end": 4787,
            "decorators": [],
            "name": "x2",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4790,
            "end": 4814,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 4790,
              "end": 4798,
              "decorators": [],
              "name": "strIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 4799,
              "end": 4813,
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4816,
      "end": 4832,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4820,
          "end": 4831,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4820,
            "end": 4831,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4822,
              "end": 4831,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4824,
                "end": 4831,
                "typeName": {
                  "type": "Identifier",
                  "start": 4824,
                  "end": 4831,
                  "decorators": [],
                  "name": "Compass",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4834,
      "end": 4869,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4838,
          "end": 4868,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4838,
            "end": 4840,
            "decorators": [],
            "name": "x3",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 4843,
            "end": 4868,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 4843,
              "end": 4852,
              "decorators": [],
              "name": "bothIndex",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 4853,
              "end": 4867,
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 4870,
      "end": 4880,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4874,
          "end": 4879,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4874,
            "end": 4879,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 4876,
              "end": 4879,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 4878,
                "end": 4879,
                "typeName": {
                  "type": "Identifier",
                  "start": 4878,
                  "end": 4879,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
