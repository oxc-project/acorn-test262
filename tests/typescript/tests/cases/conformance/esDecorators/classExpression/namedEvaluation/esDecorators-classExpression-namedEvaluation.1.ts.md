__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "dec",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 17,
                "end": 20
              },
              "start": 15,
              "end": 20
            },
            "start": 12,
            "end": 20
          },
          "init": null,
          "definite": false,
          "start": 12,
          "end": 20
        }
      ],
      "declare": true,
      "start": 0,
      "end": 21
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 30,
                "end": 33
              },
              "start": 28,
              "end": 33
            },
            "start": 27,
            "end": 33
          },
          "init": null,
          "definite": false,
          "start": 27,
          "end": 33
        }
      ],
      "declare": false,
      "start": 23,
      "end": 34
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 138,
          "end": 139
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "dec",
                "optional": false,
                "typeAnnotation": null,
                "start": 143,
                "end": 146
              },
              "start": 142,
              "end": 146
            }
          ],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 153,
            "end": 156
          },
          "abstract": false,
          "declare": false,
          "start": 142,
          "end": 156
        },
        "start": 138,
        "end": 156
      },
      "directive": null,
      "start": 138,
      "end": 157
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 158,
          "end": 159
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dec",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 171,
                      "end": 174
                    },
                    "start": 170,
                    "end": 174
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 176
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 178,
                    "end": 181
                  },
                  "start": 176,
                  "end": 181
                },
                "value": null,
                "computed": false,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 170,
                "end": 182
              }
            ],
            "start": 168,
            "end": 184
          },
          "abstract": false,
          "declare": false,
          "start": 162,
          "end": 184
        },
        "start": 158,
        "end": 184
      },
      "directive": null,
      "start": 158,
      "end": 185
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&&=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 291,
          "end": 292
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "dec",
                "optional": false,
                "typeAnnotation": null,
                "start": 298,
                "end": 301
              },
              "start": 297,
              "end": 301
            }
          ],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 308,
            "end": 311
          },
          "abstract": false,
          "declare": false,
          "start": 297,
          "end": 311
        },
        "start": 291,
        "end": 311
      },
      "directive": null,
      "start": 291,
      "end": 312
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "&&=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 313,
          "end": 314
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dec",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 328,
                      "end": 331
                    },
                    "start": 327,
                    "end": 331
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 332,
                  "end": 333
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 335,
                    "end": 338
                  },
                  "start": 333,
                  "end": 338
                },
                "value": null,
                "computed": false,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 327,
                "end": 339
              }
            ],
            "start": 325,
            "end": 341
          },
          "abstract": false,
          "declare": false,
          "start": 319,
          "end": 341
        },
        "start": 313,
        "end": 341
      },
      "directive": null,
      "start": 313,
      "end": 342
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "||=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 448,
          "end": 449
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "dec",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 458
              },
              "start": 454,
              "end": 458
            }
          ],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 465,
            "end": 468
          },
          "abstract": false,
          "declare": false,
          "start": 454,
          "end": 468
        },
        "start": 448,
        "end": 468
      },
      "directive": null,
      "start": 448,
      "end": 469
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "||=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 471
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dec",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 485,
                      "end": 488
                    },
                    "start": 484,
                    "end": 488
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 489,
                  "end": 490
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 492,
                    "end": 495
                  },
                  "start": 490,
                  "end": 495
                },
                "value": null,
                "computed": false,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 484,
                "end": 496
              }
            ],
            "start": 482,
            "end": 498
          },
          "abstract": false,
          "declare": false,
          "start": 476,
          "end": 498
        },
        "start": 470,
        "end": 498
      },
      "directive": null,
      "start": 470,
      "end": 499
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 605,
          "end": 606
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [
            {
              "type": "Decorator",
              "expression": {
                "type": "Identifier",
                "decorators": [],
                "name": "dec",
                "optional": false,
                "typeAnnotation": null,
                "start": 612,
                "end": 615
              },
              "start": 611,
              "end": 615
            }
          ],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [],
            "start": 622,
            "end": 625
          },
          "abstract": false,
          "declare": false,
          "start": 611,
          "end": 625
        },
        "start": 605,
        "end": 625
      },
      "directive": null,
      "start": 605,
      "end": 626
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "??=",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 627,
          "end": 628
        },
        "right": {
          "type": "ClassExpression",
          "decorators": [],
          "id": null,
          "typeParameters": null,
          "superClass": null,
          "superTypeArguments": null,
          "implements": [],
          "body": {
            "type": "ClassBody",
            "body": [
              {
                "type": "PropertyDefinition",
                "decorators": [
                  {
                    "type": "Decorator",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "dec",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 642,
                      "end": 645
                    },
                    "start": 641,
                    "end": 645
                  }
                ],
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 646,
                  "end": 647
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSAnyKeyword",
                    "start": 649,
                    "end": 652
                  },
                  "start": 647,
                  "end": 652
                },
                "value": null,
                "computed": false,
                "static": false,
                "declare": false,
                "override": false,
                "optional": false,
                "definite": false,
                "readonly": false,
                "accessibility": null,
                "start": 641,
                "end": 653
              }
            ],
            "start": 639,
            "end": 655
          },
          "abstract": false,
          "declare": false,
          "start": 633,
          "end": 655
        },
        "start": 627,
        "end": 655
      },
      "directive": null,
      "start": 627,
      "end": 656
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 656
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7,
    "range": [
      0,
      7
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 8,
    "end": 11,
    "range": [
      8,
      11
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 12,
    "end": 15,
    "range": [
      12,
      15
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 15,
    "end": 16,
    "range": [
      15,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 17,
    "end": 20,
    "range": [
      17,
      20
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 23,
    "end": 26,
    "range": [
      23,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 27,
    "end": 28,
    "range": [
      27,
      28
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 28,
    "end": 29,
    "range": [
      28,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 30,
    "end": 33,
    "range": [
      30,
      33
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 33,
    "end": 34,
    "range": [
      33,
      34
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 138,
    "end": 139,
    "range": [
      138,
      139
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 140,
    "end": 141,
    "range": [
      140,
      141
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 142,
    "end": 143,
    "range": [
      142,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 143,
    "end": 146,
    "range": [
      143,
      146
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 147,
    "end": 152,
    "range": [
      147,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 156,
    "end": 157,
    "range": [
      156,
      157
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 158,
    "end": 159,
    "range": [
      158,
      159
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161,
    "range": [
      160,
      161
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 162,
    "end": 167,
    "range": [
      162,
      167
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169,
    "range": [
      168,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 171,
    "end": 174,
    "range": [
      171,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 175,
    "end": 176,
    "range": [
      175,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 178,
    "end": 181,
    "range": [
      178,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 183,
    "end": 184,
    "range": [
      183,
      184
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 184,
    "end": 185,
    "range": [
      184,
      185
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 291,
    "end": 292,
    "range": [
      291,
      292
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 293,
    "end": 296,
    "range": [
      293,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 298,
    "end": 301,
    "range": [
      298,
      301
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 302,
    "end": 307,
    "range": [
      302,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 308,
    "end": 309,
    "range": [
      308,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&=",
    "start": 315,
    "end": 318,
    "range": [
      315,
      318
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 319,
    "end": 324,
    "range": [
      319,
      324
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 325,
    "end": 326,
    "range": [
      325,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 327,
    "end": 328,
    "range": [
      327,
      328
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 328,
    "end": 331,
    "range": [
      328,
      331
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 332,
    "end": 333,
    "range": [
      332,
      333
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334,
    "range": [
      333,
      334
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 335,
    "end": 338,
    "range": [
      335,
      338
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 338,
    "end": 339,
    "range": [
      338,
      339
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 341,
    "end": 342,
    "range": [
      341,
      342
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 448,
    "end": 449,
    "range": [
      448,
      449
    ]
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 450,
    "end": 453,
    "range": [
      450,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 454,
    "end": 455,
    "range": [
      454,
      455
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 455,
    "end": 458,
    "range": [
      455,
      458
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 459,
    "end": 464,
    "range": [
      459,
      464
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466,
    "range": [
      465,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 467,
    "end": 468,
    "range": [
      467,
      468
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 468,
    "end": 469,
    "range": [
      468,
      469
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "||=",
    "start": 472,
    "end": 475,
    "range": [
      472,
      475
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 476,
    "end": 481,
    "range": [
      476,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 484,
    "end": 485,
    "range": [
      484,
      485
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 485,
    "end": 488,
    "range": [
      485,
      488
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 489,
    "end": 490,
    "range": [
      489,
      490
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491,
    "range": [
      490,
      491
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 492,
    "end": 495,
    "range": [
      492,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 495,
    "end": 496,
    "range": [
      495,
      496
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 497,
    "end": 498,
    "range": [
      497,
      498
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 498,
    "end": 499,
    "range": [
      498,
      499
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 605,
    "end": 606,
    "range": [
      605,
      606
    ]
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 607,
    "end": 610,
    "range": [
      607,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 611,
    "end": 612,
    "range": [
      611,
      612
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 612,
    "end": 615,
    "range": [
      612,
      615
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 616,
    "end": 621,
    "range": [
      616,
      621
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 625,
    "end": 626,
    "range": [
      625,
      626
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 627,
    "end": 628,
    "range": [
      627,
      628
    ]
  },
  {
    "type": "Punctuator",
    "value": "??=",
    "start": 629,
    "end": 632,
    "range": [
      629,
      632
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 633,
    "end": 638,
    "range": [
      633,
      638
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640,
    "range": [
      639,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 641,
    "end": 642,
    "range": [
      641,
      642
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 642,
    "end": 645,
    "range": [
      642,
      645
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 646,
    "end": 647,
    "range": [
      646,
      647
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 647,
    "end": 648,
    "range": [
      647,
      648
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 649,
    "end": 652,
    "range": [
      649,
      652
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 652,
    "end": 653,
    "range": [
      652,
      653
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 654,
    "end": 655,
    "range": [
      654,
      655
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 655,
    "end": 656,
    "range": [
      655,
      656
    ]
  }
]
```
