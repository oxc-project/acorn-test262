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
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 21,
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 16,
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 19,
                  "value": 0,
                  "raw": "0"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 24,
      "end": 195,
      "test": {
        "type": "BinaryExpression",
        "start": 28,
        "end": 47,
        "left": {
          "type": "Identifier",
          "start": 28,
          "end": 29,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 41,
          "end": 47,
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null
        }
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
            "expression": {
              "type": "MemberExpression",
              "start": 55,
              "end": 58,
              "object": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 125,
        "end": 195,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 131,
            "end": 135,
            "expression": {
              "type": "MemberExpression",
              "start": 131,
              "end": 134,
              "object": {
                "type": "Identifier",
                "start": 131,
                "end": 132,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 197,
      "end": 350,
      "test": {
        "type": "BinaryExpression",
        "start": 201,
        "end": 222,
        "left": {
          "type": "UnaryExpression",
          "start": 201,
          "end": 209,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 214,
          "end": 222,
          "value": "string",
          "raw": "\"string\""
        }
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
            "expression": {
              "type": "MemberExpression",
              "start": 230,
              "end": 233,
              "object": {
                "type": "Identifier",
                "start": 230,
                "end": 231,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 294,
        "end": 350,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 300,
            "end": 304,
            "expression": {
              "type": "MemberExpression",
              "start": 300,
              "end": 303,
              "object": {
                "type": "Identifier",
                "start": 300,
                "end": 301,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 352,
      "end": 505,
      "test": {
        "type": "BinaryExpression",
        "start": 356,
        "end": 377,
        "left": {
          "type": "UnaryExpression",
          "start": 356,
          "end": 364,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 369,
          "end": 377,
          "value": "number",
          "raw": "\"number\""
        }
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
            "expression": {
              "type": "MemberExpression",
              "start": 385,
              "end": 388,
              "object": {
                "type": "Identifier",
                "start": 385,
                "end": 386,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 449,
        "end": 505,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 455,
            "end": 459,
            "expression": {
              "type": "MemberExpression",
              "start": 455,
              "end": 458,
              "object": {
                "type": "Identifier",
                "start": 455,
                "end": 456,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 507,
      "end": 661,
      "test": {
        "type": "BinaryExpression",
        "start": 511,
        "end": 533,
        "left": {
          "type": "UnaryExpression",
          "start": 511,
          "end": 519,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 518,
            "end": 519,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 524,
          "end": 533,
          "value": "boolean",
          "raw": "\"boolean\""
        }
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
            "expression": {
              "type": "MemberExpression",
              "start": 541,
              "end": 544,
              "object": {
                "type": "Identifier",
                "start": 541,
                "end": 542,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 605,
        "end": 661,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 611,
            "end": 615,
            "expression": {
              "type": "MemberExpression",
              "start": 611,
              "end": 614,
              "object": {
                "type": "Identifier",
                "start": 611,
                "end": 612,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 613,
                "end": 614,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      }
    },
    {
      "type": "IfStatement",
      "start": 663,
      "end": 824,
      "test": {
        "type": "BinaryExpression",
        "start": 667,
        "end": 688,
        "left": {
          "type": "UnaryExpression",
          "start": 667,
          "end": 675,
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "start": 674,
            "end": 675,
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null
          },
          "prefix": true
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "start": 680,
          "end": 688,
          "value": "object",
          "raw": "\"object\""
        }
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
            "expression": {
              "type": "MemberExpression",
              "start": 696,
              "end": 699,
              "object": {
                "type": "Identifier",
                "start": 696,
                "end": 697,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 698,
                "end": 699,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      },
      "alternate": {
        "type": "BlockStatement",
        "start": 768,
        "end": 824,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 774,
            "end": 778,
            "expression": {
              "type": "MemberExpression",
              "start": 774,
              "end": 777,
              "object": {
                "type": "Identifier",
                "start": 774,
                "end": 775,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 776,
                "end": 777,
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "directive": null
          }
        ]
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
