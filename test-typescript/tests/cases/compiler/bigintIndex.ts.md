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
      "id": {
        "type": "Identifier",
        "start": 10,
        "end": 21,
        "name": "BigIntIndex",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "extends": [],
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 21,
        "end": 24,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 22,
            "end": 23,
            "name": {
              "type": "Identifier",
              "start": 22,
              "end": 23,
              "name": "E",
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
                "name": "index",
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "start": 37,
                  "end": 45,
                  "typeAnnotation": {
                    "type": "TSBigIntKeyword",
                    "start": 39,
                    "end": 45
                  }
                },
                "decorators": [],
                "optional": false
              }
            ],
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
                  "name": "E",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "typeArguments": null
              }
            },
            "readonly": false,
            "static": false,
            "accessibility": null
          }
        ]
      },
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 76,
            "end": 89,
            "name": "arr",
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
            },
            "decorators": [],
            "optional": false
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
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 96,
                "end": 97,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 99,
                "end": 100,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 107,
            "end": 118,
            "name": "num",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 110,
              "end": 118,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 112,
                "end": 118
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 121,
            "end": 127,
            "object": {
              "type": "Identifier",
              "start": 121,
              "end": 124,
              "name": "arr",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Literal",
              "start": 125,
              "end": 126,
              "value": 1,
              "raw": "1"
            },
            "computed": true,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "let",
      "declare": false
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
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 135,
          "end": 143,
          "object": {
            "type": "Identifier",
            "start": 135,
            "end": 138,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 139,
            "end": 142,
            "value": "1",
            "raw": "\"1\""
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
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
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 151,
          "end": 158,
          "object": {
            "type": "Identifier",
            "start": 151,
            "end": 154,
            "name": "arr",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 155,
            "end": 157,
            "value": null,
            "raw": "1n",
            "bigint": "1"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
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
          "name": "num",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 182,
          "end": 195,
          "object": {
            "type": "ArrayExpression",
            "start": 182,
            "end": 191,
            "elements": [
              {
                "type": "Literal",
                "start": 183,
                "end": 184,
                "value": 1,
                "raw": "1"
              },
              {
                "type": "Literal",
                "start": 186,
                "end": 187,
                "value": 2,
                "raw": "2"
              },
              {
                "type": "Literal",
                "start": 189,
                "end": 190,
                "value": 3,
                "raw": "3"
              }
            ]
          },
          "property": {
            "type": "Literal",
            "start": 192,
            "end": 194,
            "value": null,
            "raw": "1n",
            "bigint": "1"
          },
          "computed": true,
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 218,
            "end": 232,
            "name": "key",
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
          "name": "key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 285,
          "end": 288,
          "value": 123,
          "raw": "123"
        }
      },
      "directive": null
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
          "name": "key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 296,
          "end": 301,
          "value": "abc",
          "raw": "\"abc\""
        }
      },
      "directive": null
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
          "name": "key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "CallExpression",
          "start": 309,
          "end": 317,
          "callee": {
            "type": "Identifier",
            "start": 309,
            "end": 315,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
      },
      "directive": null
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
          "name": "key",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 325,
          "end": 329,
          "value": null,
          "raw": "123n",
          "bigint": "123"
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 422,
            "end": 436,
            "name": "bigNum",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 428,
              "end": 436,
              "typeAnnotation": {
                "type": "TSBigIntKeyword",
                "start": 430,
                "end": 436
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 439,
            "end": 441,
            "value": null,
            "raw": "0n",
            "bigint": "0"
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 449,
            "end": 459,
            "name": "typedArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "NewExpression",
            "start": 462,
            "end": 479,
            "callee": {
              "type": "Identifier",
              "start": 466,
              "end": 476,
              "name": "Uint8Array",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Literal",
                "start": 477,
                "end": 478,
                "value": 3,
                "raw": "3"
              }
            ],
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "const",
      "declare": false
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
          "object": {
            "type": "Identifier",
            "start": 481,
            "end": 491,
            "name": "typedArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 492,
            "end": 498,
            "name": "bigNum",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 502,
          "end": 506,
          "value": 170,
          "raw": "0xAA"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 524,
            "end": 534,
            "name": "typedArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "CallExpression",
            "start": 535,
            "end": 549,
            "callee": {
              "type": "Identifier",
              "start": 535,
              "end": 541,
              "name": "String",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [
              {
                "type": "Identifier",
                "start": 542,
                "end": 548,
                "name": "bigNum",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              }
            ],
            "optional": false,
            "typeArguments": null
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 553,
          "end": 557,
          "value": 170,
          "raw": "0xAA"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 559,
            "end": 569,
            "name": "typedArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 570,
            "end": 573,
            "value": "1",
            "raw": "\"1\""
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 577,
          "end": 581,
          "value": 187,
          "raw": "0xBB"
        }
      },
      "directive": null
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
          "object": {
            "type": "Identifier",
            "start": 583,
            "end": 593,
            "name": "typedArray",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Literal",
            "start": 594,
            "end": 595,
            "value": 2,
            "raw": "2"
          },
          "computed": true,
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 599,
          "end": 603,
          "value": 204,
          "raw": "0xCC"
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
