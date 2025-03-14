compoundArithmeticAssignmentLHSCanBeAssigned.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 267,
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
              "optional": false
            }
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
              "optional": false
            }
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
              "optional": false
            }
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
        "optional": false
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
                "typeName": {
                  "type": "Identifier",
                  "start": 54,
                  "end": 55,
                  "decorators": [],
                  "name": "E",
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
      "end": 79,
      "expression": {
        "type": "AssignmentExpression",
        "start": 71,
        "end": 78,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 71,
          "end": 73,
          "decorators": [],
          "name": "x1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 77,
          "end": 78,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 88,
      "expression": {
        "type": "AssignmentExpression",
        "start": 80,
        "end": 87,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 80,
          "end": 82,
          "decorators": [],
          "name": "x1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 86,
          "end": 87,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 89,
      "end": 97,
      "expression": {
        "type": "AssignmentExpression",
        "start": 89,
        "end": 96,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 89,
          "end": 91,
          "decorators": [],
          "name": "x1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 95,
          "end": 96,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 98,
      "end": 109,
      "expression": {
        "type": "AssignmentExpression",
        "start": 98,
        "end": 108,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 98,
          "end": 100,
          "decorators": [],
          "name": "x1",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 104,
          "end": 108,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 110,
      "end": 126,
      "expression": {
        "type": "AssignmentExpression",
        "start": 110,
        "end": 125,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 110,
          "end": 112,
          "decorators": [],
          "name": "x1",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 116,
          "end": 125,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 128,
      "end": 143,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 132,
          "end": 142,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 132,
            "end": 142,
            "decorators": [],
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 134,
              "end": 142,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 136,
                "end": 142
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
      "start": 144,
      "end": 152,
      "expression": {
        "type": "AssignmentExpression",
        "start": 144,
        "end": 151,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 144,
          "end": 146,
          "decorators": [],
          "name": "x2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 150,
          "end": 151,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 161,
      "expression": {
        "type": "AssignmentExpression",
        "start": 153,
        "end": 160,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 153,
          "end": 155,
          "decorators": [],
          "name": "x2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 159,
          "end": 160,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 162,
      "end": 170,
      "expression": {
        "type": "AssignmentExpression",
        "start": 162,
        "end": 169,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 162,
          "end": 164,
          "decorators": [],
          "name": "x2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 168,
          "end": 169,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 171,
      "end": 182,
      "expression": {
        "type": "AssignmentExpression",
        "start": 171,
        "end": 181,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 171,
          "end": 173,
          "decorators": [],
          "name": "x2",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 177,
          "end": 181,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 183,
      "end": 199,
      "expression": {
        "type": "AssignmentExpression",
        "start": 183,
        "end": 198,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 183,
          "end": 185,
          "decorators": [],
          "name": "x2",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 189,
          "end": 198,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 201,
      "end": 211,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 205,
          "end": 210,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 205,
            "end": 210,
            "decorators": [],
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 207,
              "end": 210,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 209,
                "end": 210,
                "typeName": {
                  "type": "Identifier",
                  "start": 209,
                  "end": 210,
                  "decorators": [],
                  "name": "E",
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
      "type": "ExpressionStatement",
      "start": 212,
      "end": 220,
      "expression": {
        "type": "AssignmentExpression",
        "start": 212,
        "end": 219,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 212,
          "end": 214,
          "decorators": [],
          "name": "x3",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 218,
          "end": 219,
          "decorators": [],
          "name": "a",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 221,
      "end": 229,
      "expression": {
        "type": "AssignmentExpression",
        "start": 221,
        "end": 228,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 221,
          "end": 223,
          "decorators": [],
          "name": "x3",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 227,
          "end": 228,
          "decorators": [],
          "name": "b",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 230,
      "end": 238,
      "expression": {
        "type": "AssignmentExpression",
        "start": 230,
        "end": 237,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 230,
          "end": 232,
          "decorators": [],
          "name": "x3",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 236,
          "end": 237,
          "decorators": [],
          "name": "c",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 239,
      "end": 250,
      "expression": {
        "type": "AssignmentExpression",
        "start": 239,
        "end": 249,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 239,
          "end": 241,
          "decorators": [],
          "name": "x3",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 245,
          "end": 249,
          "raw": "null",
          "value": null
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 251,
      "end": 267,
      "expression": {
        "type": "AssignmentExpression",
        "start": 251,
        "end": 266,
        "operator": "*=",
        "left": {
          "type": "Identifier",
          "start": 251,
          "end": 253,
          "decorators": [],
          "name": "x3",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 257,
          "end": 266,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
