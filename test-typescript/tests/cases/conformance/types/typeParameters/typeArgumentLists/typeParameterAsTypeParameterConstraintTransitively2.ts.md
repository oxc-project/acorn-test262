typeParameterAsTypeParameterConstraintTransitively2.ts
```json
{
  "type": "Program",
  "start": 178,
  "end": 858,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 178,
      "end": 205,
      "body": {
        "type": "TSInterfaceBody",
        "start": 190,
        "end": 205,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 192,
            "end": 203,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 192,
              "end": 195,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 195,
              "end": 203,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 197,
                "end": 203
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 188,
        "end": 189,
        "decorators": [],
        "name": "A",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 206,
      "end": 244,
      "body": {
        "type": "TSInterfaceBody",
        "start": 228,
        "end": 244,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 230,
            "end": 242,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 230,
              "end": 233,
              "decorators": [],
              "name": "bar",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 233,
              "end": 241,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 235,
                "end": 241
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 226,
          "end": 227,
          "expression": {
            "type": "Identifier",
            "start": 226,
            "end": 227,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 216,
        "end": 217,
        "decorators": [],
        "name": "B",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 245,
      "end": 284,
      "body": {
        "type": "TSInterfaceBody",
        "start": 267,
        "end": 284,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 269,
            "end": 282,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 269,
              "end": 272,
              "decorators": [],
              "name": "baz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 272,
              "end": 281,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 274,
                "end": 281
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [
        {
          "type": "TSInterfaceHeritage",
          "start": 265,
          "end": 266,
          "expression": {
            "type": "Identifier",
            "start": 265,
            "end": 266,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      ],
      "id": {
        "type": "Identifier",
        "start": 255,
        "end": 256,
        "decorators": [],
        "name": "C",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 285,
      "end": 294,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 289,
          "end": 293,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 289,
            "end": 293,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 290,
              "end": 293,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 292,
                "end": 293,
                "typeName": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 293,
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
      "start": 295,
      "end": 304,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 303,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 303,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 300,
              "end": 303,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 302,
                "end": 303,
                "typeName": {
                  "type": "Identifier",
                  "start": 302,
                  "end": 303,
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
      "start": 305,
      "end": 314,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 309,
          "end": 313,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 309,
            "end": 313,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 310,
              "end": 313,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 312,
                "end": 313,
                "typeName": {
                  "type": "Identifier",
                  "start": 312,
                  "end": 313,
                  "decorators": [],
                  "name": "C",
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
      "type": "FunctionDeclaration",
      "start": 316,
      "end": 372,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 359,
        "end": 372,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 361,
            "end": 370,
            "argument": {
              "type": "Identifier",
              "start": 368,
              "end": 369,
              "decorators": [],
              "name": "z",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 325,
        "end": 328,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 338,
          "end": 342,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 339,
            "end": 342,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 341,
              "end": 342,
              "typeName": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 344,
          "end": 348,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 345,
            "end": 348,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 347,
              "end": 348,
              "typeName": {
                "type": "Identifier",
                "start": 347,
                "end": 348,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 350,
          "end": 354,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 351,
            "end": 354,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 353,
              "end": 354,
              "typeName": {
                "type": "Identifier",
                "start": 353,
                "end": 354,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 355,
        "end": 358,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 357,
          "end": 358,
          "typeName": {
            "type": "Identifier",
            "start": 357,
            "end": 358,
            "decorators": [],
            "name": "V",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 328,
        "end": 337,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 329,
            "end": 330,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 329,
              "end": 330,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 332,
            "end": 333,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 332,
              "end": 333,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 335,
            "end": 336,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 335,
              "end": 336,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 453,
      "end": 467,
      "expression": {
        "type": "CallExpression",
        "start": 453,
        "end": 466,
        "arguments": [
          {
            "type": "Literal",
            "start": 457,
            "end": 458,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 460,
            "end": 461,
            "raw": "2",
            "value": 2
          },
          {
            "type": "Literal",
            "start": 463,
            "end": 465,
            "raw": "''",
            "value": ""
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 453,
          "end": 456,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 468,
      "end": 524,
      "expression": {
        "type": "CallExpression",
        "start": 468,
        "end": 523,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 472,
            "end": 480,
            "properties": [
              {
                "type": "Property",
                "start": 474,
                "end": 478,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 474,
                  "end": 475,
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
                  "start": 477,
                  "end": 478,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 482,
            "end": 497,
            "properties": [
              {
                "type": "Property",
                "start": 484,
                "end": 488,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 484,
                  "end": 485,
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
                  "start": 487,
                  "end": 488,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 490,
                "end": 495,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 490,
                  "end": 491,
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
                  "start": 493,
                  "end": 495,
                  "raw": "''",
                  "value": ""
                }
              }
            ]
          },
          {
            "type": "ObjectExpression",
            "start": 499,
            "end": 522,
            "properties": [
              {
                "type": "Property",
                "start": 501,
                "end": 505,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 501,
                  "end": 502,
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
                  "start": 504,
                  "end": 505,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 507,
                "end": 511,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 507,
                  "end": 508,
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
                  "start": 510,
                  "end": 511,
                  "raw": "2",
                  "value": 2
                }
              },
              {
                "type": "Property",
                "start": 513,
                "end": 520,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 513,
                  "end": 514,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 516,
                  "end": 520,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 468,
          "end": 471,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 525,
      "end": 538,
      "expression": {
        "type": "CallExpression",
        "start": 525,
        "end": 537,
        "arguments": [
          {
            "type": "Identifier",
            "start": 529,
            "end": 530,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 532,
            "end": 533,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 535,
            "end": 536,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 525,
          "end": 528,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 539,
      "end": 580,
      "expression": {
        "type": "CallExpression",
        "start": 539,
        "end": 579,
        "arguments": [
          {
            "type": "Identifier",
            "start": 543,
            "end": 544,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          {
            "type": "ObjectExpression",
            "start": 546,
            "end": 575,
            "properties": [
              {
                "type": "Property",
                "start": 548,
                "end": 554,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 551,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 553,
                  "end": 554,
                  "raw": "1",
                  "value": 1
                }
              },
              {
                "type": "Property",
                "start": 556,
                "end": 563,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 556,
                  "end": 559,
                  "decorators": [],
                  "name": "bar",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 561,
                  "end": 563,
                  "raw": "''",
                  "value": ""
                }
              },
              {
                "type": "Property",
                "start": 565,
                "end": 573,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 565,
                  "end": 567,
                  "decorators": [],
                  "name": "hm",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 569,
                  "end": 573,
                  "raw": "true",
                  "value": true
                }
              }
            ]
          },
          {
            "type": "Identifier",
            "start": 577,
            "end": 578,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 539,
          "end": 542,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 581,
      "end": 651,
      "expression": {
        "type": "CallExpression",
        "start": 581,
        "end": 650,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 585,
            "end": 614,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 611,
              "end": 614,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 586,
                "end": 595,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 587,
                  "end": 595,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 589,
                    "end": 595
                  }
                }
              },
              {
                "type": "Identifier",
                "start": 597,
                "end": 606,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 598,
                  "end": 606,
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 600,
                    "end": 606
                  }
                }
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 616,
            "end": 638,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 635,
              "end": 638,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 617,
                "end": 618,
                "decorators": [],
                "name": "x",
                "optional": false
              },
              {
                "type": "Identifier",
                "start": 620,
                "end": 630,
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 621,
                  "end": 630,
                  "typeAnnotation": {
                    "type": "TSBooleanKeyword",
                    "start": 623,
                    "end": 630
                  }
                }
              }
            ]
          },
          {
            "type": "ArrowFunctionExpression",
            "start": 640,
            "end": 649,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 646,
              "end": 649,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": []
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 581,
          "end": 584,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "FunctionDeclaration",
      "start": 653,
      "end": 740,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 727,
        "end": 740,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 729,
            "end": 738,
            "argument": {
              "type": "Identifier",
              "start": 736,
              "end": 737,
              "decorators": [],
              "name": "z",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 662,
        "end": 666,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 706,
          "end": 710,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 707,
            "end": 710,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 709,
              "end": 710,
              "typeName": {
                "type": "Identifier",
                "start": 709,
                "end": 710,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 712,
          "end": 716,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 713,
            "end": 716,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 715,
              "end": 716,
              "typeName": {
                "type": "Identifier",
                "start": 715,
                "end": 716,
                "decorators": [],
                "name": "U",
                "optional": false
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 718,
          "end": 722,
          "decorators": [],
          "name": "z",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 719,
            "end": 722,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 721,
              "end": 722,
              "typeName": {
                "type": "Identifier",
                "start": 721,
                "end": 722,
                "decorators": [],
                "name": "V",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 723,
        "end": 726,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 725,
          "end": 726,
          "typeName": {
            "type": "Identifier",
            "start": 725,
            "end": 726,
            "decorators": [],
            "name": "V",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 666,
        "end": 705,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 667,
            "end": 678,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 677,
              "end": 678,
              "typeName": {
                "type": "Identifier",
                "start": 677,
                "end": 678,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 667,
              "end": 668,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 680,
            "end": 691,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 690,
              "end": 691,
              "typeName": {
                "type": "Identifier",
                "start": 690,
                "end": 691,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 680,
              "end": 681,
              "decorators": [],
              "name": "U",
              "optional": false
            },
            "out": false
          },
          {
            "type": "TSTypeParameter",
            "start": 693,
            "end": 704,
            "const": false,
            "constraint": {
              "type": "TSTypeReference",
              "start": 703,
              "end": 704,
              "typeName": {
                "type": "Identifier",
                "start": 703,
                "end": 704,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 693,
              "end": 694,
              "decorators": [],
              "name": "V",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 831,
      "end": 844,
      "expression": {
        "type": "CallExpression",
        "start": 831,
        "end": 843,
        "arguments": [
          {
            "type": "Identifier",
            "start": 835,
            "end": 836,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 838,
            "end": 839,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 841,
            "end": 842,
            "decorators": [],
            "name": "c",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 831,
          "end": 834,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 845,
      "end": 858,
      "expression": {
        "type": "CallExpression",
        "start": 845,
        "end": 857,
        "arguments": [
          {
            "type": "Identifier",
            "start": 849,
            "end": 850,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 852,
            "end": 853,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          {
            "type": "Identifier",
            "start": 855,
            "end": 856,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 845,
          "end": 848,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script"
}
```
