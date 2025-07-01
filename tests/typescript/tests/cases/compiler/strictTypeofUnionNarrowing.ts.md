__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringify1",
        "optional": false,
        "typeAnnotation": null,
        "start": 9,
        "end": 19
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anything",
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
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 32,
                        "end": 40
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 44,
                          "end": 50
                        },
                        "start": 42,
                        "end": 50
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 32,
                      "end": 50
                    }
                  ],
                  "start": 30,
                  "end": 52
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 55,
                  "end": 64
                }
              ],
              "start": 30,
              "end": 64
            },
            "start": 28,
            "end": 64
          },
          "start": 20,
          "end": 64
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 67,
          "end": 73
        },
        "start": 65,
        "end": 73
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 94,
                    "end": 102
                  },
                  "prefix": true,
                  "start": 87,
                  "end": 102
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 107,
                  "end": 115
                },
                "start": 87,
                "end": 115
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 118,
                    "end": 126
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toUpperCase",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 127,
                    "end": 138
                  },
                  "optional": false,
                  "computed": false,
                  "start": 118,
                  "end": 138
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 118,
                "end": 140
              },
              "alternate": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 143,
                "end": 145
              },
              "start": 87,
              "end": 145
            },
            "start": 80,
            "end": 146
          }
        ],
        "start": 74,
        "end": 148
      },
      "expression": false,
      "start": 0,
      "end": 148
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringify2",
        "optional": false,
        "typeAnnotation": null,
        "start": 159,
        "end": 169
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "members": [],
                  "start": 180,
                  "end": 182
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 185,
                  "end": 194
                }
              ],
              "start": 180,
              "end": 194
            },
            "start": 178,
            "end": 194
          },
          "start": 170,
          "end": 194
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 197,
          "end": 203
        },
        "start": 195,
        "end": 203
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 224,
                    "end": 232
                  },
                  "prefix": true,
                  "start": 217,
                  "end": 232
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 237,
                  "end": 245
                },
                "start": 217,
                "end": 245
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 248,
                    "end": 256
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toUpperCase",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 257,
                    "end": 268
                  },
                  "optional": false,
                  "computed": false,
                  "start": 248,
                  "end": 268
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 248,
                "end": 270
              },
              "alternate": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 273,
                "end": 275
              },
              "start": 217,
              "end": 275
            },
            "start": 210,
            "end": 276
          }
        ],
        "start": 204,
        "end": 278
      },
      "expression": false,
      "start": 150,
      "end": 278
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringify3",
        "optional": false,
        "typeAnnotation": null,
        "start": 289,
        "end": 299
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSUnknownKeyword",
                  "start": 310,
                  "end": 317
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 320,
                  "end": 329
                }
              ],
              "start": 310,
              "end": 329
            },
            "start": 308,
            "end": 329
          },
          "start": 300,
          "end": 329
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 332,
          "end": 338
        },
        "start": 330,
        "end": 338
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 421,
                    "end": 429
                  },
                  "prefix": true,
                  "start": 414,
                  "end": 429
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 434,
                  "end": 442
                },
                "start": 414,
                "end": 442
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 445,
                    "end": 453
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toUpperCase",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 454,
                    "end": 465
                  },
                  "optional": false,
                  "computed": false,
                  "start": 445,
                  "end": 465
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 445,
                "end": 467
              },
              "alternate": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 470,
                "end": 472
              },
              "start": 414,
              "end": 472
            },
            "start": 407,
            "end": 473
          }
        ],
        "start": 339,
        "end": 475
      },
      "expression": false,
      "start": 280,
      "end": 475
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "stringify4",
        "optional": false,
        "typeAnnotation": null,
        "start": 486,
        "end": 496
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "anything",
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
                      "type": "TSMethodSignature",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 509,
                        "end": 517
                      },
                      "computed": false,
                      "optional": true,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 522,
                          "end": 528
                        },
                        "start": 520,
                        "end": 528
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false,
                      "start": 509,
                      "end": 528
                    }
                  ],
                  "start": 507,
                  "end": 530
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 533,
                  "end": 542
                }
              ],
              "start": 507,
              "end": 542
            },
            "start": 505,
            "end": 542
          },
          "start": 497,
          "end": 542
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 545,
          "end": 551
        },
        "start": 543,
        "end": 551
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "ConditionalExpression",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 572,
                    "end": 580
                  },
                  "prefix": true,
                  "start": 565,
                  "end": 580
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "string",
                  "raw": "\"string\"",
                  "start": 585,
                  "end": 593
                },
                "start": 565,
                "end": 593
              },
              "consequent": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 596,
                    "end": 604
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "toUpperCase",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 605,
                    "end": 616
                  },
                  "optional": false,
                  "computed": false,
                  "start": 596,
                  "end": 616
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 596,
                "end": 618
              },
              "alternate": {
                "type": "Literal",
                "value": "",
                "raw": "\"\"",
                "start": 621,
                "end": 623
              },
              "start": 565,
              "end": 623
            },
            "start": 558,
            "end": 624
          }
        ],
        "start": 552,
        "end": 626
      },
      "expression": false,
      "start": 477,
      "end": 626
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 626
}
```
