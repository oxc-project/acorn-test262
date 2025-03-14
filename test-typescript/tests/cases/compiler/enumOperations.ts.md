enumOperations.ts
```json
{
  "type": "Program",
  "start": 0,
  "end": 285,
  "body": [
    {
      "type": "TSEnumDeclaration",
      "start": 0,
      "end": 22,
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 22,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 20,
            "computed": false,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 16,
              "decorators": [],
              "name": "None",
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "raw": "0",
              "value": 0
            }
          }
        ]
      },
      "const": false,
      "declare": false,
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "decorators": [],
        "name": "Enum",
        "optional": false
      }
    },
    {
      "type": "VariableDeclaration",
      "start": 23,
      "end": 54,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 27,
          "end": 53,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 41,
            "decorators": [],
            "name": "enumType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 35,
              "end": 41,
              "typeAnnotation": {
                "type": "TSTypeReference",
                "start": 37,
                "end": 41,
                "typeName": {
                  "type": "Identifier",
                  "start": 37,
                  "end": 41,
                  "decorators": [],
                  "name": "Enum",
                  "optional": false
                }
              }
            }
          },
          "init": {
            "type": "MemberExpression",
            "start": 44,
            "end": 53,
            "computed": false,
            "object": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "decorators": [],
              "name": "Enum",
              "optional": false
            },
            "optional": false,
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 53,
              "decorators": [],
              "name": "None",
              "optional": false
            }
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 55,
      "end": 82,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 59,
          "end": 81,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 77,
            "decorators": [],
            "name": "numberType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 71,
                "end": 77
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 81,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "VariableDeclaration",
      "start": 83,
      "end": 104,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 87,
          "end": 103,
          "definite": false,
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 99,
            "decorators": [],
            "name": "anyType",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 99,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 96,
                "end": 99
              }
            }
          },
          "init": {
            "type": "Literal",
            "start": 102,
            "end": 103,
            "raw": "0",
            "value": 0
          }
        }
      ],
      "declare": false,
      "kind": "var"
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 129,
      "expression": {
        "type": "BinaryExpression",
        "start": 107,
        "end": 128,
        "operator": "^",
        "left": {
          "type": "Identifier",
          "start": 107,
          "end": 115,
          "decorators": [],
          "name": "enumType",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 118,
          "end": 128,
          "decorators": [],
          "name": "numberType",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 151,
      "expression": {
        "type": "BinaryExpression",
        "start": 130,
        "end": 150,
        "operator": "^",
        "left": {
          "type": "Identifier",
          "start": 130,
          "end": 140,
          "decorators": [],
          "name": "numberType",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 143,
          "end": 150,
          "decorators": [],
          "name": "anyType",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 173,
      "expression": {
        "type": "BinaryExpression",
        "start": 154,
        "end": 172,
        "operator": "&",
        "left": {
          "type": "Identifier",
          "start": 154,
          "end": 162,
          "decorators": [],
          "name": "enumType",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 165,
          "end": 172,
          "decorators": [],
          "name": "anyType",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 193,
      "expression": {
        "type": "BinaryExpression",
        "start": 174,
        "end": 192,
        "operator": "|",
        "left": {
          "type": "Identifier",
          "start": 174,
          "end": 182,
          "decorators": [],
          "name": "enumType",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 185,
          "end": 192,
          "decorators": [],
          "name": "anyType",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 213,
      "expression": {
        "type": "BinaryExpression",
        "start": 194,
        "end": 212,
        "operator": "^",
        "left": {
          "type": "Identifier",
          "start": 194,
          "end": 202,
          "decorators": [],
          "name": "enumType",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 205,
          "end": 212,
          "decorators": [],
          "name": "anyType",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 223,
      "expression": {
        "type": "UnaryExpression",
        "start": 214,
        "end": 222,
        "argument": {
          "type": "Identifier",
          "start": 215,
          "end": 222,
          "decorators": [],
          "name": "anyType",
          "optional": false
        },
        "operator": "~",
        "prefix": true
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 243,
      "expression": {
        "type": "BinaryExpression",
        "start": 224,
        "end": 242,
        "operator": "<<",
        "left": {
          "type": "Identifier",
          "start": 224,
          "end": 232,
          "decorators": [],
          "name": "enumType",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 235,
          "end": 242,
          "decorators": [],
          "name": "anyType",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 263,
      "expression": {
        "type": "BinaryExpression",
        "start": 244,
        "end": 262,
        "operator": ">>",
        "left": {
          "type": "Identifier",
          "start": 244,
          "end": 252,
          "decorators": [],
          "name": "enumType",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 255,
          "end": 262,
          "decorators": [],
          "name": "anyType",
          "optional": false
        }
      }
    },
    {
      "type": "ExpressionStatement",
      "start": 264,
      "end": 284,
      "expression": {
        "type": "BinaryExpression",
        "start": 264,
        "end": 283,
        "operator": ">>>",
        "left": {
          "type": "Identifier",
          "start": 264,
          "end": 272,
          "decorators": [],
          "name": "enumType",
          "optional": false
        },
        "right": {
          "type": "Identifier",
          "start": 276,
          "end": 283,
          "decorators": [],
          "name": "anyType",
          "optional": false
        }
      }
    }
  ],
  "sourceType": "script"
}
```
