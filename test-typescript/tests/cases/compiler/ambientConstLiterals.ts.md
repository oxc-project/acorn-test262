ambientConstLiterals.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 436,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 40,
      "async": false,
      "body": {
        "type": "BlockStatement",
        "start": 23,
        "end": 40,
        "body": [
          {
            "type": "ReturnStatement",
            "start": 29,
            "end": 38,
            "argument": {
              "type": "Identifier",
              "start": 36,
              "end": 37,
              "decorators": [],
              "name": "x",
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
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false
      },
      "params": [
        {
          "type": "Identifier",
          "start": 14,
          "end": 18,
          "decorators": [],
          "name": "x",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 15,
            "end": 18,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 17,
              "end": 18,
              "typeName": {
                "type": "Identifier",
                "start": 17,
                "end": 18,
                "decorators": [],
                "name": "T",
                "optional": false
              }
            }
          }
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "start": 19,
        "end": 22,
        "typeAnnotation": {
          "type": "TSTypeReference",
          "start": 21,
          "end": 22,
          "typeName": {
            "type": "Identifier",
            "start": 21,
            "end": 22,
            "decorators": [],
            "name": "T",
            "optional": false
          }
        }
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "const": false,
            "in": false,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
              "decorators": [],
              "name": "T",
              "optional": false
            },
            "out": false
          }
        ]
      }
    },
    {
      "type": "TSEnumDeclaration",
      "start": 42,
      "end": 78,
      "body": {
        "type": "TSEnumBody",
        "start": 49,
        "end": 78,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 51,
            "end": 52,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 54,
            "end": 55,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 57,
            "end": 58,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "C",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 60,
            "end": 76,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 60,
              "end": 76,
              "raw": "\"non identifier\"",
              "value": "non identifier"
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "E",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 97,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 96,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 88,
            "decorators": [],
            "name": "c1",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 91,
            "end": 96,
            "raw": "\"abc\"",
            "value": "abc"
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 113,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 112,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 106,
            "decorators": [],
            "name": "c2",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 109,
            "end": 112,
            "raw": "123",
            "value": 123
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 128,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 127,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 122,
            "decorators": [],
            "name": "c3",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 125,
            "end": 127,
            "decorators": [],
            "name": "c1",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 137,
            "decorators": [],
            "name": "c4",
            "optional": false
          },
          "init": {
            "type": "Identifier",
            "start": 140,
            "end": 142,
            "decorators": [],
            "name": "c2",
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 162,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 161,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 152,
            "decorators": [],
            "name": "c5",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 155,
            "end": 161,
            "arguments": [
              {
                "type": "Literal",
                "start": 157,
                "end": 160,
                "raw": "123",
                "value": 123
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 163,
      "end": 182,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 181,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 171,
            "decorators": [],
            "name": "c6",
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 174,
            "end": 181,
            "arguments": [
              {
                "type": "UnaryExpression",
                "start": 176,
                "end": 180,
                "argument": {
                  "type": "Literal",
                  "start": 177,
                  "end": 180,
                  "raw": "123",
                  "value": 123
                },
                "operator": "-",
                "prefix": true
              }
            ],
            "callee": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "f",
              "optional": false
            },
            "optional": false
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 183,
      "end": 199,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 198,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "c7",
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 194,
            "end": 198,
            "raw": "true",
            "value": true
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 215,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 214,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "decorators": [],
            "name": "c8",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 211,
            "end": 214,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 248,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 247,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 225,
            "decorators": [],
            "name": "c8b",
            "optional": false
          },
          "init": {
            "type": "MemberExpression",
            "start": 228,
            "end": 247,
            "computed": true,
            "object": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "E",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Literal",
              "start": 230,
              "end": 246,
              "raw": "\"non identifier\"",
              "value": "non identifier"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 273,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 272,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 257,
            "decorators": [],
            "name": "c9",
            "optional": false
          },
          "init": {
            "type": "ObjectExpression",
            "start": 260,
            "end": 272,
            "properties": [
              {
                "type": "Property",
                "start": 262,
                "end": 270,
                "computed": false,
                "key": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "decorators": [],
                  "name": "x",
                  "optional": false
                },
                "kind": "init",
                "method": false,
                "optional": false,
                "shorthand": false,
                "value": {
                  "type": "Literal",
                  "start": 265,
                  "end": 270,
                  "raw": "\"abc\"",
                  "value": "abc"
                }
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
      "start": 274,
      "end": 292,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 291,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 283,
            "decorators": [],
            "name": "c10",
            "optional": false
          },
          "init": {
            "type": "ArrayExpression",
            "start": 286,
            "end": 291,
            "elements": [
              {
                "type": "Literal",
                "start": 287,
                "end": 290,
                "raw": "123",
                "value": 123
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
      "start": 293,
      "end": 319,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 318,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 302,
            "decorators": [],
            "name": "c11",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 305,
            "end": 318,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 305,
              "end": 310,
              "raw": "\"abc\"",
              "value": "abc"
            },
            "right": {
              "type": "Literal",
              "start": 313,
              "end": 318,
              "raw": "\"def\"",
              "value": "def"
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 342,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 341,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 329,
            "decorators": [],
            "name": "c12",
            "optional": false
          },
          "init": {
            "type": "BinaryExpression",
            "start": 332,
            "end": 341,
            "operator": "+",
            "left": {
              "type": "Literal",
              "start": 332,
              "end": 335,
              "raw": "123",
              "value": 123
            },
            "right": {
              "type": "Literal",
              "start": 338,
              "end": 341,
              "raw": "456",
              "value": 456
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 343,
      "end": 391,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 390,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 352,
            "decorators": [],
            "name": "c13",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 355,
            "end": 390,
            "alternate": {
              "type": "Literal",
              "start": 385,
              "end": 390,
              "raw": "\"def\"",
              "value": "def"
            },
            "consequent": {
              "type": "Literal",
              "start": 377,
              "end": 382,
              "raw": "\"abc\"",
              "value": "abc"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 355,
              "end": 374,
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "start": 355,
                "end": 368,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 355,
                  "end": 366,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 359,
                    "decorators": [],
                    "name": "Math",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 360,
                    "end": 366,
                    "decorators": [],
                    "name": "random",
                    "optional": false
                  }
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 371,
                "end": 374,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 436,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 435,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 401,
            "decorators": [],
            "name": "c14",
            "optional": false
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 404,
            "end": 435,
            "alternate": {
              "type": "Literal",
              "start": 432,
              "end": 435,
              "raw": "456",
              "value": 456
            },
            "consequent": {
              "type": "Literal",
              "start": 426,
              "end": 429,
              "raw": "123",
              "value": 123
            },
            "test": {
              "type": "BinaryExpression",
              "start": 404,
              "end": 423,
              "operator": ">",
              "left": {
                "type": "CallExpression",
                "start": 404,
                "end": 417,
                "arguments": [],
                "callee": {
                  "type": "MemberExpression",
                  "start": 404,
                  "end": 415,
                  "computed": false,
                  "object": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 408,
                    "decorators": [],
                    "name": "Math",
                    "optional": false
                  },
                  "optional": false,
                  "property": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 415,
                    "decorators": [],
                    "name": "random",
                    "optional": false
                  }
                },
                "optional": false
              },
              "right": {
                "type": "Literal",
                "start": 420,
                "end": 423,
                "raw": "0.5",
                "value": 0.5
              }
            }
          }
        }
      ],
      "declare": false,
      "kind": "const"
    }
  ],
  "sourceType": "script"
}
```
