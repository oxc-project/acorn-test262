__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 192,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 23,
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
          "start": 13,
          "end": 14,
          "id": {
            "type": "Identifier",
            "start": 13,
            "end": 14,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": null,
          "computed": false
        },
        {
          "type": "TSEnumMember",
          "start": 20,
          "end": 21,
          "id": {
            "type": "Identifier",
            "start": 20,
            "end": 21,
            "name": "B",
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
        "end": 23,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "name": "A",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": null,
            "computed": false
          },
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 21,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "name": "B",
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
      "start": 25,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 38,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 38,
            "name": "n",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
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
      "start": 40,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 50,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 50,
            "name": "a",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 50,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
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
      "start": 52,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 60,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 60,
            "name": "e",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 57,
              "end": 60,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 59,
                "end": 60,
                "typeName": {
                  "type": "Identifier",
                  "start": 59,
                  "end": 60,
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
      "start": 63,
      "end": 69,
      "expression": {
        "type": "AssignmentExpression",
        "start": 63,
        "end": 68,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 63,
          "end": 64,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 70,
      "end": 78,
      "expression": {
        "type": "AssignmentExpression",
        "start": 70,
        "end": 77,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 70,
          "end": 71,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 74,
          "end": 77,
          "object": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 80,
      "end": 86,
      "expression": {
        "type": "AssignmentExpression",
        "start": 80,
        "end": 85,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 80,
          "end": 81,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 87,
      "end": 93,
      "expression": {
        "type": "AssignmentExpression",
        "start": 87,
        "end": 92,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 87,
          "end": 88,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 102,
      "expression": {
        "type": "AssignmentExpression",
        "start": 94,
        "end": 101,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 94,
          "end": 95,
          "name": "a",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 98,
          "end": 101,
          "object": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 110,
      "expression": {
        "type": "AssignmentExpression",
        "start": 104,
        "end": 109,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 104,
          "end": 105,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 111,
      "end": 119,
      "expression": {
        "type": "AssignmentExpression",
        "start": 111,
        "end": 118,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 111,
          "end": 112,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 115,
          "end": 118,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "name": "A",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 120,
      "end": 128,
      "expression": {
        "type": "AssignmentExpression",
        "start": 120,
        "end": 127,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 120,
          "end": 121,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 124,
          "end": 127,
          "object": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "name": "E",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "name": "B",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 129,
      "end": 135,
      "expression": {
        "type": "AssignmentExpression",
        "start": 129,
        "end": 134,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 129,
          "end": 130,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 133,
          "end": 134,
          "name": "n",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 136,
      "end": 145,
      "expression": {
        "type": "AssignmentExpression",
        "start": 136,
        "end": 144,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 136,
          "end": 137,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 140,
          "end": 144,
          "value": null,
          "raw": "null"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 146,
      "end": 160,
      "expression": {
        "type": "AssignmentExpression",
        "start": 146,
        "end": 159,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 146,
          "end": 147,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 150,
          "end": 159,
          "name": "undefined",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 161,
      "end": 167,
      "expression": {
        "type": "AssignmentExpression",
        "start": 161,
        "end": 166,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 161,
          "end": 162,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 165,
          "end": 166,
          "value": 1,
          "raw": "1"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 168,
      "end": 175,
      "expression": {
        "type": "AssignmentExpression",
        "start": 168,
        "end": 174,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 168,
          "end": 169,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 172,
          "end": 174,
          "value": 1,
          "raw": "1."
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 176,
      "end": 184,
      "expression": {
        "type": "AssignmentExpression",
        "start": 176,
        "end": 183,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 176,
          "end": 177,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 180,
          "end": 183,
          "value": 1,
          "raw": "1.0"
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 185,
      "end": 192,
      "expression": {
        "type": "AssignmentExpression",
        "start": 185,
        "end": 191,
        "operator": "=",
        "left": {
          "type": "Identifier",
          "start": 185,
          "end": 186,
          "name": "e",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 189,
          "end": 191,
          "operator": "-",
          "prefix": true,
          "argument": {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "value": 1,
            "raw": "1"
          }
        }
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
