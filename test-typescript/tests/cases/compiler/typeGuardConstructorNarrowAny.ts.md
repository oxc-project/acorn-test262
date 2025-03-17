__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 31,
  "end": 389,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 31,
      "end": 45,
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 35,
          "end": 44,
          "id": {
            "type": "Identifier",
            "start": 35,
            "end": 44,
            "name": "var1",
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "start": 39,
              "end": 44,
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 41,
                "end": 44
              }
            },
            "decorators": [],
            "optional": false
          },
          "init": null,
          "definite": false
        }
      ],
      "kind": "let",
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
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 56,
            "end": 67,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 72,
          "end": 78,
          "name": "String",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 113,
            "end": 124,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 129,
          "end": 135,
          "name": "Number",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 170,
            "end": 181,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 186,
          "end": 193,
          "name": "Boolean",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 229,
            "end": 240,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 245,
          "end": 250,
          "name": "Array",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 284,
            "end": 295,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 300,
          "end": 306,
          "name": "Symbol",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
            "name": "var1",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 341,
            "end": 352,
            "name": "constructor",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "computed": false,
          "optional": false
        },
        "operator": "===",
        "right": {
          "type": "Identifier",
          "start": 357,
          "end": 363,
          "name": "BigInt",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
              "name": "var1",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
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
