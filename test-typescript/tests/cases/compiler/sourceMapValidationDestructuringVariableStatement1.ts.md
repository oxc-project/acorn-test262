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
        "name": "Robot",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
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
              "name": "name",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "skill",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 69,
          "end": 109,
          "id": {
            "type": "Identifier",
            "start": 69,
            "end": 109,
            "name": "console",
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
                      "name": "log",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                        "name": "msg",
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 91,
                          "end": 99,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 93,
                            "end": 99
                          }
                        },
                        "decorators": [],
                        "optional": false
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": true
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 130,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 129,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 119,
            "name": "hello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 131,
      "end": 186,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 185,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 148,
            "name": "robotA",
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
                  "name": "Robot",
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
            "type": "ObjectExpression",
            "start": 151,
            "end": 185,
            "properties": [
              {
                "type": "Property",
                "start": 153,
                "end": 166,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 153,
                  "end": 157,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 159,
                  "end": 166,
                  "value": "mower",
                  "raw": "\"mower\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 168,
                "end": 183,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 168,
                  "end": 173,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 175,
                  "end": 183,
                  "value": "mowing",
                  "raw": "\"mowing\""
                },
                "kind": "init",
                "optional": false
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
      "start": 187,
      "end": 246,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 191,
          "end": 245,
          "id": {
            "type": "Identifier",
            "start": 191,
            "end": 204,
            "name": "robotB",
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
                  "name": "Robot",
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
            "type": "ObjectExpression",
            "start": 207,
            "end": 245,
            "properties": [
              {
                "type": "Property",
                "start": 209,
                "end": 224,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 213,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 215,
                  "end": 224,
                  "value": "trimmer",
                  "raw": "\"trimmer\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 226,
                "end": 243,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 226,
                  "end": 231,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 233,
                  "end": 243,
                  "value": "trimming",
                  "raw": "\"trimming\""
                },
                "kind": "init",
                "optional": false
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
      "start": 247,
      "end": 287,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 251,
          "end": 260,
          "id": {
            "type": "Identifier",
            "start": 251,
            "end": 260,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 252,
              "end": 260,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 254,
                "end": 260
              }
            },
            "decorators": [],
            "optional": false
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
            "properties": [
              {
                "type": "Property",
                "start": 264,
                "end": 275,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 264,
                  "end": 268,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 275,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 280,
            "end": 286,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 288,
      "end": 343,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 301,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 301,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 293,
              "end": 301,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 295,
                "end": 301
              }
            },
            "decorators": [],
            "optional": false
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
            "properties": [
              {
                "type": "Property",
                "start": 305,
                "end": 316,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 305,
                  "end": 309,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 311,
                  "end": 316,
                  "name": "nameB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 318,
                "end": 331,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 318,
                  "end": 323,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 325,
                  "end": 331,
                  "name": "skillB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 336,
            "end": 342,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 344,
      "end": 434,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 348,
          "end": 357,
          "id": {
            "type": "Identifier",
            "start": 348,
            "end": 357,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 349,
              "end": 357,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 351,
                "end": 357
              }
            },
            "decorators": [],
            "optional": false
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
            "properties": [
              {
                "type": "Property",
                "start": 361,
                "end": 372,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 361,
                  "end": 365,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 367,
                  "end": 372,
                  "name": "nameC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 374,
                "end": 387,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 374,
                  "end": 379,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 381,
                  "end": 387,
                  "name": "skillC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 394,
                  "end": 398,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 400,
                  "end": 407,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 409,
                "end": 431,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 409,
                  "end": 414,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 416,
                  "end": 431,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "kind": "init",
                "optional": false
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
      "start": 436,
      "end": 476,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 440,
          "end": 464,
          "id": {
            "type": "ObjectPattern",
            "start": 440,
            "end": 455,
            "properties": [
              {
                "type": "Property",
                "start": 442,
                "end": 453,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 442,
                  "end": 446,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 448,
                  "end": 453,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 458,
            "end": 464,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 470,
            "end": 475,
            "name": "hello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 477,
      "end": 535,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 481,
          "end": 520,
          "id": {
            "type": "ObjectPattern",
            "start": 481,
            "end": 511,
            "properties": [
              {
                "type": "Property",
                "start": 483,
                "end": 494,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 483,
                  "end": 487,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 489,
                  "end": 494,
                  "name": "nameB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 496,
                "end": 509,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 496,
                  "end": 501,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 503,
                  "end": 509,
                  "name": "skillB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 514,
            "end": 520,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 536,
      "end": 626,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 540,
          "end": 614,
          "id": {
            "type": "ObjectPattern",
            "start": 540,
            "end": 570,
            "properties": [
              {
                "type": "Property",
                "start": 542,
                "end": 553,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 542,
                  "end": 546,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 548,
                  "end": 553,
                  "name": "nameC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 555,
                "end": 568,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 555,
                  "end": 560,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 562,
                  "end": 568,
                  "name": "skillC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 575,
                  "end": 579,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 581,
                  "end": 588,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 590,
                "end": 612,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 590,
                  "end": 595,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 597,
                  "end": 612,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "kind": "init",
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
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 620,
            "end": 625,
            "name": "hello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 628,
      "end": 681,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 632,
          "end": 641,
          "id": {
            "type": "Identifier",
            "start": 632,
            "end": 633,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 636,
            "end": 641,
            "name": "hello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "properties": [
              {
                "type": "Property",
                "start": 645,
                "end": 656,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 645,
                  "end": 649,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 651,
                  "end": 656,
                  "name": "nameA",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 661,
            "end": 667,
            "name": "robotA",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "a1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 682,
      "end": 751,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 686,
          "end": 695,
          "id": {
            "type": "Identifier",
            "start": 686,
            "end": 687,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 690,
            "end": 695,
            "name": "hello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "properties": [
              {
                "type": "Property",
                "start": 699,
                "end": 710,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 699,
                  "end": 703,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 710,
                  "name": "nameB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 712,
                "end": 725,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 712,
                  "end": 717,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 719,
                  "end": 725,
                  "name": "skillB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 730,
            "end": 736,
            "name": "robotB",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "b1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 752,
      "end": 854,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 756,
          "end": 765,
          "id": {
            "type": "Identifier",
            "start": 756,
            "end": 757,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 760,
            "end": 765,
            "name": "hello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "properties": [
              {
                "type": "Property",
                "start": 769,
                "end": 780,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 769,
                  "end": 773,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 775,
                  "end": 780,
                  "name": "nameC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 782,
                "end": 795,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 782,
                  "end": 787,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 789,
                  "end": 795,
                  "name": "skillC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ],
            "decorators": [],
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 802,
                  "end": 806,
                  "name": "name",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 808,
                  "end": 815,
                  "value": "Edger",
                  "raw": "\"Edger\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 817,
                "end": 839,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 817,
                  "end": 822,
                  "name": "skill",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 824,
                  "end": 839,
                  "value": "cutting edges",
                  "raw": "\"cutting edges\""
                },
                "kind": "init",
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
            "name": "c1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 848,
            "end": 853,
            "name": "hello",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "nameA",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "==",
        "right": {
          "type": "Identifier",
          "start": 868,
          "end": 873,
          "name": "nameB",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 889,
                  "end": 892,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 893,
                  "end": 899,
                  "name": "skillB",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
                  "name": "console",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 923,
                  "end": 926,
                  "name": "log",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 927,
                  "end": 932,
                  "name": "nameC",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ],
              "optional": false,
              "typeArguments": null
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
