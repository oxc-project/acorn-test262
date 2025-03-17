__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 896,
  "body": [
    {
      "type": "ClassDeclaration",
      "start": 0,
      "end": 136,
      "id": {
        "type": "Identifier",
        "start": 6,
        "end": 7,
        "name": "C",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "superClass": null,
      "body": {
        "type": "ClassBody",
        "start": 8,
        "end": 136,
        "body": [
          {
            "type": "PropertyDefinition",
            "start": 14,
            "end": 28,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 14,
              "end": 19,
              "value": "   ",
              "raw": "\"   \""
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 33,
            "end": 49,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 33,
              "end": 40,
              "value": "a   b",
              "raw": "\"a   b\""
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 54,
            "end": 91,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 54,
              "end": 82,
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\""
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 96,
            "end": 110,
            "static": false,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 96,
              "end": 101,
              "value": "aa",
              "raw": "\"a\\a\""
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          },
          {
            "type": "PropertyDefinition",
            "start": 115,
            "end": 134,
            "static": true,
            "computed": false,
            "key": {
              "type": "Literal",
              "start": 122,
              "end": 126,
              "value": "a ",
              "raw": "\"a \""
            },
            "value": null,
            "decorators": [],
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
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
            "accessibility": null
          }
        ]
      },
      "decorators": [],
      "typeParameters": null,
      "implements": [],
      "abstract": false,
      "declare": false,
      "superTypeArguments": null
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
          "id": {
            "type": "Identifier",
            "start": 142,
            "end": 146,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 143,
              "end": 146,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 145,
                "end": 146,
                "typeName": {
                  "type": "Identifier",
                  "start": 145,
                  "end": 146,
                  "name": "C",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 152,
            "end": 153,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 156,
            "end": 164,
            "object": {
              "type": "Identifier",
              "start": 156,
              "end": 157,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 158,
              "end": 163,
              "value": "   ",
              "raw": "\"   \""
            },
            "computed": true,
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
      "start": 166,
      "end": 185,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 170,
          "end": 184,
          "id": {
            "type": "Identifier",
            "start": 170,
            "end": 172,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 175,
            "end": 184,
            "object": {
              "type": "Identifier",
              "start": 175,
              "end": 176,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 177,
              "end": 183,
              "value": "    ",
              "raw": "\"    \""
            },
            "computed": true,
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
      "start": 186,
      "end": 206,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 190,
          "end": 205,
          "id": {
            "type": "Identifier",
            "start": 190,
            "end": 192,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 195,
            "end": 205,
            "object": {
              "type": "Identifier",
              "start": 195,
              "end": 196,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 197,
              "end": 204,
              "value": "a   b",
              "raw": "\"a   b\""
            },
            "computed": true,
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
      "start": 221,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 225,
          "end": 261,
          "id": {
            "type": "Identifier",
            "start": 225,
            "end": 227,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 230,
            "end": 261,
            "object": {
              "type": "Identifier",
              "start": 230,
              "end": 231,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 232,
              "end": 260,
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 264,
      "end": 361,
      "id": {
        "type": "Identifier",
        "start": 274,
        "end": 275,
        "name": "I",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 276,
        "end": 361,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 282,
            "end": 296,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 282,
              "end": 287,
              "value": "   ",
              "raw": "\"   \""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 287,
              "end": 295,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 289,
                "end": 295
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 301,
            "end": 317,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 301,
              "end": 308,
              "value": "a   b",
              "raw": "\"a   b\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 308,
              "end": 316,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 310,
                "end": 316
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 322,
            "end": 359,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 322,
              "end": 350,
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\""
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 350,
              "end": 358,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 352,
                "end": 358
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
      "start": 363,
      "end": 372,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 367,
          "end": 371,
          "id": {
            "type": "Identifier",
            "start": 367,
            "end": 371,
            "name": "i",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 368,
              "end": 371,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 370,
                "end": 371,
                "typeName": {
                  "type": "Identifier",
                  "start": 370,
                  "end": 371,
                  "name": "I",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 377,
            "end": 378,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 381,
            "end": 389,
            "object": {
              "type": "Identifier",
              "start": 381,
              "end": 382,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 383,
              "end": 388,
              "value": "   ",
              "raw": "\"   \""
            },
            "computed": true,
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
      "start": 391,
      "end": 410,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 395,
          "end": 409,
          "id": {
            "type": "Identifier",
            "start": 395,
            "end": 397,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 400,
            "end": 409,
            "object": {
              "type": "Identifier",
              "start": 400,
              "end": 401,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 402,
              "end": 408,
              "value": "    ",
              "raw": "\"    \""
            },
            "computed": true,
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
      "start": 411,
      "end": 431,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 415,
          "end": 430,
          "id": {
            "type": "Identifier",
            "start": 415,
            "end": 417,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 420,
            "end": 430,
            "object": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 422,
              "end": 429,
              "value": "a   b",
              "raw": "\"a   b\""
            },
            "computed": true,
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
      "start": 446,
      "end": 487,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 450,
          "end": 486,
          "id": {
            "type": "Identifier",
            "start": 450,
            "end": 452,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 455,
            "end": 486,
            "object": {
              "type": "Identifier",
              "start": 455,
              "end": 456,
              "name": "i",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 457,
              "end": 485,
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\""
            },
            "computed": true,
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
      "start": 490,
      "end": 582,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 494,
          "end": 582,
          "id": {
            "type": "Identifier",
            "start": 494,
            "end": 582,
            "name": "a",
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
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 503,
                      "end": 508,
                      "value": "   ",
                      "raw": "\"   \""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 508,
                      "end": 516,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 510,
                        "end": 516
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 522,
                    "end": 538,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 522,
                      "end": 529,
                      "value": "a   b",
                      "raw": "\"a   b\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 529,
                      "end": 537,
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 531,
                        "end": 537
                      }
                    },
                    "accessibility": null,
                    "static": false
                  },
                  {
                    "type": "TSPropertySignature",
                    "start": 543,
                    "end": 580,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Literal",
                      "start": 543,
                      "end": 571,
                      "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
                      "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\""
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 571,
                      "end": 579,
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 573,
                        "end": 579
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
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 588,
            "end": 589,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 592,
            "end": 600,
            "object": {
              "type": "Identifier",
              "start": 592,
              "end": 593,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 594,
              "end": 599,
              "value": "   ",
              "raw": "\"   \""
            },
            "computed": true,
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
      "start": 602,
      "end": 621,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 606,
          "end": 620,
          "id": {
            "type": "Identifier",
            "start": 606,
            "end": 608,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 611,
            "end": 620,
            "object": {
              "type": "Identifier",
              "start": 611,
              "end": 612,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 613,
              "end": 619,
              "value": "    ",
              "raw": "\"    \""
            },
            "computed": true,
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
      "start": 622,
      "end": 642,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 626,
          "end": 641,
          "id": {
            "type": "Identifier",
            "start": 626,
            "end": 628,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 631,
            "end": 641,
            "object": {
              "type": "Identifier",
              "start": 631,
              "end": 632,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 633,
              "end": 640,
              "value": "a   b",
              "raw": "\"a   b\""
            },
            "computed": true,
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
      "start": 657,
      "end": 698,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 661,
          "end": 697,
          "id": {
            "type": "Identifier",
            "start": 661,
            "end": 663,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 666,
            "end": 697,
            "object": {
              "type": "Identifier",
              "start": 666,
              "end": 667,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 668,
              "end": 696,
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\""
            },
            "computed": true,
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
      "start": 700,
      "end": 779,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 704,
          "end": 779,
          "id": {
            "type": "Identifier",
            "start": 704,
            "end": 705,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 714,
                  "end": 719,
                  "value": "   ",
                  "raw": "\"   \""
                },
                "value": {
                  "type": "Literal",
                  "start": 721,
                  "end": 722,
                  "value": 1,
                  "raw": "1"
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 728,
                "end": 739,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 728,
                  "end": 735,
                  "value": "a   b",
                  "raw": "\"a   b\""
                },
                "value": {
                  "type": "Literal",
                  "start": 737,
                  "end": 739,
                  "value": "",
                  "raw": "\"\""
                },
                "kind": "init",
                "optional": false
              },
              {
                "type": "Property",
                "start": 745,
                "end": 776,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Literal",
                  "start": 745,
                  "end": 773,
                  "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
                  "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\""
                },
                "value": {
                  "type": "Literal",
                  "start": 775,
                  "end": 776,
                  "value": 1,
                  "raw": "1"
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
      "start": 781,
      "end": 798,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 785,
          "end": 797,
          "id": {
            "type": "Identifier",
            "start": 785,
            "end": 786,
            "name": "r",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 789,
            "end": 797,
            "object": {
              "type": "Identifier",
              "start": 789,
              "end": 790,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 791,
              "end": 796,
              "value": "   ",
              "raw": "\"   \""
            },
            "computed": true,
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
      "start": 799,
      "end": 818,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 803,
          "end": 817,
          "id": {
            "type": "Identifier",
            "start": 803,
            "end": 805,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 808,
            "end": 817,
            "object": {
              "type": "Identifier",
              "start": 808,
              "end": 809,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 810,
              "end": 816,
              "value": "    ",
              "raw": "\"    \""
            },
            "computed": true,
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
      "start": 819,
      "end": 839,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 823,
          "end": 838,
          "id": {
            "type": "Identifier",
            "start": 823,
            "end": 825,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 828,
            "end": 838,
            "object": {
              "type": "Identifier",
              "start": 828,
              "end": 829,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 830,
              "end": 837,
              "value": "a   b",
              "raw": "\"a   b\""
            },
            "computed": true,
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
      "start": 854,
      "end": 895,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 858,
          "end": 894,
          "id": {
            "type": "Identifier",
            "start": 858,
            "end": 860,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 863,
            "end": 894,
            "object": {
              "type": "Identifier",
              "start": 863,
              "end": 864,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 865,
              "end": 893,
              "value": "~!@#$%^&*()_+{}|:'<>?/.,`",
              "raw": "\"~!@#$%^&*()_+{}|:'<>?\\/.,`\""
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
