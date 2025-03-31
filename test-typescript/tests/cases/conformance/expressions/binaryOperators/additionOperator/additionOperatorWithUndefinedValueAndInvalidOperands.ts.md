__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 115,
        "end": 118,
        "name": "foo",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "expression": false,
      "generator": false,
      "async": false,
      "params": [],
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
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          }
        ]
      },
      "declare": false,
      "typeParameters": null,
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
          "id": {
            "type": "Identifier",
            "start": 153,
            "end": 163,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 154,
              "end": 163,
              "typeAnnotation": {
                "type": "TSBooleanKeyword",
                "start": 156,
                "end": 163
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
      "type": "VariableDeclaration",
      "start": 165,
      "end": 179,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 178,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 178,
            "name": "b",
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
                  "name": "Object",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 184,
            "end": 191,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 185,
              "end": 191,
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 187,
                "end": 191
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
      "type": "VariableDeclaration",
      "start": 193,
      "end": 207,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 197,
          "end": 206,
          "id": {
            "type": "Identifier",
            "start": 197,
            "end": 206,
            "name": "d",
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
                  "name": "Number",
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
          "init": null,
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 243,
            "end": 245,
            "name": "r1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 248,
            "end": 261,
            "left": {
              "type": "Identifier",
              "start": 248,
              "end": 257,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 260,
              "end": 261,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 267,
            "end": 269,
            "name": "r2",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 272,
            "end": 285,
            "left": {
              "type": "Identifier",
              "start": 272,
              "end": 281,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 284,
              "end": 285,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 291,
            "end": 293,
            "name": "r3",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 296,
            "end": 309,
            "left": {
              "type": "Identifier",
              "start": 296,
              "end": 305,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 308,
              "end": 309,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 315,
            "end": 317,
            "name": "r4",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 320,
            "end": 333,
            "left": {
              "type": "Identifier",
              "start": 320,
              "end": 321,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 324,
              "end": 333,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 341,
            "name": "r5",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 344,
            "end": 357,
            "left": {
              "type": "Identifier",
              "start": 344,
              "end": 345,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 348,
              "end": 357,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 363,
            "end": 365,
            "name": "r6",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 368,
            "end": 381,
            "left": {
              "type": "Identifier",
              "start": 368,
              "end": 377,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 380,
              "end": 381,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 403,
            "end": 405,
            "name": "r7",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 408,
            "end": 421,
            "left": {
              "type": "Identifier",
              "start": 408,
              "end": 417,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Identifier",
              "start": 420,
              "end": 421,
              "name": "d",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 427,
            "end": 429,
            "name": "r8",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 432,
            "end": 448,
            "left": {
              "type": "Identifier",
              "start": 432,
              "end": 441,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 444,
              "end": 448,
              "value": true,
              "raw": "true"
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 454,
            "end": 456,
            "name": "r9",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 459,
            "end": 480,
            "left": {
              "type": "Identifier",
              "start": 459,
              "end": 468,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "ObjectExpression",
              "start": 471,
              "end": 480,
              "properties": [
                {
                  "type": "Property",
                  "start": 473,
                  "end": 478,
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "key": {
                    "type": "Identifier",
                    "start": 473,
                    "end": 474,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "value": {
                    "type": "Literal",
                    "start": 476,
                    "end": 478,
                    "value": "",
                    "raw": "''"
                  },
                  "kind": "init",
                  "optional": false
                }
              ]
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 486,
            "end": 489,
            "name": "r10",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 492,
            "end": 509,
            "left": {
              "type": "Identifier",
              "start": 492,
              "end": 501,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "CallExpression",
              "start": 504,
              "end": 509,
              "callee": {
                "type": "Identifier",
                "start": 504,
                "end": 507,
                "name": "foo",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "arguments": [],
              "optional": false,
              "typeArguments": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 515,
            "end": 518,
            "name": "r11",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 521,
            "end": 544,
            "left": {
              "type": "Identifier",
              "start": 521,
              "end": 530,
              "name": "undefined",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "operator": "+",
            "right": {
              "type": "ArrowFunctionExpression",
              "start": 534,
              "end": 543,
              "id": null,
              "expression": false,
              "generator": false,
              "async": false,
              "params": [],
              "body": {
                "type": "BlockStatement",
                "start": 540,
                "end": 543,
                "body": []
              },
              "typeParameters": null,
              "returnType": null
            }
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
