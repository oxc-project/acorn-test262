__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 605,
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "start": 0,
      "end": 68,
      "body": {
        "type": "TSInterfaceBody",
        "start": 25,
        "end": 68,
        "body": [
          {
            "type": "TSIndexSignature",
            "start": 31,
            "end": 50,
            "parameters": [
              {
                "type": "Identifier",
                "start": 32,
                "end": 45,
                "decorators": [],
                "name": "index",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 37,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSBigIntKeyword",
                    "start": 39,
                    "end": 45
                  }
                }
              }
            ],
            "readonly": false,
            "static": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 46,
              "end": 49,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 48,
                "end": 49,
                "typeName": {
                  "type": "Identifier",
                  "start": 48,
                  "end": 49,
                  "decorators": [],
                  "name": "E",
                  "optional": false
                }
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
        "end": 21,
        "decorators": [],
        "name": "BigIntIndex",
        "optional": false
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 70,
      "end": 102,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 76,
          "end": 101,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 89,
            "decorators": [],
            "name": "arr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 79,
              "end": 89,
              "typeAnnotation": {
                "type": "TSArrayType",
                "start": 81,
                "end": 89,
                "elementType": {
                  "type": "TSNumberKeyword",
                  "start": 81,
                  "end": 87
                }
              }
            }
          },
          "init": {
            "type": "ArrayExpression",
            "start": 92,
            "end": 101,
            "elements": [
              {
                "type": "Literal",
                "start": 93,
                "end": 94,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 96,
                "end": 97,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "raw": "3",
                "value": 3
              }
            ]
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 103,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 107,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 118,
            "decorators": [],
            "name": "num",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 121,
            "end": 127,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "decorators": [],
              "name": "arr",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 125,
              "end": 126,
              "raw": "1",
              "value": 1
            }
          }
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 144,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 143,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 132,
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 135,
          "end": 143,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 135,
            "end": 138,
            "decorators": [],
            "name": "arr",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 139,
            "end": 142,
            "raw": "\"1\"",
            "value": "1"
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 145,
      "end": 159,
      "expression": {
        "type": "AssignmentExpression",
        "start": 145,
        "end": 158,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 145,
          "end": 148,
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 151,
          "end": 158,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 151,
            "end": 154,
            "decorators": [],
            "name": "arr",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 155,
            "end": 157,
            "bigint": "1",
            "raw": "1n",
            "value": null
          }
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 196,
      "expression": {
        "type": "AssignmentExpression",
        "start": 176,
        "end": 195,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 176,
          "end": 179,
          "decorators": [],
          "name": "num",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 182,
          "end": 195,
          "computed": true,
          "object": {
            "type": "ArrayExpression",
            "start": 182,
            "end": 191,
            "elements": [
              {
                "type": "Literal",
                "start": 183,
                "end": 184,
                "raw": "1",
                "value": 1
              },
              {
                "type": "Literal",
                "start": 186,
                "end": 187,
                "raw": "2",
                "value": 2
              },
              {
                "type": "Literal",
                "start": 189,
                "end": 190,
                "raw": "3",
                "value": 3
              }
            ]
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 192,
            "end": 194,
            "bigint": "1",
            "raw": "1n",
            "value": null
          }
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 214,
      "end": 233,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 218,
          "end": 232,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 232,
            "decorators": [],
            "name": "key",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 221,
              "end": 232,
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "start": 223,
                "end": 232,
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSAnyKeyword",
                  "start": 229,
                  "end": 232
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "let"
    },
    {
      "type": "ExpressionStatement",
      "start": 279,
      "end": 289,
      "expression": {
        "type": "AssignmentExpression",
        "start": 279,
        "end": 288,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 279,
          "end": 282,
          "decorators": [],
          "name": "key",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 285,
          "end": 288,
          "raw": "123",
          "value": 123
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 290,
      "end": 302,
      "expression": {
        "type": "AssignmentExpression",
        "start": 290,
        "end": 301,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 290,
          "end": 293,
          "decorators": [],
          "name": "key",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 296,
          "end": 301,
          "raw": "\"abc\"",
          "value": "abc"
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 303,
      "end": 318,
      "expression": {
        "type": "AssignmentExpression",
        "start": 303,
        "end": 317,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 303,
          "end": 306,
          "decorators": [],
          "name": "key",
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 309,
          "end": 317,
          "arguments": [],
          "callee": {
            "type": "Identifier",
            "start": 309,
            "end": 315,
            "decorators": [],
            "name": "Symbol",
            "optional": false
          },
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 319,
      "end": 330,
      "expression": {
        "type": "AssignmentExpression",
        "start": 319,
        "end": 329,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 319,
          "end": 322,
          "decorators": [],
          "name": "key",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 325,
          "end": 329,
          "bigint": "123",
          "raw": "123n",
          "value": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 416,
      "end": 442,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 422,
          "end": 441,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 436,
            "decorators": [],
            "name": "bigNum",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 436,
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 430,
                "end": 436
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 439,
            "end": 441,
            "bigint": "0",
            "raw": "0n",
            "value": null
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 443,
      "end": 480,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 449,
          "end": 479,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 459,
            "decorators": [],
            "name": "typedArray",
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 462,
            "end": 479,
            "arguments": [
              {
                "type": "Literal",
                "start": 477,
                "end": 478,
                "raw": "3",
                "value": 3
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 466,
              "end": 476,
              "decorators": [],
              "name": "Uint8Array",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "ExpressionStatement",
      "start": 481,
      "end": 507,
      "expression": {
        "type": "AssignmentExpression",
        "start": 481,
        "end": 506,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 481,
          "end": 499,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 481,
            "end": 491,
            "decorators": [],
            "name": "typedArray",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 492,
            "end": 498,
            "decorators": [],
            "name": "bigNum",
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 502,
          "end": 506,
          "raw": "0xAA",
          "value": 170
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 524,
      "end": 558,
      "expression": {
        "type": "AssignmentExpression",
        "start": 524,
        "end": 557,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 524,
          "end": 550,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 524,
            "end": 534,
            "decorators": [],
            "name": "typedArray",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "CallExpression",
            "start": 535,
            "end": 549,
            "arguments": [
              {
                "type": "Identifier",
                "start": 542,
                "end": 548,
                "decorators": [],
                "name": "bigNum",
                "optional": false
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 535,
              "end": 541,
              "decorators": [],
              "name": "String",
              "optional": false
            },
            "optional": false
          }
        },
        "right": {
          "type": "Literal",
          "start": 553,
          "end": 557,
          "raw": "0xAA",
          "value": 170
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 559,
      "end": 582,
      "expression": {
        "type": "AssignmentExpression",
        "start": 559,
        "end": 581,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 559,
          "end": 574,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 559,
            "end": 569,
            "decorators": [],
            "name": "typedArray",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 570,
            "end": 573,
            "raw": "\"1\"",
            "value": "1"
          }
        },
        "right": {
          "type": "Literal",
          "start": 577,
          "end": 581,
          "raw": "0xBB",
          "value": 187
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 583,
      "end": 604,
      "expression": {
        "type": "AssignmentExpression",
        "start": 583,
        "end": 603,
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "start": 583,
          "end": 596,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 583,
            "end": 593,
            "decorators": [],
            "name": "typedArray",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 594,
            "end": 595,
            "raw": "2",
            "value": 2
          }
        },
        "right": {
          "type": "Literal",
          "start": 599,
          "end": 603,
          "raw": "0xCC",
          "value": 204
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
