__ESTREE_TEST__:PASS:
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
      "id": {
        "type": "Identifier",
        "start": 5,
        "end": 9,
        "name": "Enum",
        "typeAnnotation": null,
        "decorators": [],
        "optional": false
      },
      "members": [
        {
          "type": "TSEnumMember",
          "start": 12,
          "end": 20,
          "id": {
            "type": "Identifier",
            "start": 12,
            "end": 16,
            "name": "None",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "initializer": {
            "type": "Literal",
            "start": 19,
            "end": 20,
            "value": 0,
            "raw": "0"
          },
          "computed": false
        }
      ],
      "const": false,
      "declare": false,
      "body": {
        "type": "TSEnumBody",
        "start": 10,
        "end": 22,
        "members": [
          {
            "type": "TSEnumMember",
            "start": 12,
            "end": 20,
            "id": {
              "type": "Identifier",
              "start": 12,
              "end": 16,
              "name": "None",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "initializer": {
              "type": "Literal",
              "start": 19,
              "end": 20,
              "value": 0,
              "raw": "0"
            },
            "computed": false
          }
        ]
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
          "id": {
            "type": "Identifier",
            "start": 27,
            "end": 41,
            "name": "enumType",
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
                  "name": "Enum",
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
          "init": {
            "type": "MemberExpression",
            "start": 44,
            "end": 53,
            "object": {
              "type": "Identifier",
              "start": 44,
              "end": 48,
              "name": "Enum",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "property": {
              "type": "Identifier",
              "start": 49,
              "end": 53,
              "name": "None",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "computed": false,
            "optional": false
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 59,
            "end": 77,
            "name": "numberType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 69,
              "end": 77,
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 71,
                "end": 77
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 80,
            "end": 81,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
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
          "id": {
            "type": "Identifier",
            "start": 87,
            "end": 99,
            "name": "anyType",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 94,
              "end": 99,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 96,
                "end": 99
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "Literal",
            "start": 102,
            "end": 103,
            "value": 0,
            "raw": "0"
          },
          "definite": false
        }
      ],
      "kind": "var",
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 107,
      "end": 129,
      "expression": {
        "type": "BinaryExpression",
        "start": 107,
        "end": 128,
        "left": {
          "type": "Identifier",
          "start": 107,
          "end": 115,
          "name": "enumType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "^",
        "right": {
          "type": "Identifier",
          "start": 118,
          "end": 128,
          "name": "numberType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 130,
      "end": 151,
      "expression": {
        "type": "BinaryExpression",
        "start": 130,
        "end": 150,
        "left": {
          "type": "Identifier",
          "start": 130,
          "end": 140,
          "name": "numberType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "^",
        "right": {
          "type": "Identifier",
          "start": 143,
          "end": 150,
          "name": "anyType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 154,
      "end": 173,
      "expression": {
        "type": "BinaryExpression",
        "start": 154,
        "end": 172,
        "left": {
          "type": "Identifier",
          "start": 154,
          "end": 162,
          "name": "enumType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "&",
        "right": {
          "type": "Identifier",
          "start": 165,
          "end": 172,
          "name": "anyType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 174,
      "end": 193,
      "expression": {
        "type": "BinaryExpression",
        "start": 174,
        "end": 192,
        "left": {
          "type": "Identifier",
          "start": 174,
          "end": 182,
          "name": "enumType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "|",
        "right": {
          "type": "Identifier",
          "start": 185,
          "end": 192,
          "name": "anyType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 194,
      "end": 213,
      "expression": {
        "type": "BinaryExpression",
        "start": 194,
        "end": 212,
        "left": {
          "type": "Identifier",
          "start": 194,
          "end": 202,
          "name": "enumType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "^",
        "right": {
          "type": "Identifier",
          "start": 205,
          "end": 212,
          "name": "anyType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 214,
      "end": 223,
      "expression": {
        "type": "UnaryExpression",
        "start": 214,
        "end": 222,
        "operator": "~",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 215,
          "end": 222,
          "name": "anyType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 224,
      "end": 243,
      "expression": {
        "type": "BinaryExpression",
        "start": 224,
        "end": 242,
        "left": {
          "type": "Identifier",
          "start": 224,
          "end": 232,
          "name": "enumType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": "<<",
        "right": {
          "type": "Identifier",
          "start": 235,
          "end": 242,
          "name": "anyType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 244,
      "end": 263,
      "expression": {
        "type": "BinaryExpression",
        "start": 244,
        "end": 262,
        "left": {
          "type": "Identifier",
          "start": 244,
          "end": 252,
          "name": "enumType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": ">>",
        "right": {
          "type": "Identifier",
          "start": 255,
          "end": 262,
          "name": "anyType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 264,
      "end": 284,
      "expression": {
        "type": "BinaryExpression",
        "start": 264,
        "end": 283,
        "left": {
          "type": "Identifier",
          "start": 264,
          "end": 272,
          "name": "enumType",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
        },
        "operator": ">>>",
        "right": {
          "type": "Identifier",
          "start": 276,
          "end": 283,
          "name": "anyType",
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
