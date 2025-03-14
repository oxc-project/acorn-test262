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
      "body": {
        "type": "TSEnumBody",
        "start": 44,
        "end": 47,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 39,
        "end": 43,
        "decorators": [],
        "name": "ENUM",
        "optional": false
      }
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
      "body": {
        "type": "TSEnumBody",
        "start": 60,
        "end": 72,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 62,
            "end": 63,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 62,
              "end": 63,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 65,
            "end": 66,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 65,
              "end": 66,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 68,
            "end": 70,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 68,
              "end": 70,
              "raw": "\"\"",
              "value": ""
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 59,
        "decorators": [],
        "name": "ENUM1",
        "optional": false
      }
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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 96,
          "end": 125,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 111,
            "decorators": [],
            "name": "ResultIsString1",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 114,
            "end": 125,
            "argument": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "decorators": [],
              "name": "ENUM",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 146,
            "decorators": [],
            "name": "ResultIsString2",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 149,
            "end": 161,
            "argument": {
              "type": "Identifier",
              "start": 156,
              "end": 161,
              "decorators": [],
              "name": "ENUM1",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 189,
      "end": 229,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 193,
          "end": 228,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 208,
            "decorators": [],
            "name": "ResultIsString3",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 211,
            "end": 228,
            "argument": {
              "type": "MemberExpression",
              "start": 218,
              "end": 228,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 218,
                "end": 223,
                "decorators": [],
                "name": "ENUM1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 224,
                "end": 227,
                "raw": "\"A\"",
                "value": "A"
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 230,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 234,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 249,
            "decorators": [],
            "name": "ResultIsString4",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 252,
            "end": 281,
            "argument": {
              "type": "BinaryExpression",
              "start": 260,
              "end": 280,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 260,
                "end": 267,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 260,
                  "end": 264,
                  "decorators": [],
                  "name": "ENUM",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 265,
                  "end": 266,
                  "raw": "0",
                  "value": 0
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 270,
                "end": 280,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 270,
                  "end": 275,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 276,
                  "end": 279,
                  "raw": "\"B\"",
                  "value": "B"
                }
              }
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 314,
      "end": 355,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 318,
          "end": 354,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 333,
            "decorators": [],
            "name": "ResultIsString5",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 336,
            "end": 354,
            "argument": {
              "type": "UnaryExpression",
              "start": 343,
              "end": 354,
              "argument": {
                "type": "Identifier",
                "start": 350,
                "end": 354,
                "decorators": [],
                "name": "ENUM",
                "optional": false
              },
              "operator": "typeof",
              "prefix": true
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 356,
      "end": 419,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 360,
          "end": 418,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 375,
            "decorators": [],
            "name": "ResultIsString6",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 378,
            "end": 418,
            "argument": {
              "type": "UnaryExpression",
              "start": 385,
              "end": 418,
              "argument": {
                "type": "UnaryExpression",
                "start": 392,
                "end": 418,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 400,
                  "end": 417,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 400,
                    "end": 407,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 400,
                      "end": 404,
                      "decorators": [],
                      "name": "ENUM",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 405,
                      "end": 406,
                      "raw": "0",
                      "value": 0
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 410,
                    "end": 417,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 415,
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                },
                "operator": "typeof",
                "prefix": true
              },
              "operator": "typeof",
              "prefix": true
            },
            "operator": "typeof",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 450,
      "end": 462,
      "expression": {
        "type": "UnaryExpression",
        "start": 450,
        "end": 461,
        "argument": {
          "type": "Identifier",
          "start": 457,
          "end": 461,
          "decorators": [],
          "name": "ENUM",
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 463,
      "end": 476,
      "expression": {
        "type": "UnaryExpression",
        "start": 463,
        "end": 475,
        "argument": {
          "type": "Identifier",
          "start": 470,
          "end": 475,
          "decorators": [],
          "name": "ENUM1",
          "optional": false
        },
        "operator": "typeof",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 477,
      "end": 495,
      "expression": {
        "type": "UnaryExpression",
        "start": 477,
        "end": 494,
        "argument": {
          "type": "MemberExpression",
          "start": 484,
          "end": 494,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 484,
            "end": 489,
            "decorators": [],
            "name": "ENUM1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 490,
            "end": 493,
            "raw": "\"B\"",
            "value": "B"
          }
        },
        "operator": "typeof",
        "prefix": true
      }
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
            "argument": {
              "type": "Identifier",
              "start": 503,
              "end": 507,
              "decorators": [],
              "name": "ENUM",
              "optional": false
            },
            "operator": "typeof",
            "prefix": true
          },
          {
            "type": "Identifier",
            "start": 509,
            "end": 514,
            "decorators": [],
            "name": "ENUM1",
            "optional": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 545,
      "end": 555,
      "body": {
        "type": "TSEnumBody",
        "start": 552,
        "end": 555,
        "members": []
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 550,
        "end": 551,
        "decorators": [],
        "name": "z",
        "optional": false
      }
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
      "body": {
        "type": "ExpressionStatement",
        "start": 560,
        "end": 572,
        "expression": {
          "type": "UnaryExpression",
          "start": 560,
          "end": 571,
          "argument": {
            "type": "Identifier",
            "start": 567,
            "end": 571,
            "decorators": [],
            "name": "ENUM",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 557,
        "end": 558,
        "decorators": [],
        "name": "z",
        "optional": false
      }
    },
    {
      "type": "LabeledStatement",
      "start": 573,
      "end": 589,
      "body": {
        "type": "ExpressionStatement",
        "start": 576,
        "end": 589,
        "expression": {
          "type": "UnaryExpression",
          "start": 576,
          "end": 588,
          "argument": {
            "type": "Identifier",
            "start": 583,
            "end": 588,
            "decorators": [],
            "name": "ENUM1",
            "optional": false
          },
          "operator": "typeof",
          "prefix": true
        }
      },
      "label": {
        "type": "Identifier",
        "start": 573,
        "end": 574,
        "decorators": [],
        "name": "z",
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
