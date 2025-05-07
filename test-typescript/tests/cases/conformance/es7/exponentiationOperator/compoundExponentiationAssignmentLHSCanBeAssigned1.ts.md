__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 282,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 18,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 18,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 10,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 13,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "decorators": [],
              "name": "b",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          },
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 16,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "decorators": [],
              "name": "c",
              "optional": false,
              "typeAnnotation": null
            },
            "initializer": null
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 20,
      "end": 31,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 24,
          "end": 30,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 30,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
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
      "start": 32,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 45,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 45,
            "decorators": [],
            "name": "b",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
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
      "start": 47,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 55,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 55,
            "decorators": [],
            "name": "c",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 55,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
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
      "start": 58,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 69,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 69,
            "decorators": [],
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 69,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 66,
                "end": 69
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
      "type": "ExpressionStatement",
      "start": 71,
      "end": 80,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 71,
        "end": 79,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 71,
          "end": 73,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 90,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 89,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 81,
          "end": 83,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 88,
          "end": 89,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 100,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 91,
        "end": 99,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 91,
          "end": 93,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 113,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 101,
        "end": 112,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 101,
          "end": 103,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 108,
          "end": 112,
          "raw": "null",
          "value": null,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 131,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 114,
        "end": 130,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 114,
          "end": 116,
          "decorators": [],
          "name": "x1",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 121,
          "end": 130,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 133,
      "end": 148,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 137,
          "end": 147,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 147,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
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
      "type": "ExpressionStatement",
      "start": 149,
      "end": 158,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 157,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 149,
          "end": 151,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 168,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 159,
        "end": 167,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 159,
          "end": 161,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 178,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 169,
        "end": 177,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 169,
          "end": 171,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 176,
          "end": 177,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 191,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 190,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 179,
          "end": 181,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 186,
          "end": 190,
          "raw": "null",
          "value": null,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 209,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 192,
        "end": 208,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 192,
          "end": 194,
          "decorators": [],
          "name": "x2",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 199,
          "end": 208,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 211,
      "end": 221,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 215,
          "end": 220,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 220,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 219,
                "end": 220,
                "typeArguments": null,
                "typeName": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "decorators": [],
                  "name": "E",
                  "optional": false,
                  "typeAnnotation": null
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
      "type": "ExpressionStatement",
      "start": 222,
      "end": 231,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 222,
        "end": 230,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 222,
          "end": 224,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "decorators": [],
          "name": "a",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 241,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 232,
        "end": 240,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 232,
          "end": 234,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 239,
          "end": 240,
          "decorators": [],
          "name": "b",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 251,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 242,
        "end": 250,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 242,
          "end": 244,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 249,
          "end": 250,
          "decorators": [],
          "name": "c",
          "optional": false,
          "typeAnnotation": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 252,
      "end": 264,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 252,
        "end": 263,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 252,
          "end": 254,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Literal",
          "start": 259,
          "end": 263,
          "raw": "null",
          "value": null,
          "regex": null,
          "bigint": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 282,
      "directive": null,
      "expression": {
        "type": "AssignmentExpression",
        "start": 265,
        "end": 281,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 265,
          "end": 267,
          "decorators": [],
          "name": "x3",
          "optional": false,
          "typeAnnotation": null
        },
        "right": {
          "type": "Identifier",
          "start": 272,
          "end": 281,
          "decorators": [],
          "name": "undefined",
          "optional": false,
          "typeAnnotation": null
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
