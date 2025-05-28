__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 34,
  "end": 589,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 34,
      "end": 47,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "ENUM",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 44,
        "end": 47,
        "members": []
      },
      "const": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 47,
      "end": 48
    },
    {
      "type": "TSEnumDeclaration",
      "start": 49,
      "end": 72,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 59,
        "decorators": [],
        "name": "ENUM1",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 60,
        "end": 72,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 62,
            "end": 63,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 65,
            "end": 66,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 68,
            "end": 70,
            "id": {
              "type": "Literal",
              "start": 68,
              "end": 70,
              "value": "",
              "raw": "\"\""
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 72,
      "end": 73
    },
    {
      "type": "VariableDeclaration",
      "start": 92,
      "end": 126,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 125,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 111,
            "decorators": [],
            "name": "ResultIsString1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 114,
            "end": 125,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 162,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 146,
            "decorators": [],
            "name": "ResultIsString2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 149,
            "end": 161,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 156,
              "end": 161,
              "decorators": [],
              "name": "ENUM1",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 229,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 228,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 208,
            "decorators": [],
            "name": "ResultIsString3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 211,
            "end": 228,
            "operator": "typeof",
            "argument": {
              "type": "MemberExpression",
              "start": 218,
              "end": 228,
              "object": {
                "type": "Identifier",
                "start": 218,
                "end": 223,
                "decorators": [],
                "name": "ENUM1",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 224,
                "end": 227,
                "value": "A",
                "raw": "\"A\""
              },
              "optional": false,
              "computed": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 282,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 281,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 249,
            "decorators": [],
            "name": "ResultIsString4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 252,
            "end": 281,
            "operator": "typeof",
            "argument": {
              "type": "BinaryExpression",
              "start": 260,
              "end": 280,
              "left": {
                "type": "MemberExpression",
                "start": 260,
                "end": 267,
                "object": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 264,
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 265,
                  "end": 266,
                  "value": 0,
                  "raw": "0"
                },
                "optional": false,
                "computed": true
              },
              "operator": "+",
              "right": {
                "type": "MemberExpression",
                "start": 270,
                "end": 280,
                "object": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 275,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Literal",
                  "start": 276,
                  "end": 279,
                  "value": "B",
                  "raw": "\"B\""
                },
                "optional": false,
                "computed": true
              }
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 355,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 354,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 333,
            "decorators": [],
            "name": "ResultIsString5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 336,
            "end": 354,
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "start": 343,
              "end": 354,
              "operator": "typeof",
              "argument": {
                "type": "Identifier",
                "start": 350,
                "end": 354,
                "decorators": [],
                "name": "ENUM",
                "optional": false,
                "typeAnnotation": null
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 356,
      "end": 419,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 418,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 375,
            "decorators": [],
            "name": "ResultIsString6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "UnaryExpression",
            "start": 378,
            "end": 418,
            "operator": "typeof",
            "argument": {
              "type": "UnaryExpression",
              "start": 385,
              "end": 418,
              "operator": "typeof",
              "argument": {
                "type": "UnaryExpression",
                "start": 392,
                "end": 418,
                "operator": "typeof",
                "argument": {
                  "type": "BinaryExpression",
                  "start": 400,
                  "end": 417,
                  "left": {
                    "type": "MemberExpression",
                    "start": 400,
                    "end": 407,
                    "object": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 404,
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Literal",
                      "start": 405,
                      "end": 406,
                      "value": 0,
                      "raw": "0"
                    },
                    "optional": false,
                    "computed": true
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 410,
                    "end": 417,
                    "object": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 415,
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "B",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                },
                "prefix": true
              },
              "prefix": true
            },
            "prefix": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 462,
      "expression": {
        "type": "UnaryExpression",
        "start": 450,
        "end": 461,
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "start": 457,
          "end": 461,
          "decorators": [],
          "name": "ENUM",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 463,
      "end": 476,
      "expression": {
        "type": "UnaryExpression",
        "start": 463,
        "end": 475,
        "operator": "typeof",
        "argument": {
          "type": "Identifier",
          "start": 470,
          "end": 475,
          "decorators": [],
          "name": "ENUM1",
          "optional": false,
          "typeAnnotation": null
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 477,
      "end": 495,
      "expression": {
        "type": "UnaryExpression",
        "start": 477,
        "end": 494,
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "start": 484,
          "end": 494,
          "object": {
            "type": "Identifier",
            "start": 484,
            "end": 489,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Literal",
            "start": 490,
            "end": 493,
            "value": "B",
            "raw": "\"B\""
          },
          "optional": false,
          "computed": true
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 496,
      "end": 515,
      "expression": {
        "type": "SequenceExpression",
        "start": 496,
        "end": 514,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 496,
            "end": 507,
            "operator": "typeof",
            "argument": {
              "type": "Identifier",
              "start": 503,
              "end": 507,
              "decorators": [],
              "name": "ENUM",
              "optional": false,
              "typeAnnotation": null
            },
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 509,
            "end": 514,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          }
        ]
      },
      "directive": null
    },
    {
      "type": "TSEnumDeclaration",
      "start": 545,
      "end": 555,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 551,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 552,
        "end": 555,
        "members": []
      },
      "const": false,
      "declare": false
    },
    {
      "type": "EmptyStatement",
      "start": 555,
      "end": 556
    },
    {
      "type": "LabeledStatement",
      "start": 557,
      "end": 572,
      "label": {
        "type": "Identifier",
        "start": 557,
        "end": 558,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 560,
        "end": 572,
        "expression": {
          "type": "UnaryExpression",
          "start": 560,
          "end": 571,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 567,
            "end": 571,
            "decorators": [],
            "name": "ENUM",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "directive": null
      }
    },
    {
      "type": "LabeledStatement",
      "start": 573,
      "end": 589,
      "label": {
        "type": "Identifier",
        "start": 573,
        "end": 574,
        "decorators": [],
        "name": "z",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "ExpressionStatement",
        "start": 576,
        "end": 589,
        "expression": {
          "type": "UnaryExpression",
          "start": 576,
          "end": 588,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 583,
            "end": 588,
            "decorators": [],
            "name": "ENUM1",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "directive": null
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
