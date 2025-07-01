__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
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
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 35,
                          "end": 41
                        },
                        "start": 33,
                        "end": 41
                      },
                      "start": 32,
                      "end": 41
                    }
                  ],
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
                        "start": 44,
                        "end": 45
                      },
                      "typeArguments": null,
                      "start": 44,
                      "end": 45
                    },
                    "start": 42,
                    "end": 45
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 31,
                  "end": 45
                }
              ],
              "start": 29,
              "end": 47
            },
            "start": 27,
            "end": 47
          },
          "start": 24,
          "end": 47
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTypeReference",
          "typeName": {
            "type": "Identifier",
            "decorators": [],
            "name": "T",
            "optional": false,
            "typeAnnotation": null,
            "start": 50,
            "end": 51
          },
          "typeArguments": null,
          "start": 50,
          "end": 51
        },
        "start": 48,
        "end": 51
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 52
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
            "name": "x1",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 74,
                      "end": 75
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      },
                      "start": 75,
                      "end": 83
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 74,
                    "end": 84
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
                      "start": 85,
                      "end": 86
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      },
                      "start": 86,
                      "end": 94
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 85,
                    "end": 94
                  }
                ],
                "start": 72,
                "end": 96
              },
              "start": 70,
              "end": 96
            },
            "start": 68,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 96
        }
      ],
      "declare": true,
      "start": 54,
      "end": 97
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
            "name": "x2",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 119
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
                      "start": 119,
                      "end": 127
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 118,
                    "end": 128
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
                      "start": 129,
                      "end": 130
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 132,
                            "end": 138
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 141,
                            "end": 150
                          }
                        ],
                        "start": 132,
                        "end": 150
                      },
                      "start": 130,
                      "end": 150
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 129,
                    "end": 150
                  }
                ],
                "start": 116,
                "end": 152
              },
              "start": 114,
              "end": 152
            },
            "start": 112,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 152
        }
      ],
      "declare": true,
      "start": 98,
      "end": 153
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
            "name": "x3",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 174,
                      "end": 175
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 177,
                        "end": 183
                      },
                      "start": 175,
                      "end": 183
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 174,
                    "end": 184
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 186
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 189,
                        "end": 195
                      },
                      "start": 187,
                      "end": 195
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 185,
                    "end": 195
                  }
                ],
                "start": 172,
                "end": 197
              },
              "start": 170,
              "end": 197
            },
            "start": 168,
            "end": 197
          },
          "init": null,
          "definite": false,
          "start": 168,
          "end": 197
        }
      ],
      "declare": true,
      "start": 154,
      "end": 198
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
            "name": "x4",
            "optional": false,
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
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 219,
                      "end": 220
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 222,
                        "end": 228
                      },
                      "start": 220,
                      "end": 228
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 219,
                    "end": 229
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 231
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 234,
                            "end": 240
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 243,
                            "end": 252
                          }
                        ],
                        "start": 234,
                        "end": 252
                      },
                      "start": 232,
                      "end": 252
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 230,
                    "end": 252
                  }
                ],
                "start": 217,
                "end": 254
              },
              "start": 215,
              "end": 254
            },
            "start": 213,
            "end": 254
          },
          "init": null,
          "definite": false,
          "start": 213,
          "end": 254
        }
      ],
      "declare": true,
      "start": 199,
      "end": 255
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 261,
            "end": 263
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 269
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 272
              }
            ],
            "optional": false,
            "start": 266,
            "end": 273
          },
          "definite": false,
          "start": 261,
          "end": 273
        }
      ],
      "declare": false,
      "start": 257,
      "end": 274
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 301
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 307
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 310
              }
            ],
            "optional": false,
            "start": 304,
            "end": 311
          },
          "definite": false,
          "start": 299,
          "end": 311
        }
      ],
      "declare": false,
      "start": 295,
      "end": 312
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 351
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 357
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 360
              }
            ],
            "optional": false,
            "start": 354,
            "end": 361
          },
          "definite": false,
          "start": 349,
          "end": 361
        }
      ],
      "declare": false,
      "start": 345,
      "end": 362
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 395
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 398
              }
            ],
            "optional": false,
            "start": 392,
            "end": 399
          },
          "definite": false,
          "start": 387,
          "end": 399
        }
      ],
      "declare": false,
      "start": 383,
      "end": 400
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
            "name": "param2",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 456
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 459,
                    "end": 463
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 470
                  },
                  "optional": false,
                  "computed": false,
                  "start": 459,
                  "end": 470
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 459,
                "end": 472
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 475,
                "end": 478
              },
              "start": 459,
              "end": 478
            },
            "consequent": {
              "type": "Literal",
              "value": "value2",
              "raw": "'value2'",
              "start": 481,
              "end": 489
            },
            "alternate": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 492,
              "end": 496
            },
            "start": 459,
            "end": 496
          },
          "definite": false,
          "start": 450,
          "end": 496
        }
      ],
      "declare": false,
      "start": 444,
      "end": 497
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 508
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
                  "name": "param1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 523
                },
                "value": {
                  "type": "Literal",
                  "value": "value1",
                  "raw": "'value1'",
                  "start": 525,
                  "end": 533
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 517,
                "end": 533
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 543,
                    "end": 549
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 559
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 559
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 553,
                        "end": 559
                      }
                    ],
                    "start": 552,
                    "end": 560
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 563,
                    "end": 565
                  },
                  "start": 543,
                  "end": 565
                },
                "start": 539,
                "end": 566
              }
            ],
            "start": 511,
            "end": 568
          },
          "definite": false,
          "start": 505,
          "end": 568
        }
      ],
      "declare": false,
      "start": 499,
      "end": 569
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
            "name": "query",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 582
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 591
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entries",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 599
                      },
                      "optional": false,
                      "computed": false,
                      "start": 585,
                      "end": 599
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 600,
                        "end": 603
                      }
                    ],
                    "optional": false,
                    "start": 585,
                    "end": 604
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 605,
                    "end": 608
                  },
                  "optional": false,
                  "computed": false,
                  "start": 585,
                  "end": 608
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 616,
                            "end": 617
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 619,
                            "end": 620
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 615,
                        "end": 621
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 626,
                          "end": 629
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "=",
                            "cooked": "="
                          },
                          "tail": false,
                          "start": 630,
                          "end": 634
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 655,
                          "end": 657
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 629,
                          "end": 630
                        },
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "encodeURIComponent",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 634,
                            "end": 652
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 654
                            }
                          ],
                          "optional": false,
                          "start": 634,
                          "end": 655
                        }
                      ],
                      "start": 626,
                      "end": 657
                    },
                    "id": null,
                    "generator": false,
                    "start": 614,
                    "end": 657
                  }
                ],
                "optional": false,
                "start": 585,
                "end": 659
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 664
              },
              "optional": false,
              "computed": false,
              "start": 585,
              "end": 664
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "&",
                "raw": "'&'",
                "start": 665,
                "end": 668
              }
            ],
            "optional": false,
            "start": 585,
            "end": 669
          },
          "definite": false,
          "start": 577,
          "end": 669
        }
      ],
      "declare": false,
      "start": 571,
      "end": 670
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 670
}
```
