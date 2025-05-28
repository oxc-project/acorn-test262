__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 11,
  "end": 787,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 11,
      "end": 83,
      "id": {
        "type": "Identifier",
        "start": 21,
        "end": 23,
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 25,
        "end": 58,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 27,
          "end": 58,
          "typeName": {
            "type": "Identifier",
            "start": 27,
            "end": 36,
            "decorators": [],
            "name": "Generator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 36,
            "end": 58,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 37,
                "end": 40
              },
              {
                "type": "TSTypeLiteral",
                "start": 42,
                "end": 52,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 44,
                    "end": 50,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 44,
                      "end": 45,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 45,
                      "end": 50,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 47,
                        "end": 50,
                        "literal": {
                          "type": "Literal",
                          "start": 47,
                          "end": 50,
                          "value": "x",
                          "raw": "'x'"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSAnyKeyword",
                "start": 54,
                "end": 57
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 59,
        "end": 83,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 63,
            "end": 81,
            "argument": {
              "type": "ObjectExpression",
              "start": 70,
              "end": 80,
              "properties": [
                {
                  "type": "Property",
                  "start": 72,
                  "end": 78,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 72,
                    "end": 73,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 75,
                    "end": 78,
                    "value": "x",
                    "raw": "'x'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 85,
      "end": 156,
      "id": {
        "type": "Identifier",
        "start": 95,
        "end": 97,
        "decorators": [],
        "name": "g1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 99,
        "end": 131,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 101,
          "end": 131,
          "typeName": {
            "type": "Identifier",
            "start": 101,
            "end": 109,
            "decorators": [],
            "name": "Iterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 109,
            "end": 131,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 110,
                "end": 113
              },
              {
                "type": "TSTypeLiteral",
                "start": 115,
                "end": 125,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 117,
                    "end": 123,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 117,
                      "end": 118,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 118,
                      "end": 123,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 120,
                        "end": 123,
                        "literal": {
                          "type": "Literal",
                          "start": 120,
                          "end": 123,
                          "value": "x",
                          "raw": "'x'"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSAnyKeyword",
                "start": 127,
                "end": 130
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 132,
        "end": 156,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 136,
            "end": 154,
            "argument": {
              "type": "ObjectExpression",
              "start": 143,
              "end": 153,
              "properties": [
                {
                  "type": "Property",
                  "start": 145,
                  "end": 151,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 145,
                    "end": 146,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 148,
                    "end": 151,
                    "value": "x",
                    "raw": "'x'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 158,
      "end": 241,
      "id": {
        "type": "Identifier",
        "start": 174,
        "end": 176,
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 178,
        "end": 216,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 180,
          "end": 216,
          "typeName": {
            "type": "Identifier",
            "start": 180,
            "end": 194,
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 194,
            "end": 216,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 195,
                "end": 198
              },
              {
                "type": "TSTypeLiteral",
                "start": 200,
                "end": 210,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 202,
                    "end": 208,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 202,
                      "end": 203,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 203,
                      "end": 208,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 205,
                        "end": 208,
                        "literal": {
                          "type": "Literal",
                          "start": 205,
                          "end": 208,
                          "value": "x",
                          "raw": "'x'"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSAnyKeyword",
                "start": 212,
                "end": 215
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 217,
        "end": 241,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 221,
            "end": 239,
            "argument": {
              "type": "ObjectExpression",
              "start": 228,
              "end": 238,
              "properties": [
                {
                  "type": "Property",
                  "start": 230,
                  "end": 236,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 230,
                    "end": 231,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 233,
                    "end": 236,
                    "value": "x",
                    "raw": "'x'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 243,
      "end": 325,
      "id": {
        "type": "Identifier",
        "start": 259,
        "end": 261,
        "decorators": [],
        "name": "g2",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 263,
        "end": 300,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 265,
          "end": 300,
          "typeName": {
            "type": "Identifier",
            "start": 265,
            "end": 278,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 278,
            "end": 300,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 279,
                "end": 282
              },
              {
                "type": "TSTypeLiteral",
                "start": 284,
                "end": 294,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 286,
                    "end": 292,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 286,
                      "end": 287,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 287,
                      "end": 292,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 289,
                        "end": 292,
                        "literal": {
                          "type": "Literal",
                          "start": 289,
                          "end": 292,
                          "value": "x",
                          "raw": "'x'"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSAnyKeyword",
                "start": 296,
                "end": 299
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 301,
        "end": 325,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 305,
            "end": 323,
            "argument": {
              "type": "ObjectExpression",
              "start": 312,
              "end": 322,
              "properties": [
                {
                  "type": "Property",
                  "start": 314,
                  "end": 320,
                  "kind": "init",
                  "key": {
                    "type": "Identifier",
                    "start": 314,
                    "end": 315,
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "value": {
                    "type": "Literal",
                    "start": 317,
                    "end": 320,
                    "value": "x",
                    "raw": "'x'"
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 327,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 343,
        "end": 345,
        "decorators": [],
        "name": "f3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 347,
        "end": 385,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 349,
          "end": 385,
          "typeName": {
            "type": "Identifier",
            "start": 349,
            "end": 363,
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 363,
            "end": 385,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 364,
                "end": 367
              },
              {
                "type": "TSTypeLiteral",
                "start": 369,
                "end": 379,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 371,
                    "end": 377,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 371,
                      "end": 372,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 372,
                      "end": 377,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 374,
                        "end": 377,
                        "literal": {
                          "type": "Literal",
                          "start": 374,
                          "end": 377,
                          "value": "x",
                          "raw": "'x'"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSAnyKeyword",
                "start": 381,
                "end": 384
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 386,
        "end": 427,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 390,
            "end": 425,
            "argument": {
              "type": "CallExpression",
              "start": 397,
              "end": 424,
              "callee": {
                "type": "MemberExpression",
                "start": 397,
                "end": 412,
                "object": {
                  "type": "Identifier",
                  "start": 397,
                  "end": 404,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 405,
                  "end": 412,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 413,
                  "end": 423,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 415,
                      "end": 421,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 415,
                        "end": 416,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 418,
                        "end": 421,
                        "value": "x",
                        "raw": "'x'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 429,
      "end": 528,
      "id": {
        "type": "Identifier",
        "start": 445,
        "end": 447,
        "decorators": [],
        "name": "g3",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 449,
        "end": 486,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 451,
          "end": 486,
          "typeName": {
            "type": "Identifier",
            "start": 451,
            "end": 464,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 464,
            "end": 486,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 465,
                "end": 468
              },
              {
                "type": "TSTypeLiteral",
                "start": 470,
                "end": 480,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 472,
                    "end": 478,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 472,
                      "end": 473,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 473,
                      "end": 478,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 475,
                        "end": 478,
                        "literal": {
                          "type": "Literal",
                          "start": 475,
                          "end": 478,
                          "value": "x",
                          "raw": "'x'"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSAnyKeyword",
                "start": 482,
                "end": 485
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 487,
        "end": 528,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 491,
            "end": 526,
            "argument": {
              "type": "CallExpression",
              "start": 498,
              "end": 525,
              "callee": {
                "type": "MemberExpression",
                "start": 498,
                "end": 513,
                "object": {
                  "type": "Identifier",
                  "start": 498,
                  "end": 505,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 506,
                  "end": 513,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ObjectExpression",
                  "start": 514,
                  "end": 524,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 516,
                      "end": 522,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 516,
                        "end": 517,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 519,
                        "end": 522,
                        "value": "x",
                        "raw": "'x'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 530,
      "end": 658,
      "id": {
        "type": "Identifier",
        "start": 546,
        "end": 548,
        "decorators": [],
        "name": "f4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 550,
        "end": 588,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 552,
          "end": 588,
          "typeName": {
            "type": "Identifier",
            "start": 552,
            "end": 566,
            "decorators": [],
            "name": "AsyncGenerator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 566,
            "end": 588,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 567,
                "end": 570
              },
              {
                "type": "TSTypeLiteral",
                "start": 572,
                "end": 582,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 574,
                    "end": 580,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 574,
                      "end": 575,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 575,
                      "end": 580,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 577,
                        "end": 580,
                        "literal": {
                          "type": "Literal",
                          "start": 577,
                          "end": 580,
                          "value": "x",
                          "raw": "'x'"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSAnyKeyword",
                "start": 584,
                "end": 587
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 589,
        "end": 658,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 593,
            "end": 616,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 599,
                "end": 615,
                "id": {
                  "type": "Identifier",
                  "start": 599,
                  "end": 602,
                  "decorators": [],
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 605,
                  "end": 615,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 607,
                      "end": 613,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 607,
                        "end": 608,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 610,
                        "end": 613,
                        "value": "x",
                        "raw": "'x'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 619,
            "end": 647,
            "argument": {
              "type": "CallExpression",
              "start": 626,
              "end": 646,
              "callee": {
                "type": "MemberExpression",
                "start": 626,
                "end": 641,
                "object": {
                  "type": "Identifier",
                  "start": 626,
                  "end": 633,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 634,
                  "end": 641,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 642,
                  "end": 645,
                  "decorators": [],
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 660,
      "end": 787,
      "id": {
        "type": "Identifier",
        "start": 676,
        "end": 678,
        "decorators": [],
        "name": "g4",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": true,
      "async": true,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 680,
        "end": 717,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 682,
          "end": 717,
          "typeName": {
            "type": "Identifier",
            "start": 682,
            "end": 695,
            "decorators": [],
            "name": "AsyncIterator",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": {
            "type": "TSTypeParameterInstantiation",
            "start": 695,
            "end": 717,
            "params": [
              {
                "type": "TSAnyKeyword",
                "start": 696,
                "end": 699
              },
              {
                "type": "TSTypeLiteral",
                "start": 701,
                "end": 711,
                "members": [
                  {
                    "type": "TSPropertySignature",
                    "start": 703,
                    "end": 709,
                    "computed": false,
                    "optional": false,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "start": 703,
                      "end": 704,
                      "decorators": [],
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "start": 704,
                      "end": 709,
                      "typeAnnotation": {
                        "type": "TSLiteralType",
                        "start": 706,
                        "end": 709,
                        "literal": {
                          "type": "Literal",
                          "start": 706,
                          "end": 709,
                          "value": "x",
                          "raw": "'x'"
                        }
                      }
                    },
                    "accessibility": null,
                    "static": false
                  }
                ]
              },
              {
                "type": "TSAnyKeyword",
                "start": 713,
                "end": 716
              }
            ]
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 718,
        "end": 787,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 722,
            "end": 745,
            "kind": "const",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 728,
                "end": 744,
                "id": {
                  "type": "Identifier",
                  "start": 728,
                  "end": 731,
                  "decorators": [],
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "ObjectExpression",
                  "start": 734,
                  "end": 744,
                  "properties": [
                    {
                      "type": "Property",
                      "start": 736,
                      "end": 742,
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "start": 736,
                        "end": 737,
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "value": {
                        "type": "Literal",
                        "start": 739,
                        "end": 742,
                        "value": "x",
                        "raw": "'x'"
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false
                    }
                  ]
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "ReturnStatement",
            "start": 748,
            "end": 776,
            "argument": {
              "type": "CallExpression",
              "start": 755,
              "end": 775,
              "callee": {
                "type": "MemberExpression",
                "start": 755,
                "end": 770,
                "object": {
                  "type": "Identifier",
                  "start": 755,
                  "end": 762,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 763,
                  "end": 770,
                  "decorators": [],
                  "name": "resolve",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 771,
                  "end": 774,
                  "decorators": [],
                  "name": "ret",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
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
