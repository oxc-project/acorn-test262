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
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Base",
        "optional": false,
        "typeAnnotation": null,
        "start": 37,
        "end": 41
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 61
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 65,
                    "end": 69
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSArrayType",
                      "elementType": {
                        "type": "TSAnyKeyword",
                        "start": 71,
                        "end": 74
                      },
                      "start": 71,
                      "end": 76
                    },
                    "start": 69,
                    "end": 76
                  },
                  "value": null,
                  "start": 62,
                  "end": 76
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 79,
                  "end": 83
                },
                "start": 77,
                "end": 83
              },
              "body": null,
              "expression": false,
              "start": 61,
              "end": 84
            },
            "kind": "method",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": null,
            "start": 48,
            "end": 84
          }
        ],
        "start": 42,
        "end": 86
      },
      "abstract": false,
      "declare": true,
      "start": 23,
      "end": 86
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "method",
            "optional": false,
            "typeAnnotation": null,
            "start": 94,
            "end": 100
          },
          "init": {
            "type": "Literal",
            "value": "method",
            "raw": "\"method\"",
            "start": 103,
            "end": 111
          },
          "definite": false,
          "start": 94,
          "end": 111
        }
      ],
      "declare": false,
      "start": 88,
      "end": 112
    },
    {
      "type": "ExpressionStatement",
      "expression": {
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
              "start": 116,
              "end": 119
            },
            "start": 115,
            "end": 119
          }
        ],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "C",
          "optional": false,
          "typeAnnotation": null,
          "start": 126,
          "end": 127
        },
        "typeParameters": null,
        "superClass": {
          "type": "Identifier",
          "decorators": [],
          "name": "Base",
          "optional": false,
          "typeAnnotation": null,
          "start": 136,
          "end": 140
        },
        "superTypeArguments": null,
        "implements": [],
        "body": {
          "type": "ClassBody",
          "body": [
            {
              "type": "StaticBlock",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 164,
                        "end": 169
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 170,
                        "end": 176
                      },
                      "optional": false,
                      "computed": false,
                      "start": 164,
                      "end": 176
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 164,
                    "end": 178
                  },
                  "directive": null,
                  "start": 164,
                  "end": 179
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 188,
                        "end": 193
                      },
                      "property": {
                        "type": "Literal",
                        "value": "method",
                        "raw": "\"method\"",
                        "start": 194,
                        "end": 202
                      },
                      "optional": false,
                      "computed": true,
                      "start": 188,
                      "end": 203
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 188,
                    "end": 205
                  },
                  "directive": null,
                  "start": 188,
                  "end": 206
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 215,
                        "end": 220
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 227
                      },
                      "optional": false,
                      "computed": true,
                      "start": 215,
                      "end": 228
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 215,
                    "end": 230
                  },
                  "directive": null,
                  "start": 215,
                  "end": 231
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "tag": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 241,
                        "end": 246
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 247,
                        "end": 253
                      },
                      "optional": false,
                      "computed": false,
                      "start": 241,
                      "end": 253
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 253,
                          "end": 255
                        }
                      ],
                      "expressions": [],
                      "start": 253,
                      "end": 255
                    },
                    "start": 241,
                    "end": 255
                  },
                  "directive": null,
                  "start": 241,
                  "end": 256
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "tag": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 265,
                        "end": 270
                      },
                      "property": {
                        "type": "Literal",
                        "value": "method",
                        "raw": "\"method\"",
                        "start": 271,
                        "end": 279
                      },
                      "optional": false,
                      "computed": true,
                      "start": 265,
                      "end": 280
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 280,
                          "end": 282
                        }
                      ],
                      "expressions": [],
                      "start": 280,
                      "end": 282
                    },
                    "start": 265,
                    "end": 282
                  },
                  "directive": null,
                  "start": 265,
                  "end": 283
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "TaggedTemplateExpression",
                    "tag": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Super",
                        "start": 292,
                        "end": 297
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "method",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 298,
                        "end": 304
                      },
                      "optional": false,
                      "computed": true,
                      "start": 292,
                      "end": 305
                    },
                    "typeArguments": null,
                    "quasi": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 305,
                          "end": 307
                        }
                      ],
                      "expressions": [],
                      "start": 305,
                      "end": 307
                    },
                    "start": 292,
                    "end": 307
                  },
                  "directive": null,
                  "start": 292,
                  "end": 308
                }
              ],
              "start": 147,
              "end": 314
            }
          ],
          "start": 141,
          "end": 316
        },
        "abstract": false,
        "declare": false,
        "start": 115,
        "end": 316
      },
      "directive": null,
      "start": 114,
      "end": 318
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 318
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
    "value": "var",
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
    "type": "Identifier",
    "value": "declare",
    "start": 23,
    "end": 30,
    "range": [
      23,
      30
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 31,
    "end": 36,
    "range": [
      31,
      36
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 37,
    "end": 41,
    "range": [
      37,
      41
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 42,
    "end": 43,
    "range": [
      42,
      43
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 48,
    "end": 54,
    "range": [
      48,
      54
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 55,
    "end": 61,
    "range": [
      55,
      61
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 61,
    "end": 62,
    "range": [
      61,
      62
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 62,
    "end": 65,
    "range": [
      62,
      65
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 65,
    "end": 69,
    "range": [
      65,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70,
    "range": [
      69,
      70
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 71,
    "end": 74,
    "range": [
      71,
      74
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 75,
    "end": 76,
    "range": [
      75,
      76
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 76,
    "end": 77,
    "range": [
      76,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 79,
    "end": 83,
    "range": [
      79,
      83
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 83,
    "end": 84,
    "range": [
      83,
      84
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 85,
    "end": 86,
    "range": [
      85,
      86
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 88,
    "end": 93,
    "range": [
      88,
      93
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 94,
    "end": 100,
    "range": [
      94,
      100
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 101,
    "end": 102,
    "range": [
      101,
      102
    ]
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 103,
    "end": 111,
    "range": [
      103,
      111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 111,
    "end": 112,
    "range": [
      111,
      112
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 114,
    "end": 115,
    "range": [
      114,
      115
    ]
  },
  {
    "type": "Punctuator",
    "value": "@",
    "start": 115,
    "end": 116,
    "range": [
      115,
      116
    ]
  },
  {
    "type": "Identifier",
    "value": "dec",
    "start": 116,
    "end": 119,
    "range": [
      116,
      119
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 120,
    "end": 125,
    "range": [
      120,
      125
    ]
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 126,
    "end": 127,
    "range": [
      126,
      127
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 128,
    "end": 135,
    "range": [
      128,
      135
    ]
  },
  {
    "type": "Identifier",
    "value": "Base",
    "start": 136,
    "end": 140,
    "range": [
      136,
      140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 141,
    "end": 142,
    "range": [
      141,
      142
    ]
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 147,
    "end": 153,
    "range": [
      147,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 164,
    "end": 169,
    "range": [
      164,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 169,
    "end": 170,
    "range": [
      169,
      170
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 170,
    "end": 176,
    "range": [
      170,
      176
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 176,
    "end": 177,
    "range": [
      176,
      177
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 177,
    "end": 178,
    "range": [
      177,
      178
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 178,
    "end": 179,
    "range": [
      178,
      179
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 188,
    "end": 193,
    "range": [
      188,
      193
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 193,
    "end": 194,
    "range": [
      193,
      194
    ]
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 194,
    "end": 202,
    "range": [
      194,
      202
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 202,
    "end": 203,
    "range": [
      202,
      203
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
    "type": "Punctuator",
    "value": ")",
    "start": 204,
    "end": 205,
    "range": [
      204,
      205
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 205,
    "end": 206,
    "range": [
      205,
      206
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 215,
    "end": 220,
    "range": [
      215,
      220
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 220,
    "end": 221,
    "range": [
      220,
      221
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 221,
    "end": 227,
    "range": [
      221,
      227
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 229,
    "end": 230,
    "range": [
      229,
      230
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 241,
    "end": 246,
    "range": [
      241,
      246
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 246,
    "end": 247,
    "range": [
      246,
      247
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 247,
    "end": 253,
    "range": [
      247,
      253
    ]
  },
  {
    "type": "Template",
    "value": "``",
    "start": 253,
    "end": 255,
    "range": [
      253,
      255
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256,
    "range": [
      255,
      256
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 265,
    "end": 270,
    "range": [
      265,
      270
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 270,
    "end": 271,
    "range": [
      270,
      271
    ]
  },
  {
    "type": "String",
    "value": "\"method\"",
    "start": 271,
    "end": 279,
    "range": [
      271,
      279
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 279,
    "end": 280,
    "range": [
      279,
      280
    ]
  },
  {
    "type": "Template",
    "value": "``",
    "start": 280,
    "end": 282,
    "range": [
      280,
      282
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Keyword",
    "value": "super",
    "start": 292,
    "end": 297,
    "range": [
      292,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 297,
    "end": 298,
    "range": [
      297,
      298
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 298,
    "end": 304,
    "range": [
      298,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Template",
    "value": "``",
    "start": 305,
    "end": 307,
    "range": [
      305,
      307
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 307,
    "end": 308,
    "range": [
      307,
      308
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 313,
    "end": 314,
    "range": [
      313,
      314
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 315,
    "end": 316,
    "range": [
      315,
      316
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 316,
    "end": 317,
    "range": [
      316,
      317
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 317,
    "end": 318,
    "range": [
      317,
      318
    ]
  }
]
```
