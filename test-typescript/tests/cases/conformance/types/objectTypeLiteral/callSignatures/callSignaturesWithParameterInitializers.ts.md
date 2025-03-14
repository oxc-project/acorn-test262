__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 77,
  "end": 640,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 77,
      "end": 100,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 97,
        "end": 100,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 86,
        "end": 89,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 90,
          "end": 95,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 90,
            "end": 91,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 94,
            "end": 95,
            "raw": "1",
            "value": 1
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 101,
      "end": 132,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 105,
          "end": 132,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 105,
            "end": 106,
            "decorators": [],
            "name": "f",
            "optional": false
          },
          "init": {
            "type": "FunctionExpression",
            "start": 109,
            "end": 132,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 129,
              "end": 132,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": {
              "type": "Identifier",
              "start": 118,
              "end": 121,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 122,
                "end": 127,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 122,
                  "end": 123,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 126,
                  "end": 127,
                  "raw": "1",
                  "value": 1
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
      "start": 133,
      "end": 167,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 167,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 139,
            "decorators": [],
            "name": "f2",
            "optional": false
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 142,
            "end": 167,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 164,
              "end": 167,
              "body": []
            },
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 143,
                "end": 152,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 144,
                  "end": 152,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 146,
                    "end": 152
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 154,
                "end": 159,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 154,
                  "end": 155,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 158,
                  "end": 159,
                  "raw": "1",
                  "value": 1
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
      "type": "ExpressionStatement",
      "start": 169,
      "end": 176,
      "expression": {
        "type": "CallExpression",
        "start": 169,
        "end": 175,
        "arguments": [
          {
            "type": "Literal",
            "start": 173,
            "end": 174,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 169,
          "end": 172,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 177,
      "end": 183,
      "expression": {
        "type": "CallExpression",
        "start": 177,
        "end": 182,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 177,
          "end": 180,
          "decorators": [],
          "name": "foo",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 184,
      "end": 189,
      "expression": {
        "type": "CallExpression",
        "start": 184,
        "end": 188,
        "arguments": [
          {
            "type": "Literal",
            "start": 186,
            "end": 187,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 184,
          "end": 185,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 190,
      "end": 194,
      "expression": {
        "type": "CallExpression",
        "start": 190,
        "end": 193,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 190,
          "end": 191,
          "decorators": [],
          "name": "f",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 195,
      "end": 201,
      "expression": {
        "type": "CallExpression",
        "start": 195,
        "end": 200,
        "arguments": [
          {
            "type": "Literal",
            "start": 198,
            "end": 199,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 195,
          "end": 197,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 202,
      "end": 211,
      "expression": {
        "type": "CallExpression",
        "start": 202,
        "end": 210,
        "arguments": [
          {
            "type": "Literal",
            "start": 205,
            "end": 206,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 208,
            "end": 209,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 202,
          "end": 204,
          "decorators": [],
          "name": "f2",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ClassDeclaration",
      "start": 213,
      "end": 243,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 221,
        "end": 243,
        "body": [
          {
            "type": "MethodDefinition",
            "start": 227,
            "end": 241,
            "computed": false,
            "decorators": [],
            "key": {
              "type": "Identifier",
              "start": 227,
              "end": 230,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "override": false,
            "static": false,
            "value": {
              "type": "FunctionExpression",
              "start": 230,
              "end": 241,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 238,
                "end": 241,
                "body": []
              },
              "declare": false,
              "expression": false,
              "generator": false,
              "id": null,
              "params": [
                {
                  "type": "AssignmentPattern",
                  "start": 231,
                  "end": 236,
                  "decorators": [],
                  "left": {
                    "type": "Identifier",
                    "start": 231,
                    "end": 232,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  },
                  "optional": false,
                  "right": {
                    "type": "Literal",
                    "start": 235,
                    "end": 236,
                    "raw": "1",
                    "value": 1
                  }
                }
              ]
            }
          }
        ]
      },
      "declare": false,
      "decorators": [],
      "id": {
        "type": "Identifier",
        "start": 219,
        "end": 220,
        "decorators": [],
        "name": "C",
        "optional": false
      },
      "implements": [],
      "superClass": null
    },
    {
      "type": "VariableDeclaration",
      "start": 245,
      "end": 254,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 249,
          "end": 253,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 249,
            "end": 253,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 250,
              "end": 253,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 252,
                "end": 253,
                "typeName": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 253,
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
      "type": "ExpressionStatement",
      "start": 255,
      "end": 263,
      "expression": {
        "type": "CallExpression",
        "start": 255,
        "end": 262,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 255,
          "end": 260,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 255,
            "end": 256,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 257,
            "end": 260,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 264,
      "end": 273,
      "expression": {
        "type": "CallExpression",
        "start": 264,
        "end": 272,
        "arguments": [
          {
            "type": "Literal",
            "start": 270,
            "end": 271,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 264,
          "end": 269,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 264,
            "end": 265,
            "decorators": [],
            "name": "c",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 266,
            "end": 269,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 295,
      "end": 350,
      "body": {
        "type": "TSInterfaceBody",
        "start": 307,
        "end": 350,
        "body": [
          {
            "type": "TSCallSignatureDeclaration",
            "start": 313,
            "end": 321,
            "params": [
              {
                "type": "AssignmentPattern",
                "start": 314,
                "end": 319,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 314,
                  "end": 315,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 318,
                  "end": 319,
                  "raw": "1",
                  "value": 1
                }
              }
            ]
          },
          {
            "type": "TSMethodSignature",
            "start": 326,
            "end": 348,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 326,
              "end": 329,
              "decorators": [],
              "name": "foo",
              "optional": false
            },
            "kind": "method",
            "optional": false,
            "params": [
              {
                "type": "Identifier",
                "start": 330,
                "end": 339,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 331,
                  "end": 339,
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 333,
                    "end": 339
                  }
                }
              },
              {
                "type": "AssignmentPattern",
                "start": 341,
                "end": 346,
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "start": 341,
                  "end": 342,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                },
                "optional": false,
                "right": {
                  "type": "Literal",
                  "start": 345,
                  "end": 346,
                  "raw": "1",
                  "value": 1
                }
              }
            ],
            "readonly": false,
            "static": false
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 305,
        "end": 306,
        "decorators": [],
        "name": "I",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 352,
      "end": 361,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 356,
          "end": 360,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 356,
            "end": 360,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 357,
              "end": 360,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 359,
                "end": 360,
                "typeName": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 360,
                  "decorators": [],
                  "name": "I",
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
      "type": "ExpressionStatement",
      "start": 362,
      "end": 366,
      "expression": {
        "type": "CallExpression",
        "start": 362,
        "end": 365,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 362,
          "end": 363,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 367,
      "end": 372,
      "expression": {
        "type": "CallExpression",
        "start": 367,
        "end": 371,
        "arguments": [
          {
            "type": "Literal",
            "start": 369,
            "end": 370,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 367,
          "end": 368,
          "decorators": [],
          "name": "i",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 373,
      "end": 382,
      "expression": {
        "type": "CallExpression",
        "start": 373,
        "end": 381,
        "arguments": [
          {
            "type": "Literal",
            "start": 379,
            "end": 380,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 373,
          "end": 378,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 373,
            "end": 374,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 375,
            "end": 378,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 383,
      "end": 395,
      "expression": {
        "type": "CallExpression",
        "start": 383,
        "end": 394,
        "arguments": [
          {
            "type": "Literal",
            "start": 389,
            "end": 390,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 392,
            "end": 393,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 383,
          "end": 388,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 383,
            "end": 384,
            "decorators": [],
            "name": "i",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 385,
            "end": 388,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 417,
      "end": 456,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 421,
          "end": 456,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 421,
            "end": 456,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 422,
              "end": 456,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 424,
                "end": 456,
                "members": [
                  {
                    "type": "TSCallSignatureDeclaration",
                    "start": 430,
                    "end": 438,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 431,
                        "end": 436,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 431,
                          "end": 432,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 435,
                          "end": 436,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ]
                  },
                  {
                    "type": "TSMethodSignature",
                    "start": 443,
                    "end": 454,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 443,
                      "end": 446,
                      "decorators": [],
                      "name": "foo",
                      "optional": false
                    },
                    "kind": "method",
                    "optional": false,
                    "params": [
                      {
                        "type": "AssignmentPattern",
                        "start": 447,
                        "end": 452,
                        "decorators": [],
                        "left": {
                          "type": "Identifier",
                          "start": 447,
                          "end": 448,
                          "decorators": [],
                          "name": "x",
                          "optional": false
                        },
                        "optional": false,
                        "right": {
                          "type": "Literal",
                          "start": 451,
                          "end": 452,
                          "raw": "1",
                          "value": 1
                        }
                      }
                    ],
                    "readonly": false,
                    "static": false
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
      "start": 458,
      "end": 462,
      "expression": {
        "type": "CallExpression",
        "start": 458,
        "end": 461,
        "arguments": [],
        "callee": {
          "type": "Identifier",
          "start": 458,
          "end": 459,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 463,
      "end": 468,
      "expression": {
        "type": "CallExpression",
        "start": 463,
        "end": 467,
        "arguments": [
          {
            "type": "Literal",
            "start": 465,
            "end": 466,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "Identifier",
          "start": 463,
          "end": 464,
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 469,
      "end": 477,
      "expression": {
        "type": "CallExpression",
        "start": 469,
        "end": 476,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 469,
          "end": 474,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 469,
            "end": 470,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 471,
            "end": 474,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 478,
      "end": 487,
      "expression": {
        "type": "CallExpression",
        "start": 478,
        "end": 486,
        "arguments": [
          {
            "type": "Literal",
            "start": 484,
            "end": 485,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 478,
          "end": 483,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 478,
            "end": 479,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 480,
            "end": 483,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 489,
      "end": 585,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 493,
          "end": 585,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 493,
            "end": 494,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 497,
            "end": 585,
            "properties": [
              {
                "type": "Property",
                "start": 503,
                "end": 517,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 506,
                  "decorators": [],
                  "name": "foo",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 506,
                  "end": 517,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 514,
                    "end": 517,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 507,
                      "end": 512,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 507,
                        "end": 508,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 511,
                        "end": 512,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 523,
                "end": 560,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 523,
                  "end": 524,
                  "decorators": [],
                  "name": "a",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 526,
                  "end": 560,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 557,
                    "end": 560,
                    "body": []
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": {
                    "type": "Identifier",
                    "start": 535,
                    "end": 538,
                    "decorators": [],
                    "name": "foo",
                    "optional": false
                  },
                  "params": [
                    {
                      "type": "Identifier",
                      "start": 539,
                      "end": 548,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "start": 540,
                        "end": 548,
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 542,
                          "end": 548
                        }
                      }
                    },
                    {
                      "type": "AssignmentPattern",
                      "start": 550,
                      "end": 555,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 550,
                        "end": 551,
                        "decorators": [],
                        "name": "y",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 554,
                        "end": 555,
                        "raw": "1",
                        "value": 1
                      }
                    }
                  ]
                }
              },
              {
                "type": "Property",
                "start": 566,
                "end": 583,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 566,
                  "end": 567,
                  "decorators": [],
                  "name": "b",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "ArrowFunctionExpression",
                  "start": 569,
                  "end": 583,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 580,
                    "end": 583,
                    "body": []
                  },
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": [
                    {
                      "type": "AssignmentPattern",
                      "start": 570,
                      "end": 575,
                      "decorators": [],
                      "left": {
                        "type": "Identifier",
                        "start": 570,
                        "end": 571,
                        "decorators": [],
                        "name": "x",
                        "optional": false
                      },
                      "optional": false,
                      "right": {
                        "type": "Literal",
                        "start": 574,
                        "end": 575,
                        "raw": "1",
                        "value": 1
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
      "type": "ExpressionStatement",
      "start": 587,
      "end": 595,
      "expression": {
        "type": "CallExpression",
        "start": 587,
        "end": 594,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 587,
          "end": 592,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 587,
            "end": 588,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 589,
            "end": 592,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 596,
      "end": 605,
      "expression": {
        "type": "CallExpression",
        "start": 596,
        "end": 604,
        "arguments": [
          {
            "type": "Literal",
            "start": 602,
            "end": 603,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 596,
          "end": 601,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 596,
            "end": 597,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 598,
            "end": 601,
            "decorators": [],
            "name": "foo",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 606,
      "end": 613,
      "expression": {
        "type": "CallExpression",
        "start": 606,
        "end": 612,
        "arguments": [
          {
            "type": "Literal",
            "start": 610,
            "end": 611,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 606,
          "end": 609,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 606,
            "end": 607,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 608,
            "end": 609,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 614,
      "end": 624,
      "expression": {
        "type": "CallExpression",
        "start": 614,
        "end": 623,
        "arguments": [
          {
            "type": "Literal",
            "start": 618,
            "end": 619,
            "raw": "1",
            "value": 1
          },
          {
            "type": "Literal",
            "start": 621,
            "end": 622,
            "raw": "2",
            "value": 2
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 614,
          "end": 617,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 614,
            "end": 615,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 616,
            "end": 617,
            "decorators": [],
            "name": "a",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 625,
      "end": 631,
      "expression": {
        "type": "CallExpression",
        "start": 625,
        "end": 630,
        "arguments": [],
        "callee": {
          "type": "MemberExpression",
          "start": 625,
          "end": 628,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 625,
            "end": 626,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 627,
            "end": 628,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 632,
      "end": 639,
      "expression": {
        "type": "CallExpression",
        "start": 632,
        "end": 638,
        "arguments": [
          {
            "type": "Literal",
            "start": 636,
            "end": 637,
            "raw": "1",
            "value": 1
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 632,
          "end": 635,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 632,
            "end": 633,
            "decorators": [],
            "name": "b",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 634,
            "end": 635,
            "decorators": [],
            "name": "b",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
