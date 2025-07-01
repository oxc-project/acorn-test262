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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 7,
                "end": 10
              },
              "start": 5,
              "end": 10
            },
            "start": 4,
            "end": 10
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 15,
                  "end": 16
                },
                "value": {
                  "type": "Literal",
                  "value": 0,
                  "raw": "0",
                  "start": 18,
                  "end": 19
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 15,
                "end": 19
              }
            ],
            "start": 13,
            "end": 21
          },
          "definite": false,
          "start": 4,
          "end": 21
        }
      ],
      "declare": false,
      "start": 0,
      "end": 22
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null,
          "start": 28,
          "end": 29
        },
        "operator": "instanceof",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "Object",
          "optional": false,
          "typeAnnotation": null,
          "start": 41,
          "end": 47
        },
        "start": 28,
        "end": 47
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 55,
                "end": 56
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 57,
                "end": 58
              },
              "optional": false,
              "computed": false,
              "start": 55,
              "end": 58
            },
            "directive": null,
            "start": 55,
            "end": 59
          }
        ],
        "start": 49,
        "end": 119
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 132
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 133,
                "end": 134
              },
              "optional": false,
              "computed": false,
              "start": 131,
              "end": 134
            },
            "directive": null,
            "start": 131,
            "end": 135
          }
        ],
        "start": 125,
        "end": 195
      },
      "start": 24,
      "end": 195
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 208,
            "end": 209
          },
          "prefix": true,
          "start": 201,
          "end": 209
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "string",
          "raw": "\"string\"",
          "start": 214,
          "end": 222
        },
        "start": 201,
        "end": 222
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 230,
                "end": 231
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 232,
                "end": 233
              },
              "optional": false,
              "computed": false,
              "start": 230,
              "end": 233
            },
            "directive": null,
            "start": 230,
            "end": 234
          }
        ],
        "start": 224,
        "end": 288
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 300,
                "end": 301
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 302,
                "end": 303
              },
              "optional": false,
              "computed": false,
              "start": 300,
              "end": 303
            },
            "directive": null,
            "start": 300,
            "end": 304
          }
        ],
        "start": 294,
        "end": 350
      },
      "start": 197,
      "end": 350
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 363,
            "end": 364
          },
          "prefix": true,
          "start": 356,
          "end": 364
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "number",
          "raw": "\"number\"",
          "start": 369,
          "end": 377
        },
        "start": 356,
        "end": 377
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 385,
                "end": 386
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 388
              },
              "optional": false,
              "computed": false,
              "start": 385,
              "end": 388
            },
            "directive": null,
            "start": 385,
            "end": 389
          }
        ],
        "start": 379,
        "end": 443
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 455,
                "end": 456
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 457,
                "end": 458
              },
              "optional": false,
              "computed": false,
              "start": 455,
              "end": 458
            },
            "directive": null,
            "start": 455,
            "end": 459
          }
        ],
        "start": 449,
        "end": 505
      },
      "start": 352,
      "end": 505
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 518,
            "end": 519
          },
          "prefix": true,
          "start": 511,
          "end": 519
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "boolean",
          "raw": "\"boolean\"",
          "start": 524,
          "end": 533
        },
        "start": 511,
        "end": 533
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 541,
                "end": 542
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 543,
                "end": 544
              },
              "optional": false,
              "computed": false,
              "start": 541,
              "end": 544
            },
            "directive": null,
            "start": 541,
            "end": 545
          }
        ],
        "start": 535,
        "end": 599
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 611,
                "end": 612
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 613,
                "end": 614
              },
              "optional": false,
              "computed": false,
              "start": 611,
              "end": 614
            },
            "directive": null,
            "start": 611,
            "end": 615
          }
        ],
        "start": 605,
        "end": 661
      },
      "start": 507,
      "end": 661
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "BinaryExpression",
        "left": {
          "type": "UnaryExpression",
          "operator": "typeof",
          "argument": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 674,
            "end": 675
          },
          "prefix": true,
          "start": 667,
          "end": 675
        },
        "operator": "===",
        "right": {
          "type": "Literal",
          "value": "object",
          "raw": "\"object\"",
          "start": 680,
          "end": 688
        },
        "start": 667,
        "end": 688
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 696,
                "end": 697
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 698,
                "end": 699
              },
              "optional": false,
              "computed": false,
              "start": 696,
              "end": 699
            },
            "directive": null,
            "start": 696,
            "end": 700
          }
        ],
        "start": 690,
        "end": 762
      },
      "alternate": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 774,
                "end": 775
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": null,
                "start": 776,
                "end": 777
              },
              "optional": false,
              "computed": false,
              "start": 774,
              "end": 777
            },
            "directive": null,
            "start": 774,
            "end": 778
          }
        ],
        "start": 768,
        "end": 824
      },
      "start": 663,
      "end": 824
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 824
}
```
