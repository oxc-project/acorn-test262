__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 895,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 136,
      "abstract": false,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 14,
              "end": 19,
              "raw": "\"   \"",
              "value": "   ",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 19,
              "end": 27,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 21,
                "end": 27
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 49,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 33,
              "end": 40,
              "raw": "\"a   b\"",
              "value": "a   b",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 40,
              "end": 48,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 42,
                "end": 48
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 91,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 54,
              "end": 82,
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 82,
              "end": 90,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 84,
                "end": 90
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 96,
            "end": 110,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 96,
              "end": 101,
              "raw": "\"a\\a\"",
              "value": "aa",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 101,
              "end": 109,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 103,
                "end": 109
              }
            },
            "value": null
          },
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 134,
            "accessibility": null,
            "computed": false,
            "declare": false,
            "decorators": [],
            "definite": false,
            "key": {
              "type": "Literal",
              "start": 122,
              "end": 126,
              "raw": "\"a \"",
              "value": "a ",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "override": false,
            "readonly": false,
            "static": true,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 126,
              "end": 134,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 128,
                "end": 134
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
      "type": "VariableDeclaration",
      "start": 138,
      "end": 147,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 142,
          "end": 146,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 146,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "decorators": [],
                  "name": "C",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 148,
      "end": 165,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 152,
          "end": 164,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 156,
            "end": 164,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 158,
              "end": 163,
              "raw": "\"   \"",
              "value": "   ",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 166,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 184,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 172,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 175,
            "end": 184,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 177,
              "end": 183,
              "raw": "\"    \"",
              "value": "    ",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 186,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 205,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 195,
            "end": 205,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 197,
              "end": 204,
              "raw": "\"a   b\"",
              "value": "a   b",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 221,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 227,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 230,
            "end": 261,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 232,
              "end": 260,
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 264,
      "end": 361,
      "body": {
        "type": "TSInterfaceBody",
        "start": 276,
        "end": 361,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 282,
            "end": 296,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 282,
              "end": 287,
              "raw": "\"   \"",
              "value": "   ",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 295,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 289,
                "end": 295
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 301,
            "end": 317,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 301,
              "end": 308,
              "raw": "\"a   b\"",
              "value": "a   b",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 316,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 310,
                "end": 316
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 322,
            "end": 359,
            "accessibility": null,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 322,
              "end": 350,
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "regex": null,
              "bigint": null
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 358,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 352,
                "end": 358
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "decorators": [],
        "name": "I",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null
    },
    {
      "type": "VariableDeclaration",
      "start": 363,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 371,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 371,
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 368,
              "end": 371,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 370,
                "end": 371,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 371,
                  "decorators": [],
                  "name": "I",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 373,
      "end": 390,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 377,
          "end": 389,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 378,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 381,
            "end": 389,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 381,
              "end": 382,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 383,
              "end": 388,
              "raw": "\"   \"",
              "value": "   ",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 391,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 409,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 397,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 400,
            "end": 409,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 402,
              "end": 408,
              "raw": "\"    \"",
              "value": "    ",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 411,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 430,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 417,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 420,
            "end": 430,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 422,
              "end": 429,
              "raw": "\"a   b\"",
              "value": "a   b",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 446,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 450,
          "end": 486,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 452,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 455,
            "end": 486,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 455,
              "end": 456,
              "decorators": [],
              "name": "i",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 457,
              "end": 485,
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 490,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 582,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 582,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 495,
              "end": 582,
              "typeAnnotation": {
                "type": "TSTypeLiteral",
                "start": 497,
                "end": 582,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 503,
                    "end": 517,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 503,
                      "end": 508,
                      "raw": "\"   \"",
                      "value": "   ",
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 508,
                      "end": 516,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 510,
                        "end": 516
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 522,
                    "end": 538,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 522,
                      "end": 529,
                      "raw": "\"a   b\"",
                      "value": "a   b",
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 529,
                      "end": 537,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 531,
                        "end": 537
                      }
                    }
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 543,
                    "end": 580,
                    "accessibility": null,
                    "computed": false,
                    "key": {
                      "type": "Literal",
                      "start": 543,
                      "end": 571,
                      "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
                      "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
                      "regex": null,
                      "bigint": null
                    },
                    "optional": false,
                    "readonly": false,
                    "static": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 571,
                      "end": 579,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 573,
                        "end": 579
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
      "type": "VariableDeclaration",
      "start": 584,
      "end": 601,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 588,
          "end": 600,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 592,
            "end": 600,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 594,
              "end": 599,
              "raw": "\"   \"",
              "value": "   ",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 602,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 620,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 608,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 611,
            "end": 620,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 611,
              "end": 612,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 613,
              "end": 619,
              "raw": "\"    \"",
              "value": "    ",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 622,
      "end": 642,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 641,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 628,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 631,
            "end": 641,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 631,
              "end": 632,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 633,
              "end": 640,
              "raw": "\"a   b\"",
              "value": "a   b",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 657,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 697,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 663,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 666,
            "end": 697,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 666,
              "end": 667,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 668,
              "end": 696,
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 700,
      "end": 779,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 704,
          "end": 779,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 704,
            "end": 705,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ObjectExpression",
            "start": 708,
            "end": 779,
            "properties": [
              {
                "type": "Property",
                "start": 714,
                "end": 722,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 714,
                  "end": 719,
                  "raw": "\"   \"",
                  "value": "   ",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 721,
                  "end": 722,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 728,
                "end": 739,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 728,
                  "end": 735,
                  "raw": "\"a   b\"",
                  "value": "a   b",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 737,
                  "end": 739,
                  "raw": "\"\"",
                  "value": "",
                  "regex": null,
                  "bigint": null
                }
              },
              {
                "type": "Property",
                "start": 745,
                "end": 776,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 745,
                  "end": 773,
                  "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
                  "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
                  "regex": null,
                  "bigint": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 775,
                  "end": 776,
                  "raw": "1",
                  "value": 1,
                  "regex": null,
                  "bigint": null
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
      "start": 781,
      "end": 798,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 785,
          "end": 797,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 785,
            "end": 786,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 789,
            "end": 797,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 789,
              "end": 790,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 791,
              "end": 796,
              "raw": "\"   \"",
              "value": "   ",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 799,
      "end": 818,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 803,
          "end": 817,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 803,
            "end": 805,
            "decorators": [],
            "name": "r2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 808,
            "end": 817,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 808,
              "end": 809,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 810,
              "end": 816,
              "raw": "\"    \"",
              "value": "    ",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 819,
      "end": 839,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 823,
          "end": 838,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 823,
            "end": 825,
            "decorators": [],
            "name": "r3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 828,
            "end": 838,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 828,
              "end": 829,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 830,
              "end": 837,
              "raw": "\"a   b\"",
              "value": "a   b",
              "regex": null,
              "bigint": null
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 854,
      "end": 895,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 858,
          "end": 894,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 858,
            "end": 860,
            "decorators": [],
            "name": "r4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 863,
            "end": 894,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 863,
              "end": 864,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 865,
              "end": 893,
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\"",
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "regex": null,
              "bigint": null
            }
          }
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
