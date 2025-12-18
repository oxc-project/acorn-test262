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
        "name": "Action",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 11
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 22,
                  "end": 26
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 28,
                      "end": 31
                    },
                    "start": 28,
                    "end": 31
                  },
                  "start": 26,
                  "end": 31
                },
                "accessibility": null,
                "static": false,
                "start": 22,
                "end": 32
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 33,
                  "end": 40
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 42,
                    "end": 48
                  },
                  "start": 40,
                  "end": 48
                },
                "accessibility": null,
                "static": false,
                "start": 33,
                "end": 48
              }
            ],
            "start": 20,
            "end": 50
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 59,
                  "end": 63
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 65,
                      "end": 68
                    },
                    "start": 65,
                    "end": 68
                  },
                  "start": 63,
                  "end": 68
                },
                "accessibility": null,
                "static": false,
                "start": 59,
                "end": 69
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 70,
                  "end": 77
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 79,
                    "end": 85
                  },
                  "start": 77,
                  "end": 85
                },
                "accessibility": null,
                "static": false,
                "start": 70,
                "end": 85
              }
            ],
            "start": 57,
            "end": 87
          }
        ],
        "start": 18,
        "end": 87
      },
      "declare": false,
      "start": 0,
      "end": 88
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f10",
        "optional": false,
        "typeAnnotation": null,
        "start": 99,
        "end": 102
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
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 109
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 105,
                "end": 109
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 105,
              "end": 109
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 118
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 111,
                "end": 118
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 111,
              "end": 118
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
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 122,
                "end": 128
              },
              "typeArguments": null,
              "start": 122,
              "end": 128
            },
            "start": 120,
            "end": 128
          },
          "start": 103,
          "end": 128
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 140,
                "end": 144
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 149,
                "end": 152
              },
              "start": 140,
              "end": 152
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
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 164,
                        "end": 171
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 172,
                        "end": 179
                      },
                      "optional": false,
                      "computed": false,
                      "start": 164,
                      "end": 179
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 164,
                    "end": 181
                  },
                  "directive": null,
                  "start": 164,
                  "end": 182
                }
              ],
              "start": 154,
              "end": 188
            },
            "alternate": null,
            "start": 136,
            "end": 188
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 197,
                "end": 201
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 206,
                "end": 209
              },
              "start": 197,
              "end": 209
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
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 221,
                        "end": 228
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 229,
                        "end": 240
                      },
                      "optional": false,
                      "computed": false,
                      "start": 221,
                      "end": 240
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 221,
                    "end": 242
                  },
                  "directive": null,
                  "start": 221,
                  "end": 243
                }
              ],
              "start": 211,
              "end": 249
            },
            "alternate": null,
            "start": 193,
            "end": 249
          }
        ],
        "start": 130,
        "end": 251
      },
      "expression": false,
      "start": 90,
      "end": 251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f11",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 265
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 274,
                "end": 280
              },
              "typeArguments": null,
              "start": 274,
              "end": 280
            },
            "start": 272,
            "end": 280
          },
          "start": 266,
          "end": 280
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 296,
                        "end": 300
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 296,
                        "end": 300
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 296,
                      "end": 300
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 309
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 302,
                        "end": 309
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 302,
                      "end": 309
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 294,
                  "end": 311
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 314,
                  "end": 320
                },
                "definite": false,
                "start": 294,
                "end": 320
              }
            ],
            "declare": false,
            "start": 288,
            "end": 321
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 330,
                "end": 334
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 339,
                "end": 342
              },
              "start": 330,
              "end": 342
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
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 354,
                        "end": 361
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 362,
                        "end": 369
                      },
                      "optional": false,
                      "computed": false,
                      "start": 354,
                      "end": 369
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 354,
                    "end": 371
                  },
                  "directive": null,
                  "start": 354,
                  "end": 372
                }
              ],
              "start": 344,
              "end": 378
            },
            "alternate": null,
            "start": 326,
            "end": 378
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 387,
                "end": 391
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 396,
                "end": 399
              },
              "start": 387,
              "end": 399
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
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 411,
                        "end": 418
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 419,
                        "end": 430
                      },
                      "optional": false,
                      "computed": false,
                      "start": 411,
                      "end": 430
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 411,
                    "end": 432
                  },
                  "directive": null,
                  "start": 411,
                  "end": 433
                }
              ],
              "start": 401,
              "end": 439
            },
            "alternate": null,
            "start": 383,
            "end": 439
          }
        ],
        "start": 282,
        "end": 441
      },
      "expression": false,
      "start": 253,
      "end": 441
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f12",
        "optional": false,
        "typeAnnotation": null,
        "start": 452,
        "end": 455
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
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 462
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 458,
                "end": 462
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 458,
              "end": 462
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 471
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 464,
                "end": 471
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 464,
              "end": 471
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
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 475,
                "end": 481
              },
              "typeArguments": null,
              "start": 475,
              "end": 481
            },
            "start": 473,
            "end": 481
          },
          "start": 456,
          "end": 481
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "SwitchStatement",
            "discriminant": {
              "type": "Identifier",
              "decorators": [],
              "name": "kind",
              "optional": false,
              "typeAnnotation": null,
              "start": 497,
              "end": 501
            },
            "cases": [
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "A",
                  "raw": "'A'",
                  "start": 518,
                  "end": 521
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 535,
                          "end": 542
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toFixed",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 543,
                          "end": 550
                        },
                        "optional": false,
                        "computed": false,
                        "start": 535,
                        "end": 550
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 535,
                      "end": 552
                    },
                    "directive": null,
                    "start": 535,
                    "end": 553
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 566,
                    "end": 572
                  }
                ],
                "start": 513,
                "end": 572
              },
              {
                "type": "SwitchCase",
                "test": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 586,
                  "end": 589
                },
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 603,
                          "end": 610
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "toUpperCase",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 611,
                          "end": 622
                        },
                        "optional": false,
                        "computed": false,
                        "start": 603,
                        "end": 622
                      },
                      "typeArguments": null,
                      "arguments": [],
                      "optional": false,
                      "start": 603,
                      "end": 624
                    },
                    "directive": null,
                    "start": 603,
                    "end": 625
                  },
                  {
                    "type": "BreakStatement",
                    "label": null,
                    "start": 638,
                    "end": 644
                  }
                ],
                "start": 581,
                "end": 644
              },
              {
                "type": "SwitchCase",
                "test": null,
                "consequent": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "payload",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 674,
                      "end": 681
                    },
                    "directive": null,
                    "start": 674,
                    "end": 682
                  }
                ],
                "start": 653,
                "end": 682
              }
            ],
            "start": 489,
            "end": 698
          }
        ],
        "start": 483,
        "end": 700
      },
      "expression": false,
      "start": 443,
      "end": 700
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f13",
        "optional": false,
        "typeAnnotation": null,
        "start": 727,
        "end": 730
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 731,
              "end": 732
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 741,
                "end": 747
              },
              "typeArguments": null,
              "start": 741,
              "end": 747
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 731,
            "end": 747
          }
        ],
        "start": 730,
        "end": 748
      },
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
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 751,
                "end": 755
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 751,
                "end": 755
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 751,
              "end": 755
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 764
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 764
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 757,
              "end": 764
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
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 768,
                "end": 769
              },
              "typeArguments": null,
              "start": 768,
              "end": 769
            },
            "start": 766,
            "end": 769
          },
          "start": 749,
          "end": 769
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 781,
                "end": 785
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 790,
                "end": 793
              },
              "start": 781,
              "end": 793
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
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 805,
                        "end": 812
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 813,
                        "end": 820
                      },
                      "optional": false,
                      "computed": false,
                      "start": 805,
                      "end": 820
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 805,
                    "end": 822
                  },
                  "directive": null,
                  "start": 805,
                  "end": 823
                }
              ],
              "start": 795,
              "end": 829
            },
            "alternate": null,
            "start": 777,
            "end": 829
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 838,
                "end": 842
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 847,
                "end": 850
              },
              "start": 838,
              "end": 850
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
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 862,
                        "end": 869
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 870,
                        "end": 881
                      },
                      "optional": false,
                      "computed": false,
                      "start": 862,
                      "end": 881
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 862,
                    "end": 883
                  },
                  "directive": null,
                  "start": 862,
                  "end": 884
                }
              ],
              "start": 852,
              "end": 890
            },
            "alternate": null,
            "start": 834,
            "end": 890
          }
        ],
        "start": 771,
        "end": 892
      },
      "expression": false,
      "start": 718,
      "end": 892
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f14",
        "optional": false,
        "typeAnnotation": null,
        "start": 903,
        "end": 906
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 907,
              "end": 908
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action",
                "optional": false,
                "typeAnnotation": null,
                "start": 917,
                "end": 923
              },
              "typeArguments": null,
              "start": 917,
              "end": 923
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 907,
            "end": 923
          }
        ],
        "start": 906,
        "end": 924
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "start": 928,
                "end": 929
              },
              "typeArguments": null,
              "start": 928,
              "end": 929
            },
            "start": 926,
            "end": 929
          },
          "start": 925,
          "end": 929
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 945,
                        "end": 949
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 945,
                        "end": 949
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 945,
                      "end": 949
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 951,
                        "end": 958
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 951,
                        "end": 958
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 951,
                      "end": 958
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 943,
                  "end": 960
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 963,
                  "end": 964
                },
                "definite": false,
                "start": 943,
                "end": 964
              }
            ],
            "declare": false,
            "start": 937,
            "end": 965
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 974,
                "end": 978
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 983,
                "end": 986
              },
              "start": 974,
              "end": 986
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
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 998,
                        "end": 1005
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1006,
                        "end": 1013
                      },
                      "optional": false,
                      "computed": false,
                      "start": 998,
                      "end": 1013
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 998,
                    "end": 1015
                  },
                  "directive": null,
                  "start": 998,
                  "end": 1016
                }
              ],
              "start": 988,
              "end": 1022
            },
            "alternate": null,
            "start": 970,
            "end": 1022
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1031,
                "end": 1035
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 1040,
                "end": 1043
              },
              "start": 1031,
              "end": 1043
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
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1055,
                        "end": 1062
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1063,
                        "end": 1074
                      },
                      "optional": false,
                      "computed": false,
                      "start": 1055,
                      "end": 1074
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 1055,
                    "end": 1076
                  },
                  "directive": null,
                  "start": 1055,
                  "end": 1077
                }
              ],
              "start": 1045,
              "end": 1083
            },
            "alternate": null,
            "start": 1027,
            "end": 1083
          }
        ],
        "start": 931,
        "end": 1085
      },
      "expression": false,
      "start": 894,
      "end": 1085
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action2",
        "optional": false,
        "typeAnnotation": null,
        "start": 1092,
        "end": 1099
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1110,
                  "end": 1114
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 1116,
                      "end": 1119
                    },
                    "start": 1116,
                    "end": 1119
                  },
                  "start": 1114,
                  "end": 1119
                },
                "accessibility": null,
                "static": false,
                "start": 1110,
                "end": 1120
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1121,
                  "end": 1128
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSNumberKeyword",
                        "start": 1130,
                        "end": 1136
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1139,
                        "end": 1148
                      }
                    ],
                    "start": 1130,
                    "end": 1148
                  },
                  "start": 1128,
                  "end": 1148
                },
                "accessibility": null,
                "static": false,
                "start": 1121,
                "end": 1148
              }
            ],
            "start": 1108,
            "end": 1150
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1159,
                  "end": 1163
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 1165,
                      "end": 1168
                    },
                    "start": 1165,
                    "end": 1168
                  },
                  "start": 1163,
                  "end": 1168
                },
                "accessibility": null,
                "static": false,
                "start": 1159,
                "end": 1169
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1170,
                  "end": 1177
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSStringKeyword",
                        "start": 1179,
                        "end": 1185
                      },
                      {
                        "type": "TSUndefinedKeyword",
                        "start": 1188,
                        "end": 1197
                      }
                    ],
                    "start": 1179,
                    "end": 1197
                  },
                  "start": 1177,
                  "end": 1197
                },
                "accessibility": null,
                "static": false,
                "start": 1170,
                "end": 1197
              }
            ],
            "start": 1157,
            "end": 1199
          }
        ],
        "start": 1106,
        "end": 1199
      },
      "declare": false,
      "start": 1087,
      "end": 1200
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f20",
        "optional": false,
        "typeAnnotation": null,
        "start": 1211,
        "end": 1214
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
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1217,
                "end": 1221
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1217,
                "end": 1221
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 1217,
              "end": 1221
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 1223,
                "end": 1230
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 1223,
                "end": 1230
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 1223,
              "end": 1230
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
                "name": "Action2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1234,
                "end": 1241
              },
              "typeArguments": null,
              "start": 1234,
              "end": 1241
            },
            "start": 1232,
            "end": 1241
          },
          "start": 1215,
          "end": 1241
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": null,
              "start": 1253,
              "end": 1260
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1276,
                      "end": 1280
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 1285,
                      "end": 1288
                    },
                    "start": 1276,
                    "end": 1288
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1304,
                              "end": 1311
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1312,
                              "end": 1319
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1304,
                            "end": 1319
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1304,
                          "end": 1321
                        },
                        "directive": null,
                        "start": 1304,
                        "end": 1322
                      }
                    ],
                    "start": 1290,
                    "end": 1332
                  },
                  "alternate": null,
                  "start": 1272,
                  "end": 1332
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1345,
                      "end": 1349
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 1354,
                      "end": 1357
                    },
                    "start": 1345,
                    "end": 1357
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1373,
                              "end": 1380
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1381,
                              "end": 1392
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1373,
                            "end": 1392
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1373,
                          "end": 1394
                        },
                        "directive": null,
                        "start": 1373,
                        "end": 1395
                      }
                    ],
                    "start": 1359,
                    "end": 1405
                  },
                  "alternate": null,
                  "start": 1341,
                  "end": 1405
                }
              ],
              "start": 1262,
              "end": 1411
            },
            "alternate": null,
            "start": 1249,
            "end": 1411
          }
        ],
        "start": 1243,
        "end": 1413
      },
      "expression": false,
      "start": 1202,
      "end": 1413
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f21",
        "optional": false,
        "typeAnnotation": null,
        "start": 1424,
        "end": 1427
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1436,
                "end": 1443
              },
              "typeArguments": null,
              "start": 1436,
              "end": 1443
            },
            "start": 1434,
            "end": 1443
          },
          "start": 1428,
          "end": 1443
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
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1459,
                        "end": 1463
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "kind",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1459,
                        "end": 1463
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1459,
                      "end": 1463
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1465,
                        "end": 1472
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "payload",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1465,
                        "end": 1472
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 1465,
                      "end": 1472
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1457,
                  "end": 1474
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "action",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1477,
                  "end": 1483
                },
                "definite": false,
                "start": 1457,
                "end": 1483
              }
            ],
            "declare": false,
            "start": 1451,
            "end": 1484
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": null,
              "start": 1493,
              "end": 1500
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1516,
                      "end": 1520
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 1525,
                      "end": 1528
                    },
                    "start": 1516,
                    "end": 1528
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1544,
                              "end": 1551
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1552,
                              "end": 1559
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1544,
                            "end": 1559
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1544,
                          "end": 1561
                        },
                        "directive": null,
                        "start": 1544,
                        "end": 1562
                      }
                    ],
                    "start": 1530,
                    "end": 1572
                  },
                  "alternate": null,
                  "start": 1512,
                  "end": 1572
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1585,
                      "end": 1589
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 1594,
                      "end": 1597
                    },
                    "start": 1585,
                    "end": 1597
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1613,
                              "end": 1620
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1621,
                              "end": 1632
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1613,
                            "end": 1632
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1613,
                          "end": 1634
                        },
                        "directive": null,
                        "start": 1613,
                        "end": 1635
                      }
                    ],
                    "start": 1599,
                    "end": 1645
                  },
                  "alternate": null,
                  "start": 1581,
                  "end": 1645
                }
              ],
              "start": 1502,
              "end": 1651
            },
            "alternate": null,
            "start": 1489,
            "end": 1651
          }
        ],
        "start": 1445,
        "end": 1653
      },
      "expression": false,
      "start": 1415,
      "end": 1653
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f22",
        "optional": false,
        "typeAnnotation": null,
        "start": 1664,
        "end": 1667
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "action",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Action2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1676,
                "end": 1683
              },
              "typeArguments": null,
              "start": 1676,
              "end": 1683
            },
            "start": 1674,
            "end": 1683
          },
          "start": 1668,
          "end": 1683
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "action",
                "optional": false,
                "typeAnnotation": null,
                "start": 1695,
                "end": 1701
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 1702,
                "end": 1709
              },
              "optional": false,
              "computed": false,
              "start": 1695,
              "end": 1709
            },
            "consequent": {
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
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1729,
                              "end": 1733
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "kind",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1729,
                              "end": 1733
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1729,
                            "end": 1733
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1735,
                              "end": 1742
                            },
                            "value": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1735,
                              "end": 1742
                            },
                            "method": false,
                            "shorthand": true,
                            "computed": false,
                            "optional": false,
                            "start": 1735,
                            "end": 1742
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1727,
                        "end": 1744
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "action",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1747,
                        "end": 1753
                      },
                      "definite": false,
                      "start": 1727,
                      "end": 1753
                    }
                  ],
                  "declare": false,
                  "start": 1721,
                  "end": 1754
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1767,
                      "end": 1771
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 1776,
                      "end": 1779
                    },
                    "start": 1767,
                    "end": 1779
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1795,
                              "end": 1802
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1803,
                              "end": 1810
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1795,
                            "end": 1810
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1795,
                          "end": 1812
                        },
                        "directive": null,
                        "start": 1795,
                        "end": 1813
                      }
                    ],
                    "start": 1781,
                    "end": 1823
                  },
                  "alternate": null,
                  "start": 1763,
                  "end": 1823
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1836,
                      "end": 1840
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 1845,
                      "end": 1848
                    },
                    "start": 1836,
                    "end": 1848
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1864,
                              "end": 1871
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1872,
                              "end": 1883
                            },
                            "optional": false,
                            "computed": false,
                            "start": 1864,
                            "end": 1883
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 1864,
                          "end": 1885
                        },
                        "directive": null,
                        "start": 1864,
                        "end": 1886
                      }
                    ],
                    "start": 1850,
                    "end": 1896
                  },
                  "alternate": null,
                  "start": 1832,
                  "end": 1896
                }
              ],
              "start": 1711,
              "end": 1902
            },
            "alternate": null,
            "start": 1691,
            "end": 1902
          }
        ],
        "start": 1685,
        "end": 1904
      },
      "expression": false,
      "start": 1655,
      "end": 1904
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f23",
        "optional": false,
        "typeAnnotation": null,
        "start": 1915,
        "end": 1918
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
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1921,
                "end": 1925
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 1921,
                "end": 1925
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 1921,
              "end": 1925
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 1927,
                "end": 1934
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 1927,
                "end": 1934
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 1927,
              "end": 1934
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
                "name": "Action2",
                "optional": false,
                "typeAnnotation": null,
                "start": 1938,
                "end": 1945
              },
              "typeArguments": null,
              "start": 1938,
              "end": 1945
            },
            "start": 1936,
            "end": 1945
          },
          "start": 1919,
          "end": 1945
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "payload",
              "optional": false,
              "typeAnnotation": null,
              "start": 1957,
              "end": 1964
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1984,
                    "end": 1988
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "A",
                        "raw": "'A'",
                        "start": 2009,
                        "end": 2012
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "payload",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2030,
                                "end": 2037
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toFixed",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2038,
                                "end": 2045
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2030,
                              "end": 2045
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2030,
                            "end": 2047
                          },
                          "directive": null,
                          "start": 2030,
                          "end": 2048
                        },
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 2065,
                          "end": 2071
                        }
                      ],
                      "start": 2004,
                      "end": 2071
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "B",
                        "raw": "'B'",
                        "start": 2089,
                        "end": 2092
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "payload",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2110,
                                "end": 2117
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toUpperCase",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 2118,
                                "end": 2129
                              },
                              "optional": false,
                              "computed": false,
                              "start": 2110,
                              "end": 2129
                            },
                            "typeArguments": null,
                            "arguments": [],
                            "optional": false,
                            "start": 2110,
                            "end": 2131
                          },
                          "directive": null,
                          "start": 2110,
                          "end": 2132
                        },
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 2149,
                          "end": 2155
                        }
                      ],
                      "start": 2084,
                      "end": 2155
                    },
                    {
                      "type": "SwitchCase",
                      "test": null,
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "payload",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 2193,
                            "end": 2200
                          },
                          "directive": null,
                          "start": 2193,
                          "end": 2201
                        }
                      ],
                      "start": 2168,
                      "end": 2201
                    }
                  ],
                  "start": 1976,
                  "end": 2221
                }
              ],
              "start": 1966,
              "end": 2227
            },
            "alternate": null,
            "start": 1953,
            "end": 2227
          }
        ],
        "start": 1947,
        "end": 2229
      },
      "expression": false,
      "start": 1906,
      "end": 2229
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 2236,
        "end": 2239
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2250,
                  "end": 2254
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 2256,
                      "end": 2259
                    },
                    "start": 2256,
                    "end": 2259
                  },
                  "start": 2254,
                  "end": 2259
                },
                "accessibility": null,
                "static": false,
                "start": 2250,
                "end": 2260
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2261,
                  "end": 2264
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": true,
                      "raw": "true",
                      "start": 2266,
                      "end": 2270
                    },
                    "start": 2266,
                    "end": 2270
                  },
                  "start": 2264,
                  "end": 2270
                },
                "accessibility": null,
                "static": false,
                "start": 2261,
                "end": 2270
              }
            ],
            "start": 2248,
            "end": 2272
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2281,
                  "end": 2285
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 2287,
                      "end": 2290
                    },
                    "start": 2287,
                    "end": 2290
                  },
                  "start": 2285,
                  "end": 2290
                },
                "accessibility": null,
                "static": false,
                "start": 2281,
                "end": 2291
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2292,
                  "end": 2295
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 2297,
                      "end": 2302
                    },
                    "start": 2297,
                    "end": 2302
                  },
                  "start": 2295,
                  "end": 2302
                },
                "accessibility": null,
                "static": false,
                "start": 2292,
                "end": 2302
              }
            ],
            "start": 2279,
            "end": 2304
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2313,
                  "end": 2317
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "C",
                      "raw": "'C'",
                      "start": 2319,
                      "end": 2322
                    },
                    "start": 2319,
                    "end": 2322
                  },
                  "start": 2317,
                  "end": 2322
                },
                "accessibility": null,
                "static": false,
                "start": 2313,
                "end": 2323
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isA",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2324,
                  "end": 2327
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": false,
                      "raw": "false",
                      "start": 2329,
                      "end": 2334
                    },
                    "start": 2329,
                    "end": 2334
                  },
                  "start": 2327,
                  "end": 2334
                },
                "accessibility": null,
                "static": false,
                "start": 2324,
                "end": 2334
              }
            ],
            "start": 2311,
            "end": 2336
          }
        ],
        "start": 2246,
        "end": 2336
      },
      "declare": false,
      "start": 2231,
      "end": 2337
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f30",
        "optional": false,
        "typeAnnotation": null,
        "start": 2348,
        "end": 2351
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
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2354,
                "end": 2358
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2354,
                "end": 2358
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 2354,
              "end": 2358
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null,
                "start": 2360,
                "end": 2363
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "isA",
                "optional": false,
                "typeAnnotation": null,
                "start": 2360,
                "end": 2363
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 2360,
              "end": 2363
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
                "name": "Foo",
                "optional": false,
                "typeAnnotation": null,
                "start": 2367,
                "end": 2370
              },
              "typeArguments": null,
              "start": 2367,
              "end": 2370
            },
            "start": 2365,
            "end": 2370
          },
          "start": 2352,
          "end": 2370
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2382,
                "end": 2386
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 2391,
                "end": 2394
              },
              "start": 2382,
              "end": 2394
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2406,
                    "end": 2409
                  },
                  "directive": null,
                  "start": 2406,
                  "end": 2410
                }
              ],
              "start": 2396,
              "end": 2426
            },
            "alternate": null,
            "start": 2378,
            "end": 2426
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2435,
                "end": 2439
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 2444,
                "end": 2447
              },
              "start": 2435,
              "end": 2447
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2459,
                    "end": 2462
                  },
                  "directive": null,
                  "start": 2459,
                  "end": 2463
                }
              ],
              "start": 2449,
              "end": 2480
            },
            "alternate": null,
            "start": 2431,
            "end": 2480
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2489,
                "end": 2493
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "C",
                "raw": "'C'",
                "start": 2498,
                "end": 2501
              },
              "start": 2489,
              "end": 2501
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "isA",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2513,
                    "end": 2516
                  },
                  "directive": null,
                  "start": 2513,
                  "end": 2517
                }
              ],
              "start": 2503,
              "end": 2534
            },
            "alternate": null,
            "start": 2485,
            "end": 2534
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "isA",
              "optional": false,
              "typeAnnotation": null,
              "start": 2543,
              "end": 2546
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2558,
                    "end": 2562
                  },
                  "directive": null,
                  "start": 2558,
                  "end": 2563
                }
              ],
              "start": 2548,
              "end": 2577
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "kind",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2597,
                    "end": 2601
                  },
                  "directive": null,
                  "start": 2597,
                  "end": 2602
                }
              ],
              "start": 2587,
              "end": 2622
            },
            "start": 2539,
            "end": 2622
          }
        ],
        "start": 2372,
        "end": 2624
      },
      "expression": false,
      "start": 2339,
      "end": 2624
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Args",
        "optional": false,
        "typeAnnotation": null,
        "start": 2631,
        "end": 2635
      },
      "typeParameters": null,
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
                  "value": "A",
                  "raw": "'A'",
                  "start": 2639,
                  "end": 2642
                },
                "start": 2639,
                "end": 2642
              },
              {
                "type": "TSNumberKeyword",
                "start": 2644,
                "end": 2650
              }
            ],
            "start": 2638,
            "end": 2651
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "B",
                  "raw": "'B'",
                  "start": 2655,
                  "end": 2658
                },
                "start": 2655,
                "end": 2658
              },
              {
                "type": "TSStringKeyword",
                "start": 2660,
                "end": 2666
              }
            ],
            "start": 2654,
            "end": 2667
          }
        ],
        "start": 2638,
        "end": 2667
      },
      "declare": false,
      "start": 2626,
      "end": 2667
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f40",
        "optional": false,
        "typeAnnotation": null,
        "start": 2678,
        "end": 2681
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "RestElement",
          "decorators": [],
          "argument": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2686,
                "end": 2690
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 2692,
                "end": 2696
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 2685,
            "end": 2697
          },
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Args",
                "optional": false,
                "typeAnnotation": null,
                "start": 2699,
                "end": 2703
              },
              "typeArguments": null,
              "start": 2699,
              "end": 2703
            },
            "start": 2697,
            "end": 2703
          },
          "value": null,
          "start": 2682,
          "end": 2703
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2715,
                "end": 2719
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "A",
                "raw": "'A'",
                "start": 2724,
                "end": 2727
              },
              "start": 2715,
              "end": 2727
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2739,
                        "end": 2743
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toFixed",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2744,
                        "end": 2751
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2739,
                      "end": 2751
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2739,
                    "end": 2753
                  },
                  "directive": null,
                  "start": 2739,
                  "end": 2754
                }
              ],
              "start": 2729,
              "end": 2760
            },
            "alternate": null,
            "start": 2711,
            "end": 2760
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 2769,
                "end": 2773
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "B",
                "raw": "'B'",
                "start": 2778,
                "end": 2781
              },
              "start": 2769,
              "end": 2781
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
                        "name": "data",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2793,
                        "end": 2797
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toUpperCase",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2798,
                        "end": 2809
                      },
                      "optional": false,
                      "computed": false,
                      "start": 2793,
                      "end": 2809
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 2793,
                    "end": 2811
                  },
                  "directive": null,
                  "start": 2793,
                  "end": 2812
                }
              ],
              "start": 2783,
              "end": 2818
            },
            "alternate": null,
            "start": 2765,
            "end": 2818
          }
        ],
        "start": 2705,
        "end": 2820
      },
      "expression": false,
      "start": 2669,
      "end": 2820
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 2854,
        "end": 2855
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
              "start": 2856,
              "end": 2857
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2856,
            "end": 2857
          }
        ],
        "start": 2855,
        "end": 2858
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "variant",
              "optional": false,
              "typeAnnotation": null,
              "start": 2861,
              "end": 2868
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "a",
                  "raw": "'a'",
                  "start": 2870,
                  "end": 2873
                },
                "start": 2870,
                "end": 2873
              },
              "start": 2868,
              "end": 2873
            },
            "accessibility": null,
            "static": false,
            "start": 2861,
            "end": 2874
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2875,
              "end": 2880
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
                  "start": 2882,
                  "end": 2883
                },
                "typeArguments": null,
                "start": 2882,
                "end": 2883
              },
              "start": 2880,
              "end": 2883
            },
            "accessibility": null,
            "static": false,
            "start": 2875,
            "end": 2883
          }
        ],
        "start": 2859,
        "end": 2885
      },
      "declare": false,
      "start": 2844,
      "end": 2885
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 2897,
        "end": 2898
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
              "start": 2899,
              "end": 2900
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2899,
            "end": 2900
          }
        ],
        "start": 2898,
        "end": 2901
      },
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "variant",
              "optional": false,
              "typeAnnotation": null,
              "start": 2904,
              "end": 2911
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "b",
                  "raw": "'b'",
                  "start": 2913,
                  "end": 2916
                },
                "start": 2913,
                "end": 2916
              },
              "start": 2911,
              "end": 2916
            },
            "accessibility": null,
            "static": false,
            "start": 2904,
            "end": 2917
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 2918,
              "end": 2923
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2925,
                  "end": 2930
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "T",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 2931,
                        "end": 2932
                      },
                      "typeArguments": null,
                      "start": 2931,
                      "end": 2932
                    }
                  ],
                  "start": 2930,
                  "end": 2933
                },
                "start": 2925,
                "end": 2933
              },
              "start": 2923,
              "end": 2933
            },
            "accessibility": null,
            "static": false,
            "start": 2918,
            "end": 2933
          }
        ],
        "start": 2902,
        "end": 2935
      },
      "declare": false,
      "start": 2887,
      "end": 2935
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AB",
        "optional": false,
        "typeAnnotation": null,
        "start": 2942,
        "end": 2944
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
              "start": 2945,
              "end": 2946
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2945,
            "end": 2946
          }
        ],
        "start": 2944,
        "end": 2947
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 2950,
              "end": 2951
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2952,
                    "end": 2953
                  },
                  "typeArguments": null,
                  "start": 2952,
                  "end": 2953
                }
              ],
              "start": 2951,
              "end": 2954
            },
            "start": 2950,
            "end": 2954
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null,
              "start": 2957,
              "end": 2958
            },
            "typeArguments": {
              "type": "TSTypeParameterInstantiation",
              "params": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 2959,
                    "end": 2960
                  },
                  "typeArguments": null,
                  "start": 2959,
                  "end": 2960
                }
              ],
              "start": 2958,
              "end": 2961
            },
            "start": 2957,
            "end": 2961
          }
        ],
        "start": 2950,
        "end": 2961
      },
      "declare": false,
      "start": 2937,
      "end": 2962
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "printValue",
        "optional": false,
        "typeAnnotation": null,
        "start": 2981,
        "end": 2991
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 2992,
              "end": 2993
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 2992,
            "end": 2993
          }
        ],
        "start": 2991,
        "end": 2994
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "start": 2998,
                "end": 2999
              },
              "typeArguments": null,
              "start": 2998,
              "end": 2999
            },
            "start": 2996,
            "end": 2999
          },
          "start": 2995,
          "end": 2999
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3002,
          "end": 3006
        },
        "start": 3000,
        "end": 3006
      },
      "body": null,
      "expression": false,
      "start": 2964,
      "end": 3007
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "printValueList",
        "optional": false,
        "typeAnnotation": null,
        "start": 3026,
        "end": 3040
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 3041,
              "end": 3042
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3041,
            "end": 3042
          }
        ],
        "start": 3040,
        "end": 3043
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "t",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Array",
                "optional": false,
                "typeAnnotation": null,
                "start": 3047,
                "end": 3052
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3053,
                      "end": 3054
                    },
                    "typeArguments": null,
                    "start": 3053,
                    "end": 3054
                  }
                ],
                "start": 3052,
                "end": 3055
              },
              "start": 3047,
              "end": 3055
            },
            "start": 3045,
            "end": 3055
          },
          "start": 3044,
          "end": 3055
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3058,
          "end": 3062
        },
        "start": 3056,
        "end": 3062
      },
      "body": null,
      "expression": false,
      "start": 3009,
      "end": 3063
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "unrefined1",
        "optional": false,
        "typeAnnotation": null,
        "start": 3074,
        "end": 3084
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "start": 3085,
              "end": 3086
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 3085,
            "end": 3086
          }
        ],
        "start": 3084,
        "end": 3087
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "ab",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "AB",
                "optional": false,
                "typeAnnotation": null,
                "start": 3092,
                "end": 3094
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3095,
                      "end": 3096
                    },
                    "typeArguments": null,
                    "start": 3095,
                    "end": 3096
                  }
                ],
                "start": 3094,
                "end": 3097
              },
              "start": 3092,
              "end": 3097
            },
            "start": 3090,
            "end": 3097
          },
          "start": 3088,
          "end": 3097
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3100,
          "end": 3104
        },
        "start": 3098,
        "end": 3104
      },
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
                        "name": "variant",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3119,
                        "end": 3126
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "variant",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3119,
                        "end": 3126
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 3119,
                      "end": 3126
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3128,
                        "end": 3133
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3128,
                        "end": 3133
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 3128,
                      "end": 3133
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3117,
                  "end": 3135
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "ab",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3138,
                  "end": 3140
                },
                "definite": false,
                "start": 3117,
                "end": 3140
              }
            ],
            "declare": false,
            "start": 3111,
            "end": 3141
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "variant",
                "optional": false,
                "typeAnnotation": null,
                "start": 3150,
                "end": 3157
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 3162,
                "end": 3165
              },
              "start": 3150,
              "end": 3165
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "printValue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3177,
                      "end": 3187
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3188,
                            "end": 3189
                          },
                          "typeArguments": null,
                          "start": 3188,
                          "end": 3189
                        }
                      ],
                      "start": 3187,
                      "end": 3190
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3191,
                        "end": 3196
                      }
                    ],
                    "optional": false,
                    "start": 3177,
                    "end": 3197
                  },
                  "directive": null,
                  "start": 3177,
                  "end": 3198
                }
              ],
              "start": 3167,
              "end": 3204
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "printValueList",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3224,
                      "end": 3238
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 3239,
                            "end": 3240
                          },
                          "typeArguments": null,
                          "start": 3239,
                          "end": 3240
                        }
                      ],
                      "start": 3238,
                      "end": 3241
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3242,
                        "end": 3247
                      }
                    ],
                    "optional": false,
                    "start": 3224,
                    "end": 3248
                  },
                  "directive": null,
                  "start": 3224,
                  "end": 3249
                }
              ],
              "start": 3214,
              "end": 3255
            },
            "start": 3146,
            "end": 3255
          }
        ],
        "start": 3105,
        "end": 3257
      },
      "expression": false,
      "start": 3065,
      "end": 3257
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Action3",
        "optional": false,
        "typeAnnotation": null,
        "start": 3286,
        "end": 3293
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
                  "start": 3303,
                  "end": 3307
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "add",
                      "raw": "'add'",
                      "start": 3309,
                      "end": 3314
                    },
                    "start": 3309,
                    "end": 3314
                  },
                  "start": 3307,
                  "end": 3314
                },
                "accessibility": null,
                "static": false,
                "start": 3303,
                "end": 3315
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3316,
                  "end": 3323
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
                          "name": "toAdd",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3327,
                          "end": 3332
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3334,
                            "end": 3340
                          },
                          "start": 3332,
                          "end": 3340
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3327,
                        "end": 3340
                      }
                    ],
                    "start": 3325,
                    "end": 3342
                  },
                  "start": 3323,
                  "end": 3342
                },
                "accessibility": null,
                "static": false,
                "start": 3316,
                "end": 3342
              }
            ],
            "start": 3302,
            "end": 3344
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
                  "start": 3352,
                  "end": 3356
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "remove",
                      "raw": "'remove'",
                      "start": 3358,
                      "end": 3366
                    },
                    "start": 3358,
                    "end": 3366
                  },
                  "start": 3356,
                  "end": 3366
                },
                "accessibility": null,
                "static": false,
                "start": 3352,
                "end": 3367
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "payload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3368,
                  "end": 3375
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
                          "name": "toRemove",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 3379,
                          "end": 3387
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 3389,
                            "end": 3395
                          },
                          "start": 3387,
                          "end": 3395
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 3379,
                        "end": 3395
                      }
                    ],
                    "start": 3377,
                    "end": 3397
                  },
                  "start": 3375,
                  "end": 3397
                },
                "accessibility": null,
                "static": false,
                "start": 3368,
                "end": 3397
              }
            ],
            "start": 3351,
            "end": 3399
          }
        ],
        "start": 3300,
        "end": 3399
      },
      "declare": false,
      "start": 3281,
      "end": 3400
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
            "name": "reducerBroken",
            "optional": false,
            "typeAnnotation": null,
            "start": 3408,
            "end": 3421
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "state",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 3432,
                    "end": 3438
                  },
                  "start": 3430,
                  "end": 3438
                },
                "start": 3425,
                "end": 3438
              },
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
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3442,
                      "end": 3446
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3442,
                      "end": 3446
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 3442,
                    "end": 3446
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "payload",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3448,
                      "end": 3455
                    },
                    "value": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "payload",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3448,
                      "end": 3455
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false,
                    "start": 3448,
                    "end": 3455
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
                      "name": "Action3",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3459,
                      "end": 3466
                    },
                    "typeArguments": null,
                    "start": 3459,
                    "end": 3466
                  },
                  "start": 3457,
                  "end": 3466
                },
                "start": 3440,
                "end": 3466
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "type",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3485,
                    "end": 3489
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "add",
                        "raw": "'add'",
                        "start": 3506,
                        "end": 3511
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3532,
                              "end": 3537
                            },
                            "operator": "+",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "payload",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3540,
                                "end": 3547
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toAdd",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3548,
                                "end": 3553
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3540,
                              "end": 3553
                            },
                            "start": 3532,
                            "end": 3553
                          },
                          "start": 3525,
                          "end": 3554
                        }
                      ],
                      "start": 3501,
                      "end": 3554
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "remove",
                        "raw": "'remove'",
                        "start": 3568,
                        "end": 3576
                      },
                      "consequent": [
                        {
                          "type": "ReturnStatement",
                          "argument": {
                            "type": "BinaryExpression",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "state",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3597,
                              "end": 3602
                            },
                            "operator": "-",
                            "right": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "payload",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3605,
                                "end": 3612
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "toRemove",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 3613,
                                "end": 3621
                              },
                              "optional": false,
                              "computed": false,
                              "start": 3605,
                              "end": 3621
                            },
                            "start": 3597,
                            "end": 3621
                          },
                          "start": 3590,
                          "end": 3622
                        }
                      ],
                      "start": 3563,
                      "end": 3622
                    }
                  ],
                  "start": 3477,
                  "end": 3628
                }
              ],
              "start": 3471,
              "end": 3630
            },
            "id": null,
            "generator": false,
            "start": 3424,
            "end": 3630
          },
          "definite": false,
          "start": 3408,
          "end": 3630
        }
      ],
      "declare": false,
      "start": 3402,
      "end": 3630
    },
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "it",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Iterator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3670,
                  "end": 3678
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSNumberKeyword",
                      "start": 3679,
                      "end": 3685
                    }
                  ],
                  "start": 3678,
                  "end": 3686
                },
                "start": 3670,
                "end": 3686
              },
              "start": 3668,
              "end": 3686
            },
            "start": 3666,
            "end": 3686
          },
          "init": null,
          "definite": false,
          "start": 3666,
          "end": 3686
        }
      ],
      "declare": true,
      "start": 3654,
      "end": 3687
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
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3696,
                  "end": 3701
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3696,
                  "end": 3701
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 3696,
                "end": 3701
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3703,
                  "end": 3707
                },
                "value": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "done",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3703,
                  "end": 3707
                },
                "method": false,
                "shorthand": true,
                "computed": false,
                "optional": false,
                "start": 3703,
                "end": 3707
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 3694,
            "end": 3709
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "it",
                "optional": false,
                "typeAnnotation": null,
                "start": 3712,
                "end": 3714
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "next",
                "optional": false,
                "typeAnnotation": null,
                "start": 3715,
                "end": 3719
              },
              "optional": false,
              "computed": false,
              "start": 3712,
              "end": 3719
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 3712,
            "end": 3721
          },
          "definite": false,
          "start": 3694,
          "end": 3721
        }
      ],
      "declare": false,
      "start": 3688,
      "end": 3722
    },
    {
      "type": "IfStatement",
      "test": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "done",
          "optional": false,
          "typeAnnotation": null,
          "start": 3728,
          "end": 3732
        },
        "prefix": true,
        "start": 3727,
        "end": 3732
      },
      "consequent": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "value",
              "optional": false,
              "typeAnnotation": null,
              "start": 3740,
              "end": 3745
            },
            "directive": null,
            "start": 3740,
            "end": 3746
          }
        ],
        "start": 3734,
        "end": 3759
      },
      "alternate": null,
      "start": 3723,
      "end": 3759
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f50",
        "optional": false,
        "typeAnnotation": null,
        "start": 3800,
        "end": 3803
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "cb",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 3812,
                    "end": 3816
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Args",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 3818,
                        "end": 3822
                      },
                      "typeArguments": null,
                      "start": 3818,
                      "end": 3822
                    },
                    "start": 3816,
                    "end": 3822
                  },
                  "value": null,
                  "start": 3809,
                  "end": 3822
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 3827,
                  "end": 3831
                },
                "start": 3824,
                "end": 3831
              },
              "start": 3808,
              "end": 3831
            },
            "start": 3806,
            "end": 3831
          },
          "start": 3804,
          "end": 3831
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 3834,
          "end": 3838
        },
        "start": 3832,
        "end": 3838
      },
      "body": null,
      "expression": false,
      "start": 3783,
      "end": 3838
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "f50",
          "optional": false,
          "typeAnnotation": null,
          "start": 3840,
          "end": 3843
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 3845,
                "end": 3849
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 3851,
                "end": 3855
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3870,
                      "end": 3874
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 3879,
                      "end": 3882
                    },
                    "start": 3870,
                    "end": 3882
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
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3894,
                              "end": 3898
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3899,
                              "end": 3906
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3894,
                            "end": 3906
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3894,
                          "end": 3908
                        },
                        "directive": null,
                        "start": 3894,
                        "end": 3909
                      }
                    ],
                    "start": 3884,
                    "end": 3915
                  },
                  "alternate": null,
                  "start": 3866,
                  "end": 3915
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3924,
                      "end": 3928
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 3933,
                      "end": 3936
                    },
                    "start": 3924,
                    "end": 3936
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
                              "name": "data",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3948,
                              "end": 3952
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 3953,
                              "end": 3964
                            },
                            "optional": false,
                            "computed": false,
                            "start": 3948,
                            "end": 3964
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 3948,
                          "end": 3966
                        },
                        "directive": null,
                        "start": 3948,
                        "end": 3967
                      }
                    ],
                    "start": 3938,
                    "end": 3973
                  },
                  "alternate": null,
                  "start": 3920,
                  "end": 3973
                }
              ],
              "start": 3860,
              "end": 3975
            },
            "id": null,
            "generator": false,
            "start": 3844,
            "end": 3975
          }
        ],
        "optional": false,
        "start": 3840,
        "end": 3976
      },
      "directive": null,
      "start": 3840,
      "end": 3977
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
            "name": "f51",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 3994,
                      "end": 3998
                    },
                    "optional": false,
                    "typeAnnotation": {
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
                                  "value": "A",
                                  "raw": "'A'",
                                  "start": 4001,
                                  "end": 4004
                                },
                                "start": 4001,
                                "end": 4004
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 4006,
                                "end": 4012
                              }
                            ],
                            "start": 4000,
                            "end": 4013
                          },
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "B",
                                  "raw": "'B'",
                                  "start": 4017,
                                  "end": 4020
                                },
                                "start": 4017,
                                "end": 4020
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 4022,
                                "end": 4028
                              }
                            ],
                            "start": 4016,
                            "end": 4029
                          }
                        ],
                        "start": 4000,
                        "end": 4029
                      },
                      "start": 3998,
                      "end": 4029
                    },
                    "value": null,
                    "start": 3991,
                    "end": 4029
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4034,
                    "end": 4038
                  },
                  "start": 4031,
                  "end": 4038
                },
                "start": 3990,
                "end": 4038
              },
              "start": 3988,
              "end": 4038
            },
            "start": 3985,
            "end": 4038
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 4042,
                "end": 4046
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 4048,
                "end": 4055
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4070,
                      "end": 4074
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 4079,
                      "end": 4082
                    },
                    "start": 4070,
                    "end": 4082
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4094,
                              "end": 4101
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4102,
                              "end": 4109
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4094,
                            "end": 4109
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 4094,
                          "end": 4111
                        },
                        "directive": null,
                        "start": 4094,
                        "end": 4112
                      }
                    ],
                    "start": 4084,
                    "end": 4118
                  },
                  "alternate": null,
                  "start": 4066,
                  "end": 4118
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4127,
                      "end": 4131
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "B",
                      "raw": "'B'",
                      "start": 4136,
                      "end": 4139
                    },
                    "start": 4127,
                    "end": 4139
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4151,
                              "end": 4158
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4159,
                              "end": 4170
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4151,
                            "end": 4170
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 4151,
                          "end": 4172
                        },
                        "directive": null,
                        "start": 4151,
                        "end": 4173
                      }
                    ],
                    "start": 4141,
                    "end": 4179
                  },
                  "alternate": null,
                  "start": 4123,
                  "end": 4179
                }
              ],
              "start": 4060,
              "end": 4181
            },
            "id": null,
            "generator": false,
            "start": 4041,
            "end": 4181
          },
          "definite": false,
          "start": 3985,
          "end": 4181
        }
      ],
      "declare": false,
      "start": 3979,
      "end": 4182
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
            "name": "f52",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4199,
                      "end": 4203
                    },
                    "optional": false,
                    "typeAnnotation": {
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
                                  "value": "A",
                                  "raw": "'A'",
                                  "start": 4206,
                                  "end": 4209
                                },
                                "start": 4206,
                                "end": 4209
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 4211,
                                "end": 4217
                              }
                            ],
                            "start": 4205,
                            "end": 4218
                          },
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "B",
                                  "raw": "'B'",
                                  "start": 4222,
                                  "end": 4225
                                },
                                "start": 4222,
                                "end": 4225
                              }
                            ],
                            "start": 4221,
                            "end": 4226
                          }
                        ],
                        "start": 4205,
                        "end": 4226
                      },
                      "start": 4203,
                      "end": 4226
                    },
                    "value": null,
                    "start": 4196,
                    "end": 4226
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4231,
                    "end": 4235
                  },
                  "start": 4228,
                  "end": 4235
                },
                "start": 4195,
                "end": 4235
              },
              "start": 4193,
              "end": 4235
            },
            "start": 4190,
            "end": 4235
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 4239,
                "end": 4243
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": true,
                "typeAnnotation": null,
                "start": 4245,
                "end": 4253
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4268,
                      "end": 4272
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "A",
                      "raw": "'A'",
                      "start": 4277,
                      "end": 4280
                    },
                    "start": 4268,
                    "end": 4280
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4292,
                              "end": 4299
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 4300,
                              "end": 4307
                            },
                            "optional": false,
                            "computed": false,
                            "start": 4292,
                            "end": 4307
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 4292,
                          "end": 4309
                        },
                        "directive": null,
                        "start": 4292,
                        "end": 4310
                      }
                    ],
                    "start": 4282,
                    "end": 4316
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "payload",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4336,
                          "end": 4343
                        },
                        "directive": null,
                        "start": 4336,
                        "end": 4344
                      }
                    ],
                    "start": 4326,
                    "end": 4364
                  },
                  "start": 4264,
                  "end": 4364
                }
              ],
              "start": 4258,
              "end": 4366
            },
            "id": null,
            "generator": false,
            "start": 4238,
            "end": 4366
          },
          "definite": false,
          "start": 4190,
          "end": 4366
        }
      ],
      "declare": false,
      "start": 4184,
      "end": 4367
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "readFile",
        "optional": false,
        "typeAnnotation": null,
        "start": 4386,
        "end": 4394
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "path",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSStringKeyword",
              "start": 4401,
              "end": 4407
            },
            "start": 4399,
            "end": 4407
          },
          "start": 4395,
          "end": 4407
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "callback",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSFunctionType",
              "typeParameters": null,
              "params": [
                {
                  "type": "RestElement",
                  "decorators": [],
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "args",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4423,
                    "end": 4427
                  },
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSUnionType",
                      "types": [
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSNamedTupleMember",
                              "label": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4430,
                                "end": 4433
                              },
                              "elementType": {
                                "type": "TSNullKeyword",
                                "start": 4435,
                                "end": 4439
                              },
                              "optional": false,
                              "start": 4430,
                              "end": 4439
                            },
                            {
                              "type": "TSNamedTupleMember",
                              "label": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4441,
                                "end": 4445
                              },
                              "elementType": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSUnknownKeyword",
                                  "start": 4447,
                                  "end": 4454
                                },
                                "start": 4447,
                                "end": 4456
                              },
                              "optional": false,
                              "start": 4441,
                              "end": 4456
                            }
                          ],
                          "start": 4429,
                          "end": 4457
                        },
                        {
                          "type": "TSTupleType",
                          "elementTypes": [
                            {
                              "type": "TSNamedTupleMember",
                              "label": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "err",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4461,
                                "end": 4464
                              },
                              "elementType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Error",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 4466,
                                  "end": 4471
                                },
                                "typeArguments": null,
                                "start": 4466,
                                "end": 4471
                              },
                              "optional": false,
                              "start": 4461,
                              "end": 4471
                            },
                            {
                              "type": "TSNamedTupleMember",
                              "label": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "data",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4473,
                                "end": 4477
                              },
                              "elementType": {
                                "type": "TSUndefinedKeyword",
                                "start": 4479,
                                "end": 4488
                              },
                              "optional": false,
                              "start": 4473,
                              "end": 4488
                            }
                          ],
                          "start": 4460,
                          "end": 4489
                        }
                      ],
                      "start": 4429,
                      "end": 4489
                    },
                    "start": 4427,
                    "end": 4489
                  },
                  "value": null,
                  "start": 4420,
                  "end": 4489
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 4494,
                  "end": 4498
                },
                "start": 4491,
                "end": 4498
              },
              "start": 4419,
              "end": 4498
            },
            "start": 4417,
            "end": 4498
          },
          "start": 4409,
          "end": 4498
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 4501,
          "end": 4505
        },
        "start": 4499,
        "end": 4505
      },
      "body": null,
      "expression": false,
      "start": 4369,
      "end": 4506
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "readFile",
          "optional": false,
          "typeAnnotation": null,
          "start": 4508,
          "end": 4516
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "hello",
            "raw": "'hello'",
            "start": 4517,
            "end": 4524
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "err",
                "optional": false,
                "typeAnnotation": null,
                "start": 4527,
                "end": 4530
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": null,
                "start": 4532,
                "end": 4536
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "err",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4551,
                      "end": 4554
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": null,
                      "raw": "null",
                      "start": 4559,
                      "end": 4563
                    },
                    "start": 4551,
                    "end": 4563
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
                            "name": "data",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4575,
                            "end": 4579
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "length",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4580,
                            "end": 4586
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4575,
                          "end": 4586
                        },
                        "directive": null,
                        "start": 4575,
                        "end": 4587
                      }
                    ],
                    "start": 4565,
                    "end": 4593
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
                            "name": "err",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4613,
                            "end": 4616
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "message",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 4617,
                            "end": 4624
                          },
                          "optional": false,
                          "computed": false,
                          "start": 4613,
                          "end": 4624
                        },
                        "directive": null,
                        "start": 4613,
                        "end": 4625
                      }
                    ],
                    "start": 4603,
                    "end": 4631
                  },
                  "start": 4547,
                  "end": 4631
                }
              ],
              "start": 4541,
              "end": 4633
            },
            "id": null,
            "generator": false,
            "start": 4526,
            "end": 4633
          }
        ],
        "optional": false,
        "start": 4508,
        "end": 4634
      },
      "directive": null,
      "start": 4508,
      "end": 4635
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ReducerArgs",
        "optional": false,
        "typeAnnotation": null,
        "start": 4642,
        "end": 4653
      },
      "typeParameters": null,
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
                  "value": "add",
                  "raw": "\"add\"",
                  "start": 4657,
                  "end": 4662
                },
                "start": 4657,
                "end": 4662
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4666,
                      "end": 4667
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4669,
                        "end": 4675
                      },
                      "start": 4667,
                      "end": 4675
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4666,
                    "end": 4676
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4677,
                      "end": 4678
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 4680,
                        "end": 4686
                      },
                      "start": 4678,
                      "end": 4686
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4677,
                    "end": 4686
                  }
                ],
                "start": 4664,
                "end": 4688
              }
            ],
            "start": 4656,
            "end": 4689
          },
          {
            "type": "TSTupleType",
            "elementTypes": [
              {
                "type": "TSLiteralType",
                "literal": {
                  "type": "Literal",
                  "value": "concat",
                  "raw": "\"concat\"",
                  "start": 4693,
                  "end": 4701
                },
                "start": 4693,
                "end": 4701
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
                      "name": "firstArr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4705,
                      "end": 4713
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 4715,
                          "end": 4718
                        },
                        "start": 4715,
                        "end": 4720
                      },
                      "start": 4713,
                      "end": 4720
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4705,
                    "end": 4721
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "secondArr",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4722,
                      "end": 4731
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSArrayType",
                        "elementType": {
                          "type": "TSAnyKeyword",
                          "start": 4733,
                          "end": 4736
                        },
                        "start": 4733,
                        "end": 4738
                      },
                      "start": 4731,
                      "end": 4738
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 4722,
                    "end": 4738
                  }
                ],
                "start": 4703,
                "end": 4740
              }
            ],
            "start": 4692,
            "end": 4741
          }
        ],
        "start": 4656,
        "end": 4741
      },
      "declare": false,
      "start": 4637,
      "end": 4742
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
            "name": "reducer",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 4763,
                      "end": 4767
                    },
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ReducerArgs",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 4769,
                          "end": 4780
                        },
                        "typeArguments": null,
                        "start": 4769,
                        "end": 4780
                      },
                      "start": 4767,
                      "end": 4780
                    },
                    "value": null,
                    "start": 4760,
                    "end": 4780
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 4785,
                    "end": 4789
                  },
                  "start": 4782,
                  "end": 4789
                },
                "start": 4759,
                "end": 4789
              },
              "start": 4757,
              "end": 4789
            },
            "start": 4750,
            "end": 4789
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "op",
                "optional": false,
                "typeAnnotation": null,
                "start": 4793,
                "end": 4795
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "args",
                "optional": false,
                "typeAnnotation": null,
                "start": 4797,
                "end": 4801
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "SwitchStatement",
                  "discriminant": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "op",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 4820,
                    "end": 4822
                  },
                  "cases": [
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "add",
                        "raw": "\"add\"",
                        "start": 4839,
                        "end": 4844
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4858,
                                "end": 4865
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4866,
                                "end": 4869
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4858,
                              "end": 4869
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "BinaryExpression",
                                "left": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4870,
                                    "end": 4874
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "a",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4875,
                                    "end": 4876
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4870,
                                  "end": 4876
                                },
                                "operator": "+",
                                "right": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "args",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4879,
                                    "end": 4883
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "b",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4884,
                                    "end": 4885
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4879,
                                  "end": 4885
                                },
                                "start": 4870,
                                "end": 4885
                              }
                            ],
                            "optional": false,
                            "start": 4858,
                            "end": 4886
                          },
                          "directive": null,
                          "start": 4858,
                          "end": 4887
                        },
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 4900,
                          "end": 4906
                        }
                      ],
                      "start": 4834,
                      "end": 4906
                    },
                    {
                      "type": "SwitchCase",
                      "test": {
                        "type": "Literal",
                        "value": "concat",
                        "raw": "\"concat\"",
                        "start": 4920,
                        "end": 4928
                      },
                      "consequent": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "CallExpression",
                            "callee": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "console",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4942,
                                "end": 4949
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "log",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 4950,
                                "end": 4953
                              },
                              "optional": false,
                              "computed": false,
                              "start": 4942,
                              "end": 4953
                            },
                            "typeArguments": null,
                            "arguments": [
                              {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4954,
                                      "end": 4958
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "firstArr",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4959,
                                      "end": 4967
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4954,
                                    "end": 4967
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "concat",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 4968,
                                    "end": 4974
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 4954,
                                  "end": 4974
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "args",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4975,
                                      "end": 4979
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "secondArr",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 4980,
                                      "end": 4989
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 4975,
                                    "end": 4989
                                  }
                                ],
                                "optional": false,
                                "start": 4954,
                                "end": 4990
                              }
                            ],
                            "optional": false,
                            "start": 4942,
                            "end": 4991
                          },
                          "directive": null,
                          "start": 4942,
                          "end": 4992
                        },
                        {
                          "type": "BreakStatement",
                          "label": null,
                          "start": 5005,
                          "end": 5011
                        }
                      ],
                      "start": 4915,
                      "end": 5011
                    }
                  ],
                  "start": 4812,
                  "end": 5017
                }
              ],
              "start": 4806,
              "end": 5019
            },
            "id": null,
            "generator": false,
            "start": 4792,
            "end": 5019
          },
          "definite": false,
          "start": 4750,
          "end": 5019
        }
      ],
      "declare": false,
      "start": 4744,
      "end": 5019
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "reducer",
          "optional": false,
          "typeAnnotation": null,
          "start": 5021,
          "end": 5028
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "add",
            "raw": "\"add\"",
            "start": 5029,
            "end": 5034
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5038,
                  "end": 5039
                },
                "value": {
                  "type": "Literal",
                  "value": 1,
                  "raw": "1",
                  "start": 5041,
                  "end": 5042
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5038,
                "end": 5042
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5044,
                  "end": 5045
                },
                "value": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 5047,
                  "end": 5048
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5044,
                "end": 5048
              }
            ],
            "start": 5036,
            "end": 5050
          }
        ],
        "optional": false,
        "start": 5021,
        "end": 5051
      },
      "directive": null,
      "start": 5021,
      "end": 5052
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "reducer",
          "optional": false,
          "typeAnnotation": null,
          "start": 5053,
          "end": 5060
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "concat",
            "raw": "\"concat\"",
            "start": 5061,
            "end": 5069
          },
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "firstArr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5073,
                  "end": 5081
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 5084,
                      "end": 5085
                    },
                    {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 5087,
                      "end": 5088
                    }
                  ],
                  "start": 5083,
                  "end": 5089
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5073,
                "end": 5089
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "secondArr",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5091,
                  "end": 5100
                },
                "value": {
                  "type": "ArrayExpression",
                  "elements": [
                    {
                      "type": "Literal",
                      "value": 3,
                      "raw": "3",
                      "start": 5103,
                      "end": 5104
                    },
                    {
                      "type": "Literal",
                      "value": 4,
                      "raw": "4",
                      "start": 5106,
                      "end": 5107
                    }
                  ],
                  "start": 5102,
                  "end": 5108
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5091,
                "end": 5108
              }
            ],
            "start": 5071,
            "end": 5110
          }
        ],
        "optional": false,
        "start": 5053,
        "end": 5111
      },
      "directive": null,
      "start": 5053,
      "end": 5112
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 5209,
        "end": 5218
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 5225,
              "end": 5231
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5235,
                  "end": 5239
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5246,
                              "end": 5250
                            },
                            "elementType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "str",
                                "raw": "\"str\"",
                                "start": 5252,
                                "end": 5257
                              },
                              "start": 5252,
                              "end": 5257
                            },
                            "optional": false,
                            "start": 5246,
                            "end": 5257
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5259,
                              "end": 5261
                            },
                            "elementType": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 5267,
                                      "end": 5273
                                    },
                                    "start": 5265,
                                    "end": 5273
                                  },
                                  "start": 5264,
                                  "end": 5273
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5278,
                                  "end": 5282
                                },
                                "start": 5275,
                                "end": 5282
                              },
                              "start": 5263,
                              "end": 5282
                            },
                            "optional": false,
                            "start": 5259,
                            "end": 5282
                          }
                        ],
                        "start": 5245,
                        "end": 5283
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5291,
                              "end": 5295
                            },
                            "elementType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "num",
                                "raw": "\"num\"",
                                "start": 5297,
                                "end": 5302
                              },
                              "start": 5297,
                              "end": 5302
                            },
                            "optional": false,
                            "start": 5291,
                            "end": 5302
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5304,
                              "end": 5306
                            },
                            "elementType": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 5312,
                                      "end": 5318
                                    },
                                    "start": 5310,
                                    "end": 5318
                                  },
                                  "start": 5309,
                                  "end": 5318
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5323,
                                  "end": 5327
                                },
                                "start": 5320,
                                "end": 5327
                              },
                              "start": 5308,
                              "end": 5327
                            },
                            "optional": false,
                            "start": 5304,
                            "end": 5327
                          }
                        ],
                        "start": 5290,
                        "end": 5328
                      }
                    ],
                    "start": 5245,
                    "end": 5328
                  },
                  "start": 5239,
                  "end": 5328
                },
                "value": null,
                "start": 5232,
                "end": 5328
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 5334,
                "end": 5338
              },
              "start": 5332,
              "end": 5338
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 5225,
            "end": 5339
          }
        ],
        "start": 5221,
        "end": 5341
      },
      "declare": false,
      "start": 5204,
      "end": 5341
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooM",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FooMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5353,
                  "end": 5362
                },
                "typeArguments": null,
                "start": 5353,
                "end": 5362
              },
              "start": 5351,
              "end": 5362
            },
            "start": 5347,
            "end": 5362
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5369,
                  "end": 5375
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5376,
                      "end": 5380
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5382,
                      "end": 5384
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
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
                            "start": 5396,
                            "end": 5400
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "value": "num",
                            "raw": "'num'",
                            "start": 5404,
                            "end": 5409
                          },
                          "start": 5396,
                          "end": 5409
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5419,
                                  "end": 5421
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 123,
                                    "raw": "123",
                                    "start": 5422,
                                    "end": 5425
                                  }
                                ],
                                "optional": false,
                                "start": 5419,
                                "end": 5426
                              },
                              "directive": null,
                              "start": 5419,
                              "end": 5426
                            }
                          ],
                          "start": 5411,
                          "end": 5432
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5446,
                                  "end": 5448
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "abc",
                                    "raw": "\"abc\"",
                                    "start": 5449,
                                    "end": 5454
                                  }
                                ],
                                "optional": false,
                                "start": 5446,
                                "end": 5455
                              },
                              "directive": null,
                              "start": 5446,
                              "end": 5455
                            }
                          ],
                          "start": 5438,
                          "end": 5461
                        },
                        "start": 5392,
                        "end": 5461
                      }
                    ],
                    "start": 5386,
                    "end": 5465
                  },
                  "expression": false,
                  "start": 5375,
                  "end": 5465
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5369,
                "end": 5465
              }
            ],
            "start": 5365,
            "end": 5467
          },
          "definite": false,
          "start": 5347,
          "end": 5467
        }
      ],
      "declare": false,
      "start": 5343,
      "end": 5468
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooAsyncMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 5475,
        "end": 5489
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 5496,
              "end": 5502
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5506,
                  "end": 5510
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5517,
                              "end": 5521
                            },
                            "elementType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "str",
                                "raw": "\"str\"",
                                "start": 5523,
                                "end": 5528
                              },
                              "start": 5523,
                              "end": 5528
                            },
                            "optional": false,
                            "start": 5517,
                            "end": 5528
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5530,
                              "end": 5532
                            },
                            "elementType": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 5538,
                                      "end": 5544
                                    },
                                    "start": 5536,
                                    "end": 5544
                                  },
                                  "start": 5535,
                                  "end": 5544
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5549,
                                  "end": 5553
                                },
                                "start": 5546,
                                "end": 5553
                              },
                              "start": 5534,
                              "end": 5553
                            },
                            "optional": false,
                            "start": 5530,
                            "end": 5553
                          }
                        ],
                        "start": 5516,
                        "end": 5554
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5562,
                              "end": 5566
                            },
                            "elementType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "num",
                                "raw": "\"num\"",
                                "start": 5568,
                                "end": 5573
                              },
                              "start": 5568,
                              "end": 5573
                            },
                            "optional": false,
                            "start": 5562,
                            "end": 5573
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5575,
                              "end": 5577
                            },
                            "elementType": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 5583,
                                      "end": 5589
                                    },
                                    "start": 5581,
                                    "end": 5589
                                  },
                                  "start": 5580,
                                  "end": 5589
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5594,
                                  "end": 5598
                                },
                                "start": 5591,
                                "end": 5598
                              },
                              "start": 5579,
                              "end": 5598
                            },
                            "optional": false,
                            "start": 5575,
                            "end": 5598
                          }
                        ],
                        "start": 5561,
                        "end": 5599
                      }
                    ],
                    "start": 5516,
                    "end": 5599
                  },
                  "start": 5510,
                  "end": 5599
                },
                "value": null,
                "start": 5503,
                "end": 5599
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5605,
                  "end": 5612
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 5613,
                      "end": 5616
                    }
                  ],
                  "start": 5612,
                  "end": 5617
                },
                "start": 5605,
                "end": 5617
              },
              "start": 5603,
              "end": 5617
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 5496,
            "end": 5618
          }
        ],
        "start": 5492,
        "end": 5620
      },
      "declare": false,
      "start": 5470,
      "end": 5620
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooAsyncM",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FooAsyncMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5637,
                  "end": 5651
                },
                "typeArguments": null,
                "start": 5637,
                "end": 5651
              },
              "start": 5635,
              "end": 5651
            },
            "start": 5626,
            "end": 5651
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5664,
                  "end": 5670
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": false,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5671,
                      "end": 5675
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5677,
                      "end": 5679
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
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
                            "start": 5691,
                            "end": 5695
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "value": "num",
                            "raw": "'num'",
                            "start": 5699,
                            "end": 5704
                          },
                          "start": 5691,
                          "end": 5704
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5714,
                                  "end": 5716
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 123,
                                    "raw": "123",
                                    "start": 5717,
                                    "end": 5720
                                  }
                                ],
                                "optional": false,
                                "start": 5714,
                                "end": 5721
                              },
                              "directive": null,
                              "start": 5714,
                              "end": 5721
                            }
                          ],
                          "start": 5706,
                          "end": 5727
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 5741,
                                  "end": 5743
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "abc",
                                    "raw": "\"abc\"",
                                    "start": 5744,
                                    "end": 5749
                                  }
                                ],
                                "optional": false,
                                "start": 5741,
                                "end": 5750
                              },
                              "directive": null,
                              "start": 5741,
                              "end": 5750
                            }
                          ],
                          "start": 5733,
                          "end": 5756
                        },
                        "start": 5687,
                        "end": 5756
                      }
                    ],
                    "start": 5681,
                    "end": 5760
                  },
                  "expression": false,
                  "start": 5670,
                  "end": 5760
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5658,
                "end": 5760
              }
            ],
            "start": 5654,
            "end": 5762
          },
          "definite": false,
          "start": 5626,
          "end": 5762
        }
      ],
      "declare": false,
      "start": 5622,
      "end": 5763
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooGenMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 5770,
        "end": 5782
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 5789,
              "end": 5795
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5799,
                  "end": 5803
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5810,
                              "end": 5814
                            },
                            "elementType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "str",
                                "raw": "\"str\"",
                                "start": 5816,
                                "end": 5821
                              },
                              "start": 5816,
                              "end": 5821
                            },
                            "optional": false,
                            "start": 5810,
                            "end": 5821
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5823,
                              "end": 5825
                            },
                            "elementType": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 5831,
                                      "end": 5837
                                    },
                                    "start": 5829,
                                    "end": 5837
                                  },
                                  "start": 5828,
                                  "end": 5837
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5842,
                                  "end": 5846
                                },
                                "start": 5839,
                                "end": 5846
                              },
                              "start": 5827,
                              "end": 5846
                            },
                            "optional": false,
                            "start": 5823,
                            "end": 5846
                          }
                        ],
                        "start": 5809,
                        "end": 5847
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5855,
                              "end": 5859
                            },
                            "elementType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "num",
                                "raw": "\"num\"",
                                "start": 5861,
                                "end": 5866
                              },
                              "start": 5861,
                              "end": 5866
                            },
                            "optional": false,
                            "start": 5855,
                            "end": 5866
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 5868,
                              "end": 5870
                            },
                            "elementType": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 5876,
                                      "end": 5882
                                    },
                                    "start": 5874,
                                    "end": 5882
                                  },
                                  "start": 5873,
                                  "end": 5882
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 5887,
                                  "end": 5891
                                },
                                "start": 5884,
                                "end": 5891
                              },
                              "start": 5872,
                              "end": 5891
                            },
                            "optional": false,
                            "start": 5868,
                            "end": 5891
                          }
                        ],
                        "start": 5854,
                        "end": 5892
                      }
                    ],
                    "start": 5809,
                    "end": 5892
                  },
                  "start": 5803,
                  "end": 5892
                },
                "value": null,
                "start": 5796,
                "end": 5892
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Generator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5898,
                  "end": 5907
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 5908,
                      "end": 5911
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 5913,
                      "end": 5916
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 5918,
                      "end": 5921
                    }
                  ],
                  "start": 5907,
                  "end": 5922
                },
                "start": 5898,
                "end": 5922
              },
              "start": 5896,
              "end": 5922
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 5789,
            "end": 5923
          }
        ],
        "start": 5785,
        "end": 5925
      },
      "declare": false,
      "start": 5765,
      "end": 5925
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooGenM",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FooGenMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5940,
                  "end": 5952
                },
                "typeArguments": null,
                "start": 5940,
                "end": 5952
              },
              "start": 5938,
              "end": 5952
            },
            "start": 5931,
            "end": 5952
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 5960,
                  "end": 5966
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": false,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5967,
                      "end": 5971
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 5973,
                      "end": 5975
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
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
                            "start": 5987,
                            "end": 5991
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "value": "num",
                            "raw": "'num'",
                            "start": 5995,
                            "end": 6000
                          },
                          "start": 5987,
                          "end": 6000
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6010,
                                  "end": 6012
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 123,
                                    "raw": "123",
                                    "start": 6013,
                                    "end": 6016
                                  }
                                ],
                                "optional": false,
                                "start": 6010,
                                "end": 6017
                              },
                              "directive": null,
                              "start": 6010,
                              "end": 6017
                            }
                          ],
                          "start": 6002,
                          "end": 6023
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6037,
                                  "end": 6039
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "abc",
                                    "raw": "\"abc\"",
                                    "start": 6040,
                                    "end": 6045
                                  }
                                ],
                                "optional": false,
                                "start": 6037,
                                "end": 6046
                              },
                              "directive": null,
                              "start": 6037,
                              "end": 6046
                            }
                          ],
                          "start": 6029,
                          "end": 6052
                        },
                        "start": 5983,
                        "end": 6052
                      }
                    ],
                    "start": 5977,
                    "end": 6056
                  },
                  "expression": false,
                  "start": 5966,
                  "end": 6056
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 5959,
                "end": 6056
              }
            ],
            "start": 5955,
            "end": 6058
          },
          "definite": false,
          "start": 5931,
          "end": 6058
        }
      ],
      "declare": false,
      "start": 5927,
      "end": 6059
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "FooAsyncGenMethod",
        "optional": false,
        "typeAnnotation": null,
        "start": 6066,
        "end": 6083
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSTypeLiteral",
        "members": [
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "method",
              "optional": false,
              "typeAnnotation": null,
              "start": 6090,
              "end": 6096
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "RestElement",
                "decorators": [],
                "argument": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "args",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6100,
                  "end": 6104
                },
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSUnionType",
                    "types": [
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6111,
                              "end": 6115
                            },
                            "elementType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "str",
                                "raw": "\"str\"",
                                "start": 6117,
                                "end": 6122
                              },
                              "start": 6117,
                              "end": 6122
                            },
                            "optional": false,
                            "start": 6111,
                            "end": 6122
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6124,
                              "end": 6126
                            },
                            "elementType": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSStringKeyword",
                                      "start": 6132,
                                      "end": 6138
                                    },
                                    "start": 6130,
                                    "end": 6138
                                  },
                                  "start": 6129,
                                  "end": 6138
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 6143,
                                  "end": 6147
                                },
                                "start": 6140,
                                "end": 6147
                              },
                              "start": 6128,
                              "end": 6147
                            },
                            "optional": false,
                            "start": 6124,
                            "end": 6147
                          }
                        ],
                        "start": 6110,
                        "end": 6148
                      },
                      {
                        "type": "TSTupleType",
                        "elementTypes": [
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "type",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6156,
                              "end": 6160
                            },
                            "elementType": {
                              "type": "TSLiteralType",
                              "literal": {
                                "type": "Literal",
                                "value": "num",
                                "raw": "\"num\"",
                                "start": 6162,
                                "end": 6167
                              },
                              "start": 6162,
                              "end": 6167
                            },
                            "optional": false,
                            "start": 6156,
                            "end": 6167
                          },
                          {
                            "type": "TSNamedTupleMember",
                            "label": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "cb",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6169,
                              "end": 6171
                            },
                            "elementType": {
                              "type": "TSFunctionType",
                              "typeParameters": null,
                              "params": [
                                {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "e",
                                  "optional": false,
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSNumberKeyword",
                                      "start": 6177,
                                      "end": 6183
                                    },
                                    "start": 6175,
                                    "end": 6183
                                  },
                                  "start": 6174,
                                  "end": 6183
                                }
                              ],
                              "returnType": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSVoidKeyword",
                                  "start": 6188,
                                  "end": 6192
                                },
                                "start": 6185,
                                "end": 6192
                              },
                              "start": 6173,
                              "end": 6192
                            },
                            "optional": false,
                            "start": 6169,
                            "end": 6192
                          }
                        ],
                        "start": 6155,
                        "end": 6193
                      }
                    ],
                    "start": 6110,
                    "end": 6193
                  },
                  "start": 6104,
                  "end": 6193
                },
                "value": null,
                "start": 6097,
                "end": 6193
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AsyncGenerator",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6199,
                  "end": 6213
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSAnyKeyword",
                      "start": 6214,
                      "end": 6217
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 6219,
                      "end": 6222
                    },
                    {
                      "type": "TSAnyKeyword",
                      "start": 6224,
                      "end": 6227
                    }
                  ],
                  "start": 6213,
                  "end": 6228
                },
                "start": 6199,
                "end": 6228
              },
              "start": 6197,
              "end": 6228
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 6090,
            "end": 6229
          }
        ],
        "start": 6086,
        "end": 6231
      },
      "declare": false,
      "start": 6061,
      "end": 6231
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "fooAsyncGenM",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "FooAsyncGenMethod",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6251,
                  "end": 6268
                },
                "typeArguments": null,
                "start": 6251,
                "end": 6268
              },
              "start": 6249,
              "end": 6268
            },
            "start": 6237,
            "end": 6268
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
                  "name": "method",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6282,
                  "end": 6288
                },
                "value": {
                  "type": "FunctionExpression",
                  "id": null,
                  "generator": true,
                  "async": true,
                  "declare": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "type",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6289,
                      "end": 6293
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "cb",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6295,
                      "end": 6297
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
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
                            "start": 6309,
                            "end": 6313
                          },
                          "operator": "==",
                          "right": {
                            "type": "Literal",
                            "value": "num",
                            "raw": "'num'",
                            "start": 6317,
                            "end": 6322
                          },
                          "start": 6309,
                          "end": 6322
                        },
                        "consequent": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6332,
                                  "end": 6334
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": 123,
                                    "raw": "123",
                                    "start": 6335,
                                    "end": 6338
                                  }
                                ],
                                "optional": false,
                                "start": 6332,
                                "end": 6339
                              },
                              "directive": null,
                              "start": 6332,
                              "end": 6339
                            }
                          ],
                          "start": 6324,
                          "end": 6345
                        },
                        "alternate": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "CallExpression",
                                "callee": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "cb",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 6359,
                                  "end": 6361
                                },
                                "typeArguments": null,
                                "arguments": [
                                  {
                                    "type": "Literal",
                                    "value": "abc",
                                    "raw": "\"abc\"",
                                    "start": 6362,
                                    "end": 6367
                                  }
                                ],
                                "optional": false,
                                "start": 6359,
                                "end": 6368
                              },
                              "directive": null,
                              "start": 6359,
                              "end": 6368
                            }
                          ],
                          "start": 6351,
                          "end": 6374
                        },
                        "start": 6305,
                        "end": 6374
                      }
                    ],
                    "start": 6299,
                    "end": 6378
                  },
                  "expression": false,
                  "start": 6288,
                  "end": 6378
                },
                "method": true,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 6275,
                "end": 6378
              }
            ],
            "start": 6271,
            "end": 6380
          },
          "definite": false,
          "start": 6237,
          "end": 6380
        }
      ],
      "declare": false,
      "start": 6233,
      "end": 6381
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Func",
        "optional": false,
        "typeAnnotation": null,
        "start": 6410,
        "end": 6414
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSFunctionType",
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
                "start": 6418,
                "end": 6419
              },
              "constraint": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "a",
                          "raw": "\"a\"",
                          "start": 6429,
                          "end": 6432
                        },
                        "start": 6429,
                        "end": 6432
                      },
                      {
                        "type": "TSNumberKeyword",
                        "start": 6434,
                        "end": 6440
                      }
                    ],
                    "start": 6428,
                    "end": 6441
                  },
                  {
                    "type": "TSTupleType",
                    "elementTypes": [
                      {
                        "type": "TSLiteralType",
                        "literal": {
                          "type": "Literal",
                          "value": "b",
                          "raw": "\"b\"",
                          "start": 6445,
                          "end": 6448
                        },
                        "start": 6445,
                        "end": 6448
                      },
                      {
                        "type": "TSStringKeyword",
                        "start": 6450,
                        "end": 6456
                      }
                    ],
                    "start": 6444,
                    "end": 6457
                  }
                ],
                "start": 6428,
                "end": 6457
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 6418,
              "end": 6457
            }
          ],
          "start": 6417,
          "end": 6458
        },
        "params": [
          {
            "type": "RestElement",
            "decorators": [],
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "args",
              "optional": false,
              "typeAnnotation": null,
              "start": 6462,
              "end": 6466
            },
            "optional": false,
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
                  "start": 6468,
                  "end": 6469
                },
                "typeArguments": null,
                "start": 6468,
                "end": 6469
              },
              "start": 6466,
              "end": 6469
            },
            "value": null,
            "start": 6459,
            "end": 6469
          }
        ],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSVoidKeyword",
            "start": 6474,
            "end": 6478
          },
          "start": 6471,
          "end": 6478
        },
        "start": 6417,
        "end": 6478
      },
      "declare": false,
      "start": 6405,
      "end": 6479
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
            "name": "f60",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Func",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6492,
                  "end": 6496
                },
                "typeArguments": null,
                "start": 6492,
                "end": 6496
              },
              "start": 6490,
              "end": 6496
            },
            "start": 6487,
            "end": 6496
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "kind",
                "optional": false,
                "typeAnnotation": null,
                "start": 6500,
                "end": 6504
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "payload",
                "optional": false,
                "typeAnnotation": null,
                "start": 6506,
                "end": 6513
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6528,
                      "end": 6532
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "\"a\"",
                      "start": 6537,
                      "end": 6540
                    },
                    "start": 6528,
                    "end": 6540
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6552,
                              "end": 6559
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toFixed",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6560,
                              "end": 6567
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6552,
                            "end": 6567
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 6552,
                          "end": 6569
                        },
                        "directive": null,
                        "start": 6552,
                        "end": 6570
                      }
                    ],
                    "start": 6542,
                    "end": 6586
                  },
                  "alternate": null,
                  "start": 6524,
                  "end": 6586
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "kind",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 6595,
                      "end": 6599
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "\"b\"",
                      "start": 6604,
                      "end": 6607
                    },
                    "start": 6595,
                    "end": 6607
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
                              "name": "payload",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6619,
                              "end": 6626
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "toUpperCase",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 6627,
                              "end": 6638
                            },
                            "optional": false,
                            "computed": false,
                            "start": 6619,
                            "end": 6638
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "optional": false,
                          "start": 6619,
                          "end": 6640
                        },
                        "directive": null,
                        "start": 6619,
                        "end": 6641
                      }
                    ],
                    "start": 6609,
                    "end": 6657
                  },
                  "alternate": null,
                  "start": 6591,
                  "end": 6657
                }
              ],
              "start": 6518,
              "end": 6659
            },
            "id": null,
            "generator": false,
            "start": 6499,
            "end": 6659
          },
          "definite": false,
          "start": 6487,
          "end": 6659
        }
      ],
      "declare": false,
      "start": 6481,
      "end": 6660
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 6693,
        "end": 6696
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
                "name": "value1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6703,
                "end": 6709
              },
              "value": {
                "type": "Identifier",
                "decorators": [],
                "name": "value1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6703,
                "end": 6709
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6703,
              "end": 6709
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test1",
                "optional": false,
                "typeAnnotation": null,
                "start": 6715,
                "end": 6720
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6715,
                  "end": 6720
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6723,
                    "end": 6729
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6730,
                    "end": 6735
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6723,
                  "end": 6735
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 6715,
                "end": 6735
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6715,
              "end": 6735
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test2",
                "optional": false,
                "typeAnnotation": null,
                "start": 6741,
                "end": 6746
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6741,
                  "end": 6746
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6749,
                    "end": 6755
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6756,
                    "end": 6761
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6749,
                  "end": 6761
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 6741,
                "end": 6761
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6741,
              "end": 6761
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test3",
                "optional": false,
                "typeAnnotation": null,
                "start": 6767,
                "end": 6772
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6767,
                  "end": 6772
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6775,
                    "end": 6781
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6782,
                    "end": 6787
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6775,
                  "end": 6787
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 6767,
                "end": 6787
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6767,
              "end": 6787
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test4",
                "optional": false,
                "typeAnnotation": null,
                "start": 6793,
                "end": 6798
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test4",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6793,
                  "end": 6798
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6801,
                    "end": 6807
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test4",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6808,
                    "end": 6813
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6801,
                  "end": 6813
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 6793,
                "end": 6813
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6793,
              "end": 6813
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test5",
                "optional": false,
                "typeAnnotation": null,
                "start": 6819,
                "end": 6824
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test5",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6819,
                  "end": 6824
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6827,
                    "end": 6833
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test5",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6834,
                    "end": 6839
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6827,
                  "end": 6839
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 6819,
                "end": 6839
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6819,
              "end": 6839
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test6",
                "optional": false,
                "typeAnnotation": null,
                "start": 6845,
                "end": 6850
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test6",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6845,
                  "end": 6850
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6853,
                    "end": 6859
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test6",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6860,
                    "end": 6865
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6853,
                  "end": 6865
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 6845,
                "end": 6865
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6845,
              "end": 6865
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test7",
                "optional": false,
                "typeAnnotation": null,
                "start": 6871,
                "end": 6876
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test7",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6871,
                  "end": 6876
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6879,
                    "end": 6885
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test7",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6886,
                    "end": 6891
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6879,
                  "end": 6891
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 6871,
                "end": 6891
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6871,
              "end": 6891
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test8",
                "optional": false,
                "typeAnnotation": null,
                "start": 6897,
                "end": 6902
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test8",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6897,
                  "end": 6902
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6905,
                    "end": 6911
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test8",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6912,
                    "end": 6917
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6905,
                  "end": 6917
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 6897,
                "end": 6917
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6897,
              "end": 6917
            },
            {
              "type": "Property",
              "kind": "init",
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "test9",
                "optional": false,
                "typeAnnotation": null,
                "start": 6923,
                "end": 6928
              },
              "value": {
                "type": "AssignmentPattern",
                "decorators": [],
                "left": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "test9",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 6923,
                  "end": 6928
                },
                "right": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "value1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6931,
                    "end": 6937
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "test9",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 6938,
                    "end": 6943
                  },
                  "optional": false,
                  "computed": false,
                  "start": 6931,
                  "end": 6943
                },
                "optional": false,
                "typeAnnotation": null,
                "start": 6923,
                "end": 6943
              },
              "method": false,
              "shorthand": true,
              "computed": false,
              "optional": false,
              "start": 6923,
              "end": 6943
            }
          ],
          "optional": false,
          "typeAnnotation": null,
          "start": 6697,
          "end": 6945
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 6947,
        "end": 6949
      },
      "expression": false,
      "start": 6684,
      "end": 6949
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa1",
        "optional": false,
        "typeAnnotation": null,
        "start": 6982,
        "end": 6985
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
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
                        "start": 6990,
                        "end": 6994
                      },
                      "start": 6990,
                      "end": 6994
                    },
                    {
                      "type": "TSNumberKeyword",
                      "start": 6996,
                      "end": 7002
                    }
                  ],
                  "start": 6989,
                  "end": 7003
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
                        "start": 7007,
                        "end": 7012
                      },
                      "start": 7007,
                      "end": 7012
                    },
                    {
                      "type": "TSStringKeyword",
                      "start": 7014,
                      "end": 7020
                    }
                  ],
                  "start": 7006,
                  "end": 7021
                }
              ],
              "start": 6989,
              "end": 7021
            },
            "start": 6987,
            "end": 7021
          },
          "start": 6986,
          "end": 7021
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
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "guard",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7036,
                      "end": 7041
                    },
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "value",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7043,
                      "end": 7048
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7035,
                  "end": 7049
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7052,
                  "end": 7053
                },
                "definite": false,
                "start": 7035,
                "end": 7053
              }
            ],
            "declare": false,
            "start": 7029,
            "end": 7054
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "guard",
              "optional": false,
              "typeAnnotation": null,
              "start": 7063,
              "end": 7068
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForStatement",
                  "init": null,
                  "test": null,
                  "update": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7103,
                          "end": 7108
                        },
                        "directive": null,
                        "start": 7103,
                        "end": 7109
                      }
                    ],
                    "start": 7089,
                    "end": 7130
                  },
                  "start": 7080,
                  "end": 7130
                }
              ],
              "start": 7070,
              "end": 7136
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7165,
                        "end": 7169
                      },
                      "prefix": true,
                      "start": 7164,
                      "end": 7169
                    },
                    "prefix": true,
                    "start": 7163,
                    "end": 7169
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7185,
                          "end": 7190
                        },
                        "directive": null,
                        "start": 7185,
                        "end": 7191
                      }
                    ],
                    "start": 7171,
                    "end": 7212
                  },
                  "start": 7156,
                  "end": 7212
                }
              ],
              "start": 7146,
              "end": 7218
            },
            "start": 7059,
            "end": 7218
          }
        ],
        "start": 7023,
        "end": 7220
      },
      "expression": false,
      "start": 6973,
      "end": 7220
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fa2",
        "optional": false,
        "typeAnnotation": null,
        "start": 7231,
        "end": 7234
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
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
                        "name": "guard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7240,
                        "end": 7245
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": true,
                            "raw": "true",
                            "start": 7247,
                            "end": 7251
                          },
                          "start": 7247,
                          "end": 7251
                        },
                        "start": 7245,
                        "end": 7251
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 7240,
                      "end": 7252
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7253,
                        "end": 7258
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 7260,
                          "end": 7266
                        },
                        "start": 7258,
                        "end": 7266
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 7253,
                      "end": 7266
                    }
                  ],
                  "start": 7238,
                  "end": 7268
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
                        "name": "guard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7273,
                        "end": 7278
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": false,
                            "raw": "false",
                            "start": 7280,
                            "end": 7285
                          },
                          "start": 7280,
                          "end": 7285
                        },
                        "start": 7278,
                        "end": 7285
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 7273,
                      "end": 7286
                    },
                    {
                      "type": "TSPropertySignature",
                      "computed": false,
                      "optional": false,
                      "readonly": false,
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7287,
                        "end": 7292
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 7294,
                          "end": 7300
                        },
                        "start": 7292,
                        "end": 7300
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 7287,
                      "end": 7300
                    }
                  ],
                  "start": 7271,
                  "end": 7302
                }
              ],
              "start": 7238,
              "end": 7302
            },
            "start": 7236,
            "end": 7302
          },
          "start": 7235,
          "end": 7302
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
                        "name": "guard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7318,
                        "end": 7323
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "guard",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7318,
                        "end": 7323
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 7318,
                      "end": 7323
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7325,
                        "end": 7330
                      },
                      "value": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7325,
                        "end": 7330
                      },
                      "method": false,
                      "shorthand": true,
                      "computed": false,
                      "optional": false,
                      "start": 7325,
                      "end": 7330
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7316,
                  "end": 7332
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 7335,
                  "end": 7336
                },
                "definite": false,
                "start": 7316,
                "end": 7336
              }
            ],
            "declare": false,
            "start": 7310,
            "end": 7337
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "Identifier",
              "decorators": [],
              "name": "guard",
              "optional": false,
              "typeAnnotation": null,
              "start": 7346,
              "end": 7351
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ForStatement",
                  "init": null,
                  "test": null,
                  "update": null,
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7386,
                          "end": 7391
                        },
                        "directive": null,
                        "start": 7386,
                        "end": 7392
                      }
                    ],
                    "start": 7372,
                    "end": 7413
                  },
                  "start": 7363,
                  "end": 7413
                }
              ],
              "start": 7353,
              "end": 7419
            },
            "alternate": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "WhileStatement",
                  "test": {
                    "type": "UnaryExpression",
                    "operator": "!",
                    "argument": {
                      "type": "UnaryExpression",
                      "operator": "!",
                      "argument": {
                        "type": "Literal",
                        "value": true,
                        "raw": "true",
                        "start": 7448,
                        "end": 7452
                      },
                      "prefix": true,
                      "start": 7447,
                      "end": 7452
                    },
                    "prefix": true,
                    "start": 7446,
                    "end": 7452
                  },
                  "body": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "value",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7468,
                          "end": 7473
                        },
                        "directive": null,
                        "start": 7468,
                        "end": 7474
                      }
                    ],
                    "start": 7454,
                    "end": 7495
                  },
                  "start": 7439,
                  "end": 7495
                }
              ],
              "start": 7429,
              "end": 7501
            },
            "start": 7342,
            "end": 7501
          }
        ],
        "start": 7304,
        "end": 7503
      },
      "expression": false,
      "start": 7222,
      "end": 7503
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
            "name": "fa3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7520,
                      "end": 7524
                    },
                    "optional": false,
                    "typeAnnotation": {
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
                                  "start": 7527,
                                  "end": 7531
                                },
                                "start": 7527,
                                "end": 7531
                              },
                              {
                                "type": "TSNumberKeyword",
                                "start": 7533,
                                "end": 7539
                              }
                            ],
                            "start": 7526,
                            "end": 7540
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
                                  "start": 7544,
                                  "end": 7549
                                },
                                "start": 7544,
                                "end": 7549
                              },
                              {
                                "type": "TSStringKeyword",
                                "start": 7551,
                                "end": 7557
                              }
                            ],
                            "start": 7543,
                            "end": 7558
                          }
                        ],
                        "start": 7526,
                        "end": 7558
                      },
                      "start": 7524,
                      "end": 7558
                    },
                    "value": null,
                    "start": 7517,
                    "end": 7558
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 7563,
                    "end": 7567
                  },
                  "start": 7560,
                  "end": 7567
                },
                "start": 7516,
                "end": 7567
              },
              "start": 7514,
              "end": 7567
            },
            "start": 7511,
            "end": 7567
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "guard",
                "optional": false,
                "typeAnnotation": null,
                "start": 7571,
                "end": 7576
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null,
                "start": 7578,
                "end": 7583
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "guard",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 7598,
                    "end": 7603
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ForStatement",
                        "init": null,
                        "test": null,
                        "update": null,
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7638,
                                "end": 7643
                              },
                              "directive": null,
                              "start": 7638,
                              "end": 7644
                            }
                          ],
                          "start": 7624,
                          "end": 7665
                        },
                        "start": 7615,
                        "end": 7665
                      }
                    ],
                    "start": 7605,
                    "end": 7671
                  },
                  "alternate": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "WhileStatement",
                        "test": {
                          "type": "UnaryExpression",
                          "operator": "!",
                          "argument": {
                            "type": "UnaryExpression",
                            "operator": "!",
                            "argument": {
                              "type": "Literal",
                              "value": true,
                              "raw": "true",
                              "start": 7700,
                              "end": 7704
                            },
                            "prefix": true,
                            "start": 7699,
                            "end": 7704
                          },
                          "prefix": true,
                          "start": 7698,
                          "end": 7704
                        },
                        "body": {
                          "type": "BlockStatement",
                          "body": [
                            {
                              "type": "ExpressionStatement",
                              "expression": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 7720,
                                "end": 7725
                              },
                              "directive": null,
                              "start": 7720,
                              "end": 7726
                            }
                          ],
                          "start": 7706,
                          "end": 7747
                        },
                        "start": 7691,
                        "end": 7747
                      }
                    ],
                    "start": 7681,
                    "end": 7753
                  },
                  "start": 7594,
                  "end": 7753
                }
              ],
              "start": 7588,
              "end": 7755
            },
            "id": null,
            "generator": false,
            "start": 7570,
            "end": 7755
          },
          "definite": false,
          "start": 7511,
          "end": 7755
        }
      ],
      "declare": false,
      "start": 7505,
      "end": 7755
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ClientEvents",
        "optional": false,
        "typeAnnotation": null,
        "start": 7789,
        "end": 7801
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "warn",
              "optional": false,
              "typeAnnotation": null,
              "start": 7808,
              "end": 7812
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7815,
                      "end": 7822
                    },
                    "elementType": {
                      "type": "TSStringKeyword",
                      "start": 7824,
                      "end": 7830
                    },
                    "optional": false,
                    "start": 7815,
                    "end": 7830
                  }
                ],
                "start": 7814,
                "end": 7831
              },
              "start": 7812,
              "end": 7831
            },
            "accessibility": null,
            "static": false,
            "start": 7808,
            "end": 7832
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "shardDisconnect",
              "optional": false,
              "typeAnnotation": null,
              "start": 7837,
              "end": 7852
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTupleType",
                "elementTypes": [
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "closeEvent",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7855,
                      "end": 7865
                    },
                    "elementType": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "CloseEvent",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7867,
                        "end": 7877
                      },
                      "typeArguments": null,
                      "start": 7867,
                      "end": 7877
                    },
                    "optional": false,
                    "start": 7855,
                    "end": 7877
                  },
                  {
                    "type": "TSNamedTupleMember",
                    "label": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shardId",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7879,
                      "end": 7886
                    },
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 7888,
                      "end": 7894
                    },
                    "optional": false,
                    "start": 7879,
                    "end": 7894
                  }
                ],
                "start": 7854,
                "end": 7895
              },
              "start": 7852,
              "end": 7895
            },
            "accessibility": null,
            "static": false,
            "start": 7837,
            "end": 7896
          }
        ],
        "start": 7802,
        "end": 7898
      },
      "declare": false,
      "start": 7779,
      "end": 7898
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Client",
        "optional": false,
        "typeAnnotation": null,
        "start": 7916,
        "end": 7922
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "on",
              "optional": false,
              "typeAnnotation": null,
              "start": 7936,
              "end": 7938
            },
            "value": {
              "type": "TSEmptyBodyFunctionExpression",
              "id": null,
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": {
                "type": "TSTypeParameterDeclaration",
                "params": [
                  {
                    "type": "TSTypeParameter",
                    "name": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "K",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 7939,
                      "end": 7940
                    },
                    "constraint": {
                      "type": "TSTypeOperator",
                      "operator": "keyof",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "ClientEvents",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 7955,
                          "end": 7967
                        },
                        "typeArguments": null,
                        "start": 7955,
                        "end": 7967
                      },
                      "start": 7949,
                      "end": 7967
                    },
                    "default": null,
                    "in": false,
                    "out": false,
                    "const": false,
                    "start": 7939,
                    "end": 7967
                  }
                ],
                "start": 7938,
                "end": 7968
              },
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "event",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 7976,
                        "end": 7977
                      },
                      "typeArguments": null,
                      "start": 7976,
                      "end": 7977
                    },
                    "start": 7974,
                    "end": 7977
                  },
                  "start": 7969,
                  "end": 7977
                },
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "listener",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "RestElement",
                          "decorators": [],
                          "argument": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "args",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 7993,
                            "end": 7997
                          },
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSIndexedAccessType",
                              "objectType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "ClientEvents",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 7999,
                                  "end": 8011
                                },
                                "typeArguments": null,
                                "start": 7999,
                                "end": 8011
                              },
                              "indexType": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "K",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 8012,
                                  "end": 8013
                                },
                                "typeArguments": null,
                                "start": 8012,
                                "end": 8013
                              },
                              "start": 7999,
                              "end": 8014
                            },
                            "start": 7997,
                            "end": 8014
                          },
                          "value": null,
                          "start": 7990,
                          "end": 8014
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 8019,
                          "end": 8023
                        },
                        "start": 8016,
                        "end": 8023
                      },
                      "start": 7989,
                      "end": 8023
                    },
                    "start": 7987,
                    "end": 8023
                  },
                  "start": 7979,
                  "end": 8023
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 8026,
                  "end": 8030
                },
                "start": 8024,
                "end": 8030
              },
              "body": null,
              "expression": false,
              "start": 7938,
              "end": 8031
            },
            "kind": "method",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 7929,
            "end": 8031
          }
        ],
        "start": 7923,
        "end": 8033
      },
      "abstract": false,
      "declare": true,
      "start": 7902,
      "end": 8033
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
            "name": "bot",
            "optional": false,
            "typeAnnotation": null,
            "start": 8041,
            "end": 8044
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Client",
              "optional": false,
              "typeAnnotation": null,
              "start": 8051,
              "end": 8057
            },
            "typeArguments": null,
            "arguments": [],
            "start": 8047,
            "end": 8059
          },
          "definite": false,
          "start": 8041,
          "end": 8059
        }
      ],
      "declare": false,
      "start": 8035,
      "end": 8060
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
            "name": "bot",
            "optional": false,
            "typeAnnotation": null,
            "start": 8061,
            "end": 8064
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null,
            "start": 8065,
            "end": 8067
          },
          "optional": false,
          "computed": false,
          "start": 8061,
          "end": 8067
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "shardDisconnect",
            "raw": "\"shardDisconnect\"",
            "start": 8068,
            "end": 8085
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": null,
                "start": 8088,
                "end": 8093
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "shard",
                "optional": false,
                "typeAnnotation": null,
                "start": 8095,
                "end": 8100
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8105,
                  "end": 8112
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8113,
                  "end": 8116
                },
                "optional": false,
                "computed": false,
                "start": 8105,
                "end": 8116
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "Shard ",
                        "cooked": "Shard "
                      },
                      "tail": false,
                      "start": 8117,
                      "end": 8126
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " disconnected (",
                        "cooked": " disconnected ("
                      },
                      "tail": false,
                      "start": 8131,
                      "end": 8149
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": ",",
                        "cooked": ","
                      },
                      "tail": false,
                      "start": 8159,
                      "end": 8163
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "): ",
                        "cooked": "): "
                      },
                      "tail": false,
                      "start": 8177,
                      "end": 8183
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 8195,
                      "end": 8197
                    }
                  ],
                  "expressions": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "shard",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8126,
                      "end": 8131
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8149,
                        "end": 8154
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "code",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8155,
                        "end": 8159
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8149,
                      "end": 8159
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8163,
                        "end": 8168
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wasClean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8169,
                        "end": 8177
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8163,
                      "end": 8177
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8183,
                        "end": 8188
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8189,
                        "end": 8195
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8183,
                      "end": 8195
                    }
                  ],
                  "start": 8117,
                  "end": 8197
                }
              ],
              "optional": false,
              "start": 8105,
              "end": 8198
            },
            "id": null,
            "generator": false,
            "start": 8087,
            "end": 8198
          }
        ],
        "optional": false,
        "start": 8061,
        "end": 8199
      },
      "directive": null,
      "start": 8061,
      "end": 8200
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
            "name": "bot",
            "optional": false,
            "typeAnnotation": null,
            "start": 8201,
            "end": 8204
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "on",
            "optional": false,
            "typeAnnotation": null,
            "start": 8205,
            "end": 8207
          },
          "optional": false,
          "computed": false,
          "start": 8201,
          "end": 8207
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "Literal",
            "value": "shardDisconnect",
            "raw": "\"shardDisconnect\"",
            "start": 8208,
            "end": 8225
          },
          {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "event",
                "optional": false,
                "typeAnnotation": null,
                "start": 8227,
                "end": 8232
              }
            ],
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "console",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8236,
                  "end": 8243
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "log",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8244,
                  "end": 8247
                },
                "optional": false,
                "computed": false,
                "start": 8236,
                "end": 8247
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "TemplateLiteral",
                  "quasis": [
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": false,
                      "start": 8248,
                      "end": 8251
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " ",
                        "cooked": " "
                      },
                      "tail": false,
                      "start": 8261,
                      "end": 8265
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": " ",
                        "cooked": " "
                      },
                      "tail": false,
                      "start": 8279,
                      "end": 8283
                    },
                    {
                      "type": "TemplateElement",
                      "value": {
                        "raw": "",
                        "cooked": ""
                      },
                      "tail": true,
                      "start": 8295,
                      "end": 8297
                    }
                  ],
                  "expressions": [
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8251,
                        "end": 8256
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "code",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8257,
                        "end": 8261
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8251,
                      "end": 8261
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8265,
                        "end": 8270
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "wasClean",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8271,
                        "end": 8279
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8265,
                      "end": 8279
                    },
                    {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8283,
                        "end": 8288
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "reason",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8289,
                        "end": 8295
                      },
                      "optional": false,
                      "computed": false,
                      "start": 8283,
                      "end": 8295
                    }
                  ],
                  "start": 8248,
                  "end": 8297
                }
              ],
              "optional": false,
              "start": 8236,
              "end": 8298
            },
            "id": null,
            "generator": false,
            "start": 8227,
            "end": 8298
          }
        ],
        "optional": false,
        "start": 8201,
        "end": 8299
      },
      "directive": null,
      "start": 8201,
      "end": 8300
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "fz1",
        "optional": false,
        "typeAnnotation": null,
        "start": 8364,
        "end": 8367
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 8369,
              "end": 8370
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 8372,
              "end": 8373
            }
          ],
          "optional": false,
          "typeAnnotation": {
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
                        "value": 1,
                        "raw": "1",
                        "start": 8377,
                        "end": 8378
                      },
                      "start": 8377,
                      "end": 8378
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 8380,
                        "end": 8381
                      },
                      "start": 8380,
                      "end": 8381
                    }
                  ],
                  "start": 8376,
                  "end": 8382
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 8386,
                        "end": 8387
                      },
                      "start": 8386,
                      "end": 8387
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 8389,
                        "end": 8390
                      },
                      "start": 8389,
                      "end": 8390
                    }
                  ],
                  "start": 8385,
                  "end": 8391
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 5,
                        "raw": "5",
                        "start": 8395,
                        "end": 8396
                      },
                      "start": 8395,
                      "end": 8396
                    }
                  ],
                  "start": 8394,
                  "end": 8397
                }
              ],
              "start": 8376,
              "end": 8397
            },
            "start": 8374,
            "end": 8397
          },
          "start": 8368,
          "end": 8397
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 8409,
                "end": 8410
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 8415,
                "end": 8416
              },
              "start": 8409,
              "end": 8416
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8428,
                    "end": 8429
                  },
                  "directive": null,
                  "start": 8428,
                  "end": 8430
                }
              ],
              "start": 8418,
              "end": 8442
            },
            "alternate": null,
            "start": 8405,
            "end": 8442
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 8451,
                "end": 8452
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 8457,
                "end": 8458
              },
              "start": 8451,
              "end": 8458
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8470,
                    "end": 8471
                  },
                  "directive": null,
                  "start": 8470,
                  "end": 8472
                }
              ],
              "start": 8460,
              "end": 8484
            },
            "alternate": null,
            "start": 8447,
            "end": 8484
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 8493,
                "end": 8494
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 8499,
                "end": 8508
              },
              "start": 8493,
              "end": 8508
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8520,
                    "end": 8521
                  },
                  "directive": null,
                  "start": 8520,
                  "end": 8522
                }
              ],
              "start": 8510,
              "end": 8534
            },
            "alternate": null,
            "start": 8489,
            "end": 8534
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
                "start": 8543,
                "end": 8544
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 8549,
                "end": 8550
              },
              "start": 8543,
              "end": 8550
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8562,
                    "end": 8563
                  },
                  "directive": null,
                  "start": 8562,
                  "end": 8564
                }
              ],
              "start": 8552,
              "end": 8576
            },
            "alternate": null,
            "start": 8539,
            "end": 8576
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
                "start": 8585,
                "end": 8586
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 8591,
                "end": 8592
              },
              "start": 8585,
              "end": 8592
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8604,
                    "end": 8605
                  },
                  "directive": null,
                  "start": 8604,
                  "end": 8606
                }
              ],
              "start": 8594,
              "end": 8618
            },
            "alternate": null,
            "start": 8581,
            "end": 8618
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
                "start": 8627,
                "end": 8628
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 5,
                "raw": "5",
                "start": 8633,
                "end": 8634
              },
              "start": 8627,
              "end": 8634
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 8646,
                    "end": 8647
                  },
                  "directive": null,
                  "start": 8646,
                  "end": 8648
                }
              ],
              "start": 8636,
              "end": 8668
            },
            "alternate": null,
            "start": 8623,
            "end": 8668
          }
        ],
        "start": 8399,
        "end": 8670
      },
      "expression": false,
      "start": 8355,
      "end": 8670
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "tooNarrow",
        "optional": false,
        "typeAnnotation": null,
        "start": 8703,
        "end": 8712
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 8714,
              "end": 8715
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 8717,
              "end": 8718
            }
          ],
          "optional": false,
          "typeAnnotation": {
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
                        "value": 1,
                        "raw": "1",
                        "start": 8722,
                        "end": 8723
                      },
                      "start": 8722,
                      "end": 8723
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 8725,
                        "end": 8726
                      },
                      "start": 8725,
                      "end": 8726
                    }
                  ],
                  "start": 8721,
                  "end": 8727
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 8731,
                        "end": 8732
                      },
                      "start": 8731,
                      "end": 8732
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 8734,
                        "end": 8735
                      },
                      "start": 8734,
                      "end": 8735
                    }
                  ],
                  "start": 8730,
                  "end": 8736
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 8740,
                        "end": 8741
                      },
                      "start": 8740,
                      "end": 8741
                    }
                  ],
                  "start": 8739,
                  "end": 8742
                }
              ],
              "start": 8721,
              "end": 8742
            },
            "start": 8719,
            "end": 8742
          },
          "start": 8713,
          "end": 8742
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 8754,
                "end": 8755
              },
              "operator": "===",
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null,
                "start": 8760,
                "end": 8769
              },
              "start": 8754,
              "end": 8769
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "const",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "shouldNotBeOk",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNeverKeyword",
                            "start": 8802,
                            "end": 8807
                          },
                          "start": 8800,
                          "end": 8807
                        },
                        "start": 8787,
                        "end": 8807
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 8810,
                        "end": 8811
                      },
                      "definite": false,
                      "start": 8787,
                      "end": 8811
                    }
                  ],
                  "declare": false,
                  "start": 8781,
                  "end": 8812
                }
              ],
              "start": 8771,
              "end": 8828
            },
            "alternate": null,
            "start": 8750,
            "end": 8828
          }
        ],
        "start": 8744,
        "end": 8830
      },
      "expression": false,
      "start": 8694,
      "end": 8830
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parameterReassigned1",
        "optional": false,
        "typeAnnotation": null,
        "start": 8898,
        "end": 8918
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 8920,
              "end": 8921
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 8923,
              "end": 8924
            }
          ],
          "optional": false,
          "typeAnnotation": {
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
                        "value": 1,
                        "raw": "1",
                        "start": 8928,
                        "end": 8929
                      },
                      "start": 8928,
                      "end": 8929
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 8931,
                        "end": 8932
                      },
                      "start": 8931,
                      "end": 8932
                    }
                  ],
                  "start": 8927,
                  "end": 8933
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 8937,
                        "end": 8938
                      },
                      "start": 8937,
                      "end": 8938
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 8940,
                        "end": 8941
                      },
                      "start": 8940,
                      "end": 8941
                    }
                  ],
                  "start": 8936,
                  "end": 8942
                }
              ],
              "start": 8927,
              "end": 8942
            },
            "start": 8925,
            "end": 8942
          },
          "start": 8919,
          "end": 8942
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8952,
                  "end": 8956
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 8957,
                  "end": 8963
                },
                "optional": false,
                "computed": false,
                "start": 8952,
                "end": 8963
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 8952,
              "end": 8965
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 8973,
                      "end": 8974
                    },
                    "right": {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 8977,
                      "end": 8978
                    },
                    "start": 8973,
                    "end": 8978
                  },
                  "directive": null,
                  "start": 8973,
                  "end": 8979
                }
              ],
              "start": 8967,
              "end": 8983
            },
            "alternate": null,
            "start": 8948,
            "end": 8983
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 8990,
                "end": 8991
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 8996,
                "end": 8997
              },
              "start": 8990,
              "end": 8997
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9005,
                    "end": 9006
                  },
                  "directive": null,
                  "start": 9005,
                  "end": 9007
                }
              ],
              "start": 8999,
              "end": 9020
            },
            "alternate": null,
            "start": 8986,
            "end": 9020
          }
        ],
        "start": 8944,
        "end": 9022
      },
      "expression": false,
      "start": 8889,
      "end": 9022
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "parameterReassigned2",
        "optional": false,
        "typeAnnotation": null,
        "start": 9033,
        "end": 9053
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "ArrayPattern",
          "decorators": [],
          "elements": [
            {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 9055,
              "end": 9056
            },
            {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 9058,
              "end": 9059
            }
          ],
          "optional": false,
          "typeAnnotation": {
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
                        "value": 1,
                        "raw": "1",
                        "start": 9063,
                        "end": 9064
                      },
                      "start": 9063,
                      "end": 9064
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 2,
                        "raw": "2",
                        "start": 9066,
                        "end": 9067
                      },
                      "start": 9066,
                      "end": 9067
                    }
                  ],
                  "start": 9062,
                  "end": 9068
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 3,
                        "raw": "3",
                        "start": 9072,
                        "end": 9073
                      },
                      "start": 9072,
                      "end": 9073
                    },
                    {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 4,
                        "raw": "4",
                        "start": 9075,
                        "end": 9076
                      },
                      "start": 9075,
                      "end": 9076
                    }
                  ],
                  "start": 9071,
                  "end": 9077
                }
              ],
              "start": 9062,
              "end": 9077
            },
            "start": 9060,
            "end": 9077
          },
          "start": 9054,
          "end": 9077
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Math",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9087,
                  "end": 9091
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "random",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 9092,
                  "end": 9098
                },
                "optional": false,
                "computed": false,
                "start": 9087,
                "end": 9098
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 9087,
              "end": 9100
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "AssignmentExpression",
                    "operator": "=",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9108,
                      "end": 9109
                    },
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 9112,
                      "end": 9113
                    },
                    "start": 9108,
                    "end": 9113
                  },
                  "directive": null,
                  "start": 9108,
                  "end": 9114
                }
              ],
              "start": 9102,
              "end": 9118
            },
            "alternate": null,
            "start": 9083,
            "end": 9118
          },
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 9125,
                "end": 9126
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 9131,
                "end": 9132
              },
              "start": 9125,
              "end": 9132
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 9140,
                    "end": 9141
                  },
                  "directive": null,
                  "start": 9140,
                  "end": 9142
                }
              ],
              "start": 9134,
              "end": 9155
            },
            "alternate": null,
            "start": 9121,
            "end": 9155
          }
        ],
        "start": 9079,
        "end": 9157
      },
      "expression": false,
      "start": 9024,
      "end": 9157
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
            "name": "parameterReassignedContextualRest1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
                "typeParameters": null,
                "params": [
                  {
                    "type": "RestElement",
                    "decorators": [],
                    "argument": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "args",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9283,
                      "end": 9287
                    },
                    "optional": false,
                    "typeAnnotation": {
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
                                  "value": 1,
                                  "raw": "1",
                                  "start": 9290,
                                  "end": 9291
                                },
                                "start": 9290,
                                "end": 9291
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 2,
                                  "raw": "2",
                                  "start": 9293,
                                  "end": 9294
                                },
                                "start": 9293,
                                "end": 9294
                              }
                            ],
                            "start": 9289,
                            "end": 9295
                          },
                          {
                            "type": "TSTupleType",
                            "elementTypes": [
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 3,
                                  "raw": "3",
                                  "start": 9299,
                                  "end": 9300
                                },
                                "start": 9299,
                                "end": 9300
                              },
                              {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": 4,
                                  "raw": "4",
                                  "start": 9302,
                                  "end": 9303
                                },
                                "start": 9302,
                                "end": 9303
                              }
                            ],
                            "start": 9298,
                            "end": 9304
                          }
                        ],
                        "start": 9289,
                        "end": 9304
                      },
                      "start": 9287,
                      "end": 9304
                    },
                    "value": null,
                    "start": 9280,
                    "end": 9304
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 9309,
                    "end": 9313
                  },
                  "start": 9306,
                  "end": 9313
                },
                "start": 9279,
                "end": 9313
              },
              "start": 9277,
              "end": 9313
            },
            "start": 9243,
            "end": 9313
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 9317,
                "end": 9318
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "y",
                "optional": false,
                "typeAnnotation": null,
                "start": 9320,
                "end": 9321
              }
            ],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Math",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9334,
                        "end": 9338
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "random",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 9339,
                        "end": 9345
                      },
                      "optional": false,
                      "computed": false,
                      "start": 9334,
                      "end": 9345
                    },
                    "typeArguments": null,
                    "arguments": [],
                    "optional": false,
                    "start": 9334,
                    "end": 9347
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "AssignmentExpression",
                          "operator": "=",
                          "left": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 9355,
                            "end": 9356
                          },
                          "right": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 9359,
                            "end": 9360
                          },
                          "start": 9355,
                          "end": 9360
                        },
                        "directive": null,
                        "start": 9355,
                        "end": 9361
                      }
                    ],
                    "start": 9349,
                    "end": 9365
                  },
                  "alternate": null,
                  "start": 9330,
                  "end": 9365
                },
                {
                  "type": "IfStatement",
                  "test": {
                    "type": "BinaryExpression",
                    "left": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 9372,
                      "end": 9373
                    },
                    "operator": "===",
                    "right": {
                      "type": "Literal",
                      "value": 2,
                      "raw": "2",
                      "start": 9378,
                      "end": 9379
                    },
                    "start": 9372,
                    "end": 9379
                  },
                  "consequent": {
                    "type": "BlockStatement",
                    "body": [
                      {
                        "type": "ExpressionStatement",
                        "expression": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 9387,
                          "end": 9388
                        },
                        "directive": null,
                        "start": 9387,
                        "end": 9389
                      }
                    ],
                    "start": 9381,
                    "end": 9402
                  },
                  "alternate": null,
                  "start": 9368,
                  "end": 9402
                }
              ],
              "start": 9326,
              "end": 9404
            },
            "id": null,
            "generator": false,
            "start": 9316,
            "end": 9404
          },
          "definite": false,
          "start": 9243,
          "end": 9404
        }
      ],
      "declare": false,
      "start": 9237,
      "end": 9404
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 9404
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
    "value": "Action",
    "start": 5,
    "end": 11,
    "range": [
      5,
      11
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 12,
    "end": 13,
    "range": [
      12,
      13
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 18,
    "end": 19,
    "range": [
      18,
      19
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21,
    "range": [
      20,
      21
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 22,
    "end": 26,
    "range": [
      22,
      26
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27,
    "range": [
      26,
      27
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 28,
    "end": 31,
    "range": [
      28,
      31
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 31,
    "end": 32,
    "range": [
      31,
      32
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 33,
    "end": 40,
    "range": [
      33,
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
    "type": "Identifier",
    "value": "number",
    "start": 42,
    "end": 48,
    "range": [
      42,
      48
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 49,
    "end": 50,
    "range": [
      49,
      50
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 55,
    "end": 56,
    "range": [
      55,
      56
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 57,
    "end": 58,
    "range": [
      57,
      58
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 59,
    "end": 63,
    "range": [
      59,
      63
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 63,
    "end": 64,
    "range": [
      63,
      64
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 65,
    "end": 68,
    "range": [
      65,
      68
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 68,
    "end": 69,
    "range": [
      68,
      69
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 70,
    "end": 77,
    "range": [
      70,
      77
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 77,
    "end": 78,
    "range": [
      77,
      78
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 79,
    "end": 85,
    "range": [
      79,
      85
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87,
    "range": [
      86,
      87
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 87,
    "end": 88,
    "range": [
      87,
      88
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 90,
    "end": 98,
    "range": [
      90,
      98
    ]
  },
  {
    "type": "Identifier",
    "value": "f10",
    "start": 99,
    "end": 102,
    "range": [
      99,
      102
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 102,
    "end": 103,
    "range": [
      102,
      103
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 103,
    "end": 104,
    "range": [
      103,
      104
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 105,
    "end": 109,
    "range": [
      105,
      109
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 109,
    "end": 110,
    "range": [
      109,
      110
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 111,
    "end": 118,
    "range": [
      111,
      118
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 119,
    "end": 120,
    "range": [
      119,
      120
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 120,
    "end": 121,
    "range": [
      120,
      121
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 122,
    "end": 128,
    "range": [
      122,
      128
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 128,
    "end": 129,
    "range": [
      128,
      129
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 130,
    "end": 131,
    "range": [
      130,
      131
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 136,
    "end": 138,
    "range": [
      136,
      138
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140,
    "range": [
      139,
      140
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 140,
    "end": 144,
    "range": [
      140,
      144
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 145,
    "end": 148,
    "range": [
      145,
      148
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 149,
    "end": 152,
    "range": [
      149,
      152
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 152,
    "end": 153,
    "range": [
      152,
      153
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 154,
    "end": 155,
    "range": [
      154,
      155
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 164,
    "end": 171,
    "range": [
      164,
      171
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 171,
    "end": 172,
    "range": [
      171,
      172
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 172,
    "end": 179,
    "range": [
      172,
      179
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180,
    "range": [
      179,
      180
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 180,
    "end": 181,
    "range": [
      180,
      181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 181,
    "end": 182,
    "range": [
      181,
      182
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 187,
    "end": 188,
    "range": [
      187,
      188
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 193,
    "end": 195,
    "range": [
      193,
      195
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 196,
    "end": 197,
    "range": [
      196,
      197
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 197,
    "end": 201,
    "range": [
      197,
      201
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 202,
    "end": 205,
    "range": [
      202,
      205
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 206,
    "end": 209,
    "range": [
      206,
      209
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 209,
    "end": 210,
    "range": [
      209,
      210
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 211,
    "end": 212,
    "range": [
      211,
      212
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 221,
    "end": 228,
    "range": [
      221,
      228
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 228,
    "end": 229,
    "range": [
      228,
      229
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 229,
    "end": 240,
    "range": [
      229,
      240
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 240,
    "end": 241,
    "range": [
      240,
      241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 241,
    "end": 242,
    "range": [
      241,
      242
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 242,
    "end": 243,
    "range": [
      242,
      243
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 248,
    "end": 249,
    "range": [
      248,
      249
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251,
    "range": [
      250,
      251
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 253,
    "end": 261,
    "range": [
      253,
      261
    ]
  },
  {
    "type": "Identifier",
    "value": "f11",
    "start": 262,
    "end": 265,
    "range": [
      262,
      265
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 265,
    "end": 266,
    "range": [
      265,
      266
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 266,
    "end": 272,
    "range": [
      266,
      272
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273,
    "range": [
      272,
      273
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 274,
    "end": 280,
    "range": [
      274,
      280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 280,
    "end": 281,
    "range": [
      280,
      281
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 282,
    "end": 283,
    "range": [
      282,
      283
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 288,
    "end": 293,
    "range": [
      288,
      293
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 294,
    "end": 295,
    "range": [
      294,
      295
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 296,
    "end": 300,
    "range": [
      296,
      300
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 300,
    "end": 301,
    "range": [
      300,
      301
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 302,
    "end": 309,
    "range": [
      302,
      309
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 310,
    "end": 311,
    "range": [
      310,
      311
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 312,
    "end": 313,
    "range": [
      312,
      313
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 314,
    "end": 320,
    "range": [
      314,
      320
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 320,
    "end": 321,
    "range": [
      320,
      321
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 326,
    "end": 328,
    "range": [
      326,
      328
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 329,
    "end": 330,
    "range": [
      329,
      330
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 330,
    "end": 334,
    "range": [
      330,
      334
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 335,
    "end": 338,
    "range": [
      335,
      338
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 339,
    "end": 342,
    "range": [
      339,
      342
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 342,
    "end": 343,
    "range": [
      342,
      343
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 344,
    "end": 345,
    "range": [
      344,
      345
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 354,
    "end": 361,
    "range": [
      354,
      361
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 361,
    "end": 362,
    "range": [
      361,
      362
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 362,
    "end": 369,
    "range": [
      362,
      369
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 369,
    "end": 370,
    "range": [
      369,
      370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 370,
    "end": 371,
    "range": [
      370,
      371
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 371,
    "end": 372,
    "range": [
      371,
      372
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378,
    "range": [
      377,
      378
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 383,
    "end": 385,
    "range": [
      383,
      385
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 386,
    "end": 387,
    "range": [
      386,
      387
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 387,
    "end": 391,
    "range": [
      387,
      391
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 392,
    "end": 395,
    "range": [
      392,
      395
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 396,
    "end": 399,
    "range": [
      396,
      399
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 399,
    "end": 400,
    "range": [
      399,
      400
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 401,
    "end": 402,
    "range": [
      401,
      402
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 411,
    "end": 418,
    "range": [
      411,
      418
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 418,
    "end": 419,
    "range": [
      418,
      419
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 419,
    "end": 430,
    "range": [
      419,
      430
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 430,
    "end": 431,
    "range": [
      430,
      431
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 431,
    "end": 432,
    "range": [
      431,
      432
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433,
    "range": [
      432,
      433
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 438,
    "end": 439,
    "range": [
      438,
      439
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 440,
    "end": 441,
    "range": [
      440,
      441
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 443,
    "end": 451,
    "range": [
      443,
      451
    ]
  },
  {
    "type": "Identifier",
    "value": "f12",
    "start": 452,
    "end": 455,
    "range": [
      452,
      455
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 455,
    "end": 456,
    "range": [
      455,
      456
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 456,
    "end": 457,
    "range": [
      456,
      457
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 458,
    "end": 462,
    "range": [
      458,
      462
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 462,
    "end": 463,
    "range": [
      462,
      463
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 464,
    "end": 471,
    "range": [
      464,
      471
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473,
    "range": [
      472,
      473
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 473,
    "end": 474,
    "range": [
      473,
      474
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 475,
    "end": 481,
    "range": [
      475,
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
    "value": "{",
    "start": 483,
    "end": 484,
    "range": [
      483,
      484
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 489,
    "end": 495,
    "range": [
      489,
      495
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 496,
    "end": 497,
    "range": [
      496,
      497
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 497,
    "end": 501,
    "range": [
      497,
      501
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 501,
    "end": 502,
    "range": [
      501,
      502
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504,
    "range": [
      503,
      504
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 513,
    "end": 517,
    "range": [
      513,
      517
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 518,
    "end": 521,
    "range": [
      518,
      521
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522,
    "range": [
      521,
      522
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 535,
    "end": 542,
    "range": [
      535,
      542
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 542,
    "end": 543,
    "range": [
      542,
      543
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 543,
    "end": 550,
    "range": [
      543,
      550
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 550,
    "end": 551,
    "range": [
      550,
      551
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 551,
    "end": 552,
    "range": [
      551,
      552
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 552,
    "end": 553,
    "range": [
      552,
      553
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 566,
    "end": 571,
    "range": [
      566,
      571
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572,
    "range": [
      571,
      572
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 581,
    "end": 585,
    "range": [
      581,
      585
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 586,
    "end": 589,
    "range": [
      586,
      589
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 589,
    "end": 590,
    "range": [
      589,
      590
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 603,
    "end": 610,
    "range": [
      603,
      610
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 610,
    "end": 611,
    "range": [
      610,
      611
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 611,
    "end": 622,
    "range": [
      611,
      622
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 622,
    "end": 623,
    "range": [
      622,
      623
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 623,
    "end": 624,
    "range": [
      623,
      624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 624,
    "end": 625,
    "range": [
      624,
      625
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 638,
    "end": 643,
    "range": [
      638,
      643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 643,
    "end": 644,
    "range": [
      643,
      644
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 653,
    "end": 660,
    "range": [
      653,
      660
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 660,
    "end": 661,
    "range": [
      660,
      661
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 674,
    "end": 681,
    "range": [
      674,
      681
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 681,
    "end": 682,
    "range": [
      681,
      682
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698,
    "range": [
      697,
      698
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700,
    "range": [
      699,
      700
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 718,
    "end": 726,
    "range": [
      718,
      726
    ]
  },
  {
    "type": "Identifier",
    "value": "f13",
    "start": 727,
    "end": 730,
    "range": [
      727,
      730
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 730,
    "end": 731,
    "range": [
      730,
      731
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 731,
    "end": 732,
    "range": [
      731,
      732
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 733,
    "end": 740,
    "range": [
      733,
      740
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 741,
    "end": 747,
    "range": [
      741,
      747
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 747,
    "end": 748,
    "range": [
      747,
      748
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 748,
    "end": 749,
    "range": [
      748,
      749
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 749,
    "end": 750,
    "range": [
      749,
      750
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 751,
    "end": 755,
    "range": [
      751,
      755
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 755,
    "end": 756,
    "range": [
      755,
      756
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 757,
    "end": 764,
    "range": [
      757,
      764
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 765,
    "end": 766,
    "range": [
      765,
      766
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 766,
    "end": 767,
    "range": [
      766,
      767
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 768,
    "end": 769,
    "range": [
      768,
      769
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 769,
    "end": 770,
    "range": [
      769,
      770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 771,
    "end": 772,
    "range": [
      771,
      772
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 777,
    "end": 779,
    "range": [
      777,
      779
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 780,
    "end": 781,
    "range": [
      780,
      781
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 781,
    "end": 785,
    "range": [
      781,
      785
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 786,
    "end": 789,
    "range": [
      786,
      789
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 790,
    "end": 793,
    "range": [
      790,
      793
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 793,
    "end": 794,
    "range": [
      793,
      794
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 795,
    "end": 796,
    "range": [
      795,
      796
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 805,
    "end": 812,
    "range": [
      805,
      812
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 812,
    "end": 813,
    "range": [
      812,
      813
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 813,
    "end": 820,
    "range": [
      813,
      820
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 820,
    "end": 821,
    "range": [
      820,
      821
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 821,
    "end": 822,
    "range": [
      821,
      822
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 822,
    "end": 823,
    "range": [
      822,
      823
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 828,
    "end": 829,
    "range": [
      828,
      829
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 834,
    "end": 836,
    "range": [
      834,
      836
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 837,
    "end": 838,
    "range": [
      837,
      838
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 838,
    "end": 842,
    "range": [
      838,
      842
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 843,
    "end": 846,
    "range": [
      843,
      846
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 847,
    "end": 850,
    "range": [
      847,
      850
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 850,
    "end": 851,
    "range": [
      850,
      851
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 852,
    "end": 853,
    "range": [
      852,
      853
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 862,
    "end": 869,
    "range": [
      862,
      869
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 869,
    "end": 870,
    "range": [
      869,
      870
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 870,
    "end": 881,
    "range": [
      870,
      881
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 881,
    "end": 882,
    "range": [
      881,
      882
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 882,
    "end": 883,
    "range": [
      882,
      883
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 883,
    "end": 884,
    "range": [
      883,
      884
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890,
    "range": [
      889,
      890
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 891,
    "end": 892,
    "range": [
      891,
      892
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 894,
    "end": 902,
    "range": [
      894,
      902
    ]
  },
  {
    "type": "Identifier",
    "value": "f14",
    "start": 903,
    "end": 906,
    "range": [
      903,
      906
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 906,
    "end": 907,
    "range": [
      906,
      907
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 907,
    "end": 908,
    "range": [
      907,
      908
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 909,
    "end": 916,
    "range": [
      909,
      916
    ]
  },
  {
    "type": "Identifier",
    "value": "Action",
    "start": 917,
    "end": 923,
    "range": [
      917,
      923
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 923,
    "end": 924,
    "range": [
      923,
      924
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 924,
    "end": 925,
    "range": [
      924,
      925
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 925,
    "end": 926,
    "range": [
      925,
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
    "value": "T",
    "start": 928,
    "end": 929,
    "range": [
      928,
      929
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 929,
    "end": 930,
    "range": [
      929,
      930
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 931,
    "end": 932,
    "range": [
      931,
      932
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 937,
    "end": 942,
    "range": [
      937,
      942
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 943,
    "end": 944,
    "range": [
      943,
      944
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 945,
    "end": 949,
    "range": [
      945,
      949
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 949,
    "end": 950,
    "range": [
      949,
      950
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 951,
    "end": 958,
    "range": [
      951,
      958
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 959,
    "end": 960,
    "range": [
      959,
      960
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 961,
    "end": 962,
    "range": [
      961,
      962
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 963,
    "end": 964,
    "range": [
      963,
      964
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 964,
    "end": 965,
    "range": [
      964,
      965
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 970,
    "end": 972,
    "range": [
      970,
      972
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 973,
    "end": 974,
    "range": [
      973,
      974
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 974,
    "end": 978,
    "range": [
      974,
      978
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 979,
    "end": 982,
    "range": [
      979,
      982
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 983,
    "end": 986,
    "range": [
      983,
      986
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 986,
    "end": 987,
    "range": [
      986,
      987
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 988,
    "end": 989,
    "range": [
      988,
      989
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 998,
    "end": 1005,
    "range": [
      998,
      1005
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1005,
    "end": 1006,
    "range": [
      1005,
      1006
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1006,
    "end": 1013,
    "range": [
      1006,
      1013
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1013,
    "end": 1014,
    "range": [
      1013,
      1014
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1014,
    "end": 1015,
    "range": [
      1014,
      1015
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016,
    "range": [
      1015,
      1016
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1021,
    "end": 1022,
    "range": [
      1021,
      1022
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1027,
    "end": 1029,
    "range": [
      1027,
      1029
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1030,
    "end": 1031,
    "range": [
      1030,
      1031
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1031,
    "end": 1035,
    "range": [
      1031,
      1035
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1036,
    "end": 1039,
    "range": [
      1036,
      1039
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1040,
    "end": 1043,
    "range": [
      1040,
      1043
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1043,
    "end": 1044,
    "range": [
      1043,
      1044
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1045,
    "end": 1046,
    "range": [
      1045,
      1046
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1055,
    "end": 1062,
    "range": [
      1055,
      1062
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1062,
    "end": 1063,
    "range": [
      1062,
      1063
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 1063,
    "end": 1074,
    "range": [
      1063,
      1074
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1074,
    "end": 1075,
    "range": [
      1074,
      1075
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1075,
    "end": 1076,
    "range": [
      1075,
      1076
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1076,
    "end": 1077,
    "range": [
      1076,
      1077
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1082,
    "end": 1083,
    "range": [
      1082,
      1083
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1084,
    "end": 1085,
    "range": [
      1084,
      1085
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 1087,
    "end": 1091,
    "range": [
      1087,
      1091
    ]
  },
  {
    "type": "Identifier",
    "value": "Action2",
    "start": 1092,
    "end": 1099,
    "range": [
      1092,
      1099
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1100,
    "end": 1101,
    "range": [
      1100,
      1101
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1106,
    "end": 1107,
    "range": [
      1106,
      1107
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1108,
    "end": 1109,
    "range": [
      1108,
      1109
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1110,
    "end": 1114,
    "range": [
      1110,
      1114
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1114,
    "end": 1115,
    "range": [
      1114,
      1115
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1116,
    "end": 1119,
    "range": [
      1116,
      1119
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1119,
    "end": 1120,
    "range": [
      1119,
      1120
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1121,
    "end": 1128,
    "range": [
      1121,
      1128
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1128,
    "end": 1129,
    "range": [
      1128,
      1129
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1130,
    "end": 1136,
    "range": [
      1130,
      1136
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1137,
    "end": 1138,
    "range": [
      1137,
      1138
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1139,
    "end": 1148,
    "range": [
      1139,
      1148
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1149,
    "end": 1150,
    "range": [
      1149,
      1150
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1155,
    "end": 1156,
    "range": [
      1155,
      1156
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1157,
    "end": 1158,
    "range": [
      1157,
      1158
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1159,
    "end": 1163,
    "range": [
      1159,
      1163
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1163,
    "end": 1164,
    "range": [
      1163,
      1164
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1165,
    "end": 1168,
    "range": [
      1165,
      1168
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1168,
    "end": 1169,
    "range": [
      1168,
      1169
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1170,
    "end": 1177,
    "range": [
      1170,
      1177
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1177,
    "end": 1178,
    "range": [
      1177,
      1178
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1179,
    "end": 1185,
    "range": [
      1179,
      1185
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 1186,
    "end": 1187,
    "range": [
      1186,
      1187
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 1188,
    "end": 1197,
    "range": [
      1188,
      1197
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1198,
    "end": 1199,
    "range": [
      1198,
      1199
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1199,
    "end": 1200,
    "range": [
      1199,
      1200
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1202,
    "end": 1210,
    "range": [
      1202,
      1210
    ]
  },
  {
    "type": "Identifier",
    "value": "f20",
    "start": 1211,
    "end": 1214,
    "range": [
      1211,
      1214
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1214,
    "end": 1215,
    "range": [
      1214,
      1215
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216,
    "range": [
      1215,
      1216
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1217,
    "end": 1221,
    "range": [
      1217,
      1221
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1221,
    "end": 1222,
    "range": [
      1221,
      1222
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1223,
    "end": 1230,
    "range": [
      1223,
      1230
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1231,
    "end": 1232,
    "range": [
      1231,
      1232
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1232,
    "end": 1233,
    "range": [
      1232,
      1233
    ]
  },
  {
    "type": "Identifier",
    "value": "Action2",
    "start": 1234,
    "end": 1241,
    "range": [
      1234,
      1241
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1241,
    "end": 1242,
    "range": [
      1241,
      1242
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1243,
    "end": 1244,
    "range": [
      1243,
      1244
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1249,
    "end": 1251,
    "range": [
      1249,
      1251
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1252,
    "end": 1253,
    "range": [
      1252,
      1253
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1253,
    "end": 1260,
    "range": [
      1253,
      1260
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1260,
    "end": 1261,
    "range": [
      1260,
      1261
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1262,
    "end": 1263,
    "range": [
      1262,
      1263
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1272,
    "end": 1274,
    "range": [
      1272,
      1274
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1275,
    "end": 1276,
    "range": [
      1275,
      1276
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1276,
    "end": 1280,
    "range": [
      1276,
      1280
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1281,
    "end": 1284,
    "range": [
      1281,
      1284
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1285,
    "end": 1288,
    "range": [
      1285,
      1288
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1288,
    "end": 1289,
    "range": [
      1288,
      1289
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1290,
    "end": 1291,
    "range": [
      1290,
      1291
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1304,
    "end": 1311,
    "range": [
      1304,
      1311
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1311,
    "end": 1312,
    "range": [
      1311,
      1312
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1312,
    "end": 1319,
    "range": [
      1312,
      1319
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1319,
    "end": 1320,
    "range": [
      1319,
      1320
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1320,
    "end": 1321,
    "range": [
      1320,
      1321
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1321,
    "end": 1322,
    "range": [
      1321,
      1322
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1331,
    "end": 1332,
    "range": [
      1331,
      1332
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1341,
    "end": 1343,
    "range": [
      1341,
      1343
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1344,
    "end": 1345,
    "range": [
      1344,
      1345
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1345,
    "end": 1349,
    "range": [
      1345,
      1349
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1350,
    "end": 1353,
    "range": [
      1350,
      1353
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1354,
    "end": 1357,
    "range": [
      1354,
      1357
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1357,
    "end": 1358,
    "range": [
      1357,
      1358
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1359,
    "end": 1360,
    "range": [
      1359,
      1360
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1373,
    "end": 1380,
    "range": [
      1373,
      1380
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1380,
    "end": 1381,
    "range": [
      1380,
      1381
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 1381,
    "end": 1392,
    "range": [
      1381,
      1392
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1392,
    "end": 1393,
    "range": [
      1392,
      1393
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1393,
    "end": 1394,
    "range": [
      1393,
      1394
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1394,
    "end": 1395,
    "range": [
      1394,
      1395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1404,
    "end": 1405,
    "range": [
      1404,
      1405
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1410,
    "end": 1411,
    "range": [
      1410,
      1411
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1412,
    "end": 1413,
    "range": [
      1412,
      1413
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1415,
    "end": 1423,
    "range": [
      1415,
      1423
    ]
  },
  {
    "type": "Identifier",
    "value": "f21",
    "start": 1424,
    "end": 1427,
    "range": [
      1424,
      1427
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1427,
    "end": 1428,
    "range": [
      1427,
      1428
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1428,
    "end": 1434,
    "range": [
      1428,
      1434
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1434,
    "end": 1435,
    "range": [
      1434,
      1435
    ]
  },
  {
    "type": "Identifier",
    "value": "Action2",
    "start": 1436,
    "end": 1443,
    "range": [
      1436,
      1443
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1443,
    "end": 1444,
    "range": [
      1443,
      1444
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1445,
    "end": 1446,
    "range": [
      1445,
      1446
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1451,
    "end": 1456,
    "range": [
      1451,
      1456
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1457,
    "end": 1458,
    "range": [
      1457,
      1458
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1459,
    "end": 1463,
    "range": [
      1459,
      1463
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1463,
    "end": 1464,
    "range": [
      1463,
      1464
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1465,
    "end": 1472,
    "range": [
      1465,
      1472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1473,
    "end": 1474,
    "range": [
      1473,
      1474
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1475,
    "end": 1476,
    "range": [
      1475,
      1476
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1477,
    "end": 1483,
    "range": [
      1477,
      1483
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1483,
    "end": 1484,
    "range": [
      1483,
      1484
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1489,
    "end": 1491,
    "range": [
      1489,
      1491
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1492,
    "end": 1493,
    "range": [
      1492,
      1493
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1493,
    "end": 1500,
    "range": [
      1493,
      1500
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1500,
    "end": 1501,
    "range": [
      1500,
      1501
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1502,
    "end": 1503,
    "range": [
      1502,
      1503
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1512,
    "end": 1514,
    "range": [
      1512,
      1514
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1515,
    "end": 1516,
    "range": [
      1515,
      1516
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1516,
    "end": 1520,
    "range": [
      1516,
      1520
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1521,
    "end": 1524,
    "range": [
      1521,
      1524
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1525,
    "end": 1528,
    "range": [
      1525,
      1528
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1528,
    "end": 1529,
    "range": [
      1528,
      1529
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1530,
    "end": 1531,
    "range": [
      1530,
      1531
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1544,
    "end": 1551,
    "range": [
      1544,
      1551
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1551,
    "end": 1552,
    "range": [
      1551,
      1552
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1552,
    "end": 1559,
    "range": [
      1552,
      1559
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1559,
    "end": 1560,
    "range": [
      1559,
      1560
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1560,
    "end": 1561,
    "range": [
      1560,
      1561
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1561,
    "end": 1562,
    "range": [
      1561,
      1562
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1571,
    "end": 1572,
    "range": [
      1571,
      1572
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1581,
    "end": 1583,
    "range": [
      1581,
      1583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1584,
    "end": 1585,
    "range": [
      1584,
      1585
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1585,
    "end": 1589,
    "range": [
      1585,
      1589
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1590,
    "end": 1593,
    "range": [
      1590,
      1593
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1594,
    "end": 1597,
    "range": [
      1594,
      1597
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1597,
    "end": 1598,
    "range": [
      1597,
      1598
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1599,
    "end": 1600,
    "range": [
      1599,
      1600
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1613,
    "end": 1620,
    "range": [
      1613,
      1620
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1620,
    "end": 1621,
    "range": [
      1620,
      1621
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 1621,
    "end": 1632,
    "range": [
      1621,
      1632
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1632,
    "end": 1633,
    "range": [
      1632,
      1633
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1633,
    "end": 1634,
    "range": [
      1633,
      1634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1634,
    "end": 1635,
    "range": [
      1634,
      1635
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1644,
    "end": 1645,
    "range": [
      1644,
      1645
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1650,
    "end": 1651,
    "range": [
      1650,
      1651
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1652,
    "end": 1653,
    "range": [
      1652,
      1653
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1655,
    "end": 1663,
    "range": [
      1655,
      1663
    ]
  },
  {
    "type": "Identifier",
    "value": "f22",
    "start": 1664,
    "end": 1667,
    "range": [
      1664,
      1667
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1667,
    "end": 1668,
    "range": [
      1667,
      1668
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1668,
    "end": 1674,
    "range": [
      1668,
      1674
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1674,
    "end": 1675,
    "range": [
      1674,
      1675
    ]
  },
  {
    "type": "Identifier",
    "value": "Action2",
    "start": 1676,
    "end": 1683,
    "range": [
      1676,
      1683
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1683,
    "end": 1684,
    "range": [
      1683,
      1684
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1685,
    "end": 1686,
    "range": [
      1685,
      1686
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1691,
    "end": 1693,
    "range": [
      1691,
      1693
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1694,
    "end": 1695,
    "range": [
      1694,
      1695
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1695,
    "end": 1701,
    "range": [
      1695,
      1701
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1701,
    "end": 1702,
    "range": [
      1701,
      1702
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1702,
    "end": 1709,
    "range": [
      1702,
      1709
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1709,
    "end": 1710,
    "range": [
      1709,
      1710
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1711,
    "end": 1712,
    "range": [
      1711,
      1712
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1721,
    "end": 1726,
    "range": [
      1721,
      1726
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1727,
    "end": 1728,
    "range": [
      1727,
      1728
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1729,
    "end": 1733,
    "range": [
      1729,
      1733
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1733,
    "end": 1734,
    "range": [
      1733,
      1734
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1735,
    "end": 1742,
    "range": [
      1735,
      1742
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1743,
    "end": 1744,
    "range": [
      1743,
      1744
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1745,
    "end": 1746,
    "range": [
      1745,
      1746
    ]
  },
  {
    "type": "Identifier",
    "value": "action",
    "start": 1747,
    "end": 1753,
    "range": [
      1747,
      1753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1753,
    "end": 1754,
    "range": [
      1753,
      1754
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1763,
    "end": 1765,
    "range": [
      1763,
      1765
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1766,
    "end": 1767,
    "range": [
      1766,
      1767
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1767,
    "end": 1771,
    "range": [
      1767,
      1771
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1772,
    "end": 1775,
    "range": [
      1772,
      1775
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 1776,
    "end": 1779,
    "range": [
      1776,
      1779
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1779,
    "end": 1780,
    "range": [
      1779,
      1780
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1781,
    "end": 1782,
    "range": [
      1781,
      1782
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1795,
    "end": 1802,
    "range": [
      1795,
      1802
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1802,
    "end": 1803,
    "range": [
      1802,
      1803
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 1803,
    "end": 1810,
    "range": [
      1803,
      1810
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1810,
    "end": 1811,
    "range": [
      1810,
      1811
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1811,
    "end": 1812,
    "range": [
      1811,
      1812
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1812,
    "end": 1813,
    "range": [
      1812,
      1813
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1822,
    "end": 1823,
    "range": [
      1822,
      1823
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1832,
    "end": 1834,
    "range": [
      1832,
      1834
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1835,
    "end": 1836,
    "range": [
      1835,
      1836
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1836,
    "end": 1840,
    "range": [
      1836,
      1840
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1841,
    "end": 1844,
    "range": [
      1841,
      1844
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 1845,
    "end": 1848,
    "range": [
      1845,
      1848
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1848,
    "end": 1849,
    "range": [
      1848,
      1849
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1850,
    "end": 1851,
    "range": [
      1850,
      1851
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1864,
    "end": 1871,
    "range": [
      1864,
      1871
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1871,
    "end": 1872,
    "range": [
      1871,
      1872
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 1872,
    "end": 1883,
    "range": [
      1872,
      1883
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1883,
    "end": 1884,
    "range": [
      1883,
      1884
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1884,
    "end": 1885,
    "range": [
      1884,
      1885
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1885,
    "end": 1886,
    "range": [
      1885,
      1886
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1895,
    "end": 1896,
    "range": [
      1895,
      1896
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1901,
    "end": 1902,
    "range": [
      1901,
      1902
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1903,
    "end": 1904,
    "range": [
      1903,
      1904
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1906,
    "end": 1914,
    "range": [
      1906,
      1914
    ]
  },
  {
    "type": "Identifier",
    "value": "f23",
    "start": 1915,
    "end": 1918,
    "range": [
      1915,
      1918
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1918,
    "end": 1919,
    "range": [
      1918,
      1919
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1919,
    "end": 1920,
    "range": [
      1919,
      1920
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1921,
    "end": 1925,
    "range": [
      1921,
      1925
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1925,
    "end": 1926,
    "range": [
      1925,
      1926
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1927,
    "end": 1934,
    "range": [
      1927,
      1934
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1935,
    "end": 1936,
    "range": [
      1935,
      1936
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1936,
    "end": 1937,
    "range": [
      1936,
      1937
    ]
  },
  {
    "type": "Identifier",
    "value": "Action2",
    "start": 1938,
    "end": 1945,
    "range": [
      1938,
      1945
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1945,
    "end": 1946,
    "range": [
      1945,
      1946
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1947,
    "end": 1948,
    "range": [
      1947,
      1948
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1953,
    "end": 1955,
    "range": [
      1953,
      1955
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1956,
    "end": 1957,
    "range": [
      1956,
      1957
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 1957,
    "end": 1964,
    "range": [
      1957,
      1964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1964,
    "end": 1965,
    "range": [
      1964,
      1965
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1966,
    "end": 1967,
    "range": [
      1966,
      1967
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 1976,
    "end": 1982,
    "range": [
      1976,
      1982
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1983,
    "end": 1984,
    "range": [
      1983,
      1984
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 1984,
    "end": 1988,
    "range": [
      1984,
      1988
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1988,
    "end": 1989,
    "range": [
      1988,
      1989
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1990,
    "end": 1991,
    "range": [
      1990,
      1991
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2004,
    "end": 2008,
    "range": [
      2004,
      2008
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 2009,
    "end": 2012,
    "range": [
      2009,
      2012
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2012,
    "end": 2013,
    "range": [
      2012,
      2013
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 2030,
    "end": 2037,
    "range": [
      2030,
      2037
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2037,
    "end": 2038,
    "range": [
      2037,
      2038
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 2038,
    "end": 2045,
    "range": [
      2038,
      2045
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2045,
    "end": 2046,
    "range": [
      2045,
      2046
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2046,
    "end": 2047,
    "range": [
      2046,
      2047
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2047,
    "end": 2048,
    "range": [
      2047,
      2048
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2065,
    "end": 2070,
    "range": [
      2065,
      2070
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2070,
    "end": 2071,
    "range": [
      2070,
      2071
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 2084,
    "end": 2088,
    "range": [
      2084,
      2088
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 2089,
    "end": 2092,
    "range": [
      2089,
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
    "type": "Identifier",
    "value": "payload",
    "start": 2110,
    "end": 2117,
    "range": [
      2110,
      2117
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2117,
    "end": 2118,
    "range": [
      2117,
      2118
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 2118,
    "end": 2129,
    "range": [
      2118,
      2129
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2129,
    "end": 2130,
    "range": [
      2129,
      2130
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2130,
    "end": 2131,
    "range": [
      2130,
      2131
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2131,
    "end": 2132,
    "range": [
      2131,
      2132
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 2149,
    "end": 2154,
    "range": [
      2149,
      2154
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2154,
    "end": 2155,
    "range": [
      2154,
      2155
    ]
  },
  {
    "type": "Keyword",
    "value": "default",
    "start": 2168,
    "end": 2175,
    "range": [
      2168,
      2175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2175,
    "end": 2176,
    "range": [
      2175,
      2176
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 2193,
    "end": 2200,
    "range": [
      2193,
      2200
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2200,
    "end": 2201,
    "range": [
      2200,
      2201
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2220,
    "end": 2221,
    "range": [
      2220,
      2221
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2226,
    "end": 2227,
    "range": [
      2226,
      2227
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2228,
    "end": 2229,
    "range": [
      2228,
      2229
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2231,
    "end": 2235,
    "range": [
      2231,
      2235
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2236,
    "end": 2239,
    "range": [
      2236,
      2239
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2240,
    "end": 2241,
    "range": [
      2240,
      2241
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2246,
    "end": 2247,
    "range": [
      2246,
      2247
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2248,
    "end": 2249,
    "range": [
      2248,
      2249
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2250,
    "end": 2254,
    "range": [
      2250,
      2254
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2254,
    "end": 2255,
    "range": [
      2254,
      2255
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 2256,
    "end": 2259,
    "range": [
      2256,
      2259
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2259,
    "end": 2260,
    "range": [
      2259,
      2260
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 2261,
    "end": 2264,
    "range": [
      2261,
      2264
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2264,
    "end": 2265,
    "range": [
      2264,
      2265
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 2266,
    "end": 2270,
    "range": [
      2266,
      2270
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2271,
    "end": 2272,
    "range": [
      2271,
      2272
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2277,
    "end": 2278,
    "range": [
      2277,
      2278
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2279,
    "end": 2280,
    "range": [
      2279,
      2280
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2281,
    "end": 2285,
    "range": [
      2281,
      2285
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2285,
    "end": 2286,
    "range": [
      2285,
      2286
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 2287,
    "end": 2290,
    "range": [
      2287,
      2290
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2290,
    "end": 2291,
    "range": [
      2290,
      2291
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 2292,
    "end": 2295,
    "range": [
      2292,
      2295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2295,
    "end": 2296,
    "range": [
      2295,
      2296
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2297,
    "end": 2302,
    "range": [
      2297,
      2302
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2303,
    "end": 2304,
    "range": [
      2303,
      2304
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2309,
    "end": 2310,
    "range": [
      2309,
      2310
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2311,
    "end": 2312,
    "range": [
      2311,
      2312
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2313,
    "end": 2317,
    "range": [
      2313,
      2317
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2317,
    "end": 2318,
    "range": [
      2317,
      2318
    ]
  },
  {
    "type": "String",
    "value": "'C'",
    "start": 2319,
    "end": 2322,
    "range": [
      2319,
      2322
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2322,
    "end": 2323,
    "range": [
      2322,
      2323
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 2324,
    "end": 2327,
    "range": [
      2324,
      2327
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2327,
    "end": 2328,
    "range": [
      2327,
      2328
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 2329,
    "end": 2334,
    "range": [
      2329,
      2334
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2335,
    "end": 2336,
    "range": [
      2335,
      2336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2336,
    "end": 2337,
    "range": [
      2336,
      2337
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2339,
    "end": 2347,
    "range": [
      2339,
      2347
    ]
  },
  {
    "type": "Identifier",
    "value": "f30",
    "start": 2348,
    "end": 2351,
    "range": [
      2348,
      2351
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2351,
    "end": 2352,
    "range": [
      2351,
      2352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2352,
    "end": 2353,
    "range": [
      2352,
      2353
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2354,
    "end": 2358,
    "range": [
      2354,
      2358
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2358,
    "end": 2359,
    "range": [
      2358,
      2359
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 2360,
    "end": 2363,
    "range": [
      2360,
      2363
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2364,
    "end": 2365,
    "range": [
      2364,
      2365
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2365,
    "end": 2366,
    "range": [
      2365,
      2366
    ]
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 2367,
    "end": 2370,
    "range": [
      2367,
      2370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2370,
    "end": 2371,
    "range": [
      2370,
      2371
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2372,
    "end": 2373,
    "range": [
      2372,
      2373
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2378,
    "end": 2380,
    "range": [
      2378,
      2380
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2381,
    "end": 2382,
    "range": [
      2381,
      2382
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2382,
    "end": 2386,
    "range": [
      2382,
      2386
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2387,
    "end": 2390,
    "range": [
      2387,
      2390
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 2391,
    "end": 2394,
    "range": [
      2391,
      2394
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "isA",
    "start": 2406,
    "end": 2409,
    "range": [
      2406,
      2409
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2409,
    "end": 2410,
    "range": [
      2409,
      2410
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2425,
    "end": 2426,
    "range": [
      2425,
      2426
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2431,
    "end": 2433,
    "range": [
      2431,
      2433
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2434,
    "end": 2435,
    "range": [
      2434,
      2435
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2435,
    "end": 2439,
    "range": [
      2435,
      2439
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2440,
    "end": 2443,
    "range": [
      2440,
      2443
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 2444,
    "end": 2447,
    "range": [
      2444,
      2447
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2447,
    "end": 2448,
    "range": [
      2447,
      2448
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2449,
    "end": 2450,
    "range": [
      2449,
      2450
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 2459,
    "end": 2462,
    "range": [
      2459,
      2462
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2462,
    "end": 2463,
    "range": [
      2462,
      2463
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2479,
    "end": 2480,
    "range": [
      2479,
      2480
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2485,
    "end": 2487,
    "range": [
      2485,
      2487
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2488,
    "end": 2489,
    "range": [
      2488,
      2489
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2489,
    "end": 2493,
    "range": [
      2489,
      2493
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2494,
    "end": 2497,
    "range": [
      2494,
      2497
    ]
  },
  {
    "type": "String",
    "value": "'C'",
    "start": 2498,
    "end": 2501,
    "range": [
      2498,
      2501
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2501,
    "end": 2502,
    "range": [
      2501,
      2502
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2503,
    "end": 2504,
    "range": [
      2503,
      2504
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 2513,
    "end": 2516,
    "range": [
      2513,
      2516
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2516,
    "end": 2517,
    "range": [
      2516,
      2517
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2533,
    "end": 2534,
    "range": [
      2533,
      2534
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2539,
    "end": 2541,
    "range": [
      2539,
      2541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2542,
    "end": 2543,
    "range": [
      2542,
      2543
    ]
  },
  {
    "type": "Identifier",
    "value": "isA",
    "start": 2543,
    "end": 2546,
    "range": [
      2543,
      2546
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2546,
    "end": 2547,
    "range": [
      2546,
      2547
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2548,
    "end": 2549,
    "range": [
      2548,
      2549
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2558,
    "end": 2562,
    "range": [
      2558,
      2562
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2562,
    "end": 2563,
    "range": [
      2562,
      2563
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2576,
    "end": 2577,
    "range": [
      2576,
      2577
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 2582,
    "end": 2586,
    "range": [
      2582,
      2586
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2587,
    "end": 2588,
    "range": [
      2587,
      2588
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2597,
    "end": 2601,
    "range": [
      2597,
      2601
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2601,
    "end": 2602,
    "range": [
      2601,
      2602
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2621,
    "end": 2622,
    "range": [
      2621,
      2622
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2623,
    "end": 2624,
    "range": [
      2623,
      2624
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2626,
    "end": 2630,
    "range": [
      2626,
      2630
    ]
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 2631,
    "end": 2635,
    "range": [
      2631,
      2635
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2636,
    "end": 2637,
    "range": [
      2636,
      2637
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2638,
    "end": 2639,
    "range": [
      2638,
      2639
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 2639,
    "end": 2642,
    "range": [
      2639,
      2642
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2642,
    "end": 2643,
    "range": [
      2642,
      2643
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 2644,
    "end": 2650,
    "range": [
      2644,
      2650
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2650,
    "end": 2651,
    "range": [
      2650,
      2651
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2652,
    "end": 2653,
    "range": [
      2652,
      2653
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2654,
    "end": 2655,
    "range": [
      2654,
      2655
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 2655,
    "end": 2658,
    "range": [
      2655,
      2658
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2658,
    "end": 2659,
    "range": [
      2658,
      2659
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2660,
    "end": 2666,
    "range": [
      2660,
      2666
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2666,
    "end": 2667,
    "range": [
      2666,
      2667
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2669,
    "end": 2677,
    "range": [
      2669,
      2677
    ]
  },
  {
    "type": "Identifier",
    "value": "f40",
    "start": 2678,
    "end": 2681,
    "range": [
      2678,
      2681
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2681,
    "end": 2682,
    "range": [
      2681,
      2682
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 2682,
    "end": 2685,
    "range": [
      2682,
      2685
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2685,
    "end": 2686,
    "range": [
      2685,
      2686
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2686,
    "end": 2690,
    "range": [
      2686,
      2690
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2690,
    "end": 2691,
    "range": [
      2690,
      2691
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2692,
    "end": 2696,
    "range": [
      2692,
      2696
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2696,
    "end": 2697,
    "range": [
      2696,
      2697
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2697,
    "end": 2698,
    "range": [
      2697,
      2698
    ]
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 2699,
    "end": 2703,
    "range": [
      2699,
      2703
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2703,
    "end": 2704,
    "range": [
      2703,
      2704
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2705,
    "end": 2706,
    "range": [
      2705,
      2706
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2711,
    "end": 2713,
    "range": [
      2711,
      2713
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2714,
    "end": 2715,
    "range": [
      2714,
      2715
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2715,
    "end": 2719,
    "range": [
      2715,
      2719
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2720,
    "end": 2723,
    "range": [
      2720,
      2723
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 2724,
    "end": 2727,
    "range": [
      2724,
      2727
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2727,
    "end": 2728,
    "range": [
      2727,
      2728
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2729,
    "end": 2730,
    "range": [
      2729,
      2730
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2739,
    "end": 2743,
    "range": [
      2739,
      2743
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2743,
    "end": 2744,
    "range": [
      2743,
      2744
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 2744,
    "end": 2751,
    "range": [
      2744,
      2751
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2751,
    "end": 2752,
    "range": [
      2751,
      2752
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2752,
    "end": 2753,
    "range": [
      2752,
      2753
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2753,
    "end": 2754,
    "range": [
      2753,
      2754
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2759,
    "end": 2760,
    "range": [
      2759,
      2760
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 2765,
    "end": 2767,
    "range": [
      2765,
      2767
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2768,
    "end": 2769,
    "range": [
      2768,
      2769
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 2769,
    "end": 2773,
    "range": [
      2769,
      2773
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 2774,
    "end": 2777,
    "range": [
      2774,
      2777
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 2778,
    "end": 2781,
    "range": [
      2778,
      2781
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2781,
    "end": 2782,
    "range": [
      2781,
      2782
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2783,
    "end": 2784,
    "range": [
      2783,
      2784
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 2793,
    "end": 2797,
    "range": [
      2793,
      2797
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2797,
    "end": 2798,
    "range": [
      2797,
      2798
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 2798,
    "end": 2809,
    "range": [
      2798,
      2809
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2809,
    "end": 2810,
    "range": [
      2809,
      2810
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2810,
    "end": 2811,
    "range": [
      2810,
      2811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2811,
    "end": 2812,
    "range": [
      2811,
      2812
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2817,
    "end": 2818,
    "range": [
      2817,
      2818
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2819,
    "end": 2820,
    "range": [
      2819,
      2820
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2844,
    "end": 2853,
    "range": [
      2844,
      2853
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2854,
    "end": 2855,
    "range": [
      2854,
      2855
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2855,
    "end": 2856,
    "range": [
      2855,
      2856
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2856,
    "end": 2857,
    "range": [
      2856,
      2857
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2857,
    "end": 2858,
    "range": [
      2857,
      2858
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2859,
    "end": 2860,
    "range": [
      2859,
      2860
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 2861,
    "end": 2868,
    "range": [
      2861,
      2868
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2868,
    "end": 2869,
    "range": [
      2868,
      2869
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 2870,
    "end": 2873,
    "range": [
      2870,
      2873
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2873,
    "end": 2874,
    "range": [
      2873,
      2874
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2875,
    "end": 2880,
    "range": [
      2875,
      2880
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2880,
    "end": 2881,
    "range": [
      2880,
      2881
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2882,
    "end": 2883,
    "range": [
      2882,
      2883
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2884,
    "end": 2885,
    "range": [
      2884,
      2885
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 2887,
    "end": 2896,
    "range": [
      2887,
      2896
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2897,
    "end": 2898,
    "range": [
      2897,
      2898
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2898,
    "end": 2899,
    "range": [
      2898,
      2899
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2899,
    "end": 2900,
    "range": [
      2899,
      2900
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2900,
    "end": 2901,
    "range": [
      2900,
      2901
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2902,
    "end": 2903,
    "range": [
      2902,
      2903
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 2904,
    "end": 2911,
    "range": [
      2904,
      2911
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2911,
    "end": 2912,
    "range": [
      2911,
      2912
    ]
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 2913,
    "end": 2916,
    "range": [
      2913,
      2916
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2916,
    "end": 2917,
    "range": [
      2916,
      2917
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2918,
    "end": 2923,
    "range": [
      2918,
      2923
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2923,
    "end": 2924,
    "range": [
      2923,
      2924
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 2925,
    "end": 2930,
    "range": [
      2925,
      2930
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2930,
    "end": 2931,
    "range": [
      2930,
      2931
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2931,
    "end": 2932,
    "range": [
      2931,
      2932
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2932,
    "end": 2933,
    "range": [
      2932,
      2933
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2934,
    "end": 2935,
    "range": [
      2934,
      2935
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 2937,
    "end": 2941,
    "range": [
      2937,
      2941
    ]
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 2942,
    "end": 2944,
    "range": [
      2942,
      2944
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2944,
    "end": 2945,
    "range": [
      2944,
      2945
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2945,
    "end": 2946,
    "range": [
      2945,
      2946
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2946,
    "end": 2947,
    "range": [
      2946,
      2947
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2948,
    "end": 2949,
    "range": [
      2948,
      2949
    ]
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 2950,
    "end": 2951,
    "range": [
      2950,
      2951
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2951,
    "end": 2952,
    "range": [
      2951,
      2952
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2952,
    "end": 2953,
    "range": [
      2952,
      2953
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2953,
    "end": 2954,
    "range": [
      2953,
      2954
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 2955,
    "end": 2956,
    "range": [
      2955,
      2956
    ]
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 2957,
    "end": 2958,
    "range": [
      2957,
      2958
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2958,
    "end": 2959,
    "range": [
      2958,
      2959
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2959,
    "end": 2960,
    "range": [
      2959,
      2960
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2960,
    "end": 2961,
    "range": [
      2960,
      2961
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2961,
    "end": 2962,
    "range": [
      2961,
      2962
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 2964,
    "end": 2971,
    "range": [
      2964,
      2971
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2972,
    "end": 2980,
    "range": [
      2972,
      2980
    ]
  },
  {
    "type": "Identifier",
    "value": "printValue",
    "start": 2981,
    "end": 2991,
    "range": [
      2981,
      2991
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 2991,
    "end": 2992,
    "range": [
      2991,
      2992
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2992,
    "end": 2993,
    "range": [
      2992,
      2993
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 2993,
    "end": 2994,
    "range": [
      2993,
      2994
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2994,
    "end": 2995,
    "range": [
      2994,
      2995
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 2995,
    "end": 2996,
    "range": [
      2995,
      2996
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2996,
    "end": 2997,
    "range": [
      2996,
      2997
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 2998,
    "end": 2999,
    "range": [
      2998,
      2999
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2999,
    "end": 3000,
    "range": [
      2999,
      3000
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3000,
    "end": 3001,
    "range": [
      3000,
      3001
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3002,
    "end": 3006,
    "range": [
      3002,
      3006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3006,
    "end": 3007,
    "range": [
      3006,
      3007
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3009,
    "end": 3016,
    "range": [
      3009,
      3016
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3017,
    "end": 3025,
    "range": [
      3017,
      3025
    ]
  },
  {
    "type": "Identifier",
    "value": "printValueList",
    "start": 3026,
    "end": 3040,
    "range": [
      3026,
      3040
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3040,
    "end": 3041,
    "range": [
      3040,
      3041
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3041,
    "end": 3042,
    "range": [
      3041,
      3042
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3042,
    "end": 3043,
    "range": [
      3042,
      3043
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3043,
    "end": 3044,
    "range": [
      3043,
      3044
    ]
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 3044,
    "end": 3045,
    "range": [
      3044,
      3045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3045,
    "end": 3046,
    "range": [
      3045,
      3046
    ]
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 3047,
    "end": 3052,
    "range": [
      3047,
      3052
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3052,
    "end": 3053,
    "range": [
      3052,
      3053
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3053,
    "end": 3054,
    "range": [
      3053,
      3054
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3054,
    "end": 3055,
    "range": [
      3054,
      3055
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3055,
    "end": 3056,
    "range": [
      3055,
      3056
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3056,
    "end": 3057,
    "range": [
      3056,
      3057
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3058,
    "end": 3062,
    "range": [
      3058,
      3062
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3062,
    "end": 3063,
    "range": [
      3062,
      3063
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3065,
    "end": 3073,
    "range": [
      3065,
      3073
    ]
  },
  {
    "type": "Identifier",
    "value": "unrefined1",
    "start": 3074,
    "end": 3084,
    "range": [
      3074,
      3084
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3084,
    "end": 3085,
    "range": [
      3084,
      3085
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3085,
    "end": 3086,
    "range": [
      3085,
      3086
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3086,
    "end": 3087,
    "range": [
      3086,
      3087
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3087,
    "end": 3088,
    "range": [
      3087,
      3088
    ]
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 3088,
    "end": 3090,
    "range": [
      3088,
      3090
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3090,
    "end": 3091,
    "range": [
      3090,
      3091
    ]
  },
  {
    "type": "Identifier",
    "value": "AB",
    "start": 3092,
    "end": 3094,
    "range": [
      3092,
      3094
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3094,
    "end": 3095,
    "range": [
      3094,
      3095
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3095,
    "end": 3096,
    "range": [
      3095,
      3096
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3096,
    "end": 3097,
    "range": [
      3096,
      3097
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3097,
    "end": 3098,
    "range": [
      3097,
      3098
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3098,
    "end": 3099,
    "range": [
      3098,
      3099
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3100,
    "end": 3104,
    "range": [
      3100,
      3104
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3105,
    "end": 3106,
    "range": [
      3105,
      3106
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3111,
    "end": 3116,
    "range": [
      3111,
      3116
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3117,
    "end": 3118,
    "range": [
      3117,
      3118
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 3119,
    "end": 3126,
    "range": [
      3119,
      3126
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3126,
    "end": 3127,
    "range": [
      3126,
      3127
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3128,
    "end": 3133,
    "range": [
      3128,
      3133
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3134,
    "end": 3135,
    "range": [
      3134,
      3135
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3136,
    "end": 3137,
    "range": [
      3136,
      3137
    ]
  },
  {
    "type": "Identifier",
    "value": "ab",
    "start": 3138,
    "end": 3140,
    "range": [
      3138,
      3140
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3140,
    "end": 3141,
    "range": [
      3140,
      3141
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3146,
    "end": 3148,
    "range": [
      3146,
      3148
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3149,
    "end": 3150,
    "range": [
      3149,
      3150
    ]
  },
  {
    "type": "Identifier",
    "value": "variant",
    "start": 3150,
    "end": 3157,
    "range": [
      3150,
      3157
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3158,
    "end": 3161,
    "range": [
      3158,
      3161
    ]
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 3162,
    "end": 3165,
    "range": [
      3162,
      3165
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3165,
    "end": 3166,
    "range": [
      3165,
      3166
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3167,
    "end": 3168,
    "range": [
      3167,
      3168
    ]
  },
  {
    "type": "Identifier",
    "value": "printValue",
    "start": 3177,
    "end": 3187,
    "range": [
      3177,
      3187
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3187,
    "end": 3188,
    "range": [
      3187,
      3188
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3188,
    "end": 3189,
    "range": [
      3188,
      3189
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3189,
    "end": 3190,
    "range": [
      3189,
      3190
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3190,
    "end": 3191,
    "range": [
      3190,
      3191
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3191,
    "end": 3196,
    "range": [
      3191,
      3196
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3196,
    "end": 3197,
    "range": [
      3196,
      3197
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3197,
    "end": 3198,
    "range": [
      3197,
      3198
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3203,
    "end": 3204,
    "range": [
      3203,
      3204
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 3209,
    "end": 3213,
    "range": [
      3209,
      3213
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3214,
    "end": 3215,
    "range": [
      3214,
      3215
    ]
  },
  {
    "type": "Identifier",
    "value": "printValueList",
    "start": 3224,
    "end": 3238,
    "range": [
      3224,
      3238
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3238,
    "end": 3239,
    "range": [
      3238,
      3239
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 3239,
    "end": 3240,
    "range": [
      3239,
      3240
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3240,
    "end": 3241,
    "range": [
      3240,
      3241
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3241,
    "end": 3242,
    "range": [
      3241,
      3242
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3242,
    "end": 3247,
    "range": [
      3242,
      3247
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3247,
    "end": 3248,
    "range": [
      3247,
      3248
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3248,
    "end": 3249,
    "range": [
      3248,
      3249
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3254,
    "end": 3255,
    "range": [
      3254,
      3255
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3256,
    "end": 3257,
    "range": [
      3256,
      3257
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3281,
    "end": 3285,
    "range": [
      3281,
      3285
    ]
  },
  {
    "type": "Identifier",
    "value": "Action3",
    "start": 3286,
    "end": 3293,
    "range": [
      3286,
      3293
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3294,
    "end": 3295,
    "range": [
      3294,
      3295
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3300,
    "end": 3301,
    "range": [
      3300,
      3301
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3302,
    "end": 3303,
    "range": [
      3302,
      3303
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3303,
    "end": 3307,
    "range": [
      3303,
      3307
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3307,
    "end": 3308,
    "range": [
      3307,
      3308
    ]
  },
  {
    "type": "String",
    "value": "'add'",
    "start": 3309,
    "end": 3314,
    "range": [
      3309,
      3314
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3314,
    "end": 3315,
    "range": [
      3314,
      3315
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 3316,
    "end": 3323,
    "range": [
      3316,
      3323
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3323,
    "end": 3324,
    "range": [
      3323,
      3324
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3325,
    "end": 3326,
    "range": [
      3325,
      3326
    ]
  },
  {
    "type": "Identifier",
    "value": "toAdd",
    "start": 3327,
    "end": 3332,
    "range": [
      3327,
      3332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3332,
    "end": 3333,
    "range": [
      3332,
      3333
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3334,
    "end": 3340,
    "range": [
      3334,
      3340
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3341,
    "end": 3342,
    "range": [
      3341,
      3342
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3343,
    "end": 3344,
    "range": [
      3343,
      3344
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 3349,
    "end": 3350,
    "range": [
      3349,
      3350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3351,
    "end": 3352,
    "range": [
      3351,
      3352
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3352,
    "end": 3356,
    "range": [
      3352,
      3356
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3356,
    "end": 3357,
    "range": [
      3356,
      3357
    ]
  },
  {
    "type": "String",
    "value": "'remove'",
    "start": 3358,
    "end": 3366,
    "range": [
      3358,
      3366
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3366,
    "end": 3367,
    "range": [
      3366,
      3367
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 3368,
    "end": 3375,
    "range": [
      3368,
      3375
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3375,
    "end": 3376,
    "range": [
      3375,
      3376
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3377,
    "end": 3378,
    "range": [
      3377,
      3378
    ]
  },
  {
    "type": "Identifier",
    "value": "toRemove",
    "start": 3379,
    "end": 3387,
    "range": [
      3379,
      3387
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3387,
    "end": 3388,
    "range": [
      3387,
      3388
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3389,
    "end": 3395,
    "range": [
      3389,
      3395
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3396,
    "end": 3397,
    "range": [
      3396,
      3397
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3398,
    "end": 3399,
    "range": [
      3398,
      3399
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3399,
    "end": 3400,
    "range": [
      3399,
      3400
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3402,
    "end": 3407,
    "range": [
      3402,
      3407
    ]
  },
  {
    "type": "Identifier",
    "value": "reducerBroken",
    "start": 3408,
    "end": 3421,
    "range": [
      3408,
      3421
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3422,
    "end": 3423,
    "range": [
      3422,
      3423
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3424,
    "end": 3425,
    "range": [
      3424,
      3425
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 3425,
    "end": 3430,
    "range": [
      3425,
      3430
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3430,
    "end": 3431,
    "range": [
      3430,
      3431
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3432,
    "end": 3438,
    "range": [
      3432,
      3438
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3438,
    "end": 3439,
    "range": [
      3438,
      3439
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3440,
    "end": 3441,
    "range": [
      3440,
      3441
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3442,
    "end": 3446,
    "range": [
      3442,
      3446
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3446,
    "end": 3447,
    "range": [
      3446,
      3447
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 3448,
    "end": 3455,
    "range": [
      3448,
      3455
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3456,
    "end": 3457,
    "range": [
      3456,
      3457
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3457,
    "end": 3458,
    "range": [
      3457,
      3458
    ]
  },
  {
    "type": "Identifier",
    "value": "Action3",
    "start": 3459,
    "end": 3466,
    "range": [
      3459,
      3466
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3466,
    "end": 3467,
    "range": [
      3466,
      3467
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3468,
    "end": 3470,
    "range": [
      3468,
      3470
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3471,
    "end": 3472,
    "range": [
      3471,
      3472
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 3477,
    "end": 3483,
    "range": [
      3477,
      3483
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3484,
    "end": 3485,
    "range": [
      3484,
      3485
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 3485,
    "end": 3489,
    "range": [
      3485,
      3489
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3489,
    "end": 3490,
    "range": [
      3489,
      3490
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3491,
    "end": 3492,
    "range": [
      3491,
      3492
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3501,
    "end": 3505,
    "range": [
      3501,
      3505
    ]
  },
  {
    "type": "String",
    "value": "'add'",
    "start": 3506,
    "end": 3511,
    "range": [
      3506,
      3511
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3511,
    "end": 3512,
    "range": [
      3511,
      3512
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3525,
    "end": 3531,
    "range": [
      3525,
      3531
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 3532,
    "end": 3537,
    "range": [
      3532,
      3537
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 3538,
    "end": 3539,
    "range": [
      3538,
      3539
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 3540,
    "end": 3547,
    "range": [
      3540,
      3547
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3547,
    "end": 3548,
    "range": [
      3547,
      3548
    ]
  },
  {
    "type": "Identifier",
    "value": "toAdd",
    "start": 3548,
    "end": 3553,
    "range": [
      3548,
      3553
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3553,
    "end": 3554,
    "range": [
      3553,
      3554
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 3563,
    "end": 3567,
    "range": [
      3563,
      3567
    ]
  },
  {
    "type": "String",
    "value": "'remove'",
    "start": 3568,
    "end": 3576,
    "range": [
      3568,
      3576
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3576,
    "end": 3577,
    "range": [
      3576,
      3577
    ]
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 3590,
    "end": 3596,
    "range": [
      3590,
      3596
    ]
  },
  {
    "type": "Identifier",
    "value": "state",
    "start": 3597,
    "end": 3602,
    "range": [
      3597,
      3602
    ]
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 3603,
    "end": 3604,
    "range": [
      3603,
      3604
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 3605,
    "end": 3612,
    "range": [
      3605,
      3612
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3612,
    "end": 3613,
    "range": [
      3612,
      3613
    ]
  },
  {
    "type": "Identifier",
    "value": "toRemove",
    "start": 3613,
    "end": 3621,
    "range": [
      3613,
      3621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3621,
    "end": 3622,
    "range": [
      3621,
      3622
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3627,
    "end": 3628,
    "range": [
      3627,
      3628
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3629,
    "end": 3630,
    "range": [
      3629,
      3630
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3654,
    "end": 3661,
    "range": [
      3654,
      3661
    ]
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3662,
    "end": 3665,
    "range": [
      3662,
      3665
    ]
  },
  {
    "type": "Identifier",
    "value": "it",
    "start": 3666,
    "end": 3668,
    "range": [
      3666,
      3668
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3668,
    "end": 3669,
    "range": [
      3668,
      3669
    ]
  },
  {
    "type": "Identifier",
    "value": "Iterator",
    "start": 3670,
    "end": 3678,
    "range": [
      3670,
      3678
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3678,
    "end": 3679,
    "range": [
      3678,
      3679
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 3679,
    "end": 3685,
    "range": [
      3679,
      3685
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3685,
    "end": 3686,
    "range": [
      3685,
      3686
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3686,
    "end": 3687,
    "range": [
      3686,
      3687
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3688,
    "end": 3693,
    "range": [
      3688,
      3693
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3694,
    "end": 3695,
    "range": [
      3694,
      3695
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3696,
    "end": 3701,
    "range": [
      3696,
      3701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3701,
    "end": 3702,
    "range": [
      3701,
      3702
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 3703,
    "end": 3707,
    "range": [
      3703,
      3707
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3708,
    "end": 3709,
    "range": [
      3708,
      3709
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3710,
    "end": 3711,
    "range": [
      3710,
      3711
    ]
  },
  {
    "type": "Identifier",
    "value": "it",
    "start": 3712,
    "end": 3714,
    "range": [
      3712,
      3714
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3714,
    "end": 3715,
    "range": [
      3714,
      3715
    ]
  },
  {
    "type": "Identifier",
    "value": "next",
    "start": 3715,
    "end": 3719,
    "range": [
      3715,
      3719
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3719,
    "end": 3720,
    "range": [
      3719,
      3720
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3720,
    "end": 3721,
    "range": [
      3720,
      3721
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3721,
    "end": 3722,
    "range": [
      3721,
      3722
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3723,
    "end": 3725,
    "range": [
      3723,
      3725
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3726,
    "end": 3727,
    "range": [
      3726,
      3727
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 3727,
    "end": 3728,
    "range": [
      3727,
      3728
    ]
  },
  {
    "type": "Identifier",
    "value": "done",
    "start": 3728,
    "end": 3732,
    "range": [
      3728,
      3732
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3732,
    "end": 3733,
    "range": [
      3732,
      3733
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3734,
    "end": 3735,
    "range": [
      3734,
      3735
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 3740,
    "end": 3745,
    "range": [
      3740,
      3745
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3745,
    "end": 3746,
    "range": [
      3745,
      3746
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3758,
    "end": 3759,
    "range": [
      3758,
      3759
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 3783,
    "end": 3790,
    "range": [
      3783,
      3790
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 3791,
    "end": 3799,
    "range": [
      3791,
      3799
    ]
  },
  {
    "type": "Identifier",
    "value": "f50",
    "start": 3800,
    "end": 3803,
    "range": [
      3800,
      3803
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3803,
    "end": 3804,
    "range": [
      3803,
      3804
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 3804,
    "end": 3806,
    "range": [
      3804,
      3806
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3806,
    "end": 3807,
    "range": [
      3806,
      3807
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3808,
    "end": 3809,
    "range": [
      3808,
      3809
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3809,
    "end": 3812,
    "range": [
      3809,
      3812
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3812,
    "end": 3816,
    "range": [
      3812,
      3816
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3816,
    "end": 3817,
    "range": [
      3816,
      3817
    ]
  },
  {
    "type": "Identifier",
    "value": "Args",
    "start": 3818,
    "end": 3822,
    "range": [
      3818,
      3822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3822,
    "end": 3823,
    "range": [
      3822,
      3823
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3824,
    "end": 3826,
    "range": [
      3824,
      3826
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3827,
    "end": 3831,
    "range": [
      3827,
      3831
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3831,
    "end": 3832,
    "range": [
      3831,
      3832
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3832,
    "end": 3833,
    "range": [
      3832,
      3833
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 3834,
    "end": 3838,
    "range": [
      3834,
      3838
    ]
  },
  {
    "type": "Identifier",
    "value": "f50",
    "start": 3840,
    "end": 3843,
    "range": [
      3840,
      3843
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3843,
    "end": 3844,
    "range": [
      3843,
      3844
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3844,
    "end": 3845,
    "range": [
      3844,
      3845
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3845,
    "end": 3849,
    "range": [
      3845,
      3849
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 3849,
    "end": 3850,
    "range": [
      3849,
      3850
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3851,
    "end": 3855,
    "range": [
      3851,
      3855
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3855,
    "end": 3856,
    "range": [
      3855,
      3856
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 3857,
    "end": 3859,
    "range": [
      3857,
      3859
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3860,
    "end": 3861,
    "range": [
      3860,
      3861
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3866,
    "end": 3868,
    "range": [
      3866,
      3868
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3869,
    "end": 3870,
    "range": [
      3869,
      3870
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3870,
    "end": 3874,
    "range": [
      3870,
      3874
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3875,
    "end": 3878,
    "range": [
      3875,
      3878
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 3879,
    "end": 3882,
    "range": [
      3879,
      3882
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3882,
    "end": 3883,
    "range": [
      3882,
      3883
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3884,
    "end": 3885,
    "range": [
      3884,
      3885
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3894,
    "end": 3898,
    "range": [
      3894,
      3898
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3898,
    "end": 3899,
    "range": [
      3898,
      3899
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 3899,
    "end": 3906,
    "range": [
      3899,
      3906
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3906,
    "end": 3907,
    "range": [
      3906,
      3907
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3907,
    "end": 3908,
    "range": [
      3907,
      3908
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3908,
    "end": 3909,
    "range": [
      3908,
      3909
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3914,
    "end": 3915,
    "range": [
      3914,
      3915
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 3920,
    "end": 3922,
    "range": [
      3920,
      3922
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3923,
    "end": 3924,
    "range": [
      3923,
      3924
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 3924,
    "end": 3928,
    "range": [
      3924,
      3928
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 3929,
    "end": 3932,
    "range": [
      3929,
      3932
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 3933,
    "end": 3936,
    "range": [
      3933,
      3936
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3936,
    "end": 3937,
    "range": [
      3936,
      3937
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 3938,
    "end": 3939,
    "range": [
      3938,
      3939
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 3948,
    "end": 3952,
    "range": [
      3948,
      3952
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3952,
    "end": 3953,
    "range": [
      3952,
      3953
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 3953,
    "end": 3964,
    "range": [
      3953,
      3964
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3964,
    "end": 3965,
    "range": [
      3964,
      3965
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3965,
    "end": 3966,
    "range": [
      3965,
      3966
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3966,
    "end": 3967,
    "range": [
      3966,
      3967
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3972,
    "end": 3973,
    "range": [
      3972,
      3973
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 3974,
    "end": 3975,
    "range": [
      3974,
      3975
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 3975,
    "end": 3976,
    "range": [
      3975,
      3976
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3976,
    "end": 3977,
    "range": [
      3976,
      3977
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 3979,
    "end": 3984,
    "range": [
      3979,
      3984
    ]
  },
  {
    "type": "Identifier",
    "value": "f51",
    "start": 3985,
    "end": 3988,
    "range": [
      3985,
      3988
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3988,
    "end": 3989,
    "range": [
      3988,
      3989
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 3990,
    "end": 3991,
    "range": [
      3990,
      3991
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 3991,
    "end": 3994,
    "range": [
      3991,
      3994
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 3994,
    "end": 3998,
    "range": [
      3994,
      3998
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3998,
    "end": 3999,
    "range": [
      3998,
      3999
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4000,
    "end": 4001,
    "range": [
      4000,
      4001
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 4001,
    "end": 4004,
    "range": [
      4001,
      4004
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4004,
    "end": 4005,
    "range": [
      4004,
      4005
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4006,
    "end": 4012,
    "range": [
      4006,
      4012
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4012,
    "end": 4013,
    "range": [
      4012,
      4013
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4014,
    "end": 4015,
    "range": [
      4014,
      4015
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4016,
    "end": 4017,
    "range": [
      4016,
      4017
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 4017,
    "end": 4020,
    "range": [
      4017,
      4020
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4020,
    "end": 4021,
    "range": [
      4020,
      4021
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4022,
    "end": 4028,
    "range": [
      4022,
      4028
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4028,
    "end": 4029,
    "range": [
      4028,
      4029
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4029,
    "end": 4030,
    "range": [
      4029,
      4030
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4031,
    "end": 4033,
    "range": [
      4031,
      4033
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4034,
    "end": 4038,
    "range": [
      4034,
      4038
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4039,
    "end": 4040,
    "range": [
      4039,
      4040
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4041,
    "end": 4042,
    "range": [
      4041,
      4042
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4042,
    "end": 4046,
    "range": [
      4042,
      4046
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4046,
    "end": 4047,
    "range": [
      4046,
      4047
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 4048,
    "end": 4055,
    "range": [
      4048,
      4055
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4055,
    "end": 4056,
    "range": [
      4055,
      4056
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4057,
    "end": 4059,
    "range": [
      4057,
      4059
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4060,
    "end": 4061,
    "range": [
      4060,
      4061
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4066,
    "end": 4068,
    "range": [
      4066,
      4068
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4069,
    "end": 4070,
    "range": [
      4069,
      4070
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4070,
    "end": 4074,
    "range": [
      4070,
      4074
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4075,
    "end": 4078,
    "range": [
      4075,
      4078
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 4079,
    "end": 4082,
    "range": [
      4079,
      4082
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4082,
    "end": 4083,
    "range": [
      4082,
      4083
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4084,
    "end": 4085,
    "range": [
      4084,
      4085
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 4094,
    "end": 4101,
    "range": [
      4094,
      4101
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4101,
    "end": 4102,
    "range": [
      4101,
      4102
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 4102,
    "end": 4109,
    "range": [
      4102,
      4109
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4109,
    "end": 4110,
    "range": [
      4109,
      4110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4110,
    "end": 4111,
    "range": [
      4110,
      4111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4111,
    "end": 4112,
    "range": [
      4111,
      4112
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4117,
    "end": 4118,
    "range": [
      4117,
      4118
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4123,
    "end": 4125,
    "range": [
      4123,
      4125
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4126,
    "end": 4127,
    "range": [
      4126,
      4127
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4127,
    "end": 4131,
    "range": [
      4127,
      4131
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4132,
    "end": 4135,
    "range": [
      4132,
      4135
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 4136,
    "end": 4139,
    "range": [
      4136,
      4139
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4139,
    "end": 4140,
    "range": [
      4139,
      4140
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4141,
    "end": 4142,
    "range": [
      4141,
      4142
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 4151,
    "end": 4158,
    "range": [
      4151,
      4158
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4158,
    "end": 4159,
    "range": [
      4158,
      4159
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 4159,
    "end": 4170,
    "range": [
      4159,
      4170
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4170,
    "end": 4171,
    "range": [
      4170,
      4171
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4171,
    "end": 4172,
    "range": [
      4171,
      4172
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4172,
    "end": 4173,
    "range": [
      4172,
      4173
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4178,
    "end": 4179,
    "range": [
      4178,
      4179
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4180,
    "end": 4181,
    "range": [
      4180,
      4181
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4181,
    "end": 4182,
    "range": [
      4181,
      4182
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4184,
    "end": 4189,
    "range": [
      4184,
      4189
    ]
  },
  {
    "type": "Identifier",
    "value": "f52",
    "start": 4190,
    "end": 4193,
    "range": [
      4190,
      4193
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4193,
    "end": 4194,
    "range": [
      4193,
      4194
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4195,
    "end": 4196,
    "range": [
      4195,
      4196
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4196,
    "end": 4199,
    "range": [
      4196,
      4199
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4199,
    "end": 4203,
    "range": [
      4199,
      4203
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4203,
    "end": 4204,
    "range": [
      4203,
      4204
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4205,
    "end": 4206,
    "range": [
      4205,
      4206
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 4206,
    "end": 4209,
    "range": [
      4206,
      4209
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4209,
    "end": 4210,
    "range": [
      4209,
      4210
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4211,
    "end": 4217,
    "range": [
      4211,
      4217
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4217,
    "end": 4218,
    "range": [
      4217,
      4218
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4219,
    "end": 4220,
    "range": [
      4219,
      4220
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4221,
    "end": 4222,
    "range": [
      4221,
      4222
    ]
  },
  {
    "type": "String",
    "value": "'B'",
    "start": 4222,
    "end": 4225,
    "range": [
      4222,
      4225
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4225,
    "end": 4226,
    "range": [
      4225,
      4226
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4226,
    "end": 4227,
    "range": [
      4226,
      4227
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4228,
    "end": 4230,
    "range": [
      4228,
      4230
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4231,
    "end": 4235,
    "range": [
      4231,
      4235
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4236,
    "end": 4237,
    "range": [
      4236,
      4237
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4238,
    "end": 4239,
    "range": [
      4238,
      4239
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4239,
    "end": 4243,
    "range": [
      4239,
      4243
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4243,
    "end": 4244,
    "range": [
      4243,
      4244
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 4245,
    "end": 4252,
    "range": [
      4245,
      4252
    ]
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 4252,
    "end": 4253,
    "range": [
      4252,
      4253
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4253,
    "end": 4254,
    "range": [
      4253,
      4254
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4255,
    "end": 4257,
    "range": [
      4255,
      4257
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4258,
    "end": 4259,
    "range": [
      4258,
      4259
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4264,
    "end": 4266,
    "range": [
      4264,
      4266
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4267,
    "end": 4268,
    "range": [
      4267,
      4268
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 4268,
    "end": 4272,
    "range": [
      4268,
      4272
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4273,
    "end": 4276,
    "range": [
      4273,
      4276
    ]
  },
  {
    "type": "String",
    "value": "'A'",
    "start": 4277,
    "end": 4280,
    "range": [
      4277,
      4280
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4280,
    "end": 4281,
    "range": [
      4280,
      4281
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4282,
    "end": 4283,
    "range": [
      4282,
      4283
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 4292,
    "end": 4299,
    "range": [
      4292,
      4299
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4299,
    "end": 4300,
    "range": [
      4299,
      4300
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 4300,
    "end": 4307,
    "range": [
      4300,
      4307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4307,
    "end": 4308,
    "range": [
      4307,
      4308
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4308,
    "end": 4309,
    "range": [
      4308,
      4309
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4309,
    "end": 4310,
    "range": [
      4309,
      4310
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4315,
    "end": 4316,
    "range": [
      4315,
      4316
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4321,
    "end": 4325,
    "range": [
      4321,
      4325
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4326,
    "end": 4327,
    "range": [
      4326,
      4327
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 4336,
    "end": 4343,
    "range": [
      4336,
      4343
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4343,
    "end": 4344,
    "range": [
      4343,
      4344
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4363,
    "end": 4364,
    "range": [
      4363,
      4364
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4365,
    "end": 4366,
    "range": [
      4365,
      4366
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4366,
    "end": 4367,
    "range": [
      4366,
      4367
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 4369,
    "end": 4376,
    "range": [
      4369,
      4376
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 4377,
    "end": 4385,
    "range": [
      4377,
      4385
    ]
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 4386,
    "end": 4394,
    "range": [
      4386,
      4394
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4394,
    "end": 4395,
    "range": [
      4394,
      4395
    ]
  },
  {
    "type": "Identifier",
    "value": "path",
    "start": 4395,
    "end": 4399,
    "range": [
      4395,
      4399
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4399,
    "end": 4400,
    "range": [
      4399,
      4400
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 4401,
    "end": 4407,
    "range": [
      4401,
      4407
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4407,
    "end": 4408,
    "range": [
      4407,
      4408
    ]
  },
  {
    "type": "Identifier",
    "value": "callback",
    "start": 4409,
    "end": 4417,
    "range": [
      4409,
      4417
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4417,
    "end": 4418,
    "range": [
      4417,
      4418
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4419,
    "end": 4420,
    "range": [
      4419,
      4420
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4420,
    "end": 4423,
    "range": [
      4420,
      4423
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4423,
    "end": 4427,
    "range": [
      4423,
      4427
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4427,
    "end": 4428,
    "range": [
      4427,
      4428
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4429,
    "end": 4430,
    "range": [
      4429,
      4430
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 4430,
    "end": 4433,
    "range": [
      4430,
      4433
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4433,
    "end": 4434,
    "range": [
      4433,
      4434
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4435,
    "end": 4439,
    "range": [
      4435,
      4439
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4439,
    "end": 4440,
    "range": [
      4439,
      4440
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 4441,
    "end": 4445,
    "range": [
      4441,
      4445
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4445,
    "end": 4446,
    "range": [
      4445,
      4446
    ]
  },
  {
    "type": "Identifier",
    "value": "unknown",
    "start": 4447,
    "end": 4454,
    "range": [
      4447,
      4454
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4454,
    "end": 4455,
    "range": [
      4454,
      4455
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4455,
    "end": 4456,
    "range": [
      4455,
      4456
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4456,
    "end": 4457,
    "range": [
      4456,
      4457
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4458,
    "end": 4459,
    "range": [
      4458,
      4459
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4460,
    "end": 4461,
    "range": [
      4460,
      4461
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 4461,
    "end": 4464,
    "range": [
      4461,
      4464
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4464,
    "end": 4465,
    "range": [
      4464,
      4465
    ]
  },
  {
    "type": "Identifier",
    "value": "Error",
    "start": 4466,
    "end": 4471,
    "range": [
      4466,
      4471
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4471,
    "end": 4472,
    "range": [
      4471,
      4472
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 4473,
    "end": 4477,
    "range": [
      4473,
      4477
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4477,
    "end": 4478,
    "range": [
      4477,
      4478
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 4479,
    "end": 4488,
    "range": [
      4479,
      4488
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4488,
    "end": 4489,
    "range": [
      4488,
      4489
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4489,
    "end": 4490,
    "range": [
      4489,
      4490
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4491,
    "end": 4493,
    "range": [
      4491,
      4493
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4494,
    "end": 4498,
    "range": [
      4494,
      4498
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4498,
    "end": 4499,
    "range": [
      4498,
      4499
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4499,
    "end": 4500,
    "range": [
      4499,
      4500
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4501,
    "end": 4505,
    "range": [
      4501,
      4505
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4505,
    "end": 4506,
    "range": [
      4505,
      4506
    ]
  },
  {
    "type": "Identifier",
    "value": "readFile",
    "start": 4508,
    "end": 4516,
    "range": [
      4508,
      4516
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4516,
    "end": 4517,
    "range": [
      4516,
      4517
    ]
  },
  {
    "type": "String",
    "value": "'hello'",
    "start": 4517,
    "end": 4524,
    "range": [
      4517,
      4524
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4524,
    "end": 4525,
    "range": [
      4524,
      4525
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4526,
    "end": 4527,
    "range": [
      4526,
      4527
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 4527,
    "end": 4530,
    "range": [
      4527,
      4530
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4530,
    "end": 4531,
    "range": [
      4530,
      4531
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 4532,
    "end": 4536,
    "range": [
      4532,
      4536
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4536,
    "end": 4537,
    "range": [
      4536,
      4537
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4538,
    "end": 4540,
    "range": [
      4538,
      4540
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4541,
    "end": 4542,
    "range": [
      4541,
      4542
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 4547,
    "end": 4549,
    "range": [
      4547,
      4549
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4550,
    "end": 4551,
    "range": [
      4550,
      4551
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 4551,
    "end": 4554,
    "range": [
      4551,
      4554
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 4555,
    "end": 4558,
    "range": [
      4555,
      4558
    ]
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4559,
    "end": 4563,
    "range": [
      4559,
      4563
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4563,
    "end": 4564,
    "range": [
      4563,
      4564
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4565,
    "end": 4566,
    "range": [
      4565,
      4566
    ]
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 4575,
    "end": 4579,
    "range": [
      4575,
      4579
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4579,
    "end": 4580,
    "range": [
      4579,
      4580
    ]
  },
  {
    "type": "Identifier",
    "value": "length",
    "start": 4580,
    "end": 4586,
    "range": [
      4580,
      4586
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4586,
    "end": 4587,
    "range": [
      4586,
      4587
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4592,
    "end": 4593,
    "range": [
      4592,
      4593
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 4598,
    "end": 4602,
    "range": [
      4598,
      4602
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4603,
    "end": 4604,
    "range": [
      4603,
      4604
    ]
  },
  {
    "type": "Identifier",
    "value": "err",
    "start": 4613,
    "end": 4616,
    "range": [
      4613,
      4616
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4616,
    "end": 4617,
    "range": [
      4616,
      4617
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 4617,
    "end": 4624,
    "range": [
      4617,
      4624
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4624,
    "end": 4625,
    "range": [
      4624,
      4625
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4630,
    "end": 4631,
    "range": [
      4630,
      4631
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4632,
    "end": 4633,
    "range": [
      4632,
      4633
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4633,
    "end": 4634,
    "range": [
      4633,
      4634
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4634,
    "end": 4635,
    "range": [
      4634,
      4635
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 4637,
    "end": 4641,
    "range": [
      4637,
      4641
    ]
  },
  {
    "type": "Identifier",
    "value": "ReducerArgs",
    "start": 4642,
    "end": 4653,
    "range": [
      4642,
      4653
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4654,
    "end": 4655,
    "range": [
      4654,
      4655
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4656,
    "end": 4657,
    "range": [
      4656,
      4657
    ]
  },
  {
    "type": "String",
    "value": "\"add\"",
    "start": 4657,
    "end": 4662,
    "range": [
      4657,
      4662
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4662,
    "end": 4663,
    "range": [
      4662,
      4663
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4664,
    "end": 4665,
    "range": [
      4664,
      4665
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4666,
    "end": 4667,
    "range": [
      4666,
      4667
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4667,
    "end": 4668,
    "range": [
      4667,
      4668
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4669,
    "end": 4675,
    "range": [
      4669,
      4675
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4675,
    "end": 4676,
    "range": [
      4675,
      4676
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4677,
    "end": 4678,
    "range": [
      4677,
      4678
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4678,
    "end": 4679,
    "range": [
      4678,
      4679
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 4680,
    "end": 4686,
    "range": [
      4680,
      4686
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4687,
    "end": 4688,
    "range": [
      4687,
      4688
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4688,
    "end": 4689,
    "range": [
      4688,
      4689
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 4690,
    "end": 4691,
    "range": [
      4690,
      4691
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4692,
    "end": 4693,
    "range": [
      4692,
      4693
    ]
  },
  {
    "type": "String",
    "value": "\"concat\"",
    "start": 4693,
    "end": 4701,
    "range": [
      4693,
      4701
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4701,
    "end": 4702,
    "range": [
      4701,
      4702
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4703,
    "end": 4704,
    "range": [
      4703,
      4704
    ]
  },
  {
    "type": "Identifier",
    "value": "firstArr",
    "start": 4705,
    "end": 4713,
    "range": [
      4705,
      4713
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4713,
    "end": 4714,
    "range": [
      4713,
      4714
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4715,
    "end": 4718,
    "range": [
      4715,
      4718
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4718,
    "end": 4719,
    "range": [
      4718,
      4719
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4719,
    "end": 4720,
    "range": [
      4719,
      4720
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4720,
    "end": 4721,
    "range": [
      4720,
      4721
    ]
  },
  {
    "type": "Identifier",
    "value": "secondArr",
    "start": 4722,
    "end": 4731,
    "range": [
      4722,
      4731
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4731,
    "end": 4732,
    "range": [
      4731,
      4732
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4733,
    "end": 4736,
    "range": [
      4733,
      4736
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4736,
    "end": 4737,
    "range": [
      4736,
      4737
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4737,
    "end": 4738,
    "range": [
      4737,
      4738
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 4739,
    "end": 4740,
    "range": [
      4739,
      4740
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4740,
    "end": 4741,
    "range": [
      4740,
      4741
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4741,
    "end": 4742,
    "range": [
      4741,
      4742
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 4744,
    "end": 4749,
    "range": [
      4744,
      4749
    ]
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 4750,
    "end": 4757,
    "range": [
      4750,
      4757
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4757,
    "end": 4758,
    "range": [
      4757,
      4758
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4759,
    "end": 4760,
    "range": [
      4759,
      4760
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 4760,
    "end": 4763,
    "range": [
      4760,
      4763
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4763,
    "end": 4767,
    "range": [
      4763,
      4767
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4767,
    "end": 4768,
    "range": [
      4767,
      4768
    ]
  },
  {
    "type": "Identifier",
    "value": "ReducerArgs",
    "start": 4769,
    "end": 4780,
    "range": [
      4769,
      4780
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4780,
    "end": 4781,
    "range": [
      4780,
      4781
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4782,
    "end": 4784,
    "range": [
      4782,
      4784
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 4785,
    "end": 4789,
    "range": [
      4785,
      4789
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4790,
    "end": 4791,
    "range": [
      4790,
      4791
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4792,
    "end": 4793,
    "range": [
      4792,
      4793
    ]
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 4793,
    "end": 4795,
    "range": [
      4793,
      4795
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 4795,
    "end": 4796,
    "range": [
      4795,
      4796
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4797,
    "end": 4801,
    "range": [
      4797,
      4801
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4801,
    "end": 4802,
    "range": [
      4801,
      4802
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 4803,
    "end": 4805,
    "range": [
      4803,
      4805
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4806,
    "end": 4807,
    "range": [
      4806,
      4807
    ]
  },
  {
    "type": "Keyword",
    "value": "switch",
    "start": 4812,
    "end": 4818,
    "range": [
      4812,
      4818
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4819,
    "end": 4820,
    "range": [
      4819,
      4820
    ]
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 4820,
    "end": 4822,
    "range": [
      4820,
      4822
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4822,
    "end": 4823,
    "range": [
      4822,
      4823
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 4824,
    "end": 4825,
    "range": [
      4824,
      4825
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4834,
    "end": 4838,
    "range": [
      4834,
      4838
    ]
  },
  {
    "type": "String",
    "value": "\"add\"",
    "start": 4839,
    "end": 4844,
    "range": [
      4839,
      4844
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4844,
    "end": 4845,
    "range": [
      4844,
      4845
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4858,
    "end": 4865,
    "range": [
      4858,
      4865
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4865,
    "end": 4866,
    "range": [
      4865,
      4866
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4866,
    "end": 4869,
    "range": [
      4866,
      4869
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4869,
    "end": 4870,
    "range": [
      4869,
      4870
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4870,
    "end": 4874,
    "range": [
      4870,
      4874
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4874,
    "end": 4875,
    "range": [
      4874,
      4875
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 4875,
    "end": 4876,
    "range": [
      4875,
      4876
    ]
  },
  {
    "type": "Punctuator",
    "value": "+",
    "start": 4877,
    "end": 4878,
    "range": [
      4877,
      4878
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4879,
    "end": 4883,
    "range": [
      4879,
      4883
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4883,
    "end": 4884,
    "range": [
      4883,
      4884
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 4884,
    "end": 4885,
    "range": [
      4884,
      4885
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4885,
    "end": 4886,
    "range": [
      4885,
      4886
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4886,
    "end": 4887,
    "range": [
      4886,
      4887
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 4900,
    "end": 4905,
    "range": [
      4900,
      4905
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4905,
    "end": 4906,
    "range": [
      4905,
      4906
    ]
  },
  {
    "type": "Keyword",
    "value": "case",
    "start": 4915,
    "end": 4919,
    "range": [
      4915,
      4919
    ]
  },
  {
    "type": "String",
    "value": "\"concat\"",
    "start": 4920,
    "end": 4928,
    "range": [
      4920,
      4928
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4928,
    "end": 4929,
    "range": [
      4928,
      4929
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 4942,
    "end": 4949,
    "range": [
      4942,
      4949
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4949,
    "end": 4950,
    "range": [
      4949,
      4950
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 4950,
    "end": 4953,
    "range": [
      4950,
      4953
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4953,
    "end": 4954,
    "range": [
      4953,
      4954
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4954,
    "end": 4958,
    "range": [
      4954,
      4958
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4958,
    "end": 4959,
    "range": [
      4958,
      4959
    ]
  },
  {
    "type": "Identifier",
    "value": "firstArr",
    "start": 4959,
    "end": 4967,
    "range": [
      4959,
      4967
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4967,
    "end": 4968,
    "range": [
      4967,
      4968
    ]
  },
  {
    "type": "Identifier",
    "value": "concat",
    "start": 4968,
    "end": 4974,
    "range": [
      4968,
      4974
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 4974,
    "end": 4975,
    "range": [
      4974,
      4975
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 4975,
    "end": 4979,
    "range": [
      4975,
      4979
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4979,
    "end": 4980,
    "range": [
      4979,
      4980
    ]
  },
  {
    "type": "Identifier",
    "value": "secondArr",
    "start": 4980,
    "end": 4989,
    "range": [
      4980,
      4989
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4989,
    "end": 4990,
    "range": [
      4989,
      4990
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 4990,
    "end": 4991,
    "range": [
      4990,
      4991
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4991,
    "end": 4992,
    "range": [
      4991,
      4992
    ]
  },
  {
    "type": "Keyword",
    "value": "break",
    "start": 5005,
    "end": 5010,
    "range": [
      5005,
      5010
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5010,
    "end": 5011,
    "range": [
      5010,
      5011
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5016,
    "end": 5017,
    "range": [
      5016,
      5017
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5018,
    "end": 5019,
    "range": [
      5018,
      5019
    ]
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 5021,
    "end": 5028,
    "range": [
      5021,
      5028
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5028,
    "end": 5029,
    "range": [
      5028,
      5029
    ]
  },
  {
    "type": "String",
    "value": "\"add\"",
    "start": 5029,
    "end": 5034,
    "range": [
      5029,
      5034
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5034,
    "end": 5035,
    "range": [
      5034,
      5035
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5036,
    "end": 5037,
    "range": [
      5036,
      5037
    ]
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 5038,
    "end": 5039,
    "range": [
      5038,
      5039
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5039,
    "end": 5040,
    "range": [
      5039,
      5040
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5041,
    "end": 5042,
    "range": [
      5041,
      5042
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5042,
    "end": 5043,
    "range": [
      5042,
      5043
    ]
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 5044,
    "end": 5045,
    "range": [
      5044,
      5045
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5045,
    "end": 5046,
    "range": [
      5045,
      5046
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5047,
    "end": 5048,
    "range": [
      5047,
      5048
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5049,
    "end": 5050,
    "range": [
      5049,
      5050
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5050,
    "end": 5051,
    "range": [
      5050,
      5051
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5051,
    "end": 5052,
    "range": [
      5051,
      5052
    ]
  },
  {
    "type": "Identifier",
    "value": "reducer",
    "start": 5053,
    "end": 5060,
    "range": [
      5053,
      5060
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5060,
    "end": 5061,
    "range": [
      5060,
      5061
    ]
  },
  {
    "type": "String",
    "value": "\"concat\"",
    "start": 5061,
    "end": 5069,
    "range": [
      5061,
      5069
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5069,
    "end": 5070,
    "range": [
      5069,
      5070
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5071,
    "end": 5072,
    "range": [
      5071,
      5072
    ]
  },
  {
    "type": "Identifier",
    "value": "firstArr",
    "start": 5073,
    "end": 5081,
    "range": [
      5073,
      5081
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5081,
    "end": 5082,
    "range": [
      5081,
      5082
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5083,
    "end": 5084,
    "range": [
      5083,
      5084
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 5084,
    "end": 5085,
    "range": [
      5084,
      5085
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5085,
    "end": 5086,
    "range": [
      5085,
      5086
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 5087,
    "end": 5088,
    "range": [
      5087,
      5088
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5088,
    "end": 5089,
    "range": [
      5088,
      5089
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5089,
    "end": 5090,
    "range": [
      5089,
      5090
    ]
  },
  {
    "type": "Identifier",
    "value": "secondArr",
    "start": 5091,
    "end": 5100,
    "range": [
      5091,
      5100
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5100,
    "end": 5101,
    "range": [
      5100,
      5101
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5102,
    "end": 5103,
    "range": [
      5102,
      5103
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 5103,
    "end": 5104,
    "range": [
      5103,
      5104
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5104,
    "end": 5105,
    "range": [
      5104,
      5105
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 5106,
    "end": 5107,
    "range": [
      5106,
      5107
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5107,
    "end": 5108,
    "range": [
      5107,
      5108
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5109,
    "end": 5110,
    "range": [
      5109,
      5110
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5110,
    "end": 5111,
    "range": [
      5110,
      5111
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5111,
    "end": 5112,
    "range": [
      5111,
      5112
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5204,
    "end": 5208,
    "range": [
      5204,
      5208
    ]
  },
  {
    "type": "Identifier",
    "value": "FooMethod",
    "start": 5209,
    "end": 5218,
    "range": [
      5209,
      5218
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5219,
    "end": 5220,
    "range": [
      5219,
      5220
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5221,
    "end": 5222,
    "range": [
      5221,
      5222
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 5225,
    "end": 5231,
    "range": [
      5225,
      5231
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5231,
    "end": 5232,
    "range": [
      5231,
      5232
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5232,
    "end": 5235,
    "range": [
      5232,
      5235
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 5235,
    "end": 5239,
    "range": [
      5235,
      5239
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5239,
    "end": 5240,
    "range": [
      5239,
      5240
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5245,
    "end": 5246,
    "range": [
      5245,
      5246
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5246,
    "end": 5250,
    "range": [
      5246,
      5250
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5250,
    "end": 5251,
    "range": [
      5250,
      5251
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 5252,
    "end": 5257,
    "range": [
      5252,
      5257
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5257,
    "end": 5258,
    "range": [
      5257,
      5258
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5259,
    "end": 5261,
    "range": [
      5259,
      5261
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5261,
    "end": 5262,
    "range": [
      5261,
      5262
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5263,
    "end": 5264,
    "range": [
      5263,
      5264
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5264,
    "end": 5265,
    "range": [
      5264,
      5265
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5265,
    "end": 5266,
    "range": [
      5265,
      5266
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5267,
    "end": 5273,
    "range": [
      5267,
      5273
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5273,
    "end": 5274,
    "range": [
      5273,
      5274
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5275,
    "end": 5277,
    "range": [
      5275,
      5277
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5278,
    "end": 5282,
    "range": [
      5278,
      5282
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5282,
    "end": 5283,
    "range": [
      5282,
      5283
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5284,
    "end": 5285,
    "range": [
      5284,
      5285
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5290,
    "end": 5291,
    "range": [
      5290,
      5291
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5291,
    "end": 5295,
    "range": [
      5291,
      5295
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5295,
    "end": 5296,
    "range": [
      5295,
      5296
    ]
  },
  {
    "type": "String",
    "value": "\"num\"",
    "start": 5297,
    "end": 5302,
    "range": [
      5297,
      5302
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5302,
    "end": 5303,
    "range": [
      5302,
      5303
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5304,
    "end": 5306,
    "range": [
      5304,
      5306
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5306,
    "end": 5307,
    "range": [
      5306,
      5307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5308,
    "end": 5309,
    "range": [
      5308,
      5309
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5309,
    "end": 5310,
    "range": [
      5309,
      5310
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5310,
    "end": 5311,
    "range": [
      5310,
      5311
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5312,
    "end": 5318,
    "range": [
      5312,
      5318
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5318,
    "end": 5319,
    "range": [
      5318,
      5319
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5320,
    "end": 5322,
    "range": [
      5320,
      5322
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5323,
    "end": 5327,
    "range": [
      5323,
      5327
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5327,
    "end": 5328,
    "range": [
      5327,
      5328
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5331,
    "end": 5332,
    "range": [
      5331,
      5332
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5332,
    "end": 5333,
    "range": [
      5332,
      5333
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5334,
    "end": 5338,
    "range": [
      5334,
      5338
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5338,
    "end": 5339,
    "range": [
      5338,
      5339
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5340,
    "end": 5341,
    "range": [
      5340,
      5341
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5343,
    "end": 5346,
    "range": [
      5343,
      5346
    ]
  },
  {
    "type": "Identifier",
    "value": "fooM",
    "start": 5347,
    "end": 5351,
    "range": [
      5347,
      5351
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5351,
    "end": 5352,
    "range": [
      5351,
      5352
    ]
  },
  {
    "type": "Identifier",
    "value": "FooMethod",
    "start": 5353,
    "end": 5362,
    "range": [
      5353,
      5362
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5363,
    "end": 5364,
    "range": [
      5363,
      5364
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5365,
    "end": 5366,
    "range": [
      5365,
      5366
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 5369,
    "end": 5375,
    "range": [
      5369,
      5375
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5375,
    "end": 5376,
    "range": [
      5375,
      5376
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5376,
    "end": 5380,
    "range": [
      5376,
      5380
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5380,
    "end": 5381,
    "range": [
      5380,
      5381
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5382,
    "end": 5384,
    "range": [
      5382,
      5384
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5384,
    "end": 5385,
    "range": [
      5384,
      5385
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5386,
    "end": 5387,
    "range": [
      5386,
      5387
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5392,
    "end": 5394,
    "range": [
      5392,
      5394
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5395,
    "end": 5396,
    "range": [
      5395,
      5396
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5396,
    "end": 5400,
    "range": [
      5396,
      5400
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 5401,
    "end": 5403,
    "range": [
      5401,
      5403
    ]
  },
  {
    "type": "String",
    "value": "'num'",
    "start": 5404,
    "end": 5409,
    "range": [
      5404,
      5409
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5409,
    "end": 5410,
    "range": [
      5409,
      5410
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5411,
    "end": 5412,
    "range": [
      5411,
      5412
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5419,
    "end": 5421,
    "range": [
      5419,
      5421
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5421,
    "end": 5422,
    "range": [
      5421,
      5422
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 5422,
    "end": 5425,
    "range": [
      5422,
      5425
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5425,
    "end": 5426,
    "range": [
      5425,
      5426
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5431,
    "end": 5432,
    "range": [
      5431,
      5432
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5433,
    "end": 5437,
    "range": [
      5433,
      5437
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5438,
    "end": 5439,
    "range": [
      5438,
      5439
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5446,
    "end": 5448,
    "range": [
      5446,
      5448
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5448,
    "end": 5449,
    "range": [
      5448,
      5449
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 5449,
    "end": 5454,
    "range": [
      5449,
      5454
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5454,
    "end": 5455,
    "range": [
      5454,
      5455
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5460,
    "end": 5461,
    "range": [
      5460,
      5461
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5464,
    "end": 5465,
    "range": [
      5464,
      5465
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5466,
    "end": 5467,
    "range": [
      5466,
      5467
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5467,
    "end": 5468,
    "range": [
      5467,
      5468
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5470,
    "end": 5474,
    "range": [
      5470,
      5474
    ]
  },
  {
    "type": "Identifier",
    "value": "FooAsyncMethod",
    "start": 5475,
    "end": 5489,
    "range": [
      5475,
      5489
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5490,
    "end": 5491,
    "range": [
      5490,
      5491
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5492,
    "end": 5493,
    "range": [
      5492,
      5493
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 5496,
    "end": 5502,
    "range": [
      5496,
      5502
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5502,
    "end": 5503,
    "range": [
      5502,
      5503
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5503,
    "end": 5506,
    "range": [
      5503,
      5506
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 5506,
    "end": 5510,
    "range": [
      5506,
      5510
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5510,
    "end": 5511,
    "range": [
      5510,
      5511
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5516,
    "end": 5517,
    "range": [
      5516,
      5517
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5517,
    "end": 5521,
    "range": [
      5517,
      5521
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5521,
    "end": 5522,
    "range": [
      5521,
      5522
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 5523,
    "end": 5528,
    "range": [
      5523,
      5528
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5528,
    "end": 5529,
    "range": [
      5528,
      5529
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5530,
    "end": 5532,
    "range": [
      5530,
      5532
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5532,
    "end": 5533,
    "range": [
      5532,
      5533
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5534,
    "end": 5535,
    "range": [
      5534,
      5535
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5535,
    "end": 5536,
    "range": [
      5535,
      5536
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5536,
    "end": 5537,
    "range": [
      5536,
      5537
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5538,
    "end": 5544,
    "range": [
      5538,
      5544
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5544,
    "end": 5545,
    "range": [
      5544,
      5545
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5546,
    "end": 5548,
    "range": [
      5546,
      5548
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5549,
    "end": 5553,
    "range": [
      5549,
      5553
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5553,
    "end": 5554,
    "range": [
      5553,
      5554
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5555,
    "end": 5556,
    "range": [
      5555,
      5556
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5561,
    "end": 5562,
    "range": [
      5561,
      5562
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5562,
    "end": 5566,
    "range": [
      5562,
      5566
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5566,
    "end": 5567,
    "range": [
      5566,
      5567
    ]
  },
  {
    "type": "String",
    "value": "\"num\"",
    "start": 5568,
    "end": 5573,
    "range": [
      5568,
      5573
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5573,
    "end": 5574,
    "range": [
      5573,
      5574
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5575,
    "end": 5577,
    "range": [
      5575,
      5577
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5577,
    "end": 5578,
    "range": [
      5577,
      5578
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5579,
    "end": 5580,
    "range": [
      5579,
      5580
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5580,
    "end": 5581,
    "range": [
      5580,
      5581
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5581,
    "end": 5582,
    "range": [
      5581,
      5582
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5583,
    "end": 5589,
    "range": [
      5583,
      5589
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5589,
    "end": 5590,
    "range": [
      5589,
      5590
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5591,
    "end": 5593,
    "range": [
      5591,
      5593
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5594,
    "end": 5598,
    "range": [
      5594,
      5598
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5598,
    "end": 5599,
    "range": [
      5598,
      5599
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5602,
    "end": 5603,
    "range": [
      5602,
      5603
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5603,
    "end": 5604,
    "range": [
      5603,
      5604
    ]
  },
  {
    "type": "Identifier",
    "value": "Promise",
    "start": 5605,
    "end": 5612,
    "range": [
      5605,
      5612
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5612,
    "end": 5613,
    "range": [
      5612,
      5613
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5613,
    "end": 5616,
    "range": [
      5613,
      5616
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5616,
    "end": 5617,
    "range": [
      5616,
      5617
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5617,
    "end": 5618,
    "range": [
      5617,
      5618
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5619,
    "end": 5620,
    "range": [
      5619,
      5620
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5622,
    "end": 5625,
    "range": [
      5622,
      5625
    ]
  },
  {
    "type": "Identifier",
    "value": "fooAsyncM",
    "start": 5626,
    "end": 5635,
    "range": [
      5626,
      5635
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5635,
    "end": 5636,
    "range": [
      5635,
      5636
    ]
  },
  {
    "type": "Identifier",
    "value": "FooAsyncMethod",
    "start": 5637,
    "end": 5651,
    "range": [
      5637,
      5651
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5652,
    "end": 5653,
    "range": [
      5652,
      5653
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5654,
    "end": 5655,
    "range": [
      5654,
      5655
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 5658,
    "end": 5663,
    "range": [
      5658,
      5663
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 5664,
    "end": 5670,
    "range": [
      5664,
      5670
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5670,
    "end": 5671,
    "range": [
      5670,
      5671
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5671,
    "end": 5675,
    "range": [
      5671,
      5675
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5675,
    "end": 5676,
    "range": [
      5675,
      5676
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5677,
    "end": 5679,
    "range": [
      5677,
      5679
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5679,
    "end": 5680,
    "range": [
      5679,
      5680
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5681,
    "end": 5682,
    "range": [
      5681,
      5682
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5687,
    "end": 5689,
    "range": [
      5687,
      5689
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5690,
    "end": 5691,
    "range": [
      5690,
      5691
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5691,
    "end": 5695,
    "range": [
      5691,
      5695
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 5696,
    "end": 5698,
    "range": [
      5696,
      5698
    ]
  },
  {
    "type": "String",
    "value": "'num'",
    "start": 5699,
    "end": 5704,
    "range": [
      5699,
      5704
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5704,
    "end": 5705,
    "range": [
      5704,
      5705
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5706,
    "end": 5707,
    "range": [
      5706,
      5707
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5714,
    "end": 5716,
    "range": [
      5714,
      5716
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5716,
    "end": 5717,
    "range": [
      5716,
      5717
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 5717,
    "end": 5720,
    "range": [
      5717,
      5720
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5720,
    "end": 5721,
    "range": [
      5720,
      5721
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5726,
    "end": 5727,
    "range": [
      5726,
      5727
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 5728,
    "end": 5732,
    "range": [
      5728,
      5732
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5733,
    "end": 5734,
    "range": [
      5733,
      5734
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5741,
    "end": 5743,
    "range": [
      5741,
      5743
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5743,
    "end": 5744,
    "range": [
      5743,
      5744
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 5744,
    "end": 5749,
    "range": [
      5744,
      5749
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5749,
    "end": 5750,
    "range": [
      5749,
      5750
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5755,
    "end": 5756,
    "range": [
      5755,
      5756
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5759,
    "end": 5760,
    "range": [
      5759,
      5760
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5761,
    "end": 5762,
    "range": [
      5761,
      5762
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5762,
    "end": 5763,
    "range": [
      5762,
      5763
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5765,
    "end": 5769,
    "range": [
      5765,
      5769
    ]
  },
  {
    "type": "Identifier",
    "value": "FooGenMethod",
    "start": 5770,
    "end": 5782,
    "range": [
      5770,
      5782
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5783,
    "end": 5784,
    "range": [
      5783,
      5784
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5785,
    "end": 5786,
    "range": [
      5785,
      5786
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 5789,
    "end": 5795,
    "range": [
      5789,
      5795
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5795,
    "end": 5796,
    "range": [
      5795,
      5796
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 5796,
    "end": 5799,
    "range": [
      5796,
      5799
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 5799,
    "end": 5803,
    "range": [
      5799,
      5803
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5803,
    "end": 5804,
    "range": [
      5803,
      5804
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5809,
    "end": 5810,
    "range": [
      5809,
      5810
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5810,
    "end": 5814,
    "range": [
      5810,
      5814
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5814,
    "end": 5815,
    "range": [
      5814,
      5815
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 5816,
    "end": 5821,
    "range": [
      5816,
      5821
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5821,
    "end": 5822,
    "range": [
      5821,
      5822
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5823,
    "end": 5825,
    "range": [
      5823,
      5825
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5825,
    "end": 5826,
    "range": [
      5825,
      5826
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5827,
    "end": 5828,
    "range": [
      5827,
      5828
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5828,
    "end": 5829,
    "range": [
      5828,
      5829
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5829,
    "end": 5830,
    "range": [
      5829,
      5830
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 5831,
    "end": 5837,
    "range": [
      5831,
      5837
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5837,
    "end": 5838,
    "range": [
      5837,
      5838
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5839,
    "end": 5841,
    "range": [
      5839,
      5841
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5842,
    "end": 5846,
    "range": [
      5842,
      5846
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5846,
    "end": 5847,
    "range": [
      5846,
      5847
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 5848,
    "end": 5849,
    "range": [
      5848,
      5849
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 5854,
    "end": 5855,
    "range": [
      5854,
      5855
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5855,
    "end": 5859,
    "range": [
      5855,
      5859
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5859,
    "end": 5860,
    "range": [
      5859,
      5860
    ]
  },
  {
    "type": "String",
    "value": "\"num\"",
    "start": 5861,
    "end": 5866,
    "range": [
      5861,
      5866
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5866,
    "end": 5867,
    "range": [
      5866,
      5867
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5868,
    "end": 5870,
    "range": [
      5868,
      5870
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5870,
    "end": 5871,
    "range": [
      5870,
      5871
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5872,
    "end": 5873,
    "range": [
      5872,
      5873
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 5873,
    "end": 5874,
    "range": [
      5873,
      5874
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5874,
    "end": 5875,
    "range": [
      5874,
      5875
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 5876,
    "end": 5882,
    "range": [
      5876,
      5882
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5882,
    "end": 5883,
    "range": [
      5882,
      5883
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 5884,
    "end": 5886,
    "range": [
      5884,
      5886
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 5887,
    "end": 5891,
    "range": [
      5887,
      5891
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 5891,
    "end": 5892,
    "range": [
      5891,
      5892
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5895,
    "end": 5896,
    "range": [
      5895,
      5896
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5896,
    "end": 5897,
    "range": [
      5896,
      5897
    ]
  },
  {
    "type": "Identifier",
    "value": "Generator",
    "start": 5898,
    "end": 5907,
    "range": [
      5898,
      5907
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 5907,
    "end": 5908,
    "range": [
      5907,
      5908
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5908,
    "end": 5911,
    "range": [
      5908,
      5911
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5911,
    "end": 5912,
    "range": [
      5911,
      5912
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5913,
    "end": 5916,
    "range": [
      5913,
      5916
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5916,
    "end": 5917,
    "range": [
      5916,
      5917
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 5918,
    "end": 5921,
    "range": [
      5918,
      5921
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 5921,
    "end": 5922,
    "range": [
      5921,
      5922
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 5922,
    "end": 5923,
    "range": [
      5922,
      5923
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 5924,
    "end": 5925,
    "range": [
      5924,
      5925
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 5927,
    "end": 5930,
    "range": [
      5927,
      5930
    ]
  },
  {
    "type": "Identifier",
    "value": "fooGenM",
    "start": 5931,
    "end": 5938,
    "range": [
      5931,
      5938
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 5938,
    "end": 5939,
    "range": [
      5938,
      5939
    ]
  },
  {
    "type": "Identifier",
    "value": "FooGenMethod",
    "start": 5940,
    "end": 5952,
    "range": [
      5940,
      5952
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 5953,
    "end": 5954,
    "range": [
      5953,
      5954
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5955,
    "end": 5956,
    "range": [
      5955,
      5956
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 5959,
    "end": 5960,
    "range": [
      5959,
      5960
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 5960,
    "end": 5966,
    "range": [
      5960,
      5966
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5966,
    "end": 5967,
    "range": [
      5966,
      5967
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5967,
    "end": 5971,
    "range": [
      5967,
      5971
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 5971,
    "end": 5972,
    "range": [
      5971,
      5972
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 5973,
    "end": 5975,
    "range": [
      5973,
      5975
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 5975,
    "end": 5976,
    "range": [
      5975,
      5976
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 5977,
    "end": 5978,
    "range": [
      5977,
      5978
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 5983,
    "end": 5985,
    "range": [
      5983,
      5985
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 5986,
    "end": 5987,
    "range": [
      5986,
      5987
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 5987,
    "end": 5991,
    "range": [
      5987,
      5991
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 5992,
    "end": 5994,
    "range": [
      5992,
      5994
    ]
  },
  {
    "type": "String",
    "value": "'num'",
    "start": 5995,
    "end": 6000,
    "range": [
      5995,
      6000
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6000,
    "end": 6001,
    "range": [
      6000,
      6001
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6002,
    "end": 6003,
    "range": [
      6002,
      6003
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6010,
    "end": 6012,
    "range": [
      6010,
      6012
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6012,
    "end": 6013,
    "range": [
      6012,
      6013
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 6013,
    "end": 6016,
    "range": [
      6013,
      6016
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6016,
    "end": 6017,
    "range": [
      6016,
      6017
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6022,
    "end": 6023,
    "range": [
      6022,
      6023
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6024,
    "end": 6028,
    "range": [
      6024,
      6028
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6029,
    "end": 6030,
    "range": [
      6029,
      6030
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6037,
    "end": 6039,
    "range": [
      6037,
      6039
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6039,
    "end": 6040,
    "range": [
      6039,
      6040
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 6040,
    "end": 6045,
    "range": [
      6040,
      6045
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6045,
    "end": 6046,
    "range": [
      6045,
      6046
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6051,
    "end": 6052,
    "range": [
      6051,
      6052
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6055,
    "end": 6056,
    "range": [
      6055,
      6056
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6057,
    "end": 6058,
    "range": [
      6057,
      6058
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6058,
    "end": 6059,
    "range": [
      6058,
      6059
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6061,
    "end": 6065,
    "range": [
      6061,
      6065
    ]
  },
  {
    "type": "Identifier",
    "value": "FooAsyncGenMethod",
    "start": 6066,
    "end": 6083,
    "range": [
      6066,
      6083
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6084,
    "end": 6085,
    "range": [
      6084,
      6085
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6086,
    "end": 6087,
    "range": [
      6086,
      6087
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 6090,
    "end": 6096,
    "range": [
      6090,
      6096
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6096,
    "end": 6097,
    "range": [
      6096,
      6097
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6097,
    "end": 6100,
    "range": [
      6097,
      6100
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 6100,
    "end": 6104,
    "range": [
      6100,
      6104
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6104,
    "end": 6105,
    "range": [
      6104,
      6105
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6110,
    "end": 6111,
    "range": [
      6110,
      6111
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6111,
    "end": 6115,
    "range": [
      6111,
      6115
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6115,
    "end": 6116,
    "range": [
      6115,
      6116
    ]
  },
  {
    "type": "String",
    "value": "\"str\"",
    "start": 6117,
    "end": 6122,
    "range": [
      6117,
      6122
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6122,
    "end": 6123,
    "range": [
      6122,
      6123
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6124,
    "end": 6126,
    "range": [
      6124,
      6126
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6126,
    "end": 6127,
    "range": [
      6126,
      6127
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6128,
    "end": 6129,
    "range": [
      6128,
      6129
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 6129,
    "end": 6130,
    "range": [
      6129,
      6130
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6130,
    "end": 6131,
    "range": [
      6130,
      6131
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6132,
    "end": 6138,
    "range": [
      6132,
      6138
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6138,
    "end": 6139,
    "range": [
      6138,
      6139
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6140,
    "end": 6142,
    "range": [
      6140,
      6142
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 6143,
    "end": 6147,
    "range": [
      6143,
      6147
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6147,
    "end": 6148,
    "range": [
      6147,
      6148
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6149,
    "end": 6150,
    "range": [
      6149,
      6150
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6155,
    "end": 6156,
    "range": [
      6155,
      6156
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6156,
    "end": 6160,
    "range": [
      6156,
      6160
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6160,
    "end": 6161,
    "range": [
      6160,
      6161
    ]
  },
  {
    "type": "String",
    "value": "\"num\"",
    "start": 6162,
    "end": 6167,
    "range": [
      6162,
      6167
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6167,
    "end": 6168,
    "range": [
      6167,
      6168
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6169,
    "end": 6171,
    "range": [
      6169,
      6171
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6171,
    "end": 6172,
    "range": [
      6171,
      6172
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6173,
    "end": 6174,
    "range": [
      6173,
      6174
    ]
  },
  {
    "type": "Identifier",
    "value": "e",
    "start": 6174,
    "end": 6175,
    "range": [
      6174,
      6175
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6175,
    "end": 6176,
    "range": [
      6175,
      6176
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6177,
    "end": 6183,
    "range": [
      6177,
      6183
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6183,
    "end": 6184,
    "range": [
      6183,
      6184
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6185,
    "end": 6187,
    "range": [
      6185,
      6187
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 6188,
    "end": 6192,
    "range": [
      6188,
      6192
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6192,
    "end": 6193,
    "range": [
      6192,
      6193
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6196,
    "end": 6197,
    "range": [
      6196,
      6197
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6197,
    "end": 6198,
    "range": [
      6197,
      6198
    ]
  },
  {
    "type": "Identifier",
    "value": "AsyncGenerator",
    "start": 6199,
    "end": 6213,
    "range": [
      6199,
      6213
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6213,
    "end": 6214,
    "range": [
      6213,
      6214
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6214,
    "end": 6217,
    "range": [
      6214,
      6217
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6217,
    "end": 6218,
    "range": [
      6217,
      6218
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6219,
    "end": 6222,
    "range": [
      6219,
      6222
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6222,
    "end": 6223,
    "range": [
      6222,
      6223
    ]
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 6224,
    "end": 6227,
    "range": [
      6224,
      6227
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6227,
    "end": 6228,
    "range": [
      6227,
      6228
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6228,
    "end": 6229,
    "range": [
      6228,
      6229
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6230,
    "end": 6231,
    "range": [
      6230,
      6231
    ]
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 6233,
    "end": 6236,
    "range": [
      6233,
      6236
    ]
  },
  {
    "type": "Identifier",
    "value": "fooAsyncGenM",
    "start": 6237,
    "end": 6249,
    "range": [
      6237,
      6249
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6249,
    "end": 6250,
    "range": [
      6249,
      6250
    ]
  },
  {
    "type": "Identifier",
    "value": "FooAsyncGenMethod",
    "start": 6251,
    "end": 6268,
    "range": [
      6251,
      6268
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6269,
    "end": 6270,
    "range": [
      6269,
      6270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6271,
    "end": 6272,
    "range": [
      6271,
      6272
    ]
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 6275,
    "end": 6280,
    "range": [
      6275,
      6280
    ]
  },
  {
    "type": "Punctuator",
    "value": "*",
    "start": 6281,
    "end": 6282,
    "range": [
      6281,
      6282
    ]
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 6282,
    "end": 6288,
    "range": [
      6282,
      6288
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6288,
    "end": 6289,
    "range": [
      6288,
      6289
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6289,
    "end": 6293,
    "range": [
      6289,
      6293
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6293,
    "end": 6294,
    "range": [
      6293,
      6294
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6295,
    "end": 6297,
    "range": [
      6295,
      6297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6297,
    "end": 6298,
    "range": [
      6297,
      6298
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6299,
    "end": 6300,
    "range": [
      6299,
      6300
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6305,
    "end": 6307,
    "range": [
      6305,
      6307
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6308,
    "end": 6309,
    "range": [
      6308,
      6309
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6309,
    "end": 6313,
    "range": [
      6309,
      6313
    ]
  },
  {
    "type": "Punctuator",
    "value": "==",
    "start": 6314,
    "end": 6316,
    "range": [
      6314,
      6316
    ]
  },
  {
    "type": "String",
    "value": "'num'",
    "start": 6317,
    "end": 6322,
    "range": [
      6317,
      6322
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6322,
    "end": 6323,
    "range": [
      6322,
      6323
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6324,
    "end": 6325,
    "range": [
      6324,
      6325
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6332,
    "end": 6334,
    "range": [
      6332,
      6334
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6334,
    "end": 6335,
    "range": [
      6334,
      6335
    ]
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 6335,
    "end": 6338,
    "range": [
      6335,
      6338
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6338,
    "end": 6339,
    "range": [
      6338,
      6339
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6344,
    "end": 6345,
    "range": [
      6344,
      6345
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 6346,
    "end": 6350,
    "range": [
      6346,
      6350
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6351,
    "end": 6352,
    "range": [
      6351,
      6352
    ]
  },
  {
    "type": "Identifier",
    "value": "cb",
    "start": 6359,
    "end": 6361,
    "range": [
      6359,
      6361
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6361,
    "end": 6362,
    "range": [
      6361,
      6362
    ]
  },
  {
    "type": "String",
    "value": "\"abc\"",
    "start": 6362,
    "end": 6367,
    "range": [
      6362,
      6367
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6367,
    "end": 6368,
    "range": [
      6367,
      6368
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6373,
    "end": 6374,
    "range": [
      6373,
      6374
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6377,
    "end": 6378,
    "range": [
      6377,
      6378
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6379,
    "end": 6380,
    "range": [
      6379,
      6380
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6380,
    "end": 6381,
    "range": [
      6380,
      6381
    ]
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 6405,
    "end": 6409,
    "range": [
      6405,
      6409
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 6410,
    "end": 6414,
    "range": [
      6410,
      6414
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6415,
    "end": 6416,
    "range": [
      6415,
      6416
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 6417,
    "end": 6418,
    "range": [
      6417,
      6418
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6418,
    "end": 6419,
    "range": [
      6418,
      6419
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 6420,
    "end": 6427,
    "range": [
      6420,
      6427
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6428,
    "end": 6429,
    "range": [
      6428,
      6429
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 6429,
    "end": 6432,
    "range": [
      6429,
      6432
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6432,
    "end": 6433,
    "range": [
      6432,
      6433
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6434,
    "end": 6440,
    "range": [
      6434,
      6440
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6440,
    "end": 6441,
    "range": [
      6440,
      6441
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 6442,
    "end": 6443,
    "range": [
      6442,
      6443
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6444,
    "end": 6445,
    "range": [
      6444,
      6445
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 6445,
    "end": 6448,
    "range": [
      6445,
      6448
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6448,
    "end": 6449,
    "range": [
      6448,
      6449
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 6450,
    "end": 6456,
    "range": [
      6450,
      6456
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 6456,
    "end": 6457,
    "range": [
      6456,
      6457
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 6457,
    "end": 6458,
    "range": [
      6457,
      6458
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6458,
    "end": 6459,
    "range": [
      6458,
      6459
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 6459,
    "end": 6462,
    "range": [
      6459,
      6462
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 6462,
    "end": 6466,
    "range": [
      6462,
      6466
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6466,
    "end": 6467,
    "range": [
      6466,
      6467
    ]
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 6468,
    "end": 6469,
    "range": [
      6468,
      6469
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6469,
    "end": 6470,
    "range": [
      6469,
      6470
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6471,
    "end": 6473,
    "range": [
      6471,
      6473
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 6474,
    "end": 6478,
    "range": [
      6474,
      6478
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6478,
    "end": 6479,
    "range": [
      6478,
      6479
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 6481,
    "end": 6486,
    "range": [
      6481,
      6486
    ]
  },
  {
    "type": "Identifier",
    "value": "f60",
    "start": 6487,
    "end": 6490,
    "range": [
      6487,
      6490
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6490,
    "end": 6491,
    "range": [
      6490,
      6491
    ]
  },
  {
    "type": "Identifier",
    "value": "Func",
    "start": 6492,
    "end": 6496,
    "range": [
      6492,
      6496
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6497,
    "end": 6498,
    "range": [
      6497,
      6498
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6499,
    "end": 6500,
    "range": [
      6499,
      6500
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 6500,
    "end": 6504,
    "range": [
      6500,
      6504
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6504,
    "end": 6505,
    "range": [
      6504,
      6505
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 6506,
    "end": 6513,
    "range": [
      6506,
      6513
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6513,
    "end": 6514,
    "range": [
      6513,
      6514
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 6515,
    "end": 6517,
    "range": [
      6515,
      6517
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6518,
    "end": 6519,
    "range": [
      6518,
      6519
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6524,
    "end": 6526,
    "range": [
      6524,
      6526
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6527,
    "end": 6528,
    "range": [
      6527,
      6528
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 6528,
    "end": 6532,
    "range": [
      6528,
      6532
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6533,
    "end": 6536,
    "range": [
      6533,
      6536
    ]
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 6537,
    "end": 6540,
    "range": [
      6537,
      6540
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6540,
    "end": 6541,
    "range": [
      6540,
      6541
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6542,
    "end": 6543,
    "range": [
      6542,
      6543
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 6552,
    "end": 6559,
    "range": [
      6552,
      6559
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6559,
    "end": 6560,
    "range": [
      6559,
      6560
    ]
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 6560,
    "end": 6567,
    "range": [
      6560,
      6567
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6567,
    "end": 6568,
    "range": [
      6567,
      6568
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6568,
    "end": 6569,
    "range": [
      6568,
      6569
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6569,
    "end": 6570,
    "range": [
      6569,
      6570
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6585,
    "end": 6586,
    "range": [
      6585,
      6586
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 6591,
    "end": 6593,
    "range": [
      6591,
      6593
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6594,
    "end": 6595,
    "range": [
      6594,
      6595
    ]
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 6595,
    "end": 6599,
    "range": [
      6595,
      6599
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 6600,
    "end": 6603,
    "range": [
      6600,
      6603
    ]
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 6604,
    "end": 6607,
    "range": [
      6604,
      6607
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6607,
    "end": 6608,
    "range": [
      6607,
      6608
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6609,
    "end": 6610,
    "range": [
      6609,
      6610
    ]
  },
  {
    "type": "Identifier",
    "value": "payload",
    "start": 6619,
    "end": 6626,
    "range": [
      6619,
      6626
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6626,
    "end": 6627,
    "range": [
      6626,
      6627
    ]
  },
  {
    "type": "Identifier",
    "value": "toUpperCase",
    "start": 6627,
    "end": 6638,
    "range": [
      6627,
      6638
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6638,
    "end": 6639,
    "range": [
      6638,
      6639
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6639,
    "end": 6640,
    "range": [
      6639,
      6640
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6640,
    "end": 6641,
    "range": [
      6640,
      6641
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6656,
    "end": 6657,
    "range": [
      6656,
      6657
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6658,
    "end": 6659,
    "range": [
      6658,
      6659
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 6659,
    "end": 6660,
    "range": [
      6659,
      6660
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6684,
    "end": 6692,
    "range": [
      6684,
      6692
    ]
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 6693,
    "end": 6696,
    "range": [
      6693,
      6696
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6696,
    "end": 6697,
    "range": [
      6696,
      6697
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6697,
    "end": 6698,
    "range": [
      6697,
      6698
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 6703,
    "end": 6709,
    "range": [
      6703,
      6709
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6709,
    "end": 6710,
    "range": [
      6709,
      6710
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 6715,
    "end": 6720,
    "range": [
      6715,
      6720
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6721,
    "end": 6722,
    "range": [
      6721,
      6722
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 6723,
    "end": 6729,
    "range": [
      6723,
      6729
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6729,
    "end": 6730,
    "range": [
      6729,
      6730
    ]
  },
  {
    "type": "Identifier",
    "value": "test1",
    "start": 6730,
    "end": 6735,
    "range": [
      6730,
      6735
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6735,
    "end": 6736,
    "range": [
      6735,
      6736
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 6741,
    "end": 6746,
    "range": [
      6741,
      6746
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6747,
    "end": 6748,
    "range": [
      6747,
      6748
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 6749,
    "end": 6755,
    "range": [
      6749,
      6755
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6755,
    "end": 6756,
    "range": [
      6755,
      6756
    ]
  },
  {
    "type": "Identifier",
    "value": "test2",
    "start": 6756,
    "end": 6761,
    "range": [
      6756,
      6761
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6761,
    "end": 6762,
    "range": [
      6761,
      6762
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 6767,
    "end": 6772,
    "range": [
      6767,
      6772
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6773,
    "end": 6774,
    "range": [
      6773,
      6774
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 6775,
    "end": 6781,
    "range": [
      6775,
      6781
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6781,
    "end": 6782,
    "range": [
      6781,
      6782
    ]
  },
  {
    "type": "Identifier",
    "value": "test3",
    "start": 6782,
    "end": 6787,
    "range": [
      6782,
      6787
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6787,
    "end": 6788,
    "range": [
      6787,
      6788
    ]
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 6793,
    "end": 6798,
    "range": [
      6793,
      6798
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6799,
    "end": 6800,
    "range": [
      6799,
      6800
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 6801,
    "end": 6807,
    "range": [
      6801,
      6807
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6807,
    "end": 6808,
    "range": [
      6807,
      6808
    ]
  },
  {
    "type": "Identifier",
    "value": "test4",
    "start": 6808,
    "end": 6813,
    "range": [
      6808,
      6813
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6813,
    "end": 6814,
    "range": [
      6813,
      6814
    ]
  },
  {
    "type": "Identifier",
    "value": "test5",
    "start": 6819,
    "end": 6824,
    "range": [
      6819,
      6824
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6825,
    "end": 6826,
    "range": [
      6825,
      6826
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 6827,
    "end": 6833,
    "range": [
      6827,
      6833
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6833,
    "end": 6834,
    "range": [
      6833,
      6834
    ]
  },
  {
    "type": "Identifier",
    "value": "test5",
    "start": 6834,
    "end": 6839,
    "range": [
      6834,
      6839
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6839,
    "end": 6840,
    "range": [
      6839,
      6840
    ]
  },
  {
    "type": "Identifier",
    "value": "test6",
    "start": 6845,
    "end": 6850,
    "range": [
      6845,
      6850
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6851,
    "end": 6852,
    "range": [
      6851,
      6852
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 6853,
    "end": 6859,
    "range": [
      6853,
      6859
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6859,
    "end": 6860,
    "range": [
      6859,
      6860
    ]
  },
  {
    "type": "Identifier",
    "value": "test6",
    "start": 6860,
    "end": 6865,
    "range": [
      6860,
      6865
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6865,
    "end": 6866,
    "range": [
      6865,
      6866
    ]
  },
  {
    "type": "Identifier",
    "value": "test7",
    "start": 6871,
    "end": 6876,
    "range": [
      6871,
      6876
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6877,
    "end": 6878,
    "range": [
      6877,
      6878
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 6879,
    "end": 6885,
    "range": [
      6879,
      6885
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6885,
    "end": 6886,
    "range": [
      6885,
      6886
    ]
  },
  {
    "type": "Identifier",
    "value": "test7",
    "start": 6886,
    "end": 6891,
    "range": [
      6886,
      6891
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6891,
    "end": 6892,
    "range": [
      6891,
      6892
    ]
  },
  {
    "type": "Identifier",
    "value": "test8",
    "start": 6897,
    "end": 6902,
    "range": [
      6897,
      6902
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6903,
    "end": 6904,
    "range": [
      6903,
      6904
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 6905,
    "end": 6911,
    "range": [
      6905,
      6911
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6911,
    "end": 6912,
    "range": [
      6911,
      6912
    ]
  },
  {
    "type": "Identifier",
    "value": "test8",
    "start": 6912,
    "end": 6917,
    "range": [
      6912,
      6917
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6917,
    "end": 6918,
    "range": [
      6917,
      6918
    ]
  },
  {
    "type": "Identifier",
    "value": "test9",
    "start": 6923,
    "end": 6928,
    "range": [
      6923,
      6928
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 6929,
    "end": 6930,
    "range": [
      6929,
      6930
    ]
  },
  {
    "type": "Identifier",
    "value": "value1",
    "start": 6931,
    "end": 6937,
    "range": [
      6931,
      6937
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 6937,
    "end": 6938,
    "range": [
      6937,
      6938
    ]
  },
  {
    "type": "Identifier",
    "value": "test9",
    "start": 6938,
    "end": 6943,
    "range": [
      6938,
      6943
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6944,
    "end": 6945,
    "range": [
      6944,
      6945
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 6945,
    "end": 6946,
    "range": [
      6945,
      6946
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 6947,
    "end": 6948,
    "range": [
      6947,
      6948
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 6948,
    "end": 6949,
    "range": [
      6948,
      6949
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 6973,
    "end": 6981,
    "range": [
      6973,
      6981
    ]
  },
  {
    "type": "Identifier",
    "value": "fa1",
    "start": 6982,
    "end": 6985,
    "range": [
      6982,
      6985
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 6985,
    "end": 6986,
    "range": [
      6985,
      6986
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 6986,
    "end": 6987,
    "range": [
      6986,
      6987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 6987,
    "end": 6988,
    "range": [
      6987,
      6988
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 6989,
    "end": 6990,
    "range": [
      6989,
      6990
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 6990,
    "end": 6994,
    "range": [
      6990,
      6994
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 6994,
    "end": 6995,
    "range": [
      6994,
      6995
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 6996,
    "end": 7002,
    "range": [
      6996,
      7002
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7002,
    "end": 7003,
    "range": [
      7002,
      7003
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7004,
    "end": 7005,
    "range": [
      7004,
      7005
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7006,
    "end": 7007,
    "range": [
      7006,
      7007
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 7007,
    "end": 7012,
    "range": [
      7007,
      7012
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7012,
    "end": 7013,
    "range": [
      7012,
      7013
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7014,
    "end": 7020,
    "range": [
      7014,
      7020
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7020,
    "end": 7021,
    "range": [
      7020,
      7021
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7021,
    "end": 7022,
    "range": [
      7021,
      7022
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7023,
    "end": 7024,
    "range": [
      7023,
      7024
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7029,
    "end": 7034,
    "range": [
      7029,
      7034
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7035,
    "end": 7036,
    "range": [
      7035,
      7036
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 7036,
    "end": 7041,
    "range": [
      7036,
      7041
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7041,
    "end": 7042,
    "range": [
      7041,
      7042
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7043,
    "end": 7048,
    "range": [
      7043,
      7048
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7048,
    "end": 7049,
    "range": [
      7048,
      7049
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7050,
    "end": 7051,
    "range": [
      7050,
      7051
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7052,
    "end": 7053,
    "range": [
      7052,
      7053
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7053,
    "end": 7054,
    "range": [
      7053,
      7054
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7059,
    "end": 7061,
    "range": [
      7059,
      7061
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7062,
    "end": 7063,
    "range": [
      7062,
      7063
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 7063,
    "end": 7068,
    "range": [
      7063,
      7068
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7068,
    "end": 7069,
    "range": [
      7068,
      7069
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7070,
    "end": 7071,
    "range": [
      7070,
      7071
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7080,
    "end": 7083,
    "range": [
      7080,
      7083
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7084,
    "end": 7085,
    "range": [
      7084,
      7085
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7085,
    "end": 7086,
    "range": [
      7085,
      7086
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7086,
    "end": 7087,
    "range": [
      7086,
      7087
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7087,
    "end": 7088,
    "range": [
      7087,
      7088
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7089,
    "end": 7090,
    "range": [
      7089,
      7090
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7103,
    "end": 7108,
    "range": [
      7103,
      7108
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7108,
    "end": 7109,
    "range": [
      7108,
      7109
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7129,
    "end": 7130,
    "range": [
      7129,
      7130
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7135,
    "end": 7136,
    "range": [
      7135,
      7136
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 7141,
    "end": 7145,
    "range": [
      7141,
      7145
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7146,
    "end": 7147,
    "range": [
      7146,
      7147
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 7156,
    "end": 7161,
    "range": [
      7156,
      7161
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7162,
    "end": 7163,
    "range": [
      7162,
      7163
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7163,
    "end": 7164,
    "range": [
      7163,
      7164
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7164,
    "end": 7165,
    "range": [
      7164,
      7165
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7165,
    "end": 7169,
    "range": [
      7165,
      7169
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7169,
    "end": 7170,
    "range": [
      7169,
      7170
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7171,
    "end": 7172,
    "range": [
      7171,
      7172
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7185,
    "end": 7190,
    "range": [
      7185,
      7190
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7190,
    "end": 7191,
    "range": [
      7190,
      7191
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7211,
    "end": 7212,
    "range": [
      7211,
      7212
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7217,
    "end": 7218,
    "range": [
      7217,
      7218
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7219,
    "end": 7220,
    "range": [
      7219,
      7220
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 7222,
    "end": 7230,
    "range": [
      7222,
      7230
    ]
  },
  {
    "type": "Identifier",
    "value": "fa2",
    "start": 7231,
    "end": 7234,
    "range": [
      7231,
      7234
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7234,
    "end": 7235,
    "range": [
      7234,
      7235
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7235,
    "end": 7236,
    "range": [
      7235,
      7236
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7236,
    "end": 7237,
    "range": [
      7236,
      7237
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7238,
    "end": 7239,
    "range": [
      7238,
      7239
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 7240,
    "end": 7245,
    "range": [
      7240,
      7245
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7245,
    "end": 7246,
    "range": [
      7245,
      7246
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7247,
    "end": 7251,
    "range": [
      7247,
      7251
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7251,
    "end": 7252,
    "range": [
      7251,
      7252
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7253,
    "end": 7258,
    "range": [
      7253,
      7258
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7258,
    "end": 7259,
    "range": [
      7258,
      7259
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7260,
    "end": 7266,
    "range": [
      7260,
      7266
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7267,
    "end": 7268,
    "range": [
      7267,
      7268
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7269,
    "end": 7270,
    "range": [
      7269,
      7270
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7271,
    "end": 7272,
    "range": [
      7271,
      7272
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 7273,
    "end": 7278,
    "range": [
      7273,
      7278
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7278,
    "end": 7279,
    "range": [
      7278,
      7279
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 7280,
    "end": 7285,
    "range": [
      7280,
      7285
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7285,
    "end": 7286,
    "range": [
      7285,
      7286
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7287,
    "end": 7292,
    "range": [
      7287,
      7292
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7292,
    "end": 7293,
    "range": [
      7292,
      7293
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7294,
    "end": 7300,
    "range": [
      7294,
      7300
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7301,
    "end": 7302,
    "range": [
      7301,
      7302
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7302,
    "end": 7303,
    "range": [
      7302,
      7303
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7304,
    "end": 7305,
    "range": [
      7304,
      7305
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7310,
    "end": 7315,
    "range": [
      7310,
      7315
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7316,
    "end": 7317,
    "range": [
      7316,
      7317
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 7318,
    "end": 7323,
    "range": [
      7318,
      7323
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7323,
    "end": 7324,
    "range": [
      7323,
      7324
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7325,
    "end": 7330,
    "range": [
      7325,
      7330
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7331,
    "end": 7332,
    "range": [
      7331,
      7332
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7333,
    "end": 7334,
    "range": [
      7333,
      7334
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 7335,
    "end": 7336,
    "range": [
      7335,
      7336
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7336,
    "end": 7337,
    "range": [
      7336,
      7337
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7342,
    "end": 7344,
    "range": [
      7342,
      7344
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7345,
    "end": 7346,
    "range": [
      7345,
      7346
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 7346,
    "end": 7351,
    "range": [
      7346,
      7351
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7351,
    "end": 7352,
    "range": [
      7351,
      7352
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7353,
    "end": 7354,
    "range": [
      7353,
      7354
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7363,
    "end": 7366,
    "range": [
      7363,
      7366
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7367,
    "end": 7368,
    "range": [
      7367,
      7368
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7368,
    "end": 7369,
    "range": [
      7368,
      7369
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7369,
    "end": 7370,
    "range": [
      7369,
      7370
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7370,
    "end": 7371,
    "range": [
      7370,
      7371
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7372,
    "end": 7373,
    "range": [
      7372,
      7373
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7386,
    "end": 7391,
    "range": [
      7386,
      7391
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7391,
    "end": 7392,
    "range": [
      7391,
      7392
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7412,
    "end": 7413,
    "range": [
      7412,
      7413
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7418,
    "end": 7419,
    "range": [
      7418,
      7419
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 7424,
    "end": 7428,
    "range": [
      7424,
      7428
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7429,
    "end": 7430,
    "range": [
      7429,
      7430
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 7439,
    "end": 7444,
    "range": [
      7439,
      7444
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7445,
    "end": 7446,
    "range": [
      7445,
      7446
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7446,
    "end": 7447,
    "range": [
      7446,
      7447
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7447,
    "end": 7448,
    "range": [
      7447,
      7448
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7448,
    "end": 7452,
    "range": [
      7448,
      7452
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7452,
    "end": 7453,
    "range": [
      7452,
      7453
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7454,
    "end": 7455,
    "range": [
      7454,
      7455
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7468,
    "end": 7473,
    "range": [
      7468,
      7473
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7473,
    "end": 7474,
    "range": [
      7473,
      7474
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7494,
    "end": 7495,
    "range": [
      7494,
      7495
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7500,
    "end": 7501,
    "range": [
      7500,
      7501
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7502,
    "end": 7503,
    "range": [
      7502,
      7503
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 7505,
    "end": 7510,
    "range": [
      7505,
      7510
    ]
  },
  {
    "type": "Identifier",
    "value": "fa3",
    "start": 7511,
    "end": 7514,
    "range": [
      7511,
      7514
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7514,
    "end": 7515,
    "range": [
      7514,
      7515
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7516,
    "end": 7517,
    "range": [
      7516,
      7517
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7517,
    "end": 7520,
    "range": [
      7517,
      7520
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 7520,
    "end": 7524,
    "range": [
      7520,
      7524
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7524,
    "end": 7525,
    "range": [
      7524,
      7525
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7526,
    "end": 7527,
    "range": [
      7526,
      7527
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7527,
    "end": 7531,
    "range": [
      7527,
      7531
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7531,
    "end": 7532,
    "range": [
      7531,
      7532
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7533,
    "end": 7539,
    "range": [
      7533,
      7539
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7539,
    "end": 7540,
    "range": [
      7539,
      7540
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 7541,
    "end": 7542,
    "range": [
      7541,
      7542
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7543,
    "end": 7544,
    "range": [
      7543,
      7544
    ]
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 7544,
    "end": 7549,
    "range": [
      7544,
      7549
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7549,
    "end": 7550,
    "range": [
      7549,
      7550
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7551,
    "end": 7557,
    "range": [
      7551,
      7557
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7557,
    "end": 7558,
    "range": [
      7557,
      7558
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7558,
    "end": 7559,
    "range": [
      7558,
      7559
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7560,
    "end": 7562,
    "range": [
      7560,
      7562
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 7563,
    "end": 7567,
    "range": [
      7563,
      7567
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 7568,
    "end": 7569,
    "range": [
      7568,
      7569
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7570,
    "end": 7571,
    "range": [
      7570,
      7571
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 7571,
    "end": 7576,
    "range": [
      7571,
      7576
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7576,
    "end": 7577,
    "range": [
      7576,
      7577
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7578,
    "end": 7583,
    "range": [
      7578,
      7583
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7583,
    "end": 7584,
    "range": [
      7583,
      7584
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 7585,
    "end": 7587,
    "range": [
      7585,
      7587
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7588,
    "end": 7589,
    "range": [
      7588,
      7589
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 7594,
    "end": 7596,
    "range": [
      7594,
      7596
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7597,
    "end": 7598,
    "range": [
      7597,
      7598
    ]
  },
  {
    "type": "Identifier",
    "value": "guard",
    "start": 7598,
    "end": 7603,
    "range": [
      7598,
      7603
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7603,
    "end": 7604,
    "range": [
      7603,
      7604
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7605,
    "end": 7606,
    "range": [
      7605,
      7606
    ]
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 7615,
    "end": 7618,
    "range": [
      7615,
      7618
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7619,
    "end": 7620,
    "range": [
      7619,
      7620
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7620,
    "end": 7621,
    "range": [
      7620,
      7621
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7621,
    "end": 7622,
    "range": [
      7621,
      7622
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7622,
    "end": 7623,
    "range": [
      7622,
      7623
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7624,
    "end": 7625,
    "range": [
      7624,
      7625
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7638,
    "end": 7643,
    "range": [
      7638,
      7643
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7643,
    "end": 7644,
    "range": [
      7643,
      7644
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7664,
    "end": 7665,
    "range": [
      7664,
      7665
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7670,
    "end": 7671,
    "range": [
      7670,
      7671
    ]
  },
  {
    "type": "Keyword",
    "value": "else",
    "start": 7676,
    "end": 7680,
    "range": [
      7676,
      7680
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7681,
    "end": 7682,
    "range": [
      7681,
      7682
    ]
  },
  {
    "type": "Keyword",
    "value": "while",
    "start": 7691,
    "end": 7696,
    "range": [
      7691,
      7696
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7697,
    "end": 7698,
    "range": [
      7697,
      7698
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7698,
    "end": 7699,
    "range": [
      7698,
      7699
    ]
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 7699,
    "end": 7700,
    "range": [
      7699,
      7700
    ]
  },
  {
    "type": "Boolean",
    "value": "true",
    "start": 7700,
    "end": 7704,
    "range": [
      7700,
      7704
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 7704,
    "end": 7705,
    "range": [
      7704,
      7705
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7706,
    "end": 7707,
    "range": [
      7706,
      7707
    ]
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 7720,
    "end": 7725,
    "range": [
      7720,
      7725
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7725,
    "end": 7726,
    "range": [
      7725,
      7726
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7746,
    "end": 7747,
    "range": [
      7746,
      7747
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7752,
    "end": 7753,
    "range": [
      7752,
      7753
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7754,
    "end": 7755,
    "range": [
      7754,
      7755
    ]
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 7779,
    "end": 7788,
    "range": [
      7779,
      7788
    ]
  },
  {
    "type": "Identifier",
    "value": "ClientEvents",
    "start": 7789,
    "end": 7801,
    "range": [
      7789,
      7801
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7802,
    "end": 7803,
    "range": [
      7802,
      7803
    ]
  },
  {
    "type": "Identifier",
    "value": "warn",
    "start": 7808,
    "end": 7812,
    "range": [
      7808,
      7812
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7812,
    "end": 7813,
    "range": [
      7812,
      7813
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7814,
    "end": 7815,
    "range": [
      7814,
      7815
    ]
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 7815,
    "end": 7822,
    "range": [
      7815,
      7822
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7822,
    "end": 7823,
    "range": [
      7822,
      7823
    ]
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 7824,
    "end": 7830,
    "range": [
      7824,
      7830
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7830,
    "end": 7831,
    "range": [
      7830,
      7831
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7831,
    "end": 7832,
    "range": [
      7831,
      7832
    ]
  },
  {
    "type": "Identifier",
    "value": "shardDisconnect",
    "start": 7837,
    "end": 7852,
    "range": [
      7837,
      7852
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7852,
    "end": 7853,
    "range": [
      7852,
      7853
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 7854,
    "end": 7855,
    "range": [
      7854,
      7855
    ]
  },
  {
    "type": "Identifier",
    "value": "closeEvent",
    "start": 7855,
    "end": 7865,
    "range": [
      7855,
      7865
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7865,
    "end": 7866,
    "range": [
      7865,
      7866
    ]
  },
  {
    "type": "Identifier",
    "value": "CloseEvent",
    "start": 7867,
    "end": 7877,
    "range": [
      7867,
      7877
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7877,
    "end": 7878,
    "range": [
      7877,
      7878
    ]
  },
  {
    "type": "Identifier",
    "value": "shardId",
    "start": 7879,
    "end": 7886,
    "range": [
      7879,
      7886
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7886,
    "end": 7887,
    "range": [
      7886,
      7887
    ]
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 7888,
    "end": 7894,
    "range": [
      7888,
      7894
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 7894,
    "end": 7895,
    "range": [
      7894,
      7895
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 7895,
    "end": 7896,
    "range": [
      7895,
      7896
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 7897,
    "end": 7898,
    "range": [
      7897,
      7898
    ]
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 7902,
    "end": 7909,
    "range": [
      7902,
      7909
    ]
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 7910,
    "end": 7915,
    "range": [
      7910,
      7915
    ]
  },
  {
    "type": "Identifier",
    "value": "Client",
    "start": 7916,
    "end": 7922,
    "range": [
      7916,
      7922
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 7923,
    "end": 7924,
    "range": [
      7923,
      7924
    ]
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 7929,
    "end": 7935,
    "range": [
      7929,
      7935
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 7936,
    "end": 7938,
    "range": [
      7936,
      7938
    ]
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 7938,
    "end": 7939,
    "range": [
      7938,
      7939
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7939,
    "end": 7940,
    "range": [
      7939,
      7940
    ]
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 7941,
    "end": 7948,
    "range": [
      7941,
      7948
    ]
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 7949,
    "end": 7954,
    "range": [
      7949,
      7954
    ]
  },
  {
    "type": "Identifier",
    "value": "ClientEvents",
    "start": 7955,
    "end": 7967,
    "range": [
      7955,
      7967
    ]
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 7967,
    "end": 7968,
    "range": [
      7967,
      7968
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7968,
    "end": 7969,
    "range": [
      7968,
      7969
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 7969,
    "end": 7974,
    "range": [
      7969,
      7974
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7974,
    "end": 7975,
    "range": [
      7974,
      7975
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 7976,
    "end": 7977,
    "range": [
      7976,
      7977
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 7977,
    "end": 7978,
    "range": [
      7977,
      7978
    ]
  },
  {
    "type": "Identifier",
    "value": "listener",
    "start": 7979,
    "end": 7987,
    "range": [
      7979,
      7987
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7987,
    "end": 7988,
    "range": [
      7987,
      7988
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 7989,
    "end": 7990,
    "range": [
      7989,
      7990
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 7990,
    "end": 7993,
    "range": [
      7990,
      7993
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 7993,
    "end": 7997,
    "range": [
      7993,
      7997
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 7997,
    "end": 7998,
    "range": [
      7997,
      7998
    ]
  },
  {
    "type": "Identifier",
    "value": "ClientEvents",
    "start": 7999,
    "end": 8011,
    "range": [
      7999,
      8011
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8011,
    "end": 8012,
    "range": [
      8011,
      8012
    ]
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 8012,
    "end": 8013,
    "range": [
      8012,
      8013
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8013,
    "end": 8014,
    "range": [
      8013,
      8014
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8014,
    "end": 8015,
    "range": [
      8014,
      8015
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8016,
    "end": 8018,
    "range": [
      8016,
      8018
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8019,
    "end": 8023,
    "range": [
      8019,
      8023
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8023,
    "end": 8024,
    "range": [
      8023,
      8024
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8024,
    "end": 8025,
    "range": [
      8024,
      8025
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 8026,
    "end": 8030,
    "range": [
      8026,
      8030
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8030,
    "end": 8031,
    "range": [
      8030,
      8031
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8032,
    "end": 8033,
    "range": [
      8032,
      8033
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8035,
    "end": 8040,
    "range": [
      8035,
      8040
    ]
  },
  {
    "type": "Identifier",
    "value": "bot",
    "start": 8041,
    "end": 8044,
    "range": [
      8041,
      8044
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8045,
    "end": 8046,
    "range": [
      8045,
      8046
    ]
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 8047,
    "end": 8050,
    "range": [
      8047,
      8050
    ]
  },
  {
    "type": "Identifier",
    "value": "Client",
    "start": 8051,
    "end": 8057,
    "range": [
      8051,
      8057
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8057,
    "end": 8058,
    "range": [
      8057,
      8058
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8058,
    "end": 8059,
    "range": [
      8058,
      8059
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8059,
    "end": 8060,
    "range": [
      8059,
      8060
    ]
  },
  {
    "type": "Identifier",
    "value": "bot",
    "start": 8061,
    "end": 8064,
    "range": [
      8061,
      8064
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8064,
    "end": 8065,
    "range": [
      8064,
      8065
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 8065,
    "end": 8067,
    "range": [
      8065,
      8067
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8067,
    "end": 8068,
    "range": [
      8067,
      8068
    ]
  },
  {
    "type": "String",
    "value": "\"shardDisconnect\"",
    "start": 8068,
    "end": 8085,
    "range": [
      8068,
      8085
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8085,
    "end": 8086,
    "range": [
      8085,
      8086
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8087,
    "end": 8088,
    "range": [
      8087,
      8088
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 8088,
    "end": 8093,
    "range": [
      8088,
      8093
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8093,
    "end": 8094,
    "range": [
      8093,
      8094
    ]
  },
  {
    "type": "Identifier",
    "value": "shard",
    "start": 8095,
    "end": 8100,
    "range": [
      8095,
      8100
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8100,
    "end": 8101,
    "range": [
      8100,
      8101
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8102,
    "end": 8104,
    "range": [
      8102,
      8104
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 8105,
    "end": 8112,
    "range": [
      8105,
      8112
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8112,
    "end": 8113,
    "range": [
      8112,
      8113
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 8113,
    "end": 8116,
    "range": [
      8113,
      8116
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8116,
    "end": 8117,
    "range": [
      8116,
      8117
    ]
  },
  {
    "type": "Template",
    "value": "`Shard ${",
    "start": 8117,
    "end": 8126,
    "range": [
      8117,
      8126
    ]
  },
  {
    "type": "Identifier",
    "value": "shard",
    "start": 8126,
    "end": 8131,
    "range": [
      8126,
      8131
    ]
  },
  {
    "type": "Template",
    "value": "} disconnected (${",
    "start": 8131,
    "end": 8149,
    "range": [
      8131,
      8149
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 8149,
    "end": 8154,
    "range": [
      8149,
      8154
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8154,
    "end": 8155,
    "range": [
      8154,
      8155
    ]
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 8155,
    "end": 8159,
    "range": [
      8155,
      8159
    ]
  },
  {
    "type": "Template",
    "value": "},${",
    "start": 8159,
    "end": 8163,
    "range": [
      8159,
      8163
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 8163,
    "end": 8168,
    "range": [
      8163,
      8168
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8168,
    "end": 8169,
    "range": [
      8168,
      8169
    ]
  },
  {
    "type": "Identifier",
    "value": "wasClean",
    "start": 8169,
    "end": 8177,
    "range": [
      8169,
      8177
    ]
  },
  {
    "type": "Template",
    "value": "}): ${",
    "start": 8177,
    "end": 8183,
    "range": [
      8177,
      8183
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 8183,
    "end": 8188,
    "range": [
      8183,
      8188
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8188,
    "end": 8189,
    "range": [
      8188,
      8189
    ]
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 8189,
    "end": 8195,
    "range": [
      8189,
      8195
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8195,
    "end": 8197,
    "range": [
      8195,
      8197
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8197,
    "end": 8198,
    "range": [
      8197,
      8198
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8198,
    "end": 8199,
    "range": [
      8198,
      8199
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8199,
    "end": 8200,
    "range": [
      8199,
      8200
    ]
  },
  {
    "type": "Identifier",
    "value": "bot",
    "start": 8201,
    "end": 8204,
    "range": [
      8201,
      8204
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8204,
    "end": 8205,
    "range": [
      8204,
      8205
    ]
  },
  {
    "type": "Identifier",
    "value": "on",
    "start": 8205,
    "end": 8207,
    "range": [
      8205,
      8207
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8207,
    "end": 8208,
    "range": [
      8207,
      8208
    ]
  },
  {
    "type": "String",
    "value": "\"shardDisconnect\"",
    "start": 8208,
    "end": 8225,
    "range": [
      8208,
      8225
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8225,
    "end": 8226,
    "range": [
      8225,
      8226
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 8227,
    "end": 8232,
    "range": [
      8227,
      8232
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 8233,
    "end": 8235,
    "range": [
      8233,
      8235
    ]
  },
  {
    "type": "Identifier",
    "value": "console",
    "start": 8236,
    "end": 8243,
    "range": [
      8236,
      8243
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8243,
    "end": 8244,
    "range": [
      8243,
      8244
    ]
  },
  {
    "type": "Identifier",
    "value": "log",
    "start": 8244,
    "end": 8247,
    "range": [
      8244,
      8247
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8247,
    "end": 8248,
    "range": [
      8247,
      8248
    ]
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 8248,
    "end": 8251,
    "range": [
      8248,
      8251
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 8251,
    "end": 8256,
    "range": [
      8251,
      8256
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8256,
    "end": 8257,
    "range": [
      8256,
      8257
    ]
  },
  {
    "type": "Identifier",
    "value": "code",
    "start": 8257,
    "end": 8261,
    "range": [
      8257,
      8261
    ]
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 8261,
    "end": 8265,
    "range": [
      8261,
      8265
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 8265,
    "end": 8270,
    "range": [
      8265,
      8270
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8270,
    "end": 8271,
    "range": [
      8270,
      8271
    ]
  },
  {
    "type": "Identifier",
    "value": "wasClean",
    "start": 8271,
    "end": 8279,
    "range": [
      8271,
      8279
    ]
  },
  {
    "type": "Template",
    "value": "} ${",
    "start": 8279,
    "end": 8283,
    "range": [
      8279,
      8283
    ]
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 8283,
    "end": 8288,
    "range": [
      8283,
      8288
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8288,
    "end": 8289,
    "range": [
      8288,
      8289
    ]
  },
  {
    "type": "Identifier",
    "value": "reason",
    "start": 8289,
    "end": 8295,
    "range": [
      8289,
      8295
    ]
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 8295,
    "end": 8297,
    "range": [
      8295,
      8297
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8297,
    "end": 8298,
    "range": [
      8297,
      8298
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8298,
    "end": 8299,
    "range": [
      8298,
      8299
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8299,
    "end": 8300,
    "range": [
      8299,
      8300
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8355,
    "end": 8363,
    "range": [
      8355,
      8363
    ]
  },
  {
    "type": "Identifier",
    "value": "fz1",
    "start": 8364,
    "end": 8367,
    "range": [
      8364,
      8367
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8367,
    "end": 8368,
    "range": [
      8367,
      8368
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8368,
    "end": 8369,
    "range": [
      8368,
      8369
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8369,
    "end": 8370,
    "range": [
      8369,
      8370
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8370,
    "end": 8371,
    "range": [
      8370,
      8371
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8372,
    "end": 8373,
    "range": [
      8372,
      8373
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8373,
    "end": 8374,
    "range": [
      8373,
      8374
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8374,
    "end": 8375,
    "range": [
      8374,
      8375
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8376,
    "end": 8377,
    "range": [
      8376,
      8377
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8377,
    "end": 8378,
    "range": [
      8377,
      8378
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8378,
    "end": 8379,
    "range": [
      8378,
      8379
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 8380,
    "end": 8381,
    "range": [
      8380,
      8381
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8381,
    "end": 8382,
    "range": [
      8381,
      8382
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8383,
    "end": 8384,
    "range": [
      8383,
      8384
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8385,
    "end": 8386,
    "range": [
      8385,
      8386
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 8386,
    "end": 8387,
    "range": [
      8386,
      8387
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8387,
    "end": 8388,
    "range": [
      8387,
      8388
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 8389,
    "end": 8390,
    "range": [
      8389,
      8390
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8390,
    "end": 8391,
    "range": [
      8390,
      8391
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8392,
    "end": 8393,
    "range": [
      8392,
      8393
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8394,
    "end": 8395,
    "range": [
      8394,
      8395
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 8395,
    "end": 8396,
    "range": [
      8395,
      8396
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8396,
    "end": 8397,
    "range": [
      8396,
      8397
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8397,
    "end": 8398,
    "range": [
      8397,
      8398
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8399,
    "end": 8400,
    "range": [
      8399,
      8400
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8405,
    "end": 8407,
    "range": [
      8405,
      8407
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8408,
    "end": 8409,
    "range": [
      8408,
      8409
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8409,
    "end": 8410,
    "range": [
      8409,
      8410
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 8411,
    "end": 8414,
    "range": [
      8411,
      8414
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 8415,
    "end": 8416,
    "range": [
      8415,
      8416
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8416,
    "end": 8417,
    "range": [
      8416,
      8417
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8418,
    "end": 8419,
    "range": [
      8418,
      8419
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8428,
    "end": 8429,
    "range": [
      8428,
      8429
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8429,
    "end": 8430,
    "range": [
      8429,
      8430
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8441,
    "end": 8442,
    "range": [
      8441,
      8442
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8447,
    "end": 8449,
    "range": [
      8447,
      8449
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8450,
    "end": 8451,
    "range": [
      8450,
      8451
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8451,
    "end": 8452,
    "range": [
      8451,
      8452
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 8453,
    "end": 8456,
    "range": [
      8453,
      8456
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 8457,
    "end": 8458,
    "range": [
      8457,
      8458
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8458,
    "end": 8459,
    "range": [
      8458,
      8459
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8460,
    "end": 8461,
    "range": [
      8460,
      8461
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8470,
    "end": 8471,
    "range": [
      8470,
      8471
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8471,
    "end": 8472,
    "range": [
      8471,
      8472
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8483,
    "end": 8484,
    "range": [
      8483,
      8484
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8489,
    "end": 8491,
    "range": [
      8489,
      8491
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8492,
    "end": 8493,
    "range": [
      8492,
      8493
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8493,
    "end": 8494,
    "range": [
      8493,
      8494
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 8495,
    "end": 8498,
    "range": [
      8495,
      8498
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 8499,
    "end": 8508,
    "range": [
      8499,
      8508
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8508,
    "end": 8509,
    "range": [
      8508,
      8509
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8510,
    "end": 8511,
    "range": [
      8510,
      8511
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8520,
    "end": 8521,
    "range": [
      8520,
      8521
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8521,
    "end": 8522,
    "range": [
      8521,
      8522
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8533,
    "end": 8534,
    "range": [
      8533,
      8534
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8539,
    "end": 8541,
    "range": [
      8539,
      8541
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8542,
    "end": 8543,
    "range": [
      8542,
      8543
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8543,
    "end": 8544,
    "range": [
      8543,
      8544
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 8545,
    "end": 8548,
    "range": [
      8545,
      8548
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8549,
    "end": 8550,
    "range": [
      8549,
      8550
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8550,
    "end": 8551,
    "range": [
      8550,
      8551
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8552,
    "end": 8553,
    "range": [
      8552,
      8553
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8562,
    "end": 8563,
    "range": [
      8562,
      8563
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8563,
    "end": 8564,
    "range": [
      8563,
      8564
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8575,
    "end": 8576,
    "range": [
      8575,
      8576
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8581,
    "end": 8583,
    "range": [
      8581,
      8583
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8584,
    "end": 8585,
    "range": [
      8584,
      8585
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8585,
    "end": 8586,
    "range": [
      8585,
      8586
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 8587,
    "end": 8590,
    "range": [
      8587,
      8590
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 8591,
    "end": 8592,
    "range": [
      8591,
      8592
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8592,
    "end": 8593,
    "range": [
      8592,
      8593
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8594,
    "end": 8595,
    "range": [
      8594,
      8595
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8604,
    "end": 8605,
    "range": [
      8604,
      8605
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8605,
    "end": 8606,
    "range": [
      8605,
      8606
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8617,
    "end": 8618,
    "range": [
      8617,
      8618
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8623,
    "end": 8625,
    "range": [
      8623,
      8625
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8626,
    "end": 8627,
    "range": [
      8626,
      8627
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8627,
    "end": 8628,
    "range": [
      8627,
      8628
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 8629,
    "end": 8632,
    "range": [
      8629,
      8632
    ]
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 8633,
    "end": 8634,
    "range": [
      8633,
      8634
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8634,
    "end": 8635,
    "range": [
      8634,
      8635
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8636,
    "end": 8637,
    "range": [
      8636,
      8637
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8646,
    "end": 8647,
    "range": [
      8646,
      8647
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8647,
    "end": 8648,
    "range": [
      8647,
      8648
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8667,
    "end": 8668,
    "range": [
      8667,
      8668
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8669,
    "end": 8670,
    "range": [
      8669,
      8670
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8694,
    "end": 8702,
    "range": [
      8694,
      8702
    ]
  },
  {
    "type": "Identifier",
    "value": "tooNarrow",
    "start": 8703,
    "end": 8712,
    "range": [
      8703,
      8712
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8712,
    "end": 8713,
    "range": [
      8712,
      8713
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8713,
    "end": 8714,
    "range": [
      8713,
      8714
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8714,
    "end": 8715,
    "range": [
      8714,
      8715
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8715,
    "end": 8716,
    "range": [
      8715,
      8716
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8717,
    "end": 8718,
    "range": [
      8717,
      8718
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8718,
    "end": 8719,
    "range": [
      8718,
      8719
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8719,
    "end": 8720,
    "range": [
      8719,
      8720
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8721,
    "end": 8722,
    "range": [
      8721,
      8722
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8722,
    "end": 8723,
    "range": [
      8722,
      8723
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8723,
    "end": 8724,
    "range": [
      8723,
      8724
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8725,
    "end": 8726,
    "range": [
      8725,
      8726
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8726,
    "end": 8727,
    "range": [
      8726,
      8727
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8728,
    "end": 8729,
    "range": [
      8728,
      8729
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8730,
    "end": 8731,
    "range": [
      8730,
      8731
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8731,
    "end": 8732,
    "range": [
      8731,
      8732
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8732,
    "end": 8733,
    "range": [
      8732,
      8733
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 8734,
    "end": 8735,
    "range": [
      8734,
      8735
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8735,
    "end": 8736,
    "range": [
      8735,
      8736
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8737,
    "end": 8738,
    "range": [
      8737,
      8738
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8739,
    "end": 8740,
    "range": [
      8739,
      8740
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8740,
    "end": 8741,
    "range": [
      8740,
      8741
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8741,
    "end": 8742,
    "range": [
      8741,
      8742
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8742,
    "end": 8743,
    "range": [
      8742,
      8743
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8744,
    "end": 8745,
    "range": [
      8744,
      8745
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8750,
    "end": 8752,
    "range": [
      8750,
      8752
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8753,
    "end": 8754,
    "range": [
      8753,
      8754
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8754,
    "end": 8755,
    "range": [
      8754,
      8755
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 8756,
    "end": 8759,
    "range": [
      8756,
      8759
    ]
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 8760,
    "end": 8769,
    "range": [
      8760,
      8769
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8769,
    "end": 8770,
    "range": [
      8769,
      8770
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8771,
    "end": 8772,
    "range": [
      8771,
      8772
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 8781,
    "end": 8786,
    "range": [
      8781,
      8786
    ]
  },
  {
    "type": "Identifier",
    "value": "shouldNotBeOk",
    "start": 8787,
    "end": 8800,
    "range": [
      8787,
      8800
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8800,
    "end": 8801,
    "range": [
      8800,
      8801
    ]
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 8802,
    "end": 8807,
    "range": [
      8802,
      8807
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8808,
    "end": 8809,
    "range": [
      8808,
      8809
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8810,
    "end": 8811,
    "range": [
      8810,
      8811
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8811,
    "end": 8812,
    "range": [
      8811,
      8812
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8827,
    "end": 8828,
    "range": [
      8827,
      8828
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8829,
    "end": 8830,
    "range": [
      8829,
      8830
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 8889,
    "end": 8897,
    "range": [
      8889,
      8897
    ]
  },
  {
    "type": "Identifier",
    "value": "parameterReassigned1",
    "start": 8898,
    "end": 8918,
    "range": [
      8898,
      8918
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8918,
    "end": 8919,
    "range": [
      8918,
      8919
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8919,
    "end": 8920,
    "range": [
      8919,
      8920
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8920,
    "end": 8921,
    "range": [
      8920,
      8921
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8921,
    "end": 8922,
    "range": [
      8921,
      8922
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8923,
    "end": 8924,
    "range": [
      8923,
      8924
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8924,
    "end": 8925,
    "range": [
      8924,
      8925
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 8925,
    "end": 8926,
    "range": [
      8925,
      8926
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8927,
    "end": 8928,
    "range": [
      8927,
      8928
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8928,
    "end": 8929,
    "range": [
      8928,
      8929
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8929,
    "end": 8930,
    "range": [
      8929,
      8930
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 8931,
    "end": 8932,
    "range": [
      8931,
      8932
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8932,
    "end": 8933,
    "range": [
      8932,
      8933
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 8934,
    "end": 8935,
    "range": [
      8934,
      8935
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 8936,
    "end": 8937,
    "range": [
      8936,
      8937
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 8937,
    "end": 8938,
    "range": [
      8937,
      8938
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 8938,
    "end": 8939,
    "range": [
      8938,
      8939
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 8940,
    "end": 8941,
    "range": [
      8940,
      8941
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 8941,
    "end": 8942,
    "range": [
      8941,
      8942
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8942,
    "end": 8943,
    "range": [
      8942,
      8943
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8944,
    "end": 8945,
    "range": [
      8944,
      8945
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8948,
    "end": 8950,
    "range": [
      8948,
      8950
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8951,
    "end": 8952,
    "range": [
      8951,
      8952
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 8952,
    "end": 8956,
    "range": [
      8952,
      8956
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 8956,
    "end": 8957,
    "range": [
      8956,
      8957
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 8957,
    "end": 8963,
    "range": [
      8957,
      8963
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8963,
    "end": 8964,
    "range": [
      8963,
      8964
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8964,
    "end": 8965,
    "range": [
      8964,
      8965
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8965,
    "end": 8966,
    "range": [
      8965,
      8966
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8967,
    "end": 8968,
    "range": [
      8967,
      8968
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 8973,
    "end": 8974,
    "range": [
      8973,
      8974
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 8975,
    "end": 8976,
    "range": [
      8975,
      8976
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 8977,
    "end": 8978,
    "range": [
      8977,
      8978
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 8978,
    "end": 8979,
    "range": [
      8978,
      8979
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 8982,
    "end": 8983,
    "range": [
      8982,
      8983
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 8986,
    "end": 8988,
    "range": [
      8986,
      8988
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 8989,
    "end": 8990,
    "range": [
      8989,
      8990
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 8990,
    "end": 8991,
    "range": [
      8990,
      8991
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 8992,
    "end": 8995,
    "range": [
      8992,
      8995
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 8996,
    "end": 8997,
    "range": [
      8996,
      8997
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 8997,
    "end": 8998,
    "range": [
      8997,
      8998
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8999,
    "end": 9000,
    "range": [
      8999,
      9000
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9005,
    "end": 9006,
    "range": [
      9005,
      9006
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9006,
    "end": 9007,
    "range": [
      9006,
      9007
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9019,
    "end": 9020,
    "range": [
      9019,
      9020
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9021,
    "end": 9022,
    "range": [
      9021,
      9022
    ]
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 9024,
    "end": 9032,
    "range": [
      9024,
      9032
    ]
  },
  {
    "type": "Identifier",
    "value": "parameterReassigned2",
    "start": 9033,
    "end": 9053,
    "range": [
      9033,
      9053
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9053,
    "end": 9054,
    "range": [
      9053,
      9054
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9054,
    "end": 9055,
    "range": [
      9054,
      9055
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9055,
    "end": 9056,
    "range": [
      9055,
      9056
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9056,
    "end": 9057,
    "range": [
      9056,
      9057
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 9058,
    "end": 9059,
    "range": [
      9058,
      9059
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9059,
    "end": 9060,
    "range": [
      9059,
      9060
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9060,
    "end": 9061,
    "range": [
      9060,
      9061
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9062,
    "end": 9063,
    "range": [
      9062,
      9063
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 9063,
    "end": 9064,
    "range": [
      9063,
      9064
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9064,
    "end": 9065,
    "range": [
      9064,
      9065
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 9066,
    "end": 9067,
    "range": [
      9066,
      9067
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9067,
    "end": 9068,
    "range": [
      9067,
      9068
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9069,
    "end": 9070,
    "range": [
      9069,
      9070
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9071,
    "end": 9072,
    "range": [
      9071,
      9072
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 9072,
    "end": 9073,
    "range": [
      9072,
      9073
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9073,
    "end": 9074,
    "range": [
      9073,
      9074
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 9075,
    "end": 9076,
    "range": [
      9075,
      9076
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9076,
    "end": 9077,
    "range": [
      9076,
      9077
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9077,
    "end": 9078,
    "range": [
      9077,
      9078
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9079,
    "end": 9080,
    "range": [
      9079,
      9080
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 9083,
    "end": 9085,
    "range": [
      9083,
      9085
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9086,
    "end": 9087,
    "range": [
      9086,
      9087
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 9087,
    "end": 9091,
    "range": [
      9087,
      9091
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9091,
    "end": 9092,
    "range": [
      9091,
      9092
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 9092,
    "end": 9098,
    "range": [
      9092,
      9098
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9098,
    "end": 9099,
    "range": [
      9098,
      9099
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9099,
    "end": 9100,
    "range": [
      9099,
      9100
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9100,
    "end": 9101,
    "range": [
      9100,
      9101
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9102,
    "end": 9103,
    "range": [
      9102,
      9103
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 9108,
    "end": 9109,
    "range": [
      9108,
      9109
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9110,
    "end": 9111,
    "range": [
      9110,
      9111
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 9112,
    "end": 9113,
    "range": [
      9112,
      9113
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9113,
    "end": 9114,
    "range": [
      9113,
      9114
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9117,
    "end": 9118,
    "range": [
      9117,
      9118
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 9121,
    "end": 9123,
    "range": [
      9121,
      9123
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9124,
    "end": 9125,
    "range": [
      9124,
      9125
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 9125,
    "end": 9126,
    "range": [
      9125,
      9126
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 9127,
    "end": 9130,
    "range": [
      9127,
      9130
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 9131,
    "end": 9132,
    "range": [
      9131,
      9132
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9132,
    "end": 9133,
    "range": [
      9132,
      9133
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9134,
    "end": 9135,
    "range": [
      9134,
      9135
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9140,
    "end": 9141,
    "range": [
      9140,
      9141
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9141,
    "end": 9142,
    "range": [
      9141,
      9142
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9154,
    "end": 9155,
    "range": [
      9154,
      9155
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9156,
    "end": 9157,
    "range": [
      9156,
      9157
    ]
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 9237,
    "end": 9242,
    "range": [
      9237,
      9242
    ]
  },
  {
    "type": "Identifier",
    "value": "parameterReassignedContextualRest1",
    "start": 9243,
    "end": 9277,
    "range": [
      9243,
      9277
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9277,
    "end": 9278,
    "range": [
      9277,
      9278
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9279,
    "end": 9280,
    "range": [
      9279,
      9280
    ]
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 9280,
    "end": 9283,
    "range": [
      9280,
      9283
    ]
  },
  {
    "type": "Identifier",
    "value": "args",
    "start": 9283,
    "end": 9287,
    "range": [
      9283,
      9287
    ]
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 9287,
    "end": 9288,
    "range": [
      9287,
      9288
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9289,
    "end": 9290,
    "range": [
      9289,
      9290
    ]
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 9290,
    "end": 9291,
    "range": [
      9290,
      9291
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9291,
    "end": 9292,
    "range": [
      9291,
      9292
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 9293,
    "end": 9294,
    "range": [
      9293,
      9294
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9294,
    "end": 9295,
    "range": [
      9294,
      9295
    ]
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 9296,
    "end": 9297,
    "range": [
      9296,
      9297
    ]
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 9298,
    "end": 9299,
    "range": [
      9298,
      9299
    ]
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 9299,
    "end": 9300,
    "range": [
      9299,
      9300
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9300,
    "end": 9301,
    "range": [
      9300,
      9301
    ]
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 9302,
    "end": 9303,
    "range": [
      9302,
      9303
    ]
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 9303,
    "end": 9304,
    "range": [
      9303,
      9304
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9304,
    "end": 9305,
    "range": [
      9304,
      9305
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9306,
    "end": 9308,
    "range": [
      9306,
      9308
    ]
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 9309,
    "end": 9313,
    "range": [
      9309,
      9313
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9314,
    "end": 9315,
    "range": [
      9314,
      9315
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9316,
    "end": 9317,
    "range": [
      9316,
      9317
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9317,
    "end": 9318,
    "range": [
      9317,
      9318
    ]
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 9318,
    "end": 9319,
    "range": [
      9318,
      9319
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 9320,
    "end": 9321,
    "range": [
      9320,
      9321
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9321,
    "end": 9322,
    "range": [
      9321,
      9322
    ]
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 9323,
    "end": 9325,
    "range": [
      9323,
      9325
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9326,
    "end": 9327,
    "range": [
      9326,
      9327
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 9330,
    "end": 9332,
    "range": [
      9330,
      9332
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9333,
    "end": 9334,
    "range": [
      9333,
      9334
    ]
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 9334,
    "end": 9338,
    "range": [
      9334,
      9338
    ]
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 9338,
    "end": 9339,
    "range": [
      9338,
      9339
    ]
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 9339,
    "end": 9345,
    "range": [
      9339,
      9345
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9345,
    "end": 9346,
    "range": [
      9345,
      9346
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9346,
    "end": 9347,
    "range": [
      9346,
      9347
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9347,
    "end": 9348,
    "range": [
      9347,
      9348
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9349,
    "end": 9350,
    "range": [
      9349,
      9350
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 9355,
    "end": 9356,
    "range": [
      9355,
      9356
    ]
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 9357,
    "end": 9358,
    "range": [
      9357,
      9358
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 9359,
    "end": 9360,
    "range": [
      9359,
      9360
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9360,
    "end": 9361,
    "range": [
      9360,
      9361
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9364,
    "end": 9365,
    "range": [
      9364,
      9365
    ]
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 9368,
    "end": 9370,
    "range": [
      9368,
      9370
    ]
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 9371,
    "end": 9372,
    "range": [
      9371,
      9372
    ]
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 9372,
    "end": 9373,
    "range": [
      9372,
      9373
    ]
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 9374,
    "end": 9377,
    "range": [
      9374,
      9377
    ]
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 9378,
    "end": 9379,
    "range": [
      9378,
      9379
    ]
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 9379,
    "end": 9380,
    "range": [
      9379,
      9380
    ]
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 9381,
    "end": 9382,
    "range": [
      9381,
      9382
    ]
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 9387,
    "end": 9388,
    "range": [
      9387,
      9388
    ]
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 9388,
    "end": 9389,
    "range": [
      9388,
      9389
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9401,
    "end": 9402,
    "range": [
      9401,
      9402
    ]
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 9403,
    "end": 9404,
    "range": [
      9403,
      9404
    ]
  }
]
```
