__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 580,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 532,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "name": "f",
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
          "start": 11,
          "end": 16,
          "left": {
            "type": "Identifier",
            "start": 11,
            "end": 12,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 15,
            "end": 16,
            "value": 0,
            "raw": "0"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        },
        {
          "type": "AssignmentPattern",
          "start": 18,
          "end": 27,
          "left": {
            "type": "Identifier",
            "start": 18,
            "end": 19,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "right": {
            "type": "Literal",
            "start": 22,
            "end": 27,
            "value": false,
            "raw": "false"
          },
          "decorators": [],
          "optional": false,
          "typeAnnotation": null
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 29,
        "end": 532,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 111,
            "end": 117,
            "expression": {
              "type": "AssignmentExpression",
              "start": 111,
              "end": 116,
              "operator": "=",
              "left": {
                "type": "Identifier",
                "start": 111,
                "end": 112,
                "name": "x",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 115,
                "end": 116,
                "value": 1,
                "raw": "1"
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 122,
            "end": 134,
            "expression": {
              "type": "AssignmentExpression",
              "start": 123,
              "end": 132,
              "operator": "=",
              "left": {
                "type": "ArrayPattern",
                "start": 123,
                "end": 126,
                "elements": [
                  {
                    "type": "Identifier",
                    "start": 124,
                    "end": 125,
                    "name": "x",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ArrayExpression",
                "start": 129,
                "end": 132,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 130,
                    "end": 131,
                    "value": 1,
                    "raw": "1"
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 139,
            "end": 158,
            "expression": {
              "type": "AssignmentExpression",
              "start": 140,
              "end": 156,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 140,
                "end": 145,
                "properties": [
                  {
                    "type": "Property",
                    "start": 142,
                    "end": 143,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 142,
                      "end": 143,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 148,
                "end": 156,
                "properties": [
                  {
                    "type": "Property",
                    "start": 150,
                    "end": 154,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 150,
                      "end": 151,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 153,
                      "end": 154,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 163,
            "end": 185,
            "expression": {
              "type": "AssignmentExpression",
              "start": 164,
              "end": 183,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 164,
                "end": 172,
                "properties": [
                  {
                    "type": "Property",
                    "start": 166,
                    "end": 170,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 166,
                      "end": 167,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 169,
                      "end": 170,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 175,
                "end": 183,
                "properties": [
                  {
                    "type": "Property",
                    "start": 177,
                    "end": 181,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 177,
                      "end": 178,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "Literal",
                      "start": 180,
                      "end": 181,
                      "value": 1,
                      "raw": "1"
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 190,
            "end": 230,
            "expression": {
              "type": "AssignmentExpression",
              "start": 191,
              "end": 228,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 191,
                "end": 208,
                "properties": [
                  {
                    "type": "Property",
                    "start": 193,
                    "end": 206,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 193,
                      "end": 194,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayPattern",
                      "start": 196,
                      "end": 206,
                      "elements": [
                        {
                          "type": "ObjectPattern",
                          "start": 197,
                          "end": 205,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 199,
                              "end": 203,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 199,
                                "end": 200,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Identifier",
                                "start": 202,
                                "end": 203,
                                "name": "x",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ],
                          "decorators": [],
                          "optional": false,
                          "typeAnnotation": null
                        }
                      ],
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 211,
                "end": 228,
                "properties": [
                  {
                    "type": "Property",
                    "start": 213,
                    "end": 226,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 213,
                      "end": 214,
                      "name": "a",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ArrayExpression",
                      "start": 216,
                      "end": 226,
                      "elements": [
                        {
                          "type": "ObjectExpression",
                          "start": 217,
                          "end": 225,
                          "properties": [
                            {
                              "type": "Property",
                              "start": 219,
                              "end": 223,
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "key": {
                                "type": "Identifier",
                                "start": 219,
                                "end": 220,
                                "name": "b",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "value": {
                                "type": "Literal",
                                "start": 222,
                                "end": 223,
                                "value": 1,
                                "raw": "1"
                              },
                              "kind": "init",
                              "optional": false
                            }
                          ]
                        }
                      ]
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "ExpressionStatement",
            "start": 235,
            "end": 274,
            "expression": {
              "type": "AssignmentExpression",
              "start": 236,
              "end": 272,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 236,
                "end": 245,
                "properties": [
                  {
                    "type": "Property",
                    "start": 238,
                    "end": 243,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 238,
                      "end": 239,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 238,
                      "end": 243,
                      "left": {
                        "type": "Identifier",
                        "start": 238,
                        "end": 239,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Literal",
                        "start": 242,
                        "end": 243,
                        "value": 2,
                        "raw": "2"
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 248,
                "end": 272,
                "properties": [
                  {
                    "type": "Property",
                    "start": 250,
                    "end": 270,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 250,
                      "end": 251,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "start": 253,
                      "end": 270,
                      "test": {
                        "type": "Identifier",
                        "start": 253,
                        "end": 254,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 257,
                        "end": 258,
                        "value": 1,
                        "raw": "1"
                      },
                      "alternate": {
                        "type": "Identifier",
                        "start": 261,
                        "end": 270,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 279,
            "end": 292,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 283,
                "end": 291,
                "id": {
                  "type": "Identifier",
                  "start": 283,
                  "end": 287,
                  "name": "used",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 290,
                  "end": 291,
                  "value": 1,
                  "raw": "1"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 297,
            "end": 339,
            "expression": {
              "type": "AssignmentExpression",
              "start": 298,
              "end": 337,
              "operator": "=",
              "left": {
                "type": "ObjectPattern",
                "start": 298,
                "end": 310,
                "properties": [
                  {
                    "type": "Property",
                    "start": 300,
                    "end": 308,
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 300,
                      "end": 301,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "AssignmentPattern",
                      "start": 300,
                      "end": 308,
                      "left": {
                        "type": "Identifier",
                        "start": 300,
                        "end": 301,
                        "name": "x",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "right": {
                        "type": "Identifier",
                        "start": 304,
                        "end": 308,
                        "name": "used",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "decorators": [],
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "kind": "init",
                    "optional": false
                  }
                ],
                "decorators": [],
                "optional": false,
                "typeAnnotation": null
              },
              "right": {
                "type": "ObjectExpression",
                "start": 313,
                "end": 337,
                "properties": [
                  {
                    "type": "Property",
                    "start": 315,
                    "end": 335,
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "key": {
                      "type": "Identifier",
                      "start": 315,
                      "end": 316,
                      "name": "x",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "value": {
                      "type": "ConditionalExpression",
                      "start": 318,
                      "end": 335,
                      "test": {
                        "type": "Identifier",
                        "start": 318,
                        "end": 319,
                        "name": "b",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "consequent": {
                        "type": "Literal",
                        "start": 322,
                        "end": 323,
                        "value": 1,
                        "raw": "1"
                      },
                      "alternate": {
                        "type": "Identifier",
                        "start": 326,
                        "end": 335,
                        "name": "undefined",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      }
                    },
                    "kind": "init",
                    "optional": false
                  }
                ]
              }
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 345,
            "end": 355,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 349,
                "end": 354,
                "id": {
                  "type": "Identifier",
                  "start": 349,
                  "end": 350,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 353,
                  "end": 354,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 427,
            "end": 434,
            "expression": {
              "type": "CallExpression",
              "start": 427,
              "end": 433,
              "callee": {
                "type": "Identifier",
                "start": 427,
                "end": 428,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "UpdateExpression",
                  "start": 429,
                  "end": 432,
                  "operator": "++",
                  "prefix": false,
                  "argument": {
                    "type": "Identifier",
                    "start": 429,
                    "end": 430,
                    "name": "y",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
            },
            "directive": null
          },
          {
            "type": "VariableDeclaration",
            "start": 440,
            "end": 450,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 444,
                "end": 449,
                "id": {
                  "type": "Identifier",
                  "start": 444,
                  "end": 445,
                  "name": "z",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "Literal",
                  "start": 448,
                  "end": 449,
                  "value": 0,
                  "raw": "0"
                },
                "definite": false
              }
            ],
            "kind": "let",
            "declare": false
          },
          {
            "type": "ExpressionStatement",
            "start": 455,
            "end": 464,
            "expression": {
              "type": "CallExpression",
              "start": 455,
              "end": 463,
              "callee": {
                "type": "Identifier",
                "start": 455,
                "end": 456,
                "name": "f",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [
                {
                  "type": "AssignmentExpression",
                  "start": 457,
                  "end": 462,
                  "operator": "=",
                  "left": {
                    "type": "Identifier",
                    "start": 457,
                    "end": 458,
                    "name": "z",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "right": {
                    "type": "Literal",
                    "start": 461,
                    "end": 462,
                    "value": 1,
                    "raw": "1"
                  }
                }
              ],
              "optional": false,
              "typeArguments": null
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
      "start": 533,
      "end": 579,
      "id": {
        "type": "Identifier",
        "start": 542,
        "end": 544,
        "name": "f2",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [
        {
          "type": "Identifier",
          "start": 545,
          "end": 569,
          "name": "_",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 546,
            "end": 569,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 548,
              "end": 569,
              "typeName": {
                "type": "Identifier",
                "start": 548,
                "end": 561,
                "name": "ReadonlyArray",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "start": 561,
                "end": 569,
                "params": [
                  {
                    "type": "TSNumberKeyword",
                    "start": 562,
                    "end": 568
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 577,
        "end": 579,
        "body": []
      },
      "declare": false,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 570,
        "end": 576,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 572,
          "end": 576
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
