__ESTREE_TEST__:PASS:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "var",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "s",
            "optional": false,
            "typeAnnotation": null,
            "start": 4,
            "end": 5
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 8,
              "end": 14
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 8,
            "end": 16
          },
          "definite": false,
          "start": 4,
          "end": 16
        }
      ],
      "declare": false,
      "start": 0,
      "end": 17
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "delete",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 25,
            "end": 31
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "iterator",
            "optional": false,
            "typeAnnotation": null,
            "start": 32,
            "end": 40
          },
          "optional": false,
          "computed": false,
          "start": 25,
          "end": 40
        },
        "prefix": true,
        "start": 18,
        "end": 40
      },
      "directive": null,
      "start": 18,
      "end": 41
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "void",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 47,
            "end": 53
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toPrimitive",
            "optional": false,
            "typeAnnotation": null,
            "start": 54,
            "end": 65
          },
          "optional": false,
          "computed": false,
          "start": 47,
          "end": 65
        },
        "prefix": true,
        "start": 42,
        "end": 65
      },
      "directive": null,
      "start": 42,
      "end": 66
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "typeof",
        "argument": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 74,
            "end": 80
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "toStringTag",
            "optional": false,
            "typeAnnotation": null,
            "start": 81,
            "end": 92
          },
          "optional": false,
          "computed": false,
          "start": 74,
          "end": 92
        },
        "prefix": true,
        "start": 67,
        "end": 92
      },
      "directive": null,
      "start": 67,
      "end": 93
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "++",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 96,
          "end": 97
        },
        "start": 94,
        "end": 97
      },
      "directive": null,
      "start": 94,
      "end": 98
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UpdateExpression",
        "operator": "--",
        "prefix": true,
        "argument": {
          "type": "Identifier",
          "decorators": [],
          "name": "s",
          "optional": false,
          "typeAnnotation": null,
          "start": 101,
          "end": 102
        },
        "start": 99,
        "end": 102
      },
      "directive": null,
      "start": 99,
      "end": 103
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 106,
            "end": 112
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 106,
          "end": 114
        },
        "prefix": true,
        "start": 104,
        "end": 114
      },
      "directive": null,
      "start": 104,
      "end": 115
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "-",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 118,
            "end": 124
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 118,
          "end": 126
        },
        "prefix": true,
        "start": 116,
        "end": 126
      },
      "directive": null,
      "start": 116,
      "end": 127
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "~",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 130,
            "end": 136
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 130,
          "end": 138
        },
        "prefix": true,
        "start": 128,
        "end": 138
      },
      "directive": null,
      "start": 128,
      "end": 139
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "!",
        "argument": {
          "type": "CallExpression",
          "callee": {
            "type": "Identifier",
            "decorators": [],
            "name": "Symbol",
            "optional": false,
            "typeAnnotation": null,
            "start": 142,
            "end": 148
          },
          "typeArguments": null,
          "arguments": [],
          "optional": false,
          "start": 142,
          "end": 150
        },
        "prefix": true,
        "start": 140,
        "end": 150
      },
      "directive": null,
      "start": 140,
      "end": 151
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "UnaryExpression",
        "operator": "+",
        "argument": {
          "type": "LogicalExpression",
          "left": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "Symbol",
              "optional": false,
              "typeAnnotation": null,
              "start": 155,
              "end": 161
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 155,
            "end": 163
          },
          "operator": "||",
          "right": {
            "type": "Literal",
            "value": 0,
            "raw": "0",
            "start": 167,
            "end": 168
          },
          "start": 155,
          "end": 168
        },
        "prefix": true,
        "start": 153,
        "end": 169
      },
      "directive": null,
      "start": 153,
      "end": 170
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 170
}
```
