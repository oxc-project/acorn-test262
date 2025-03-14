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
            "key": {
              "type": "Identifier",
              "start": 21,
              "end": 23,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 23,
              "end": 31,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 25,
                "end": 31
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 37,
            "end": 50,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 37,
              "end": 41,
              "decorators": [],
              "name": "fizz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 41,
              "end": 49,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 43,
                "end": 49
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 14,
        "decorators": [],
        "name": "Fizz",
        "optional": false
      }
    },
    {
      "type": "TSInterfaceDeclaration",
      "start": 54,
      "end": 106,
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
            "key": {
              "type": "Identifier",
              "start": 75,
              "end": 77,
              "decorators": [],
              "name": "id",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 77,
              "end": 85,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 79,
                "end": 85
              }
            }
          },
          {
            "type": "TSPropertySignature",
            "start": 91,
            "end": 104,
            "computed": false,
            "key": {
              "type": "Identifier",
              "start": 91,
              "end": 95,
              "decorators": [],
              "name": "buzz",
              "optional": false
            },
            "optional": false,
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 95,
              "end": 103,
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 97,
                "end": 103
              }
            }
          }
        ]
      },
      "declare": false,
      "extends": [],
      "id": {
        "type": "Identifier",
        "start": 64,
        "end": 68,
        "decorators": [],
        "name": "Buzz",
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 108,
      "end": 160,
      "expression": {
        "type": "CallExpression",
        "start": 108,
        "end": 159,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 139,
            "end": 158,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 147,
              "end": 158,
              "operator": "<",
              "left": {
                "type": "MemberExpression",
                "start": 147,
                "end": 154,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 147,
                  "end": 151,
                  "decorators": [],
                  "name": "item",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 154,
                  "decorators": [],
                  "name": "id",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 157,
                "end": 158,
                "raw": "5",
                "value": 5
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 139,
                "end": 143,
                "decorators": [],
                "name": "item",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 108,
          "end": 138,
          "computed": false,
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
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false
                    }
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
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false
                    }
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 132,
            "end": 138,
            "decorators": [],
            "name": "filter",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 222,
      "expression": {
        "type": "CallExpression",
        "start": 161,
        "end": 221,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 201,
            "end": 220,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 209,
              "end": 220,
              "operator": "<",
              "left": {
                "type": "MemberExpression",
                "start": 209,
                "end": 216,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 213,
                  "decorators": [],
                  "name": "item",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 214,
                  "end": 216,
                  "decorators": [],
                  "name": "id",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 219,
                "end": 220,
                "raw": "5",
                "value": 5
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 201,
                "end": 205,
                "decorators": [],
                "name": "item",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 161,
          "end": 200,
          "computed": false,
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
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false
                    }
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
                        "decorators": [],
                        "name": "Buzz",
                        "optional": false
                      }
                    }
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 194,
            "end": 200,
            "decorators": [],
            "name": "filter",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 225,
      "end": 268,
      "expression": {
        "type": "CallExpression",
        "start": 225,
        "end": 267,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 254,
            "end": 266,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 262,
              "end": 266,
              "decorators": [],
              "name": "item",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 254,
                "end": 258,
                "decorators": [],
                "name": "item",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 225,
          "end": 253,
          "computed": false,
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
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false
                    }
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
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false
                    }
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 249,
            "end": 253,
            "decorators": [],
            "name": "find",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 269,
      "end": 316,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 286,
        "end": 292,
        "decorators": [],
        "name": "isFizz",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 293,
          "end": 303,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 294,
            "end": 303,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 296,
              "end": 303
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 304,
        "end": 315,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 306,
          "end": 315,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 306,
            "end": 307,
            "decorators": [],
            "name": "x",
            "optional": false
          },
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
                "decorators": [],
                "name": "Fizz",
                "optional": false
              }
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
        "arguments": [
          {
            "type": "Identifier",
            "start": 346,
            "end": 352,
            "decorators": [],
            "name": "isFizz",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 317,
          "end": 345,
          "computed": false,
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
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false
                    }
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
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false
                    }
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 345,
            "decorators": [],
            "name": "find",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "TSDeclareFunction",
      "start": 355,
      "end": 402,
      "async": false,
      "declare": true,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 372,
        "end": 378,
        "decorators": [],
        "name": "isBuzz",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 379,
          "end": 389,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 380,
            "end": 389,
            "typeAnnotation": {
              "type": "TSUnknownKeyword",
              "start": 382,
              "end": 389
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 390,
        "end": 401,
        "typeAnnotation": {
          "type": "TSTypePredicate",
          "start": 392,
          "end": 401,
          "asserts": false,
          "parameterName": {
            "type": "Identifier",
            "start": 392,
            "end": 393,
            "decorators": [],
            "name": "x",
            "optional": false
          },
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
                "decorators": [],
                "name": "Buzz",
                "optional": false
              }
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
        "arguments": [
          {
            "type": "Identifier",
            "start": 432,
            "end": 438,
            "decorators": [],
            "name": "isBuzz",
            "optional": false
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 403,
          "end": 431,
          "computed": false,
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
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false
                    }
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
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false
                    }
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 427,
            "end": 431,
            "decorators": [],
            "name": "find",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 442,
      "end": 493,
      "expression": {
        "type": "CallExpression",
        "start": 442,
        "end": 492,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 472,
            "end": 491,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 480,
              "end": 491,
              "operator": "<",
              "left": {
                "type": "MemberExpression",
                "start": 480,
                "end": 487,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 480,
                  "end": 484,
                  "decorators": [],
                  "name": "item",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 485,
                  "end": 487,
                  "decorators": [],
                  "name": "id",
                  "optional": false
                }
              },
              "right": {
                "type": "Literal",
                "start": 490,
                "end": 491,
                "raw": "5",
                "value": 5
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 472,
                "end": 476,
                "decorators": [],
                "name": "item",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 442,
          "end": 471,
          "computed": false,
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
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false
                    }
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
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false
                    }
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 466,
            "end": 471,
            "decorators": [],
            "name": "every",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 495,
      "end": 540,
      "expression": {
        "type": "CallExpression",
        "start": 495,
        "end": 539,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 526,
            "end": 538,
            "async": false,
            "body": {
              "type": "Identifier",
              "start": 534,
              "end": 538,
              "decorators": [],
              "name": "item",
              "optional": false
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 526,
                "end": 530,
                "decorators": [],
                "name": "item",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 495,
          "end": 525,
          "computed": false,
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
                      "decorators": [],
                      "name": "Fizz",
                      "optional": false
                    }
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
                      "decorators": [],
                      "name": "Buzz",
                      "optional": false
                    }
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 519,
            "end": 525,
            "decorators": [],
            "name": "reduce",
            "optional": false
          }
        },
        "optional": false
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 543,
      "end": 606,
      "expression": {
        "type": "CallExpression",
        "start": 543,
        "end": 605,
        "arguments": [
          {
            "type": "ArrowFunctionExpression",
            "start": 584,
            "end": 604,
            "async": false,
            "body": {
              "type": "BinaryExpression",
              "start": 592,
              "end": 604,
              "operator": "<",
              "left": {
                "type": "ChainExpression",
                "start": 592,
                "end": 600,
                "expression": {
                  "type": "MemberExpression",
                  "start": 592,
                  "end": 600,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 592,
                    "end": 596,
                    "decorators": [],
                    "name": "item",
                    "optional": false
                  },
                  "optional": true,
                  "property": {
                    "type": "Identifier",
                    "start": 598,
                    "end": 600,
                    "decorators": [],
                    "name": "id",
                    "optional": false
                  }
                }
              },
              "right": {
                "type": "Literal",
                "start": 603,
                "end": 604,
                "raw": "5",
                "value": 5
              }
            },
            "expression": true,
            "generator": false,
            "id": null,
            "params": [
              {
                "type": "Identifier",
                "start": 584,
                "end": 588,
                "decorators": [],
                "name": "item",
                "optional": false
              }
            ]
          }
        ],
        "callee": {
          "type": "MemberExpression",
          "start": 543,
          "end": 583,
          "computed": false,
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
                        "decorators": [],
                        "name": "Fizz",
                        "optional": false
                      }
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
                            "decorators": [],
                            "name": "Buzz",
                            "optional": false
                          }
                        }
                      }
                    ]
                  }
                }
              ]
            }
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 577,
            "end": 583,
            "decorators": [],
            "name": "filter",
            "optional": false
          }
        },
        "optional": false
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
