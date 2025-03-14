__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 741,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 52,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 52,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 52,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 52,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 21,
                "end": 52,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 27,
                    "end": 50,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 27,
                      "end": 30,
                      "decorators": [],
                      "name": "log",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 31,
                        "end": 42,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 34,
                          "end": 42,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 36,
                            "end": 42
                          }
                        }
                      }
                    ],
                    "readonly": false,
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 43,
                      "end": 49,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 45,
                        "end": 49
                      }
                    },
                    "static": false
                  }
                ]
              }
            }
          },
          "init": null
        }
      ],
      "declare": true,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 53,
      "end": 163,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 163,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 88,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 79,
              "decorators": [],
              "name": "name",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 87,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 81,
                "end": 87
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 93,
            "end": 161,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 93,
              "end": 99,
              "decorators": [],
              "name": "skills",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 99,
              "end": 160,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 101,
                "end": 160,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 111,
                    "end": 127,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 111,
                      "end": 118,
                      "decorators": [],
                      "name": "primary",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 118,
                      "end": 126,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 120,
                        "end": 126
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 136,
                    "end": 154,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 136,
                      "end": 145,
                      "decorators": [],
                      "name": "secondary",
                      "optional": false
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 145,
                      "end": 153,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 147,
                        "end": 153
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 63,
        "end": 68,
        "decorators": [],
        "name": "Robot",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 164,
      "end": 252,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 168,
          "end": 251,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 168,
            "end": 181,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 174,
              "end": 181,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 176,
                "end": 181,
                "typeName": {
                  "type": "Identifier",
                  "start": 176,
                  "end": 181,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 184,
            "end": 251,
            "properties": [
              {
                "type": "Property",
                "start": 186,
                "end": 199,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 190,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 192,
                  "end": 199,
                  "raw": "\"mower\"",
                  "value": "mower"
                }
              },
              {
                "type": "Property",
                "start": 201,
                "end": 249,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 201,
                  "end": 207,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 209,
                  "end": 249,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 211,
                      "end": 228,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 211,
                        "end": 218,
                        "decorators": [],
                        "name": "primary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 220,
                        "end": 228,
                        "raw": "\"mowing\"",
                        "value": "mowing"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 230,
                      "end": 247,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 230,
                        "end": 239,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 241,
                        "end": 247,
                        "raw": "\"none\"",
                        "value": "none"
                      }
                    }
                  ]
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
      "start": 253,
      "end": 347,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 257,
          "end": 346,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 257,
            "end": 270,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 263,
              "end": 270,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 265,
                "end": 270,
                "typeName": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 270,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 273,
            "end": 346,
            "properties": [
              {
                "type": "Property",
                "start": 275,
                "end": 290,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 279,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 281,
                  "end": 290,
                  "raw": "\"trimmer\"",
                  "value": "trimmer"
                }
              },
              {
                "type": "Property",
                "start": 292,
                "end": 344,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 298,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 300,
                  "end": 344,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 302,
                      "end": 321,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 302,
                        "end": 309,
                        "decorators": [],
                        "name": "primary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 311,
                        "end": 321,
                        "raw": "\"trimming\"",
                        "value": "trimming"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 323,
                      "end": 342,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 323,
                        "end": 332,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 334,
                        "end": 342,
                        "raw": "\"edging\"",
                        "value": "edging"
                      }
                    }
                  ]
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
      "start": 349,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 353,
          "end": 418,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 353,
            "end": 409,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 355,
                "end": 407,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 355,
                  "end": 361,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 363,
                  "end": 407,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 365,
                      "end": 382,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 365,
                        "end": 372,
                        "decorators": [],
                        "name": "primary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 374,
                        "end": 382,
                        "decorators": [],
                        "name": "primaryA",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 384,
                      "end": 405,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 384,
                        "end": 393,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 395,
                        "end": 405,
                        "decorators": [],
                        "name": "secondaryA",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 412,
            "end": 418,
            "decorators": [],
            "name": "robotA",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 420,
      "end": 503,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 424,
          "end": 502,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 424,
            "end": 493,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 426,
                "end": 437,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 426,
                  "end": 430,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 432,
                  "end": 437,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 439,
                "end": 491,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 445,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 447,
                  "end": 491,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 449,
                      "end": 466,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 449,
                        "end": 456,
                        "decorators": [],
                        "name": "primary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 458,
                        "end": 466,
                        "decorators": [],
                        "name": "primaryB",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 468,
                      "end": 489,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 468,
                        "end": 477,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 479,
                        "end": 489,
                        "decorators": [],
                        "name": "secondaryB",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ]
          },
          "init": {
            "type": "Identifier",
            "start": 496,
            "end": 502,
            "decorators": [],
            "name": "robotB",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 504,
      "end": 659,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 508,
          "end": 658,
          "definite": false,
          "id": {
            "type": "ObjectPattern",
            "start": 508,
            "end": 577,
            "decorators": [],
            "optional": false,
            "properties": [
              {
                "type": "Property",
                "start": 510,
                "end": 521,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 510,
                  "end": 514,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Identifier",
                  "start": 516,
                  "end": 521,
                  "decorators": [],
                  "name": "nameC",
                  "optional": false
                }
              },
              {
                "type": "Property",
                "start": 523,
                "end": 575,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 529,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectPattern",
                  "start": 531,
                  "end": 575,
                  "decorators": [],
                  "optional": false,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 533,
                      "end": 550,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 533,
                        "end": 540,
                        "decorators": [],
                        "name": "primary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 542,
                        "end": 550,
                        "decorators": [],
                        "name": "primaryB",
                        "optional": false
                      }
                    },
                    {
                      "type": "Property",
                      "start": 552,
                      "end": 573,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 552,
                        "end": 561,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Identifier",
                        "start": 563,
                        "end": 573,
                        "decorators": [],
                        "name": "secondaryB",
                        "optional": false
                      }
                    }
                  ]
                }
              }
            ]
          },
          "init": {
            "type": "ObjectExpression",
            "start": 580,
            "end": 658,
            "properties": [
              {
                "type": "Property",
                "start": 582,
                "end": 595,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 582,
                  "end": 586,
                  "decorators": [],
                  "name": "name",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 588,
                  "end": 595,
                  "raw": "\"Edger\"",
                  "value": "Edger"
                }
              },
              {
                "type": "Property",
                "start": 597,
                "end": 656,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 597,
                  "end": 603,
                  "decorators": [],
                  "name": "skills",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ObjectExpression",
                  "start": 605,
                  "end": 656,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 607,
                      "end": 624,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 614,
                        "decorators": [],
                        "name": "primary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 616,
                        "end": 624,
                        "raw": "\"edging\"",
                        "value": "edging"
                      }
                    },
                    {
                      "type": "Property",
                      "start": 626,
                      "end": 654,
                      "computed": false,
                      "key": {
                        "type": "Identifier",
                        "start": 626,
                        "end": 635,
                        "decorators": [],
                        "name": "secondary",
                        "optional": false
                      },
                      "kind": "init",
                      "method": false,
                      "optional": false,
                      "shorthand": false,
                      "value": {
                        "type": "Literal",
                        "start": 637,
                        "end": 654,
                        "raw": "\"branch trimming\"",
                        "value": "branch trimming"
                      }
                    }
                  ]
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
      "type": "IfStatement",
      "start": 661,
      "end": 741,
      "alternate": {
        "type": "BlockStatement",
        "start": 714,
        "end": 741,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 720,
            "end": 739,
            "expression": {
              "type": "CallExpression",
              "start": 720,
              "end": 738,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 732,
                  "end": 737,
                  "decorators": [],
                  "name": "nameC",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 720,
                "end": 731,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 720,
                  "end": 727,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 728,
                  "end": 731,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 681,
        "end": 708,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 687,
            "end": 706,
            "expression": {
              "type": "CallExpression",
              "start": 687,
              "end": 705,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 699,
                  "end": 704,
                  "decorators": [],
                  "name": "nameC",
                  "optional": false
                }
              ],
              "callee": {
                "type": "MemberExpression",
                "start": 687,
                "end": 698,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 687,
                  "end": 694,
                  "decorators": [],
                  "name": "console",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 695,
                  "end": 698,
                  "decorators": [],
                  "name": "log",
                  "optional": false
                }
              },
              "optional": false
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 665,
        "end": 679,
        "operator": "==",
        "left": {
          "type": "Identifier",
          "start": 665,
          "end": 670,
          "decorators": [],
          "name": "nameB",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 674,
          "end": 679,
          "decorators": [],
          "name": "nameB",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
