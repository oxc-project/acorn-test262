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
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 39,
        "name": "foo1",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 40,
          "end": 57,
          "left": {
            "type": "Identifier",
            "start": 40,
            "end": 41,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ClassExpression",
            "start": 44,
            "end": 57,
            "id": null,
            "superClass": null,
            "body": {
              "type": "ClassBody",
              "start": 50,
              "end": 57,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 51,
                  "end": 56,
                  "static": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "decorators": [],
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "typeAnnotation": null,
                  "accessibility": null
                }
              ]
            },
            "decorators": [],
            "typeParameters": null,
            "implements": [],
            "abstract": false,
            "declare": false,
            "superTypeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 59,
          "end": 64,
          "left": {
            "type": "Identifier",
            "start": 59,
            "end": 60,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 63,
            "end": 64,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
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
              "object": {
                "type": "NewExpression",
                "start": 72,
                "end": 79,
                "callee": {
                  "type": "Identifier",
                  "start": 76,
                  "end": 77,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "arguments": [],
                "typeArguments": null
              },
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "name": "c",
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
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 120,
        "name": "foo2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 121,
          "end": 149,
          "left": {
            "type": "Identifier",
            "start": 121,
            "end": 122,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "FunctionExpression",
            "start": 125,
            "end": 149,
            "id": null,
            "expression": false,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 134,
                "end": 145,
                "name": "x",
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
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BlockStatement",
              "start": 147,
              "end": 149,
              "body": []
            },
            "declare": false,
            "typeParameters": null,
            "returnType": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 151,
          "end": 156,
          "left": {
            "type": "Identifier",
            "start": 151,
            "end": 152,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 155,
            "end": 156,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 158,
        "end": 166,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
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
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 195,
      "end": 248,
      "id": {
        "type": "Identifier",
        "start": 204,
        "end": 208,
        "name": "foo3",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 209,
          "end": 231,
          "left": {
            "type": "Identifier",
            "start": 209,
            "end": 210,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ObjectExpression",
            "start": 213,
            "end": 231,
            "properties": [
              {
                "type": "Property",
                "start": 215,
                "end": 229,
                "method": false,
                "shorthand": false,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 218,
                  "end": 229,
                  "expression": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
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
                      "name": "z",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 233,
          "end": 238,
          "left": {
            "type": "Identifier",
            "start": 233,
            "end": 234,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 237,
            "end": 238,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 240,
        "end": 248,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 285,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 298,
        "name": "foo4",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 299,
          "end": 306,
          "left": {
            "type": "Identifier",
            "start": 299,
            "end": 300,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ObjectExpression",
            "start": 303,
            "end": 306,
            "properties": [
              {
                "type": "Property",
                "start": 304,
                "end": 305,
                "method": false,
                "shorthand": true,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 308,
          "end": 313,
          "left": {
            "type": "Identifier",
            "start": 308,
            "end": 309,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 312,
            "end": 313,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 315,
        "end": 318,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 374,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 387,
        "name": "foo5",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 388,
          "end": 403,
          "left": {
            "type": "Identifier",
            "start": 388,
            "end": 389,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "CallExpression",
            "start": 392,
            "end": 403,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 393,
              "end": 400,
              "id": null,
              "expression": true,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 405,
          "end": 410,
          "left": {
            "type": "Identifier",
            "start": 405,
            "end": 406,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 409,
            "end": 410,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 412,
        "end": 415,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 454,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 463,
        "end": 467,
        "name": "foo6",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 468,
          "end": 489,
          "left": {
            "type": "Identifier",
            "start": 468,
            "end": 469,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "start": 472,
            "end": 489,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [],
            "body": {
              "type": "CallExpression",
              "start": 478,
              "end": 489,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 479,
                "end": 486,
                "id": null,
                "expression": true,
                "generator": false,
                "async": false,
                "params": [],
                "body": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeParameters": null,
                "returnType": null
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            },
            "typeParameters": null,
            "returnType": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 491,
          "end": 496,
          "left": {
            "type": "Identifier",
            "start": 491,
            "end": 492,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 495,
            "end": 496,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 498,
        "end": 501,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 562,
      "end": 617,
      "id": {
        "type": "Identifier",
        "start": 571,
        "end": 575,
        "name": "foo7",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 576,
          "end": 605,
          "left": {
            "type": "Identifier",
            "start": 576,
            "end": 577,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "CallExpression",
            "start": 580,
            "end": 605,
            "callee": {
              "type": "FunctionExpression",
              "start": 581,
              "end": 602,
              "id": null,
              "expression": false,
              "generator": true,
              "async": false,
              "params": [],
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
                      "delegate": false,
                      "argument": {
                        "type": "Identifier",
                        "start": 600,
                        "end": 601,
                        "name": "z",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "declare": false,
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 607,
          "end": 612,
          "left": {
            "type": "Identifier",
            "start": 607,
            "end": 608,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 611,
            "end": 612,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 614,
        "end": 617,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 674,
      "end": 721,
      "id": {
        "type": "Identifier",
        "start": 683,
        "end": 687,
        "name": "foo8",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 688,
          "end": 709,
          "left": {
            "type": "Identifier",
            "start": 688,
            "end": 689,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "CallExpression",
            "start": 692,
            "end": 709,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 693,
              "end": 706,
              "id": null,
              "expression": true,
              "generator": false,
              "async": true,
              "params": [],
              "body": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
                "name": "z",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeParameters": null,
              "returnType": null
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 711,
          "end": 716,
          "left": {
            "type": "Identifier",
            "start": 711,
            "end": 712,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 715,
            "end": 716,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 718,
        "end": 721,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    },
    {
      "type": "FunctionDeclaration",
      "start": 766,
      "end": 817,
      "id": {
        "type": "Identifier",
        "start": 775,
        "end": 779,
        "name": "foo9",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "AssignmentPattern",
          "start": 780,
          "end": 805,
          "left": {
            "type": "Identifier",
            "start": 780,
            "end": 781,
            "name": "y",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "ObjectExpression",
            "start": 784,
            "end": 805,
            "properties": [
              {
                "type": "Property",
                "start": 785,
                "end": 804,
                "method": true,
                "shorthand": false,
                "computed": true,
                "key": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 787,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 788,
                  "end": 804,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "async": false,
                  "params": [],
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
                          "name": "z",
                          "typeAnnotation": null,
                          "decorators": [],
                          "optional": false
                        }
                      }
                    ]
                  },
                  "declare": false,
                  "typeParameters": null,
                  "returnType": null
                },
                "kind": "init",
                "optional": false
              }
            ]
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 807,
          "end": 812,
          "left": {
            "type": "Identifier",
            "start": 807,
            "end": 808,
            "name": "z",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 811,
            "end": 812,
            "value": 1,
            "raw": "1"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 814,
        "end": 817,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
