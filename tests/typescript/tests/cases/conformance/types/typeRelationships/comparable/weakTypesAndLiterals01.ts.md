__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 739,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 138,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 14,
        "decorators": [],
        "name": "WeakTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 21,
        "end": 137,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 23,
            "end": 43,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 25,
                "end": 41,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 25,
                  "end": 33,
                  "decorators": [],
                  "name": "optional",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 34,
                  "end": 40,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 36,
                    "end": 40,
                    "literal": {
                      "type": "Literal",
                      "start": 36,
                      "end": 40,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 50,
            "end": 76,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 52,
                "end": 74,
                "key": {
                  "type": "Identifier",
                  "start": 52,
                  "end": 63,
                  "decorators": [],
                  "name": "toLowerCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 66,
                  "end": 74,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 68,
                    "end": 74
                  }
                },
                "accessibility": null,
                "readonly": false,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 83,
            "end": 137,
            "members": [
              {
                "type": "TSMethodSignature",
                "start": 85,
                "end": 108,
                "key": {
                  "type": "Identifier",
                  "start": 85,
                  "end": 96,
                  "decorators": [],
                  "name": "toUpperCase",
                  "optional": false,
                  "typeAnnotation": null
                },
                "computed": false,
                "optional": true,
                "kind": "method",
                "typeParameters": null,
                "params": [],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "start": 99,
                  "end": 107,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 101,
                    "end": 107
                  }
                },
                "accessibility": null,
                "readonly": false,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 109,
                "end": 135,
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 109,
                  "end": 126,
                  "decorators": [],
                  "name": "otherOptionalProp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 127,
                  "end": 135,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 129,
                    "end": 135
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
      "type": "TSTypeAliasDeclaration",
      "start": 140,
      "end": 203,
      "id": {
        "type": "Identifier",
        "start": 145,
        "end": 164,
        "decorators": [],
        "name": "LiteralsOrWeakTypes",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 171,
        "end": 202,
        "types": [
          {
            "type": "TSLiteralType",
            "start": 173,
            "end": 176,
            "literal": {
              "type": "Literal",
              "start": 173,
              "end": 176,
              "value": "A",
              "raw": "\"A\""
            }
          },
          {
            "type": "TSLiteralType",
            "start": 183,
            "end": 186,
            "literal": {
              "type": "Literal",
              "start": 183,
              "end": 186,
              "value": "B",
              "raw": "\"B\""
            }
          },
          {
            "type": "TSTypeReference",
            "start": 193,
            "end": 202,
            "typeName": {
              "type": "Identifier",
              "start": 193,
              "end": 202,
              "decorators": [],
              "name": "WeakTypes",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 205,
      "end": 233,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 217,
          "end": 232,
          "id": {
            "type": "Identifier",
            "start": 217,
            "end": 232,
            "decorators": [],
            "name": "aOrB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 232,
              "typeAnnotation": {
                "type": "TSUnionType",
                "start": 223,
                "end": 232,
                "types": [
                  {
                    "type": "TSLiteralType",
                    "start": 223,
                    "end": 226,
                    "literal": {
                      "type": "Literal",
                      "start": 223,
                      "end": 226,
                      "value": "A",
                      "raw": "\"A\""
                    }
                  },
                  {
                    "type": "TSLiteralType",
                    "start": 229,
                    "end": 232,
                    "literal": {
                      "type": "Literal",
                      "start": 229,
                      "end": 232,
                      "value": "B",
                      "raw": "\"B\""
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
      "start": 235,
      "end": 364,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 241,
          "end": 364,
          "id": {
            "type": "Identifier",
            "start": 241,
            "end": 242,
            "decorators": [],
            "name": "f",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 245,
            "end": 364,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 246,
                "end": 270,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 249,
                  "end": 270,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 251,
                    "end": 270,
                    "typeName": {
                      "type": "Identifier",
                      "start": 251,
                      "end": 270,
                      "decorators": [],
                      "name": "LiteralsOrWeakTypes",
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
              "start": 275,
              "end": 364,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 281,
                  "end": 362,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 285,
                    "end": 296,
                    "left": {
                      "type": "Identifier",
                      "start": 285,
                      "end": 288,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 293,
                      "end": 296,
                      "value": "A",
                      "raw": "\"A\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 298,
                    "end": 325,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 308,
                        "end": 319,
                        "argument": {
                          "type": "Identifier",
                          "start": 315,
                          "end": 318,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 335,
                    "end": 362,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 345,
                        "end": 356,
                        "argument": {
                          "type": "Identifier",
                          "start": 352,
                          "end": 355,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
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
    },
    {
      "type": "VariableDeclaration",
      "start": 366,
      "end": 485,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 372,
          "end": 485,
          "id": {
            "type": "Identifier",
            "start": 372,
            "end": 373,
            "decorators": [],
            "name": "g",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 376,
            "end": 485,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 377,
                "end": 391,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 380,
                  "end": 391,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 382,
                    "end": 391,
                    "typeName": {
                      "type": "Identifier",
                      "start": 382,
                      "end": 391,
                      "decorators": [],
                      "name": "WeakTypes",
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
              "start": 396,
              "end": 485,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 402,
                  "end": 483,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 406,
                    "end": 417,
                    "left": {
                      "type": "Identifier",
                      "start": 406,
                      "end": 409,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "start": 414,
                      "end": 417,
                      "value": "A",
                      "raw": "\"A\""
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 419,
                    "end": 446,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 429,
                        "end": 440,
                        "argument": {
                          "type": "Identifier",
                          "start": 436,
                          "end": 439,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 456,
                    "end": 483,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 466,
                        "end": 477,
                        "argument": {
                          "type": "Identifier",
                          "start": 473,
                          "end": 476,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
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
    },
    {
      "type": "VariableDeclaration",
      "start": 487,
      "end": 617,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 493,
          "end": 617,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "decorators": [],
            "name": "h",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 497,
            "end": 617,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 498,
                "end": 522,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 501,
                  "end": 522,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 503,
                    "end": 522,
                    "typeName": {
                      "type": "Identifier",
                      "start": 503,
                      "end": 522,
                      "decorators": [],
                      "name": "LiteralsOrWeakTypes",
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
              "start": 527,
              "end": 617,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 533,
                  "end": 615,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 537,
                    "end": 549,
                    "left": {
                      "type": "Identifier",
                      "start": 537,
                      "end": 540,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "start": 545,
                      "end": 549,
                      "decorators": [],
                      "name": "aOrB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 551,
                    "end": 578,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 561,
                        "end": 572,
                        "argument": {
                          "type": "Identifier",
                          "start": 568,
                          "end": 571,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 588,
                    "end": 615,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 598,
                        "end": 609,
                        "argument": {
                          "type": "Identifier",
                          "start": 605,
                          "end": 608,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
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
    },
    {
      "type": "VariableDeclaration",
      "start": 619,
      "end": 739,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 625,
          "end": 739,
          "id": {
            "type": "Identifier",
            "start": 625,
            "end": 626,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 629,
            "end": 739,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "start": 630,
                "end": 644,
                "decorators": [],
                "name": "arg",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 633,
                  "end": 644,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 635,
                    "end": 644,
                    "typeName": {
                      "type": "Identifier",
                      "start": 635,
                      "end": 644,
                      "decorators": [],
                      "name": "WeakTypes",
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
              "start": 649,
              "end": 739,
              "body": [
                {
                  "type": "IfStatement",
                  "start": 655,
                  "end": 737,
                  "test": {
                    "type": "BinaryExpression",
                    "start": 659,
                    "end": 671,
                    "left": {
                      "type": "Identifier",
                      "start": 659,
                      "end": 662,
                      "decorators": [],
                      "name": "arg",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "operator": "===",
                    "right": {
                      "type": "Identifier",
                      "start": 667,
                      "end": 671,
                      "decorators": [],
                      "name": "aOrB",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "start": 673,
                    "end": 700,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 683,
                        "end": 694,
                        "argument": {
                          "type": "Identifier",
                          "start": 690,
                          "end": 693,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "start": 710,
                    "end": 737,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 720,
                        "end": 731,
                        "argument": {
                          "type": "Identifier",
                          "start": 727,
                          "end": 730,
                          "decorators": [],
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  }
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
