__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 924,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "decorators": [],
        "name": "combine",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 16,
        "end": 22,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 17,
            "end": 18,
            "name": {
              "type": "Identifier",
              "start": 17,
              "end": 18,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 20,
            "end": 21,
            "name": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "U",
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
      "params": [
        {
          "type": "Identifier",
          "start": 23,
          "end": 27,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 24,
            "end": 27,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 26,
              "end": 27,
              "typeName": {
                "type": "Identifier",
                "start": 26,
                "end": 27,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 29,
          "end": 33,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 30,
            "end": 33,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 32,
              "end": 33,
              "typeName": {
                "type": "Identifier",
                "start": 32,
                "end": 33,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 34,
        "end": 42,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 36,
          "end": 42,
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "start": 37,
              "end": 38,
              "typeName": {
                "type": "Identifier",
                "start": 37,
                "end": 38,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 40,
              "end": 41,
              "typeName": {
                "type": "Identifier",
                "start": 40,
                "end": 41,
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 43,
        "end": 65,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 49,
            "end": 63,
            "argument": {
              "type": "ArrayExpression",
              "start": 56,
              "end": 62,
              "elements": [
                {
                  "type": "Identifier",
                  "start": 57,
                  "end": 58,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 67,
      "end": 109,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 84,
            "decorators": [],
            "name": "combineResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 87,
            "end": 108,
            "callee": {
              "type": "Identifier",
              "start": 87,
              "end": 94,
              "decorators": [],
              "name": "combine",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 95,
                "end": 103,
                "value": "string",
                "raw": "\"string\""
              },
              {
                "type": "Literal",
                "start": 105,
                "end": 107,
                "value": 10,
                "raw": "10"
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 145,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 125,
            "decorators": [],
            "name": "combineEle1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 128,
            "end": 144,
            "object": {
              "type": "Identifier",
              "start": 128,
              "end": 141,
              "decorators": [],
              "name": "combineResult",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 142,
              "end": 143,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 191,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 171,
            "decorators": [],
            "name": "combineEle2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 174,
            "end": 190,
            "object": {
              "type": "Identifier",
              "start": 174,
              "end": 187,
              "decorators": [],
              "name": "combineResult",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 188,
              "end": 189,
              "value": 1,
              "raw": "1"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 203,
      "end": 526,
      "id": {
        "type": "Identifier",
        "start": 212,
        "end": 215,
        "decorators": [],
        "name": "zip",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 215,
        "end": 221,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 216,
            "end": 217,
            "name": {
              "type": "Identifier",
              "start": 216,
              "end": 217,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 219,
            "end": 220,
            "name": {
              "type": "Identifier",
              "start": 219,
              "end": 220,
              "decorators": [],
              "name": "U",
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
      "params": [
        {
          "type": "Identifier",
          "start": 222,
          "end": 233,
          "decorators": [],
          "name": "array1",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 228,
            "end": 233,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 230,
              "end": 233,
              "elementType": {
                "type": "TSTypeReference",
                "start": 230,
                "end": 231,
                "typeName": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 231,
                  "decorators": [],
                  "name": "T",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 235,
          "end": 246,
          "decorators": [],
          "name": "array2",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 241,
            "end": 246,
            "typeAnnotation": {
              "type": "TSArrayType",
              "start": 243,
              "end": 246,
              "elementType": {
                "type": "TSTypeReference",
                "start": 243,
                "end": 244,
                "typeName": {
                  "type": "Identifier",
                  "start": 243,
                  "end": 244,
                  "decorators": [],
                  "name": "U",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 247,
        "end": 257,
        "typeAnnotation": {
          "type": "TSTupleType",
          "start": 249,
          "end": 257,
          "elementTypes": [
            {
              "type": "TSTupleType",
              "start": 250,
              "end": 256,
              "elementTypes": [
                {
                  "type": "TSTypeReference",
                  "start": 251,
                  "end": 252,
                  "typeName": {
                    "type": "Identifier",
                    "start": 251,
                    "end": 252,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 254,
                  "end": 255,
                  "typeName": {
                    "type": "Identifier",
                    "start": 254,
                    "end": 255,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 258,
        "end": 526,
        "body": [
          {
            "type": "IfStatement",
            "start": 264,
            "end": 348,
            "test": {
              "type": "BinaryExpression",
              "start": 268,
              "end": 298,
              "left": {
                "type": "MemberExpression",
                "start": 268,
                "end": 281,
                "object": {
                  "type": "Identifier",
                  "start": 268,
                  "end": 274,
                  "decorators": [],
                  "name": "array1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 281,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "operator": "!=",
              "right": {
                "type": "MemberExpression",
                "start": 285,
                "end": 298,
                "object": {
                  "type": "Identifier",
                  "start": 285,
                  "end": 291,
                  "decorators": [],
                  "name": "array2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 298,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              }
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 300,
              "end": 348,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 310,
                  "end": 342,
                  "argument": {
                    "type": "ArrayExpression",
                    "start": 317,
                    "end": 341,
                    "elements": [
                      {
                        "type": "ArrayExpression",
                        "start": 318,
                        "end": 340,
                        "elements": [
                          {
                            "type": "Identifier",
                            "start": 319,
                            "end": 328,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          },
                          {
                            "type": "Identifier",
                            "start": 330,
                            "end": 339,
                            "decorators": [],
                            "name": "undefined",
                            "optional": false,
                            "typeAnnotation": null
                          }
                        ]
                      }
                    ]
                  }
                }
              ]
            },
            "alternate": null
          },
          {
            "type": "VariableDeclaration",
            "start": 353,
            "end": 380,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 357,
                "end": 379,
                "id": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 363,
                  "decorators": [],
                  "name": "length",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 366,
                  "end": 379,
                  "object": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 372,
                    "decorators": [],
                    "name": "array1",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 379,
                    "decorators": [],
                    "name": "length",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "optional": false,
                  "computed": false
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 385,
            "end": 409,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 389,
                "end": 408,
                "id": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 408,
                  "decorators": [],
                  "name": "zipResult",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 398,
                    "end": 408,
                    "typeAnnotation": {
                      "type": "TSTupleType",
                      "start": 400,
                      "end": 408,
                      "elementTypes": [
                        {
                          "type": "TSTupleType",
                          "start": 401,
                          "end": 407,
                          "elementTypes": [
                            {
                              "type": "TSTypeReference",
                              "start": 402,
                              "end": 403,
                              "typeName": {
                                "type": "Identifier",
                                "start": 402,
                                "end": 403,
                                "decorators": [],
                                "name": "T",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            },
                            {
                              "type": "TSTypeReference",
                              "start": 405,
                              "end": 406,
                              "typeName": {
                                "type": "Identifier",
                                "start": 405,
                                "end": 406,
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      ]
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ForStatement",
            "start": 414,
            "end": 502,
            "init": {
              "type": "VariableDeclaration",
              "start": 419,
              "end": 428,
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 423,
                  "end": 428,
                  "id": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "decorators": [],
                    "name": "i",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "init": {
                    "type": "Literal",
                    "start": 427,
                    "end": 428,
                    "value": 0,
                    "raw": "0"
                  },
                  "definite": false
                }
              ],
              "declare": false
            },
            "test": {
              "type": "BinaryExpression",
              "start": 430,
              "end": 440,
              "left": {
                "type": "Identifier",
                "start": 430,
                "end": 431,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 434,
                "end": 440,
                "decorators": [],
                "name": "length",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 442,
              "end": 445,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 444,
                "end": 445,
                "decorators": [],
                "name": "i",
                "optional": false,
                "typeAnnotation": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 447,
              "end": 502,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 457,
                  "end": 496,
                  "expression": {
                    "type": "CallExpression",
                    "start": 457,
                    "end": 495,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 457,
                      "end": 471,
                      "object": {
                        "type": "Identifier",
                        "start": 457,
                        "end": 466,
                        "decorators": [],
                        "name": "zipResult",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 467,
                        "end": 471,
                        "decorators": [],
                        "name": "push",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "optional": false,
                      "computed": false
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "ArrayExpression",
                        "start": 472,
                        "end": 494,
                        "elements": [
                          {
                            "type": "MemberExpression",
                            "start": 473,
                            "end": 482,
                            "object": {
                              "type": "Identifier",
                              "start": 473,
                              "end": 479,
                              "decorators": [],
                              "name": "array1",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 480,
                              "end": 481,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": true
                          },
                          {
                            "type": "MemberExpression",
                            "start": 484,
                            "end": 493,
                            "object": {
                              "type": "Identifier",
                              "start": 484,
                              "end": 490,
                              "decorators": [],
                              "name": "array2",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 491,
                              "end": 492,
                              "decorators": [],
                              "name": "i",
                              "optional": false,
                              "typeAnnotation": null
                            },
                            "optional": false,
                            "computed": true
                          }
                        ]
                      }
                    ],
                    "optional": false
                  },
                  "directive": null
                }
              ]
            }
          },
          {
            "type": "ReturnStatement",
            "start": 507,
            "end": 524,
            "argument": {
              "type": "Identifier",
              "start": 514,
              "end": 523,
              "decorators": [],
              "name": "zipResult",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 528,
      "end": 572,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 532,
          "end": 571,
          "id": {
            "type": "Identifier",
            "start": 532,
            "end": 541,
            "decorators": [],
            "name": "zipResult",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 544,
            "end": 571,
            "callee": {
              "type": "Identifier",
              "start": 544,
              "end": 547,
              "decorators": [],
              "name": "zip",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrayExpression",
                "start": 548,
                "end": 562,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 549,
                    "end": 554,
                    "value": "foo",
                    "raw": "\"foo\""
                  },
                  {
                    "type": "Literal",
                    "start": 556,
                    "end": 561,
                    "value": "bar",
                    "raw": "\"bar\""
                  }
                ]
              },
              {
                "type": "ArrayExpression",
                "start": 564,
                "end": 570,
                "elements": [
                  {
                    "type": "Literal",
                    "start": 565,
                    "end": 566,
                    "value": 5,
                    "raw": "5"
                  },
                  {
                    "type": "Literal",
                    "start": 568,
                    "end": 569,
                    "value": 6,
                    "raw": "6"
                  }
                ]
              }
            ],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 573,
      "end": 605,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 589,
            "decorators": [],
            "name": "zipResultEle",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 592,
            "end": 604,
            "object": {
              "type": "Identifier",
              "start": 592,
              "end": 601,
              "decorators": [],
              "name": "zipResult",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 602,
              "end": 603,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 626,
      "end": 664,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 630,
          "end": 663,
          "id": {
            "type": "Identifier",
            "start": 630,
            "end": 645,
            "decorators": [],
            "name": "zipResultEleEle",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 648,
            "end": 663,
            "object": {
              "type": "MemberExpression",
              "start": 648,
              "end": 660,
              "object": {
                "type": "Identifier",
                "start": 648,
                "end": 657,
                "decorators": [],
                "name": "zipResult",
                "optional": false,
                "typeAnnotation": null
              },
              "property": {
                "type": "Literal",
                "start": 658,
                "end": 659,
                "value": 0,
                "raw": "0"
              },
              "optional": false,
              "computed": true
            },
            "property": {
              "type": "Literal",
              "start": 661,
              "end": 662,
              "value": 0,
              "raw": "0"
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 698,
      "end": 752,
      "id": {
        "type": "Identifier",
        "start": 715,
        "end": 717,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 717,
        "end": 725,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 718,
            "end": 720,
            "name": {
              "type": "Identifier",
              "start": 718,
              "end": 720,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 722,
            "end": 724,
            "name": {
              "type": "Identifier",
              "start": 722,
              "end": 724,
              "decorators": [],
              "name": "T2",
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
      "params": [
        {
          "type": "Identifier",
          "start": 726,
          "end": 746,
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 732,
            "end": 746,
            "typeAnnotation": {
              "type": "TSTupleType",
              "start": 734,
              "end": 746,
              "elementTypes": [
                {
                  "type": "TSArrayType",
                  "start": 735,
                  "end": 739,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 735,
                    "end": 737,
                    "typeName": {
                      "type": "Identifier",
                      "start": 735,
                      "end": 737,
                      "decorators": [],
                      "name": "T1",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 741,
                  "end": 745,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 741,
                    "end": 743,
                    "typeName": {
                      "type": "Identifier",
                      "start": 741,
                      "end": 743,
                      "decorators": [],
                      "name": "T2",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 747,
        "end": 751,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 749,
          "end": 751,
          "typeName": {
            "type": "Identifier",
            "start": 749,
            "end": 751,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 753,
      "end": 816,
      "id": {
        "type": "Identifier",
        "start": 770,
        "end": 772,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 772,
        "end": 780,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 773,
            "end": 775,
            "name": {
              "type": "Identifier",
              "start": 773,
              "end": 775,
              "decorators": [],
              "name": "T1",
              "optional": false,
              "typeAnnotation": null
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 777,
            "end": 779,
            "name": {
              "type": "Identifier",
              "start": 777,
              "end": 779,
              "decorators": [],
              "name": "T2",
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
      "params": [
        {
          "type": "Identifier",
          "start": 781,
          "end": 810,
          "decorators": [],
          "name": "values",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 787,
            "end": 810,
            "typeAnnotation": {
              "type": "TSTypeOperator",
              "start": 789,
              "end": 810,
              "operator": "readonly",
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 798,
                "end": 810,
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "start": 799,
                    "end": 803,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 799,
                      "end": 801,
                      "typeName": {
                        "type": "Identifier",
                        "start": 799,
                        "end": 801,
                        "decorators": [],
                        "name": "T1",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 805,
                    "end": 809,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 805,
                      "end": 807,
                      "typeName": {
                        "type": "Identifier",
                        "start": 805,
                        "end": 807,
                        "decorators": [],
                        "name": "T2",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 811,
        "end": 815,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 813,
          "end": 815,
          "typeName": {
            "type": "Identifier",
            "start": 813,
            "end": 815,
            "decorators": [],
            "name": "T1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 818,
      "end": 836,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 822,
          "end": 835,
          "id": {
            "type": "Identifier",
            "start": 822,
            "end": 835,
            "decorators": [],
            "name": "expected",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 830,
              "end": 835,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 832,
                "end": 835,
                "literal": {
                  "type": "Literal",
                  "start": 832,
                  "end": 835,
                  "value": "a",
                  "raw": "\"a\""
                }
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 837,
      "end": 880,
      "expression": {
        "type": "AssignmentExpression",
        "start": 837,
        "end": 879,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 837,
          "end": 845,
          "decorators": [],
          "name": "expected",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 848,
          "end": 879,
          "callee": {
            "type": "Identifier",
            "start": 848,
            "end": 850,
            "decorators": [],
            "name": "f1",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "TSAsExpression",
              "start": 851,
              "end": 878,
              "expression": {
                "type": "Identifier",
                "start": 851,
                "end": 860,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 864,
                "end": 878,
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "start": 865,
                    "end": 870,
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 865,
                      "end": 868,
                      "literal": {
                        "type": "Literal",
                        "start": 865,
                        "end": 868,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 872,
                    "end": 877,
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 872,
                      "end": 875,
                      "literal": {
                        "type": "Literal",
                        "start": 872,
                        "end": 875,
                        "value": "b",
                        "raw": "\"b\""
                      }
                    }
                  }
                ]
              }
            }
          ],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 881,
      "end": 924,
      "expression": {
        "type": "AssignmentExpression",
        "start": 881,
        "end": 923,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 881,
          "end": 889,
          "decorators": [],
          "name": "expected",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "CallExpression",
          "start": 892,
          "end": 923,
          "callee": {
            "type": "Identifier",
            "start": 892,
            "end": 894,
            "decorators": [],
            "name": "f2",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "TSAsExpression",
              "start": 895,
              "end": 922,
              "expression": {
                "type": "Identifier",
                "start": 895,
                "end": 904,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              },
              "typeAnnotation": {
                "type": "TSTupleType",
                "start": 908,
                "end": 922,
                "elementTypes": [
                  {
                    "type": "TSArrayType",
                    "start": 909,
                    "end": 914,
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 909,
                      "end": 912,
                      "literal": {
                        "type": "Literal",
                        "start": 909,
                        "end": 912,
                        "value": "a",
                        "raw": "\"a\""
                      }
                    }
                  },
                  {
                    "type": "TSArrayType",
                    "start": 916,
                    "end": 921,
                    "elementType": {
                      "type": "TSLiteralType",
                      "start": 916,
                      "end": 919,
                      "literal": {
                        "type": "Literal",
                        "start": 916,
                        "end": 919,
                        "value": "b",
                        "raw": "\"b\""
                      }
                    }
                  }
                ]
              }
            }
          ],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
