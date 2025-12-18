__ESTREE_TEST__:AST:
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
              "raw": "hello ",
              "cooked": "hello "
            },
            "tail": false,
            "start": 55,
            "end": 64
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 72,
            "end": 74
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
              "start": 64,
              "end": 66
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 70,
              "end": 72
            },
            "start": 64,
            "end": 72
          }
        ],
        "start": 55,
        "end": 74
      },
      "directive": null,
      "start": 55,
      "end": 75
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
            "start": 76,
            "end": 85
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 99,
            "end": 101
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
              "start": 85,
              "end": 87
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
                "start": 91,
                "end": 93
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 97,
                "end": 99
              },
              "start": 91,
              "end": 99
            },
            "start": 85,
            "end": 99
          }
        ],
        "start": 76,
        "end": 101
      },
      "directive": null,
      "start": 76,
      "end": 102
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
            "start": 103,
            "end": 112
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 125,
            "end": 127
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
              "start": 112,
              "end": 114
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 117,
                "end": 119
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 123,
                "end": 125
              },
              "start": 117,
              "end": 125
            },
            "start": 112,
            "end": 125
          }
        ],
        "start": 103,
        "end": 127
      },
      "directive": null,
      "start": 103,
      "end": 128
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
            "start": 129,
            "end": 138
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 151,
            "end": 153
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 138,
                "end": 140
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 144,
                "end": 146
              },
              "start": 138,
              "end": 146
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 149,
              "end": 151
            },
            "start": 138,
            "end": 151
          }
        ],
        "start": 129,
        "end": 153
      },
      "directive": null,
      "start": 129,
      "end": 154
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
            "start": 155,
            "end": 164
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 183,
            "end": 185
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 164,
                "end": 166
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 169,
                  "end": 171
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 175,
                  "end": 177
                },
                "start": 169,
                "end": 177
              },
              "start": 164,
              "end": 177
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 180,
              "end": 182
            },
            "start": 164,
            "end": 182
          }
        ],
        "start": 155,
        "end": 185
      },
      "directive": null,
      "start": 155,
      "end": 186
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
            "start": 187,
            "end": 196
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 220,
            "end": 222
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
                "start": 204,
                "end": 206
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
                  "start": 210,
                  "end": 212
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 216,
                  "end": 218
                },
                "start": 210,
                "end": 218
              },
              "start": 204,
              "end": 218
            },
            "prefix": true,
            "start": 196,
            "end": 219
          }
        ],
        "start": 187,
        "end": 222
      },
      "directive": null,
      "start": 187,
      "end": 223
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
            "start": 224,
            "end": 233
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 261,
            "end": 263
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 233,
              "end": 234
            },
            "operator": "+",
            "right": {
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
                  "start": 245,
                  "end": 247
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
                    "start": 251,
                    "end": 253
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 259
                  },
                  "start": 251,
                  "end": 259
                },
                "start": 245,
                "end": 259
              },
              "prefix": true,
              "start": 237,
              "end": 260
            },
            "start": 233,
            "end": 260
          }
        ],
        "start": 224,
        "end": 263
      },
      "directive": null,
      "start": 224,
      "end": 264
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
            "start": 266,
            "end": 275
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 283,
            "end": 286
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 294,
            "end": 296
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
              "start": 275,
              "end": 277
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 281,
              "end": 283
            },
            "start": 275,
            "end": 283
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 286,
              "end": 288
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 292,
              "end": 294
            },
            "start": 286,
            "end": 294
          }
        ],
        "start": 266,
        "end": 296
      },
      "directive": null,
      "start": 266,
      "end": 297
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
            "start": 298,
            "end": 307
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 321,
            "end": 324
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 338,
            "end": 340
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
              "start": 307,
              "end": 309
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
                "start": 313,
                "end": 315
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 319,
                "end": 321
              },
              "start": 313,
              "end": 321
            },
            "start": 307,
            "end": 321
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 324,
              "end": 326
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
                "start": 330,
                "end": 332
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 336,
                "end": 338
              },
              "start": 330,
              "end": 338
            },
            "start": 324,
            "end": 338
          }
        ],
        "start": 298,
        "end": 340
      },
      "directive": null,
      "start": 298,
      "end": 341
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
            "start": 342,
            "end": 351
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 364,
            "end": 367
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 380,
            "end": 382
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
              "start": 351,
              "end": 353
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 356,
                "end": 358
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 362,
                "end": 364
              },
              "start": 356,
              "end": 364
            },
            "start": 351,
            "end": 364
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 367,
              "end": 369
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 372,
                "end": 374
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 378,
                "end": 380
              },
              "start": 372,
              "end": 380
            },
            "start": 367,
            "end": 380
          }
        ],
        "start": 342,
        "end": 382
      },
      "directive": null,
      "start": 342,
      "end": 383
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
            "start": 384,
            "end": 393
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 406,
            "end": 409
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 422,
            "end": 424
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 393,
                "end": 395
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 399,
                "end": 401
              },
              "start": 393,
              "end": 401
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 404,
              "end": 406
            },
            "start": 393,
            "end": 406
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 409,
                "end": 411
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 415,
                "end": 417
              },
              "start": 409,
              "end": 417
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 420,
              "end": 422
            },
            "start": 409,
            "end": 422
          }
        ],
        "start": 384,
        "end": 424
      },
      "directive": null,
      "start": 384,
      "end": 425
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
            "start": 426,
            "end": 435
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 453,
            "end": 456
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 474,
            "end": 476
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 435,
                "end": 437
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 440,
                  "end": 442
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 446,
                  "end": 448
                },
                "start": 440,
                "end": 448
              },
              "start": 435,
              "end": 448
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 451,
              "end": 453
            },
            "start": 435,
            "end": 453
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 456,
                "end": 458
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 463
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 469
                },
                "start": 461,
                "end": 469
              },
              "start": 456,
              "end": 469
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 472,
              "end": 474
            },
            "start": 456,
            "end": 474
          }
        ],
        "start": 426,
        "end": 476
      },
      "directive": null,
      "start": 426,
      "end": 477
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
            "start": 478,
            "end": 487
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 511,
            "end": 514
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 538,
            "end": 540
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
                "start": 495,
                "end": 497
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
                  "start": 501,
                  "end": 503
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 509
                },
                "start": 501,
                "end": 509
              },
              "start": 495,
              "end": 509
            },
            "prefix": true,
            "start": 487,
            "end": 510
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
                "start": 522,
                "end": 524
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
                  "start": 528,
                  "end": 530
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 534,
                  "end": 536
                },
                "start": 528,
                "end": 536
              },
              "start": 522,
              "end": 536
            },
            "prefix": true,
            "start": 514,
            "end": 537
          }
        ],
        "start": 478,
        "end": 540
      },
      "directive": null,
      "start": 478,
      "end": 541
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
            "start": 543,
            "end": 552
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 560,
            "end": 576
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 584,
            "end": 586
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
              "start": 552,
              "end": 554
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 558,
              "end": 560
            },
            "start": 552,
            "end": 560
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 576,
              "end": 578
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 582,
              "end": 584
            },
            "start": 576,
            "end": 584
          }
        ],
        "start": 543,
        "end": 586
      },
      "directive": null,
      "start": 543,
      "end": 587
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
            "start": 588,
            "end": 597
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 611,
            "end": 627
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 641,
            "end": 643
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
              "start": 597,
              "end": 599
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
                "start": 603,
                "end": 605
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 609,
                "end": 611
              },
              "start": 603,
              "end": 611
            },
            "start": 597,
            "end": 611
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 629
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
                "start": 633,
                "end": 635
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 639,
                "end": 641
              },
              "start": 633,
              "end": 641
            },
            "start": 627,
            "end": 641
          }
        ],
        "start": 588,
        "end": 643
      },
      "directive": null,
      "start": 588,
      "end": 644
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
            "start": 645,
            "end": 654
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 667,
            "end": 683
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 696,
            "end": 698
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
              "start": 654,
              "end": 656
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 661
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 665,
                "end": 667
              },
              "start": 659,
              "end": 667
            },
            "start": 654,
            "end": 667
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 683,
              "end": 685
            },
            "operator": "+",
            "right": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 688,
                "end": 690
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 694,
                "end": 696
              },
              "start": 688,
              "end": 696
            },
            "start": 683,
            "end": 696
          }
        ],
        "start": 645,
        "end": 698
      },
      "directive": null,
      "start": 645,
      "end": 699
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
            "start": 700,
            "end": 709
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 722,
            "end": 738
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 751,
            "end": 753
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 709,
                "end": 711
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 715,
                "end": 717
              },
              "start": 709,
              "end": 717
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 720,
              "end": 722
            },
            "start": 709,
            "end": 722
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 738,
                "end": 740
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 744,
                "end": 746
              },
              "start": 738,
              "end": 746
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 749,
              "end": 751
            },
            "start": 738,
            "end": 751
          }
        ],
        "start": 700,
        "end": 753
      },
      "directive": null,
      "start": 700,
      "end": 754
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
            "start": 755,
            "end": 764
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 782,
            "end": 798
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 816,
            "end": 818
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 764,
                "end": 766
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 769,
                  "end": 771
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 775,
                  "end": 777
                },
                "start": 769,
                "end": 777
              },
              "start": 764,
              "end": 777
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 780,
              "end": 782
            },
            "start": 764,
            "end": 782
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 798,
                "end": 800
              },
              "operator": "+",
              "right": {
                "type": "BinaryExpression",
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 803,
                  "end": 805
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 809,
                  "end": 811
                },
                "start": 803,
                "end": 811
              },
              "start": 798,
              "end": 811
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 814,
              "end": 816
            },
            "start": 798,
            "end": 816
          }
        ],
        "start": 755,
        "end": 818
      },
      "directive": null,
      "start": 755,
      "end": 819
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
            "start": 820,
            "end": 829
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 853,
            "end": 869
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 893,
            "end": 895
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
                "start": 837,
                "end": 839
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
                  "start": 843,
                  "end": 845
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 849,
                  "end": 851
                },
                "start": 843,
                "end": 851
              },
              "start": 837,
              "end": 851
            },
            "prefix": true,
            "start": 829,
            "end": 852
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
                "start": 877,
                "end": 879
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
                  "start": 883,
                  "end": 885
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 889,
                  "end": 891
                },
                "start": 883,
                "end": 891
              },
              "start": 877,
              "end": 891
            },
            "prefix": true,
            "start": 869,
            "end": 892
          }
        ],
        "start": 820,
        "end": 895
      },
      "directive": null,
      "start": 820,
      "end": 896
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 896
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "var",
    "start": 0,
    "end": 3,
    "range": [
      0,
      3
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 4,
    "end": 6,
    "range": [
      4,
      6
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7,
    "end": 8,
    "range": [
      7,
      8
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 9,
    "end": 11,
    "range": [
      9,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 11,
    "end": 12,
    "range": [
      11,
      12
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 13,
    "end": 16,
    "range": [
      13,
      16
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 17,
    "end": 19,
    "range": [
      17,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 22,
    "end": 24,
    "range": [
      22,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25,
    "range": [
      24,
      25
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 26,
    "end": 29,
    "range": [
      26,
      29
    ]
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 30,
    "end": 31,
    "range": [
      30,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 55,
    "end": 64,
    "range": [
      55,
      64
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 64,
    "end": 66,
    "range": [
      64,
      66
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 67,
    "end": 69,
    "range": [
      67,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 70,
    "end": 72,
    "range": [
      70,
      72
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 72,
    "end": 74,
    "range": [
      72,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 76,
    "end": 85,
    "range": [
      76,
      85
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 85,
    "end": 87,
    "range": [
      85,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 88,
    "end": 90,
    "range": [
      88,
      90
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 91,
    "end": 93,
    "range": [
      91,
      93
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 94,
    "end": 96,
    "range": [
      94,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 97,
    "end": 99,
    "range": [
      97,
      99
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 99,
    "end": 101,
    "range": [
      99,
      101
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 103,
    "end": 112,
    "range": [
      103,
      112
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 112,
    "end": 114,
    "range": [
      112,
      114
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 117,
    "end": 119,
    "range": [
      117,
      119
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 120,
    "end": 122,
    "range": [
      120,
      122
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 123,
    "end": 125,
    "range": [
      123,
      125
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 125,
    "end": 127,
    "range": [
      125,
      127
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 127,
    "end": 128,
    "range": [
      127,
      128
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 129,
    "end": 138,
    "range": [
      129,
      138
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 138,
    "end": 140,
    "range": [
      138,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 141,
    "end": 143,
    "range": [
      141,
      143
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 144,
    "end": 146,
    "range": [
      144,
      146
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 147,
    "end": 148,
    "range": [
      147,
      148
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 149,
    "end": 151,
    "range": [
      149,
      151
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 151,
    "end": 153,
    "range": [
      151,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 153,
    "end": 154,
    "range": [
      153,
      154
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 155,
    "end": 164,
    "range": [
      155,
      164
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 164,
    "end": 166,
    "range": [
      164,
      166
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 167,
    "end": 168,
    "range": [
      167,
      168
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 169,
    "end": 171,
    "range": [
      169,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 172,
    "end": 174,
    "range": [
      172,
      174
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 175,
    "end": 177,
    "range": [
      175,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 180,
    "end": 182,
    "range": [
      180,
      182
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 183,
    "end": 185,
    "range": [
      183,
      185
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186,
    "range": [
      185,
      186
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 187,
    "end": 196,
    "range": [
      187,
      196
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 196,
    "end": 202,
    "range": [
      196,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 203,
    "end": 204,
    "range": [
      203,
      204
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 204,
    "end": 206,
    "range": [
      204,
      206
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 207,
    "end": 209,
    "range": [
      207,
      209
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 210,
    "end": 212,
    "range": [
      210,
      212
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 213,
    "end": 215,
    "range": [
      213,
      215
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 216,
    "end": 218,
    "range": [
      216,
      218
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 218,
    "end": 219,
    "range": [
      218,
      219
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 220,
    "end": 222,
    "range": [
      220,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 222,
    "end": 223,
    "range": [
      222,
      223
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 224,
    "end": 233,
    "range": [
      224,
      233
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 233,
    "end": 234,
    "range": [
      233,
      234
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 235,
    "end": 236,
    "range": [
      235,
      236
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 237,
    "end": 243,
    "range": [
      237,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 244,
    "end": 245,
    "range": [
      244,
      245
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 245,
    "end": 247,
    "range": [
      245,
      247
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 248,
    "end": 250,
    "range": [
      248,
      250
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 251,
    "end": 253,
    "range": [
      251,
      253
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 254,
    "end": 256,
    "range": [
      254,
      256
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 257,
    "end": 259,
    "range": [
      257,
      259
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 259,
    "end": 260,
    "range": [
      259,
      260
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 261,
    "end": 263,
    "range": [
      261,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 266,
    "end": 275,
    "range": [
      266,
      275
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 275,
    "end": 277,
    "range": [
      275,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 278,
    "end": 280,
    "range": [
      278,
      280
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 281,
    "end": 283,
    "range": [
      281,
      283
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 283,
    "end": 286,
    "range": [
      283,
      286
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 286,
    "end": 288,
    "range": [
      286,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 289,
    "end": 291,
    "range": [
      289,
      291
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 292,
    "end": 294,
    "range": [
      292,
      294
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 294,
    "end": 296,
    "range": [
      294,
      296
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 296,
    "end": 297,
    "range": [
      296,
      297
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 298,
    "end": 307,
    "range": [
      298,
      307
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 307,
    "end": 309,
    "range": [
      307,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 310,
    "end": 312,
    "range": [
      310,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 313,
    "end": 315,
    "range": [
      313,
      315
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 316,
    "end": 318,
    "range": [
      316,
      318
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 319,
    "end": 321,
    "range": [
      319,
      321
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 321,
    "end": 324,
    "range": [
      321,
      324
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 324,
    "end": 326,
    "range": [
      324,
      326
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 327,
    "end": 329,
    "range": [
      327,
      329
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 330,
    "end": 332,
    "range": [
      330,
      332
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 333,
    "end": 335,
    "range": [
      333,
      335
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 336,
    "end": 338,
    "range": [
      336,
      338
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 338,
    "end": 340,
    "range": [
      338,
      340
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341,
    "range": [
      340,
      341
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 342,
    "end": 351,
    "range": [
      342,
      351
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 351,
    "end": 353,
    "range": [
      351,
      353
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 354,
    "end": 355,
    "range": [
      354,
      355
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 356,
    "end": 358,
    "range": [
      356,
      358
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 359,
    "end": 361,
    "range": [
      359,
      361
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 362,
    "end": 364,
    "range": [
      362,
      364
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 364,
    "end": 367,
    "range": [
      364,
      367
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 367,
    "end": 369,
    "range": [
      367,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 372,
    "end": 374,
    "range": [
      372,
      374
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 375,
    "end": 377,
    "range": [
      375,
      377
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 378,
    "end": 380,
    "range": [
      378,
      380
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 380,
    "end": 382,
    "range": [
      380,
      382
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 382,
    "end": 383,
    "range": [
      382,
      383
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 384,
    "end": 393,
    "range": [
      384,
      393
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 393,
    "end": 395,
    "range": [
      393,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 396,
    "end": 398,
    "range": [
      396,
      398
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 399,
    "end": 401,
    "range": [
      399,
      401
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 402,
    "end": 403,
    "range": [
      402,
      403
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 404,
    "end": 406,
    "range": [
      404,
      406
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 406,
    "end": 409,
    "range": [
      406,
      409
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 409,
    "end": 411,
    "range": [
      409,
      411
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 412,
    "end": 414,
    "range": [
      412,
      414
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 415,
    "end": 417,
    "range": [
      415,
      417
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 420,
    "end": 422,
    "range": [
      420,
      422
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 422,
    "end": 424,
    "range": [
      422,
      424
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 424,
    "end": 425,
    "range": [
      424,
      425
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 426,
    "end": 435,
    "range": [
      426,
      435
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 435,
    "end": 437,
    "range": [
      435,
      437
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 440,
    "end": 442,
    "range": [
      440,
      442
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 443,
    "end": 445,
    "range": [
      443,
      445
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 446,
    "end": 448,
    "range": [
      446,
      448
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 449,
    "end": 450,
    "range": [
      449,
      450
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 451,
    "end": 453,
    "range": [
      451,
      453
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 453,
    "end": 456,
    "range": [
      453,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 456,
    "end": 458,
    "range": [
      456,
      458
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 459,
    "end": 460,
    "range": [
      459,
      460
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 461,
    "end": 463,
    "range": [
      461,
      463
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 464,
    "end": 466,
    "range": [
      464,
      466
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 467,
    "end": 469,
    "range": [
      467,
      469
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 470,
    "end": 471,
    "range": [
      470,
      471
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 472,
    "end": 474,
    "range": [
      472,
      474
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 474,
    "end": 476,
    "range": [
      474,
      476
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 476,
    "end": 477,
    "range": [
      476,
      477
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 478,
    "end": 487,
    "range": [
      478,
      487
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 487,
    "end": 493,
    "range": [
      487,
      493
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495,
    "range": [
      494,
      495
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 495,
    "end": 497,
    "range": [
      495,
      497
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 498,
    "end": 500,
    "range": [
      498,
      500
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 501,
    "end": 503,
    "range": [
      501,
      503
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 504,
    "end": 506,
    "range": [
      504,
      506
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 507,
    "end": 509,
    "range": [
      507,
      509
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 509,
    "end": 510,
    "range": [
      509,
      510
    ]
  },
  {
    "type": "Template",
    "value": "}${",
    "start": 511,
    "end": 514,
    "range": [
      511,
      514
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 514,
    "end": 520,
    "range": [
      514,
      520
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 522,
    "end": 524,
    "range": [
      522,
      524
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 525,
    "end": 527,
    "range": [
      525,
      527
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 528,
    "end": 530,
    "range": [
      528,
      530
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 531,
    "end": 533,
    "range": [
      531,
      533
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 534,
    "end": 536,
    "range": [
      534,
      536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 536,
    "end": 537,
    "range": [
      536,
      537
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 538,
    "end": 540,
    "range": [
      538,
      540
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 540,
    "end": 541,
    "range": [
      540,
      541
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 543,
    "end": 552,
    "range": [
      543,
      552
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 552,
    "end": 554,
    "range": [
      552,
      554
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 555,
    "end": 557,
    "range": [
      555,
      557
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 558,
    "end": 560,
    "range": [
      558,
      560
    ]
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 560,
    "end": 576,
    "range": [
      560,
      576
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 576,
    "end": 578,
    "range": [
      576,
      578
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 579,
    "end": 581,
    "range": [
      579,
      581
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 582,
    "end": 584,
    "range": [
      582,
      584
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 584,
    "end": 586,
    "range": [
      584,
      586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 586,
    "end": 587,
    "range": [
      586,
      587
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 588,
    "end": 597,
    "range": [
      588,
      597
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 597,
    "end": 599,
    "range": [
      597,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 600,
    "end": 602,
    "range": [
      600,
      602
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 603,
    "end": 605,
    "range": [
      603,
      605
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 606,
    "end": 608,
    "range": [
      606,
      608
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 609,
    "end": 611,
    "range": [
      609,
      611
    ]
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 611,
    "end": 627,
    "range": [
      611,
      627
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 627,
    "end": 629,
    "range": [
      627,
      629
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 630,
    "end": 632,
    "range": [
      630,
      632
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 633,
    "end": 635,
    "range": [
      633,
      635
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 636,
    "end": 638,
    "range": [
      636,
      638
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 639,
    "end": 641,
    "range": [
      639,
      641
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 641,
    "end": 643,
    "range": [
      641,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 645,
    "end": 654,
    "range": [
      645,
      654
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 654,
    "end": 656,
    "range": [
      654,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 657,
    "end": 658,
    "range": [
      657,
      658
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 659,
    "end": 661,
    "range": [
      659,
      661
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 662,
    "end": 664,
    "range": [
      662,
      664
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 665,
    "end": 667,
    "range": [
      665,
      667
    ]
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 667,
    "end": 683,
    "range": [
      667,
      683
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 683,
    "end": 685,
    "range": [
      683,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 686,
    "end": 687,
    "range": [
      686,
      687
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 688,
    "end": 690,
    "range": [
      688,
      690
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 691,
    "end": 693,
    "range": [
      691,
      693
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 694,
    "end": 696,
    "range": [
      694,
      696
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 696,
    "end": 698,
    "range": [
      696,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 698,
    "end": 699,
    "range": [
      698,
      699
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 700,
    "end": 709,
    "range": [
      700,
      709
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 709,
    "end": 711,
    "range": [
      709,
      711
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 712,
    "end": 714,
    "range": [
      712,
      714
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 715,
    "end": 717,
    "range": [
      715,
      717
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 718,
    "end": 719,
    "range": [
      718,
      719
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 720,
    "end": 722,
    "range": [
      720,
      722
    ]
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 722,
    "end": 738,
    "range": [
      722,
      738
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 738,
    "end": 740,
    "range": [
      738,
      740
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 741,
    "end": 743,
    "range": [
      741,
      743
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 744,
    "end": 746,
    "range": [
      744,
      746
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 749,
    "end": 751,
    "range": [
      749,
      751
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 751,
    "end": 753,
    "range": [
      751,
      753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754,
    "range": [
      753,
      754
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 755,
    "end": 764,
    "range": [
      755,
      764
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 764,
    "end": 766,
    "range": [
      764,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 769,
    "end": 771,
    "range": [
      769,
      771
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 772,
    "end": 774,
    "range": [
      772,
      774
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 775,
    "end": 777,
    "range": [
      775,
      777
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 778,
    "end": 779,
    "range": [
      778,
      779
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 780,
    "end": 782,
    "range": [
      780,
      782
    ]
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 782,
    "end": 798,
    "range": [
      782,
      798
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 798,
    "end": 800,
    "range": [
      798,
      800
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 801,
    "end": 802,
    "range": [
      801,
      802
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 803,
    "end": 805,
    "range": [
      803,
      805
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 806,
    "end": 808,
    "range": [
      806,
      808
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 809,
    "end": 811,
    "range": [
      809,
      811
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 814,
    "end": 816,
    "range": [
      814,
      816
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 816,
    "end": 818,
    "range": [
      816,
      818
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 818,
    "end": 819,
    "range": [
      818,
      819
    ]
  },
  {
    "type": "Template",
    "value": "`hello ${",
    "start": 820,
    "end": 829,
    "range": [
      820,
      829
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 829,
    "end": 835,
    "range": [
      829,
      835
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837,
    "range": [
      836,
      837
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 837,
    "end": 839,
    "range": [
      837,
      839
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 840,
    "end": 842,
    "range": [
      840,
      842
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 843,
    "end": 845,
    "range": [
      843,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 846,
    "end": 848,
    "range": [
      846,
      848
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 849,
    "end": 851,
    "range": [
      849,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 851,
    "end": 852,
    "range": [
      851,
      852
    ]
  },
  {
    "type": "Template",
    "value": "} hello world ${",
    "start": 853,
    "end": 869,
    "range": [
      853,
      869
    ]
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 869,
    "end": 875,
    "range": [
      869,
      875
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 876,
    "end": 877,
    "range": [
      876,
      877
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 877,
    "end": 879,
    "range": [
      877,
      879
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 880,
    "end": 882,
    "range": [
      880,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 883,
    "end": 885,
    "range": [
      883,
      885
    ]
  },
  {
    "type": "Punctuator",
    "value": "**",
    "start": 886,
    "end": 888,
    "range": [
      886,
      888
    ]
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 889,
    "end": 891,
    "range": [
      889,
      891
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 893,
    "end": 895,
    "range": [
      893,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 895,
    "end": 896,
    "range": [
      895,
      896
    ]
  }
]
```
