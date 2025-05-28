__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 289,
  "end": 686,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 289,
      "end": 409,
      "id": {
        "type": "Identifier",
        "start": 298,
        "end": 299,
        "decorators": [],
        "name": "f",
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
          "start": 300,
          "end": 301,
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 303,
          "end": 304,
          "decorators": [],
          "name": "u",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 306,
          "end": 307,
          "decorators": [],
          "name": "v",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 309,
          "end": 310,
          "decorators": [],
          "name": "w",
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "Identifier",
          "start": 312,
          "end": 313,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 315,
        "end": 409,
        "body": [
          {
            "type": "IfStatement",
            "start": 321,
            "end": 393,
            "test": {
              "type": "LogicalExpression",
              "start": 324,
              "end": 366,
              "left": {
                "type": "BinaryExpression",
                "start": 324,
                "end": 359,
                "left": {
                  "type": "BinaryExpression",
                  "start": 324,
                  "end": 340,
                  "left": {
                    "type": "MemberExpression",
                    "start": 324,
                    "end": 327,
                    "object": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 325,
                      "decorators": [],
                      "name": "t",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 326,
                      "end": 327,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "+",
                  "right": {
                    "type": "MemberExpression",
                    "start": 330,
                    "end": 340,
                    "object": {
                      "type": "MemberExpression",
                      "start": 330,
                      "end": 333,
                      "object": {
                        "type": "Identifier",
                        "start": 330,
                        "end": 331,
                        "decorators": [],
                        "name": "t",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 332,
                        "end": 333,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 334,
                      "end": 340,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                },
                "operator": ">",
                "right": {
                  "type": "BinaryExpression",
                  "start": 343,
                  "end": 359,
                  "left": {
                    "type": "MemberExpression",
                    "start": 343,
                    "end": 346,
                    "object": {
                      "type": "Identifier",
                      "start": 343,
                      "end": 344,
                      "decorators": [],
                      "name": "u",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 345,
                      "end": 346,
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "operator": "-",
                  "right": {
                    "type": "MemberExpression",
                    "start": 349,
                    "end": 359,
                    "object": {
                      "type": "MemberExpression",
                      "start": 349,
                      "end": 352,
                      "object": {
                        "type": "Identifier",
                        "start": 349,
                        "end": 350,
                        "decorators": [],
                        "name": "u",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 351,
                        "end": 352,
                        "decorators": [],
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 353,
                      "end": 359,
                      "decorators": [],
                      "name": "length",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  }
                }
              },
              "operator": "&&",
              "right": {
                "type": "MemberExpression",
                "start": 363,
                "end": 366,
                "object": {
                  "type": "Identifier",
                  "start": 363,
                  "end": 364,
                  "decorators": [],
                  "name": "v",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 366,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 368,
              "end": 393,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 378,
                  "end": 387,
                  "argument": {
                    "type": "Identifier",
                    "start": 385,
                    "end": 386,
                    "decorators": [],
                    "name": "w",
                    "optional": false,
                    "typeAnnotation": null
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "ReturnStatement",
            "start": 398,
            "end": 407,
            "argument": {
              "type": "Identifier",
              "start": 405,
              "end": 406,
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "ExpressionStatement",
      "start": 411,
      "end": 501,
      "expression": {
        "type": "CallExpression",
        "start": 411,
        "end": 500,
        "callee": {
          "type": "Identifier",
          "start": 411,
          "end": 412,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 413,
            "end": 440,
            "properties": [
              {
                "type": "Property",
                "start": 415,
                "end": 420,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 415,
                  "end": 416,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 418,
                  "end": 420,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 422,
                "end": 429,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 422,
                  "end": 423,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 425,
                  "end": 429,
                  "value": "hi",
                  "raw": "'hi'"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 431,
                "end": 438,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 431,
                  "end": 432,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 434,
                  "end": 438,
                  "value": null,
                  "raw": "null"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "Identifier",
            "start": 442,
            "end": 451,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "ObjectExpression",
            "start": 453,
            "end": 486,
            "properties": [
              {
                "type": "Property",
                "start": 455,
                "end": 463,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 455,
                  "end": 456,
                  "decorators": [],
                  "name": "c",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 458,
                  "end": 463,
                  "value": false,
                  "raw": "false"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 465,
                "end": 470,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 465,
                  "end": 466,
                  "decorators": [],
                  "name": "d",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 468,
                  "end": 470,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 472,
                "end": 484,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 472,
                  "end": 473,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 475,
                  "end": 484,
                  "decorators": [],
                  "name": "undefined",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "Literal",
            "start": 488,
            "end": 491,
            "value": 101,
            "raw": "101"
          },
          {
            "type": "Literal",
            "start": 493,
            "end": 499,
            "value": "nope",
            "raw": "'nope'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 502,
      "end": 551,
      "expression": {
        "type": "CallExpression",
        "start": 502,
        "end": 550,
        "callee": {
          "type": "Identifier",
          "start": 502,
          "end": 503,
          "decorators": [],
          "name": "f",
          "optional": false,
          "typeAnnotation": null
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "start": 504,
            "end": 514,
            "properties": [
              {
                "type": "Property",
                "start": 506,
                "end": 511,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 507,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 509,
                  "end": 511,
                  "value": 12,
                  "raw": "12"
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          {
            "type": "Identifier",
            "start": 516,
            "end": 525,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Identifier",
            "start": 527,
            "end": 536,
            "decorators": [],
            "name": "undefined",
            "optional": false,
            "typeAnnotation": null
          },
          {
            "type": "Literal",
            "start": 538,
            "end": 541,
            "value": 101,
            "raw": "101"
          },
          {
            "type": "Literal",
            "start": 543,
            "end": 549,
            "value": "nope",
            "raw": "'nope'"
          }
        ],
        "optional": false
      },
      "directive": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 668,
      "end": 685,
      "id": {
        "type": "Identifier",
        "start": 677,
        "end": 678,
        "decorators": [],
        "name": "g",
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
          "start": 679,
          "end": 680,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 682,
        "end": 685,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
