__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 388,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 45,
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 44,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
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
      "type": "IfStatement",
      "start": 47,
      "end": 103,
      "test": {
        "type": "BinaryExpression",
        "start": 51,
        "end": 78,
        "left": {
          "type": "MemberExpression",
          "start": 51,
          "end": 67,
          "object": {
            "type": "Identifier",
            "start": 51,
            "end": 55,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 56,
            "end": 67,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 72,
          "end": 78,
          "decorators": [],
          "name": "String",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 80,
        "end": 103,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 86,
            "end": 91,
            "expression": {
              "type": "Identifier",
              "start": 86,
              "end": 90,
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 104,
      "end": 160,
      "test": {
        "type": "BinaryExpression",
        "start": 108,
        "end": 135,
        "left": {
          "type": "MemberExpression",
          "start": 108,
          "end": 124,
          "object": {
            "type": "Identifier",
            "start": 108,
            "end": 112,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 124,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 129,
          "end": 135,
          "decorators": [],
          "name": "Number",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 137,
        "end": 160,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 143,
            "end": 148,
            "expression": {
              "type": "Identifier",
              "start": 143,
              "end": 147,
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 161,
      "end": 219,
      "test": {
        "type": "BinaryExpression",
        "start": 165,
        "end": 193,
        "left": {
          "type": "MemberExpression",
          "start": 165,
          "end": 181,
          "object": {
            "type": "Identifier",
            "start": 165,
            "end": 169,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 170,
            "end": 181,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 186,
          "end": 193,
          "decorators": [],
          "name": "Boolean",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 195,
        "end": 219,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 201,
            "end": 206,
            "expression": {
              "type": "Identifier",
              "start": 201,
              "end": 205,
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 220,
      "end": 274,
      "test": {
        "type": "BinaryExpression",
        "start": 224,
        "end": 250,
        "left": {
          "type": "MemberExpression",
          "start": 224,
          "end": 240,
          "object": {
            "type": "Identifier",
            "start": 224,
            "end": 228,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 229,
            "end": 240,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 245,
          "end": 250,
          "decorators": [],
          "name": "Array",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 252,
        "end": 274,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 258,
            "end": 263,
            "expression": {
              "type": "Identifier",
              "start": 258,
              "end": 262,
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 275,
      "end": 331,
      "test": {
        "type": "BinaryExpression",
        "start": 279,
        "end": 306,
        "left": {
          "type": "MemberExpression",
          "start": 279,
          "end": 295,
          "object": {
            "type": "Identifier",
            "start": 279,
            "end": 283,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 284,
            "end": 295,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 300,
          "end": 306,
          "decorators": [],
          "name": "Symbol",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 308,
        "end": 331,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 314,
            "end": 319,
            "expression": {
              "type": "Identifier",
              "start": 314,
              "end": 318,
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    },
    {
      "type": "IfStatement",
      "start": 332,
      "end": 388,
      "test": {
        "type": "BinaryExpression",
        "start": 336,
        "end": 363,
        "left": {
          "type": "MemberExpression",
          "start": 336,
          "end": 352,
          "object": {
            "type": "Identifier",
            "start": 336,
            "end": 340,
            "decorators": [],
            "name": "var1",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 352,
            "decorators": [],
            "name": "constructor",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 357,
          "end": 363,
          "decorators": [],
          "name": "BigInt",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "consequent": {
        "type": "BlockStatement",
        "start": 365,
        "end": 388,
        "body": [
          {
            "type": "ExpressionStatement",
            "start": 371,
            "end": 376,
            "expression": {
              "type": "Identifier",
              "start": 371,
              "end": 375,
              "decorators": [],
              "name": "var1",
              "optional": false,
              "typeAnnotation": null
            },
            "directive": null
          }
        ]
      },
      "alternate": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
