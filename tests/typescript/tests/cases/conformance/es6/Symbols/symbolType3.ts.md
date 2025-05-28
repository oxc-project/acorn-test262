__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "start": 0,
  "end": 170,
  "body": [
    {
      "type": "VariableDeclaration",
      "start": 0,
      "end": 17,
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 16,
            "callee": {
              "type": "Identifier",
              "start": 8,
              "end": 14,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "definite": false
        }
      ],
      "declare": false
    },
    {
      "type": "ExpressionStatement",
      "start": 18,
      "end": 41,
      "expression": {
        "type": "UnaryExpression",
        "start": 18,
        "end": 40,
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "start": 25,
          "end": 40,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 31,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 40,
            "decorators": [],
            "name": "iterator",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 42,
      "end": 66,
      "expression": {
        "type": "UnaryExpression",
        "start": 42,
        "end": 65,
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "start": 47,
          "end": 65,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 53,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 54,
            "end": 65,
            "decorators": [],
            "name": "toPrimitive",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 67,
      "end": 93,
      "expression": {
        "type": "UnaryExpression",
        "start": 67,
        "end": 92,
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "start": 74,
          "end": 92,
          "object": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "property": {
            "type": "Identifier",
            "start": 81,
            "end": 92,
            "decorators": [],
            "name": "toStringTag",
            "optional": false,
            "typeAnnotation": null
          },
          "optional": false,
          "computed": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 94,
      "end": 98,
      "expression": {
        "type": "UpdateExpression",
        "start": 94,
        "end": 97,
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 96,
          "end": 97,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 99,
      "end": 103,
      "expression": {
        "type": "UpdateExpression",
        "start": 99,
        "end": 102,
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "start": 101,
          "end": 102,
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null
        }
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 104,
      "end": 115,
      "expression": {
        "type": "UnaryExpression",
        "start": 104,
        "end": 114,
        "operator": "+",
        "argument": {
          "type": "CallExpression",
          "start": 106,
          "end": 114,
          "callee": {
            "type": "Identifier",
            "start": 106,
            "end": 112,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 116,
      "end": 127,
      "expression": {
        "type": "UnaryExpression",
        "start": 116,
        "end": 126,
        "operator": "-",
        "argument": {
          "type": "CallExpression",
          "start": 118,
          "end": 126,
          "callee": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 128,
      "end": 139,
      "expression": {
        "type": "UnaryExpression",
        "start": 128,
        "end": 138,
        "operator": "~",
        "argument": {
          "type": "CallExpression",
          "start": 130,
          "end": 138,
          "callee": {
            "type": "Identifier",
            "start": 130,
            "end": 136,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 140,
      "end": 151,
      "expression": {
        "type": "UnaryExpression",
        "start": 140,
        "end": 150,
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "start": 142,
          "end": 150,
          "callee": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false
        },
        "prefix": true
      },
      "directive": null
    },
    {
      "type": "ExpressionStatement",
      "start": 153,
      "end": 170,
      "expression": {
        "type": "UnaryExpression",
        "start": 153,
        "end": 169,
        "operator": "+",
        "argument": {
          "type": "LogicalExpression",
          "start": 155,
          "end": 168,
          "left": {
            "type": "CallExpression",
            "start": 155,
            "end": 163,
            "callee": {
              "type": "Identifier",
              "start": 155,
              "end": 161,
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false
          },
          "operator": "||",
          "right": {
            "type": "Literal",
            "start": 167,
            "end": 168,
            "value": 0,
            "raw": "0"
          }
        },
        "prefix": true
      },
      "directive": null
    }
  ],
  "sourceType": "script",
  "hashbang": null
}
```
