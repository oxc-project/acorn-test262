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
            "start": 74,
            "end": 77
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 85,
            "end": 87
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
              "start": 77,
              "end": 79
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 85
            },
            "start": 77,
            "end": 85
          }
        ],
        "start": 74,
        "end": 87
      },
      "directive": null,
      "start": 74,
      "end": 88
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
            "start": 89,
            "end": 92
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 106,
            "end": 108
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
              "start": 92,
              "end": 94
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
                "start": 98,
                "end": 100
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 104,
                "end": 106
              },
              "start": 98,
              "end": 106
            },
            "start": 92,
            "end": 106
          }
        ],
        "start": 89,
        "end": 108
      },
      "directive": null,
      "start": 89,
      "end": 109
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
            "start": 110,
            "end": 113
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 126,
            "end": 128
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
              "start": 113,
              "end": 115
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
                "start": 118,
                "end": 120
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 124,
                "end": 126
              },
              "start": 118,
              "end": 126
            },
            "start": 113,
            "end": 126
          }
        ],
        "start": 110,
        "end": 128
      },
      "directive": null,
      "start": 110,
      "end": 129
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
            "start": 130,
            "end": 133
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 146,
            "end": 148
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
                "start": 133,
                "end": 135
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 139,
                "end": 141
              },
              "start": 133,
              "end": 141
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 146
            },
            "start": 133,
            "end": 146
          }
        ],
        "start": 130,
        "end": 148
      },
      "directive": null,
      "start": 130,
      "end": 149
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
            "start": 150,
            "end": 153
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 172,
            "end": 174
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
                "start": 153,
                "end": 155
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
                  "start": 158,
                  "end": 160
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 166
                },
                "start": 158,
                "end": 166
              },
              "start": 153,
              "end": 166
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 169,
              "end": 171
            },
            "start": 153,
            "end": 171
          }
        ],
        "start": 150,
        "end": 174
      },
      "directive": null,
      "start": 150,
      "end": 175
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
            "start": 176,
            "end": 179
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 203,
            "end": 205
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
                "start": 187,
                "end": 189
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
                  "start": 193,
                  "end": 195
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 199,
                  "end": 201
                },
                "start": 193,
                "end": 201
              },
              "start": 187,
              "end": 201
            },
            "prefix": true,
            "start": 179,
            "end": 202
          }
        ],
        "start": 176,
        "end": 205
      },
      "directive": null,
      "start": 176,
      "end": 206
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
            "start": 207,
            "end": 210
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 238,
            "end": 240
          }
        ],
        "expressions": [
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Literal",
              "value": 1,
              "raw": "1",
              "start": 210,
              "end": 211
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
                  "start": 222,
                  "end": 224
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
                    "start": 228,
                    "end": 230
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 234,
                    "end": 236
                  },
                  "start": 228,
                  "end": 236
                },
                "start": 222,
                "end": 236
              },
              "prefix": true,
              "start": 214,
              "end": 237
            },
            "start": 210,
            "end": 237
          }
        ],
        "start": 207,
        "end": 240
      },
      "directive": null,
      "start": 207,
      "end": 241
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
            "start": 243,
            "end": 246
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 254,
            "end": 257
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 265,
            "end": 267
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
              "start": 246,
              "end": 248
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 252,
              "end": 254
            },
            "start": 246,
            "end": 254
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 257,
              "end": 259
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 263,
              "end": 265
            },
            "start": 257,
            "end": 265
          }
        ],
        "start": 243,
        "end": 267
      },
      "directive": null,
      "start": 243,
      "end": 268
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
            "start": 269,
            "end": 272
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 286,
            "end": 289
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 303,
            "end": 305
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
              "start": 272,
              "end": 274
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
                "start": 278,
                "end": 280
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 284,
                "end": 286
              },
              "start": 278,
              "end": 286
            },
            "start": 272,
            "end": 286
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 291
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
                "start": 295,
                "end": 297
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 301,
                "end": 303
              },
              "start": 295,
              "end": 303
            },
            "start": 289,
            "end": 303
          }
        ],
        "start": 269,
        "end": 305
      },
      "directive": null,
      "start": 269,
      "end": 306
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
            "start": 307,
            "end": 310
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 323,
            "end": 326
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 339,
            "end": 341
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
              "start": 310,
              "end": 312
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
                "start": 315,
                "end": 317
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 321,
                "end": 323
              },
              "start": 315,
              "end": 323
            },
            "start": 310,
            "end": 323
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 326,
              "end": 328
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
                "start": 331,
                "end": 333
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 337,
                "end": 339
              },
              "start": 331,
              "end": 339
            },
            "start": 326,
            "end": 339
          }
        ],
        "start": 307,
        "end": 341
      },
      "directive": null,
      "start": 307,
      "end": 342
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
            "start": 343,
            "end": 346
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 359,
            "end": 362
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 375,
            "end": 377
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
                "start": 346,
                "end": 348
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 352,
                "end": 354
              },
              "start": 346,
              "end": 354
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 357,
              "end": 359
            },
            "start": 346,
            "end": 359
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
                "start": 362,
                "end": 364
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 368,
                "end": 370
              },
              "start": 362,
              "end": 370
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 373,
              "end": 375
            },
            "start": 362,
            "end": 375
          }
        ],
        "start": 343,
        "end": 377
      },
      "directive": null,
      "start": 343,
      "end": 378
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
            "start": 379,
            "end": 382
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 400,
            "end": 403
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 421,
            "end": 423
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
                "start": 382,
                "end": 384
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
                  "start": 387,
                  "end": 389
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 393,
                  "end": 395
                },
                "start": 387,
                "end": 395
              },
              "start": 382,
              "end": 395
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 400
            },
            "start": 382,
            "end": 400
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
                "start": 403,
                "end": 405
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
                  "start": 408,
                  "end": 410
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 414,
                  "end": 416
                },
                "start": 408,
                "end": 416
              },
              "start": 403,
              "end": 416
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 419,
              "end": 421
            },
            "start": 403,
            "end": 421
          }
        ],
        "start": 379,
        "end": 423
      },
      "directive": null,
      "start": 379,
      "end": 424
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
            "start": 425,
            "end": 428
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": false,
            "start": 451,
            "end": 454
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 477,
            "end": 479
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
                "start": 436,
                "end": 438
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
                  "start": 442,
                  "end": 444
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 448,
                  "end": 450
                },
                "start": 442,
                "end": 450
              },
              "start": 436,
              "end": 450
            },
            "prefix": true,
            "start": 428,
            "end": 451
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
                "start": 462,
                "end": 464
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
                  "start": 468,
                  "end": 470
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 474,
                  "end": 476
                },
                "start": 468,
                "end": 476
              },
              "start": 462,
              "end": 476
            },
            "prefix": true,
            "start": 454,
            "end": 477
          }
        ],
        "start": 425,
        "end": 479
      },
      "directive": null,
      "start": 425,
      "end": 480
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
            "start": 482,
            "end": 485
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 493,
            "end": 509
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 517,
            "end": 519
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
              "start": 485,
              "end": 487
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 491,
              "end": 493
            },
            "start": 485,
            "end": 493
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 509,
              "end": 511
            },
            "operator": "**",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 517
            },
            "start": 509,
            "end": 517
          }
        ],
        "start": 482,
        "end": 519
      },
      "directive": null,
      "start": 482,
      "end": 520
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
            "start": 521,
            "end": 524
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 538,
            "end": 554
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 568,
            "end": 570
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
              "start": 524,
              "end": 526
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
                "start": 530,
                "end": 532
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 536,
                "end": 538
              },
              "start": 530,
              "end": 538
            },
            "start": 524,
            "end": 538
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 554,
              "end": 556
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
                "start": 560,
                "end": 562
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 566,
                "end": 568
              },
              "start": 560,
              "end": 568
            },
            "start": 554,
            "end": 568
          }
        ],
        "start": 521,
        "end": 570
      },
      "directive": null,
      "start": 521,
      "end": 571
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
            "start": 572,
            "end": 575
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 588,
            "end": 604
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 617,
            "end": 619
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
              "start": 575,
              "end": 577
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
                "start": 580,
                "end": 582
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 586,
                "end": 588
              },
              "start": 580,
              "end": 588
            },
            "start": 575,
            "end": 588
          },
          {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 604,
              "end": 606
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
                "start": 609,
                "end": 611
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t1",
                "optional": false,
                "typeAnnotation": null,
                "start": 615,
                "end": 617
              },
              "start": 609,
              "end": 617
            },
            "start": 604,
            "end": 617
          }
        ],
        "start": 572,
        "end": 619
      },
      "directive": null,
      "start": 572,
      "end": 620
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
            "start": 621,
            "end": 624
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 637,
            "end": 653
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 666,
            "end": 668
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
                "start": 624,
                "end": 626
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 630,
                "end": 632
              },
              "start": 624,
              "end": 632
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 635,
              "end": 637
            },
            "start": 624,
            "end": 637
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
                "start": 653,
                "end": 655
              },
              "operator": "**",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "t2",
                "optional": false,
                "typeAnnotation": null,
                "start": 659,
                "end": 661
              },
              "start": 653,
              "end": 661
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 664,
              "end": 666
            },
            "start": 653,
            "end": 666
          }
        ],
        "start": 621,
        "end": 668
      },
      "directive": null,
      "start": 621,
      "end": 669
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
            "start": 670,
            "end": 673
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 691,
            "end": 707
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 725,
            "end": 727
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
                "start": 673,
                "end": 675
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
                  "start": 678,
                  "end": 680
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 684,
                  "end": 686
                },
                "start": 678,
                "end": 686
              },
              "start": 673,
              "end": 686
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 689,
              "end": 691
            },
            "start": 673,
            "end": 691
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
                "start": 707,
                "end": 709
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
                  "start": 712,
                  "end": 714
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 718,
                  "end": 720
                },
                "start": 712,
                "end": 720
              },
              "start": 707,
              "end": 720
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 723,
              "end": 725
            },
            "start": 707,
            "end": 725
          }
        ],
        "start": 670,
        "end": 727
      },
      "directive": null,
      "start": 670,
      "end": 728
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
            "start": 729,
            "end": 732
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": " hello world ",
              "cooked": " hello world "
            },
            "tail": false,
            "start": 756,
            "end": 772
          },
          {
            "type": "TemplateElement",
            "value": {
              "raw": "",
              "cooked": ""
            },
            "tail": true,
            "start": 796,
            "end": 798
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
                "start": 740,
                "end": 742
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
                  "start": 746,
                  "end": 748
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 752,
                  "end": 754
                },
                "start": 746,
                "end": 754
              },
              "start": 740,
              "end": 754
            },
            "prefix": true,
            "start": 732,
            "end": 755
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
                "start": 780,
                "end": 782
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
                  "start": 786,
                  "end": 788
                },
                "operator": "**",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 792,
                  "end": 794
                },
                "start": 786,
                "end": 794
              },
              "start": 780,
              "end": 794
            },
            "prefix": true,
            "start": 772,
            "end": 795
          }
        ],
        "start": 729,
        "end": 798
      },
      "directive": null,
      "start": 729,
      "end": 799
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 799
}
```
