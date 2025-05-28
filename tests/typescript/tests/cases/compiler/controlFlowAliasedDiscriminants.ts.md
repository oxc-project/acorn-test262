__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 2880,
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "start": 0,
      "end": 111,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 19,
        "decorators": [],
        "name": "UseQueryResult",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 19,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 25,
        "end": 110,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 25,
            "end": 71,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 31,
                "end": 48,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 31,
                  "end": 40,
                  "decorators": [],
                  "name": "isSuccess",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 40,
                  "end": 47,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 42,
                    "end": 47,
                    "literal": {
                      "type": "Literal",
                      "start": 42,
                      "end": 47,
                      "value": false,
                      "raw": "false"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 53,
                "end": 69,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 53,
                  "end": 57,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 57,
                  "end": 68,
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 59,
                    "end": 68
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 74,
            "end": 110,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 80,
                "end": 96,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 80,
                  "end": 89,
                  "decorators": [],
                  "name": "isSuccess",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 89,
                  "end": 95,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 91,
                    "end": 95,
                    "literal": {
                      "type": "Literal",
                      "start": 91,
                      "end": 95,
                      "value": true,
                      "raw": "true"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 101,
                "end": 108,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 101,
                  "end": 105,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 105,
                  "end": 108,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 107,
                    "end": 108,
                    "typeName": {
                      "type": "Identifier",
                      "start": 107,
                      "end": 108,
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 113,
      "end": 231,
      "id": {
        "type": "Identifier",
        "start": 122,
        "end": 130,
        "decorators": [],
        "name": "useQuery",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 132,
        "end": 156,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 134,
          "end": 156,
          "typeName": {
            "type": "Identifier",
            "start": 134,
            "end": 148,
            "decorators": [],
            "name": "UseQueryResult",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 148,
            "end": 156,
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 149,
                "end": 155
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 157,
        "end": 231,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 163,
            "end": 229,
            "argument": {
              "type": "ObjectExpression",
              "start": 170,
              "end": 228,
              "properties": [
                {
                  "type": "Property",
                  "start": 180,
                  "end": 196,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 180,
                    "end": 189,
                    "decorators": [],
                    "name": "isSuccess",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 191,
                    "end": 196,
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
                  "start": 206,
                  "end": 221,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 206,
                    "end": 210,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Identifier",
                    "start": 212,
                    "end": 221,
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
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 233,
      "end": 291,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 239,
          "end": 290,
          "id": {
            "type": "ObjectPattern",
            "start": 239,
            "end": 277,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 241,
                "end": 252,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 241,
                  "end": 245,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 247,
                  "end": 252,
                  "decorators": [],
                  "name": "data1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 254,
                "end": 275,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 254,
                  "end": 263,
                  "decorators": [],
                  "name": "isSuccess",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 265,
                  "end": 275,
                  "decorators": [],
                  "name": "isSuccess1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 280,
            "end": 290,
            "callee": {
              "type": "Identifier",
              "start": 280,
              "end": 288,
              "decorators": [],
              "name": "useQuery",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 292,
      "end": 350,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 298,
          "end": 349,
          "id": {
            "type": "ObjectPattern",
            "start": 298,
            "end": 336,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 300,
                "end": 311,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 300,
                  "end": 304,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 306,
                  "end": 311,
                  "decorators": [],
                  "name": "data2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 313,
                "end": 334,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 313,
                  "end": 322,
                  "decorators": [],
                  "name": "isSuccess",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 324,
                  "end": 334,
                  "decorators": [],
                  "name": "isSuccess2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 339,
            "end": 349,
            "callee": {
              "type": "Identifier",
              "start": 339,
              "end": 347,
              "decorators": [],
              "name": "useQuery",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 351,
      "end": 409,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 357,
          "end": 408,
          "id": {
            "type": "ObjectPattern",
            "start": 357,
            "end": 395,
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "start": 359,
                "end": 370,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 359,
                  "end": 363,
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 370,
                  "decorators": [],
                  "name": "data3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              },
              {
                "type": "Property",
                "start": 372,
                "end": 393,
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 372,
                  "end": 381,
                  "decorators": [],
                  "name": "isSuccess",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Identifier",
                  "start": 383,
                  "end": 393,
                  "decorators": [],
                  "name": "isSuccess3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false
              }
            ],
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 398,
            "end": 408,
            "callee": {
              "type": "Identifier",
              "start": 398,
              "end": 406,
              "decorators": [],
              "name": "useQuery",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 411,
      "end": 581,
      "test": {
        "type": "LogicalExpression",
        "start": 415,
        "end": 453,
        "left": {
          "type": "LogicalExpression",
          "start": 415,
          "end": 439,
          "left": {
            "type": "Identifier",
            "start": 415,
            "end": 425,
            "decorators": [],
            "name": "isSuccess1",
            "optional": false,
            "typeAnnotation": null
          },
          "operator": "&&",
          "right": {
            "type": "Identifier",
            "start": 429,
            "end": 439,
            "decorators": [],
            "name": "isSuccess2",
            "optional": false,
            "typeAnnotation": null
          }
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "start": 443,
          "end": 453,
          "decorators": [],
          "name": "isSuccess3",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 455,
        "end": 581,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 461,
            "end": 483,
            "expression": {
              "type": "CallExpression",
              "start": 461,
              "end": 482,
              "callee": {
                "type": "MemberExpression",
                "start": 461,
                "end": 480,
                "object": {
                  "type": "Identifier",
                  "start": 461,
                  "end": 466,
                  "decorators": [],
                  "name": "data1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 467,
                  "end": 480,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 502,
            "end": 524,
            "expression": {
              "type": "CallExpression",
              "start": 502,
              "end": 523,
              "callee": {
                "type": "MemberExpression",
                "start": 502,
                "end": 521,
                "object": {
                  "type": "Identifier",
                  "start": 502,
                  "end": 507,
                  "decorators": [],
                  "name": "data2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 508,
                  "end": 521,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 543,
            "end": 565,
            "expression": {
              "type": "CallExpression",
              "start": 543,
              "end": 564,
              "callee": {
                "type": "MemberExpression",
                "start": 543,
                "end": 562,
                "object": {
                  "type": "Identifier",
                  "start": 543,
                  "end": 548,
                  "decorators": [],
                  "name": "data3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 549,
                  "end": 562,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "VariableDeclaration",
      "start": 583,
      "end": 641,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 589,
          "end": 640,
          "id": {
            "type": "Identifier",
            "start": 589,
            "end": 599,
            "decorators": [],
            "name": "areSuccess",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "LogicalExpression",
            "start": 602,
            "end": 640,
            "left": {
              "type": "LogicalExpression",
              "start": 602,
              "end": 626,
              "left": {
                "type": "Identifier",
                "start": 602,
                "end": 612,
                "decorators": [],
                "name": "isSuccess1",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 616,
                "end": 626,
                "decorators": [],
                "name": "isSuccess2",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "start": 630,
              "end": 640,
              "decorators": [],
              "name": "isSuccess3",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "IfStatement",
      "start": 642,
      "end": 784,
      "test": {
        "type": "Identifier",
        "start": 646,
        "end": 656,
        "decorators": [],
        "name": "areSuccess",
        "optional": false,
        "typeAnnotation": null
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 658,
        "end": 784,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 664,
            "end": 686,
            "expression": {
              "type": "CallExpression",
              "start": 664,
              "end": 685,
              "callee": {
                "type": "MemberExpression",
                "start": 664,
                "end": 683,
                "object": {
                  "type": "Identifier",
                  "start": 664,
                  "end": 669,
                  "decorators": [],
                  "name": "data1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 670,
                  "end": 683,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 705,
            "end": 727,
            "expression": {
              "type": "CallExpression",
              "start": 705,
              "end": 726,
              "callee": {
                "type": "MemberExpression",
                "start": 705,
                "end": 724,
                "object": {
                  "type": "Identifier",
                  "start": 705,
                  "end": 710,
                  "decorators": [],
                  "name": "data2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 711,
                  "end": 724,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 746,
            "end": 768,
            "expression": {
              "type": "CallExpression",
              "start": 746,
              "end": 767,
              "callee": {
                "type": "MemberExpression",
                "start": 746,
                "end": 765,
                "object": {
                  "type": "Identifier",
                  "start": 746,
                  "end": 751,
                  "decorators": [],
                  "name": "data3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 752,
                  "end": 765,
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "BlockStatement",
      "start": 786,
      "end": 1206,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 792,
          "end": 848,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 796,
              "end": 847,
              "id": {
                "type": "ObjectPattern",
                "start": 796,
                "end": 834,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 798,
                    "end": 809,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 798,
                      "end": 802,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 804,
                      "end": 809,
                      "decorators": [],
                      "name": "data1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 811,
                    "end": 832,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 811,
                      "end": 820,
                      "decorators": [],
                      "name": "isSuccess",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 822,
                      "end": 832,
                      "decorators": [],
                      "name": "isSuccess1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "CallExpression",
                "start": 837,
                "end": 847,
                "callee": {
                  "type": "Identifier",
                  "start": 837,
                  "end": 845,
                  "decorators": [],
                  "name": "useQuery",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 853,
          "end": 909,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 857,
              "end": 908,
              "id": {
                "type": "ObjectPattern",
                "start": 857,
                "end": 895,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 859,
                    "end": 870,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 859,
                      "end": 863,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 865,
                      "end": 870,
                      "decorators": [],
                      "name": "data2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 872,
                    "end": 893,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 872,
                      "end": 881,
                      "decorators": [],
                      "name": "isSuccess",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 883,
                      "end": 893,
                      "decorators": [],
                      "name": "isSuccess2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "CallExpression",
                "start": 898,
                "end": 908,
                "callee": {
                  "type": "Identifier",
                  "start": 898,
                  "end": 906,
                  "decorators": [],
                  "name": "useQuery",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 914,
          "end": 972,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 920,
              "end": 971,
              "id": {
                "type": "ObjectPattern",
                "start": 920,
                "end": 958,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 922,
                    "end": 933,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 922,
                      "end": 926,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 928,
                      "end": 933,
                      "decorators": [],
                      "name": "data3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 935,
                    "end": 956,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 935,
                      "end": 944,
                      "decorators": [],
                      "name": "isSuccess",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 946,
                      "end": 956,
                      "decorators": [],
                      "name": "isSuccess3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "CallExpression",
                "start": 961,
                "end": 971,
                "callee": {
                  "type": "Identifier",
                  "start": 961,
                  "end": 969,
                  "decorators": [],
                  "name": "useQuery",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 977,
          "end": 1035,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 983,
              "end": 1034,
              "id": {
                "type": "Identifier",
                "start": 983,
                "end": 993,
                "decorators": [],
                "name": "areSuccess",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "LogicalExpression",
                "start": 996,
                "end": 1034,
                "left": {
                  "type": "LogicalExpression",
                  "start": 996,
                  "end": 1020,
                  "left": {
                    "type": "Identifier",
                    "start": 996,
                    "end": 1006,
                    "decorators": [],
                    "name": "isSuccess1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1010,
                    "end": 1020,
                    "decorators": [],
                    "name": "isSuccess2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 1024,
                  "end": 1034,
                  "decorators": [],
                  "name": "isSuccess3",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "IfStatement",
          "start": 1040,
          "end": 1204,
          "test": {
            "type": "Identifier",
            "start": 1044,
            "end": 1054,
            "decorators": [],
            "name": "areSuccess",
            "optional": false,
            "typeAnnotation": null
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 1056,
            "end": 1204,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1066,
                "end": 1088,
                "expression": {
                  "type": "CallExpression",
                  "start": 1066,
                  "end": 1087,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1066,
                    "end": 1085,
                    "object": {
                      "type": "Identifier",
                      "start": 1066,
                      "end": 1071,
                      "decorators": [],
                      "name": "data1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1072,
                      "end": 1085,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 1114,
                "end": 1136,
                "expression": {
                  "type": "CallExpression",
                  "start": 1114,
                  "end": 1135,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1114,
                    "end": 1133,
                    "object": {
                      "type": "Identifier",
                      "start": 1114,
                      "end": 1119,
                      "decorators": [],
                      "name": "data2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1120,
                      "end": 1133,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 1162,
                "end": 1184,
                "expression": {
                  "type": "CallExpression",
                  "start": 1162,
                  "end": 1183,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1162,
                    "end": 1181,
                    "object": {
                      "type": "Identifier",
                      "start": 1162,
                      "end": 1167,
                      "decorators": [],
                      "name": "data3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1168,
                      "end": 1181,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          "alternate": null
        }
      ]
    },
    {
      "type": "TSDeclareFunction",
      "start": 1208,
      "end": 1279,
      "id": {
        "type": "Identifier",
        "start": 1225,
        "end": 1239,
        "decorators": [],
        "name": "getArrayResult",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1241,
        "end": 1278,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1243,
          "end": 1278,
          "types": [
            {
              "type": "TSTupleType",
              "start": 1243,
              "end": 1257,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 1244,
                  "end": 1248,
                  "literal": {
                    "type": "Literal",
                    "start": 1244,
                    "end": 1248,
                    "value": true,
                    "raw": "true"
                  }
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1250,
                  "end": 1256
                }
              ]
            },
            {
              "type": "TSTupleType",
              "start": 1260,
              "end": 1278,
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "start": 1261,
                  "end": 1266,
                  "literal": {
                    "type": "Literal",
                    "start": 1261,
                    "end": 1266,
                    "value": false,
                    "raw": "false"
                  }
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1268,
                  "end": 1277
                }
              ]
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "BlockStatement",
      "start": 1280,
      "end": 1627,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1286,
          "end": 1324,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1292,
              "end": 1323,
              "id": {
                "type": "ArrayPattern",
                "start": 1292,
                "end": 1304,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1293,
                    "end": 1297,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1299,
                    "end": 1303,
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "CallExpression",
                "start": 1307,
                "end": 1323,
                "callee": {
                  "type": "Identifier",
                  "start": 1307,
                  "end": 1321,
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1329,
          "end": 1367,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1335,
              "end": 1366,
              "id": {
                "type": "ArrayPattern",
                "start": 1335,
                "end": 1347,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1336,
                    "end": 1340,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1342,
                    "end": 1346,
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "CallExpression",
                "start": 1350,
                "end": 1366,
                "callee": {
                  "type": "Identifier",
                  "start": 1350,
                  "end": 1364,
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1372,
          "end": 1410,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1378,
              "end": 1409,
              "id": {
                "type": "ArrayPattern",
                "start": 1378,
                "end": 1390,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1379,
                    "end": 1383,
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1385,
                    "end": 1389,
                    "decorators": [],
                    "name": "bar3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "CallExpression",
                "start": 1393,
                "end": 1409,
                "callee": {
                  "type": "Identifier",
                  "start": 1393,
                  "end": 1407,
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1415,
          "end": 1460,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1421,
              "end": 1459,
              "id": {
                "type": "Identifier",
                "start": 1421,
                "end": 1436,
                "decorators": [],
                "name": "arrayAllSuccess",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "LogicalExpression",
                "start": 1439,
                "end": 1459,
                "left": {
                  "type": "LogicalExpression",
                  "start": 1439,
                  "end": 1451,
                  "left": {
                    "type": "Identifier",
                    "start": 1439,
                    "end": 1443,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1447,
                    "end": 1451,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 1455,
                  "end": 1459,
                  "decorators": [],
                  "name": "foo3",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "IfStatement",
          "start": 1465,
          "end": 1625,
          "test": {
            "type": "Identifier",
            "start": 1469,
            "end": 1484,
            "decorators": [],
            "name": "arrayAllSuccess",
            "optional": false,
            "typeAnnotation": null
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 1486,
            "end": 1625,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1496,
                "end": 1517,
                "expression": {
                  "type": "CallExpression",
                  "start": 1496,
                  "end": 1516,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1496,
                    "end": 1514,
                    "object": {
                      "type": "Identifier",
                      "start": 1496,
                      "end": 1500,
                      "decorators": [],
                      "name": "bar1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1501,
                      "end": 1514,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 1540,
                "end": 1561,
                "expression": {
                  "type": "CallExpression",
                  "start": 1540,
                  "end": 1560,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1540,
                    "end": 1558,
                    "object": {
                      "type": "Identifier",
                      "start": 1540,
                      "end": 1544,
                      "decorators": [],
                      "name": "bar2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1545,
                      "end": 1558,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 1584,
                "end": 1605,
                "expression": {
                  "type": "CallExpression",
                  "start": 1584,
                  "end": 1604,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1584,
                    "end": 1602,
                    "object": {
                      "type": "Identifier",
                      "start": 1584,
                      "end": 1588,
                      "decorators": [],
                      "name": "bar3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1589,
                      "end": 1602,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          "alternate": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 1629,
      "end": 1981,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 1635,
          "end": 1673,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1641,
              "end": 1672,
              "id": {
                "type": "ArrayPattern",
                "start": 1641,
                "end": 1653,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1642,
                    "end": 1646,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1648,
                    "end": 1652,
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "CallExpression",
                "start": 1656,
                "end": 1672,
                "callee": {
                  "type": "Identifier",
                  "start": 1656,
                  "end": 1670,
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1678,
          "end": 1714,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1682,
              "end": 1713,
              "id": {
                "type": "ArrayPattern",
                "start": 1682,
                "end": 1694,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1683,
                    "end": 1687,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1689,
                    "end": 1693,
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "CallExpression",
                "start": 1697,
                "end": 1713,
                "callee": {
                  "type": "Identifier",
                  "start": 1697,
                  "end": 1711,
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1719,
          "end": 1755,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1723,
              "end": 1754,
              "id": {
                "type": "ArrayPattern",
                "start": 1723,
                "end": 1735,
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 1724,
                    "end": 1728,
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  {
                    "type": "Identifier",
                    "start": 1730,
                    "end": 1734,
                    "decorators": [],
                    "name": "bar3",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "CallExpression",
                "start": 1738,
                "end": 1754,
                "callee": {
                  "type": "Identifier",
                  "start": 1738,
                  "end": 1752,
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 1760,
          "end": 1805,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 1766,
              "end": 1804,
              "id": {
                "type": "Identifier",
                "start": 1766,
                "end": 1781,
                "decorators": [],
                "name": "arrayAllSuccess",
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "LogicalExpression",
                "start": 1784,
                "end": 1804,
                "left": {
                  "type": "LogicalExpression",
                  "start": 1784,
                  "end": 1796,
                  "left": {
                    "type": "Identifier",
                    "start": 1784,
                    "end": 1788,
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 1792,
                    "end": 1796,
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "start": 1800,
                  "end": 1804,
                  "decorators": [],
                  "name": "foo3",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "IfStatement",
          "start": 1810,
          "end": 1979,
          "test": {
            "type": "Identifier",
            "start": 1814,
            "end": 1829,
            "decorators": [],
            "name": "arrayAllSuccess",
            "optional": false,
            "typeAnnotation": null
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 1831,
            "end": 1979,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 1841,
                "end": 1862,
                "expression": {
                  "type": "CallExpression",
                  "start": 1841,
                  "end": 1861,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1841,
                    "end": 1859,
                    "object": {
                      "type": "Identifier",
                      "start": 1841,
                      "end": 1845,
                      "decorators": [],
                      "name": "bar1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1846,
                      "end": 1859,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 1886,
                "end": 1907,
                "expression": {
                  "type": "CallExpression",
                  "start": 1886,
                  "end": 1906,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1886,
                    "end": 1904,
                    "object": {
                      "type": "Identifier",
                      "start": 1886,
                      "end": 1890,
                      "decorators": [],
                      "name": "bar2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1891,
                      "end": 1904,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "directive": null
              },
              {
                "type": "ExpressionStatement",
                "start": 1934,
                "end": 1955,
                "expression": {
                  "type": "CallExpression",
                  "start": 1934,
                  "end": 1954,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1934,
                    "end": 1952,
                    "object": {
                      "type": "Identifier",
                      "start": 1934,
                      "end": 1938,
                      "decorators": [],
                      "name": "bar3",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1939,
                      "end": 1952,
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "directive": null
              }
            ]
          },
          "alternate": null
        }
      ]
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 1983,
      "end": 2125,
      "id": {
        "type": "Identifier",
        "start": 1988,
        "end": 1994,
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 1997,
        "end": 2125,
        "types": [
          {
            "type": "TSTypeLiteral",
            "start": 1997,
            "end": 2059,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2003,
                "end": 2018,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2003,
                  "end": 2007,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2007,
                  "end": 2017,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2009,
                    "end": 2017,
                    "literal": {
                      "type": "Literal",
                      "start": 2009,
                      "end": 2017,
                      "value": "string",
                      "raw": "'string'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 2023,
                "end": 2057,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2023,
                  "end": 2027,
                  "decorators": [],
                  "name": "resp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2027,
                  "end": 2057,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 2029,
                    "end": 2057,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2039,
                        "end": 2051,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2039,
                          "end": 2043,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2043,
                          "end": 2051,
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2045,
                            "end": 2051
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          },
          {
            "type": "TSTypeLiteral",
            "start": 2062,
            "end": 2125,
            "members": [
              {
                "type": "TSPropertySignature",
                "start": 2068,
                "end": 2083,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2068,
                  "end": 2072,
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2072,
                  "end": 2082,
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "start": 2074,
                    "end": 2082,
                    "literal": {
                      "type": "Literal",
                      "start": 2074,
                      "end": 2082,
                      "value": "number",
                      "raw": "'number'"
                    }
                  }
                },
                "accessibility": null,
                "static": false
              },
              {
                "type": "TSPropertySignature",
                "start": 2088,
                "end": 2123,
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "start": 2088,
                  "end": 2092,
                  "decorators": [],
                  "name": "resp",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2092,
                  "end": 2123,
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "start": 2094,
                    "end": 2123,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 2104,
                        "end": 2117,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 2104,
                          "end": 2108,
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 2108,
                          "end": 2116,
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2110,
                            "end": 2116
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                },
                "accessibility": null,
                "static": false
              }
            ]
          }
        ]
      },
      "declare": false
    },
    {
      "type": "BlockStatement",
      "start": 2127,
      "end": 2347,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 2133,
          "end": 2151,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 2137,
              "end": 2150,
              "id": {
                "type": "Identifier",
                "start": 2137,
                "end": 2150,
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2142,
                  "end": 2150,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2144,
                    "end": 2150,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2144,
                      "end": 2150,
                      "decorators": [],
                      "name": "Nested",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "init": null,
              "definite": true
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 2156,
          "end": 2194,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 2162,
              "end": 2193,
              "id": {
                "type": "ObjectPattern",
                "start": 2162,
                "end": 2186,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 2164,
                    "end": 2178,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2164,
                      "end": 2168,
                      "decorators": [],
                      "name": "resp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 2170,
                      "end": 2178,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2172,
                          "end": 2176,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2172,
                            "end": 2176,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 2172,
                            "end": 2176,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2180,
                    "end": 2184,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2180,
                      "end": 2184,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2180,
                      "end": 2184,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 2189,
                "end": 2193,
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "IfStatement",
          "start": 2199,
          "end": 2260,
          "test": {
            "type": "BinaryExpression",
            "start": 2203,
            "end": 2220,
            "left": {
              "type": "Identifier",
              "start": 2203,
              "end": 2207,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 2212,
              "end": 2220,
              "value": "string",
              "raw": "'string'"
            }
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 2222,
            "end": 2260,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 2232,
                "end": 2254,
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "start": 2232,
                  "end": 2253,
                  "expression": {
                    "type": "Identifier",
                    "start": 2232,
                    "end": 2236,
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2247,
                    "end": 2253
                  }
                },
                "directive": null
              }
            ]
          },
          "alternate": null
        },
        {
          "type": "IfStatement",
          "start": 2265,
          "end": 2341,
          "test": {
            "type": "BinaryExpression",
            "start": 2269,
            "end": 2291,
            "left": {
              "type": "MemberExpression",
              "start": 2269,
              "end": 2278,
              "object": {
                "type": "Identifier",
                "start": 2269,
                "end": 2273,
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2274,
                "end": 2278,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 2283,
              "end": 2291,
              "value": "string",
              "raw": "'string'"
            }
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 2293,
            "end": 2341,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 2303,
                "end": 2335,
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "start": 2303,
                  "end": 2334,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2303,
                    "end": 2317,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2303,
                      "end": 2312,
                      "object": {
                        "type": "Identifier",
                        "start": 2303,
                        "end": 2307,
                        "decorators": [],
                        "name": "resp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2308,
                        "end": 2312,
                        "decorators": [],
                        "name": "resp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2313,
                      "end": 2317,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2328,
                    "end": 2334
                  }
                },
                "directive": null
              }
            ]
          },
          "alternate": null
        }
      ]
    },
    {
      "type": "BlockStatement",
      "start": 2349,
      "end": 2589,
      "body": [
        {
          "type": "VariableDeclaration",
          "start": 2359,
          "end": 2377,
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 2363,
              "end": 2376,
              "id": {
                "type": "Identifier",
                "start": 2363,
                "end": 2376,
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 2368,
                  "end": 2376,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 2370,
                    "end": 2376,
                    "typeName": {
                      "type": "Identifier",
                      "start": 2370,
                      "end": 2376,
                      "decorators": [],
                      "name": "Nested",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              },
              "init": null,
              "definite": true
            }
          ],
          "declare": false
        },
        {
          "type": "VariableDeclaration",
          "start": 2382,
          "end": 2431,
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "start": 2388,
              "end": 2430,
              "id": {
                "type": "ObjectPattern",
                "start": 2388,
                "end": 2423,
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "start": 2390,
                    "end": 2415,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2390,
                      "end": 2394,
                      "decorators": [],
                      "name": "resp",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "start": 2396,
                      "end": 2415,
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "start": 2398,
                          "end": 2413,
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "start": 2398,
                            "end": 2402,
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "value": {
                            "type": "Identifier",
                            "start": 2404,
                            "end": 2413,
                            "decorators": [],
                            "name": "dataAlias",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false
                  },
                  {
                    "type": "Property",
                    "start": 2417,
                    "end": 2421,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 2417,
                      "end": 2421,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 2417,
                      "end": 2421,
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
                  }
                ],
                "optional": false,
                "typeAnnotation": null
              },
              "init": {
                "type": "Identifier",
                "start": 2426,
                "end": 2430,
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": null
              },
              "definite": false
            }
          ],
          "declare": false
        },
        {
          "type": "IfStatement",
          "start": 2436,
          "end": 2502,
          "test": {
            "type": "BinaryExpression",
            "start": 2440,
            "end": 2457,
            "left": {
              "type": "Identifier",
              "start": 2440,
              "end": 2444,
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 2449,
              "end": 2457,
              "value": "string",
              "raw": "'string'"
            }
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 2459,
            "end": 2502,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 2469,
                "end": 2496,
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "start": 2469,
                  "end": 2495,
                  "expression": {
                    "type": "Identifier",
                    "start": 2469,
                    "end": 2478,
                    "decorators": [],
                    "name": "dataAlias",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2489,
                    "end": 2495
                  }
                },
                "directive": null
              }
            ]
          },
          "alternate": null
        },
        {
          "type": "IfStatement",
          "start": 2507,
          "end": 2583,
          "test": {
            "type": "BinaryExpression",
            "start": 2511,
            "end": 2533,
            "left": {
              "type": "MemberExpression",
              "start": 2511,
              "end": 2520,
              "object": {
                "type": "Identifier",
                "start": 2511,
                "end": 2515,
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Identifier",
                "start": 2516,
                "end": 2520,
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null
              },
              "optional": false,
              "computed": false
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "start": 2525,
              "end": 2533,
              "value": "string",
              "raw": "'string'"
            }
          },
          "consequent": {
            "type": "BlockStatement",
            "start": 2535,
            "end": 2583,
            "body": [
              {
                "type": "ExpressionStatement",
                "start": 2545,
                "end": 2577,
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "start": 2545,
                  "end": 2576,
                  "expression": {
                    "type": "MemberExpression",
                    "start": 2545,
                    "end": 2559,
                    "object": {
                      "type": "MemberExpression",
                      "start": 2545,
                      "end": 2554,
                      "object": {
                        "type": "Identifier",
                        "start": 2545,
                        "end": 2549,
                        "decorators": [],
                        "name": "resp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2550,
                        "end": 2554,
                        "decorators": [],
                        "name": "resp",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 2555,
                      "end": 2559,
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "optional": false,
                    "computed": false
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2570,
                    "end": 2576
                  }
                },
                "directive": null
              }
            ]
          },
          "alternate": null
        }
      ]
    },
    {
      "type": "FunctionDeclaration",
      "start": 2591,
      "end": 2880,
      "id": {
        "type": "Identifier",
        "start": 2600,
        "end": 2625,
        "decorators": [],
        "name": "bindingPatternInParameter",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "start": 2626,
          "end": 2688,
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "start": 2628,
              "end": 2639,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 2628,
                "end": 2632,
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 2634,
                "end": 2639,
                "decorators": [],
                "name": "data1",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            },
            {
              "type": "Property",
              "start": 2641,
              "end": 2662,
              "kind": "init",
              "key": {
                "type": "Identifier",
                "start": 2641,
                "end": 2650,
                "decorators": [],
                "name": "isSuccess",
                "optional": false,
                "typeAnnotation": null
              },
              "value": {
                "type": "Identifier",
                "start": 2652,
                "end": 2662,
                "decorators": [],
                "name": "isSuccess1",
                "optional": false,
                "typeAnnotation": null
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 2664,
            "end": 2688,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 2666,
              "end": 2688,
              "typeName": {
                "type": "Identifier",
                "start": 2666,
                "end": 2680,
                "decorators": [],
                "name": "UseQueryResult",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 2680,
                "end": 2688,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2681,
                    "end": 2687
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 2690,
        "end": 2880,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 2694,
            "end": 2752,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2700,
                "end": 2751,
                "id": {
                  "type": "ObjectPattern",
                  "start": 2700,
                  "end": 2738,
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "start": 2702,
                      "end": 2713,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2702,
                        "end": 2706,
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2708,
                        "end": 2713,
                        "decorators": [],
                        "name": "data2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    },
                    {
                      "type": "Property",
                      "start": 2715,
                      "end": 2736,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 2715,
                        "end": 2724,
                        "decorators": [],
                        "name": "isSuccess",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Identifier",
                        "start": 2726,
                        "end": 2736,
                        "decorators": [],
                        "name": "isSuccess2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "CallExpression",
                  "start": 2741,
                  "end": 2751,
                  "callee": {
                    "type": "Identifier",
                    "start": 2741,
                    "end": 2749,
                    "decorators": [],
                    "name": "useQuery",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 2756,
            "end": 2800,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 2762,
                "end": 2799,
                "id": {
                  "type": "Identifier",
                  "start": 2762,
                  "end": 2772,
                  "decorators": [],
                  "name": "areSuccess",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 2775,
                  "end": 2799,
                  "left": {
                    "type": "Identifier",
                    "start": 2775,
                    "end": 2785,
                    "decorators": [],
                    "name": "isSuccess1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 2789,
                    "end": 2799,
                    "decorators": [],
                    "name": "isSuccess2",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "IfStatement",
            "start": 2803,
            "end": 2878,
            "test": {
              "type": "Identifier",
              "start": 2807,
              "end": 2817,
              "decorators": [],
              "name": "areSuccess",
              "optional": false,
              "typeAnnotation": null
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 2819,
              "end": 2878,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 2825,
                  "end": 2847,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2825,
                    "end": 2846,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2825,
                      "end": 2844,
                      "object": {
                        "type": "Identifier",
                        "start": 2825,
                        "end": 2830,
                        "decorators": [],
                        "name": "data1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2831,
                        "end": 2844,
                        "decorators": [],
                        "name": "toExponential",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                },
                {
                  "type": "ExpressionStatement",
                  "start": 2852,
                  "end": 2874,
                  "expression": {
                    "type": "CallExpression",
                    "start": 2852,
                    "end": 2873,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 2852,
                      "end": 2871,
                      "object": {
                        "type": "Identifier",
                        "start": 2852,
                        "end": 2857,
                        "decorators": [],
                        "name": "data2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 2858,
                        "end": 2871,
                        "decorators": [],
                        "name": "toExponential",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            },
            "alternate": null
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
