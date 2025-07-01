__ESTREE_TEST__:PASS:
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
