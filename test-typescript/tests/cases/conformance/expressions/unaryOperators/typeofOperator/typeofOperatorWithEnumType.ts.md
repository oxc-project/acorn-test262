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
        "name": "ENUM",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 44,
        "end": 47,
        "members": []
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
      "id": {
        "type": "Identifier",
        "start": 54,
        "end": 59,
        "name": "ENUM1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 62,
          "end": 63,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 63,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
      ],
      "const": false,
      "declare": false,
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
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "B",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
          "id": {
            "type": "Identifier",
            "start": 96,
            "end": 111,
            "name": "ResultIsString1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 114,
            "end": 125,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 121,
              "end": 125,
              "name": "ENUM",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 146,
            "name": "ResultIsString2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 149,
            "end": 161,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 156,
              "end": 161,
              "name": "ENUM1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 193,
            "end": 208,
            "name": "ResultIsString3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 211,
            "end": 228,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "MemberExpression",
              "start": 218,
              "end": 228,
              "object": {
                "type": "Identifier",
                "start": 218,
                "end": 223,
                "name": "ENUM1",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 224,
                "end": 227,
                "value": "A",
                "raw": "\"A\""
              },
              "computed": true,
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 234,
            "end": 249,
            "name": "ResultIsString4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 252,
            "end": 281,
            "operator": "typeof",
            "prefix": true,
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
                  "name": "ENUM",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 265,
                  "end": 266,
                  "value": 0,
                  "raw": "0"
                },
                "computed": true,
                "optional": false
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
                  "name": "ENUM1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Literal",
                  "start": 276,
                  "end": 279,
                  "value": "B",
                  "raw": "\"B\""
                },
                "computed": true,
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 318,
            "end": 333,
            "name": "ResultIsString5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 336,
            "end": 354,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 343,
              "end": 354,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 350,
                "end": 354,
                "name": "ENUM",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 360,
            "end": 375,
            "name": "ResultIsString6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 378,
            "end": 418,
            "operator": "typeof",
            "prefix": true,
            "argument": {
              "type": "UnaryExpression",
              "start": 385,
              "end": 418,
              "operator": "typeof",
              "prefix": true,
              "argument": {
                "type": "UnaryExpression",
                "start": 392,
                "end": 418,
                "operator": "typeof",
                "prefix": true,
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
                      "name": "ENUM",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Literal",
                      "start": 405,
                      "end": 406,
                      "value": 0,
                      "raw": "0"
                    },
                    "computed": true,
                    "optional": false
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
                      "name": "ENUM1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 416,
                      "end": 417,
                      "name": "B",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "computed": false,
                    "optional": false
                  }
                }
              }
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 457,
          "end": 461,
          "name": "ENUM",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 470,
          "end": 475,
          "name": "ENUM1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
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
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 484,
          "end": 494,
          "object": {
            "type": "Identifier",
            "start": 484,
            "end": 489,
            "name": "ENUM1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 490,
            "end": 493,
            "value": "B",
            "raw": "\"B\""
          },
          "computed": true,
          "optional": false
        }
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
            "prefix": true,
            "argument": {
              "type": "Identifier",
              "start": 503,
              "end": 507,
              "name": "ENUM",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          {
            "type": "Identifier",
            "start": 509,
            "end": 514,
            "name": "ENUM1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 552,
        "end": 555,
        "members": []
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
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 567,
            "end": 571,
            "name": "ENUM",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "label": {
        "type": "Identifier",
        "start": 557,
        "end": 558,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
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
          "operator": "typeof",
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 583,
            "end": 588,
            "name": "ENUM1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        },
        "directive": null
      },
      "label": {
        "type": "Identifier",
        "start": 573,
        "end": 574,
        "name": "z",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
