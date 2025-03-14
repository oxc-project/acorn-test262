bitwiseNotOperatorWithEnumType.ts
```json
{
  "type": "Program",
  "start": 28,
  "end": 356,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 28,
      "end": 51,
      "body": {
        "type": "TSEnumBody",
        "start": 39,
        "end": 51,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 41,
            "end": 42,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 41,
              "end": 42,
              "decorators": [],
              "name": "A",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 44,
            "end": 45,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 44,
              "end": 45,
              "decorators": [],
              "name": "B",
              "optional": false
            }
          },
          {
            "type": "TSEnumMember",
            "start": 47,
            "end": 49,
            "computed": false,
            "id": {
              "type": "Literal",
              "start": 47,
              "end": 49,
              "raw": "\"\"",
              "value": ""
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 33,
        "end": 38,
        "decorators": [],
        "name": "ENUM1",
        "optional": false
      }
    },
    {
      "type": "EmptyStatement",
      "start": 51,
      "end": 52
    },
    {
      "type": "VariableDeclaration",
      "start": 71,
      "end": 100,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 75,
          "end": 99,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 75,
            "end": 90,
            "decorators": [],
            "name": "ResultIsNumber1",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 93,
            "end": 99,
            "argument": {
              "type": "Identifier",
              "start": 94,
              "end": 99,
              "decorators": [],
              "name": "ENUM1",
              "optional": false
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 127,
      "end": 161,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 131,
          "end": 160,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 131,
            "end": 146,
            "decorators": [],
            "name": "ResultIsNumber2",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 149,
            "end": 160,
            "argument": {
              "type": "MemberExpression",
              "start": 150,
              "end": 160,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 150,
                "end": 155,
                "decorators": [],
                "name": "ENUM1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 156,
                "end": 159,
                "raw": "\"A\"",
                "value": "A"
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 162,
      "end": 208,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 166,
          "end": 207,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 166,
            "end": 181,
            "decorators": [],
            "name": "ResultIsNumber3",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 184,
            "end": 207,
            "argument": {
              "type": "BinaryExpression",
              "start": 186,
              "end": 206,
              "operator": "+",
              "left": {
                "type": "MemberExpression",
                "start": 186,
                "end": 193,
                "computed": false,
                "object": {
                  "type": "Identifier",
                  "start": 186,
                  "end": 191,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Identifier",
                  "start": 192,
                  "end": 193,
                  "decorators": [],
                  "name": "A",
                  "optional": false
                }
              },
              "right": {
                "type": "MemberExpression",
                "start": 196,
                "end": 206,
                "computed": true,
                "object": {
                  "type": "Identifier",
                  "start": 196,
                  "end": 201,
                  "decorators": [],
                  "name": "ENUM1",
                  "optional": false
                },
                "optional": false,
                "property": {
                  "type": "Literal",
                  "start": 202,
                  "end": 205,
                  "raw": "\"B\"",
                  "value": "B"
                }
              }
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 234,
      "end": 282,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 238,
          "end": 281,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 238,
            "end": 253,
            "decorators": [],
            "name": "ResultIsNumber4",
            "optional": false
          },
          "init": {
            "type": "UnaryExpression",
            "start": 256,
            "end": 281,
            "argument": {
              "type": "UnaryExpression",
              "start": 257,
              "end": 281,
              "argument": {
                "type": "UnaryExpression",
                "start": 258,
                "end": 281,
                "argument": {
                  "type": "BinaryExpression",
                  "start": 260,
                  "end": 280,
                  "operator": "+",
                  "left": {
                    "type": "MemberExpression",
                    "start": 260,
                    "end": 270,
                    "computed": true,
                    "object": {
                      "type": "Identifier",
                      "start": 260,
                      "end": 265,
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Literal",
                      "start": 266,
                      "end": 269,
                      "raw": "\"A\"",
                      "value": "A"
                    }
                  },
                  "right": {
                    "type": "MemberExpression",
                    "start": 273,
                    "end": 280,
                    "computed": false,
                    "object": {
                      "type": "Identifier",
                      "start": 273,
                      "end": 278,
                      "decorators": [],
                      "name": "ENUM1",
                      "optional": false
                    },
                    "optional": false,
                    "property": {
                      "type": "Identifier",
                      "start": 279,
                      "end": 280,
                      "decorators": [],
                      "name": "B",
                      "optional": false
                    }
                  }
                },
                "operator": "~",
                "prefix": true
              },
              "operator": "~",
              "prefix": true
            },
            "operator": "~",
            "prefix": true
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 313,
      "end": 320,
      "expression": {
        "type": "UnaryExpression",
        "start": 313,
        "end": 319,
        "argument": {
          "type": "Identifier",
          "start": 314,
          "end": 319,
          "decorators": [],
          "name": "ENUM1",
          "optional": false
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 321,
      "end": 333,
      "expression": {
        "type": "UnaryExpression",
        "start": 321,
        "end": 332,
        "argument": {
          "type": "MemberExpression",
          "start": 322,
          "end": 332,
          "computed": true,
          "object": {
            "type": "Identifier",
            "start": 322,
            "end": 327,
            "decorators": [],
            "name": "ENUM1",
            "optional": false
          },
          "optional": false,
          "property": {
            "type": "Literal",
            "start": 328,
            "end": 331,
            "raw": "\"A\"",
            "value": "A"
          }
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 334,
      "end": 356,
      "expression": {
        "type": "SequenceExpression",
        "start": 334,
        "end": 355,
        "expressions": [
          {
            "type": "UnaryExpression",
            "start": 334,
            "end": 342,
            "argument": {
              "type": "MemberExpression",
              "start": 335,
              "end": 342,
              "computed": false,
              "object": {
                "type": "Identifier",
                "start": 335,
                "end": 340,
                "decorators": [],
                "name": "ENUM1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Identifier",
                "start": 341,
                "end": 342,
                "decorators": [],
                "name": "A",
                "optional": false
              }
            },
            "operator": "~",
            "prefix": true
          },
          {
            "type": "UnaryExpression",
            "start": 344,
            "end": 355,
            "argument": {
              "type": "MemberExpression",
              "start": 345,
              "end": 355,
              "computed": true,
              "object": {
                "type": "Identifier",
                "start": 345,
                "end": 350,
                "decorators": [],
                "name": "ENUM1",
                "optional": false
              },
              "optional": false,
              "property": {
                "type": "Literal",
                "start": 351,
                "end": 354,
                "raw": "\"B\"",
                "value": "B"
              }
            },
            "operator": "~",
            "prefix": true
          }
        ]
      }
    }
  ],
  "sourceType": "script"
}
```
