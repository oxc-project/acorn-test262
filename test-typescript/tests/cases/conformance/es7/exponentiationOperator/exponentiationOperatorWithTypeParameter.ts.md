__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 59,
  "end": 427,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 59,
      "end": 427,
      "id": {
        "type": "Identifier",
        "start": 68,
        "end": 71,
        "name": "foo",
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
          "start": 75,
          "end": 79,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 76,
            "end": 79,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 78,
              "end": 79,
              "typeName": {
                "type": "Identifier",
                "start": 78,
                "end": 79,
                "name": "T",
                "typeAnnotation": null,
                "decorators": [],
                "optional": false
              },
              "typeArguments": null
            }
          },
          "decorators": [],
          "optional": false
        }
      ],
      "body": {
        "type": "BlockStatement",
        "start": 81,
        "end": 427,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 87,
            "end": 98,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 91,
                "end": 97,
                "id": {
                  "type": "Identifier",
                  "start": 91,
                  "end": 97,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 92,
                    "end": 97,
                    "typeAnnotation": {
                      "type": "TSAnyKeyword",
                      "start": 94,
                      "end": 97
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
            "start": 103,
            "end": 118,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 107,
                "end": 117,
                "id": {
                  "type": "Identifier",
                  "start": 107,
                  "end": 117,
                  "name": "b",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 108,
                    "end": 117,
                    "typeAnnotation": {
                      "type": "TSBooleanKeyword",
                      "start": 110,
                      "end": 117
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
            "start": 123,
            "end": 137,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 127,
                "end": 136,
                "id": {
                  "type": "Identifier",
                  "start": 127,
                  "end": 136,
                  "name": "c",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 128,
                    "end": 136,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 130,
                      "end": 136
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
            "start": 142,
            "end": 156,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 146,
                "end": 155,
                "id": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 155,
                  "name": "d",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 147,
                    "end": 155,
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 149,
                      "end": 155
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
            "start": 161,
            "end": 171,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 165,
                "end": 170,
                "id": {
                  "type": "Identifier",
                  "start": 165,
                  "end": 170,
                  "name": "e",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 166,
                    "end": 170,
                    "typeAnnotation": {
                      "type": "TSTypeLiteral",
                      "start": 168,
                      "end": 170,
                      "members": []
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
            "start": 177,
            "end": 195,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 181,
                "end": 194,
                "id": {
                  "type": "Identifier",
                  "start": 181,
                  "end": 185,
                  "name": "r1a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 188,
                  "end": 194,
                  "left": {
                    "type": "Identifier",
                    "start": 188,
                    "end": 189,
                    "name": "a",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "name": "t",
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
            "start": 200,
            "end": 218,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 204,
                "end": 217,
                "id": {
                  "type": "Identifier",
                  "start": 204,
                  "end": 208,
                  "name": "r2a1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 211,
                  "end": 217,
                  "left": {
                    "type": "Identifier",
                    "start": 211,
                    "end": 212,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 216,
                    "end": 217,
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
            "start": 223,
            "end": 241,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 227,
                "end": 240,
                "id": {
                  "type": "Identifier",
                  "start": 227,
                  "end": 231,
                  "name": "r1b1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 234,
                  "end": 240,
                  "left": {
                    "type": "Identifier",
                    "start": 234,
                    "end": 235,
                    "name": "b",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 239,
                    "end": 240,
                    "name": "t",
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
            "start": 246,
            "end": 264,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 250,
                "end": 263,
                "id": {
                  "type": "Identifier",
                  "start": 250,
                  "end": 254,
                  "name": "r2b1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 257,
                  "end": 263,
                  "left": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 258,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
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
            "start": 269,
            "end": 287,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 273,
                "end": 286,
                "id": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 277,
                  "name": "r1c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 280,
                  "end": 286,
                  "left": {
                    "type": "Identifier",
                    "start": 280,
                    "end": 281,
                    "name": "c",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 285,
                    "end": 286,
                    "name": "t",
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
            "start": 292,
            "end": 310,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 296,
                "end": 309,
                "id": {
                  "type": "Identifier",
                  "start": 296,
                  "end": 300,
                  "name": "r2c1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 303,
                  "end": 309,
                  "left": {
                    "type": "Identifier",
                    "start": 303,
                    "end": 304,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
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
            "start": 315,
            "end": 333,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 319,
                "end": 332,
                "id": {
                  "type": "Identifier",
                  "start": 319,
                  "end": 323,
                  "name": "r1d1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 326,
                  "end": 332,
                  "left": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "name": "d",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 331,
                    "end": 332,
                    "name": "t",
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
            "start": 338,
            "end": 356,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 342,
                "end": 355,
                "id": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 346,
                  "name": "r2d1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 349,
                  "end": 355,
                  "left": {
                    "type": "Identifier",
                    "start": 349,
                    "end": 350,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 354,
                    "end": 355,
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
            "start": 361,
            "end": 379,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 365,
                "end": 378,
                "id": {
                  "type": "Identifier",
                  "start": 365,
                  "end": 369,
                  "name": "r1e1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 372,
                  "end": 378,
                  "left": {
                    "type": "Identifier",
                    "start": 372,
                    "end": 373,
                    "name": "e",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 377,
                    "end": 378,
                    "name": "t",
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
            "start": 384,
            "end": 402,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 388,
                "end": 401,
                "id": {
                  "type": "Identifier",
                  "start": 388,
                  "end": 392,
                  "name": "r2e1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 395,
                  "end": 401,
                  "left": {
                    "type": "Identifier",
                    "start": 395,
                    "end": 396,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 400,
                    "end": 401,
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
            "start": 407,
            "end": 425,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 411,
                "end": 424,
                "id": {
                  "type": "Identifier",
                  "start": 411,
                  "end": 415,
                  "name": "r1f1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "BinaryExpression",
                  "start": 418,
                  "end": 424,
                  "left": {
                    "type": "Identifier",
                    "start": 418,
                    "end": 419,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "**",
                  "right": {
                    "type": "Identifier",
                    "start": 423,
                    "end": 424,
                    "name": "t",
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 71,
        "end": 74,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 72,
            "end": 73,
            "name": {
              "type": "Identifier",
              "start": 72,
              "end": 73,
              "name": "T",
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
      "returnType": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
