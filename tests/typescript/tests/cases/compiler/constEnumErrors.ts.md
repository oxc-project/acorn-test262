__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 607,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 11,
        "end": 12,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 13,
        "end": 22,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 19,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSModuleDeclaration",
      "start": 24,
      "end": 51,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSModuleBlock",
        "start": 33,
        "end": 51,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 39,
            "end": 49,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 43,
                "end": 48,
                "id": {
                  "type": "Identifier",
                  "start": 43,
                  "end": 44,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "Literal",
                  "start": 47,
                  "end": 48,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "kind": "module",
      "declare": false,
      "global": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 53,
      "end": 246,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 66,
        "decorators": [],
        "name": "E1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 67,
        "end": 246,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 150,
            "end": 155,
            "id": {
              "type": "Identifier",
              "start": 150,
              "end": 151,
              "decorators": [],
              "name": "X",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Identifier",
              "start": 154,
              "end": 155,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 218,
            "end": 226,
            "id": {
              "type": "Identifier",
              "start": 218,
              "end": 219,
              "decorators": [],
              "name": "Y",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 222,
              "end": 226,
              "object": {
                "type": "Identifier",
                "start": 222,
                "end": 224,
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 225,
                "end": 226,
                "decorators": [],
                "name": "Z",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 232,
            "end": 244,
            "id": {
              "type": "Identifier",
              "start": 232,
              "end": 234,
              "decorators": [],
              "name": "Y1",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "MemberExpression",
              "start": 237,
              "end": 244,
              "object": {
                "type": "Identifier",
                "start": 237,
                "end": 239,
                "decorators": [],
                "name": "E1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 240,
                "end": 243,
                "value": "Z",
                "raw": "\"Z\""
              },
              "optional": false,
              "computed": true
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 248,
      "end": 271,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 261,
        "decorators": [],
        "name": "E2",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 262,
        "end": 271,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 268,
            "end": 269,
            "id": {
              "type": "Identifier",
              "start": 268,
              "end": 269,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 273,
      "end": 287,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 277,
          "end": 287,
          "id": {
            "type": "Identifier",
            "start": 277,
            "end": 279,
            "decorators": [],
            "name": "y0",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 282,
            "end": 287,
            "object": {
              "type": "Identifier",
              "start": 282,
              "end": 284,
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 285,
              "end": 286,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 288,
      "end": 303,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 292,
          "end": 302,
          "id": {
            "type": "Identifier",
            "start": 292,
            "end": 296,
            "decorators": [],
            "name": "name",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 299,
            "end": 302,
            "value": "A",
            "raw": "\"A\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 304,
      "end": 322,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 308,
          "end": 321,
          "id": {
            "type": "Identifier",
            "start": 308,
            "end": 310,
            "decorators": [],
            "name": "y1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 313,
            "end": 321,
            "object": {
              "type": "Identifier",
              "start": 313,
              "end": 315,
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 316,
              "end": 320,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 323,
      "end": 346,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 327,
          "end": 345,
          "id": {
            "type": "Identifier",
            "start": 327,
            "end": 329,
            "decorators": [],
            "name": "y2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 332,
            "end": 345,
            "object": {
              "type": "Identifier",
              "start": 332,
              "end": 334,
              "decorators": [],
              "name": "E2",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "TemplateLiteral",
              "start": 335,
              "end": 344,
              "quasis": [
                {
                  "type": "TemplateElement",
                  "start": 335,
                  "end": 338,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": false
                },
                {
                  "type": "TemplateElement",
                  "start": 342,
                  "end": 344,
                  "value": {
                    "cooked": "",
                    "raw": ""
                  },
                  "tail": true
                }
              ],
              "expressions": [
                {
                  "type": "Identifier",
                  "start": 338,
                  "end": 342,
                  "decorators": [],
                  "name": "name",
                  "optional": false,
                  "typeAnnotation": null
                }
              ]
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 348,
      "end": 359,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 352,
          "end": 358,
          "id": {
            "type": "Identifier",
            "start": 352,
            "end": 353,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 356,
            "end": 358,
            "decorators": [],
            "name": "E2",
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
      "start": 360,
      "end": 373,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 364,
          "end": 372,
          "id": {
            "type": "Identifier",
            "start": 364,
            "end": 365,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrayExpression",
            "start": 368,
            "end": 372,
            "elements": [
              {
                "type": "Identifier",
                "start": 369,
                "end": 371,
                "decorators": [],
                "name": "E2",
                "optional": false,
                "typeAnnotation": null
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 375,
      "end": 405,
      "id": {
        "type": "Identifier",
        "start": 384,
        "end": 387,
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 388,
          "end": 394,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 389,
            "end": 394,
            "typeAnnotation": {
              "type": "TSAnyKeyword",
              "start": 391,
              "end": 394
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 395,
        "end": 401,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 397,
          "end": 401
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 402,
        "end": 405,
        "body": []
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 407,
      "end": 415,
      "expression": {
        "type": "CallExpression",
        "start": 407,
        "end": 414,
        "callee": {
          "type": "Identifier",
          "start": 407,
          "end": 410,
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Identifier",
            "start": 411,
            "end": 413,
            "decorators": [],
            "name": "E2",
            "optional": false,
            "typeAnnotation": null
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 417,
      "end": 607,
      "id": {
        "type": "Identifier",
        "start": 428,
        "end": 441,
        "decorators": [],
        "name": "NaNOrInfinity",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 442,
        "end": 607,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 448,
            "end": 468,
            "id": {
              "type": "Identifier",
              "start": 448,
              "end": 449,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "Literal",
              "start": 452,
              "end": 468,
              "value": 9007199254740992,
              "raw": "9007199254740992"
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 474,
            "end": 483,
            "id": {
              "type": "Identifier",
              "start": 474,
              "end": 475,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 478,
              "end": 483,
              "left": {
                "type": "Identifier",
                "start": 478,
                "end": 479,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "start": 482,
                "end": 483,
                "decorators": [],
                "name": "A",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 489,
            "end": 498,
            "id": {
              "type": "Identifier",
              "start": 489,
              "end": 490,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 493,
              "end": 498,
              "left": {
                "type": "Identifier",
                "start": 493,
                "end": 494,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "start": 497,
                "end": 498,
                "decorators": [],
                "name": "B",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 504,
            "end": 513,
            "id": {
              "type": "Identifier",
              "start": 504,
              "end": 505,
              "decorators": [],
              "name": "D",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 508,
              "end": 513,
              "left": {
                "type": "Identifier",
                "start": 508,
                "end": 509,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "start": 512,
                "end": 513,
                "decorators": [],
                "name": "C",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 519,
            "end": 528,
            "id": {
              "type": "Identifier",
              "start": 519,
              "end": 520,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 523,
              "end": 528,
              "left": {
                "type": "Identifier",
                "start": 523,
                "end": 524,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "start": 527,
                "end": 528,
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 534,
            "end": 543,
            "id": {
              "type": "Identifier",
              "start": 534,
              "end": 535,
              "decorators": [],
              "name": "F",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 538,
              "end": 543,
              "left": {
                "type": "Identifier",
                "start": 538,
                "end": 539,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "*",
              "right": {
                "type": "Identifier",
                "start": 542,
                "end": 543,
                "decorators": [],
                "name": "E",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 561,
            "end": 570,
            "id": {
              "type": "Identifier",
              "start": 561,
              "end": 562,
              "decorators": [],
              "name": "G",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 565,
              "end": 570,
              "left": {
                "type": "Literal",
                "start": 565,
                "end": 566,
                "value": 1,
                "raw": "1"
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "start": 569,
                "end": 570,
                "value": 0,
                "raw": "0"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 588,
            "end": 597,
            "id": {
              "type": "Identifier",
              "start": 588,
              "end": 589,
              "decorators": [],
              "name": "H",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 592,
              "end": 597,
              "left": {
                "type": "Literal",
                "start": 592,
                "end": 593,
                "value": 0,
                "raw": "0"
              },
              "operator": "/",
              "right": {
                "type": "Literal",
                "start": 596,
                "end": 597,
                "value": 0,
                "raw": "0"
              }
            },
            "computed": false
          }
        ]
      },
      "const": true,
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
