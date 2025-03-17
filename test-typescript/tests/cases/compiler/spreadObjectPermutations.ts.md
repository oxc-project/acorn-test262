__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 594,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 40,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 14,
          "end": 39,
          "id": {
            "type": "Identifier",
            "start": 14,
            "end": 39,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 15,
              "end": 39,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 17,
                "end": 39,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 19,
                    "end": 37,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 19,
                      "end": 20,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 20,
                      "end": 37,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 22,
                        "end": 37,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 22,
                            "end": 28
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 31,
                            "end": 37
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 41,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 55,
          "end": 81,
          "id": {
            "type": "Identifier",
            "start": 55,
            "end": 81,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 56,
              "end": 81,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 58,
                "end": 81,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 60,
                    "end": 79,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 60,
                      "end": 61,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 62,
                      "end": 79,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 64,
                        "end": 79,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 64,
                            "end": 70
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 73,
                            "end": 79
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 136,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 97,
          "end": 135,
          "id": {
            "type": "Identifier",
            "start": 97,
            "end": 135,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 98,
              "end": 135,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 100,
                "end": 135,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 102,
                    "end": 133,
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 102,
                      "end": 103,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 104,
                      "end": 133,
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "start": 106,
                        "end": 133,
                        "types": [
                          {
                            "type": "TSStringKeyword",
                            "start": 106,
                            "end": 112
                          },
                          {
                            "type": "TSNumberKeyword",
                            "start": 115,
                            "end": 121
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 124,
                            "end": 133
                          }
                        ]
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "const",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 138,
      "end": 159,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 144,
          "end": 158,
          "id": {
            "type": "Identifier",
            "start": 144,
            "end": 147,
            "name": "v_a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 150,
            "end": 158,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 152,
                "end": 156,
                "argument": {
                  "type": "Identifier",
                  "start": 155,
                  "end": 156,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 160,
      "end": 181,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 180,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 169,
            "name": "v_b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 172,
            "end": 180,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 174,
                "end": 178,
                "argument": {
                  "type": "Identifier",
                  "start": 177,
                  "end": 178,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 182,
      "end": 203,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 188,
          "end": 202,
          "id": {
            "type": "Identifier",
            "start": 188,
            "end": 191,
            "name": "v_c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 194,
            "end": 202,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 196,
                "end": 200,
                "argument": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 200,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 204,
      "end": 232,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 210,
          "end": 231,
          "id": {
            "type": "Identifier",
            "start": 210,
            "end": 214,
            "name": "v_ab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 217,
            "end": 231,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 219,
                "end": 223,
                "argument": {
                  "type": "Identifier",
                  "start": 222,
                  "end": 223,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 225,
                "end": 229,
                "argument": {
                  "type": "Identifier",
                  "start": 228,
                  "end": 229,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 261,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 239,
            "end": 243,
            "name": "v_ac",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 246,
            "end": 260,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 248,
                "end": 252,
                "argument": {
                  "type": "Identifier",
                  "start": 251,
                  "end": 252,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 254,
                "end": 258,
                "argument": {
                  "type": "Identifier",
                  "start": 257,
                  "end": 258,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 262,
      "end": 290,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 268,
          "end": 289,
          "id": {
            "type": "Identifier",
            "start": 268,
            "end": 272,
            "name": "v_ba",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 275,
            "end": 289,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 277,
                "end": 281,
                "argument": {
                  "type": "Identifier",
                  "start": 280,
                  "end": 281,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 283,
                "end": 287,
                "argument": {
                  "type": "Identifier",
                  "start": 286,
                  "end": 287,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 291,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 297,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 297,
            "end": 301,
            "name": "v_bc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 304,
            "end": 318,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 306,
                "end": 310,
                "argument": {
                  "type": "Identifier",
                  "start": 309,
                  "end": 310,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 312,
                "end": 316,
                "argument": {
                  "type": "Identifier",
                  "start": 315,
                  "end": 316,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 348,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 347,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 330,
            "name": "v_ca",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 333,
            "end": 347,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 335,
                "end": 339,
                "argument": {
                  "type": "Identifier",
                  "start": 338,
                  "end": 339,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 341,
                "end": 345,
                "argument": {
                  "type": "Identifier",
                  "start": 344,
                  "end": 345,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 349,
      "end": 377,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 355,
          "end": 376,
          "id": {
            "type": "Identifier",
            "start": 355,
            "end": 359,
            "name": "v_cb",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 362,
            "end": 376,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 364,
                "end": 368,
                "argument": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 368,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 370,
                "end": 374,
                "argument": {
                  "type": "Identifier",
                  "start": 373,
                  "end": 374,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 378,
      "end": 413,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 384,
          "end": 412,
          "id": {
            "type": "Identifier",
            "start": 384,
            "end": 389,
            "name": "v_abc",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 392,
            "end": 412,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 394,
                "end": 398,
                "argument": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 398,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 400,
                "end": 404,
                "argument": {
                  "type": "Identifier",
                  "start": 403,
                  "end": 404,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 406,
                "end": 410,
                "argument": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 410,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 414,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 420,
          "end": 448,
          "id": {
            "type": "Identifier",
            "start": 420,
            "end": 425,
            "name": "v_acb",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 428,
            "end": 448,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 430,
                "end": 434,
                "argument": {
                  "type": "Identifier",
                  "start": 433,
                  "end": 434,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 436,
                "end": 440,
                "argument": {
                  "type": "Identifier",
                  "start": 439,
                  "end": 440,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 442,
                "end": 446,
                "argument": {
                  "type": "Identifier",
                  "start": 445,
                  "end": 446,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 450,
      "end": 485,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 456,
          "end": 484,
          "id": {
            "type": "Identifier",
            "start": 456,
            "end": 461,
            "name": "v_bac",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 464,
            "end": 484,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 466,
                "end": 470,
                "argument": {
                  "type": "Identifier",
                  "start": 469,
                  "end": 470,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 472,
                "end": 476,
                "argument": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 476,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 478,
                "end": 482,
                "argument": {
                  "type": "Identifier",
                  "start": 481,
                  "end": 482,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 486,
      "end": 521,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 492,
          "end": 520,
          "id": {
            "type": "Identifier",
            "start": 492,
            "end": 497,
            "name": "v_bca",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 500,
            "end": 520,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 502,
                "end": 506,
                "argument": {
                  "type": "Identifier",
                  "start": 505,
                  "end": 506,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 508,
                "end": 512,
                "argument": {
                  "type": "Identifier",
                  "start": 511,
                  "end": 512,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 514,
                "end": 518,
                "argument": {
                  "type": "Identifier",
                  "start": 517,
                  "end": 518,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 522,
      "end": 557,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 528,
          "end": 556,
          "id": {
            "type": "Identifier",
            "start": 528,
            "end": 533,
            "name": "v_cab",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 536,
            "end": 556,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 538,
                "end": 542,
                "argument": {
                  "type": "Identifier",
                  "start": 541,
                  "end": 542,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 544,
                "end": 548,
                "argument": {
                  "type": "Identifier",
                  "start": 547,
                  "end": 548,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 550,
                "end": 554,
                "argument": {
                  "type": "Identifier",
                  "start": 553,
                  "end": 554,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 558,
      "end": 593,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 564,
          "end": 592,
          "id": {
            "type": "Identifier",
            "start": 564,
            "end": 569,
            "name": "v_cba",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 572,
            "end": 592,
            "properties": [
              {
                "type": "SpreadElement",
                "start": 574,
                "end": 578,
                "argument": {
                  "type": "Identifier",
                  "start": 577,
                  "end": 578,
                  "name": "c",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 580,
                "end": 584,
                "argument": {
                  "type": "Identifier",
                  "start": 583,
                  "end": 584,
                  "name": "b",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              {
                "type": "SpreadElement",
                "start": 586,
                "end": 590,
                "argument": {
                  "type": "Identifier",
                  "start": 589,
                  "end": 590,
                  "name": "a",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              }
            ]
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
