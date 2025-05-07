__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 824,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 22,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            }
          },
          "init": {
            "type": "ObjectExpression",
            "start": 13,
            "end": 21,
            "properties": [
              {
                "type": "Property",
                "start": 15,
                "end": 19,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 16,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 19,
                  "raw": "0",
                  "value": 0,
                  "regex": null,
                  "bigint": null
                }
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "IfStatement",
      "start": 24,
      "end": 195,
      "alternate": {
        "type": "BlockStatement",
        "start": 125,
        "end": 195,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 131,
            "end": 135,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 131,
              "end": 134,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 49,
        "end": 119,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 55,
            "end": 59,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 55,
              "end": 58,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 28,
        "end": 47,
        "operator": "instanceof",
        "left": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 41,
          "end": 47,
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 197,
      "end": 350,
      "alternate": {
        "type": "BlockStatement",
        "start": 294,
        "end": 350,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 300,
            "end": 304,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 300,
              "end": 303,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 300,
                "end": 301,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 224,
        "end": 288,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 230,
            "end": 234,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 230,
              "end": 233,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 201,
        "end": 222,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 201,
          "end": 209,
          "argument": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 214,
          "end": 222,
          "raw": "\"string\"",
          "value": "string",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 352,
      "end": 505,
      "alternate": {
        "type": "BlockStatement",
        "start": 449,
        "end": 505,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 455,
            "end": 459,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 455,
              "end": 458,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 455,
                "end": 456,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 379,
        "end": 443,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 385,
            "end": 389,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 385,
              "end": 388,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 385,
                "end": 386,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 356,
        "end": 377,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 356,
          "end": 364,
          "argument": {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 369,
          "end": 377,
          "raw": "\"number\"",
          "value": "number",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 507,
      "end": 661,
      "alternate": {
        "type": "BlockStatement",
        "start": 605,
        "end": 661,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 611,
            "end": 615,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 611,
              "end": 614,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 611,
                "end": 612,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 613,
                "end": 614,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 535,
        "end": 599,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 541,
            "end": 545,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 541,
              "end": 544,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 541,
                "end": 542,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 511,
        "end": 533,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 511,
          "end": 519,
          "argument": {
            "type": "Identifier",
            "start": 518,
            "end": 519,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 524,
          "end": 533,
          "raw": "\"boolean\"",
          "value": "boolean",
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "IfStatement",
      "start": 663,
      "end": 824,
      "alternate": {
        "type": "BlockStatement",
        "start": 768,
        "end": 824,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 774,
            "end": 778,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 774,
              "end": 777,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 774,
                "end": 775,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 776,
                "end": 777,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 690,
        "end": 762,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 696,
            "end": 700,
            "directive": null,
            "expression": {
              "type": "MemberExpression",
              "start": 696,
              "end": 699,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 696,
                "end": 697,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 698,
                "end": 699,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              }
            }
          }
        ]
      },
      "test": {
        "type": "BinaryExpression",
        "start": 667,
        "end": 688,
        "operator": "===",
        "left": {
          "type": "UnaryExpression",
          "start": 667,
          "end": 675,
          "argument": {
            "type": "Identifier",
            "start": 674,
            "end": 675,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "typeof",
          "prefix": true
        },
        "right": {
          "type": "Literal",
          "start": 680,
          "end": 688,
          "raw": "\"object\"",
          "value": "object",
          "regex": null,
          "bigint": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
