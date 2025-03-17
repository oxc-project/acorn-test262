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
      "declarations": [
        {
          "type": "VariableDeclarator",
          "start": 4,
          "end": 16,
          "id": {
            "type": "Identifier",
            "start": 4,
            "end": 5,
            "name": "s",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "init": {
            "type": "CallExpression",
            "start": 8,
            "end": 16,
            "callee": {
              "type": "Identifier",
              "start": 8,
              "end": 14,
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "definite": false
        }
      ],
      "kind": "var",
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
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 25,
          "end": 40,
          "object": {
            "type": "Identifier",
            "start": 25,
            "end": 31,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 32,
            "end": 40,
            "name": "iterator",
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
      "start": 42,
      "end": 66,
      "expression": {
        "type": "UnaryExpression",
        "start": 42,
        "end": 65,
        "operator": "void",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 47,
          "end": 65,
          "object": {
            "type": "Identifier",
            "start": 47,
            "end": 53,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 54,
            "end": 65,
            "name": "toPrimitive",
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
      "start": 67,
      "end": 93,
      "expression": {
        "type": "UnaryExpression",
        "start": 67,
        "end": 92,
        "operator": "typeof",
        "prefix": true,
        "argument": {
          "type": "MemberExpression",
          "start": 74,
          "end": 92,
          "object": {
            "type": "Identifier",
            "start": 74,
            "end": 80,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "property": {
            "type": "Identifier",
            "start": 81,
            "end": 92,
            "name": "toStringTag",
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
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
          "name": "s",
          "typeAnnotation": null,
          "decorators": [],
          "optional": false
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
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 106,
          "end": 114,
          "callee": {
            "type": "Identifier",
            "start": 106,
            "end": 112,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
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
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 118,
          "end": 126,
          "callee": {
            "type": "Identifier",
            "start": 118,
            "end": 124,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
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
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 130,
          "end": 138,
          "callee": {
            "type": "Identifier",
            "start": 130,
            "end": 136,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
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
        "prefix": true,
        "argument": {
          "type": "CallExpression",
          "start": 142,
          "end": 150,
          "callee": {
            "type": "Identifier",
            "start": 142,
            "end": 148,
            "name": "Symbol",
            "typeAnnotation": null,
            "decorators": [],
            "optional": false
          },
          "arguments": [],
          "optional": false,
          "typeArguments": null
        }
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
        "prefix": true,
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
              "name": "Symbol",
              "typeAnnotation": null,
              "decorators": [],
              "optional": false
            },
            "arguments": [],
            "optional": false,
            "typeArguments": null
          },
          "operator": "||",
          "right": {
            "type": "Literal",
            "start": 167,
            "end": 168,
            "value": 0,
            "raw": "0"
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
