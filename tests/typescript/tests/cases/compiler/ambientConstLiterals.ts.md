__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 10,
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 10,
        "end": 13,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 11,
            "end": 12,
            "name": {
              "type": "Identifier",
              "start": 11,
              "end": 12,
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
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null
        }
      },
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
              "optional": false,
              "typeAnnotation": null
            }
          }
        ]
      },
      "expression": false
    },
    {
      "type": "TSEnumDeclaration",
      "start": 42,
      "end": 78,
      "id": {
        "type": "Identifier",
        "start": 47,
        "end": 48,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 49,
        "end": 78,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 51,
            "end": 52,
            "id": {
              "type": "Identifier",
              "start": 51,
              "end": 52,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 54,
            "end": 55,
            "id": {
              "type": "Identifier",
              "start": 54,
              "end": 55,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 57,
            "end": 58,
            "id": {
              "type": "Identifier",
              "start": 57,
              "end": 58,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 60,
            "end": 76,
            "id": {
              "type": "Literal",
              "start": 60,
              "end": 76,
              "value": "non identifier",
              "raw": "\"non identifier\""
            },
            "initializer": null,
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 80,
      "end": 97,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 86,
          "end": 96,
          "id": {
            "type": "Identifier",
            "start": 86,
            "end": 88,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 91,
            "end": 96,
            "value": "abc",
            "raw": "\"abc\""
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 98,
      "end": 113,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 104,
          "end": 112,
          "id": {
            "type": "Identifier",
            "start": 104,
            "end": 106,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 109,
            "end": 112,
            "value": 123,
            "raw": "123"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 114,
      "end": 128,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 120,
          "end": 127,
          "id": {
            "type": "Identifier",
            "start": 120,
            "end": 122,
            "decorators": [],
            "name": "c3",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 125,
            "end": 127,
            "decorators": [],
            "name": "c1",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 129,
      "end": 143,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 135,
          "end": 142,
          "id": {
            "type": "Identifier",
            "start": 135,
            "end": 137,
            "decorators": [],
            "name": "c4",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Identifier",
            "start": 140,
            "end": 142,
            "decorators": [],
            "name": "c2",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 144,
      "end": 162,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 150,
          "end": 161,
          "id": {
            "type": "Identifier",
            "start": 150,
            "end": 152,
            "decorators": [],
            "name": "c5",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 155,
            "end": 161,
            "callee": {
              "type": "Identifier",
              "start": 155,
              "end": 156,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "start": 157,
                "end": 160,
                "value": 123,
                "raw": "123"
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
      "start": 163,
      "end": 182,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 169,
          "end": 181,
          "id": {
            "type": "Identifier",
            "start": 169,
            "end": 171,
            "decorators": [],
            "name": "c6",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 174,
            "end": 181,
            "callee": {
              "type": "Identifier",
              "start": 174,
              "end": 175,
              "decorators": [],
              "name": "f",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "UnaryExpression",
                "start": 176,
                "end": 180,
                "operator": "-",
                "argument": {
                  "type": "Literal",
                  "start": 177,
                  "end": 180,
                  "value": 123,
                  "raw": "123"
                },
                "prefix": true
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
      "start": 183,
      "end": 199,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 189,
          "end": 198,
          "id": {
            "type": "Identifier",
            "start": 189,
            "end": 191,
            "decorators": [],
            "name": "c7",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "Literal",
            "start": 194,
            "end": 198,
            "value": true,
            "raw": "true"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 200,
      "end": 215,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 206,
          "end": 214,
          "id": {
            "type": "Identifier",
            "start": 206,
            "end": 208,
            "decorators": [],
            "name": "c8",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 211,
            "end": 214,
            "object": {
              "type": "Identifier",
              "start": 211,
              "end": 212,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Identifier",
              "start": 213,
              "end": 214,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "optional": false,
            "computed": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 216,
      "end": 248,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 222,
          "end": 247,
          "id": {
            "type": "Identifier",
            "start": 222,
            "end": 225,
            "decorators": [],
            "name": "c8b",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "MemberExpression",
            "start": 228,
            "end": 247,
            "object": {
              "type": "Identifier",
              "start": 228,
              "end": 229,
              "decorators": [],
              "name": "E",
              "optional": false,
              "typeAnnotation": null
            },
            "property": {
              "type": "Literal",
              "start": 230,
              "end": 246,
              "value": "non identifier",
              "raw": "\"non identifier\""
            },
            "optional": false,
            "computed": true
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 249,
      "end": 273,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 255,
          "end": 272,
          "id": {
            "type": "Identifier",
            "start": 255,
            "end": 257,
            "decorators": [],
            "name": "c9",
            "optional": false,
            "typeAnnotation": null
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
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "start": 262,
                  "end": 263,
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null
                },
                "value": {
                  "type": "Literal",
                  "start": 265,
                  "end": 270,
                  "value": "abc",
                  "raw": "\"abc\""
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
      "type": "VariableDeclaration",
      "start": 274,
      "end": 292,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 280,
          "end": 291,
          "id": {
            "type": "Identifier",
            "start": 280,
            "end": 283,
            "decorators": [],
            "name": "c10",
            "optional": false,
            "typeAnnotation": null
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
                "value": 123,
                "raw": "123"
              }
            ]
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 293,
      "end": 319,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 299,
          "end": 318,
          "id": {
            "type": "Identifier",
            "start": 299,
            "end": 302,
            "decorators": [],
            "name": "c11",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 305,
            "end": 318,
            "left": {
              "type": "Literal",
              "start": 305,
              "end": 310,
              "value": "abc",
              "raw": "\"abc\""
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 313,
              "end": 318,
              "value": "def",
              "raw": "\"def\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 320,
      "end": 342,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 326,
          "end": 341,
          "id": {
            "type": "Identifier",
            "start": 326,
            "end": 329,
            "decorators": [],
            "name": "c12",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "BinaryExpression",
            "start": 332,
            "end": 341,
            "left": {
              "type": "Literal",
              "start": 332,
              "end": 335,
              "value": 123,
              "raw": "123"
            },
            "operator": "+",
            "right": {
              "type": "Literal",
              "start": 338,
              "end": 341,
              "value": 456,
              "raw": "456"
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 343,
      "end": 391,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 349,
          "end": 390,
          "id": {
            "type": "Identifier",
            "start": 349,
            "end": 352,
            "decorators": [],
            "name": "c13",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 355,
            "end": 390,
            "test": {
              "type": "BinaryExpression",
              "start": 355,
              "end": 374,
              "left": {
                "type": "CallExpression",
                "start": 355,
                "end": 368,
                "callee": {
                  "type": "MemberExpression",
                  "start": 355,
                  "end": 366,
                  "object": {
                    "type": "Identifier",
                    "start": 355,
                    "end": 359,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 360,
                    "end": 366,
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
                "start": 371,
                "end": 374,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 377,
              "end": 382,
              "value": "abc",
              "raw": "\"abc\""
            },
            "alternate": {
              "type": "Literal",
              "start": 385,
              "end": 390,
              "value": "def",
              "raw": "\"def\""
            }
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 392,
      "end": 436,
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 398,
          "end": 435,
          "id": {
            "type": "Identifier",
            "start": 398,
            "end": 401,
            "decorators": [],
            "name": "c14",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "ConditionalExpression",
            "start": 404,
            "end": 435,
            "test": {
              "type": "BinaryExpression",
              "start": 404,
              "end": 423,
              "left": {
                "type": "CallExpression",
                "start": 404,
                "end": 417,
                "callee": {
                  "type": "MemberExpression",
                  "start": 404,
                  "end": 415,
                  "object": {
                    "type": "Identifier",
                    "start": 404,
                    "end": 408,
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "property": {
                    "type": "Identifier",
                    "start": 409,
                    "end": 415,
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
                "start": 420,
                "end": 423,
                "value": 0.5,
                "raw": "0.5"
              }
            },
            "consequent": {
              "type": "Literal",
              "start": 426,
              "end": 429,
              "value": 123,
              "raw": "123"
            },
            "alternate": {
              "type": "Literal",
              "start": 432,
              "end": 435,
              "value": 456,
              "raw": "456"
            }
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
