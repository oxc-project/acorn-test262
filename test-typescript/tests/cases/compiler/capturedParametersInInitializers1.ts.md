__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 818,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 84,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 66,
        "end": 84,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 72,
            "end": 82,
            "expression": {
              "type": "MemberExpression",
              "start": 72,
              "end": 81,
              "computed": false,
              "object": {
                "type": "NewExpression",
                "start": 72,
                "end": 79,
                "arguments": [],
                "callee": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "decorators": [],
                  "name": "y",
                  "optional": false
                }
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "c",
                "optional": false
              }
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 39,
        "decorators": [],
        "name": "foo1",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 40,
          "end": 57,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ClassExpression",
            "start": 44,
            "end": 57,
            "abstract": false,
            "body": {
              "type": "ClassBody",
              "start": 50,
              "end": 57,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 51,
                  "end": 56,
                  "computed": false,
                  "declare": false,
                  "decorators": [],
                  "definite": false,
                  "key": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "c",
                    "optional": false
                  },
                  "optional": false,
                  "override": false,
                  "readonly": false,
                  "static": false,
                  "value": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "x",
                    "optional": false
                  }
                }
              ]
            },
            "declare": false,
            "decorators": [],
            "id": null,
            "implements": [],
            "superClass": null
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 59,
          "end": 64,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "decorators": [],
            "name": "x",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 63,
            "end": 64,
            "raw": "1",
            "value": 1
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 166,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 158,
        "end": 166,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 120,
        "decorators": [],
        "name": "foo2",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 121,
          "end": 149,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "FunctionExpression",
            "start": 125,
            "end": 149,
            "async": false,
            "body": {
              "type": "BlockStatement",
              "start": 147,
              "end": 149,
              "body": []
            },
            "declare": false,
            "expression": false,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 134,
                "end": 145,
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 135,
                  "end": 145,
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 137,
                    "end": 145,
                    "exprName": {
                      "type": "Identifier",
                      "start": 144,
                      "end": 145,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 151,
          "end": 156,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 155,
            "end": 156,
            "raw": "1",
            "value": 1
          }
        }
      ]
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 194,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 193,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "decorators": [],
            "name": "a",
            "optional": false
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "FunctionDeclaration",
      "start": 195,
      "end": 248,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 240,
        "end": 248,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 208,
        "decorators": [],
        "name": "foo3",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 209,
          "end": 231,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 213,
            "end": 231,
            "properties": [
              {
                "type": "Property",
                "start": 215,
                "end": 229,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 218,
                  "end": 229,
                  "expression": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "typeAnnotation": {
                    "type": "TSTypeQuery",
                    "start": 219,
                    "end": 227,
                    "exprName": {
                      "type": "Identifier",
                      "start": 226,
                      "end": 227,
                      "decorators": [],
                      "name": "z",
                      "optional": false
                    }
                  }
                }
              }
            ]
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 233,
          "end": 238,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 237,
            "end": 238,
            "raw": "1",
            "value": 1
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 285,
      "end": 318,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 315,
        "end": 318,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 298,
        "decorators": [],
        "name": "foo4",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 299,
          "end": 306,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 299,
            "end": 300,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 303,
            "end": 306,
            "properties": [
              {
                "type": "Property",
                "start": 304,
                "end": 305,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": true,
                "value": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                }
              }
            ]
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 308,
          "end": 313,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 312,
            "end": 313,
            "raw": "1",
            "value": 1
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 374,
      "end": 415,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 412,
        "end": 415,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 387,
        "decorators": [],
        "name": "foo5",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 388,
          "end": 403,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 392,
            "end": 403,
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 393,
              "end": 400,
              "async": false,
              "body": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            },
            "optional": false
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 405,
          "end": 410,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 409,
            "end": 410,
            "raw": "1",
            "value": 1
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 454,
      "end": 501,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 498,
        "end": 501,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 463,
        "end": 467,
        "decorators": [],
        "name": "foo6",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 468,
          "end": 489,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 468,
            "end": 469,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ArrowFunctionExpression",
            "start": 472,
            "end": 489,
            "async": false,
            "body": {
              "type": "CallExpression",
              "start": 478,
              "end": 489,
              "arguments": [],
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 479,
                "end": 486,
                "async": false,
                "body": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "expression": true,
                "generator": false,
                "id": null,
                "params": []
              },
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": []
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 491,
          "end": 496,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 491,
            "end": 492,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 495,
            "end": 496,
            "raw": "1",
            "value": 1
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 562,
      "end": 617,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 614,
        "end": 617,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 571,
        "end": 575,
        "decorators": [],
        "name": "foo7",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 576,
          "end": 605,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 576,
            "end": 577,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 580,
            "end": 605,
            "arguments": [],
            "callee": {
              "type": "FunctionExpression",
              "start": 581,
              "end": 602,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 593,
                "end": 602,
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "start": 594,
                    "end": 601,
                    "expression": {
                      "type": "YieldExpression",
                      "start": 594,
                      "end": 601,
                      "argument": {
                        "type": "Identifier",
                        "start": 600,
                        "end": 601,
                        "decorators": [],
                        "name": "z",
                        "optional": false
                      },
                      "delegate": false
                    }
                  }
                ]
              },
              "declare": false,
              "expression": false,
              "generator": true,
              "id": null,
              "params": []
            },
            "optional": false
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 607,
          "end": 612,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 607,
            "end": 608,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 611,
            "end": 612,
            "raw": "1",
            "value": 1
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 674,
      "end": 721,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 718,
        "end": 721,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 683,
        "end": 687,
        "decorators": [],
        "name": "foo8",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 688,
          "end": 709,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 688,
            "end": 689,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "CallExpression",
            "start": 692,
            "end": 709,
            "arguments": [],
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 693,
              "end": 706,
              "async": true,
              "body": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
                "decorators": [],
                "name": "z",
                "optional": false
              },
              "expression": true,
              "generator": false,
              "id": null,
              "params": []
            },
            "optional": false
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 711,
          "end": 716,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 711,
            "end": 712,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 715,
            "end": 716,
            "raw": "1",
            "value": 1
          }
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 766,
      "end": 817,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 814,
        "end": 817,
        "body": []
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 775,
        "end": 779,
        "decorators": [],
        "name": "foo9",
        "optional": false
      },
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 780,
          "end": 805,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 780,
            "end": 781,
            "decorators": [],
            "name": "y",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "ObjectExpression",
            "start": 784,
            "end": 805,
            "properties": [
              {
                "type": "Property",
                "start": 785,
                "end": 804,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 787,
                  "decorators": [],
                  "name": "z",
                  "optional": false
                },
                "kind": "init",
                "method": true,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "FunctionExpression",
                  "start": 788,
                  "end": 804,
                  "async": false,
                  "body": {
                    "type": "BlockStatement",
                    "start": 791,
                    "end": 804,
                    "body": [
                      {
                        "type": "ReturnStatement",
                        "start": 793,
                        "end": 802,
                        "argument": {
                          "type": "Identifier",
                          "start": 800,
                          "end": 801,
                          "decorators": [],
                          "name": "z",
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "expression": false,
                  "generator": false,
                  "id": null,
                  "params": []
                }
              }
            ]
          }
        },
        {
          "type": "AssignmentPattern",
          "start": 807,
          "end": 812,
          "decorators": [],
          "left": {
            "type": "Identifier",
            "start": 807,
            "end": 808,
            "decorators": [],
            "name": "z",
            "optional": false
          },
          "optional": false,
          "right": {
            "type": "Literal",
            "start": 811,
            "end": 812,
            "raw": "1",
            "value": 1
          }
        }
      ]
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
