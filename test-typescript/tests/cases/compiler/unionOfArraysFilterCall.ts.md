__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 606,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 52,
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "name": "Fizz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 15,
        "end": 52,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 21,
            "end": 32,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 50,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "name": "fizz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
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
      "start": 54,
      "end": 106,
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 68,
        "name": "Buzz",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": null,
      "body": {
        "type": "TSInterfaceBody",
        "start": 69,
        "end": 106,
        "body": [
          {
            "type": "TSPropertySignature",
            "start": 75,
            "end": 86,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 77,
              "name": "id",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 79,
                "end": 85
              }
            },
            "accessibility": null,
            "static": false
          },
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 104,
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 95,
              "name": "buzz",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
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
      "type": "ExpressionStatement",
      "start": 108,
      "end": 160,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 159,
        "callee": {
          "type": "MemberExpression",
          "start": 108,
          "end": 138,
          "object": {
            "type": "TSAsExpression",
            "start": 109,
            "end": 130,
            "expression": {
              "type": "ArrayExpression",
              "start": 109,
              "end": 111,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 115,
              "end": 130,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 115,
                  "end": 121,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 115,
                    "end": 119,
                    "typeName": {
                      "type": "Identifier",
                      "start": 115,
                      "end": 119,
                      "name": "Fizz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 124,
                  "end": 130,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 124,
                    "end": 128,
                    "typeName": {
                      "type": "Identifier",
                      "start": 124,
                      "end": 128,
                      "name": "Buzz",
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
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 138,
            "name": "filter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 139,
            "end": 158,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 139,
                "end": 143,
                "name": "item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 147,
              "end": 158,
              "left": {
                "type": "MemberExpression",
                "start": 147,
                "end": 154,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 151,
                  "name": "item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 154,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 157,
                "end": 158,
                "value": 5,
                "raw": "5"
              }
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 222,
      "expression": {
        "type": "CallExpression",
        "start": 161,
        "end": 221,
        "callee": {
          "type": "MemberExpression",
          "start": 161,
          "end": 200,
          "object": {
            "type": "TSAsExpression",
            "start": 162,
            "end": 192,
            "expression": {
              "type": "ArrayExpression",
              "start": 162,
              "end": 164,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 168,
              "end": 192,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 168,
                  "end": 174,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 168,
                    "end": 172,
                    "typeName": {
                      "type": "Identifier",
                      "start": 168,
                      "end": 172,
                      "name": "Fizz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSTypeOperator",
                  "start": 177,
                  "end": 192,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSArrayType",
                    "start": 186,
                    "end": 192,
                    "elementType": {
                      "type": "TSTypeReference",
                      "start": 186,
                      "end": 190,
                      "typeName": {
                        "type": "Identifier",
                        "start": 186,
                        "end": 190,
                        "name": "Buzz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  }
                }
              ]
            }
          },
          "property": {
            "type": "Identifier",
            "start": 194,
            "end": 200,
            "name": "filter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 201,
            "end": 220,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 201,
                "end": 205,
                "name": "item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 209,
              "end": 220,
              "left": {
                "type": "MemberExpression",
                "start": 209,
                "end": 216,
                "object": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 213,
                  "name": "item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 216,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 219,
                "end": 220,
                "value": 5,
                "raw": "5"
              }
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 268,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 267,
        "callee": {
          "type": "MemberExpression",
          "start": 225,
          "end": 253,
          "object": {
            "type": "TSAsExpression",
            "start": 226,
            "end": 247,
            "expression": {
              "type": "ArrayExpression",
              "start": 226,
              "end": 228,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 232,
              "end": 247,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 232,
                  "end": 238,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 232,
                    "end": 236,
                    "typeName": {
                      "type": "Identifier",
                      "start": 232,
                      "end": 236,
                      "name": "Fizz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 241,
                  "end": 247,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 241,
                    "end": 245,
                    "typeName": {
                      "type": "Identifier",
                      "start": 241,
                      "end": 245,
                      "name": "Buzz",
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
          "property": {
            "type": "Identifier",
            "start": 249,
            "end": 253,
            "name": "find",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 254,
            "end": 266,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 254,
                "end": 258,
                "name": "item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 262,
              "end": 266,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 269,
      "end": 316,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 292,
        "name": "isFizz",
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
          "start": 293,
          "end": 303,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 294,
            "end": 303,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 296,
              "end": 303
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 304,
        "end": 315,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 306,
          "end": 315,
          "parameterName": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 311,
            "end": 315,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 311,
              "end": 315,
              "typeName": {
                "type": "Identifier",
                "start": 311,
                "end": 315,
                "name": "Fizz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 317,
      "end": 354,
      "expression": {
        "type": "CallExpression",
        "start": 317,
        "end": 353,
        "callee": {
          "type": "MemberExpression",
          "start": 317,
          "end": 345,
          "object": {
            "type": "TSAsExpression",
            "start": 318,
            "end": 339,
            "expression": {
              "type": "ArrayExpression",
              "start": 318,
              "end": 320,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 324,
              "end": 339,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 324,
                  "end": 330,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 324,
                    "end": 328,
                    "typeName": {
                      "type": "Identifier",
                      "start": 324,
                      "end": 328,
                      "name": "Fizz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 333,
                  "end": 339,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 333,
                    "end": 337,
                    "typeName": {
                      "type": "Identifier",
                      "start": 333,
                      "end": 337,
                      "name": "Buzz",
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
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 345,
            "name": "find",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 346,
            "end": 352,
            "name": "isFizz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "TSDeclareFunction",
      "start": 355,
      "end": 402,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 378,
        "name": "isBuzz",
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
          "start": 379,
          "end": 389,
          "name": "x",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 380,
            "end": 389,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 382,
              "end": 389
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": null,
      "declare": true,
      "typeParameters": null,
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 390,
        "end": 401,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 392,
          "end": 401,
          "parameterName": {
            "type": "Identifier",
            "start": 392,
            "end": 393,
            "name": "x",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "asserts": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 397,
            "end": 401,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 397,
              "end": 401,
              "typeName": {
                "type": "Identifier",
                "start": 397,
                "end": 401,
                "name": "Buzz",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 403,
      "end": 440,
      "expression": {
        "type": "CallExpression",
        "start": 403,
        "end": 439,
        "callee": {
          "type": "MemberExpression",
          "start": 403,
          "end": 431,
          "object": {
            "type": "TSAsExpression",
            "start": 404,
            "end": 425,
            "expression": {
              "type": "ArrayExpression",
              "start": 404,
              "end": 406,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 410,
              "end": 425,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 410,
                  "end": 416,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 410,
                    "end": 414,
                    "typeName": {
                      "type": "Identifier",
                      "start": 410,
                      "end": 414,
                      "name": "Fizz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 419,
                  "end": 425,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 419,
                    "end": 423,
                    "typeName": {
                      "type": "Identifier",
                      "start": 419,
                      "end": 423,
                      "name": "Buzz",
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
          "property": {
            "type": "Identifier",
            "start": 427,
            "end": 431,
            "name": "find",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "Identifier",
            "start": 432,
            "end": 438,
            "name": "isBuzz",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 493,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 492,
        "callee": {
          "type": "MemberExpression",
          "start": 442,
          "end": 471,
          "object": {
            "type": "TSAsExpression",
            "start": 443,
            "end": 464,
            "expression": {
              "type": "ArrayExpression",
              "start": 443,
              "end": 445,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 449,
              "end": 464,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 449,
                  "end": 455,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 449,
                    "end": 453,
                    "typeName": {
                      "type": "Identifier",
                      "start": 449,
                      "end": 453,
                      "name": "Fizz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 458,
                  "end": 464,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 458,
                    "end": 462,
                    "typeName": {
                      "type": "Identifier",
                      "start": 458,
                      "end": 462,
                      "name": "Buzz",
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
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 471,
            "name": "every",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 472,
            "end": 491,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 472,
                "end": 476,
                "name": "item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 480,
              "end": 491,
              "left": {
                "type": "MemberExpression",
                "start": 480,
                "end": 487,
                "object": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 484,
                  "name": "item",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "property": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 487,
                  "name": "id",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "computed": false,
                "optional": false
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 490,
                "end": 491,
                "value": 5,
                "raw": "5"
              }
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 540,
      "expression": {
        "type": "CallExpression",
        "start": 495,
        "end": 539,
        "callee": {
          "type": "MemberExpression",
          "start": 495,
          "end": 525,
          "object": {
            "type": "TSAsExpression",
            "start": 496,
            "end": 517,
            "expression": {
              "type": "ArrayExpression",
              "start": 496,
              "end": 498,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 502,
              "end": 517,
              "types": [
                {
                  "type": "TSArrayType",
                  "start": 502,
                  "end": 508,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 502,
                    "end": 506,
                    "typeName": {
                      "type": "Identifier",
                      "start": 502,
                      "end": 506,
                      "name": "Fizz",
                      "typeAnnotation": null,
                      "decorators": [],
                      "optional": false
                    },
                    "typeArguments": null
                  }
                },
                {
                  "type": "TSArrayType",
                  "start": 511,
                  "end": 517,
                  "elementType": {
                    "type": "TSTypeReference",
                    "start": 511,
                    "end": 515,
                    "typeName": {
                      "type": "Identifier",
                      "start": 511,
                      "end": 515,
                      "name": "Buzz",
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
          "property": {
            "type": "Identifier",
            "start": 519,
            "end": 525,
            "name": "reduce",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 526,
            "end": 538,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 526,
                "end": 530,
                "name": "item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "Identifier",
              "start": 534,
              "end": 538,
              "name": "item",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 606,
      "expression": {
        "type": "CallExpression",
        "start": 543,
        "end": 605,
        "callee": {
          "type": "MemberExpression",
          "start": 543,
          "end": 583,
          "object": {
            "type": "TSAsExpression",
            "start": 544,
            "end": 575,
            "expression": {
              "type": "ArrayExpression",
              "start": 544,
              "end": 546,
              "elements": []
            },
            "typeAnnotation": {
              "type": "TSUnionType",
              "start": 550,
              "end": 575,
              "types": [
                {
                  "type": "TSTupleType",
                  "start": 550,
                  "end": 556,
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "start": 551,
                      "end": 555,
                      "typeName": {
                        "type": "Identifier",
                        "start": 551,
                        "end": 555,
                        "name": "Fizz",
                        "typeAnnotation": null,
                        "decorators": [],
                        "optional": false
                      },
                      "typeArguments": null
                    }
                  ]
                },
                {
                  "type": "TSTypeOperator",
                  "start": 559,
                  "end": 575,
                  "operator": "readonly",
                  "typeAnnotation": {
                    "type": "TSTupleType",
                    "start": 568,
                    "end": 575,
                    "elementTypes": [
                      {
                        "type": "TSOptionalType",
                        "start": 569,
                        "end": 574,
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "start": 569,
                          "end": 573,
                          "typeName": {
                            "type": "Identifier",
                            "start": 569,
                            "end": 573,
                            "name": "Buzz",
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
              ]
            }
          },
          "property": {
            "type": "Identifier",
            "start": 577,
            "end": 583,
            "name": "filter",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 584,
            "end": 604,
            "id": null,
            "expression": true,
            "generator": false,
            "async": false,
            "params": [
              {
                "type": "Identifier",
                "start": 584,
                "end": 588,
                "name": "item",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "body": {
              "type": "BinaryExpression",
              "start": 592,
              "end": 604,
              "left": {
                "type": "ChainExpression",
                "start": 592,
                "end": 600,
                "expression": {
                  "type": "MemberExpression",
                  "start": 592,
                  "end": 600,
                  "object": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 596,
                    "name": "item",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 598,
                    "end": 600,
                    "name": "id",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "computed": false,
                  "optional": true
                }
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "start": 603,
                "end": 604,
                "value": 5,
                "raw": "5"
              }
            },
            "typeParameters": null,
            "returnType": null
          }
        ],
        "optional": false,
        "typeArguments": null
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
