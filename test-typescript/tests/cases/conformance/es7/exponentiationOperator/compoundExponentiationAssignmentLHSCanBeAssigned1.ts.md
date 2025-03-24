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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 6,
        "name": "E",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 9,
          "end": 10,
          "id": {
            "type": "Identifier",
            "start": 9,
            "end": 10,
            "name": "a",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 12,
          "end": 13,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 13,
            "name": "b",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 15,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 15,
            "end": 16,
            "name": "c",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 18,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 9,
            "end": 10,
            "id": {
              "type": "Identifier",
              "start": 9,
              "end": 10,
              "name": "a",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 13,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 13,
              "name": "b",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 15,
            "end": 16,
            "id": {
              "type": "Identifier",
              "start": 15,
              "end": 16,
              "name": "c",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 24,
            "end": 30,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 25,
              "end": 30,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 27,
                "end": 30
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
      "start": 32,
      "end": 46,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 36,
          "end": 45,
          "id": {
            "type": "Identifier",
            "start": 36,
            "end": 45,
            "name": "b",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 37,
              "end": 45,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 39,
                "end": 45
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
      "start": 47,
      "end": 56,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 51,
          "end": 55,
          "id": {
            "type": "Identifier",
            "start": 51,
            "end": 55,
            "name": "c",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 52,
              "end": 55,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 54,
                "end": 55,
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "name": "E",
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
      "start": 58,
      "end": 70,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 62,
          "end": 69,
          "id": {
            "type": "Identifier",
            "start": 62,
            "end": 69,
            "name": "x1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 64,
              "end": 69,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 66,
                "end": 69
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
      "type": "ExpressionStatement",
      "start": 71,
      "end": 80,
      "expression": {
        "type": "AssignmentExpression",
        "start": 71,
        "end": 79,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 71,
          "end": 73,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 78,
          "end": 79,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 81,
      "end": 90,
      "expression": {
        "type": "AssignmentExpression",
        "start": 81,
        "end": 89,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 81,
          "end": 83,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 88,
          "end": 89,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 91,
      "end": 100,
      "expression": {
        "type": "AssignmentExpression",
        "start": 91,
        "end": 99,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 91,
          "end": 93,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 98,
          "end": 99,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 101,
      "end": 113,
      "expression": {
        "type": "AssignmentExpression",
        "start": 101,
        "end": 112,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 101,
          "end": 103,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 108,
          "end": 112,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 114,
      "end": 131,
      "expression": {
        "type": "AssignmentExpression",
        "start": 114,
        "end": 130,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 114,
          "end": 116,
          "name": "x1",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 121,
          "end": 130,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 137,
            "end": 147,
            "name": "x2",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 139,
              "end": 147,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 141,
                "end": 147
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
      "type": "ExpressionStatement",
      "start": 149,
      "end": 158,
      "expression": {
        "type": "AssignmentExpression",
        "start": 149,
        "end": 157,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 149,
          "end": 151,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 156,
          "end": 157,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 159,
      "end": 168,
      "expression": {
        "type": "AssignmentExpression",
        "start": 159,
        "end": 167,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 159,
          "end": 161,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 166,
          "end": 167,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 169,
      "end": 178,
      "expression": {
        "type": "AssignmentExpression",
        "start": 169,
        "end": 177,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 169,
          "end": 171,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 176,
          "end": 177,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 179,
      "end": 191,
      "expression": {
        "type": "AssignmentExpression",
        "start": 179,
        "end": 190,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 179,
          "end": 181,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 186,
          "end": 190,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 192,
      "end": 209,
      "expression": {
        "type": "AssignmentExpression",
        "start": 192,
        "end": 208,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 192,
          "end": 194,
          "name": "x2",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 199,
          "end": 208,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
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
          "id": {
            "type": "Identifier",
            "start": 215,
            "end": 220,
            "name": "x3",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 217,
              "end": 220,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 219,
                "end": 220,
                "typeName": {
                  "type": "Identifier",
                  "start": 219,
                  "end": 220,
                  "name": "E",
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
      "type": "ExpressionStatement",
      "start": 222,
      "end": 231,
      "expression": {
        "type": "AssignmentExpression",
        "start": 222,
        "end": 230,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 222,
          "end": 224,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 229,
          "end": 230,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 232,
      "end": 241,
      "expression": {
        "type": "AssignmentExpression",
        "start": 232,
        "end": 240,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 232,
          "end": 234,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 239,
          "end": 240,
          "name": "b",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 242,
      "end": 251,
      "expression": {
        "type": "AssignmentExpression",
        "start": 242,
        "end": 250,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 242,
          "end": 244,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 249,
          "end": 250,
          "name": "c",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 252,
      "end": 264,
      "expression": {
        "type": "AssignmentExpression",
        "start": 252,
        "end": 263,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 252,
          "end": 254,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 259,
          "end": 263,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 265,
      "end": 282,
      "expression": {
        "type": "AssignmentExpression",
        "start": 265,
        "end": 281,
        "operator": "**=",
        "left": {
          "type": "Identifier",
          "start": 265,
          "end": 267,
          "name": "x3",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 272,
          "end": 281,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
