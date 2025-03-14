additionOperatorWithUndefinedValueAndInvalidOperands.ts
```json
{
  "type": "Program",
  "start": 106,
  "end": 545,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 106,
      "end": 147,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 127,
        "end": 147,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 129,
            "end": 145,
            "argument": {
              "type": "Identifier",
              "start": 136,
              "end": 145,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "expression": false,
      "generator": false,
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 118,
        "decorators": [],
        "name": "foo",
        "optional": false
      },
      "params": [],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 120,
        "end": 126,
        "typeAnnotation": {
          "type": "TSVoidKeyword",
          "start": 122,
          "end": 126
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 149,
      "end": 164,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 153,
          "end": 163,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 163,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 163,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 165,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 178,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 178,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 170,
              "end": 178,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 172,
                "end": 178,
                "typeName": {
                  "type": "Identifier",
                  "start": 172,
                  "end": 178,
                  "decorators": [],
                  "name": "Object",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 180,
      "end": 192,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 184,
          "end": 191,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 191,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 191,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 187,
                "end": 191
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 193,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 206,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 206,
            "decorators": [],
            "name": "d",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 198,
              "end": 206,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 200,
                "end": 206,
                "typeName": {
                  "type": "Identifier",
                  "start": 200,
                  "end": 206,
                  "decorators": [],
                  "name": "Number",
                  "optional": false
                }
              }
            }
          },
          "init": null
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 239,
      "end": 262,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 243,
          "end": 261,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 245,
            "decorators": [],
            "name": "r1",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 248,
            "end": 261,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 248,
              "end": 257,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "decorators": [],
              "name": "a",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 263,
      "end": 286,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 267,
          "end": 285,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "decorators": [],
            "name": "r2",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 272,
            "end": 285,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 272,
              "end": 281,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "decorators": [],
              "name": "b",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 287,
      "end": 310,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 291,
          "end": 309,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 293,
            "decorators": [],
            "name": "r3",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 296,
            "end": 309,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 296,
              "end": 305,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 311,
      "end": 334,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 315,
          "end": 333,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 317,
            "decorators": [],
            "name": "r4",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 320,
            "end": 333,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "decorators": [],
              "name": "a",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 324,
              "end": 333,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 358,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 357,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 341,
            "decorators": [],
            "name": "r5",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 344,
            "end": 357,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "decorators": [],
              "name": "b",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 348,
              "end": 357,
              "decorators": [],
              "name": "undefined",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 359,
      "end": 382,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 363,
          "end": 381,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 365,
            "decorators": [],
            "name": "r6",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 368,
            "end": 381,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 368,
              "end": 377,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "decorators": [],
              "name": "c",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 399,
      "end": 422,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 403,
          "end": 421,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 405,
            "decorators": [],
            "name": "r7",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 408,
            "end": 421,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 408,
              "end": 417,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "decorators": [],
              "name": "d",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 423,
      "end": 449,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 427,
          "end": 448,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 429,
            "decorators": [],
            "name": "r8",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 432,
            "end": 448,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 432,
              "end": 441,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "Literal",
              "start": 444,
              "end": 448,
              "raw": "true",
              "value": true
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 450,
      "end": 481,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 454,
          "end": 480,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "decorators": [],
            "name": "r9",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 459,
            "end": 480,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 459,
              "end": 468,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "ObjectExpression",
              "start": 471,
              "end": 480,
              "properties": [
                {
                  "type": "Property",
                  "start": 473,
                  "end": 478,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "decorators": [],
                    "name": "a",
                    "optional": false
                  },
                  "kind": "init",
                  "method": false,
                  "optional": false,
                  "shorthand": false,
                  "value": {
                    "type": "Literal",
                    "start": 476,
                    "end": 478,
                    "raw": "''",
                    "value": ""
                  }
                }
              ]
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 482,
      "end": 510,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 486,
          "end": 509,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 489,
            "decorators": [],
            "name": "r10",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 492,
            "end": 509,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 492,
              "end": 501,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "CallExpression",
              "start": 504,
              "end": 509,
              "arguments": [],
              "callee": {
                "type": "Identifier",
                "start": 504,
                "end": 507,
                "decorators": [],
                "name": "foo",
                "optional": false
              },
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 511,
      "end": 545,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 515,
          "end": 544,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 518,
            "decorators": [],
            "name": "r11",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 521,
            "end": 544,
            "operator": "+",
            "left": {
              "type": "Identifier",
              "start": 521,
              "end": 530,
              "decorators": [],
              "name": "undefined",
              "optional": false
            },
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 534,
              "end": 543,
              "async": false,
              "body": {
                "type": "BlockStatement",
                "start": 540,
                "end": 543,
                "body": []
              },
              "expression": false,
              "generator": false,
              "id": null,
              "params": []
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    }
  ],
  "sourceType": "script"
}
```
