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
      "body": {
        "type": "TSEnumBody",
        "start": 7,
        "end": 23,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 13,
            "end": 14,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 13,
              "end": 14,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 20,
            "end": 21,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 20,
              "end": 21,
              "decorators": [],
              "name": "B",
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
      "start": 25,
      "end": 39,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 29,
          "end": 38,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 29,
            "end": 38,
            "decorators": [],
            "name": "n",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 30,
              "end": 38,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
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
      "start": 40,
      "end": 51,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 44,
          "end": 50,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 44,
            "end": 50,
            "decorators": [],
            "name": "a",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 45,
              "end": 50,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 47,
                "end": 50
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
      "start": 52,
      "end": 61,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 56,
          "end": 60,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 56,
            "end": 60,
            "decorators": [],
            "name": "e",
            "optional": false,
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
          "decorators": [],
          "name": "n",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 67,
          "end": 68,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "n",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 74,
          "end": 77,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 74,
            "end": 75,
            "decorators": [],
            "name": "E",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 76,
            "end": 77,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 84,
          "end": 85,
          "decorators": [],
          "name": "n",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 91,
          "end": 92,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "a",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 98,
          "end": 101,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 98,
            "end": 99,
            "decorators": [],
            "name": "E",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 100,
            "end": 101,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
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
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 108,
          "end": 109,
          "decorators": [],
          "name": "e",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 115,
          "end": 118,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 115,
            "end": 116,
            "decorators": [],
            "name": "E",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 117,
            "end": 118,
            "decorators": [],
            "name": "A",
            "optional": false
          }
        }
      }
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
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "MemberExpression",
          "start": 124,
          "end": 127,
          "computed": false,
          "object": {
            "type": "Identifier",
            "start": 124,
            "end": 125,
            "decorators": [],
            "name": "E",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Identifier",
            "start": 126,
            "end": 127,
            "decorators": [],
            "name": "B",
            "optional": false
          }
        }
      }
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
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 133,
          "end": 134,
          "decorators": [],
          "name": "n",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 140,
          "end": 144,
          "raw": "null",
          "value": null
        }
      }
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
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 150,
          "end": 159,
          "decorators": [],
          "name": "undefined",
          "optional": false
        }
      }
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
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 165,
          "end": 166,
          "raw": "1",
          "value": 1
        }
      }
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
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 172,
          "end": 174,
          "raw": "1.",
          "value": 1
        }
      }
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
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "Literal",
          "start": 180,
          "end": 183,
          "raw": "1.0",
          "value": 1
        }
      }
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
          "decorators": [],
          "name": "e",
          "optional": false
        },
        "right": {
          "type": "UnaryExpression",
          "start": 189,
          "end": 191,
          "argument": {
            "type": "Literal",
            "start": 190,
            "end": 191,
            "raw": "1",
            "value": 1
          },
          "operator": "-",
          "prefix": true
        }
      }
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
