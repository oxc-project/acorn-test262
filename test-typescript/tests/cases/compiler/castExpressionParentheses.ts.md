__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 845,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 14,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "a",
            "typeAnnotation": null,
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
      "type": "ExpressionStatement",
      "start": 61,
      "end": 74,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 62,
        "end": 72,
        "expression": {
          "type": "ObjectExpression",
          "start": 67,
          "end": 72,
          "properties": [
            {
              "type": "Property",
              "start": 68,
              "end": 71,
              "method": false,
              "shorthand": false,
              "computed": false,
              "key": {
                "type": "Identifier",
                "start": 68,
                "end": 69,
                "name": "a",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "value": {
                "type": "Literal",
                "start": 70,
                "end": 71,
                "value": 0,
                "raw": "0"
              },
              "kind": "init",
              "optional": false
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 63,
          "end": 66
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 77,
      "end": 91,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 78,
        "end": 89,
        "expression": {
          "type": "ArrayExpression",
          "start": 83,
          "end": 89,
          "elements": [
            {
              "type": "Literal",
              "start": 84,
              "end": 85,
              "value": 1,
              "raw": "1"
            },
            {
              "type": "Literal",
              "start": 86,
              "end": 87,
              "value": 3,
              "raw": "3"
            }
          ]
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 79,
          "end": 82
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 93,
      "end": 109,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 94,
        "end": 107,
        "expression": {
          "type": "Literal",
          "start": 99,
          "end": 107,
          "value": "string",
          "raw": "\"string\""
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 95,
          "end": 98
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 123,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 112,
        "end": 121,
        "expression": {
          "type": "Literal",
          "start": 117,
          "end": 121,
          "value": 23,
          "raw": "23.0"
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 113,
          "end": 116
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 125,
      "end": 134,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 126,
        "end": 132,
        "expression": {
          "type": "Literal",
          "start": 131,
          "end": 132,
          "value": 1,
          "raw": "1"
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 127,
          "end": 130
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 146,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 137,
        "end": 144,
        "expression": {
          "type": "Literal",
          "start": 142,
          "end": 144,
          "value": 1,
          "raw": "1."
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 138,
          "end": 141
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 147,
      "end": 158,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 148,
        "end": 156,
        "expression": {
          "type": "Literal",
          "start": 153,
          "end": 156,
          "value": 1,
          "raw": "1.0"
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 149,
          "end": 152
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 173,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 160,
        "end": 171,
        "expression": {
          "type": "Literal",
          "start": 165,
          "end": 171,
          "value": 1.2e+35,
          "raw": "12e+34"
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 161,
          "end": 164
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 186,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 175,
        "end": 184,
        "expression": {
          "type": "Literal",
          "start": 180,
          "end": 184,
          "value": 255,
          "raw": "0xff"
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 176,
          "end": 179
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 204,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 188,
        "end": 202,
        "expression": {
          "type": "Literal",
          "start": 193,
          "end": 202,
          "value": null,
          "raw": "/regexp/g",
          "regex": {
            "flags": "g",
            "pattern": "regexp"
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 189,
          "end": 192
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 206,
      "end": 219,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 207,
        "end": 217,
        "expression": {
          "type": "Literal",
          "start": 212,
          "end": 217,
          "value": false,
          "raw": "false"
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 208,
          "end": 211
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 233,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 222,
        "end": 231,
        "expression": {
          "type": "Literal",
          "start": 227,
          "end": 231,
          "value": true,
          "raw": "true"
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 223,
          "end": 226
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 235,
      "end": 247,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 236,
        "end": 245,
        "expression": {
          "type": "Literal",
          "start": 241,
          "end": 245,
          "value": null,
          "raw": "null"
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 237,
          "end": 240
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 275,
      "end": 287,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 276,
        "end": 285,
        "expression": {
          "type": "ThisExpression",
          "start": 281,
          "end": 285
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 277,
          "end": 280
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 289,
      "end": 303,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 290,
        "end": 301,
        "expression": {
          "type": "MemberExpression",
          "start": 295,
          "end": 301,
          "object": {
            "type": "ThisExpression",
            "start": 295,
            "end": 299
          },
          "property": {
            "type": "Identifier",
            "start": 300,
            "end": 301,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 291,
          "end": 294
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 305,
      "end": 323,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 306,
        "end": 321,
        "expression": {
          "type": "MemberExpression",
          "start": 311,
          "end": 321,
          "object": {
            "type": "TSTypeAssertion",
            "start": 312,
            "end": 318,
            "expression": {
              "type": "Identifier",
              "start": 317,
              "end": 318,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 313,
              "end": 316
            }
          },
          "property": {
            "type": "Identifier",
            "start": 320,
            "end": 321,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 307,
          "end": 310
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 324,
      "end": 338,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 325,
        "end": 336,
        "expression": {
          "type": "TSTypeAssertion",
          "start": 330,
          "end": 336,
          "expression": {
            "type": "Identifier",
            "start": 335,
            "end": 336,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 331,
            "end": 334
          }
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 326,
          "end": 329
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 339,
      "end": 351,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 340,
        "end": 349,
        "expression": {
          "type": "MemberExpression",
          "start": 345,
          "end": 349,
          "object": {
            "type": "Identifier",
            "start": 345,
            "end": 346,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 347,
            "end": 348,
            "value": 0,
            "raw": "0"
          },
          "computed": true,
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 341,
          "end": 344
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 352,
      "end": 368,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 353,
        "end": 366,
        "expression": {
          "type": "MemberExpression",
          "start": 358,
          "end": 366,
          "object": {
            "type": "MemberExpression",
            "start": 358,
            "end": 361,
            "object": {
              "type": "Identifier",
              "start": 358,
              "end": 359,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 360,
              "end": 361,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 362,
            "end": 365,
            "value": "0",
            "raw": "\"0\""
          },
          "computed": true,
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 354,
          "end": 357
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 369,
      "end": 382,
      "expression": {
        "type": "MemberExpression",
        "start": 369,
        "end": 381,
        "object": {
          "type": "TSTypeAssertion",
          "start": 370,
          "end": 378,
          "expression": {
            "type": "CallExpression",
            "start": 375,
            "end": 378,
            "callee": {
              "type": "Identifier",
              "start": 375,
              "end": 376,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 371,
            "end": 374
          }
        },
        "property": {
          "type": "Identifier",
          "start": 380,
          "end": 381,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 383,
      "end": 396,
      "expression": {
        "type": "MemberExpression",
        "start": 383,
        "end": 395,
        "object": {
          "type": "TSTypeAssertion",
          "start": 384,
          "end": 390,
          "expression": {
            "type": "Literal",
            "start": 389,
            "end": 390,
            "value": 1,
            "raw": "1"
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 385,
            "end": 388
          }
        },
        "property": {
          "type": "Identifier",
          "start": 392,
          "end": 395,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 397,
      "end": 411,
      "expression": {
        "type": "MemberExpression",
        "start": 397,
        "end": 410,
        "object": {
          "type": "TSTypeAssertion",
          "start": 398,
          "end": 405,
          "expression": {
            "type": "Literal",
            "start": 403,
            "end": 405,
            "value": 1,
            "raw": "1."
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 399,
            "end": 402
          }
        },
        "property": {
          "type": "Identifier",
          "start": 407,
          "end": 410,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 412,
      "end": 427,
      "expression": {
        "type": "MemberExpression",
        "start": 412,
        "end": 426,
        "object": {
          "type": "TSTypeAssertion",
          "start": 413,
          "end": 421,
          "expression": {
            "type": "Literal",
            "start": 418,
            "end": 421,
            "value": 1,
            "raw": "1.0"
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 414,
            "end": 417
          }
        },
        "property": {
          "type": "Identifier",
          "start": 423,
          "end": 426,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 428,
      "end": 446,
      "expression": {
        "type": "MemberExpression",
        "start": 428,
        "end": 445,
        "object": {
          "type": "TSTypeAssertion",
          "start": 429,
          "end": 440,
          "expression": {
            "type": "Literal",
            "start": 434,
            "end": 440,
            "value": 1.2e+35,
            "raw": "12e+34"
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 430,
            "end": 433
          }
        },
        "property": {
          "type": "Identifier",
          "start": 442,
          "end": 445,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 447,
      "end": 463,
      "expression": {
        "type": "MemberExpression",
        "start": 447,
        "end": 462,
        "object": {
          "type": "TSTypeAssertion",
          "start": 448,
          "end": 457,
          "expression": {
            "type": "Literal",
            "start": 453,
            "end": 457,
            "value": 255,
            "raw": "0xff"
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 449,
            "end": 452
          }
        },
        "property": {
          "type": "Identifier",
          "start": 459,
          "end": 462,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 465,
      "end": 479,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 477,
          "end": 478,
          "id": {
            "type": "Identifier",
            "start": 477,
            "end": 478,
            "name": "A",
            "typeAnnotation": null,
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
      "type": "ExpressionStatement",
      "start": 520,
      "end": 533,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 521,
        "end": 531,
        "expression": {
          "type": "Literal",
          "start": 527,
          "end": 530,
          "value": 1,
          "raw": "1.0"
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 522,
          "end": 525
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 535,
      "end": 552,
      "expression": {
        "type": "MemberExpression",
        "start": 535,
        "end": 551,
        "object": {
          "type": "TSTypeAssertion",
          "start": 536,
          "end": 546,
          "expression": {
            "type": "NewExpression",
            "start": 541,
            "end": 546,
            "callee": {
              "type": "Identifier",
              "start": 545,
              "end": 546,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 537,
            "end": 540
          }
        },
        "property": {
          "type": "Identifier",
          "start": 548,
          "end": 551,
          "name": "foo",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 554,
      "end": 572,
      "expression": {
        "type": "MemberExpression",
        "start": 554,
        "end": 571,
        "object": {
          "type": "TSTypeAssertion",
          "start": 555,
          "end": 568,
          "expression": {
            "type": "UnaryExpression",
            "start": 560,
            "end": 568,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 567,
              "end": 568,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 556,
            "end": 559
          }
        },
        "property": {
          "type": "Identifier",
          "start": 570,
          "end": 571,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 574,
      "end": 586,
      "expression": {
        "type": "MemberExpression",
        "start": 574,
        "end": 585,
        "object": {
          "type": "TSTypeAssertion",
          "start": 575,
          "end": 582,
          "expression": {
            "type": "UnaryExpression",
            "start": 580,
            "end": 582,
            "operator": "-",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 581,
              "end": 582,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 576,
            "end": 579
          }
        },
        "property": {
          "type": "Identifier",
          "start": 584,
          "end": 585,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 588,
      "end": 603,
      "expression": {
        "type": "NewExpression",
        "start": 588,
        "end": 602,
        "callee": {
          "type": "TSTypeAssertion",
          "start": 593,
          "end": 601,
          "expression": {
            "type": "CallExpression",
            "start": 598,
            "end": 601,
            "callee": {
              "type": "Identifier",
              "start": 598,
              "end": 599,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 594,
            "end": 597
          }
        },
        "arguments": [],
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 604,
      "end": 622,
      "expression": {
        "type": "CallExpression",
        "start": 604,
        "end": 621,
        "callee": {
          "type": "ArrowFunctionExpression",
          "start": 605,
          "end": 618,
          "id": null,
          "expression": false,
          "generator": false,
          "async": false,
          "params": [],
          "body": {
            "type": "BlockStatement",
            "start": 616,
            "end": 618,
            "body": []
          },
          "typeParameters": {
            "type": "TSTypeParameterDeclaration",
            "start": 605,
            "end": 611,
            "params": [
              {
                "type": "TSTypeParameter",
                "start": 606,
                "end": 610,
                "name": {
                  "type": "Identifier",
                  "start": 606,
                  "end": 610,
                  "name": "Tany",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "constraint": null,
                "default": null,
                "in": false,
                "out": false,
                "const": false
              }
            ]
          },
          "returnType": null
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 623,
      "end": 651,
      "expression": {
        "type": "CallExpression",
        "start": 623,
        "end": 650,
        "callee": {
          "type": "TSTypeAssertion",
          "start": 624,
          "end": 647,
          "expression": {
            "type": "FunctionExpression",
            "start": 629,
            "end": 647,
            "id": {
              "type": "Identifier",
              "start": 638,
              "end": 641,
              "name": "foo",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "expression": false,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "BlockStatement",
              "start": 644,
              "end": 647,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 625,
            "end": 628
          }
        },
        "arguments": [],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 652,
      "end": 677,
      "expression": {
        "type": "MemberExpression",
        "start": 652,
        "end": 676,
        "object": {
          "type": "TSTypeAssertion",
          "start": 653,
          "end": 673,
          "expression": {
            "type": "TSTypeAssertion",
            "start": 658,
            "end": 673,
            "expression": {
              "type": "TSTypeAssertion",
              "start": 666,
              "end": 673,
              "expression": {
                "type": "UnaryExpression",
                "start": 671,
                "end": 673,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 672,
                  "end": 673,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 667,
                "end": 670
              }
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 659,
              "end": 665
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 654,
            "end": 657
          }
        },
        "property": {
          "type": "Identifier",
          "start": 675,
          "end": 676,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 731,
      "end": 758,
      "expression": {
        "type": "MemberExpression",
        "start": 731,
        "end": 757,
        "object": {
          "type": "TSTypeAssertion",
          "start": 732,
          "end": 754,
          "expression": {
            "type": "TSTypeAssertion",
            "start": 737,
            "end": 754,
            "expression": {
              "type": "TSTypeAssertion",
              "start": 746,
              "end": 753,
              "expression": {
                "type": "UnaryExpression",
                "start": 751,
                "end": 753,
                "operator": "-",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 753,
                  "name": "A",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              },
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 747,
                "end": 750
              }
            },
            "typeAnnotation": {
              "type": "TSNumberKeyword",
              "start": 738,
              "end": 744
            }
          },
          "typeAnnotation": {
            "type": "TSAnyKeyword",
            "start": 733,
            "end": 736
          }
        },
        "property": {
          "type": "Identifier",
          "start": 756,
          "end": 757,
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "computed": false,
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 832,
      "end": 842,
      "expression": {
        "type": "TSTypeAssertion",
        "start": 833,
        "end": 841,
        "expression": {
          "type": "Identifier",
          "start": 839,
          "end": 840,
          "name": "A",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "typeAnnotation": {
          "type": "TSAnyKeyword",
          "start": 834,
          "end": 837
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
