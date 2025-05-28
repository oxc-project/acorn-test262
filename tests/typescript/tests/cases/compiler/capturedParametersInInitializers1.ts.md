__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 26,
  "end": 817,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 26,
      "end": 84,
      "id": {
        "type": "Identifier",
        "start": 35,
        "end": 39,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ClassExpression",
            "start": 44,
            "end": 57,
            "decorators": [],
            "id": null,
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "start": 50,
              "end": 57,
              "body": [
                {
                  "type": "PropertyDefinition",
                  "start": 51,
                  "end": 56,
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "start": 51,
                    "end": 52,
                    "decorators": [],
                    "name": "c",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": null,
                  "value": {
                    "type": "Identifier",
                    "start": 55,
                    "end": 56,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": null
                }
              ]
            },
            "abstract": false,
            "declare": false
          },
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 63,
            "end": 64,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
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
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": []
              },
              "property": {
                "type": "Identifier",
                "start": 80,
                "end": 81,
                "decorators": [],
                "name": "c",
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
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 107,
      "end": 166,
      "id": {
        "type": "Identifier",
        "start": 116,
        "end": 120,
        "decorators": [],
        "name": "foo2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "FunctionExpression",
            "start": 125,
            "end": 149,
            "id": null,
            "generator": false,
            "async": false,
            "declare": false,
            "typeParameters": null,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 147,
              "end": 149,
              "body": []
            },
            "expression": false
          },
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 155,
            "end": 156,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 158,
        "end": 166,
        "body": []
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 188,
      "end": 194,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 192,
          "end": 193,
          "id": {
            "type": "Identifier",
            "start": 192,
            "end": 193,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": null
          },
          "init": null,
          "definite": false
        }
      ],
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
        "decorators": [],
        "name": "foo3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 215,
                  "end": 216,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "TSTypeAssertion",
                  "start": 218,
                  "end": 229,
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
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  "expression": {
                    "type": "Identifier",
                    "start": 228,
                    "end": 229,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 237,
            "end": 238,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 240,
        "end": 248,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 285,
      "end": 318,
      "id": {
        "type": "Identifier",
        "start": 294,
        "end": 298,
        "decorators": [],
        "name": "foo4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 304,
                  "end": 305,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 312,
            "end": 313,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 315,
        "end": 318,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 374,
      "end": 415,
      "id": {
        "type": "Identifier",
        "start": 383,
        "end": 387,
        "decorators": [],
        "name": "foo5",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "CallExpression",
            "start": 392,
            "end": 403,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 393,
              "end": 400,
              "expression": true,
              "async": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 399,
                "end": 400,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 409,
            "end": 410,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 412,
        "end": 415,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 454,
      "end": 501,
      "id": {
        "type": "Identifier",
        "start": 463,
        "end": 467,
        "decorators": [],
        "name": "foo6",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "ArrowFunctionExpression",
            "start": 472,
            "end": 489,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 478,
              "end": 489,
              "callee": {
                "type": "ArrowFunctionExpression",
                "start": 479,
                "end": 486,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 486,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "id": null,
                "generator": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 495,
            "end": 496,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 498,
        "end": 501,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 562,
      "end": 617,
      "id": {
        "type": "Identifier",
        "start": 571,
        "end": 575,
        "decorators": [],
        "name": "foo7",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
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
              "generator": true,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [],
              "returnType": null,
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
                        "decorators": [],
                        "name": "z",
                        "optional": false,
                        "typeAnnotation": null
                      }
                    },
                    "directive": null
                  }
                ]
              },
              "expression": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 611,
            "end": 612,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 614,
        "end": 617,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 674,
      "end": 721,
      "id": {
        "type": "Identifier",
        "start": 683,
        "end": 687,
        "decorators": [],
        "name": "foo8",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "CallExpression",
            "start": 692,
            "end": 709,
            "callee": {
              "type": "ArrowFunctionExpression",
              "start": 693,
              "end": 706,
              "expression": true,
              "async": true,
              "typeParameters": null,
              "params": [],
              "returnType": null,
              "body": {
                "type": "Identifier",
                "start": 705,
                "end": 706,
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null
              },
              "id": null,
              "generator": false
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 715,
            "end": 716,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 718,
        "end": 721,
        "body": []
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 766,
      "end": 817,
      "id": {
        "type": "Identifier",
        "start": 775,
        "end": 779,
        "decorators": [],
        "name": "foo9",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
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
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 786,
                  "end": 787,
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "FunctionExpression",
                  "start": 788,
                  "end": 804,
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
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
                          "optional": false,
                          "typeAnnotation": null
                        }
                      }
                    ]
                  },
                  "expression": false
                },
                "method": true,
                "shorthand": false,
                "computed": true,
                "optional": false
              }
            ]
          },
          "optional": false,
          "typeAnnotation": null
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
            "optional": false,
            "typeAnnotation": null
          },
          "right": {
            "type": "Literal",
            "start": 811,
            "end": 812,
            "value": 1,
            "raw": "1"
          },
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 814,
        "end": 817,
        "body": []
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
