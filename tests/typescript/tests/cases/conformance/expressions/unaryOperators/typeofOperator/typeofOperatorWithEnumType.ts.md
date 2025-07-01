__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null,
        "start": 39,
        "end": 43
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 44,
        "end": 47
      },
      "const": false,
      "declare": false,
      "start": 34,
      "end": 47
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null,
        "start": 54,
        "end": 59
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 62,
              "end": 63
            },
            "initializer": null,
            "computed": false,
            "start": 62,
            "end": 63
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 65,
              "end": 66
            },
            "initializer": null,
            "computed": false,
            "start": 65,
            "end": 66
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 68,
              "end": 70
            },
            "initializer": null,
            "computed": false,
            "start": 68,
            "end": 70
          }
        ],
        "start": 60,
        "end": 72
      },
      "const": false,
      "declare": false,
      "start": 49,
      "end": 72
    },
    {
      "type": "EmptyStatement",
      "start": 72,
      "end": 73
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
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null,
            "start": 96,
            "end": 111
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 121,
              "end": 125
            },
            "prefix": true,
            "start": 114,
            "end": 125
          },
          "definite": false,
          "start": 96,
          "end": 125
        }
      ],
      "declare": false,
      "start": 92,
      "end": 126
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
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null,
            "start": 131,
            "end": 146
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null,
              "start": 156,
              "end": 161
            },
            "prefix": true,
            "start": 149,
            "end": 161
          },
          "definite": false,
          "start": 131,
          "end": 161
        }
      ],
      "declare": false,
      "start": 127,
      "end": 162
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
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null,
            "start": 193,
            "end": 208
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null,
                "start": 218,
                "end": 223
              },
              "property": {
                "type": "Literal",
                "value": "A",
                "raw": "\"A\"",
                "start": 224,
                "end": 227
              },
              "optional": false,
              "computed": true,
              "start": 218,
              "end": 228
            },
            "prefix": true,
            "start": 211,
            "end": 228
          },
          "definite": false,
          "start": 193,
          "end": 228
        }
      ],
      "declare": false,
      "start": 189,
      "end": 229
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
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null,
            "start": 234,
            "end": 249
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 260,
                  "end": 264
                },
                "property": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 265,
                  "end": 266
                },
                "optional": false,
                "computed": true,
                "start": 260,
                "end": 267
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 270,
                  "end": 275
                },
                "property": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "\"B\"",
                  "start": 276,
                  "end": 279
                },
                "optional": false,
                "computed": true,
                "start": 270,
                "end": 280
              },
              "start": 260,
              "end": 280
            },
            "prefix": true,
            "start": 252,
            "end": 281
          },
          "definite": false,
          "start": 234,
          "end": 281
        }
      ],
      "declare": false,
      "start": 230,
      "end": 282
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
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null,
            "start": 318,
            "end": 333
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null,
                "start": 350,
                "end": 354
              },
              "prefix": true,
              "start": 343,
              "end": 354
            },
            "prefix": true,
            "start": 336,
            "end": 354
          },
          "definite": false,
          "start": 318,
          "end": 354
        }
      ],
      "declare": false,
      "start": 314,
      "end": 355
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
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null,
            "start": 360,
            "end": 375
          },
          "init": {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "operator": "typeof",
              "argument": {
                "type": "UnaryExpression",
                "operator": "typeof",
                "argument": {
                  "type": "BinaryExpression",
                  "left": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 400,
                      "end": 404
                    },
                    "property": {
                      "type": "Literal",
                      "value": 0,
                      "raw": "0",
                      "start": 405,
                      "end": 406
                    },
                    "optional": false,
                    "computed": true,
                    "start": 400,
                    "end": 407
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 410,
                      "end": 415
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 416,
                      "end": 417
                    },
                    "optional": false,
                    "computed": false,
                    "start": 410,
                    "end": 417
                  },
                  "start": 400,
                  "end": 417
                },
                "prefix": true,
                "start": 392,
                "end": 418
              },
              "prefix": true,
              "start": 385,
              "end": 418
            },
            "prefix": true,
            "start": 378,
            "end": 418
          },
          "definite": false,
          "start": 360,
          "end": 418
        }
      ],
      "declare": false,
      "start": 356,
      "end": 419
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null,
          "start": 457,
          "end": 461
        },
        "prefix": true,
        "start": 450,
        "end": 461
      },
      "directive": null,
      "start": 450,
      "end": 462
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null,
          "start": 470,
          "end": 475
        },
        "prefix": true,
        "start": 463,
        "end": 475
      },
      "directive": null,
      "start": 463,
      "end": 476
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 484,
            "end": 489
          },
          "property": {
            "type": "Literal",
            "value": "B",
            "raw": "\"B\"",
            "start": 490,
            "end": 493
          },
          "optional": false,
          "computed": true,
          "start": 484,
          "end": 494
        },
        "prefix": true,
        "start": 477,
        "end": 494
      },
      "directive": null,
      "start": 477,
      "end": 495
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "SequenceExpression",
        "expressions": [
          {
            "type": "UnaryExpression",
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null,
              "start": 503,
              "end": 507
            },
            "prefix": true,
            "start": 496,
            "end": 507
          },
          {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 509,
            "end": 514
          }
        ],
        "start": 496,
        "end": 514
      },
      "directive": null,
      "start": 496,
      "end": 515
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 550,
        "end": 551
      },
      "body": {
        "type": "TSEnumBody",
        "members": [],
        "start": 552,
        "end": 555
      },
      "const": false,
      "declare": false,
      "start": 545,
      "end": 555
    },
    {
      "type": "EmptyStatement",
      "start": 555,
      "end": 556
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 557,
        "end": 558
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM",
            "optional": false,
            "typeAnnotation": null,
            "start": 567,
            "end": 571
          },
          "prefix": true,
          "start": 560,
          "end": 571
        },
        "directive": null,
        "start": 560,
        "end": 572
      },
      "start": 557,
      "end": 572
    },
    {
      "type": "LabeledStatement",
      "label": {
        "type": "Identifier",
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null,
        "start": 573,
        "end": 574
      },
      "body": {
        "type": "ExpressionStatement",
        "expression": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 588
          },
          "prefix": true,
          "start": 576,
          "end": 588
        },
        "directive": null,
        "start": 576,
        "end": 589
      },
      "start": 573,
      "end": 589
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 34,
  "end": 589
}
```
