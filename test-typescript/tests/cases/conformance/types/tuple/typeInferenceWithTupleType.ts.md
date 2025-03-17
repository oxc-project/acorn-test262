__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 925,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 65,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 16,
        "name": "combine",
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
          "start": 23,
          "end": 27,
          "name": "x",
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 29,
          "end": 33,
          "name": "y",
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
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "x",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                {
                  "type": "Identifier",
                  "start": 60,
                  "end": 61,
                  "name": "y",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                }
              ]
            }
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "U",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 109,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 108,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 84,
            "name": "combineResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 87,
            "end": 108,
            "callee": {
              "type": "Identifier",
              "start": 87,
              "end": 94,
              "name": "combine",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 110,
      "end": 145,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 114,
          "end": 144,
          "id": {
            "type": "Identifier",
            "start": 114,
            "end": 125,
            "name": "combineEle1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 128,
            "end": 144,
            "object": {
              "type": "Identifier",
              "start": 128,
              "end": 141,
              "name": "combineResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 142,
              "end": 143,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 156,
      "end": 191,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 160,
          "end": 190,
          "id": {
            "type": "Identifier",
            "start": 160,
            "end": 171,
            "name": "combineEle2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 174,
            "end": 190,
            "object": {
              "type": "Identifier",
              "start": 174,
              "end": 187,
              "name": "combineResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 188,
              "end": 189,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "zip",
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
          "start": 222,
          "end": 233,
          "name": "array1",
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
                  "name": "T",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        },
        {
          "type": "Identifier",
          "start": 235,
          "end": 246,
          "name": "array2",
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
                  "name": "U",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
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
                  "name": "array1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 275,
                  "end": 281,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                  "name": "array2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 292,
                  "end": 298,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
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
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
                          },
                          {
                            "type": "Identifier",
                            "start": 330,
                            "end": 339,
                            "name": "undefined",
                            "typeAnnotation": null,
                            "decorators": [],
                            "optional": false
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
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 357,
                "end": 379,
                "id": {
                  "type": "Identifier",
                  "start": 357,
                  "end": 363,
                  "name": "length",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "MemberExpression",
                  "start": 366,
                  "end": 379,
                  "object": {
                    "type": "Identifier",
                    "start": 366,
                    "end": 372,
                    "name": "array1",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 373,
                    "end": 379,
                    "name": "length",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": false
                },
                "definite": false
              }
            ],
            "kind": "var",
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 385,
            "end": 409,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 389,
                "end": 408,
                "id": {
                  "type": "Identifier",
                  "start": 389,
                  "end": 408,
                  "name": "zipResult",
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
                                "name": "T",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
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
                                "name": "U",
                                "typeAnnotation": null,
                                "decorators": [],
                                "optional": false
                              },
                              "typeArguments": null
                            }
                          ]
                        }
                      ]
                    }
                  },
                  "decorators": [],
                  "optional": false
                },
                "init": null,
                "definite": false
              }
            ],
            "kind": "var",
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
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 423,
                  "end": 428,
                  "id": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "name": "i",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
              "kind": "var",
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
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Identifier",
                "start": 434,
                "end": 440,
                "name": "length",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                "name": "i",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
                        "name": "zipResult",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 467,
                        "end": 471,
                        "name": "push",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "computed": false,
                      "optional": false
                    },
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
                              "name": "array1",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 480,
                              "end": 481,
                              "name": "i",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": true,
                            "optional": false
                          },
                          {
                            "type": "MemberExpression",
                            "start": 484,
                            "end": 493,
                            "object": {
                              "type": "Identifier",
                              "start": 484,
                              "end": 490,
                              "name": "array2",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "property": {
                              "type": "Identifier",
                              "start": 491,
                              "end": 492,
                              "name": "i",
                              "typeAnnotation": null,
                              "decorators": [],
                              "optional": false
                            },
                            "computed": true,
                            "optional": false
                          }
                        ]
                      }
                    ],
                    "optional": false,
                    "typeArguments": null
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
              "name": "zipResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
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
              "name": "T",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
                    "name": "T",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
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
                    "name": "U",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "typeArguments": null
                }
              ]
            }
          ]
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 528,
      "end": 572,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 532,
          "end": 571,
          "id": {
            "type": "Identifier",
            "start": 532,
            "end": 541,
            "name": "zipResult",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 544,
            "end": 571,
            "callee": {
              "type": "Identifier",
              "start": 544,
              "end": 547,
              "name": "zip",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
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
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 573,
      "end": 605,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 577,
          "end": 604,
          "id": {
            "type": "Identifier",
            "start": 577,
            "end": 589,
            "name": "zipResultEle",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 592,
            "end": 604,
            "object": {
              "type": "Identifier",
              "start": 592,
              "end": 601,
              "name": "zipResult",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 602,
              "end": 603,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 626,
      "end": 664,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 630,
          "end": 663,
          "id": {
            "type": "Identifier",
            "start": 630,
            "end": 645,
            "name": "zipResultEleEle",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
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
                "name": "zipResult",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "property": {
                "type": "Literal",
                "start": 658,
                "end": 659,
                "value": 0,
                "raw": "0"
              },
              "computed": true,
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 661,
              "end": 662,
              "value": 0,
              "raw": "0"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "name": "f1",
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
          "start": 726,
          "end": 746,
          "name": "values",
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
                      "name": "T1",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
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
                      "name": "T2",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                }
              ]
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 753,
      "end": 816,
      "id": {
        "type": "Identifier",
        "start": 770,
        "end": 772,
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
          "start": 781,
          "end": 810,
          "name": "values",
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
                        "name": "T1",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
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
                        "name": "T2",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                ]
              }
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
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
              "name": "T1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
              "name": "T2",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          }
        ]
      },
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
            "name": "T1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "typeArguments": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 818,
      "end": 836,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 822,
          "end": 835,
          "id": {
            "type": "Identifier",
            "start": 822,
            "end": 835,
            "name": "expected",
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
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
          "name": "expected",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 848,
          "end": 879,
          "callee": {
            "type": "Identifier",
            "start": 848,
            "end": 850,
            "name": "f1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "TSAsExpression",
              "start": 851,
              "end": 878,
              "expression": {
                "type": "Identifier",
                "start": 851,
                "end": 860,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "optional": false,
          "typeArguments": null
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
          "name": "expected",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 892,
          "end": 923,
          "callee": {
            "type": "Identifier",
            "start": 892,
            "end": 894,
            "name": "f2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [
            {
              "type": "TSAsExpression",
              "start": 895,
              "end": 922,
              "expression": {
                "type": "Identifier",
                "start": 895,
                "end": 904,
                "name": "undefined",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
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
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
