__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 825,
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
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 10,
            "name": "x",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 5,
              "end": 10,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              }
            },
            "decorators": [],
            "optional": false
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
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 15,
                  "end": 16,
                  "name": "p",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Literal",
                  "start": 18,
                  "end": 19,
                  "value": 0,
                  "raw": "0"
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "var",
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
          "name": "x",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "start": 41,
          "end": 47,
          "name": "Object",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 57,
                "end": 58,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 133,
                "end": 134,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 208,
            "end": 209,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 232,
                "end": 233,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 302,
                "end": 303,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 363,
            "end": 364,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 387,
                "end": 388,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 457,
                "end": 458,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 518,
            "end": 519,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 543,
                "end": 544,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 613,
                "end": 614,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
          "prefix": true,
          "argument": {
            "type": "Identifier",
            "start": 674,
            "end": 675,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 698,
                "end": 699,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Identifier",
                "start": 776,
                "end": 777,
                "name": "p",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "computed": false,
              "optional": false
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
