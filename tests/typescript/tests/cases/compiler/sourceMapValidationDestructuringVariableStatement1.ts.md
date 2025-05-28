__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 936,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 56,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 15,
        "decorators": [],
        "name": "Robot",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 16,
        "end": 56,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 22,
            "end": 35,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 22,
              "end": 26,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 26,
              "end": 34,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 28,
                "end": 34
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 40,
            "end": 54,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 40,
              "end": 45,
              "decorators": [],
              "name": "skill",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 53,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 47,
                "end": 53
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
      "start": 57,
      "end": 109,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 109,
            "decorators": [],
            "name": "console",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 76,
              "end": 109,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 78,
                "end": 109,
                "members": [
                  {
                    "type": "TSMethodSignature",
                    "start": 84,
                    "end": 107,
                    "key": {
                      "type": "Identifier",
                      "start": 84,
                      "end": 87,
                      "decorators": [],
                      "name": "log",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "computed": false,
                    "optional": false,
                    "kind": "method",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "start": 88,
                        "end": 99,
                        "decorators": [],
                        "name": "msg",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          }
                        }
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 100,
                      "end": 106,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 102,
                        "end": 106
                      }
                    },
                    "accessibility": null,
                    "readonly": false,
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
      "start": 110,
      "end": 130,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 129,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 119,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 122,
            "end": 129,
            "value": "hello",
            "raw": "\"hello\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 186,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 148,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 141,
              "end": 148,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 143,
                "end": 148,
                "typeName": {
                  "type": "Identifier",
                  "start": 143,
                  "end": 148,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 151,
            "end": 185,
            "properties": [
              {
                "type": "Property",
                "start": 153,
                "end": 166,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 157,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 159,
                  "end": 166,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 168,
                "end": 183,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 173,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 175,
                  "end": 183,
                  "value": "mowing",
                  "raw": "\"mowing\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 187,
      "end": 246,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 197,
              "end": 204,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 199,
                "end": 204,
                "typeName": {
                  "type": "Identifier",
                  "start": 199,
                  "end": 204,
                  "decorators": [],
                  "name": "Robot",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 207,
            "end": 245,
            "properties": [
              {
                "type": "Property",
                "start": 209,
                "end": 224,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 213,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 215,
                  "end": 224,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 226,
                "end": 243,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 231,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 233,
                  "end": 243,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 247,
      "end": 287,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 260,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 260,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 254,
                "end": 260
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 262,
          "end": 286,
          "id": {
            "type": "ObjectPattern",
            "start": 262,
            "end": 277,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 264,
                "end": 275,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 268,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 275,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 280,
            "end": 286,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 288,
      "end": 343,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 301,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 293,
              "end": 301,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 295,
                "end": 301
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 303,
          "end": 342,
          "id": {
            "type": "ObjectPattern",
            "start": 303,
            "end": 333,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 305,
                "end": 316,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 309,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 316,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 318,
                "end": 331,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 323,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 331,
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 336,
            "end": 342,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 434,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 357,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 357,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 351,
                "end": 357
              }
            }
          },
          "init": null,
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 359,
          "end": 433,
          "id": {
            "type": "ObjectPattern",
            "start": 359,
            "end": 389,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 361,
                "end": 372,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 365,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 372,
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 374,
                "end": 387,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 379,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 387,
                  "decorators": [],
                  "name": "skillC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 392,
            "end": 433,
            "properties": [
              {
                "type": "Property",
                "start": 394,
                "end": 407,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 398,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 400,
                  "end": 407,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 409,
                "end": 431,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 414,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 416,
                  "end": 431,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 436,
      "end": 476,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 440,
          "end": 464,
          "id": {
            "type": "ObjectPattern",
            "start": 440,
            "end": 455,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 442,
                "end": 453,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 446,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 453,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 458,
            "end": 464,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 466,
          "end": 475,
          "id": {
            "type": "Identifier",
            "start": 466,
            "end": 467,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 470,
            "end": 475,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 477,
      "end": 535,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 520,
          "id": {
            "type": "ObjectPattern",
            "start": 481,
            "end": 511,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 483,
                "end": 494,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 483,
                  "end": 487,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 494,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 496,
                "end": 509,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 501,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 509,
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 514,
            "end": 520,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 522,
          "end": 534,
          "id": {
            "type": "Identifier",
            "start": 522,
            "end": 523,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 526,
            "end": 534,
            "value": " hello",
            "raw": "\" hello\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 536,
      "end": 626,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 540,
          "end": 614,
          "id": {
            "type": "ObjectPattern",
            "start": 540,
            "end": 570,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 542,
                "end": 553,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 546,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 553,
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 555,
                "end": 568,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 560,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 568,
                  "decorators": [],
                  "name": "skillC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 573,
            "end": 614,
            "properties": [
              {
                "type": "Property",
                "start": 575,
                "end": 588,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 579,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 581,
                  "end": 588,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 590,
                "end": 612,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 590,
                  "end": 595,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 597,
                  "end": 612,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 616,
          "end": 625,
          "id": {
            "type": "Identifier",
            "start": 616,
            "end": 617,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 620,
            "end": 625,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 628,
      "end": 681,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 641,
          "id": {
            "type": "Identifier",
            "start": 632,
            "end": 633,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 636,
            "end": 641,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 643,
          "end": 667,
          "id": {
            "type": "ObjectPattern",
            "start": 643,
            "end": 658,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 645,
                "end": 656,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 649,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 651,
                  "end": 656,
                  "decorators": [],
                  "name": "nameA",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 661,
            "end": 667,
            "decorators": [],
            "name": "robotA",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 669,
          "end": 680,
          "id": {
            "type": "Identifier",
            "start": 669,
            "end": 671,
            "decorators": [],
            "name": "a1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 673,
            "end": 680,
            "value": "hello",
            "raw": "\"hello\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 751,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 695,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 687,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 690,
            "end": 695,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 697,
          "end": 736,
          "id": {
            "type": "ObjectPattern",
            "start": 697,
            "end": 727,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 699,
                "end": 710,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 703,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 710,
                  "decorators": [],
                  "name": "nameB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 712,
                "end": 725,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 712,
                  "end": 717,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 719,
                  "end": 725,
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 730,
            "end": 736,
            "decorators": [],
            "name": "robotB",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 738,
          "end": 750,
          "id": {
            "type": "Identifier",
            "start": 738,
            "end": 740,
            "decorators": [],
            "name": "b1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 743,
            "end": 750,
            "value": "hello",
            "raw": "\"hello\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 752,
      "end": 854,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 756,
          "end": 765,
          "id": {
            "type": "Identifier",
            "start": 756,
            "end": 757,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 760,
            "end": 765,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 767,
          "end": 841,
          "id": {
            "type": "ObjectPattern",
            "start": 767,
            "end": 797,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 769,
                "end": 780,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 773,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 780,
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 782,
                "end": 795,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 787,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 789,
                  "end": 795,
                  "decorators": [],
                  "name": "skillC",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 800,
            "end": 841,
            "properties": [
              {
                "type": "Property",
                "start": 802,
                "end": 815,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 806,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 808,
                  "end": 815,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 817,
                "end": 839,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 822,
                  "decorators": [],
                  "name": "skill",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 824,
                  "end": 839,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        },
        {
          "type": "VariableDeclarator",
          "start": 843,
          "end": 853,
          "id": {
            "type": "Identifier",
            "start": 843,
            "end": 845,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 848,
            "end": 853,
            "decorators": [],
            "name": "hello",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 855,
      "end": 936,
      "test": {
        "type": "BinaryExpression",
        "start": 859,
        "end": 873,
        "left": {
          "type": "Identifier",
          "start": 859,
          "end": 864,
          "decorators": [],
          "name": "nameA",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 868,
          "end": 873,
          "decorators": [],
          "name": "nameB",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 875,
        "end": 903,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 881,
            "end": 901,
            "expression": {
              "type": "CallExpression",
              "start": 881,
              "end": 900,
              "callee": {
                "type": "MemberExpression",
                "start": 881,
                "end": 892,
                "object": {
                  "type": "Identifier",
                  "start": 881,
                  "end": 888,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 889,
                  "end": 892,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 893,
                  "end": 899,
                  "decorators": [],
                  "name": "skillB",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 909,
        "end": 936,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 915,
            "end": 934,
            "expression": {
              "type": "CallExpression",
              "start": 915,
              "end": 933,
              "callee": {
                "type": "MemberExpression",
                "start": 915,
                "end": 926,
                "object": {
                  "type": "Identifier",
                  "start": 915,
                  "end": 922,
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 923,
                  "end": 926,
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 927,
                  "end": 932,
                  "decorators": [],
                  "name": "nameC",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
