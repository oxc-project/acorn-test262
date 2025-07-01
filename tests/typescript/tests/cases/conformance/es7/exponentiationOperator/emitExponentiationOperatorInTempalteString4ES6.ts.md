__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 6
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 9,
            "end": 11
          },
          "definite": false,
          "start": 4,
          "end": 11
        }
      ],
      "declare": false,
      "start": 0,
      "end": 12
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "t2",
            "optional": false,
            "typeAnnotation": null,
            "start": 17,
            "end": 19
          },
          "init": {
            "type": "Literal",
            "value": 10,
            "raw": "10",
            "start": 22,
            "end": 24
          },
          "definite": false,
          "start": 17,
          "end": 24
        }
      ],
      "declare": false,
      "start": 13,
      "end": 25
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 30,
            "end": 31
          },
          "init": null,
          "definite": false,
          "start": 30,
          "end": 31
        }
      ],
      "declare": false,
      "start": 26,
      "end": 32
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 55,
            "end": 58
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 67,
            "end": 75
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 58,
              "end": 60
            },
            "operator": "**",
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 65,
                "end": 67
              },
              "prefix": true,
              "start": 64,
              "end": 67
            },
            "start": 58,
            "end": 67
          }
        ],
        "start": 55,
        "end": 75
      },
      "directive": null,
      "start": 55,
      "end": 76
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 77,
            "end": 80
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 96,
            "end": 104
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 82,
                  "end": 84
                },
                "prefix": true,
                "start": 81,
                "end": 84
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 89,
                "end": 91
              },
              "start": 80,
              "end": 91
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 94,
              "end": 96
            },
            "start": 80,
            "end": 96
          }
        ],
        "start": 77,
        "end": 104
      },
      "directive": null,
      "start": 77,
      "end": 105
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 106,
            "end": 109
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 127,
            "end": 135
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 113,
                    "end": 115
                  },
                  "start": 111,
                  "end": 115
                },
                "prefix": true,
                "start": 110,
                "end": 115
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 120,
                "end": 122
              },
              "start": 109,
              "end": 122
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 125,
              "end": 127
            },
            "start": 109,
            "end": 127
          }
        ],
        "start": 106,
        "end": 135
      },
      "directive": null,
      "start": 106,
      "end": 136
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 137,
            "end": 140
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 158,
            "end": 166
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 142,
                    "end": 144
                  },
                  "start": 142,
                  "end": 146
                },
                "prefix": true,
                "start": 141,
                "end": 146
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 151,
                "end": 153
              },
              "start": 140,
              "end": 153
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 158
            },
            "start": 140,
            "end": 158
          }
        ],
        "start": 137,
        "end": 166
      },
      "directive": null,
      "start": 137,
      "end": 167
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 168,
            "end": 171
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 191,
            "end": 199
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 173,
                "end": 175
              },
              "prefix": true,
              "start": 172,
              "end": 175
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 180,
                "end": 182
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 188,
                  "end": 190
                },
                "start": 186,
                "end": 190
              },
              "start": 180,
              "end": 190
            },
            "start": 171,
            "end": 190
          }
        ],
        "start": 168,
        "end": 199
      },
      "directive": null,
      "start": 168,
      "end": 200
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 201,
            "end": 204
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " world",
              "cooked": " world"
            },
            "tail": true,
            "start": 228,
            "end": 236
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 212,
                "end": 214
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 218,
                  "end": 220
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 224,
                  "end": 226
                },
                "start": 218,
                "end": 226
              },
              "start": 212,
              "end": 226
            },
            "prefix": true,
            "start": 204,
            "end": 227
          }
        ],
        "start": 201,
        "end": 236
      },
      "directive": null,
      "start": 201,
      "end": 237
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 278,
            "end": 281
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 290,
            "end": 306
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 315,
            "end": 317
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 283
            },
            "operator": "**",
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 288,
                "end": 290
              },
              "prefix": true,
              "start": 287,
              "end": 290
            },
            "start": 281,
            "end": 290
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 308
            },
            "operator": "**",
            "right": {
              "type": "UnaryExpression",
              "operator": "-",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 313,
                "end": 315
              },
              "prefix": true,
              "start": 312,
              "end": 315
            },
            "start": 306,
            "end": 315
          }
        ],
        "start": 278,
        "end": 317
      },
      "directive": null,
      "start": 278,
      "end": 318
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 319,
            "end": 322
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 338,
            "end": 354
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 370,
            "end": 372
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 326
                },
                "prefix": true,
                "start": 323,
                "end": 326
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 331,
                "end": 333
              },
              "start": 322,
              "end": 333
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 336,
              "end": 338
            },
            "start": 322,
            "end": 338
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 356,
                  "end": 358
                },
                "prefix": true,
                "start": 355,
                "end": 358
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 363,
                "end": 365
              },
              "start": 354,
              "end": 365
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 368,
              "end": 370
            },
            "start": 354,
            "end": 370
          }
        ],
        "start": 319,
        "end": 372
      },
      "directive": null,
      "start": 319,
      "end": 373
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 374,
            "end": 377
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 395,
            "end": 411
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 431,
            "end": 433
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 381,
                    "end": 383
                  },
                  "start": 379,
                  "end": 383
                },
                "prefix": true,
                "start": 378,
                "end": 383
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 388,
                "end": 390
              },
              "start": 377,
              "end": 390
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 393,
              "end": 395
            },
            "start": 377,
            "end": 395
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 411,
              "end": 413
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 423
                  },
                  "start": 419,
                  "end": 423
                },
                "prefix": true,
                "start": 418,
                "end": 423
              },
              "operator": "**",
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 429,
                  "end": 431
                },
                "prefix": true,
                "start": 427,
                "end": 431
              },
              "start": 417,
              "end": 431
            },
            "start": 411,
            "end": 431
          }
        ],
        "start": 374,
        "end": 433
      },
      "directive": null,
      "start": 374,
      "end": 434
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 435,
            "end": 438
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 456,
            "end": 472
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 494,
            "end": 496
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 440,
                    "end": 442
                  },
                  "start": 440,
                  "end": 444
                },
                "prefix": true,
                "start": 439,
                "end": 444
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 449,
                "end": 451
              },
              "start": 438,
              "end": 451
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 454,
              "end": 456
            },
            "start": 438,
            "end": 456
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 474
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 480,
                    "end": 482
                  },
                  "start": 480,
                  "end": 484
                },
                "prefix": true,
                "start": 479,
                "end": 484
              },
              "operator": "**",
              "right": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 494
                },
                "prefix": true,
                "start": 490,
                "end": 494
              },
              "start": 478,
              "end": 494
            },
            "start": 472,
            "end": 494
          }
        ],
        "start": 435,
        "end": 496
      },
      "directive": null,
      "start": 435,
      "end": 497
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 498,
            "end": 501
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 521,
            "end": 537
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 557,
            "end": 559
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 503,
                "end": 505
              },
              "prefix": true,
              "start": 502,
              "end": 505
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 510,
                "end": 512
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 518,
                  "end": 520
                },
                "start": 516,
                "end": 520
              },
              "start": 510,
              "end": 520
            },
            "start": 501,
            "end": 520
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 539,
                "end": 541
              },
              "prefix": true,
              "start": 538,
              "end": 541
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 546,
                "end": 548
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 554,
                  "end": 556
                },
                "start": 552,
                "end": 556
              },
              "start": 546,
              "end": 556
            },
            "start": 537,
            "end": 556
          }
        ],
        "start": 498,
        "end": 559
      },
      "directive": null,
      "start": 498,
      "end": 560
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 561,
            "end": 564
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 587,
            "end": 603
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 626,
            "end": 628
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 572,
                "end": 574
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 578,
                  "end": 580
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 584,
                  "end": 586
                },
                "start": 578,
                "end": 586
              },
              "start": 572,
              "end": 586
            },
            "prefix": true,
            "start": 564,
            "end": 587
          },
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 613
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 617,
                  "end": 619
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 623,
                  "end": 625
                },
                "start": 617,
                "end": 625
              },
              "start": 611,
              "end": 625
            },
            "prefix": true,
            "start": 603,
            "end": 626
          }
        ],
        "start": 561,
        "end": 628
      },
      "directive": null,
      "start": 561,
      "end": 629
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 652,
            "end": 661
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 677,
            "end": 679
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 663,
                  "end": 665
                },
                "prefix": true,
                "start": 662,
                "end": 665
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 670,
                "end": 672
              },
              "start": 661,
              "end": 672
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 675,
              "end": 677
            },
            "start": 661,
            "end": 677
          }
        ],
        "start": 652,
        "end": 679
      },
      "directive": null,
      "start": 652,
      "end": 680
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 681,
            "end": 690
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 708,
            "end": 710
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": true,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 696
                  },
                  "start": 692,
                  "end": 696
                },
                "prefix": true,
                "start": 691,
                "end": 696
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 701,
                "end": 703
              },
              "start": 690,
              "end": 703
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 706,
              "end": 708
            },
            "start": 690,
            "end": 708
          }
        ],
        "start": 681,
        "end": 710
      },
      "directive": null,
      "start": 681,
      "end": 711
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 712,
            "end": 721
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 739,
            "end": 741
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "UnaryExpression",
                "operator": "-",
                "argument": {
                  "type": "UpdateExpression",
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 723,
                    "end": 725
                  },
                  "start": 723,
                  "end": 727
                },
                "prefix": true,
                "start": 722,
                "end": 727
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 734
              },
              "start": 721,
              "end": 734
            },
            "operator": "-",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 737,
              "end": 739
            },
            "start": 721,
            "end": 739
          }
        ],
        "start": 712,
        "end": 741
      },
      "directive": null,
      "start": 712,
      "end": 742
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 743,
            "end": 752
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 772,
            "end": 774
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "UnaryExpression",
              "operator": "~",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 754,
                "end": 756
              },
              "prefix": true,
              "start": 753,
              "end": 756
            },
            "operator": "**",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 761,
                "end": 763
              },
              "operator": "**",
              "right": {
                "type": "UpdateExpression",
                "operator": "--",
                "prefix": true,
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 771
                },
                "start": 767,
                "end": 771
              },
              "start": 761,
              "end": 771
            },
            "start": 752,
            "end": 771
          }
        ],
        "start": 743,
        "end": 774
      },
      "directive": null,
      "start": 743,
      "end": 775
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "TemplateLiteral",
        "quasis": [
          {
            "type": "TemplateElement",
            "value": {
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 776,
            "end": 785
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 808,
            "end": 810
          }
        ],
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 793,
                "end": 795
              },
              "operator": "**",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 799,
                  "end": 801
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 805,
                  "end": 807
                },
                "start": 799,
                "end": 807
              },
              "start": 793,
              "end": 807
            },
            "prefix": true,
            "start": 785,
            "end": 808
          }
        ],
        "start": 776,
        "end": 810
      },
      "directive": null,
      "start": 776,
      "end": 811
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 811
}
```
