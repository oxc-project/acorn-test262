__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UseQueryResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 20,
              "end": 21
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 20,
            "end": 21
          }
        ],
        "start": 19,
        "end": 22
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isSuccess",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 31,
                  "end": 40
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 42,
                      "end": 47
                    },
                    "start": 42,
                    "end": 47
                  },
                  "start": 40,
                  "end": 47
                },
                "accessibility": null,
                "static": false,
                "start": 31,
                "end": 48
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 53,
                  "end": 57
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUndefinedKeyword",
                    "start": 59,
                    "end": 68
                  },
                  "start": 57,
                  "end": 68
                },
                "accessibility": null,
                "static": false,
                "start": 53,
                "end": 69
              }
            ],
            "start": 25,
            "end": 71
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isSuccess",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 80,
                  "end": 89
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 91,
                      "end": 95
                    },
                    "start": 91,
                    "end": 95
                  },
                  "start": 89,
                  "end": 95
                },
                "accessibility": null,
                "static": false,
                "start": 80,
                "end": 96
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 101,
                  "end": 105
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 107,
                      "end": 108
                    },
                    "typeArguments": null,
                    "start": 107,
                    "end": 108
                  },
                  "start": 105,
                  "end": 108
                },
                "accessibility": null,
                "static": false,
                "start": 101,
                "end": 108
              }
            ],
            "start": 74,
            "end": 110
          }
        ],
        "start": 25,
        "end": 110
      },
      "declare": false,
      "start": 0,
      "end": 111
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "useQuery",
        "optional": false,
        "typeAnnotation": null,
        "start": 122,
        "end": 130
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "UseQueryResult",
            "optional": false,
            "typeAnnotation": null,
            "start": 134,
            "end": 148
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "params": [
              {
                "type": "TSNumberKeyword",
                "start": 149,
                "end": 155
              }
            ],
            "start": 148,
            "end": 156
          },
          "start": 134,
          "end": 156
        },
        "start": 132,
        "end": 156
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isSuccess",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 180,
                    "end": 189
                  },
                  "value": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 191,
                    "end": 196
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 180,
                  "end": 196
                },
                {
                  "type": "Property",
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 206,
                    "end": 210
                  },
                  "value": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "undefined",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 212,
                    "end": 221
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 206,
                  "end": 221
                }
              ],
              "start": 170,
              "end": 228
            },
            "start": 163,
            "end": 229
          }
        ],
        "start": 157,
        "end": 231
      },
      "expression": false,
      "start": 113,
      "end": 231
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 241,
                  "end": 245
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 247,
                  "end": 252
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 241,
                "end": 252
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isSuccess",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 254,
                  "end": 263
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isSuccess1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 265,
                  "end": 275
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 254,
                "end": 275
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 239,
            "end": 277
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useQuery",
              "optional": false,
              "typeAnnotation": null,
              "start": 280,
              "end": 288
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 280,
            "end": 290
          },
          "definite": false,
          "start": 239,
          "end": 290
        }
      ],
      "declare": false,
      "start": 233,
      "end": 291
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 300,
                  "end": 304
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 311
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 300,
                "end": 311
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isSuccess",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 313,
                  "end": 322
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isSuccess2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 324,
                  "end": 334
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 313,
                "end": 334
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 298,
            "end": 336
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useQuery",
              "optional": false,
              "typeAnnotation": null,
              "start": 339,
              "end": 347
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 339,
            "end": 349
          },
          "definite": false,
          "start": 298,
          "end": 349
        }
      ],
      "declare": false,
      "start": 292,
      "end": 350
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ObjectPattern",
            "decorators": [],
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 359,
                  "end": 363
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 365,
                  "end": 370
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 359,
                "end": 370
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isSuccess",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 381
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isSuccess3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 383,
                  "end": 393
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 372,
                "end": 393
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 357,
            "end": 395
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "useQuery",
              "optional": false,
              "typeAnnotation": null,
              "start": 398,
              "end": 406
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 398,
            "end": 408
          },
          "definite": false,
          "start": 357,
          "end": 408
        }
      ],
      "declare": false,
      "start": 351,
      "end": 409
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "LogicalExpression",
        "left": {
          "type": "LogicalExpression",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSuccess1",
            "optional": false,
            "typeAnnotation": null,
            "start": 415,
            "end": 425
          },
          "operator": "&&",
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "isSuccess2",
            "optional": false,
            "typeAnnotation": null,
            "start": 429,
            "end": 439
          },
          "start": 415,
          "end": 439
        },
        "operator": "&&",
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "isSuccess3",
          "optional": false,
          "typeAnnotation": null,
          "start": 443,
          "end": 453
        },
        "start": 415,
        "end": 453
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 461,
                  "end": 466
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 467,
                  "end": 480
                },
                "optional": false,
                "computed": false,
                "start": 461,
                "end": 480
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 461,
              "end": 482
            },
            "directive": null,
            "start": 461,
            "end": 483
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 502,
                  "end": 507
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 508,
                  "end": 521
                },
                "optional": false,
                "computed": false,
                "start": 502,
                "end": 521
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 502,
              "end": 523
            },
            "directive": null,
            "start": 502,
            "end": 524
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 543,
                  "end": 548
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 549,
                  "end": 562
                },
                "optional": false,
                "computed": false,
                "start": 543,
                "end": 562
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 543,
              "end": 564
            },
            "directive": null,
            "start": 543,
            "end": 565
          }
        ],
        "start": 455,
        "end": 581
      },
      "alternate": null,
      "start": 411,
      "end": 581
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "areSuccess",
            "optional": false,
            "typeAnnotation": null,
            "start": 589,
            "end": 599
          },
          "init": {
            "type": "LogicalExpression",
            "left": {
              "type": "LogicalExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "isSuccess1",
                "optional": false,
                "typeAnnotation": null,
                "start": 602,
                "end": 612
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "isSuccess2",
                "optional": false,
                "typeAnnotation": null,
                "start": 616,
                "end": 626
              },
              "start": 602,
              "end": 626
            },
            "operator": "&&",
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "isSuccess3",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 640
            },
            "start": 602,
            "end": 640
          },
          "definite": false,
          "start": 589,
          "end": 640
        }
      ],
      "declare": false,
      "start": 583,
      "end": 641
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "Identifier",
        "decorators": [],
        "name": "areSuccess",
        "optional": false,
        "typeAnnotation": null,
        "start": 646,
        "end": 656
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 664,
                  "end": 669
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 670,
                  "end": 683
                },
                "optional": false,
                "computed": false,
                "start": 664,
                "end": 683
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 664,
              "end": 685
            },
            "directive": null,
            "start": 664,
            "end": 686
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 705,
                  "end": 710
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 711,
                  "end": 724
                },
                "optional": false,
                "computed": false,
                "start": 705,
                "end": 724
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 705,
              "end": 726
            },
            "directive": null,
            "start": 705,
            "end": 727
          },
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "data3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 746,
                  "end": 751
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toExponential",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 752,
                  "end": 765
                },
                "optional": false,
                "computed": false,
                "start": 746,
                "end": 765
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 746,
              "end": 767
            },
            "directive": null,
            "start": 746,
            "end": 768
          }
        ],
        "start": 658,
        "end": 784
      },
      "alternate": null,
      "start": 642,
      "end": 784
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 798,
                      "end": 802
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 804,
                      "end": 809
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 798,
                    "end": 809
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isSuccess",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 811,
                      "end": 820
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isSuccess1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 822,
                      "end": 832
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 811,
                    "end": 832
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 796,
                "end": 834
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 837,
                  "end": 845
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 837,
                "end": 847
              },
              "definite": false,
              "start": 796,
              "end": 847
            }
          ],
          "declare": false,
          "start": 792,
          "end": 848
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 859,
                      "end": 863
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 865,
                      "end": 870
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 859,
                    "end": 870
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isSuccess",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 872,
                      "end": 881
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isSuccess2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 883,
                      "end": 893
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 872,
                    "end": 893
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 857,
                "end": 895
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 898,
                  "end": 906
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 898,
                "end": 908
              },
              "definite": false,
              "start": 857,
              "end": 908
            }
          ],
          "declare": false,
          "start": 853,
          "end": 909
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 922,
                      "end": 926
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 928,
                      "end": 933
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 922,
                    "end": 933
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isSuccess",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 935,
                      "end": 944
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "isSuccess3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 946,
                      "end": 956
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 935,
                    "end": 956
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 920,
                "end": 958
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "useQuery",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 961,
                  "end": 969
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 961,
                "end": 971
              },
              "definite": false,
              "start": 920,
              "end": 971
            }
          ],
          "declare": false,
          "start": 914,
          "end": 972
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "areSuccess",
                "optional": false,
                "typeAnnotation": null,
                "start": 983,
                "end": 993
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isSuccess1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 996,
                    "end": 1006
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isSuccess2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1010,
                    "end": 1020
                  },
                  "start": 996,
                  "end": 1020
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isSuccess3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1024,
                  "end": 1034
                },
                "start": 996,
                "end": 1034
              },
              "definite": false,
              "start": 983,
              "end": 1034
            }
          ],
          "declare": false,
          "start": 977,
          "end": 1035
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "areSuccess",
            "optional": false,
            "typeAnnotation": null,
            "start": 1044,
            "end": 1054
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1066,
                      "end": 1071
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1072,
                      "end": 1085
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1066,
                    "end": 1085
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1066,
                  "end": 1087
                },
                "directive": null,
                "start": 1066,
                "end": 1088
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1114,
                      "end": 1119
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1120,
                      "end": 1133
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1114,
                    "end": 1133
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1114,
                  "end": 1135
                },
                "directive": null,
                "start": 1114,
                "end": 1136
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1162,
                      "end": 1167
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1168,
                      "end": 1181
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1162,
                    "end": 1181
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1162,
                  "end": 1183
                },
                "directive": null,
                "start": 1162,
                "end": 1184
              }
            ],
            "start": 1056,
            "end": 1204
          },
          "alternate": null,
          "start": 1040,
          "end": 1204
        }
      ],
      "start": 786,
      "end": 1206
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "getArrayResult",
        "optional": false,
        "typeAnnotation": null,
        "start": 1225,
        "end": 1239
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSUnionType",
          "types": [
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": true,
                    "raw": "true",
                    "start": 1244,
                    "end": 1248
                  },
                  "start": 1244,
                  "end": 1248
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 1250,
                  "end": 1256
                }
              ],
              "start": 1243,
              "end": 1257
            },
            {
              "type": "TSTupleType",
              "elementTypes": [
                {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": false,
                    "raw": "false",
                    "start": 1261,
                    "end": 1266
                  },
                  "start": 1261,
                  "end": 1266
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 1268,
                  "end": 1277
                }
              ],
              "start": 1260,
              "end": 1278
            }
          ],
          "start": 1243,
          "end": 1278
        },
        "start": 1241,
        "end": 1278
      },
      "body": null,
      "expression": false,
      "start": 1208,
      "end": 1279
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1293,
                    "end": 1297
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1299,
                    "end": 1303
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1292,
                "end": 1304
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1307,
                  "end": 1321
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1307,
                "end": 1323
              },
              "definite": false,
              "start": 1292,
              "end": 1323
            }
          ],
          "declare": false,
          "start": 1286,
          "end": 1324
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1336,
                    "end": 1340
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1342,
                    "end": 1346
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1335,
                "end": 1347
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1350,
                  "end": 1364
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1350,
                "end": 1366
              },
              "definite": false,
              "start": 1335,
              "end": 1366
            }
          ],
          "declare": false,
          "start": 1329,
          "end": 1367
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1379,
                    "end": 1383
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1385,
                    "end": 1389
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1378,
                "end": 1390
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1393,
                  "end": 1407
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1393,
                "end": 1409
              },
              "definite": false,
              "start": 1378,
              "end": 1409
            }
          ],
          "declare": false,
          "start": 1372,
          "end": 1410
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayAllSuccess",
                "optional": false,
                "typeAnnotation": null,
                "start": 1421,
                "end": 1436
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1439,
                    "end": 1443
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1447,
                    "end": 1451
                  },
                  "start": 1439,
                  "end": 1451
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1455,
                  "end": 1459
                },
                "start": 1439,
                "end": 1459
              },
              "definite": false,
              "start": 1421,
              "end": 1459
            }
          ],
          "declare": false,
          "start": 1415,
          "end": 1460
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayAllSuccess",
            "optional": false,
            "typeAnnotation": null,
            "start": 1469,
            "end": 1484
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1496,
                      "end": 1500
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1501,
                      "end": 1514
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1496,
                    "end": 1514
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1496,
                  "end": 1516
                },
                "directive": null,
                "start": 1496,
                "end": 1517
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1540,
                      "end": 1544
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1545,
                      "end": 1558
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1540,
                    "end": 1558
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1540,
                  "end": 1560
                },
                "directive": null,
                "start": 1540,
                "end": 1561
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1584,
                      "end": 1588
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1589,
                      "end": 1602
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1584,
                    "end": 1602
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1584,
                  "end": 1604
                },
                "directive": null,
                "start": 1584,
                "end": 1605
              }
            ],
            "start": 1486,
            "end": 1625
          },
          "alternate": null,
          "start": 1465,
          "end": 1625
        }
      ],
      "start": 1280,
      "end": 1627
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1642,
                    "end": 1646
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1648,
                    "end": 1652
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1641,
                "end": 1653
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1656,
                  "end": 1670
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1656,
                "end": 1672
              },
              "definite": false,
              "start": 1641,
              "end": 1672
            }
          ],
          "declare": false,
          "start": 1635,
          "end": 1673
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1683,
                    "end": 1687
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1689,
                    "end": 1693
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1682,
                "end": 1694
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1697,
                  "end": 1711
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1697,
                "end": 1713
              },
              "definite": false,
              "start": 1682,
              "end": 1713
            }
          ],
          "declare": false,
          "start": 1678,
          "end": 1714
        },
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ArrayPattern",
                "decorators": [],
                "elements": [
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1724,
                    "end": 1728
                  },
                  {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "bar3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1730,
                    "end": 1734
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 1723,
                "end": 1735
              },
              "init": {
                "type": "CallExpression",
                "callee": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "getArrayResult",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1738,
                  "end": 1752
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 1738,
                "end": 1754
              },
              "definite": false,
              "start": 1723,
              "end": 1754
            }
          ],
          "declare": false,
          "start": 1719,
          "end": 1755
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "arrayAllSuccess",
                "optional": false,
                "typeAnnotation": null,
                "start": 1766,
                "end": 1781
              },
              "init": {
                "type": "LogicalExpression",
                "left": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1784,
                    "end": 1788
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "foo2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1792,
                    "end": 1796
                  },
                  "start": 1784,
                  "end": 1796
                },
                "operator": "&&",
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1800,
                  "end": 1804
                },
                "start": 1784,
                "end": 1804
              },
              "definite": false,
              "start": 1766,
              "end": 1804
            }
          ],
          "declare": false,
          "start": 1760,
          "end": 1805
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "Identifier",
            "decorators": [],
            "name": "arrayAllSuccess",
            "optional": false,
            "typeAnnotation": null,
            "start": 1814,
            "end": 1829
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1841,
                      "end": 1845
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1846,
                      "end": 1859
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1841,
                    "end": 1859
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1841,
                  "end": 1861
                },
                "directive": null,
                "start": 1841,
                "end": 1862
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar2",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1886,
                      "end": 1890
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1891,
                      "end": 1904
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1886,
                    "end": 1904
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1886,
                  "end": 1906
                },
                "directive": null,
                "start": 1886,
                "end": 1907
              },
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "bar3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1934,
                      "end": 1938
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "toExponential",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1939,
                      "end": 1952
                    },
                    "optional": false,
                    "computed": false,
                    "start": 1934,
                    "end": 1952
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 1934,
                  "end": 1954
                },
                "directive": null,
                "start": 1934,
                "end": 1955
              }
            ],
            "start": 1831,
            "end": 1979
          },
          "alternate": null,
          "start": 1810,
          "end": 1979
        }
      ],
      "start": 1629,
      "end": 1981
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Nested",
        "optional": false,
        "typeAnnotation": null,
        "start": 1988,
        "end": 1994
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2003,
                  "end": 2007
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "string",
                      "raw": "'string'",
                      "start": 2009,
                      "end": 2017
                    },
                    "start": 2009,
                    "end": 2017
                  },
                  "start": 2007,
                  "end": 2017
                },
                "accessibility": null,
                "static": false,
                "start": 2003,
                "end": 2018
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2023,
                  "end": 2027
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2039,
                          "end": 2043
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 2045,
                            "end": 2051
                          },
                          "start": 2043,
                          "end": 2051
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2039,
                        "end": 2051
                      }
                    ],
                    "start": 2029,
                    "end": 2057
                  },
                  "start": 2027,
                  "end": 2057
                },
                "accessibility": null,
                "static": false,
                "start": 2023,
                "end": 2057
              }
            ],
            "start": 1997,
            "end": 2059
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "type",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2068,
                  "end": 2072
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "number",
                      "raw": "'number'",
                      "start": 2074,
                      "end": 2082
                    },
                    "start": 2074,
                    "end": 2082
                  },
                  "start": 2072,
                  "end": 2082
                },
                "accessibility": null,
                "static": false,
                "start": 2068,
                "end": 2083
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "resp",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2088,
                  "end": 2092
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeLiteral",
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2104,
                          "end": 2108
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 2110,
                            "end": 2116
                          },
                          "start": 2108,
                          "end": 2116
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 2104,
                        "end": 2117
                      }
                    ],
                    "start": 2094,
                    "end": 2123
                  },
                  "start": 2092,
                  "end": 2123
                },
                "accessibility": null,
                "static": false,
                "start": 2088,
                "end": 2123
              }
            ],
            "start": 2062,
            "end": 2125
          }
        ],
        "start": 1997,
        "end": 2125
      },
      "declare": false,
      "start": 1983,
      "end": 2125
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2144,
                      "end": 2150
                    },
                    "typeArguments": null,
                    "start": 2144,
                    "end": 2150
                  },
                  "start": 2142,
                  "end": 2150
                },
                "start": 2137,
                "end": 2150
              },
              "init": null,
              "definite": true,
              "start": 2137,
              "end": 2150
            }
          ],
          "declare": false,
          "start": 2133,
          "end": 2151
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2164,
                      "end": 2168
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2172,
                            "end": 2176
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2172,
                            "end": 2176
                          },
                          "method": false,
                          "shorthand": true,
                          "computed": false,
                          "optional": false,
                          "start": 2172,
                          "end": 2176
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2170,
                      "end": 2178
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2164,
                    "end": 2178
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2180,
                      "end": 2184
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2180,
                      "end": 2184
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2180,
                    "end": 2184
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2162,
                "end": 2186
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": null,
                "start": 2189,
                "end": 2193
              },
              "definite": false,
              "start": 2162,
              "end": 2193
            }
          ],
          "declare": false,
          "start": 2156,
          "end": 2194
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2203,
              "end": 2207
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 2212,
              "end": 2220
            },
            "start": 2203,
            "end": 2220
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "data",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2232,
                    "end": 2236
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2247,
                    "end": 2253
                  },
                  "start": 2232,
                  "end": 2253
                },
                "directive": null,
                "start": 2232,
                "end": 2254
              }
            ],
            "start": 2222,
            "end": 2260
          },
          "alternate": null,
          "start": 2199,
          "end": 2260
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": null,
                "start": 2269,
                "end": 2273
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 2274,
                "end": 2278
              },
              "optional": false,
              "computed": false,
              "start": 2269,
              "end": 2278
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 2283,
              "end": 2291
            },
            "start": 2269,
            "end": 2291
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2303,
                        "end": 2307
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2308,
                        "end": 2312
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2303,
                      "end": 2312
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2313,
                      "end": 2317
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2303,
                    "end": 2317
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2328,
                    "end": 2334
                  },
                  "start": 2303,
                  "end": 2334
                },
                "directive": null,
                "start": 2303,
                "end": 2335
              }
            ],
            "start": 2293,
            "end": 2341
          },
          "alternate": null,
          "start": 2265,
          "end": 2341
        }
      ],
      "start": 2127,
      "end": 2347
    },
    {
      "type": "BlockStatement",
      "body": [
        {
          "type": "VariableDeclaration",
          "kind": "let",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Nested",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2370,
                      "end": 2376
                    },
                    "typeArguments": null,
                    "start": 2370,
                    "end": 2376
                  },
                  "start": 2368,
                  "end": 2376
                },
                "start": 2363,
                "end": 2376
              },
              "init": null,
              "definite": true,
              "start": 2363,
              "end": 2376
            }
          ],
          "declare": false,
          "start": 2359,
          "end": 2377
        },
        {
          "type": "VariableDeclaration",
          "kind": "const",
          "declarations": [
            {
              "type": "VariableDeclarator",
              "id": {
                "type": "ObjectPattern",
                "decorators": [],
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "resp",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2390,
                      "end": 2394
                    },
                    "value": {
                      "type": "ObjectPattern",
                      "decorators": [],
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2398,
                            "end": 2402
                          },
                          "value": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "dataAlias",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2404,
                            "end": 2413
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2398,
                          "end": 2413
                        }
                      ],
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2396,
                      "end": 2415
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2390,
                    "end": 2415
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2417,
                      "end": 2421
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2417,
                      "end": 2421
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 2417,
                    "end": 2421
                  }
                ],
                "optional": false,
                "typeAnnotation": null,
                "start": 2388,
                "end": 2423
              },
              "init": {
                "type": "Identifier",
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": null,
                "start": 2426,
                "end": 2430
              },
              "definite": false,
              "start": 2388,
              "end": 2430
            }
          ],
          "declare": false,
          "start": 2382,
          "end": 2431
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "Identifier",
              "decorators": [],
              "name": "type",
              "optional": false,
              "typeAnnotation": null,
              "start": 2440,
              "end": 2444
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 2449,
              "end": 2457
            },
            "start": 2440,
            "end": 2457
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dataAlias",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2469,
                    "end": 2478
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2489,
                    "end": 2495
                  },
                  "start": 2469,
                  "end": 2495
                },
                "directive": null,
                "start": 2469,
                "end": 2496
              }
            ],
            "start": 2459,
            "end": 2502
          },
          "alternate": null,
          "start": 2436,
          "end": 2502
        },
        {
          "type": "IfStatement",
          "test": {
            "type": "BinaryExpression",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "resp",
                "optional": false,
                "typeAnnotation": null,
                "start": 2511,
                "end": 2515
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "type",
                "optional": false,
                "typeAnnotation": null,
                "start": 2516,
                "end": 2520
              },
              "optional": false,
              "computed": false,
              "start": 2511,
              "end": 2520
            },
            "operator": "===",
            "right": {
              "type": "Literal",
              "value": "string",
              "raw": "'string'",
              "start": 2525,
              "end": 2533
            },
            "start": 2511,
            "end": 2533
          },
          "consequent": {
            "type": "BlockStatement",
            "body": [
              {
                "type": "ExpressionStatement",
                "expression": {
                  "type": "TSSatisfiesExpression",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2545,
                        "end": 2549
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "resp",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2550,
                        "end": 2554
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2545,
                      "end": 2554
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2555,
                      "end": 2559
                    },
                    "optional": false,
                    "computed": false,
                    "start": 2545,
                    "end": 2559
                  },
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 2570,
                    "end": 2576
                  },
                  "start": 2545,
                  "end": 2576
                },
                "directive": null,
                "start": 2545,
                "end": 2577
              }
            ],
            "start": 2535,
            "end": 2583
          },
          "alternate": null,
          "start": 2507,
          "end": 2583
        }
      ],
      "start": 2349,
      "end": 2589
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "bindingPatternInParameter",
        "optional": false,
        "typeAnnotation": null,
        "start": 2600,
        "end": 2625
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ObjectPattern",
          "decorators": [],
          "properties": [
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 2628,
                "end": 2632
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "data1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2634,
                "end": 2639
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 2628,
              "end": 2639
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isSuccess",
                "optional": false,
                "typeAnnotation": null,
                "start": 2641,
                "end": 2650
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "isSuccess1",
                "optional": false,
                "typeAnnotation": null,
                "start": 2652,
                "end": 2662
              },
              "method": false,
              "shorthand": false,
              "computed": false,
              "optional": false,
              "start": 2641,
              "end": 2662
            }
          ],
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "UseQueryResult",
                "optional": false,
                "typeAnnotation": null,
                "start": 2666,
                "end": 2680
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 2681,
                    "end": 2687
                  }
                ],
                "start": 2680,
                "end": 2688
              },
              "start": 2666,
              "end": 2688
            },
            "start": 2664,
            "end": 2688
          },
          "start": 2626,
          "end": 2688
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ObjectPattern",
                  "decorators": [],
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2702,
                        "end": 2706
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2708,
                        "end": 2713
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2702,
                      "end": 2713
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isSuccess",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2715,
                        "end": 2724
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "isSuccess2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2726,
                        "end": 2736
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 2715,
                      "end": 2736
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2700,
                  "end": 2738
                },
                "init": {
                  "type": "CallExpression",
                  "callee": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "useQuery",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2741,
                    "end": 2749
                  },
                  "typeArguments": null,
                  "arguments": [],
                  "optional": false,
                  "start": 2741,
                  "end": 2751
                },
                "definite": false,
                "start": 2700,
                "end": 2751
              }
            ],
            "declare": false,
            "start": 2694,
            "end": 2752
          },
          {
            "type": "VariableDeclaration",
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "areSuccess",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2762,
                  "end": 2772
                },
                "init": {
                  "type": "LogicalExpression",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isSuccess1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2775,
                    "end": 2785
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isSuccess2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2789,
                    "end": 2799
                  },
                  "start": 2775,
                  "end": 2799
                },
                "definite": false,
                "start": 2762,
                "end": 2799
              }
            ],
            "declare": false,
            "start": 2756,
            "end": 2800
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "areSuccess",
              "optional": false,
              "typeAnnotation": null,
              "start": 2807,
              "end": 2817
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data1",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2825,
                        "end": 2830
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toExponential",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2831,
                        "end": 2844
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2825,
                      "end": 2844
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2825,
                    "end": 2846
                  },
                  "directive": null,
                  "start": 2825,
                  "end": 2847
                },
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "data2",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2852,
                        "end": 2857
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toExponential",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2858,
                        "end": 2871
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2852,
                      "end": 2871
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2852,
                    "end": 2873
                  },
                  "directive": null,
                  "start": 2852,
                  "end": 2874
                }
              ],
              "start": 2819,
              "end": 2878
            },
            "alternate": null,
            "start": 2803,
            "end": 2878
          }
        ],
        "start": 2690,
        "end": 2880
      },
      "expression": false,
      "start": 2591,
      "end": 2880
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2880
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4,
    "range": [
      0,
      4
    ]
  },
  {
    "type": "Identifier",
    "value": "UseQueryResult",
    "start": 5,
    "end": 19,
    "range": [
      5,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 19,
    "end": 20,
    "range": [
      19,
      20
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 21,
    "end": 22,
    "range": [
      21,
      22
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 23,
    "end": 24,
    "range": [
      23,
      24
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 25,
    "end": 26,
    "range": [
      25,
      26
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 31,
    "end": 40,
    "range": [
      31,
      40
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 40,
    "end": 41,
    "range": [
      40,
      41
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 42,
    "end": 47,
    "range": [
      42,
      47
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 47,
    "end": 48,
    "range": [
      47,
      48
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 53,
    "end": 57,
    "range": [
      53,
      57
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 59,
    "end": 68,
    "range": [
      59,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 70,
    "end": 71,
    "range": [
      70,
      71
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 72,
    "end": 73,
    "range": [
      72,
      73
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 74,
    "end": 75,
    "range": [
      74,
      75
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 80,
    "end": 89,
    "range": [
      80,
      89
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 89,
    "end": 90,
    "range": [
      89,
      90
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 91,
    "end": 95,
    "range": [
      91,
      95
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 95,
    "end": 96,
    "range": [
      95,
      96
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 101,
    "end": 105,
    "range": [
      101,
      105
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 105,
    "end": 106,
    "range": [
      105,
      106
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 107,
    "end": 108,
    "range": [
      107,
      108
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 110,
    "end": 111,
    "range": [
      110,
      111
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 113,
    "end": 121,
    "range": [
      113,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 122,
    "end": 130,
    "range": [
      122,
      130
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 131,
    "end": 132,
    "range": [
      131,
      132
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 132,
    "end": 133,
    "range": [
      132,
      133
    ]
  },
  {
    "type": "Identifier",
    "value": "UseQueryResult",
    "start": 134,
    "end": 148,
    "range": [
      134,
      148
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 148,
    "end": 149,
    "range": [
      148,
      149
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 149,
    "end": 155,
    "range": [
      149,
      155
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 155,
    "end": 156,
    "range": [
      155,
      156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 157,
    "end": 158,
    "range": [
      157,
      158
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 163,
    "end": 169,
    "range": [
      163,
      169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 170,
    "end": 171,
    "range": [
      170,
      171
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 180,
    "end": 189,
    "range": [
      180,
      189
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 189,
    "end": 190,
    "range": [
      189,
      190
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 191,
    "end": 196,
    "range": [
      191,
      196
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 206,
    "end": 210,
    "range": [
      206,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 210,
    "end": 211,
    "range": [
      210,
      211
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 212,
    "end": 221,
    "range": [
      212,
      221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 221,
    "end": 222,
    "range": [
      221,
      222
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 227,
    "end": 228,
    "range": [
      227,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 230,
    "end": 231,
    "range": [
      230,
      231
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 233,
    "end": 238,
    "range": [
      233,
      238
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 239,
    "end": 240,
    "range": [
      239,
      240
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 241,
    "end": 245,
    "range": [
      241,
      245
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246,
    "range": [
      245,
      246
    ]
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 247,
    "end": 252,
    "range": [
      247,
      252
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 252,
    "end": 253,
    "range": [
      252,
      253
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 254,
    "end": 263,
    "range": [
      254,
      263
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264,
    "range": [
      263,
      264
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess1",
    "start": 265,
    "end": 275,
    "range": [
      265,
      275
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277,
    "range": [
      276,
      277
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 278,
    "end": 279,
    "range": [
      278,
      279
    ]
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 280,
    "end": 288,
    "range": [
      280,
      288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 288,
    "end": 289,
    "range": [
      288,
      289
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 289,
    "end": 290,
    "range": [
      289,
      290
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291,
    "range": [
      290,
      291
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 292,
    "end": 297,
    "range": [
      292,
      297
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299,
    "range": [
      298,
      299
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 300,
    "end": 304,
    "range": [
      300,
      304
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 304,
    "end": 305,
    "range": [
      304,
      305
    ]
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 306,
    "end": 311,
    "range": [
      306,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 311,
    "end": 312,
    "range": [
      311,
      312
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 313,
    "end": 322,
    "range": [
      313,
      322
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 322,
    "end": 323,
    "range": [
      322,
      323
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess2",
    "start": 324,
    "end": 334,
    "range": [
      324,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 335,
    "end": 336,
    "range": [
      335,
      336
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 337,
    "end": 338,
    "range": [
      337,
      338
    ]
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 339,
    "end": 347,
    "range": [
      339,
      347
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 347,
    "end": 348,
    "range": [
      347,
      348
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349,
    "range": [
      348,
      349
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 349,
    "end": 350,
    "range": [
      349,
      350
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 351,
    "end": 356,
    "range": [
      351,
      356
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 357,
    "end": 358,
    "range": [
      357,
      358
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 359,
    "end": 363,
    "range": [
      359,
      363
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 363,
    "end": 364,
    "range": [
      363,
      364
    ]
  },
  {
    "type": "Identifier",
    "value": "data3",
    "start": 365,
    "end": 370,
    "range": [
      365,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 372,
    "end": 381,
    "range": [
      372,
      381
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 381,
    "end": 382,
    "range": [
      381,
      382
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess3",
    "start": 383,
    "end": 393,
    "range": [
      383,
      393
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 394,
    "end": 395,
    "range": [
      394,
      395
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 396,
    "end": 397,
    "range": [
      396,
      397
    ]
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 398,
    "end": 406,
    "range": [
      398,
      406
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 406,
    "end": 407,
    "range": [
      406,
      407
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 407,
    "end": 408,
    "range": [
      407,
      408
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409,
    "range": [
      408,
      409
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 411,
    "end": 413,
    "range": [
      411,
      413
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 414,
    "end": 415,
    "range": [
      414,
      415
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess1",
    "start": 415,
    "end": 425,
    "range": [
      415,
      425
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 426,
    "end": 428,
    "range": [
      426,
      428
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess2",
    "start": 429,
    "end": 439,
    "range": [
      429,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 440,
    "end": 442,
    "range": [
      440,
      442
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess3",
    "start": 443,
    "end": 453,
    "range": [
      443,
      453
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 453,
    "end": 454,
    "range": [
      453,
      454
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 461,
    "end": 466,
    "range": [
      461,
      466
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 466,
    "end": 467,
    "range": [
      466,
      467
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 467,
    "end": 480,
    "range": [
      467,
      480
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 480,
    "end": 481,
    "range": [
      480,
      481
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 481,
    "end": 482,
    "range": [
      481,
      482
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 482,
    "end": 483,
    "range": [
      482,
      483
    ]
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 502,
    "end": 507,
    "range": [
      502,
      507
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 507,
    "end": 508,
    "range": [
      507,
      508
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 508,
    "end": 521,
    "range": [
      508,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 522,
    "end": 523,
    "range": [
      522,
      523
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 523,
    "end": 524,
    "range": [
      523,
      524
    ]
  },
  {
    "type": "Identifier",
    "value": "data3",
    "start": 543,
    "end": 548,
    "range": [
      543,
      548
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 548,
    "end": 549,
    "range": [
      548,
      549
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 549,
    "end": 562,
    "range": [
      549,
      562
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 562,
    "end": 563,
    "range": [
      562,
      563
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 563,
    "end": 564,
    "range": [
      563,
      564
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 564,
    "end": 565,
    "range": [
      564,
      565
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 580,
    "end": 581,
    "range": [
      580,
      581
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 583,
    "end": 588,
    "range": [
      583,
      588
    ]
  },
  {
    "type": "Identifier",
    "value": "areSuccess",
    "start": 589,
    "end": 599,
    "range": [
      589,
      599
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 600,
    "end": 601,
    "range": [
      600,
      601
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess1",
    "start": 602,
    "end": 612,
    "range": [
      602,
      612
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 613,
    "end": 615,
    "range": [
      613,
      615
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess2",
    "start": 616,
    "end": 626,
    "range": [
      616,
      626
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 627,
    "end": 629,
    "range": [
      627,
      629
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess3",
    "start": 630,
    "end": 640,
    "range": [
      630,
      640
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 640,
    "end": 641,
    "range": [
      640,
      641
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 642,
    "end": 644,
    "range": [
      642,
      644
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 645,
    "end": 646,
    "range": [
      645,
      646
    ]
  },
  {
    "type": "Identifier",
    "value": "areSuccess",
    "start": 646,
    "end": 656,
    "range": [
      646,
      656
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 656,
    "end": 657,
    "range": [
      656,
      657
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 658,
    "end": 659,
    "range": [
      658,
      659
    ]
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 664,
    "end": 669,
    "range": [
      664,
      669
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 669,
    "end": 670,
    "range": [
      669,
      670
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 670,
    "end": 683,
    "range": [
      670,
      683
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 683,
    "end": 684,
    "range": [
      683,
      684
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 684,
    "end": 685,
    "range": [
      684,
      685
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 685,
    "end": 686,
    "range": [
      685,
      686
    ]
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 705,
    "end": 710,
    "range": [
      705,
      710
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 710,
    "end": 711,
    "range": [
      710,
      711
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 711,
    "end": 724,
    "range": [
      711,
      724
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 724,
    "end": 725,
    "range": [
      724,
      725
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 725,
    "end": 726,
    "range": [
      725,
      726
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 726,
    "end": 727,
    "range": [
      726,
      727
    ]
  },
  {
    "type": "Identifier",
    "value": "data3",
    "start": 746,
    "end": 751,
    "range": [
      746,
      751
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 751,
    "end": 752,
    "range": [
      751,
      752
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 752,
    "end": 765,
    "range": [
      752,
      765
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 767,
    "end": 768,
    "range": [
      767,
      768
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 783,
    "end": 784,
    "range": [
      783,
      784
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 786,
    "end": 787,
    "range": [
      786,
      787
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 792,
    "end": 795,
    "range": [
      792,
      795
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 796,
    "end": 797,
    "range": [
      796,
      797
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 798,
    "end": 802,
    "range": [
      798,
      802
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 802,
    "end": 803,
    "range": [
      802,
      803
    ]
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 804,
    "end": 809,
    "range": [
      804,
      809
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 809,
    "end": 810,
    "range": [
      809,
      810
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 811,
    "end": 820,
    "range": [
      811,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess1",
    "start": 822,
    "end": 832,
    "range": [
      822,
      832
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 833,
    "end": 834,
    "range": [
      833,
      834
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 835,
    "end": 836,
    "range": [
      835,
      836
    ]
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 837,
    "end": 845,
    "range": [
      837,
      845
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 845,
    "end": 846,
    "range": [
      845,
      846
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 846,
    "end": 847,
    "range": [
      846,
      847
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 847,
    "end": 848,
    "range": [
      847,
      848
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 853,
    "end": 856,
    "range": [
      853,
      856
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 857,
    "end": 858,
    "range": [
      857,
      858
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 859,
    "end": 863,
    "range": [
      859,
      863
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 863,
    "end": 864,
    "range": [
      863,
      864
    ]
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 865,
    "end": 870,
    "range": [
      865,
      870
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 870,
    "end": 871,
    "range": [
      870,
      871
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 872,
    "end": 881,
    "range": [
      872,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess2",
    "start": 883,
    "end": 893,
    "range": [
      883,
      893
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 894,
    "end": 895,
    "range": [
      894,
      895
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897,
    "range": [
      896,
      897
    ]
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 898,
    "end": 906,
    "range": [
      898,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 908,
    "end": 909,
    "range": [
      908,
      909
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 914,
    "end": 919,
    "range": [
      914,
      919
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 920,
    "end": 921,
    "range": [
      920,
      921
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 922,
    "end": 926,
    "range": [
      922,
      926
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 926,
    "end": 927,
    "range": [
      926,
      927
    ]
  },
  {
    "type": "Identifier",
    "value": "data3",
    "start": 928,
    "end": 933,
    "range": [
      928,
      933
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 933,
    "end": 934,
    "range": [
      933,
      934
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 935,
    "end": 944,
    "range": [
      935,
      944
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 944,
    "end": 945,
    "range": [
      944,
      945
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess3",
    "start": 946,
    "end": 956,
    "range": [
      946,
      956
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 957,
    "end": 958,
    "range": [
      957,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 961,
    "end": 969,
    "range": [
      961,
      969
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 969,
    "end": 970,
    "range": [
      969,
      970
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 970,
    "end": 971,
    "range": [
      970,
      971
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 971,
    "end": 972,
    "range": [
      971,
      972
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 977,
    "end": 982,
    "range": [
      977,
      982
    ]
  },
  {
    "type": "Identifier",
    "value": "areSuccess",
    "start": 983,
    "end": 993,
    "range": [
      983,
      993
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 994,
    "end": 995,
    "range": [
      994,
      995
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess1",
    "start": 996,
    "end": 1006,
    "range": [
      996,
      1006
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1007,
    "end": 1009,
    "range": [
      1007,
      1009
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess2",
    "start": 1010,
    "end": 1020,
    "range": [
      1010,
      1020
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1021,
    "end": 1023,
    "range": [
      1021,
      1023
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess3",
    "start": 1024,
    "end": 1034,
    "range": [
      1024,
      1034
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1034,
    "end": 1035,
    "range": [
      1034,
      1035
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1040,
    "end": 1042,
    "range": [
      1040,
      1042
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Identifier",
    "value": "areSuccess",
    "start": 1044,
    "end": 1054,
    "range": [
      1044,
      1054
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1054,
    "end": 1055,
    "range": [
      1054,
      1055
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1056,
    "end": 1057,
    "range": [
      1056,
      1057
    ]
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 1066,
    "end": 1071,
    "range": [
      1066,
      1071
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1071,
    "end": 1072,
    "range": [
      1071,
      1072
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1072,
    "end": 1085,
    "range": [
      1072,
      1085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1085,
    "end": 1086,
    "range": [
      1085,
      1086
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1086,
    "end": 1087,
    "range": [
      1086,
      1087
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1087,
    "end": 1088,
    "range": [
      1087,
      1088
    ]
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 1114,
    "end": 1119,
    "range": [
      1114,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1120,
    "end": 1133,
    "range": [
      1120,
      1133
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1133,
    "end": 1134,
    "range": [
      1133,
      1134
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1134,
    "end": 1135,
    "range": [
      1134,
      1135
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1135,
    "end": 1136,
    "range": [
      1135,
      1136
    ]
  },
  {
    "type": "Identifier",
    "value": "data3",
    "start": 1162,
    "end": 1167,
    "range": [
      1162,
      1167
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1167,
    "end": 1168,
    "range": [
      1167,
      1168
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1168,
    "end": 1181,
    "range": [
      1168,
      1181
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1181,
    "end": 1182,
    "range": [
      1181,
      1182
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1182,
    "end": 1183,
    "range": [
      1182,
      1183
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184,
    "range": [
      1183,
      1184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1203,
    "end": 1204,
    "range": [
      1203,
      1204
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1205,
    "end": 1206,
    "range": [
      1205,
      1206
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 1208,
    "end": 1215,
    "range": [
      1208,
      1215
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1216,
    "end": 1224,
    "range": [
      1216,
      1224
    ]
  },
  {
    "type": "Identifier",
    "value": "getArrayResult",
    "start": 1225,
    "end": 1239,
    "range": [
      1225,
      1239
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1239,
    "end": 1240,
    "range": [
      1239,
      1240
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1240,
    "end": 1241,
    "range": [
      1240,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 1244,
    "end": 1248,
    "range": [
      1244,
      1248
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1248,
    "end": 1249,
    "range": [
      1248,
      1249
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1250,
    "end": 1256,
    "range": [
      1250,
      1256
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1256,
    "end": 1257,
    "range": [
      1256,
      1257
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1258,
    "end": 1259,
    "range": [
      1258,
      1259
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 1261,
    "end": 1266,
    "range": [
      1261,
      1266
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1266,
    "end": 1267,
    "range": [
      1266,
      1267
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1268,
    "end": 1277,
    "range": [
      1268,
      1277
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1277,
    "end": 1278,
    "range": [
      1277,
      1278
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1278,
    "end": 1279,
    "range": [
      1278,
      1279
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1280,
    "end": 1281,
    "range": [
      1280,
      1281
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1286,
    "end": 1291,
    "range": [
      1286,
      1291
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1292,
    "end": 1293,
    "range": [
      1292,
      1293
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1293,
    "end": 1297,
    "range": [
      1293,
      1297
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1297,
    "end": 1298,
    "range": [
      1297,
      1298
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1299,
    "end": 1303,
    "range": [
      1299,
      1303
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1303,
    "end": 1304,
    "range": [
      1303,
      1304
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1305,
    "end": 1306,
    "range": [
      1305,
      1306
    ]
  },
  {
    "type": "Identifier",
    "value": "getArrayResult",
    "start": 1307,
    "end": 1321,
    "range": [
      1307,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1322,
    "end": 1323,
    "range": [
      1322,
      1323
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1323,
    "end": 1324,
    "range": [
      1323,
      1324
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1329,
    "end": 1334,
    "range": [
      1329,
      1334
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1335,
    "end": 1336,
    "range": [
      1335,
      1336
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1336,
    "end": 1340,
    "range": [
      1336,
      1340
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1340,
    "end": 1341,
    "range": [
      1340,
      1341
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1342,
    "end": 1346,
    "range": [
      1342,
      1346
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1346,
    "end": 1347,
    "range": [
      1346,
      1347
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1348,
    "end": 1349,
    "range": [
      1348,
      1349
    ]
  },
  {
    "type": "Identifier",
    "value": "getArrayResult",
    "start": 1350,
    "end": 1364,
    "range": [
      1350,
      1364
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365,
    "range": [
      1364,
      1365
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1365,
    "end": 1366,
    "range": [
      1365,
      1366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1366,
    "end": 1367,
    "range": [
      1366,
      1367
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1372,
    "end": 1377,
    "range": [
      1372,
      1377
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1378,
    "end": 1379,
    "range": [
      1378,
      1379
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1379,
    "end": 1383,
    "range": [
      1379,
      1383
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1383,
    "end": 1384,
    "range": [
      1383,
      1384
    ]
  },
  {
    "type": "Identifier",
    "value": "bar3",
    "start": 1385,
    "end": 1389,
    "range": [
      1385,
      1389
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1389,
    "end": 1390,
    "range": [
      1389,
      1390
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1391,
    "end": 1392,
    "range": [
      1391,
      1392
    ]
  },
  {
    "type": "Identifier",
    "value": "getArrayResult",
    "start": 1393,
    "end": 1407,
    "range": [
      1393,
      1407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1407,
    "end": 1408,
    "range": [
      1407,
      1408
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1408,
    "end": 1409,
    "range": [
      1408,
      1409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1409,
    "end": 1410,
    "range": [
      1409,
      1410
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1415,
    "end": 1420,
    "range": [
      1415,
      1420
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayAllSuccess",
    "start": 1421,
    "end": 1436,
    "range": [
      1421,
      1436
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1437,
    "end": 1438,
    "range": [
      1437,
      1438
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1439,
    "end": 1443,
    "range": [
      1439,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1444,
    "end": 1446,
    "range": [
      1444,
      1446
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1447,
    "end": 1451,
    "range": [
      1447,
      1451
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1452,
    "end": 1454,
    "range": [
      1452,
      1454
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1455,
    "end": 1459,
    "range": [
      1455,
      1459
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1459,
    "end": 1460,
    "range": [
      1459,
      1460
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1465,
    "end": 1467,
    "range": [
      1465,
      1467
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1468,
    "end": 1469,
    "range": [
      1468,
      1469
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayAllSuccess",
    "start": 1469,
    "end": 1484,
    "range": [
      1469,
      1484
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1484,
    "end": 1485,
    "range": [
      1484,
      1485
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1486,
    "end": 1487,
    "range": [
      1486,
      1487
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1496,
    "end": 1500,
    "range": [
      1496,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1501,
    "end": 1514,
    "range": [
      1501,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1514,
    "end": 1515,
    "range": [
      1514,
      1515
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1516,
    "end": 1517,
    "range": [
      1516,
      1517
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1540,
    "end": 1544,
    "range": [
      1540,
      1544
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1544,
    "end": 1545,
    "range": [
      1544,
      1545
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1545,
    "end": 1558,
    "range": [
      1545,
      1558
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1558,
    "end": 1559,
    "range": [
      1558,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Identifier",
    "value": "bar3",
    "start": 1584,
    "end": 1588,
    "range": [
      1584,
      1588
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1588,
    "end": 1589,
    "range": [
      1588,
      1589
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1589,
    "end": 1602,
    "range": [
      1589,
      1602
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1602,
    "end": 1603,
    "range": [
      1602,
      1603
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1603,
    "end": 1604,
    "range": [
      1603,
      1604
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1604,
    "end": 1605,
    "range": [
      1604,
      1605
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1624,
    "end": 1625,
    "range": [
      1624,
      1625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1626,
    "end": 1627,
    "range": [
      1626,
      1627
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1629,
    "end": 1630,
    "range": [
      1629,
      1630
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1635,
    "end": 1640,
    "range": [
      1635,
      1640
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1641,
    "end": 1642,
    "range": [
      1641,
      1642
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1642,
    "end": 1646,
    "range": [
      1642,
      1646
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1646,
    "end": 1647,
    "range": [
      1646,
      1647
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1648,
    "end": 1652,
    "range": [
      1648,
      1652
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1654,
    "end": 1655,
    "range": [
      1654,
      1655
    ]
  },
  {
    "type": "Identifier",
    "value": "getArrayResult",
    "start": 1656,
    "end": 1670,
    "range": [
      1656,
      1670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1670,
    "end": 1671,
    "range": [
      1670,
      1671
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1671,
    "end": 1672,
    "range": [
      1671,
      1672
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1672,
    "end": 1673,
    "range": [
      1672,
      1673
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1678,
    "end": 1681,
    "range": [
      1678,
      1681
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1682,
    "end": 1683,
    "range": [
      1682,
      1683
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1683,
    "end": 1687,
    "range": [
      1683,
      1687
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1687,
    "end": 1688,
    "range": [
      1687,
      1688
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1689,
    "end": 1693,
    "range": [
      1689,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1693,
    "end": 1694,
    "range": [
      1693,
      1694
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1695,
    "end": 1696,
    "range": [
      1695,
      1696
    ]
  },
  {
    "type": "Identifier",
    "value": "getArrayResult",
    "start": 1697,
    "end": 1711,
    "range": [
      1697,
      1711
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1712,
    "end": 1713,
    "range": [
      1712,
      1713
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1713,
    "end": 1714,
    "range": [
      1713,
      1714
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 1719,
    "end": 1722,
    "range": [
      1719,
      1722
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1723,
    "end": 1724,
    "range": [
      1723,
      1724
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1724,
    "end": 1728,
    "range": [
      1724,
      1728
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1728,
    "end": 1729,
    "range": [
      1728,
      1729
    ]
  },
  {
    "type": "Identifier",
    "value": "bar3",
    "start": 1730,
    "end": 1734,
    "range": [
      1730,
      1734
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1734,
    "end": 1735,
    "range": [
      1734,
      1735
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1736,
    "end": 1737,
    "range": [
      1736,
      1737
    ]
  },
  {
    "type": "Identifier",
    "value": "getArrayResult",
    "start": 1738,
    "end": 1752,
    "range": [
      1738,
      1752
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1752,
    "end": 1753,
    "range": [
      1752,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1754,
    "end": 1755,
    "range": [
      1754,
      1755
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1760,
    "end": 1765,
    "range": [
      1760,
      1765
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayAllSuccess",
    "start": 1766,
    "end": 1781,
    "range": [
      1766,
      1781
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1782,
    "end": 1783,
    "range": [
      1782,
      1783
    ]
  },
  {
    "type": "Identifier",
    "value": "foo1",
    "start": 1784,
    "end": 1788,
    "range": [
      1784,
      1788
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1789,
    "end": 1791,
    "range": [
      1789,
      1791
    ]
  },
  {
    "type": "Identifier",
    "value": "foo2",
    "start": 1792,
    "end": 1796,
    "range": [
      1792,
      1796
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 1797,
    "end": 1799,
    "range": [
      1797,
      1799
    ]
  },
  {
    "type": "Identifier",
    "value": "foo3",
    "start": 1800,
    "end": 1804,
    "range": [
      1800,
      1804
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1804,
    "end": 1805,
    "range": [
      1804,
      1805
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1810,
    "end": 1812,
    "range": [
      1810,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1813,
    "end": 1814,
    "range": [
      1813,
      1814
    ]
  },
  {
    "type": "Identifier",
    "value": "arrayAllSuccess",
    "start": 1814,
    "end": 1829,
    "range": [
      1814,
      1829
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1829,
    "end": 1830,
    "range": [
      1829,
      1830
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1831,
    "end": 1832,
    "range": [
      1831,
      1832
    ]
  },
  {
    "type": "Identifier",
    "value": "bar1",
    "start": 1841,
    "end": 1845,
    "range": [
      1841,
      1845
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1845,
    "end": 1846,
    "range": [
      1845,
      1846
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1846,
    "end": 1859,
    "range": [
      1846,
      1859
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1859,
    "end": 1860,
    "range": [
      1859,
      1860
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1860,
    "end": 1861,
    "range": [
      1860,
      1861
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1861,
    "end": 1862,
    "range": [
      1861,
      1862
    ]
  },
  {
    "type": "Identifier",
    "value": "bar2",
    "start": 1886,
    "end": 1890,
    "range": [
      1886,
      1890
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1890,
    "end": 1891,
    "range": [
      1890,
      1891
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1891,
    "end": 1904,
    "range": [
      1891,
      1904
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1904,
    "end": 1905,
    "range": [
      1904,
      1905
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1905,
    "end": 1906,
    "range": [
      1905,
      1906
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1906,
    "end": 1907,
    "range": [
      1906,
      1907
    ]
  },
  {
    "type": "Identifier",
    "value": "bar3",
    "start": 1934,
    "end": 1938,
    "range": [
      1934,
      1938
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1938,
    "end": 1939,
    "range": [
      1938,
      1939
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 1939,
    "end": 1952,
    "range": [
      1939,
      1952
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1952,
    "end": 1953,
    "range": [
      1952,
      1953
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1953,
    "end": 1954,
    "range": [
      1953,
      1954
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1954,
    "end": 1955,
    "range": [
      1954,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1978,
    "end": 1979,
    "range": [
      1978,
      1979
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1980,
    "end": 1981,
    "range": [
      1980,
      1981
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1983,
    "end": 1987,
    "range": [
      1983,
      1987
    ]
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 1988,
    "end": 1994,
    "range": [
      1988,
      1994
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1995,
    "end": 1996,
    "range": [
      1995,
      1996
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1997,
    "end": 1998,
    "range": [
      1997,
      1998
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2003,
    "end": 2007,
    "range": [
      2003,
      2007
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2007,
    "end": 2008,
    "range": [
      2007,
      2008
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 2009,
    "end": 2017,
    "range": [
      2009,
      2017
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2017,
    "end": 2018,
    "range": [
      2017,
      2018
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2023,
    "end": 2027,
    "range": [
      2023,
      2027
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2027,
    "end": 2028,
    "range": [
      2027,
      2028
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2029,
    "end": 2030,
    "range": [
      2029,
      2030
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2039,
    "end": 2043,
    "range": [
      2039,
      2043
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2043,
    "end": 2044,
    "range": [
      2043,
      2044
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2045,
    "end": 2051,
    "range": [
      2045,
      2051
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2056,
    "end": 2057,
    "range": [
      2056,
      2057
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2058,
    "end": 2059,
    "range": [
      2058,
      2059
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2060,
    "end": 2061,
    "range": [
      2060,
      2061
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2062,
    "end": 2063,
    "range": [
      2062,
      2063
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2068,
    "end": 2072,
    "range": [
      2068,
      2072
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2072,
    "end": 2073,
    "range": [
      2072,
      2073
    ]
  },
  {
    "type": "String",
    "value": "'number'",
    "start": 2074,
    "end": 2082,
    "range": [
      2074,
      2082
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2082,
    "end": 2083,
    "range": [
      2082,
      2083
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2088,
    "end": 2092,
    "range": [
      2088,
      2092
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2092,
    "end": 2093,
    "range": [
      2092,
      2093
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2094,
    "end": 2095,
    "range": [
      2094,
      2095
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2104,
    "end": 2108,
    "range": [
      2104,
      2108
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2108,
    "end": 2109,
    "range": [
      2108,
      2109
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2110,
    "end": 2116,
    "range": [
      2110,
      2116
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2116,
    "end": 2117,
    "range": [
      2116,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2122,
    "end": 2123,
    "range": [
      2122,
      2123
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2124,
    "end": 2125,
    "range": [
      2124,
      2125
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2127,
    "end": 2128,
    "range": [
      2127,
      2128
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2133,
    "end": 2136,
    "range": [
      2133,
      2136
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2137,
    "end": 2141,
    "range": [
      2137,
      2141
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2141,
    "end": 2142,
    "range": [
      2141,
      2142
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2142,
    "end": 2143,
    "range": [
      2142,
      2143
    ]
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 2144,
    "end": 2150,
    "range": [
      2144,
      2150
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2150,
    "end": 2151,
    "range": [
      2150,
      2151
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2156,
    "end": 2161,
    "range": [
      2156,
      2161
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2162,
    "end": 2163,
    "range": [
      2162,
      2163
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2164,
    "end": 2168,
    "range": [
      2164,
      2168
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2168,
    "end": 2169,
    "range": [
      2168,
      2169
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2170,
    "end": 2171,
    "range": [
      2170,
      2171
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2172,
    "end": 2176,
    "range": [
      2172,
      2176
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2177,
    "end": 2178,
    "range": [
      2177,
      2178
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2178,
    "end": 2179,
    "range": [
      2178,
      2179
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2180,
    "end": 2184,
    "range": [
      2180,
      2184
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2185,
    "end": 2186,
    "range": [
      2185,
      2186
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2187,
    "end": 2188,
    "range": [
      2187,
      2188
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2189,
    "end": 2193,
    "range": [
      2189,
      2193
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2193,
    "end": 2194,
    "range": [
      2193,
      2194
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2199,
    "end": 2201,
    "range": [
      2199,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2202,
    "end": 2203,
    "range": [
      2202,
      2203
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2203,
    "end": 2207,
    "range": [
      2203,
      2207
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2208,
    "end": 2211,
    "range": [
      2208,
      2211
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 2212,
    "end": 2220,
    "range": [
      2212,
      2220
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2220,
    "end": 2221,
    "range": [
      2220,
      2221
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2222,
    "end": 2223,
    "range": [
      2222,
      2223
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2232,
    "end": 2236,
    "range": [
      2232,
      2236
    ]
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2237,
    "end": 2246,
    "range": [
      2237,
      2246
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2247,
    "end": 2253,
    "range": [
      2247,
      2253
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2253,
    "end": 2254,
    "range": [
      2253,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2259,
    "end": 2260,
    "range": [
      2259,
      2260
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2265,
    "end": 2267,
    "range": [
      2265,
      2267
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2268,
    "end": 2269,
    "range": [
      2268,
      2269
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2269,
    "end": 2273,
    "range": [
      2269,
      2273
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2273,
    "end": 2274,
    "range": [
      2273,
      2274
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2274,
    "end": 2278,
    "range": [
      2274,
      2278
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2279,
    "end": 2282,
    "range": [
      2279,
      2282
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 2283,
    "end": 2291,
    "range": [
      2283,
      2291
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2291,
    "end": 2292,
    "range": [
      2291,
      2292
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2293,
    "end": 2294,
    "range": [
      2293,
      2294
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2303,
    "end": 2307,
    "range": [
      2303,
      2307
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2307,
    "end": 2308,
    "range": [
      2307,
      2308
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2308,
    "end": 2312,
    "range": [
      2308,
      2312
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2312,
    "end": 2313,
    "range": [
      2312,
      2313
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2313,
    "end": 2317,
    "range": [
      2313,
      2317
    ]
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2318,
    "end": 2327,
    "range": [
      2318,
      2327
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2328,
    "end": 2334,
    "range": [
      2328,
      2334
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2334,
    "end": 2335,
    "range": [
      2334,
      2335
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2340,
    "end": 2341,
    "range": [
      2340,
      2341
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2346,
    "end": 2347,
    "range": [
      2346,
      2347
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2349,
    "end": 2350,
    "range": [
      2349,
      2350
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 2359,
    "end": 2362,
    "range": [
      2359,
      2362
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2363,
    "end": 2367,
    "range": [
      2363,
      2367
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 2367,
    "end": 2368,
    "range": [
      2367,
      2368
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2368,
    "end": 2369,
    "range": [
      2368,
      2369
    ]
  },
  {
    "type": "Identifier",
    "value": "Nested",
    "start": 2370,
    "end": 2376,
    "range": [
      2370,
      2376
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2376,
    "end": 2377,
    "range": [
      2376,
      2377
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2382,
    "end": 2387,
    "range": [
      2382,
      2387
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2388,
    "end": 2389,
    "range": [
      2388,
      2389
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2390,
    "end": 2394,
    "range": [
      2390,
      2394
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2394,
    "end": 2395,
    "range": [
      2394,
      2395
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2396,
    "end": 2397,
    "range": [
      2396,
      2397
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2398,
    "end": 2402,
    "range": [
      2398,
      2402
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2402,
    "end": 2403,
    "range": [
      2402,
      2403
    ]
  },
  {
    "type": "Identifier",
    "value": "dataAlias",
    "start": 2404,
    "end": 2413,
    "range": [
      2404,
      2413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2414,
    "end": 2415,
    "range": [
      2414,
      2415
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2415,
    "end": 2416,
    "range": [
      2415,
      2416
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2417,
    "end": 2421,
    "range": [
      2417,
      2421
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2422,
    "end": 2423,
    "range": [
      2422,
      2423
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2424,
    "end": 2425,
    "range": [
      2424,
      2425
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2426,
    "end": 2430,
    "range": [
      2426,
      2430
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2430,
    "end": 2431,
    "range": [
      2430,
      2431
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2436,
    "end": 2438,
    "range": [
      2436,
      2438
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2439,
    "end": 2440,
    "range": [
      2439,
      2440
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2440,
    "end": 2444,
    "range": [
      2440,
      2444
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2445,
    "end": 2448,
    "range": [
      2445,
      2448
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 2449,
    "end": 2457,
    "range": [
      2449,
      2457
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2457,
    "end": 2458,
    "range": [
      2457,
      2458
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2459,
    "end": 2460,
    "range": [
      2459,
      2460
    ]
  },
  {
    "type": "Identifier",
    "value": "dataAlias",
    "start": 2469,
    "end": 2478,
    "range": [
      2469,
      2478
    ]
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2479,
    "end": 2488,
    "range": [
      2479,
      2488
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2489,
    "end": 2495,
    "range": [
      2489,
      2495
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2495,
    "end": 2496,
    "range": [
      2495,
      2496
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2507,
    "end": 2509,
    "range": [
      2507,
      2509
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2510,
    "end": 2511,
    "range": [
      2510,
      2511
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2511,
    "end": 2515,
    "range": [
      2511,
      2515
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2515,
    "end": 2516,
    "range": [
      2515,
      2516
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2516,
    "end": 2520,
    "range": [
      2516,
      2520
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2521,
    "end": 2524,
    "range": [
      2521,
      2524
    ]
  },
  {
    "type": "String",
    "value": "'string'",
    "start": 2525,
    "end": 2533,
    "range": [
      2525,
      2533
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2535,
    "end": 2536,
    "range": [
      2535,
      2536
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2545,
    "end": 2549,
    "range": [
      2545,
      2549
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2549,
    "end": 2550,
    "range": [
      2549,
      2550
    ]
  },
  {
    "type": "Identifier",
    "value": "resp",
    "start": 2550,
    "end": 2554,
    "range": [
      2550,
      2554
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2554,
    "end": 2555,
    "range": [
      2554,
      2555
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2555,
    "end": 2559,
    "range": [
      2555,
      2559
    ]
  },
  {
    "type": "Identifier",
    "value": "satisfies",
    "start": 2560,
    "end": 2569,
    "range": [
      2560,
      2569
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2570,
    "end": 2576,
    "range": [
      2570,
      2576
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2582,
    "end": 2583,
    "range": [
      2582,
      2583
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2588,
    "end": 2589,
    "range": [
      2588,
      2589
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2591,
    "end": 2599,
    "range": [
      2591,
      2599
    ]
  },
  {
    "type": "Identifier",
    "value": "bindingPatternInParameter",
    "start": 2600,
    "end": 2625,
    "range": [
      2600,
      2625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2625,
    "end": 2626,
    "range": [
      2625,
      2626
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2626,
    "end": 2627,
    "range": [
      2626,
      2627
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2628,
    "end": 2632,
    "range": [
      2628,
      2632
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2632,
    "end": 2633,
    "range": [
      2632,
      2633
    ]
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 2634,
    "end": 2639,
    "range": [
      2634,
      2639
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2639,
    "end": 2640,
    "range": [
      2639,
      2640
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 2641,
    "end": 2650,
    "range": [
      2641,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess1",
    "start": 2652,
    "end": 2662,
    "range": [
      2652,
      2662
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2663,
    "end": 2664,
    "range": [
      2663,
      2664
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2664,
    "end": 2665,
    "range": [
      2664,
      2665
    ]
  },
  {
    "type": "Identifier",
    "value": "UseQueryResult",
    "start": 2666,
    "end": 2680,
    "range": [
      2666,
      2680
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2680,
    "end": 2681,
    "range": [
      2680,
      2681
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2681,
    "end": 2687,
    "range": [
      2681,
      2687
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2687,
    "end": 2688,
    "range": [
      2687,
      2688
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2688,
    "end": 2689,
    "range": [
      2688,
      2689
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2694,
    "end": 2699,
    "range": [
      2694,
      2699
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2700,
    "end": 2701,
    "range": [
      2700,
      2701
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2702,
    "end": 2706,
    "range": [
      2702,
      2706
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2706,
    "end": 2707,
    "range": [
      2706,
      2707
    ]
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 2708,
    "end": 2713,
    "range": [
      2708,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2713,
    "end": 2714,
    "range": [
      2713,
      2714
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess",
    "start": 2715,
    "end": 2724,
    "range": [
      2715,
      2724
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2724,
    "end": 2725,
    "range": [
      2724,
      2725
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess2",
    "start": 2726,
    "end": 2736,
    "range": [
      2726,
      2736
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2737,
    "end": 2738,
    "range": [
      2737,
      2738
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2739,
    "end": 2740,
    "range": [
      2739,
      2740
    ]
  },
  {
    "type": "Identifier",
    "value": "useQuery",
    "start": 2741,
    "end": 2749,
    "range": [
      2741,
      2749
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2749,
    "end": 2750,
    "range": [
      2749,
      2750
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2750,
    "end": 2751,
    "range": [
      2750,
      2751
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 2756,
    "end": 2761,
    "range": [
      2756,
      2761
    ]
  },
  {
    "type": "Identifier",
    "value": "areSuccess",
    "start": 2762,
    "end": 2772,
    "range": [
      2762,
      2772
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2773,
    "end": 2774,
    "range": [
      2773,
      2774
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess1",
    "start": 2775,
    "end": 2785,
    "range": [
      2775,
      2785
    ]
  },
  {
    "type": "Punctuator",
    "value": "&&",
    "start": 2786,
    "end": 2788,
    "range": [
      2786,
      2788
    ]
  },
  {
    "type": "Identifier",
    "value": "isSuccess2",
    "start": 2789,
    "end": 2799,
    "range": [
      2789,
      2799
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2799,
    "end": 2800,
    "range": [
      2799,
      2800
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2803,
    "end": 2805,
    "range": [
      2803,
      2805
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2806,
    "end": 2807,
    "range": [
      2806,
      2807
    ]
  },
  {
    "type": "Identifier",
    "value": "areSuccess",
    "start": 2807,
    "end": 2817,
    "range": [
      2807,
      2817
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Identifier",
    "value": "data1",
    "start": 2825,
    "end": 2830,
    "range": [
      2825,
      2830
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2830,
    "end": 2831,
    "range": [
      2830,
      2831
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 2831,
    "end": 2844,
    "range": [
      2831,
      2844
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2844,
    "end": 2845,
    "range": [
      2844,
      2845
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2845,
    "end": 2846,
    "range": [
      2845,
      2846
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2846,
    "end": 2847,
    "range": [
      2846,
      2847
    ]
  },
  {
    "type": "Identifier",
    "value": "data2",
    "start": 2852,
    "end": 2857,
    "range": [
      2852,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Identifier",
    "value": "toExponential",
    "start": 2858,
    "end": 2871,
    "range": [
      2858,
      2871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2871,
    "end": 2872,
    "range": [
      2871,
      2872
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2872,
    "end": 2873,
    "range": [
      2872,
      2873
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2873,
    "end": 2874,
    "range": [
      2873,
      2874
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2877,
    "end": 2878,
    "range": [
      2877,
      2878
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2879,
    "end": 2880,
    "range": [
      2879,
      2880
    ]
  }
]
```
