__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 494,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 22,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 22,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
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
            "start": 16,
            "end": 17,
            "id": {
              "type": "Identifier",
              "start": 16,
              "end": 17,
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
            "start": 19,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 19,
              "end": 20,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
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
      "type": "TSEnumDeclaration",
      "start": 23,
      "end": 88,
      "id": {
        "type": "Identifier",
        "start": 28,
        "end": 36,
        "decorators": [],
        "name": "Computed",
        "optional": false,
        "typeAnnotation": null
      },
      "body": {
        "type": "TSEnumBody",
        "start": 37,
        "end": 88,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 43,
            "end": 53,
            "id": {
              "type": "Identifier",
              "start": 43,
              "end": 44,
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 47,
              "end": 53,
              "left": {
                "type": "Literal",
                "start": 47,
                "end": 48,
                "value": 1,
                "raw": "1"
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 52,
                "end": 53,
                "value": 1,
                "raw": "1"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 59,
            "end": 69,
            "id": {
              "type": "Identifier",
              "start": 59,
              "end": 60,
              "decorators": [],
              "name": "B",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 63,
              "end": 69,
              "left": {
                "type": "Literal",
                "start": 63,
                "end": 64,
                "value": 1,
                "raw": "1"
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 68,
                "end": 69,
                "value": 2,
                "raw": "2"
              }
            },
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 75,
            "end": 85,
            "id": {
              "type": "Identifier",
              "start": 75,
              "end": 76,
              "decorators": [],
              "name": "C",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": {
              "type": "BinaryExpression",
              "start": 79,
              "end": 85,
              "left": {
                "type": "Literal",
                "start": 79,
                "end": 80,
                "value": 1,
                "raw": "1"
              },
              "operator": "<<",
              "right": {
                "type": "Literal",
                "start": 84,
                "end": 85,
                "value": 3,
                "raw": "3"
              }
            },
            "computed": false
          }
        ]
      },
      "const": false,
      "declare": false
    },
    {
      "type": "VariableDeclaration",
      "start": 89,
      "end": 103,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 93,
          "end": 102,
          "id": {
            "type": "Identifier",
            "start": 93,
            "end": 102,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 102,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 96,
                "end": 102
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
      "start": 104,
      "end": 117,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 108,
          "end": 116,
          "id": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "decorators": [],
            "name": "e",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 109,
              "end": 112,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 111,
                "end": 112,
                "typeName": {
                  "type": "Identifier",
                  "start": 111,
                  "end": 112,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 164,
      "end": 170,
      "expression": {
        "type": "AssignmentExpression",
        "start": 164,
        "end": 169,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 164,
          "end": 165,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 168,
          "end": 169,
          "value": 0,
          "raw": "0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 187,
      "end": 193,
      "expression": {
        "type": "AssignmentExpression",
        "start": 187,
        "end": 192,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 187,
          "end": 188,
          "decorators": [],
          "name": "e",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 191,
          "end": 192,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 265,
      "end": 280,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 269,
          "end": 279,
          "id": {
            "type": "Identifier",
            "start": 269,
            "end": 275,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 270,
              "end": 275,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 272,
                "end": 275,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 272,
                  "end": 275,
                  "left": {
                    "type": "Identifier",
                    "start": 272,
                    "end": 273,
                    "decorators": [],
                    "name": "E",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 274,
                    "end": 275,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 278,
            "end": 279,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 296,
      "end": 302,
      "expression": {
        "type": "AssignmentExpression",
        "start": 296,
        "end": 301,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 296,
          "end": 297,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 300,
          "end": 301,
          "value": 2,
          "raw": "2"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 327,
      "expression": {
        "type": "AssignmentExpression",
        "start": 321,
        "end": 326,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 321,
          "end": 322,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 325,
          "end": 326,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 335,
      "end": 355,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 339,
          "end": 354,
          "id": {
            "type": "Identifier",
            "start": 339,
            "end": 350,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 340,
              "end": 350,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 342,
                "end": 350,
                "typeName": {
                  "type": "Identifier",
                  "start": 342,
                  "end": 350,
                  "decorators": [],
                  "name": "Computed",
                  "optional": false,
                  "typeAnnotation": null
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Identifier",
            "start": 353,
            "end": 354,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": null
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 362,
      "end": 368,
      "expression": {
        "type": "AssignmentExpression",
        "start": 362,
        "end": 367,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 362,
          "end": 363,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 366,
          "end": 367,
          "decorators": [],
          "name": "n",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 375,
      "end": 381,
      "expression": {
        "type": "AssignmentExpression",
        "start": 375,
        "end": 380,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 375,
          "end": 376,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 379,
          "end": 380,
          "value": 4,
          "raw": "4"
        }
      },
      "directive": null
    },
    {
      "type": "VariableDeclaration",
      "start": 388,
      "end": 411,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 392,
          "end": 410,
          "id": {
            "type": "Identifier",
            "start": 392,
            "end": 406,
            "decorators": [],
            "name": "ca",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 394,
              "end": 406,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 396,
                "end": 406,
                "typeName": {
                  "type": "TSQualifiedName",
                  "start": 396,
                  "end": 406,
                  "left": {
                    "type": "Identifier",
                    "start": 396,
                    "end": 404,
                    "decorators": [],
                    "name": "Computed",
                    "optional": false,
                    "typeAnnotation": null
                  },
                  "right": {
                    "type": "Identifier",
                    "start": 405,
                    "end": 406,
                    "decorators": [],
                    "name": "A",
                    "optional": false,
                    "typeAnnotation": null
                  }
                },
                "typeArguments": null
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 409,
            "end": 410,
            "value": 1,
            "raw": "1"
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
