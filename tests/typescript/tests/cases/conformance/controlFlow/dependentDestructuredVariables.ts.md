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
