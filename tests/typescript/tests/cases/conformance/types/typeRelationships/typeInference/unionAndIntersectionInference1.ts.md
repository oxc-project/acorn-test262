__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 21,
  "end": 1946,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 21,
      "end": 66,
      "id": {
        "type": "Identifier",
        "start": 31,
        "end": 32,
        "decorators": [],
        "name": "Y",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 33,
        "end": 66,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 35,
            "end": 64,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Literal",
              "start": 35,
              "end": 61,
              "value": "i am a very certain type",
              "raw": "'i am a very certain type'"
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 61,
              "end": 64,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 63,
                "end": 64,
                "typeName": {
                  "type": "Identifier",
                  "start": 63,
                  "end": 64,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 67,
      "end": 91,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 71,
          "end": 90,
          "id": {
            "type": "Identifier",
            "start": 71,
            "end": 75,
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 72,
              "end": 75,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 74,
                "end": 75,
                "typeName": {
                  "type": "Identifier",
                  "start": 74,
                  "end": 75,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "TSTypeAssertion",
            "start": 78,
            "end": 90,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 79,
              "end": 80,
              "typeName": {
                "type": "Identifier",
                "start": 79,
                "end": 80,
                "decorators": [],
                "name": "Y",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            "expression": {
              "type": "Identifier",
              "start": 81,
              "end": 90,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 92,
      "end": 274,
      "id": {
        "type": "Identifier",
        "start": 101,
        "end": 112,
        "decorators": [],
        "name": "destructure",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 112,
        "end": 118,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 113,
            "end": 114,
            "name": {
              "type": "Identifier",
              "start": 113,
              "end": 114,
              "decorators": [],
              "name": "a",
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
            "start": 116,
            "end": 117,
            "name": {
              "type": "Identifier",
              "start": 116,
              "end": 117,
              "decorators": [],
              "name": "r",
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
          "start": 124,
          "end": 140,
          "decorators": [],
          "name": "something",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 133,
            "end": 140,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 135,
              "end": 140,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 135,
                  "end": 136,
                  "typeName": {
                    "type": "Identifier",
                    "start": 135,
                    "end": 136,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 139,
                  "end": 140,
                  "typeName": {
                    "type": "Identifier",
                    "start": 139,
                    "end": 140,
                    "decorators": [],
                    "name": "Y",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        },
        {
          "type": "Identifier",
          "start": 146,
          "end": 172,
          "decorators": [],
          "name": "haveValue",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 155,
            "end": 172,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 157,
              "end": 172,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 158,
                  "end": 166,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 163,
                    "end": 166,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 165,
                      "end": 166,
                      "typeName": {
                        "type": "Identifier",
                        "start": 165,
                        "end": 166,
                        "decorators": [],
                        "name": "a",
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
                "start": 168,
                "end": 172,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 171,
                  "end": 172,
                  "typeName": {
                    "type": "Identifier",
                    "start": 171,
                    "end": 172,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        },
        {
          "type": "Identifier",
          "start": 178,
          "end": 200,
          "decorators": [],
          "name": "haveY",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 183,
            "end": 200,
            "typeAnnotation": {
              "type": "TSFunctionType",
              "start": 185,
              "end": 200,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "start": 186,
                  "end": 194,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 191,
                    "end": 194,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 193,
                      "end": 194,
                      "typeName": {
                        "type": "Identifier",
                        "start": 193,
                        "end": 194,
                        "decorators": [],
                        "name": "Y",
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
                "start": 196,
                "end": 200,
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "start": 199,
                  "end": 200,
                  "typeName": {
                    "type": "Identifier",
                    "start": 199,
                    "end": 200,
                    "decorators": [],
                    "name": "r",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 202,
        "end": 205,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 204,
          "end": 205,
          "typeName": {
            "type": "Identifier",
            "start": 204,
            "end": 205,
            "decorators": [],
            "name": "r",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 206,
        "end": 274,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 212,
            "end": 272,
            "argument": {
              "type": "ConditionalExpression",
              "start": 219,
              "end": 271,
              "test": {
                "type": "BinaryExpression",
                "start": 219,
                "end": 234,
                "left": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 228,
                  "decorators": [],
                  "name": "something",
                  "optional": false,
                  "typeAnnotation": null
                },
                "operator": "===",
                "right": {
                  "type": "Identifier",
                  "start": 233,
                  "end": 234,
                  "decorators": [],
                  "name": "y",
                  "optional": false,
                  "typeAnnotation": null
                }
              },
              "consequent": {
                "type": "CallExpression",
                "start": 237,
                "end": 245,
                "callee": {
                  "type": "Identifier",
                  "start": 237,
                  "end": 242,
                  "decorators": [],
                  "name": "haveY",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "Identifier",
                    "start": 243,
                    "end": 244,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "optional": false
              },
              "alternate": {
                "type": "CallExpression",
                "start": 248,
                "end": 271,
                "callee": {
                  "type": "Identifier",
                  "start": 248,
                  "end": 257,
                  "decorators": [],
                  "name": "haveValue",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "TSTypeAssertion",
                    "start": 258,
                    "end": 270,
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "start": 259,
                      "end": 260,
                      "typeName": {
                        "type": "Identifier",
                        "start": 259,
                        "end": 260,
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    },
                    "expression": {
                      "type": "Identifier",
                      "start": 261,
                      "end": 270,
                      "decorators": [],
                      "name": "something",
                      "optional": false,
                      "typeAnnotation": null
                    }
                  }
                ],
                "optional": false
              }
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 276,
      "end": 332,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 331,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 285,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 288,
            "end": 331,
            "test": {
              "type": "BinaryExpression",
              "start": 288,
              "end": 307,
              "left": {
                "type": "CallExpression",
                "start": 288,
                "end": 301,
                "callee": {
                  "type": "MemberExpression",
                  "start": 288,
                  "end": 299,
                  "object": {
                    "type": "Identifier",
                    "start": 288,
                    "end": 292,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 293,
                    "end": 299,
                    "decorators": [],
                    "name": "random",
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
              "operator": ">",
              "right": {
                "type": "Literal",
                "start": 304,
                "end": 307,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 310,
              "end": 316,
              "value": "hey!",
              "raw": "'hey!'"
            },
            "alternate": {
              "type": "TSTypeAssertion",
              "start": 319,
              "end": 331,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 320,
                "end": 321,
                "typeName": {
                  "type": "Identifier",
                  "start": 320,
                  "end": 321,
                  "decorators": [],
                  "name": "Y",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              },
              "expression": {
                "type": "Identifier",
                "start": 322,
                "end": 331,
                "decorators": [],
                "name": "undefined",
                "optional": false,
                "typeAnnotation": null
              }
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 334,
      "end": 402,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 338,
          "end": 401,
          "id": {
            "type": "Identifier",
            "start": 338,
            "end": 344,
            "decorators": [],
            "name": "result",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 347,
            "end": 401,
            "callee": {
              "type": "Identifier",
              "start": 347,
              "end": 358,
              "decorators": [],
              "name": "destructure",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 359,
                "end": 364,
                "decorators": [],
                "name": "value",
                "optional": false,
                "typeAnnotation": null
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 366,
                "end": 382,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 366,
                    "end": 370,
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 374,
                  "end": 382,
                  "value": "string",
                  "raw": "'string'"
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ArrowFunctionExpression",
                "start": 384,
                "end": 400,
                "expression": true,
                "async": false,
                "typeParameters": null,
                "params": [
                  {
                    "type": "Identifier",
                    "start": 384,
                    "end": 385,
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "returnType": null,
                "body": {
                  "type": "Literal",
                  "start": 389,
                  "end": 400,
                  "value": "other one",
                  "raw": "'other one'"
                },
                "id": null,
                "generator": false
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
      "type": "FunctionDeclaration",
      "start": 447,
      "end": 523,
      "id": {
        "type": "Identifier",
        "start": 456,
        "end": 462,
        "decorators": [],
        "name": "isVoid",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 462,
        "end": 465,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 463,
            "end": 464,
            "name": {
              "type": "Identifier",
              "start": 463,
              "end": 464,
              "decorators": [],
              "name": "a",
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
          "start": 466,
          "end": 481,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 471,
            "end": 481,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 473,
              "end": 481,
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 473,
                  "end": 477
                },
                {
                  "type": "TSTypeReference",
                  "start": 480,
                  "end": 481,
                  "typeName": {
                    "type": "Identifier",
                    "start": 480,
                    "end": 481,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 482,
        "end": 497,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 484,
          "end": 497,
          "parameterName": {
            "type": "Identifier",
            "start": 484,
            "end": 489,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 493,
            "end": 497,
            "typeAnnotation": {
              "type": "TSVoidKeyword",
              "start": 493,
              "end": 497
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 498,
        "end": 523,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 504,
            "end": 521,
            "argument": {
              "type": "Identifier",
              "start": 511,
              "end": 520,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 525,
      "end": 602,
      "id": {
        "type": "Identifier",
        "start": 534,
        "end": 543,
        "decorators": [],
        "name": "isNonVoid",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 543,
        "end": 546,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 544,
            "end": 545,
            "name": {
              "type": "Identifier",
              "start": 544,
              "end": 545,
              "decorators": [],
              "name": "a",
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
          "start": 547,
          "end": 562,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 552,
            "end": 562,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 554,
              "end": 562,
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 554,
                  "end": 558
                },
                {
                  "type": "TSTypeReference",
                  "start": 561,
                  "end": 562,
                  "typeName": {
                    "type": "Identifier",
                    "start": 561,
                    "end": 562,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 564,
        "end": 576,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 566,
          "end": 576,
          "parameterName": {
            "type": "Identifier",
            "start": 566,
            "end": 571,
            "decorators": [],
            "name": "value",
            "optional": false,
            "typeAnnotation": null
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 575,
            "end": 576,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 575,
              "end": 576,
              "typeName": {
                "type": "Identifier",
                "start": 575,
                "end": 576,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 577,
        "end": 602,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 583,
            "end": 600,
            "argument": {
              "type": "Identifier",
              "start": 590,
              "end": 599,
              "decorators": [],
              "name": "undefined",
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 604,
      "end": 750,
      "id": {
        "type": "Identifier",
        "start": 613,
        "end": 617,
        "decorators": [],
        "name": "foo1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 617,
        "end": 620,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 618,
            "end": 619,
            "name": {
              "type": "Identifier",
              "start": 618,
              "end": 619,
              "decorators": [],
              "name": "a",
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
          "start": 621,
          "end": 634,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 626,
            "end": 634,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 628,
              "end": 634,
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 628,
                  "end": 632
                },
                {
                  "type": "TSTypeReference",
                  "start": 633,
                  "end": 634,
                  "typeName": {
                    "type": "Identifier",
                    "start": 633,
                    "end": 634,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 635,
        "end": 641,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 637,
          "end": 641
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 642,
        "end": 750,
        "body": [
          {
            "type": "IfStatement",
            "start": 648,
            "end": 748,
            "test": {
              "type": "CallExpression",
              "start": 652,
              "end": 665,
              "callee": {
                "type": "Identifier",
                "start": 652,
                "end": 658,
                "decorators": [],
                "name": "isVoid",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 659,
                  "end": 664,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 667,
              "end": 706,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 677,
                  "end": 683,
                  "expression": {
                    "type": "Identifier",
                    "start": 677,
                    "end": 682,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 712,
              "end": 748,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 722,
                  "end": 728,
                  "expression": {
                    "type": "Identifier",
                    "start": 722,
                    "end": 727,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
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
      "start": 752,
      "end": 911,
      "id": {
        "type": "Identifier",
        "start": 761,
        "end": 765,
        "decorators": [],
        "name": "baz1",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 765,
        "end": 768,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 766,
            "end": 767,
            "name": {
              "type": "Identifier",
              "start": 766,
              "end": 767,
              "decorators": [],
              "name": "a",
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
          "start": 769,
          "end": 782,
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 774,
            "end": 782,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 776,
              "end": 782,
              "types": [
                {
                  "type": "TSVoidKeyword",
                  "start": 776,
                  "end": 780
                },
                {
                  "type": "TSTypeReference",
                  "start": 781,
                  "end": 782,
                  "typeName": {
                    "type": "Identifier",
                    "start": 781,
                    "end": 782,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 783,
        "end": 789,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 785,
          "end": 789
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 790,
        "end": 911,
        "body": [
          {
            "type": "IfStatement",
            "start": 798,
            "end": 909,
            "test": {
              "type": "CallExpression",
              "start": 802,
              "end": 818,
              "callee": {
                "type": "Identifier",
                "start": 802,
                "end": 811,
                "decorators": [],
                "name": "isNonVoid",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "start": 812,
                  "end": 817,
                  "decorators": [],
                  "name": "value",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "consequent": {
              "type": "BlockStatement",
              "start": 820,
              "end": 860,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 832,
                  "end": 838,
                  "expression": {
                    "type": "Identifier",
                    "start": 832,
                    "end": 837,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            },
            "alternate": {
              "type": "BlockStatement",
              "start": 866,
              "end": 909,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 878,
                  "end": 884,
                  "expression": {
                    "type": "Identifier",
                    "start": 878,
                    "end": 883,
                    "decorators": [],
                    "name": "value",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "directive": null
                }
              ]
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSTypeAliasDeclaration",
      "start": 934,
      "end": 959,
      "id": {
        "type": "Identifier",
        "start": 939,
        "end": 944,
        "decorators": [],
        "name": "Maybe",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 944,
        "end": 947,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 945,
            "end": 946,
            "name": {
              "type": "Identifier",
              "start": 945,
              "end": 946,
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
          }
        ]
      },
      "typeAnnotation": {
        "type": "TSUnionType",
        "start": 950,
        "end": 958,
        "types": [
          {
            "type": "TSTypeReference",
            "start": 950,
            "end": 951,
            "typeName": {
              "type": "Identifier",
              "start": 950,
              "end": 951,
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null
          },
          {
            "type": "TSVoidKeyword",
            "start": 954,
            "end": 958
          }
        ]
      },
      "declare": false
    },
    {
      "type": "FunctionDeclaration",
      "start": 961,
      "end": 1031,
      "id": {
        "type": "Identifier",
        "start": 970,
        "end": 973,
        "decorators": [],
        "name": "get",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 973,
        "end": 976,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 974,
            "end": 975,
            "name": {
              "type": "Identifier",
              "start": 974,
              "end": 975,
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
          "start": 977,
          "end": 988,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 978,
            "end": 988,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 980,
              "end": 988,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 980,
                  "end": 981,
                  "typeName": {
                    "type": "Identifier",
                    "start": 980,
                    "end": 981,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSVoidKeyword",
                  "start": 984,
                  "end": 988
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 989,
        "end": 992,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 991,
          "end": 992,
          "typeName": {
            "type": "Identifier",
            "start": 991,
            "end": 992,
            "decorators": [],
            "name": "U",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
      "body": {
        "type": "BlockStatement",
        "start": 993,
        "end": 1031,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 998,
            "end": 1010,
            "argument": {
              "type": "Literal",
              "start": 1005,
              "end": 1009,
              "value": null,
              "raw": "null"
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1033,
      "end": 1056,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1037,
          "end": 1055,
          "id": {
            "type": "Identifier",
            "start": 1037,
            "end": 1055,
            "decorators": [],
            "name": "foo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1040,
              "end": 1055,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1042,
                "end": 1055,
                "typeName": {
                  "type": "Identifier",
                  "start": 1042,
                  "end": 1047,
                  "decorators": [],
                  "name": "Maybe",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1047,
                  "end": 1055,
                  "params": [
                    {
                      "type": "TSStringKeyword",
                      "start": 1048,
                      "end": 1054
                    }
                  ]
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
      "start": 1057,
      "end": 1080,
      "expression": {
        "type": "CallExpression",
        "start": 1057,
        "end": 1079,
        "callee": {
          "type": "MemberExpression",
          "start": 1057,
          "end": 1077,
          "object": {
            "type": "CallExpression",
            "start": 1057,
            "end": 1065,
            "callee": {
              "type": "Identifier",
              "start": 1057,
              "end": 1060,
              "decorators": [],
              "name": "get",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "start": 1061,
                "end": 1064,
                "decorators": [],
                "name": "foo",
                "optional": false,
                "typeAnnotation": null
              }
            ],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 1066,
            "end": 1077,
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
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1109,
      "end": 1146,
      "id": {
        "type": "Identifier",
        "start": 1119,
        "end": 1122,
        "decorators": [],
        "name": "Man",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1123,
        "end": 1146,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1129,
            "end": 1144,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1129,
              "end": 1134,
              "decorators": [],
              "name": "walks",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1134,
              "end": 1143,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1136,
                "end": 1143
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1148,
      "end": 1186,
      "id": {
        "type": "Identifier",
        "start": 1158,
        "end": 1162,
        "decorators": [],
        "name": "Bear",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1163,
        "end": 1186,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1169,
            "end": 1184,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1169,
              "end": 1174,
              "decorators": [],
              "name": "roars",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1174,
              "end": 1183,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1176,
                "end": 1183
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1188,
      "end": 1225,
      "id": {
        "type": "Identifier",
        "start": 1198,
        "end": 1201,
        "decorators": [],
        "name": "Pig",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1202,
        "end": 1225,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1208,
            "end": 1223,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1208,
              "end": 1213,
              "decorators": [],
              "name": "oinks",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1213,
              "end": 1222,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 1215,
                "end": 1222
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1227,
      "end": 1276,
      "id": {
        "type": "Identifier",
        "start": 1244,
        "end": 1250,
        "decorators": [],
        "name": "pigify",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 1250,
        "end": 1253,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1251,
            "end": 1252,
            "name": {
              "type": "Identifier",
              "start": 1251,
              "end": 1252,
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
          }
        ]
      },
      "params": [
        {
          "type": "Identifier",
          "start": 1254,
          "end": 1265,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1255,
            "end": 1265,
            "typeAnnotation": {
              "type": "TSIntersectionType",
              "start": 1257,
              "end": 1265,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1257,
                  "end": 1258,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1257,
                    "end": 1258,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1261,
                  "end": 1265,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1261,
                    "end": 1265,
                    "decorators": [],
                    "name": "Bear",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1266,
        "end": 1275,
        "typeAnnotation": {
          "type": "TSIntersectionType",
          "start": 1268,
          "end": 1275,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1268,
              "end": 1269,
              "typeName": {
                "type": "Identifier",
                "start": 1268,
                "end": 1269,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1272,
              "end": 1275,
              "typeName": {
                "type": "Identifier",
                "start": 1272,
                "end": 1275,
                "decorators": [],
                "name": "Pig",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          ]
        }
      },
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1277,
      "end": 1305,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1289,
          "end": 1304,
          "id": {
            "type": "Identifier",
            "start": 1289,
            "end": 1304,
            "decorators": [],
            "name": "mbp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1292,
              "end": 1304,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1294,
                "end": 1304,
                "types": [
                  {
                    "type": "TSTypeReference",
                    "start": 1294,
                    "end": 1297,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1294,
                      "end": 1297,
                      "decorators": [],
                      "name": "Man",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  },
                  {
                    "type": "TSTypeReference",
                    "start": 1300,
                    "end": 1304,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1300,
                      "end": 1304,
                      "decorators": [],
                      "name": "Bear",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "typeArguments": null
                  }
                ]
              }
            }
          },
          "init": null,
          "definite": false
        }
      ],
      "declare": true
    },
    {
      "type": "ExpressionStatement",
      "start": 1307,
      "end": 1325,
      "expression": {
        "type": "MemberExpression",
        "start": 1307,
        "end": 1324,
        "object": {
          "type": "CallExpression",
          "start": 1307,
          "end": 1318,
          "callee": {
            "type": "Identifier",
            "start": 1307,
            "end": 1313,
            "decorators": [],
            "name": "pigify",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1314,
              "end": 1317,
              "decorators": [],
              "name": "mbp",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1319,
          "end": 1324,
          "decorators": [],
          "name": "oinks",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 1355,
      "end": 1373,
      "expression": {
        "type": "MemberExpression",
        "start": 1355,
        "end": 1372,
        "object": {
          "type": "CallExpression",
          "start": 1355,
          "end": 1366,
          "callee": {
            "type": "Identifier",
            "start": 1355,
            "end": 1361,
            "decorators": [],
            "name": "pigify",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [
            {
              "type": "Identifier",
              "start": 1362,
              "end": 1365,
              "decorators": [],
              "name": "mbp",
              "optional": false,
              "typeAnnotation": null
            }
          ],
          "optional": false
        },
        "property": {
          "type": "Identifier",
          "start": 1367,
          "end": 1372,
          "decorators": [],
          "name": "walks",
          "optional": false,
          "typeAnnotation": null
        },
        "optional": false,
        "computed": false
      },
      "directive": null
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 1427,
      "end": 1461,
      "id": {
        "type": "Identifier",
        "start": 1437,
        "end": 1442,
        "decorators": [],
        "name": "ITest",
        "optional": false,
        "typeAnnotation": null
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "start": 1443,
        "end": 1461,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 1447,
            "end": 1459,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 1447,
              "end": 1451,
              "decorators": [],
              "name": "name",
              "optional": false,
              "typeAnnotation": null
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1451,
              "end": 1459,
              "typeAnnotation": {
                "type": "TSLiteralType",
                "start": 1453,
                "end": 1459,
                "literal": {
                  "type": "Literal",
                  "start": 1453,
                  "end": 1459,
                  "value": "test",
                  "raw": "'test'"
                }
              }
            },
            "accessibility": null,
            "static": false
          }
        ]
      },
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1463,
      "end": 1557,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1469,
          "end": 1557,
          "id": {
            "type": "Identifier",
            "start": 1469,
            "end": 1484,
            "decorators": [],
            "name": "createTestAsync",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1487,
            "end": 1557,
            "expression": true,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1489,
              "end": 1505,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1491,
                "end": 1505,
                "typeName": {
                  "type": "Identifier",
                  "start": 1491,
                  "end": 1498,
                  "decorators": [],
                  "name": "Promise",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "start": 1498,
                  "end": 1505,
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "start": 1499,
                      "end": 1504,
                      "typeName": {
                        "type": "Identifier",
                        "start": 1499,
                        "end": 1504,
                        "decorators": [],
                        "name": "ITest",
                        "optional": false,
                        "typeAnnotation": null
                      },
                      "typeArguments": null
                    }
                  ]
                }
              }
            },
            "body": {
              "type": "CallExpression",
              "start": 1509,
              "end": 1557,
              "callee": {
                "type": "MemberExpression",
                "start": 1509,
                "end": 1531,
                "object": {
                  "type": "CallExpression",
                  "start": 1509,
                  "end": 1526,
                  "callee": {
                    "type": "MemberExpression",
                    "start": 1509,
                    "end": 1524,
                    "object": {
                      "type": "Identifier",
                      "start": 1509,
                      "end": 1516,
                      "decorators": [],
                      "name": "Promise",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "property": {
                      "type": "Identifier",
                      "start": 1517,
                      "end": 1524,
                      "decorators": [],
                      "name": "resolve",
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
                "property": {
                  "type": "Identifier",
                  "start": 1527,
                  "end": 1531,
                  "decorators": [],
                  "name": "then",
                  "optional": false,
                  "typeAnnotation": null
                },
                "optional": false,
                "computed": false
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 1532,
                  "end": 1556,
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "start": 1539,
                    "end": 1555,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1541,
                        "end": 1553,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1541,
                          "end": 1545,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1547,
                          "end": 1553,
                          "value": "test",
                          "raw": "'test'"
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false
                      }
                    ]
                  },
                  "id": null,
                  "generator": false
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1559,
      "end": 1620,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1565,
          "end": 1620,
          "id": {
            "type": "Identifier",
            "start": 1565,
            "end": 1575,
            "decorators": [],
            "name": "createTest",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1578,
            "end": 1620,
            "expression": false,
            "async": false,
            "typeParameters": null,
            "params": [],
            "returnType": {
              "type": "TSTypeAnnotation",
              "start": 1580,
              "end": 1587,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 1582,
                "end": 1587,
                "typeName": {
                  "type": "Identifier",
                  "start": 1582,
                  "end": 1587,
                  "decorators": [],
                  "name": "ITest",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 1591,
              "end": 1620,
              "body": [
                {
                  "type": "ReturnStatement",
                  "start": 1595,
                  "end": 1618,
                  "argument": {
                    "type": "ObjectExpression",
                    "start": 1602,
                    "end": 1618,
                    "properties": [
                      {
                        "type": "Property",
                        "start": 1604,
                        "end": 1616,
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "start": 1604,
                          "end": 1608,
                          "decorators": [],
                          "name": "name",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "value": {
                          "type": "Literal",
                          "start": 1610,
                          "end": 1616,
                          "value": "test",
                          "raw": "'test'"
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
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1622,
      "end": 1665,
      "id": {
        "type": "Identifier",
        "start": 1639,
        "end": 1641,
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
        "start": 1641,
        "end": 1647,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1642,
            "end": 1643,
            "name": {
              "type": "Identifier",
              "start": 1642,
              "end": 1643,
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
            "start": 1645,
            "end": 1646,
            "name": {
              "type": "Identifier",
              "start": 1645,
              "end": 1646,
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
          "start": 1648,
          "end": 1656,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1649,
            "end": 1656,
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 1651,
              "end": 1656,
              "types": [
                {
                  "type": "TSTypeReference",
                  "start": 1651,
                  "end": 1652,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1651,
                    "end": 1652,
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                },
                {
                  "type": "TSTypeReference",
                  "start": 1655,
                  "end": 1656,
                  "typeName": {
                    "type": "Identifier",
                    "start": 1655,
                    "end": 1656,
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "typeArguments": null
                }
              ]
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 1657,
        "end": 1664,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1659,
          "end": 1664,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1659,
              "end": 1660,
              "typeName": {
                "type": "Identifier",
                "start": 1659,
                "end": 1660,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1663,
              "end": 1664,
              "typeName": {
                "type": "Identifier",
                "start": 1663,
                "end": 1664,
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
      "body": null,
      "expression": false
    },
    {
      "type": "TSDeclareFunction",
      "start": 1666,
      "end": 1711,
      "id": {
        "type": "Identifier",
        "start": 1683,
        "end": 1685,
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
        "start": 1685,
        "end": 1691,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 1686,
            "end": 1687,
            "name": {
              "type": "Identifier",
              "start": 1686,
              "end": 1687,
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
            "start": 1689,
            "end": 1690,
            "name": {
              "type": "Identifier",
              "start": 1689,
              "end": 1690,
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
          "start": 1692,
          "end": 1696,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1693,
            "end": 1696,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1695,
              "end": 1696,
              "typeName": {
                "type": "Identifier",
                "start": 1695,
                "end": 1696,
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
          "start": 1698,
          "end": 1702,
          "decorators": [],
          "name": "y",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 1699,
            "end": 1702,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 1701,
              "end": 1702,
              "typeName": {
                "type": "Identifier",
                "start": 1701,
                "end": 1702,
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
        "start": 1703,
        "end": 1710,
        "typeAnnotation": {
          "type": "TSUnionType",
          "start": 1705,
          "end": 1710,
          "types": [
            {
              "type": "TSTypeReference",
              "start": 1705,
              "end": 1706,
              "typeName": {
                "type": "Identifier",
                "start": 1705,
                "end": 1706,
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            },
            {
              "type": "TSTypeReference",
              "start": 1709,
              "end": 1710,
              "typeName": {
                "type": "Identifier",
                "start": 1709,
                "end": 1710,
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
      "body": null,
      "expression": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1713,
      "end": 1738,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1717,
          "end": 1737,
          "id": {
            "type": "Identifier",
            "start": 1717,
            "end": 1727,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1719,
              "end": 1727,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1721,
                "end": 1727
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 1730,
            "end": 1737,
            "callee": {
              "type": "Identifier",
              "start": 1730,
              "end": 1732,
              "decorators": [],
              "name": "f1",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1733,
                "end": 1736,
                "value": "a",
                "raw": "'a'"
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
      "start": 1739,
      "end": 1769,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1743,
          "end": 1768,
          "id": {
            "type": "Identifier",
            "start": 1743,
            "end": 1753,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1745,
              "end": 1753,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1747,
                "end": 1753
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 1756,
            "end": 1768,
            "callee": {
              "type": "Identifier",
              "start": 1756,
              "end": 1758,
              "decorators": [],
              "name": "f2",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 1759,
                "end": 1762,
                "value": "a",
                "raw": "'a'"
              },
              {
                "type": "Literal",
                "start": 1764,
                "end": 1767,
                "value": "b",
                "raw": "'b'"
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
      "start": 1793,
      "end": 1818,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1799,
          "end": 1817,
          "id": {
            "type": "Identifier",
            "start": 1799,
            "end": 1803,
            "decorators": [],
            "name": "func",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1806,
            "end": 1817,
            "expression": false,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1806,
              "end": 1809,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1807,
                  "end": 1808,
                  "name": {
                    "type": "Identifier",
                    "start": 1807,
                    "end": 1808,
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
                }
              ]
            },
            "params": [],
            "returnType": null,
            "body": {
              "type": "BlockStatement",
              "start": 1815,
              "end": 1817,
              "body": []
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1819,
      "end": 1876,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1825,
          "end": 1875,
          "id": {
            "type": "Identifier",
            "start": 1825,
            "end": 1831,
            "decorators": [],
            "name": "assign",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "start": 1834,
            "end": 1875,
            "expression": true,
            "async": false,
            "typeParameters": {
              "type": "TSTypeParameterDeclaration",
              "start": 1834,
              "end": 1840,
              "params": [
                {
                  "type": "TSTypeParameter",
                  "start": 1835,
                  "end": 1836,
                  "name": {
                    "type": "Identifier",
                    "start": 1835,
                    "end": 1836,
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
                  "start": 1838,
                  "end": 1839,
                  "name": {
                    "type": "Identifier",
                    "start": 1838,
                    "end": 1839,
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
                "start": 1841,
                "end": 1845,
                "decorators": [],
                "name": "a",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1842,
                  "end": 1845,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1844,
                    "end": 1845,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1844,
                      "end": 1845,
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
                "start": 1847,
                "end": 1851,
                "decorators": [],
                "name": "b",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 1848,
                  "end": 1851,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "start": 1850,
                    "end": 1851,
                    "typeName": {
                      "type": "Identifier",
                      "start": 1850,
                      "end": 1851,
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
            "returnType": null,
            "body": {
              "type": "CallExpression",
              "start": 1856,
              "end": 1875,
              "callee": {
                "type": "MemberExpression",
                "start": 1856,
                "end": 1869,
                "object": {
                  "type": "Identifier",
                  "start": 1856,
                  "end": 1862,
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null
                },
                "property": {
                  "type": "Identifier",
                  "start": 1863,
                  "end": 1869,
                  "decorators": [],
                  "name": "assign",
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
                  "start": 1870,
                  "end": 1871,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": null
                },
                {
                  "type": "Identifier",
                  "start": 1873,
                  "end": 1874,
                  "decorators": [],
                  "name": "b",
                  "optional": false,
                  "typeAnnotation": null
                }
              ],
              "optional": false
            },
            "id": null,
            "generator": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 1877,
      "end": 1946,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 1883,
          "end": 1945,
          "id": {
            "type": "Identifier",
            "start": 1883,
            "end": 1916,
            "decorators": [],
            "name": "res",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 1886,
              "end": 1916,
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "start": 1888,
                "end": 1916,
                "types": [
                  {
                    "type": "TSFunctionType",
                    "start": 1889,
                    "end": 1899,
                    "typeParameters": null,
                    "params": [],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "start": 1892,
                      "end": 1899,
                      "typeAnnotation": {
                        "type": "TSVoidKeyword",
                        "start": 1895,
                        "end": 1899
                      }
                    }
                  },
                  {
                    "type": "TSTypeLiteral",
                    "start": 1903,
                    "end": 1916,
                    "members": [
                      {
                        "type": "TSPropertySignature",
                        "start": 1905,
                        "end": 1914,
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "start": 1905,
                          "end": 1909,
                          "decorators": [],
                          "name": "func",
                          "optional": false,
                          "typeAnnotation": null
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "start": 1909,
                          "end": 1914,
                          "typeAnnotation": {
                            "type": "TSAnyKeyword",
                            "start": 1911,
                            "end": 1914
                          }
                        },
                        "accessibility": null,
                        "static": false
                      }
                    ]
                  }
                ]
              }
            }
          },
          "init": {
            "type": "CallExpression",
            "start": 1919,
            "end": 1945,
            "callee": {
              "type": "Identifier",
              "start": 1919,
              "end": 1925,
              "decorators": [],
              "name": "assign",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "ArrowFunctionExpression",
                "start": 1926,
                "end": 1934,
                "expression": false,
                "async": false,
                "typeParameters": null,
                "params": [],
                "returnType": null,
                "body": {
                  "type": "BlockStatement",
                  "start": 1932,
                  "end": 1934,
                  "body": []
                },
                "id": null,
                "generator": false
              },
              {
                "type": "ObjectExpression",
                "start": 1936,
                "end": 1944,
                "properties": [
                  {
                    "type": "Property",
                    "start": 1938,
                    "end": 1942,
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "start": 1938,
                      "end": 1942,
                      "decorators": [],
                      "name": "func",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "value": {
                      "type": "Identifier",
                      "start": 1938,
                      "end": 1942,
                      "decorators": [],
                      "name": "func",
                      "optional": false,
                      "typeAnnotation": null
                    },
                    "method": false,
                    "shorthand": true,
                    "computed": false,
                    "optional": false
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
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
