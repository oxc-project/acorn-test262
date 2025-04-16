__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 124,
  "end": 414,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 124,
      "end": 414,
      "id": {
        "type": "Identifier",
        "start": 133,
        "end": 136,
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
          "start": 160,
          "end": 164,
          "name": "t",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 161,
            "end": 164,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 163,
              "end": 164,
              "typeName": {
                "type": "Identifier",
                "start": 163,
                "end": 164,
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
        },
        {
          "type": "Identifier",
          "start": 166,
          "end": 170,
          "name": "u",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 167,
            "end": 170,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 169,
              "end": 170,
              "typeName": {
                "type": "Identifier",
                "start": 169,
                "end": 170,
                "name": "U",
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
        {
          "type": "Identifier",
          "start": 172,
          "end": 176,
          "name": "v",
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "start": 173,
            "end": 176,
            "typeAnnotation": {
              "type": "TSTypeReference",
              "start": 175,
              "end": 176,
              "typeName": {
                "type": "Identifier",
                "start": 175,
                "end": 176,
                "name": "V",
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
        "start": 178,
        "end": 414,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 184,
            "end": 200,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 188,
                "end": 199,
                "id": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 190,
                  "name": "r1",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 193,
                  "end": 199,
                  "left": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
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
            "start": 205,
            "end": 221,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 209,
                "end": 220,
                "id": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 211,
                  "name": "r2",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 214,
                  "end": 220,
                  "left": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 220,
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
            "start": 226,
            "end": 242,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 241,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 232,
                  "name": "r3",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 235,
                  "end": 241,
                  "left": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
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
            "start": 248,
            "end": 264,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 252,
                "end": 263,
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 254,
                  "name": "r4",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
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
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "name": "u",
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
            "end": 285,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 273,
                "end": 284,
                "id": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 275,
                  "name": "r5",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 278,
                  "end": 284,
                  "left": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 279,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 284,
                    "name": "u",
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
            "start": 290,
            "end": 306,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 294,
                "end": 305,
                "id": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 296,
                  "name": "r6",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 299,
                  "end": 305,
                  "left": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 300,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 305,
                    "name": "u",
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
            "start": 312,
            "end": 328,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 316,
                "end": 327,
                "id": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 318,
                  "name": "r7",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 321,
                  "end": 327,
                  "left": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 322,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "name": "v",
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
            "start": 333,
            "end": 349,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 337,
                "end": 348,
                "id": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 339,
                  "name": "r8",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 342,
                  "end": 348,
                  "left": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 343,
                    "name": "u",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 348,
                    "name": "v",
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
            "start": 354,
            "end": 370,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 358,
                "end": 369,
                "id": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 360,
                  "name": "r9",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 363,
                  "end": 369,
                  "left": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 364,
                    "name": "v",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "name": "v",
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
            "start": 376,
            "end": 390,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 380,
                "end": 389,
                "id": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 389,
                  "name": "a",
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 381,
                    "end": 389,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 383,
                      "end": 389
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
            "start": 395,
            "end": 412,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 399,
                "end": 411,
                "id": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 402,
                  "name": "r10",
                  "typeAnnotation": null,
                  "decorators": [],
                  "optional": false
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 405,
                  "end": 411,
                  "left": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 406,
                    "name": "t",
                    "typeAnnotation": null,
                    "decorators": [],
                    "optional": false
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
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
          }
        ]
      },
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "start": 136,
        "end": 159,
        "params": [
          {
            "type": "TSTypeParameter",
            "start": 137,
            "end": 138,
            "name": {
              "type": "Identifier",
              "start": 137,
              "end": 138,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 141,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "name": "U",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false
          },
          {
            "type": "TSTypeParameter",
            "start": 143,
            "end": 144,
            "name": {
              "type": "Identifier",
              "start": 143,
              "end": 144,
              "name": "V",
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
