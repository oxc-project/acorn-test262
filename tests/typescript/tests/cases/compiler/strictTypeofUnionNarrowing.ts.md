__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 626,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 148,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 19,
        "decorators": [],
        "name": "stringify1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 20,
          "end": 64,
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 28,
            "end": 64,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 30,
              "end": 64,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 30,
                  "end": 52,
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "start": 32,
                      "end": 50,
                      "key": {
                        "type": "Identifier",
                        "start": 32,
                        "end": 40,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "computed": false,
                      "optional": false,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 42,
                        "end": 50,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 44,
                          "end": 50
                        }
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 55,
                  "end": 64
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 65,
        "end": 73,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 67,
          "end": 73
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 74,
        "end": 148,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 80,
            "end": 146,
            "argument": {
              "type": "ConditionalExpression",
              "start": 87,
              "end": 145,
              "test": {
                "type": "BinaryExpression",
                "start": 87,
                "end": 115,
                "left": {
                  "type": "UnaryExpression",
                  "start": 87,
                  "end": 102,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 94,
                    "end": 102,
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 107,
                  "end": 115,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "CallExpression",
                "start": 118,
                "end": 140,
                "callee": {
                  "type": "MemberExpression",
                  "start": 118,
                  "end": 138,
                  "object": {
                    "type": "Identifier",
                    "start": 118,
                    "end": 126,
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 127,
                    "end": 138,
                    "decorators": [],
                    "name": "toUpperCase",
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
              "alternate": {
                "type": "Literal",
                "start": 143,
                "end": 145,
                "value": "",
                "raw": "\"\""
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 150,
      "end": 278,
      "id": {
        "type": "Identifier",
        "start": 159,
        "end": 169,
        "decorators": [],
        "name": "stringify2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 170,
          "end": 194,
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 178,
            "end": 194,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 180,
              "end": 194,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 180,
                  "end": 182,
                  "members": []
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 185,
                  "end": 194
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 195,
        "end": 203,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 197,
          "end": 203
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 204,
        "end": 278,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 210,
            "end": 276,
            "argument": {
              "type": "ConditionalExpression",
              "start": 217,
              "end": 275,
              "test": {
                "type": "BinaryExpression",
                "start": 217,
                "end": 245,
                "left": {
                  "type": "UnaryExpression",
                  "start": 217,
                  "end": 232,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 224,
                    "end": 232,
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 237,
                  "end": 245,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "CallExpression",
                "start": 248,
                "end": 270,
                "callee": {
                  "type": "MemberExpression",
                  "start": 248,
                  "end": 268,
                  "object": {
                    "type": "Identifier",
                    "start": 248,
                    "end": 256,
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 268,
                    "decorators": [],
                    "name": "toUpperCase",
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
              "alternate": {
                "type": "Literal",
                "start": 273,
                "end": 275,
                "value": "",
                "raw": "\"\""
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 280,
      "end": 475,
      "id": {
        "type": "Identifier",
        "start": 289,
        "end": 299,
        "decorators": [],
        "name": "stringify3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 300,
          "end": 329,
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 308,
            "end": 329,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 310,
              "end": 329,
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
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 330,
        "end": 338,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 332,
          "end": 338
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 339,
        "end": 475,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 407,
            "end": 473,
            "argument": {
              "type": "ConditionalExpression",
              "start": 414,
              "end": 472,
              "test": {
                "type": "BinaryExpression",
                "start": 414,
                "end": 442,
                "left": {
                  "type": "UnaryExpression",
                  "start": 414,
                  "end": 429,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 421,
                    "end": 429,
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 434,
                  "end": 442,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "CallExpression",
                "start": 445,
                "end": 467,
                "callee": {
                  "type": "MemberExpression",
                  "start": 445,
                  "end": 465,
                  "object": {
                    "type": "Identifier",
                    "start": 445,
                    "end": 453,
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 454,
                    "end": 465,
                    "decorators": [],
                    "name": "toUpperCase",
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
              "alternate": {
                "type": "Literal",
                "start": 470,
                "end": 472,
                "value": "",
                "raw": "\"\""
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 477,
      "end": 626,
      "id": {
        "type": "Identifier",
        "start": 486,
        "end": 496,
        "decorators": [],
        "name": "stringify4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "start": 497,
          "end": 542,
          "decorators": [],
          "name": "anything",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 505,
            "end": 542,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 507,
              "end": 542,
              "types": [
                {
                  "type": "TSTypeLiteral",
                  "start": 507,
                  "end": 530,
                  "members": [
                    {
                      "type": "TSMethodSignature",
                      "start": 509,
                      "end": 528,
                      "key": {
                        "type": "Identifier",
                        "start": 509,
                        "end": 517,
                        "decorators": [],
                        "name": "toString",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "computed": false,
                      "optional": true,
                      "kind": "method",
                      "typeParameters": null,
                      "params": [],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "start": 520,
                        "end": 528,
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 522,
                          "end": 528
                        }
                      },
                      "accessibility": null,
                      "readonly": false,
                      "static": false
                    }
                  ]
                },
                {
                  "type": "TSUndefinedKeyword",
                  "start": 533,
                  "end": 542
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 543,
        "end": 551,
        "typeAnnotation": {
          "type": "TSStringKeyword",
          "start": 545,
          "end": 551
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 552,
        "end": 626,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 558,
            "end": 624,
            "argument": {
              "type": "ConditionalExpression",
              "start": 565,
              "end": 623,
              "test": {
                "type": "BinaryExpression",
                "start": 565,
                "end": 593,
                "left": {
                  "type": "UnaryExpression",
                  "start": 565,
                  "end": 580,
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "start": 572,
                    "end": 580,
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "prefix": true
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "start": 585,
                  "end": 593,
                  "value": "string",
                  "raw": "\"string\""
                }
              },
              "consequent": {
                "type": "CallExpression",
                "start": 596,
                "end": 618,
                "callee": {
                  "type": "MemberExpression",
                  "start": 596,
                  "end": 616,
                  "object": {
                    "type": "Identifier",
                    "start": 596,
                    "end": 604,
                    "decorators": [],
                    "name": "anything",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 605,
                    "end": 616,
                    "decorators": [],
                    "name": "toUpperCase",
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
              "alternate": {
                "type": "Literal",
                "start": 621,
                "end": 623,
                "value": "",
                "raw": "\"\""
              }
            }
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
