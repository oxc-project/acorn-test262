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
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null
      },
      "generator": false,
      "async": false,
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
          },
          {
            "type": "TSTypeParameter",
            "start": 140,
            "end": 141,
            "name": {
              "type": "Identifier",
              "start": 140,
              "end": 141,
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null
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
              "decorators": [],
              "name": "V",
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
          "start": 160,
          "end": 164,
          "decorators": [],
          "name": "t",
          "optional": false,
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
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 166,
          "end": 170,
          "decorators": [],
          "name": "u",
          "optional": false,
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
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        },
        {
          "type": "Identifier",
          "start": 172,
          "end": 176,
          "decorators": [],
          "name": "v",
          "optional": false,
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
                "decorators": [],
                "name": "V",
                "optional": false,
                "typeAnnotation": null
              },
              "typeArguments": null
            }
          }
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "start": 178,
        "end": 414,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 184,
            "end": 200,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 188,
                "end": 199,
                "id": {
                  "type": "Identifier",
                  "start": 188,
                  "end": 190,
                  "decorators": [],
                  "name": "r1",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 193,
                  "end": 199,
                  "left": {
                    "type": "Identifier",
                    "start": 193,
                    "end": 194,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 198,
                    "end": 199,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 205,
            "end": 221,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 209,
                "end": 220,
                "id": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 211,
                  "decorators": [],
                  "name": "r2",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 214,
                  "end": 220,
                  "left": {
                    "type": "Identifier",
                    "start": 214,
                    "end": 215,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 219,
                    "end": 220,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 226,
            "end": 242,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 230,
                "end": 241,
                "id": {
                  "type": "Identifier",
                  "start": 230,
                  "end": 232,
                  "decorators": [],
                  "name": "r3",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 235,
                  "end": 241,
                  "left": {
                    "type": "Identifier",
                    "start": 235,
                    "end": 236,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 240,
                    "end": 241,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 248,
            "end": 264,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 252,
                "end": 263,
                "id": {
                  "type": "Identifier",
                  "start": 252,
                  "end": 254,
                  "decorators": [],
                  "name": "r4",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 257,
                  "end": 263,
                  "left": {
                    "type": "Identifier",
                    "start": 257,
                    "end": 258,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 262,
                    "end": 263,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 269,
            "end": 285,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 273,
                "end": 284,
                "id": {
                  "type": "Identifier",
                  "start": 273,
                  "end": 275,
                  "decorators": [],
                  "name": "r5",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 278,
                  "end": 284,
                  "left": {
                    "type": "Identifier",
                    "start": 278,
                    "end": 279,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 283,
                    "end": 284,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 290,
            "end": 306,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 294,
                "end": 305,
                "id": {
                  "type": "Identifier",
                  "start": 294,
                  "end": 296,
                  "decorators": [],
                  "name": "r6",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 299,
                  "end": 305,
                  "left": {
                    "type": "Identifier",
                    "start": 299,
                    "end": 300,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 304,
                    "end": 305,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 312,
            "end": 328,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 316,
                "end": 327,
                "id": {
                  "type": "Identifier",
                  "start": 316,
                  "end": 318,
                  "decorators": [],
                  "name": "r7",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 321,
                  "end": 327,
                  "left": {
                    "type": "Identifier",
                    "start": 321,
                    "end": 322,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 326,
                    "end": 327,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 333,
            "end": 349,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 337,
                "end": 348,
                "id": {
                  "type": "Identifier",
                  "start": 337,
                  "end": 339,
                  "decorators": [],
                  "name": "r8",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 342,
                  "end": 348,
                  "left": {
                    "type": "Identifier",
                    "start": 342,
                    "end": 343,
                    "decorators": [],
                    "name": "u",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 347,
                    "end": 348,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 354,
            "end": 370,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 358,
                "end": 369,
                "id": {
                  "type": "Identifier",
                  "start": 358,
                  "end": 360,
                  "decorators": [],
                  "name": "r9",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 363,
                  "end": 369,
                  "left": {
                    "type": "Identifier",
                    "start": 363,
                    "end": 364,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 368,
                    "end": 369,
                    "decorators": [],
                    "name": "v",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 376,
            "end": 390,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 380,
                "end": 389,
                "id": {
                  "type": "Identifier",
                  "start": 380,
                  "end": 389,
                  "decorators": [],
                  "name": "a",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "start": 381,
                    "end": 389,
                    "typeAnnotation": {
                      "type": "TSNumberKeyword",
                      "start": 383,
                      "end": 389
                    }
                  }
                },
                "init": null,
                "definite": false
              }
            ],
            "declare": false
          },
          {
            "type": "VariableDeclaration",
            "start": 395,
            "end": 412,
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 399,
                "end": 411,
                "id": {
                  "type": "Identifier",
                  "start": 399,
                  "end": 402,
                  "decorators": [],
                  "name": "r10",
                  "optional": false,
                  "typeAnnotation": null
                },
                "init": {
                  "type": "LogicalExpression",
                  "start": 405,
                  "end": 411,
                  "left": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 406,
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "operator": "&&",
                  "right": {
                    "type": "Identifier",
                    "start": 410,
                    "end": 411,
                    "decorators": [],
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "definite": false
              }
            ],
            "declare": false
          }
        ]
      },
      "expression": false
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
